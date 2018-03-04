/*
 * @Author: SryanZY 
 * @Date: 2018-03-04 15:18:02 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-03-04 15:32:39
 */

const fs = require('fs');

/* 
    fs.stat-读取文件属性，可用来判断是否是文件夹、是否是独立文件以及
    文件是否存在等。
*/
fs.stat('./index.js', (err, stats) => {
    if (err) {
        console.log('文件不存在');
        return;
    } else {
        console.log(stats.isFile());
        console.log(stats.isDirectory());
        console.log(stats);
    }
});

/*对文件进行监听*/
fs.watch('./', {
    recursive: true // 是否对文件进行轮询
}, (eventType, filename) => {
    console.log(eventType, filename);
    // eventType:对文件进行的操作；filename:发生改变的文件名
});