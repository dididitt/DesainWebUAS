var swiper = new Swiper(".gallery-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

const navbar = document.getElementsByTagName('nav')[0];
 window.addEventListener('scroll', function() {
 	console.log(window.scrollY);
 	if (window.scrollY > 1) {
 		navbar.classList.replace('bg-transparent', 'nav-color');
 	} else if (this.window.scrollY <= 0) {
 		navbar.classList.replace('nav-color', "bg-transparent")
 	}
 });

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

