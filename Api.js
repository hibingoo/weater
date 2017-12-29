//引用导出的模块
var WetherSearch = require("./WetherSearch.js")

//创建一个实例
var wsInstance = new WetherSearch();
//使用成员函数传递参数
wsInstance.search("北京");