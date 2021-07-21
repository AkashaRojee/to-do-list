/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@0;1&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flex-row, .flex-col {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.fill {\n  flex-grow: 1;\n}\n\n.container button,\n.container input,\n.container li,\n.container span {\n  list-style: none;\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 16px;\n}\n\n.container {\n  width: 85%;\n  margin: 50px auto;\n  border: 1px solid grey;\n  box-shadow: 0 5px 10px grey;\n}\n.container .material-icons {\n  font-size: inherit;\n  color: grey;\n}\n.container .material-icons:hover {\n  color: black;\n  cursor: pointer;\n}\n.container .drag:hover {\n  color: black;\n  cursor: move;\n}\n.container .pointer:hover {\n  color: black;\n  cursor: pointer;\n}\n.container > div,\n.container li {\n  padding: 10px;\n  border-bottom: 1px solid grey;\n}\n.container > div,\n.container li,\n.container > button {\n  min-height: 40px;\n}\n.container button {\n  color: grey;\n}\n.container .btn-clear:hover {\n  text-decoration: underline;\n}\n.container input {\n  font-style: italic;\n  color: grey;\n  margin-right: 10px;\n}\n.container span {\n  margin-right: 10px;\n}\n.container span:hover {\n  cursor: default;\n}\n.container span:focus-within {\n  cursor: text;\n}", "",{"version":3,"sources":["webpack://./src/scss/_flex.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_custom.scss"],"names":[],"mappings":"AAYA;EACE,aAAA;ACVF;;ADaA;EAfE,sBAkBwC;ACZ1C;;ADeA;EArBE,mBAwBwC;ACd1C;;ADiBA;EAvBE,8BAwBoC;ACdtC;;ADiBA;EA3BE,uBA4BoC;ACdtC;;ADiBA;EA3BE,mBA4BgC;ACdlC;;ADiBA;EACE,YAAA;ACdF;;AC3BA;;;;EACE,gBAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;ADiCF;;AAjCA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,uCAAA;EACA,eAAA;AAoCF;;AA/BA;EACE,UAAA;EACA,iBAAA;EACA,sBALe;EAMf,2BAAA;AAkCF;AAhCE;EACE,kBAAA;EACA,WAAA;AAkCJ;AAhCI;EACE,YAAA;EACA,eAAA;AAkCN;AA7BI;EACE,YAAA;EACA,YAAA;AA+BN;AA1BI;EACE,YAAA;EACA,eAAA;AA4BN;AAxBE;;EAEE,aAAA;EACA,6BAnCa;AA6DjB;AAvBE;;;EAGE,gBAAA;AAyBJ;AAfE;EACE,WAAA;AAiBJ;AAbI;EACE,0BAAA;AAeN;AAXE;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;AAaJ;AAVE;EACE,kBAAA;AAYJ;AAVI;EACE,eAAA;AAYN;AATI;EACE,YAAA;AAWN","sourcesContent":["@mixin direction($direction-property) {\n  flex-direction: $direction-property;\n}\n\n@mixin justify($justify-property) {\n  justify-content: $justify-property;\n}\n\n@mixin align($align-property) {\n  align-items: $align-property;\n}\n\n%flex {\n  display: flex;\n}\n\n.flex-col {\n  @extend %flex;\n\n  @include direction($direction-property: column);\n}\n\n.flex-row {\n  @extend %flex;\n\n  @include direction($direction-property: row);\n}\n\n.space-between {\n  @include justify($justify-property: space-between);\n}\n\n.justify-center {\n  @include justify($justify-property: center);\n}\n\n.align-center {\n  @include align($align-property: center);\n}\n\n.fill {\n  flex-grow: 1;\n}\n","@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@0;1&display=swap');\n@import 'flex.scss';\n@import 'custom.scss';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 16px;\n}\n\n$default-border: 1px solid grey;\n\n.container {\n  width: 85%;\n  margin: 50px auto;\n  border: $default-border;\n  box-shadow: 0 5px 10px grey;\n\n  .material-icons {\n    font-size: inherit;\n    color: grey;\n\n    &:hover {\n      color: black;\n      cursor: pointer;\n    }\n  }\n\n  .drag {\n    &:hover {\n      color: black;\n      cursor: move;\n    }\n  }\n\n  .pointer {\n    &:hover {\n      color: black;\n      cursor: pointer;\n    }\n  }\n\n  > div,\n  li {\n    padding: 10px;\n    border-bottom: $default-border;\n  }\n\n  > div,\n  li,\n  > button {\n    min-height: 40px;\n  }\n\n  button,\n  input,\n  li,\n  span {\n    @extend %minimal;\n  }\n\n  button {\n    color: grey;\n  }\n\n  .btn-clear {\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  input {\n    font-style: italic;\n    color: grey;\n    margin-right: 10px;\n  }\n\n  span {\n    margin-right: 10px;\n\n    &:hover {\n      cursor: default;\n    }\n\n    &:focus-within {\n      cursor: text;\n    }\n  }\n}\n","%minimal {\n  list-style: none;\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/CRUD.js":
/*!************************!*\
  !*** ./src/js/CRUD.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CRUD)
/* harmony export */ });
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ "./src/js/library.js");
/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage.js */ "./src/js/LocalStorage.js");



