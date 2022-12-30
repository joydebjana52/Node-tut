const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const user = {
    name:'Joydeb Jana',
    age:19
}
const securityKey = 'securityKey';

app.get('/',(req,res)=>{
    res.send('This is Home page');
})


app.post('/login',(req,res)=>{
    jwt.sign({user},securityKey,{expiresIn:'120s'},(err,token)=>{
        res.json({
            token
        })
    })
})

app.post('/profile',verifyToken,(req,res)=>{

});

function verifyToken(req,res,next){

}

app.listen(7000);