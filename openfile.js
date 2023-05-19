var fs = require('fs');
var http = require('http');
 
http.createServer(function(req,res){
    fs.open("./text.html",'r',(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'})
        var buff= new Buffer.alloc(1024);
        if(err) throw err
        fs.read(data, buff,0,buff.length,0,(err,bytes)=>{
            if(err) throw err
            if(bytes>0){
                console.log(buff.slice(0,bytes).toString());
            }
            fs.close(data,(err3)=>{
                if(err) throw err3;
            })
           
        }); 
        
    })
    res.end()
}).listen(4000);
