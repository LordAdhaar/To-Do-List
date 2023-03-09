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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0px;\n    min-height: 100vh;\n    font-family: sans-serif;\n    background: black;\n}\n\nh1.headingText{\n    color: white;\n}\n\nform.taskForm{\n    display: flex;\n    gap: 5px;\n    margin: 20px 0px;\n}\n\nform.projectForm{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-content: space-between;\n    gap: 5px;\n}\n\nform.projectTaskForm{\n    display: flex;\n    gap: 5px;\n    margin-top: 15px;\n}\n\n#container{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n#content{\n    padding: 10px 10px;\n    background-color: #ffffff;\n    min-height: 100vh;\n}\n\n#content h2{\n}\n\ndiv.allTasksDiv, div.projectAllTasksDiv{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#content .newTaskDiv, #content .newProjectTaskDiv{\n    border: 2px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    background: white;\n}\n\n\n#heading{\n    grid-column:1/3;\n    padding: 0px 10px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.dropDown{\n    display: none;\n    background-color: black;\n\n}\n\n#heading img{\n    width: auto;\n    height: 40px;\n}\n\n#sidebar{\n    display: flex;\n    background-color: #212121;\n    color: white ;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n    padding: 10px;\n}\n\n#allTasks{\n    padding: 0px;\n    box-sizing: border-box;\n    width: 170px;\n    background: #212121; \n    color: white;\n    border: 0px;\n    font-size: 20px;\n    text-align: left;\n    font-weight: bold;\n    MARGIN: 0PX;\n}\n\n#allProjects{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#projects{\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\nbutton.projectAddButton, button.projectCancelButton,button.taskAddButton,button.taskCancelButton{\n    border: 2px solid black;\n    background: white;\n    color: black;\n    font-size: 15px;\n    font-weight: 500;\n}\n\nbutton.addTaskButton{\n    border: 2px solid black;\n    background: black;\n    color: white;\n    font-size: 15px;\n    font-weight: 500;\n    margin-top: 15px;\n}\n\nbutton{\n    border: 0px;\n    background: #212121;\n    color: white;\n    font-size: 15px;\n    font-weight: 700; \n}\n\nbutton.addProjectTaskBtn{\n    margin-top: 15px;\n}\n\n\n#addProject{\n    border: 2px solid black;\n    background-color: white;\n    color: black;\n    height: 30px;\n    width: 30px;\n    font-size: 20px;\n}\n\n.newProjectDiv{\n    display: flex;\n    justify-content: space-between;\n    background-color: #212121;\n    color: white;\n    padding-left: 10px;\n    border-left: 5px solid;\n    border-radius: 5px;\n}\n\n\n.newProjectTitle{\n    margin: 8px 0px;\n}\n\nbutton.projectAddButton{\n    grid-column: 1/2;\n}\n\ninput.projectTitle{\n    grid-column: 1/3;\n}\n\nbutton.projectCancelButton{\n\n}\n\n#content .newTaskDiv{\n    border-radius: 5px;\n}\n\n.newTaskDiv button{\n    display: none;\n}\n\n.newProjectTaskDiv button{\n    display: none;\n}\n\n.active{\n    display: flex;\n}\n\n@media (max-width:800px){\n    #sidebar{\n        grid-column: 1/3;\n        display: none;\n    }\n    #content{\n        grid-column: 1/3;\n    }\n    .dropDown{\n        display: block;\n    }\n    form.projectForm{\n        display: block;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,8BAA8B;IAC9B,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;AACA;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,iBAAiB;AACrB;;;AAGA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,uBAAuB;;AAE3B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;AACtB;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;AAEA;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;QACI,gBAAgB;QAChB,aAAa;IACjB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;IAClB;IACA;QACI,cAAc;IAClB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\nbody{\n    margin: 0px;\n    min-height: 100vh;\n    font-family: sans-serif;\n    background: black;\n}\n\nh1.headingText{\n    color: white;\n}\n\nform.taskForm{\n    display: flex;\n    gap: 5px;\n    margin: 20px 0px;\n}\n\nform.projectForm{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-content: space-between;\n    gap: 5px;\n}\n\nform.projectTaskForm{\n    display: flex;\n    gap: 5px;\n    margin-top: 15px;\n}\n\n#container{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n#content{\n    padding: 10px 10px;\n    background-color: #ffffff;\n    min-height: 100vh;\n}\n\n#content h2{\n}\n\ndiv.allTasksDiv, div.projectAllTasksDiv{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#content .newTaskDiv, #content .newProjectTaskDiv{\n    border: 2px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    background: white;\n}\n\n\n#heading{\n    grid-column:1/3;\n    padding: 0px 10px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.dropDown{\n    display: none;\n    background-color: black;\n\n}\n\n#heading img{\n    width: auto;\n    height: 40px;\n}\n\n#sidebar{\n    display: flex;\n    background-color: #212121;\n    color: white ;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n    padding: 10px;\n}\n\n#allTasks{\n    padding: 0px;\n    box-sizing: border-box;\n    width: 170px;\n    background: #212121; \n    color: white;\n    border: 0px;\n    font-size: 20px;\n    text-align: left;\n    font-weight: bold;\n    MARGIN: 0PX;\n}\n\n#allProjects{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#projects{\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\nbutton.projectAddButton, button.projectCancelButton,button.taskAddButton,button.taskCancelButton{\n    border: 2px solid black;\n    background: white;\n    color: black;\n    font-size: 15px;\n    font-weight: 500;\n}\n\nbutton.addTaskButton{\n    border: 2px solid black;\n    background: black;\n    color: white;\n    font-size: 15px;\n    font-weight: 500;\n    margin-top: 15px;\n}\n\nbutton{\n    border: 0px;\n    background: #212121;\n    color: white;\n    font-size: 15px;\n    font-weight: 700; \n}\n\nbutton.addProjectTaskBtn{\n    margin-top: 15px;\n}\n\n\n#addProject{\n    border: 2px solid black;\n    background-color: white;\n    color: black;\n    height: 30px;\n    width: 30px;\n    font-size: 20px;\n}\n\n.newProjectDiv{\n    display: flex;\n    justify-content: space-between;\n    background-color: #212121;\n    color: white;\n    padding-left: 10px;\n    border-left: 5px solid;\n    border-radius: 5px;\n}\n\n\n.newProjectTitle{\n    margin: 8px 0px;\n}\n\nbutton.projectAddButton{\n    grid-column: 1/2;\n}\n\ninput.projectTitle{\n    grid-column: 1/3;\n}\n\nbutton.projectCancelButton{\n\n}\n\n#content .newTaskDiv{\n    border-radius: 5px;\n}\n\n.newTaskDiv button{\n    display: none;\n}\n\n.newProjectTaskDiv button{\n    display: none;\n}\n\n.active{\n    display: flex;\n}\n\n@media (max-width:800px){\n    #sidebar{\n        grid-column: 1/3;\n        display: none;\n    }\n    #content{\n        grid-column: 1/3;\n    }\n    .dropDown{\n        display: block;\n    }\n    form.projectForm{\n        display: block;\n    }\n}"],"sourceRoot":""}]);
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
  } // For old IE

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

/***/ "./src/allTasks.js":
/*!*************************!*\
  !*** ./src/allTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allTaskLoader),
/* harmony export */   "flagToggler": () => (/* binding */ flagToggler)
/* harmony export */ });
/* harmony import */ var _newTaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskForm */ "./src/newTaskForm.js");
/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask.js */ "./src/newTask.js");




let content = document.querySelector("#content");
let heading = document.querySelector("#heading");
let flag = false;

function allTaskLoader(){

    if(flag===true){
        return;
    }

    (0,_newTaskForm__WEBPACK_IMPORTED_MODULE_0__.flagSetter)();

    let projectPageToRemove = document.querySelector(".projectPage");
    if(projectPageToRemove!==null){
        projectPageToRemove.remove();
    }

    //creating divs
    let allTasksPage = document.createElement("div");
    let allTasksHeading = document.createElement("h2");
    let addTaskButton = document.createElement("button")
    let allTasksDiv = document.createElement("div");

    //adding class
    allTasksPage.setAttribute("id","allTasksPage");
    allTasksHeading.classList.add("allTasksHeading");
    addTaskButton.classList.add("addTaskButton");
    allTasksDiv.classList.add("allTasksDiv");

    //adding text content
    allTasksHeading.innerHTML = "ALL TASKS";
    addTaskButton.innerHTML = "+ ADD TASK";

    allTasksPage.appendChild(allTasksHeading);
    allTasksPage.appendChild(allTasksDiv);    
    allTasksPage.appendChild(addTaskButton);

    content.appendChild(allTasksPage);

    // event listender for addTaskButton
    console.log(addTaskButton);
    addTaskButton.addEventListener("click",_newTaskForm__WEBPACK_IMPORTED_MODULE_0__["default"]);

    taskLoader(_newTask_js__WEBPACK_IMPORTED_MODULE_1__.allTasksList);

    flag=true;
}

function taskLoader(allTasksList){

    if(allTasksList.length===0){
        console.log(0);
        return;
    }

    console.log(allTasksList);

    for(let newTask of allTasksList){

        let allTasksDiv = document.querySelector(".allTasksDiv");

        let newTaskDiv = document.createElement("div");
        let newTaskCheckbox = document.createElement("input");
        let newTaskTitle = document.createElement("p");
        let newTaskDate = document.createElement("p"); 
        let delTaskBtn = document.createElement("button");

        // adding classes to the components
        newTaskCheckbox.classList.add("newTaskCheckbox");
        newTaskDiv.classList.add("newTaskDiv");
        newTaskDiv.classList.add(`${newTask.UniqueId}`);

        newTaskDiv.setAttribute("id",newTask.taskId);
        newTaskCheckbox.setAttribute("id",newTask.taskId);
        delTaskBtn.setAttribute("id",newTask.taskId);
        
        newTaskTitle.classList.add("newTaskTitle");
        newTaskDate.classList.add("newTaskDate");

        //seting chekcbox tpe
        newTaskCheckbox.type="checkbox";
        delTaskBtn.type="button";

        //filling in the description of the task
        newTaskTitle.innerHTML = newTask.title;
        newTaskDate.innerHTML = newTask.date;
        delTaskBtn.innerHTML="X";

        //adding content to task
        newTaskDiv.appendChild(newTaskCheckbox);
        newTaskDiv.appendChild(newTaskTitle);
        newTaskDiv.appendChild(newTaskDate);
        newTaskDiv.appendChild(delTaskBtn);
        
        //delete when checkbox clicked
        newTaskCheckbox.addEventListener("click",_newTask_js__WEBPACK_IMPORTED_MODULE_1__.removeDiv);
        delTaskBtn.addEventListener("click",_newTask_js__WEBPACK_IMPORTED_MODULE_1__.removeDiv);

        //adding to all tasks page
        allTasksDiv.appendChild(newTaskDiv);

    }

}

