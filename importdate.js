var httpVar = require('http')
var currentdate = require('./datelib')
var myserver = httpVar.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write("hello from node server for importing date")
    response.write("<br>")
    var cd=currentdate.myDate()
    response.write(cd)
    response.end(); 

})

myserver.listen(8888)