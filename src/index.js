import {buildPage} from './page-load.js';
import {buildHome} from './home.js';
import {buildMenu} from './menu.js';
import { buildContact } from './contact.js';
// import { elementBuilder } from './element-builder.js';
buildPage();


const content = document.querySelector('#content');

// content.appendChild(buildHome());    fills the home tab.

// content.appendChild(buildMenu());    fills the menu tab.

buildContact();