//1.引入2个模块 mysql express
const mysql = require("mysql");
const express=require("express");
//引入Router模块
var router=express.Router();
//1.1引入模块 cors 
const cors =require("cors"); 




//2.创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"vans"
});
//3.创建express对象
var server=express();
//1.2配置允许访问列




server.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],credentials:true
}));
//3.11:加载模块 express-session
const session = require("express-session");
//3.12:配置模块
server.use(session({
    secret:"128位随机字符串",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60
    }
}))
//3.2配置静态资源目录public
server.use(express.static("public"));
//3.3:配置第三方中间件
const bodyParser =require("body-parser");
//3.4:
server.use(bodyParser.urlencoded({
    extended:false
}));
//4.为express对象绑定监听端口 3000
server.listen(3000);

//功能:product页面添加商品
server.get("/getPrd",(req,res)=>{
    var sql = "SELECT * FROM vans_prd";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })   
});

//功能:获取轮播图片
server.get("/getList",(req,res)=>{
    var pid=req.query.pid;
    //console.log(pid)
    var sql="select * from vans_prdlist_img where pid=?";
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//功能:根据pid获取商品信息
server.get('/getPrdByid',(req,res)=>{
    var pid=req.query.pid;
    var sql="select * from vans_prd where pid=?";
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});

//功能:login登录功能
server.get("/login",(req,res)=>{
    var u=req.query.uname;
    var p=req.query.upwd;
    var sql="select * from vans_login where uname=? and upwd=?";
    pool.query(sql,[u,p],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名或密码有误"});
        }else{
            //登录成功
            //获取用户id
            var uid = result[0].uid;
            //保存session对象中
            req.session.uid = uid;
            res.send({code:1,msg:"登录成功"});
        }
    })
})

//功能:用户点击添加购物车按钮
server.get('/addcart',(req,res)=>{
    //console.log(req.session.uid);
    if(!req.session.uid){
        res.send({code:-1,msg:"请登录"});
        return;
    }
    var uid=req.session.uid;
    var pid=req.query.pid;
    var count=1;

    var sql="select * from vans_cart where uid=? and pid=?";
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            var sql=`insert into vans_cart`;
            sql+=` values(null,1,${pid},${uid})`
        }else{
            var sql=`update vans_cart set count=count+1`;
            sql+=` where uid=${uid} and pid=${pid}`
        }
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"添加成功"})
    })
    })
})


//功能:购物车列表
server.get("/cartList",(req,res)=>{
    //如果session对象uid不存在
    //原因:当前没有登录
    if(!req.session.uid){
        res.send({code:-1,msg:"请登录"});
        return;
    }else{
        var uid=req.session.uid;
        var sql="select p.title,p.price,p.img_url,c.pid,c.count";
        sql+=" from vans_prd p,vans_cart c";
        sql+=" where p.pid=c.pid";
        sql+=" and c.uid=?";
        pool.query(sql,[uid],(err,result)=>{
            if(err) throw err;
            res.send({code:1,data:result})
        })
    }
})

//功能 ，删除购物车中某个商品
server.post("/removeItem",(req,res)=>{
    var id=req.body.id;
    console.log(id);
    var sql="delete from vans_cart where pid=?";
    id=parseInt(id);
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"删除成功"})
        }else{
            res.send({code:-1,msg:"删除失败"})
        }
    })
})

//功能,商品列表分页显示
server.get("/prdPno",(req,res)=>{
    //pno 页码 pageSize 页大小
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    //默认值 1   4
    if(!pno){pno=1}
    if(!pageSize){pageSize=4}
    //查询sql语句
    var sql="select pid,title,price,img_url from vans_prd limit ?,?";
    var offset=(pno-1)*pageSize;
    pageSize=parseInt(pageSize);
    console.log(offset);
    console.log(pageSize)
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
})

//功能:发送评论
server.post("/addComment",(req,res)=>{
    var nid=req.body.nid;
    var content=req.body.content;
    var sql="insert into vans_comment value(null,?,?)";
    pool.query(sql,[nid,content],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"添加成功"})
    })
})

//功能:评论列表
server.get("/getComment",(req,res)=>{
    //1:参数 
    var nid = req.query.nid;
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    if(!pno){
      pno = 1;
    }
    if(!pageSize){
      pageSize = 5;
    }
    //2:sql
    var sql="SELECT id,nid,content FROM vans_comment WHERE nid=? LIMIT ?,?";
    var offset = (pno-1)*pageSize;
    pageSize = parseInt(pageSize);
    pool.query(sql,[nid,offset,pageSize],(err,result)=>{
      if(err)throw err;
      res.send({code:1,data:result});
    })
    //3:result
})