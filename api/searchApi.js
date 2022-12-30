const express = require('express');
const Product = require('../product');
require('../config');
const app = express();

app.use(express.json());

app.get('/search/:key',async(req,res)=>{
    console.log(req.params.key);
    let data = await Product.find( // we're useing RegEX for Searching...
        {
            "$or" : [
                { "brand" : {$regex:req.params.key}},
                { "name" : {$regex :req.params.key}}
            ]
        }
    );
    res.send(data);
});

app.listen(7000);