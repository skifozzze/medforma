$(function () {
  $('.products__accordion-title').on('click', function () {
    $(this).parent().toggleClass('products__accordion-item--active')
  })
})