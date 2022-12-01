function topTo(){
  var thePart = $("#loading").prev()
  $(".downLine").click(()=>{
    $("#loading").css('top','0')
    setTimeout(()=>{
     thePart.css('display','none')
      $("#loading").css('top','100%')
    },2500)
    setTimeout(()=>{
      //服务端跳转href  https://travelless.github.io/genshinLife/
      location.href="index.html"
    },3000)
  })

  $("a").click(function(){
    var to = $(this).attr('to')
    var where = $(this).attr('where')
    $("#loading").css('top','0')
    setTimeout(()=>{
      thePart.css('display','none')
      $("#loading").css('top','100%')
    },2500)
    // if(where == 'in'){
    //   setTimeout(()=>{
    //     location.href = "/genshinLife/" + to
    //   },3000)
    // } else {
      setTimeout(()=>{
        location.href = to
      },3000)
    // }
    
  })
}