class CRUD {
  constructor() {
    this.textbox = document.querySelector('input[type="text"]');
    this.addButton = this.textbox.nextElementSibling;
    this.spans = document.querySelectorAll('span');
    this.deleteButton = '';
    this.clearButton = document.querySelector('.btn-clear');
  }

  setListeners(toDoList, checkboxList, drag) {
    this.textbox.addEventListener(
      'keydown',
      (e) => this.addNewTask(e, toDoList, checkboxList, drag),
    );

    this.addButton.addEventListener(
      'click',
      (e) => this.addNewTask(e, toDoList, checkboxList, drag),
    );

    this.setSpans();
    (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.addListeners)(
      this.spans,
      {
        focusin: (e) => this.toggleDeleteButton(e),
        focusout: (e) => this.editTask(e, toDoList, checkboxList, drag),
      },
    );

    this.clearButton.addEventListener(
      'click',
      () => this.clearCompleted(toDoList, checkboxList, drag),
    );
  }

  addNewTask(e, toDoList, checkboxList, drag) {
    if (this.textbox.value !== '' && (
      (e.type === 'keydown' && e.key === 'Enter') || (e.type === 'click'))) {
      toDoList.add(this.textbox.value, false, toDoList.tasks.length + 1);
      _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.update(toDoList.tasks);
      toDoList.populate();
      this.addAllListeners(toDoList, checkboxList, drag);
      e.stopImmediatePropagation();
      this.textbox.value = '';
    }
  }

  toggleDeleteButton(e) {
    if (e.type !== '') this.deleteButton = e.target.parentNode.nextSibling;
    this.deleteButton.innerHTML = (e.type === 'focusin' ? 'delete' : 'more_vert');
    this.deleteButton.classList.toggle('pointer');
  }

  editTask(e, toDoList, checkboxList, drag) {
    if (e.relatedTarget === this.deleteButton) {
      toDoList.deleteTask(Array.prototype.indexOf.call(this.spans, e.target));
      this.refresh(toDoList, checkboxList, drag);
    } else {
      this.toggleDeleteButton(e);

      toDoList.updateTask(
        Array.prototype.indexOf.call(this.spans, e.target),
        'description',
        e.target.innerHTML,
      );
    }
  }

  clearCompleted(toDoList, checkboxList, drag) {
    toDoList.filterTasks();
    this.refresh(toDoList, checkboxList, drag);
  }

  refresh(toDoList, checkboxList, drag) {
    toDoList
      .populate()
      .reOrder();
    this.addAllListeners(toDoList, checkboxList, drag);
  }

  addAllListeners(toDoList, checkboxList, drag) {
    checkboxList.setListeners(toDoList);
    drag.setListeners(toDoList, checkboxList, this);
    this.setSpans();
    this.setListeners(toDoList, checkboxList, drag);
  }

  setSpans() {
    this.spans = document.querySelectorAll('span');
  }
}

/***/ }),

/***/ "./src/js/CheckboxList.js":
/*!********************************!*\
  !*** ./src/js/CheckboxList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckboxList)
/* harmony export */ });
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ "./src/js/library.js");


class CheckboxList {
  constructor() {
    this.checkboxes = document.querySelectorAll('li input');
  }

  setListeners(toDoList) {
    this.setCheckboxes();
    (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.addListeners)(
      this.checkboxes,
      {
        change: (e) => this.changeStatus(e, toDoList),
      },
    );
    return this;
  }

  changeStatus(e, toDoList) {
    toDoList.updateTask(
      Array.prototype.indexOf.call(this.checkboxes, e.target),
      'completed',
      e.target.checked,
    );
  }

  setCheckboxes() {
    this.checkboxes = document.querySelectorAll('li input');
    return this;
  }
}

/***/ }),

/***/ "./src/js/Drag.js":
/*!************************!*\
  !*** ./src/js/Drag.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Drag)
/* harmony export */ });
/* harmony import */ var _DragData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragData.js */ "./src/js/DragData.js");
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.js */ "./src/js/library.js");



function updateTarget(target, source) {
  target.innerHTML = source.innerHTML;
  target.querySelector('input').checked = source.checked;
}

class Drag {
  constructor() {
    this.prevTarget = '';
    this.draggedInnerHTML = '';
    this.draggedCheck = '';
  }

  setListeners(toDoList, checkboxList, crud) {
    (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.addListeners)(
      toDoList.listItems,
      {
        dragstart: (e) => this.start(e, crud),
        dragover: (e) => this.over(e),
        drop: (e) => Drag.drop(e),
        dragend: (e) => this.end(e, toDoList, checkboxList, crud),
      },
    );
  }

  start(e, crud) {
    if (e.target.querySelector('button').innerHTML === 'delete') crud.toggleDeleteButton(new Event(''));
    this.setPrevTarget(e.target);
    e.dataTransfer.setData(
      'attributes',
      JSON.stringify(new _DragData_js__WEBPACK_IMPORTED_MODULE_0__.default(e.target.innerHTML, e.target.querySelector('input').checked)),
    );
    this.setDraggedData(e.target.innerHTML, e.target.querySelector('input').checked);
  }

