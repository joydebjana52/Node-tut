const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const dotenv = require('dotenv');
const cors = require('cors'); // It's a middle-ware

const mongoose = require('mongoose');

dotenv.config(); // It's used to read the config file.

app.use(express.json()); // It's also a middleware.

app.use(cors()); // It'll add a header to all responses.

app.use('/users',userRouter);
app.use('/note',noteRouter);

app.get('/',(req,res)=>{
    res.send('Notes form Joydeb Jana');
});

const PORT = process.env.PORT || 5000 ;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{ // If connection builds successfully then "then()" block
    app.listen(PORT,()=>{
        console.log('Server is running on port : '+PORT);
    });
})
.catch((error)=>{ // If any fault in connection establishing then "catch()" block
    console.log(error);
});


//  -----------------------------------------------------------------------------------
/*
app.get('/quote',(req,res)=>{
    res.status(200).json(quotes); // res.json(quotes)
})

app.get('/random',(req,res)=>{
    let index = Math.floor(Math.random()*quotes.length)
    const quote = quotes[index]; 
    res.status(200).json(quote);
})
*/