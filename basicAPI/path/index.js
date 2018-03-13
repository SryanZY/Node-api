/*
 * @Author: SryanZY 
 * @Date: 2018-02-22 09:54:06 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-03-13 09:36:15
 */

 /*normalize-可以将路径规范化*/
 const {normalize} = require('path');
 // 等同于 const normalize = require('path').normalize
console.log(normalize('/user/static//basic'));

/*join-拼接(当路径格式不规范时会默认使用normalize)*/
const {join} = require('path');
console.log(join('/user', '/local/', '/../bin'));

/*resolve-将相对路径解析成绝对路径*/
const {resolve} = require('path');
console.log(resolve('./'));

/*basename-文件名, dirname-路径名, extname-后缀名*/
const {basename, dirname, extname} = require('path');
const filepath = 'user/local/bin/name.txt';
console.log(basename(filepath)); // name.txt
console.log(dirname(filepath));  // user/local/bin
console.log(extname(filepath));  // .txt

/*parse, format-互为相反，parse解析成路径对象的形式(dir会覆盖root，base会覆盖
ext和name)，format解析回来。
    format一个重要的作用是当parse后的对象属性改变时可以将改变后的值format回来    
*/
const {parse,format} = require('path');
const path_second = 'user/local/demo/node_modules/package.json';

const parseStr = parse(path_second);
parseStr.base = 'DB.json';
console.log(format(parseStr)); // user/local/demo/node_modules\DB.json
console.log(parseStr); /* 
{ root: '',dir: 'user/local/demo/node_modules',base: 'DB.json',
ext: '.json',name: 'package' }*/