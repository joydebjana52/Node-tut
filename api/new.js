const dbConnect = require('./mongod');
const mongodb = require('mongodb');
const express = require('express');
const app = express();

app.use(express.json());

app.get("/",async(req,res)=>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    res.send(data);
});

app.post('/',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.insert(
        {name:"laptop 11b",brand:"hp",price:478,catagory:"laptop"}
    );
    res.send(result);
});

app.put('/:name',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.update(
        {name:req.params.name}, // condition
        {$set:{price:450}}
    );
    res.send(result);
});

app.delete('/:id',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    res.send(result);
});

app.listen(6789);