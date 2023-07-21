document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger__btn");
  window.addEventListener("resize", () => {
    innerWindow();
    document.body.style.overflow = "scroll";
  });
  document.addEventListener("click", function (event) {
    const burgerList = document.querySelector(".burger__list");
    if (
      !burgerList.contains(event.target) &&
      !event.target.classList.contains("burger__btn")
    ) {
      console.log(event.target);
      removeVisible();
      burgerList.classList.remove("visible");
      burgerList.classList.add("hidden");
      document.body.style.overflow = "scroll";

      //   flipBurgerMenu();
    }
  });

  burgerBtn.addEventListener("click", () => {
    flipBurgerMenu();
  });
});

function flipBurgerMenu() {
  const burgerList = document.querySelector(".burger__list");
  if (burgerList.classList.contains("hidden")) {
    burgerList.classList.remove("hidden");
    burgerList.classList.add("visible");
    innerWindow();
  } else if (burgerList.classList.contains("visible")) {
    burgerList.classList.remove("visible");
    burgerList.classList.add("hidden");
    document.body.style.overflow = "scroll";
    removeVisible();
    // innerWindow();
  }
}
function innerWindow() {
  console.log(window.innerWidth);
  const burgerItemLink = document.querySelectorAll(".burger__link");
  const burgerLastTrigger = document.querySelectorAll(
    ".burger__link-last-trigger"
  );

  if (window.innerWidth < 780) {
    burgerItemLink.forEach((link) => {
      link.addEventListener("click", () => {
        openSubMenu(link);
      });
    });
    burgerLastTrigger.forEach((link) => {
      link.addEventListener("click", () => {
        openLastMenu(link);
      });
    });

    document.body.style.overflow = "hidden";
  } else if (window.innerWidth > 780) {
    document.body.style.overflow = "scroll";
  }
}
function openSubMenu(link) {
  const items = document.querySelectorAll(".burger__item");

  const list = link.nextSibling;
  if (list !== null) {
    list.style.display = "block";
    items.forEach((item) => {
      item.classList.add("flip");
    });
    list.classList.add("visible");
  }
  const btnBack = list.querySelector(".burger__btn-back");
  console.log(btnBack);
  btnBack.addEventListener("click", () => {
    list.style.display = "none";
    items.forEach((item) => {
      item.classList.remove("flip");
    });
    list.classList.remove("visible");
  });
  closeAllSubMenu();
}
function openLastMenu(link) {
  const items = document.querySelectorAll(".header__dropdown-menu > li");
  const links = document.querySelectorAll(
    ".header__dropdown-menu > .header__link"
  );
  const dropMenu = document.querySelectorAll(".header__dropdown-menu");

  const lastList = link.nextSibling;

  console.log(lastList);
  if (lastList !== null) {
    lastList.style.display = "block";
    items.forEach((item) => {
      item.classList.add("flip");
    });
    links.forEach((link) => {
      link.classList.add("flip");
    });
    dropMenu.forEach((item) => {
      item.classList.add("hidden");
    });
    lastList.classList.add("visible");
  }
  const btnBack = lastList.querySelector(".burger__btn-back");
  console.log(btnBack);
  btnBack.addEventListener("click", () => {
    console.log(items);
    lastList.style.display = "none";
    lastList.classList.remove("visible");
    items.forEach((item) => {
      item.classList.remove("flip");
    });
    links.forEach((link) => {
      link.classList.remove("flip");
    });
    dropMenu.forEach((item) => {
      item.classList.remove("hidden");
    });
  });
  closeAllSubMenu();
}
function closeAllSubMenu() {
  const btnClose = document.querySelectorAll(".burger__btn-close");
  const burgerList = document.querySelector(".burger__list");

  btnClose.forEach((btn) => {
    btn.addEventListener("click", () => {
      removeVisible();
      if (burgerList.classList.contains("visible")) {
        burgerList.classList.remove("visible");
        burgerList.classList.add("hidden");
      }
    });
  });
}
function removeVisible() {
  const flipElements = document.querySelectorAll(".flip");
  const burgerList = document.querySelector(".burger__list.visible");
  const dropdownList = document.querySelectorAll(
    ".header__dropdown-menu.visible"
  );
  const lastList = document.querySelectorAll(".burger__list-last.visible");
  console.log(dropdownList);
  dropdownList.forEach((dropdown) => {
    dropdown.classList.remove("visible");
    dropdown.style.display = "none";
  });
  lastList.forEach((list) => {
    list.classList.remove("visible");
    list.style.display = "none";
  });
  flipElements.forEach((e) => {
    e.classList.remove("flip");
  });
}

// Tabs

const tabTriggerBtns = document.querySelectorAll(".cases__btn");
const casesTabOpen = document.querySelector(".cases__content");
casesTabOpen.classList.add("is-open");
tabTriggerBtns.forEach(function (tabTriggerBtn, index) {
  tabTriggerBtn.addEventListener("click", function () {
    const currentTabData = document.querySelector(
      '.cases__content[data-tab-content="' + this.dataset.tabTrigger + '"]'
    );
    document.querySelector(".is-open").classList.remove("is-open");
    document.querySelector(".is-active").classList.remove("is-active");
    currentTabData.classList.add("is-open");
    this.classList.add("is-active");
  });
});

// accordion

new Accordion(".accordion");

