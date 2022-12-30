const express = require('express');
const userRouter = express.Router();

userRouter.post('/signup',(req,res)=>{
    res.send('This is Sign Up');
})
userRouter.post('/signin',(req,res)=>{
    res.send('This is Sign Up');
})

module.exports = userRouter;