function modal() {
  //Modal
  const btn = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  function showModal() {
    modal.style.display = "block";
    clearInterval(modalTimerId); //строка запрещает показывать модал по таймеру, если оно уже было вызвано
  }
  function hideModal() {
    modal.style.display = "none";
  }

  btn.forEach((item) => {
    item.addEventListener("click", () => {
      showModal();
      document.body.style.overflow = "hidden"; //строчка отвечает за блокировку прокрутки страницы при открытом модале
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.getAttribute("data-close") == "") {
        hideModal();
      } //функция закрывающая модал при клике вне его области
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape" && hideModal()) {
        hideModal();
      } //функция закрывающая модал при нажатии на кнопку Escape
    });
  });

  const modalTimerId = setTimeout(showModal, 50000); //показывает модал через 3 сек

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      showModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll); //функция показывает модал при скоролле до конца
}

module.exports = modal;
