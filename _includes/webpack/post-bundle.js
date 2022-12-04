/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/gifffer/build/gifffer.min.js":
/*!***************************************************!*\
  !*** ./node_modules/gifffer/build/gifffer.min.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, top-level-this-exports */
/*! CommonJS bailout: this is used directly at 1:309-313 */
/*! CommonJS bailout: module.exports is used directly at 1:112-126 */
/***/ (function(module) {

eval("(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else {}})(this,function(){if(typeof window===\"undefined\"||typeof document===\"undefined\"){return}var d=document;var playSize=60;var Gifffer=function(options){var images,i=0,gifs=[];images=d.querySelectorAll(\"[data-gifffer]\");for(;i<images.length;++i)process(images[i],gifs,options);return gifs};function formatUnit(v){return v+(v.toString().indexOf(\"%\")>0?\"\":\"px\")}function parseStyles(styles){var stylesStr=\"\";for(prop in styles)stylesStr+=prop+\":\"+styles[prop]+\";\";return stylesStr}function createContainer(w,h,el,altText,opts){var alt;var con=d.createElement(\"BUTTON\");var cls=el.getAttribute(\"class\");var id=el.getAttribute(\"id\");var playButtonStyles=opts&&opts.playButtonStyles?parseStyles(opts.playButtonStyles):[\"width:\"+playSize+\"px\",\"height:\"+playSize+\"px\",\"border-radius:\"+playSize/2+\"px\",\"background:rgba(0, 0, 0, 0.3)\",\"position:absolute\",\"top:50%\",\"left:50%\",\"margin:-\"+playSize/2+\"px\"].join(\";\");var playButtonIconStyles=opts&&opts.playButtonIconStyles?parseStyles(opts.playButtonIconStyles):[\"width: 0\",\"height: 0\",\"border-top: 14px solid transparent\",\"border-bottom: 14px solid transparent\",\"border-left: 14px solid rgba(0, 0, 0, 0.5)\",\"position: absolute\",\"left: 26px\",\"top: 16px\"].join(\";\");cls?con.setAttribute(\"class\",el.getAttribute(\"class\")):null;id?con.setAttribute(\"id\",el.getAttribute(\"id\")):null;con.setAttribute(\"style\",\"position:relative;cursor:pointer;background:none;border:none;padding:0;\");con.setAttribute(\"aria-hidden\",\"true\");var play=d.createElement(\"DIV\");play.setAttribute(\"class\",\"gifffer-play-button\");play.setAttribute(\"style\",playButtonStyles);var trngl=d.createElement(\"DIV\");trngl.setAttribute(\"style\",playButtonIconStyles);play.appendChild(trngl);if(altText){alt=d.createElement(\"p\");alt.setAttribute(\"class\",\"gifffer-alt\");alt.setAttribute(\"style\",\"border:0;clip:rect(0 0 0 0);height:1px;overflow:hidden;padding:0;position:absolute;width:1px;\");alt.innerText=altText+\", image\"}con.appendChild(play);el.parentNode.replaceChild(con,el);altText?con.parentNode.insertBefore(alt,con.nextSibling):null;return{c:con,p:play}}function calculatePercentageDim(el,w,h,wOrig,hOrig){var parentDimW=el.parentNode.offsetWidth;var parentDimH=el.parentNode.offsetHeight;var ratio=wOrig/hOrig;if(w.toString().indexOf(\"%\")>0){w=parseInt(w.toString().replace(\"%\",\"\"));w=w/100*parentDimW;h=w/ratio}else if(h.toString().indexOf(\"%\")>0){h=parseInt(h.toString().replace(\"%\",\"\"));h=h/100*parentDimW;w=h*ratio}return{w:w,h:h}}function process(el,gifs,options){var url,con,c,w,h,duration,play,gif,playing=false,cc,isC,durationTimeout,dims,altText;url=el.getAttribute(\"data-gifffer\");w=el.getAttribute(\"data-gifffer-width\");h=el.getAttribute(\"data-gifffer-height\");duration=el.getAttribute(\"data-gifffer-duration\");altText=el.getAttribute(\"data-gifffer-alt\");el.style.display=\"block\";c=document.createElement(\"canvas\");isC=!!(c.getContext&&c.getContext(\"2d\"));if(w&&h&&isC)cc=createContainer(w,h,el,altText,options);el.onload=function(){if(!isC)return;w=w||el.width;h=h||el.height;if(!cc)cc=createContainer(w,h,el,altText,options);con=cc.c;play=cc.p;dims=calculatePercentageDim(con,w,h,el.width,el.height);gifs.push(con);con.addEventListener(\"click\",function(){clearTimeout(durationTimeout);if(!playing){playing=true;gif=document.createElement(\"IMG\");gif.setAttribute(\"style\",\"width:100%;height:100%;\");gif.setAttribute(\"data-uri\",Math.floor(Math.random()*1e5)+1);setTimeout(function(){gif.src=url},0);con.removeChild(play);con.removeChild(c);con.appendChild(gif);if(parseInt(duration)>0){durationTimeout=setTimeout(function(){playing=false;con.appendChild(play);con.removeChild(gif);con.appendChild(c);gif=null},duration)}}else{playing=false;con.appendChild(play);con.removeChild(gif);con.appendChild(c);gif=null}});c.width=dims.w;c.height=dims.h;c.getContext(\"2d\").drawImage(el,0,0,dims.w,dims.h);con.appendChild(c);con.setAttribute(\"style\",\"position:relative;cursor:pointer;width:\"+dims.w+\"px;height:\"+dims.h+\"px;background:none;border:none;padding:0;\");c.style.width=\"100%\";c.style.height=\"100%\";if(w.toString().indexOf(\"%\")>0&&h.toString().indexOf(\"%\")>0){con.style.width=w;con.style.height=h}else if(w.toString().indexOf(\"%\")>0){con.style.width=w;con.style.height=\"inherit\"}else if(h.toString().indexOf(\"%\")>0){con.style.width=\"inherit\";con.style.height=h}else{con.style.width=dims.w+\"px\";con.style.height=dims.h+\"px\"}};el.src=url}return Gifffer});\n\n//# sourceURL=webpack://devknowledge.github.io/./node_modules/gifffer/build/gifffer.min.js?");

/***/ }),

