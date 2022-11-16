$(document).ready(function(){

    $(".nav__menu li a").on("click",function(e){
      e.preventDefault();
      let thisTarget=$(this).attr("href");
      $(window).scrollTop($(thisTarget).offset().top);

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
        $(".desBox").hide();
      });
      $(".des_li").click(function(){
        $(".desBox").show();
        $(".pubBox").hide();
      });
      
      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      

       




});