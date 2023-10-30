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
    --fst-color: #7592a9;
    --snd-color: #212187;
    --trd-color: #0b0b35;
    --fth-color:#ffffff; 
    --example: #31b700;
}
body{
    background-color: var(--trd-color);
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
    color: var(--fst-color);
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
    position: relative;
}
.content{
    background-color: var(--fth-color);
    color: var(--trd-color);
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 1.5rem;
    padding-left: 2rem;
    position: relative;
}
.addTaskBtn, .addProjectBtn{
    position: absolute;
    bottom: 4%;
    left: 50%;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
}
.addProjectBtn{
    background-color: var(--fth-color);
    color: var(--snd-color);
}
.addTaskBtn{
    background-color: var(--trd-color);
    color: var(--fth-color);
}
.addProjectBtn:hover, .addTaskBtn:hover{
    background-color: var(--snd-color);
    color: var(--fth-color);
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
    position: relative;
}
.projectContainer:hover{
    background-color: var(--snd-color);
    color: var(--fth-color);
    position: relative;
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
    text-align: justify;
    margin-left: 1.4rem;
}
.selectedProject{
    background-color: var(--fth-color);
    border-color: var(--snd-color);
    color: #212187;
}
.allTasks{
    margin-bottom: 2rem;
}
.bigProjectContainer{
    position: relative;
}
/***********************************************/
.todos{
    display: grid;
    gap: 1.2rem;
}
.todoContainer{
    background-color: var(--fst-color);
    border-radius: 5px;
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
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: center;
    border-radius: 50%;
}
.false{
    background-color: rgb(0, 0, 0);
    border-color: red;
}
.true{
    background-color: #31b700;
    border-color: #1b6500;
}
.todoName{
    font-size: 1.2rem;
    font-weight: 900;
    flex: 1;
}
/*//**********************************************/
.deleteTask{
    background-color: rgb(255, 144, 144);
    border: none;
    border-radius: 6px;
    font-size: 1.2rem;
}
.deleteProject{
    background-color: rgb(255, 144, 144);
    border: none;
    border-radius: 6px;
    font-size: 1.2rem;
    position: absolute;
    bottom: 3%;
    left: 3%;
}
.deleteProject:hover, .deleteTask:hover{
    background-color: rgb(255, 48, 48);
}
/*  ****************************************************  */
.dialog::backdrop{
    background-color: rgb(27, 27, 27);
    opacity: .8;
}
.dialog{
    border-radius: 10px;
    font-size: 1.4rem;
    border: 2px solid var(--snd-color);
}
.form{
    display: grid;
    gap: 1rem;
}
.form-title{
    color: var(--trd-color);
    font-weight: 900;
    text-align: center;
}
.form-row{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    color: var(--snd-color);
}
.form-row input{
    border: 2px solid var(--trd-color);
    border-radius: 5px;
    color: var(--snd-color);
}
.form-row select{
    border: 2px solid var(--trd-color);
    border-radius: 5px;
    color: var(--snd-color);
}
.btnAdd{
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}
.add{
    flex: 2;
    background-color: var(--snd-color);
    border-radius: 5px;
    border: none;
    color: var(--fth-color);
    font-weight: 600;
    padding: .2rem;
}
.close{
    flex: 1;
    background-color: rgb(255, 81, 81);
    border-radius: 5px;
    border: none;
    color: var(--fth-color);
    font-weight: 600;
}
.add:hover{
    background-color: var(--trd-color);
}
.close:hover{
    background-color: rgb(255, 40, 40);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --fst-color: #7592a9;\n    --snd-color: #212187;\n    --trd-color: #0b0b35;\n    --fth-color:#ffffff; \n    --example: #31b700;\n}\nbody{\n    background-color: var(--trd-color);\n    color: white;\n    min-height: 100vh;\n    margin: 0;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    font-family: monospace;\n}\n.header{\n    text-align: center;\n    font-size: 1.8rem;\n    font-weight: 900;\n    color: var(--fst-color);\n    padding: .2rem;\n}\n.main{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.sidebar{\n    background-color: var(--trd-color);\n    border-top-right-radius: 20px;\n    padding: 1.5rem;\n    padding-right: 0;\n    position: relative;\n}\n.content{\n    background-color: var(--fth-color);\n    color: var(--trd-color);\n    border-top-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n    padding: 1.5rem;\n    padding-left: 2rem;\n    position: relative;\n}\n.addTaskBtn, .addProjectBtn{\n    position: absolute;\n    bottom: 4%;\n    left: 50%;\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n    font-size: 1rem;\n    font-weight: 600;\n    border: none;\n}\n.addProjectBtn{\n    background-color: var(--fth-color);\n    color: var(--snd-color);\n}\n.addTaskBtn{\n    background-color: var(--trd-color);\n    color: var(--fth-color);\n}\n.addProjectBtn:hover, .addTaskBtn:hover{\n    background-color: var(--snd-color);\n    color: var(--fth-color);\n}\n.title{\n    font-size: 2rem;\n    font-weight: 900;\n    padding-bottom: 1.5rem;\n    padding-right: 1rem;\n}\n.projects{\n    display: grid;\n    gap: 1rem;\n}\n.projectContainer{\n    background-color: #3a4a65;\n    border: 2px solid var(--fth-color);\n    border-radius: 6px;\n    display: grid;\n    gap: .5rem;\n    justify-items: end;\n    padding: 8px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right: none;\n    position: relative;\n}\n.projectContainer:hover{\n    background-color: var(--snd-color);\n    color: var(--fth-color);\n    position: relative;\n}\n.projectName{\n    font-weight: 900;\n    font-size: 1.5rem;\n    text-align:center;\n}\n.projectDesc{\n    font-family: Arial, sans-serif;\n    font-size: 1.1rem;\n    font-style: italic;\n    text-align: justify;\n    margin-left: 1.4rem;\n}\n.selectedProject{\n    background-color: var(--fth-color);\n    border-color: var(--snd-color);\n    color: #212187;\n}\n.allTasks{\n    margin-bottom: 2rem;\n}\n.bigProjectContainer{\n    position: relative;\n}\n/***********************************************/\n.todos{\n    display: grid;\n    gap: 1.2rem;\n}\n.todoContainer{\n    background-color: var(--fst-color);\n    border-radius: 5px;\n    padding: 5px;\n    display: flex;\n    gap: 2rem;\n    justify-content: space-between;\n    padding-right: 2rem;\n    padding-left: 1rem;\n    border-bottom: 2px solid var(--snd-color);\n}\n.todoContainer:hover{\n    background-color: var(--snd-color);\n    color: var(--fth-color);\n}\n.todoCheck{\n    height: 1.6rem;\n    width: 1.6rem;\n    padding: 2px;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    text-align: center;\n    border-radius: 50%;\n}\n.false{\n    background-color: rgb(0, 0, 0);\n    border-color: red;\n}\n.true{\n    background-color: #31b700;\n    border-color: #1b6500;\n}\n.todoName{\n    font-size: 1.2rem;\n    font-weight: 900;\n    flex: 1;\n}\n/*//**********************************************/\n.deleteTask{\n    background-color: rgb(255, 144, 144);\n    border: none;\n    border-radius: 6px;\n    font-size: 1.2rem;\n}\n.deleteProject{\n    background-color: rgb(255, 144, 144);\n    border: none;\n    border-radius: 6px;\n    font-size: 1.2rem;\n    position: absolute;\n    bottom: 3%;\n    left: 3%;\n}\n.deleteProject:hover, .deleteTask:hover{\n    background-color: rgb(255, 48, 48);\n}\n/*  ****************************************************  */\n.dialog::backdrop{\n    background-color: rgb(27, 27, 27);\n    opacity: .8;\n}\n.dialog{\n    border-radius: 10px;\n    font-size: 1.4rem;\n    border: 2px solid var(--snd-color);\n}\n.form{\n    display: grid;\n    gap: 1rem;\n}\n.form-title{\n    color: var(--trd-color);\n    font-weight: 900;\n    text-align: center;\n}\n.form-row{\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n    color: var(--snd-color);\n}\n.form-row input{\n    border: 2px solid var(--trd-color);\n    border-radius: 5px;\n    color: var(--snd-color);\n}\n.form-row select{\n    border: 2px solid var(--trd-color);\n    border-radius: 5px;\n    color: var(--snd-color);\n}\n.btnAdd{\n    display: flex;\n    justify-content: space-between;\n    gap: 2rem;\n}\n.add{\n    flex: 2;\n    background-color: var(--snd-color);\n    border-radius: 5px;\n    border: none;\n    color: var(--fth-color);\n    font-weight: 600;\n    padding: .2rem;\n}\n.close{\n    flex: 1;\n    background-color: rgb(255, 81, 81);\n    border-radius: 5px;\n    border: none;\n    color: var(--fth-color);\n    font-weight: 600;\n}\n.add:hover{\n    background-color: var(--trd-color);\n}\n.close:hover{\n    background-color: rgb(255, 40, 40);\n}"],"sourceRoot":""}]);
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
function createToDo (todoTitle, todoDate, todoPriority, project) {
    const name = todoTitle;
    const date = todoDate;
    const priority = todoPriority;
    const status = false;
    return {name, date, priority, status};
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
        let bigCont = document.createElement("div");
        bigCont.classList.add("bigProjectContainer");
        div.appendChild(bigCont);

        let container = document.createElement("div");
        container.classList.add("projectContainer");
        bigCont.appendChild(container);

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
        let dlt = document.createElement("button");
        dlt.classList.add("deleteProject");
        dlt.textContent="🗑";
        bigCont.appendChild(dlt);
        
        dlt.addEventListener("click", ()=> {
                array.splice(i,1);
                clearContainer(div);
                console.log(div);
                console.log(array);
                deployProjects(array,div);
                let newDiv = document.querySelector(".todos");
                deployAllToDos(array,newDiv);
        });
        
    }
}

