const mongoose = require("../connection")

const TransactionTicketSchema = new mongoose.Schema(
    {

    }
)



const TransactionTicket = mongoose.model("TransactionTicket", TransactionTicketSchema)
module.exports = TransactionTicket 