/***/ "./webpack/post.ts":
/*!*************************!*\
  !*** ./webpack/post.ts ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typescript_components_cookies_consentement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typescript/components/cookies-consentement.component */ \"./webpack/typescript/components/cookies-consentement.component.ts\");\n/* harmony import */ var _typescript_components_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typescript/components/footer.component */ \"./webpack/typescript/components/footer.component.ts\");\n/* harmony import */ var _typescript_components_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typescript/components/navbar.component */ \"./webpack/typescript/components/navbar.component.ts\");\n/* harmony import */ var _typescript_components_post_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typescript/components/post-main */ \"./webpack/typescript/components/post-main.ts\");\n/* harmony import */ var _utils_page_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/page-utils */ \"./webpack/utils/page-utils.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar app = document.querySelector('#app');\r\nvar components = [];\r\ncomponents.push(new _typescript_components_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarHtmlComponent());\r\ncomponents.push(new _typescript_components_post_main__WEBPACK_IMPORTED_MODULE_3__.PostMainHtmlComponent());\r\ncomponents.push(new _typescript_components_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterHtmlComponent());\r\ncomponents.push(new _typescript_components_cookies_consentement_component__WEBPACK_IMPORTED_MODULE_0__.CookiesConsentementHtmlComponent());\r\ncomponents.forEach(function (component) { return component.preInsertHtml(); });\r\ncomponents.forEach(function (component) { return component.insertHtml(app, 'beforeend'); });\r\ncomponents.forEach(function (component) { return component.postInsertHtml(); });\r\n_utils_page_utils__WEBPACK_IMPORTED_MODULE_4__.default.hideLoader();\r\n_utils_page_utils__WEBPACK_IMPORTED_MODULE_4__.default.giffer();\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/post.ts?");

/***/ }),

/***/ "./webpack/typescript/components/component.interface.ts":
/*!**************************************************************!*\
  !*** ./webpack/typescript/components/component.interface.ts ***!
  \**************************************************************/
/*! namespace exports */
/*! export BaseHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export BaseStaticHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseHtmlComponent\": () => /* binding */ BaseHtmlComponent,\n/* harmony export */   \"BaseStaticHtmlComponent\": () => /* binding */ BaseStaticHtmlComponent\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nvar BaseHtmlComponent = /** @class */ (function () {\r\n    function BaseHtmlComponent() {\r\n    }\r\n    BaseHtmlComponent.prototype.insert = function (parentElement, insertPosition) {\r\n        this.preInsertHtml();\r\n        this.insertHtml(parentElement, insertPosition);\r\n        this.postInsertHtml();\r\n    };\r\n    BaseHtmlComponent.prototype.preInsertHtml = function () {\r\n        // nothing to do!\r\n    };\r\n    BaseHtmlComponent.prototype.insertHtml = function (parentElement, insertPosition) {\r\n        parentElement.insertAdjacentHTML(insertPosition, this.toHtml());\r\n    };\r\n    BaseHtmlComponent.prototype.dispatchCustomEvent = function (eventName, eventDetail) {\r\n        if (eventDetail === void 0) { eventDetail = {}; }\r\n        document.dispatchEvent(new CustomEvent(eventName, {\r\n            detail: eventDetail,\r\n        }));\r\n    };\r\n    BaseHtmlComponent.prototype.addCustomEventListener = function (eventName, listener) {\r\n        document.addEventListener(eventName, listener);\r\n    };\r\n    BaseHtmlComponent.prototype.delay = function (fn, ms) {\r\n        var timer = null;\r\n        return function () {\r\n            var args = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                args[_i] = arguments[_i];\r\n            }\r\n            clearTimeout(timer);\r\n            timer = setTimeout(fn.bind.apply(fn, __spreadArrays([this], args)), ms || 0);\r\n        };\r\n    };\r\n    BaseHtmlComponent.prototype.generateId = function () {\r\n        // Math.random should be unique because of its seeding algorithm.\r\n        // Convert it to base 36 (numbers + letters), and grab the first 9 characters\r\n        // after the decimal.\r\n        return '_' + Math.random().toString(36).substr(2, 9);\r\n    };\r\n    return BaseHtmlComponent;\r\n}());\r\n\r\nvar BaseStaticHtmlComponent = /** @class */ (function (_super) {\r\n    __extends(BaseStaticHtmlComponent, _super);\r\n    function BaseStaticHtmlComponent() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    BaseStaticHtmlComponent.prototype.postInsertHtml = function () {\r\n        // nothing to do!\r\n    };\r\n    return BaseStaticHtmlComponent;\r\n}(BaseHtmlComponent));\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/typescript/components/component.interface.ts?");

