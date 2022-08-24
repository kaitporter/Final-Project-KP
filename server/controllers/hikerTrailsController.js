const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//get all trails
const getHikerTrails = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("HikerSpecs");
    const myTrails = await db.collection("hikertrails").find().toArray();
    res.status(200).json(myTrails)
};


//get a single trail
const getHikerTrail = async (req, res) => {
    // res.status(200).json("bacon");
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("HikerSpecs");
    await client.connect();

    const { id } = req.params;
    const result = await db.collection("hikertrails").findOne({_id: ObjectId(id)});
    console.log(result)
    if (!result) {
        return res.status(404).json({
            error: "Trail does not exist"
        })
    }
    res.status(200).json(result)
};

module.exports = {
    getHikerTrails,
    getHikerTrail
}