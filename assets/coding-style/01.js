$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 768;
    var nav = $('#nav_black_back');    
    nav.hide();
  if (winW <= devW) {
    //767px以下の時の処理
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#sitetitle").addClass("header_small");
            nav.fadeIn().addClass("nav_black");;
            
        } else {
            nav.fadeOut();
            $("#sitetitle").removeClass("header_small");
        }
    });

  } else if ((winW <= 1024)) {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("h1").addClass("header_medium");
            nav.fadeIn().addClass("nav_black_medium");;
            
        } else {
            nav.fadeOut();
            $("h1").removeClass("header_medium");
        }
    });


  }else {// 1024px以上の時の処理

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("h1").addClass("header_large");
            nav.fadeIn().addClass("nav_black_large");;
            
        } else {
            nav.fadeOut();
            $("h1").removeClass("header_large");
        }
    });


    
  }
});

  /* SP menu */
  // function toggleNav() {
  //   var body = document.body;
  //   var hamburger = $('.nav_btn')[0];
  //   var blackBg = $('.nav_bg')[0];
  
  //   hamburger.addEventListener('click', function() {
  //     $(body).toggleClass('nav_open');
  //   });
  //   blackBg.addEventListener('click', function() {
  //     // body.classList.remove('nav_open'); //もう一度クリックで解除
  //     $(body).removeClass('nav_open');
  //   });
  // }
  // toggleNav();

function toggleNav() {
  var body = document.body;
  var navBtn = $('.nav_btn')[0];
  var blackBg = $('.nav_bg')[0];
  $(navBtn).on('click', function() {
    $(body).toggleClass('nav_open');
  });
  $(blackBg).on('click', function() {
    // body.classList.remove('nav_open'); //もう一度クリックで解除
    $(body).removeClass('nav_open');
  });
}
toggleNav();

// $(function() {
//     var nav = $('#nav');    
//     nav.hide();
//     //スクロールが100に達したらボタン表示
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $("nav").addClass("header_small");
//             nav.fadeIn().addClass("nav_black");;
            
//         } else {
//             nav.fadeOut();
//             $("nav").removeClass("header_small");
//         }
//     });
//     //スクロールしてトップ
//     nav.click(function () {
//         $('body,html').animate({
//             scrollTop: 0
//         }, 500);
//         return false;
//     });
// });

// $(function(){
//     $(window).scroll(function() {
//       if($(window).scrollTop() > 100 ) {
//         $('nav').animate({'backgroundColor':'#e10000'},'slow');
//       } 
//       else {
//         $('nav').animate({'backgroundColor':'#FF0000'},'slow');
//       }
//     });
// });