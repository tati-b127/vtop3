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
  btnBack.addEventListener("click", () => {
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
  document.body.style.overflow = "scroll";
}
