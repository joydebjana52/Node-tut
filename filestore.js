const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.json());

const fileUpload = multer({
    storage:multer.diskStorage({
        destination:function(req,res,cb){
            cb(null,'uploads');
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"_"+Date.now()+".jpg");
        }
    })
}).single('user_file');

app.post('/',(req,res)=>{
    res.send('This is a Home page');
});

app.post('/upload',fileUpload,(req,res)=>{
    res.send('Successfully uploaded file');
});

app.listen(7797);