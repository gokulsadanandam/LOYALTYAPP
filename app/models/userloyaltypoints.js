var mongoose = require('mongoose')

var loyaltypoints = new mongoose.Schema({
    "loyaltytracker": String,
    "loyaltypoints": Number
})

module.exports = mongoose.model("userloyaltypoints",loyaltypoints)