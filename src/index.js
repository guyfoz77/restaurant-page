import {buildPage} from './page-load.js';
import {buildHome} from './home.js';
buildPage();


const content = document.querySelector('#content');

content.appendChild(buildHome());
