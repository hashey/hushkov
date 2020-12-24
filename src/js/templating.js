import menu from '../menu.json';
import templateItems from '../templates/menu-items.hbs';

const refs = {
  menuItems: document.querySelector('ul.js-menu'),
};

const template = templateItems(menu);

refs.menuItems.insertAdjacentHTML('beforeend', template);
