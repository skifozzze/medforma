$(function () {
  $('.products__accordion-title').on('click', function () {

    $('.products__accordion-item').removeClass('products__accordion-item--active')
    $(this).parent().addClass('products__accordion-item--active')
   
  })
  
})