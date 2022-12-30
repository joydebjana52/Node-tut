const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    catagory : String
});

const productModel = new mongoose.model('products',productSchema);

module.exports = productModel;