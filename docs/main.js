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
/* harmony import */ var _SuperArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuperArray.js */ "./src/js/SuperArray.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ "./src/js/DOM.js");





class CRUD {
  constructor() {
    this.textbox = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.queryElement)(document, 'input[type="text"]');
    this.addButton = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.getNextElementSibling)(this.textbox);
    this.spans = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.queryElements)(document, 'span');
    this.deleteButton = '';
    this.clearButton = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.queryElement)(document, '.btn-clear');
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
    if ((0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.getValue)(this.textbox) !== '' && (
      (e.type === 'keydown' && e.key === 'Enter') || (e.type === 'click'))) {
      toDoList.add((0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.getValue)(this.textbox), false, toDoList.tasks.length + 1);
      _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.update(toDoList.tasks);
      toDoList.populate();
      this.addAllListeners(toDoList, checkboxList, drag);
      e.stopImmediatePropagation();
      (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.setValue)(this.textbox, '');
    }
  }

  toggleDeleteButton(e) {
    if (e.type !== '') this.deleteButton = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.getNextSibling)((0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.getParent)(e.target));
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.setInnerHTML)(this.deleteButton, (e.type === 'focusin' ? 'delete' : 'more_vert'));
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(this.deleteButton, 'pointer');
  }

  editTask(e, toDoList, checkboxList, drag) {
    const spanArray = new _SuperArray_js__WEBPACK_IMPORTED_MODULE_2__.default(...this.spans);
    if (e.relatedTarget === this.deleteButton) {
      toDoList.deleteTask(spanArray.indexOfElement(e.target));
      this.refresh(toDoList, checkboxList, drag);
    } else {
      this.toggleDeleteButton(e);

      toDoList.updateTask(
        spanArray.indexOfElement(e.target),
        'description',
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.getInnerHTML)(e.target),
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
    this.spans = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.queryElements)(document, 'span');
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
/* harmony import */ var _SuperArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuperArray.js */ "./src/js/SuperArray.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/js/DOM.js");




class CheckboxList {
  constructor() {
    this.checkboxes = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.queryElements)(document, 'li input');
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
    const checkboxArray = new _SuperArray_js__WEBPACK_IMPORTED_MODULE_1__.default(...this.checkboxes);
    toDoList.updateTask(
      checkboxArray.indexOfElement(e.target),
      'completed',
      (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.getChecked)(e.target),
    );
  }

  setCheckboxes() {
    this.checkboxes = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.queryElements)(document, 'li input');
    return this;
  }
}

/***/ }),

/***/ "./src/js/DOM.js":
/*!***********************!*\
  !*** ./src/js/DOM.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateTarget": () => (/* binding */ updateTarget),
/* harmony export */   "findParent": () => (/* binding */ findParent),
/* harmony export */   "getInnerHTML": () => (/* binding */ getInnerHTML),
/* harmony export */   "setInnerHTML": () => (/* binding */ setInnerHTML),
/* harmony export */   "queryElement": () => (/* binding */ queryElement),
/* harmony export */   "getChecked": () => (/* binding */ getChecked),
/* harmony export */   "queryElements": () => (/* binding */ queryElements),
/* harmony export */   "getValue": () => (/* binding */ getValue),
/* harmony export */   "setValue": () => (/* binding */ setValue),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "getParent": () => (/* binding */ getParent),
/* harmony export */   "getNextSibling": () => (/* binding */ getNextSibling),
/* harmony export */   "getNextElementSibling": () => (/* binding */ getNextElementSibling)
/* harmony export */ });
function updateTarget(target, source) {
  target.innerHTML = source.innerHTML;
  if (source.innerHTML !== '') target.querySelector('input').checked = source.checked;
}

function findParent(target) {
  if (target.parentNode.tagName === 'LI') return target.parentNode;
  if (target.parentNode.tagName === 'DIV') return target.parentNode.parentNode;
  return target;
}

function getInnerHTML(element) {
  return element.innerHTML;
}

function setInnerHTML(element, innerHTML) {
  element.innerHTML = innerHTML;
  return element;
}

function queryElement(element, query) {
  return element.querySelector(query);
}

function getChecked(element) {
  return element.checked;
}

function queryElements(element, query) {
  return document.querySelectorAll(query);
}

function getValue(element) {
  return element.value;
}

