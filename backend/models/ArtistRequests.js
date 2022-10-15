const mongoose = require("../connection")

const ArtistPickSchema = new mongoose.Schema(
    {
        manager: {
            firstName: String,
            lastName: String,
            email: String,
            phoneNumber: String
        },
        artistName: String,
        performanceDate: [String], 
        performanceTime: [String],
        performanceLocation: [String],
        backlineRequests: {
            deck: {
                quantity: Number,
                priorityOne: String,
                priorityTwo: String,
                priorityThree: String
            },
            turntable: {
                quantity: Number,
                priorityOne: String,
                priorityTwo: String,
                priorityThree: String,
                needle: {
                    priorityOne: String,
                    priorityTwo: String,
                    priorityThree: String
                }
            },
            mixer: {
                priorityOne: String,
                priorityTwo: String,
                priorityThree: String
            },
            isolator: {
                priorityOne: String,
                priorityTwo: String,
                priorityThree: String
            },
            effectsProcessor: {
                priorityOne: String,
                priorityTwo: String,
                priorityThree: String
            },
            microphone: {
                quantity: Number
            },
            setupConfig: {
                heightRequirement: String,
                gearStand: [String],
                miscRequests: String
            }
        },
        soundcheck: {
            requested: Boolean,
            availability: String
        }
    }
)