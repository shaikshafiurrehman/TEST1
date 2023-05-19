var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.writeFile("./varcas.html","this is my content ",function(err){
        res.writeHead(200,{'content-type':'text/html'})
        if(ree) throw err;
        console.log('Replace!');
        res.end()

    })
}).listen(4500)