// window  
  
  
  
  
  
  
  
  
  var swiper = new Swiper(".home-slider", {
      spaceBetween: 20,
      effect: "fade",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    });

    // for featured section

    var swiper = new Swiper(".feature-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            820: {
                slidesPerView: 3,
            },
        },
      });