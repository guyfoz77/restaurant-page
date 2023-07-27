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
    homeContent.appendChild(heading);

    const foodQuality = document.createElement('p');
    foodQuality.textContent = 'This is some copy about the quality of the food, and from where it is sourced. Literally the best food in the world.';
    homeContent.appendChild(foodQuality);

    const salmonImage = document.createElement('img');
    salmonImage.src = '../src/img/salmon.jpeg';
    salmonImage.classList.add('salmon');
    homeContent.appendChild(salmonImage);

    const aboutResaurant = document.createElement('p');
    aboutResaurant.textContent = 'This is some copy about the restaurant itself. Something about the vibe maybe.';
    homeContent.appendChild(aboutResaurant);

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
    homeContent.appendChild(openingHours);

    return homeContent;
}


// export { buildHome };

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

function buildContentContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'content');
    return contentContainer;
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


(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.buildPage)();


const content = document.querySelector('#content');

content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.buildHome)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUN0Q1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsK0JBQStCO0FBQ3hDLFNBQVMsK0JBQStCO0FBQ3hDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VDckRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0w7QUFDcEMsd0RBQVM7OztBQUdUOztBQUVBLG9CQUFvQixtREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBidWlsZEhvbWUoKSB7XG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lJywgJ2luZm8nKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnT3VyIGZvb2QuJztcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGNvbnN0IGZvb2RRdWFsaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2RRdWFsaXR5LnRleHRDb250ZW50ID0gJ1RoaXMgaXMgc29tZSBjb3B5IGFib3V0IHRoZSBxdWFsaXR5IG9mIHRoZSBmb29kLCBhbmQgZnJvbSB3aGVyZSBpdCBpcyBzb3VyY2VkLiBMaXRlcmFsbHkgdGhlIGJlc3QgZm9vZCBpbiB0aGUgd29ybGQuJztcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChmb29kUXVhbGl0eSk7XG5cbiAgICBjb25zdCBzYWxtb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNhbG1vbkltYWdlLnNyYyA9ICcuLi9zcmMvaW1nL3NhbG1vbi5qcGVnJztcbiAgICBzYWxtb25JbWFnZS5jbGFzc0xpc3QuYWRkKCdzYWxtb24nKTtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChzYWxtb25JbWFnZSk7XG5cbiAgICBjb25zdCBhYm91dFJlc2F1cmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFJlc2F1cmFudC50ZXh0Q29udGVudCA9ICdUaGlzIGlzIHNvbWUgY29weSBhYm91dCB0aGUgcmVzdGF1cmFudCBpdHNlbGYuIFNvbWV0aGluZyBhYm91dCB0aGUgdmliZSBtYXliZS4nO1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGFib3V0UmVzYXVyYW50KTtcblxuICAgIGNvbnN0IG9wZW5pbmdIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc1BFbGVtZW50cyA9IFtdXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzQ29udGVudCA9IFxuICAgIFsnT3BlbmluZyBob3VyczonLFxuICAgICAnTW9uZGF5LUZyaWRheTogMTM6MDAgLSAyMTowMCcsXG4gICAgICdTYXR1cmRheS1TdW5kYXk6IDExOjAwIC0gMjI6MDAnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaTxvcGVuaW5nSG91cnNDb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wZW5pbmdIb3Vyc1BFbGVtZW50c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb3BlbmluZ0hvdXJzUEVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gb3BlbmluZ0hvdXJzQ29udGVudFtpXTtcbiAgICAgICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc1BFbGVtZW50c1tpXSk7XG4gICAgfVxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vycyk7XG5cbiAgICByZXR1cm4gaG9tZUNvbnRlbnQ7XG59XG5cblxuLy8gZXhwb3J0IHsgYnVpbGRIb21lIH07IiwiZnVuY3Rpb24gYnVpbGRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0ZhbmN5IEZvb2QuJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAgICAgIHtuYW1lOiAnSG9tZScsIGNzc0NsYXNzOiAnaG9tZSd9LFxuICAgICAgICB7bmFtZTogJ01lbnUnLCBjc3NDbGFzczogJ21lbnUnfSxcbiAgICAgICAge25hbWU6ICdDb250YWN0JywgY3NzQ2xhc3M6ICdjb250YWN0J31cbiAgICBdO1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAgIGZ1bmN0aW9uIGJ1aWxkQnV0dG9uKHRleHRDb250ZW50LCBjc3NDbGFzcykge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGJ1aWxkQnV0dG9uKGJ1dHRvbi5uYW1lLCBidXR0b24uY3NzQ2xhc3MpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmF2QmFyO1xufVxuXG5mdW5jdGlvbiBidWlsZENvbnRlbnRDb250YWluZXIoKSB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IEd1eSBGb3N0ZXInO1xuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmNvbnN0IGJ1aWxkUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250YWluZXInKTtcbiAgICBjb25zdCBwYWdlQXJyYXkgPSBcbiAgICBbYnVpbGRIZWFkZXIoKSxcbiAgICAgYnVpbGROYXYoKSxcbiAgICAgYnVpbGRDb250ZW50Q29udGFpbmVyKCksXG4gICAgIGJ1aWxkRm9vdGVyKClcbiAgICBdO1xuICAgIHBhZ2VBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBidWlsZFBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7YnVpbGRQYWdlfSBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5pbXBvcnQge2J1aWxkSG9tZX0gZnJvbSAnLi9ob21lLmpzJztcbmJ1aWxkUGFnZSgpO1xuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSG9tZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==