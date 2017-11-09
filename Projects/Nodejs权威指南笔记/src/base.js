/*
* HTTP服务，用于创建一个HTTP服务
* author:ailsabe@126.com
* date:2017-08-17
*/

//检测模块是不是主模块
if(module === require.main){console.log("当前模块是主模块")}
var http = require("http"); //使用node的http模块
http.createServer(function(req,res){ //通过回调的方式创建服务
	//响应
	res.writeHead(200,{"Content-Type":"text/html"});
	//输出内容等
	res.write("<head><meta charset='UTF-8'></head>");
	//响应结束
	res.end('第一个HTTP服务器');
}).listen(1337,"127.0.0.1");

//打印日志
console.log("Server running at http://127.0.0.1:1337");
console.error("this is conole.error method");

//console.dir 用于查看对象内容
var user  = new Object();
user.name = "Zhangsan";
user.getName = function(){return this.name;}
user.setName = function(name){this.name = name;}
console.dir(user);
//console.time console.timeEnd 用于验证一个同步执行的方法的耗时时间
console.time("small loop");
for (var i = 0; i >= 1000000; i++) {
	;
}
console.timeEnd("small loop");

//console.trace 在当前位置创建一个栈的标准错误进行输出
//console.trace(user);  
console.log("=======================console.trace=======================");

//Nodejs中的全局作用域与全局函数

//setTimeout or clearTimeout
var simple = setTimeout(function(arg){
	console.log(arg);
},1000,"这是setTimeout内置全局函数的入参");
//关闭定时器
clearTimeout(simple);  //关闭定时器后，定时器不再执行

//setInterval or clearInterval 
var initNumber = 0;

var fn_setInterval = function(arg){
	initNumber++;
	if(initNumber>=10) clearInterval(interval);
	console.log("Hello,"+arg+""+initNumber);
};
var interval = setInterval(fn_setInterval,1000,"张三");
clearInterval(interval);
//setTimeout or clearTimeout 
//setInterval or claerInterval 
//在BOM中比较常见的定时器和轮询处理方式；
//但是在Nodejs中为time对象定义了unref与ref
//unref or ref 

console.log("定时器对象的unref方法与ref方法====>");

	
var intervalSimple = function(){ console.log(" setInterval callback fn")};
var timer = setInterval(intervalSimple, 3000);
timer.unref(); //?这个方法好像没有效果
clearInterval(timer);
//setTimeout(function(){console.log("aaaa")}, 10000);


console.log("与模块相关的全局函数及对象====>");
//１.在同级目录创建一个foo.js的脚本文件
//２.使用node的全局函数require函数加载模块文件，函数参数传递一个相对路径
//３.调用(执行正确，这是最基础的模块调用案例)
var foo = require("./foo.js");
var　foo1 = require("./foo.js");
//两次加载模块都是获取同一个模块对象
//console.log(foo1.testVar);
//console.log(foo.testVar);

foo.outputTestVar();
foo1.outputTestVar();
//使用require.resolve查看完整模块路劲名称
console.log(require.resolve("./foo.js"));

//console.log(require.cache);
console.log(require.cache[require.resolve("./foo.js")]);

//__filename or  __dirname　Nodejs预定义变量
//__filename　获取当前模块文件的绝对路径值
//__dirname 获取当前模块的目录路径值
console.log(__filename); 
console.log(__dirname);






