const express = require("express")

//controller functions
const { 
    getHikerTrails, 
    getHikerTrail 
} = require("../controllers/hikerTrailsController")

const router = express.Router()

//every trail route
router.get('/', getHikerTrails)

//single trail route
router.get('/:id', getHikerTrail)


module.exports = router