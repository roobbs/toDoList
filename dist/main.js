/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --fst-color: #84accb;
    --snd-color: #212187;
    --trd-color: #0f0f20;
    --fth-color:#ffffff; 
}
body{
    background-color: var(--fst-color);
    color: white;
    min-height: 100vh;
    margin: 0;
    display: grid;
    grid-template-rows: auto 1fr;
    font-family: monospace;
}
.header{
    text-align: center;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--snd-color);
    padding: .2rem;
}
.main{
    display: grid;
    grid-template-columns: 1fr 3fr;
}
.sidebar{
    background-color: var(--trd-color);
    border-top-right-radius: 20px;
    padding: 1.5rem;
    padding-right: 0;
}
.content{
    background-color: var(--fth-color);
    color: var(--trd-color);
    border-top-left-radius: 30px;
    padding: 1.5rem;
    padding-left: 2rem;
}
.title{
    font-size: 2rem;
    font-weight: 900;
    padding-bottom: 1.5rem;
    padding-right: 1rem;
}
.projects{
    display: grid;
    gap: 1rem;
}
.projectContainer{
    background-color: #3a4a65;
    border: 2px solid var(--fth-color);
    border-radius: 6px;
    display: grid;
    gap: .5rem;
    justify-items: end;
    padding: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
}
.projectContainer:hover{
    background-color: var(--snd-color);
    color: var(--fth-color);
}
.projectName{
    font-weight: 900;
    font-size: 1.5rem;
    text-align:center;
}
.projectDesc{
    font-family: Arial, sans-serif;
    font-size: 1.1rem;
    font-style: italic;
    text-align: center;
}
.selectedProject{
    background-color: var(--fth-color);
    border-color: var(--snd-color);
    color: #212187;
}
.allTasks{
    margin-bottom: 2rem;
}
/***********************************************/
.todos{
    display: grid;
    gap: 1.2rem;
}
.todoContainer{
    background-color: var(--fst-color);
    border-radius: 10px;
    padding: 5px;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 1rem;
    border-bottom: 2px solid var(--snd-color);
}
.todoContainer:hover{
    background-color: var(--snd-color);
    color: var(--fth-color);
}
.todoCheck{
    height: 1.6rem;
    width: 1.6rem;
    padding: 2px;
    text-align: center;
    background-color: var(--trd-color);
    border-radius: 50%;
}
.todoName{
    font-size: 1.2rem;
    font-weight: 900;
    flex: 1;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,mBAAmB;AACvB;AACA;IACI,kCAAkC;IAClC,YAAY;IACZ,iBAAiB;IACjB,SAAS;IACT,aAAa;IACb,4BAA4B;IAC5B,sBAAsB;AAC1B;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,cAAc;AAClB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kCAAkC;IAClC,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,kCAAkC;IAClC,uBAAuB;IACvB,4BAA4B;IAC5B,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,yBAAyB;IACzB,kCAAkC;IAClC,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,0BAA0B;IAC1B,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,kCAAkC;IAClC,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,kCAAkC;IAClC,8BAA8B;IAC9B,cAAc;AAClB;AACA;IACI,mBAAmB;AACvB;AACA,gDAAgD;AAChD;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,kCAAkC;IAClC,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,yCAAyC;AAC7C;AACA;IACI,kCAAkC;IAClC,uBAAuB;AAC3B;AACA;IACI,cAAc;IACd,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,kCAAkC;IAClC,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,OAAO;AACX","sourcesContent":[":root{\n    --fst-color: #84accb;\n    --snd-color: #212187;\n    --trd-color: #0f0f20;\n    --fth-color:#ffffff; \n}\nbody{\n    background-color: var(--fst-color);\n    color: white;\n    min-height: 100vh;\n    margin: 0;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    font-family: monospace;\n}\n.header{\n    text-align: center;\n    font-size: 1.8rem;\n    font-weight: 900;\n    color: var(--snd-color);\n    padding: .2rem;\n}\n.main{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.sidebar{\n    background-color: var(--trd-color);\n    border-top-right-radius: 20px;\n    padding: 1.5rem;\n    padding-right: 0;\n}\n.content{\n    background-color: var(--fth-color);\n    color: var(--trd-color);\n    border-top-left-radius: 30px;\n    padding: 1.5rem;\n    padding-left: 2rem;\n}\n.title{\n    font-size: 2rem;\n    font-weight: 900;\n    padding-bottom: 1.5rem;\n    padding-right: 1rem;\n}\n.projects{\n    display: grid;\n    gap: 1rem;\n}\n.projectContainer{\n    background-color: #3a4a65;\n    border: 2px solid var(--fth-color);\n    border-radius: 6px;\n    display: grid;\n    gap: .5rem;\n    justify-items: end;\n    padding: 8px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right: none;\n}\n.projectContainer:hover{\n    background-color: var(--snd-color);\n    color: var(--fth-color);\n}\n.projectName{\n    font-weight: 900;\n    font-size: 1.5rem;\n    text-align:center;\n}\n.projectDesc{\n    font-family: Arial, sans-serif;\n    font-size: 1.1rem;\n    font-style: italic;\n    text-align: center;\n}\n.selectedProject{\n    background-color: var(--fth-color);\n    border-color: var(--snd-color);\n    color: #212187;\n}\n.allTasks{\n    margin-bottom: 2rem;\n}\n/***********************************************/\n.todos{\n    display: grid;\n    gap: 1.2rem;\n}\n.todoContainer{\n    background-color: var(--fst-color);\n    border-radius: 10px;\n    padding: 5px;\n    display: flex;\n    gap: 2rem;\n    justify-content: space-between;\n    padding-right: 2rem;\n    padding-left: 1rem;\n    border-bottom: 2px solid var(--snd-color);\n}\n.todoContainer:hover{\n    background-color: var(--snd-color);\n    color: var(--fth-color);\n}\n.todoCheck{\n    height: 1.6rem;\n    width: 1.6rem;\n    padding: 2px;\n    text-align: center;\n    background-color: var(--trd-color);\n    border-radius: 50%;\n}\n.todoName{\n    font-size: 1.2rem;\n    font-weight: 900;\n    flex: 1;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/constructors.js":
/*!*****************************!*\
  !*** ./src/constructors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createToDo: () => (/* binding */ createToDo)
/* harmony export */ });
/* //// constructor ToDo
    title
    dueDate
    priority   
    checklist(status);
    Assigned Project
*/

