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
      });
   } else {
      $('.swiper-button-next').css('display', 'none');
      $('.swiper-button-prev').css('display', 'none');
   }


});