/* //// deploy toDos of a project in screen */
function deployToDos (project,div,createBtn=false) {
    for (let i=0; i<project.toDos.length; i++) {
        let container = document.createElement("div");
        container.classList.add("todoContainer");
        div.appendChild(container);

        let btn = document.createElement("button");
        btn.classList.add("todoCheck");
        if(project.toDos[i].status===false) {
            btn.textContent= "❌";
            btn.classList.add("false");
            container.style.opacity= "1";
        } else {
            btn.textContent= "✔";
            btn.classList.add("true");
            container.style.opacity= ".5";
        }
        container.appendChild(btn);
        let todoName = document.createElement("div");
        todoName.classList.add("todoName");
        todoName.textContent=project.toDos[i].name;
        container.appendChild(todoName);
        let todoDate = document.createElement("div");
        todoDate.classList.add("todoDate");
        todoDate.textContent=project.toDos[i].date;
        container.appendChild(todoDate);
        switch (project.toDos[i].priority) {
            case "low":
                container.style.borderLeft = "8px solid green";
            break;
            case "medium":
                container.style.borderLeft = "8px solid #ffcc00";
            break;
            case "high":
                container.style.borderLeft = "8px solid #c40000";
            break;
        }
        btn.addEventListener("click", ()=> {
            if(project.toDos[i].status===false) {
                changeToDoStatus(project.toDos[i]);
                btn.textContent= "✔";
                btn.classList.add("true");
                btn.classList.remove("false");
                container.style.opacity= ".5";
            } else {
                changeToDoStatus(project.toDos[i]);
                btn.textContent= "❌";
                btn.classList.add("false");
                btn.classList.remove("true");
                container.style.opacity= "1";
            }
        });
        if(createBtn===false) {
            let dlt = document.createElement("button");
            dlt.classList.add("deleteTask");
            dlt.textContent="🗑";
            container.appendChild(dlt);
            dlt.addEventListener("click", ()=> {
                project.toDos.splice(i,1);
                clearContainer(div);
                deployToDos(project,div);
            });
        }
        
    }
}