//eliminate default values if not used
function createToDo (todoTitle, todoDate="today", todoPriority=0, project) {
    const name = todoTitle;
    const date = todoDate;
    const priority = todoPriority;
    const belongTo = project;//might delete
    const status = false;

    return {name, date, priority, belongTo, status};
}

/* //// constructor Project 
    title
    description
    assign ToDo's 
*/
function createProject (projectTitle, projectDescription) {
    const name = projectTitle;
    const description = projectDescription;
    const toDos = [];

    return {name, description,toDos};
}

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeToDoStatus: () => (/* binding */ changeToDoStatus),
/* harmony export */   clearContainer: () => (/* binding */ clearContainer),
/* harmony export */   deployAllToDos: () => (/* binding */ deployAllToDos),
/* harmony export */   deployProjects: () => (/* binding */ deployProjects),
/* harmony export */   deployToDos: () => (/* binding */ deployToDos),
/* harmony export */   pushToDo: () => (/* binding */ pushToDo)
/* harmony export */ });
/* function to push a todo into the project */
function pushToDo (project, todo) {
    project.toDos.push(todo);
}

/* function to change status of todo */
function changeToDoStatus (todo) {
    if (todo.status===false) {
        todo.status=true;
    } else {
        todo.status=false;
    }
}

/* clear content of container */
function clearContainer (div) {
    div.innerHTML="";
}

