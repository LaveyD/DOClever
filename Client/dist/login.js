webpackJsonp([13],{321:function(e,t,n){(function(e,t,n,o){new e({el:"#app",data:{username:"",pwd:"",loginPending:!1,remember:0,openId:""},methods:{login:function(){var e=this;if(!this.username||!this.pwd)return void this.$message.error("用户名密码不能为空");this.loginPending=!0,t.post("/user/login",{name:e.username,password:e.pwd},{"content-type":"application/x-www-form-urlencoded"}).then(function(t){e.loginPending=!1,200==t.code?(e.$notify({title:"登录成功",type:"success"}),n.clear(),n.update(t.data,e.remember),setTimeout(function(){location.href="../project/project.html"},1500)):e.$notify({title:t.msg,type:"error"})})},qqLogin:function(){var e=this,o=QC.Login.showPopup({}),i=setInterval(function(){if(o.closed&&(clearInterval(i),QC.Login.check())){var r;QC.api("get_user_info",{}).success(function(o){r=o.data,QC.Login.getMe(function(o,i){e.openId=o,t.post("/user/login",{qqid:o,qqimg:r.figureurl_qq_1}).then(function(t){200==t.code?(e.$notify({title:"登录成功",type:"success"}),n.clear(),n.update(t.data,e.remember),setTimeout(function(){location.href="../project/project.html"},1500)):2==t.code?(sessionStorage.setItem("qqid",o),sessionStorage.setItem("qqname",r.nickname),sessionStorage.setItem("qqimg",r.figureurl_qq_1),window.open(location.protocol+"//"+location.host+"/html/web/register/registerqq.html")):e.$notify({title:t.msg,type:"error"})})})})}},500)}},created:function(){var e=this;window.addEventListener("message",function(o){if(o.origin==location.protocol+"//"+location.host){var i;try{i=JSON.parse(o.data)}catch(e){return}if(!i.name||!i.password)return;t.post("/user/login",{name:i.name,password:i.password}).then(function(t){200==t.code?(e.$notify({title:"登录成功",type:"success"}),n.clear(),n.update(t.data,e.remember),setTimeout(function(){location.href="../project/project.html"},1e3)):e.$notify({title:t.msg,type:"error"})})}},!1)}});o.ready(function(){document.body.onkeydown=function(e){if(13==(window.event||e).keyCode){var t=document.createEvent("HTMLEvents");t.initEvent("click",!0,!0),t.eventType="message",document.getElementById("login").dispatchEvent(t)}}})}).call(t,n(5),n(2),n(3),n(0))}},[321]);