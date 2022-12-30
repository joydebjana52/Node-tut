const data = require('./data');
const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'application/json'});
    res.write("Hello Chitkaraians...");
    res.end();
}).listen(4567);