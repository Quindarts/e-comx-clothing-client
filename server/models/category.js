const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    total:{
        type: Number,
        require: true,
    },
    description:{
        type: String,
        require: true
    }
});
module.exports = mongoose.model('Category',CategorySchema);