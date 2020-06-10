/* eslint-disable no-undef */
import './index.css';

document.querySelector('.header__icon').addEventListener('click', () => {
  document.querySelector('.burger-menu').style.display = 'block';
});

document.querySelector('.header__icon_close').addEventListener('click', () => {
  document.querySelector('.burger-menu').style.display = 'none';
});