/***/ }),

/***/ "./webpack/typescript/components/cookies-consentement.component.ts":
/*!*************************************************************************!*\
  !*** ./webpack/typescript/components/cookies-consentement.component.ts ***!
  \*************************************************************************/
/*! namespace exports */
/*! export CookiesConsentementHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CookiesConsentementHtmlComponent\": () => /* binding */ CookiesConsentementHtmlComponent\n/* harmony export */ });\n/* harmony import */ var _component_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.interface */ \"./webpack/typescript/components/component.interface.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar CookiesConsentementHtmlComponent = /** @class */ (function (_super) {\r\n    __extends(CookiesConsentementHtmlComponent, _super);\r\n    function CookiesConsentementHtmlComponent() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    CookiesConsentementHtmlComponent.prototype.preInsertHtml = function () {\r\n        this.containerId = this.generateId();\r\n        this.buttonId = this.generateId();\r\n    };\r\n    CookiesConsentementHtmlComponent.prototype.toHtml = function () {\r\n        return /* html */ \"\\n      <div id=\\\"\" + this.containerId + \"\\\" class=\\\"cookies-consentement-container\\\">\\n        <div class=\\\"cookies-consentement-msg\\\">\\n          <span class=\\\"iconify\\\" data-icon=\\\"ant-design:info-circle-outlined\\\"></span>\\n          <p>We use Cookies and Local Storage to improve your experience on our website. To find out more, read our <a href=\\\"/privacy-policy\\\">Privacy policy</a></p>\\n        </div>\\n        <button id=\\\"\" + this.buttonId + \"\\\">Got it</button> \\n      </div>\\n    \";\r\n    };\r\n    CookiesConsentementHtmlComponent.prototype.postInsertHtml = function () {\r\n        var _this = this;\r\n        this.container = document.getElementById(this.containerId);\r\n        this.button = document.getElementById(this.buttonId);\r\n        setTimeout(function () {\r\n            var consentementAlreadyShown = localStorage.getItem('consentementAlreadyShown') == 'true';\r\n            if (!consentementAlreadyShown) {\r\n                _this.container.classList.add('active');\r\n            }\r\n        }, 2000);\r\n        this.button.addEventListener('click', this.handleButtonClickEvent.bind(this));\r\n    };\r\n    CookiesConsentementHtmlComponent.prototype.handleButtonClickEvent = function () {\r\n        this.container.classList.remove('active');\r\n        localStorage.setItem('consentementAlreadyShown', 'true');\r\n    };\r\n    return CookiesConsentementHtmlComponent;\r\n}(_component_interface__WEBPACK_IMPORTED_MODULE_0__.BaseHtmlComponent));\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/typescript/components/cookies-consentement.component.ts?");

/***/ }),

/***/ "./webpack/typescript/components/footer.component.ts":
/*!***********************************************************!*\
  !*** ./webpack/typescript/components/footer.component.ts ***!
  \***********************************************************/
/*! namespace exports */
/*! export FooterHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FooterHtmlComponent\": () => /* binding */ FooterHtmlComponent\n/* harmony export */ });\n/* harmony import */ var _component_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.interface */ \"./webpack/typescript/components/component.interface.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar FooterHtmlComponent = /** @class */ (function (_super) {\r\n    __extends(FooterHtmlComponent, _super);\r\n    function FooterHtmlComponent() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    FooterHtmlComponent.prototype.toHtml = function () {\r\n        return /* html */ \"\\n      <footer>\\n        <a class=\\\"logo\\\" href='/'>\\n          <img src='/assets/logo.png' alt='logo' />\\n          <span>DEV Knowledge</span>\\n        </a>\\n        <div class=\\\"links\\\">\\n          <a href=\\\"/contact\\\">Contact</a>\\n          <span>|</span>\\n          <a href=\\\"/privacy-policy\\\">Privacy Policy</a>\\n        </div>\\n        <p class=\\\"all-right-reserved\\\">\\u00A9 2022 DEV Knowledge. All rights reserved</p>\\n      </footer>\\n    \";\r\n    };\r\n    return FooterHtmlComponent;\r\n}(_component_interface__WEBPACK_IMPORTED_MODULE_0__.BaseStaticHtmlComponent));\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/typescript/components/footer.component.ts?");

