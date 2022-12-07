jQuery(document).ready(function ($) {

   //swiper slider
   if ($('.swiper-slide').length > 1) {
      var swiper = new Swiper('.swiper-container', {
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         loop: true,
         slidesPerView: 3,
         spaceBetween: 30,
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
         autoplay: {
            delay: 5000,
            disableOnInteraction: false,
         },
         simulateTouch: true,
         breakpoints: {
            370: {
               slidesPerView: 1.2,
               spaceBetween: 5
            },
            680: {
               slidesPerView: 2,
               spaceBetween: 5
            },
            900: {
               slidesPerView: 3,
            },
            1120: {
               slidesPerView: 3,
            },
            1340: {
               slidesPerView: 3,
            },
            1570: {
               slidesPerView: 3,
            },
            1630: {
               slidesPerView: 3,
            },
            7000: {
               slidesPerView: 3,
            }

         },
      });
   } else {
      $('.swiper-button-next').css('display', 'none');
      $('.swiper-button-prev').css('display', 'none');
   }


});