/*
 * @Author: SryanZY 
 * @Date: 2018-02-22 15:09:17 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-03-05 09:52:51
 */

 /*buffer用来读取或者处理二进制数据，大小固定（长度是256位）*/
 
 /* Buffer的初始化*/
 /*Buffer.alloc创建一定长度的buffer字段，默认是用0填充，也可自定义 */
console.log(Buffer.alloc(10));
console.log(Buffer.alloc(10, 2));

/* Buffer.from创建buffer对象。也可传入一个字符串，还可以限定编码格式*/
console.log(Buffer.from([1, 3, 4, 11]));
console.log(Buffer.from('Sryan', 'base64'));

 