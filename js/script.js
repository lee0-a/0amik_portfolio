
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

      $(".pub01 div, .des01 div, .des02 div, .des03 div").mouseover(function(){
        $(this).children("span").hide();
      });
      
      $(".pub01 div, .des01 div, .des02 div, .des03 div").mouseout(function(){
        $(".pub01 div span, .des01 div span, .des02 div span, .des03 div span").show();
      });

      

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







});