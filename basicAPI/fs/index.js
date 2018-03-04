/*
 * @Author: SryanZY 
 * @Date: 2018-03-04 14:58:04 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-03-04 15:17:34
 */

 const fs = require('fs');

 fs.readFile('./index.js', 'utf8', (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
 });
 // 同步的处理速度大于异步但是会阻塞进程

 fs.writeFile('./text', 'This is a new text by SryanZY', {
     encoding: 'utf8'
 }, err => {
     if (err) throw err;
     console.log('Done');
 });
 // 不仅可以传入字符串还可以传入Buffer对象
