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

    try {
    const { id } = req.params;
    const result = await db.collection("hikertrails").findOne({_id: ObjectId(id)});

    return result
        ? res.status(200).json({ 
            status: 200, 
            _id, 
            data: result })
        : res.status(404).json({ 
            status: 404, 
            _id, 
            data: "Not found" });
    } catch (err) {
        res.status(500).json({
            status: 500,
            data: req.body,
            message: err.message
        })
    } finally {
    client.close();
    }
};

module.exports = {
    getHikerTrails,
    getHikerTrail
}