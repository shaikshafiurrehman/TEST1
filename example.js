var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('./demofile.html',(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'});
        if(err) throw err
        res.write(data)
         return res.end()
    })
}).listen(4500)