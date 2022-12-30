const express = require('express');
const app = express();

app.get('' , (req,res)=>{
    res.send(`
        <input type='text' placeholder='your name' value=${req.query.name}>
    `);
});

app.listen(1000);