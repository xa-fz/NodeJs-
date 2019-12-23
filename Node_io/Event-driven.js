/**
 * Created by fz on 2019/12/24.
 */

var fs=require('fs');
var events=require('events');
// 实例化
var EventEmitter=new events.EventEmitter();

function getMime(){
    fs.readFile('../webServer/data.json', (err, data) =>{
        EventEmitter.emit('JsonData', data.toString());
    });
}
// 这里会异步，先执行下面，再反过来执行这个方法中的操作
getMime();

EventEmitter.on('JsonData', (data)=>{
    console.log('事件驱动：', data);
});
