
var http = require('http');
var fs =require('fs');

http.createServer(function(res,res){
    fs.readFile("/create.html",function(err,res){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data);
        res.end()
    })
}).listen(3000);