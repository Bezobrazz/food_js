function showModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = "block";
  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId); //строка запрещает показывать модал по таймеру, если оно уже было вызвано
  }
}
function hideModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = "none";
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  //Modal
  const btn = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  btn.forEach((item) => {
    item.addEventListener("click", () => {
      showModal(modalSelector, modalTimerId);
      document.body.style.overflow = "hidden"; //строчка отвечает за блокировку прокрутки страницы при открытом модале
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.getAttribute("data-close") == "") {
        hideModal(modalSelector);
      } //функция закрывающая модал при клике вне его области
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape" && hideModal(modalSelector)) {
        hideModal(modalSelector);
      } //функция закрывающая модал при нажатии на кнопку Escape
    });
  });

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      showModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll); //функция показывает модал при скоролле до конца
}

export default modal;
export { showModal };
export { hideModal };
