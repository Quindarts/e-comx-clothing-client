const mongoose = require("mongoose");
const { Schema } = mongoose;

const error_mess_productSchema = [
    { size: "Please Enter Product Size" },
    { coupon: "Please Enter Coupon" },
    { name: "Please Enter Product Name" },
    { code: "Please Enter Product Code" },
    { price: "Please Enter Product Price" },
    { category: "Please Enter Product Category" },
    { provider: "Please Enter Product Provider" },
    { warehouse: "Please Enter Product Warehouse" },
]

const ProductSchema = new Schema({
    size: {
        type: String,
        maxLength: 5,
        uppercase: true
    },
    code: {
        type: String,
        require: [true, error_mess_productSchema.code],
        lowercase: true,
        maxLength: 8
    },
    coupon: {
        type: Schema.Types.ObjectId,
        require: [true, error_mess_productSchema.coupon],
        ref: "Coupon",
    },
    name: {
        type: String,
        require: [true, error_mess_productSchema.name],
    },
    image: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    price: {
        type: Number,
        require: [true, error_mess_productSchema.price],
    },
    available: {
        type: Number,
        default:0,
    },
    description: {
        type: String,
        maxLength: 300,
    },
    tags: {
        type: Schema.Types.Array,
    },
    trademark: {
        type: String,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        require: [true, error_mess_productSchema.category],

    },
    provider: {
        type: Schema.Types.ObjectId,
        require: [true, error_mess_productSchema.provider],

    },
    totalReview: {
        type: Number,
        default: 0
    },
    warehouse: {
        type: Schema.Types.ObjectId,
        require: [true, error_mess_productSchema.warehouse],
        ref: "Warehouse"
    }
});
module.exports = mongoose.model('Product', ProductSchema);