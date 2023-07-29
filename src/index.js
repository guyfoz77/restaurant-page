import {buildPage} from './page-load.js';
import {buildHome} from './home.js';
import {buildMenu} from './menu.js';
import {buildContact} from './contact.js';
// import { elementBuilder } from './element-builder.js';
buildPage(); //Places basic elements on the page.

const content = document.querySelector('#content');

const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const contactTab = document.querySelector('.contact');

function activeTabSwitcher(newActive) {
    homeTab.classList.remove('active');
    menuTab.classList.remove('active');
    contactTab.classList.remove('active');
    newActive.classList.add('active');
}
homeTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(buildHome());
    activeTabSwitcher(homeTab);
});

menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(buildMenu());
    activeTabSwitcher(menuTab);
})

contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(buildContact());
    activeTabSwitcher(contactTab);
})

content.appendChild(buildHome());    //sets default page to Home.
activeTabSwitcher(homeTab);
