const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.post('/',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.insert(req.body);
    if(result.acknowledged)
    {
        res.send('Data inserted');
    }
});

app.listen(5001);