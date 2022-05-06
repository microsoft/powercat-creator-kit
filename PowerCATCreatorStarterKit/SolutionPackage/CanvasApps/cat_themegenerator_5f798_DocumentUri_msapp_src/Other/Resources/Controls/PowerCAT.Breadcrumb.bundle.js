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

/***/ "./Breadcrumb/components/CanvasBreadcrumb.tsx":
/*!****************************************************!*\
  !*** ./Breadcrumb/components/CanvasBreadcrumb.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasBreadcrumb\": () => (/* binding */ CanvasBreadcrumb)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ \"@fluentui/react\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ContextMenuHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextMenuHelpers */ \"./Breadcrumb/components/ContextMenuHelpers.ts\");\n/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-hooks */ \"./node_modules/@fluentui/react-hooks/lib/useAsync.js\");\n\n\n\n\nvar CanvasBreadcrumb = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(props => {\n  //const { items, onSelected, selectedKey, setFocus, themeJSON, height, width } = props;\n  var {\n    items,\n    themeJSON,\n    onSelected,\n    setFocus,\n    ariaLabel,\n    tabIndex,\n    maxDisplayedItems,\n    overflowIndex\n  } = props;\n  var theme = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {\n    try {\n      return themeJSON ? (0,_fluentui_react__WEBPACK_IMPORTED_MODULE_1__.createTheme)(JSON.parse(themeJSON)) : undefined;\n    } catch (ex) {\n      /* istanbul ignore next */\n      console.error('Cannot parse theme', ex);\n    }\n  }, [themeJSON]);\n  var componentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n  var async = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_3__.useAsync)();\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    if (setFocus && setFocus !== '' && componentRef) {\n      async.requestAnimationFrame(() => {\n        var _a;\n\n        (_a = componentRef.current) === null || _a === void 0 ? void 0 : _a.focus();\n      });\n    }\n  }, [setFocus, componentRef, async]);\n  var focusZoneProps = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {\n    return {\n      tabIndex: tabIndex,\n      shouldFocusInnerElementWhenReceivedFocus: true\n    };\n  }, [tabIndex]);\n  var onClick = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((ev, item) => {\n    var selectedItem = item && items.find(i => i.key === (item === null || item === void 0 ? void 0 : item.key));\n    if (selectedItem) onSelected(selectedItem);\n  }, [items, onSelected]);\n  var breadcrumbItems = (0,_ContextMenuHelpers__WEBPACK_IMPORTED_MODULE_2__.getBreadcrumbItems)(items, onClick); // Needs a revisiting on tabindex -> focusZoneProps={{ handleTabKey: 1 }}\n  // Documented here https://developer.microsoft.com/en-us/fluentui#/controls/web/breadcrumb\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n    applyTo: \"none\",\n    theme: theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb, {\n    items: breadcrumbItems,\n    maxDisplayedItems: maxDisplayedItems,\n    focusZoneProps: focusZoneProps,\n    \"aria-label\": ariaLabel,\n    overflowIndex: overflowIndex\n  }));\n});\nCanvasBreadcrumb.displayName = 'CanvasBreadCrumb';\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./Breadcrumb/components/CanvasBreadcrumb.tsx?");

/***/ }),

/***/ "./Breadcrumb/components/ContextMenuHelpers.ts":
/*!*****************************************************!*\
  !*** ./Breadcrumb/components/ContextMenuHelpers.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBreadcrumbItems\": () => (/* binding */ getBreadcrumbItems),\n/* harmony export */   \"getMenuItemsFromDataset\": () => (/* binding */ getMenuItemsFromDataset)\n/* harmony export */ });\nfunction getMenuItemsFromDataset(dataset) {\n  if (dataset.error || dataset.paging.totalResultCount === undefined) {\n    // Dataset is not defined so return dummy items\n    return [getDummyAction('1'), getDummyAction('2'), getDummyAction('3')];\n  }\n\n  return dataset.sortedRecordIds.map(id => {\n    var record = dataset.records[id];\n    return {\n      id: record.getRecordId(),\n      key: record.getValue(\"ItemKey\"\n      /* Key */\n      ),\n      text: record.getValue(\"ItemDisplayName\"\n      /* DisplayName */\n      ),\n      clickable: record.getValue(\"ItemClickable\"\n      /* Clickable */\n      )\n    };\n  });\n}\nfunction getBreadcrumbItems(items, onClick) {\n  return items.map(item => item.clickable === false ? {\n    id: item.id,\n    key: item.key,\n    text: item.text\n  } : {\n    id: item.id,\n    key: item.key,\n    text: item.text,\n    onClick: onClick\n  });\n}\n\nfunction getDummyAction(key) {\n  return {\n    id: key,\n    key: key,\n    text: 'Item ' + key,\n    clickable: true\n  };\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./Breadcrumb/components/ContextMenuHelpers.ts?");

