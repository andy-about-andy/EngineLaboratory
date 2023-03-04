const headerMain = document.querySelector('.main-header');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
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

export {burger, hidesMenu};
