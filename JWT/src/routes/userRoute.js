const express = require('express');
const userRouter = express.Router();

userRouter.post('/signin',(req,res)=>{
    res.send('This is Sign in');
});
userRouter.post('/signup',(req,res)=>{
    res.send('This is Sign up');
})

module.exports = userRouter;