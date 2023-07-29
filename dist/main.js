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
    const footer = (0,_element_builder__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)('footer', '', '')
    footer.innerHTML = '<a href="https://github.com/guyfoz77"><img src="../src/img/github-mark.svg" alt="Github logo">by Guy Foster</a>'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixtREFBUztBQUNqQztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHdCQUF3Qix5REFBWTtBQUNwQztBQUNBLENBQUM7O0FBRUQsb0JBQW9CLG1EQUFTLFFBQVE7QUFDckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZWxlbWVudC1idWlsZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVsZW1lbnRCdWlsZGVyIH0gZnJvbSBcIi4vZWxlbWVudC1idWlsZGVyXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCBbJ2NvbnRhY3QnLCAnaW5mbyddLCAnJyk7IFxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBlbGVtZW50QnVpbGRlcignaDInLCAnJywgJ0xvY2F0aW9uLicpO1xuXG4gICAgY29uc3QgYWRkcmVzc0RpdiA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCAnYWRkcmVzcycsICcnKTtcbiAgICBjb25zdCBtYXAgPSBlbGVtZW50QnVpbGRlcignaW1nJywgJ21hcCcsICcnKTtcbiAgICBtYXAuc3JjID0gJy4uL3NyYy9pbWcvbWFwLWdiNTZlNjVhYTBfNjQwLnBuZyc7XG4gICAgY29uc3QgYWRkcmVzcyA9IGVsZW1lbnRCdWlsZGVyKCdwJywgJycsICcnKTtcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9ICcxMjMgRmFrZSBTdHJlZXQ8YnI+RmFrZSBUb3duPGJyPkZha2VzaGlyZTxicj5GQTMzOU5OJztcbiAgICBhZGRyZXNzRGl2LmFwcGVuZChhZGRyZXNzLCBtYXApO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGVsZW1lbnRCdWlsZGVyKCdoMicsICcnLCAnQ29udGFjdC4nKTtcbiAgICBjb25zdCB0ZWxMYWJlbCA9IGVsZW1lbnRCdWlsZGVyKCdwJywgJ2xhYmVsJywgJ1RlbDogJyk7XG4gICAgY29uc3QgcGhvbmUgPSBlbGVtZW50QnVpbGRlcignYScsICdwaG9uZScsICcwMTIzNCA1Njc4OTknKTtcbiAgICBwaG9uZS5ocmVmID0gJ3RlbDowMTIzNDU2Nzg5MCc7XG4gICAgdGVsTGFiZWwuYXBwZW5kKHBob25lKTtcbiAgICBcbiAgICBjb25zdCBlbWFpbExhYmVsID0gZWxlbWVudEJ1aWxkZXIoJ3AnLCAnbGFiZWwnLCAnRW1haWw6ICcpO1xuICAgIGNvbnN0IGVtYWlsID0gZWxlbWVudEJ1aWxkZXIoJ2EnLCAnZW1haWwnLCAnZmFrZUBmYWtlbWFpbC5jb20nKTtcbiAgICBlbWFpbC5ocmVmID0gJ21haWx0bzpmYWtlQGZha2VtYWlsLmNvbSc7XG4gICAgZW1haWxMYWJlbC5hcHBlbmQoZW1haWwpO1xuICAgIFxuXG5cbiAgICBjb250YWN0Q29udGVudC5hcHBlbmQobG9jYXRpb24sIGFkZHJlc3NEaXYsIGNvbnRhY3QsIHRlbExhYmVsLCBlbWFpbExhYmVsKTtcbiAgICByZXR1cm4gY29udGFjdENvbnRlbnQ7XG4gIFxufSIsImV4cG9ydCBmdW5jdGlvbiBlbGVtZW50QnVpbGRlcihlbGVtZW50LCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICAgY29uc3QgeGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmIChjbGFzc0xpc3QgIT0gJycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5mb3JFYWNoKGNsYXNzTGFiZWwgPT4ge1xuICAgICAgICAgICAgICAgIHhlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NMYWJlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHhlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcbiAgICB9XG4gICAgaWYgKHRleHRDb250ZW50ICE9ICcnKSB4ZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIHJldHVybiB4ZWxlbWVudDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRIb21lKCkge1xuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZScsICdpbmZvJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ091ciBmb29kLic7XG5cbiAgICBjb25zdCBmb29kUXVhbGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb29kUXVhbGl0eS50ZXh0Q29udGVudCA9ICdUaGlzIGlzIHNvbWUgY29weSBhYm91dCB0aGUgcXVhbGl0eSBvZiB0aGUgZm9vZCwgYW5kIGZyb20gd2hlcmUgaXQgaXMgc291cmNlZC4gTGl0ZXJhbGx5IHRoZSBiZXN0IGZvb2QgaW4gdGhlIHdvcmxkLic7XG5cbiAgICBjb25zdCBzYWxtb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNhbG1vbkltYWdlLnNyYyA9ICcuLi9zcmMvaW1nL3NhbG1vbi5qcGVnJztcbiAgICBzYWxtb25JbWFnZS5jbGFzc0xpc3QuYWRkKCdzYWxtb24nKTtcblxuICAgIGNvbnN0IGFib3V0UmVzYXVyYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0UmVzYXVyYW50LnRleHRDb250ZW50ID0gJ1RoaXMgaXMgc29tZSBjb3B5IGFib3V0IHRoZSByZXN0YXVyYW50IGl0c2VsZi4gU29tZXRoaW5nIGFib3V0IHRoZSB2aWJlIG1heWJlLic7XG5cbiAgICBjb25zdCBvcGVuaW5nSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBvcGVuaW5nSG91cnNQRWxlbWVudHMgPSBbXVxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0NvbnRlbnQgPSBcbiAgICBbJ09wZW5pbmcgaG91cnM6JyxcbiAgICAgJ01vbmRheS1GcmlkYXk6IDEzOjAwIC0gMjE6MDAnLFxuICAgICAnU2F0dXJkYXktU3VuZGF5OiAxMTowMCAtIDIyOjAwJ107XG4gICAgZm9yIChsZXQgaSA9IDA7IGk8b3BlbmluZ0hvdXJzQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBvcGVuaW5nSG91cnNQRWxlbWVudHNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9wZW5pbmdIb3Vyc1BFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IG9wZW5pbmdIb3Vyc0NvbnRlbnRbaV07XG4gICAgICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNQRWxlbWVudHNbaV0pO1xuICAgIH1cbiAgICBob21lQ29udGVudC5hcHBlbmQoaGVhZGluZywgZm9vZFF1YWxpdHksIHNhbG1vbkltYWdlLCBhYm91dFJlc2F1cmFudCwgb3BlbmluZ0hvdXJzKTtcblxuICAgIHJldHVybiBob21lQ29udGVudDtcbn0iLCJpbXBvcnQgeyBlbGVtZW50QnVpbGRlciB9IGZyb20gXCIuL2VsZW1lbnQtYnVpbGRlclwiO1xuLy9lbGVtZW50QnVpbGRlcihlbGVtZW50LCBjbGFzc0xpc3QsIHRleHRDb250ZW50KVxuXG5jb25zdCBtZW51QnVpbGRlciA9IChuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICByZXR1cm4ge25hbWUsIHByaWNlLCBkZXNjcmlwdGlvbn07XG59XG5jb25zdCBzdGFydGVycyA9IFtcbiAgICBtZW51QnVpbGRlcignU291cCBvZiB0aGUgZGF5JywgNywgJ1Byb2JhYmx5IHRvbWF0byBzb3VwLicpLFxuICAgIG1lbnVCdWlsZGVyKCdTcGljeSB3aW5ncycsIDgsICdDaGlja2VuIHdpbmdzLCBidWZmYWxvIHNhdWNlLicpLFxuICAgIG1lbnVCdWlsZGVyKCdHYXJsaWMgYnJlYWQnLCA3LCAnR2FybGljLCBicmVhZC4nKVxuXVxuY29uc3QgbWFpbnMgPSBbXG4gICAgbWVudUJ1aWxkZXIoJ1BpenphJywgMTUsICdUb21hdG8sIG1venphcmVsbGEsIHNwaWN5IGNoaWNrZW4uJyksXG4gICAgbWVudUJ1aWxkZXIoJ1ZlZ2FuIGxhc2FnbmEnLCAxNiwgJ1Rhc3R5IGxhc2FnbmEgd2l0aCBzb21lIHZlZ2FuIGZpbGxpbmcuJyksXG4gICAgbWVudUJ1aWxkZXIoJ0NhbHpvbmUnLCAyMiwgJ0Jhc2ljYWxseSB0aGUgcGl6emEgYnV0IGZvbGRlZC4nKVxuXVxuY29uc3QgZGVzc2VydHMgPSBbXG4gICAgbWVudUJ1aWxkZXIoJ0Nob2NvbGF0ZSBjYWtlJywgOSwgJ1NlcnZlZCB3aXRoIGljZSBjcmVhbSBvciBjcmVhbS4nKSxcbiAgICBtZW51QnVpbGRlcignQ2hlZXNlY2FrZScsIDgsICdTZXJ2ZWQgd2l0aCBhIGNhcmFtZWwgc2F1Y2UuJylcbl1cblxuZnVuY3Rpb24gbWVudUl0ZW1EaXZCdWlsZGVyKGl0ZW0pIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCAnbWVudUl0ZW0nLCAnJyk7XG4gICAgY29uc3QgdG9wUm93ID0gZWxlbWVudEJ1aWxkZXIoJ2RpdicsICd0b3BSb3cnLCAnJyk7XG4gICAgY29uc3QgYm90dG9tUm93ID0gZWxlbWVudEJ1aWxkZXIoJ2RpdicsICdib3R0b21Sb3cnLCBpdGVtLmRlc2NyaXB0aW9uKTtcbiAgICBcbiAgICAvLyBidWlsZCB0b3BSb3c6XG4gICAgY29uc3QgaXRlbU5hbWUgPSBlbGVtZW50QnVpbGRlcignaDMnLCAnaXRlbU5hbWUnLCBpdGVtLm5hbWUpO1xuICAgIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwcmljZSA9IGVsZW1lbnRCdWlsZGVyKCdoMycsICdwcmljZScsIGl0ZW0ucHJpY2UpO1xuICAgIHRvcFJvdy5hcHBlbmQoaXRlbU5hbWUsIHNwYWNlciwgcHJpY2UpO1xuICAgIC8vXG4gICAgbWVudUl0ZW0uYXBwZW5kKHRvcFJvdywgYm90dG9tUm93KTtcbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE1lbnUoKSB7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBlbGVtZW50QnVpbGRlcignZGl2JywgWydtZW51JywgJ2luZm8nXSwgJycpO1xuICAgIGNvbnN0IHN0YXJ0ZXJUaXRsZSA9IGVsZW1lbnRCdWlsZGVyKCdoMicsICcnLCAnU3RhcnRlcnMnKTtcblxuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKHN0YXJ0ZXJUaXRsZSk7XG5cbiAgICBzdGFydGVycy5mb3JFYWNoKHN0YXJ0ZXIgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBtZW51SXRlbURpdkJ1aWxkZXIoc3RhcnRlcik7XG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgbWFpblRpdGxlID0gZWxlbWVudEJ1aWxkZXIoJ2gyJywgJycsICdNYWlucycpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cbiAgICBtYWlucy5mb3JFYWNoKG1haW4gPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBtZW51SXRlbURpdkJ1aWxkZXIobWFpbik7XG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXNzZXJ0VGl0bGUgPSBlbGVtZW50QnVpbGRlcignaDInLCAnJywgJ0Rlc3NlcnRzJyk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydFRpdGxlKTtcblxuICAgIGRlc3NlcnRzLmZvckVhY2goZGVzc2VydCA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IG1lbnVJdGVtRGl2QnVpbGRlcihkZXNzZXJ0KTtcbiAgICAgICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZW51Q29udGVudDtcbn1cbiIsImltcG9ydCB7IGVsZW1lbnRCdWlsZGVyIH0gZnJvbSBcIi4vZWxlbWVudC1idWlsZGVyXCI7XG4vL2VsZW1lbnRCdWlsZGVyKGVsZW1lbnQsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpXG5cbmZ1bmN0aW9uIGJ1aWxkQ29udGVudENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZWxlbWVudEJ1aWxkZXIoJ2RpdicsICcnLCAnJyk7XG4gICAgY29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBidWlsZEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBlbGVtZW50QnVpbGRlcignaGVhZGVyJywgJycsICcnKTtcbiAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnRCdWlsZGVyKCdoMScsICcnLCAnRmFuY3kgRm9vZC4nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAgICAgIHtuYW1lOiAnSG9tZScsIGNzc0NsYXNzOiAnaG9tZSd9LFxuICAgICAgICB7bmFtZTogJ01lbnUnLCBjc3NDbGFzczogJ21lbnUnfSxcbiAgICAgICAge25hbWU6ICdDb250YWN0JywgY3NzQ2xhc3M6ICdjb250YWN0J31cbiAgICBdO1xuICAgIGNvbnN0IG5hdkJhciA9IGVsZW1lbnRCdWlsZGVyKCdkaXYnLCAnbmF2JywgJycpO1xuXG4gICAgZnVuY3Rpb24gYnVpbGRCdXR0b24odGV4dENvbnRlbnQsIGNzc0NsYXNzKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGVsZW1lbnRCdWlsZGVyKCdidXR0b24nLCBjc3NDbGFzcywgdGV4dENvbnRlbnQpO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoYnVpbGRCdXR0b24oYnV0dG9uLm5hbWUsIGJ1dHRvbi5jc3NDbGFzcykpO1xuICAgIH0pO1xuICAgIHJldHVybiBuYXZCYXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGVsZW1lbnRCdWlsZGVyKCdmb290ZXInLCAnJywgJycpXG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICc8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d1eWZvejc3XCI+PGltZyBzcmM9XCIuLi9zcmMvaW1nL2dpdGh1Yi1tYXJrLnN2Z1wiIGFsdD1cIkdpdGh1YiBsb2dvXCI+YnkgR3V5IEZvc3RlcjwvYT4nXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUGFnZSgpIHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250YWluZXInKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChidWlsZEhlYWRlcigpLCBidWlsZE5hdigpLCBidWlsZENvbnRlbnRDb250YWluZXIoKSwgYnVpbGRGb290ZXIoKSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2J1aWxkUGFnZX0gZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuaW1wb3J0IHtidWlsZEhvbWV9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQge2J1aWxkTWVudX0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7YnVpbGRDb250YWN0fSBmcm9tICcuL2NvbnRhY3QuanMnO1xuLy8gaW1wb3J0IHsgZWxlbWVudEJ1aWxkZXIgfSBmcm9tICcuL2VsZW1lbnQtYnVpbGRlci5qcyc7XG5idWlsZFBhZ2UoKTsgLy9QbGFjZXMgYmFzaWMgZWxlbWVudHMgb24gdGhlIHBhZ2UuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XG5cbmZ1bmN0aW9uIGFjdGl2ZVRhYlN3aXRjaGVyKG5ld0FjdGl2ZSkge1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG5ld0FjdGl2ZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSG9tZSgpKTtcbiAgICBhY3RpdmVUYWJTd2l0Y2hlcihob21lVGFiKTtcbn0pO1xuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE1lbnUoKSk7XG4gICAgYWN0aXZlVGFiU3dpdGNoZXIobWVudVRhYik7XG59KVxuXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZENvbnRhY3QoKSk7XG4gICAgYWN0aXZlVGFiU3dpdGNoZXIoY29udGFjdFRhYik7XG59KVxuXG5jb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSG9tZSgpKTsgICAgLy9zZXRzIGRlZmF1bHQgcGFnZSB0byBIb21lLlxuYWN0aXZlVGFiU3dpdGNoZXIoaG9tZVRhYik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=