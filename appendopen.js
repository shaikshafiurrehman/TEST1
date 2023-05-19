var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.open('./text.html','a',(err,file)=>{
        res.writeHead(200,{'content-type':'text/html'})
        if(err) throw err
        fs.write(file,"this is append file",(err,data2)=>{
         if(err) throw err
         res.end("done")
        })
    })
}).listen(4000)