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
___CSS_LOADER_EXPORT___.push([module.id, "#container{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n#heading{\n    text-align: center;\n    grid-column:1/3;\n}\n\n#sidebar{\n    display: grid;\n    grid-template-rows: repeat(2,1fr);\n    justify-items: start;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,oBAAoB;AACxB","sourcesContent":["#container{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n#heading{\n    text-align: center;\n    grid-column:1/3;\n}\n\n#sidebar{\n    display: grid;\n    grid-template-rows: repeat(2,1fr);\n    justify-items: start;\n}"],"sourceRoot":""}]);
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
        delTaskBtn.innerHTML="DEL";

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




let content = document.querySelector("#content");
let oldProjectPage;

let flag = false;

function projectPageLoader(newProject){

    let allTasksPage = document.querySelector("#allTasksPage");
    allTasksPageRemover(allTasksPage);

    (0,_newProjectTaskForm_js__WEBPACK_IMPORTED_MODULE_1__.projectTaskFormFlagToggle)();

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
    addProjectTaskBtn.addEventListener("click",()=>{(0,_newProjectTaskForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectPage)});

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
    
    if(newProject.projectTasksList.length===0){
        console.log("zero project tasks");
        return;
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
    delProjectBtn.innerHTML="DEL";

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
let flag = false;

function newProjectTaskForm(projectPage){

    if(flag === true){
        return;
    }

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

    flag=true;

}

function projectTaskFormFlagToggle(){
    flag = false;
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


let allTasksList = [{title: '0', date: '2022-12-15', taskNo: 0, taskId: 'task0'},{title: '1', date: '2022-12-15', taskNo: 1, taskId: 'task1'}];

let count=allTasksList.length-1;

function TaskCreator(){
    
    let taskTitle = document.querySelector(".taskTitle").value;
    let taskDate = document.querySelector(".taskDateInput").value

    if(taskTitle==="" || taskDate===""){
        return;
    }

    count+=1;
    let taskId=count;
    
    let addTask = {title:taskTitle,date:taskDate,taskNo:taskId,taskId:"task"+taskId};
    
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
    delTaskBtn.innerHTML="DEL";

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

function removeDiv(){

    let toRemove = document.querySelector(`div#${this.id}`);
    toRemove.remove();

    for(let task of allTasksList){
        if(task.taskId===this.id){
            allTasksList.splice(allTasksList.indexOf(task),1);
        }
    }

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




let allTasksBtn = document.querySelector("#allTasks");
allTasksBtn.addEventListener("click",_allTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

let addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener("click",_newProjectForm_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxxREFBcUQsb0JBQW9CLHFDQUFxQyxHQUFHLGFBQWEseUJBQXlCLHNCQUFzQixHQUFHLGFBQWEsb0JBQW9CLHdDQUF3QywyQkFBMkIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEscUNBQXFDLG9CQUFvQixxQ0FBcUMsR0FBRyxhQUFhLHlCQUF5QixzQkFBc0IsR0FBRyxhQUFhLG9CQUFvQix3Q0FBd0MsMkJBQTJCLEdBQUcsbUJBQW1CO0FBQ2h2QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZndDO0FBQzJCOztBQUVuRTtBQUNBO0FBQ0E7O0FBRWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsb0RBQVc7O0FBRXRELGVBQWUscURBQVk7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxrREFBUztBQUMxRCw0Q0FBNEMsa0RBQVM7O0FBRXJEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0cwQztBQUNlO0FBQ1E7O0FBRWpFO0FBQ0E7O0FBRUE7O0FBRWU7O0FBRWY7QUFDQTs7QUFFQSxJQUFJLGlGQUF5Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGVBQWU7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBLDZEQUE2RCxlQUFlOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9EQUFvRCxrRUFBa0IsY0FBYzs7QUFFcEY7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFXO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZtRDtBQUNJOztBQUVoRDtBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFZTs7QUFFZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0RBQWdELGlFQUFpQixhQUFhOztBQUU5RTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQSx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBYzs7QUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRjhDOztBQUU5Qzs7QUFFZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxzREFBZTtBQUM3RDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTs7QUFFZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hENEM7O0FBRXJDLHFCQUFxQiwyREFBMkQsRUFBRSwyREFBMkQ7O0FBRXBKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVlOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUCxpREFBaUQsUUFBUTtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQVU7QUFDZDs7Ozs7Ozs7Ozs7Ozs7OztBQzVHcUM7QUFDRDs7QUFFcEM7QUFDQTs7QUFFZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxnREFBWTtBQUN2RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7O1VDNURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjtBQUNPOztBQUVqRDtBQUNBLHFDQUFxQyxvREFBYTs7QUFFbEQ7QUFDQSx1Q0FBdUMsMERBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3RQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld1Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdFRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbiNoZWFkaW5ne1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOjEvMztcXG59XFxuXFxuI3NpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbiNoZWFkaW5ne1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOjEvMztcXG59XFxuXFxuI3NpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBuZXdUYXNrRm9ybSBmcm9tIFwiLi9uZXdUYXNrRm9ybVwiO1xuaW1wb3J0IG5ld1Rhc2tBZGRlciwge2FsbFRhc2tzTGlzdCwgcmVtb3ZlRGl2fSBmcm9tIFwiLi9uZXdUYXNrLmpzXCI7XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xubGV0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRpbmdcIik7XG5sZXQgZmxhZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGxUYXNrTG9hZGVyKCl7XG5cbiAgICBpZihmbGFnPT09dHJ1ZSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHJvamVjdFBhZ2VUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFBhZ2VcIik7XG4gICAgaWYocHJvamVjdFBhZ2VUb1JlbW92ZSE9PW51bGwpe1xuICAgICAgICBwcm9qZWN0UGFnZVRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vY3JlYXRpbmcgZGl2c1xuICAgIGxldCBhbGxUYXNrc1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBhbGxUYXNrc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbGV0IGFsbFRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vYWRkaW5nIGNsYXNzXG4gICAgYWxsVGFza3NQYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhbGxUYXNrc1BhZ2VcIik7XG4gICAgYWxsVGFza3NIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJhbGxUYXNrc0hlYWRpbmdcIik7XG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0J1dHRvblwiKTtcbiAgICBhbGxUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWxsVGFza3NEaXZcIik7XG5cbiAgICAvL2FkZGluZyB0ZXh0IGNvbnRlbnRcbiAgICBhbGxUYXNrc0hlYWRpbmcuaW5uZXJIVE1MID0gXCJBTEwgVEFTS1NcIjtcbiAgICBhZGRUYXNrQnV0dG9uLmlubmVySFRNTCA9IFwiKyBBREQgVEFTS1wiO1xuXG4gICAgYWxsVGFza3NQYWdlLmFwcGVuZENoaWxkKGFsbFRhc2tzSGVhZGluZyk7XG4gICAgYWxsVGFza3NQYWdlLmFwcGVuZENoaWxkKGFsbFRhc2tzRGl2KTsgICAgXG4gICAgYWxsVGFza3NQYWdlLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhbGxUYXNrc1BhZ2UpO1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZGVyIGZvciBhZGRUYXNrQnV0dG9uXG4gICAgY29uc29sZS5sb2coYWRkVGFza0J1dHRvbik7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixuZXdUYXNrRm9ybSk7XG5cbiAgICB0YXNrTG9hZGVyKGFsbFRhc2tzTGlzdCk7XG5cbiAgICBmbGFnPXRydWU7XG59XG5cbmZ1bmN0aW9uIHRhc2tMb2FkZXIoYWxsVGFza3NMaXN0KXtcblxuICAgIGlmKGFsbFRhc2tzTGlzdC5sZW5ndGg9PT0wKXtcbiAgICAgICAgY29uc29sZS5sb2coMCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhhbGxUYXNrc0xpc3QpO1xuXG4gICAgZm9yKGxldCBuZXdUYXNrIG9mIGFsbFRhc2tzTGlzdCl7XG5cbiAgICAgICAgbGV0IGFsbFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxUYXNrc0RpdlwiKTtcblxuICAgICAgICBsZXQgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBuZXdUYXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGxldCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbGV0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuICAgICAgICBsZXQgZGVsVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgICAgLy8gYWRkaW5nIGNsYXNzZXMgdG8gdGhlIGNvbXBvbmVudHNcbiAgICAgICAgbmV3VGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrQ2hlY2tib3hcIik7XG4gICAgICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tEaXZcIik7XG5cbiAgICAgICAgbmV3VGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Rhc2sudGFza0lkKTtcbiAgICAgICAgbmV3VGFza0NoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsbmV3VGFzay50YXNrSWQpO1xuICAgICAgICBkZWxUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsbmV3VGFzay50YXNrSWQpO1xuICAgICAgICBcbiAgICAgICAgbmV3VGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrVGl0bGVcIik7XG4gICAgICAgIG5ld1Rhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrRGF0ZVwiKTtcblxuICAgICAgICAvL3NldGluZyBjaGVrY2JveCB0cGVcbiAgICAgICAgbmV3VGFza0NoZWNrYm94LnR5cGU9XCJjaGVja2JveFwiO1xuICAgICAgICBkZWxUYXNrQnRuLnR5cGU9XCJidXR0b25cIjtcblxuICAgICAgICAvL2ZpbGxpbmcgaW4gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YXNrXG4gICAgICAgIG5ld1Rhc2tUaXRsZS5pbm5lckhUTUwgPSBuZXdUYXNrLnRpdGxlO1xuICAgICAgICBuZXdUYXNrRGF0ZS5pbm5lckhUTUwgPSBuZXdUYXNrLmRhdGU7XG4gICAgICAgIGRlbFRhc2tCdG4uaW5uZXJIVE1MPVwiREVMXCI7XG5cbiAgICAgICAgLy9hZGRpbmcgY29udGVudCB0byB0YXNrXG4gICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0NoZWNrYm94KTtcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrVGl0bGUpO1xuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlKTtcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChkZWxUYXNrQnRuKTtcbiAgICAgICAgXG4gICAgICAgIC8vZGVsZXRlIHdoZW4gY2hlY2tib3ggY2xpY2tlZFxuICAgICAgICBuZXdUYXNrQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIscmVtb3ZlRGl2KTtcbiAgICAgICAgZGVsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixyZW1vdmVEaXYpO1xuXG4gICAgICAgIC8vYWRkaW5nIHRvIGFsbCB0YXNrcyBwYWdlXG4gICAgICAgIGFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGFnVG9nZ2xlcigpe1xuICAgIGZsYWcgPSBmYWxzZTtcbn0iLCJpbXBvcnQge2ZsYWdUb2dnbGVyfSBmcm9tIFwiLi9hbGxUYXNrcy5qc1wiO1xuaW1wb3J0IG5ld1Byb2plY3RUYXNrRm9ybSBmcm9tIFwiLi9uZXdQcm9qZWN0VGFza0Zvcm0uanNcIjtcbmltcG9ydCB7cHJvamVjdFRhc2tGb3JtRmxhZ1RvZ2dsZX0gZnJvbSBcIi4vbmV3UHJvamVjdFRhc2tGb3JtLmpzXCJcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5sZXQgb2xkUHJvamVjdFBhZ2U7XG5cbmxldCBmbGFnID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RQYWdlTG9hZGVyKG5ld1Byb2plY3Qpe1xuXG4gICAgbGV0IGFsbFRhc2tzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsVGFza3NQYWdlXCIpO1xuICAgIGFsbFRhc2tzUGFnZVJlbW92ZXIoYWxsVGFza3NQYWdlKTtcblxuICAgIHByb2plY3RUYXNrRm9ybUZsYWdUb2dnbGUoKTtcblxuICAgIGlmKGZsYWcgPT09IHRydWUpe1xuICAgICAgICBpZihvbGRQcm9qZWN0UGFnZT09PW5ld1Byb2plY3QucHJvamVjdElkK1wiUGFnZVwiKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHBhZ2VUb0JlRGVsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke29sZFByb2plY3RQYWdlfWApO1xuICAgICAgICAgICAgaWYocGFnZVRvQmVEZWxldGVkIT09bnVsbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRQcm9qZWN0UGFnZSxuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIilcbiAgICAgICAgXG4gICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRQcm9qZWN0UGFnZSxuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIilcblxuICAgICAgICAgICAgbGV0IHBhZ2VUb0JlRGVsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke29sZFByb2plY3RQYWdlfWApO1xuXG4gICAgICAgICAgICBpZihwYWdlVG9CZURlbGV0ZWQhPT1udWxsKXtcbiAgICAgICAgICAgICAgICBwYWdlVG9CZURlbGV0ZWQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgbGV0IHByb2plY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgcHJvamVjdFBhZ2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBhZGRQcm9qZWN0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IHByb2plY3RBbGxUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwcm9qZWN0UGFnZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFBhZ2VcIik7XG4gICAgcHJvamVjdFBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIik7XG4gICAgcHJvamVjdFBhZ2VIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0UGFnZUhlYWRpbmdcIik7XG4gICAgYWRkUHJvamVjdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RUYXNrQnRuXCIpO1xuICAgIHByb2plY3RBbGxUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEFsbFRhc2tzRGl2XCIpO1xuXG4gICAgb2xkUHJvamVjdFBhZ2UgPSBuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIjtcblxuICAgIHByb2plY3RQYWdlSGVhZGluZy5pbm5lckhUTUwgPSBuZXdQcm9qZWN0LnRpdGxlO1xuICAgIGFkZFByb2plY3RUYXNrQnRuLmlubmVySFRNTCA9IFwiKyBBREQgVEFTS1wiO1xuXG4gICAgcHJvamVjdFBhZ2UuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2VIZWFkaW5nKTtcbiAgICBwcm9qZWN0UGFnZS5hcHBlbmRDaGlsZChwcm9qZWN0QWxsVGFza3NEaXYpO1xuICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKGFkZFByb2plY3RUYXNrQnRuKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBmb3IgYWRkVGFza0J1dHRvbiBmb3IgdGhlIHBhZ2VcbiAgICBhZGRQcm9qZWN0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e25ld1Byb2plY3RUYXNrRm9ybShwcm9qZWN0UGFnZSl9KTtcblxuICAgIC8vbG9hZCBwcm9qZWN0IGtlIHRhc2tzXG4gICAgcHJvamVjdFRhc2tMb2FkZXIobmV3UHJvamVjdCk7XG5cbiAgICBmbGFnID0gdHJ1ZTtcblxuXG59XG5cbmZ1bmN0aW9uIGFsbFRhc2tzUGFnZVJlbW92ZXIoYWxsVGFza3NQYWdlKXtcbiAgICBcbiAgICBpZihhbGxUYXNrc1BhZ2U9PT1udWxsKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBhbGxUYXNrc1BhZ2UucmVtb3ZlKCk7XG4gICAgICAgIGZsYWdUb2dnbGVyKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0VGFza0xvYWRlcihuZXdQcm9qZWN0KXtcbiAgICBcbiAgICBpZihuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3QubGVuZ3RoPT09MCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiemVybyBwcm9qZWN0IHRhc2tzXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSIsImltcG9ydCB7cHJvakZsYWdTZXR0ZXJ9IGZyb20gXCIuL25ld1Byb2plY3RGb3JtLmpzXCI7IFxuaW1wb3J0IHByb2plY3RQYWdlTG9hZGVyIGZyb20gXCIuL2NyZWF0ZVByb2plY3RQYWdlLmpzXCI7XG5cbmV4cG9ydCBsZXQgYWxsUHJvamVjdExpc3QgPSBbXTtcbmxldCBjb3VudCA9IGFsbFByb2plY3RMaXN0Lmxlbmd0aC0xO1xuXG5mdW5jdGlvbiBwcm9qZWN0Q3JlYXRvcigpe1xuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRpdGxlXCIpLnZhbHVlO1xuICAgIFxuICAgIGlmKHByb2plY3RUaXRsZT09PVwiXCIpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY291bnQrPTFcbiAgICBsZXQgcHJvamVjdElkID0gY291bnQ7XG5cbiAgICBsZXQgYWRkUHJvamVjdCA9IHt0aXRsZTpwcm9qZWN0VGl0bGUscHJvamVjdE5vOnByb2plY3RJZCxwcm9qZWN0SWQ6XCJwcm9qZWN0XCIrcHJvamVjdElkLHByb2plY3RUYXNrc0xpc3Q6W119O1xuXG4gICAgYWxsUHJvamVjdExpc3QucHVzaChhZGRQcm9qZWN0KTtcblxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0TGlzdCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRQcm9qZWN0XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdEFkZGVyKCl7XG5cbiAgICBsZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFByb2plY3RzXCIpO1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0Q3JlYXRvcigpO1xuXG4gICAgaWYobmV3UHJvamVjdD09PXVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBkZWxQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZChcIm5ld1Byb2plY3REaXZcIik7XG5cbiAgICBuZXdQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsbmV3UHJvamVjdC5wcm9qZWN0SWQpO1xuICAgIGRlbFByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwiaWRcIixuZXdQcm9qZWN0LnByb2plY3RJZCk7XG5cbiAgICBuZXdQcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcIm5ld1Byb2plY3RUaXRsZVwiKTtcblxuICAgIC8vc2V0dGluZyB0eXBlXG4gICAgZGVsUHJvamVjdEJ0bi50eXBlPVwiYnV0dG9uXCI7XG5cbiAgICAvL2FkZGluZyB0ZXh0O1xuICAgIG5ld1Byb2plY3RUaXRsZS5pbm5lckhUTUw9bmV3UHJvamVjdC50aXRsZTtcbiAgICBkZWxQcm9qZWN0QnRuLmlubmVySFRNTD1cIkRFTFwiO1xuXG4gICAgLy9hcHBlbmRpbmcgY2hpbGRyZW47XG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsUHJvamVjdEJ0bik7XG5cbiAgICBkZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlbVByb2plY3QpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBvbiBuZXdQcm9qZWN0RGl2IHRvIGZpcmUgY3JlYXRlUHJvamVjdFBhZ2UgYWRkIGhlcmVcbiAgICBuZXdQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57cHJvamVjdFBhZ2VMb2FkZXIobmV3UHJvamVjdCl9KTtcblxuICAgIGFsbFByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuXG4gICAgcmVtUHJvamVjdEZvcm0oKTtcbn1cblxuXG5cbmZ1bmN0aW9uIHJlbVByb2plY3QoKXtcbiAgICBsZXQgcHJvamVjdFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2IyR7dGhpcy5pZH1gKTtcbiAgICBwcm9qZWN0VG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RMaXN0KXtcbiAgICAgICAgaWYocHJvamVjdC5wcm9qZWN0SWQ9PT10aGlzLmlkKXtcbiAgICAgICAgICAgIGFsbFByb2plY3RMaXN0LnNwbGljZShhbGxQcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3QpLDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdExpc3QpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbVByb2plY3RGb3JtKCl7XG4gICAgbGV0IHByb2plY3RGb3JtVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xuICAgIHByb2plY3RGb3JtVG9SZW1vdmUucmVtb3ZlKClcbiAgICBwcm9qRmxhZ1NldHRlcigpO1xuXG59IiwiaW1wb3J0IG5ld1Byb2plY3RBZGRlciBmcm9tIFwiLi9uZXdQcm9qZWN0LmpzXCI7XG5cbmxldCBmbGFnID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3RGb3JtKCl7XG5cbiAgICBpZihmbGFnPT09dHJ1ZSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTsgXG4gICAgXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCBwcm9qZWN0QWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgcHJvamVjdENhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIik7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGl0bGVcIik7XG4gICAgcHJvamVjdEFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEFkZEJ1dHRvblwiKTtcbiAgICBwcm9qZWN0Q2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Q2FuY2VsQnV0dG9uXCIpO1xuXG4gICAgcHJvamVjdFRpdGxlLnR5cGU9XCJ0ZXh0XCI7XG4gICAgcHJvamVjdFRpdGxlLnBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvamVjdCBOYW1lXCI7XG4gICAgcHJvamVjdFRpdGxlLnJlcXVpcmVkPXRydWU7XG5cbiAgICBwcm9qZWN0QWRkQnV0dG9uLnR5cGU9XCJidXR0b25cIjtcbiAgICBwcm9qZWN0Q2FuY2VsQnV0dG9uLnR5cGU9XCJidXR0b25cIjtcblxuICAgIHByb2plY3RBZGRCdXR0b24uaW5uZXJIVE1MPVwiQUREXCI7XG4gICAgcHJvamVjdENhbmNlbEJ1dHRvbi5pbm5lckhUTUw9XCJDQU5DRUxcIjtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdXR0b24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdENhbmNlbEJ1dHRvbik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHByb2plY3RBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbmV3UHJvamVjdEFkZGVyKTtcbiAgICBmbGFnID0gdHJ1ZTtcbiAgICBwcm9qZWN0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNhbmNlbFByb2plY3RGb3JtKTtcblxuXG59XG5cbmZ1bmN0aW9uIGNhbmNlbFByb2plY3RGb3JtKCl7XG4gICAgbGV0IGZvcm1Ub0JlUmVtb3ZlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm1cIik7XG4gICAgZm9ybVRvQmVSZW1vdmVkLnJlbW92ZSgpO1xuICAgIGZsYWc9ZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qRmxhZ1NldHRlcigpe1xuICAgIGZsYWcgPSBmYWxzZTtcbn1cbiIsImxldCBmbGFnID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3RUYXNrRm9ybShwcm9qZWN0UGFnZSl7XG5cbiAgICBpZihmbGFnID09PSB0cnVlKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGZsYWcscHJvamVjdFBhZ2UpO1xuXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBsZXQgcHJvamVjdFRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgcHJvamVjdFRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCBwcm9qZWN0VGFza0FkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IHByb2plY3RUYXNrQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3RUYXNrRm9ybVwiKTtcbiAgICBwcm9qZWN0VGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGFza1RpdGxlXCIpO1xuICAgIHByb2plY3RUYXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRhc2tEYXRlXCIpO1xuICAgIHByb2plY3RUYXNrQWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGFza0FkZEJ1dHRvblwiKTtcbiAgICBwcm9qZWN0VGFza0NhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRhc2tDYW5jZWxCdXR0b25cIik7XG4gICAgXG4gICAgcHJvamVjdFRhc2tUaXRsZS50eXBlPVwidGV4dFwiO1xuICAgIHByb2plY3RUYXNrVGl0bGUucGxhY2Vob2xkZXI9XCJFbnRlciBUYXNrXCI7XG4gICAgcHJvamVjdFRhc2tUaXRsZS5yZXF1aXJlZD10cnVlO1xuXG4gICAgcHJvamVjdFRhc2tEYXRlLnR5cGU9XCJkYXRlXCI7XG4gICAgcHJvamVjdFRhc2tEYXRlLnJlcXVpcmVkPXRydWU7XG5cbiAgICBwcm9qZWN0VGFza0FkZEJ1dHRvbi50eXBlPVwiYnV0dG9uXCI7XG4gICAgcHJvamVjdFRhc2tDYW5jZWxCdXR0b24udHlwZT1cImJ1dHRvblwiO1xuXG4gICAgcHJvamVjdFRhc2tBZGRCdXR0b24uaW5uZXJIVE1MPVwiQUREXCI7XG4gICAgcHJvamVjdFRhc2tDYW5jZWxCdXR0b24uaW5uZXJIVE1MPVwiQ0FOQ0VMXCI7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RUYXNrVGl0bGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tEYXRlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RUYXNrQWRkQnV0dG9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RUYXNrQ2FuY2VsQnV0dG9uKTtcblxuICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgZmxhZz10cnVlO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VGFza0Zvcm1GbGFnVG9nZ2xlKCl7XG4gICAgZmxhZyA9IGZhbHNlO1xufSIsImltcG9ydCB7ZmxhZ1NldHRlcn0gZnJvbSBcIi4vbmV3VGFza0Zvcm0uanNcIjtcblxuZXhwb3J0IGxldCBhbGxUYXNrc0xpc3QgPSBbe3RpdGxlOiAnMCcsIGRhdGU6ICcyMDIyLTEyLTE1JywgdGFza05vOiAwLCB0YXNrSWQ6ICd0YXNrMCd9LHt0aXRsZTogJzEnLCBkYXRlOiAnMjAyMi0xMi0xNScsIHRhc2tObzogMSwgdGFza0lkOiAndGFzazEnfV07XG5cbmxldCBjb3VudD1hbGxUYXNrc0xpc3QubGVuZ3RoLTE7XG5cbmZ1bmN0aW9uIFRhc2tDcmVhdG9yKCl7XG4gICAgXG4gICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1RpdGxlXCIpLnZhbHVlO1xuICAgIGxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0RhdGVJbnB1dFwiKS52YWx1ZVxuXG4gICAgaWYodGFza1RpdGxlPT09XCJcIiB8fCB0YXNrRGF0ZT09PVwiXCIpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY291bnQrPTE7XG4gICAgbGV0IHRhc2tJZD1jb3VudDtcbiAgICBcbiAgICBsZXQgYWRkVGFzayA9IHt0aXRsZTp0YXNrVGl0bGUsZGF0ZTp0YXNrRGF0ZSx0YXNrTm86dGFza0lkLHRhc2tJZDpcInRhc2tcIit0YXNrSWR9O1xuICAgIFxuICAgIGFsbFRhc2tzTGlzdC5wdXNoKGFkZFRhc2spO1xuICAgIFxuICAgIGZvcihsZXQgdGFzayBvZiBhbGxUYXNrc0xpc3Qpe1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkVGFzaztcbiAgICBcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Rhc2tBZGRlcigpe1xuXG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgbGV0IGFsbFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxUYXNrc0RpdlwiKTtcblxuICAgIC8vc3RvcmluZyBuZXdUYXNrXG4gICAgbGV0IG5ld1Rhc2sgPSBUYXNrQ3JlYXRvcigpO1xuXG4gICAgaWYobmV3VGFzaz09PXVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIGxldCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbmV3VGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgbmV3VGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG4gICAgbGV0IGRlbFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgLy8gYWRkaW5nIGNsYXNzZXMgdG8gdGhlIGNvbXBvbmVudHNcbiAgICBuZXdUYXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tDaGVja2JveFwiKTtcbiAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrRGl2XCIpO1xuXG4gICAgbmV3VGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Rhc2sudGFza0lkKTtcbiAgICBuZXdUYXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIixuZXdUYXNrLnRhc2tJZCk7XG4gICAgZGVsVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Rhc2sudGFza0lkKTtcbiAgICBcbiAgICBuZXdUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tUaXRsZVwiKTtcbiAgICBuZXdUYXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwibmV3VGFza0RhdGVcIik7XG5cbiAgICAvL3NldGluZyBjaGVrY2JveCB0cGVcbiAgICBuZXdUYXNrQ2hlY2tib3gudHlwZT1cImNoZWNrYm94XCI7XG4gICAgZGVsVGFza0J0bi50eXBlPVwiYnV0dG9uXCI7XG5cbiAgICAvL2ZpbGxpbmcgaW4gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YXNrXG4gICAgbmV3VGFza1RpdGxlLmlubmVySFRNTCA9IG5ld1Rhc2sudGl0bGU7XG4gICAgbmV3VGFza0RhdGUuaW5uZXJIVE1MID0gbmV3VGFzay5kYXRlO1xuICAgIGRlbFRhc2tCdG4uaW5uZXJIVE1MPVwiREVMXCI7XG5cbiAgICAvL2FkZGluZyBjb250ZW50IHRvIHRhc2tcbiAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tDaGVja2JveCk7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrVGl0bGUpO1xuICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0RhdGUpO1xuICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsVGFza0J0bik7XG4gICAgXG4gICAgLy9kZWxldGUgd2hlbiBjaGVja2JveCBjbGlja2VkXG4gICAgbmV3VGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlbW92ZURpdik7XG4gICAgZGVsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixyZW1vdmVEaXYpO1xuXG4gICAgLy9hZGRpbmcgdG8gYWxsIHRhc2tzIHBhZ2VcbiAgICBhbGxUYXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcblxuICAgIC8vXG4gICAgcmVtRm9ybSgpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEaXYoKXtcblxuICAgIGxldCB0b1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdiMke3RoaXMuaWR9YCk7XG4gICAgdG9SZW1vdmUucmVtb3ZlKCk7XG5cbiAgICBmb3IobGV0IHRhc2sgb2YgYWxsVGFza3NMaXN0KXtcbiAgICAgICAgaWYodGFzay50YXNrSWQ9PT10aGlzLmlkKXtcbiAgICAgICAgICAgIGFsbFRhc2tzTGlzdC5zcGxpY2UoYWxsVGFza3NMaXN0LmluZGV4T2YodGFzayksMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhhbGxUYXNrc0xpc3QpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbUZvcm0oKXtcbiAgICBsZXQgZm9ybVRvQmVSZW1vdmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRm9ybVwiKTtcbiAgICBmb3JtVG9CZVJlbW92ZWQucmVtb3ZlKCk7XG4gICAgZmxhZ1NldHRlcigpXG59IiwiaW1wb3J0IG5ld1Rhc2tBZGRlciBmcm9tIFwiLi9uZXdUYXNrXCI7XG5pbXBvcnQgVGFza0NyZWF0b3IgZnJvbSBcIi4vbmV3VGFza1wiO1xuXG5sZXQgZmxhZyA9IGZhbHNlO1xuLy9wdXQgaW5wdXQgdGFncyBhbmQgYnV0dG9uIGluIEZPUk0gdGFnIHRvIG1ha2UgcmVxdWlyZWQgd29yayBsYXRlclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdUYXNrRm9ybSgpe1xuXG4gICAgaWYoZmxhZz09PXRydWUpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGFsbFRhc2tzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsVGFza3NQYWdlXCIpO1xuXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCB0YXNrQWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgdGFza0NhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRm9ybVwiKTtcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcbiAgICB0YXNrRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGF0ZUlucHV0XCIpO1xuICAgIHRhc2tBZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2tBZGRCdXR0b25cIik7XG4gICAgdGFza0NhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFza0NhbmNlbEJ1dHRvblwiKTtcbiAgICBcbiAgICB0YXNrVGl0bGUudHlwZT1cInRleHRcIjtcbiAgICB0YXNrVGl0bGUucGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrXCI7XG4gICAgdGFza1RpdGxlLnJlcXVpcmVkPXRydWU7XG5cbiAgICB0YXNrRGF0ZUlucHV0LnR5cGU9XCJkYXRlXCI7XG4gICAgdGFza0RhdGVJbnB1dC5yZXF1aXJlZD10cnVlO1xuXG4gICAgdGFza0FkZEJ1dHRvbi50eXBlPVwiYnV0dG9uXCI7XG4gICAgdGFza0NhbmNlbEJ1dHRvbi50eXBlPVwiYnV0dG9uXCI7XG5cbiAgICB0YXNrQWRkQnV0dG9uLmlubmVySFRNTD1cIkFERFwiO1xuICAgIHRhc2tDYW5jZWxCdXR0b24uaW5uZXJIVE1MPVwiQ0FOQ0VMXCJcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0FkZEJ1dHRvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrQ2FuY2VsQnV0dG9uKTtcbiAgICBhbGxUYXNrc1BhZ2UuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAvL2V2ZW50IGxpc3RlbmVyIGZvciBhZGRUYXNrXG4gICAgdGFza0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixuZXdUYXNrQWRkZXIpO1xuICAgIGZsYWc9dHJ1ZTtcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNhbmNlbEZvcm0pO1xuXG59XG5cbmZ1bmN0aW9uIGNhbmNlbEZvcm0oKXtcbiAgICBsZXQgZm9ybVRvQmVSZW1vdmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRm9ybVwiKTtcbiAgICBmb3JtVG9CZVJlbW92ZWQucmVtb3ZlKCk7XG4gICAgZmxhZz1mYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdTZXR0ZXIoKXtcbiAgICBmbGFnID0gZmFsc2U7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGFsbFRhc2tMb2FkZXIgZnJvbSBcIi4vYWxsVGFza3MuanNcIjtcbmltcG9ydCBuZXdQcm9qZWN0Rm9ybSBmcm9tIFwiLi9uZXdQcm9qZWN0Rm9ybS5qc1wiO1xuXG5sZXQgYWxsVGFza3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFRhc2tzXCIpO1xuYWxsVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYWxsVGFza0xvYWRlcik7XG5cbmxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixuZXdQcm9qZWN0Rm9ybSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9