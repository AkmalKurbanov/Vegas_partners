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
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });

    var swiper = new Swiper('.partners-js', {
      slidesPerView: 4,
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });