const mongoose = require("mongoose")
const db = mongoose.connection
require("dotenv").config()

mongoose.connect(provess.env.DATABASE_URL, { useNewUrlParser: true })