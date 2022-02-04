$(function () {
  
  $('.pagination__link').on('click', function () {    
    $('.pagination__link').removeClass('pagination__link--active');   
    $(this).addClass('pagination__link--active');
  })

})