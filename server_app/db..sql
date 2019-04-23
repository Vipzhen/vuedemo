#设置客户端编码为UTF8
SET NAMES UTF8;
#创建数据库表jdw
DROP DATABASE IF EXISTS vans;
CREATE DATABASE vans CHARSET=UTF8;
#进入vans
USE vans;
#图片
CREATE TABLE vans_prd(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title varchar(32),
  img_url varchar(60),
  price decimal(10,2)
);

#插入数据 商品列表 product
insert into vans_prd values(null,'FULTON TRUCKER男款棒球帽','http://127.0.0.1:3000/img/prd1.jpg',260);
insert into vans_prd values(null,'ERA男女款帆布鞋','http://127.0.0.1:3000/img/prd2.jpg',485);
insert into vans_prd values(null,'SK8-HI 138 DECON SF男女款帆布鞋','http://127.0.0.1:3000/img/prd3.jpg',595);
insert into vans_prd values(null,'ERA男女款帆布鞋','http://127.0.0.1:3000/img/prd4.jpg',485);
insert into vans_prd values(null,'ERA男女同款帆布鞋','http://127.0.0.1:3000/img/prd5.jpg',535);
insert into vans_prd values(null,'SK8-HI 138 DECON SF男女款帆布鞋','http://127.0.0.1:3000/img/prd6.jpg',260);
insert into vans_prd values(null,'Vans(范斯)男款长裤', 'http://127.0.0.1:3000/img/prd7.jpg',590);
insert into vans_prd values(null,'Vans(范斯)男女款运动包','http://127.0.0.1:3000/img/prd8.jpg',280);

#创建轮播图图片
CREATE TABLE vans_prdlist_img(
  imgid INT PRIMARY KEY AUTO_INCREMENT,
  img_url varchar(60),
  pid int
);
#插入数据 轮播图 imglist
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner1.jpg',1);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner2.jpg',1);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner3.jpg',1);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner4.jpg',1);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner5.jpg',2);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner6.jpg',2);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner7.jpg',2);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner8.jpg',2);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner9.jpg',3);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner10.jpg',3);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner11.jpg',3);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner12.jpg',3);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner13.jpg',4);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner14.jpg',4);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner15.jpg',4);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner16.jpg',4);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner17.jpg',5);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner18.jpg',5);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner19.jpg',5);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner20.jpg',5);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner21.jpg',6);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner22.jpg',6);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner23.jpg',6);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner24.jpg',6);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner25.jpg',7);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner26.jpg',7);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner27.jpg',7);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner28.jpg',7);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner29.jpg',8);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner30.jpg',8);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner31.jpg',8);
insert into vans_prdlist_img values(null,'http://127.0.0.1:3000/img/banner32.jpg',8);

#创建用户表 
CREATE TABLE vans_login(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname varchar(32),
  upwd varchar(16)
);

insert into vans_login values(null,'user1','123456');
insert into vans_login values(null,'user2','123456');
insert into vans_login values(null,'user3','123456');


#创建购物车列表
#货币有误差
#price int 要求精度高不允许出错
create table vans_cart(
    id int primary key auto_increment,
    count int,
    pid int,
    uid int
);

#创建新闻评论表
create table vans_comment(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nid INT,
    content VARCHAR(120)
);