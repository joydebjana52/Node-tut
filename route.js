const express = require('express');
const app = express();
const middleware = require('./middleware');
const route = express.Router();

route.use(middleware);

app.get('/',(req,res)=>{
    res.send('This is Home page');
});
app.get('/about',(req,res)=>{
    res.send('This is about us page');
});

route.get('/contact',(req,res)=>{
    res.send('This is Contact Us page');
});

app.use('/',route);
app.listen(1234);