// Burger menu
const burgerBtn = document.querySelector(".burger__btn");
const burgerList = document.querySelector(".burger__list");
const items = document.querySelectorAll(".burger__item");
const dropdowns = burgerList.querySelectorAll(".header__dropdown-menu");
const burgerBack = document.querySelectorAll(".burger__btn-back");
const burgerClose = document.querySelectorAll(".burger__btn-close");
const burgerItemLink = document.querySelectorAll(".burger__link");
const burgerLastTrigger = document.querySelectorAll(
  ".burger__link-last-trigger"
);
console.log(window.innerWidth);
if (window.innerWidth < 780) {
  console.log(window.innerWidth);
  setFlip();
} else if (window.innerWidth > 780) {
  burgerTrigger();
  document.body.style.overflow = "scroll";
}

function burgerTrigger() {
  burgerBtn.addEventListener("click", () => {
    if (burgerList.classList.contains("hidden")) {
      burgerList.classList.remove("hidden");
      burgerList.classList.add("visible");
      document.body.style.overflow = "hidden";
    } else if (burgerList.classList.contains("visible")) {
      burgerList.classList.remove("visible");
      burgerList.classList.add("hidden");
      const flips = document.querySelectorAll(".flip");
      if (flips !== null) {
        flips.forEach((flip) => {
          flip.classList.remove("flip");
        });
      }
      // if (dropdowns !== null) {
      //   dropdowns.forEach((dropdown) => {
      //     if (dropdown.classList.contains("visible")) {
      //       dropdown.classList.remove("visible");
      //     }
      //   });
      // }
      document.body.style.overflow = "scroll";
    }
    const burgerLastList = document.querySelectorAll(".burger__list-last");
    console.log(burgerLastList);
    if (burgerLastList.classList.contains("visible")) {
      burgerLastList.classList.remove("visible");
    }
  });
}
function setFlip() {
  console.log(burgerLastTrigger);

  // burgerList.classList.add("hidden");
  burgerBtn.addEventListener("click", () => {
    if (burgerList.classList.contains("hidden")) {
      burgerList.classList.remove("hidden");
      burgerList.classList.add("visible");
      document.body.style.overflow = "hidden";
    } else if (burgerList.classList.contains("visible")) {
      burgerList.classList.remove("visible");
      burgerList.classList.add("hidden");
      const flips = document.querySelectorAll(".flip");
      if (flips !== null) {
        flips.forEach((flip) => {
          flip.classList.remove("flip");
        });
      }
      document.body.style.overflow = "scroll";
    }
    const burgerLastList = document.querySelectorAll(".burger__list-last");
    console.log(burgerLastList);
    if (burgerLastList.classList.contains("visible")) {
      burgerLastList.classList.remove("visible");
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
      const flips = document.querySelectorAll(".flip");
      flips.forEach((flip) => {
        flip.classList.remove("flip");
      });
    });
  });
  burgerClose.forEach((e) => {
    e.addEventListener("click", (e) => {
      if (burgerList.classList.contains("visible")) {
        dropdowns.forEach((e) => {
          if (e.classList.contains("visible")) {
            e.classList.remove("visible");
            e.classList.add("hidden");
          }
        });
        items.forEach((item) => {
          item.classList.remove("flip");
        });
        const flips = document.querySelectorAll(".flip");
        flips.forEach((flip) => {
          flip.classList.remove("flip");
        });

        burgerList.classList.add("hidden");
        burgerList.classList.remove("visible");
        // if (window.innerWidth < 780) {
        document.body.style.overflow = "scroll";
        // }
      }
    });
  });

  let list;
  burgerItemLink.forEach((e) => {
    e.addEventListener("click", () => {
      list = e.nextSibling;
      if (list !== null) {
        list.style.display = "block";
        items.forEach((item) => {
          item.classList.add("flip");
        });
        list.classList.add("visible");
      }
    });
  });
  burgerLastTrigger.forEach((e) => {
    e.addEventListener("click", () => {
      const lastList = e.nextSibling;
      console.log(lastList);
      console.log(list);
      if (lastList !== null) {
        lastList.style.display = "block";
        items.forEach((item) => {
          item.classList.add("flip");
        });
        const dropItems = document.querySelectorAll(
          // ".header__drop-item"
          ".header__drop-item > .header__link"
        );
        // list.classList.add("hidden");
        console.log(dropItems);
        dropItems.forEach((e) => {
          console.log(e);
          e.classList.add("flip");
        });
        lastList.classList.add("visible");
      }
    });
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
contactPhone.addEventListener("click", () => {
  if (contactPhone.classList.contains("footer__phone_hover")) {
    contactPhone.classList.remove("footer__phone_hover");
  }
});
contactMail.addEventListener("click", () => {
  if (contactMail.classList.contains("footer__mail_hover")) {
    contactMail.classList.remove("footer__mail_hover");
  }
});
