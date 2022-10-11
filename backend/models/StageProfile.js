const mongoose = require("../connection")

const StageProfileSchema = new mongoose.Schema(
    {
        stageName: String,
        manager: {
            firstName: String,
            lastName: String, 
            email: String,
            phone: String
        },
        intern: {
            firstName: String,
            lastName: String,
            email: String,
            phone: String
        }
    })

    const StageProfile = mongoose.model("ManagerProfile", StageProfileSchema)
    module.exports = StageProfile