/***/ }),

/***/ "./Breadcrumb/index.ts":
/*!*****************************!*\
  !*** ./Breadcrumb/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Breadcrumb\": () => (/* binding */ Breadcrumb)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CanvasBreadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CanvasBreadcrumb */ \"./Breadcrumb/components/CanvasBreadcrumb.tsx\");\n/* harmony import */ var _components_ContextMenuHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ContextMenuHelpers */ \"./Breadcrumb/components/ContextMenuHelpers.ts\");\n\n\n\nclass Breadcrumb {\n  /**\r\n   * Empty constructor.\r\n   */\n  constructor() {\n    this.isTestHarness = false;\n    this.focusKey = '';\n\n    this.onSelect = item => {\n      this.lastSelected = item;\n      this.notifyOutputChanged();\n    }; //not required at this point\n\n  }\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   */\n\n\n  init(context, notifyOutputChanged) {\n    this.context = context;\n    this.notifyOutputChanged = notifyOutputChanged;\n    this.isTestHarness = document.getElementById('control-dimensions') !== null;\n  }\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   * @returns ReactElement root react element for the control\r\n   */\n\n\n  updateView(context) {\n    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;\n\n    var inputEvent = this.context.parameters.InputEvent.raw;\n    var eventChanged = inputEvent && this.inputEvent !== inputEvent;\n\n    if (eventChanged && inputEvent.startsWith(\"SetFocus\"\n    /* SetFocus */\n    )) {\n      // Simulate SetFocus until this is unlocked by the platform\n      this.focusKey = inputEvent;\n    }\n\n    var dataset = context.parameters.items;\n    var datasetChanged = context.updatedProperties.indexOf(\"dataset\"\n    /* dataset */\n    ) > -1 || !this.items;\n\n    if (datasetChanged || this.isTestHarness) {\n      this.items = (0,_components_ContextMenuHelpers__WEBPACK_IMPORTED_MODULE_2__.getMenuItemsFromDataset)(dataset);\n    }\n\n    var ariaLabel = (_b = (_a = context.parameters) === null || _a === void 0 ? void 0 : _a.AccessibilityLabel.raw) !== null && _b !== void 0 ? _b : '';\n    var maxDisplayedItems = (_d = (_c = context.parameters) === null || _c === void 0 ? void 0 : _c.MaxDisplayedItems.raw) !== null && _d !== void 0 ? _d : this.items.length;\n    maxDisplayedItems === 0 || maxDisplayedItems > this.items.length ? this.items.length : maxDisplayedItems; // If overflowIndex is greater than total item then setting to Zero to avoid breaking of control.\n\n    var overflowIndex = (_f = (_e = context.parameters) === null || _e === void 0 ? void 0 : _e.OverflowIndex.raw) !== null && _f !== void 0 ? _f : 0;\n    overflowIndex >= maxDisplayedItems ? 0 : overflowIndex;\n    var tabIndex = (_h = (_g = context.accessibility) === null || _g === void 0 ? void 0 : _g.assignedTabIndex) !== null && _h !== void 0 ? _h : undefined;\n    var props = {\n      items: this.items,\n      onSelected: this.onSelect,\n      themeJSON: (_k = (_j = context.parameters) === null || _j === void 0 ? void 0 : _j.ThemeJSON.raw) !== null && _k !== void 0 ? _k : '',\n      setFocus: this.focusKey,\n      tabIndex: tabIndex,\n      ariaLabel: ariaLabel,\n      maxDisplayedItems: maxDisplayedItems,\n      overflowIndex: overflowIndex\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CanvasBreadcrumb__WEBPACK_IMPORTED_MODULE_1__.CanvasBreadcrumb, props);\n  }\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  getOutputs() {\n    var _a, _b;\n\n    return {\n      SelectedKey: (_b = (_a = this.lastSelected) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : null\n    };\n  }\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  destroy() {// Add code to cleanup control if necessary\n  }\n\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./Breadcrumb/index.ts?");

/***/ }),

