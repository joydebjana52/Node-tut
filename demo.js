const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.set('view engine','ejs');

const publicPath = path.join(__dirname,'public');

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/home.html`);
});

// const user = {
//     name : 'Joydeb Jana' ,
//     age : 20 ,
//     roll : 201198115 ,
//     mail : 'joydebjana52@gmail.com'
// };
const user = require('./user');

app.get('/profile',(req,res)=>{

    res.render('profile',{user});
});

app.listen(2002);