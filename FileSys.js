const fs = require('fs');
const path = require('path');
const http = require('http');

const pubPath = path.join(__dirname,'public');
// console.log(pubPath);

for(let i = 1;i <= 4;i++)
{
    fs.writeFileSync(`${pubPath}/apple${i}.txt`,'This is an apple');
    fs.unlinkSync(`${pubPath}/apple${i}.txt`);
}
fs.unlinkSync(`${pubPath}/apple.txt`);