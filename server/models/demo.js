const mongoose = require("mongoose");

const Demo = new mongoose.Schema({
    firstName: {
        type :String,
        require: [true, "firstName in valid"]
    },
    lastName: {
        type :String,
        require: [true, "lastName in valid"]
    }
})
module.exports = mongoose.model('Demo', Demo);