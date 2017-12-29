//申明类
class WetherSearch{
    //定义方法,默认的构造函数constructor
    constructor(){
    //定义类成员变量
       this.cityName = "";
    }
    //定义一个方法search，传递参数cityName,成员函数
    search(cityName){
        this.cityName = cityName;
        console.log("将要查询的城市是："+cityName);

    }
}

//
module.exports = WetherSearch;