/* //// deploy projects in screen */ 
function deployProjects (array,div) { 
    let todosDiv = document.querySelector(".todos");
    for (let i=0; i<array.length; i++) { 
        let container = document.createElement("div");
        container.classList.add("projectContainer");
        div.appendChild(container);
        
        let projectName = document.createElement("div");
        projectName.classList.add("projectName");
        projectName.textContent=array[i].name;
        container.appendChild(projectName);
        let projectDesc = document.createElement("div");
        projectDesc.classList.add("projectDesc");
        projectDesc.textContent= array[i].description;
        container.appendChild(projectDesc);

        container.addEventListener("click", ()=> {
            const divs = document.querySelectorAll(".projectContainer");
            divs.forEach( (div)=> div.classList.remove("selectedProject"));
            container.classList.add("selectedProject");

            clearContainer(todosDiv)
            deployToDos(array[i],todosDiv);
        });
    }
}

/* //// deploy toDos of a project in screen */
function deployToDos (project,div) {
    for (let i=0; i<project.toDos.length; i++) {
        let container = document.createElement("div");
        container.classList.add("todoContainer");
        div.appendChild(container);

        let btn = document.createElement("button");
        btn.classList.add("todoCheck");
        btn.textContent="❌";
        container.appendChild(btn);
        let todoName = document.createElement("div");
        todoName.classList.add("todoName");
        todoName.textContent=project.toDos[i].name;
        container.appendChild(todoName);
        let todoDate = document.createElement("div");
        todoDate.classList.add("todoDate");
        todoDate.textContent=project.toDos[i].date;
        container.appendChild(todoDate);
        let priority = document.createElement("div");

    }
}

function deployAllToDos (array,div) {
    clearContainer(div);
   for (let i=0; i<array.length; i++) {
        deployToDos(array[i],div);
    } 
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _constructors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructors.js */ "./src/constructors.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./src/functions.js");




let projects = []; ///array of projects
let projectsDiv = document.querySelector(".projects");
let todosDiv = document.querySelector(".todos");

//EXAMPLE0  /*   TO CHANGE */
console.log("HI");
let projectExample = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("Project Example 1","This is description 1");
projects.push(projectExample)
let todoExample = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("Task 1 for project 1", "today", 0, projectExample.name);
(0,_functions__WEBPACK_IMPORTED_MODULE_2__.pushToDo)(projectExample,todoExample);
let todoExample1 = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("Task 2 for project 1", "today", 0, projectExample.name);
(0,_functions__WEBPACK_IMPORTED_MODULE_2__.pushToDo)(projectExample,todoExample1);
console.log(projectExample);////
//EXAMPLE0
//EXAMPLE0
console.log("HI");
let anotherProjectExample = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("Another Project Example","This is description 2");
projects.push(anotherProjectExample)
let anotherTodoExample = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("Task 1 for Project 2", "today", 0, anotherProjectExample.name);
(0,_functions__WEBPACK_IMPORTED_MODULE_2__.pushToDo)(anotherProjectExample,anotherTodoExample);
let anotherTodoExample1 = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("Task 2 for Project 2", "today", 0, anotherProjectExample.name);
(0,_functions__WEBPACK_IMPORTED_MODULE_2__.pushToDo)(anotherProjectExample,anotherTodoExample1);
console.log(anotherProjectExample);////
//EXAMPLE0

let allTasksDiv = document.querySelector(".allTasks");
allTasksDiv.addEventListener("click", ()=> {
    const divs = document.querySelectorAll(".projectContainer");
    divs.forEach( (div)=> div.classList.remove("selectedProject"));
    allTasksDiv.classList.add("selectedProject");
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.deployAllToDos)(projects,todosDiv);
});

