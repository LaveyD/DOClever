webpackJsonp([15],{183:function(e,t,i){(function(e){var t=new e({el:"#app",data:{dialogVisible:!1,dis:[{title:"DOClever是我目前用到过最好的一个接口管理平台",name:"iOS开发者李续续"},{title:"有了DOClever，和前端的沟通都顺畅了很多",name:"JAVA程序员张洋"},{title:"使用DOClever可以让我和后端的数据无缝衔接，再也停不下来",name:"前端工程师李彩凤"}],opts:{start:0,dir:"v",duration:500,beforeChange:function(e,i){t.bShowNext=6!=i;for(var n=document.body.getElementsByTagName("img"),o=0;o<n.length;o++)n[o].hasAttribute("lazy")&&n[o].getAttribute("lazy")==i&&!n[o].src&&(n[o].src=n[o].getAttribute("real_src"))},afterChange:function(e,t){}},bShowNext:!0},methods:{start:function(){this.isLogin?location.href="project/project.html":location.href="login/login.html"},moveNext:function(){this.$refs.example.$fullpage.moveNext()}}})}).call(t,i(5))}},[183]);