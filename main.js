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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --fst-color: #7592a9;\n    --snd-color: #212187;\n    --trd-color: #0b0b35;\n    --fth-color:#ffffff; \n    --example: #31b700;\n}\nbody{\n    background-color: var(--trd-color);\n    color: white;\n    min-height: 100vh;\n    margin: 0;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    font-family: monospace;\n}\n.header{\n    text-align: center;\n    font-size: 1.8rem;\n    font-weight: 900;\n    color: var(--fst-color);\n    padding: .2rem;\n}\n.main{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n.sidebar{\n    background-color: var(--trd-color);\n    border-top-right-radius: 20px;\n    padding: 1.5rem;\n    padding-right: 0;\n    position: relative;\n}\n.content{\n    background-color: var(--fth-color);\n    color: var(--trd-color);\n    border-top-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n    padding: 1.5rem;\n    padding-left: 2rem;\n    position: relative;\n}\n.addTaskBtn, .addProjectBtn{\n    position: absolute;\n    bottom: 4%;\n    left: 50%;\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n    font-size: 1rem;\n    font-weight: 600;\n    border: none;\n}\n.addProjectBtn{\n    background-color: var(--fth-color);\n    color: var(--snd-color);\n}\n.addTaskBtn{\n    background-color: var(--trd-color);\n    color: var(--fth-color);\n}\n.addProjectBtn:hover, .addTaskBtn:hover{\n    background-color: var(--snd-color);\n    color: var(--fth-color);\n}\n.title{\n    font-size: 2rem;\n    font-weight: 900;\n    padding-bottom: 1.5rem;\n    padding-right: 1rem;\n}\n.projects{\n    display: grid;\n    gap: 1rem;\n}\n.projectContainer{\n    background-color: #3a4a65;\n    border: 2px solid var(--fth-color);\n    border-radius: 6px;\n    display: grid;\n    gap: .5rem;\n    justify-items: end;\n    padding: 8px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right: none;\n    position: relative;\n}\n.projectContainer:hover{\n    background-color: var(--snd-color);\n    color: var(--fth-color);\n    position: relative;\n}\n.projectName{\n    font-weight: 900;\n    font-size: 1.5rem;\n    text-align:center;\n}\n.projectDesc{\n    font-family: Arial, sans-serif;\n    font-size: 1.1rem;\n    font-style: italic;\n    text-align: justify;\n    margin-left: 1.4rem;\n}\n.selectedProject{\n    background-color: var(--fth-color);\n    border-color: var(--snd-color);\n    color: #212187;\n}\n.allTasks{\n    margin-bottom: 2rem;\n}\n.bigProjectContainer{\n    position: relative;\n}\n/***********************************************/\n.todos{\n    display: grid;\n    gap: 1.2rem;\n}\n.todoContainer{\n    background-color: var(--fst-color);\n    border-radius: 5px;\n    padding: 5px;\n    display: flex;\n    gap: 2rem;\n    justify-content: space-between;\n    padding-right: 2rem;\n    padding-left: 1rem;\n    border-bottom: 2px solid var(--snd-color);\n}\n.todoContainer:hover{\n    background-color: var(--snd-color);\n    color: var(--fth-color);\n}\n.todoCheck{\n    height: 1.6rem;\n    width: 1.6rem;\n    padding: 2px;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    text-align: center;\n    border-radius: 50%;\n}\n.false{\n    background-color: rgb(0, 0, 0);\n    border-color: red;\n}\n.true{\n    background-color: #31b700;\n    border-color: #1b6500;\n}\n.todoName{\n    font-size: 1.2rem;\n    font-weight: 900;\n    flex: 1;\n}\n/*//**********************************************/\n.deleteTask{\n    background-color: rgb(255, 144, 144);\n    border: none;\n    border-radius: 6px;\n    font-size: 1.2rem;\n}\n.deleteProject{\n    background-color: rgb(255, 144, 144);\n    border: none;\n    border-radius: 6px;\n    font-size: 1.2rem;\n    position: absolute;\n    bottom: 3%;\n    left: 3%;\n}\n.deleteProject:hover, .deleteTask:hover{\n    background-color: rgb(255, 48, 48);\n}\n/*  ****************************************************  */\n.dialog::backdrop{\n    background-color: rgb(27, 27, 27);\n    opacity: .8;\n}\n.dialog{\n    border-radius: 10px;\n    font-size: 1.4rem;\n    border: 2px solid var(--snd-color);\n}\n.form{\n    display: grid;\n    gap: 1rem;\n}\n.form-title{\n    color: var(--trd-color);\n    font-weight: 900;\n    text-align: center;\n}\n.form-row{\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n    color: var(--snd-color);\n}\n.form-row input{\n    border: 2px solid var(--trd-color);\n    border-radius: 5px;\n    color: var(--snd-color);\n}\n.btnAdd{\n    display: flex;\n    justify-content: space-between;\n    gap: 2rem;\n}\n.add{\n    flex: 2;\n    background-color: var(--snd-color);\n    border-radius: 5px;\n    border: none;\n    color: var(--fth-color);\n    font-weight: 600;\n    padding: .2rem;\n}\n.close{\n    flex: 1;\n    background-color: rgb(255, 81, 81);\n    border-radius: 5px;\n    border: none;\n    color: var(--fth-color);\n    font-weight: 600;\n}\n.add:hover{\n    background-color: var(--trd-color);\n}\n.close:hover{\n    background-color: rgb(255, 40, 40);\n}"],"sourceRoot":""}]);
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
        /*la solucion es crear un contenedor en el que se pueda dar click 
        al boton dlt ya que al estar dentro se esta dando click tambien al contenedor
        y eso causa un mal comportamiento*/
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
/* harmony export */   addProjectEvent: () => (/* binding */ addProjectEvent)
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFB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LHVEQUFlLHVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29uc3RydWN0b3JzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1mc3QtY29sb3I6ICM3NTkyYTk7XG4gICAgLS1zbmQtY29sb3I6ICMyMTIxODc7XG4gICAgLS10cmQtY29sb3I6ICMwYjBiMzU7XG4gICAgLS1mdGgtY29sb3I6I2ZmZmZmZjsgXG4gICAgLS1leGFtcGxlOiAjMzFiNzAwO1xufVxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG4uaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiB2YXIoLS1mc3QtY29sb3IpO1xuICAgIHBhZGRpbmc6IC4ycmVtO1xufVxuLm1haW57XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG59XG4uc2lkZWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRyZC1jb2xvcik7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFkZFRhc2tCdG4sIC5hZGRQcm9qZWN0QnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmFkZFByb2plY3RCdG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcbn1cbi5hZGRUYXNrQnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XG59XG4uYWRkUHJvamVjdEJ0bjpob3ZlciwgLmFkZFRhc2tCdG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4ucHJvamVjdHN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG59XG4ucHJvamVjdENvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E0YTY1O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZ0aC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAuNXJlbTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvamVjdENvbnRhaW5lcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9qZWN0TmFtZXtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLnByb2plY3REZXNje1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tbGVmdDogMS40cmVtO1xufVxuLnNlbGVjdGVkUHJvamVjdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcbiAgICBjb2xvcjogIzIxMjE4Nztcbn1cbi5hbGxUYXNrc3tcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmJpZ1Byb2plY3RDb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnRvZG9ze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxLjJyZW07XG59XG4udG9kb0NvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mc3QtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zbmQtY29sb3IpO1xufVxuLnRvZG9Db250YWluZXI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcbn1cbi50b2RvQ2hlY2t7XG4gICAgaGVpZ2h0OiAxLjZyZW07XG4gICAgd2lkdGg6IDEuNnJlbTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZmFsc2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuLnRydWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxYjcwMDtcbiAgICBib3JkZXItY29sb3I6ICMxYjY1MDA7XG59XG4udG9kb05hbWV7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmbGV4OiAxO1xufVxuLyovLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uZGVsZXRlVGFza3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNDQsIDE0NCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5kZWxldGVQcm9qZWN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0NCwgMTQ0KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDMlO1xuICAgIGxlZnQ6IDMlO1xufVxuLmRlbGV0ZVByb2plY3Q6aG92ZXIsIC5kZWxldGVUYXNrOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQ4LCA0OCk7XG59XG4vKiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgKi9cbi5kaWFsb2c6OmJhY2tkcm9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMjcsIDI3KTtcbiAgICBvcGFjaXR5OiAuODtcbn1cbi5kaWFsb2d7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zbmQtY29sb3IpO1xufVxuLmZvcm17XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG59XG4uZm9ybS10aXRsZXtcbiAgICBjb2xvcjogdmFyKC0tdHJkLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3JtLXJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XG59XG4uZm9ybS1yb3cgaW5wdXR7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHJkLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XG59XG4uYnRuQWRke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMnJlbTtcbn1cbi5hZGR7XG4gICAgZmxleDogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAuMnJlbTtcbn1cbi5jbG9zZXtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDgxLCA4MSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmFkZDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xufVxuLmNsb3NlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQwLCA0MCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsU0FBUztJQUNULGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJ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QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWZzdC1jb2xvcjogIzc1OTJhOTtcXG4gICAgLS1zbmQtY29sb3I6ICMyMTIxODc7XFxuICAgIC0tdHJkLWNvbG9yOiAjMGIwYjM1O1xcbiAgICAtLWZ0aC1jb2xvcjojZmZmZmZmOyBcXG4gICAgLS1leGFtcGxlOiAjMzFiNzAwO1xcbn1cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1mc3QtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuLm1haW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuLnNpZGViYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyZC1jb2xvcik7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkVGFza0J0biwgLmFkZFByb2plY3RCdG57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA0JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5hZGRQcm9qZWN0QnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcXG59XFxuLmFkZFRhc2tCdG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xcbn1cXG4uYWRkUHJvamVjdEJ0bjpob3ZlciwgLmFkZFRhc2tCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xcbn1cXG4udGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbi5wcm9qZWN0Q29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E0YTY1O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mdGgtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJvamVjdENvbnRhaW5lcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnByb2plY3ROYW1le1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcbi5wcm9qZWN0RGVzY3tcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBtYXJnaW4tbGVmdDogMS40cmVtO1xcbn1cXG4uc2VsZWN0ZWRQcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mdGgtY29sb3IpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XFxuICAgIGNvbG9yOiAjMjEyMTg3O1xcbn1cXG4uYWxsVGFza3N7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5iaWdQcm9qZWN0Q29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4udG9kb3N7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMS4ycmVtO1xcbn1cXG4udG9kb0NvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnN0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zbmQtY29sb3IpO1xcbn1cXG4udG9kb0NvbnRhaW5lcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc25kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XFxufVxcbi50b2RvQ2hlY2t7XFxuICAgIGhlaWdodDogMS42cmVtO1xcbiAgICB3aWR0aDogMS42cmVtO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uZmFsc2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcbi50cnVle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzFiNzAwO1xcbiAgICBib3JkZXItY29sb3I6ICMxYjY1MDA7XFxufVxcbi50b2RvTmFtZXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZsZXg6IDE7XFxufVxcbi8qLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5kZWxldGVUYXNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNDQsIDE0NCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLmRlbGV0ZVByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0NCwgMTQ0KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMyU7XFxuICAgIGxlZnQ6IDMlO1xcbn1cXG4uZGVsZXRlUHJvamVjdDpob3ZlciwgLmRlbGV0ZVRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQ4LCA0OCk7XFxufVxcbi8qICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICAqL1xcbi5kaWFsb2c6OmJhY2tkcm9we1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjcsIDI3LCAyNyk7XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG4uZGlhbG9ne1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc25kLWNvbG9yKTtcXG59XFxuLmZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuLmZvcm0tdGl0bGV7XFxuICAgIGNvbG9yOiB2YXIoLS10cmQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb3JtLXJvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xcbn1cXG4uZm9ybS1yb3cgaW5wdXR7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRyZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLXNuZC1jb2xvcik7XFxufVxcbi5idG5BZGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG4uYWRke1xcbiAgICBmbGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbmQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWZ0aC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcbn1cXG4uY2xvc2V7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDgxLCA4MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZnRoLWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmFkZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJkLWNvbG9yKTtcXG59XFxuLmNsb3NlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0MCwgNDApO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogLy8vLyBjb25zdHJ1Y3RvciBUb0RvXG4gICAgdGl0bGVcbiAgICBkdWVEYXRlXG4gICAgcHJpb3JpdHkgICBcbiAgICBjaGVja2xpc3Qoc3RhdHVzKTtcbiAgICBBc3NpZ25lZCBQcm9qZWN0XG4qL1xuXG4vL2VsaW1pbmF0ZSBkZWZhdWx0IHZhbHVlcyBpZiBub3QgdXNlZFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvRG8gKHRvZG9UaXRsZSwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSwgcHJvamVjdCkge1xuICAgIGNvbnN0IG5hbWUgPSB0b2RvVGl0bGU7XG4gICAgY29uc3QgZGF0ZSA9IHRvZG9EYXRlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gdG9kb1ByaW9yaXR5O1xuICAgIGNvbnN0IHN0YXR1cyA9IGZhbHNlO1xuICAgIHJldHVybiB7bmFtZSwgZGF0ZSwgcHJpb3JpdHksIHN0YXR1c307XG59XG5cbi8qIC8vLy8gY29uc3RydWN0b3IgUHJvamVjdCBcbiAgICB0aXRsZVxuICAgIGRlc2NyaXB0aW9uXG4gICAgYXNzaWduIFRvRG8ncyBcbiovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAocHJvamVjdFRpdGxlLCBwcm9qZWN0RGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdFRpdGxlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHRvRG9zID0gW107XG5cbiAgICByZXR1cm4ge25hbWUsIGRlc2NyaXB0aW9uLHRvRG9zfTtcbn0iLCIvKiBmdW5jdGlvbiB0byBwdXNoIGEgdG9kbyBpbnRvIHRoZSBwcm9qZWN0ICovXG5leHBvcnQgZnVuY3Rpb24gcHVzaFRvRG8gKHByb2plY3QsIHRvZG8pIHtcbiAgICBwcm9qZWN0LnRvRG9zLnB1c2godG9kbyk7XG59XG5cbi8qIGZ1bmN0aW9uIHRvIGNoYW5nZSBzdGF0dXMgb2YgdG9kbyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRvRG9TdGF0dXMgKHRvZG8pIHtcbiAgICBpZiAodG9kby5zdGF0dXM9PT1mYWxzZSkge1xuICAgICAgICB0b2RvLnN0YXR1cz10cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG8uc3RhdHVzPWZhbHNlO1xuICAgIH1cbn1cblxuLyogY2xlYXIgY29udGVudCBvZiBjb250YWluZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbnRhaW5lciAoZGl2KSB7XG4gICAgZGl2LmlubmVySFRNTD1cIlwiO1xufVxuXG4vKiAvLy8vIGRlcGxveSBwcm9qZWN0cyBpbiBzY3JlZW4gKi8gXG5leHBvcnQgZnVuY3Rpb24gZGVwbG95UHJvamVjdHMgKGFycmF5LGRpdikgeyBcbiAgICBsZXQgdG9kb3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuICAgIGZvciAobGV0IGk9MDsgaTxhcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgICAgbGV0IGJpZ0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiaWdDb250LmNsYXNzTGlzdC5hZGQoXCJiaWdQcm9qZWN0Q29udGFpbmVyXCIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYmlnQ29udCk7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENvbnRhaW5lclwiKTtcbiAgICAgICAgYmlnQ29udC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQ9YXJyYXlbaV0ubmFtZTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgbGV0IHByb2plY3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdERlc2MuY2xhc3NMaXN0LmFkZChcInByb2plY3REZXNjXCIpO1xuICAgICAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudD0gYXJyYXlbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVzYyk7XG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICAgICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdENvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGRpdnMuZm9yRWFjaCggKGRpdik9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkUHJvamVjdFwiKSk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkUHJvamVjdFwiKTtcblxuICAgICAgICAgICAgY2xlYXJDb250YWluZXIodG9kb3NEaXYpXG4gICAgICAgICAgICBkZXBsb3lUb0RvcyhhcnJheVtpXSx0b2Rvc0Rpdik7XG4gICAgICAgIH0pO1xuICAgICAgICAvKmxhIHNvbHVjaW9uIGVzIGNyZWFyIHVuIGNvbnRlbmVkb3IgZW4gZWwgcXVlIHNlIHB1ZWRhIGRhciBjbGljayBcbiAgICAgICAgYWwgYm90b24gZGx0IHlhIHF1ZSBhbCBlc3RhciBkZW50cm8gc2UgZXN0YSBkYW5kbyBjbGljayB0YW1iaWVuIGFsIGNvbnRlbmVkb3JcbiAgICAgICAgeSBlc28gY2F1c2EgdW4gbWFsIGNvbXBvcnRhbWllbnRvKi9cbiAgICAgICAgbGV0IGRsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRsdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlUHJvamVjdFwiKTtcbiAgICAgICAgZGx0LnRleHRDb250ZW50PVwi8J+XkVwiO1xuICAgICAgICBiaWdDb250LmFwcGVuZENoaWxkKGRsdCk7XG4gICAgICAgIFxuICAgICAgICBkbHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGNsZWFyQ29udGFpbmVyKGRpdik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgICAgICAgICAgZGVwbG95UHJvamVjdHMoYXJyYXksZGl2KTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcbiAgICAgICAgICAgICAgICBkZXBsb3lBbGxUb0RvcyhhcnJheSxuZXdEaXYpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxufVxuXG4vKiAvLy8vIGRlcGxveSB0b0RvcyBvZiBhIHByb2plY3QgaW4gc2NyZWVuICovXG5leHBvcnQgZnVuY3Rpb24gZGVwbG95VG9Eb3MgKHByb2plY3QsZGl2LGNyZWF0ZUJ0bj1mYWxzZSkge1xuICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0LnRvRG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG9Db250YWluZXJcIik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInRvZG9DaGVja1wiKTtcbiAgICAgICAgaWYocHJvamVjdC50b0Rvc1tpXS5zdGF0dXM9PT1mYWxzZSkge1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50PSBcIuKdjFwiO1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PSBcIjFcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudD0gXCLinJRcIjtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PSBcIi41XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIGxldCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTmFtZVwiKTtcbiAgICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQ9cHJvamVjdC50b0Rvc1tpXS5uYW1lO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgICAgICBsZXQgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kb0RhdGVcIik7XG4gICAgICAgIHRvZG9EYXRlLnRleHRDb250ZW50PXByb2plY3QudG9Eb3NbaV0uZGF0ZTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcbiAgICAgICAgc3dpdGNoIChwcm9qZWN0LnRvRG9zW2ldLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlckxlZnQgPSBcIjhweCBzb2xpZCBncmVlblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlckxlZnQgPSBcIjhweCBzb2xpZCAjZmZjYzAwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlckxlZnQgPSBcIjhweCBzb2xpZCAjYzQwMDAwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICAgICAgaWYocHJvamVjdC50b0Rvc1tpXS5zdGF0dXM9PT1mYWxzZSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZVRvRG9TdGF0dXMocHJvamVjdC50b0Rvc1tpXSk7XG4gICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50PSBcIuKclFwiO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImZhbHNlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PSBcIi41XCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZVRvRG9TdGF0dXMocHJvamVjdC50b0Rvc1tpXSk7XG4gICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50PSBcIuKdjFwiO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PSBcIjFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGNyZWF0ZUJ0bj09PWZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgZGx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRsdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVGFza1wiKTtcbiAgICAgICAgICAgIGRsdC50ZXh0Q29udGVudD1cIvCfl5FcIjtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkbHQpO1xuICAgICAgICAgICAgZGx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRvRG9zLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGNsZWFyQ29udGFpbmVyKGRpdik7XG4gICAgICAgICAgICAgICAgZGVwbG95VG9Eb3MocHJvamVjdCxkaXYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVwbG95QWxsVG9Eb3MgKGFycmF5LGRpdikge1xuICAgIGNsZWFyQ29udGFpbmVyKGRpdik7XG4gICBmb3IgKGxldCBpPTA7IGk8YXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVwbG95VG9Eb3MoYXJyYXlbaV0sZGl2LHRydWUpO1xuICAgIH0gXG59IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NvbnN0cnVjdG9yc1wiO1xuaW1wb3J0IHsgY2xlYXJDb250YWluZXIsIGRlcGxveVByb2plY3RzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBsZXQgYWRkUHJvamVjdEV2ZW50ID0gZnVuY3Rpb24gKGFycmF5LGRpdikge1xuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3REaWFsb2dcIik7IC8vb3BlbiBkaWFsb2dcbiAgICBsZXQgYnRuRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnRuXCIpO1xuICAgIGJ0bkRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gICAgbGV0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVByb2plY3RcIik7XG4gICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xuICAgIGxldCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjcmlwdGlvblwiKTtcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSxwcm9qZWN0RGVzYy52YWx1ZSkpO1xuICAgICAgICAgICAgY2xlYXJDb250YWluZXIoZGl2KTtcbiAgICAgICAgICAgIGRlcGxveVByb2plY3RzKGFycmF5LGRpdik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidG5EaWFsb2cpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUudmFsdWU9XCJcIjtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnZhbHVlPVwiXCI7XG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7Y3JlYXRlUHJvamVjdCxjcmVhdGVUb0RvfSBmcm9tICcuL2NvbnN0cnVjdG9ycy5qcyc7XG5pbXBvcnQgeyBwdXNoVG9EbyxjaGFuZ2VUb0RvU3RhdHVzLGRlcGxveVByb2plY3RzLGRlcGxveVRvRG9zLCBkZXBsb3lBbGxUb0RvcyB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCB7IGFkZFByb2plY3RFdmVudCB9IGZyb20gJy4vbW9kYWwnO1xuXG5leHBvcnQgbGV0IHByb2plY3RzID0gW107IC8vL2FycmF5IG9mIHByb2plY3RzXG5sZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xubGV0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcblxuLy9FWEFNUExFMCAgLyogICBUTyBDSEFOR0UgKi9cbmNvbnNvbGUubG9nKFwiSElcIik7XG5sZXQgcHJvamVjdEV4YW1wbGUgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBFeGFtcGxlIDFcIixcIlRoaXMgaXMgZGVzY3JpcHRpb24gMVwiKTtcbnByb2plY3RzLnB1c2gocHJvamVjdEV4YW1wbGUpXG5sZXQgdG9kb0V4YW1wbGUgPSBjcmVhdGVUb0RvKFwiVGFzayAxIGZvciBwcm9qZWN0IDFcIiwgXCJ0b2RheVwiLCBcImxvd1wiLCBwcm9qZWN0RXhhbXBsZS5uYW1lKTtcbnB1c2hUb0RvKHByb2plY3RFeGFtcGxlLHRvZG9FeGFtcGxlKTtcbmxldCB0b2RvRXhhbXBsZTEgPSBjcmVhdGVUb0RvKFwiVGFzayAyIGZvciBwcm9qZWN0IDFcIiwgXCJ0b2RheVwiLCBcIm1lZGl1bVwiLCBwcm9qZWN0RXhhbXBsZS5uYW1lKTtcbnB1c2hUb0RvKHByb2plY3RFeGFtcGxlLHRvZG9FeGFtcGxlMSk7XG5jb25zb2xlLmxvZyhwcm9qZWN0RXhhbXBsZSk7Ly8vL1xuLy9FWEFNUExFMFxuLy9FWEFNUExFMFxuY29uc29sZS5sb2coXCJISVwiKTtcbmxldCBhbm90aGVyUHJvamVjdEV4YW1wbGUgPSBjcmVhdGVQcm9qZWN0KFwiQW5vdGhlciBQcm9qZWN0IEV4YW1wbGVcIixcIlRoaXMgaXMgZGVzY3JpcHRpb24gMlwiKTtcbnByb2plY3RzLnB1c2goYW5vdGhlclByb2plY3RFeGFtcGxlKVxubGV0IGFub3RoZXJUb2RvRXhhbXBsZSA9IGNyZWF0ZVRvRG8oXCJUYXNrIDEgZm9yIFByb2plY3QgMlwiLCBcInRvZGF5XCIsIFwiaGlnaFwiLCBhbm90aGVyUHJvamVjdEV4YW1wbGUubmFtZSk7XG5wdXNoVG9Ebyhhbm90aGVyUHJvamVjdEV4YW1wbGUsYW5vdGhlclRvZG9FeGFtcGxlKTtcbmxldCBhbm90aGVyVG9kb0V4YW1wbGUxID0gY3JlYXRlVG9EbyhcIlRhc2sgMiBmb3IgUHJvamVjdCAyXCIsIFwidG9kYXlcIiwgXCJsb3dcIiwgYW5vdGhlclByb2plY3RFeGFtcGxlLm5hbWUpO1xucHVzaFRvRG8oYW5vdGhlclByb2plY3RFeGFtcGxlLGFub3RoZXJUb2RvRXhhbXBsZTEpO1xuY29uc29sZS5sb2coYW5vdGhlclByb2plY3RFeGFtcGxlKTsvLy8vXG4vL0VYQU1QTEUwXG5cblxubGV0IGFsbFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxUYXNrc1wiKTtcbmFsbFRhc2tzRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuICAgIGRpdnMuZm9yRWFjaCggKGRpdik9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkUHJvamVjdFwiKSk7XG4gICAgYWxsVGFza3NEaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkUHJvamVjdFwiKTtcbiAgICBkZXBsb3lBbGxUb0Rvcyhwcm9qZWN0cyx0b2Rvc0Rpdik7XG59KTsgXG5cbmRlcGxveVByb2plY3RzKHByb2plY3RzLHByb2plY3RzRGl2KTtcbmRlcGxveUFsbFRvRG9zKHByb2plY3RzLHRvZG9zRGl2KTtcblxuYWRkUHJvamVjdEV2ZW50KHByb2plY3RzLHByb2plY3RzRGl2KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=