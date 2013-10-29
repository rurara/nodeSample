var http = require('http');

http.createServer(function (requeest, response){
	response.writeHead(200, { 'Content-Type':'text/html'});
	response.end('<h1>hello wrold</h1>');
}).listen(19191, function(){
	console.log('server running at http://127.0.0.1:19191');
})