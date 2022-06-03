//write here your js
$(document).ready(function () {
  $('.re').click(function () {
    $(this).toggleClass('re-exp');
    $('.re-in2 > h4').toggleClass('visible');
    $('.re-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })
  $('.ae').click(function () {
    $(this).toggleClass('ae-exp');
    $('.ae-in2 > h4').toggleClass('visible');
    $('.ae-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  var header = $('.header'),
scrollPrev = 0;

$(window).scroll(function() {
var scrolled = $(window).scrollTop();

if ( scrolled > 100 && scrolled > scrollPrev ) {
header.addClass('out');
} else {
header.removeClass('out');
}
scrollPrev = scrolled;
});


// const cursorRounded = document.querySelector('.rounded');
//
//
//
// const moveCursor = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
//
//   cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//
//
//
// }
//
// window.addEventListener('mousemove', moveCursor)







})
