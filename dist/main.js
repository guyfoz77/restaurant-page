/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildHome: () => (/* binding */ buildHome)
/* harmony export */ });
function buildHome() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home', 'info');

    const heading = document.createElement('h2');
    heading.textContent = 'Our food.';

    const foodQuality = document.createElement('p');
    foodQuality.textContent = 'This is some copy about the quality of the food, and from where it is sourced. Literally the best food in the world.';

    const salmonImage = document.createElement('img');
    salmonImage.src = '../src/img/salmon.jpeg';
    salmonImage.classList.add('salmon');

    const aboutResaurant = document.createElement('p');
    aboutResaurant.textContent = 'This is some copy about the restaurant itself. Something about the vibe maybe.';

    const openingHours = document.createElement('div');
    const openingHoursPElements = []
    const openingHoursContent = 
    ['Opening hours:',
     'Monday-Friday: 13:00 - 21:00',
     'Saturday-Sunday: 11:00 - 22:00'];
    for (let i = 0; i<openingHoursContent.length; i++) {
        openingHoursPElements[i] = document.createElement('p');
        openingHoursPElements[i].textContent = openingHoursContent[i];
        openingHours.appendChild(openingHoursPElements[i]);
    }
    homeContent.append(heading, foodQuality, salmonImage, aboutResaurant, openingHours);

    return homeContent;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMenu: () => (/* binding */ buildMenu)
/* harmony export */ });
const menuBuilder = (name, price, description) => {
    return {name, price, description};
}
const starters = [
    menuBuilder('Soup of the day', 7, 'Probably tomato soup.'),
    menuBuilder('Spicy wings', 8, 'Chicken wings, buffalo sauce.'),
    menuBuilder('Garlic bread', 7, 'Garlic, bread.')
]
const mains = [
    menuBuilder('Pizza', 15, 'Tomato, mozzarella, spicy chicken.'),
    menuBuilder('Vegan lasagna', 16, 'Tasty lasagna with some vegan filling.'),
    menuBuilder('Calzone', 22, 'Basically the pizza but folded.')
]
const desserts = [
    menuBuilder('Chocolate cake', 9, 'Served with ice cream or cream.'),
    menuBuilder('Cheesecake', 8, 'Served with a caramel sauce.')
]

function menuItemDivBuilder(item) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const topRow = document.createElement('div');
    topRow.classList.add('topRow');

    const bottomRow = document.createElement('div');
    bottomRow.classList.add('bottomRow');
    bottomRow.textContent = item.description;

    // build topRow:
    const itemName = document.createElement('h3');
    itemName.classList.add('itemName')
    itemName.textContent = item.name;
    const spacer = document.createElement('span');
    const price = document.createElement('h3');
    price.classList.add('price');
    price.textContent = item.price;
    topRow.append(itemName, spacer, price);
    //

    menuItem.append(topRow, bottomRow);
    return menuItem;
}

function buildMenu() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu', 'info');

    const starterTitle = document.createElement('h2');
    starterTitle.textContent = 'Starters';
    menuContent.appendChild(starterTitle);

    starters.forEach(starter => {
        const div = menuItemDivBuilder(starter);
        menuContent.appendChild(div);
    });

    const mainTitle = document.createElement('h2');
    mainTitle.textContent = 'Mains'
    menuContent.appendChild(mainTitle);

    mains.forEach(main => {
        const div = menuItemDivBuilder(main);
        menuContent.appendChild(div);
    });

    const dessertTitle = document.createElement('h2');
    dessertTitle.textContent = 'Desserts'
    menuContent.appendChild(dessertTitle);

    desserts.forEach(dessert => {
        const div = menuItemDivBuilder(dessert);
        menuContent.appendChild(div);
    });

    return menuContent;
}


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPage: () => (/* binding */ buildPage)
/* harmony export */ });
function buildContentContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'content');
    return contentContainer;
}

function buildHeader() {
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'Fancy Food.';
    header.appendChild(title);
    return header;
}

function buildNav() {
    const buttons = [
        {name: 'Home', cssClass: 'home'},
        {name: 'Menu', cssClass: 'menu'},
        {name: 'Contact', cssClass: 'contact'}
    ];
    const navBar = document.createElement('div');
    navBar.classList.add('nav');

    function buildButton(textContent, cssClass) {
        const button = document.createElement('button');
        button.classList.add(cssClass);
        button.textContent = textContent;
        return button;
    }

    buttons.forEach(button => {
        navBar.appendChild(buildButton(button.name, button.cssClass));
    });
    return navBar;
}

function buildFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Created by Guy Foster';
    return footer;
}

