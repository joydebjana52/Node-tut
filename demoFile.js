const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'files');
for(let i = 1;i <= 5;i++)
{
    // fs.writeFileSync(`myFile${i}` , `fileData${i}`);
    // fs.writeFileSync(dirPath+"/fileName"+i+'.txt' , 'H');
    fs.writeFileSync(`${dirPath}/fileName${i}.txt` , 'Hello Joydeb');
    // fs.writeFileSync(`fileName${i}.txt` , 'Hello Joydeb');
}