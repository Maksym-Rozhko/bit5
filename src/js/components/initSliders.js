import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

new Swiper('.swiper.main-slider', {
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: '.main-slider .swiper-button-next',
        prevEl: '.main-slider .swiper-button-prev',
    },
});

new Swiper('.swiper.projects-slider', {
    slidesPerView: 4,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        575: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        }
    },
});

new Swiper('.swiper.news-slider', {
    slidesPerView: 4,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        575: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        }
    },
});