import {buildPage} from './page-load.js';
import {buildHome} from './home.js';
import {buildMenu} from './menu.js';
import { buildContact } from './contact.js';
// import { elementBuilder } from './element-builder.js';
buildPage();


const content = document.querySelector('#content');

// content.appendChild(buildHome());    fills the home tab.

// content.appendChild(buildMenu());    fills the menu tab.

// content.appendChild(buildContact());     fills the contact tab.
// content.appendChild(buildHome());

const homeTab = document.querySelector('.home');
homeTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(buildHome());
});

const menuTab = document.querySelector('.menu');
menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(buildMenu());
})

const contactTab = document.querySelector('.contact');
contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(buildContact());
})