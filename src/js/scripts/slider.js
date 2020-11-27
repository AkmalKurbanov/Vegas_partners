    var swiper = new Swiper('.steps-js', {
      direction: 'vertical',
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
        clickable: true,
      }
    });
    var swiper = new Swiper('.advantages-js', {
      direction: 'vertical',
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });