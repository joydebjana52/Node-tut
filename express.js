const express = require('express');
const app = express();

app.get('',(req,res)=>{
    // res.send(`Hello! ${req.query.name} how are you ?`);
    res.send(
        {
            name : 'Joydeb Jana' ,
            email: 'janajoydeb083@gmail.com'
        }
    );
});

app.listen(1357);