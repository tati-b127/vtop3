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
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     // will set `translateZ(-400px)` on previous slides
  //     translate: [0, 0, "-100%"],
  //     opacity: 0,
  //   },
  //   next: {
  //     // will set `translateX(100%)` on next slides
  //     translate: [0, 0, 0],
  //     opacity: 0.3,
  //   },
  // },
  // // Array with translate X, Y and Z values
  // translate: (string | number)[];
  // // Array with rotate X, Y and Z values (in deg)
  // rotate?: number[];
  // // Slide opacity
  // opacity?: number;
  // // Slide scale
  // scale?: number;
  // // Enables slide shadow
  // shadow?: boolean;
  // // Transform origin, e.g. `left bottom`
  // origin?: string;
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
