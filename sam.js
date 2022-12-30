const express = require('express');
const app = express();
const route = express.Router();
const middleware = require('./middleware');

route.use(middleware);

app.get('/',(req,res)=>{
    res.send('Home page');
});
app.get('/about us',(req,res)=>{
    res.send('This is About us page');
});
route.get('/contact',(req,res)=>{
    res.send('This is Contact US page');
});
route.get('/profile',(req,res)=>{
    res.send('This is profile page');
});
// app.get('*',(req,res)=>{
//     res.send('<center><h1>Oops! 404 page not found</h1></center><hr/>');
// });

app.use('/',route);

app.listen(1357);