var mainScreenHeight = $('.main-screen').height();
$('.main-screen__title').css('height', mainScreenHeight);

$('.registration-js').on('click', function (e) {
  event.preventDefault();
  $('.registration').css('display', 'flex');
});
$('.callback-js').on('click', function (e) {
  event.preventDefault();
  $('.callback').css('display', 'flex');
});
$('.login-js').on('click', function (e) {
  event.preventDefault();
  $('.login').css('display', 'flex');
});
$(document).mouseup(function (e) {
  var div = $(".popup__wrap");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    $('.popup').fadeOut();
  }
});

$(".nav").clone().appendTo(".mobile_menu__nav");
$(".footer .social ul").clone().appendTo(".mobile_menu .social");

$('.hamburger').on('click', function () {
  $(this).toggleClass('hamburger-open');
  $('.mobile_menu').toggleClass('open-menu');
});
$('.mobile_menu__close-btn').on('click', function () {
  $('.mobile_menu').removeClass('open-menu');
  $('.hamburger').removeClass('hamburger-open');
});
$(document).mouseup(function (e) {
  var div = $(".mobile_menu");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    div.removeClass("open-menu");
    $('.hamburger').removeClass('hamburger-open');
  }
});
