const express = require('express');
const noteRouter = express.Router();

noteRouter.get('/',(req,res)=>{
    res.send('This is Note GET');
});

noteRouter.post('/',(req,res)=>{
    res.send('This is Note POST');
});

module.exports = noteRouter;