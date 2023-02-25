const headerMain = document.querySelector('.main-header');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const mainBlock = document.querySelector('.main-block__wrap');
const overflowMenu = document.querySelector('.main-nav__list');
const headerInner = document.querySelector('.main-header__top-inner');

const textWorkingMode = document.querySelector('.main-header__contacts-text');
const textPhone = document.querySelector('.main-header__link-phone');
const textCall = document.querySelector('.main-header__button');

headerMain.classList.remove('main-header--nojs');
navMain.classList.remove('main-nav--nojs');

// Функция закрытия меню
const closesMenu = () => {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  headerInner.classList.remove('main-header__top-inner--opened');
  textWorkingMode.style.color = '#ffffff';
  textPhone.style.color = '#ffffff';
  textCall.style.color = '#ffffff';
  document.body.style.overflow = '';
};

const burger = () => {
  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      headerInner.classList.add('main-header__top-inner--opened');
      textWorkingMode.style.color = '#282828';
      textPhone.style.color = '#282828';
      textCall.style.color = '#282828';
      document.body.style.overflow = 'hidden';
      overflowMenu.style.overflow = 'auto';
    } else {
      closesMenu();
    }
  });
};

// Скрывает в mobile меню при нажатии на ссылку
const hidesMenu = () => {
  overflowMenu.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--opened')) {
      closesMenu();
    }
  });
};

burger();

// маска для набора номера
// Функция взята из интернета и доработана
// Источник - https://webkaa.ru/javascript/maska-nomera-telefona-js

const eventCallback = function (evt) {
  let el = evt.target,
  pattern = el.dataset.phonePattern,
  matrixDefault = "+7(___) ___-__-__",
  matrix = pattern ? pattern : matrixDefault,
  i = 0,
  def = matrix.replace(/\D/g, ""),
  val = evt.target.value.replace(/\D/g, "");

  if (def.length >= val.length) val = def;
  evt.target.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
  });
}
const phoneInputs = document.querySelectorAll('[data-mask-tel]');
for (let elem of phoneInputs) {
  for (let ev of ['input', 'blur', 'focus']) {
    elem.addEventListener(ev, eventCallback);
  }
}

const button = document.querySelector('.main-header__button');
const modal = document.querySelector('.modal');

const popup = () => {
  button.addEventListener('click', () => {
    if (modal.classList.contains('modal--preload')) {
      modal.classList.remove('modal--preload');
      modal.classList.add('is-active');
    } else {
      modal.classList.add('modal--preload');
      modal.classList.remove('is-active');
    }
  });
};
