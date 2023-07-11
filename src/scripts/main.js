// Burger menu

const burgerBtn = document.querySelector(".burger__btn");
const burgerList = document.querySelector(".burger__list");
const items = document.querySelectorAll(".burger__item");
const dropdowns = burgerList.querySelectorAll(".header__dropdown-menu");
const burgerBack = document.querySelectorAll(".burger__btn-back");
const burgerClose = document.querySelectorAll(".burger__btn-close");
console.log(burgerClose);
const burgerItemLink = document.querySelectorAll(".burger__link");
burgerItemLink.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e);
    const list = e.nextSibling;
    if (list !== null) {
      list.style.display = "block";
      console.log(items);
      items.forEach((item) => {
        item.classList.add("flip");
      });
      list.classList.add("visible");
      // console.log(burgerList.childNodes);
      // console.log(list.nodeName);
    }
  });
});

burgerList.classList.add("hidden");
burgerBtn.addEventListener("click", () => {
  if (burgerList.classList.contains("hidden")) {
    burgerList.classList.remove("hidden");
    burgerList.classList.add("visible");
    document.body.style.overflow = "hidden";
  } else if (burgerList.classList.contains("visible")) {
    burgerList.classList.remove("visible");
    burgerList.classList.add("hidden");
    document.body.style.overflow = "scroll";
  }
});
burgerBack.forEach((e) => {
  e.addEventListener("click", () => {
    dropdowns.forEach((e) => {
      if (e.classList.contains("visible")) {
        e.classList.remove("visible");
        e.classList.add("hidden");
      }
    });
    items.forEach((item) => {
      item.classList.remove("flip");
    });
  });
});
burgerClose.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log(e);
    if (burgerList.classList.contains("visible")) {
      console.log(dropdowns);
      dropdowns.forEach((e) => {
        if (e.classList.contains("visible")) {
          e.classList.remove("visible");
          e.classList.add("hidden");
        }
      });
      items.forEach((item) => {
        item.classList.remove("flip");
      });

      burgerList.classList.add("hidden");
      burgerList.classList.remove("visible");
    }
  });
});

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