/***/ }),

/***/ "./webpack/typescript/components/navbar.component.ts":
/*!***********************************************************!*\
  !*** ./webpack/typescript/components/navbar.component.ts ***!
  \***********************************************************/
/*! namespace exports */
/*! export NavbarHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavbarHtmlComponent\": () => /* binding */ NavbarHtmlComponent\n/* harmony export */ });\n/* harmony import */ var _component_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.interface */ \"./webpack/typescript/components/component.interface.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar LIGHT_THEME_VALUE = 'light';\r\nvar DARK_THEME_VALUE = 'dark';\r\nvar CURRENT_THEME_KEY = 'CURRENT_THEME';\r\nvar CHANGE_TO_DARK_THEME_ICON_ID = 'CHANGE_TO_DARK_THEME_ICON_ID';\r\nvar CHANGE_TO_LIGHT_THEME_ICON_ID = 'CHANGE_TO_LIGHT_THEME_ICON_ID';\r\nvar NavbarHtmlComponent = /** @class */ (function (_super) {\r\n    __extends(NavbarHtmlComponent, _super);\r\n    function NavbarHtmlComponent() {\r\n        var _this = _super.call(this) || this;\r\n        _this.toHtml = _this.toHtml.bind(_this);\r\n        _this.postInsertHtml = _this.postInsertHtml.bind(_this);\r\n        _this.initDomElements = _this.initDomElements.bind(_this);\r\n        _this.onChangeThemeEvent = _this.onChangeThemeEvent.bind(_this);\r\n        _this.onWindowScrollEvent = _this.onWindowScrollEvent.bind(_this);\r\n        return _this;\r\n    }\r\n    NavbarHtmlComponent.prototype.preInsertHtml = function () {\r\n        this.setThemeFromLocalStorage();\r\n    };\r\n    NavbarHtmlComponent.prototype.toHtml = function () {\r\n        try {\r\n            return /* html */ \"\\n        <nav>\\n          <div class='left'>\\n            <a href='/'>\\n              <img src='/assets/logo.png' alt='logo' />\\n              <span>DEV Knowledge</span>\\n            </a>\\n          </div>\\n          <div class='right'>\\n            <span id='\" + CHANGE_TO_DARK_THEME_ICON_ID + \"' class='change-theme-icon pointer'>\\n              <span class='iconify' data-icon='bx:bx-moon' data-inline='false'></span>\\n            </span>\\n            <span id='\" + CHANGE_TO_LIGHT_THEME_ICON_ID + \"' class='change-theme-icon pointer'>\\n              <span class='iconify' data-icon='heroicons-solid:sun' data-inline='false'></span>\\n            </span>\\n          </div>\\n        </nav>\\n      \";\r\n        }\r\n        catch (error) {\r\n            console.error('error while executing Navbar.toHtml() method. error: ' + error);\r\n        }\r\n    };\r\n    NavbarHtmlComponent.prototype.postInsertHtml = function () {\r\n        try {\r\n            this.initDomElements();\r\n            this.showHideToggleThemeIcons();\r\n            this.changeToDarkThemeButtonDomElement.addEventListener('click', this.onChangeThemeEvent);\r\n            this.changeToLightThemeButtonDomElement.addEventListener('click', this.onChangeThemeEvent);\r\n            window.addEventListener('scroll', this.onWindowScrollEvent);\r\n        }\r\n        catch (error) {\r\n            console.error('error while executing Navbar.postHtmlInsert() method. error: ' + error);\r\n        }\r\n    };\r\n    NavbarHtmlComponent.prototype.initDomElements = function () {\r\n        this.navbarDomElement = document.querySelector('nav');\r\n        this.bodyDomElement = document.querySelector('body');\r\n        this.changeToDarkThemeButtonDomElement = document.getElementById(CHANGE_TO_DARK_THEME_ICON_ID);\r\n        this.changeToLightThemeButtonDomElement = document.getElementById(CHANGE_TO_LIGHT_THEME_ICON_ID);\r\n    };\r\n    NavbarHtmlComponent.prototype.showHideToggleThemeIcons = function () {\r\n        try {\r\n            if (localStorage.getItem(CURRENT_THEME_KEY) === LIGHT_THEME_VALUE) {\r\n                this.changeToDarkThemeButtonDomElement.style.display = 'flex';\r\n            }\r\n            else {\r\n                this.changeToLightThemeButtonDomElement.style.display = 'flex';\r\n            }\r\n        }\r\n        catch (error) {\r\n            console.error('error while executing Navbar.showHideToggleThemeIcons() method. error: ' + error);\r\n        }\r\n    };\r\n    NavbarHtmlComponent.prototype.setThemeFromLocalStorage = function () {\r\n        this.bodyDomElement = document.querySelector('body');\r\n        var currentTheme = localStorage.getItem(CURRENT_THEME_KEY) || LIGHT_THEME_VALUE;\r\n        this.bodyDomElement.classList.remove(DARK_THEME_VALUE, LIGHT_THEME_VALUE);\r\n        this.bodyDomElement.classList.add(currentTheme);\r\n        localStorage.setItem(CURRENT_THEME_KEY, currentTheme);\r\n    };\r\n    NavbarHtmlComponent.prototype.onChangeThemeEvent = function (event) {\r\n        event.stopPropagation();\r\n        var currentTheme = localStorage.getItem(CURRENT_THEME_KEY);\r\n        if (currentTheme === LIGHT_THEME_VALUE) {\r\n            this.bodyDomElement.classList.remove(DARK_THEME_VALUE, LIGHT_THEME_VALUE);\r\n            this.bodyDomElement.classList.add(DARK_THEME_VALUE);\r\n            localStorage.setItem(CURRENT_THEME_KEY, DARK_THEME_VALUE);\r\n            this.changeToDarkThemeButtonDomElement.style.display = 'none';\r\n            this.changeToLightThemeButtonDomElement.style.display = 'flex';\r\n        }\r\n        else {\r\n            this.bodyDomElement.classList.remove(DARK_THEME_VALUE, LIGHT_THEME_VALUE);\r\n            this.bodyDomElement.classList.add(LIGHT_THEME_VALUE);\r\n            localStorage.setItem(CURRENT_THEME_KEY, LIGHT_THEME_VALUE);\r\n            this.changeToDarkThemeButtonDomElement.style.display = 'flex';\r\n            this.changeToLightThemeButtonDomElement.style.display = 'none';\r\n        }\r\n    };\r\n    NavbarHtmlComponent.prototype.onWindowScrollEvent = function () {\r\n        if (window.scrollY === 0) {\r\n            this.navbarDomElement.classList.remove('shadow');\r\n        }\r\n        else {\r\n            this.navbarDomElement.classList.add('shadow');\r\n        }\r\n    };\r\n    return NavbarHtmlComponent;\r\n}(_component_interface__WEBPACK_IMPORTED_MODULE_0__.BaseHtmlComponent));\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/typescript/components/navbar.component.ts?");

