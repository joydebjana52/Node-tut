const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');

app.use('/users',userRouter);
app.use('/notes',noteRouter);

mongoose.connect('mongodb+srv://admin:admin@cluster0.lrtqpyj.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4000,()=>{
        console.log('Server is running on port : 4000');
    })
})
.catch((error)=>{
    console.log(error);
})

app.get('/',(req,res)=>{
    res.send('This is root url')
});