/***/ "./node_modules/@fluentui/react-hooks/lib/useAsync.js":
/*!************************************************************!*\
  !*** ./node_modules/@fluentui/react-hooks/lib/useAsync.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAsync\": () => (/* binding */ useAsync)\n/* harmony export */ });\n/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/utilities */ \"./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/Async.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ \"./node_modules/@fluentui/react-hooks/lib/useConst.js\");\n\n\n\n/**\n * Hook to provide an Async instance that is automatically cleaned up on dismount.\n */\n\nfunction useAsync() {\n  var async = (0,_useConst__WEBPACK_IMPORTED_MODULE_1__.useConst)(function () {\n    return new _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.Async();\n  }); // Function that returns a function in order to dispose the async instance on unmount\n\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    return function () {\n      return async.dispose();\n    };\n  }, [async]);\n  return async;\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./node_modules/@fluentui/react-hooks/lib/useAsync.js?");

/***/ }),

/***/ "./node_modules/@fluentui/react-hooks/lib/useConst.js":
/*!************************************************************!*\
  !*** ./node_modules/@fluentui/react-hooks/lib/useConst.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useConst\": () => (/* binding */ useConst)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Hook to initialize and return a constant value. Unlike `React.useMemo`, this is guaranteed to\n * always return the same value (and if the initializer is a function, only call it once).\n * This is similar to setting a private member in a class constructor.\n *\n * If the value should ever change based on dependencies, use `React.useMemo` instead.\n *\n * @param initialValue - Initial value, or function to get the initial value. Similar to `useState`,\n * only the value/function passed in the first time this is called is respected.\n * @returns The value. The identity of this value will always be the same.\n */\n\nfunction useConst(initialValue) {\n  // Use useRef to store the value because it's the least expensive built-in hook that works here\n  // (we could also use `const [value] = React.useState(initialValue)` but that's more expensive\n  // internally due to reducer handling which we don't need)\n  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n\n  if (ref.current === undefined) {\n    // Box the value in an object so we can tell if it's initialized even if the initializer\n    // returns/is undefined\n    ref.current = {\n      value: typeof initialValue === 'function' ? initialValue() : initialValue\n    };\n  }\n\n  return ref.current.value;\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./node_modules/@fluentui/react-hooks/lib/useConst.js?");

/***/ }),