function deployAllToDos (array,div) {
    clearContainer(div);
   for (let i=0; i<array.length; i++) {
        deployToDos(array[i],div,true);
    } 
}

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectEvent: () => (/* binding */ addProjectEvent),
/* harmony export */   addToDoEvent: () => (/* binding */ addToDoEvent)
/* harmony export */ });
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors */ "./src/constructors.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");



let addProjectEvent = function (array,div) {
    let dialog = document.querySelector(".projectDialog"); //open dialog
    let btnDialog = document.querySelector(".addProjectBtn");
    btnDialog.addEventListener("click", () => {
        dialog.showModal();
    });
    let btnClose = document.querySelector(".closeProject");
    btnClose.addEventListener("click", () => {
        dialog.close();
    });
    let projectName = document.querySelector("#project-title");
    let projectDesc = document.querySelector("#project-description");
    let submit = document.querySelector(".project-form").addEventListener("submit", (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            array.push((0,_constructors__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName.value,projectDesc.value));
            (0,_functions__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(div);
            (0,_functions__WEBPACK_IMPORTED_MODULE_1__.deployProjects)(array,div);
            console.log(btnDialog);
            projectName.value="";
            projectName.value="";
            dialog.close();
        }
    });
};



/* MODAL FOR TO DO */
let addToDoEvent = function (array,div) {
    let dialog = document.querySelector(".todoDialog"); //open dialog
    let btnDialog = document.querySelector(".addTaskBtn");
    btnDialog.addEventListener("click", () => {
        dialog.showModal();
    });
    let btnClose = document.querySelector(".closeTask");
    btnClose.addEventListener("click", () => {
        dialog.close();
    });
    /*
    let projectName = document.querySelector("#project-title");
    let projectDesc = document.querySelector("#project-description");
    let submit = document.querySelector(".project-form").addEventListener("submit", (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            array.push(createProject(projectName.value,projectDesc.value));
            clearContainer(div);
            deployProjects(array,div);
            console.log(btnDialog);
            projectName.value="";
            projectName.value="";
            dialog.close();
        }
    });*/
};

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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _constructors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructors.js */ "./src/constructors.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/modal.js");





