$(document).ready(function () {

  (function ($) {
    // $('ul.tabs__list').addClass('active').find('> li:eq(0)').addClass('current');

    $('ul.tabs__list li a').click(function (g) {
      var tab = $(this).closest('.tabs__wrap'),
        index = $(this).closest('li').index();

      tab.find('ul.tabs__list > li').removeClass('current');
      $(this).closest('li').addClass('current');

      tab.find('.tabs__content').find('div.tabs__item').not('div.tabs__item:eq(' + index + ')').slideUp();
      tab.find('.tabs__content').find('div.tabs__item:eq(' + index + ')').slideDown();

      g.preventDefault();
    });
  })(jQuery);

});
$('.first').on('click', function () {
  $('.first').addClass('current');
  $('.second,.third,.fourth,.fifth,.sixth,.seventh').removeClass('current');
});
$('.second').on('click', function () {
  $('.second').addClass('current');
  $('.first,.third,.fourth,.fifth,.sixth,.seventh').removeClass('current');
});
$('.third').on('click', function () {
  $('.third').addClass('current');
  $('.first,.second,.fourth,.fifth,.sixth,.seventh').removeClass('current');
});
$('.fourth').on('click', function () {
  $('.fourth').addClass('current');
  $('.first,.second,.third,.fifth,.sixth,.seventh').removeClass('current');
});
$('.fifth').on('click', function () {
  $('.fifth').addClass('current');
  $('.first,.second,.third,.fourth,.sixth,.seventh').removeClass('current');
});
$('.sixth').on('click', function () {
  $('.sixth').addClass('current');
  $('.first,.second,.third,.fourth,.fifth,.seventh').removeClass('current');
});
$('.seventh').on('click', function () {
  $('.seventh').addClass('current');
  $('.first,.second,.third,.fourth,.fifth,.sixth').removeClass('current');
});


// , .second, .third, .fourth, .fifth, .sixth, .seventh