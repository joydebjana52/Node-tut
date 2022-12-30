const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'curd');
const filePath = `${dirPath}/apple.txt` ;

// "C"  -> Creating File...
/*  fs.writeFileSync(filePath,'I am from apple file'); */


// "R"  -> Reading File...
/*
fs.readFile(filePath ,'utf-8' , (err,item)=>{
    console.log(item);
});
*/

// "U"  -> Update File...
/*
fs.appendFile(filePath , 'and I am demo...' ,(err)=>{
        if(!err)   
            console.log('File updated');
    });
*/


// "D"  -> Delete File...
/*
fs.unlinkSync(`${dirPath}/fruit.txt`) 
*/


// Rename Part...
/*
fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>
{
    if(!err)
        console.log("Rename completed");
});
*/