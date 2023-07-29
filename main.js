/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildContact: () => (/* binding */ buildContact)
/* harmony export */ });
/* harmony import */ var _element_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-builder */ "./src/element-builder.js");



function buildContact() {
    const contactContent = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('div', ['contact', 'info'], ''); 

    const location = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('h2', '', 'Location.');

    const addressDiv = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('div', 'address', '');
    const map = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('img', 'map', '');
    map.src = '../src/img/map-gb56e65aa0_640.png';
    const address = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('p', '', '');
    address.innerHTML = '123 Fake Street<br>Fake Town<br>Fakeshire<br>FA339NN';
    addressDiv.append(address, map);

    const contact = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('h2', '', 'Contact.');
    const telLabel = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('p', 'label', 'Tel: ');
    const phone = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('a', 'phone', '01234 567899');
    phone.href = 'tel:01234567890';
    telLabel.append(phone);
    
    const emailLabel = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('p', 'label', 'Email: ');
    const email = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('a', 'email', 'fake@fakemail.com');
    email.href = 'mailto:fake@fakemail.com';
    emailLabel.append(email);
    


    contactContent.append(location, addressDiv, contact, telLabel, emailLabel);
    return contactContent;
  
}

/***/ }),

/***/ "./src/element-builder.js":
/*!********************************!*\
  !*** ./src/element-builder.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementBuilder: () => (/* binding */ elementBuilder)
/* harmony export */ });
function elementBuilder(element, classList, textContent) {
    const xelement = document.createElement(element);
    if (classList != '') {
        if (typeof classList == 'object') {
            classList.forEach(classLabel => {
                xelement.classList.add(classLabel);
            });
        } else xelement.classList.add(classList);
    }
    if (textContent != '') xelement.textContent = textContent;
    return xelement;
}

/***/ }),

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
/* harmony import */ var _element_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-builder */ "./src/element-builder.js");

//elementBuilder(element, classList, textContent)

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
    const menuItem = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('div', 'menuItem', '');
    const topRow = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('div', 'topRow', '');
    const bottomRow = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('div', 'bottomRow', item.description);
    
    // build topRow:
    const itemName = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('h3', 'itemName', item.name);
    const spacer = document.createElement('span');
    const price = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('h3', 'price', item.price);
    topRow.append(itemName, spacer, price);
    //
    menuItem.append(topRow, bottomRow);
    return menuItem;
}

function buildMenu() {
    const menuContent = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('div', ['menu', 'info'], '');
    const starterTitle = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('h2', '', 'Starters');

    menuContent.appendChild(starterTitle);

    starters.forEach(starter => {
        const div = menuItemDivBuilder(starter);
        menuContent.appendChild(div);
    });
    
    const mainTitle = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('h2', '', 'Mains');
    menuContent.appendChild(mainTitle);

    mains.forEach(main => {
        const div = menuItemDivBuilder(main);
        menuContent.appendChild(div);
    });

    const dessertTitle = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('h2', '', 'Desserts');
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
/* harmony import */ var _element_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-builder */ "./src/element-builder.js");

//elementBuilder(element, classList, textContent)

function buildContentContainer() {
    const contentContainer = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('div', '', '');
    contentContainer.setAttribute('id', 'content');
    return contentContainer;
}


function buildHeader() {
    const header = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('header', '', '');
    const title = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('h1', '', 'Fancy Food.');
    header.appendChild(title);
    return header;
}

function buildNav() {
    const buttons = [
        {name: 'Home', cssClass: 'home'},
        {name: 'Menu', cssClass: 'menu'},
        {name: 'Contact', cssClass: 'contact'}
    ];
    const navBar = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('div', 'nav', '');

    function buildButton(textContent, cssClass) {
        const button = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('button', cssClass, textContent);
        return button;
    }

    buttons.forEach(button => {
        navBar.appendChild(buildButton(button.name, button.cssClass));
    });
    return navBar;
}

function buildFooter() {
    const footer = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('footer', '', 'Created by Guy Foster.')
    return footer;
}

function buildPage() {
    const mainContainer = document.querySelector('#mainContainer');
    mainContainer.append(buildHeader(), buildNav(), buildContentContainer(), buildFooter());
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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




// import { elementBuilder } from './element-builder.js';
(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.buildPage)(); //Places basic elements on the page.

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
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.buildHome)());
    activeTabSwitcher(homeTab);
});

menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.buildMenu)());
    activeTabSwitcher(menuTab);
})

contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.buildContact)());
    activeTabSwitcher(contactTab);
})

content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.buildHome)());    //sets default page to Home.
activeTabSwitcher(homeTab);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7OztBQUc1QztBQUNQLDJCQUEyQixnRUFBYzs7QUFFekMscUJBQXFCLGdFQUFjOztBQUVuQyx1QkFBdUIsZ0VBQWM7QUFDckMsZ0JBQWdCLGdFQUFjO0FBQzlCO0FBQ0Esb0JBQW9CLGdFQUFjO0FBQ2xDO0FBQ0E7O0FBRUEsb0JBQW9CLGdFQUFjO0FBQ2xDLHFCQUFxQixnRUFBYztBQUNuQyxrQkFBa0IsZ0VBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdFQUFjO0FBQ3JDLGtCQUFrQixnRUFBYztBQUNoQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9CTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1hPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9CbUQ7QUFDbkQ7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdFQUFjO0FBQ25DLG1CQUFtQixnRUFBYztBQUNqQyxzQkFBc0IsZ0VBQWM7QUFDcEM7QUFDQTtBQUNBLHFCQUFxQixnRUFBYztBQUNuQztBQUNBLGtCQUFrQixnRUFBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asd0JBQXdCLGdFQUFjO0FBQ3RDLHlCQUF5QixnRUFBYzs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0JBQXNCLGdFQUFjO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwseUJBQXlCLGdFQUFjO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFbUQ7QUFDbkQ7O0FBRUE7QUFDQSw2QkFBNkIsZ0VBQWM7QUFDM0M7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG1CQUFtQixnRUFBYztBQUNqQyxrQkFBa0IsZ0VBQWM7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLCtCQUErQjtBQUN4QyxTQUFTLCtCQUErQjtBQUN4QyxTQUFTO0FBQ1Q7QUFDQSxtQkFBbUIsZ0VBQWM7O0FBRWpDO0FBQ0EsdUJBQXVCLGdFQUFjO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGdFQUFjO0FBQ2pDO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7OztVQzVDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0w7QUFDQTtBQUNNO0FBQzFDLFlBQVksaUJBQWlCO0FBQzdCLHdEQUFTLElBQUk7O0FBRWI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbURBQVM7QUFDakM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSx3QkFBd0IsbURBQVM7QUFDakM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSx3QkFBd0IseURBQVk7QUFDcEM7QUFDQSxDQUFDOztBQUVELG9CQUFvQixtREFBUyxRQUFRO0FBQ3JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VsZW1lbnQtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbGVtZW50QnVpbGRlciB9IGZyb20gXCIuL2VsZW1lbnQtYnVpbGRlclwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBlbGVtZW50QnVpbGRlcignZGl2JywgWydjb250YWN0JywgJ2luZm8nXSwgJycpOyBcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZWxlbWVudEJ1aWxkZXIoJ2gyJywgJycsICdMb2NhdGlvbi4nKTtcblxuICAgIGNvbnN0IGFkZHJlc3NEaXYgPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ2FkZHJlc3MnLCAnJyk7XG4gICAgY29uc3QgbWFwID0gZWxlbWVudEJ1aWxkZXIoJ2ltZycsICdtYXAnLCAnJyk7XG4gICAgbWFwLnNyYyA9ICcuLi9zcmMvaW1nL21hcC1nYjU2ZTY1YWEwXzY0MC5wbmcnO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBlbGVtZW50QnVpbGRlcigncCcsICcnLCAnJyk7XG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSAnMTIzIEZha2UgU3RyZWV0PGJyPkZha2UgVG93bjxicj5GYWtlc2hpcmU8YnI+RkEzMzlOTic7XG4gICAgYWRkcmVzc0Rpdi5hcHBlbmQoYWRkcmVzcywgbWFwKTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBlbGVtZW50QnVpbGRlcignaDInLCAnJywgJ0NvbnRhY3QuJyk7XG4gICAgY29uc3QgdGVsTGFiZWwgPSBlbGVtZW50QnVpbGRlcigncCcsICdsYWJlbCcsICdUZWw6ICcpO1xuICAgIGNvbnN0IHBob25lID0gZWxlbWVudEJ1aWxkZXIoJ2EnLCAncGhvbmUnLCAnMDEyMzQgNTY3ODk5Jyk7XG4gICAgcGhvbmUuaHJlZiA9ICd0ZWw6MDEyMzQ1Njc4OTAnO1xuICAgIHRlbExhYmVsLmFwcGVuZChwaG9uZSk7XG4gICAgXG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGVsZW1lbnRCdWlsZGVyKCdwJywgJ2xhYmVsJywgJ0VtYWlsOiAnKTtcbiAgICBjb25zdCBlbWFpbCA9IGVsZW1lbnRCdWlsZGVyKCdhJywgJ2VtYWlsJywgJ2Zha2VAZmFrZW1haWwuY29tJyk7XG4gICAgZW1haWwuaHJlZiA9ICdtYWlsdG86ZmFrZUBmYWtlbWFpbC5jb20nO1xuICAgIGVtYWlsTGFiZWwuYXBwZW5kKGVtYWlsKTtcbiAgICBcblxuXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kKGxvY2F0aW9uLCBhZGRyZXNzRGl2LCBjb250YWN0LCB0ZWxMYWJlbCwgZW1haWxMYWJlbCk7XG4gICAgcmV0dXJuIGNvbnRhY3RDb250ZW50O1xuICBcbn0iLCJleHBvcnQgZnVuY3Rpb24gZWxlbWVudEJ1aWxkZXIoZWxlbWVudCwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgIGNvbnN0IHhlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAoY2xhc3NMaXN0ICE9ICcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjbGFzc0xpc3QuZm9yRWFjaChjbGFzc0xhYmVsID0+IHtcbiAgICAgICAgICAgICAgICB4ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGFiZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB4ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XG4gICAgfVxuICAgIGlmICh0ZXh0Q29udGVudCAhPSAnJykgeGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICByZXR1cm4geGVsZW1lbnQ7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSG9tZSgpIHtcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUnLCAnaW5mbycpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdPdXIgZm9vZC4nO1xuXG4gICAgY29uc3QgZm9vZFF1YWxpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vZFF1YWxpdHkudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBzb21lIGNvcHkgYWJvdXQgdGhlIHF1YWxpdHkgb2YgdGhlIGZvb2QsIGFuZCBmcm9tIHdoZXJlIGl0IGlzIHNvdXJjZWQuIExpdGVyYWxseSB0aGUgYmVzdCBmb29kIGluIHRoZSB3b3JsZC4nO1xuXG4gICAgY29uc3Qgc2FsbW9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzYWxtb25JbWFnZS5zcmMgPSAnLi4vc3JjL2ltZy9zYWxtb24uanBlZyc7XG4gICAgc2FsbW9uSW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2FsbW9uJyk7XG5cbiAgICBjb25zdCBhYm91dFJlc2F1cmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFJlc2F1cmFudC50ZXh0Q29udGVudCA9ICdUaGlzIGlzIHNvbWUgY29weSBhYm91dCB0aGUgcmVzdGF1cmFudCBpdHNlbGYuIFNvbWV0aGluZyBhYm91dCB0aGUgdmliZSBtYXliZS4nO1xuXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzUEVsZW1lbnRzID0gW11cbiAgICBjb25zdCBvcGVuaW5nSG91cnNDb250ZW50ID0gXG4gICAgWydPcGVuaW5nIGhvdXJzOicsXG4gICAgICdNb25kYXktRnJpZGF5OiAxMzowMCAtIDIxOjAwJyxcbiAgICAgJ1NhdHVyZGF5LVN1bmRheTogMTE6MDAgLSAyMjowMCddO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPG9wZW5pbmdIb3Vyc0NvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3BlbmluZ0hvdXJzUEVsZW1lbnRzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvcGVuaW5nSG91cnNQRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPSBvcGVuaW5nSG91cnNDb250ZW50W2ldO1xuICAgICAgICBvcGVuaW5nSG91cnMuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzUEVsZW1lbnRzW2ldKTtcbiAgICB9XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKGhlYWRpbmcsIGZvb2RRdWFsaXR5LCBzYWxtb25JbWFnZSwgYWJvdXRSZXNhdXJhbnQsIG9wZW5pbmdIb3Vycyk7XG5cbiAgICByZXR1cm4gaG9tZUNvbnRlbnQ7XG59IiwiaW1wb3J0IHsgZWxlbWVudEJ1aWxkZXIgfSBmcm9tIFwiLi9lbGVtZW50LWJ1aWxkZXJcIjtcbi8vZWxlbWVudEJ1aWxkZXIoZWxlbWVudCwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudClcblxuY29uc3QgbWVudUJ1aWxkZXIgPSAobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lLCBwcmljZSwgZGVzY3JpcHRpb259O1xufVxuY29uc3Qgc3RhcnRlcnMgPSBbXG4gICAgbWVudUJ1aWxkZXIoJ1NvdXAgb2YgdGhlIGRheScsIDcsICdQcm9iYWJseSB0b21hdG8gc291cC4nKSxcbiAgICBtZW51QnVpbGRlcignU3BpY3kgd2luZ3MnLCA4LCAnQ2hpY2tlbiB3aW5ncywgYnVmZmFsbyBzYXVjZS4nKSxcbiAgICBtZW51QnVpbGRlcignR2FybGljIGJyZWFkJywgNywgJ0dhcmxpYywgYnJlYWQuJylcbl1cbmNvbnN0IG1haW5zID0gW1xuICAgIG1lbnVCdWlsZGVyKCdQaXp6YScsIDE1LCAnVG9tYXRvLCBtb3p6YXJlbGxhLCBzcGljeSBjaGlja2VuLicpLFxuICAgIG1lbnVCdWlsZGVyKCdWZWdhbiBsYXNhZ25hJywgMTYsICdUYXN0eSBsYXNhZ25hIHdpdGggc29tZSB2ZWdhbiBmaWxsaW5nLicpLFxuICAgIG1lbnVCdWlsZGVyKCdDYWx6b25lJywgMjIsICdCYXNpY2FsbHkgdGhlIHBpenphIGJ1dCBmb2xkZWQuJylcbl1cbmNvbnN0IGRlc3NlcnRzID0gW1xuICAgIG1lbnVCdWlsZGVyKCdDaG9jb2xhdGUgY2FrZScsIDksICdTZXJ2ZWQgd2l0aCBpY2UgY3JlYW0gb3IgY3JlYW0uJyksXG4gICAgbWVudUJ1aWxkZXIoJ0NoZWVzZWNha2UnLCA4LCAnU2VydmVkIHdpdGggYSBjYXJhbWVsIHNhdWNlLicpXG5dXG5cbmZ1bmN0aW9uIG1lbnVJdGVtRGl2QnVpbGRlcihpdGVtKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ21lbnVJdGVtJywgJycpO1xuICAgIGNvbnN0IHRvcFJvdyA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCAndG9wUm93JywgJycpO1xuICAgIGNvbnN0IGJvdHRvbVJvdyA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCAnYm90dG9tUm93JywgaXRlbS5kZXNjcmlwdGlvbik7XG4gICAgXG4gICAgLy8gYnVpbGQgdG9wUm93OlxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZWxlbWVudEJ1aWxkZXIoJ2gzJywgJ2l0ZW1OYW1lJywgaXRlbS5uYW1lKTtcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgcHJpY2UgPSBlbGVtZW50QnVpbGRlcignaDMnLCAncHJpY2UnLCBpdGVtLnByaWNlKTtcbiAgICB0b3BSb3cuYXBwZW5kKGl0ZW1OYW1lLCBzcGFjZXIsIHByaWNlKTtcbiAgICAvL1xuICAgIG1lbnVJdGVtLmFwcGVuZCh0b3BSb3csIGJvdHRvbVJvdyk7XG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRNZW51KCkge1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZWxlbWVudEJ1aWxkZXIoJ2RpdicsIFsnbWVudScsICdpbmZvJ10sICcnKTtcbiAgICBjb25zdCBzdGFydGVyVGl0bGUgPSBlbGVtZW50QnVpbGRlcignaDInLCAnJywgJ1N0YXJ0ZXJzJyk7XG5cbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChzdGFydGVyVGl0bGUpO1xuXG4gICAgc3RhcnRlcnMuZm9yRWFjaChzdGFydGVyID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gbWVudUl0ZW1EaXZCdWlsZGVyKHN0YXJ0ZXIpO1xuICAgICAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IG1haW5UaXRsZSA9IGVsZW1lbnRCdWlsZGVyKCdoMicsICcnLCAnTWFpbnMnKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuXG4gICAgbWFpbnMuZm9yRWFjaChtYWluID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gbWVudUl0ZW1EaXZCdWlsZGVyKG1haW4pO1xuICAgICAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVzc2VydFRpdGxlID0gZWxlbWVudEJ1aWxkZXIoJ2gyJywgJycsICdEZXNzZXJ0cycpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRUaXRsZSk7XG5cbiAgICBkZXNzZXJ0cy5mb3JFYWNoKGRlc3NlcnQgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBtZW51SXRlbURpdkJ1aWxkZXIoZGVzc2VydCk7XG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudUNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgeyBlbGVtZW50QnVpbGRlciB9IGZyb20gXCIuL2VsZW1lbnQtYnVpbGRlclwiO1xuLy9lbGVtZW50QnVpbGRlcihlbGVtZW50LCBjbGFzc0xpc3QsIHRleHRDb250ZW50KVxuXG5mdW5jdGlvbiBidWlsZENvbnRlbnRDb250YWluZXIoKSB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCAnJywgJycpO1xuICAgIGNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gYnVpbGRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZWxlbWVudEJ1aWxkZXIoJ2hlYWRlcicsICcnLCAnJyk7XG4gICAgY29uc3QgdGl0bGUgPSBlbGVtZW50QnVpbGRlcignaDEnLCAnJywgJ0ZhbmN5IEZvb2QuJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBidWlsZE5hdigpIHtcbiAgICBjb25zdCBidXR0b25zID0gW1xuICAgICAgICB7bmFtZTogJ0hvbWUnLCBjc3NDbGFzczogJ2hvbWUnfSxcbiAgICAgICAge25hbWU6ICdNZW51JywgY3NzQ2xhc3M6ICdtZW51J30sXG4gICAgICAgIHtuYW1lOiAnQ29udGFjdCcsIGNzc0NsYXNzOiAnY29udGFjdCd9XG4gICAgXTtcbiAgICBjb25zdCBuYXZCYXIgPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ25hdicsICcnKTtcblxuICAgIGZ1bmN0aW9uIGJ1aWxkQnV0dG9uKHRleHRDb250ZW50LCBjc3NDbGFzcykge1xuICAgICAgICBjb25zdCBidXR0b24gPSBlbGVtZW50QnVpbGRlcignYnV0dG9uJywgY3NzQ2xhc3MsIHRleHRDb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGJ1aWxkQnV0dG9uKGJ1dHRvbi5uYW1lLCBidXR0b24uY3NzQ2xhc3MpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmF2QmFyO1xufVxuXG5mdW5jdGlvbiBidWlsZEZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBlbGVtZW50QnVpbGRlcignZm9vdGVyJywgJycsICdDcmVhdGVkIGJ5IEd1eSBGb3N0ZXIuJylcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRQYWdlKCkge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbkNvbnRhaW5lcicpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGJ1aWxkSGVhZGVyKCksIGJ1aWxkTmF2KCksIGJ1aWxkQ29udGVudENvbnRhaW5lcigpLCBidWlsZEZvb3RlcigpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7YnVpbGRQYWdlfSBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5pbXBvcnQge2J1aWxkSG9tZX0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7YnVpbGRNZW51fSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHtidWlsZENvbnRhY3R9IGZyb20gJy4vY29udGFjdC5qcyc7XG4vLyBpbXBvcnQgeyBlbGVtZW50QnVpbGRlciB9IGZyb20gJy4vZWxlbWVudC1idWlsZGVyLmpzJztcbmJ1aWxkUGFnZSgpOyAvL1BsYWNlcyBiYXNpYyBlbGVtZW50cyBvbiB0aGUgcGFnZS5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcblxuZnVuY3Rpb24gYWN0aXZlVGFiU3dpdGNoZXIobmV3QWN0aXZlKSB7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgbmV3QWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIb21lKCkpO1xuICAgIGFjdGl2ZVRhYlN3aXRjaGVyKGhvbWVUYWIpO1xufSk7XG5cbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTWVudSgpKTtcbiAgICBhY3RpdmVUYWJTd2l0Y2hlcihtZW51VGFiKTtcbn0pXG5cbmNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkQ29udGFjdCgpKTtcbiAgICBhY3RpdmVUYWJTd2l0Y2hlcihjb250YWN0VGFiKTtcbn0pXG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIb21lKCkpOyAgICAvL3NldHMgZGVmYXVsdCBwYWdlIHRvIEhvbWUuXG5hY3RpdmVUYWJTd2l0Y2hlcihob21lVGFiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==