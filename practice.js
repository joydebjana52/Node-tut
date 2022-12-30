const express = require('express');
const student = require('./user');
const app = express();

app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.send('Home page');
})

app.get('/student',(req,res)=>{
    res.render('practice',{student});
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('*',(req,res)=>{
    res.send('Oops 404 not found !');
});

app.listen(1234);