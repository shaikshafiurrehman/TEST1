
const  qs=require("querystring")
const url="localhost:3000/path?arr=1&arr1=2&arr3=3"
const Qs=url.split("?")[0]
const op=qs.parse(Qs);
console.log(op)