function flagToggler(){
    flag = false;
}

/***/ }),

/***/ "./src/createProjectPage.js":
/*!**********************************!*\
  !*** ./src/createProjectPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectPageLoader)
/* harmony export */ });
/* harmony import */ var _allTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allTasks.js */ "./src/allTasks.js");
/* harmony import */ var _newProjectTaskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectTaskForm.js */ "./src/newProjectTaskForm.js");
/* harmony import */ var _newProjectTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProjectTask.js */ "./src/newProjectTask.js");





let content = document.querySelector("#content");
let oldProjectPage;

let flag = false;

function projectPageLoader(newProject){

    let allTasksPage = document.querySelector("#allTasksPage");
    allTasksPageRemover(allTasksPage);

    (0,_newProjectTaskForm_js__WEBPACK_IMPORTED_MODULE_1__.projectTaskFormFlagToggle)();


    //prevent the same page from loading twice;
    if(flag === true){
        if(oldProjectPage===newProject.projectId+"Page"){
            
            let pageToBeDeleted = document.querySelector(`#${oldProjectPage}`);
            if(pageToBeDeleted!==null){
                return;
            }

            console.log(oldProjectPage,newProject.projectId+"Page")
        
        }else{

            console.log(oldProjectPage,newProject.projectId+"Page")

            let pageToBeDeleted = document.querySelector(`#${oldProjectPage}`);

            if(pageToBeDeleted!==null){
                pageToBeDeleted.remove();
            }
        }
    }



    let projectPage = document.createElement("div");
    let projectPageHeading = document.createElement("h2");
    let addProjectTaskBtn = document.createElement("button");
    let projectAllTasksDiv = document.createElement("div");

    projectPage.classList.add("projectPage");
    projectPage.setAttribute("id",newProject.projectId+"Page");
    projectPageHeading.classList.add("projectPageHeading");
    addProjectTaskBtn.classList.add("addProjectTaskBtn");
    projectAllTasksDiv.classList.add("projectAllTasksDiv");

    oldProjectPage = newProject.projectId+"Page";

    projectPageHeading.innerHTML = newProject.title;
    addProjectTaskBtn.innerHTML = "+ ADD TASK";

    projectPage.appendChild(projectPageHeading);
    projectPage.appendChild(projectAllTasksDiv);
    projectPage.appendChild(addProjectTaskBtn);

    content.appendChild(projectPage);

    //event listener for addTaskButton for the page
    addProjectTaskBtn.addEventListener("click",()=>{(0,_newProjectTaskForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectPage,newProject)});

    //load project ke tasks
    projectTaskLoader(newProject);

    flag = true;


}

function allTasksPageRemover(allTasksPage){
    
    if(allTasksPage===null){
        return;
    }
    else{
        allTasksPage.remove();
        (0,_allTasks_js__WEBPACK_IMPORTED_MODULE_0__.flagToggler)();
    }
}

function projectTaskLoader(newProject){

    console.log(newProject);
    console.log(newProject.projectTasksList);
    
    if(newProject.projectTasksList.length===0){
        console.log(0);
        return;
    }

    for(let newProjectTask of newProject.projectTasksList){
        
        let projectAllTasksDiv = document.querySelector(`#${newProject.projectId}Page .projectAllTasksDiv`);
        console.log(projectAllTasksDiv);

        let newProjectTaskDiv = document.createElement("div");
        let newProjectTaskCheckbox = document.createElement("input");
        let newProjectTaskTitle = document.createElement("p");
        let newProjectTaskDate = document.createElement("p");
        let delNewProjectTaskBtn = document.createElement("button");

        //adding classes
        newProjectTaskCheckbox.classList.add("newProjectTaskCheckbox");
        newProjectTaskDiv.classList.add("newProjectTaskDiv");
        newProjectTaskDiv.classList.add(`${newProjectTask.UniqueId}`);


        newProjectTaskDiv.setAttribute("id",newProjectTask.projectTaskId);
        newProjectTaskCheckbox.setAttribute("id",newProjectTask.projectTaskId);
        delNewProjectTaskBtn.setAttribute("id",newProjectTask.projectTaskId);

        newProjectTaskTitle.classList.add("newProjectTaskTitle");
        newProjectTaskDate.classList.add("newProjectTaskDate");

        //setting checkbox type;
        newProjectTaskCheckbox.type="checkbox";
        delNewProjectTaskBtn.type="button";

        //adding text;
        newProjectTaskTitle.innerHTML = newProjectTask.title;
        newProjectTaskDate.innerHTML=newProjectTask.date;
        delNewProjectTaskBtn.innerHTML="DEL";

        //adding content to tasks
        newProjectTaskDiv.appendChild(newProjectTaskCheckbox);
        newProjectTaskDiv.appendChild(newProjectTaskTitle);
        newProjectTaskDiv.appendChild(newProjectTaskDate);
        newProjectTaskDiv.appendChild(delNewProjectTaskBtn);

        //adding newProjectTaskDiv to projectAllTasksDiv
        projectAllTasksDiv.appendChild(newProjectTaskDiv);

        //delete when checkbox clicked or delete clicked;   
        console.log(newProject.projectTasksList);
        newProjectTaskCheckbox.addEventListener("click",()=>{(0,_newProjectTask_js__WEBPACK_IMPORTED_MODULE_2__.removeProjectTaskDiv)(newProjectTaskDiv,newProject)});
        delNewProjectTaskBtn.addEventListener("click",()=>{(0,_newProjectTask_js__WEBPACK_IMPORTED_MODULE_2__.removeProjectTaskDiv)(newProjectTaskDiv,newProject)})

    }
}

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjectList": () => (/* binding */ allProjectList),
/* harmony export */   "default": () => (/* binding */ newProjectAdder)
/* harmony export */ });
/* harmony import */ var _newProjectForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectForm.js */ "./src/newProjectForm.js");
/* harmony import */ var _createProjectPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProjectPage.js */ "./src/createProjectPage.js");
 


let allProjectList = [];
let count = allProjectList.length-1;

function projectCreator(){

    let projectTitle = document.querySelector(".projectTitle").value;
    
    if(projectTitle===""){
        return;
    }

    count+=1
    let projectId = count;

    let addProject = {title:projectTitle,projectNo:projectId,projectId:"project"+projectId,projectTasksList:[]};

    allProjectList.push(addProject);

    for(let project of allProjectList){
        console.log(project);
    }

    return addProject

}

function newProjectAdder(){

    let allProjects = document.querySelector("#allProjects");

    let newProject = projectCreator();

    if(newProject===undefined){
        return;
    }

    let newProjectDiv = document.createElement("div");
    let newProjectTitle = document.createElement("p");
    let delProjectBtn = document.createElement("button");

    newProjectDiv.classList.add("newProjectDiv");

    newProjectDiv.setAttribute("id",newProject.projectId);
    delProjectBtn.setAttribute("id",newProject.projectId);

    newProjectTitle.classList.add("newProjectTitle");

    //setting type
    delProjectBtn.type="button";

    //adding text;
    newProjectTitle.innerHTML=newProject.title;
    delProjectBtn.innerHTML="X";

    //appending children;
    newProjectDiv.appendChild(newProjectTitle);
    newProjectDiv.appendChild(delProjectBtn);

    delProjectBtn.addEventListener("click",remProject);

    //event listener on newProjectDiv to fire createProjectPage add here
    newProjectDiv.addEventListener("click",()=>{(0,_createProjectPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(newProject)});

    allProjects.appendChild(newProjectDiv);

    remProjectForm();
}



function remProject(){
    let projectToRemove = document.querySelector(`div#${this.id}`);
    projectToRemove.remove();
    for(let project of allProjectList){
        if(project.projectId===this.id){
            allProjectList.splice(allProjectList.indexOf(project),1);
        }
    }

    console.log(allProjectList);

}

function remProjectForm(){
    let projectFormToRemove = document.querySelector(".projectForm");
    projectFormToRemove.remove()
    ;(0,_newProjectForm_js__WEBPACK_IMPORTED_MODULE_0__.projFlagSetter)();

}

/***/ }),

/***/ "./src/newProjectForm.js":
/*!*******************************!*\
  !*** ./src/newProjectForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProjectForm),
/* harmony export */   "projFlagSetter": () => (/* binding */ projFlagSetter)
/* harmony export */ });
/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject.js */ "./src/newProject.js");


let flag = false;

function newProjectForm(){

    if(flag===true){
        return;
    }

    let sidebar = document.querySelector("#sidebar"); 
    
    let form = document.createElement("form");
    let projectTitle = document.createElement("input");
    let projectAddButton = document.createElement("button");
    let projectCancelButton = document.createElement("button");
    
    form.classList.add("projectForm");
    projectTitle.classList.add("projectTitle");
    projectAddButton.classList.add("projectAddButton");
    projectCancelButton.classList.add("projectCancelButton");

    projectTitle.type="text";
    projectTitle.placeholder="Enter Project Name";
    projectTitle.required=true;

    projectAddButton.type="button";
    projectCancelButton.type="button";

    projectAddButton.innerHTML="ADD";
    projectCancelButton.innerHTML="CANCEL";

    form.appendChild(projectTitle);
    form.appendChild(projectAddButton);
    form.appendChild(projectCancelButton);
    sidebar.appendChild(form);

    projectAddButton.addEventListener("click",_newProject_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    flag = true;
    projectCancelButton.addEventListener("click",cancelProjectForm);


}

function cancelProjectForm(){
    let formToBeRemoved = document.querySelector(".projectForm");
    formToBeRemoved.remove();
    flag=false;
}

function projFlagSetter(){
    flag = false;
}


/***/ }),

/***/ "./src/newProjectTask.js":
/*!*******************************!*\
  !*** ./src/newProjectTask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProjectTaskAdder),
/* harmony export */   "removeProjectTaskDiv": () => (/* binding */ removeProjectTaskDiv)
/* harmony export */ });
/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask.js */ "./src/newTask.js");
/* harmony import */ var _newProjectTaskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectTaskForm.js */ "./src/newProjectTaskForm.js");



