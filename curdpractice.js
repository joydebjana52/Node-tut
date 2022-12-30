const fs = require('fs');
const path = require('path');

const mainDirectory = path.join(__dirname,'curd');
const fileSetPath = `${mainDirectory}/apiTool.txt` ;

// fs.writeFileSync(fileSetPath , `This is a Smaple Api file`);


// fs.rename(fileSetPath , `${mainDirectory}/apiTool.txt` , (err)=>{
//     if(!err)
//         console.log("Rename done");
// } );


// fs.appendFile(fileSetPath , ' and bla bla bla ...' , (err)=>{
//     if(!err)
//         console.log('File Updated...');
// });


// fs.readFile(fileSetPath ,'utf-8' , (err,file1)=>{
//     console.log(file1);
// });

fs.unlinkSync(fileSetPath);