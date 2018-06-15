
var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

var defaultPort = 8090;

http.createServer(function(request,response){
    response.writeHead(200,{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'OPTIONS, GET, POST',
        'Access-Control-Max-Age':86400,
        "Content-Type":"text/html",
        //'Access-Control-Allow-Headers':'x-requested-with',
        'Content-Type':'text/plan'
    });
    debugger;
    var method = request.method;
    if(method == 'POST'){
        var body = [];
	    request.setEncoding('utf8');
        request.on('data', function(chunk){
            body.push(chunk);
        });
        request.on('end', function(){
            response.write(body.join(''));
            response.end(); 
        });
    }else if(method == 'GET'){
        var params = url.parse(request.url, true).query;
        //dosomething
        response.write('success');
        response.end(); 
    }    
}).listen(defaultPort);