  over(e) {
    let currTarget;

    if (e.target.parentNode.tagName === 'LI') currTarget = e.target.parentNode;
    else if (e.target.parentNode.tagName === 'DIV') currTarget = e.target.parentNode.parentNode;
    else currTarget = e.target;

    // if dragging over new target, shift current content to previous target,
    // and empty current content
    if (this.prevTarget !== currTarget) {
      updateTarget(
        this.prevTarget,
        new _DragData_js__WEBPACK_IMPORTED_MODULE_0__.default(currTarget.innerHTML, currTarget.querySelector('input').checked),
      );

      currTarget.innerHTML = '';
    }

    this.setPrevTarget(currTarget);
    e.preventDefault(); // to allow drop at this location
  }

  static drop(e) {
    const dataTransfer = JSON.parse(e.dataTransfer.getData('attributes'));

    updateTarget(
      e.target,
      new _DragData_js__WEBPACK_IMPORTED_MODULE_0__.default(dataTransfer.innerHTML, dataTransfer.checked === true),
    );
  }

  // in case list item is dropped outside of list
  end(e, toDoList, checkboxList, crud) {
    if (this.prevTarget.innerHTML === '') {
      updateTarget(
        this.prevTarget,
        new _DragData_js__WEBPACK_IMPORTED_MODULE_0__.default(this.draggedInnerHTML, this.draggedCheck === true),
      );
    }

    toDoList.reOrder();
    checkboxList
      .setCheckboxes()
      .setListeners(toDoList);
    crud.setListeners(toDoList, checkboxList, this);
  }

  setPrevTarget(element) {
    this.prevTarget = element;
  }

  setDraggedData(innerHTML, checked) {
    this.draggedInnerHTML = innerHTML;
    this.draggedCheck = checked;
  }
}

/***/ }),

/***/ "./src/js/DragData.js":
/*!****************************!*\
  !*** ./src/js/DragData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragData)
/* harmony export */ });
class DragData {
  constructor(innerHTML, checked) {
    this.innerHTML = innerHTML;
    this.checked = checked;
  }
}

/***/ }),

/***/ "./src/js/LocalStorage.js":
/*!********************************!*\
  !*** ./src/js/LocalStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorage)
/* harmony export */ });
class LocalStorage {
  constructor() {
    this.length = (LocalStorage.fetch() === null ? 0 : 1);
  }

  static fetch() {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  static update(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

/***/ }),

/***/ "./src/js/Task.js":
/*!************************!*\
  !*** ./src/js/Task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

/***/ }),

/***/ "./src/js/ToDoList.js":
/*!****************************!*\
  !*** ./src/js/ToDoList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/js/Task.js");
/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage.js */ "./src/js/LocalStorage.js");
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library.js */ "./src/js/library.js");




class ToDoList {
  constructor() {
    this.tasks = [];
    this.list = document.querySelector('ul');
    this.listItems = document.querySelectorAll('li');
    this.ls = new _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.default();
  }

  init() {
    if (this.ls.length > 0) {
      _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.fetch().forEach((task) => {
        this.add(task.description, task.completed, task.index);
      });
      this.populate();
    }
  }

  add(description, completed, index) {
    this.tasks.push(new _Task_js__WEBPACK_IMPORTED_MODULE_0__.default(description, completed, index));
  }

  sort() {
    this.tasks.sort((a, b) => a.index - b.index);
  }

  populate() {
    this.list.innerHTML = '';
    this.tasks
      .map((task) => [task.description, task.completed])
      .forEach(([description, completed]) => this.appendListItem(description, completed));
    this.setListItems();
  }

  appendListItem(description, completed) {
    const listItem = (0,_library_js__WEBPACK_IMPORTED_MODULE_2__.createElement)('li', 'flex-row space-between align-center', { draggable: true });
    const checkboxContainer = (0,_library_js__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', 'flex-row align-center fill');
    checkboxContainer.append(
      (0,_library_js__WEBPACK_IMPORTED_MODULE_2__.createElement)('input', '', { type: 'checkbox' }, '', { checked: completed }),
      (0,_library_js__WEBPACK_IMPORTED_MODULE_2__.createElement)('span', 'fill', { contenteditable: true }, description),
    );
    listItem.append(
      checkboxContainer,
      (0,_library_js__WEBPACK_IMPORTED_MODULE_2__.createElement)('button', 'material-icons drag', {}, 'more_vert'),
    );
    this.list.append(listItem);
  }

  setListItems() {
    this.listItems = document.querySelectorAll('li');
  }

  clear() {
    this.tasks = [];
  }

  reOrder() {
    this.clear();

    this.listItems.forEach((listItem, index) => {
      this.add(
        listItem.querySelector('span').innerHTML,
        listItem.querySelector('input').checked,
        index + 1,
      );
    });

    _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.update(this.tasks);
  }

  updateTask(index, property, value) {
    this.tasks[index][property] = value;
    _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.update(this.tasks);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  filterTasks() {
    this.tasks = this.tasks.filter((task) => task.completed === false);
  }
}

/***/ }),

/***/ "./src/js/library.js":
/*!***************************!*\
  !*** ./src/js/library.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "addListeners": () => (/* binding */ addListeners)
