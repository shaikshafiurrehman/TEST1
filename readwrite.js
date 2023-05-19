var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    fs.open('./text.html','w+',(err,file)=>{
        res.writeHead(200,{'content-type':'text/html'});
        if(err) throw err
        fs.write(file,"im shaik shafi ur Rehman from kadapa",(err,data)=>{
            if(err) throw err
            res.end("done");
        })
    })
}).listen(4500); 