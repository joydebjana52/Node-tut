const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

// app.use(express.static(publicPath));

app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

app.get('/profile',(_,res)=>{
    const user = {
        name : 'Joydeb' ,
        age : 20 ,
        email : 'janajoydeb083@gmail.com' 
    };
    res.render('profile',{user});
});

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/notfound.html`);
});

app.listen(9696);