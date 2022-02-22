
$(function () {
   
  $('.filter__title').on('click', function () {
    $(this).parent().toggleClass('filter__item--active')
  })

  $('.filter-select, .filter-ruler__select, .checkout__forms-select').styler();




  

})