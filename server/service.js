
var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

var defaultPort = 8090;


// import {checkNickname,register} from "../mock/mock";
// import {apiFlag , userCenter} from "../client/api/ApiUrl";

/*

 userCenter - 用户中心
    - register - 注册
    - signIn - 登陆
    - signOut - 退出
    - resetPwd - 重置密码



*/

// function getMockData(url){
//     let data = 'defaultResult';
//     switch(url){
//         case apiFlag+userCenter.checkNickname : data = checkNickname;break;
//         case apiFlag+userCenter.register : data = register;break;
//     }
//     return data;
// }


http.createServer(function(request,response){
    response.writeHead(200,{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'OPTIONS, GET, POST',
        'Access-Control-Max-Age':86400,
        "Content-Type":"text/html",
        //'Access-Control-Allow-Headers':'x-requested-with',
        'Content-Type':'text/plan'
    });
    //debugger;
    //var returnData  =  getMockData(request.url);
    var method = request.method;
    if(method == 'POST'){
        var body = [];
	    request.setEncoding('utf8');
        request.on('data', function(chunk){
            body.push(chunk);
        });
        request.on('end', function(){
            console.log(body);
            response.write(returnData);
            response.end(); 
        });
    }else if(method == 'GET'){
        var params = url.parse(request.url, true).query;
        //dosomething
        response.write(returnData);
        response.end(); 
    }    
}).listen(defaultPort);

