/**
 * Created by fz on 2019/12/19.
 */
// 读取文件中的数据
var fs = require('fs');

exports.getMimeFromFile = function (extname) {
    // fs.readFile('./webServer/data.json', (err, data) => { // 这里会异步，还未返回值已经在外层打印了得到undefined
    //     if(err){
    //         console.log('json文件不存在'+err);
    //         return false;
    //     }else{
    //         var jsonObj = JSON.parse(data.toString());
    //         // console.log(jsonObj[extname]);
    //         return jsonObj[extname] || 'text/html'
    //     }
    // });

    // 修改方法是是改成同步执行的readFileSync()
    var data = fs.readFileSync('./webServer/data.json');
    var jsonObj = JSON.parse(data.toString());
    return jsonObj[extname] || 'text/html';
};