function projectTaskCreator(newProject){
    
    console.log(newProject,newProject.title);

    let projectTaskTitle = document.querySelector(".projectTaskTitle").value;
    let projectTaskDate = document.querySelector(".projectTaskDate").value;

    if(projectTaskTitle==="" || projectTaskDate===""){
        return;
    }

    let count = newProject.projectTasksList.length;
    let projectTaskId = count;

    let taskId = _newTask_js__WEBPACK_IMPORTED_MODULE_0__.allTasksList.length;

    let addProjectTask = {title:projectTaskTitle,date:projectTaskDate,projectTaskNo:projectTaskId,projectTaskId:"projectTask"+projectTaskId,UniqueId:Math.random()};
    let addTaskToAllTasksList = {title:projectTaskTitle,date:projectTaskDate,taskNo:taskId,taskId:"task"+taskId,UniqueId:addProjectTask.UniqueId};

    newProject.projectTasksList.push(addProjectTask);
    _newTask_js__WEBPACK_IMPORTED_MODULE_0__.allTasksList.push(addTaskToAllTasksList);

    console.log(_newTask_js__WEBPACK_IMPORTED_MODULE_0__.allTasksList);
    console.log(newProject.projectTasksList);;


    return addProjectTask;

}



function newProjectTaskAdder(newProject){
    
    let projectAllTasksDiv = document.querySelector(`#${newProject.projectId}Page .projectAllTasksDiv`);
    console.log(projectAllTasksDiv);

    console.log("newProjectTaskAdder");
    let newProjectTask = projectTaskCreator(newProject);
    
    if(newProjectTask===undefined){
        return;
    }

    let newProjectTaskDiv = document.createElement("div");
    let newProjectTaskCheckbox = document.createElement("input");
    let newProjectTaskTitle = document.createElement("p");
    let newProjectTaskDate = document.createElement("p");
    let delNewProjectTaskBtn = document.createElement("button");

    //adding classes
    newProjectTaskCheckbox.classList.add("newProjectTaskCheckbox");
    newProjectTaskDiv.classList.add("newProjectTaskDiv");
    newProjectTaskDiv.classList.add(`${newProjectTask.UniqueId}`);


    newProjectTaskDiv.setAttribute("id",newProjectTask.projectTaskId);
    newProjectTaskCheckbox.setAttribute("id",newProjectTask.projectTaskId);
    delNewProjectTaskBtn.setAttribute("id",newProjectTask.projectTaskId);

    newProjectTaskTitle.classList.add("newProjectTaskTitle");
    newProjectTaskDate.classList.add("newProjectTaskDate");

    //setting checkbox type;
    newProjectTaskCheckbox.type="checkbox";
    delNewProjectTaskBtn.type="button";

    //adding text;
    newProjectTaskTitle.innerHTML = newProjectTask.title;
    newProjectTaskDate.innerHTML=newProjectTask.date;
    delNewProjectTaskBtn.innerHTML="X";

    //adding content to tasks
    newProjectTaskDiv.appendChild(newProjectTaskCheckbox);
    newProjectTaskDiv.appendChild(newProjectTaskTitle);
    newProjectTaskDiv.appendChild(newProjectTaskDate);
    newProjectTaskDiv.appendChild(delNewProjectTaskBtn);

    //adding newProjectTaskDiv to projectAllTasksDiv
    projectAllTasksDiv.appendChild(newProjectTaskDiv);

    //delete when checkbox clicked or delete clicked;   
    console.log(newProject.projectTasksList);
    newProjectTaskCheckbox.addEventListener("click",()=>{removeProjectTaskDiv(newProjectTaskDiv,newProject)});
    delNewProjectTaskBtn.addEventListener("click",()=>{removeProjectTaskDiv(newProjectTaskDiv,newProject)})

    //remove form
    remProjectTaskForm();

}

function remProjectTaskForm(){

    let projectTaskFormToRemove = document.querySelector(".projectTaskForm");
    projectTaskFormToRemove.remove();
    (0,_newProjectTaskForm_js__WEBPACK_IMPORTED_MODULE_1__.projectTaskFormFlagToggle)();
}

function removeProjectTaskDiv(newProjectTaskDiv,newProject){

    newProjectTaskDiv.remove();
    //remove from list tooooooooooo alltask and projectalltasks
    for(let projectTask of newProject.projectTasksList){
        if(projectTask.projectTaskId === newProjectTaskDiv.id){
            newProject.projectTasksList.splice(newProject.projectTasksList.indexOf(projectTask),1);
        }
    }

    for(let projectTask of _newTask_js__WEBPACK_IMPORTED_MODULE_0__.allTasksList){

        console.log(typeof projectTask.UniqueId);
        console.log(typeof +newProjectTaskDiv.classList[1]);

        if( projectTask.UniqueId === +newProjectTaskDiv.classList[1]){
            console.log(projectTask.UniqueId,newProjectTaskDiv.classList[1]);
            console.log(true);
            _newTask_js__WEBPACK_IMPORTED_MODULE_0__.allTasksList.splice(_newTask_js__WEBPACK_IMPORTED_MODULE_0__.allTasksList.indexOf(projectTask),1);
        }


    console.log(newProject.projectTasksList);
    console.log(_newTask_js__WEBPACK_IMPORTED_MODULE_0__.allTasksList);
    }
}


/***/ }),

/***/ "./src/newProjectTaskForm.js":
/*!***********************************!*\
  !*** ./src/newProjectTaskForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProjectTaskForm),
/* harmony export */   "projectTaskFormFlagToggle": () => (/* binding */ projectTaskFormFlagToggle)
/* harmony export */ });
/* harmony import */ var _newProjectTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectTask.js */ "./src/newProjectTask.js");


let flag = false;

function newProjectTaskForm(projectPage,newProject){

    if(flag === true){
        return;
    }
    console.log(newProject);
    console.log(flag,projectPage);

    let form = document.createElement("form");
    let projectTaskTitle = document.createElement("input");
    let projectTaskDate = document.createElement("input");
    let projectTaskAddButton = document.createElement("button");
    let projectTaskCancelButton = document.createElement("button");

    form.classList.add("projectTaskForm");
    projectTaskTitle.classList.add("projectTaskTitle");
    projectTaskDate.classList.add("projectTaskDate");
    projectTaskAddButton.classList.add("projectTaskAddButton");
    projectTaskCancelButton.classList.add("projectTaskCancelButton");
    
    projectTaskTitle.type="text";
    projectTaskTitle.placeholder="Enter Task";
    projectTaskTitle.required=true;

    projectTaskDate.type="date";
    projectTaskDate.required=true;

    projectTaskAddButton.type="button";
    projectTaskCancelButton.type="button";

    projectTaskAddButton.innerHTML="ADD";
    projectTaskCancelButton.innerHTML="CANCEL";

    form.appendChild(projectTaskTitle);
    form.appendChild(projectTaskDate);
    form.appendChild(projectTaskAddButton);
    form.appendChild(projectTaskCancelButton);

    projectPage.appendChild(form);

    //projectTaskAddButton event listener
    projectTaskAddButton.addEventListener("click",()=>{(0,_newProjectTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newProject)});
    
    flag=true;
    projectTaskCancelButton.addEventListener("click",()=>{cancelProjectTaskForm(form)});
    

}

function projectTaskFormFlagToggle(){
    flag = false;
}

function cancelProjectTaskForm(form){
    form.remove();
    flag=false;
}


/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasksList": () => (/* binding */ allTasksList),
/* harmony export */   "default": () => (/* binding */ newTaskAdder),
/* harmony export */   "removeDiv": () => (/* binding */ removeDiv)
/* harmony export */ });
/* harmony import */ var _newTaskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskForm.js */ "./src/newTaskForm.js");
/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject.js */ "./src/newProject.js");



let allTasksList = [{title: 'Pickup Groceries', date: '2022-12-15', taskNo: 0, taskId: 'task0',UniqueId:-1},{title: 'Pay Phonebill', date: '2022-12-15', taskNo: 1, taskId: 'task1',UniqueId:-1}];

let count=allTasksList.length-1;

function TaskCreator(){
    
    let taskTitle = document.querySelector(".taskTitle").value;
    let taskDate = document.querySelector(".taskDateInput").value

    if(taskTitle==="" || taskDate===""){
        return;
    }

    count+=1;
    let taskId=count;
    
    let addTask = {title:taskTitle,date:taskDate,taskNo:taskId,taskId:"task"+taskId,UniqueId:-1};
    
    allTasksList.push(addTask);
    
    for(let task of allTasksList){
        console.log(task);
    }

    return addTask;
    


}

function newTaskAdder(){

    console.log(this);
    let allTasksDiv = document.querySelector(".allTasksDiv");

    //storing newTask
    let newTask = TaskCreator();

    if(newTask===undefined){
        return;
    }


    let newTaskDiv = document.createElement("div");
    let newTaskCheckbox = document.createElement("input");
    let newTaskTitle = document.createElement("p");
    let newTaskDate = document.createElement("p"); 
    let delTaskBtn = document.createElement("button");

    // adding classes to the components
    newTaskCheckbox.classList.add("newTaskCheckbox");
    newTaskDiv.classList.add("newTaskDiv");
    newTaskDiv.classList.add(`${newTask.UniqueId}`);

    newTaskDiv.setAttribute("id",newTask.taskId);
    newTaskCheckbox.setAttribute("id",newTask.taskId);
    delTaskBtn.setAttribute("id",newTask.taskId);

    
    newTaskTitle.classList.add("newTaskTitle");
    newTaskDate.classList.add("newTaskDate");

    //seting chekcbox tpe
    newTaskCheckbox.type="checkbox";
    delTaskBtn.type="button";

    //filling in the description of the task
    newTaskTitle.innerHTML = newTask.title;
    newTaskDate.innerHTML = newTask.date;
    delTaskBtn.innerHTML="X";

    //adding content to task
    newTaskDiv.appendChild(newTaskCheckbox);
    newTaskDiv.appendChild(newTaskTitle);
    newTaskDiv.appendChild(newTaskDate);
    newTaskDiv.appendChild(delTaskBtn);
    
    //delete when checkbox clicked
    newTaskCheckbox.addEventListener("click",removeDiv);
    delTaskBtn.addEventListener("click",removeDiv);

    //adding to all tasks page
    allTasksDiv.appendChild(newTaskDiv);

    //
    remForm();

}

