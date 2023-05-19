// var hname= '127.0.0.1'
// var port=3000
// ========================server Create====================
// var http=require("http");
// http.createServer(function(req,res){
//   res.status=200;
// //   res.write(200);
//   res.end('index.html')
// }).listen(2021)


// var http = require('http');
 
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);


// ======================url Module=====================================



     var add='localhost:4200/home/1/2/2? course=jamg.price=20'

var url=require('url');

  console.log(require.url)
  var query=url.parse(add,true)
  console.log(query);
  console.log(query.pathname);
  console.log(query.host);
  console.log(query.search);
  console.log(query.query);
 
  // res.write(`course Name is ${query.query.course}and price is ${query.query.price}`)




// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// //Parse the address:
// var q = url.parse(adr, true);

// /*The parse method returns an object containing url properties*/
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);