/*
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand : String,
    catagory : String
});

const saveInDB = async()=>{
    const productsModel = new mongoose.model('products',productSchema);
    let data = new productsModel({name:"m8",price:1000});
    let result = await data.save();
    console.log(result);
}

const updateInDB = async()=>{
    const productsModel = new mongoose.model('products',productSchema);
    let data = await productsModel.updateOne(
        {name : 'M 2 Pro'},
        {
            $set : {price : 190,name : 'm2 Pro '}
        }
    );
    console.log(data);
};

const deleteInDB = async()=>{
    const productsModel = new mongoose.model('products',productSchema);
    let result = await productsModel.deleteOne(
        {name : 'm8'}
    );
    console.log(result);
};
// deleteInDB();
const findInDB = async()=>{
    const productsModel = new mongoose.model('products',productSchema);
    let data = await productsModel.find(
        // {name : '7 pro'}
        {}
    );
    console.log(data);
};

findInDB();
*/



const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    catagory : String
});

const saveInDB = async()=>{
    const productsModel = new mongoose.model('products',productSchema);
    const data = new productsModel({name : 'iPhone se',price : 874,brand : 'apple',catagory : 'mobile'});
    let result = await data.save();
    console.log((result));
};

// saveInDB();

const updateInDB = async()=>{
    const productsModel = new mongoose.model('products',productSchema);
    let result = await productsModel.update(
        {name : 'iPhone XR'},
        {$set : {price : 699}}
    );
    console.log(result);
};

// updateInDB();


const deleteInDB = async()=>{
    const productsModel = new mongoose.model('products',productSchema);
    const result = await productsModel.deleteOne({name : 'GT ME 5G'});
    console.log(result);
};
// deleteInDB();


const readInDB = async()=>{
    const productsModel = new mongoose.model('products',productSchema);
    const data = await productsModel.find({});
    console.log(data);
};
readInDB();