/*
 * @Author: SryanZY 
 * @Date: 2018-02-22 10:33:16 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-02-22 10:43:46
 */
const path = require('path');

console.log('__dirname', __dirname);
console.log('process.cwd()', process.cwd());
console.log('path.resolve()', path.resolve());

/*Notes:
    __dirname、__filename: 文件所在的路径，文件所在物理磁盘上的绝对路径
    process.cwd(): 总是返回执行node命令所在的文件夹
    ./: 在require命令中总是相对于当前文件所在的文件夹，在其他的地方与process.cwd()一样
*/


