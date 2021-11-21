//server.js
const express = require('express');
//引入express框架 
const sha1 = require('sha1');
//引入sha1 
const app = express(); 
app.get('/weChatDevCheck', function(req, res, next){  
    console.log("微信开发接口接入测试");  
    const token = "butcher";
    //测试token,与填写配置信息时的token一致  
    const signature = req.query.signature;
    //微信加密签名  
    const timestamp = req.query.timestamp;
    //时间戳  
    const echostr = req.query.echostr;
    //随机字符串  
    const nonce = req.query.nonce;
    //随机数  
    console.log(req.query);  
    let oriArray = [];
    //字典排序拼接  
    oriArray.push(token);  
    oriArray.push(timestamp);  
    oriArray.push(nonce);  
    let original = oriArray.sort().join('');  
    let combineStr = sha1(original);
    //加密  
    console.log(combineStr);  
    if(signature === combineStr){
        //比较   
        res.send(echostr);
        //返回echostr  
    }else {   
        console.log('err');  
    }  
    next(); 
}); 

// app.use(express.static(path.join(__dirname, '/')));


app.use(express.static("static/dist/"));
 //参数‘/’可当作设置url的根显示页面，这里即”http://localhost:3000/“访问的页面设置为index.html
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+"/"+"test.html")        //设置/ 下访问文件位置
// }); 

const server = app.listen(80, function(){  
    const host = server.address().address;  
    const port = server.address().port;  
    console.log("应用实例",host,port); 
});


