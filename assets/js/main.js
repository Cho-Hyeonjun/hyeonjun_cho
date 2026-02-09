// $(function () {
//   let isScrolling = false;

//   function scrollByPage(direction) {
//     if (isScrolling) return;

//     const vh = window.innerHeight;
//     const currentScroll = $(window).scrollTop();
//     const maxScroll = $(document).height() - vh;

//     let targetScroll =
//       direction === 'down'
//         ? currentScroll + vh
//         : currentScroll - vh;

//     // 스크롤 범위 제한
//     if (targetScroll < 0) targetScroll = 0;
//     if (targetScroll > maxScroll) targetScroll = maxScroll;

//     // 이동할 필요가 없으면 중단
//     if (targetScroll === currentScroll) return;

//     isScrolling = true;

//     $('html, body').stop().animate(
//       { scrollTop: targetScroll },
//       600,
//       'swing',
//       function () {
//         isScrolling = false;
//       }
//     );
//   }

//   /* 마우스 휠 */
//   $(window).on('wheel', function (e) {
//     if (isScrolling) return;

//     e.preventDefault();

//     if (e.originalEvent.deltaY > 0) {
//       scrollByPage('down');
//     } else {
//       scrollByPage('up');
//     }
//   });

//   /* 키보드 ↑ ↓ */
//   $(window).on('keydown', function (e) {
//     if (isScrolling) return;

//     if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       scrollByPage('down');
//     }

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       scrollByPage('up');
//     }
//   });

// });
$(function(){
  /* 헤더 클래스 토글 */
  $(window).on('scroll', function () {
    const vh = window.innerHeight;

    if ($(window).scrollTop() >= vh) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  });
});

$(function(){
  $('.tab_btn button').on('click', function(e){
    $('.tab_btn button').removeClass('on')
    $(this).addClass('on')
    
    const idx = $(this).index();

    $('.tab_conts .cont').removeClass('on');
    $('.tab_conts .cont').eq(idx).addClass('on');
  });
});

/* $(function(){
  $('.pro_cont .cont_tit').on('click', function(e){
    e.preventDefault();

    const $slide = $(this).siblings('.slide');

    $('.slide').not($slide).slideUp(300);

    $slide.stop(true, true).slideToggle(300);

  });
}); */

$('.pro_cont .cont_tit').on('click', function () {
  const $item = $(this).closest('.pro_cont li');
  const $body = $item.find('.slide');

  // 이미 열려있는 경우
  if ($item.hasClass('active')) {
    $body.slideUp();
    $item.removeClass('active');
    return;
  }

  // 다른 항목 닫기
  $('.slide').slideUp();
  $('.pro_cont li').removeClass('active');

  // 현재 항목 열기
  $body.slideDown();
  $item.addClass('active');
});


$(function(){
	//popup
	$(".popup_sori").on('click', function(){
		window.open('https://cho-hyeonjun.github.io/Soribada/', 'soribade', 'width=400, height=500, top=20, left=100')
	});
});

$(function(){

  $('.popup_smeg').on('click', function () {
  $('.img_smeg').fadeIn(300).css('display', 'flex');
  });

  $('.img_smeg').on('click', function () {
  $(this).fadeOut(300);
  });

});

$(function(){

  $('.popup_seolgi').on('click', function () {
  $('.img_seolgi').fadeIn(300).css('display', 'flex');
  });

  $('.img_seolgi').on('click', function () {
  $(this).fadeOut(300);
  });

});

$(function(){
  $('a.menu').on('click', function (e) {
  e.preventDefault();

  const targetId = $(this).attr('href');
  const targetOffset = $(targetId).offset().top;

    $('html, body').animate(
      { scrollTop: targetOffset },
      600
    );
  });
});