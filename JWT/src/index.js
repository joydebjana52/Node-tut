const express = require('express');
const app = express();
const userRouter = require('./routes/userRoute');
const noteRouter = require('./routes/noteRouter');

app.use('/user',userRouter);
app.use('/note',noteRouter);

app.get('/',(req,res)=>{
    res.send('This is root page');
})

app.listen(1000);