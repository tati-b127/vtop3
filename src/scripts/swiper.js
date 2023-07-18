const swiperCases = new Swiper(".cases__swiper", {
  speed: 600,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: ".cases .swiper-button-next",
    prevEl: ".cases .swiper-button-prev",
  },
});
const swiperHero = new Swiper(".hero__swiper", {
  speed: 1200,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: "slide",
  autoplay: true,
});
const swiperClients = new Swiper(".clients__swiper", {
  direction: "horizontal",
  speed: 600,
  loop: true,
  slidesPerView: 3,
  effect: "slide",
  spaceBetween: 20,
  autoplay: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
      slidesPerGroup: 1,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 32,
      slidesPerGroup: 2,
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: ".clients .swiper-button-next",
    prevEl: ".clients .swiper-button-prev",
  },
});
const swiperReviews = new Swiper(".reviews__swiper", {
  direction: "horizontal",
  // speed: 600,
  loop: true,
  slidesPerView: 3,
  effect: "slide",
  spaceBetween: 10,
  // autoplay: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 32,
      slidesPerGroup: 1,
    },
    780: {
      slidesPerView: 2,
      // spaceBetween: 32,
      // slidesPerGroup: 2,
    },
    1020: {
      slidesPerView: 3,
      // spaceBetween: 32,
    },
  },

  navigation: {
    nextEl: ".reviews .swiper-button-next",
    prevEl: ".reviews .swiper-button-prev",
  },
});
