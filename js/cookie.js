//cookie相关函数，创建cookie
function setCookie(key, value, time) {
  var date = new Date();
  date.setDate(date.getDate() + time);
  document.cookie = key + '=' + value + ';expires=' + date;
}
//cookie相关函数，获取cookie的value
function getCookie(key) {
  var cookies = document.cookie;
  var arry = cookies.split('; ');
  for (var i = 0; i < arry.length; i++) {
      var n_arry = arry[i].split('=');
      // console.log(n_arry);
      if (n_arry[0] == key) {
          return (n_arry[1]);
      }
  }
}

//cookie相关函数，清除cookie
function clearCookie(name) {  
  setCookie(name, "", -1);  
}  

function cookieCheck () {
   //cookie判断
   var thePart = $("#loading").prev()
   var userName = getCookie('userName')
   if(userName){
     $("#userSpace").html(userName)
     $(".downLine").html('退出登录')
     $(".downLine").click(()=>{
       clearCookie('userName')
       $("#loading").css('top','0')
       setTimeout(()=>{
        thePart.css('display','none')
         $("#loading").css('top','100%')
       },2500)
       setTimeout(()=>{
         location.href="http://localhost:8080/genshinLife/index.html"
       },3000)
     })
   } else {
     $("#userSpace").html('游客')
     $(".downLine").html('登录')
     $(".downLine").click(()=>{
       $("#loading").css('top','0')
       setTimeout(()=>{
        thePart.css('display','none')
         $("#loading").css('top','100%')
       },2500)
       setTimeout(()=>{
         location.href="http://localhost:8080/genshinLife/index.html"
       },3000)
     })
   }
}