const btnShowModal = document.querySelectorAll(".btn-show-modal");
const btnOk = document.querySelectorAll(".btn-ok");
const btnCls = document.querySelectorAll(".itc-modal-btn-close");
const modal = document.getElementById("modal");
const modalSuccess = document.getElementById("modal-success");
const backdrop = document.querySelectorAll(".itc-modal-backdrop");

function show(el) {
  el.classList.add("itc-modal-show");
}

function hide(el) {
  el.classList.remove("itc-modal-show");
  const modal = document.getElementById("modal");
  const inputs = modal.querySelectorAll(".callback__input");
  inputs.forEach((input) => {
    input.value = "";
  });
  document.body.style.position = "";
  document.body.style.top = "";
}
window.onclick = function (event) {
  event.preventDefault();
  backdrop.forEach((el) => {
    if (event.target == el) {
      hide(modal);
      hide(modalSuccess);
    }
  });
};
btnShowModal.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    show(modal);
  });
});
btnOk.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    //TODO
    hide(modal);
    show(modalSuccess);
  });
});
btnCls.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    hide(modal);
    hide(modalSuccess);
  });
});
