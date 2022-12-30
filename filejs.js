const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.json());

const fileUploading = multer({
    storage:multer.diskStorage({
        destination:function(req,res,cb)
        {
            cb(null,'uploads');
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+"_"+Date.now()+".png");
        }
    })
}).single('upload_karo');

app.post('/',(req,res)=>{
    res.send('Welcome to Home page');
})
app.post('/upload',fileUploading,(req,res)=>{
    res.send('Upload done');
});

app.listen(9090);