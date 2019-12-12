var http = require('http');

var app = http.createServer(function (req, res) {

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});

    res.write('你好 nodeJs');

    res.end();
});

app.listen(8002, '127.0.0.1');