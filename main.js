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

// content.appendChild(buildMenu());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUywrQkFBK0I7QUFDeEMsU0FBUywrQkFBK0I7QUFDeEMsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VDckRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNMO0FBQ0E7QUFDcEMsd0RBQVM7OztBQUdUOztBQUVBLHdDQUF3Qzs7QUFFeEMsb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYnVpbGRIb21lKCkge1xuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZScsICdpbmZvJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ091ciBmb29kLic7XG5cbiAgICBjb25zdCBmb29kUXVhbGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb29kUXVhbGl0eS50ZXh0Q29udGVudCA9ICdUaGlzIGlzIHNvbWUgY29weSBhYm91dCB0aGUgcXVhbGl0eSBvZiB0aGUgZm9vZCwgYW5kIGZyb20gd2hlcmUgaXQgaXMgc291cmNlZC4gTGl0ZXJhbGx5IHRoZSBiZXN0IGZvb2QgaW4gdGhlIHdvcmxkLic7XG5cbiAgICBjb25zdCBzYWxtb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNhbG1vbkltYWdlLnNyYyA9ICcuLi9zcmMvaW1nL3NhbG1vbi5qcGVnJztcbiAgICBzYWxtb25JbWFnZS5jbGFzc0xpc3QuYWRkKCdzYWxtb24nKTtcblxuICAgIGNvbnN0IGFib3V0UmVzYXVyYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0UmVzYXVyYW50LnRleHRDb250ZW50ID0gJ1RoaXMgaXMgc29tZSBjb3B5IGFib3V0IHRoZSByZXN0YXVyYW50IGl0c2VsZi4gU29tZXRoaW5nIGFib3V0IHRoZSB2aWJlIG1heWJlLic7XG5cbiAgICBjb25zdCBvcGVuaW5nSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBvcGVuaW5nSG91cnNQRWxlbWVudHMgPSBbXVxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0NvbnRlbnQgPSBcbiAgICBbJ09wZW5pbmcgaG91cnM6JyxcbiAgICAgJ01vbmRheS1GcmlkYXk6IDEzOjAwIC0gMjE6MDAnLFxuICAgICAnU2F0dXJkYXktU3VuZGF5OiAxMTowMCAtIDIyOjAwJ107XG4gICAgZm9yIChsZXQgaSA9IDA7IGk8b3BlbmluZ0hvdXJzQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBvcGVuaW5nSG91cnNQRWxlbWVudHNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9wZW5pbmdIb3Vyc1BFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IG9wZW5pbmdIb3Vyc0NvbnRlbnRbaV07XG4gICAgICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNQRWxlbWVudHNbaV0pO1xuICAgIH1cbiAgICBob21lQ29udGVudC5hcHBlbmQoaGVhZGluZywgZm9vZFF1YWxpdHksIHNhbG1vbkltYWdlLCBhYm91dFJlc2F1cmFudCwgb3BlbmluZ0hvdXJzKTtcblxuICAgIHJldHVybiBob21lQ29udGVudDtcbn0iLCJjb25zdCBtZW51QnVpbGRlciA9IChuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICByZXR1cm4ge25hbWUsIHByaWNlLCBkZXNjcmlwdGlvbn07XG59XG5jb25zdCBzdGFydGVycyA9IFtcbiAgICBtZW51QnVpbGRlcignU291cCBvZiB0aGUgZGF5JywgNywgJ1Byb2JhYmx5IHRvbWF0byBzb3VwLicpLFxuICAgIG1lbnVCdWlsZGVyKCdTcGljeSB3aW5ncycsIDgsICdDaGlja2VuIHdpbmdzLCBidWZmYWxvIHNhdWNlLicpLFxuICAgIG1lbnVCdWlsZGVyKCdHYXJsaWMgYnJlYWQnLCA3LCAnR2FybGljLCBicmVhZC4nKVxuXVxuY29uc3QgbWFpbnMgPSBbXG4gICAgbWVudUJ1aWxkZXIoJ1BpenphJywgMTUsICdUb21hdG8sIG1venphcmVsbGEsIHNwaWN5IGNoaWNrZW4uJyksXG4gICAgbWVudUJ1aWxkZXIoJ1ZlZ2FuIGxhc2FnbmEnLCAxNiwgJ1Rhc3R5IGxhc2FnbmEgd2l0aCBzb21lIHZlZ2FuIGZpbGxpbmcuJyksXG4gICAgbWVudUJ1aWxkZXIoJ0NhbHpvbmUnLCAyMiwgJ0Jhc2ljYWxseSB0aGUgcGl6emEgYnV0IGZvbGRlZC4nKVxuXVxuY29uc3QgZGVzc2VydHMgPSBbXG4gICAgbWVudUJ1aWxkZXIoJ0Nob2NvbGF0ZSBjYWtlJywgOSwgJ1NlcnZlZCB3aXRoIGljZSBjcmVhbSBvciBjcmVhbS4nKSxcbiAgICBtZW51QnVpbGRlcignQ2hlZXNlY2FrZScsIDgsICdTZXJ2ZWQgd2l0aCBhIGNhcmFtZWwgc2F1Y2UuJylcbl1cblxuZnVuY3Rpb24gbWVudUl0ZW1EaXZCdWlsZGVyKGl0ZW0pIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XG5cbiAgICBjb25zdCB0b3BSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BSb3cuY2xhc3NMaXN0LmFkZCgndG9wUm93Jyk7XG5cbiAgICBjb25zdCBib3R0b21Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21Sb3cuY2xhc3NMaXN0LmFkZCgnYm90dG9tUm93Jyk7XG4gICAgYm90dG9tUm93LnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIC8vIGJ1aWxkIHRvcFJvdzpcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbU5hbWUnKVxuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgdG9wUm93LmFwcGVuZChpdGVtTmFtZSwgc3BhY2VyLCBwcmljZSk7XG4gICAgLy9cblxuICAgIG1lbnVJdGVtLmFwcGVuZCh0b3BSb3csIGJvdHRvbVJvdyk7XG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRNZW51KCkge1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudScsICdpbmZvJyk7XG5cbiAgICBjb25zdCBzdGFydGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN0YXJ0ZXJUaXRsZS50ZXh0Q29udGVudCA9ICdTdGFydGVycyc7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoc3RhcnRlclRpdGxlKTtcblxuICAgIHN0YXJ0ZXJzLmZvckVhY2goc3RhcnRlciA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IG1lbnVJdGVtRGl2QnVpbGRlcihzdGFydGVyKTtcbiAgICAgICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gJ01haW5zJ1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cbiAgICBtYWlucy5mb3JFYWNoKG1haW4gPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBtZW51SXRlbURpdkJ1aWxkZXIobWFpbik7XG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXNzZXJ0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGRlc3NlcnRUaXRsZS50ZXh0Q29udGVudCA9ICdEZXNzZXJ0cydcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0VGl0bGUpO1xuXG4gICAgZGVzc2VydHMuZm9yRWFjaChkZXNzZXJ0ID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gbWVudUl0ZW1EaXZCdWlsZGVyKGRlc3NlcnQpO1xuICAgICAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnVDb250ZW50O1xufVxuIiwiZnVuY3Rpb24gYnVpbGRDb250ZW50Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuICAgIHJldHVybiBjb250ZW50Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnRmFuY3kgRm9vZC4nO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gYnVpbGROYXYoKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICAgICAge25hbWU6ICdIb21lJywgY3NzQ2xhc3M6ICdob21lJ30sXG4gICAgICAgIHtuYW1lOiAnTWVudScsIGNzc0NsYXNzOiAnbWVudSd9LFxuICAgICAgICB7bmFtZTogJ0NvbnRhY3QnLCBjc3NDbGFzczogJ2NvbnRhY3QnfVxuICAgIF07XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gICAgZnVuY3Rpb24gYnVpbGRCdXR0b24odGV4dENvbnRlbnQsIGNzc0NsYXNzKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoYnVpbGRCdXR0b24oYnV0dG9uLm5hbWUsIGJ1dHRvbi5jc3NDbGFzcykpO1xuICAgIH0pO1xuICAgIHJldHVybiBuYXZCYXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IEd1eSBGb3N0ZXInO1xuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmNvbnN0IGJ1aWxkUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250YWluZXInKTtcbiAgICBjb25zdCBwYWdlQXJyYXkgPSBcbiAgICBbYnVpbGRIZWFkZXIoKSxcbiAgICAgYnVpbGROYXYoKSxcbiAgICAgYnVpbGRDb250ZW50Q29udGFpbmVyKCksXG4gICAgIGJ1aWxkRm9vdGVyKClcbiAgICBdO1xuICAgIHBhZ2VBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBidWlsZFBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7YnVpbGRQYWdlfSBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5pbXBvcnQge2J1aWxkSG9tZX0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7YnVpbGRNZW51fSBmcm9tICcuL21lbnUuanMnO1xuYnVpbGRQYWdlKCk7XG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIb21lKCkpOyAgICBmaWxscyB0aGUgaG9tZSB0YWIuXG5cbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRNZW51KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==