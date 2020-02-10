'use strict';

import menu from './menu.json';
import handlebarsItems from './handlebars.hbs';

import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  jsmenu: document.querySelector('.js-menu'),
};

function buildMenu(menu) {
  const markup = menu.map(item => handlebarsItems(item)).join('');
  refs.jsmenu.insertAdjacentHTML('beforeend', markup);
}
let settings = localStorage.getItem('theme');
//console.log(settings);
const change = document.querySelector('input.js-switch-input');
// console.log(change.checked);

function changeTheme(settings) {
  if (settings === 'dark') {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    change.checked=true;
    // console.log(change.checked);

  }
}

function onClick(e) {
  if (e.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    settings = localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    settings = localStorage.setItem('theme', 'light');
  }
}
buildMenu(menu);
changeTheme(settings);
change.addEventListener('change', onClick);
