const op=require("./custom");
var http=require("http");
const url=require("url")
const qs=require('querystring'); 

http.createServer((req,res)=>{
    // const url = "local:5000/path?opa=mul&val1=2&val2=6"
    const Q = req.url.split("?")[1]
    const ope = qs.parse(Q)
    console.log(ope);
    
    const result=op.operation(ope.a,parseInt(ope.b),parseInt(ope.c))
    console.log(result);
    // res.write(result);
    res.end(JSON.stringify(result));
        
    }).listen(5000);