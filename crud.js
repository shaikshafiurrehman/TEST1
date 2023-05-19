var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){

    fs.readFile('./demofile.html', function(err,data){
        res.writeHead(200,{'content-Type':'text/html'});
        if(err) throw err
        res.write(data);
        return res.end()
    });

}).listen(3000);
