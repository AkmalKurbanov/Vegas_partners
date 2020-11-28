var mainScreenHeight = $('.main-screen').height();
$('.main-screen__title').css('height', mainScreenHeight);

$('.registration-js').on('click', function () {
  $('.registration').css('display', 'flex');
});
$('.callback-js').on('click', function () {
  $('.callback').css('display', 'flex');
});
$('.login-js').on('click', function () {
  $('.login').css('display', 'flex');
});
$(document).mouseup(function (e) {
  var div = $(".popup__wrap");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    $('.popup').fadeOut();
  }
});