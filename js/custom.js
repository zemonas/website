$('.section-3').slick({
  dots: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1295,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//menu/navbar
const toggleButton = document.getElementsByClassName('menu')[0];
const navlist = document.getElementsByClassName('list')[0];

toggleButton.addEventListener('click', () => {
  $(navlist).toggle("closed");
  $('.menu').toggleClass("shape");
  $('.content-box').toggleClass("adjust")
});

$('#info' ).click(function () {
  $('.section-2').css('display','none');
  $('.section-3').css('display','none');
  $('.header').css('display','');
  $('body').removeClass('sec-2');
  $('body').removeClass('sec-3');
  $('body').addClass('sec-1');
  $('.section-1').css('display','');
})

$('#about , #another-about' ).click(function () {
  $('.section-1').css('display','none');
  $('.section-3').css('display','none');
  $('.header').css('display','none');
  $('body').removeClass('sec-1');
  $('body').removeClass('sec-3');
  $('body').addClass('sec-2');
  $('.section-2').css('display','');
})
$('#work' ).click(function () {
  $('.section-1').css('display','none');
  $('.section-2').css('display','none');
  $('.header').css('display','none');
  $('body').removeClass('sec-1');
  $('body').removeClass('sec-2');
  $('body').addClass('sec-3');
  $('.section-3').css('display','');
})



const view = document.getElementsByClassName('pre');

// ES6 arrow function expression and also making use of ES6 template strings
var log = (msg) => view[0].insertAdjacentHTML('beforeend', `${msg}`);

var letterCount = 0;
var sentenceCount = 0;

var type = function(message) {
    sentenceCount++;
    setTimeout(function() {
        message.forEach(function (character) {
            letterCount++;
            setTimeout(function() {
                log(character);
            }, 65 * letterCount);
        });
    }, 1000 * sentenceCount);
}

type('This is like notice board\n\n'.split(''));
type('HELLO\n\n'.split(''));
type('A STRANGE GAME.\n'.split(''));
type('THE ONLY WINNING MOVE IS\n'.split(''));
type('NOT TO PLAY.\n\n\n'.split(''));
type('HOW ABOUT A NICE GAME OF\nCHESS?'.split(''));
