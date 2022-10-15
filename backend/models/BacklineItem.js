const mongoose = require("../connection")

const BacklineItemSchema = new mongoose.Schema(
    {
        itemName: String,
        itemType: String,
        barcodeText: String,
        rentalCompany: String,
        currentCondition: String,
        miscNotes: String,
        status: {
            checkedOut: Boolean,
            currentLocation: String,
            currentOwner: String,
        },
    },
    {
        timestamps: true
    }
)

const BacklineItem = mongoose.model("BacklineItem", BacklineItemSchema)
module.exports = BacklineItem

// TBD: might need to edit this schema to include barcode img file depending on how Barcode Node package works. 

