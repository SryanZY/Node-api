/*
 * @Author: SryanZY 
 * @Date: 2018-02-22 15:21:39 
 * @Last Modified by: SryanZY
 * @Last Modified time: 2018-02-22 16:00:07
 */

/* Buffer类的方法*/
 // Buffer.byteLength(node中一个中文字符占用3个字节长度)
 console.log(Buffer.byteLength('ryan'), Buffer.byteLength('赵野'));
 
 // Buffer.isBuffer()
 console.log(Buffer.isBuffer(Buffer.from([1, 2, 6])));

 // Buffer.concat()-需要传入一个bufffer数据
const buf1 = Buffer.from('This ');
const buf2 = Buffer.from('is ');
const buf3 = Buffer.from('buffer');
const buffer = Buffer.concat([buf1, buf2, buf3]);
console.log(buffer, buffer.toString());

/* Buffer实例的方法*/
const bufferObject = Buffer.from('This is a test!');
console.log(bufferObject.length, bufferObject.toString());

// buffer.fill(填充的元素，填充起始位置，填充终止位置)
const bufferUnsafe = Buffer.allocUnsafe(10);
console.log(bufferUnsafe);
console.log(bufferUnsafe.fill(13, 4, 9));

// buffer.equals()
const bufff5 = Buffer.from('test');
const bufff6 = Buffer.from('test');
const bufff7 = Buffer.from('test!');
console.log(bufff5.equals(bufff7));

/*利用StringDecoder解决中文乱码的问题*/
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8'); // 实例化并传入格式，大部分都是utf8
const buf_chn = Buffer.from('中文字符串!');

for (let i = 0; i < buf_chn.length; i+=5) { // 每隔5个字节输出一次，为了错开中文3的字节
    const b = Buffer.allocUnsafe(5);
    buf_chn.copy(b, 0, i);
    console.log(decoder.write(b)); 
}