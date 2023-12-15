const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open')
});

    var swiper = new Swiper(".mySwiper", {
    pagination: {
    el: ".swiper-pagination",
},
});

