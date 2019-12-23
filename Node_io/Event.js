/**
 * Created by fz on 2019/12/23.
 */

// events模块处理异步
var events=require('events');

var EventEmitter=new events.EventEmitter();

EventEmitter.on('to_mime', (data) => {
    console.log('监听mime:', data);
});

// 广播：事件驱动
EventEmitter.on('to_parents', (data) => {
    console.log('监听广播', data.name);
    EventEmitter.emit('to_mime', '给mime的数据');
});

//  2s后广播监听的内容
setTimeout(()=>{
    console.log('开始广播~~');
    EventEmitter.emit('to_parents', {name:'广播内容1'});
},2000);