
/**
 * JS封装一个数据库访问DB对象
 */
function DB(){}


/**
 * 初始化数据库执行环境
 * @param  {string} serverIP 服务器IP地址
 * @param  {int} port     端口
 * @param  {string} username 用户名
 * @param  {string} password 密码
 * @return {void}          
 */
DB.prototype.openDB = function(serverIP,port,username,password){
	console.log("serverIP:"+serverIP);
	console.log("port:"+port);
	console.log("username:"+serverIP);
	console.log("password:"+password);
}

/**
 * 执行查询返回数据集
 */
DB.prototype.ExecuteNonQuery = function(){
 
}

/**
 * 执行语句并返回第一行第一列数据
 */
DB.prototype.ExecuteScalar = function(){

}


module.exports = DB;  //导出类必须使用module.exports

