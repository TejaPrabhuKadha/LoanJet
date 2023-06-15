let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

/*new
$('#form').find('input, textarea').on('keyup blur focus', function (e) {
  
   var $this = $(this),
       label = $this.prev('label');
 
      if (e.type === 'keyup') {
          if ($this.val() === '') {
           label.removeClass('active highlight');
         } else {
           label.addClass('active highlight');
         }
     } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
           label.removeClass('active highlight'); 
          } else {
           label.removeClass('highlight');   
          }   
     } else if (e.type === 'focus') {
       
       if( $this.val() === '' ) {
           label.removeClass('highlight'); 
          } 
       else if( $this.val() !== '' ) {
           label.addClass('highlight');
          }
     }
 
 });
 
 $('.tab a').on('click', function (e) {
   
   e.preventDefault();
   
   $(this).parent().addClass('active');
   $(this).parent().siblings().removeClass('active');
   
   target = $(this).attr('href');
 
   $('.tab-content > div').not(target).hide();
   
   $(target).fadeIn(800);
   
 });*/