const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');

// const pubPath = path.join(__dirname,'public');

app.get('',(req,res)=>{
    res.render('index');
});
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/login',(req,res)=>{
    res.render('loginpage');
});

app.listen(1122);