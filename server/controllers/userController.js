const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//login user
const loginUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("HikerSpecs");
    
    await client.connect();
    const { id } = req.params
    const loginUser = await db.collection("users").findOne({_id: ObjectId(id)})
    res.status(200).json({
        status: 200,
        data: loginUser,
    })
}

// signup user
const signupUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("HikerSpecs");
    const { 
        id, 
        email, 
        password } = req.body;
    const exists = await db.collection("users").findOne({email});
    if (exists) {
        res.status(200).json({
            status: 200,
            data: req.body,
            message: "User already in use"
        })
    } else {
            const add = await db.collection("users").insertOne(req.body)
            if (add.acknowledged) {
                res.status(200).json({
                    status: 200,
                    data: add,
                    message: "User created"
                })
            const user = await db.collection("users").insertOne(req.body)

            res.status(200).json({email, user})
        } 
    }
}

module.exports = {
    loginUser,
    signupUser,
}