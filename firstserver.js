var httpVariable = require('http')

var myserver = httpVariable.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write("Hello from node server")
    response.end();


})
myserver.listen(8888)