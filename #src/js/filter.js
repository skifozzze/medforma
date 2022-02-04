
$(function () {
  $('.filter-size__btn').on('click', function () {    
    $('.filter-size__btn').toggleClass('filter-size__btn--active');   
    $('.filter-size__form').toggleClass('filter-size__form--active');
  })

  $('.filter-color__btn').on('click', function () {    
    $('.filter-color__btn').toggleClass('filter-color__btn--active');   
    $('.filter-color__form').toggleClass('filter-color__form--active');
  })

  $('.filter-price__btn').on('click', function () {    
    $('.filter-price__btn').toggleClass('filter-price__btn--active');   
    $('.filter-price__form').toggleClass('filter-price__form--active');
  })

  $('.filter-gender__btn').on('click', function () {    
    $('.filter-gender__btn').toggleClass('filter-gender__btn--active');   
    $('.filter-gender__form').toggleClass('filter-gender__form--active');
  })

  $('.filter-sort__btn').on('click', function () {    
    $('.filter-sort__btn').toggleClass('filter-sort__btn--active');   
    $('.filter-sort__form').toggleClass('filter-sort__form--active');
  }) 
})