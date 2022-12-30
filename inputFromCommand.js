const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

const pathName = path.join(__dirname,'files');

fs.readdir(pathName,(err,files)=>{
    files.forEach((items)=>{
        console.log(items);
    });
});

// fs.readFileSync( pathName );