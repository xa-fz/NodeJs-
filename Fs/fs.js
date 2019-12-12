var fs = require('fs');

fs.stat('log.txt', (err, status) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log('文件：'+ status.isFile());
    console.log('目录：'+ status.isDirectory());
});

// 创建目录
fs.mkdir('css', (err) => {
    if(err) {
        console.log('创建失败:'+ err);
        return false;
    }
    console.log('创建成功');
});

// 写入文件,不存在则创建（第二个参数传空值）
fs.writeFile('log.txt', '写入日志', (err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log('写入成功');
});

// 追加文件内容，可用于写日志
fs.appendFile('log.txt', 'success\n', (err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log('追加成功');
});

// 读取文件
fs.readFile('log.txt', (err, data) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log(data.toString());
});

// 读取目录fs.readdir,会把这个目录下的所有文件夹和文件列出来,这个目录可以从文件向上读取
fs.readdir('../', (err, data) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log(data);
});

// 文件重命名，还可用于剪切&复制---->把路径A下的文件a变成路径B下的文件b
fs.rename('1.txt', '2.txt', (err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log('名称修改成功');
});

fs.rename('2.txt', 'css/index.css', (err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log('复制成功');
});

// 删除目录--（慎用）且无法删除文件
fs.rmdir('', (err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log('删除成功');
});

// 删除文件
fs.unlink('', (err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log('删除成功');
});