function removeDiv(newTaskDiv){

    console.log(this);
    let toRemove = document.querySelector(`div#${this.id}`);
    console.log(toRemove.classList[1]);
    toRemove.remove();

    for(let task of allTasksList){
        console.log("im in")
        if(task.taskId===this.id){
            console.log(true);
            allTasksList.splice(allTasksList.indexOf(task),1);
        }
    }   

    if(_newProject_js__WEBPACK_IMPORTED_MODULE_1__.allProjectList.length===0){
        return;
    }

    for(let project of _newProject_js__WEBPACK_IMPORTED_MODULE_1__.allProjectList){

        if(project.projectTasksList.length!==0){

            for(let projectTask of project.projectTasksList){
            
                if(+toRemove.classList[1]===projectTask.UniqueId){
                    console.log("about to get cancelled");
                    project.projectTasksList.splice(project.projectTasksList.indexOf(projectTask),1);    
                }
            

            }
        }
    }

    console.log(_newProject_js__WEBPACK_IMPORTED_MODULE_1__.allProjectList);
    console.log(allTasksList);

}

function remForm(){
    let formToBeRemoved = document.querySelector(".taskForm");
    formToBeRemoved.remove();
    (0,_newTaskForm_js__WEBPACK_IMPORTED_MODULE_0__.flagSetter)()
}

/***/ }),

/***/ "./src/newTaskForm.js":
/*!****************************!*\
  !*** ./src/newTaskForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newTaskForm),
/* harmony export */   "flagSetter": () => (/* binding */ flagSetter)
/* harmony export */ });
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");



let flag = false;
//put input tags and button in FORM tag to make required work later

function newTaskForm(){

    if(flag===true){
        return;
    }

    let allTasksPage = document.querySelector("#allTasksPage");

    let form = document.createElement("form");
    let taskTitle = document.createElement("input");
    let taskDateInput = document.createElement("input");
    let taskAddButton = document.createElement("button");
    let taskCancelButton = document.createElement("button");

    form.classList.add("taskForm");
    taskTitle.classList.add("taskTitle");
    taskDateInput.classList.add("taskDateInput");
    taskAddButton.classList.add("taskAddButton");
    taskCancelButton.classList.add("taskCancelButton");
    
    taskTitle.type="text";
    taskTitle.placeholder="Enter task";
    taskTitle.required=true;

    taskDateInput.type="date";
    taskDateInput.required=true;

    taskAddButton.type="button";
    taskCancelButton.type="button";

    taskAddButton.innerHTML="ADD";
    taskCancelButton.innerHTML="CANCEL"

    form.appendChild(taskTitle);
    form.appendChild(taskDateInput);
    form.appendChild(taskAddButton);
    form.appendChild(taskCancelButton);
    allTasksPage.appendChild(form);

    //event listener for addTask
    taskAddButton.addEventListener("click",_newTask__WEBPACK_IMPORTED_MODULE_0__["default"]);
    flag=true;
    taskCancelButton.addEventListener("click",cancelForm);

}

function cancelForm(){
    let formToBeRemoved = document.querySelector(".taskForm");
    formToBeRemoved.remove();
    flag=false;
}

function flagSetter(){
    flag = false;
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
/* harmony import */ var _allTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allTasks.js */ "./src/allTasks.js");
/* harmony import */ var _newProjectForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProjectForm.js */ "./src/newProjectForm.js");




