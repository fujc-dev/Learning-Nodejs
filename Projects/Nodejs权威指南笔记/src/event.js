
//事件处理机制和事件环机制

/*
 * 什么是事件?
 * 如果熟悉浏览器JS脚本，或者高级语言JAVA、C#等，
 * 事件就是用于响应接收用户的处理，事件是可以被控件识别的操作；
 * 
 * 事件处理机制，列举几种语言的框架事件处理机制对比：
 * WPF：隧道、冒泡
 * Winform：单一点击、双击等
 * Java：单一点击、双击等
 * JavaScript：单击按钮触发click事件等，
 *
 * Nodejs：同样，在Nodejs中也会触发各种事件，
 * 		   例如在前面编写Http.Server时出现的"接收客户端请求"、"产生错误回调"事件等，
 * 		   针对不同的事件都需要进行不同的事件处理
 */

// EventEmitter 
// 在Nodejs中EventEmitter类是所有的事件的基类

//DEMO

var http  = require("http");
var events = require("events");
var server = http.createServer();
//触发request绑定事件
server.on("request",function(req,res){
	//打印浏览器请求	
	if(req.url !="/favicon.ico"){
		console.log("接收到客户端请求："+req.url);
	}
	res.end();
});
server.on("request",function(req,res){
	if(req.url !="/favicon.ico"){
		console.log("接收到客户端请求："+req.url);
	}
	//res.end();
});

//以上代码的request指定事件绑定了两次，并且两次都触发了回调；
//慨念：针对同一个指定事件，最多可以绑定10个事件处理函数；
//问题：
//	1、回调函数里面的res.end()是不是可写可不写？
//	2、为每个事件绑定多次，这么设计有什么好处？
server.listen(1337,"127.0.0.1");

//listeners是调用的父类EventEmitter的方法，用于获取绑定某一个事件的数目
console.log(server.listeners("request")); 

//emitter.once(eventname,fn); 即处理函数只会被执行一次
//
//emitter.rmoveListener(eventname,fn); 移除事件
//
//emitter.removeAllListener([eventnamre]);移除当前事件名称下所有的绑定处理函数
//
//emitter.emit(eventname,para1,para2,para3,para...); 手动执行处理事件
//

/**
 * 自定义myEventName处理函数
 * @param  {[type]} p1   参数1  
 * @param  {[type]} p2   参数2
 * @param  {[type]} p3	 参数3
 * @return {[type]}    
 */
server.once("myEventName",function(p1,p2,p3){
	console.log("para1:"+p1);
	console.log("para2:"+p1);
	console.log("para3:"+p1);
});
/**
 * 手动执行自定义myEventName事件
 */
server.emit("myEventName","111","222","333");

//
var _event_count = events.EventEmitter.listenerCount(server,"request");
console.log(_event_count);
//TODO 为什么自定义的事件找不着呢？
var _costuom_event_count = server.listenerCount("myEventName");
console.log(_costuom_event_count);

var DB = require("./data.js");  
var _db = new DB();
_db.openDB("127.0.0.1",8000,"ailsabe","12345678");