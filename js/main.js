"use strict"
// Jquery
$(document).ready(function(){
  // nav#snb
  $(".snb__main > li").hover(function(){
    $(this).find(".snb__sub").stop().fadeIn(150);
  },function(){
    $(this).find(".snb__sub").stop().fadeOut(150);
  });

  // slide
  function slidemove(){
    let smv=$(".slide__box > div").width();
    $(".slide__box").animate({
      left:-smv
    },function(){
      $(".slide__box > div:first").appendTo(".slide__box");
      $(".slide__box").css("left",0);
    });
  }
  setInterval(slidemove, 3000);


  // pop
  $("#pop").hide();
  $(".notice__box ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });

});