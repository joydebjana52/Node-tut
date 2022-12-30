const fs = require('fs');
const path = require('path');

const dirCreate = path.join(__dirname,'files');

for(let i = 1;i <= 3;i++)
{
    fs.writeFileSync(`${dirCreate}/myTextFile${i}.txt`, `Hello I am Joydeb and I am from file no ${i}`);
}