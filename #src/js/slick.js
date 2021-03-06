$(function () {
  
  $('.banners__slider').slick({    
    dots: true,
    prevArrow: '<button class="slider-btn slider-btn__prev" aria-label="previous button"><svg width="12" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L0.999999 7L7 1" stroke="#44424B" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__next" aria-label="previous button"><svg width="12" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="#44424B" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/></svg></button>',      
    responsive: [
      {
        breakpoint: 1305,
        settings: {
          prevArrow: false,
          nextArrow: false
        }
      }
    ] 
  });

  $('.top-sales__slider, .new__slider, .reviewed__slider, .recomended__slider').slick({
    slidesToShow: 4,        
    prevArrow: '<button class="slider-btn slider-btn__prev" aria-label="previous button"><svg width="12" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L0.999999 7L7 1" stroke="#44424B" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__next" aria-label="previous button"><svg width="12" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="#44424B" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/></svg></button>',      
     responsive: [
      {
        breakpoint: 1305,
         settings: {           
          slidesToShow: 3,
          dots: true,
          prevArrow: false,
          nextArrow: false
         }      
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,  
          dots: true,
          prevArrow: false,
          nextArrow: false
         }      
      }, 
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1,  
          dots: true,
          prevArrow: false,
          nextArrow: false
         }      
      },         
    ]     
  });

  $('.products__slider').slick({    
    dots: true,
    slidesToShow: 2, 
    prevArrow: '<button class="products__slider-btn products__slider-btn__prev" aria-label="previous button"><svg width="12" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L0.999999 7L7 1" stroke="#44424B" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="products__slider-btn products__slider-btn__next" aria-label="previous button"><svg width="12" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="#44424B" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/></svg></button>',      
     responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          prevArrow: false,
          nextArrow: false
        }
      }, 
       
    ]     
  });


  

})




