// 文件流的形式写入文件(文件比较大的时候)
var fs = require('fs');
var data = '写入数据\n';

var writerStream=fs.createWriteStream('writer.txt');

for(let i=0;i<100;i++){
    writerStream.write(i+''+data, 'utf-8');
}
// 标记完成
writerStream.end();
// 写入完成
writerStream.on('finish', ()=> {
    console.log('写入完成');
});
// 写入失败,将错误写到错误日志中
writerStream.on('error', (err)=>{
    console.log('写入失败：'+err);
    let writerStream1=fs.createWriteStream('errLog.txt');
    writerStream1.write(err+'\n', 'utf-8');
    writerStream1.end();
});
// 创建一个管道流读取+写入(会覆盖之前的数据)
var newReadStream = fs.createReadStream('writer.txt');
var newWriteStream = fs.createWriteStream('log.txt');
// 管道读写（读取要写入的文件内容）
newReadStream.pipe(newWriteStream);

console.log('执行完毕');