/* harmony export */ });
function createElement(elementType, classNames = '', attributes = {}, innerHTML = '', properties = {}) {
  const elementObject = document.createElement(elementType);
  if (classNames) elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach((attribute) => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  Object.keys(properties).forEach((property) => {
    elementObject[property] = properties[property];
  });
  elementObject.innerHTML = innerHTML;
  return elementObject;
}

function addListeners(elements, listeners) {
  elements.forEach((element) => {
    Object.entries(listeners).forEach(([event, listener]) => {
      element.addEventListener(event, listener);
    });
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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _ToDoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoList.js */ "./src/js/ToDoList.js");
/* harmony import */ var _CheckboxList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckboxList.js */ "./src/js/CheckboxList.js");
/* harmony import */ var _Drag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Drag.js */ "./src/js/Drag.js");
/* harmony import */ var _CRUD_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CRUD.js */ "./src/js/CRUD.js");






let toDoList;
let checkboxList;
let drag;
let crud;

function initList() {
  toDoList.init();
}

function initCheckboxEvents() {
  checkboxList.setListeners(toDoList);
}

function initDragEvents() {
  drag.setListeners(toDoList, checkboxList, crud);
}

function initCRUD() {
  crud.setListeners(toDoList, checkboxList, drag);
}

function initObjects() {
  toDoList = new _ToDoList_js__WEBPACK_IMPORTED_MODULE_1__.default();
  checkboxList = new _CheckboxList_js__WEBPACK_IMPORTED_MODULE_2__.default();
  drag = new _Drag_js__WEBPACK_IMPORTED_MODULE_3__.default();
  crud = new _CRUD_js__WEBPACK_IMPORTED_MODULE_4__.default();
}

function init() {
  initObjects();
  initList();
  initCheckboxEvents();
  initDragEvents();
  initCRUD();
}

