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