/***/ }),

/***/ "./webpack/typescript/components/post-comments.component.ts":
/*!******************************************************************!*\
  !*** ./webpack/typescript/components/post-comments.component.ts ***!
  \******************************************************************/
/*! namespace exports */
/*! export PostCommentsHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostCommentsHtmlComponent\": () => /* binding */ PostCommentsHtmlComponent\n/* harmony export */ });\n/* harmony import */ var _component_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.interface */ \"./webpack/typescript/components/component.interface.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar PostCommentsHtmlComponent = /** @class */ (function (_super) {\r\n    __extends(PostCommentsHtmlComponent, _super);\r\n    function PostCommentsHtmlComponent() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    PostCommentsHtmlComponent.prototype.toHtml = function () {\r\n        return /* html */ \"\\n      <div id=\\\"disqus_thread\\\"></div>\\n    \";\r\n    };\r\n    PostCommentsHtmlComponent.prototype.postInsertHtml = function () {\r\n        var d = document;\r\n        var s = d.createElement('script');\r\n        s.src = 'https://dev-knowledge.disqus.com/embed.js';\r\n        s.setAttribute('data-timestamp', new Date() + '');\r\n        (d.head || d.body).appendChild(s);\r\n    };\r\n    return PostCommentsHtmlComponent;\r\n}(_component_interface__WEBPACK_IMPORTED_MODULE_0__.BaseHtmlComponent));\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/typescript/components/post-comments.component.ts?");

/***/ }),

/***/ "./webpack/typescript/components/post-main.ts":
/*!****************************************************!*\
  !*** ./webpack/typescript/components/post-main.ts ***!
  \****************************************************/
