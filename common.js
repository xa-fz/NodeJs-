// 搭静态web服务
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var app = http.createServer(function (req, res) {
    var pathName = url.parse(req.url).pathname;

    if(pathName == '/'){
        pathName = '/index.html'
    }
 // 获取文件后缀名
    let extname = path.extname(pathName);

    if(pathName != '/favicon.ico'){// 过滤请求
        fs.readFile('webServer/'+pathName, (err, data) => {
            if(err){
                fs.readFile('webServer/404Error.html', (error, errData)=>{
                    if(error){
                        console.log(error);
                        return;
                    }
                    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
                    res.write(errData);
                    res.end();
                });
            }else{
                // 获取文件类型
                let mime = getMime(extname);
                res.writeHead(200, {"Content-Type": mime+";charset=utf-8"});
                res.write(data);
                res.end();
            }
        });
    }
});

app.listen(8002, '127.0.0.1');

function getMime(extname) {
    switch(extname){
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
    }
}