
// const { MongoClient } = require("mongodb");
require("dotenv").config();
// const { MONGO_URI } = process.env;

const { myTrails } = require("../models/mytrailsModel");

const express = require("express")

const {
    createMyTrail,
    getMyTrails,
    getMyTrail,
    deleteTrail,
    updateMyTrail,
} = require("../controllers/mytrailsController")

const router = express.Router()

//GET all myTrails
router.get("/", getMyTrails)

//GET a single myTrails
router.get("/:id", getMyTrail)

//POST a new myTrails
router.post("/", createMyTrail)

//DELETE a new myTrails
router.delete("/:id", deleteTrail)

//PATCH a new myTrails
router.patch("/:id", updateMyTrail)

module.exports = router 