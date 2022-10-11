const mongoose = require("mongoose")
const db = mongoose.connection
require("dotenv").config()

mongoose.connect(provess.env.DATABASE_URL, { useNewUrlParser: true })

db.on("error", err => console.log(err.message + " is Mongod not running?"))
db.on("connected", () => console.log("Mongo connected at port 8000"))
db.on("disconnected", () => console.log("mongo disconnected"))

db.on("open", () => console.log("Mongo connection very nice!"))

module.exports = mongoose