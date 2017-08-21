
var str = "Zhangsan";
var outputTestVar = function(){
	console.log(str);
};
console.log("会将模块里面的每一个方法都执行一遍,"+str)
exports.testVar = str;
exports.outputTestVar = outputTestVar;
