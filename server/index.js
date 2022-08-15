const express = require('express')
const PORT = 8000
const myTrailRoutes = require("./routes/MyTrails")

express()

//middleware
.use(express.json())
.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
    .use("/api/mytrails", myTrailRoutes)
//MY CODE

//listen for requests
    .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
    })


    