"use strict"


let burger = $('.header__burger')
let menu = $('.header__menu--breakpoint')
let list = $('.header__list--breakpoint')


burger.click(function () {
   burger.toggleClass('active')
   menu.toggleClass('active')
   $('body').toggleClass('lock')


})
list.click(function () {
   menu.removeClass('active')
   burger.removeClass('active')
   $('body').toggleClass('lock')
})



$('.question__item').click(function () {
   const children = $(this).children('.question__answer')

   if ($(this).hasClass('active')) {
      $(this).removeClass('active')
   } else {
      $('.question__item').removeClass('active')
      $(this).addClass('active')
   }

   if (children.hasClass('active')) {
      children.removeClass('active')

   } else {
      $('.question__answer').removeClass('active')
      children.addClass('active')

   }

})
$(document).click(event => {
   if (!$(event.target).is('.question__item, .question__item *')) {
      $('.question__answer').removeClass('active')
      $('.question__item').removeClass('active')
   }
})






new Swiper('.reviews-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true
   },

   pagination: {
      el: '.reviews-pagination',
      clickable: true,
   },

   breakpoints: {
      1920: {
         autoplay: false
      },
      576: {
         autoplay: true
      }
   },

})





new Swiper('.quality-slider', {
   pagination: {
      el: '.quality-pagination',
      clickable: true,
   },
   spaceBetween: 20,
})


$('.quality-pagination span[aria-label="Go to slide 1"]').append('<span class="bullet"><span class="bullet-res">Разрешение</span><span class="bullet-text">1 Мп (1280 x 720px)</span></span>')
$('.quality-pagination span[aria-label="Go to slide 2"]').append('<span class="bullet"><span class="bullet-res">Разрешение</span><span class="bullet-text">2 Мп (2052 x 1536px)</span></span>')
$('.quality-pagination span[aria-label="Go to slide 3"]').append('<span class="bullet"><span class="bullet-res">Разрешение</span><span class="bullet-text">4 Мп (2560 x 1440px)</span></span>')
$('.quality-pagination span[aria-label="Go to slide 4"]').append('<span class="bullet"><span class="bullet-res">Разрешение</span><span class="bullet-text">6 Мп (3072x 2048px)</span></span>')