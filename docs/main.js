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
    toDoList.populate();
    toDoList.reOrder();
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
    checkboxList.setCheckboxes();
    checkboxList.setListeners(toDoList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvQ1JVRC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0NoZWNrYm94TGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0RyYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9EcmFnRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLG1IQUFt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Ozs7QUNONEI7QUFDUztBQUNRO0FBQ2hCO0FBQ0E7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpREFBUTtBQUN6QixxQkFBcUIscURBQVk7QUFDakMsYUFBYSw2Q0FBSTtBQUNqQixhQUFhLDZDQUFJO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNGIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsQDA7MSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZmxleC1yb3csIC5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5zcGFjZS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5maWxsIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmNvbnRhaW5lciBidXR0b24sXFxuLmNvbnRhaW5lciBpbnB1dCxcXG4uY29udGFpbmVyIGxpLFxcbi5jb250YWluZXIgc3BhbiB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IGdyZXk7XFxufVxcbi5jb250YWluZXIgLm1hdGVyaWFsLWljb25zIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG4uY29udGFpbmVyIC5tYXRlcmlhbC1pY29uczpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb250YWluZXIgLmRyYWc6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4uY29udGFpbmVyIC5wb2ludGVyOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbnRhaW5lciA+IGRpdixcXG4uY29udGFpbmVyIGxpIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG59XFxuLmNvbnRhaW5lciA+IGRpdixcXG4uY29udGFpbmVyIGxpLFxcbi5jb250YWluZXIgPiBidXR0b24ge1xcbiAgbWluLWhlaWdodDogNDBweDtcXG59XFxuLmNvbnRhaW5lciBidXR0b24ge1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5jb250YWluZXIgLmJ0bi1jbGVhcjpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmNvbnRhaW5lciBpbnB1dCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogZ3JleTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmNvbnRhaW5lciBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmNvbnRhaW5lciBzcGFuOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmNvbnRhaW5lciBzcGFuOmZvY3VzLXdpdGhpbiB7XFxuICBjdXJzb3I6IHRleHQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19mbGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jdXN0b20uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFZQTtFQUNFLGFBQUE7QUNWRjs7QURhQTtFQWZFLHNCQWtCd0M7QUNaMUM7O0FEZUE7RUFyQkUsbUJBd0J3QztBQ2QxQzs7QURpQkE7RUF2QkUsOEJBd0JvQztBQ2R0Qzs7QURpQkE7RUEzQkUsdUJBNEJvQztBQ2R0Qzs7QURpQkE7RUEzQkUsbUJBNEJnQztBQ2RsQzs7QURpQkE7RUFDRSxZQUFBO0FDZEY7O0FDM0JBOzs7O0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FEaUNGOztBQWpDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QUFvQ0Y7O0FBL0JBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBTGU7RUFNZiwyQkFBQTtBQWtDRjtBQWhDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQWtDSjtBQWhDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBa0NOO0FBN0JJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUErQk47QUExQkk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQTRCTjtBQXhCRTs7RUFFRSxhQUFBO0VBQ0EsNkJBbkNhO0FBNkRqQjtBQXZCRTs7O0VBR0UsZ0JBQUE7QUF5Qko7QUFmRTtFQUNFLFdBQUE7QUFpQko7QUFiSTtFQUNFLDBCQUFBO0FBZU47QUFYRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBYUo7QUFWRTtFQUNFLGtCQUFBO0FBWUo7QUFWSTtFQUNFLGVBQUE7QUFZTjtBQVRJO0VBQ0UsWUFBQTtBQVdOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBkaXJlY3Rpb24oJGRpcmVjdGlvbi1wcm9wZXJ0eSkge1xcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb24tcHJvcGVydHk7XFxufVxcblxcbkBtaXhpbiBqdXN0aWZ5KCRqdXN0aWZ5LXByb3BlcnR5KSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LXByb3BlcnR5O1xcbn1cXG5cXG5AbWl4aW4gYWxpZ24oJGFsaWduLXByb3BlcnR5KSB7XFxuICBhbGlnbi1pdGVtczogJGFsaWduLXByb3BlcnR5O1xcbn1cXG5cXG4lZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgQGV4dGVuZCAlZmxleDtcXG5cXG4gIEBpbmNsdWRlIGRpcmVjdGlvbigkZGlyZWN0aW9uLXByb3BlcnR5OiBjb2x1bW4pO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgQGV4dGVuZCAlZmxleDtcXG5cXG4gIEBpbmNsdWRlIGRpcmVjdGlvbigkZGlyZWN0aW9uLXByb3BlcnR5OiByb3cpO1xcbn1cXG5cXG4uc3BhY2UtYmV0d2VlbiB7XFxuICBAaW5jbHVkZSBqdXN0aWZ5KCRqdXN0aWZ5LXByb3BlcnR5OiBzcGFjZS1iZXR3ZWVuKTtcXG59XFxuXFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIEBpbmNsdWRlIGp1c3RpZnkoJGp1c3RpZnktcHJvcGVydHk6IGNlbnRlcik7XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgQGluY2x1ZGUgYWxpZ24oJGFsaWduLXByb3BlcnR5OiBjZW50ZXIpO1xcbn1cXG5cXG4uZmlsbCB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWxAMDsxJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgJ2ZsZXguc2Nzcyc7XFxuQGltcG9ydCAnY3VzdG9tLnNjc3MnO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiRkZWZhdWx0LWJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogODUlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICBib3JkZXI6ICRkZWZhdWx0LWJvcmRlcjtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggZ3JleTtcXG5cXG4gIC5tYXRlcmlhbC1pY29ucyB7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGdyZXk7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kcmFnIHtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIGN1cnNvcjogbW92ZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnBvaW50ZXIge1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICB9XFxuXFxuICA+IGRpdixcXG4gIGxpIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogJGRlZmF1bHQtYm9yZGVyO1xcbiAgfVxcblxcbiAgPiBkaXYsXFxuICBsaSxcXG4gID4gYnV0dG9uIHtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gIH1cXG5cXG4gIGJ1dHRvbixcXG4gIGlucHV0LFxcbiAgbGksXFxuICBzcGFuIHtcXG4gICAgQGV4dGVuZCAlbWluaW1hbDtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgfVxcblxcbiAgLmJ0bi1jbGVhciB7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICB9XFxuXFxuICBpbnB1dCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG5cXG4gIHNwYW4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgfVxcblxcbiAgICAmOmZvY3VzLXdpdGhpbiB7XFxuICAgICAgY3Vyc29yOiB0ZXh0O1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJW1pbmltYWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkTGlzdGVuZXJzIH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcbmltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSAnLi9Mb2NhbFN0b3JhZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDUlVEIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50ZXh0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcbiAgICB0aGlzLmFkZEJ1dHRvbiA9IHRoaXMudGV4dGJveC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgdGhpcy5zcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbiA9ICcnO1xuICAgIHRoaXMuY2xlYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsZWFyJyk7XG4gIH1cblxuICBzZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZykge1xuICAgIHRoaXMudGV4dGJveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2tleWRvd24nLFxuICAgICAgKGUpID0+IHRoaXMuYWRkTmV3VGFzayhlLCB0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSxcbiAgICApO1xuXG4gICAgdGhpcy5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICAoZSkgPT4gdGhpcy5hZGROZXdUYXNrKGUsIHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpLFxuICAgICk7XG5cbiAgICB0aGlzLnNldFNwYW5zKCk7XG4gICAgYWRkTGlzdGVuZXJzKFxuICAgICAgdGhpcy5zcGFucyxcbiAgICAgIHtcbiAgICAgICAgZm9jdXNpbjogKGUpID0+IHRoaXMudG9nZ2xlRGVsZXRlQnV0dG9uKGUpLFxuICAgICAgICBmb2N1c291dDogKGUpID0+IHRoaXMuZWRpdFRhc2soZSwgdG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICB0aGlzLmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgKCkgPT4gdGhpcy5jbGVhckNvbXBsZXRlZCh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSxcbiAgICApO1xuICB9XG5cbiAgYWRkTmV3VGFzayhlLCB0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSB7XG4gICAgaWYgKHRoaXMudGV4dGJveC52YWx1ZSAhPT0gJycgJiYgKFxuICAgICAgKGUudHlwZSA9PT0gJ2tleWRvd24nICYmIGUua2V5ID09PSAnRW50ZXInKSB8fCAoZS50eXBlID09PSAnY2xpY2snKSkpIHtcbiAgICAgIHRvRG9MaXN0LmFkZCh0aGlzLnRleHRib3gudmFsdWUsIGZhbHNlLCB0b0RvTGlzdC50YXNrcy5sZW5ndGggKyAxKTtcbiAgICAgIExvY2FsU3RvcmFnZS51cGRhdGUodG9Eb0xpc3QudGFza3MpO1xuICAgICAgdG9Eb0xpc3QucG9wdWxhdGUoKTtcbiAgICAgIHRoaXMuYWRkQWxsTGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMudGV4dGJveC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURlbGV0ZUJ1dHRvbihlKSB7XG4gICAgaWYgKGUudHlwZSAhPT0gJycpIHRoaXMuZGVsZXRlQnV0dG9uID0gZS50YXJnZXQucGFyZW50Tm9kZS5uZXh0U2libGluZztcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAoZS50eXBlID09PSAnZm9jdXNpbicgPyAnZGVsZXRlJyA6ICdtb3JlX3ZlcnQnKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyJyk7XG4gIH1cblxuICBlZGl0VGFzayhlLCB0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSB7XG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PT0gdGhpcy5kZWxldGVCdXR0b24pIHtcbiAgICAgIHRvRG9MaXN0LmRlbGV0ZVRhc2soQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLnNwYW5zLCBlLnRhcmdldCkpO1xuICAgICAgdGhpcy5yZWZyZXNoKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZURlbGV0ZUJ1dHRvbihlKTtcblxuICAgICAgdG9Eb0xpc3QudXBkYXRlVGFzayhcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLnNwYW5zLCBlLnRhcmdldCksXG4gICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJDb21wbGV0ZWQodG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZykge1xuICAgIHRvRG9MaXN0LmZpbHRlclRhc2tzKCk7XG4gICAgdGhpcy5yZWZyZXNoKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGRyYWcpO1xuICB9XG5cbiAgcmVmcmVzaCh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKSB7XG4gICAgdG9Eb0xpc3QucG9wdWxhdGUoKTtcbiAgICB0b0RvTGlzdC5yZU9yZGVyKCk7XG4gICAgdGhpcy5hZGRBbGxMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG4gIH1cblxuICBhZGRBbGxMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZykge1xuICAgIGNoZWNrYm94TGlzdC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QpO1xuICAgIGRyYWcuc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIHRoaXMpO1xuICAgIHRoaXMuc2V0U3BhbnMoKTtcbiAgICB0aGlzLnNldExpc3RlbmVycyh0b0RvTGlzdCwgY2hlY2tib3hMaXN0LCBkcmFnKTtcbiAgfVxuXG4gIHNldFNwYW5zKCkge1xuICAgIHRoaXMuc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG4gIH1cbn0iLCJpbXBvcnQgeyBhZGRMaXN0ZW5lcnMgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaSBpbnB1dCcpO1xuICB9XG5cbiAgc2V0TGlzdGVuZXJzKHRvRG9MaXN0KSB7XG4gICAgdGhpcy5zZXRDaGVja2JveGVzKCk7XG4gICAgYWRkTGlzdGVuZXJzKFxuICAgICAgdGhpcy5jaGVja2JveGVzLFxuICAgICAge1xuICAgICAgICBjaGFuZ2U6IChlKSA9PiB0aGlzLmNoYW5nZVN0YXR1cyhlLCB0b0RvTGlzdCksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBjaGFuZ2VTdGF0dXMoZSwgdG9Eb0xpc3QpIHtcbiAgICB0b0RvTGlzdC51cGRhdGVUYXNrKFxuICAgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLmNoZWNrYm94ZXMsIGUudGFyZ2V0KSxcbiAgICAgICdjb21wbGV0ZWQnLFxuICAgICAgZS50YXJnZXQuY2hlY2tlZCxcbiAgICApO1xuICB9XG5cbiAgc2V0Q2hlY2tib3hlcygpIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaSBpbnB1dCcpO1xuICB9XG59IiwiaW1wb3J0IERyYWdEYXRhIGZyb20gJy4vRHJhZ0RhdGEuanMnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXJzIH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcblxuZnVuY3Rpb24gdXBkYXRlVGFyZ2V0KHRhcmdldCwgc291cmNlKSB7XG4gIHRhcmdldC5pbm5lckhUTUwgPSBzb3VyY2UuaW5uZXJIVE1MO1xuICB0YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gc291cmNlLmNoZWNrZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByZXZUYXJnZXQgPSAnJztcbiAgICB0aGlzLmRyYWdnZWRJbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmRyYWdnZWRDaGVjayA9ICcnO1xuICB9XG5cbiAgc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGNydWQpIHtcbiAgICBhZGRMaXN0ZW5lcnMoXG4gICAgICB0b0RvTGlzdC5saXN0SXRlbXMsXG4gICAgICB7XG4gICAgICAgIGRyYWdzdGFydDogKGUpID0+IHRoaXMuc3RhcnQoZSwgY3J1ZCksXG4gICAgICAgIGRyYWdvdmVyOiAoZSkgPT4gdGhpcy5vdmVyKGUpLFxuICAgICAgICBkcm9wOiAoZSkgPT4gRHJhZy5kcm9wKGUpLFxuICAgICAgICBkcmFnZW5kOiAoZSkgPT4gdGhpcy5lbmQoZSwgdG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgY3J1ZCksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBzdGFydChlLCBjcnVkKSB7XG4gICAgaWYgKGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmlubmVySFRNTCA9PT0gJ2RlbGV0ZScpIGNydWQudG9nZ2xlRGVsZXRlQnV0dG9uKG5ldyBFdmVudCgnJykpO1xuICAgIHRoaXMuc2V0UHJldlRhcmdldChlLnRhcmdldCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcbiAgICAgICdhdHRyaWJ1dGVzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KG5ldyBEcmFnRGF0YShlLnRhcmdldC5pbm5lckhUTUwsIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCkpLFxuICAgICk7XG4gICAgdGhpcy5zZXREcmFnZ2VkRGF0YShlLnRhcmdldC5pbm5lckhUTUwsIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCk7XG4gIH1cblxuICBvdmVyKGUpIHtcbiAgICBsZXQgY3VyclRhcmdldDtcblxuICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLnRhZ05hbWUgPT09ICdMSScpIGN1cnJUYXJnZXQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ0RJVicpIGN1cnJUYXJnZXQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgZWxzZSBjdXJyVGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAvLyBpZiBkcmFnZ2luZyBvdmVyIG5ldyB0YXJnZXQsIHNoaWZ0IGN1cnJlbnQgY29udGVudCB0byBwcmV2aW91cyB0YXJnZXQsXG4gICAgLy8gYW5kIGVtcHR5IGN1cnJlbnQgY29udGVudFxuICAgIGlmICh0aGlzLnByZXZUYXJnZXQgIT09IGN1cnJUYXJnZXQpIHtcbiAgICAgIHVwZGF0ZVRhcmdldChcbiAgICAgICAgdGhpcy5wcmV2VGFyZ2V0LFxuICAgICAgICBuZXcgRHJhZ0RhdGEoY3VyclRhcmdldC5pbm5lckhUTUwsIGN1cnJUYXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkKSxcbiAgICAgICk7XG5cbiAgICAgIGN1cnJUYXJnZXQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQcmV2VGFyZ2V0KGN1cnJUYXJnZXQpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gdG8gYWxsb3cgZHJvcCBhdCB0aGlzIGxvY2F0aW9uXG4gIH1cblxuICBzdGF0aWMgZHJvcChlKSB7XG4gICAgY29uc3QgZGF0YVRyYW5zZmVyID0gSlNPTi5wYXJzZShlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdhdHRyaWJ1dGVzJykpO1xuXG4gICAgdXBkYXRlVGFyZ2V0KFxuICAgICAgZS50YXJnZXQsXG4gICAgICBuZXcgRHJhZ0RhdGEoZGF0YVRyYW5zZmVyLmlubmVySFRNTCwgZGF0YVRyYW5zZmVyLmNoZWNrZWQgPT09IHRydWUpLFxuICAgICk7XG4gIH1cblxuICAvLyBpbiBjYXNlIGxpc3QgaXRlbSBpcyBkcm9wcGVkIG91dHNpZGUgb2YgbGlzdFxuICBlbmQoZSwgdG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgY3J1ZCkge1xuICAgIGlmICh0aGlzLnByZXZUYXJnZXQuaW5uZXJIVE1MID09PSAnJykge1xuICAgICAgdXBkYXRlVGFyZ2V0KFxuICAgICAgICB0aGlzLnByZXZUYXJnZXQsXG4gICAgICAgIG5ldyBEcmFnRGF0YSh0aGlzLmRyYWdnZWRJbm5lckhUTUwsIHRoaXMuZHJhZ2dlZENoZWNrID09PSB0cnVlKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdG9Eb0xpc3QucmVPcmRlcigpO1xuICAgIGNoZWNrYm94TGlzdC5zZXRDaGVja2JveGVzKCk7XG4gICAgY2hlY2tib3hMaXN0LnNldExpc3RlbmVycyh0b0RvTGlzdCk7XG4gICAgY3J1ZC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgdGhpcyk7XG4gIH1cblxuICBzZXRQcmV2VGFyZ2V0KGVsZW1lbnQpIHtcbiAgICB0aGlzLnByZXZUYXJnZXQgPSBlbGVtZW50O1xuICB9XG5cbiAgc2V0RHJhZ2dlZERhdGEoaW5uZXJIVE1MLCBjaGVja2VkKSB7XG4gICAgdGhpcy5kcmFnZ2VkSW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuZHJhZ2dlZENoZWNrID0gY2hlY2tlZDtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdEYXRhIHtcbiAgY29uc3RydWN0b3IoaW5uZXJIVE1MLCBjaGVja2VkKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGVuZ3RoID0gKExvY2FsU3RvcmFnZS5mZXRjaCgpID09PSBudWxsID8gMCA6IDEpO1xuICB9XG5cbiAgc3RhdGljIGZldGNoKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGUodGFza3MpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qcyc7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gJy4vTG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIHRoaXMubGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICB0aGlzLmxzID0gbmV3IExvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5scy5sZW5ndGggPiAwKSB7XG4gICAgICBMb2NhbFN0b3JhZ2UuZmV0Y2goKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkKHRhc2suZGVzY3JpcHRpb24sIHRhc2suY29tcGxldGVkLCB0YXNrLmluZGV4KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wb3B1bGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xuICAgIHRoaXMudGFza3MucHVzaChuZXcgVGFzayhkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkpO1xuICB9XG5cbiAgc29ydCgpIHtcbiAgICB0aGlzLnRhc2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgfVxuXG4gIHBvcHVsYXRlKCkge1xuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnRhc2tzXG4gICAgICAubWFwKCh0YXNrKSA9PiBbdGFzay5kZXNjcmlwdGlvbiwgdGFzay5jb21wbGV0ZWRdKVxuICAgICAgLmZvckVhY2goKFtkZXNjcmlwdGlvbiwgY29tcGxldGVkXSkgPT4gdGhpcy5hcHBlbmRMaXN0SXRlbShkZXNjcmlwdGlvbiwgY29tcGxldGVkKSk7XG4gICAgdGhpcy5zZXRMaXN0SXRlbXMoKTtcbiAgfVxuXG4gIGFwcGVuZExpc3RJdGVtKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ2ZsZXgtcm93IHNwYWNlLWJldHdlZW4gYWxpZ24tY2VudGVyJywgeyBkcmFnZ2FibGU6IHRydWUgfSk7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1yb3cgYWxpZ24tY2VudGVyIGZpbGwnKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmQoXG4gICAgICBjcmVhdGVFbGVtZW50KCdpbnB1dCcsICcnLCB7IHR5cGU6ICdjaGVja2JveCcgfSwgJycsIHsgY2hlY2tlZDogY29tcGxldGVkIH0pLFxuICAgICAgY3JlYXRlRWxlbWVudCgnc3BhbicsICdmaWxsJywgeyBjb250ZW50ZWRpdGFibGU6IHRydWUgfSwgZGVzY3JpcHRpb24pLFxuICAgICk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kKFxuICAgICAgY2hlY2tib3hDb250YWluZXIsXG4gICAgICBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnbWF0ZXJpYWwtaWNvbnMgZHJhZycsIHt9LCAnbW9yZV92ZXJ0JyksXG4gICAgKTtcbiAgICB0aGlzLmxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgfVxuXG4gIHNldExpc3RJdGVtcygpIHtcbiAgICB0aGlzLmxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICByZU9yZGVyKCkge1xuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMubGlzdEl0ZW1zLmZvckVhY2goKGxpc3RJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5hZGQoXG4gICAgICAgIGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lckhUTUwsXG4gICAgICAgIGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCxcbiAgICAgICAgaW5kZXggKyAxLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIExvY2FsU3RvcmFnZS51cGRhdGUodGhpcy50YXNrcyk7XG4gIH1cblxuICB1cGRhdGVUYXNrKGluZGV4LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICB0aGlzLnRhc2tzW2luZGV4XVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBMb2NhbFN0b3JhZ2UudXBkYXRlKHRoaXMudGFza3MpO1xuICB9XG5cbiAgZGVsZXRlVGFzayhpbmRleCkge1xuICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZpbHRlclRhc2tzKCkge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlLCBjbGFzc05hbWVzID0gJycsIGF0dHJpYnV0ZXMgPSB7fSwgaW5uZXJIVE1MID0gJycsIHByb3BlcnRpZXMgPSB7fSkge1xuICBjb25zdCBlbGVtZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gIGlmIChjbGFzc05hbWVzKSBlbGVtZW50T2JqZWN0LmNsYXNzTGlzdC5hZGQoLi4uKGNsYXNzTmFtZXMuc3BsaXQoJyAnKSkpO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICBlbGVtZW50T2JqZWN0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gIH0pO1xuICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGVsZW1lbnRPYmplY3RbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV07XG4gIH0pO1xuICBlbGVtZW50T2JqZWN0LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIGVsZW1lbnRPYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoZWxlbWVudHMsIGxpc3RlbmVycykge1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMobGlzdGVuZXJzKS5mb3JFYWNoKChbZXZlbnQsIGxpc3RlbmVyXSkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi9Ub0RvTGlzdC5qcyc7XG5pbXBvcnQgQ2hlY2tib3hMaXN0IGZyb20gJy4vQ2hlY2tib3hMaXN0LmpzJztcbmltcG9ydCBEcmFnIGZyb20gJy4vRHJhZy5qcyc7XG5pbXBvcnQgQ1JVRCBmcm9tICcuL0NSVUQuanMnO1xuXG5sZXQgdG9Eb0xpc3Q7XG5sZXQgY2hlY2tib3hMaXN0O1xubGV0IGRyYWc7XG5sZXQgY3J1ZDtcblxuZnVuY3Rpb24gaW5pdExpc3QoKSB7XG4gIHRvRG9MaXN0LmluaXQoKTtcbn1cblxuZnVuY3Rpb24gaW5pdENoZWNrYm94RXZlbnRzKCkge1xuICBjaGVja2JveExpc3Quc2V0TGlzdGVuZXJzKHRvRG9MaXN0KTtcbn1cblxuZnVuY3Rpb24gaW5pdERyYWdFdmVudHMoKSB7XG4gIGRyYWcuc2V0TGlzdGVuZXJzKHRvRG9MaXN0LCBjaGVja2JveExpc3QsIGNydWQpO1xufVxuXG5mdW5jdGlvbiBpbml0Q1JVRCgpIHtcbiAgY3J1ZC5zZXRMaXN0ZW5lcnModG9Eb0xpc3QsIGNoZWNrYm94TGlzdCwgZHJhZyk7XG59XG5cbmZ1bmN0aW9uIGluaXRPYmplY3RzKCkge1xuICB0b0RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpO1xuICBjaGVja2JveExpc3QgPSBuZXcgQ2hlY2tib3hMaXN0KCk7XG4gIGRyYWcgPSBuZXcgRHJhZygpO1xuICBjcnVkID0gbmV3IENSVUQoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaW5pdE9iamVjdHMoKTtcbiAgaW5pdExpc3QoKTtcbiAgaW5pdENoZWNrYm94RXZlbnRzKCk7XG4gIGluaXREcmFnRXZlbnRzKCk7XG4gIGluaXRDUlVEKCk7XG59XG5cbm5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUpKS50aGVuKCgpID0+IGluaXQoKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==