/***/ "./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/Async.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/Async.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Async\": () => (/* binding */ Async)\n/* harmony export */ });\n/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ \"./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/dom/getWindow.js\");\n\n/**\n * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.\n * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.\n *\n * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a\n * new instance of the class and remember to call dispose() during your code's dispose handler.\n *\n * @public\n */\n\nvar Async =\n/** @class */\nfunction () {\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n  function Async(parent, onError) {\n    this._timeoutIds = null;\n    this._immediateIds = null;\n    this._intervalIds = null;\n    this._animationFrameIds = null;\n    this._isDisposed = false;\n    this._parent = parent || null;\n    this._onErrorHandler = onError;\n\n    this._noop = function () {\n      /* do nothing */\n    };\n  }\n  /**\n   * Dispose function, clears all async operations.\n   */\n\n\n  Async.prototype.dispose = function () {\n    var id;\n    this._isDisposed = true;\n    this._parent = null; // Clear timeouts.\n\n    if (this._timeoutIds) {\n      for (id in this._timeoutIds) {\n        if (this._timeoutIds.hasOwnProperty(id)) {\n          this.clearTimeout(parseInt(id, 10));\n        }\n      }\n\n      this._timeoutIds = null;\n    } // Clear immediates.\n\n\n    if (this._immediateIds) {\n      for (id in this._immediateIds) {\n        if (this._immediateIds.hasOwnProperty(id)) {\n          this.clearImmediate(parseInt(id, 10));\n        }\n      }\n\n      this._immediateIds = null;\n    } // Clear intervals.\n\n\n    if (this._intervalIds) {\n      for (id in this._intervalIds) {\n        if (this._intervalIds.hasOwnProperty(id)) {\n          this.clearInterval(parseInt(id, 10));\n        }\n      }\n\n      this._intervalIds = null;\n    } // Clear animation frames.\n\n\n    if (this._animationFrameIds) {\n      for (id in this._animationFrameIds) {\n        if (this._animationFrameIds.hasOwnProperty(id)) {\n          this.cancelAnimationFrame(parseInt(id, 10));\n        }\n      }\n\n      this._animationFrameIds = null;\n    }\n  };\n  /**\n   * SetTimeout override, which will auto cancel the timeout during dispose.\n   * @param callback - Callback to execute.\n   * @param duration - Duration in milliseconds.\n   * @returns The setTimeout id.\n   */\n\n\n  Async.prototype.setTimeout = function (callback, duration) {\n    var _this = this;\n\n    var timeoutId = 0;\n\n    if (!this._isDisposed) {\n      if (!this._timeoutIds) {\n        this._timeoutIds = {};\n      }\n\n      timeoutId = setTimeout(function () {\n        // Time to execute the timeout, enqueue it as a foreground task to be executed.\n        try {\n          // Now delete the record and call the callback.\n          if (_this._timeoutIds) {\n            delete _this._timeoutIds[timeoutId];\n          }\n\n          callback.apply(_this._parent);\n        } catch (e) {\n          _this._logError(e);\n        }\n      }, duration);\n      this._timeoutIds[timeoutId] = true;\n    }\n\n    return timeoutId;\n  };\n  /**\n   * Clears the timeout.\n   * @param id - Id to cancel.\n   */\n\n\n  Async.prototype.clearTimeout = function (id) {\n    if (this._timeoutIds && this._timeoutIds[id]) {\n      clearTimeout(id);\n      delete this._timeoutIds[id];\n    }\n  };\n  /**\n   * SetImmediate override, which will auto cancel the immediate during dispose.\n   * @param callback - Callback to execute.\n   * @param targetElement - Optional target element to use for identifying the correct window.\n   * @returns The setTimeout id.\n   */\n\n\n  Async.prototype.setImmediate = function (callback, targetElement) {\n    var _this = this;\n\n    var immediateId = 0;\n    var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)(targetElement);\n\n    if (!this._isDisposed) {\n      if (!this._immediateIds) {\n        this._immediateIds = {};\n      }\n\n      var setImmediateCallback = function setImmediateCallback() {\n        // Time to execute the timeout, enqueue it as a foreground task to be executed.\n        try {\n          // Now delete the record and call the callback.\n          if (_this._immediateIds) {\n            delete _this._immediateIds[immediateId];\n          }\n\n          callback.apply(_this._parent);\n        } catch (e) {\n          _this._logError(e);\n        }\n      };\n\n      immediateId = win.setTimeout(setImmediateCallback, 0);\n      this._immediateIds[immediateId] = true;\n    }\n\n    return immediateId;\n  };\n  /**\n   * Clears the immediate.\n   * @param id - Id to cancel.\n   * @param targetElement - Optional target element to use for identifying the correct window.\n   */\n\n\n  Async.prototype.clearImmediate = function (id, targetElement) {\n    var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)(targetElement);\n\n    if (this._immediateIds && this._immediateIds[id]) {\n      win.clearTimeout(id);\n      delete this._immediateIds[id];\n    }\n  };\n  /**\n   * SetInterval override, which will auto cancel the timeout during dispose.\n   * @param callback - Callback to execute.\n   * @param duration - Duration in milliseconds.\n   * @returns The setTimeout id.\n   */\n\n\n  Async.prototype.setInterval = function (callback, duration) {\n    var _this = this;\n\n    var intervalId = 0;\n\n    if (!this._isDisposed) {\n      if (!this._intervalIds) {\n        this._intervalIds = {};\n      }\n\n      intervalId = setInterval(function () {\n        // Time to execute the interval callback, enqueue it as a foreground task to be executed.\n        try {\n          callback.apply(_this._parent);\n        } catch (e) {\n          _this._logError(e);\n        }\n      }, duration);\n      this._intervalIds[intervalId] = true;\n    }\n\n    return intervalId;\n  };\n  /**\n   * Clears the interval.\n   * @param id - Id to cancel.\n   */\n\n\n  Async.prototype.clearInterval = function (id) {\n    if (this._intervalIds && this._intervalIds[id]) {\n      clearInterval(id);\n      delete this._intervalIds[id];\n    }\n  };\n  /**\n   * Creates a function that, when executed, will only call the func function at most once per\n   * every wait milliseconds. Provide an options object to indicate that func should be invoked\n   * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled\n   * function will return the result of the last func call.\n   *\n   * Note: If leading and trailing options are true func will be called on the trailing edge of\n   * the timeout only if the throttled function is invoked more than once during the wait timeout.\n   *\n   * @param func - The function to throttle.\n   * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.\n   * @param options - The options object.\n   * @returns The new throttled function.\n   */\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n\n\n  Async.prototype.throttle = function (func, wait, options) {\n    var _this = this;\n\n    if (this._isDisposed) {\n      return this._noop;\n    }\n\n    var waitMS = wait || 0;\n    var leading = true;\n    var trailing = true;\n    var lastExecuteTime = 0;\n    var lastResult; // eslint-disable-next-line @typescript-eslint/no-explicit-any\n\n    var lastArgs;\n    var timeoutId = null;\n\n    if (options && typeof options.leading === 'boolean') {\n      leading = options.leading;\n    }\n\n    if (options && typeof options.trailing === 'boolean') {\n      trailing = options.trailing;\n    }\n\n    var callback = function callback(userCall) {\n      var now = Date.now();\n      var delta = now - lastExecuteTime;\n      var waitLength = leading ? waitMS - delta : waitMS;\n\n      if (delta >= waitMS && (!userCall || leading)) {\n        lastExecuteTime = now;\n\n        if (timeoutId) {\n          _this.clearTimeout(timeoutId);\n\n          timeoutId = null;\n        }\n\n        lastResult = func.apply(_this._parent, lastArgs);\n      } else if (timeoutId === null && trailing) {\n        timeoutId = _this.setTimeout(callback, waitLength);\n      }\n\n      return lastResult;\n    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any\n\n\n    var resultFunction = function resultFunction() {\n      var args = [];\n\n      for (var _i = 0; _i < arguments.length; _i++) {\n        args[_i] = arguments[_i];\n      }\n\n      lastArgs = args;\n      return callback(true);\n    };\n\n    return resultFunction;\n  };\n  /**\n   * Creates a function that will delay the execution of func until after wait milliseconds have\n   * elapsed since the last time it was invoked. Provide an options object to indicate that func\n   * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls\n   * to the debounced function will return the result of the last func call.\n   *\n   * Note: If leading and trailing options are true func will be called on the trailing edge of\n   * the timeout only if the debounced function is invoked more than once during the wait\n   * timeout.\n   *\n   * @param func - The function to debounce.\n   * @param wait - The number of milliseconds to delay.\n   * @param options - The options object.\n   * @returns The new debounced function.\n   */\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n\n\n  Async.prototype.debounce = function (func, wait, options) {\n    var _this = this;\n\n    if (this._isDisposed) {\n      var noOpFunction = function noOpFunction() {\n        /** Do nothing */\n      };\n\n      noOpFunction.cancel = function () {\n        return;\n      };\n\n      noOpFunction.flush = function () {\n        return null;\n      };\n\n      noOpFunction.pending = function () {\n        return false;\n      };\n\n      return noOpFunction;\n    }\n\n    var waitMS = wait || 0;\n    var leading = false;\n    var trailing = true;\n    var maxWait = null;\n    var lastCallTime = 0;\n    var lastExecuteTime = Date.now();\n    var lastResult; // eslint-disable-next-line @typescript-eslint/no-explicit-any\n\n    var lastArgs;\n    var timeoutId = null;\n\n    if (options && typeof options.leading === 'boolean') {\n      leading = options.leading;\n    }\n\n    if (options && typeof options.trailing === 'boolean') {\n      trailing = options.trailing;\n    }\n\n    if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {\n      maxWait = options.maxWait;\n    }\n\n    var markExecuted = function markExecuted(time) {\n      if (timeoutId) {\n        _this.clearTimeout(timeoutId);\n\n        timeoutId = null;\n      }\n\n      lastExecuteTime = time;\n    };\n\n    var invokeFunction = function invokeFunction(time) {\n      markExecuted(time);\n      lastResult = func.apply(_this._parent, lastArgs);\n    };\n\n    var callback = function callback(userCall) {\n      var now = Date.now();\n      var executeImmediately = false;\n\n      if (userCall) {\n        if (leading && now - lastCallTime >= waitMS) {\n          executeImmediately = true;\n        }\n\n        lastCallTime = now;\n      }\n\n      var delta = now - lastCallTime;\n      var waitLength = waitMS - delta;\n      var maxWaitDelta = now - lastExecuteTime;\n      var maxWaitExpired = false;\n\n      if (maxWait !== null) {\n        // maxWait only matters when there is a pending callback\n        if (maxWaitDelta >= maxWait && timeoutId) {\n          maxWaitExpired = true;\n        } else {\n          waitLength = Math.min(waitLength, maxWait - maxWaitDelta);\n        }\n      }\n\n      if (delta >= waitMS || maxWaitExpired || executeImmediately) {\n        invokeFunction(now);\n      } else if ((timeoutId === null || !userCall) && trailing) {\n        timeoutId = _this.setTimeout(callback, waitLength);\n      }\n\n      return lastResult;\n    };\n\n    var pending = function pending() {\n      return !!timeoutId;\n    };\n\n    var cancel = function cancel() {\n      if (pending()) {\n        // Mark the debounced function as having executed\n        markExecuted(Date.now());\n      }\n    };\n\n    var flush = function flush() {\n      if (pending()) {\n        invokeFunction(Date.now());\n      }\n\n      return lastResult;\n    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any\n\n\n    var resultFunction = function resultFunction() {\n      var args = [];\n\n      for (var _i = 0; _i < arguments.length; _i++) {\n        args[_i] = arguments[_i];\n      }\n\n      lastArgs = args;\n      return callback(true);\n    };\n\n    resultFunction.cancel = cancel;\n    resultFunction.flush = flush;\n    resultFunction.pending = pending;\n    return resultFunction;\n  };\n\n  Async.prototype.requestAnimationFrame = function (callback, targetElement) {\n    var _this = this;\n\n    var animationFrameId = 0;\n    var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)(targetElement);\n\n    if (!this._isDisposed) {\n      if (!this._animationFrameIds) {\n        this._animationFrameIds = {};\n      }\n\n      var animationFrameCallback = function animationFrameCallback() {\n        try {\n          // Now delete the record and call the callback.\n          if (_this._animationFrameIds) {\n            delete _this._animationFrameIds[animationFrameId];\n          }\n\n          callback.apply(_this._parent);\n        } catch (e) {\n          _this._logError(e);\n        }\n      };\n\n      animationFrameId = win.requestAnimationFrame ? win.requestAnimationFrame(animationFrameCallback) : win.setTimeout(animationFrameCallback, 0);\n      this._animationFrameIds[animationFrameId] = true;\n    }\n\n    return animationFrameId;\n  };\n\n  Async.prototype.cancelAnimationFrame = function (id, targetElement) {\n    var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)(targetElement);\n\n    if (this._animationFrameIds && this._animationFrameIds[id]) {\n      win.cancelAnimationFrame ? win.cancelAnimationFrame(id) : win.clearTimeout(id);\n      delete this._animationFrameIds[id];\n    }\n  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any\n\n\n  Async.prototype._logError = function (e) {\n    if (this._onErrorHandler) {\n      this._onErrorHandler(e);\n    }\n  };\n\n  return Async;\n}();\n\n\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/Async.js?");