/*! namespace exports */
/*! export PostMainHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostMainHtmlComponent\": () => /* binding */ PostMainHtmlComponent\n/* harmony export */ });\n/* harmony import */ var _component_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.interface */ \"./webpack/typescript/components/component.interface.ts\");\n/* harmony import */ var _post_comments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-comments.component */ \"./webpack/typescript/components/post-comments.component.ts\");\n/* harmony import */ var _post_markdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-markdown.component */ \"./webpack/typescript/components/post-markdown.component.ts\");\n/* harmony import */ var _post_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-overview.component */ \"./webpack/typescript/components/post-overview.component.ts\");\n/* harmony import */ var _related_post_summary_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./related-post-summary-list.component */ \"./webpack/typescript/components/related-post-summary-list.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\nvar PostMainHtmlComponent = /** @class */ (function (_super) {\r\n    __extends(PostMainHtmlComponent, _super);\r\n    function PostMainHtmlComponent() {\r\n        var _this = _super.call(this) || this;\r\n        _this.comments = new _post_comments_component__WEBPACK_IMPORTED_MODULE_1__.PostCommentsHtmlComponent();\r\n        _this.relatedPosts = new _related_post_summary_list_component__WEBPACK_IMPORTED_MODULE_4__.RelatedPostSummaryListHtmlComponent();\r\n        _this.components = [];\r\n        _this.components.push(new _post_overview_component__WEBPACK_IMPORTED_MODULE_3__.PostOverviewHtmlComponent());\r\n        _this.components.push(new _post_markdown_component__WEBPACK_IMPORTED_MODULE_2__.PostMarkdownHtmlComponent());\r\n        return _this;\r\n    }\r\n    PostMainHtmlComponent.prototype.preInsertHtml = function () {\r\n        this.components.forEach(function (component) { return component.preInsertHtml(); });\r\n        this.comments.preInsertHtml();\r\n        this.relatedPosts.preInsertHtml();\r\n    };\r\n    PostMainHtmlComponent.prototype.toHtml = function () {\r\n        return /* html */ \"\\n      <main>\\n        <div class=\\\"left\\\">\\n          <div class=\\\"post\\\">\\n            \" + this.components.map(function (component) { return component.toHtml(); }).join(' ') + \"\\n          </div>\\n          <div class=\\\"post post-comments\\\">\\n            \" + this.comments.toHtml() + \"\\n          </div>\\n        </div>\\n        <div class=\\\"right\\\">\\n          \" + this.relatedPosts.toHtml() + \"\\n        </div>\\n      </main>\\n    \";\r\n    };\r\n    PostMainHtmlComponent.prototype.postInsertHtml = function () {\r\n        this.components.forEach(function (component) { return component.postInsertHtml(); });\r\n        this.comments.postInsertHtml();\r\n        this.relatedPosts.postInsertHtml();\r\n    };\r\n    return PostMainHtmlComponent;\r\n}(_component_interface__WEBPACK_IMPORTED_MODULE_0__.BaseHtmlComponent));\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/typescript/components/post-main.ts?");

/***/ }),

/***/ "./webpack/typescript/components/post-markdown.component.ts":
/*!******************************************************************!*\
  !*** ./webpack/typescript/components/post-markdown.component.ts ***!
  \******************************************************************/
/*! namespace exports */
/*! export PostMarkdownHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostMarkdownHtmlComponent\": () => /* binding */ PostMarkdownHtmlComponent\n/* harmony export */ });\n/* harmony import */ var _component_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.interface */ \"./webpack/typescript/components/component.interface.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar PostMarkdownHtmlComponent = /** @class */ (function (_super) {\r\n    __extends(PostMarkdownHtmlComponent, _super);\r\n    function PostMarkdownHtmlComponent() {\r\n        var _this = _super.call(this) || this;\r\n        _this.post = window.jekyll.post;\r\n        return _this;\r\n    }\r\n    PostMarkdownHtmlComponent.prototype.toHtml = function () {\r\n        try {\r\n            return /* html */ \"\\n        <div class=\\\"markdown\\\">\" + this.post.content + \"</div>\\n      \";\r\n        }\r\n        catch (error) {\r\n            console.error('error while executing PostMarkdownHtmlComponent.toHtml() method. error: ' + error);\r\n        }\r\n    };\r\n    return PostMarkdownHtmlComponent;\r\n}(_component_interface__WEBPACK_IMPORTED_MODULE_0__.BaseStaticHtmlComponent));\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/typescript/components/post-markdown.component.ts?");

/***/ }),

/***/ "./webpack/typescript/components/post-overview.component.ts":
/*!******************************************************************!*\
  !*** ./webpack/typescript/components/post-overview.component.ts ***!
  \******************************************************************/
/*! namespace exports */
/*! export PostOverviewHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostOverviewHtmlComponent\": () => /* binding */ PostOverviewHtmlComponent\n/* harmony export */ });\n/* harmony import */ var _component_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.interface */ \"./webpack/typescript/components/component.interface.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar PostOverviewHtmlComponent = /** @class */ (function (_super) {\r\n    __extends(PostOverviewHtmlComponent, _super);\r\n    function PostOverviewHtmlComponent() {\r\n        var _this = _super.call(this) || this;\r\n        _this.post = window.jekyll.post;\r\n        return _this;\r\n    }\r\n    PostOverviewHtmlComponent.prototype.toHtml = function () {\r\n        try {\r\n            return /* html */ \"\\n        <div class=\\\"post__overview\\\">\\n          <h1 class=\\\"post__title\\\">\" + this.post.title + \"</h1>\\n          <div class=\\\"post__additional-info\\\">\\n            <div class=\\\"post__additional-info__left\\\">\\n              <span class=\\\"post-summary__icon iconify\\\" data-icon=\\\"ion:pricetags\\\" data-inline=\\\"false\\\"></span>\\n              \" + this.renderPostTags() + \"\\n            </div>\\n            <div class=\\\"post__additional-info__right\\\">\\n              <span class=\\\"iconify\\\" data-icon=\\\"clarity:date-line\\\" data-inline=\\\"false\\\"></span>\\n              <time>\" + this.post.date + \"</time>\\n            </div>\\n          </div>\\n        </div>\\n      \";\r\n        }\r\n        catch (error) {\r\n            console.error('error while executing PostOverviewHtmlComponent.toHtml() method. error: ' + error);\r\n        }\r\n    };\r\n    PostOverviewHtmlComponent.prototype.renderPostTags = function () {\r\n        var res = '';\r\n        this.post.tags.forEach(function (tag) { return (res += \"<span class=\\\"tag\\\">\" + tag + \"</span>\"); });\r\n        return res;\r\n    };\r\n    return PostOverviewHtmlComponent;\r\n}(_component_interface__WEBPACK_IMPORTED_MODULE_0__.BaseStaticHtmlComponent));\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/typescript/components/post-overview.component.ts?");

