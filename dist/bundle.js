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



let allTasksList = [{title: '0', date: '2022-12-15', taskNo: 0, taskId: 'task0',UniqueId:-1},{title: '1', date: '2022-12-15', taskNo: 1, taskId: 'task1',UniqueId:-1}];

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




let allTasksBtn = document.querySelector("#allTasks");
allTasksBtn.addEventListener("click",_allTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

let addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener("click",_newProjectForm_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLGdEQUFZO0FBQ3ZEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7VUM1REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3FCO0FBQ087O0FBRWpEO0FBQ0EscUNBQXFDLG9EQUFhOztBQUVsRDtBQUNBLHVDQUF1QywwREFBYyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FsbFRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld1Byb2plY3RUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uZXdUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4jaGVhZGluZ3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjoxLzM7XFxufVxcblxcbiNzaWRlYmFye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxvQkFBb0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4jaGVhZGluZ3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjoxLzM7XFxufVxcblxcbiNzaWRlYmFye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbmV3VGFza0Zvcm0gZnJvbSBcIi4vbmV3VGFza0Zvcm1cIjtcbmltcG9ydCBuZXdUYXNrQWRkZXIsIHthbGxUYXNrc0xpc3QsIHJlbW92ZURpdn0gZnJvbSBcIi4vbmV3VGFzay5qc1wiO1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmxldCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkaW5nXCIpO1xubGV0IGZsYWcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsVGFza0xvYWRlcigpe1xuXG4gICAgaWYoZmxhZz09PXRydWUpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RQYWdlVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RQYWdlXCIpO1xuICAgIGlmKHByb2plY3RQYWdlVG9SZW1vdmUhPT1udWxsKXtcbiAgICAgICAgcHJvamVjdFBhZ2VUb1JlbW92ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvL2NyZWF0aW5nIGRpdnNcbiAgICBsZXQgYWxsVGFza3NQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYWxsVGFza3NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGxldCBhbGxUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvL2FkZGluZyBjbGFzc1xuICAgIGFsbFRhc2tzUGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWxsVGFza3NQYWdlXCIpO1xuICAgIGFsbFRhc2tzSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiYWxsVGFza3NIZWFkaW5nXCIpO1xuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tCdXR0b25cIik7XG4gICAgYWxsVGFza3NEaXYuY2xhc3NMaXN0LmFkZChcImFsbFRhc2tzRGl2XCIpO1xuXG4gICAgLy9hZGRpbmcgdGV4dCBjb250ZW50XG4gICAgYWxsVGFza3NIZWFkaW5nLmlubmVySFRNTCA9IFwiQUxMIFRBU0tTXCI7XG4gICAgYWRkVGFza0J1dHRvbi5pbm5lckhUTUwgPSBcIisgQUREIFRBU0tcIjtcblxuICAgIGFsbFRhc2tzUGFnZS5hcHBlbmRDaGlsZChhbGxUYXNrc0hlYWRpbmcpO1xuICAgIGFsbFRhc2tzUGFnZS5hcHBlbmRDaGlsZChhbGxUYXNrc0Rpdik7ICAgIFxuICAgIGFsbFRhc2tzUGFnZS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWxsVGFza3NQYWdlKTtcblxuICAgIC8vIGV2ZW50IGxpc3RlbmRlciBmb3IgYWRkVGFza0J1dHRvblxuICAgIGNvbnNvbGUubG9nKGFkZFRhc2tCdXR0b24pO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbmV3VGFza0Zvcm0pO1xuXG4gICAgdGFza0xvYWRlcihhbGxUYXNrc0xpc3QpO1xuXG4gICAgZmxhZz10cnVlO1xufVxuXG5mdW5jdGlvbiB0YXNrTG9hZGVyKGFsbFRhc2tzTGlzdCl7XG5cbiAgICBpZihhbGxUYXNrc0xpc3QubGVuZ3RoPT09MCl7XG4gICAgICAgIGNvbnNvbGUubG9nKDApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYWxsVGFza3NMaXN0KTtcblxuICAgIGZvcihsZXQgbmV3VGFzayBvZiBhbGxUYXNrc0xpc3Qpe1xuXG4gICAgICAgIGxldCBhbGxUYXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsVGFza3NEaXZcIik7XG5cbiAgICAgICAgbGV0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgbmV3VGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBsZXQgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGxldCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcbiAgICAgICAgbGV0IGRlbFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgICAgIC8vIGFkZGluZyBjbGFzc2VzIHRvIHRoZSBjb21wb25lbnRzXG4gICAgICAgIG5ld1Rhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwibmV3VGFza0NoZWNrYm94XCIpO1xuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrRGl2XCIpO1xuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoYCR7bmV3VGFzay5VbmlxdWVJZH1gKTtcblxuICAgICAgICBuZXdUYXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsbmV3VGFzay50YXNrSWQpO1xuICAgICAgICBuZXdUYXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIixuZXdUYXNrLnRhc2tJZCk7XG4gICAgICAgIGRlbFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIixuZXdUYXNrLnRhc2tJZCk7XG4gICAgICAgIFxuICAgICAgICBuZXdUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tUaXRsZVwiKTtcbiAgICAgICAgbmV3VGFza0RhdGUuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tEYXRlXCIpO1xuXG4gICAgICAgIC8vc2V0aW5nIGNoZWtjYm94IHRwZVxuICAgICAgICBuZXdUYXNrQ2hlY2tib3gudHlwZT1cImNoZWNrYm94XCI7XG4gICAgICAgIGRlbFRhc2tCdG4udHlwZT1cImJ1dHRvblwiO1xuXG4gICAgICAgIC8vZmlsbGluZyBpbiB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2tcbiAgICAgICAgbmV3VGFza1RpdGxlLmlubmVySFRNTCA9IG5ld1Rhc2sudGl0bGU7XG4gICAgICAgIG5ld1Rhc2tEYXRlLmlubmVySFRNTCA9IG5ld1Rhc2suZGF0ZTtcbiAgICAgICAgZGVsVGFza0J0bi5pbm5lckhUTUw9XCJERUxcIjtcblxuICAgICAgICAvL2FkZGluZyBjb250ZW50IHRvIHRhc2tcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQ2hlY2tib3gpO1xuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG4gICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0RhdGUpO1xuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGRlbFRhc2tCdG4pO1xuICAgICAgICBcbiAgICAgICAgLy9kZWxldGUgd2hlbiBjaGVja2JveCBjbGlja2VkXG4gICAgICAgIG5ld1Rhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixyZW1vdmVEaXYpO1xuICAgICAgICBkZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlbW92ZURpdik7XG5cbiAgICAgICAgLy9hZGRpbmcgdG8gYWxsIHRhc2tzIHBhZ2VcbiAgICAgICAgYWxsVGFza3NEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdUb2dnbGVyKCl7XG4gICAgZmxhZyA9IGZhbHNlO1xufSIsImltcG9ydCB7ZmxhZ1RvZ2dsZXJ9IGZyb20gXCIuL2FsbFRhc2tzLmpzXCI7XG5pbXBvcnQgbmV3UHJvamVjdFRhc2tGb3JtIGZyb20gXCIuL25ld1Byb2plY3RUYXNrRm9ybS5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0VGFza0Zvcm1GbGFnVG9nZ2xlfSBmcm9tIFwiLi9uZXdQcm9qZWN0VGFza0Zvcm0uanNcIlxuaW1wb3J0IHtyZW1vdmVQcm9qZWN0VGFza0Rpdn0gZnJvbSBcIi4vbmV3UHJvamVjdFRhc2suanNcIjtcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5sZXQgb2xkUHJvamVjdFBhZ2U7XG5cbmxldCBmbGFnID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RQYWdlTG9hZGVyKG5ld1Byb2plY3Qpe1xuXG4gICAgbGV0IGFsbFRhc2tzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsVGFza3NQYWdlXCIpO1xuICAgIGFsbFRhc2tzUGFnZVJlbW92ZXIoYWxsVGFza3NQYWdlKTtcblxuICAgIHByb2plY3RUYXNrRm9ybUZsYWdUb2dnbGUoKTtcblxuXG4gICAgLy9wcmV2ZW50IHRoZSBzYW1lIHBhZ2UgZnJvbSBsb2FkaW5nIHR3aWNlO1xuICAgIGlmKGZsYWcgPT09IHRydWUpe1xuICAgICAgICBpZihvbGRQcm9qZWN0UGFnZT09PW5ld1Byb2plY3QucHJvamVjdElkK1wiUGFnZVwiKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHBhZ2VUb0JlRGVsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke29sZFByb2plY3RQYWdlfWApO1xuICAgICAgICAgICAgaWYocGFnZVRvQmVEZWxldGVkIT09bnVsbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRQcm9qZWN0UGFnZSxuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIilcbiAgICAgICAgXG4gICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRQcm9qZWN0UGFnZSxuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIilcblxuICAgICAgICAgICAgbGV0IHBhZ2VUb0JlRGVsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke29sZFByb2plY3RQYWdlfWApO1xuXG4gICAgICAgICAgICBpZihwYWdlVG9CZURlbGV0ZWQhPT1udWxsKXtcbiAgICAgICAgICAgICAgICBwYWdlVG9CZURlbGV0ZWQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgbGV0IHByb2plY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgcHJvamVjdFBhZ2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBhZGRQcm9qZWN0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IHByb2plY3RBbGxUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwcm9qZWN0UGFnZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFBhZ2VcIik7XG4gICAgcHJvamVjdFBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIik7XG4gICAgcHJvamVjdFBhZ2VIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0UGFnZUhlYWRpbmdcIik7XG4gICAgYWRkUHJvamVjdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RUYXNrQnRuXCIpO1xuICAgIHByb2plY3RBbGxUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEFsbFRhc2tzRGl2XCIpO1xuXG4gICAgb2xkUHJvamVjdFBhZ2UgPSBuZXdQcm9qZWN0LnByb2plY3RJZCtcIlBhZ2VcIjtcblxuICAgIHByb2plY3RQYWdlSGVhZGluZy5pbm5lckhUTUwgPSBuZXdQcm9qZWN0LnRpdGxlO1xuICAgIGFkZFByb2plY3RUYXNrQnRuLmlubmVySFRNTCA9IFwiKyBBREQgVEFTS1wiO1xuXG4gICAgcHJvamVjdFBhZ2UuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2VIZWFkaW5nKTtcbiAgICBwcm9qZWN0UGFnZS5hcHBlbmRDaGlsZChwcm9qZWN0QWxsVGFza3NEaXYpO1xuICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKGFkZFByb2plY3RUYXNrQnRuKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBmb3IgYWRkVGFza0J1dHRvbiBmb3IgdGhlIHBhZ2VcbiAgICBhZGRQcm9qZWN0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e25ld1Byb2plY3RUYXNrRm9ybShwcm9qZWN0UGFnZSxuZXdQcm9qZWN0KX0pO1xuXG4gICAgLy9sb2FkIHByb2plY3Qga2UgdGFza3NcbiAgICBwcm9qZWN0VGFza0xvYWRlcihuZXdQcm9qZWN0KTtcblxuICAgIGZsYWcgPSB0cnVlO1xuXG5cbn1cblxuZnVuY3Rpb24gYWxsVGFza3NQYWdlUmVtb3ZlcihhbGxUYXNrc1BhZ2Upe1xuICAgIFxuICAgIGlmKGFsbFRhc2tzUGFnZT09PW51bGwpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGFsbFRhc2tzUGFnZS5yZW1vdmUoKTtcbiAgICAgICAgZmxhZ1RvZ2dsZXIoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2plY3RUYXNrTG9hZGVyKG5ld1Byb2plY3Qpe1xuXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdC5wcm9qZWN0VGFza3NMaXN0KTtcbiAgICBcbiAgICBpZihuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3QubGVuZ3RoPT09MCl7XG4gICAgICAgIGNvbnNvbGUubG9nKDApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBuZXdQcm9qZWN0VGFzayBvZiBuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3Qpe1xuICAgICAgICBcbiAgICAgICAgbGV0IHByb2plY3RBbGxUYXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25ld1Byb2plY3QucHJvamVjdElkfVBhZ2UgLnByb2plY3RBbGxUYXNrc0RpdmApO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QWxsVGFza3NEaXYpO1xuXG4gICAgICAgIGxldCBuZXdQcm9qZWN0VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0VGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBsZXQgbmV3UHJvamVjdFRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsZXQgbmV3UHJvamVjdFRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGxldCBkZWxOZXdQcm9qZWN0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgICAgLy9hZGRpbmcgY2xhc3Nlc1xuICAgICAgICBuZXdQcm9qZWN0VGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJuZXdQcm9qZWN0VGFza0NoZWNrYm94XCIpO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFRhc2tEaXZcIik7XG4gICAgICAgIG5ld1Byb2plY3RUYXNrRGl2LmNsYXNzTGlzdC5hZGQoYCR7bmV3UHJvamVjdFRhc2suVW5pcXVlSWR9YCk7XG5cblxuICAgICAgICBuZXdQcm9qZWN0VGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Byb2plY3RUYXNrLnByb2plY3RUYXNrSWQpO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0NoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsbmV3UHJvamVjdFRhc2sucHJvamVjdFRhc2tJZCk7XG4gICAgICAgIGRlbE5ld1Byb2plY3RUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsbmV3UHJvamVjdFRhc2sucHJvamVjdFRhc2tJZCk7XG5cbiAgICAgICAgbmV3UHJvamVjdFRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFRhc2tUaXRsZVwiKTtcbiAgICAgICAgbmV3UHJvamVjdFRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJuZXdQcm9qZWN0VGFza0RhdGVcIik7XG5cbiAgICAgICAgLy9zZXR0aW5nIGNoZWNrYm94IHR5cGU7XG4gICAgICAgIG5ld1Byb2plY3RUYXNrQ2hlY2tib3gudHlwZT1cImNoZWNrYm94XCI7XG4gICAgICAgIGRlbE5ld1Byb2plY3RUYXNrQnRuLnR5cGU9XCJidXR0b25cIjtcblxuICAgICAgICAvL2FkZGluZyB0ZXh0O1xuICAgICAgICBuZXdQcm9qZWN0VGFza1RpdGxlLmlubmVySFRNTCA9IG5ld1Byb2plY3RUYXNrLnRpdGxlO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0RhdGUuaW5uZXJIVE1MPW5ld1Byb2plY3RUYXNrLmRhdGU7XG4gICAgICAgIGRlbE5ld1Byb2plY3RUYXNrQnRuLmlubmVySFRNTD1cIkRFTFwiO1xuXG4gICAgICAgIC8vYWRkaW5nIGNvbnRlbnQgdG8gdGFza3NcbiAgICAgICAgbmV3UHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhc2tDaGVja2JveCk7XG4gICAgICAgIG5ld1Byb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrVGl0bGUpO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza0RhdGUpO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZChkZWxOZXdQcm9qZWN0VGFza0J0bik7XG5cbiAgICAgICAgLy9hZGRpbmcgbmV3UHJvamVjdFRhc2tEaXYgdG8gcHJvamVjdEFsbFRhc2tzRGl2XG4gICAgICAgIHByb2plY3RBbGxUYXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza0Rpdik7XG5cbiAgICAgICAgLy9kZWxldGUgd2hlbiBjaGVja2JveCBjbGlja2VkIG9yIGRlbGV0ZSBjbGlja2VkOyAgIFxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3QpO1xuICAgICAgICBuZXdQcm9qZWN0VGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57cmVtb3ZlUHJvamVjdFRhc2tEaXYobmV3UHJvamVjdFRhc2tEaXYsbmV3UHJvamVjdCl9KTtcbiAgICAgICAgZGVsTmV3UHJvamVjdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntyZW1vdmVQcm9qZWN0VGFza0RpdihuZXdQcm9qZWN0VGFza0RpdixuZXdQcm9qZWN0KX0pXG5cbiAgICB9XG59IiwiaW1wb3J0IHtwcm9qRmxhZ1NldHRlcn0gZnJvbSBcIi4vbmV3UHJvamVjdEZvcm0uanNcIjsgXG5pbXBvcnQgcHJvamVjdFBhZ2VMb2FkZXIgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFBhZ2UuanNcIjtcblxuZXhwb3J0IGxldCBhbGxQcm9qZWN0TGlzdCA9IFtdO1xubGV0IGNvdW50ID0gYWxsUHJvamVjdExpc3QubGVuZ3RoLTE7XG5cbmZ1bmN0aW9uIHByb2plY3RDcmVhdG9yKCl7XG5cbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGl0bGVcIikudmFsdWU7XG4gICAgXG4gICAgaWYocHJvamVjdFRpdGxlPT09XCJcIil7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb3VudCs9MVxuICAgIGxldCBwcm9qZWN0SWQgPSBjb3VudDtcblxuICAgIGxldCBhZGRQcm9qZWN0ID0ge3RpdGxlOnByb2plY3RUaXRsZSxwcm9qZWN0Tm86cHJvamVjdElkLHByb2plY3RJZDpcInByb2plY3RcIitwcm9qZWN0SWQscHJvamVjdFRhc2tzTGlzdDpbXX07XG5cbiAgICBhbGxQcm9qZWN0TGlzdC5wdXNoKGFkZFByb2plY3QpO1xuXG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RMaXN0KXtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZFByb2plY3RcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0QWRkZXIoKXtcblxuICAgIGxldCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsUHJvamVjdHNcIik7XG5cbiAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RDcmVhdG9yKCk7XG5cbiAgICBpZihuZXdQcm9qZWN0PT09dW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGRlbFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdERpdlwiKTtcblxuICAgIG5ld1Byb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIixuZXdQcm9qZWN0LnByb2plY3RJZCk7XG4gICAgZGVsUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Byb2plY3QucHJvamVjdElkKTtcblxuICAgIG5ld1Byb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFRpdGxlXCIpO1xuXG4gICAgLy9zZXR0aW5nIHR5cGVcbiAgICBkZWxQcm9qZWN0QnRuLnR5cGU9XCJidXR0b25cIjtcblxuICAgIC8vYWRkaW5nIHRleHQ7XG4gICAgbmV3UHJvamVjdFRpdGxlLmlubmVySFRNTD1uZXdQcm9qZWN0LnRpdGxlO1xuICAgIGRlbFByb2plY3RCdG4uaW5uZXJIVE1MPVwiREVMXCI7XG5cbiAgICAvL2FwcGVuZGluZyBjaGlsZHJlbjtcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZSk7XG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxQcm9qZWN0QnRuKTtcblxuICAgIGRlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIscmVtUHJvamVjdCk7XG5cbiAgICAvL2V2ZW50IGxpc3RlbmVyIG9uIG5ld1Byb2plY3REaXYgdG8gZmlyZSBjcmVhdGVQcm9qZWN0UGFnZSBhZGQgaGVyZVxuICAgIG5ld1Byb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9Pntwcm9qZWN0UGFnZUxvYWRlcihuZXdQcm9qZWN0KX0pO1xuXG4gICAgYWxsUHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICByZW1Qcm9qZWN0Rm9ybSgpO1xufVxuXG5cblxuZnVuY3Rpb24gcmVtUHJvamVjdCgpe1xuICAgIGxldCBwcm9qZWN0VG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYjJHt0aGlzLmlkfWApO1xuICAgIHByb2plY3RUb1JlbW92ZS5yZW1vdmUoKTtcbiAgICBmb3IobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdExpc3Qpe1xuICAgICAgICBpZihwcm9qZWN0LnByb2plY3RJZD09PXRoaXMuaWQpe1xuICAgICAgICAgICAgYWxsUHJvamVjdExpc3Quc3BsaWNlKGFsbFByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdCksMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0TGlzdCk7XG5cbn1cblxuZnVuY3Rpb24gcmVtUHJvamVjdEZvcm0oKXtcbiAgICBsZXQgcHJvamVjdEZvcm1Ub1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm1cIik7XG4gICAgcHJvamVjdEZvcm1Ub1JlbW92ZS5yZW1vdmUoKVxuICAgIHByb2pGbGFnU2V0dGVyKCk7XG5cbn0iLCJpbXBvcnQgbmV3UHJvamVjdEFkZGVyIGZyb20gXCIuL25ld1Byb2plY3QuanNcIjtcblxubGV0IGZsYWcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdEZvcm0oKXtcblxuICAgIGlmKGZsYWc9PT10cnVlKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyXCIpOyBcbiAgICBcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IHByb2plY3RBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBwcm9qZWN0Q2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RUaXRsZVwiKTtcbiAgICBwcm9qZWN0QWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0QWRkQnV0dG9uXCIpO1xuICAgIHByb2plY3RDYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RDYW5jZWxCdXR0b25cIik7XG5cbiAgICBwcm9qZWN0VGl0bGUudHlwZT1cInRleHRcIjtcbiAgICBwcm9qZWN0VGl0bGUucGxhY2Vob2xkZXI9XCJFbnRlciBQcm9qZWN0IE5hbWVcIjtcbiAgICBwcm9qZWN0VGl0bGUucmVxdWlyZWQ9dHJ1ZTtcblxuICAgIHByb2plY3RBZGRCdXR0b24udHlwZT1cImJ1dHRvblwiO1xuICAgIHByb2plY3RDYW5jZWxCdXR0b24udHlwZT1cImJ1dHRvblwiO1xuXG4gICAgcHJvamVjdEFkZEJ1dHRvbi5pbm5lckhUTUw9XCJBRERcIjtcbiAgICBwcm9qZWN0Q2FuY2VsQnV0dG9uLmlubmVySFRNTD1cIkNBTkNFTFwiO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEFkZEJ1dHRvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Q2FuY2VsQnV0dG9uKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgcHJvamVjdEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixuZXdQcm9qZWN0QWRkZXIpO1xuICAgIGZsYWcgPSB0cnVlO1xuICAgIHByb2plY3RDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY2FuY2VsUHJvamVjdEZvcm0pO1xuXG5cbn1cblxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdEZvcm0oKXtcbiAgICBsZXQgZm9ybVRvQmVSZW1vdmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVwiKTtcbiAgICBmb3JtVG9CZVJlbW92ZWQucmVtb3ZlKCk7XG4gICAgZmxhZz1mYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2pGbGFnU2V0dGVyKCl7XG4gICAgZmxhZyA9IGZhbHNlO1xufVxuIiwiaW1wb3J0IHthbGxUYXNrc0xpc3R9IGZyb20gXCIuL25ld1Rhc2suanNcIjtcbmltcG9ydCB7cHJvamVjdFRhc2tGb3JtRmxhZ1RvZ2dsZX0gZnJvbSBcIi4vbmV3UHJvamVjdFRhc2tGb3JtLmpzXCI7XG5cbmZ1bmN0aW9uIHByb2plY3RUYXNrQ3JlYXRvcihuZXdQcm9qZWN0KXtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LG5ld1Byb2plY3QudGl0bGUpO1xuXG4gICAgbGV0IHByb2plY3RUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUYXNrVGl0bGVcIikudmFsdWU7XG4gICAgbGV0IHByb2plY3RUYXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRhc2tEYXRlXCIpLnZhbHVlO1xuXG4gICAgaWYocHJvamVjdFRhc2tUaXRsZT09PVwiXCIgfHwgcHJvamVjdFRhc2tEYXRlPT09XCJcIil7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY291bnQgPSBuZXdQcm9qZWN0LnByb2plY3RUYXNrc0xpc3QubGVuZ3RoO1xuICAgIGxldCBwcm9qZWN0VGFza0lkID0gY291bnQ7XG5cbiAgICBsZXQgdGFza0lkID0gYWxsVGFza3NMaXN0Lmxlbmd0aDtcblxuICAgIGxldCBhZGRQcm9qZWN0VGFzayA9IHt0aXRsZTpwcm9qZWN0VGFza1RpdGxlLGRhdGU6cHJvamVjdFRhc2tEYXRlLHByb2plY3RUYXNrTm86cHJvamVjdFRhc2tJZCxwcm9qZWN0VGFza0lkOlwicHJvamVjdFRhc2tcIitwcm9qZWN0VGFza0lkLFVuaXF1ZUlkOk1hdGgucmFuZG9tKCl9O1xuICAgIGxldCBhZGRUYXNrVG9BbGxUYXNrc0xpc3QgPSB7dGl0bGU6cHJvamVjdFRhc2tUaXRsZSxkYXRlOnByb2plY3RUYXNrRGF0ZSx0YXNrTm86dGFza0lkLHRhc2tJZDpcInRhc2tcIit0YXNrSWQsVW5pcXVlSWQ6YWRkUHJvamVjdFRhc2suVW5pcXVlSWR9O1xuXG4gICAgbmV3UHJvamVjdC5wcm9qZWN0VGFza3NMaXN0LnB1c2goYWRkUHJvamVjdFRhc2spO1xuICAgIGFsbFRhc2tzTGlzdC5wdXNoKGFkZFRhc2tUb0FsbFRhc2tzTGlzdCk7XG5cbiAgICBjb25zb2xlLmxvZyhhbGxUYXNrc0xpc3QpO1xuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3QucHJvamVjdFRhc2tzTGlzdCk7O1xuXG5cbiAgICByZXR1cm4gYWRkUHJvamVjdFRhc2s7XG5cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3RUYXNrQWRkZXIobmV3UHJvamVjdCl7XG4gICAgXG4gICAgbGV0IHByb2plY3RBbGxUYXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25ld1Byb2plY3QucHJvamVjdElkfVBhZ2UgLnByb2plY3RBbGxUYXNrc0RpdmApO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RBbGxUYXNrc0Rpdik7XG5cbiAgICBjb25zb2xlLmxvZyhcIm5ld1Byb2plY3RUYXNrQWRkZXJcIik7XG4gICAgbGV0IG5ld1Byb2plY3RUYXNrID0gcHJvamVjdFRhc2tDcmVhdG9yKG5ld1Byb2plY3QpO1xuICAgIFxuICAgIGlmKG5ld1Byb2plY3RUYXNrPT09dW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQcm9qZWN0VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IG5ld1Byb2plY3RUYXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IG5ld1Byb2plY3RUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgbmV3UHJvamVjdFRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGRlbE5ld1Byb2plY3RUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIC8vYWRkaW5nIGNsYXNzZXNcbiAgICBuZXdQcm9qZWN0VGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJuZXdQcm9qZWN0VGFza0NoZWNrYm94XCIpO1xuICAgIG5ld1Byb2plY3RUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdQcm9qZWN0VGFza0RpdlwiKTtcbiAgICBuZXdQcm9qZWN0VGFza0Rpdi5jbGFzc0xpc3QuYWRkKGAke25ld1Byb2plY3RUYXNrLlVuaXF1ZUlkfWApO1xuXG5cbiAgICBuZXdQcm9qZWN0VGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Byb2plY3RUYXNrLnByb2plY3RUYXNrSWQpO1xuICAgIG5ld1Byb2plY3RUYXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIixuZXdQcm9qZWN0VGFzay5wcm9qZWN0VGFza0lkKTtcbiAgICBkZWxOZXdQcm9qZWN0VGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Byb2plY3RUYXNrLnByb2plY3RUYXNrSWQpO1xuXG4gICAgbmV3UHJvamVjdFRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFRhc2tUaXRsZVwiKTtcbiAgICBuZXdQcm9qZWN0VGFza0RhdGUuY2xhc3NMaXN0LmFkZChcIm5ld1Byb2plY3RUYXNrRGF0ZVwiKTtcblxuICAgIC8vc2V0dGluZyBjaGVja2JveCB0eXBlO1xuICAgIG5ld1Byb2plY3RUYXNrQ2hlY2tib3gudHlwZT1cImNoZWNrYm94XCI7XG4gICAgZGVsTmV3UHJvamVjdFRhc2tCdG4udHlwZT1cImJ1dHRvblwiO1xuXG4gICAgLy9hZGRpbmcgdGV4dDtcbiAgICBuZXdQcm9qZWN0VGFza1RpdGxlLmlubmVySFRNTCA9IG5ld1Byb2plY3RUYXNrLnRpdGxlO1xuICAgIG5ld1Byb2plY3RUYXNrRGF0ZS5pbm5lckhUTUw9bmV3UHJvamVjdFRhc2suZGF0ZTtcbiAgICBkZWxOZXdQcm9qZWN0VGFza0J0bi5pbm5lckhUTUw9XCJERUxcIjtcblxuICAgIC8vYWRkaW5nIGNvbnRlbnQgdG8gdGFza3NcbiAgICBuZXdQcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza0NoZWNrYm94KTtcbiAgICBuZXdQcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza1RpdGxlKTtcbiAgICBuZXdQcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza0RhdGUpO1xuICAgIG5ld1Byb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKGRlbE5ld1Byb2plY3RUYXNrQnRuKTtcblxuICAgIC8vYWRkaW5nIG5ld1Byb2plY3RUYXNrRGl2IHRvIHByb2plY3RBbGxUYXNrc0RpdlxuICAgIHByb2plY3RBbGxUYXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza0Rpdik7XG5cbiAgICAvL2RlbGV0ZSB3aGVuIGNoZWNrYm94IGNsaWNrZWQgb3IgZGVsZXRlIGNsaWNrZWQ7ICAgXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdC5wcm9qZWN0VGFza3NMaXN0KTtcbiAgICBuZXdQcm9qZWN0VGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57cmVtb3ZlUHJvamVjdFRhc2tEaXYobmV3UHJvamVjdFRhc2tEaXYsbmV3UHJvamVjdCl9KTtcbiAgICBkZWxOZXdQcm9qZWN0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e3JlbW92ZVByb2plY3RUYXNrRGl2KG5ld1Byb2plY3RUYXNrRGl2LG5ld1Byb2plY3QpfSlcblxuICAgIC8vcmVtb3ZlIGZvcm1cbiAgICByZW1Qcm9qZWN0VGFza0Zvcm0oKTtcblxufVxuXG5mdW5jdGlvbiByZW1Qcm9qZWN0VGFza0Zvcm0oKXtcblxuICAgIGxldCBwcm9qZWN0VGFza0Zvcm1Ub1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRhc2tGb3JtXCIpO1xuICAgIHByb2plY3RUYXNrRm9ybVRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgIHByb2plY3RUYXNrRm9ybUZsYWdUb2dnbGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3RUYXNrRGl2KG5ld1Byb2plY3RUYXNrRGl2LG5ld1Byb2plY3Qpe1xuXG4gICAgbmV3UHJvamVjdFRhc2tEaXYucmVtb3ZlKCk7XG4gICAgLy9yZW1vdmUgZnJvbSBsaXN0IHRvb29vb29vb29vbyBhbGx0YXNrIGFuZCBwcm9qZWN0YWxsdGFza3NcbiAgICBmb3IobGV0IHByb2plY3RUYXNrIG9mIG5ld1Byb2plY3QucHJvamVjdFRhc2tzTGlzdCl7XG4gICAgICAgIGlmKHByb2plY3RUYXNrLnByb2plY3RUYXNrSWQgPT09IG5ld1Byb2plY3RUYXNrRGl2LmlkKXtcbiAgICAgICAgICAgIG5ld1Byb2plY3QucHJvamVjdFRhc2tzTGlzdC5zcGxpY2UobmV3UHJvamVjdC5wcm9qZWN0VGFza3NMaXN0LmluZGV4T2YocHJvamVjdFRhc2spLDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yKGxldCBwcm9qZWN0VGFzayBvZiBhbGxUYXNrc0xpc3Qpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBwcm9qZWN0VGFzay5VbmlxdWVJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiArbmV3UHJvamVjdFRhc2tEaXYuY2xhc3NMaXN0WzFdKTtcblxuICAgICAgICBpZiggcHJvamVjdFRhc2suVW5pcXVlSWQgPT09ICtuZXdQcm9qZWN0VGFza0Rpdi5jbGFzc0xpc3RbMV0pe1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFRhc2suVW5pcXVlSWQsbmV3UHJvamVjdFRhc2tEaXYuY2xhc3NMaXN0WzFdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRydWUpO1xuICAgICAgICAgICAgYWxsVGFza3NMaXN0LnNwbGljZShhbGxUYXNrc0xpc3QuaW5kZXhPZihwcm9qZWN0VGFzayksMSk7XG4gICAgICAgIH1cblxuXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdC5wcm9qZWN0VGFza3NMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhhbGxUYXNrc0xpc3QpO1xuICAgIH1cbn1cbiIsImltcG9ydCBuZXdQcm9qZWN0VGFza0FkZGVyIGZyb20gXCIuL25ld1Byb2plY3RUYXNrLmpzXCJcblxubGV0IGZsYWcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdFRhc2tGb3JtKHByb2plY3RQYWdlLG5ld1Byb2plY3Qpe1xuXG4gICAgaWYoZmxhZyA9PT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coZmxhZyxwcm9qZWN0UGFnZSk7XG5cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGxldCBwcm9qZWN0VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCBwcm9qZWN0VGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IHByb2plY3RUYXNrQWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgcHJvamVjdFRhc2tDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRhc2tGb3JtXCIpO1xuICAgIHByb2plY3RUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RUYXNrVGl0bGVcIik7XG4gICAgcHJvamVjdFRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGFza0RhdGVcIik7XG4gICAgcHJvamVjdFRhc2tBZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RUYXNrQWRkQnV0dG9uXCIpO1xuICAgIHByb2plY3RUYXNrQ2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGFza0NhbmNlbEJ1dHRvblwiKTtcbiAgICBcbiAgICBwcm9qZWN0VGFza1RpdGxlLnR5cGU9XCJ0ZXh0XCI7XG4gICAgcHJvamVjdFRhc2tUaXRsZS5wbGFjZWhvbGRlcj1cIkVudGVyIFRhc2tcIjtcbiAgICBwcm9qZWN0VGFza1RpdGxlLnJlcXVpcmVkPXRydWU7XG5cbiAgICBwcm9qZWN0VGFza0RhdGUudHlwZT1cImRhdGVcIjtcbiAgICBwcm9qZWN0VGFza0RhdGUucmVxdWlyZWQ9dHJ1ZTtcblxuICAgIHByb2plY3RUYXNrQWRkQnV0dG9uLnR5cGU9XCJidXR0b25cIjtcbiAgICBwcm9qZWN0VGFza0NhbmNlbEJ1dHRvbi50eXBlPVwiYnV0dG9uXCI7XG5cbiAgICBwcm9qZWN0VGFza0FkZEJ1dHRvbi5pbm5lckhUTUw9XCJBRERcIjtcbiAgICBwcm9qZWN0VGFza0NhbmNlbEJ1dHRvbi5pbm5lckhUTUw9XCJDQU5DRUxcIjtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tUaXRsZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0RhdGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tBZGRCdXR0b24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tDYW5jZWxCdXR0b24pO1xuXG4gICAgcHJvamVjdFBhZ2UuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAvL3Byb2plY3RUYXNrQWRkQnV0dG9uIGV2ZW50IGxpc3RlbmVyXG4gICAgcHJvamVjdFRhc2tBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntuZXdQcm9qZWN0VGFza0FkZGVyKG5ld1Byb2plY3QpfSk7XG4gICAgXG4gICAgZmxhZz10cnVlO1xuICAgIHByb2plY3RUYXNrQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57Y2FuY2VsUHJvamVjdFRhc2tGb3JtKGZvcm0pfSk7XG4gICAgXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUYXNrRm9ybUZsYWdUb2dnbGUoKXtcbiAgICBmbGFnID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFByb2plY3RUYXNrRm9ybShmb3JtKXtcbiAgICBmb3JtLnJlbW92ZSgpO1xuICAgIGZsYWc9ZmFsc2U7XG59XG4iLCJpbXBvcnQge2ZsYWdTZXR0ZXJ9IGZyb20gXCIuL25ld1Rhc2tGb3JtLmpzXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0TGlzdCB9IGZyb20gXCIuL25ld1Byb2plY3QuanNcIjtcblxuZXhwb3J0IGxldCBhbGxUYXNrc0xpc3QgPSBbe3RpdGxlOiAnMCcsIGRhdGU6ICcyMDIyLTEyLTE1JywgdGFza05vOiAwLCB0YXNrSWQ6ICd0YXNrMCcsVW5pcXVlSWQ6LTF9LHt0aXRsZTogJzEnLCBkYXRlOiAnMjAyMi0xMi0xNScsIHRhc2tObzogMSwgdGFza0lkOiAndGFzazEnLFVuaXF1ZUlkOi0xfV07XG5cbmxldCBjb3VudD1hbGxUYXNrc0xpc3QubGVuZ3RoLTE7XG5cbmZ1bmN0aW9uIFRhc2tDcmVhdG9yKCl7XG4gICAgXG4gICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1RpdGxlXCIpLnZhbHVlO1xuICAgIGxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0RhdGVJbnB1dFwiKS52YWx1ZVxuXG4gICAgaWYodGFza1RpdGxlPT09XCJcIiB8fCB0YXNrRGF0ZT09PVwiXCIpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY291bnQrPTE7XG4gICAgbGV0IHRhc2tJZD1jb3VudDtcbiAgICBcbiAgICBsZXQgYWRkVGFzayA9IHt0aXRsZTp0YXNrVGl0bGUsZGF0ZTp0YXNrRGF0ZSx0YXNrTm86dGFza0lkLHRhc2tJZDpcInRhc2tcIit0YXNrSWQsVW5pcXVlSWQ6LTF9O1xuICAgIFxuICAgIGFsbFRhc2tzTGlzdC5wdXNoKGFkZFRhc2spO1xuICAgIFxuICAgIGZvcihsZXQgdGFzayBvZiBhbGxUYXNrc0xpc3Qpe1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkVGFzaztcbiAgICBcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Rhc2tBZGRlcigpe1xuXG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgbGV0IGFsbFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxUYXNrc0RpdlwiKTtcblxuICAgIC8vc3RvcmluZyBuZXdUYXNrXG4gICAgbGV0IG5ld1Rhc2sgPSBUYXNrQ3JlYXRvcigpO1xuXG4gICAgaWYobmV3VGFzaz09PXVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIGxldCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbmV3VGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgbmV3VGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG4gICAgbGV0IGRlbFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgLy8gYWRkaW5nIGNsYXNzZXMgdG8gdGhlIGNvbXBvbmVudHNcbiAgICBuZXdUYXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tDaGVja2JveFwiKTtcbiAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrRGl2XCIpO1xuICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChgJHtuZXdUYXNrLlVuaXF1ZUlkfWApO1xuXG4gICAgbmV3VGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Rhc2sudGFza0lkKTtcbiAgICBuZXdUYXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIixuZXdUYXNrLnRhc2tJZCk7XG4gICAgZGVsVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Rhc2sudGFza0lkKTtcblxuICAgIFxuICAgIG5ld1Rhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3VGFza1RpdGxlXCIpO1xuICAgIG5ld1Rhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrRGF0ZVwiKTtcblxuICAgIC8vc2V0aW5nIGNoZWtjYm94IHRwZVxuICAgIG5ld1Rhc2tDaGVja2JveC50eXBlPVwiY2hlY2tib3hcIjtcbiAgICBkZWxUYXNrQnRuLnR5cGU9XCJidXR0b25cIjtcblxuICAgIC8vZmlsbGluZyBpbiB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2tcbiAgICBuZXdUYXNrVGl0bGUuaW5uZXJIVE1MID0gbmV3VGFzay50aXRsZTtcbiAgICBuZXdUYXNrRGF0ZS5pbm5lckhUTUwgPSBuZXdUYXNrLmRhdGU7XG4gICAgZGVsVGFza0J0bi5pbm5lckhUTUw9XCJERUxcIjtcblxuICAgIC8vYWRkaW5nIGNvbnRlbnQgdG8gdGFza1xuICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0NoZWNrYm94KTtcbiAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGF0ZSk7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChkZWxUYXNrQnRuKTtcbiAgICBcbiAgICAvL2RlbGV0ZSB3aGVuIGNoZWNrYm94IGNsaWNrZWRcbiAgICBuZXdUYXNrQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIscmVtb3ZlRGl2KTtcbiAgICBkZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlbW92ZURpdik7XG5cbiAgICAvL2FkZGluZyB0byBhbGwgdGFza3MgcGFnZVxuICAgIGFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xuXG4gICAgLy9cbiAgICByZW1Gb3JtKCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURpdihuZXdUYXNrRGl2KXtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGxldCB0b1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdiMke3RoaXMuaWR9YCk7XG4gICAgY29uc29sZS5sb2codG9SZW1vdmUuY2xhc3NMaXN0WzFdKTtcbiAgICB0b1JlbW92ZS5yZW1vdmUoKTtcblxuICAgIGZvcihsZXQgdGFzayBvZiBhbGxUYXNrc0xpc3Qpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImltIGluXCIpXG4gICAgICAgIGlmKHRhc2sudGFza0lkPT09dGhpcy5pZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0cnVlKTtcbiAgICAgICAgICAgIGFsbFRhc2tzTGlzdC5zcGxpY2UoYWxsVGFza3NMaXN0LmluZGV4T2YodGFzayksMSk7XG4gICAgICAgIH1cbiAgICB9ICAgXG5cbiAgICBpZihhbGxQcm9qZWN0TGlzdC5sZW5ndGg9PT0wKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0TGlzdCl7XG5cbiAgICAgICAgaWYocHJvamVjdC5wcm9qZWN0VGFza3NMaXN0Lmxlbmd0aCE9PTApe1xuXG4gICAgICAgICAgICBmb3IobGV0IHByb2plY3RUYXNrIG9mIHByb2plY3QucHJvamVjdFRhc2tzTGlzdCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZigrdG9SZW1vdmUuY2xhc3NMaXN0WzFdPT09cHJvamVjdFRhc2suVW5pcXVlSWQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFib3V0IHRvIGdldCBjYW5jZWxsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdFRhc2tzTGlzdC5zcGxpY2UocHJvamVjdC5wcm9qZWN0VGFza3NMaXN0LmluZGV4T2YocHJvamVjdFRhc2spLDEpOyAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdExpc3QpO1xuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzTGlzdCk7XG5cbn1cblxuZnVuY3Rpb24gcmVtRm9ybSgpe1xuICAgIGxldCBmb3JtVG9CZVJlbW92ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtXCIpO1xuICAgIGZvcm1Ub0JlUmVtb3ZlZC5yZW1vdmUoKTtcbiAgICBmbGFnU2V0dGVyKClcbn0iLCJpbXBvcnQgbmV3VGFza0FkZGVyIGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCBUYXNrQ3JlYXRvciBmcm9tIFwiLi9uZXdUYXNrXCI7XG5cbmxldCBmbGFnID0gZmFsc2U7XG4vL3B1dCBpbnB1dCB0YWdzIGFuZCBidXR0b24gaW4gRk9STSB0YWcgdG8gbWFrZSByZXF1aXJlZCB3b3JrIGxhdGVyXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Rhc2tGb3JtKCl7XG5cbiAgICBpZihmbGFnPT09dHJ1ZSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYWxsVGFza3NQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGxUYXNrc1BhZ2VcIik7XG5cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IHRhc2tBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCB0YXNrQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2tGb3JtXCIpO1xuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICAgIHRhc2tEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2tEYXRlSW5wdXRcIik7XG4gICAgdGFza0FkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFza0FkZEJ1dHRvblwiKTtcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ2FuY2VsQnV0dG9uXCIpO1xuICAgIFxuICAgIHRhc2tUaXRsZS50eXBlPVwidGV4dFwiO1xuICAgIHRhc2tUaXRsZS5wbGFjZWhvbGRlcj1cIkVudGVyIHRhc2tcIjtcbiAgICB0YXNrVGl0bGUucmVxdWlyZWQ9dHJ1ZTtcblxuICAgIHRhc2tEYXRlSW5wdXQudHlwZT1cImRhdGVcIjtcbiAgICB0YXNrRGF0ZUlucHV0LnJlcXVpcmVkPXRydWU7XG5cbiAgICB0YXNrQWRkQnV0dG9uLnR5cGU9XCJidXR0b25cIjtcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLnR5cGU9XCJidXR0b25cIjtcblxuICAgIHRhc2tBZGRCdXR0b24uaW5uZXJIVE1MPVwiQUREXCI7XG4gICAgdGFza0NhbmNlbEJ1dHRvbi5pbm5lckhUTUw9XCJDQU5DRUxcIlxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrQWRkQnV0dG9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tDYW5jZWxCdXR0b24pO1xuICAgIGFsbFRhc2tzUGFnZS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXIgZm9yIGFkZFRhc2tcbiAgICB0YXNrQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG5ld1Rhc2tBZGRlcik7XG4gICAgZmxhZz10cnVlO1xuICAgIHRhc2tDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY2FuY2VsRm9ybSk7XG5cbn1cblxuZnVuY3Rpb24gY2FuY2VsRm9ybSgpe1xuICAgIGxldCBmb3JtVG9CZVJlbW92ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtXCIpO1xuICAgIGZvcm1Ub0JlUmVtb3ZlZC5yZW1vdmUoKTtcbiAgICBmbGFnPWZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhZ1NldHRlcigpe1xuICAgIGZsYWcgPSBmYWxzZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgYWxsVGFza0xvYWRlciBmcm9tIFwiLi9hbGxUYXNrcy5qc1wiO1xuaW1wb3J0IG5ld1Byb2plY3RGb3JtIGZyb20gXCIuL25ld1Byb2plY3RGb3JtLmpzXCI7XG5cbmxldCBhbGxUYXNrc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsVGFza3NcIik7XG5hbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixhbGxUYXNrTG9hZGVyKTtcblxubGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG5ld1Byb2plY3RGb3JtKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=