// show contacts
const contactPhone = document.querySelector(".footer__phone");
const contactMail = document.querySelector(".footer__mail");
contactPhone.addEventListener("click", (e) => {
  if (contactPhone.classList.contains("footer__phone_hover")) {
    e.preventDefault();
    contactPhone.classList.remove("footer__phone_hover");
  }
});
contactMail.addEventListener("click", (e) => {
  if (contactMail.classList.contains("footer__mail_hover")) {
    e.preventDefault();
    contactMail.classList.remove("footer__mail_hover");
  }
});
const contactHeaderPhone = document.querySelector(".header__phone-hover");
const contactHeaderMail = document.querySelector(".header__mail-hover");
contactHeaderPhone.addEventListener("click", (e) => {
  e.preventDefault();
  contactHeaderPhone.classList.add("none");
});
contactHeaderMail.addEventListener("click", (e) => {
  e.preventDefault();
  contactHeaderMail.classList.add("none");
});

// custom select
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.classList.add("select-div");
    c.dataset.tabTriggerMobile = j;
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

const tabsMobile = document.querySelectorAll("[data-tab-trigger-mobile]");
tabsMobile.forEach((tab) => {
  tab.addEventListener("click", function () {
    const currentTabData = document.querySelector(
      '.cases__content[data-tab-content="' +
        this.dataset.tabTriggerMobile +
        '"]'
    );
    document.querySelector(".is-open").classList.remove("is-open");
    currentTabData.classList.add("is-open");
  });
});

class ItcModal {
  #elem;
  #template =
    '<div class="itc-modal-backdrop"><div class="itc-modal-content"><div class="itc-modal-header"><span class="itc-modal-btn-close" title="Закрыть">×</span></div><div class="itc-modal-body">{{content}}</div>{{footer}}</div></div>';
  #templateFooter = '<div class="itc-modal-footer">{{buttons}}</div>';
  #templateBtn =
    '<button type="button" class="{{class}}" data-action={{action}}>{{text}}</button>';
  #eventShowModal = new Event("show.itc.modal", { bubbles: true });
  #eventHideModal = new Event("hide.itc.modal", { bubbles: true });
  #disposed = false;

  constructor(options = []) {
    this.#elem = document.createElement("div");
    this.#elem.classList.add("itc-modal");
    let html = this.#template.replace(
      "{{title}}",
      options.title || "Новое окно"
    );
    html = html.replace("{{content}}", options.content || "");
    const buttons = (options.footerButtons || []).map((item) => {
      let btn = this.#templateBtn.replace("{{class}}", item.class);
      btn = btn.replace("{{action}}", item.action);
      return btn.replace("{{text}}", item.text);
    });
    const footer = buttons.length
      ? this.#templateFooter.replace("{{buttons}}", buttons.join(""))
      : "";
    html = html.replace("{{footer}}", footer);
    this.#elem.innerHTML = html;
    document.body.append(this.#elem);
    this.#elem.addEventListener("click", this.#handlerCloseModal.bind(this));
  }

  #handlerCloseModal(e) {
    if (
      e.target.closest(".itc-modal-btn-close") ||
      e.target.classList.contains("itc-modal-backdrop")
    ) {
      this.hide();
    }
  }

  show() {
    if (this.#disposed) {
      return;
    }
    this.#elem.classList.add("itc-modal-show");
    this.#elem.dispatchEvent(this.#eventShowModal);
    // const scrollY = document.documentElement.scrollTop;
    // console.log(scrollY);
    // document.body.style.position = "fixed";
    // document.body.style.top = `-${window.scrollY}px`;
  }

  hide() {
    this.#elem.classList.remove("itc-modal-show");
    this.#elem.dispatchEvent(this.#eventHideModal);
    document.body.style.position = "";
    document.body.style.top = "";
  }

  dispose() {
    this.#elem.remove(this.#elem);
    this.#elem.removeEventListener("click", this.#handlerCloseModal);
    this.#disposed = true;
  }

  setBody(html) {
    this.#elem.querySelector(".itc-modal-body").innerHTML = html;
  }

  setTitle(text) {
    this.#elem.querySelector(".itc-modal-title").innerHTML = text;
  }
}

const modal = new ItcModal({
  content:
    '<div class="callback callback__modal"><div class="callback__block callback__block_2"><h3 class="callback__subtitle">Будем рады помочь</h3><form action="" class="callback__form"><label class="callback__label" for="name">Ваше имя</label><input class="callback__input" type="text" name="name" id="name"><label class="callback__label" for="phone">Телефон</label><input class="callback__input" type="tel" name="phone" id="phone"><label class="callback__label" for="message">Комментарий</label><textarea class="callback__input callback__input_text" name="message" id="message" rows="3"></textarea><label class="callback__label callback__label_check" for="agree"><input class="callback__checkbox" type="checkbox" name="agree" id="agree"><span class="callback__span"></span>Нажимая кнопку отправить заявку, даю согласие на обработку персональных данных*</label><button class="callback__btn btn btn-ok">Отправить заявку</button></form></div></div>',
});
const modalSuccess = new ItcModal({
  content:
    '<div class="callback callback__modal"><div class="callback__block callback__block_2"><h3 class="callback__subtitle">Спасибо!</h3><div class="callback__label">Мы скоро с Вами свяжемся!</div></div></div>',
});

const btnShowModal = document.querySelectorAll(".btn-show-modal");
const btnOk = document.querySelectorAll(".btn-ok");
btnShowModal.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.show();
  });
});
btnOk.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.hide();
    modalSuccess.show();
  });
});

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