/***/ }),

/***/ "./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/dom/getWindow.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/dom/getWindow.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWindow\": () => (/* binding */ getWindow)\n/* harmony export */ });\n/* harmony import */ var _setSSR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setSSR */ \"./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/dom/setSSR.js\");\n\nvar _window = undefined; // Note: Accessing \"window\" in IE11 is somewhat expensive, and calling \"typeof window\"\n// hits a memory leak, whereas aliasing it and calling \"typeof _window\" does not.\n// Caching the window value at the file scope lets us minimize the impact.\n\ntry {\n  _window = window;\n} catch (e) {\n  /* no-op */\n}\n/**\n * Helper to get the window object. The helper will make sure to use a cached variable\n * of \"window\", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the\n * window object won't match the \"global\" window object, and for these scenarios, you should\n * pass in an element hosted within the popup.\n *\n * @public\n */\n\n\nfunction getWindow(rootElement) {\n  if (_setSSR__WEBPACK_IMPORTED_MODULE_0__._isSSR || typeof _window === 'undefined') {\n    return undefined;\n  } else {\n    var el = rootElement;\n    return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/dom/getWindow.js?");

/***/ }),

/***/ "./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/dom/setSSR.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/dom/setSSR.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_isSSR\": () => (/* binding */ _isSSR),\n/* harmony export */   \"setSSR\": () => (/* binding */ setSSR)\n/* harmony export */ });\nvar _isSSR = false;\n/**\n * Helper to set ssr mode to simulate no window object returned from getWindow helper.\n *\n * @public\n */\n\nfunction setSSR(isEnabled) {\n  _isSSR = isEnabled;\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./node_modules/@fluentui/react-hooks/node_modules/@fluentui/utilities/lib/dom/setSSR.js?");

/***/ }),

/***/ "@fluentui/react":
/*!*************************************!*\
  !*** external "FluentUIReactv8290" ***!
  \*************************************/
/***/ ((module) => {

module.exports = FluentUIReactv8290;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./Breadcrumb/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.Breadcrumb', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Breadcrumb);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.Breadcrumb = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Breadcrumb;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}