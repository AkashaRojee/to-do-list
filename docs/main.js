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
    // this.listItems = queryElements(document, 'li');
    // this.ls = new LocalStorage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvQ1JVRC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0NoZWNrYm94TGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0RyYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9EcmFnRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL1N1cGVyQXJyYXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9UYXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvVG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9saWJyYXJ5LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvaW5kZXguanMi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O1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ1M7QUFDUTtBQUNoQjtBQUNBOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsaURBQVE7QUFDekIscUJBQXFCLHFEQUFZO0FBQ2pDLGFBQWEsNkNBQUk7QUFDakIsYUFBYSw2Q0FBSTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbEAwOzEmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZsZXgtcm93LCAuZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uc3BhY2UtYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmlsbCB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5jb250YWluZXIgYnV0dG9uLFxcbi5jb250YWluZXIgaW5wdXQsXFxuLmNvbnRhaW5lciBsaSxcXG4uY29udGFpbmVyIHNwYW4ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogODUlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCBncmV5O1xcbn1cXG4uY29udGFpbmVyIC5tYXRlcmlhbC1pY29ucyB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuLmNvbnRhaW5lciAubWF0ZXJpYWwtaWNvbnM6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29udGFpbmVyIC5kcmFnOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLmNvbnRhaW5lciAucG9pbnRlcjpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb250YWluZXIgPiBkaXYsXFxuLmNvbnRhaW5lciBsaSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxufVxcbi5jb250YWluZXIgPiBkaXYsXFxuLmNvbnRhaW5lciBsaSxcXG4uY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxufVxcbi5jb250YWluZXIgYnV0dG9uIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG4uY29udGFpbmVyIC5idG4tY2xlYXI6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5jb250YWluZXIgaW5wdXQge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IGdyZXk7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5jb250YWluZXIgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5jb250YWluZXIgc3Bhbjpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5jb250YWluZXIgc3Bhbjpmb2N1cy13aXRoaW4ge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fZmxleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fY3VzdG9tLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBWUE7RUFDRSxhQUFBO0FDVkY7O0FEYUE7RUFmRSxzQkFrQndDO0FDWjFDOztBRGVBO0VBckJFLG1CQXdCd0M7QUNkMUM7O0FEaUJBO0VBdkJFLDhCQXdCb0M7QUNkdEM7O0FEaUJBO0VBM0JFLHVCQTRCb0M7QUNkdEM7O0FEaUJBO0VBM0JFLG1CQTRCZ0M7QUNkbEM7O0FEaUJBO0VBQ0UsWUFBQTtBQ2RGOztBQzNCQTs7OztFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBRGlDRjs7QUFqQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0FBb0NGOztBQS9CQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUxlO0VBTWYsMkJBQUE7QUFrQ0Y7QUFoQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFrQ0o7QUFoQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQWtDTjtBQTdCSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBK0JOO0FBMUJJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUE0Qk47QUF4QkU7O0VBRUUsYUFBQTtFQUNBLDZCQW5DYTtBQTZEakI7QUF2QkU7OztFQUdFLGdCQUFBO0FBeUJKO0FBZkU7RUFDRSxXQUFBO0FBaUJKO0FBYkk7RUFDRSwwQkFBQTtBQWVOO0FBWEU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWFKO0FBVkU7RUFDRSxrQkFBQTtBQVlKO0FBVkk7RUFDRSxlQUFBO0FBWU47QUFUSTtFQUNFLFlBQUE7QUFXTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gZGlyZWN0aW9uKCRkaXJlY3Rpb24tcHJvcGVydHkpIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uLXByb3BlcnR5O1xcbn1cXG5cXG5AbWl4aW4ganVzdGlmeSgkanVzdGlmeS1wcm9wZXJ0eSkge1xcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1wcm9wZXJ0eTtcXG59XFxuXFxuQG1peGluIGFsaWduKCRhbGlnbi1wcm9wZXJ0eSkge1xcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1wcm9wZXJ0eTtcXG59XFxuXFxuJWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIEBleHRlbmQgJWZsZXg7XFxuXFxuICBAaW5jbHVkZSBkaXJlY3Rpb24oJGRpcmVjdGlvbi1wcm9wZXJ0eTogY29sdW1uKTtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIEBleHRlbmQgJWZsZXg7XFxuXFxuICBAaW5jbHVkZSBkaXJlY3Rpb24oJGRpcmVjdGlvbi1wcm9wZXJ0eTogcm93KTtcXG59XFxuXFxuLnNwYWNlLWJldHdlZW4ge1xcbiAgQGluY2x1ZGUganVzdGlmeSgkanVzdGlmeS1wcm9wZXJ0eTogc3BhY2UtYmV0d2Vlbik7XFxufVxcblxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBAaW5jbHVkZSBqdXN0aWZ5KCRqdXN0aWZ5LXByb3BlcnR5OiBjZW50ZXIpO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIEBpbmNsdWRlIGFsaWduKCRhbGlnbi1wcm9wZXJ0eTogY2VudGVyKTtcXG59XFxuXFxuLmZpbGwge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsQDA7MSZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0ICdmbGV4LnNjc3MnO1xcbkBpbXBvcnQgJ2N1c3RvbS5zY3NzJztcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4kZGVmYXVsdC1ib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgYm9yZGVyOiAkZGVmYXVsdC1ib3JkZXI7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IGdyZXk7XFxuXFxuICAubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBncmV5O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICB9XFxuXFxuICAuZHJhZyB7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBjdXJzb3I6IG1vdmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5wb2ludGVyIHtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgPiBkaXYsXFxuICBsaSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206ICRkZWZhdWx0LWJvcmRlcjtcXG4gIH1cXG5cXG4gID4gZGl2LFxcbiAgbGksXFxuICA+IGJ1dHRvbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICBidXR0b24sXFxuICBpbnB1dCxcXG4gIGxpLFxcbiAgc3BhbiB7XFxuICAgIEBleHRlbmQgJW1pbmltYWw7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gIH1cXG5cXG4gIC5idG4tY2xlYXIge1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuICBzcGFuIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIH1cXG5cXG4gICAgJjpmb2N1cy13aXRoaW4ge1xcbiAgICAgIGN1cnNvcjogdGV4dDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiVtaW5pbWFsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZExpc3RlbmVycyB9IGZyb20gJy4vbGlicmFyeS5qcyc7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gJy4vTG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCBTdXBlckFycmF5IGZyb20gJy4vU3VwZXJBcnJheS5qcyc7XG5pbXBvcnQge1xuICBxdWVyeUVsZW1lbnQsIHF1ZXJ5RWxlbWVudHMsIGdldElubmVySFRNTCwgc2V0SW5uZXJIVE1MLCBnZXRWYWx1ZSxcbiAgc2V0VmFsdWUsIHRvZ2dsZUNsYXNzLCBnZXRQYXJlbnQsIGdldE5leHRTaWJsaW5nLCBnZXROZXh0RWxlbWVudFNpYmxpbmcsXG59IGZyb20gJy4vRE9NLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1JVRCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGV4dGJveCA9IHF1ZXJ5RWxlbWVudChkb2N1bWVudCwgJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XG4gICAgdGhpcy5hZGRCdXR0b24gPSBnZXROZXh0RWxlbWVudFNpYmxpbmcodGhpcy50ZXh0Ym94KTtcbiAgICB0aGlzLnNwYW5zID0gcXVlcnlFbGVtZW50cyhkb2N1bWVudCwgJ3NwYW4nKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbiA9ICcnO1xuICAgIHRoaXMuY2xlYXJCdXR0b24gPSBxdWVyeUVsZW1lbnQoZG9jdW1lbnQsICcuYnRuLWNsZWFyJyk7XG4gIH1cblxuICBzZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZykge1xuICAgIHRoaXMudGV4dGJveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2tleWRvd24nLFxuICAgICAgKGUpID0+IHRoaXMuYWRkTmV3VGFzayhlLCB0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSxcbiAgICApO1xuXG4gICAgdGhpcy5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICAoZSkgPT4gdGhpcy5hZGROZXdUYXNrKGUsIHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpLFxuICAgICk7XG5cbiAgICB0aGlzLnNldFNwYW5zKCk7XG4gICAgYWRkTGlzdGVuZXJzKFxuICAgICAgdGhpcy5zcGFucyxcbiAgICAgIHtcbiAgICAgICAgZm9jdXNpbjogKGUpID0+IHRoaXMudG9nZ2xlRGVsZXRlQnV0dG9uKGUpLFxuICAgICAgICBmb2N1c291dDogKGUpID0+IHRoaXMuZWRpdFRhc2soZSwgdG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICB0aGlzLmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgKCkgPT4gdGhpcy5jbGVhckNvbXBsZXRlZCh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSxcbiAgICApO1xuICB9XG5cbiAgYWRkTmV3VGFzayhlLCB0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSB7XG4gICAgaWYgKGdldFZhbHVlKHRoaXMudGV4dGJveCkgIT09ICcnICYmIChcbiAgICAgIChlLnR5cGUgPT09ICdrZXlkb3duJyAmJiBlLmtleSA9PT0gJ0VudGVyJykgfHwgKGUudHlwZSA9PT0gJ2NsaWNrJykpKSB7XG4gICAgICB0b0RvTGlzdC5hZGQoZ2V0VmFsdWUodGhpcy50ZXh0Ym94KSwgZmFsc2UsIHRvRG9MaXN0LnRhc2tzLmxlbmd0aCArIDEpO1xuICAgICAgTG9jYWxTdG9yYWdlLnVwZGF0ZSh0b0RvTGlzdC50YXNrcyk7XG4gICAgICB0b0RvTGlzdC5wb3B1bGF0ZSgpO1xuICAgICAgdGhpcy5hZGRBbGxMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgc2V0VmFsdWUodGhpcy50ZXh0Ym94LCAnJyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRGVsZXRlQnV0dG9uKGUpIHtcbiAgICBpZiAoZS50eXBlICE9PSAnJykgdGhpcy5kZWxldGVCdXR0b24gPSBnZXROZXh0U2libGluZyhnZXRQYXJlbnQoZS50YXJnZXQpKTtcbiAgICBzZXRJbm5lckhUTUwodGhpcy5kZWxldGVCdXR0b24sIChlLnR5cGUgPT09ICdmb2N1c2luJyA/ICdkZWxldGUnIDogJ21vcmVfdmVydCcpKTtcbiAgICB0b2dnbGVDbGFzcyh0aGlzLmRlbGV0ZUJ1dHRvbiwgJ3BvaW50ZXInKTtcbiAgfVxuXG4gIGVkaXRUYXNrKGUsIHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpIHtcbiAgICBjb25zdCBzcGFuQXJyYXkgPSBuZXcgU3VwZXJBcnJheSguLi50aGlzLnNwYW5zKTtcbiAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ID09PSB0aGlzLmRlbGV0ZUJ1dHRvbikge1xuICAgICAgdG9Eb0xpc3QuZGVsZXRlVGFzayhzcGFuQXJyYXkuaW5kZXhPZkVsZW1lbnQoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVmcmVzaCh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVEZWxldGVCdXR0b24oZSk7XG5cbiAgICAgIHRvRG9MaXN0LnVwZGF0ZVRhc2soXG4gICAgICAgIHNwYW5BcnJheS5pbmRleE9mRWxlbWVudChlLnRhcmdldCksXG4gICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgIGdldElubmVySFRNTChlLnRhcmdldCksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyQ29tcGxldGVkKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpIHtcbiAgICB0b0RvTGlzdC5maWx0ZXJUYXNrcygpO1xuICAgIHRoaXMucmVmcmVzaCh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKTtcbiAgfVxuXG4gIHJlZnJlc2godG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZykge1xuICAgIHRvRG9MaXN0XG4gICAgICAucG9wdWxhdGUoKVxuICAgICAgLnJlT3JkZXIoKTtcbiAgICB0aGlzLmFkZEFsbExpc3RlbmVycyh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKTtcbiAgfVxuXG4gIGFkZEFsbExpc3RlbmVycyh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSB7XG4gICAgY2hlY2tib3hMaXN0LnNldExpc3RlbmVycyh0b0RvTGlzdCk7XG4gICAgZHJhZy5zZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgdGhpcyk7XG4gICAgdGhpcy5zZXRTcGFucygpO1xuICAgIHRoaXMuc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpO1xuICB9XG5cbiAgc2V0U3BhbnMoKSB7XG4gICAgdGhpcy5zcGFucyA9IHF1ZXJ5RWxlbWVudHMoZG9jdW1lbnQsICdzcGFuJyk7XG4gIH1cbn0iLCJpbXBvcnQgeyBhZGRMaXN0ZW5lcnMgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuaW1wb3J0IFN1cGVyQXJyYXkgZnJvbSAnLi9TdXBlckFycmF5LmpzJztcbmltcG9ydCB7IGdldENoZWNrZWQsIHF1ZXJ5RWxlbWVudHMgfSBmcm9tICcuL0RPTS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94TGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hlY2tib3hlcyA9IHF1ZXJ5RWxlbWVudHMoZG9jdW1lbnQsICdsaSBpbnB1dCcpO1xuICB9XG5cbiAgc2V0TGlzdGVuZXJzKHRvRG9MaXN0KSB7XG4gICAgdGhpcy5zZXRDaGVja2JveGVzKCk7XG4gICAgYWRkTGlzdGVuZXJzKFxuICAgICAgdGhpcy5jaGVja2JveGVzLFxuICAgICAge1xuICAgICAgICBjaGFuZ2U6IChlKSA9PiB0aGlzLmNoYW5nZVN0YXR1cyhlLCB0b0RvTGlzdCksXG4gICAgICB9LFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGFuZ2VTdGF0dXMoZSwgdG9Eb0xpc3QpIHtcbiAgICBjb25zdCBjaGVja2JveEFycmF5ID0gbmV3IFN1cGVyQXJyYXkoLi4udGhpcy5jaGVja2JveGVzKTtcbiAgICB0b0RvTGlzdC51cGRhdGVUYXNrKFxuICAgICAgY2hlY2tib3hBcnJheS5pbmRleE9mRWxlbWVudChlLnRhcmdldCksXG4gICAgICAnY29tcGxldGVkJyxcbiAgICAgIGdldENoZWNrZWQoZS50YXJnZXQpLFxuICAgICk7XG4gIH1cblxuICBzZXRDaGVja2JveGVzKCkge1xuICAgIHRoaXMuY2hlY2tib3hlcyA9IHF1ZXJ5RWxlbWVudHMoZG9jdW1lbnQsICdsaSBpbnB1dCcpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhcmdldCh0YXJnZXQsIHNvdXJjZSkge1xuICB0YXJnZXQuaW5uZXJIVE1MID0gc291cmNlLmlubmVySFRNTDtcbiAgaWYgKHNvdXJjZS5pbm5lckhUTUwgIT09ICcnKSB0YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gc291cmNlLmNoZWNrZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFyZW50KHRhcmdldCkge1xuICBpZiAodGFyZ2V0LnBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ0xJJykgcmV0dXJuIHRhcmdldC5wYXJlbnROb2RlO1xuICBpZiAodGFyZ2V0LnBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ0RJVicpIHJldHVybiB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5uZXJIVE1MKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5uZXJIVE1MKGVsZW1lbnQsIGlubmVySFRNTCkge1xuICBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUVsZW1lbnQoZWxlbWVudCwgcXVlcnkpIHtcbiAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGVja2VkKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RWxlbWVudHMoZWxlbWVudCwgcXVlcnkpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZhbHVlKGVsZW1lbnQsIHZhbHVlKSB7XG4gIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmcoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5uZXh0U2libGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRFbGVtZW50U2libGluZyhlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbn0iLCJpbXBvcnQgRHJhZ0RhdGEgZnJvbSAnLi9EcmFnRGF0YS5qcyc7XG5pbXBvcnQgeyBhZGRMaXN0ZW5lcnMgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuaW1wb3J0IHtcbiAgdXBkYXRlVGFyZ2V0LCBmaW5kUGFyZW50LCBnZXRJbm5lckhUTUwsIHF1ZXJ5RWxlbWVudCwgZ2V0Q2hlY2tlZCxcbn0gZnJvbSAnLi9ET00uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcmV2VGFyZ2V0ID0gJyc7XG4gICAgdGhpcy5kcmFnZ2VkSW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5kcmFnZ2VkQ2hlY2sgPSAnJztcbiAgfVxuXG4gIHNldExpc3RlbmVycyh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBjcnVkKSB7XG4gICAgYWRkTGlzdGVuZXJzKFxuICAgICAgdG9Eb0xpc3QubGlzdEl0ZW1zLFxuICAgICAge1xuICAgICAgICBkcmFnc3RhcnQ6IChlKSA9PiB0aGlzLnN0YXJ0KGUsIGNydWQpLFxuICAgICAgICBkcmFnb3ZlcjogKGUpID0+IHRoaXMub3ZlcihlKSxcbiAgICAgICAgZHJvcDogKGUpID0+IERyYWcuZHJvcChlKSxcbiAgICAgICAgZHJhZ2VuZDogKGUpID0+IHRoaXMuZW5kKGUsIHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGNydWQpLFxuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgc3RhcnQoZSwgY3J1ZCkge1xuICAgIGNvbnN0IHJvd0J1dHRvbiA9IHF1ZXJ5RWxlbWVudChlLnRhcmdldCwgJ2J1dHRvbicpO1xuICAgIGNvbnN0IHJvd0NoZWNrYm94ID0gcXVlcnlFbGVtZW50KGUudGFyZ2V0LCAnaW5wdXQnKTtcbiAgICBjb25zdCBjaGVja2JveFN0YXR1cyA9IGdldENoZWNrZWQocm93Q2hlY2tib3gpO1xuXG4gICAgaWYgKGdldElubmVySFRNTChyb3dCdXR0b24pID09PSAnZGVsZXRlJykgY3J1ZC50b2dnbGVEZWxldGVCdXR0b24obmV3IEV2ZW50KCcnKSk7XG5cbiAgICBjb25zdCByb3dJbm5lckhUTUwgPSBnZXRJbm5lckhUTUwoZS50YXJnZXQpO1xuICAgIHRoaXMuc2V0UHJldlRhcmdldChlLnRhcmdldCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcbiAgICAgICdhdHRyaWJ1dGVzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KG5ldyBEcmFnRGF0YShyb3dJbm5lckhUTUwsIGNoZWNrYm94U3RhdHVzKSksXG4gICAgKTtcbiAgICB0aGlzLnNldERyYWdnZWREYXRhKHJvd0lubmVySFRNTCwgY2hlY2tib3hTdGF0dXMpO1xuICB9XG5cbiAgb3ZlcihlKSB7XG4gICAgY29uc3QgY3VyclRhcmdldCA9IGZpbmRQYXJlbnQoZS50YXJnZXQpO1xuXG4gICAgLy8gaWYgZHJhZ2dpbmcgb3ZlciBuZXcgdGFyZ2V0LCBzaGlmdCBjdXJyZW50IGNvbnRlbnQgdG8gcHJldmlvdXMgdGFyZ2V0LFxuICAgIC8vIGFuZCBlbXB0eSBjdXJyZW50IGNvbnRlbnRcbiAgICBpZiAodGhpcy5wcmV2VGFyZ2V0ICE9PSBjdXJyVGFyZ2V0KSB7XG4gICAgICB1cGRhdGVUYXJnZXQoXG4gICAgICAgIHRoaXMucHJldlRhcmdldCxcbiAgICAgICAgbmV3IERyYWdEYXRhKGdldElubmVySFRNTChjdXJyVGFyZ2V0KSwgZ2V0Q2hlY2tlZChxdWVyeUVsZW1lbnQoY3VyclRhcmdldCwgJ2lucHV0JykpKSxcbiAgICAgICk7XG5cbiAgICAgIHVwZGF0ZVRhcmdldChjdXJyVGFyZ2V0LCB7IGlubmVySFRNTDogJycgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQcmV2VGFyZ2V0KGN1cnJUYXJnZXQpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gdG8gYWxsb3cgZHJvcCBhdCB0aGlzIGxvY2F0aW9uXG4gIH1cblxuICBzdGF0aWMgZHJvcChlKSB7XG4gICAgY29uc3QgeyBpbm5lckhUTUwsIGNoZWNrZWQgfSA9IEpTT04ucGFyc2UoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnYXR0cmlidXRlcycpKTtcblxuICAgIHVwZGF0ZVRhcmdldChcbiAgICAgIGUudGFyZ2V0LFxuICAgICAgbmV3IERyYWdEYXRhKGlubmVySFRNTCwgY2hlY2tlZCA9PT0gdHJ1ZSksXG4gICAgKTtcbiAgfVxuXG4gIC8vIGluIGNhc2UgbGlzdCBpdGVtIGlzIGRyb3BwZWQgb3V0c2lkZSBvZiBsaXN0XG4gIGVuZChlLCB0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBjcnVkKSB7XG4gICAgaWYgKGdldElubmVySFRNTCh0aGlzLnByZXZUYXJnZXQpID09PSAnJykge1xuICAgICAgdXBkYXRlVGFyZ2V0KFxuICAgICAgICB0aGlzLnByZXZUYXJnZXQsXG4gICAgICAgIG5ldyBEcmFnRGF0YSh0aGlzLmRyYWdnZWRJbm5lckhUTUwsIHRoaXMuZHJhZ2dlZENoZWNrID09PSB0cnVlKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdG9Eb0xpc3QucmVPcmRlcigpO1xuICAgIGNoZWNrYm94TGlzdFxuICAgICAgLnNldENoZWNrYm94ZXMoKVxuICAgICAgLnNldExpc3RlbmVycyh0b0RvTGlzdCk7XG4gICAgY3J1ZC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgdGhpcyk7XG4gIH1cblxuICBzZXRQcmV2VGFyZ2V0KGVsZW1lbnQpIHtcbiAgICB0aGlzLnByZXZUYXJnZXQgPSBlbGVtZW50O1xuICB9XG5cbiAgc2V0RHJhZ2dlZERhdGEoaW5uZXJIVE1MLCBjaGVja2VkKSB7XG4gICAgdGhpcy5kcmFnZ2VkSW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuZHJhZ2dlZENoZWNrID0gY2hlY2tlZDtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdEYXRhIHtcbiAgY29uc3RydWN0b3IoaW5uZXJIVE1MLCBjaGVja2VkKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGVuZ3RoID0gKExvY2FsU3RvcmFnZS5mZXRjaCgpID09PSBudWxsID8gMCA6IDEpO1xuICB9XG5cbiAgc3RhdGljIGZldGNoKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGUodGFza3MpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwZXJBcnJheSBleHRlbmRzIEFycmF5IHtcbiAgaW5kZXhPZkVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4T2YoZWxlbWVudCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrLmpzJztcbmltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSAnLi9Mb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vbGlicmFyeS5qcyc7XG5pbXBvcnQge1xuICBnZXRJbm5lckhUTUwsIGdldENoZWNrZWQsIHF1ZXJ5RWxlbWVudCwgcXVlcnlFbGVtZW50cyxcbn0gZnJvbSAnLi9ET00uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmxpc3QgPSBxdWVyeUVsZW1lbnQoZG9jdW1lbnQsICd1bCcpO1xuICAgIC8vIHRoaXMubGlzdEl0ZW1zID0gcXVlcnlFbGVtZW50cyhkb2N1bWVudCwgJ2xpJyk7XG4gICAgLy8gdGhpcy5scyA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMubHMubGVuZ3RoID4gMCkge1xuICAgICAgTG9jYWxTdG9yYWdlLmZldGNoKCkuZm9yRWFjaCgoeyBkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCB9KSA9PiB7XG4gICAgICAgIHRoaXMuYWRkKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wb3B1bGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xuICAgIHRoaXMudGFza3MucHVzaChuZXcgVGFzayhkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkpO1xuICB9XG5cbiAgc29ydCgpIHtcbiAgICB0aGlzLnRhc2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgfVxuXG4gIHBvcHVsYXRlKCkge1xuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnRhc2tzXG4gICAgICAubWFwKCh0YXNrKSA9PiBbdGFzay5kZXNjcmlwdGlvbiwgdGFzay5jb21wbGV0ZWRdKVxuICAgICAgLmZvckVhY2goKFtkZXNjcmlwdGlvbiwgY29tcGxldGVkXSkgPT4gdGhpcy5hcHBlbmRMaXN0SXRlbShkZXNjcmlwdGlvbiwgY29tcGxldGVkKSk7XG4gICAgdGhpcy5zZXRMaXN0SXRlbXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFwcGVuZExpc3RJdGVtKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ2ZsZXgtcm93IHNwYWNlLWJldHdlZW4gYWxpZ24tY2VudGVyJywgeyBkcmFnZ2FibGU6IHRydWUgfSk7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1yb3cgYWxpZ24tY2VudGVyIGZpbGwnKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmQoXG4gICAgICBjcmVhdGVFbGVtZW50KCdpbnB1dCcsICcnLCB7IHR5cGU6ICdjaGVja2JveCcgfSwgJycsIHsgY2hlY2tlZDogY29tcGxldGVkIH0pLFxuICAgICAgY3JlYXRlRWxlbWVudCgnc3BhbicsICdmaWxsJywgeyBjb250ZW50ZWRpdGFibGU6IHRydWUgfSwgZGVzY3JpcHRpb24pLFxuICAgICk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kKFxuICAgICAgY2hlY2tib3hDb250YWluZXIsXG4gICAgICBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnbWF0ZXJpYWwtaWNvbnMgZHJhZycsIHt9LCAnbW9yZV92ZXJ0JyksXG4gICAgKTtcbiAgICB0aGlzLmxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgfVxuXG4gIHNldExpc3RJdGVtcygpIHtcbiAgICB0aGlzLmxpc3RJdGVtcyA9IHF1ZXJ5RWxlbWVudHMoZG9jdW1lbnQsICdsaScpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgcmVPcmRlcigpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmxpc3RJdGVtcy5mb3JFYWNoKChsaXN0SXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuYWRkKFxuICAgICAgICBnZXRJbm5lckhUTUwocXVlcnlFbGVtZW50KGxpc3RJdGVtLCAnc3BhbicpKSxcbiAgICAgICAgZ2V0Q2hlY2tlZChxdWVyeUVsZW1lbnQobGlzdEl0ZW0sICdpbnB1dCcpKSxcbiAgICAgICAgaW5kZXggKyAxLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIExvY2FsU3RvcmFnZS51cGRhdGUodGhpcy50YXNrcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZVRhc2soaW5kZXgsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHRoaXMudGFza3NbaW5kZXhdW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIExvY2FsU3RvcmFnZS51cGRhdGUodGhpcy50YXNrcyk7XG4gIH1cblxuICBkZWxldGVUYXNrKGluZGV4KSB7XG4gICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZmlsdGVyVGFza3MoKSB7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xuICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUsIGNsYXNzTmFtZXMgPSAnJywgYXR0cmlidXRlcyA9IHt9LCBpbm5lckhUTUwgPSAnJywgcHJvcGVydGllcyA9IHt9KSB7XG4gIGNvbnN0IGVsZW1lbnRPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgaWYgKGNsYXNzTmFtZXMpIGVsZW1lbnRPYmplY3QuY2xhc3NMaXN0LmFkZCguLi4oY2xhc3NOYW1lcy5zcGxpdCgnICcpKSk7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgIGVsZW1lbnRPYmplY3Quc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgfSk7XG4gIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgZWxlbWVudE9iamVjdFtwcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgfSk7XG4gIGVsZW1lbnRPYmplY3QuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICByZXR1cm4gZWxlbWVudE9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVycyhlbGVtZW50cywgbGlzdGVuZXJzKSB7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhsaXN0ZW5lcnMpLmZvckVhY2goKFtldmVudCwgbGlzdGVuZXJdKSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCBUb0RvTGlzdCBmcm9tICcuL1RvRG9MaXN0LmpzJztcbmltcG9ydCBDaGVja2JveExpc3QgZnJvbSAnLi9DaGVja2JveExpc3QuanMnO1xuaW1wb3J0IERyYWcgZnJvbSAnLi9EcmFnLmpzJztcbmltcG9ydCBDUlVEIGZyb20gJy4vQ1JVRC5qcyc7XG5cbmxldCB0b0RvTGlzdDtcbmxldCBjaGVja2JveExpc3Q7XG5sZXQgZHJhZztcbmxldCBjcnVkO1xuXG5mdW5jdGlvbiBpbml0TGlzdCgpIHtcbiAgdG9Eb0xpc3QuaW5pdCgpO1xufVxuXG5mdW5jdGlvbiBpbml0Q2hlY2tib3hFdmVudHMoKSB7XG4gIGNoZWNrYm94TGlzdC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QpO1xufVxuXG5mdW5jdGlvbiBpbml0RHJhZ0V2ZW50cygpIHtcbiAgZHJhZy5zZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgY3J1ZCk7XG59XG5cbmZ1bmN0aW9uIGluaXRDUlVEKCkge1xuICBjcnVkLnNldExpc3RlbmVycyh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKTtcbn1cblxuZnVuY3Rpb24gaW5pdE9iamVjdHMoKSB7XG4gIHRvRG9MaXN0ID0gbmV3IFRvRG9MaXN0KCk7XG4gIGNoZWNrYm94TGlzdCA9IG5ldyBDaGVja2JveExpc3QoKTtcbiAgZHJhZyA9IG5ldyBEcmFnKCk7XG4gIGNydWQgPSBuZXcgQ1JVRCgpO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpbml0T2JqZWN0cygpO1xuICBpbml0TGlzdCgpO1xuICBpbml0Q2hlY2tib3hFdmVudHMoKTtcbiAgaW5pdERyYWdFdmVudHMoKTtcbiAgaW5pdENSVUQoKTtcbn1cblxubmV3IFByb21pc2UoKHJlc29sdmUpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSkpLnRoZW4oKCkgPT4gaW5pdCgpKTsiXSwic291cmNlUm9vdCI6IiJ9