const express = require('express')
const PORT = 8000
const myTrailRoutes = require("./routes/MyTrails")
const userRoutes = require("./routes/user")
const hikerRoutes = require("./routes/hikerTrails")

express()

//middleware
.use(express.json())
.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
    .use("/api/mytrails", myTrailRoutes)
    .use("/api/user", userRoutes)
    .use("/api/hikertrails", hikerRoutes)

//listen for requests
    .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
    })


    