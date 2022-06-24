//write here your js
$(document).ready(function () {
  $('.re').click(function () {
    $(this).toggleClass('re-exp');
    $('.re-in2 > h4').toggleClass('visible');
    $('.re-in2 > div').toggleClass('visible');
    $('.re-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })
  $('.ae').click(function () {
    $(this).toggleClass('ae-exp');
    $('.ae-in2 > h4').toggleClass('visible');
    $('.ae-in2 > div').toggleClass('visible');
    $('.ae-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.be').click(function () {
    $(this).toggleClass('be-exp');
    $('.be-in2 > h4').toggleClass('visible');
    $('.be-in2 > div').toggleClass('visible');
    $('.be-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.ce').click(function () {
    $(this).toggleClass('ce-exp');
    $('.ce-in2 > h4').toggleClass('visible');
    $('.ce-in2 > div').toggleClass('visible');
    $('.ce-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.de').click(function () {
    $(this).toggleClass('de-exp');
    $('.de-in2 > h4').toggleClass('visible');
    $('.de-in2 > div').toggleClass('visible');
    $('.de-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.ee').click(function () {
    $(this).toggleClass('ee-exp');
    $('.ee-in2 > h4').toggleClass('visible');
    $('.ee-in2 > div').toggleClass('visible');
    $('.ee-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.fe').click(function () {
    $(this).toggleClass('fe-exp');
    $('.fe-in2 > h4').toggleClass('visible');
    $('.fe-in2 > div').toggleClass('visible');
    $('.fe-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })


  $('.ge').click(function () {
    $(this).toggleClass('ge-exp');
    $('.ge-in2 > h4').toggleClass('visible');
    $('.ge-in2 > div').toggleClass('visible');
    $('.ge-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })


  $('.he').click(function () {
    $(this).toggleClass('he-exp');
    $('.he-in2 > h4').toggleClass('visible');
    $('.he-in2 > div').toggleClass('visible');
    $('.he-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.ie').click(function () {
    $(this).toggleClass('ie-exp');
    $('.ie-in2 > h4').toggleClass('visible');
    $('.ie-in2 > div').toggleClass('visible');
    $('.ie-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })

  $('.je').click(function () {
    $(this).toggleClass('je-exp');
    $('.je-in2 > h4').toggleClass('visible');
    $('.je-in2 > div').toggleClass('visible');
    $('.je-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })


  $('.ke').click(function () {
    $(this).toggleClass('ke-exp');
    $('.ke-in2 > h4').toggleClass('visible');
    $('.ke-in2 > div').toggleClass('visible');
    $('.ke-in3 > button').toggleClass('visible');
      // $('.re-in2 > h4').css('display', 'block');
  })


  $('.le').click(function () {
    $(this).toggleClass('le-exp');
    $('.le-in2 > h4').toggleClass('visible');
    $('.le-in2 > div').toggleClass('visible');
    $('.le-in3 > button').toggleClass('visible');
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


// var header2 = $('.header-mob'),
// scrollPrev = 0;
//
// $(window).scroll(function() {
// var scrolled = $(window).scrollTop();
//
// if ( scrolled > 100 && scrolled > scrollPrev ) {
// ('.header-mob')addClass('.out');
// } else {
// ('.header-mob')removeClass('.out');
// }
// scrollPrev = scrolled;
// });


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
  containment: "yy"
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

  // $('#side-cart').hover(function () {
  //
  // $('#side-cart').toggleClass('picture-cart');
  // $('#side-cart > div').toggleClass('noner');
  // })


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



// $(document).mousemove(function(e) {
//   $('#cursor').css({
//     left:e.pageX - 30,
//     top:e.pageY - 30
//   });
// });

// $(".re").hover(
//    function () {
//      $('#cursor').css("visible");
//    },
//    function () {
//      $('#cursor').removeClass("visible");
//    }
//  );

// $(".re").hover(
//    function () {
//      $('#cursor').css("display","block");
//    }
//  );


$(".re").hover(
   function () {
     $('#godar1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#godar1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".ae").hover(
   function () {
     $('#highway1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#highway1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".be").hover(
   function () {
     $('#match1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#match1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".ce").hover(
   function () {
     $('#zero1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#zero1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".de").hover(
   function () {
     $('#ny1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#ny1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".fe").hover(
   function () {
     $('#sosedka1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#sosedka1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".ee").hover(
   function () {
     $('#running1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#running1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".ge").hover(
   function () {
     $('#breath1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#breath1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".he").hover(
   function () {
     $('#noi1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#noi1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".ie").hover(
   function () {
     $('#tree1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#tree1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".je").hover(
   function () {
     $('#moby1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#moby1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".ke").hover(
   function () {
     $('#shine1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#shine1').css({
    left:e.pageX + 30,
    top:e.pageY - 250
  });
});

$(".le").hover(
   function () {
     $('#earth1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#earth1').css({
    left:e.pageX + 30,
    top:e.pageY - 350
  });
});

$(".about").hover(
   function () {
     $('#car2').toggleClass("visible");
   }
 );

 $(".overlay").hover(
    function () {
      $('#car1').toggleClass("visible");
    }
  );

  $("nav").hover(
     function () {
       $('#car1').toggleClass("visible");
     }
   );


$(document).mousemove(function(e) {
  $('#car1').css({
    left:e.pageX + 2,
    top:e.pageY - 2
  });
});

$(document).mousemove(function(e) {
  $('#car2').css({
    left:e.pageX + 10,
    top:e.pageY - 10
  });
});

$(".afisha").hover(
   function () {
     $('#sign1').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#sign1').css({
    left:e.pageX + 20,
    top:e.pageY - 20
  });
});


$(".map").hover(
   function () {
     $('#sign2').toggleClass("visible");
   }
 );


$(document).mousemove(function(e) {
  $('#sign2').css({
    left:e.pageX + 20,
    top:e.pageY - 20
  });
});


// $(function () {
// let count = 0;
// $('#buy1').click(function () {
// count += 1;
// if (count == 2) {
// $(this).removeClass('png');
// }
// });
// });
//


// $(function () {
//   let count = 0;
//
//   $('#buy1').click(function () {
//     count += 1;
//   $('h7').html(' ' + count);
//     $('#card-c').addClass('visible');
//
//      });
//    });
//
//    $(function () {
// let count;
//      $('#buy2').click(function () {
//        count += 1;
//      $('h7').html(' ' + count);
//        $('#card-p').addClass('visible');
//
//         });
//       });




$(function () {
  let count = 0;
  let ccount = 0;
  let pcount = 0;
  let tcount = 0;
  let scount = 0;
  $('#buy1').click(function () {
    count += 1;
    ccount += 1;
  $('h7').html(' ' + count);
  $('#count-c').html(' ' + ccount);
    $('#card-c').addClass('visible');
  $('.cart-count').addClass('visible');
  $('#side-cart-btn').addClass('visible');
    $('.empty').addClass('noner');
  if (count == 10) {
    $('h7').css("padding-left" , "30%");

  }
     });



     $('#buy2').click(function () {
       count += 1;
      pcount += 1;
     $('h7').html(' ' + count);
     $('#count-p').html(' ' + pcount);
       $('#card-p').addClass('visible');
  $('.cart-count').addClass('visible');
  $('#side-cart-btn').addClass('visible');
    $('.empty').addClass('noner');
  if (count == 10) {
    $('h7').css("padding-left" , "30%");

  }
        });

        $('#buy3').click(function () {
          count += 1;
          tcount += 1;
        $('h7').html(' ' + count);
        $('#count-t').html(' ' + tcount);
          $('#card-t').addClass('visible');
            $('.cart-count').addClass('visible');
            $('#side-cart-btn').addClass('visible');
              $('.empty').addClass('noner');
            if (count == 10) {
              $('h7').css("padding-left" , "30%");

            }
           });

           $('#buy4').click(function () {
             count += 1;
             scount += 1;
           $('h7').html(' ' + count);
           $('#count-s').html(' ' + scount);
             $('#card-s').addClass('visible');
               $('.cart-count').addClass('visible');
               $('#side-cart-btn').addClass('visible');
                 $('.empty').addClass('noner');
             if (count == 10) {
               $('h7').css("padding-left" , "30%");

             }

              });



      });



      $('#menu').click(function () {
  $('.opened-mob-menu').toggleClass('noner');
        $('.burger').toggleClass('closed');
        $('.m2').toggleClass('ghost');
        $('.header-mob').toggleClass('noborder');
          // $('.re-in2 > h4').css('display', 'block');
      })



    });
