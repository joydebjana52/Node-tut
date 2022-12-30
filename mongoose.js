const mongoose = require('mongoose');

const myApp = async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm');
    const myProductSchema = new mongoose.Schema({
        name:String,
        // name: { type: String, required: true , index: { unique : true }},
        // name: { type: String, required: true, index: { unique: true } },
        price: { type : Number},
        brand: { type : String},
        catagory: { type : String}
    });
    const myProductModel = new mongoose.model('products',myProductSchema);
    let product = new myProductModel({name:"GT ME 5G",price:331,brand:"realme",catagory:"mobile"});
    let result = await product.save((err)=>{
        if(err)
        {
            // throw err;
            console.log('Product already exists');
            return;
        }
        console.log('Data saved');
    });
    console.log(result);
};

myApp();