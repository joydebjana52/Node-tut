const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.send('Hello This is Home page');
});
app.get('/',(req,res)=>{
    res.send('Hello This is Home page');
});

app.get('/login',(req,res)=>{
    res.render('loginpage');
});

app.listen(1122);