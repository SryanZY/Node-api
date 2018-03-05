/*
 * @Author: SryanZY 
 * @Date: 2018-03-04 15:55:49 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-03-05 10:37:07
 */

 /* 利用异步函数解决fs的回调函数地狱 */
const fs = require('fs');
const {promisify} = require('util'); // 封装在util中的异步操作
const readFile = promisify(fs.readFile); // 相当于对fs.readFile部分做了异步封装

// 使用promise(简单操作情况下)
readFile('./index.js').then(data => {
    console.log(data.toString());
}).catch(err => {
    console.log(err);
});

// 使用ES6 async(较复杂的情况下)
async function testFile () {
    try {
        let con = await readFile('./index.js');
        console.log(con.toString());
    } catch (err) {
        console.log(err);
    }
}
testFile();
