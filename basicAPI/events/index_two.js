/*
 * @Author: SryanZY 
 * @Date: 2018-02-23 16:11:45 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-03-05 10:08:45
 */

const eventEmitter = require('events');
class Event extends eventEmitter{}

const ev = new Event();

ev.on('error', (err, time) => {
    console.log(err, `time: ${time}`);
});
ev.emit('error', new Error('oops!'), Date.now()); // 调用事件时可以传递参数

// once注册的事件只触发一次
ev.once('oneTime', () => {
    console.log('trigger just one time');
});

setInterval(() => {
    ev.emit('oneTime');
}, 500);