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

  $('.be').click(function () {
    $(this).toggleClass('be-exp');
    $('.be-in2 > h4').toggleClass('visible');
    $('.be-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.ce').click(function () {
    $(this).toggleClass('ce-exp');
    $('.ce-in2 > h4').toggleClass('visible');
    $('.ce-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.de').click(function () {
    $(this).toggleClass('de-exp');
    $('.de-in2 > h4').toggleClass('visible');
    $('.de-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.ee').click(function () {
    $(this).toggleClass('ee-exp');
    $('.ee-in2 > h4').toggleClass('visible');
    $('.ee-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.fe').click(function () {
    $(this).toggleClass('fe-exp');
    $('.fe-in2 > h4').toggleClass('visible');
    $('.fe-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })


  $('.ge').click(function () {
    $(this).toggleClass('ge-exp');
    $('.ge-in2 > h4').toggleClass('visible');
    $('.ge-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })


  $('.he').click(function () {
    $(this).toggleClass('he-exp');
    $('.he-in2 > h4').toggleClass('visible');
    $('.he-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.ie').click(function () {
    $(this).toggleClass('ie-exp');
    $('.ie-in2 > h4').toggleClass('visible');
    $('.ie-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.je').click(function () {
    $(this).toggleClass('je-exp');
    $('.je-in2 > h4').toggleClass('visible');
    $('.je-in3 > button').toggleClass('visible');
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
//


$('.rounded').on({
    mousemove: function(e){
        $( this ).css({top: e.pageY, left: e.pageX});
    }
});


// $('.openpath').click(function () {
//     $(this).css('display','none');
//   $('.opened').css('display','block');
//
// })

$('.openpath').click(function () {
    $(this).css('display','none');
  $('.opened').toggleClass('visible');

})

$('.close').click(function () {
  $('.opened').toggleClass('visible');
  $('.openpath').css('display','flex');

})
// $(function(){
//  $(".about").hover(function(){
//  $(".about").addClass(".cur")
//  });
// });

$( function() {
    $( "#map1" ).draggable({
  containment: "window"
})
  } );

  $('#learnmore').hover(function () {
    $('#learnmore-circle').toggleClass('visible');
  })

  $('#learnmore-pop').hover(function () {
    $('#learnmore-circle-2').toggleClass('visible');
  })

  $('#learnmore-tshirt').hover(function () {
    $('#learnmore-circle-3').toggleClass('visible');
  })


  $('#learnmore-book').hover(function () {
    $('#learnmore-circle-4').toggleClass('visible');
  })


  $('#side-cart').click(function () {
    $('.cart').toggleClass('visible');
  $('#side-cart').toggleClass('picture-cart');
  $('#side-cart > div').toggleClass('noner');
  })


// $(".large-btn").one('click', function(){
// $("#to-cart1").text($("#to-cart1").text().replace("в корзину", "в корзине!"));
// $(".large-btn").css('background-color','black');
// $("#to-cart1").css('color','white');
// });

$(".large-btn").click(function () {
$("#to-cart1").text($("#to-cart1").text().replace("в корзину", "в корзине!"));
$(".large-btn").css('background-color','black');
$("#to-cart1").css('color','white');
});

$('.size-true').click(function () {
  $('.size-true2').removeClass('selected');
  $(this).toggleClass('selected');
  $('#text-ons-true').toggleClass('.true-clicked');
    $('#text-ons-true2').removeClass('.true-clicked');
});

$('.size-true2').click(function () {
  $('.size-true').removeClass('selected');
  $(this).toggleClass('selected');
  $('#text-ons-true2').toggleClass('.true-clicked');
    $('#text-ons-true').removeClass('.true-clicked');
});



$('#buy1').click(function () {
  $(this).css('background-color','#F195BC');
  $('#buy1 > p').text($('#buy1 > p').text().replace("В КОРЗИНУ", "В КОРЗИНЕ!"));

});

$('#buy2').click(function () {
  $(this).css('background-color','#F195BC');
  $('#buy2 > p').text($('#buy2 > p').text().replace("В КОРЗИНУ", "В КОРЗИНЕ!"));

});

$('#buy3').click(function () {
  $(this).css('background-color','#F195BC');
  $('#buy3 > p').text($('#buy3 > p').text().replace("В КОРЗИНУ", "В КОРЗИНЕ!"));

});

$('#buy4').click(function () {
  $(this).css('background-color','#F195BC');
  $('#buy4 > p').text($('#buy4 > p').text().replace("В КОРЗИНУ", "В КОРЗИНЕ!"));

});


$('#back-circle').click(function () {
  $('#tovar-cup').toggleClass('noner');
})



    });
