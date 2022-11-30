
$(document).ready(function(){
  
 

  let $menu     = $('.nav__menu li'),
  $contents = $('.scroll'),
  $doc      = $('html, body');
$(function () {
  // 해당 섹션으로 스크롤 이동
  $menu.on('click','a', function(e){
      let $target = $(this).parent(),
          idx     = $target.index(),
          section = $contents.eq(idx),
          offsetTop = section.offset().top;
      $doc.stop()
              .animate({
                  scrollTop :offsetTop
              }, 800);
      return false;
  });
});
// menu class 추가
$(window).scroll(function(){
  let scltop = $(window).scrollTop();
  $.each($contents, function(idx, item){
    let $target   = $contents.eq(idx),
          i         = $target.index(),
          targetTop = $target.offset().top;

      if (targetTop <= scltop) {
          $menu.removeClass('on');
          $menu.eq(idx).addClass('on');
      }
      if (!(200 <= scltop)) {
          $menu.removeClass('on');
      }
  })



// Go to the TOP
let btnTop = $('.btn-top');
btnTop.on('click','a', function(e){
  e.preventDefault();
  $doc.stop()
          .animate({
              scrollTop : 0
          },800)
});

}(window, window.jQuery));


$('.navi').on('click', 'li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});

$('.section01_me>a').click(function(){
  $('#modalBG').addClass("active");
});
$('.modal .btn').click(function(){
  $('#modalBG').removeClass("active");
});

if (matchMedia("screen and (min-width: 785px)").matches) {
  // 786px 이상에서 사용할 스크립트
  $(".pub01 a, .des01 a, .des02 a, .des03 a").mouseover(function(){
    $(this).children("span").hide();
  });
  
  $(".pub01 a, .des01 a, .des02 a, .des03 a").mouseout(function(){
    $(".pub01 a span, .des01 a span, .des02 a span, .des03 a span").show();
  });

} else {
  // 785px 미만에서 사용할 스크립트
  $(".pub01 a, .des01 a, .des02 a, .des03 a").mouseover(function(){
    $(this).children("span").show();
  });
  
  $(".pub01 a, .des01 a, .des02 a, .des03 a").mouseout(function(){
    $(".pub01 a span, .des01 a span, .des02 a span, .des03 a span").show();
  });
}



if (matchMedia("screen and (min-width: 480px)").matches) {
  // 480px 이상에서 사용할 스크립트
  window.onresize = function(){
    document.location.reload();
  };

} else {
  // 480px 미만에서 사용할 스크립트
  window.onresize = function(){
    document.location.doNotReload();
  };
}
    


      $(".pub_li").click(function(){
        $(".pubBox").show();
        $(".desBox, .swiper-button-next, .swiper-button-prev").hide();
      });
      $(".des_li").click(function(){
        $(".desBox, .swiper-button-next, .swiper-button-prev").show();
        $(".pubBox").hide();
      });
      
      let swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

//sub01 tab menu
      const btn = document.getElementsByClassName("tabbtn");
const Box = document.getElementsByClassName("portfolioBox");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    document.querySelectorAll(".portfolioBox.active").forEach(function(item) {
      item.classList.remove("active");
    });
    Box[this.value].className += " active";
  })
}

$('.tabMenu').on('click', '.tabbtn', function() {
  $('.tabbtn').removeClass('active');
  $(this).addClass('active');
});     

//header hamburger Menu
const toggleBtn = document.querySelector('.nav__toogleBtn');
const menu = document.querySelector('.nav__menu');

toggleBtn.addEventListener('click',() => {
menu.classList.toggle('active');
});











});