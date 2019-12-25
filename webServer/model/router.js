/**
 * Created by fz on 2019/12/24.
 */

// 模块化，静态文件托管
var fs = require('fs');
var path = require('path');
var url = require('url');

function getMime(extname, callback){
    fs.readFile('./webServer/statics/data.json', (err, data) => { // 这里会异步，还未返回值已经在外层打印了得到undefined
    if(err){
        console.log('json文件不存在'+err);
        return false;
    }else{
        var jsonObj = JSON.parse(data.toString());
        callback(jsonObj[extname] || 'text/html');
    }
});
}

exports.getRoute = function (req, res, staticPath) {
    var pathName = url.parse(req.url).pathname;

    if(pathName == '/'){
        pathName = '/index.html'
    }
    // 获取文件后缀名
    let extname = path.extname(pathName);
    if(pathName != '/favicon.ico'){// 过滤请求
        fs.readFile('./webServer/statics/'+pathName, (err, data) => {
            if(err){
                fs.readFile('./webServer/statics/404Error.html', (error, errData)=>{
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
                getMime(extname, (mime) => {
                    res.writeHead(200, {"Content-Type": mime+";charset=utf-8"});
                    res.write(data);
                    res.end();
                });
            }
        });
    }
};