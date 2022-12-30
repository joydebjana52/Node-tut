const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine','ejs');

app.get('/',(_req,res)=>{
    res.send('Home page');
});
app.get('/register',(req,res)=>{
    res.render('register.ejs');
});
app.get('/demo',(req,res)=>{
    res.redirect('register');
});

// Get form's data using GET method...
app.get('/form-submit',(req,res)=>{
    res.send(req.query);
});

// Get form's data using POST method...
// app.use(bodyParser.json());
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

app.post('/form-submit',(req,res)=>{
    res.send(req.body);
});

app.listen(1234);

// const MongoClien = require('mongodb').MongoClient;