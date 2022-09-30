/*! For license information please see bundle.js.LICENSE.txt */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{var e={825:function(e,t,n){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var a=function(){function n(e){t(this,n),this.sourceStr=e,this.subCombos=n.parseComboStr(e),this.keyNames=this.subCombos.reduce((function(e,t){return e.concat(t)}),[])}return r(n,[{key:"check",value:function(e){for(var t=0,n=0;n<this.subCombos.length;n+=1)if(-1===(t=this._checkSubCombo(this.subCombos[n],t,e)))return!1;return!0}},{key:"isEqual",value:function(t){if(!t||"string"!=typeof t&&"object"!==e(t))return!1;if("string"==typeof t&&(t=new n(t)),this.subCombos.length!==t.subCombos.length)return!1;for(var i=0;i<this.subCombos.length;i+=1)if(this.subCombos[i].length!==t.subCombos[i].length)return!1;for(var r=0;r<this.subCombos.length;r+=1){for(var s=this.subCombos[r],o=t.subCombos[r].slice(0),a=0;a<s.length;a+=1){var l=s[a],d=o.indexOf(l);d>-1&&o.splice(d,1)}if(0!==o.length)return!1}return!0}},{key:"_checkSubCombo",value:function(e,t,i){e=e.slice(0),i=i.slice(t);for(var r=t,s=0;s<e.length;s+=1){var o=e[s];if("\\"===o[0]){var a=o.slice(1);a!==n.comboDeliminator&&a!==n.keyDeliminator||(o=a)}var l=i.indexOf(o);if(l>-1&&(e.splice(s,1),s-=1,l>r&&(r=l),0===e.length))return r}return-1}}]),n}();a.comboDeliminator=">",a.keyDeliminator="+",a.parseComboStr=function(e){for(var t=a._splitStr(e,a.comboDeliminator),n=[],i=0;i<t.length;i+=1)n.push(a._splitStr(t[i],a.keyDeliminator));return n},a._splitStr=function(e,t){for(var n=e,i=t,r="",s=[],o=0;o<n.length;o+=1)o>0&&n[o]===i&&"\\"!==n[o-1]&&(s.push(r.trim()),r="",o+=1),r+=n[o];return r&&s.push(r.trim()),s};var l=function(){function e(n){t(this,e),this.localeName=n,this.activeTargetKeys=[],this.pressedKeys=[],this._appliedMacros=[],this._keyMap={},this._killKeyCodes=[],this._macros=[]}return r(e,[{key:"bindKeyCode",value:function(e,t){"string"==typeof t&&(t=[t]),this._keyMap[e]=t}},{key:"bindMacro",value:function(e,t){"string"==typeof t&&(t=[t]);var n=null;"function"==typeof t&&(n=t,t=null);var i={keyCombo:new a(e),keyNames:t,handler:n};this._macros.push(i)}},{key:"getKeyCodes",value:function(e){var t=[];for(var n in this._keyMap)this._keyMap[n].indexOf(e)>-1&&t.push(0|n);return t}},{key:"getKeyNames",value:function(e){return this._keyMap[e]||[]}},{key:"setKillKey",value:function(e){if("string"!=typeof e)this._killKeyCodes.push(e);else for(var t=this.getKeyCodes(e),n=0;n<t.length;n+=1)this.setKillKey(t[n])}},{key:"pressKey",value:function(e){if("string"!=typeof e){this.activeTargetKeys.length=0;for(var t=this.getKeyNames(e),n=0;n<t.length;n+=1)this.activeTargetKeys.push(t[n]),-1===this.pressedKeys.indexOf(t[n])&&this.pressedKeys.push(t[n]);this._applyMacros()}else for(var i=this.getKeyCodes(e),r=0;r<i.length;r+=1)this.pressKey(i[r])}},{key:"releaseKey",value:function(e){if("string"==typeof e)for(var t=this.getKeyCodes(e),n=0;n<t.length;n+=1)this.releaseKey(t[n]);else{var i=this.getKeyNames(e);if(-1!==this._killKeyCodes.indexOf(e))this.pressedKeys.length=0;else for(var r=0;r<i.length;r+=1){var s=this.pressedKeys.indexOf(i[r]);s>-1&&this.pressedKeys.splice(s,1)}this.activeTargetKeys.length=0,this._clearMacros()}}},{key:"_applyMacros",value:function(){for(var e=this._macros.slice(0),t=0;t<e.length;t+=1){var n=e[t];if(n.keyCombo.check(this.pressedKeys)){n.handler&&(n.keyNames=n.handler(this.pressedKeys));for(var i=0;i<n.keyNames.length;i+=1)-1===this.pressedKeys.indexOf(n.keyNames[i])&&this.pressedKeys.push(n.keyNames[i]);this._appliedMacros.push(n)}}}},{key:"_clearMacros",value:function(){for(var e=0;e<this._appliedMacros.length;e+=1){var t=this._appliedMacros[e];if(!t.keyCombo.check(this.pressedKeys)){for(var n=0;n<t.keyNames.length;n+=1){var i=this.pressedKeys.indexOf(t.keyNames[n]);i>-1&&this.pressedKeys.splice(i,1)}t.handler&&(t.keyNames=null),this._appliedMacros.splice(e,1),e-=1}}}}]),e}(),d=function(){function i(e,n,r,s){t(this,i),this._locale=null,this._currentContext="",this._contexts={},this._listeners=[],this._appliedListeners=[],this._locales={},this._targetElement=null,this._targetWindow=null,this._targetPlatform="",this._targetUserAgent="",this._isModernBrowser=!1,this._targetKeyDownBinding=null,this._targetKeyUpBinding=null,this._targetResetBinding=null,this._paused=!1,this._contexts.global={listeners:this._listeners,targetWindow:e,targetElement:n,targetPlatform:r,targetUserAgent:s},this.setContext("global")}return r(i,[{key:"setLocale",value:function(e,t){var n=null;return"string"==typeof e?t?t(n=new l(e),this._targetPlatform,this._targetUserAgent):n=this._locales[e]||null:e=(n=e)._localeName,this._locale=n,this._locales[e]=n,n&&(this._locale.pressedKeys=n.pressedKeys),this}},{key:"getLocale",value:function(e){return e||(e=this._locale.localeName),this._locales[e]||null}},{key:"bind",value:function(t,n,i,r){if(null!==t&&"function"!=typeof t||(r=i,i=n,n=t,t=null),t&&"object"===e(t)&&"number"==typeof t.length){for(var s=0;s<t.length;s+=1)this.bind(t[s],n,i);return this}return this._listeners.push({keyCombo:t?new a(t):null,pressHandler:n||null,releaseHandler:i||null,preventRepeat:r||!1,preventRepeatByDefault:r||!1,executingHandler:!1}),this}},{key:"addListener",value:function(e,t,n,i){return this.bind(e,t,n,i)}},{key:"on",value:function(e,t,n,i){return this.bind(e,t,n,i)}},{key:"bindPress",value:function(e,t,n){return this.bind(e,t,null,n)}},{key:"bindRelease",value:function(e,t){return this.bind(e,null,t,preventRepeatByDefault)}},{key:"unbind",value:function(t,n,i){if(null!==t&&"function"!=typeof t||(i=n,n=t,t=null),t&&"object"===e(t)&&"number"==typeof t.length){for(var r=0;r<t.length;r+=1)this.unbind(t[r],n,i);return this}for(var s=0;s<this._listeners.length;s+=1){var o=this._listeners[s],a=!t&&!o.keyCombo||o.keyCombo&&o.keyCombo.isEqual(t),l=!n&&!i||!n&&!o.pressHandler||n===o.pressHandler,d=!n&&!i||!i&&!o.releaseHandler||i===o.releaseHandler;a&&l&&d&&(this._listeners.splice(s,1),s-=1)}return this}},{key:"removeListener",value:function(e,t,n){return this.unbind(e,t,n)}},{key:"off",value:function(e,t,n){return this.unbind(e,t,n)}},{key:"setContext",value:function(e){if(this._locale&&this.releaseAllKeys(),!this._contexts[e]){var t=this._contexts.global;this._contexts[e]={listeners:[],targetWindow:t.targetWindow,targetElement:t.targetElement,targetPlatform:t.targetPlatform,targetUserAgent:t.targetUserAgent}}var n=this._contexts[e];return this._currentContext=e,this._listeners=n.listeners,this.stop(),this.watch(n.targetWindow,n.targetElement,n.targetPlatform,n.targetUserAgent),this}},{key:"getContext",value:function(){return this._currentContext}},{key:"withContext",value:function(e,t){var n=this.getContext();return this.setContext(e),t(),this.setContext(n),this}},{key:"watch",value:function(e,t,i,r){var s=this;this.stop();var o="undefined"!=typeof globalThis?globalThis:void 0!==n.g?n.g:"undefined"!=typeof window?window:{};if(!e){if(!o.addEventListener&&!o.attachEvent)throw new Error("Cannot find window functions addEventListener or attachEvent.");e=o}if("number"==typeof e.nodeType&&(r=i,i=t,t=e,e=o),!e.addEventListener&&!e.attachEvent)throw new Error("Cannot find addEventListener or attachEvent methods on targetWindow.");this._isModernBrowser=!!e.addEventListener;var a=e.navigator&&e.navigator.userAgent||"",l=e.navigator&&e.navigator.platform||"";t&&null!==t||(t=e.document),i&&null!==i||(i=l),r&&null!==r||(r=a),this._targetKeyDownBinding=function(e){s.pressKey(e.keyCode,e),s._handleCommandBug(e,l)},this._targetKeyUpBinding=function(e){s.releaseKey(e.keyCode,e)},this._targetResetBinding=function(e){s.releaseAllKeys(e)},this._bindEvent(t,"keydown",this._targetKeyDownBinding),this._bindEvent(t,"keyup",this._targetKeyUpBinding),this._bindEvent(e,"focus",this._targetResetBinding),this._bindEvent(e,"blur",this._targetResetBinding),this._targetElement=t,this._targetWindow=e,this._targetPlatform=i,this._targetUserAgent=r;var d=this._contexts[this._currentContext];return d.targetWindow=this._targetWindow,d.targetElement=this._targetElement,d.targetPlatform=this._targetPlatform,d.targetUserAgent=this._targetUserAgent,this}},{key:"stop",value:function(){if(this._targetElement&&this._targetWindow)return this._unbindEvent(this._targetElement,"keydown",this._targetKeyDownBinding),this._unbindEvent(this._targetElement,"keyup",this._targetKeyUpBinding),this._unbindEvent(this._targetWindow,"focus",this._targetResetBinding),this._unbindEvent(this._targetWindow,"blur",this._targetResetBinding),this._targetWindow=null,this._targetElement=null,this}},{key:"pressKey",value:function(e,t){if(this._paused)return this;if(!this._locale)throw new Error("Locale not set");return this._locale.pressKey(e),this._applyBindings(t),this}},{key:"releaseKey",value:function(e,t){if(this._paused)return this;if(!this._locale)throw new Error("Locale not set");return this._locale.releaseKey(e),this._clearBindings(t),this}},{key:"releaseAllKeys",value:function(e){if(this._paused)return this;if(!this._locale)throw new Error("Locale not set");return this._locale.pressedKeys.length=0,this._clearBindings(e),this}},{key:"pause",value:function(){return this._paused||(this._locale&&this.releaseAllKeys(),this._paused=!0),this}},{key:"resume",value:function(){return this._paused=!1,this}},{key:"reset",value:function(){return this.releaseAllKeys(),this._listeners.length=0,this}},{key:"_bindEvent",value:function(e,t,n){return this._isModernBrowser?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}},{key:"_unbindEvent",value:function(e,t,n){return this._isModernBrowser?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)}},{key:"_getGroupedListeners",value:function(){var e=[],t=[],n=this._listeners;return"global"!==this._currentContext&&(n=[].concat(s(n),s(this._contexts.global.listeners))),n.sort((function(e,t){return(t.keyCombo?t.keyCombo.keyNames.length:0)-(e.keyCombo?e.keyCombo.keyNames.length:0)})).forEach((function(n){for(var i=-1,r=0;r<t.length;r+=1)(null===t[r]&&null===n.keyCombo||null!==t[r]&&t[r].isEqual(n.keyCombo))&&(i=r);-1===i&&(i=t.length,t.push(n.keyCombo)),e[i]||(e[i]=[]),e[i].push(n)})),e}},{key:"_applyBindings",value:function(e){var t=this,n=!1;e||(e={}),e.preventRepeat=function(){n=!0},e.pressedKeys=this._locale.pressedKeys.slice(0);for(var i=this._locale.activeTargetKeys,r=this._locale.pressedKeys.slice(0),s=this._getGroupedListeners(),o=function(o){var a=s[o],l=a[0].keyCombo;if(null===l||l.check(r)&&i.some((function(e){return l.keyNames.includes(e)}))){for(var d=0;d<a.length;d+=1){var u=a[d];u.executingHandler||!u.pressHandler||u.preventRepeat||(u.executingHandler=!0,u.pressHandler.call(t,e),u.executingHandler=!1,(n||u.preventRepeatByDefault)&&(u.preventRepeat=!0,n=!1)),-1===t._appliedListeners.indexOf(u)&&t._appliedListeners.push(u)}if(l)for(var c=0;c<l.keyNames.length;c+=1){var h=r.indexOf(l.keyNames[c]);-1!==h&&(r.splice(h,1),c-=1)}}},a=0;a<s.length;a+=1)o(a)}},{key:"_clearBindings",value:function(e){e||(e={}),e.pressedKeys=this._locale.pressedKeys.slice(0);for(var t=0;t<this._appliedListeners.length;t+=1){var n=this._appliedListeners[t],i=n.keyCombo;null!==i&&i.check(this._locale.pressedKeys)||(n.preventRepeat=!1,null===i&&0!==e.pressedKeys.length||(this._appliedListeners.splice(t,1),t-=1),!n.executingHandler&&n.releaseHandler&&(n.executingHandler=!0,n.releaseHandler.call(this,e),n.executingHandler=!1))}}},{key:"_handleCommandBug",value:function(e,t){t.match("Mac")&&this._locale.pressedKeys.includes("command")&&!["shift","ctrl","alt","capslock","tab","command"].includes(this._locale.getKeyNames(e.keyCode)[0])&&this._targetKeyUpBinding(e)}}]),i}();var u=new d;return u.setLocale("us",(function(e,t,n){e.bindKeyCode(3,["cancel"]),e.bindKeyCode(8,["backspace"]),e.bindKeyCode(9,["tab"]),e.bindKeyCode(12,["clear"]),e.bindKeyCode(13,["enter"]),e.bindKeyCode(16,["shift"]),e.bindKeyCode(17,["ctrl"]),e.bindKeyCode(18,["alt","menu"]),e.bindKeyCode(19,["pause","break"]),e.bindKeyCode(20,["capslock"]),e.bindKeyCode(27,["escape","esc"]),e.bindKeyCode(32,["space","spacebar"]),e.bindKeyCode(33,["pageup"]),e.bindKeyCode(34,["pagedown"]),e.bindKeyCode(35,["end"]),e.bindKeyCode(36,["home"]),e.bindKeyCode(37,["left"]),e.bindKeyCode(38,["up"]),e.bindKeyCode(39,["right"]),e.bindKeyCode(40,["down"]),e.bindKeyCode(41,["select"]),e.bindKeyCode(42,["printscreen"]),e.bindKeyCode(43,["execute"]),e.bindKeyCode(44,["snapshot"]),e.bindKeyCode(45,["insert","ins"]),e.bindKeyCode(46,["delete","del"]),e.bindKeyCode(47,["help"]),e.bindKeyCode(145,["scrolllock","scroll"]),e.bindKeyCode(188,["comma",","]),e.bindKeyCode(190,["period","."]),e.bindKeyCode(191,["slash","forwardslash","/"]),e.bindKeyCode(192,["graveaccent","`"]),e.bindKeyCode(219,["openbracket","["]),e.bindKeyCode(220,["backslash","\\"]),e.bindKeyCode(221,["closebracket","]"]),e.bindKeyCode(222,["apostrophe","'"]),e.bindKeyCode(48,["zero","0"]),e.bindKeyCode(49,["one","1"]),e.bindKeyCode(50,["two","2"]),e.bindKeyCode(51,["three","3"]),e.bindKeyCode(52,["four","4"]),e.bindKeyCode(53,["five","5"]),e.bindKeyCode(54,["six","6"]),e.bindKeyCode(55,["seven","7"]),e.bindKeyCode(56,["eight","8"]),e.bindKeyCode(57,["nine","9"]),e.bindKeyCode(96,["numzero","num0"]),e.bindKeyCode(97,["numone","num1"]),e.bindKeyCode(98,["numtwo","num2"]),e.bindKeyCode(99,["numthree","num3"]),e.bindKeyCode(100,["numfour","num4"]),e.bindKeyCode(101,["numfive","num5"]),e.bindKeyCode(102,["numsix","num6"]),e.bindKeyCode(103,["numseven","num7"]),e.bindKeyCode(104,["numeight","num8"]),e.bindKeyCode(105,["numnine","num9"]),e.bindKeyCode(106,["nummultiply","num*"]),e.bindKeyCode(107,["numadd","num+"]),e.bindKeyCode(108,["numenter"]),e.bindKeyCode(109,["numsubtract","num-"]),e.bindKeyCode(110,["numdecimal","num."]),e.bindKeyCode(111,["numdivide","num/"]),e.bindKeyCode(144,["numlock","num"]),e.bindKeyCode(112,["f1"]),e.bindKeyCode(113,["f2"]),e.bindKeyCode(114,["f3"]),e.bindKeyCode(115,["f4"]),e.bindKeyCode(116,["f5"]),e.bindKeyCode(117,["f6"]),e.bindKeyCode(118,["f7"]),e.bindKeyCode(119,["f8"]),e.bindKeyCode(120,["f9"]),e.bindKeyCode(121,["f10"]),e.bindKeyCode(122,["f11"]),e.bindKeyCode(123,["f12"]),e.bindKeyCode(124,["f13"]),e.bindKeyCode(125,["f14"]),e.bindKeyCode(126,["f15"]),e.bindKeyCode(127,["f16"]),e.bindKeyCode(128,["f17"]),e.bindKeyCode(129,["f18"]),e.bindKeyCode(130,["f19"]),e.bindKeyCode(131,["f20"]),e.bindKeyCode(132,["f21"]),e.bindKeyCode(133,["f22"]),e.bindKeyCode(134,["f23"]),e.bindKeyCode(135,["f24"]),e.bindMacro("shift + `",["tilde","~"]),e.bindMacro("shift + 1",["exclamation","exclamationpoint","!"]),e.bindMacro("shift + 2",["at","@"]),e.bindMacro("shift + 3",["number","#"]),e.bindMacro("shift + 4",["dollar","dollars","dollarsign","$"]),e.bindMacro("shift + 5",["percent","%"]),e.bindMacro("shift + 6",["caret","^"]),e.bindMacro("shift + 7",["ampersand","and","&"]),e.bindMacro("shift + 8",["asterisk","*"]),e.bindMacro("shift + 9",["openparen","("]),e.bindMacro("shift + 0",["closeparen",")"]),e.bindMacro("shift + -",["underscore","_"]),e.bindMacro("shift + =",["plus","+"]),e.bindMacro("shift + [",["opencurlybrace","opencurlybracket","{"]),e.bindMacro("shift + ]",["closecurlybrace","closecurlybracket","}"]),e.bindMacro("shift + \\",["verticalbar","|"]),e.bindMacro("shift + ;",["colon",":"]),e.bindMacro("shift + '",["quotationmark","'"]),e.bindMacro("shift + !,",["openanglebracket","<"]),e.bindMacro("shift + .",["closeanglebracket",">"]),e.bindMacro("shift + /",["questionmark","?"]),t.match("Mac")?e.bindMacro("command",["mod","modifier"]):e.bindMacro("ctrl",["mod","modifier"]);for(var i=65;i<=90;i+=1){var r=String.fromCharCode(i+32),s=String.fromCharCode(i);e.bindKeyCode(i,r),e.bindMacro("shift + "+r,s),e.bindMacro("capslock + "+r,s)}var o,a,l=n.match("Firefox")?59:186,d=n.match("Firefox")?173:189,u=n.match("Firefox")?61:187;t.match("Mac")&&(n.match("Safari")||n.match("Chrome"))?(o=91,a=93):t.match("Mac")&&n.match("Opera")?(o=17,a=17):t.match("Mac")&&n.match("Firefox")&&(o=224,a=224),e.bindKeyCode(l,["semicolon",";"]),e.bindKeyCode(d,["dash","-"]),e.bindKeyCode(u,["equal","equalsign","="]),e.bindKeyCode(o,["command","windows","win","super","leftcommand","leftwindows","leftwin","leftsuper"]),e.bindKeyCode(a,["command","windows","win","super","rightcommand","rightwindows","rightwin","rightsuper"]),e.setKillKey("command")})),u.Keyboard=d,u.Locale=l,u.KeyCombo=a,u}()}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i),n.d(i,{KeyboardShortcuts:()=>t});var e=n(825),t=function(){function t(){var e=this;this.currentKeyConfigRaw=void 0,this.currentKeyConfigBindings=void 0,this.onKey=null,this.keyboardCallback=function(t){t&&(e.onKey=null==t?void 0:t.pressedKeys.join(" ").replace(" menu "," + "),console.debug("KeyboardShortcuts key press",e.onKey),null==t||t.preventDefault(),null==t||t.stopImmediatePropagation(),e.notifyOutputChanged())}}return t.prototype.init=function(t,n){this.notifyOutputChanged=n,this.context=t,e.watch(),this.bindKeysIfChanged(t)},t.prototype.updateView=function(e){this.bindKeysIfChanged(e)},t.prototype.bindKeysIfChanged=function(t){if(t.parameters.KeyConfig.raw&&t.parameters.KeyConfig.raw!==this.currentKeyConfigRaw)try{var n=JSON.parse(t.parameters.KeyConfig.raw);e.bind(n,this.keyboardCallback),this.currentKeyConfigBindings=n,this.currentKeyConfigRaw=t.parameters.KeyConfig.raw}catch(e){console.error("KeyboardShortcuts Error",e)}},t.prototype.getOutputs=function(){return{OnKey:this.onKey}},t.prototype.destroy=function(){this.currentKeyConfigBindings&&e.unbind(this.currentKeyConfigBindings,this.keyboardCallback)},t}()})(),pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=i})();
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.KeyboardShortcuts', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.KeyboardShortcuts);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.KeyboardShortcuts = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.KeyboardShortcuts;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}