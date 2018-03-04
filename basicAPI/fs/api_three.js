/*
 * @Author: SryanZY 
 * @Date: 2018-03-04 15:33:08 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-03-04 16:05:12
 */

const fs = require('fs');

const rs = fs.createReadStream('./api_three.js');
rs.pipe(process.stdout);
// pipe：当前的数据'流向'哪里
// process.stdout：控制台（输出）

const ws = fs.createWriteStream('./text.txt');
let timer = setInterval(() => {
    let num = parseInt(Math.random() * 10);
    if (num <= 8) {
        ws.write(num.toString());
        // 向流中写入的文件时string或者buffer，不可以是数字
    } else {
        clearInterval(timer);
        ws.end();
    }
}, 200);

ws.on('finish', () => { // 当流写入完成后会返回finish事件
    console.log('Finish read stream');
});