/***/ }),

/***/ "./webpack/typescript/components/related-post-summary-list.component.ts":
/*!******************************************************************************!*\
  !*** ./webpack/typescript/components/related-post-summary-list.component.ts ***!
  \******************************************************************************/
/*! namespace exports */
/*! export RelatedPostSummaryListHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RelatedPostSummaryListHtmlComponent\": () => /* binding */ RelatedPostSummaryListHtmlComponent\n/* harmony export */ });\n/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array-utils */ \"./webpack/utils/array-utils.ts\");\n/* harmony import */ var _component_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.interface */ \"./webpack/typescript/components/component.interface.ts\");\n/* harmony import */ var _related_post_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./related-post-summary.component */ \"./webpack/typescript/components/related-post-summary.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar RelatedPostSummaryListHtmlComponent = /** @class */ (function (_super) {\r\n    __extends(RelatedPostSummaryListHtmlComponent, _super);\r\n    function RelatedPostSummaryListHtmlComponent() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    RelatedPostSummaryListHtmlComponent.prototype.toHtml = function () {\r\n        var relatedPostsHtml = this.getRelatedPostsHtml();\r\n        if (!relatedPostsHtml) {\r\n            return '';\r\n        }\r\n        return /* html */ \"\\n      <div class=\\\"related-posts-wrapper\\\">\\n        <h2 class=\\\"related-posts-title\\\">Related posts</h2>\\n        <div class=\\\"related-posts\\\">\" + relatedPostsHtml + \"</div>\\n        <a href=\\\"/\\\" class=\\\"more-tools-button\\\"><span class=\\\"label\\\">More Articles</span><span class=\\\"iconify\\\" data-icon=\\\"bi:arrow-right\\\"></span></a>\\n      </div>\\n    \";\r\n    };\r\n    RelatedPostSummaryListHtmlComponent.prototype.getRelatedPostsHtml = function () {\r\n        var res = '';\r\n        var currentUrl = window.location.pathname.replace('.html', '');\r\n        _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__.ArrayUtils.shuffle(window.jekyll.posts)\r\n            .filter(function (p) { return p.url != currentUrl; })\r\n            .slice(0, 5)\r\n            .forEach(function (post) {\r\n            res += new _related_post_summary_component__WEBPACK_IMPORTED_MODULE_2__.RelatedPostSummaryHtmlComponent(post).toHtml();\r\n        });\r\n        return res;\r\n    };\r\n    return RelatedPostSummaryListHtmlComponent;\r\n}(_component_interface__WEBPACK_IMPORTED_MODULE_1__.BaseStaticHtmlComponent));\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/typescript/components/related-post-summary-list.component.ts?");

/***/ }),

/***/ "./webpack/typescript/components/related-post-summary.component.ts":
/*!*************************************************************************!*\
  !*** ./webpack/typescript/components/related-post-summary.component.ts ***!
  \*************************************************************************/
/*! namespace exports */
/*! export RelatedPostSummaryHtmlComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RelatedPostSummaryHtmlComponent\": () => /* binding */ RelatedPostSummaryHtmlComponent\n/* harmony export */ });\n/* harmony import */ var _component_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.interface */ \"./webpack/typescript/components/component.interface.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar RelatedPostSummaryHtmlComponent = /** @class */ (function (_super) {\r\n    __extends(RelatedPostSummaryHtmlComponent, _super);\r\n    function RelatedPostSummaryHtmlComponent(relatedPost) {\r\n        var _this = _super.call(this) || this;\r\n        _this.relatedPost = relatedPost;\r\n        return _this;\r\n    }\r\n    RelatedPostSummaryHtmlComponent.prototype.toHtml = function () {\r\n        return /* html */ \"\\n        <a href=\\\"\" + this.relatedPost.url + \"\\\" class=\\\"related-post-summary\\\">\\n            \" + this.relatedPost.title + \"\\n        </a>\\n    \";\r\n    };\r\n    return RelatedPostSummaryHtmlComponent;\r\n}(_component_interface__WEBPACK_IMPORTED_MODULE_0__.BaseStaticHtmlComponent));\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/typescript/components/related-post-summary.component.ts?");

/***/ }),

/***/ "./webpack/utils/array-utils.ts":
/*!**************************************!*\
  !*** ./webpack/utils/array-utils.ts ***!
  \**************************************/
