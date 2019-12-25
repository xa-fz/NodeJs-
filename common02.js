// ejs负责将数据库的数据渲染在web页面上
var http = require('http');
var url = require('url');
var ejs = require('ejs');

// 路由
var app = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    var pathname=url.parse(req.url).pathname;
    var msg = 'MSG信息';
    var list = [1,2,3];
    var resMsg = '请注册';
    var htStr = '<h1>标题</h1>';
    if(pathname == '/login'){
       ejs.renderFile('eviews/login.ejs',{msg, list},(err, data) =>{
           res.end(data);
       });
    }else if(pathname == '/register'){
        ejs.renderFile('eviews/register.ejs',{resMsg, htStr},(err, data) =>{
            res.end(data);
        });
    }
});

app.listen(8003, '127.0.0.1');