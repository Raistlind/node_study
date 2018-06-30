var http = require ('http');
//this is a test
http.createServer(function(request,response){
    console.log(request);
    response.end('Hello world');
}).listen(8888);