new Promise((resolve) => window.addEventListener('load', resolve)).then(() => init());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvQ1JVRC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0NoZWNrYm94TGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0RyYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9EcmFnRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLG1IQUFt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V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNTO0FBQ1E7QUFDaEI7QUFDQTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGlEQUFRO0FBQ3pCLHFCQUFxQixxREFBWTtBQUNqQyxhQUFhLDZDQUFJO0FBQ2pCLGFBQWEsNkNBQUk7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0YiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWxAMDsxJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mbGV4LXJvdywgLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnNwYWNlLWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZpbGwge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uY29udGFpbmVyIGJ1dHRvbixcXG4uY29udGFpbmVyIGlucHV0LFxcbi5jb250YWluZXIgbGksXFxuLmNvbnRhaW5lciBzcGFuIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggZ3JleTtcXG59XFxuLmNvbnRhaW5lciAubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5jb250YWluZXIgLm1hdGVyaWFsLWljb25zOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbnRhaW5lciAuZHJhZzpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbi5jb250YWluZXIgLnBvaW50ZXI6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29udGFpbmVyID4gZGl2LFxcbi5jb250YWluZXIgbGkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbn1cXG4uY29udGFpbmVyID4gZGl2LFxcbi5jb250YWluZXIgbGksXFxuLmNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuLmNvbnRhaW5lciAuYnRuLWNsZWFyOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uY29udGFpbmVyIGlucHV0IHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiBncmV5O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY29udGFpbmVyIHNwYW4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY29udGFpbmVyIHNwYW46aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uY29udGFpbmVyIHNwYW46Zm9jdXMtd2l0aGluIHtcXG4gIGN1cnNvcjogdGV4dDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvX2ZsZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2N1c3RvbS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVlBO0VBQ0UsYUFBQTtBQ1ZGOztBRGFBO0VBZkUsc0JBa0J3QztBQ1oxQzs7QURlQTtFQXJCRSxtQkF3QndDO0FDZDFDOztBRGlCQTtFQXZCRSw4QkF3Qm9DO0FDZHRDOztBRGlCQTtFQTNCRSx1QkE0Qm9DO0FDZHRDOztBRGlCQTtFQTNCRSxtQkE0QmdDO0FDZGxDOztBRGlCQTtFQUNFLFlBQUE7QUNkRjs7QUMzQkE7Ozs7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QURpQ0Y7O0FBakNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtBQW9DRjs7QUEvQkE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFMZTtFQU1mLDJCQUFBO0FBa0NGO0FBaENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBa0NKO0FBaENJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFrQ047QUE3Qkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQStCTjtBQTFCSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBNEJOO0FBeEJFOztFQUVFLGFBQUE7RUFDQSw2QkFuQ2E7QUE2RGpCO0FBdkJFOzs7RUFHRSxnQkFBQTtBQXlCSjtBQWZFO0VBQ0UsV0FBQTtBQWlCSjtBQWJJO0VBQ0UsMEJBQUE7QUFlTjtBQVhFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFhSjtBQVZFO0VBQ0Usa0JBQUE7QUFZSjtBQVZJO0VBQ0UsZUFBQTtBQVlOO0FBVEk7RUFDRSxZQUFBO0FBV05cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIGRpcmVjdGlvbigkZGlyZWN0aW9uLXByb3BlcnR5KSB7XFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbi1wcm9wZXJ0eTtcXG59XFxuXFxuQG1peGluIGp1c3RpZnkoJGp1c3RpZnktcHJvcGVydHkpIHtcXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktcHJvcGVydHk7XFxufVxcblxcbkBtaXhpbiBhbGlnbigkYWxpZ24tcHJvcGVydHkpIHtcXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24tcHJvcGVydHk7XFxufVxcblxcbiVmbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBAZXh0ZW5kICVmbGV4O1xcblxcbiAgQGluY2x1ZGUgZGlyZWN0aW9uKCRkaXJlY3Rpb24tcHJvcGVydHk6IGNvbHVtbik7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBAZXh0ZW5kICVmbGV4O1xcblxcbiAgQGluY2x1ZGUgZGlyZWN0aW9uKCRkaXJlY3Rpb24tcHJvcGVydHk6IHJvdyk7XFxufVxcblxcbi5zcGFjZS1iZXR3ZWVuIHtcXG4gIEBpbmNsdWRlIGp1c3RpZnkoJGp1c3RpZnktcHJvcGVydHk6IHNwYWNlLWJldHdlZW4pO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAgQGluY2x1ZGUganVzdGlmeSgkanVzdGlmeS1wcm9wZXJ0eTogY2VudGVyKTtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBAaW5jbHVkZSBhbGlnbigkYWxpZ24tcHJvcGVydHk6IGNlbnRlcik7XFxufVxcblxcbi5maWxsIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbEAwOzEmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCAnZmxleC5zY3NzJztcXG5AaW1wb3J0ICdjdXN0b20uc2Nzcyc7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuJGRlZmF1bHQtYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJvcmRlcjogJGRlZmF1bHQtYm9yZGVyO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCBncmV5O1xcblxcbiAgLm1hdGVyaWFsLWljb25zIHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjb2xvcjogZ3JleTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRyYWcge1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgY3Vyc29yOiBtb3ZlO1xcbiAgICB9XFxuICB9XFxuXFxuICAucG9pbnRlciB7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gID4gZGl2LFxcbiAgbGkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAkZGVmYXVsdC1ib3JkZXI7XFxuICB9XFxuXFxuICA+IGRpdixcXG4gIGxpLFxcbiAgPiBidXR0b24ge1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgfVxcblxcbiAgYnV0dG9uLFxcbiAgaW5wdXQsXFxuICBsaSxcXG4gIHNwYW4ge1xcbiAgICBAZXh0ZW5kICVtaW5pbWFsO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICB9XFxuXFxuICAuYnRuLWNsZWFyIHtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGlucHV0IHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgc3BhbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuICAgICY6Zm9jdXMtd2l0aGluIHtcXG4gICAgICBjdXJzb3I6IHRleHQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIlbWluaW1hbCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhZGRMaXN0ZW5lcnMgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL0xvY2FsU3RvcmFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENSVUQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRleHRib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xuICAgIHRoaXMuYWRkQnV0dG9uID0gdGhpcy50ZXh0Ym94Lm5leHRFbGVtZW50U2libGluZztcbiAgICB0aGlzLnNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uID0gJyc7XG4gICAgdGhpcy5jbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xlYXInKTtcbiAgfVxuXG4gIHNldExpc3RlbmVycyh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSB7XG4gICAgdGhpcy50ZXh0Ym94LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAna2V5ZG93bicsXG4gICAgICAoZSkgPT4gdGhpcy5hZGROZXdUYXNrKGUsIHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpLFxuICAgICk7XG5cbiAgICB0aGlzLmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIChlKSA9PiB0aGlzLmFkZE5ld1Rhc2soZSwgdG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyksXG4gICAgKTtcblxuICAgIHRoaXMuc2V0U3BhbnMoKTtcbiAgICBhZGRMaXN0ZW5lcnMoXG4gICAgICB0aGlzLnNwYW5zLFxuICAgICAge1xuICAgICAgICBmb2N1c2luOiAoZSkgPT4gdGhpcy50b2dnbGVEZWxldGVCdXR0b24oZSksXG4gICAgICAgIGZvY3Vzb3V0OiAoZSkgPT4gdGhpcy5lZGl0VGFzayhlLCB0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHRoaXMuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICAoKSA9PiB0aGlzLmNsZWFyQ29tcGxldGVkKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpLFxuICAgICk7XG4gIH1cblxuICBhZGROZXdUYXNrKGUsIHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpIHtcbiAgICBpZiAodGhpcy50ZXh0Ym94LnZhbHVlICE9PSAnJyAmJiAoXG4gICAgICAoZS50eXBlID09PSAna2V5ZG93bicgJiYgZS5rZXkgPT09ICdFbnRlcicpIHx8IChlLnR5cGUgPT09ICdjbGljaycpKSkge1xuICAgICAgdG9Eb0xpc3QuYWRkKHRoaXMudGV4dGJveC52YWx1ZSwgZmFsc2UsIHRvRG9MaXN0LnRhc2tzLmxlbmd0aCArIDEpO1xuICAgICAgTG9jYWxTdG9yYWdlLnVwZGF0ZSh0b0RvTGlzdC50YXNrcyk7XG4gICAgICB0b0RvTGlzdC5wb3B1bGF0ZSgpO1xuICAgICAgdGhpcy5hZGRBbGxMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50ZXh0Ym94LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRGVsZXRlQnV0dG9uKGUpIHtcbiAgICBpZiAoZS50eXBlICE9PSAnJykgdGhpcy5kZWxldGVCdXR0b24gPSBlLnRhcmdldC5wYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IChlLnR5cGUgPT09ICdmb2N1c2luJyA/ICdkZWxldGUnIDogJ21vcmVfdmVydCcpO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3BvaW50ZXInKTtcbiAgfVxuXG4gIGVkaXRUYXNrKGUsIHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpIHtcbiAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ID09PSB0aGlzLmRlbGV0ZUJ1dHRvbikge1xuICAgICAgdG9Eb0xpc3QuZGVsZXRlVGFzayhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMuc3BhbnMsIGUudGFyZ2V0KSk7XG4gICAgICB0aGlzLnJlZnJlc2godG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRGVsZXRlQnV0dG9uKGUpO1xuXG4gICAgICB0b0RvTGlzdC51cGRhdGVUYXNrKFxuICAgICAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMuc3BhbnMsIGUudGFyZ2V0KSxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjbGVhckNvbXBsZXRlZCh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSB7XG4gICAgdG9Eb0xpc3QuZmlsdGVyVGFza3MoKTtcbiAgICB0aGlzLnJlZnJlc2godG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG4gIH1cblxuICByZWZyZXNoKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpIHtcbiAgICB0b0RvTGlzdFxuICAgICAgLnBvcHVsYXRlKClcbiAgICAgIC5yZU9yZGVyKCk7XG4gICAgdGhpcy5hZGRBbGxMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG4gIH1cblxuICBhZGRBbGxMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZykge1xuICAgIGNoZWNrYm94TGlzdC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QpO1xuICAgIGRyYWcuc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIHRoaXMpO1xuICAgIHRoaXMuc2V0U3BhbnMoKTtcbiAgICB0aGlzLnNldExpc3RlbmVycyh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKTtcbiAgfVxuXG4gIHNldFNwYW5zKCkge1xuICAgIHRoaXMuc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG4gIH1cbn0iLCJpbXBvcnQgeyBhZGRMaXN0ZW5lcnMgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaSBpbnB1dCcpO1xuICB9XG5cbiAgc2V0TGlzdGVuZXJzKHRvRG9MaXN0KSB7XG4gICAgdGhpcy5zZXRDaGVja2JveGVzKCk7XG4gICAgYWRkTGlzdGVuZXJzKFxuICAgICAgdGhpcy5jaGVja2JveGVzLFxuICAgICAge1xuICAgICAgICBjaGFuZ2U6IChlKSA9PiB0aGlzLmNoYW5nZVN0YXR1cyhlLCB0b0RvTGlzdCksXG4gICAgICB9LFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGFuZ2VTdGF0dXMoZSwgdG9Eb0xpc3QpIHtcbiAgICB0b0RvTGlzdC51cGRhdGVUYXNrKFxuICAgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLmNoZWNrYm94ZXMsIGUudGFyZ2V0KSxcbiAgICAgICdjb21wbGV0ZWQnLFxuICAgICAgZS50YXJnZXQuY2hlY2tlZCxcbiAgICApO1xuICB9XG5cbiAgc2V0Q2hlY2tib3hlcygpIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaSBpbnB1dCcpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59IiwiaW1wb3J0IERyYWdEYXRhIGZyb20gJy4vRHJhZ0RhdGEuanMnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXJzIH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcblxuZnVuY3Rpb24gdXBkYXRlVGFyZ2V0KHRhcmdldCwgc291cmNlKSB7XG4gIHRhcmdldC5pbm5lckhUTUwgPSBzb3VyY2UuaW5uZXJIVE1MO1xuICB0YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gc291cmNlLmNoZWNrZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByZXZUYXJnZXQgPSAnJztcbiAgICB0aGlzLmRyYWdnZWRJbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmRyYWdnZWRDaGVjayA9ICcnO1xuICB9XG5cbiAgc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGNydWQpIHtcbiAgICBhZGRMaXN0ZW5lcnMoXG4gICAgICB0b0RvTGlzdC5saXN0SXRlbXMsXG4gICAgICB7XG4gICAgICAgIGRyYWdzdGFydDogKGUpID0+IHRoaXMuc3RhcnQoZSwgY3J1ZCksXG4gICAgICAgIGRyYWdvdmVyOiAoZSkgPT4gdGhpcy5vdmVyKGUpLFxuICAgICAgICBkcm9wOiAoZSkgPT4gRHJhZy5kcm9wKGUpLFxuICAgICAgICBkcmFnZW5kOiAoZSkgPT4gdGhpcy5lbmQoZSwgdG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgY3J1ZCksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBzdGFydChlLCBjcnVkKSB7XG4gICAgaWYgKGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmlubmVySFRNTCA9PT0gJ2RlbGV0ZScpIGNydWQudG9nZ2xlRGVsZXRlQnV0dG9uKG5ldyBFdmVudCgnJykpO1xuICAgIHRoaXMuc2V0UHJldlRhcmdldChlLnRhcmdldCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcbiAgICAgICdhdHRyaWJ1dGVzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KG5ldyBEcmFnRGF0YShlLnRhcmdldC5pbm5lckhUTUwsIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCkpLFxuICAgICk7XG4gICAgdGhpcy5zZXREcmFnZ2VkRGF0YShlLnRhcmdldC5pbm5lckhUTUwsIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCk7XG4gIH1cblxuICBvdmVyKGUpIHtcbiAgICBsZXQgY3VyclRhcmdldDtcblxuICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLnRhZ05hbWUgPT09ICdMSScpIGN1cnJUYXJnZXQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ0RJVicpIGN1cnJUYXJnZXQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgZWxzZSBjdXJyVGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAvLyBpZiBkcmFnZ2luZyBvdmVyIG5ldyB0YXJnZXQsIHNoaWZ0IGN1cnJlbnQgY29udGVudCB0byBwcmV2aW91cyB0YXJnZXQsXG4gICAgLy8gYW5kIGVtcHR5IGN1cnJlbnQgY29udGVudFxuICAgIGlmICh0aGlzLnByZXZUYXJnZXQgIT09IGN1cnJUYXJnZXQpIHtcbiAgICAgIHVwZGF0ZVRhcmdldChcbiAgICAgICAgdGhpcy5wcmV2VGFyZ2V0LFxuICAgICAgICBuZXcgRHJhZ0RhdGEoY3VyclRhcmdldC5pbm5lckhUTUwsIGN1cnJUYXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkKSxcbiAgICAgICk7XG5cbiAgICAgIGN1cnJUYXJnZXQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQcmV2VGFyZ2V0KGN1cnJUYXJnZXQpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gdG8gYWxsb3cgZHJvcCBhdCB0aGlzIGxvY2F0aW9uXG4gIH1cblxuICBzdGF0aWMgZHJvcChlKSB7XG4gICAgY29uc3QgZGF0YVRyYW5zZmVyID0gSlNPTi5wYXJzZShlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdhdHRyaWJ1dGVzJykpO1xuXG4gICAgdXBkYXRlVGFyZ2V0KFxuICAgICAgZS50YXJnZXQsXG4gICAgICBuZXcgRHJhZ0RhdGEoZGF0YVRyYW5zZmVyLmlubmVySFRNTCwgZGF0YVRyYW5zZmVyLmNoZWNrZWQgPT09IHRydWUpLFxuICAgICk7XG4gIH1cblxuICAvLyBpbiBjYXNlIGxpc3QgaXRlbSBpcyBkcm9wcGVkIG91dHNpZGUgb2YgbGlzdFxuICBlbmQoZSwgdG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgY3J1ZCkge1xuICAgIGlmICh0aGlzLnByZXZUYXJnZXQuaW5uZXJIVE1MID09PSAnJykge1xuICAgICAgdXBkYXRlVGFyZ2V0KFxuICAgICAgICB0aGlzLnByZXZUYXJnZXQsXG4gICAgICAgIG5ldyBEcmFnRGF0YSh0aGlzLmRyYWdnZWRJbm5lckhUTUwsIHRoaXMuZHJhZ2dlZENoZWNrID09PSB0cnVlKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdG9Eb0xpc3QucmVPcmRlcigpO1xuICAgIGNoZWNrYm94TGlzdFxuICAgICAgLnNldENoZWNrYm94ZXMoKVxuICAgICAgLnNldExpc3RlbmVycyh0b0RvTGlzdCk7XG4gICAgY3J1ZC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgdGhpcyk7XG4gIH1cblxuICBzZXRQcmV2VGFyZ2V0KGVsZW1lbnQpIHtcbiAgICB0aGlzLnByZXZUYXJnZXQgPSBlbGVtZW50O1xuICB9XG5cbiAgc2V0RHJhZ2dlZERhdGEoaW5uZXJIVE1MLCBjaGVja2VkKSB7XG4gICAgdGhpcy5kcmFnZ2VkSW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuZHJhZ2dlZENoZWNrID0gY2hlY2tlZDtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdEYXRhIHtcbiAgY29uc3RydWN0b3IoaW5uZXJIVE1MLCBjaGVja2VkKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGVuZ3RoID0gKExvY2FsU3RvcmFnZS5mZXRjaCgpID09PSBudWxsID8gMCA6IDEpO1xuICB9XG5cbiAgc3RhdGljIGZldGNoKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGUodGFza3MpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qcyc7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gJy4vTG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIHRoaXMubGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICB0aGlzLmxzID0gbmV3IExvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5scy5sZW5ndGggPiAwKSB7XG4gICAgICBMb2NhbFN0b3JhZ2UuZmV0Y2goKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkKHRhc2suZGVzY3JpcHRpb24sIHRhc2suY29tcGxldGVkLCB0YXNrLmluZGV4KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wb3B1bGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xuICAgIHRoaXMudGFza3MucHVzaChuZXcgVGFzayhkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkpO1xuICB9XG5cbiAgc29ydCgpIHtcbiAgICB0aGlzLnRhc2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgfVxuXG4gIHBvcHVsYXRlKCkge1xuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnRhc2tzXG4gICAgICAubWFwKCh0YXNrKSA9PiBbdGFzay5kZXNjcmlwdGlvbiwgdGFzay5jb21wbGV0ZWRdKVxuICAgICAgLmZvckVhY2goKFtkZXNjcmlwdGlvbiwgY29tcGxldGVkXSkgPT4gdGhpcy5hcHBlbmRMaXN0SXRlbShkZXNjcmlwdGlvbiwgY29tcGxldGVkKSk7XG4gICAgdGhpcy5zZXRMaXN0SXRlbXMoKTtcbiAgfVxuXG4gIGFwcGVuZExpc3RJdGVtKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ2ZsZXgtcm93IHNwYWNlLWJldHdlZW4gYWxpZ24tY2VudGVyJywgeyBkcmFnZ2FibGU6IHRydWUgfSk7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1yb3cgYWxpZ24tY2VudGVyIGZpbGwnKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmQoXG4gICAgICBjcmVhdGVFbGVtZW50KCdpbnB1dCcsICcnLCB7IHR5cGU6ICdjaGVja2JveCcgfSwgJycsIHsgY2hlY2tlZDogY29tcGxldGVkIH0pLFxuICAgICAgY3JlYXRlRWxlbWVudCgnc3BhbicsICdmaWxsJywgeyBjb250ZW50ZWRpdGFibGU6IHRydWUgfSwgZGVzY3JpcHRpb24pLFxuICAgICk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kKFxuICAgICAgY2hlY2tib3hDb250YWluZXIsXG4gICAgICBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnbWF0ZXJpYWwtaWNvbnMgZHJhZycsIHt9LCAnbW9yZV92ZXJ0JyksXG4gICAgKTtcbiAgICB0aGlzLmxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgfVxuXG4gIHNldExpc3RJdGVtcygpIHtcbiAgICB0aGlzLmxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICByZU9yZGVyKCkge1xuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMubGlzdEl0ZW1zLmZvckVhY2goKGxpc3RJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5hZGQoXG4gICAgICAgIGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lckhUTUwsXG4gICAgICAgIGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCxcbiAgICAgICAgaW5kZXggKyAxLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIExvY2FsU3RvcmFnZS51cGRhdGUodGhpcy50YXNrcyk7XG4gIH1cblxuICB1cGRhdGVUYXNrKGluZGV4LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICB0aGlzLnRhc2tzW2luZGV4XVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBMb2NhbFN0b3JhZ2UudXBkYXRlKHRoaXMudGFza3MpO1xuICB9XG5cbiAgZGVsZXRlVGFzayhpbmRleCkge1xuICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZpbHRlclRhc2tzKCkge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlLCBjbGFzc05hbWVzID0gJycsIGF0dHJpYnV0ZXMgPSB7fSwgaW5uZXJIVE1MID0gJycsIHByb3BlcnRpZXMgPSB7fSkge1xuICBjb25zdCBlbGVtZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gIGlmIChjbGFzc05hbWVzKSBlbGVtZW50T2JqZWN0LmNsYXNzTGlzdC5hZGQoLi4uKGNsYXNzTmFtZXMuc3BsaXQoJyAnKSkpO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICBlbGVtZW50T2JqZWN0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gIH0pO1xuICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGVsZW1lbnRPYmplY3RbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV07XG4gIH0pO1xuICBlbGVtZW50T2JqZWN0LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIGVsZW1lbnRPYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoZWxlbWVudHMsIGxpc3RlbmVycykge1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMobGlzdGVuZXJzKS5mb3JFYWNoKChbZXZlbnQsIGxpc3RlbmVyXSkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi9Ub0RvTGlzdC5qcyc7XG5pbXBvcnQgQ2hlY2tib3hMaXN0IGZyb20gJy4vQ2hlY2tib3hMaXN0LmpzJztcbmltcG9ydCBEcmFnIGZyb20gJy4vRHJhZy5qcyc7XG5pbXBvcnQgQ1JVRCBmcm9tICcuL0NSVUQuanMnO1xuXG5sZXQgdG9Eb0xpc3Q7XG5sZXQgY2hlY2tib3hMaXN0O1xubGV0IGRyYWc7XG5sZXQgY3J1ZDtcblxuZnVuY3Rpb24gaW5pdExpc3QoKSB7XG4gIHRvRG9MaXN0LmluaXQoKTtcbn1cblxuZnVuY3Rpb24gaW5pdENoZWNrYm94RXZlbnRzKCkge1xuICBjaGVja2JveExpc3Quc2V0TGlzdGVuZXJzKHRvRG9MaXN0KTtcbn1cblxuZnVuY3Rpb24gaW5pdERyYWdFdmVudHMoKSB7XG4gIGRyYWcuc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGNydWQpO1xufVxuXG5mdW5jdGlvbiBpbml0Q1JVRCgpIHtcbiAgY3J1ZC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG59XG5cbmZ1bmN0aW9uIGluaXRPYmplY3RzKCkge1xuICB0b0RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpO1xuICBjaGVja2JveExpc3QgPSBuZXcgQ2hlY2tib3hMaXN0KCk7XG4gIGRyYWcgPSBuZXcgRHJhZygpO1xuICBjcnVkID0gbmV3IENSVUQoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaW5pdE9iamVjdHMoKTtcbiAgaW5pdExpc3QoKTtcbiAgaW5pdENoZWNrYm94RXZlbnRzKCk7XG4gIGluaXREcmFnRXZlbnRzKCk7XG4gIGluaXRDUlVEKCk7XG59XG5cbm5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUpKS50aGVuKCgpID0+IGluaXQoKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==