let projects = []; ///array of projects
let projectsDiv = document.querySelector(".projects");
let todosDiv = document.querySelector(".todos");

//EXAMPLE0  /*   TO CHANGE */
console.log("HI");
let projectExample = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("Project Example 1","This is description 1");
projects.push(projectExample)
let todoExample = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("Task 1 for project 1", "today", "low", projectExample.name);
(0,_functions__WEBPACK_IMPORTED_MODULE_2__.pushToDo)(projectExample,todoExample);
let todoExample1 = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("Task 2 for project 1", "today", "medium", projectExample.name);
(0,_functions__WEBPACK_IMPORTED_MODULE_2__.pushToDo)(projectExample,todoExample1);
console.log(projectExample);////
//EXAMPLE0
//EXAMPLE0
console.log("HI");
let anotherProjectExample = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("Another Project Example","This is description 2");
projects.push(anotherProjectExample)
let anotherTodoExample = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("Task 1 for Project 2", "today", "high", anotherProjectExample.name);
(0,_functions__WEBPACK_IMPORTED_MODULE_2__.pushToDo)(anotherProjectExample,anotherTodoExample);
let anotherTodoExample1 = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("Task 2 for Project 2", "today", "low", anotherProjectExample.name);
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

(0,_modal__WEBPACK_IMPORTED_MODULE_3__.addProjectEvent)(projects,projectsDiv);
(0,_modal__WEBPACK_IMPORTED_MODULE_3__.addToDoEvent)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFB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QUFtQiw0REFBVTtBQUM3QixvREFBUTtBQUNSLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQWE7QUFDekM7QUFDQSx5QkFBeUIsNERBQVU7QUFDbkMsb0RBQVE7QUFDUiwwQkFBMEIsNERBQVU7QUFDcEMsb0RBQVE7QUFDUixtQ0FBbUM7QUFDbkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFjO0FBQ2xCLENBQUM7O0FBRUQsMERBQWM7QUFDZCwwREFBYzs7QUFFZCx1REFBZTtBQUNmLG9EQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jb25zdHJ1Y3RvcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWZzdC1jb2xvcjogIzc1OTJhOTtcbiAgICAtLXNuZC1jb2xvcjogIzIxMjE4NztcbiAgICAtLXRyZC1jb2xvcjogIzBiMGIzNTtcbiAgICAtLWZ0aC1jb2xvcjojZmZmZmZmOyBcbiAgICAtLWV4YW1wbGU6ICMzMWI3MDA7XG59XG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyZC1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cbi5oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHZhcigtLWZzdC1jb2xvcik7XG4gICAgcGFkZGluZzogLjJyZW07XG59XG4ubWFpbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbn1cbi5zaWRlYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyZC1jb2xvcik7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdHJkLWNvbG9yKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWRkVGFza0J0biwgLmFkZFByb2plY3RCdG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uYWRkUHJvamVjdEJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xufVxuLmFkZFRhc2tCdG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJkLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcbn1cbi5hZGRQcm9qZWN0QnRuOmhvdmVyLCAuYWRkVGFza0J0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xufVxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cbi5wcm9qZWN0c3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbn1cbi5wcm9qZWN0Q29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTRhNjU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZnRoLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IC41cmVtO1xuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9qZWN0Q29udGFpbmVyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2plY3ROYW1le1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4ucHJvamVjdERlc2N7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1sZWZ0OiAxLjRyZW07XG59XG4uc2VsZWN0ZWRQcm9qZWN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xuICAgIGNvbG9yOiAjMjEyMTg3O1xufVxuLmFsbFRhc2tze1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uYmlnUHJvamVjdENvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4udG9kb3N7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEuMnJlbTtcbn1cbi50b2RvQ29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZzdC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNuZC1jb2xvcik7XG59XG4udG9kb0NvbnRhaW5lcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xufVxuLnRvZG9DaGVja3tcbiAgICBoZWlnaHQ6IDEuNnJlbTtcbiAgICB3aWR0aDogMS42cmVtO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5mYWxzZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG4udHJ1ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzFiNzAwO1xuICAgIGJvcmRlci1jb2xvcjogIzFiNjUwMDtcbn1cbi50b2RvTmFtZXtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZsZXg6IDE7XG59XG4vKi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5kZWxldGVUYXNre1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0NCwgMTQ0KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmRlbGV0ZVByb2plY3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQ0LCAxNDQpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMyU7XG4gICAgbGVmdDogMyU7XG59XG4uZGVsZXRlUHJvamVjdDpob3ZlciwgLmRlbGV0ZVRhc2s6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDgsIDQ4KTtcbn1cbi8qICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICAqL1xuLmRpYWxvZzo6YmFja2Ryb3B7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAyNywgMjcpO1xuICAgIG9wYWNpdHk6IC44O1xufVxuLmRpYWxvZ3tcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNuZC1jb2xvcik7XG59XG4uZm9ybXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbn1cbi5mb3JtLXRpdGxle1xuICAgIGNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm0tcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcbn1cbi5mb3JtLXJvdyBpbnB1dHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10cmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcbn1cbi5mb3JtLXJvdyBzZWxlY3R7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHJkLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XG59XG4uYnRuQWRke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMnJlbTtcbn1cbi5hZGR7XG4gICAgZmxleDogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAuMnJlbTtcbn1cbi5jbG9zZXtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDgxLCA4MSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmFkZDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xufVxuLmNsb3NlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQwLCA0MCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixp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SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7QUFDQTtJQUNJLE9BQU87SUFDUCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLE9BQU87SUFDUCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGtDQUFrQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1mc3QtY29sb3I6ICM3NTkyYTk7XFxuICAgIC0tc25kLWNvbG9yOiAjMjEyMTg3O1xcbiAgICAtLXRyZC1jb2xvcjogIzBiMGIzNTtcXG4gICAgLS1mdGgtY29sb3I6I2ZmZmZmZjsgXFxuICAgIC0tZXhhbXBsZTogIzMxYjcwMDtcXG59XFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJkLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG4uaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogdmFyKC0tZnN0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogLjJyZW07XFxufVxcbi5tYWlue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5zaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdHJkLWNvbG9yKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZFRhc2tCdG4sIC5hZGRQcm9qZWN0QnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4uYWRkUHJvamVjdEJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XFxufVxcbi5hZGRUYXNrQnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcXG59XFxuLmFkZFByb2plY3RCdG46aG92ZXIsIC5hZGRUYXNrQnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcXG59XFxuLnRpdGxle1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcbi5wcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4ucHJvamVjdENvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhNGE2NTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZnRoLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnByb2plY3RDb250YWluZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9qZWN0TmFtZXtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG4ucHJvamVjdERlc2N7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNHJlbTtcXG59XFxuLnNlbGVjdGVkUHJvamVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xcbiAgICBjb2xvcjogIzIxMjE4NztcXG59XFxuLmFsbFRhc2tze1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4uYmlnUHJvamVjdENvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnRvZG9ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEuMnJlbTtcXG59XFxuLnRvZG9Db250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZzdC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc25kLWNvbG9yKTtcXG59XFxuLnRvZG9Db250YWluZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xcbn1cXG4udG9kb0NoZWNre1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG4gICAgd2lkdGg6IDEuNnJlbTtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmZhbHNle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG4udHJ1ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxYjcwMDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMWI2NTAwO1xcbn1cXG4udG9kb05hbWV7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmbGV4OiAxO1xcbn1cXG4vKi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZGVsZXRlVGFza3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQ0LCAxNDQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5kZWxldGVQcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNDQsIDE0NCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDMlO1xcbiAgICBsZWZ0OiAzJTtcXG59XFxuLmRlbGV0ZVByb2plY3Q6aG92ZXIsIC5kZWxldGVUYXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0OCwgNDgpO1xcbn1cXG4vKiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgKi9cXG4uZGlhbG9nOjpiYWNrZHJvcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAyNywgMjcpO1xcbiAgICBvcGFjaXR5OiAuODtcXG59XFxuLmRpYWxvZ3tcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNuZC1jb2xvcik7XFxufVxcbi5mb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbi5mb3JtLXRpdGxle1xcbiAgICBjb2xvcjogdmFyKC0tdHJkLWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZm9ybS1yb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcXG59XFxuLmZvcm0tcm93IGlucHV0e1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10cmQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xcbn1cXG4uZm9ybS1yb3cgc2VsZWN0e1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10cmQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xcbn1cXG4uYnRuQWRke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuLmFkZHtcXG4gICAgZmxleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuLmNsb3Nle1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA4MSwgODEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5hZGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyZC1jb2xvcik7XFxufVxcbi5jbG9zZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDAsIDQwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIC8vLy8gY29uc3RydWN0b3IgVG9Eb1xuICAgIHRpdGxlXG4gICAgZHVlRGF0ZVxuICAgIHByaW9yaXR5ICAgXG4gICAgY2hlY2tsaXN0KHN0YXR1cyk7XG4gICAgQXNzaWduZWQgUHJvamVjdFxuKi9cblxuLy9lbGltaW5hdGUgZGVmYXVsdCB2YWx1ZXMgaWYgbm90IHVzZWRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb0RvICh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBjb25zdCBuYW1lID0gdG9kb1RpdGxlO1xuICAgIGNvbnN0IGRhdGUgPSB0b2RvRGF0ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IHRvZG9Qcmlvcml0eTtcbiAgICBjb25zdCBzdGF0dXMgPSBmYWxzZTtcbiAgICByZXR1cm4ge25hbWUsIGRhdGUsIHByaW9yaXR5LCBzdGF0dXN9O1xufVxuXG4vKiAvLy8vIGNvbnN0cnVjdG9yIFByb2plY3QgXG4gICAgdGl0bGVcbiAgICBkZXNjcmlwdGlvblxuICAgIGFzc2lnbiBUb0RvJ3MgXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QgKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb2plY3RUaXRsZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0b0RvcyA9IFtdO1xuXG4gICAgcmV0dXJuIHtuYW1lLCBkZXNjcmlwdGlvbix0b0Rvc307XG59IiwiLyogZnVuY3Rpb24gdG8gcHVzaCBhIHRvZG8gaW50byB0aGUgcHJvamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2hUb0RvIChwcm9qZWN0LCB0b2RvKSB7XG4gICAgcHJvamVjdC50b0Rvcy5wdXNoKHRvZG8pO1xufVxuXG4vKiBmdW5jdGlvbiB0byBjaGFuZ2Ugc3RhdHVzIG9mIHRvZG8gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUb0RvU3RhdHVzICh0b2RvKSB7XG4gICAgaWYgKHRvZG8uc3RhdHVzPT09ZmFsc2UpIHtcbiAgICAgICAgdG9kby5zdGF0dXM9dHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLnN0YXR1cz1mYWxzZTtcbiAgICB9XG59XG5cbi8qIGNsZWFyIGNvbnRlbnQgb2YgY29udGFpbmVyICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb250YWluZXIgKGRpdikge1xuICAgIGRpdi5pbm5lckhUTUw9XCJcIjtcbn1cblxuLyogLy8vLyBkZXBsb3kgcHJvamVjdHMgaW4gc2NyZWVuICovIFxuZXhwb3J0IGZ1bmN0aW9uIGRlcGxveVByb2plY3RzIChhcnJheSxkaXYpIHsgXG4gICAgbGV0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8YXJyYXkubGVuZ3RoOyBpKyspIHsgXG4gICAgICAgIGxldCBiaWdDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmlnQ29udC5jbGFzc0xpc3QuYWRkKFwiYmlnUHJvamVjdENvbnRhaW5lclwiKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJpZ0NvbnQpO1xuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RDb250YWluZXJcIik7XG4gICAgICAgIGJpZ0NvbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hbWVcIik7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50PWFycmF5W2ldLm5hbWU7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGxldCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3REZXNjLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGVzY1wiKTtcbiAgICAgICAgcHJvamVjdERlc2MudGV4dENvbnRlbnQ9IGFycmF5W2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlc2MpO1xuICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RDb250YWluZXJcIik7XG4gICAgICAgICAgICBkaXZzLmZvckVhY2goIChkaXYpPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFByb2plY3RcIikpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFByb2plY3RcIik7XG5cbiAgICAgICAgICAgIGNsZWFyQ29udGFpbmVyKHRvZG9zRGl2KVxuICAgICAgICAgICAgZGVwbG95VG9Eb3MoYXJyYXlbaV0sdG9kb3NEaXYpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRsdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlUHJvamVjdFwiKTtcbiAgICAgICAgZGx0LnRleHRDb250ZW50PVwi8J+XkVwiO1xuICAgICAgICBiaWdDb250LmFwcGVuZENoaWxkKGRsdCk7XG4gICAgICAgIFxuICAgICAgICBkbHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGNsZWFyQ29udGFpbmVyKGRpdik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgICAgICAgICAgZGVwbG95UHJvamVjdHMoYXJyYXksZGl2KTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcbiAgICAgICAgICAgICAgICBkZXBsb3lBbGxUb0RvcyhhcnJheSxuZXdEaXYpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxufVxuXG4vKiAvLy8vIGRlcGxveSB0b0RvcyBvZiBhIHByb2plY3QgaW4gc2NyZWVuICovXG5leHBvcnQgZnVuY3Rpb24gZGVwbG95VG9Eb3MgKHByb2plY3QsZGl2LGNyZWF0ZUJ0bj1mYWxzZSkge1xuICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0LnRvRG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG9Db250YWluZXJcIik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInRvZG9DaGVja1wiKTtcbiAgICAgICAgaWYocHJvamVjdC50b0Rvc1tpXS5zdGF0dXM9PT1mYWxzZSkge1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50PSBcIuKdjFwiO1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PSBcIjFcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudD0gXCLinJRcIjtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PSBcIi41XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIGxldCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTmFtZVwiKTtcbiAgICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQ9cHJvamVjdC50b0Rvc1tpXS5uYW1lO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgICAgICBsZXQgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kb0RhdGVcIik7XG4gICAgICAgIHRvZG9EYXRlLnRleHRDb250ZW50PXByb2plY3QudG9Eb3NbaV0uZGF0ZTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcbiAgICAgICAgc3dpdGNoIChwcm9qZWN0LnRvRG9zW2ldLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlckxlZnQgPSBcIjhweCBzb2xpZCBncmVlblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlckxlZnQgPSBcIjhweCBzb2xpZCAjZmZjYzAwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlckxlZnQgPSBcIjhweCBzb2xpZCAjYzQwMDAwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICAgICAgaWYocHJvamVjdC50b0Rvc1tpXS5zdGF0dXM9PT1mYWxzZSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZVRvRG9TdGF0dXMocHJvamVjdC50b0Rvc1tpXSk7XG4gICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50PSBcIuKclFwiO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImZhbHNlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PSBcIi41XCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZVRvRG9TdGF0dXMocHJvamVjdC50b0Rvc1tpXSk7XG4gICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50PSBcIuKdjFwiO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PSBcIjFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGNyZWF0ZUJ0bj09PWZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgZGx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRsdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVGFza1wiKTtcbiAgICAgICAgICAgIGRsdC50ZXh0Q29udGVudD1cIvCfl5FcIjtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkbHQpO1xuICAgICAgICAgICAgZGx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRvRG9zLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGNsZWFyQ29udGFpbmVyKGRpdik7XG4gICAgICAgICAgICAgICAgZGVwbG95VG9Eb3MocHJvamVjdCxkaXYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVwbG95QWxsVG9Eb3MgKGFycmF5LGRpdikge1xuICAgIGNsZWFyQ29udGFpbmVyKGRpdik7XG4gICBmb3IgKGxldCBpPTA7IGk8YXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVwbG95VG9Eb3MoYXJyYXlbaV0sZGl2LHRydWUpO1xuICAgIH0gXG59IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NvbnN0cnVjdG9yc1wiO1xuaW1wb3J0IHsgY2xlYXJDb250YWluZXIsIGRlcGxveVByb2plY3RzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBsZXQgYWRkUHJvamVjdEV2ZW50ID0gZnVuY3Rpb24gKGFycmF5LGRpdikge1xuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3REaWFsb2dcIik7IC8vb3BlbiBkaWFsb2dcbiAgICBsZXQgYnRuRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnRuXCIpO1xuICAgIGJ0bkRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gICAgbGV0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVByb2plY3RcIik7XG4gICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xuICAgIGxldCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjcmlwdGlvblwiKTtcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSxwcm9qZWN0RGVzYy52YWx1ZSkpO1xuICAgICAgICAgICAgY2xlYXJDb250YWluZXIoZGl2KTtcbiAgICAgICAgICAgIGRlcGxveVByb2plY3RzKGFycmF5LGRpdik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidG5EaWFsb2cpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUudmFsdWU9XCJcIjtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnZhbHVlPVwiXCI7XG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuXG5cbi8qIE1PREFMIEZPUiBUTyBETyAqL1xuZXhwb3J0IGxldCBhZGRUb0RvRXZlbnQgPSBmdW5jdGlvbiAoYXJyYXksZGl2KSB7XG4gICAgbGV0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0RpYWxvZ1wiKTsgLy9vcGVuIGRpYWxvZ1xuICAgIGxldCBidG5EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tCdG5cIik7XG4gICAgYnRuRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBsZXQgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlVGFza1wiKTtcbiAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcbiAgICAvKlxuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKTtcbiAgICBsZXQgcHJvamVjdERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY3JpcHRpb25cIik7XG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUscHJvamVjdERlc2MudmFsdWUpKTtcbiAgICAgICAgICAgIGNsZWFyQ29udGFpbmVyKGRpdik7XG4gICAgICAgICAgICBkZXBsb3lQcm9qZWN0cyhhcnJheSxkaXYpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnRuRGlhbG9nKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnZhbHVlPVwiXCI7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS52YWx1ZT1cIlwiO1xuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9KTsqL1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7Y3JlYXRlUHJvamVjdCxjcmVhdGVUb0RvfSBmcm9tICcuL2NvbnN0cnVjdG9ycy5qcyc7XG5pbXBvcnQgeyBwdXNoVG9EbyxjaGFuZ2VUb0RvU3RhdHVzLGRlcGxveVByb2plY3RzLGRlcGxveVRvRG9zLCBkZXBsb3lBbGxUb0RvcyB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCB7IGFkZFByb2plY3RFdmVudCwgYWRkVG9Eb0V2ZW50IH0gZnJvbSAnLi9tb2RhbCc7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXTsgLy8vYXJyYXkgb2YgcHJvamVjdHNcbmxldCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5sZXQgdG9kb3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuXG4vL0VYQU1QTEUwICAvKiAgIFRPIENIQU5HRSAqL1xuY29uc29sZS5sb2coXCJISVwiKTtcbmxldCBwcm9qZWN0RXhhbXBsZSA9IGNyZWF0ZVByb2plY3QoXCJQcm9qZWN0IEV4YW1wbGUgMVwiLFwiVGhpcyBpcyBkZXNjcmlwdGlvbiAxXCIpO1xucHJvamVjdHMucHVzaChwcm9qZWN0RXhhbXBsZSlcbmxldCB0b2RvRXhhbXBsZSA9IGNyZWF0ZVRvRG8oXCJUYXNrIDEgZm9yIHByb2plY3QgMVwiLCBcInRvZGF5XCIsIFwibG93XCIsIHByb2plY3RFeGFtcGxlLm5hbWUpO1xucHVzaFRvRG8ocHJvamVjdEV4YW1wbGUsdG9kb0V4YW1wbGUpO1xubGV0IHRvZG9FeGFtcGxlMSA9IGNyZWF0ZVRvRG8oXCJUYXNrIDIgZm9yIHByb2plY3QgMVwiLCBcInRvZGF5XCIsIFwibWVkaXVtXCIsIHByb2plY3RFeGFtcGxlLm5hbWUpO1xucHVzaFRvRG8ocHJvamVjdEV4YW1wbGUsdG9kb0V4YW1wbGUxKTtcbmNvbnNvbGUubG9nKHByb2plY3RFeGFtcGxlKTsvLy8vXG4vL0VYQU1QTEUwXG4vL0VYQU1QTEUwXG5jb25zb2xlLmxvZyhcIkhJXCIpO1xubGV0IGFub3RoZXJQcm9qZWN0RXhhbXBsZSA9IGNyZWF0ZVByb2plY3QoXCJBbm90aGVyIFByb2plY3QgRXhhbXBsZVwiLFwiVGhpcyBpcyBkZXNjcmlwdGlvbiAyXCIpO1xucHJvamVjdHMucHVzaChhbm90aGVyUHJvamVjdEV4YW1wbGUpXG5sZXQgYW5vdGhlclRvZG9FeGFtcGxlID0gY3JlYXRlVG9EbyhcIlRhc2sgMSBmb3IgUHJvamVjdCAyXCIsIFwidG9kYXlcIiwgXCJoaWdoXCIsIGFub3RoZXJQcm9qZWN0RXhhbXBsZS5uYW1lKTtcbnB1c2hUb0RvKGFub3RoZXJQcm9qZWN0RXhhbXBsZSxhbm90aGVyVG9kb0V4YW1wbGUpO1xubGV0IGFub3RoZXJUb2RvRXhhbXBsZTEgPSBjcmVhdGVUb0RvKFwiVGFzayAyIGZvciBQcm9qZWN0IDJcIiwgXCJ0b2RheVwiLCBcImxvd1wiLCBhbm90aGVyUHJvamVjdEV4YW1wbGUubmFtZSk7XG5wdXNoVG9Ebyhhbm90aGVyUHJvamVjdEV4YW1wbGUsYW5vdGhlclRvZG9FeGFtcGxlMSk7XG5jb25zb2xlLmxvZyhhbm90aGVyUHJvamVjdEV4YW1wbGUpOy8vLy9cbi8vRVhBTVBMRTBcblxuXG5sZXQgYWxsVGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbFRhc2tzXCIpO1xuYWxsVGFza3NEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RDb250YWluZXJcIik7XG4gICAgZGl2cy5mb3JFYWNoKCAoZGl2KT0+IGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRQcm9qZWN0XCIpKTtcbiAgICBhbGxUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRQcm9qZWN0XCIpO1xuICAgIGRlcGxveUFsbFRvRG9zKHByb2plY3RzLHRvZG9zRGl2KTtcbn0pOyBcblxuZGVwbG95UHJvamVjdHMocHJvamVjdHMscHJvamVjdHNEaXYpO1xuZGVwbG95QWxsVG9Eb3MocHJvamVjdHMsdG9kb3NEaXYpO1xuXG5hZGRQcm9qZWN0RXZlbnQocHJvamVjdHMscHJvamVjdHNEaXYpO1xuYWRkVG9Eb0V2ZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9