const buildPage = () => {
    const mainContainer = document.querySelector('#mainContainer');
    const pageArray = 
    [buildHeader(),
     buildNav(),
     buildContentContainer(),
     buildFooter()
    ];
    pageArray.forEach(element => {
        mainContainer.appendChild(element);
    });
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.buildPage)();


const content = document.querySelector('#content');

// content.appendChild(buildHome());    fills the home tab.

// content.appendChild(buildMenu());    fills the menu tab.
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUywrQkFBK0I7QUFDeEMsU0FBUywrQkFBK0I7QUFDeEMsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VDckRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNMO0FBQ0E7QUFDcEMsd0RBQVM7OztBQUdUOztBQUVBLHdDQUF3Qzs7QUFFeEMsd0NBQXdDLG1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSG9tZSgpIHtcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUnLCAnaW5mbycpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdPdXIgZm9vZC4nO1xuXG4gICAgY29uc3QgZm9vZFF1YWxpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vZFF1YWxpdHkudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBzb21lIGNvcHkgYWJvdXQgdGhlIHF1YWxpdHkgb2YgdGhlIGZvb2QsIGFuZCBmcm9tIHdoZXJlIGl0IGlzIHNvdXJjZWQuIExpdGVyYWxseSB0aGUgYmVzdCBmb29kIGluIHRoZSB3b3JsZC4nO1xuXG4gICAgY29uc3Qgc2FsbW9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzYWxtb25JbWFnZS5zcmMgPSAnLi4vc3JjL2ltZy9zYWxtb24uanBlZyc7XG4gICAgc2FsbW9uSW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2FsbW9uJyk7XG5cbiAgICBjb25zdCBhYm91dFJlc2F1cmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFJlc2F1cmFudC50ZXh0Q29udGVudCA9ICdUaGlzIGlzIHNvbWUgY29weSBhYm91dCB0aGUgcmVzdGF1cmFudCBpdHNlbGYuIFNvbWV0aGluZyBhYm91dCB0aGUgdmliZSBtYXliZS4nO1xuXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzUEVsZW1lbnRzID0gW11cbiAgICBjb25zdCBvcGVuaW5nSG91cnNDb250ZW50ID0gXG4gICAgWydPcGVuaW5nIGhvdXJzOicsXG4gICAgICdNb25kYXktRnJpZGF5OiAxMzowMCAtIDIxOjAwJyxcbiAgICAgJ1NhdHVyZGF5LVN1bmRheTogMTE6MDAgLSAyMjowMCddO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPG9wZW5pbmdIb3Vyc0NvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3BlbmluZ0hvdXJzUEVsZW1lbnRzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvcGVuaW5nSG91cnNQRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPSBvcGVuaW5nSG91cnNDb250ZW50W2ldO1xuICAgICAgICBvcGVuaW5nSG91cnMuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzUEVsZW1lbnRzW2ldKTtcbiAgICB9XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKGhlYWRpbmcsIGZvb2RRdWFsaXR5LCBzYWxtb25JbWFnZSwgYWJvdXRSZXNhdXJhbnQsIG9wZW5pbmdIb3Vycyk7XG5cbiAgICByZXR1cm4gaG9tZUNvbnRlbnQ7XG59IiwiY29uc3QgbWVudUJ1aWxkZXIgPSAobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lLCBwcmljZSwgZGVzY3JpcHRpb259O1xufVxuY29uc3Qgc3RhcnRlcnMgPSBbXG4gICAgbWVudUJ1aWxkZXIoJ1NvdXAgb2YgdGhlIGRheScsIDcsICdQcm9iYWJseSB0b21hdG8gc291cC4nKSxcbiAgICBtZW51QnVpbGRlcignU3BpY3kgd2luZ3MnLCA4LCAnQ2hpY2tlbiB3aW5ncywgYnVmZmFsbyBzYXVjZS4nKSxcbiAgICBtZW51QnVpbGRlcignR2FybGljIGJyZWFkJywgNywgJ0dhcmxpYywgYnJlYWQuJylcbl1cbmNvbnN0IG1haW5zID0gW1xuICAgIG1lbnVCdWlsZGVyKCdQaXp6YScsIDE1LCAnVG9tYXRvLCBtb3p6YXJlbGxhLCBzcGljeSBjaGlja2VuLicpLFxuICAgIG1lbnVCdWlsZGVyKCdWZWdhbiBsYXNhZ25hJywgMTYsICdUYXN0eSBsYXNhZ25hIHdpdGggc29tZSB2ZWdhbiBmaWxsaW5nLicpLFxuICAgIG1lbnVCdWlsZGVyKCdDYWx6b25lJywgMjIsICdCYXNpY2FsbHkgdGhlIHBpenphIGJ1dCBmb2xkZWQuJylcbl1cbmNvbnN0IGRlc3NlcnRzID0gW1xuICAgIG1lbnVCdWlsZGVyKCdDaG9jb2xhdGUgY2FrZScsIDksICdTZXJ2ZWQgd2l0aCBpY2UgY3JlYW0gb3IgY3JlYW0uJyksXG4gICAgbWVudUJ1aWxkZXIoJ0NoZWVzZWNha2UnLCA4LCAnU2VydmVkIHdpdGggYSBjYXJhbWVsIHNhdWNlLicpXG5dXG5cbmZ1bmN0aW9uIG1lbnVJdGVtRGl2QnVpbGRlcihpdGVtKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuXG4gICAgY29uc3QgdG9wUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wUm93LmNsYXNzTGlzdC5hZGQoJ3RvcFJvdycpO1xuXG4gICAgY29uc3QgYm90dG9tUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm90dG9tUm93LmNsYXNzTGlzdC5hZGQoJ2JvdHRvbVJvdycpO1xuICAgIGJvdHRvbVJvdy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAvLyBidWlsZCB0b3BSb3c6XG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW1OYW1lJylcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuICAgIHRvcFJvdy5hcHBlbmQoaXRlbU5hbWUsIHNwYWNlciwgcHJpY2UpO1xuICAgIC8vXG5cbiAgICBtZW51SXRlbS5hcHBlbmQodG9wUm93LCBib3R0b21Sb3cpO1xuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWVudSgpIHtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUnLCAnaW5mbycpO1xuXG4gICAgY29uc3Qgc3RhcnRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdGFydGVyVGl0bGUudGV4dENvbnRlbnQgPSAnU3RhcnRlcnMnO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKHN0YXJ0ZXJUaXRsZSk7XG5cbiAgICBzdGFydGVycy5mb3JFYWNoKHN0YXJ0ZXIgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBtZW51SXRlbURpdkJ1aWxkZXIoc3RhcnRlcik7XG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdNYWlucydcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuXG4gICAgbWFpbnMuZm9yRWFjaChtYWluID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gbWVudUl0ZW1EaXZCdWlsZGVyKG1haW4pO1xuICAgICAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVzc2VydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBkZXNzZXJ0VGl0bGUudGV4dENvbnRlbnQgPSAnRGVzc2VydHMnXG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydFRpdGxlKTtcblxuICAgIGRlc3NlcnRzLmZvckVhY2goZGVzc2VydCA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IG1lbnVJdGVtRGl2QnVpbGRlcihkZXNzZXJ0KTtcbiAgICAgICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZW51Q29udGVudDtcbn1cbiIsImZ1bmN0aW9uIGJ1aWxkQ29udGVudENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0ZhbmN5IEZvb2QuJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAgICAgIHtuYW1lOiAnSG9tZScsIGNzc0NsYXNzOiAnaG9tZSd9LFxuICAgICAgICB7bmFtZTogJ01lbnUnLCBjc3NDbGFzczogJ21lbnUnfSxcbiAgICAgICAge25hbWU6ICdDb250YWN0JywgY3NzQ2xhc3M6ICdjb250YWN0J31cbiAgICBdO1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAgIGZ1bmN0aW9uIGJ1aWxkQnV0dG9uKHRleHRDb250ZW50LCBjc3NDbGFzcykge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGJ1aWxkQnV0dG9uKGJ1dHRvbi5uYW1lLCBidXR0b24uY3NzQ2xhc3MpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmF2QmFyO1xufVxuXG5mdW5jdGlvbiBidWlsZEZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBHdXkgRm9zdGVyJztcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5jb25zdCBidWlsZFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluQ29udGFpbmVyJyk7XG4gICAgY29uc3QgcGFnZUFycmF5ID0gXG4gICAgW2J1aWxkSGVhZGVyKCksXG4gICAgIGJ1aWxkTmF2KCksXG4gICAgIGJ1aWxkQ29udGVudENvbnRhaW5lcigpLFxuICAgICBidWlsZEZvb3RlcigpXG4gICAgXTtcbiAgICBwYWdlQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgYnVpbGRQYWdlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2J1aWxkUGFnZX0gZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuaW1wb3J0IHtidWlsZEhvbWV9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQge2J1aWxkTWVudX0gZnJvbSAnLi9tZW51LmpzJztcbmJ1aWxkUGFnZSgpO1xuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4vLyBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSG9tZSgpKTsgICAgZmlsbHMgdGhlIGhvbWUgdGFiLlxuXG4vLyBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTWVudSgpKTsgICAgZmlsbHMgdGhlIG1lbnUgdGFiLiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==