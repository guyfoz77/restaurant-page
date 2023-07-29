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
        console.log(typeof classList);
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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




// import { elementBuilder } from './element-builder.js';
(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.buildPage)();


const content = document.querySelector('#content');

// content.appendChild(buildHome());    fills the home tab.

// content.appendChild(buildMenu());    fills the menu tab.

// content.appendChild(buildContact());     fills the contact tab.
// content.appendChild(buildHome());

const homeTab = document.querySelector('.home');
homeTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.buildHome)());
});

const menuTab = document.querySelector('.menu');
menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.buildMenu)());
})

const contactTab = document.querySelector('.contact');
contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.buildContact)());
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VsZW1lbnQtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbGVtZW50QnVpbGRlciB9IGZyb20gXCIuL2VsZW1lbnQtYnVpbGRlclwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBlbGVtZW50QnVpbGRlcignZGl2JywgWydjb250YWN0JywgJ2luZm8nXSwgJycpOyBcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZWxlbWVudEJ1aWxkZXIoJ2gyJywgJycsICdMb2NhdGlvbi4nKTtcblxuICAgIGNvbnN0IGFkZHJlc3NEaXYgPSBlbGVtZW50QnVpbGRlcignZGl2JywgJ2FkZHJlc3MnLCAnJyk7XG4gICAgY29uc3QgbWFwID0gZWxlbWVudEJ1aWxkZXIoJ2ltZycsICdtYXAnLCAnJyk7XG4gICAgbWFwLnNyYyA9ICcuLi9zcmMvaW1nL21hcC1nYjU2ZTY1YWEwXzY0MC5wbmcnO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBlbGVtZW50QnVpbGRlcigncCcsICcnLCAnJyk7XG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSAnMTIzIEZha2UgU3RyZWV0PGJyPkZha2UgVG93bjxicj5GYWtlc2hpcmU8YnI+RkEzMzlOTic7XG4gICAgYWRkcmVzc0Rpdi5hcHBlbmQoYWRkcmVzcywgbWFwKTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBlbGVtZW50QnVpbGRlcignaDInLCAnJywgJ0NvbnRhY3QuJyk7XG4gICAgY29uc3QgdGVsTGFiZWwgPSBlbGVtZW50QnVpbGRlcigncCcsICdsYWJlbCcsICdUZWw6ICcpO1xuICAgIGNvbnN0IHBob25lID0gZWxlbWVudEJ1aWxkZXIoJ2EnLCAncGhvbmUnLCAnMDEyMzQgNTY3ODk5Jyk7XG4gICAgcGhvbmUuaHJlZiA9ICd0ZWw6MDEyMzQ1Njc4OTAnO1xuICAgIHRlbExhYmVsLmFwcGVuZChwaG9uZSk7XG4gICAgXG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGVsZW1lbnRCdWlsZGVyKCdwJywgJ2xhYmVsJywgJ0VtYWlsOiAnKTtcbiAgICBjb25zdCBlbWFpbCA9IGVsZW1lbnRCdWlsZGVyKCdhJywgJ2VtYWlsJywgJ2Zha2VAZmFrZW1haWwuY29tJyk7XG4gICAgZW1haWwuaHJlZiA9ICdtYWlsdG86ZmFrZUBmYWtlbWFpbC5jb20nO1xuICAgIGVtYWlsTGFiZWwuYXBwZW5kKGVtYWlsKTtcbiAgICBcblxuXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kKGxvY2F0aW9uLCBhZGRyZXNzRGl2LCBjb250YWN0LCB0ZWxMYWJlbCwgZW1haWxMYWJlbCk7XG4gICAgcmV0dXJuIGNvbnRhY3RDb250ZW50O1xuICBcbn0iLCJleHBvcnQgZnVuY3Rpb24gZWxlbWVudEJ1aWxkZXIoZWxlbWVudCwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgIGNvbnN0IHhlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAoY2xhc3NMaXN0ICE9ICcnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjbGFzc0xpc3QpO1xuICAgICAgICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2xhc3NMaXN0LmZvckVhY2goY2xhc3NMYWJlbCA9PiB7XG4gICAgICAgICAgICAgICAgeGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0xhYmVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgeGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3QpO1xuICAgIH1cbiAgICBpZiAodGV4dENvbnRlbnQgIT0gJycpIHhlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIHhlbGVtZW50O1xufSIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEhvbWUoKSB7XG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lJywgJ2luZm8nKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnT3VyIGZvb2QuJztcblxuICAgIGNvbnN0IGZvb2RRdWFsaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2RRdWFsaXR5LnRleHRDb250ZW50ID0gJ1RoaXMgaXMgc29tZSBjb3B5IGFib3V0IHRoZSBxdWFsaXR5IG9mIHRoZSBmb29kLCBhbmQgZnJvbSB3aGVyZSBpdCBpcyBzb3VyY2VkLiBMaXRlcmFsbHkgdGhlIGJlc3QgZm9vZCBpbiB0aGUgd29ybGQuJztcblxuICAgIGNvbnN0IHNhbG1vbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2FsbW9uSW1hZ2Uuc3JjID0gJy4uL3NyYy9pbWcvc2FsbW9uLmpwZWcnO1xuICAgIHNhbG1vbkltYWdlLmNsYXNzTGlzdC5hZGQoJ3NhbG1vbicpO1xuXG4gICAgY29uc3QgYWJvdXRSZXNhdXJhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRSZXNhdXJhbnQudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBzb21lIGNvcHkgYWJvdXQgdGhlIHJlc3RhdXJhbnQgaXRzZWxmLiBTb21ldGhpbmcgYWJvdXQgdGhlIHZpYmUgbWF5YmUuJztcblxuICAgIGNvbnN0IG9wZW5pbmdIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc1BFbGVtZW50cyA9IFtdXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzQ29udGVudCA9IFxuICAgIFsnT3BlbmluZyBob3VyczonLFxuICAgICAnTW9uZGF5LUZyaWRheTogMTM6MDAgLSAyMTowMCcsXG4gICAgICdTYXR1cmRheS1TdW5kYXk6IDExOjAwIC0gMjI6MDAnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaTxvcGVuaW5nSG91cnNDb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wZW5pbmdIb3Vyc1BFbGVtZW50c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb3BlbmluZ0hvdXJzUEVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gb3BlbmluZ0hvdXJzQ29udGVudFtpXTtcbiAgICAgICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc1BFbGVtZW50c1tpXSk7XG4gICAgfVxuICAgIGhvbWVDb250ZW50LmFwcGVuZChoZWFkaW5nLCBmb29kUXVhbGl0eSwgc2FsbW9uSW1hZ2UsIGFib3V0UmVzYXVyYW50LCBvcGVuaW5nSG91cnMpO1xuXG4gICAgcmV0dXJuIGhvbWVDb250ZW50O1xufSIsImNvbnN0IG1lbnVCdWlsZGVyID0gKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHJldHVybiB7bmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9ufTtcbn1cbmNvbnN0IHN0YXJ0ZXJzID0gW1xuICAgIG1lbnVCdWlsZGVyKCdTb3VwIG9mIHRoZSBkYXknLCA3LCAnUHJvYmFibHkgdG9tYXRvIHNvdXAuJyksXG4gICAgbWVudUJ1aWxkZXIoJ1NwaWN5IHdpbmdzJywgOCwgJ0NoaWNrZW4gd2luZ3MsIGJ1ZmZhbG8gc2F1Y2UuJyksXG4gICAgbWVudUJ1aWxkZXIoJ0dhcmxpYyBicmVhZCcsIDcsICdHYXJsaWMsIGJyZWFkLicpXG5dXG5jb25zdCBtYWlucyA9IFtcbiAgICBtZW51QnVpbGRlcignUGl6emEnLCAxNSwgJ1RvbWF0bywgbW96emFyZWxsYSwgc3BpY3kgY2hpY2tlbi4nKSxcbiAgICBtZW51QnVpbGRlcignVmVnYW4gbGFzYWduYScsIDE2LCAnVGFzdHkgbGFzYWduYSB3aXRoIHNvbWUgdmVnYW4gZmlsbGluZy4nKSxcbiAgICBtZW51QnVpbGRlcignQ2Fsem9uZScsIDIyLCAnQmFzaWNhbGx5IHRoZSBwaXp6YSBidXQgZm9sZGVkLicpXG5dXG5jb25zdCBkZXNzZXJ0cyA9IFtcbiAgICBtZW51QnVpbGRlcignQ2hvY29sYXRlIGNha2UnLCA5LCAnU2VydmVkIHdpdGggaWNlIGNyZWFtIG9yIGNyZWFtLicpLFxuICAgIG1lbnVCdWlsZGVyKCdDaGVlc2VjYWtlJywgOCwgJ1NlcnZlZCB3aXRoIGEgY2FyYW1lbCBzYXVjZS4nKVxuXVxuXG5mdW5jdGlvbiBtZW51SXRlbURpdkJ1aWxkZXIoaXRlbSkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICAgIGNvbnN0IHRvcFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcFJvdy5jbGFzc0xpc3QuYWRkKCd0b3BSb3cnKTtcblxuICAgIGNvbnN0IGJvdHRvbVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvdHRvbVJvdy5jbGFzc0xpc3QuYWRkKCdib3R0b21Sb3cnKTtcbiAgICBib3R0b21Sb3cudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgLy8gYnVpbGQgdG9wUm93OlxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtTmFtZScpXG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgIHByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcbiAgICB0b3BSb3cuYXBwZW5kKGl0ZW1OYW1lLCBzcGFjZXIsIHByaWNlKTtcbiAgICAvL1xuXG4gICAgbWVudUl0ZW0uYXBwZW5kKHRvcFJvdywgYm90dG9tUm93KTtcbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE1lbnUoKSB7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51JywgJ2luZm8nKTtcblxuICAgIGNvbnN0IHN0YXJ0ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc3RhcnRlclRpdGxlLnRleHRDb250ZW50ID0gJ1N0YXJ0ZXJzJztcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChzdGFydGVyVGl0bGUpO1xuXG4gICAgc3RhcnRlcnMuZm9yRWFjaChzdGFydGVyID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gbWVudUl0ZW1EaXZCdWlsZGVyKHN0YXJ0ZXIpO1xuICAgICAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSAnTWFpbnMnXG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcblxuICAgIG1haW5zLmZvckVhY2gobWFpbiA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IG1lbnVJdGVtRGl2QnVpbGRlcihtYWluKTtcbiAgICAgICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlc3NlcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZGVzc2VydFRpdGxlLnRleHRDb250ZW50ID0gJ0Rlc3NlcnRzJ1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRUaXRsZSk7XG5cbiAgICBkZXNzZXJ0cy5mb3JFYWNoKGRlc3NlcnQgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBtZW51SXRlbURpdkJ1aWxkZXIoZGVzc2VydCk7XG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudUNvbnRlbnQ7XG59XG4iLCJmdW5jdGlvbiBidWlsZENvbnRlbnRDb250YWluZXIoKSB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdGYW5jeSBGb29kLic7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBidWlsZE5hdigpIHtcbiAgICBjb25zdCBidXR0b25zID0gW1xuICAgICAgICB7bmFtZTogJ0hvbWUnLCBjc3NDbGFzczogJ2hvbWUnfSxcbiAgICAgICAge25hbWU6ICdNZW51JywgY3NzQ2xhc3M6ICdtZW51J30sXG4gICAgICAgIHtuYW1lOiAnQ29udGFjdCcsIGNzc0NsYXNzOiAnY29udGFjdCd9XG4gICAgXTtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBmdW5jdGlvbiBidWlsZEJ1dHRvbih0ZXh0Q29udGVudCwgY3NzQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChidWlsZEJ1dHRvbihidXR0b24ubmFtZSwgYnV0dG9uLmNzc0NsYXNzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5hdkJhcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgR3V5IEZvc3Rlcic7XG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuY29uc3QgYnVpbGRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbkNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBhZ2VBcnJheSA9IFxuICAgIFtidWlsZEhlYWRlcigpLFxuICAgICBidWlsZE5hdigpLFxuICAgICBidWlsZENvbnRlbnRDb250YWluZXIoKSxcbiAgICAgYnVpbGRGb290ZXIoKVxuICAgIF07XG4gICAgcGFnZUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGJ1aWxkUGFnZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtidWlsZFBhZ2V9IGZyb20gJy4vcGFnZS1sb2FkLmpzJztcbmltcG9ydCB7YnVpbGRIb21lfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHtidWlsZE1lbnV9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBidWlsZENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuLy8gaW1wb3J0IHsgZWxlbWVudEJ1aWxkZXIgfSBmcm9tICcuL2VsZW1lbnQtYnVpbGRlci5qcyc7XG5idWlsZFBhZ2UoKTtcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuLy8gY29udGVudC5hcHBlbmRDaGlsZChidWlsZEhvbWUoKSk7ICAgIGZpbGxzIHRoZSBob21lIHRhYi5cblxuLy8gY29udGVudC5hcHBlbmRDaGlsZChidWlsZE1lbnUoKSk7ICAgIGZpbGxzIHRoZSBtZW51IHRhYi5cblxuLy8gY29udGVudC5hcHBlbmRDaGlsZChidWlsZENvbnRhY3QoKSk7ICAgICBmaWxscyB0aGUgY29udGFjdCB0YWIuXG4vLyBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSG9tZSgpKTtcblxuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEhvbWUoKSk7XG59KTtcblxuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE1lbnUoKSk7XG59KVxuXG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcbmNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkQ29udGFjdCgpKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9