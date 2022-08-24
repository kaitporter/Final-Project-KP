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
    const { 
        _id, 
        email, 
        password } = req.body;

    const user = await db.collection("users").findOne({ email });
    if (user) {
        res.status(200).json({
            status: 200,
            data: user,
            message: "They exist!"
        })
    } else {
        const add = await db.collection("users").insertOne({
            _id,
            email,
            password
        })
        if (add.acknowledged) {
            res.status(200).json({
                status: 200,
                data: addUser,
                message: "User created!"
            })
        } else {
        return res.status(500).json({
            message: "unknown error"
        })
    } 
    }
}

//signup user
// const signupUser = async (req, res) => {
//     const client = new MongoClient(MONGO_URI, options);
//     const db = client.db("HikerSpecs");
//     res.json({mssg: "signupUser user"})
// }

module.exports = {
    loginUser,
    // signupUser,
}