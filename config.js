/**
 * 小程序配置文件
 */
var host = "https://www.xluob.com"
// var host = "https://qb.xluob.com"
var config = {
    host,
    //登陆
    login:host+'/mini/passport/auth',
    // 详情支付
    reword:host+'/mini/pay/submit', 
    // 支付
    reword2:host+'/mini/pay/pay', 
    // 机构支付
};

module.exports = config
