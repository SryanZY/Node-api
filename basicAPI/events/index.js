/*
 * @Author: SryanZY 
 * @Date: 2018-02-22 16:30:48 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-02-22 16:34:41
 */

const events = require('events');

class EventEmitter extends events { // 任意一个事件对象都需要继承events对象
}

const em = new EventEmitter(); // 实例化

em.on('testEmitter', () => { // 注册事件但没有触发
    console.log('SryanZY');
});

setInterval(() => {
    em.emit('testEmitter'); // 触发事件
}, 1500);