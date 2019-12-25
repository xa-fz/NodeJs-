// 搭静态web服务
var http = require('http');
var url = require('url');
var router = require('./webServer/model/router.js');
// 路由
var app = http.createServer(function (req, res) {
    // router.getRoute(req, res, 'static');
    router.getRoute(req,res,'static');
});

app.listen(8004, '127.0.0.1');