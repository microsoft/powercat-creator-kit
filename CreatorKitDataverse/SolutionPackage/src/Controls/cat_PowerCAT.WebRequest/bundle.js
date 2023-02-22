/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./WebRequest/index.ts":
/*!*****************************!*\
  !*** ./WebRequest/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WebRequest\": () => (/* binding */ WebRequest)\n/* harmony export */ });\nclass WebRequest {\n  constructor() {\n    this.DownloadApi = (url) => {\n      fetch(url, { method: \"get\", mode: \"no-cors\", referrerPolicy: \"no-referrer\", credentials: \"include\" }).then((res) => res.blob()).then((res) => {\n        var objectURL = URL.createObjectURL(res);\n        console.log(\"Object:\");\n        console.log(objectURL);\n        URL.revokeObjectURL(objectURL);\n        res.text().then((text) => {\n          console.log(\"Text:\");\n          console.log(text);\n          this._APIResponse = text;\n          this.notifyOutputChanged();\n        });\n      });\n    };\n    this.DownloadApi2 = (url) => {\n      fetch(url, { method: \"get\", mode: \"no-cors\", referrerPolicy: \"no-referrer\", credentials: \"include\" }).then((res) => res.json()).then((res) => {\n        this._APIResponse = JSON.stringify(res);\n        console.log(this._APIResponse);\n        this.notifyOutputChanged();\n      });\n    };\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._state = state;\n    this._container = container;\n    this.notifyOutputChanged = notifyOutputChanged;\n    console.log(\"Power CAT WebRequest\");\n  }\n  updateView(context) {\n    if (context.parameters.APIURL && (this.latestAPITrigger != context.parameters.TriggerRefresh.raw || this.latestAPIUrl != context.parameters.APIURL.raw)) {\n      this.latestAPITrigger = context.parameters.TriggerRefresh.raw;\n      this.latestAPIUrl = context.parameters.APIURL.raw;\n      console.log(\"start\");\n      this.DownloadApi2(this.latestAPIUrl);\n    }\n  }\n  getOutputs() {\n    console.log(\"outputs\");\n    return {\n      APIResponse: this._APIResponse\n    };\n  }\n  destroy() {\n  }\n}\n\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./WebRequest/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./WebRequest/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.WebRequest', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.WebRequest);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.WebRequest = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.WebRequest;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}