const express = require('express');
const EventEmitter = require('events');
const app = express();

const event = new EventEmitter();

app.get('/',(req,res)=>{
    res.send('API called');
});

app.get('/search',(req,res)=>{
    res.send('search API called');
});

app.get('/update',(req,res)=>{
    res.send('update API called');
});

app.listen(9900);