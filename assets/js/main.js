/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
    toggle_btn = document.getElementById('nav-toggle'),
    close_btn = document.getElementById('nav-close');

toggle_btn.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    
})
close_btn.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    
})


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== SWIPER WACTHES ===============*/
const swiperWatches= new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      
        prev: {
            translate: [-100, 0, -500],
            rotate: [0, 0, 15],
            opacity:0
        },
       next: {
            translate: [100, 0, -500],
            rotate: [0, 0, -15],
            opacity:0
        },

  },
    // pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
 
  });

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__images',1.5,{opacity:0,y:150,delay:.1})
gsap.from('.home__data',1.8,{opacity:0,x:-100,delay:.8})
gsap.from('.home__info',1.8,{opacity:0,x:-100,delay:1})