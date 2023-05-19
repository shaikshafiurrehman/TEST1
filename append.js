var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){

    fs.appendFile('./varcas.html','<p>this is varcas institute!</p>', function(err){
        res.writeHead(200,{'content-Type':'text/html'});
        if(err) throw err;
        console.log("Saved!")
        return res.end()
    });

}).listen(3000);
