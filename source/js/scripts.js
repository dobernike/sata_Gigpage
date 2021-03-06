// Выдает стоимость тарифа
const getTarifCost = (tarif, speedX) => {
  speedX = Number(speedX);
  if (tarif === "Гиперион +") {
    switch (speedX) {
      case 1:
        return 1400;
      case 3:
        return 1500;
      case 5:
        return 1600;
      case 10:
        return 1700;
      default:
        return -1;
    }
  } else if (tarif === "Прометей +") {
    switch (speedX) {
      case 1:
        return 1400;
      case 3:
        return 1500;
      case 5:
        return 1600;
      case 10:
        return 1700;
      default:
        return -1;
    }
  }
};

// Добавляет функцию клика и изменения скорости и цены.
const handleSpeedChange = multi => {
  const multiClasses = multi.className;
  const regex = /--x(\d*)/gm;
  const match = regex.exec(multiClasses)[1];

  const BASE_SPEED = 100;
  let speed = BASE_SPEED * match;

  const upperNode = multi.parentNode.parentNode;

  const speedBlock = upperNode.querySelector(`.block__speed`);
  speedBlock.className = `block__speed block__speed--x${match}`;
  speedBlock.querySelector(`span`).innerText = speed;

  const blockNode = upperNode.parentNode.parentNode;
  const tarifName = blockNode.querySelector(`h3`).innerText;
  const cost = blockNode.querySelector(`.block__total span`);

  cost.innerText = getTarifCost(tarifName, match);
};

// Удаление всех --active классов
const handleDelActive = item => {
  const actives = item.parentNode.querySelectorAll(`.block__btn-speed--active`);
  for (const active of actives) {
    active.classList.remove("block__btn-speed--active");
  }
};

/*--- Переключение скорости "x*" --- */
const handleSpeedClick = array => {
  for (const item of array) {
    item.addEventListener(`click`, () => {
      if (!item.classList.contains(`block__btn-speed--active`)) {
        handleDelActive(item);

        item.classList.add(`block__btn-speed--active`);
        handleSpeedChange(item);
      }
    });
  }
};

const speedsX1 = document.querySelectorAll(`.block__btn-speed--x1`);
handleSpeedClick(speedsX1);

const speedsX3 = document.querySelectorAll(`.block__btn-speed--x3`);
handleSpeedClick(speedsX3);

const speedsX5 = document.querySelectorAll(`.block__btn-speed--x5`);
handleSpeedClick(speedsX5);

const speedsX10 = document.querySelectorAll(`.block__btn-speed--x10`);
handleSpeedClick(speedsX10);

/*--- Модульные окна и их вызовы --- */

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

/* --- End модульных окон и их вызовов ---  */
