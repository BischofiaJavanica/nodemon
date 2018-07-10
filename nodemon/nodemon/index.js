/*
    当用户访问 127.0.0.1 
    读取www目录下面的内容
        有index.html 读取首页并返回
        没有index.html 返回一个文件列表
*/
// 引入http模块
let http = require('http');

// 引入 路径模块
let path = require('path');

// 拼接一个 根目录
let rootPath = path.join(__dirname, 'www');

// 开启服务
http.createServer((request, response) => {
    // 只要有请求过来
    // console.log(request);
    // console.log(request.url);
    // 可以获取到 ip 跟端口之后的字符串
    // 拼接为绝对路径
    let filePath = path.join(rootPath, request.url);
    console.log(filePath);
}).listen(88, '127.0.0.1', () => {
    console.log('listen to 127.0.0.1:80 success');
})