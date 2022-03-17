$(function () {
  
  $('.header-top__btn, .header-top a').on('click', function () {    
    $('.menu-info, .menu-site').toggleClass('menu-info--active, menu-site--active')    
    $('.header-bottom__menu').removeClass('header-bottom__menu--active')
  })

   $('.header-bottom__btn, .header-bottom a').on('click', function () {    
   $('.header-bottom__menu').toggleClass('header-bottom__menu--active')    
   
  })
})