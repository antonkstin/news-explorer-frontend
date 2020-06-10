/* eslint-disable no-undef */
import './index.css';

Array.from(document.querySelectorAll('.popup')).forEach((item) => {
  item.addEventListener('wheel', (event) => {
    event.preventDefault();
  });
  item.addEventListener('touchmove', (event) => {
    event.preventDefault();
  });
});


document.querySelectorAll('.link_surrounded').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.popup_reg').style.display = 'flex';
    document.querySelector('.burger-menu').style.display = 'none';
  });
});

document.querySelector('.popup_reg .popup__link').addEventListener('click', () => {
  document.querySelector('.popup_reg').style.display = 'none';
  document.querySelector('.popup_enter').style.display = 'flex';
});

document.querySelector('.popup_reg .popup__button').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('.popup_reg').style.display = 'none';
  document.querySelector('.popup_success').style.display = 'flex';
});

document.querySelector('.popup_success .popup__link').addEventListener('click', () => {
  document.querySelector('.popup_success').style.display = 'none';
  document.querySelector('.popup_enter').style.display = 'flex';
});

document.querySelector('.popup_enter .popup__link').addEventListener('click', () => {
  document.querySelector('.popup_enter').style.display = 'none';
  document.querySelector('.popup_reg').style.display = 'flex';
});

// Закрывание каждого попапа отдельно
document.querySelector('.popup_enter .popup__close').addEventListener('click', () => {
  document.querySelector('.popup_enter').style.display = 'none';
});

document.querySelector('.popup_reg .popup__close').addEventListener('click', () => {
  document.querySelector('.popup_reg').style.display = 'none';
});

document.querySelector('.popup_success .popup__close').addEventListener('click', () => {
  document.querySelector('.popup_success').style.display = 'none';
});


document.querySelector('.header__icon').addEventListener('click', () => {
  document.querySelector('.burger-menu').style.display = 'block';
});

document.querySelector('.header__icon_close').addEventListener('click', () => {
  document.querySelector('.burger-menu').style.display = 'none';
});
