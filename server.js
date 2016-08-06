var http = require("http");

http.createServer(function(request, response){

    response.end("hello");

}).listen(3000, "127.0.0.1", () => {
    console.log('listening at port 3000');
});