/*! namespace exports */
/*! export ArrayUtils [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArrayUtils\": () => /* binding */ ArrayUtils\n/* harmony export */ });\nvar ArrayUtils = /** @class */ (function () {\r\n    function ArrayUtils() {\r\n    }\r\n    ArrayUtils.equals = function (array1, array2) {\r\n        return JSON.stringify(array1) == JSON.stringify(array2);\r\n    };\r\n    ArrayUtils.notEquals = function (array1, array2) {\r\n        return !ArrayUtils.equals(array1, array2);\r\n    };\r\n    ArrayUtils.shuffle = function (array) {\r\n        var _a;\r\n        var currentIndex = array.length;\r\n        var randomIndex;\r\n        // While there remain elements to shuffle.\r\n        while (currentIndex != 0) {\r\n            // Pick a remaining element.\r\n            randomIndex = Math.floor(Math.random() * currentIndex);\r\n            currentIndex--;\r\n            // And swap it with the current element.\r\n            _a = [array[randomIndex], array[currentIndex]], array[currentIndex] = _a[0], array[randomIndex] = _a[1];\r\n        }\r\n        return array;\r\n    };\r\n    return ArrayUtils;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/utils/array-utils.ts?");

/***/ }),

/***/ "./webpack/utils/page-utils.ts":
/*!*************************************!*\
  !*** ./webpack/utils/page-utils.ts ***!
  \*************************************/
/*! namespace exports */
/*! export BODY_CLASS_LIST_LOCAL_STORAGE_KEY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BODY_CLASS_LIST_LOCAL_STORAGE_KEY\": () => /* binding */ BODY_CLASS_LIST_LOCAL_STORAGE_KEY,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _typescript_components_cookies_consentement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typescript/components/cookies-consentement.component */ \"./webpack/typescript/components/cookies-consentement.component.ts\");\n/* harmony import */ var _typescript_components_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typescript/components/footer.component */ \"./webpack/typescript/components/footer.component.ts\");\n/* harmony import */ var _typescript_components_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typescript/components/navbar.component */ \"./webpack/typescript/components/navbar.component.ts\");\n/* harmony import */ var gifffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gifffer */ \"./node_modules/gifffer/build/gifffer.min.js\");\n/* harmony import */ var gifffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gifffer__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\nvar BODY_CLASS_LIST_LOCAL_STORAGE_KEY = 'body-class-list-local-storage-key-v1.0';\r\nvar PageUtils = /** @class */ (function () {\r\n    function PageUtils() {\r\n    }\r\n    PageUtils.resetBodyClassList = function () {\r\n        document.body.classList.value = localStorage.getItem(BODY_CLASS_LIST_LOCAL_STORAGE_KEY) || 'light';\r\n    };\r\n    PageUtils.insertNavbar = function (component) {\r\n        if (component === void 0) { component = new _typescript_components_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarHtmlComponent(); }\r\n        component.insert(document.body, 'afterbegin');\r\n    };\r\n    PageUtils.insertFooter = function (component) {\r\n        if (component === void 0) { component = new _typescript_components_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterHtmlComponent(); }\r\n        component.insert(document.body, 'beforeend');\r\n    };\r\n    PageUtils.insertPrivacyPolicyConsentement = function () {\r\n        new _typescript_components_cookies_consentement_component__WEBPACK_IMPORTED_MODULE_0__.CookiesConsentementHtmlComponent().insert(document.body, 'beforeend');\r\n    };\r\n    PageUtils.hideLoader = function () {\r\n        var maxDuration = 1750;\r\n        var duration = new Date().getTime() - window.startTime;\r\n        var timeout = maxDuration - duration > 0 ? maxDuration - duration : 0;\r\n        setTimeout(function () {\r\n            document.querySelector('.loader').classList.add('hide');\r\n            document.querySelector('#app').classList.remove('on-loading');\r\n        }, timeout);\r\n    };\r\n    PageUtils.giffer = function () {\r\n        gifffer__WEBPACK_IMPORTED_MODULE_3___default()({\r\n            playButtonStyles: {\r\n                width: '60px',\r\n                height: '60px',\r\n                'border-radius': '30px',\r\n                background: 'rgba(0, 0, 0, 0.15)',\r\n                position: 'absolute',\r\n                top: '50%',\r\n                left: '50%',\r\n                margin: '-30px 0 0 -30px',\r\n            },\r\n            playButtonIconStyles: {\r\n                width: '0',\r\n                height: '0',\r\n                'border-top': '14px solid transparent',\r\n                'border-bottom': '14px solid transparent',\r\n                'border-left': '14px solid rgba(0, 0, 0, 0.35)',\r\n                position: 'absolute',\r\n                left: '26px',\r\n                top: '16px',\r\n            },\r\n        });\r\n        setTimeout(function () {\r\n            var gifs = document.querySelectorAll('.gifffer-play-button');\r\n            gifs.forEach(function (gif) { return gif.click(); });\r\n        }, 1000);\r\n    };\r\n    return PageUtils;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageUtils);\r\n\n\n//# sourceURL=webpack://devknowledge.github.io/./webpack/utils/page-utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./webpack/post.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;