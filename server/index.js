const express = require('express')
const PORT = 8000
const myTrailRoutes = require("./routes/MyTrails")

//MY CODE
/////////
// const {
//     createMyTrail,
//     grabMySingleTrail,
//     createMyNewTrail,
//     deleteMyTrail,
//     updateMyTrail
// } = require("./routes/MyTrails")

express()

//middleware
.use(express.json())
.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//MY CODE
/////////
// .use(morgan("tiny"))
// .use(express.static("public"))
// .use(express.json())
// .use(express.urlencoded({ extended: false }))
// .use("/", express.static(__dirname + "/"))

//routes
    .use("/api/mytrails", myTrailRoutes)
//MY CODE
/////////
    // .get("/", createMyTrail)
    // .get("/:id", grabMySingleTrail)
    // .post("/MyTrails", createMyNewTrail)
    // .delete("/:id", deleteMyTrail)
    // .patch("/:_id", updateMyTrail)

    // .get('/', (req, res) => {
    // res.send('Hello World!')
    // })

//listen for requests
    .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
    })


    