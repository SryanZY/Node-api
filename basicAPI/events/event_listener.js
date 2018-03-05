/*
 * @Author: SryanZY 
 * @Date: 2018-02-23 16:35:48 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-03-05 10:40:22
 */

/*一个事件绑定多个事件处理函数&事件的移除*/

const EventEmitter = require('events');

class Event extends EventEmitter{}

const event = new Event();

function fn1 () {
    console.log('fn1');
}

function fn2() {
    console.log('fn2');
}

// 同一事件上绑定多个事件处理函数
event.on('testListener', fn1);
event.on('testListener', fn2);

setInterval(() => {
    event.emit('testListener');
}, 500);

setTimeout(() => {
    // 只移除一个事件处理函数(两个参数，第一个事件的名称，第二个移除的事件处理函数名称)
    event.removeListener('testListener', fn2);
    // 把整个事件移除，只有一个参数
    event.removeAllListeners('testListener');
}, 1500);