(0,_allTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

let allTasksBtn = document.querySelector("#allTasks");
allTasksBtn.addEventListener("click",_allTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

let addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener("click",_newProjectForm_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7QUFDTzs7QUFFakQsd0RBQWE7O0FBRWI7QUFDQSxxQ0FBcUMsb0RBQWE7O0FBRWxEO0FBQ0EsdUNBQXVDLDBEQUFjLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0UGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld1Byb2plY3RUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdFRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG5oMS5oZWFkaW5nVGV4dHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb3JtLnRhc2tGb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG59XFxuXFxuZm9ybS5wcm9qZWN0Rm9ybXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuZm9ybS5wcm9qZWN0VGFza0Zvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4jY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCBoMntcXG59XFxuXFxuZGl2LmFsbFRhc2tzRGl2LCBkaXYucHJvamVjdEFsbFRhc2tzRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNjb250ZW50IC5uZXdUYXNrRGl2LCAjY29udGVudCAubmV3UHJvamVjdFRhc2tEaXZ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5cXG4jaGVhZGluZ3tcXG4gICAgZ3JpZC1jb2x1bW46MS8zO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZHJvcERvd257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4jaGVhZGluZyBpbWd7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbiNzaWRlYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbiAgICBjb2xvcjogd2hpdGUgO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jYWxsVGFza3N7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMTIxOyBcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgTUFSR0lOOiAwUFg7XFxufVxcblxcbiNhbGxQcm9qZWN0c3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuI3Byb2plY3Rze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ucHJvamVjdEFkZEJ1dHRvbiwgYnV0dG9uLnByb2plY3RDYW5jZWxCdXR0b24sYnV0dG9uLnRhc2tBZGRCdXR0b24sYnV0dG9uLnRhc2tDYW5jZWxCdXR0b257XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmJ1dHRvbi5hZGRUYXNrQnV0dG9ue1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgXFxufVxcblxcbmJ1dHRvbi5hZGRQcm9qZWN0VGFza0J0bntcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuXFxuI2FkZFByb2plY3R7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5uZXdQcm9qZWN0RGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbi5uZXdQcm9qZWN0VGl0bGV7XFxuICAgIG1hcmdpbjogOHB4IDBweDtcXG59XFxuXFxuYnV0dG9uLnByb2plY3RBZGRCdXR0b257XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcblxcbmlucHV0LnByb2plY3RUaXRsZXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuYnV0dG9uLnByb2plY3RDYW5jZWxCdXR0b257XFxuXFxufVxcblxcbiNjb250ZW50IC5uZXdUYXNrRGl2e1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uZXdUYXNrRGl2IGJ1dHRvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5ld1Byb2plY3RUYXNrRGl2IGJ1dHRvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ODAwcHgpe1xcbiAgICAjc2lkZWJhcntcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgICNjb250ZW50e1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgfVxcbiAgICAuZHJvcERvd257XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICBmb3JtLnByb2plY3RGb3Jte1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuaDEuaGVhZGluZ1RleHR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9ybS50YXNrRm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxufVxcblxcbmZvcm0ucHJvamVjdEZvcm17XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbmZvcm0ucHJvamVjdFRhc2tGb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQgaDJ7XFxufVxcblxcbmRpdi5hbGxUYXNrc0RpdiwgZGl2LnByb2plY3RBbGxUYXNrc0RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jY29udGVudCAubmV3VGFza0RpdiwgI2NvbnRlbnQgLm5ld1Byb2plY3RUYXNrRGl2e1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuXFxuI2hlYWRpbmd7XFxuICAgIGdyaWQtY29sdW1uOjEvMztcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRyb3BEb3due1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG59XFxuXFxuI2hlYWRpbmcgaW1ne1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jc2lkZWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG4gICAgY29sb3I6IHdoaXRlIDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2FsbFRhc2tze1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgYmFja2dyb3VuZDogIzIxMjEyMTsgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIE1BUkdJTjogMFBYO1xcbn1cXG5cXG4jYWxsUHJvamVjdHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNwcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuYnV0dG9uLnByb2plY3RBZGRCdXR0b24sIGJ1dHRvbi5wcm9qZWN0Q2FuY2VsQnV0dG9uLGJ1dHRvbi50YXNrQWRkQnV0dG9uLGJ1dHRvbi50YXNrQ2FuY2VsQnV0dG9ue1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5idXR0b24uYWRkVGFza0J1dHRvbntcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYmFja2dyb3VuZDogIzIxMjEyMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IFxcbn1cXG5cXG5idXR0b24uYWRkUHJvamVjdFRhc2tCdG57XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcblxcbiNhZGRQcm9qZWN0e1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubmV3UHJvamVjdERpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4ubmV3UHJvamVjdFRpdGxle1xcbiAgICBtYXJnaW46IDhweCAwcHg7XFxufVxcblxcbmJ1dHRvbi5wcm9qZWN0QWRkQnV0dG9ue1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG5pbnB1dC5wcm9qZWN0VGl0bGV7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbmJ1dHRvbi5wcm9qZWN0Q2FuY2VsQnV0dG9ue1xcblxcbn1cXG5cXG4jY29udGVudCAubmV3VGFza0RpdntcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubmV3VGFza0RpdiBidXR0b257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uZXdQcm9qZWN0VGFza0RpdiBidXR0b257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hY3RpdmV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjgwMHB4KXtcXG4gICAgI3NpZGViYXJ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAjY29udGVudHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIH1cXG4gICAgLmRyb3BEb3due1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgZm9ybS5wcm9qZWN0Rm9ybXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBuZXdUYXNrRm9ybSBmcm9tIFwiLi9uZXdUYXNrRm9ybVwiO1xuaW1wb3J0IG5ld1Rhc2tBZGRlciwge2FsbFRhc2tzTGlzdCwgcmVtb3ZlRGl2fSBmcm9tIFwiLi9uZXdUYXNrLmpzXCI7XG5pbXBvcnQge2ZsYWdTZXR0ZXJ9IGZyb20gXCIuL25ld1Rhc2tGb3JtXCI7XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xubGV0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRpbmdcIik7XG5sZXQgZmxhZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGxUYXNrTG9hZGVyKCl7XG5cbiAgICBpZihmbGFnPT09dHJ1ZSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmbGFnU2V0dGVyKCk7XG5cbiAgICBsZXQgcHJvamVjdFBhZ2VUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFBhZ2VcIik7XG4gICAgaWYocHJvamVjdFBhZ2VUb1JlbW92ZSE9PW51bGwpe1xuICAgICAgICBwcm9qZWN0UGFnZVRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vY3JlYXRpbmcgZGl2c1xuICAgIGxldCBhbGxUYXNrc1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBhbGxUYXNrc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbGV0IGFsbFRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vYWRkaW5nIGNsYXNzXG4gICAgYWxsVGFza3NQYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhbGxUYXNrc1BhZ2VcIik7XG4gICAgYWxsVGFza3NIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJhbGxUYXNrc0hlYWRpbmdcIik7XG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0J1dHRvblwiKTtcbiAgICBhbGxUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWxsVGFza3NEaXZcIik7XG5cbiAgICAvL2FkZGluZyB0ZXh0IGNvbnRlbnRcbiAgICBhbGxUYXNrc0hlYWRpbmcuaW5uZXJIVE1MID0gXCJBTEwgVEFTS1NcIjtcbiAgICBhZGRUYXNrQnV0dG9uLmlubmVySFRNTCA9IFwiKyBBREQgVEFTS1wiO1xuXG4gICAgYWxsVGFza3NQYWdlLmFwcGVuZENoaWxkKGFsbFRhc2tzSGVhZGluZyk7XG4gICAgYWxsVGFza3NQYWdlLmFwcGVuZENoaWxkKGFsbFRhc2tzRGl2KTsgICAgXG4gICAgYWxsVGFza3NQYWdlLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhbGxUYXNrc1BhZ2UpO1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZGVyIGZvciBhZGRUYXNrQnV0dG9uXG4gICAgY29uc29sZS5sb2coYWRkVGFza0J1dHRvbik7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixuZXdUYXNrRm9ybSk7XG5cbiAgICB0YXNrTG9hZGVyKGFsbFRhc2tzTGlzdCk7XG5cbiAgICBmbGFnPXRydWU7XG59XG5cbmZ1bmN0aW9uIHRhc2tMb2FkZXIoYWxsVGFza3NMaXN0KXtcblxuICAgIGlmKGFsbFRhc2tzTGlzdC5sZW5ndGg9PT0wKXtcbiAgICAgICAgY29uc29sZS5sb2coMCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhhbGxUYXNrc0xpc3QpO1xuXG4gICAgZm9yKGxldCBuZXdUYXNrIG9mIGFsbFRhc2tzTGlzdCl7XG5cbiAgICAgICAgbGV0IGFsbFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxUYXNrc0RpdlwiKTtcblxuICAgICAgICBsZXQgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBuZXdUYXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGxldCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbGV0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuICAgICAgICBsZXQgZGVsVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgICAgLy8gYWRkaW5nIGNsYXNzZXMgdG8gdGhlIGNvbXBvbmVudHNcbiAgICAgICAgbmV3VGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrQ2hlY2tib3hcIik7XG4gICAgICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tEaXZcIik7XG4gICAgICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChgJHtuZXdUYXNrLlVuaXF1ZUlkfWApO1xuXG4gICAgICAgIG5ld1Rhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIixuZXdUYXNrLnRhc2tJZCk7XG4gICAgICAgIG5ld1Rhc2tDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Rhc2sudGFza0lkKTtcbiAgICAgICAgZGVsVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Rhc2sudGFza0lkKTtcbiAgICAgICAgXG4gICAgICAgIG5ld1Rhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3VGFza1RpdGxlXCIpO1xuICAgICAgICBuZXdUYXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwibmV3VGFza0RhdGVcIik7XG5cbiAgICAgICAgLy9zZXRpbmcgY2hla2Nib3ggdHBlXG4gICAgICAgIG5ld1Rhc2tDaGVja2JveC50eXBlPVwiY2hlY2tib3hcIjtcbiAgICAgICAgZGVsVGFza0J0bi50eXBlPVwiYnV0dG9uXCI7XG5cbiAgICAgICAgLy9maWxsaW5nIGluIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFza1xuICAgICAgICBuZXdUYXNrVGl0bGUuaW5uZXJIVE1MID0gbmV3VGFzay50aXRsZTtcbiAgICAgICAgbmV3VGFza0RhdGUuaW5uZXJIVE1MID0gbmV3VGFzay5kYXRlO1xuICAgICAgICBkZWxUYXNrQnRuLmlubmVySFRNTD1cIlhcIjtcblxuICAgICAgICAvL2FkZGluZyBjb250ZW50IHRvIHRhc2tcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQ2hlY2tib3gpO1xuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG4gICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0RhdGUpO1xuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGRlbFRhc2tCdG4pO1xuICAgICAgICBcbiAgICAgICAgLy9kZWxldGUgd2hlbiBjaGVja2JveCBjbGlja2VkXG4gICAgICAgIG5ld1Rhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixyZW1vdmVEaXYpO1xuICAgICAgICBkZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlbW92ZURpdik7XG5cbiAgICAgICAgLy9hZGRpbmcgdG8gYWxsIHRhc2tzIHBhZ2VcbiAgICAgICAgYWxsVGFza3NEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdUb2dnbGVyKCl7XG4gICAgZmxhZyA9IGZhbHNlO1xufSIsImltcG9ydCB7ZmxhZ1RvZ2dsZXJ9IGZyb20gXCIuL2FsbFRhc2tzLmpzXCI7XG5pbXBvcnQgbmV3UHJvamVjdFRhc2tGb3JtIGZyb20gXCIuL25ld1Byb2plY3RUYXNrRm9ybS5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0VGFza0Zvcm1GbGFnVG9nZ2xlfSBmcm9tIFwiLi9uZXdQcm9qZWN0VGFza0Zvcm0uanNcIlxuaW1wb3J0IHtyZW1vdmVQcm9qZWN0VGFza0Rpdn0gZnJvbSBcIi4vbmV3UHJvamVjdFRhc2suanNcIjtcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5sZXQgb2xkUHJvamVjdFBhZ2U7XG5cbmxldCBmbGFnID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RQYWdlTG9hZGVyKG5ld1Byb2plY3Qpe1xuXG4gICAgbGV0IGFsbFRhc2tzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsVGFza3NQYWdlXCIpO1xuICAgIGFsbFRhc2tzUGFnZVJlbW92ZXIoYWxsVGFza3NQYWdlKTtcblxuICAgIHByb2plY3RUYXNrRm9ybUZsYWdUb2dnbGUoKTtcblxuXG4gICAgLy9wcmV2ZW50IHRoZSBzYW1lIHBhZ2UgZnJvbSBsb2FkaW5nIHR3aWNlO1xuICAgIGlmKGZsYWcgPT09IHRydWUpe1xuICAgICAgICBpZihvbGRQcm9qZWN0UGFnZT09PW5ld1Byb2plY3QucHJvamVjdElkK1wiUGFnZVwiKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHBhZ2VUb0JlRGVsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke29sZFByb2plY3RQYWdlfWApO1xuICAgICAgICAgICAgaWYocGFnZVRvQmVEZWxldGVkIT09bnVsbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRQcm9qZWN0UGFnZSxuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIilcbiAgICAgICAgXG4gICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRQcm9qZWN0UGFnZSxuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIilcblxuICAgICAgICAgICAgbGV0IHBhZ2VUb0JlRGVsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke29sZFByb2plY3RQYWdlfWApO1xuXG4gICAgICAgICAgICBpZihwYWdlVG9CZURlbGV0ZWQhPT1udWxsKXtcbiAgICAgICAgICAgICAgICBwYWdlVG9CZURlbGV0ZWQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgbGV0IHByb2plY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgcHJvamVjdFBhZ2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBhZGRQcm9qZWN0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IHByb2plY3RBbGxUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwcm9qZWN0UGFnZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFBhZ2VcIik7XG4gICAgcHJvamVjdFBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIik7XG4gICAgcHJvamVjdFBhZ2VIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0UGFnZUhlYWRpbmdcIik7XG4gICAgYWRkUHJvamVjdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RUYXNrQnRuXCIpO1xuICAgIHByb2plY3RBbGxUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEFsbFRhc2tzRGl2XCIpO1xuXG4gICAgb2xkUHJvamVjdFBhZ2UgPSBuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIjtcblxuICAgIHByb2plY3RQYWdlSGVhZGluZy5pbm5lckhUTUwgPSBuZXdQcm9qZWN0LnRpdGxlO1xuICAgIGFkZFByb2plY3RUYXNrQnRuLmlubmVySFRNTCA9IFwiKyBBREQgVEFTS1wiO1xuXG4gICAgcHJvamVjdFBhZ2UuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2VIZWFkaW5nKTtcbiAgICBwcm9qZWN0UGFnZS5hcHBlbmRDaGlsZChwcm9qZWN0QWxsVGFza3NEaXYpO1xuICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKGFkZFByb2plY3RUYXNrQnRuKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBmb3IgYWRkVGFza0J1dHRvbiBmb3IgdGhlIHBhZ2VcbiAgICBhZGRQcm9qZWN0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e25ld1Byb2plY3RUYXNrRm9ybShwcm9qZWN0UGFnZSxuZXdQcm9qZWN0KX0pO1xuXG4gICAgLy9sb2FkIHByb2plY3Qga2UgdGFza3NcbiAgICBwcm9qZWN0VGFza0xvYWRlcihuZXdQcm9qZWN0KTtcblxuICAgIGZsYWcgPSB0cnVlO1xuXG5cbn1cblxuZnVuY3Rpb24gYWxsVGFza3NQYWdlUmVtb3ZlcihhbGxUYXNrc1BhZ2Upe1xuICAgIFxuICAgIGlmKGFsbFRhc2tzUGFnZT09PW51bGwpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGFsbFRhc2tzUGFnZS5yZW1vdmUoKTtcbiAgICAgICAgZmxhZ1RvZ2dsZXIoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2plY3RUYXNrTG9hZGVyKG5ld1Byb2plY3Qpe1xuXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdC5wcm9qZWN0VGFza3NMaXN0KTtcbiAgICBcbiAgICBpZihuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3QubGVuZ3RoPT09MCl7XG4gICAgICAgIGNvbnNvbGUubG9nKDApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBuZXdQcm9qZWN0VGFzayBvZiBuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3Qpe1xuICAgICAgICBcbiAgICAgICAgbGV0IHByb2plY3RBbGxUYXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25ld1Byb2plY3QucHJvamVjdElkfVBhZ2UgLnByb2plY3RBbGxUYXNrc0RpdmApO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QWxsVGFza3NEaXYpO1xuXG4gICAgICAgIGxldCBuZXdQcm9qZWN0VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0VGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBsZXQgbmV3UHJvamVjdFRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsZXQgbmV3UHJvamVjdFRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGxldCBkZWxOZXdQcm9qZWN0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgICAgLy9hZGRpbmcgY2xhc3Nlc1xuICAgICAgICBuZXdQcm9qZWN0VGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJuZXdQcm9qZWN0VGFza0NoZWNrYm94XCIpO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFRhc2tEaXZcIik7XG4gICAgICAgIG5ld1Byb2plY3RUYXNrRGl2LmNsYXNzTGlzdC5hZGQoYCR7bmV3UHJvamVjdFRhc2suVW5pcXVlSWR9YCk7XG5cblxuICAgICAgICBuZXdQcm9qZWN0VGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Byb2plY3RUYXNrLnByb2plY3RUYXNrSWQpO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0NoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsbmV3UHJvamVjdFRhc2sucHJvamVjdFRhc2tJZCk7XG4gICAgICAgIGRlbE5ld1Byb2plY3RUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsbmV3UHJvamVjdFRhc2sucHJvamVjdFRhc2tJZCk7XG5cbiAgICAgICAgbmV3UHJvamVjdFRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFRhc2tUaXRsZVwiKTtcbiAgICAgICAgbmV3UHJvamVjdFRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJuZXdQcm9qZWN0VGFza0RhdGVcIik7XG5cbiAgICAgICAgLy9zZXR0aW5nIGNoZWNrYm94IHR5cGU7XG4gICAgICAgIG5ld1Byb2plY3RUYXNrQ2hlY2tib3gudHlwZT1cImNoZWNrYm94XCI7XG4gICAgICAgIGRlbE5ld1Byb2plY3RUYXNrQnRuLnR5cGU9XCJidXR0b25cIjtcblxuICAgICAgICAvL2FkZGluZyB0ZXh0O1xuICAgICAgICBuZXdQcm9qZWN0VGFza1RpdGxlLmlubmVySFRNTCA9IG5ld1Byb2plY3RUYXNrLnRpdGxlO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0RhdGUuaW5uZXJIVE1MPW5ld1Byb2plY3RUYXNrLmRhdGU7XG4gICAgICAgIGRlbE5ld1Byb2plY3RUYXNrQnRuLmlubmVySFRNTD1cIkRFTFwiO1xuXG4gICAgICAgIC8vYWRkaW5nIGNvbnRlbnQgdG8gdGFza3NcbiAgICAgICAgbmV3UHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhc2tDaGVja2JveCk7XG4gICAgICAgIG5ld1Byb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrVGl0bGUpO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza0RhdGUpO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZChkZWxOZXdQcm9qZWN0VGFza0J0bik7XG5cbiAgICAgICAgLy9hZGRpbmcgbmV3UHJvamVjdFRhc2tEaXYgdG8gcHJvamVjdEFsbFRhc2tzRGl2XG4gICAgICAgIHByb2plY3RBbGxUYXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza0Rpdik7XG5cbiAgICAgICAgLy9kZWxldGUgd2hlbiBjaGVja2JveCBjbGlja2VkIG9yIGRlbGV0ZSBjbGlja2VkOyAgIFxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3QpO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57cmVtb3ZlUHJvamVjdFRhc2tEaXYobmV3UHJvamVjdFRhc2tEaXYsbmV3UHJvamVjdCl9KTtcbiAgICAgICAgZGVsTmV3UHJvamVjdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntyZW1vdmVQcm9qZWN0VGFza0RpdihuZXdQcm9qZWN0VGFza0RpdixuZXdQcm9qZWN0KX0pXG5cbiAgICB9XG59IiwiaW1wb3J0IHtwcm9qRmxhZ1NldHRlcn0gZnJvbSBcIi4vbmV3UHJvamVjdEZvcm0uanNcIjsgXG5pbXBvcnQgcHJvamVjdFBhZ2VMb2FkZXIgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFBhZ2UuanNcIjtcblxuZXhwb3J0IGxldCBhbGxQcm9qZWN0TGlzdCA9IFtdO1xubGV0IGNvdW50ID0gYWxsUHJvamVjdExpc3QubGVuZ3RoLTE7XG5cbmZ1bmN0aW9uIHByb2plY3RDcmVhdG9yKCl7XG5cbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGl0bGVcIikudmFsdWU7XG4gICAgXG4gICAgaWYocHJvamVjdFRpdGxlPT09XCJcIil7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb3VudCs9MVxuICAgIGxldCBwcm9qZWN0SWQgPSBjb3VudDtcblxuICAgIGxldCBhZGRQcm9qZWN0ID0ge3RpdGxlOnByb2plY3RUaXRsZSxwcm9qZWN0Tm86cHJvamVjdElkLHByb2plY3RJZDpcInByb2plY3RcIitwcm9qZWN0SWQscHJvamVjdFRhc2tzTGlzdDpbXX07XG5cbiAgICBhbGxQcm9qZWN0TGlzdC5wdXNoKGFkZFByb2plY3QpO1xuXG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RMaXN0KXtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZFByb2plY3RcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0QWRkZXIoKXtcblxuICAgIGxldCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsUHJvamVjdHNcIik7XG5cbiAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RDcmVhdG9yKCk7XG5cbiAgICBpZihuZXdQcm9qZWN0PT09dW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGRlbFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdERpdlwiKTtcblxuICAgIG5ld1Byb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIixuZXdQcm9qZWN0LnByb2plY3RJZCk7XG4gICAgZGVsUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Byb2plY3QucHJvamVjdElkKTtcblxuICAgIG5ld1Byb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFRpdGxlXCIpO1xuXG4gICAgLy9zZXR0aW5nIHR5cGVcbiAgICBkZWxQcm9qZWN0QnRuLnR5cGU9XCJidXR0b25cIjtcblxuICAgIC8vYWRkaW5nIHRleHQ7XG4gICAgbmV3UHJvamVjdFRpdGxlLmlubmVySFRNTD1uZXdQcm9qZWN0LnRpdGxlO1xuICAgIGRlbFByb2plY3RCdG4uaW5uZXJIVE1MPVwiWFwiO1xuXG4gICAgLy9hcHBlbmRpbmcgY2hpbGRyZW47XG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsUHJvamVjdEJ0bik7XG5cbiAgICBkZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlbVByb2plY3QpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBvbiBuZXdQcm9qZWN0RGl2IHRvIGZpcmUgY3JlYXRlUHJvamVjdFBhZ2UgYWRkIGhlcmVcbiAgICBuZXdQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57cHJvamVjdFBhZ2VMb2FkZXIobmV3UHJvamVjdCl9KTtcblxuICAgIGFsbFByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuXG4gICAgcmVtUHJvamVjdEZvcm0oKTtcbn1cblxuXG5cbmZ1bmN0aW9uIHJlbVByb2plY3QoKXtcbiAgICBsZXQgcHJvamVjdFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2IyR7dGhpcy5pZH1gKTtcbiAgICBwcm9qZWN0VG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RMaXN0KXtcbiAgICAgICAgaWYocHJvamVjdC5wcm9qZWN0SWQ9PT10aGlzLmlkKXtcbiAgICAgICAgICAgIGFsbFByb2plY3RMaXN0LnNwbGljZShhbGxQcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3QpLDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdExpc3QpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbVByb2plY3RGb3JtKCl7XG4gICAgbGV0IHByb2plY3RGb3JtVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xuICAgIHByb2plY3RGb3JtVG9SZW1vdmUucmVtb3ZlKClcbiAgICBwcm9qRmxhZ1NldHRlcigpO1xuXG59IiwiaW1wb3J0IG5ld1Byb2plY3RBZGRlciBmcm9tIFwiLi9uZXdQcm9qZWN0LmpzXCI7XG5cbmxldCBmbGFnID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3RGb3JtKCl7XG5cbiAgICBpZihmbGFnPT09dHJ1ZSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTsgXG4gICAgXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCBwcm9qZWN0QWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgcHJvamVjdENhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIik7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGl0bGVcIik7XG4gICAgcHJvamVjdEFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEFkZEJ1dHRvblwiKTtcbiAgICBwcm9qZWN0Q2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Q2FuY2VsQnV0dG9uXCIpO1xuXG4gICAgcHJvamVjdFRpdGxlLnR5cGU9XCJ0ZXh0XCI7XG4gICAgcHJvamVjdFRpdGxlLnBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvamVjdCBOYW1lXCI7XG4gICAgcHJvamVjdFRpdGxlLnJlcXVpcmVkPXRydWU7XG5cbiAgICBwcm9qZWN0QWRkQnV0dG9uLnR5cGU9XCJidXR0b25cIjtcbiAgICBwcm9qZWN0Q2FuY2VsQnV0dG9uLnR5cGU9XCJidXR0b25cIjtcblxuICAgIHByb2plY3RBZGRCdXR0b24uaW5uZXJIVE1MPVwiQUREXCI7XG4gICAgcHJvamVjdENhbmNlbEJ1dHRvbi5pbm5lckhUTUw9XCJDQU5DRUxcIjtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdXR0b24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdENhbmNlbEJ1dHRvbik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHByb2plY3RBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbmV3UHJvamVjdEFkZGVyKTtcbiAgICBmbGFnID0gdHJ1ZTtcbiAgICBwcm9qZWN0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNhbmNlbFByb2plY3RGb3JtKTtcblxuXG59XG5cbmZ1bmN0aW9uIGNhbmNlbFByb2plY3RGb3JtKCl7XG4gICAgbGV0IGZvcm1Ub0JlUmVtb3ZlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm1cIik7XG4gICAgZm9ybVRvQmVSZW1vdmVkLnJlbW92ZSgpO1xuICAgIGZsYWc9ZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qRmxhZ1NldHRlcigpe1xuICAgIGZsYWcgPSBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWxsVGFza3NMaXN0fSBmcm9tIFwiLi9uZXdUYXNrLmpzXCI7XG5pbXBvcnQge3Byb2plY3RUYXNrRm9ybUZsYWdUb2dnbGV9IGZyb20gXCIuL25ld1Byb2plY3RUYXNrRm9ybS5qc1wiO1xuXG5mdW5jdGlvbiBwcm9qZWN0VGFza0NyZWF0b3IobmV3UHJvamVjdCl7XG4gICAgXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdCxuZXdQcm9qZWN0LnRpdGxlKTtcblxuICAgIGxldCBwcm9qZWN0VGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGFza1RpdGxlXCIpLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0VGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUYXNrRGF0ZVwiKS52YWx1ZTtcblxuICAgIGlmKHByb2plY3RUYXNrVGl0bGU9PT1cIlwiIHx8IHByb2plY3RUYXNrRGF0ZT09PVwiXCIpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvdW50ID0gbmV3UHJvamVjdC5wcm9qZWN0VGFza3NMaXN0Lmxlbmd0aDtcbiAgICBsZXQgcHJvamVjdFRhc2tJZCA9IGNvdW50O1xuXG4gICAgbGV0IHRhc2tJZCA9IGFsbFRhc2tzTGlzdC5sZW5ndGg7XG5cbiAgICBsZXQgYWRkUHJvamVjdFRhc2sgPSB7dGl0bGU6cHJvamVjdFRhc2tUaXRsZSxkYXRlOnByb2plY3RUYXNrRGF0ZSxwcm9qZWN0VGFza05vOnByb2plY3RUYXNrSWQscHJvamVjdFRhc2tJZDpcInByb2plY3RUYXNrXCIrcHJvamVjdFRhc2tJZCxVbmlxdWVJZDpNYXRoLnJhbmRvbSgpfTtcbiAgICBsZXQgYWRkVGFza1RvQWxsVGFza3NMaXN0ID0ge3RpdGxlOnByb2plY3RUYXNrVGl0bGUsZGF0ZTpwcm9qZWN0VGFza0RhdGUsdGFza05vOnRhc2tJZCx0YXNrSWQ6XCJ0YXNrXCIrdGFza0lkLFVuaXF1ZUlkOmFkZFByb2plY3RUYXNrLlVuaXF1ZUlkfTtcblxuICAgIG5ld1Byb2plY3QucHJvamVjdFRhc2tzTGlzdC5wdXNoKGFkZFByb2plY3RUYXNrKTtcbiAgICBhbGxUYXNrc0xpc3QucHVzaChhZGRUYXNrVG9BbGxUYXNrc0xpc3QpO1xuXG4gICAgY29uc29sZS5sb2coYWxsVGFza3NMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3QpOztcblxuXG4gICAgcmV0dXJuIGFkZFByb2plY3RUYXNrO1xuXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0VGFza0FkZGVyKG5ld1Byb2plY3Qpe1xuICAgIFxuICAgIGxldCBwcm9qZWN0QWxsVGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuZXdQcm9qZWN0LnByb2plY3RJZH1QYWdlIC5wcm9qZWN0QWxsVGFza3NEaXZgKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QWxsVGFza3NEaXYpO1xuXG4gICAgY29uc29sZS5sb2coXCJuZXdQcm9qZWN0VGFza0FkZGVyXCIpO1xuICAgIGxldCBuZXdQcm9qZWN0VGFzayA9IHByb2plY3RUYXNrQ3JlYXRvcihuZXdQcm9qZWN0KTtcbiAgICBcbiAgICBpZihuZXdQcm9qZWN0VGFzaz09PXVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UHJvamVjdFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBuZXdQcm9qZWN0VGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCBuZXdQcm9qZWN0VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IG5ld1Byb2plY3RUYXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBkZWxOZXdQcm9qZWN0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAvL2FkZGluZyBjbGFzc2VzXG4gICAgbmV3UHJvamVjdFRhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFRhc2tDaGVja2JveFwiKTtcbiAgICBuZXdQcm9qZWN0VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFRhc2tEaXZcIik7XG4gICAgbmV3UHJvamVjdFRhc2tEaXYuY2xhc3NMaXN0LmFkZChgJHtuZXdQcm9qZWN0VGFzay5VbmlxdWVJZH1gKTtcblxuXG4gICAgbmV3UHJvamVjdFRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIixuZXdQcm9qZWN0VGFzay5wcm9qZWN0VGFza0lkKTtcbiAgICBuZXdQcm9qZWN0VGFza0NoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsbmV3UHJvamVjdFRhc2sucHJvamVjdFRhc2tJZCk7XG4gICAgZGVsTmV3UHJvamVjdFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIixuZXdQcm9qZWN0VGFzay5wcm9qZWN0VGFza0lkKTtcblxuICAgIG5ld1Byb2plY3RUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5ld1Byb2plY3RUYXNrVGl0bGVcIik7XG4gICAgbmV3UHJvamVjdFRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJuZXdQcm9qZWN0VGFza0RhdGVcIik7XG5cbiAgICAvL3NldHRpbmcgY2hlY2tib3ggdHlwZTtcbiAgICBuZXdQcm9qZWN0VGFza0NoZWNrYm94LnR5cGU9XCJjaGVja2JveFwiO1xuICAgIGRlbE5ld1Byb2plY3RUYXNrQnRuLnR5cGU9XCJidXR0b25cIjtcblxuICAgIC8vYWRkaW5nIHRleHQ7XG4gICAgbmV3UHJvamVjdFRhc2tUaXRsZS5pbm5lckhUTUwgPSBuZXdQcm9qZWN0VGFzay50aXRsZTtcbiAgICBuZXdQcm9qZWN0VGFza0RhdGUuaW5uZXJIVE1MPW5ld1Byb2plY3RUYXNrLmRhdGU7XG4gICAgZGVsTmV3UHJvamVjdFRhc2tCdG4uaW5uZXJIVE1MPVwiWFwiO1xuXG4gICAgLy9hZGRpbmcgY29udGVudCB0byB0YXNrc1xuICAgIG5ld1Byb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrQ2hlY2tib3gpO1xuICAgIG5ld1Byb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrVGl0bGUpO1xuICAgIG5ld1Byb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrRGF0ZSk7XG4gICAgbmV3UHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsTmV3UHJvamVjdFRhc2tCdG4pO1xuXG4gICAgLy9hZGRpbmcgbmV3UHJvamVjdFRhc2tEaXYgdG8gcHJvamVjdEFsbFRhc2tzRGl2XG4gICAgcHJvamVjdEFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrRGl2KTtcblxuICAgIC8vZGVsZXRlIHdoZW4gY2hlY2tib3ggY2xpY2tlZCBvciBkZWxldGUgY2xpY2tlZDsgICBcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3QpO1xuICAgIG5ld1Byb2plY3RUYXNrQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntyZW1vdmVQcm9qZWN0VGFza0RpdihuZXdQcm9qZWN0VGFza0RpdixuZXdQcm9qZWN0KX0pO1xuICAgIGRlbE5ld1Byb2plY3RUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57cmVtb3ZlUHJvamVjdFRhc2tEaXYobmV3UHJvamVjdFRhc2tEaXYsbmV3UHJvamVjdCl9KVxuXG4gICAgLy9yZW1vdmUgZm9ybVxuICAgIHJlbVByb2plY3RUYXNrRm9ybSgpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbVByb2plY3RUYXNrRm9ybSgpe1xuXG4gICAgbGV0IHByb2plY3RUYXNrRm9ybVRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGFza0Zvcm1cIik7XG4gICAgcHJvamVjdFRhc2tGb3JtVG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgcHJvamVjdFRhc2tGb3JtRmxhZ1RvZ2dsZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdFRhc2tEaXYobmV3UHJvamVjdFRhc2tEaXYsbmV3UHJvamVjdCl7XG5cbiAgICBuZXdQcm9qZWN0VGFza0Rpdi5yZW1vdmUoKTtcbiAgICAvL3JlbW92ZSBmcm9tIGxpc3QgdG9vb29vb29vb29vIGFsbHRhc2sgYW5kIHByb2plY3RhbGx0YXNrc1xuICAgIGZvcihsZXQgcHJvamVjdFRhc2sgb2YgbmV3UHJvamVjdC5wcm9qZWN0VGFza3NMaXN0KXtcbiAgICAgICAgaWYocHJvamVjdFRhc2sucHJvamVjdFRhc2tJZCA9PT0gbmV3UHJvamVjdFRhc2tEaXYuaWQpe1xuICAgICAgICAgICAgbmV3UHJvamVjdC5wcm9qZWN0VGFza3NMaXN0LnNwbGljZShuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3QuaW5kZXhPZihwcm9qZWN0VGFzayksMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IobGV0IHByb2plY3RUYXNrIG9mIGFsbFRhc2tzTGlzdCl7XG5cbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHByb2plY3RUYXNrLlVuaXF1ZUlkKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mICtuZXdQcm9qZWN0VGFza0Rpdi5jbGFzc0xpc3RbMV0pO1xuXG4gICAgICAgIGlmKCBwcm9qZWN0VGFzay5VbmlxdWVJZCA9PT0gK25ld1Byb2plY3RUYXNrRGl2LmNsYXNzTGlzdFsxXSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGFzay5VbmlxdWVJZCxuZXdQcm9qZWN0VGFza0Rpdi5jbGFzc0xpc3RbMV0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codHJ1ZSk7XG4gICAgICAgICAgICBhbGxUYXNrc0xpc3Quc3BsaWNlKGFsbFRhc2tzTGlzdC5pbmRleE9mKHByb2plY3RUYXNrKSwxKTtcbiAgICAgICAgfVxuXG5cbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3QpO1xuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzTGlzdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IG5ld1Byb2plY3RUYXNrQWRkZXIgZnJvbSBcIi4vbmV3UHJvamVjdFRhc2suanNcIlxuXG5sZXQgZmxhZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0VGFza0Zvcm0ocHJvamVjdFBhZ2UsbmV3UHJvamVjdCl7XG5cbiAgICBpZihmbGFnID09PSB0cnVlKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhmbGFnLHByb2plY3RQYWdlKTtcblxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgbGV0IHByb2plY3RUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IHByb2plY3RUYXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgcHJvamVjdFRhc2tBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBwcm9qZWN0VGFza0NhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGFza0Zvcm1cIik7XG4gICAgcHJvamVjdFRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRhc2tUaXRsZVwiKTtcbiAgICBwcm9qZWN0VGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RUYXNrRGF0ZVwiKTtcbiAgICBwcm9qZWN0VGFza0FkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRhc2tBZGRCdXR0b25cIik7XG4gICAgcHJvamVjdFRhc2tDYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RUYXNrQ2FuY2VsQnV0dG9uXCIpO1xuICAgIFxuICAgIHByb2plY3RUYXNrVGl0bGUudHlwZT1cInRleHRcIjtcbiAgICBwcm9qZWN0VGFza1RpdGxlLnBsYWNlaG9sZGVyPVwiRW50ZXIgVGFza1wiO1xuICAgIHByb2plY3RUYXNrVGl0bGUucmVxdWlyZWQ9dHJ1ZTtcblxuICAgIHByb2plY3RUYXNrRGF0ZS50eXBlPVwiZGF0ZVwiO1xuICAgIHByb2plY3RUYXNrRGF0ZS5yZXF1aXJlZD10cnVlO1xuXG4gICAgcHJvamVjdFRhc2tBZGRCdXR0b24udHlwZT1cImJ1dHRvblwiO1xuICAgIHByb2plY3RUYXNrQ2FuY2VsQnV0dG9uLnR5cGU9XCJidXR0b25cIjtcblxuICAgIHByb2plY3RUYXNrQWRkQnV0dG9uLmlubmVySFRNTD1cIkFERFwiO1xuICAgIHByb2plY3RUYXNrQ2FuY2VsQnV0dG9uLmlubmVySFRNTD1cIkNBTkNFTFwiO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGFza1RpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RUYXNrRGF0ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0FkZEJ1dHRvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0NhbmNlbEJ1dHRvbik7XG5cbiAgICBwcm9qZWN0UGFnZS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vcHJvamVjdFRhc2tBZGRCdXR0b24gZXZlbnQgbGlzdGVuZXJcbiAgICBwcm9qZWN0VGFza0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e25ld1Byb2plY3RUYXNrQWRkZXIobmV3UHJvamVjdCl9KTtcbiAgICBcbiAgICBmbGFnPXRydWU7XG4gICAgcHJvamVjdFRhc2tDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntjYW5jZWxQcm9qZWN0VGFza0Zvcm0oZm9ybSl9KTtcbiAgICBcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFRhc2tGb3JtRmxhZ1RvZ2dsZSgpe1xuICAgIGZsYWcgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdFRhc2tGb3JtKGZvcm0pe1xuICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgZmxhZz1mYWxzZTtcbn1cbiIsImltcG9ydCB7ZmxhZ1NldHRlcn0gZnJvbSBcIi4vbmV3VGFza0Zvcm0uanNcIjtcbmltcG9ydCB7IGFsbFByb2plY3RMaXN0IH0gZnJvbSBcIi4vbmV3UHJvamVjdC5qc1wiO1xuXG5leHBvcnQgbGV0IGFsbFRhc2tzTGlzdCA9IFt7dGl0bGU6ICdQaWNrdXAgR3JvY2VyaWVzJywgZGF0ZTogJzIwMjItMTItMTUnLCB0YXNrTm86IDAsIHRhc2tJZDogJ3Rhc2swJyxVbmlxdWVJZDotMX0se3RpdGxlOiAnUGF5IFBob25lYmlsbCcsIGRhdGU6ICcyMDIyLTEyLTE1JywgdGFza05vOiAxLCB0YXNrSWQ6ICd0YXNrMScsVW5pcXVlSWQ6LTF9XTtcblxubGV0IGNvdW50PWFsbFRhc2tzTGlzdC5sZW5ndGgtMTtcblxuZnVuY3Rpb24gVGFza0NyZWF0b3IoKXtcbiAgICBcbiAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrVGl0bGVcIikudmFsdWU7XG4gICAgbGV0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRGF0ZUlucHV0XCIpLnZhbHVlXG5cbiAgICBpZih0YXNrVGl0bGU9PT1cIlwiIHx8IHRhc2tEYXRlPT09XCJcIil7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb3VudCs9MTtcbiAgICBsZXQgdGFza0lkPWNvdW50O1xuICAgIFxuICAgIGxldCBhZGRUYXNrID0ge3RpdGxlOnRhc2tUaXRsZSxkYXRlOnRhc2tEYXRlLHRhc2tObzp0YXNrSWQsdGFza0lkOlwidGFza1wiK3Rhc2tJZCxVbmlxdWVJZDotMX07XG4gICAgXG4gICAgYWxsVGFza3NMaXN0LnB1c2goYWRkVGFzayk7XG4gICAgXG4gICAgZm9yKGxldCB0YXNrIG9mIGFsbFRhc2tzTGlzdCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRUYXNrO1xuICAgIFxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3VGFza0FkZGVyKCl7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBsZXQgYWxsVGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbFRhc2tzRGl2XCIpO1xuXG4gICAgLy9zdG9yaW5nIG5ld1Rhc2tcbiAgICBsZXQgbmV3VGFzayA9IFRhc2tDcmVhdG9yKCk7XG5cbiAgICBpZihuZXdUYXNrPT09dW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgbGV0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBuZXdUYXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcbiAgICBsZXQgZGVsVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAvLyBhZGRpbmcgY2xhc3NlcyB0byB0aGUgY29tcG9uZW50c1xuICAgIG5ld1Rhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwibmV3VGFza0NoZWNrYm94XCIpO1xuICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tEaXZcIik7XG4gICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKGAke25ld1Rhc2suVW5pcXVlSWR9YCk7XG5cbiAgICBuZXdUYXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsbmV3VGFzay50YXNrSWQpO1xuICAgIG5ld1Rhc2tDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Rhc2sudGFza0lkKTtcbiAgICBkZWxUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsbmV3VGFzay50YXNrSWQpO1xuXG4gICAgXG4gICAgbmV3VGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrVGl0bGVcIik7XG4gICAgbmV3VGFza0RhdGUuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tEYXRlXCIpO1xuXG4gICAgLy9zZXRpbmcgY2hla2Nib3ggdHBlXG4gICAgbmV3VGFza0NoZWNrYm94LnR5cGU9XCJjaGVja2JveFwiO1xuICAgIGRlbFRhc2tCdG4udHlwZT1cImJ1dHRvblwiO1xuXG4gICAgLy9maWxsaW5nIGluIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFza1xuICAgIG5ld1Rhc2tUaXRsZS5pbm5lckhUTUwgPSBuZXdUYXNrLnRpdGxlO1xuICAgIG5ld1Rhc2tEYXRlLmlubmVySFRNTCA9IG5ld1Rhc2suZGF0ZTtcbiAgICBkZWxUYXNrQnRuLmlubmVySFRNTD1cIlhcIjtcblxuICAgIC8vYWRkaW5nIGNvbnRlbnQgdG8gdGFza1xuICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0NoZWNrYm94KTtcbiAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGF0ZSk7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChkZWxUYXNrQnRuKTtcbiAgICBcbiAgICAvL2RlbGV0ZSB3aGVuIGNoZWNrYm94IGNsaWNrZWRcbiAgICBuZXdUYXNrQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIscmVtb3ZlRGl2KTtcbiAgICBkZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlbW92ZURpdik7XG5cbiAgICAvL2FkZGluZyB0byBhbGwgdGFza3MgcGFnZVxuICAgIGFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xuXG4gICAgLy9cbiAgICByZW1Gb3JtKCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURpdihuZXdUYXNrRGl2KXtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGxldCB0b1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdiMke3RoaXMuaWR9YCk7XG4gICAgY29uc29sZS5sb2codG9SZW1vdmUuY2xhc3NMaXN0WzFdKTtcbiAgICB0b1JlbW92ZS5yZW1vdmUoKTtcblxuICAgIGZvcihsZXQgdGFzayBvZiBhbGxUYXNrc0xpc3Qpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImltIGluXCIpXG4gICAgICAgIGlmKHRhc2sudGFza0lkPT09dGhpcy5pZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0cnVlKTtcbiAgICAgICAgICAgIGFsbFRhc2tzTGlzdC5zcGxpY2UoYWxsVGFza3NMaXN0LmluZGV4T2YodGFzayksMSk7XG4gICAgICAgIH1cbiAgICB9ICAgXG5cbiAgICBpZihhbGxQcm9qZWN0TGlzdC5sZW5ndGg9PT0wKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0TGlzdCl7XG5cbiAgICAgICAgaWYocHJvamVjdC5wcm9qZWN0VGFza3NMaXN0Lmxlbmd0aCE9PTApe1xuXG4gICAgICAgICAgICBmb3IobGV0IHByb2plY3RUYXNrIG9mIHByb2plY3QucHJvamVjdFRhc2tzTGlzdCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZigrdG9SZW1vdmUuY2xhc3NMaXN0WzFdPT09cHJvamVjdFRhc2suVW5pcXVlSWQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFib3V0IHRvIGdldCBjYW5jZWxsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdFRhc2tzTGlzdC5zcGxpY2UocHJvamVjdC5wcm9qZWN0VGFza3NMaXN0LmluZGV4T2YocHJvamVjdFRhc2spLDEpOyAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdExpc3QpO1xuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzTGlzdCk7XG5cbn1cblxuZnVuY3Rpb24gcmVtRm9ybSgpe1xuICAgIGxldCBmb3JtVG9CZVJlbW92ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtXCIpO1xuICAgIGZvcm1Ub0JlUmVtb3ZlZC5yZW1vdmUoKTtcbiAgICBmbGFnU2V0dGVyKClcbn0iLCJpbXBvcnQgbmV3VGFza0FkZGVyIGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCBUYXNrQ3JlYXRvciBmcm9tIFwiLi9uZXdUYXNrXCI7XG5cbmxldCBmbGFnID0gZmFsc2U7XG4vL3B1dCBpbnB1dCB0YWdzIGFuZCBidXR0b24gaW4gRk9STSB0YWcgdG8gbWFrZSByZXF1aXJlZCB3b3JrIGxhdGVyXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Rhc2tGb3JtKCl7XG5cbiAgICBpZihmbGFnPT09dHJ1ZSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYWxsVGFza3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGxUYXNrc1BhZ2VcIik7XG5cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IHRhc2tBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCB0YXNrQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2tGb3JtXCIpO1xuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICAgIHRhc2tEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2tEYXRlSW5wdXRcIik7XG4gICAgdGFza0FkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFza0FkZEJ1dHRvblwiKTtcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ2FuY2VsQnV0dG9uXCIpO1xuICAgIFxuICAgIHRhc2tUaXRsZS50eXBlPVwidGV4dFwiO1xuICAgIHRhc2tUaXRsZS5wbGFjZWhvbGRlcj1cIkVudGVyIHRhc2tcIjtcbiAgICB0YXNrVGl0bGUucmVxdWlyZWQ9dHJ1ZTtcblxuICAgIHRhc2tEYXRlSW5wdXQudHlwZT1cImRhdGVcIjtcbiAgICB0YXNrRGF0ZUlucHV0LnJlcXVpcmVkPXRydWU7XG5cbiAgICB0YXNrQWRkQnV0dG9uLnR5cGU9XCJidXR0b25cIjtcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLnR5cGU9XCJidXR0b25cIjtcblxuICAgIHRhc2tBZGRCdXR0b24uaW5uZXJIVE1MPVwiQUREXCI7XG4gICAgdGFza0NhbmNlbEJ1dHRvbi5pbm5lckhUTUw9XCJDQU5DRUxcIlxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrQWRkQnV0dG9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tDYW5jZWxCdXR0b24pO1xuICAgIGFsbFRhc2tzUGFnZS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXIgZm9yIGFkZFRhc2tcbiAgICB0YXNrQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG5ld1Rhc2tBZGRlcik7XG4gICAgZmxhZz10cnVlO1xuICAgIHRhc2tDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY2FuY2VsRm9ybSk7XG5cbn1cblxuZnVuY3Rpb24gY2FuY2VsRm9ybSgpe1xuICAgIGxldCBmb3JtVG9CZVJlbW92ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtXCIpO1xuICAgIGZvcm1Ub0JlUmVtb3ZlZC5yZW1vdmUoKTtcbiAgICBmbGFnPWZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhZ1NldHRlcigpe1xuICAgIGZsYWcgPSBmYWxzZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgYWxsVGFza0xvYWRlciBmcm9tIFwiLi9hbGxUYXNrcy5qc1wiO1xuaW1wb3J0IG5ld1Byb2plY3RGb3JtIGZyb20gXCIuL25ld1Byb2plY3RGb3JtLmpzXCI7XG5cbmFsbFRhc2tMb2FkZXIoKTtcblxubGV0IGFsbFRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGxUYXNrc1wiKTtcbmFsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFsbFRhc2tMb2FkZXIpO1xuXG5sZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbmV3UHJvamVjdEZvcm0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==