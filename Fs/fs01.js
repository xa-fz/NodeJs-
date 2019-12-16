//判断服务器上有没有upload目录，没有的话进行创建
var fs = require('fs');

fs.stat('upload', (err, stats) => {
    if(!err){
        console.log('目录已存在');
        return false;
    }else{
        console.log('目录：'+ status.isDirectory());
        fs.mkdir('upload', (error) => {
            if(error) {
                console.log('创建失败:'+ error);
                return false;
            }
            console.log('创建成功');
        });
    }
});

var dirArr = [];
// 读取html中所有的文件
fs.readdir('html', (err, files) => {
    if(err){
        console.log(err);
        return false;
    }else{
            (function getFile(i){// 匿名函数防止异步
                if(i==files.length){
                    console.log('文件下的目录：'+dirArr);
                    return false;
                }
                fs.stat('html/'+files[i], (error, stats) => {// 异步的
                    if(files[i].indexOf('html')>-1){
                        dirArr.push(files[i]);
                    }
                    // 递归
                    getFile(i+1);
                });
            })(0);
    }
});