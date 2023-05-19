// var http= require('http');
// var fs =require('fs');

// http.createServer(function(req,res){
//     fs.open('./varcas.html','r',function(err,file){
//         res.writeHead(200,{'content-Type':'text/html'});
//         if(err) throw err
//         console.log(file,'Saved!');

//         res.end()
//     });

// }).listen(4000);


// const fs = require('fs');
// const { buffer } = require('stream/consumers');
// fs.open('./varcas.html','r',(err,fd)=>{
//     if(err) throw err;

//     fs.read(fd,buffer,offset,length,position,(err,bytesRead, buffer)=>{

//         if(err) throw err;
//         console.log(bytesRead + ' bytes read');
//         console.log(buffer.slice(0,bytesRead).toString());
//     });
//     fs.close(fd, (err)=>{
//         if(err) throw err;
//     });
// });

var fs = require('fs');

//create an empty file named mynewfile2.txt:
fs.open('./varcas.html', 'r', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
