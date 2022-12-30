const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

const dirName = path.join(__dirname,'curd');
const fileName= `${dirname}/iPhone.txt`;

fs.writeFileSync(fileName , 'This is an iPhone');