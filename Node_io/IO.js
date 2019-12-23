/**
 * Created by fz on 2019/12/23.
 */

// 非阻塞IO
var fs=require('fs');

function getMime(callback){
    fs.readFile('../webServer/data.json', (err, data) =>{
        // console.log(data.toString());
        callback(data.toString());
        return data.toString();
    });
}

// 回调函数方法获得异步数据
getMime((data)=>{
    console.log(data);
});