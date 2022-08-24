const express = require("express")

//controller functions
const { 
    getHikerTrails, 
    getHikerTrail 
} = require("../controllers/hikerTrailsController")

const router = express.Router()

//every trail route
router.post('/', getHikerTrails)

//single trail route
router.post('/:id', getHikerTrail)


module.exports = router