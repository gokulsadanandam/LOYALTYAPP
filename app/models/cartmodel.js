var mongoose = require('mongoose')

var usercartdetails = new mongoose.Schema({
    "loyaltytracker": String,
    "cart": Object
})

module.exports = mongoose.model("carts", usercartdetails)