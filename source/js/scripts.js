
// Модальные окна
const modalNexbox = document.querySelector(`.modal-tarif--nexbox`);
const modalRouter1gb = document.querySelector(`.modal-tarif--router1gb`);

// Оверлей
const modalOverlay = document.querySelector(`.modal-tarif-overlay`);

// Кнопки закрытия, модульных окон, "x"
const modalCloses = document.querySelectorAll(`.modal-tarif__close`);
for (const modalClose of modalCloses) {
  modalClose.addEventListener(`click`, () => {
    modalNexbox.classList.remove(`modal-show`);
    modalRouter1gb.classList.remove(`modal-show`);
    modalOverlay.classList.remove(`modal-show`);
  });
}


// Функция принимает элемент и модуль и не обязательный оверлей, модуль должен показываться при клике на элемент
const handleShowModal = (item, modal, overlay = modalOverlay) => {
  item.addEventListener(`click`, () => {
    modal.classList.add(`modal-show`);
    overlay.classList.add(`modal-show`);
  });
};

// Иконки
const tvIcons = document.querySelectorAll(`.block__icon__benefit--tv`);
for (const tvIcon of tvIcons) {
  handleShowModal(tvIcon, modalNexbox);
}

const router100mbIcons = document.querySelectorAll(
  `.block__icon__benefit--router-100mb`
);
for (const router100mbIcon of router100mbIcons) {
  handleShowModal(router100mbIcon, modalRouter1gb);
}

const router1gIcons = document.querySelectorAll(
  `.block__icon__benefit--router-1g`
);
for (const router1gIcon of router1gIcons) {
  handleShowModal(router1gIcon, modalRouter1gb);
}

const ipIcons = document.querySelectorAll(`.block__icon__benefit--ip`);
for (const ipIcon of ipIcons) {
  handleShowModal(ipIcon, modalNexbox);
}

// Большие иконки
const bgRouter100mbIcons = document.querySelectorAll(
  `.block__icon-bg--router-100mb`
);
for (const bgRouter100mbIcon of bgRouter100mbIcons) {
  handleShowModal(bgRouter100mbIcon, modalRouter1gb);
}

const bgRouter1gbIcons = document.querySelectorAll(
  `.block__icon-bg--router-1gb`
);
for (const bgRouter1gbIcon of bgRouter1gbIcons) {
  handleShowModal(bgRouter1gbIcon, modalRouter1gb);
}

// кнопки "+ ? баллов"
const pointsBtns = document.querySelectorAll(`.block__points`);
for (const pointBtn of pointsBtns) {
  handleShowModal(pointBtn, modalNexbox);
}

// псевдо-ссылки "подробнее"
const moreInfos = document.querySelectorAll(`.block__more-info`);
for (const moreInfo of moreInfos) {
  handleShowModal(moreInfo, modalRouter1gb);
}
