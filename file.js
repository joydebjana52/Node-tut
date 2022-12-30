const fs = require('fs');

if(process.argv[2] == 'add')
{
    fs.writeFileSync(process.argv[3],process.argv[4]);
}
else if(process.argv[2] == 'removeṇ')
{
    fs.unlinkSync(process.argv[3]);
}
else
{
    console.log('Invalid Operation...');
}