/**
 * Created by fz on 2019/12/30.
 */

// ejs负责将数据库的数据渲染在web页面上
var http = require('http');
var url = require('url');
var ejs = require('ejs');
var fs = require('fs');

// 路由
var app = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});

    var transMethod=req.method.toLowerCase();

    var pathname=url.parse(req.url).pathname;

    if(pathname == '/login'){
        ejs.renderFile('eviews/form.ejs',{},(err, data) =>{
            res.end(data);
        });
    }else if(pathname == '/dologin' && transMethod == 'get'){
        var doLoginPath = url.parse(req.url,true);
        console.log(doLoginPath.query);
        if(doLoginPath.query.username=='admin' && doLoginPath.query.passwords=='123') {
            res.end('登录成功');
        }
    }else if(pathname == '/dologin' && transMethod == 'post'){
        var postStr = '';
         req.on('data', (postData)=>{
             postStr+=postData;
             fs.appendFile('login.txt', postStr+'\n',(err)=>{
                 if(err){
                     console.log('写入失败');
                 }else{
                     console.log('写入成功');
                 }
             });
         });
        req.on('end', (postData)=>{
            res.end("<script>alert('post请求');history.back()</script>");
        });
    } else{
        ejs.renderFile('eviews/index.ejs',{},(err, data) =>{
            res.end(data);
        });
    }
});

app.listen(8003, '127.0.0.1');