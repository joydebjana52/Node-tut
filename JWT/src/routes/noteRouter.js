const express = require('express');
const noteRouter = express.Router();

noteRouter.get('/',(req,res)=>{
    res.send('Note Get method');
})
noteRouter.post('/',(req,res)=>{
    res.send('Note Post method');
})

module.exports = noteRouter;