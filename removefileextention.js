const express = require('express');
const path = require('path');

const app = express();
const publicP = path.join(__dirname,'public');

// app.use(express.static(publicP));

app.get('',(req,res)=>{
    res.sendFile(`${publicP}/index.html`);
});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicP}/about.html`);
});

app.get('*',(req,res)=>{
    res.sendfile(`${publicP}/notfound.html`);
});

app.listen(1240);