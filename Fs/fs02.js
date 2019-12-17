// 文件流的形式读取文件(文件比较大的时候)
var fs = require('fs');

var readStream=fs.createReadStream('input.txt');

var count=0; // 读取的次数
readStream.on('data', (chunk)=>{
    console.log(chunk.toString());
    count++;
});
// 读取完成
readStream.on('end', (chunk)=>{
    console.log(count);
});
// 读取失败
readStream.on('error', (err)=>{
    console.log('读取失败：'+err);
});