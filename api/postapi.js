const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

// Middleware...
app.use(express.json());

app.post('/',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.insert(req.body);
    res.send(result);
});

app.listen(5001);