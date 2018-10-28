var mongoose = require('mongoose')

var order = new mongoose.Schema({
    "loyaltytracker": String,
    "order": Object,
    "shippingaddress":String,
    "id":String
})


module.exports = mongoose.model("orders", order)