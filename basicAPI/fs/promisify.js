/*
 * @Author: SryanZY 
 * @Date: 2018-03-04 15:55:49 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-03-04 16:04:40
 */

const fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);

// 使用promise
readFile('./index.js').then(data => {
    console.log(data.toString());
}).catch(err => {
    console.log(err);
});

// 使用ES6 async
async function testFile () {
    try {
        let con = await readFile('./index.js');
        console.log(con.toString());
    } catch (err) {
        console.log(err);
    }
}
testFile();