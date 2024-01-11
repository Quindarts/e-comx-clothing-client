const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const createDemo = require("../../controllers/demo.controller")
// const demoCheckString1 = require("../../middlewares/demo.middleware")
//
const Product = require('../../models/product');

//
router.get('/item:slug', async (req, res) => {
    try {
        const slug = req.params.slug;
        const productDocResult = await Product.findOne({ slug, isActive: true });
    }
    catch (error) {
        console.log(error);
    }
})
router.post('/demo', createDemo, async (req, res, next) => {
    console.log("🚀 ~ file: demo.middleware.js:2 ~ demoCheckString ~ req 111111111111111111111:")
    next()
}, async (req, res, next) => {
    console.log("🚀 ~ file: demo.middleware.js:2 ~ demoCheckString ~ req 22222222:")
    next()
})
module.exports = router;
