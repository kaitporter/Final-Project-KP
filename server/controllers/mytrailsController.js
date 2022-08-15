
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
// const { myTrails } = require("../models/mytrailsModel");

// const myTrails = require("../models/mytrailsModel")

// get all workouts
const getMyTrails = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("HikerSpecs");
    const myTrails = await db.collection("mytrails").find().toArray();
    res.status(200).json(myTrails)
}
// Working but does not return/recognize ids
// get a single workout
const getMyTrail = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("HikerSpecs");
    await client.connect();

    const { id } = req.params
    const myTrail = await db.collection("mytrails").findOne({id})
    if (!myTrail) {
        return res.status(404).json({
            error: "Trail does not exist"
        })
    }
    res.status(200).json(myTrail)
}

// create a new workout
const createMyTrail = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("HikerSpecs");
    const { _id, Trail, AverageTime, DistanceMI, DistanceKM, Start, Difficulty, Specs} = req.body 
        // try {
    //     await client.connect();
    //     const myNewTrail = await db.collection("mytrails").insertOne(req.body);
    //     res.status(201).json({
    //         status: 201,
    //         data: myNewTrail
    //     })
    // } catch (err) {
    //     res.status(500).json({
    //         status: 500,
    //         data: req.body,
    //         message: err.message
    //     })
    // }
    //add doc to db
    try {
        await client.connect();
        const myNewTrail = await db.collection("mytrails").insertOne({ _id, Trail, AverageTime, DistanceMI, DistanceKM, Start, Difficulty, Specs});
        res.status(201).json(myNewTrail)
    } catch (err) {
        res.status(500).json({
            status: 500,
            data: req.body,
            message: err.message
        })
    }
    client.close();
    console.log("disconnected!")
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("HikerSpecs");
    // await client.connect();

    const { id } = req.params
    const myTrail = await db.collection("mytrails").deleteOne({ id })
    if (!myTrail) {
        return res.status(500).json({
            error: "Cannot delete"
        })
    }
    res.status(200).json(myTrail)
}

// update a workout
const updateMyTrail = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("HikerSpecs");
    const { id } = req.params;
    const query = { id };
    const newValues = { $set: { ...req.body } };

    // const myTrail = await db.collection("mytrails").updateOne(query, newValue)
    const myTrail = await db.collection("mytrails").updateOne(query, newValues)
    if (!myTrail) {
        return res.status(400).json({error: "cannot update"})
    }
    res.status(200).json(myTrail)
}

module.exports = {
    createMyTrail,
    getMyTrails,
    getMyTrail,
    deleteWorkout,
    updateMyTrail,
}