function setValue(element, value) {
  element.value = value;
  return element;
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function getParent(element) {
  return element.parentNode;
}

function getNextSibling(element) {
  return element.nextSibling;
}

function getNextElementSibling(element) {
  return element.nextElementSibling;
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
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/js/DOM.js");




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
    const rowButton = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.queryElement)(e.target, 'button');
    const rowCheckbox = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.queryElement)(e.target, 'input');
    const checkboxStatus = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.getChecked)(rowCheckbox);

    if ((0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.getInnerHTML)(rowButton) === 'delete') crud.toggleDeleteButton(new Event(''));

    const rowInnerHTML = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.getInnerHTML)(e.target);
    this.setPrevTarget(e.target);
    e.dataTransfer.setData(
      'attributes',
      JSON.stringify(new _DragData_js__WEBPACK_IMPORTED_MODULE_0__.default(rowInnerHTML, checkboxStatus)),
    );
    this.setDraggedData(rowInnerHTML, checkboxStatus);
  }

  over(e) {
    const currTarget = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.findParent)(e.target);

    // if dragging over new target, shift current content to previous target,
    // and empty current content
    if (this.prevTarget !== currTarget) {
      (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.updateTarget)(
        this.prevTarget,
        new _DragData_js__WEBPACK_IMPORTED_MODULE_0__.default((0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.getInnerHTML)(currTarget), (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.getChecked)((0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.queryElement)(currTarget, 'input'))),
      );

      (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.updateTarget)(currTarget, { innerHTML: '' });
    }

    this.setPrevTarget(currTarget);
    e.preventDefault(); // to allow drop at this location
  }

  static drop(e) {
    const { innerHTML, checked } = JSON.parse(e.dataTransfer.getData('attributes'));

    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.updateTarget)(
      e.target,
      new _DragData_js__WEBPACK_IMPORTED_MODULE_0__.default(innerHTML, checked === true),
    );
  }

  // in case list item is dropped outside of list
  end(e, toDoList, checkboxList, crud) {
    if ((0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.getInnerHTML)(this.prevTarget) === '') {
      (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.updateTarget)(
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

/***/ "./src/js/SuperArray.js":
/*!******************************!*\
  !*** ./src/js/SuperArray.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SuperArray)
/* harmony export */ });
class SuperArray extends Array {
  indexOfElement(element) {
    return this.indexOf(element);
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
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ "./src/js/DOM.js");





class ToDoList {
  constructor() {
    this.tasks = [];
    this.list = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.queryElement)(document, 'ul');
    this.listItems = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.queryElements)(document, 'li');
    this.ls = new _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.default();
  }

  init() {
    if (this.ls.length > 0) {
      _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.fetch().forEach(({ description, completed, index }) => {
        this.add(description, completed, index);
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
    return this;
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
    this.listItems = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.queryElements)(document, 'li');
  }

  clear() {
    this.tasks = [];
  }

  reOrder() {
    this.clear();

    this.listItems.forEach((listItem, index) => {
      this.add(
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.getInnerHTML)((0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.queryElement)(listItem, 'span')),
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.getChecked)((0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.queryElement)(listItem, 'input')),
        index + 1,
      );
    });

    _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.update(this.tasks);

    return this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvQ1JVRC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0NoZWNrYm94TGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0RyYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9EcmFnRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL1N1cGVyQXJyYXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9UYXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvVG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9saWJyYXJ5LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvaW5kZXguanMi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O1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNTO0FBQ1E7QUFDaEI7QUFDQTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGlEQUFRO0FBQ3pCLHFCQUFxQixxREFBWTtBQUNqQyxhQUFhLDZDQUFJO0FBQ2pCLGFBQWEsNkNBQUk7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0YiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWxAMDsxJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mbGV4LXJvdywgLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnNwYWNlLWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZpbGwge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uY29udGFpbmVyIGJ1dHRvbixcXG4uY29udGFpbmVyIGlucHV0LFxcbi5jb250YWluZXIgbGksXFxuLmNvbnRhaW5lciBzcGFuIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggZ3JleTtcXG59XFxuLmNvbnRhaW5lciAubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5jb250YWluZXIgLm1hdGVyaWFsLWljb25zOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbnRhaW5lciAuZHJhZzpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbi5jb250YWluZXIgLnBvaW50ZXI6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29udGFpbmVyID4gZGl2LFxcbi5jb250YWluZXIgbGkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbn1cXG4uY29udGFpbmVyID4gZGl2LFxcbi5jb250YWluZXIgbGksXFxuLmNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuLmNvbnRhaW5lciAuYnRuLWNsZWFyOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uY29udGFpbmVyIGlucHV0IHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiBncmV5O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY29udGFpbmVyIHNwYW4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uY29udGFpbmVyIHNwYW46aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uY29udGFpbmVyIHNwYW46Zm9jdXMtd2l0aGluIHtcXG4gIGN1cnNvcjogdGV4dDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvX2ZsZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2N1c3RvbS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVlBO0VBQ0UsYUFBQTtBQ1ZGOztBRGFBO0VBZkUsc0JBa0J3QztBQ1oxQzs7QURlQTtFQXJCRSxtQkF3QndDO0FDZDFDOztBRGlCQTtFQXZCRSw4QkF3Qm9DO0FDZHRDOztBRGlCQTtFQTNCRSx1QkE0Qm9DO0FDZHRDOztBRGlCQTtFQTNCRSxtQkE0QmdDO0FDZGxDOztBRGlCQTtFQUNFLFlBQUE7QUNkRjs7QUMzQkE7Ozs7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QURpQ0Y7O0FBakNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtBQW9DRjs7QUEvQkE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFMZTtFQU1mLDJCQUFBO0FBa0NGO0FBaENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBa0NKO0FBaENJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFrQ047QUE3Qkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQStCTjtBQTFCSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBNEJOO0FBeEJFOztFQUVFLGFBQUE7RUFDQSw2QkFuQ2E7QUE2RGpCO0FBdkJFOzs7RUFHRSxnQkFBQTtBQXlCSjtBQWZFO0VBQ0UsV0FBQTtBQWlCSjtBQWJJO0VBQ0UsMEJBQUE7QUFlTjtBQVhFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFhSjtBQVZFO0VBQ0Usa0JBQUE7QUFZSjtBQVZJO0VBQ0UsZUFBQTtBQVlOO0FBVEk7RUFDRSxZQUFBO0FBV05cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIGRpcmVjdGlvbigkZGlyZWN0aW9uLXByb3BlcnR5KSB7XFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbi1wcm9wZXJ0eTtcXG59XFxuXFxuQG1peGluIGp1c3RpZnkoJGp1c3RpZnktcHJvcGVydHkpIHtcXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktcHJvcGVydHk7XFxufVxcblxcbkBtaXhpbiBhbGlnbigkYWxpZ24tcHJvcGVydHkpIHtcXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24tcHJvcGVydHk7XFxufVxcblxcbiVmbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBAZXh0ZW5kICVmbGV4O1xcblxcbiAgQGluY2x1ZGUgZGlyZWN0aW9uKCRkaXJlY3Rpb24tcHJvcGVydHk6IGNvbHVtbik7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBAZXh0ZW5kICVmbGV4O1xcblxcbiAgQGluY2x1ZGUgZGlyZWN0aW9uKCRkaXJlY3Rpb24tcHJvcGVydHk6IHJvdyk7XFxufVxcblxcbi5zcGFjZS1iZXR3ZWVuIHtcXG4gIEBpbmNsdWRlIGp1c3RpZnkoJGp1c3RpZnktcHJvcGVydHk6IHNwYWNlLWJldHdlZW4pO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAgQGluY2x1ZGUganVzdGlmeSgkanVzdGlmeS1wcm9wZXJ0eTogY2VudGVyKTtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBAaW5jbHVkZSBhbGlnbigkYWxpZ24tcHJvcGVydHk6IGNlbnRlcik7XFxufVxcblxcbi5maWxsIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbEAwOzEmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCAnZmxleC5zY3NzJztcXG5AaW1wb3J0ICdjdXN0b20uc2Nzcyc7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuJGRlZmF1bHQtYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJvcmRlcjogJGRlZmF1bHQtYm9yZGVyO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCBncmV5O1xcblxcbiAgLm1hdGVyaWFsLWljb25zIHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjb2xvcjogZ3JleTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRyYWcge1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgY3Vyc29yOiBtb3ZlO1xcbiAgICB9XFxuICB9XFxuXFxuICAucG9pbnRlciB7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gID4gZGl2LFxcbiAgbGkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAkZGVmYXVsdC1ib3JkZXI7XFxuICB9XFxuXFxuICA+IGRpdixcXG4gIGxpLFxcbiAgPiBidXR0b24ge1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgfVxcblxcbiAgYnV0dG9uLFxcbiAgaW5wdXQsXFxuICBsaSxcXG4gIHNwYW4ge1xcbiAgICBAZXh0ZW5kICVtaW5pbWFsO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICB9XFxuXFxuICAuYnRuLWNsZWFyIHtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGlucHV0IHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgc3BhbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuICAgICY6Zm9jdXMtd2l0aGluIHtcXG4gICAgICBjdXJzb3I6IHRleHQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIlbWluaW1hbCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhZGRMaXN0ZW5lcnMgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL0xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgU3VwZXJBcnJheSBmcm9tICcuL1N1cGVyQXJyYXkuanMnO1xuaW1wb3J0IHtcbiAgcXVlcnlFbGVtZW50LCBxdWVyeUVsZW1lbnRzLCBnZXRJbm5lckhUTUwsIHNldElubmVySFRNTCwgZ2V0VmFsdWUsXG4gIHNldFZhbHVlLCB0b2dnbGVDbGFzcywgZ2V0UGFyZW50LCBnZXROZXh0U2libGluZywgZ2V0TmV4dEVsZW1lbnRTaWJsaW5nLFxufSBmcm9tICcuL0RPTS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENSVUQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRleHRib3ggPSBxdWVyeUVsZW1lbnQoZG9jdW1lbnQsICdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xuICAgIHRoaXMuYWRkQnV0dG9uID0gZ2V0TmV4dEVsZW1lbnRTaWJsaW5nKHRoaXMudGV4dGJveCk7XG4gICAgdGhpcy5zcGFucyA9IHF1ZXJ5RWxlbWVudHMoZG9jdW1lbnQsICdzcGFuJyk7XG4gICAgdGhpcy5kZWxldGVCdXR0b24gPSAnJztcbiAgICB0aGlzLmNsZWFyQnV0dG9uID0gcXVlcnlFbGVtZW50KGRvY3VtZW50LCAnLmJ0bi1jbGVhcicpO1xuICB9XG5cbiAgc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpIHtcbiAgICB0aGlzLnRleHRib3guYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXlkb3duJyxcbiAgICAgIChlKSA9PiB0aGlzLmFkZE5ld1Rhc2soZSwgdG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyksXG4gICAgKTtcblxuICAgIHRoaXMuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgKGUpID0+IHRoaXMuYWRkTmV3VGFzayhlLCB0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSxcbiAgICApO1xuXG4gICAgdGhpcy5zZXRTcGFucygpO1xuICAgIGFkZExpc3RlbmVycyhcbiAgICAgIHRoaXMuc3BhbnMsXG4gICAgICB7XG4gICAgICAgIGZvY3VzaW46IChlKSA9PiB0aGlzLnRvZ2dsZURlbGV0ZUJ1dHRvbihlKSxcbiAgICAgICAgZm9jdXNvdXQ6IChlKSA9PiB0aGlzLmVkaXRUYXNrKGUsIHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgdGhpcy5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgICgpID0+IHRoaXMuY2xlYXJDb21wbGV0ZWQodG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyksXG4gICAgKTtcbiAgfVxuXG4gIGFkZE5ld1Rhc2soZSwgdG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZykge1xuICAgIGlmIChnZXRWYWx1ZSh0aGlzLnRleHRib3gpICE9PSAnJyAmJiAoXG4gICAgICAoZS50eXBlID09PSAna2V5ZG93bicgJiYgZS5rZXkgPT09ICdFbnRlcicpIHx8IChlLnR5cGUgPT09ICdjbGljaycpKSkge1xuICAgICAgdG9Eb0xpc3QuYWRkKGdldFZhbHVlKHRoaXMudGV4dGJveCksIGZhbHNlLCB0b0RvTGlzdC50YXNrcy5sZW5ndGggKyAxKTtcbiAgICAgIExvY2FsU3RvcmFnZS51cGRhdGUodG9Eb0xpc3QudGFza3MpO1xuICAgICAgdG9Eb0xpc3QucG9wdWxhdGUoKTtcbiAgICAgIHRoaXMuYWRkQWxsTGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHNldFZhbHVlKHRoaXMudGV4dGJveCwgJycpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURlbGV0ZUJ1dHRvbihlKSB7XG4gICAgaWYgKGUudHlwZSAhPT0gJycpIHRoaXMuZGVsZXRlQnV0dG9uID0gZ2V0TmV4dFNpYmxpbmcoZ2V0UGFyZW50KGUudGFyZ2V0KSk7XG4gICAgc2V0SW5uZXJIVE1MKHRoaXMuZGVsZXRlQnV0dG9uLCAoZS50eXBlID09PSAnZm9jdXNpbicgPyAnZGVsZXRlJyA6ICdtb3JlX3ZlcnQnKSk7XG4gICAgdG9nZ2xlQ2xhc3ModGhpcy5kZWxldGVCdXR0b24sICdwb2ludGVyJyk7XG4gIH1cblxuICBlZGl0VGFzayhlLCB0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSB7XG4gICAgY29uc3Qgc3BhbkFycmF5ID0gbmV3IFN1cGVyQXJyYXkoLi4udGhpcy5zcGFucyk7XG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PT0gdGhpcy5kZWxldGVCdXR0b24pIHtcbiAgICAgIHRvRG9MaXN0LmRlbGV0ZVRhc2soc3BhbkFycmF5LmluZGV4T2ZFbGVtZW50KGUudGFyZ2V0KSk7XG4gICAgICB0aGlzLnJlZnJlc2godG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRGVsZXRlQnV0dG9uKGUpO1xuXG4gICAgICB0b0RvTGlzdC51cGRhdGVUYXNrKFxuICAgICAgICBzcGFuQXJyYXkuaW5kZXhPZkVsZW1lbnQoZS50YXJnZXQpLFxuICAgICAgICAnZGVzY3JpcHRpb24nLFxuICAgICAgICBnZXRJbm5lckhUTUwoZS50YXJnZXQpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjbGVhckNvbXBsZXRlZCh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSB7XG4gICAgdG9Eb0xpc3QuZmlsdGVyVGFza3MoKTtcbiAgICB0aGlzLnJlZnJlc2godG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG4gIH1cblxuICByZWZyZXNoKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpIHtcbiAgICB0b0RvTGlzdFxuICAgICAgLnBvcHVsYXRlKClcbiAgICAgIC5yZU9yZGVyKCk7XG4gICAgdGhpcy5hZGRBbGxMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG4gIH1cblxuICBhZGRBbGxMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZykge1xuICAgIGNoZWNrYm94TGlzdC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QpO1xuICAgIGRyYWcuc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIHRoaXMpO1xuICAgIHRoaXMuc2V0U3BhbnMoKTtcbiAgICB0aGlzLnNldExpc3RlbmVycyh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKTtcbiAgfVxuXG4gIHNldFNwYW5zKCkge1xuICAgIHRoaXMuc3BhbnMgPSBxdWVyeUVsZW1lbnRzKGRvY3VtZW50LCAnc3BhbicpO1xuICB9XG59IiwiaW1wb3J0IHsgYWRkTGlzdGVuZXJzIH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcbmltcG9ydCBTdXBlckFycmF5IGZyb20gJy4vU3VwZXJBcnJheS5qcyc7XG5pbXBvcnQgeyBnZXRDaGVja2VkLCBxdWVyeUVsZW1lbnRzIH0gZnJvbSAnLi9ET00uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBxdWVyeUVsZW1lbnRzKGRvY3VtZW50LCAnbGkgaW5wdXQnKTtcbiAgfVxuXG4gIHNldExpc3RlbmVycyh0b0RvTGlzdCkge1xuICAgIHRoaXMuc2V0Q2hlY2tib3hlcygpO1xuICAgIGFkZExpc3RlbmVycyhcbiAgICAgIHRoaXMuY2hlY2tib3hlcyxcbiAgICAgIHtcbiAgICAgICAgY2hhbmdlOiAoZSkgPT4gdGhpcy5jaGFuZ2VTdGF0dXMoZSwgdG9Eb0xpc3QpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hhbmdlU3RhdHVzKGUsIHRvRG9MaXN0KSB7XG4gICAgY29uc3QgY2hlY2tib3hBcnJheSA9IG5ldyBTdXBlckFycmF5KC4uLnRoaXMuY2hlY2tib3hlcyk7XG4gICAgdG9Eb0xpc3QudXBkYXRlVGFzayhcbiAgICAgIGNoZWNrYm94QXJyYXkuaW5kZXhPZkVsZW1lbnQoZS50YXJnZXQpLFxuICAgICAgJ2NvbXBsZXRlZCcsXG4gICAgICBnZXRDaGVja2VkKGUudGFyZ2V0KSxcbiAgICApO1xuICB9XG5cbiAgc2V0Q2hlY2tib3hlcygpIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBxdWVyeUVsZW1lbnRzKGRvY3VtZW50LCAnbGkgaW5wdXQnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXJnZXQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdGFyZ2V0LmlubmVySFRNTCA9IHNvdXJjZS5pbm5lckhUTUw7XG4gIGlmIChzb3VyY2UuaW5uZXJIVE1MICE9PSAnJykgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCA9IHNvdXJjZS5jaGVja2VkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhcmVudCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldC5wYXJlbnROb2RlLnRhZ05hbWUgPT09ICdMSScpIHJldHVybiB0YXJnZXQucGFyZW50Tm9kZTtcbiAgaWYgKHRhcmdldC5wYXJlbnROb2RlLnRhZ05hbWUgPT09ICdESVYnKSByZXR1cm4gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElubmVySFRNTChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmlubmVySFRNTDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldElubmVySFRNTChlbGVtZW50LCBpbm5lckhUTUwpIHtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlFbGVtZW50KGVsZW1lbnQsIHF1ZXJ5KSB7XG4gIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hlY2tlZChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmNoZWNrZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUVsZW1lbnRzKGVsZW1lbnQsIHF1ZXJ5KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWYWx1ZShlbGVtZW50LCB2YWx1ZSkge1xuICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQubmV4dFNpYmxpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0RWxlbWVudFNpYmxpbmcoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG59IiwiaW1wb3J0IERyYWdEYXRhIGZyb20gJy4vRHJhZ0RhdGEuanMnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXJzIH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcbmltcG9ydCB7XG4gIHVwZGF0ZVRhcmdldCwgZmluZFBhcmVudCwgZ2V0SW5uZXJIVE1MLCBxdWVyeUVsZW1lbnQsIGdldENoZWNrZWQsXG59IGZyb20gJy4vRE9NLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJldlRhcmdldCA9ICcnO1xuICAgIHRoaXMuZHJhZ2dlZElubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuZHJhZ2dlZENoZWNrID0gJyc7XG4gIH1cblxuICBzZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgY3J1ZCkge1xuICAgIGFkZExpc3RlbmVycyhcbiAgICAgIHRvRG9MaXN0Lmxpc3RJdGVtcyxcbiAgICAgIHtcbiAgICAgICAgZHJhZ3N0YXJ0OiAoZSkgPT4gdGhpcy5zdGFydChlLCBjcnVkKSxcbiAgICAgICAgZHJhZ292ZXI6IChlKSA9PiB0aGlzLm92ZXIoZSksXG4gICAgICAgIGRyb3A6IChlKSA9PiBEcmFnLmRyb3AoZSksXG4gICAgICAgIGRyYWdlbmQ6IChlKSA9PiB0aGlzLmVuZChlLCB0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBjcnVkKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHN0YXJ0KGUsIGNydWQpIHtcbiAgICBjb25zdCByb3dCdXR0b24gPSBxdWVyeUVsZW1lbnQoZS50YXJnZXQsICdidXR0b24nKTtcbiAgICBjb25zdCByb3dDaGVja2JveCA9IHF1ZXJ5RWxlbWVudChlLnRhcmdldCwgJ2lucHV0Jyk7XG4gICAgY29uc3QgY2hlY2tib3hTdGF0dXMgPSBnZXRDaGVja2VkKHJvd0NoZWNrYm94KTtcblxuICAgIGlmIChnZXRJbm5lckhUTUwocm93QnV0dG9uKSA9PT0gJ2RlbGV0ZScpIGNydWQudG9nZ2xlRGVsZXRlQnV0dG9uKG5ldyBFdmVudCgnJykpO1xuXG4gICAgY29uc3Qgcm93SW5uZXJIVE1MID0gZ2V0SW5uZXJIVE1MKGUudGFyZ2V0KTtcbiAgICB0aGlzLnNldFByZXZUYXJnZXQoZS50YXJnZXQpO1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXG4gICAgICAnYXR0cmlidXRlcycsXG4gICAgICBKU09OLnN0cmluZ2lmeShuZXcgRHJhZ0RhdGEocm93SW5uZXJIVE1MLCBjaGVja2JveFN0YXR1cykpLFxuICAgICk7XG4gICAgdGhpcy5zZXREcmFnZ2VkRGF0YShyb3dJbm5lckhUTUwsIGNoZWNrYm94U3RhdHVzKTtcbiAgfVxuXG4gIG92ZXIoZSkge1xuICAgIGNvbnN0IGN1cnJUYXJnZXQgPSBmaW5kUGFyZW50KGUudGFyZ2V0KTtcblxuICAgIC8vIGlmIGRyYWdnaW5nIG92ZXIgbmV3IHRhcmdldCwgc2hpZnQgY3VycmVudCBjb250ZW50IHRvIHByZXZpb3VzIHRhcmdldCxcbiAgICAvLyBhbmQgZW1wdHkgY3VycmVudCBjb250ZW50XG4gICAgaWYgKHRoaXMucHJldlRhcmdldCAhPT0gY3VyclRhcmdldCkge1xuICAgICAgdXBkYXRlVGFyZ2V0KFxuICAgICAgICB0aGlzLnByZXZUYXJnZXQsXG4gICAgICAgIG5ldyBEcmFnRGF0YShnZXRJbm5lckhUTUwoY3VyclRhcmdldCksIGdldENoZWNrZWQocXVlcnlFbGVtZW50KGN1cnJUYXJnZXQsICdpbnB1dCcpKSksXG4gICAgICApO1xuXG4gICAgICB1cGRhdGVUYXJnZXQoY3VyclRhcmdldCwgeyBpbm5lckhUTUw6ICcnIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0UHJldlRhcmdldChjdXJyVGFyZ2V0KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHRvIGFsbG93IGRyb3AgYXQgdGhpcyBsb2NhdGlvblxuICB9XG5cbiAgc3RhdGljIGRyb3AoZSkge1xuICAgIGNvbnN0IHsgaW5uZXJIVE1MLCBjaGVja2VkIH0gPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2F0dHJpYnV0ZXMnKSk7XG5cbiAgICB1cGRhdGVUYXJnZXQoXG4gICAgICBlLnRhcmdldCxcbiAgICAgIG5ldyBEcmFnRGF0YShpbm5lckhUTUwsIGNoZWNrZWQgPT09IHRydWUpLFxuICAgICk7XG4gIH1cblxuICAvLyBpbiBjYXNlIGxpc3QgaXRlbSBpcyBkcm9wcGVkIG91dHNpZGUgb2YgbGlzdFxuICBlbmQoZSwgdG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgY3J1ZCkge1xuICAgIGlmIChnZXRJbm5lckhUTUwodGhpcy5wcmV2VGFyZ2V0KSA9PT0gJycpIHtcbiAgICAgIHVwZGF0ZVRhcmdldChcbiAgICAgICAgdGhpcy5wcmV2VGFyZ2V0LFxuICAgICAgICBuZXcgRHJhZ0RhdGEodGhpcy5kcmFnZ2VkSW5uZXJIVE1MLCB0aGlzLmRyYWdnZWRDaGVjayA9PT0gdHJ1ZSksXG4gICAgICApO1xuICAgIH1cblxuICAgIHRvRG9MaXN0LnJlT3JkZXIoKTtcbiAgICBjaGVja2JveExpc3RcbiAgICAgIC5zZXRDaGVja2JveGVzKClcbiAgICAgIC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QpO1xuICAgIGNydWQuc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIHRoaXMpO1xuICB9XG5cbiAgc2V0UHJldlRhcmdldChlbGVtZW50KSB7XG4gICAgdGhpcy5wcmV2VGFyZ2V0ID0gZWxlbWVudDtcbiAgfVxuXG4gIHNldERyYWdnZWREYXRhKGlubmVySFRNTCwgY2hlY2tlZCkge1xuICAgIHRoaXMuZHJhZ2dlZElubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICB0aGlzLmRyYWdnZWRDaGVjayA9IGNoZWNrZWQ7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGlubmVySFRNTCwgY2hlY2tlZCkge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxlbmd0aCA9IChMb2NhbFN0b3JhZ2UuZmV0Y2goKSA9PT0gbnVsbCA/IDAgOiAxKTtcbiAgfVxuXG4gIHN0YXRpYyBmZXRjaCgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlKHRhc2tzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cGVyQXJyYXkgZXh0ZW5kcyBBcnJheSB7XG4gIGluZGV4T2ZFbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleE9mKGVsZW1lbnQpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qcyc7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gJy4vTG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuaW1wb3J0IHtcbiAgZ2V0SW5uZXJIVE1MLCBnZXRDaGVja2VkLCBxdWVyeUVsZW1lbnQsIHF1ZXJ5RWxlbWVudHMsXG59IGZyb20gJy4vRE9NLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5saXN0ID0gcXVlcnlFbGVtZW50KGRvY3VtZW50LCAndWwnKTtcbiAgICB0aGlzLmxpc3RJdGVtcyA9IHF1ZXJ5RWxlbWVudHMoZG9jdW1lbnQsICdsaScpO1xuICAgIHRoaXMubHMgPSBuZXcgTG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLmxzLmxlbmd0aCA+IDApIHtcbiAgICAgIExvY2FsU3RvcmFnZS5mZXRjaCgpLmZvckVhY2goKHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXggfSkgPT4ge1xuICAgICAgICB0aGlzLmFkZChkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucG9wdWxhdGUoKTtcbiAgICB9XG4gIH1cblxuICBhZGQoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2soZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpKTtcbiAgfVxuXG4gIHNvcnQoKSB7XG4gICAgdGhpcy50YXNrcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gIH1cblxuICBwb3B1bGF0ZSgpIHtcbiAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy50YXNrc1xuICAgICAgLm1hcCgodGFzaykgPT4gW3Rhc2suZGVzY3JpcHRpb24sIHRhc2suY29tcGxldGVkXSlcbiAgICAgIC5mb3JFYWNoKChbZGVzY3JpcHRpb24sIGNvbXBsZXRlZF0pID0+IHRoaXMuYXBwZW5kTGlzdEl0ZW0oZGVzY3JpcHRpb24sIGNvbXBsZXRlZCkpO1xuICAgIHRoaXMuc2V0TGlzdEl0ZW1zKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhcHBlbmRMaXN0SXRlbShkZXNjcmlwdGlvbiwgY29tcGxldGVkKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBjcmVhdGVFbGVtZW50KCdsaScsICdmbGV4LXJvdyBzcGFjZS1iZXR3ZWVuIGFsaWduLWNlbnRlcicsIHsgZHJhZ2dhYmxlOiB0cnVlIH0pO1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtcm93IGFsaWduLWNlbnRlciBmaWxsJyk7XG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKFxuICAgICAgY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnJywgeyB0eXBlOiAnY2hlY2tib3gnIH0sICcnLCB7IGNoZWNrZWQ6IGNvbXBsZXRlZCB9KSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnZmlsbCcsIHsgY29udGVudGVkaXRhYmxlOiB0cnVlIH0sIGRlc2NyaXB0aW9uKSxcbiAgICApO1xuICAgIGxpc3RJdGVtLmFwcGVuZChcbiAgICAgIGNoZWNrYm94Q29udGFpbmVyLFxuICAgICAgY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ21hdGVyaWFsLWljb25zIGRyYWcnLCB7fSwgJ21vcmVfdmVydCcpLFxuICAgICk7XG4gICAgdGhpcy5saXN0LmFwcGVuZChsaXN0SXRlbSk7XG4gIH1cblxuICBzZXRMaXN0SXRlbXMoKSB7XG4gICAgdGhpcy5saXN0SXRlbXMgPSBxdWVyeUVsZW1lbnRzKGRvY3VtZW50LCAnbGknKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIHJlT3JkZXIoKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5saXN0SXRlbXMuZm9yRWFjaCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmFkZChcbiAgICAgICAgZ2V0SW5uZXJIVE1MKHF1ZXJ5RWxlbWVudChsaXN0SXRlbSwgJ3NwYW4nKSksXG4gICAgICAgIGdldENoZWNrZWQocXVlcnlFbGVtZW50KGxpc3RJdGVtLCAnaW5wdXQnKSksXG4gICAgICAgIGluZGV4ICsgMSxcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBMb2NhbFN0b3JhZ2UudXBkYXRlKHRoaXMudGFza3MpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGVUYXNrKGluZGV4LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICB0aGlzLnRhc2tzW2luZGV4XVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBMb2NhbFN0b3JhZ2UudXBkYXRlKHRoaXMudGFza3MpO1xuICB9XG5cbiAgZGVsZXRlVGFzayhpbmRleCkge1xuICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZpbHRlclRhc2tzKCkge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlLCBjbGFzc05hbWVzID0gJycsIGF0dHJpYnV0ZXMgPSB7fSwgaW5uZXJIVE1MID0gJycsIHByb3BlcnRpZXMgPSB7fSkge1xuICBjb25zdCBlbGVtZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gIGlmIChjbGFzc05hbWVzKSBlbGVtZW50T2JqZWN0LmNsYXNzTGlzdC5hZGQoLi4uKGNsYXNzTmFtZXMuc3BsaXQoJyAnKSkpO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICBlbGVtZW50T2JqZWN0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gIH0pO1xuICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGVsZW1lbnRPYmplY3RbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV07XG4gIH0pO1xuICBlbGVtZW50T2JqZWN0LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIGVsZW1lbnRPYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoZWxlbWVudHMsIGxpc3RlbmVycykge1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMobGlzdGVuZXJzKS5mb3JFYWNoKChbZXZlbnQsIGxpc3RlbmVyXSkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi9Ub0RvTGlzdC5qcyc7XG5pbXBvcnQgQ2hlY2tib3hMaXN0IGZyb20gJy4vQ2hlY2tib3hMaXN0LmpzJztcbmltcG9ydCBEcmFnIGZyb20gJy4vRHJhZy5qcyc7XG5pbXBvcnQgQ1JVRCBmcm9tICcuL0NSVUQuanMnO1xuXG5sZXQgdG9Eb0xpc3Q7XG5sZXQgY2hlY2tib3hMaXN0O1xubGV0IGRyYWc7XG5sZXQgY3J1ZDtcblxuZnVuY3Rpb24gaW5pdExpc3QoKSB7XG4gIHRvRG9MaXN0LmluaXQoKTtcbn1cblxuZnVuY3Rpb24gaW5pdENoZWNrYm94RXZlbnRzKCkge1xuICBjaGVja2JveExpc3Quc2V0TGlzdGVuZXJzKHRvRG9MaXN0KTtcbn1cblxuZnVuY3Rpb24gaW5pdERyYWdFdmVudHMoKSB7XG4gIGRyYWcuc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGNydWQpO1xufVxuXG5mdW5jdGlvbiBpbml0Q1JVRCgpIHtcbiAgY3J1ZC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG59XG5cbmZ1bmN0aW9uIGluaXRPYmplY3RzKCkge1xuICB0b0RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpO1xuICBjaGVja2JveExpc3QgPSBuZXcgQ2hlY2tib3hMaXN0KCk7XG4gIGRyYWcgPSBuZXcgRHJhZygpO1xuICBjcnVkID0gbmV3IENSVUQoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaW5pdE9iamVjdHMoKTtcbiAgaW5pdExpc3QoKTtcbiAgaW5pdENoZWNrYm94RXZlbnRzKCk7XG4gIGluaXREcmFnRXZlbnRzKCk7XG4gIGluaXRDUlVEKCk7XG59XG5cbm5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUpKS50aGVuKCgpID0+IGluaXQoKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==