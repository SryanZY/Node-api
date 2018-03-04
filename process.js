setImmediate(() => {
    console.log('immediate');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

process.nextTick(() => {
    console.log('nextTick');
});

/*
   process.nextTick在下一个队列的开始执行，当其中嵌套其他的异步函数或者较大的for循环时
   会阻塞其他的函数执行，因此不建议使用；setImmediate在当前队列的结尾处执行；
   三个函数的执行顺序为：process.nextTick > setTimeout(时间为0时) > setImmediate
*/