(0,_functions__WEBPACK_IMPORTED_MODULE_2__.deployProjects)(projects,projectsDiv);
(0,_functions__WEBPACK_IMPORTED_MODULE_2__.deployAllToDos)(projects,todosDiv);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1QjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQWE7QUFDekM7QUFDQSx5QkFBeUIsNERBQVU7QUFDbkMsb0RBQVE7QUFDUiwwQkFBMEIsNERBQVU7QUFDcEMsb0RBQVE7QUFDUixtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWM7QUFDbEIsQ0FBQzs7QUFFRCwwREFBYztBQUNkLDBEQUFjLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29uc3RydWN0b3JzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1mc3QtY29sb3I6ICM4NGFjY2I7XG4gICAgLS1zbmQtY29sb3I6ICMyMTIxODc7XG4gICAgLS10cmQtY29sb3I6ICMwZjBmMjA7XG4gICAgLS1mdGgtY29sb3I6I2ZmZmZmZjsgXG59XG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZzdC1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cbi5oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XG4gICAgcGFkZGluZzogLjJyZW07XG59XG4ubWFpbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbn1cbi5zaWRlYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyZC1jb2xvcik7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4ucHJvamVjdHN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG59XG4ucHJvamVjdENvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E0YTY1O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZ0aC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAuNXJlbTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5wcm9qZWN0Q29udGFpbmVyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XG59XG4ucHJvamVjdE5hbWV7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5wcm9qZWN0RGVzY3tcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWxlY3RlZFByb2plY3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XG4gICAgY29sb3I6ICMyMTIxODc7XG59XG4uYWxsVGFza3N7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi50b2Rvc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMS4ycmVtO1xufVxuLnRvZG9Db250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnN0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNuZC1jb2xvcik7XG59XG4udG9kb0NvbnRhaW5lcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xufVxuLnRvZG9DaGVja3tcbiAgICBoZWlnaHQ6IDEuNnJlbTtcbiAgICB3aWR0aDogMS42cmVtO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJkLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udG9kb05hbWV7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmbGV4OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsU0FBUztJQUNULGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQSxnREFBZ0Q7QUFDaEQ7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsT0FBTztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWZzdC1jb2xvcjogIzg0YWNjYjtcXG4gICAgLS1zbmQtY29sb3I6ICMyMTIxODc7XFxuICAgIC0tdHJkLWNvbG9yOiAjMGYwZjIwO1xcbiAgICAtLWZ0aC1jb2xvcjojZmZmZmZmOyBcXG59XFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnN0LWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG4uaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogLjJyZW07XFxufVxcbi5tYWlue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5zaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG4uY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRyZC1jb2xvcik7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG4udGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbi5wcm9qZWN0Q29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E0YTY1O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mdGgtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuLnByb2plY3RDb250YWluZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xcbn1cXG4ucHJvamVjdE5hbWV7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuLnByb2plY3REZXNje1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNlbGVjdGVkUHJvamVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xcbiAgICBjb2xvcjogIzIxMjE4NztcXG59XFxuLmFsbFRhc2tze1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnRvZG9ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEuMnJlbTtcXG59XFxuLnRvZG9Db250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZzdC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNuZC1jb2xvcik7XFxufVxcbi50b2RvQ29udGFpbmVyOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcXG59XFxuLnRvZG9DaGVja3tcXG4gICAgaGVpZ2h0OiAxLjZyZW07XFxuICAgIHdpZHRoOiAxLjZyZW07XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50b2RvTmFtZXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZsZXg6IDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiAvLy8vIGNvbnN0cnVjdG9yIFRvRG9cbiAgICB0aXRsZVxuICAgIGR1ZURhdGVcbiAgICBwcmlvcml0eSAgIFxuICAgIGNoZWNrbGlzdChzdGF0dXMpO1xuICAgIEFzc2lnbmVkIFByb2plY3RcbiovXG5cbi8vZWxpbWluYXRlIGRlZmF1bHQgdmFsdWVzIGlmIG5vdCB1c2VkXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9EbyAodG9kb1RpdGxlLCB0b2RvRGF0ZT1cInRvZGF5XCIsIHRvZG9Qcmlvcml0eT0wLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgbmFtZSA9IHRvZG9UaXRsZTtcbiAgICBjb25zdCBkYXRlID0gdG9kb0RhdGU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSB0b2RvUHJpb3JpdHk7XG4gICAgY29uc3QgYmVsb25nVG8gPSBwcm9qZWN0Oy8vbWlnaHQgZGVsZXRlXG4gICAgY29uc3Qgc3RhdHVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge25hbWUsIGRhdGUsIHByaW9yaXR5LCBiZWxvbmdUbywgc3RhdHVzfTtcbn1cblxuLyogLy8vLyBjb25zdHJ1Y3RvciBQcm9qZWN0IFxuICAgIHRpdGxlXG4gICAgZGVzY3JpcHRpb25cbiAgICBhc3NpZ24gVG9EbydzIFxuKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0IChwcm9qZWN0VGl0bGUsIHByb2plY3REZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0VGl0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgY29uc3QgdG9Eb3MgPSBbXTtcblxuICAgIHJldHVybiB7bmFtZSwgZGVzY3JpcHRpb24sdG9Eb3N9O1xufSIsIi8qIGZ1bmN0aW9uIHRvIHB1c2ggYSB0b2RvIGludG8gdGhlIHByb2plY3QgKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVG9EbyAocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QudG9Eb3MucHVzaCh0b2RvKTtcbn1cblxuLyogZnVuY3Rpb24gdG8gY2hhbmdlIHN0YXR1cyBvZiB0b2RvICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVG9Eb1N0YXR1cyAodG9kbykge1xuICAgIGlmICh0b2RvLnN0YXR1cz09PWZhbHNlKSB7XG4gICAgICAgIHRvZG8uc3RhdHVzPXRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5zdGF0dXM9ZmFsc2U7XG4gICAgfVxufVxuXG4vKiBjbGVhciBjb250ZW50IG9mIGNvbnRhaW5lciAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyIChkaXYpIHtcbiAgICBkaXYuaW5uZXJIVE1MPVwiXCI7XG59XG5cbi8qIC8vLy8gZGVwbG95IHByb2plY3RzIGluIHNjcmVlbiAqLyBcbmV4cG9ydCBmdW5jdGlvbiBkZXBsb3lQcm9qZWN0cyAoYXJyYXksZGl2KSB7IFxuICAgIGxldCB0b2Rvc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XG4gICAgZm9yIChsZXQgaT0wOyBpPGFycmF5Lmxlbmd0aDsgaSsrKSB7IFxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Q29udGFpbmVyXCIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQ9YXJyYXlbaV0ubmFtZTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgbGV0IHByb2plY3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdERlc2MuY2xhc3NMaXN0LmFkZChcInByb2plY3REZXNjXCIpO1xuICAgICAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudD0gYXJyYXlbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVzYyk7XG5cbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RDb250YWluZXJcIik7XG4gICAgICAgICAgICBkaXZzLmZvckVhY2goIChkaXYpPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFByb2plY3RcIikpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFByb2plY3RcIik7XG5cbiAgICAgICAgICAgIGNsZWFyQ29udGFpbmVyKHRvZG9zRGl2KVxuICAgICAgICAgICAgZGVwbG95VG9Eb3MoYXJyYXlbaV0sdG9kb3NEaXYpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qIC8vLy8gZGVwbG95IHRvRG9zIG9mIGEgcHJvamVjdCBpbiBzY3JlZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXBsb3lUb0RvcyAocHJvamVjdCxkaXYpIHtcbiAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50b0Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvQ29udGFpbmVyXCIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvQ2hlY2tcIik7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudD1cIuKdjFwiO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgbGV0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZChcInRvZG9OYW1lXCIpO1xuICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudD1wcm9qZWN0LnRvRG9zW2ldLm5hbWU7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgICAgIGxldCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvRGF0ZVwiKTtcbiAgICAgICAgdG9kb0RhdGUudGV4dENvbnRlbnQ9cHJvamVjdC50b0Rvc1tpXS5kYXRlO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVwbG95QWxsVG9Eb3MgKGFycmF5LGRpdikge1xuICAgIGNsZWFyQ29udGFpbmVyKGRpdik7XG4gICBmb3IgKGxldCBpPTA7IGk8YXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVwbG95VG9Eb3MoYXJyYXlbaV0sZGl2KTtcbiAgICB9IFxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7Y3JlYXRlUHJvamVjdCxjcmVhdGVUb0RvfSBmcm9tICcuL2NvbnN0cnVjdG9ycy5qcyc7XG5pbXBvcnQgeyBwdXNoVG9EbyxjaGFuZ2VUb0RvU3RhdHVzLGRlcGxveVByb2plY3RzLGRlcGxveVRvRG9zLCBkZXBsb3lBbGxUb0RvcyB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxubGV0IHByb2plY3RzID0gW107IC8vL2FycmF5IG9mIHByb2plY3RzXG5sZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xubGV0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcblxuLy9FWEFNUExFMCAgLyogICBUTyBDSEFOR0UgKi9cbmNvbnNvbGUubG9nKFwiSElcIik7XG5sZXQgcHJvamVjdEV4YW1wbGUgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBFeGFtcGxlIDFcIixcIlRoaXMgaXMgZGVzY3JpcHRpb24gMVwiKTtcbnByb2plY3RzLnB1c2gocHJvamVjdEV4YW1wbGUpXG5sZXQgdG9kb0V4YW1wbGUgPSBjcmVhdGVUb0RvKFwiVGFzayAxIGZvciBwcm9qZWN0IDFcIiwgXCJ0b2RheVwiLCAwLCBwcm9qZWN0RXhhbXBsZS5uYW1lKTtcbnB1c2hUb0RvKHByb2plY3RFeGFtcGxlLHRvZG9FeGFtcGxlKTtcbmxldCB0b2RvRXhhbXBsZTEgPSBjcmVhdGVUb0RvKFwiVGFzayAyIGZvciBwcm9qZWN0IDFcIiwgXCJ0b2RheVwiLCAwLCBwcm9qZWN0RXhhbXBsZS5uYW1lKTtcbnB1c2hUb0RvKHByb2plY3RFeGFtcGxlLHRvZG9FeGFtcGxlMSk7XG5jb25zb2xlLmxvZyhwcm9qZWN0RXhhbXBsZSk7Ly8vL1xuLy9FWEFNUExFMFxuLy9FWEFNUExFMFxuY29uc29sZS5sb2coXCJISVwiKTtcbmxldCBhbm90aGVyUHJvamVjdEV4YW1wbGUgPSBjcmVhdGVQcm9qZWN0KFwiQW5vdGhlciBQcm9qZWN0IEV4YW1wbGVcIixcIlRoaXMgaXMgZGVzY3JpcHRpb24gMlwiKTtcbnByb2plY3RzLnB1c2goYW5vdGhlclByb2plY3RFeGFtcGxlKVxubGV0IGFub3RoZXJUb2RvRXhhbXBsZSA9IGNyZWF0ZVRvRG8oXCJUYXNrIDEgZm9yIFByb2plY3QgMlwiLCBcInRvZGF5XCIsIDAsIGFub3RoZXJQcm9qZWN0RXhhbXBsZS5uYW1lKTtcbnB1c2hUb0RvKGFub3RoZXJQcm9qZWN0RXhhbXBsZSxhbm90aGVyVG9kb0V4YW1wbGUpO1xubGV0IGFub3RoZXJUb2RvRXhhbXBsZTEgPSBjcmVhdGVUb0RvKFwiVGFzayAyIGZvciBQcm9qZWN0IDJcIiwgXCJ0b2RheVwiLCAwLCBhbm90aGVyUHJvamVjdEV4YW1wbGUubmFtZSk7XG5wdXNoVG9Ebyhhbm90aGVyUHJvamVjdEV4YW1wbGUsYW5vdGhlclRvZG9FeGFtcGxlMSk7XG5jb25zb2xlLmxvZyhhbm90aGVyUHJvamVjdEV4YW1wbGUpOy8vLy9cbi8vRVhBTVBMRTBcblxubGV0IGFsbFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxUYXNrc1wiKTtcbmFsbFRhc2tzRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuICAgIGRpdnMuZm9yRWFjaCggKGRpdik9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkUHJvamVjdFwiKSk7XG4gICAgYWxsVGFza3NEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkUHJvamVjdFwiKTtcbiAgICBkZXBsb3lBbGxUb0Rvcyhwcm9qZWN0cyx0b2Rvc0Rpdik7XG59KTtcblxuZGVwbG95UHJvamVjdHMocHJvamVjdHMscHJvamVjdHNEaXYpO1xuZGVwbG95QWxsVG9Eb3MocHJvamVjdHMsdG9kb3NEaXYpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==