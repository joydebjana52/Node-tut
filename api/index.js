const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

// Applying GET API ...  To Get some Stored data from Database...
app.get('/',async(req,res)=>{
    let data = await dbConnect();
    data = await data.find({name:'iPhone XR'}).toArray();
    res.send(data);
});

// Applying POST API ... To Store some data in Database...
app.post('/',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.insert({
        name : "iPhone XR",
        brand:"apple",
        price:916,
        catagory:"mobile"
    });
    if(result.acknowledged)
    {
        res.send('Data stored');
    }
});

// Applying PUT API ...
app.put('/:name',async(req,res)=>{  // This name is same as req.params."name" 
    // console.log(req.body);
    // res.send('Hello');
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.params.name},
        {$set:{price:157}}
    );
    res.send(result);
});


// Applying DELETE API ...
app.delete('/:id',async(req,res)=>{
    console.log(`Id is : ${req.params.id}`);
    let data = await dbConnect();
    const result = await data.deleteOne({_id:mongodb.ObjectId(req.params.id)});
    res.send(result);
});

app.listen(5500);