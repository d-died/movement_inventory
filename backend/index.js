const express = require("express")
const app = express()
app.set("port", 8000)


////////////////////////////
// MIDDLEWARE
////////////////////////////
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


////////////////////////////
// ROUTES
////////////////////////////


////////////////////////////
// CONTROLLERS
////////////////////////////


////////////////////////////
// START SERVER
////////////////////////////
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || "Internal Server Error"
    res.status(statusCode).send(message)
})

app.listen(app.get("port"), () => {
    console.log(`Started server on port ${ port }`)
})

