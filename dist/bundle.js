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
/* harmony export */   "default": () => (/* binding */ allTaskLoader)
/* harmony export */ });
/* harmony import */ var _newTaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskForm */ "./src/newTaskForm.js");
/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask.js */ "./src/newTask.js");



let content = document.querySelector("#content");
let flag = false;

function allTaskLoader(){

    if(flag===true){
        return;
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

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProjectAdder)
/* harmony export */ });
/* harmony import */ var _newProjectForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectForm.js */ "./src/newProjectForm.js");


let allProjectList = [];
let count = allProjectList.length-1;

function projectCreator(){

    let projectTitle = document.querySelector(".projectTitle").value;
    
    if(projectTitle===""){
        return;
    }

    count+=1
    let projectId = count;

    let addProject = {title:projectTitle,projectNo:projectId,projectId:"project"+projectId};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7VUM1REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3FCO0FBQ087O0FBRWpEO0FBQ0EscUNBQXFDLG9EQUFhOztBQUVsRDtBQUNBLHVDQUF1QywwREFBYyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FsbFRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld1Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbiNoZWFkaW5ne1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOjEvMztcXG59XFxuXFxuI3NpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbiNoZWFkaW5ne1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOjEvMztcXG59XFxuXFxuI3NpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBuZXdUYXNrRm9ybSBmcm9tIFwiLi9uZXdUYXNrRm9ybVwiO1xuaW1wb3J0IG5ld1Rhc2tBZGRlciwge2FsbFRhc2tzTGlzdCwgcmVtb3ZlRGl2fSBmcm9tIFwiLi9uZXdUYXNrLmpzXCI7XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xubGV0IGZsYWcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsVGFza0xvYWRlcigpe1xuXG4gICAgaWYoZmxhZz09PXRydWUpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9jcmVhdGluZyBkaXZzXG4gICAgbGV0IGFsbFRhc2tzUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGFsbFRhc2tzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBsZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBsZXQgYWxsVGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgLy9hZGRpbmcgY2xhc3NcbiAgICBhbGxUYXNrc1BhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcImFsbFRhc2tzUGFnZVwiKTtcbiAgICBhbGxUYXNrc0hlYWRpbmcuY2xhc3NMaXN0LmFkZChcImFsbFRhc2tzSGVhZGluZ1wiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrQnV0dG9uXCIpO1xuICAgIGFsbFRhc2tzRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGxUYXNrc0RpdlwiKTtcblxuICAgIC8vYWRkaW5nIHRleHQgY29udGVudFxuICAgIGFsbFRhc2tzSGVhZGluZy5pbm5lckhUTUwgPSBcIkFMTCBUQVNLU1wiO1xuICAgIGFkZFRhc2tCdXR0b24uaW5uZXJIVE1MID0gXCIrIEFERCBUQVNLXCI7XG5cbiAgICBhbGxUYXNrc1BhZ2UuYXBwZW5kQ2hpbGQoYWxsVGFza3NIZWFkaW5nKTtcbiAgICBhbGxUYXNrc1BhZ2UuYXBwZW5kQ2hpbGQoYWxsVGFza3NEaXYpOyAgICBcbiAgICBhbGxUYXNrc1BhZ2UuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFsbFRhc2tzUGFnZSk7XG5cbiAgICAvLyBldmVudCBsaXN0ZW5kZXIgZm9yIGFkZFRhc2tCdXR0b25cbiAgICBjb25zb2xlLmxvZyhhZGRUYXNrQnV0dG9uKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG5ld1Rhc2tGb3JtKTtcblxuICAgIHRhc2tMb2FkZXIoYWxsVGFza3NMaXN0KTtcblxuICAgIGZsYWc9dHJ1ZTtcbn1cblxuZnVuY3Rpb24gdGFza0xvYWRlcihhbGxUYXNrc0xpc3Qpe1xuXG4gICAgaWYoYWxsVGFza3NMaXN0Lmxlbmd0aD09PTApe1xuICAgICAgICBjb25zb2xlLmxvZygwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzTGlzdCk7XG5cbiAgICBmb3IobGV0IG5ld1Rhc2sgb2YgYWxsVGFza3NMaXN0KXtcblxuICAgICAgICBsZXQgYWxsVGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbFRhc2tzRGl2XCIpO1xuXG4gICAgICAgIGxldCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IG5ld1Rhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbGV0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsZXQgbmV3VGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG4gICAgICAgIGxldCBkZWxUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgICAvLyBhZGRpbmcgY2xhc3NlcyB0byB0aGUgY29tcG9uZW50c1xuICAgICAgICBuZXdUYXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tDaGVja2JveFwiKTtcbiAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibmV3VGFza0RpdlwiKTtcblxuICAgICAgICBuZXdUYXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsbmV3VGFzay50YXNrSWQpO1xuICAgICAgICBuZXdUYXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIixuZXdUYXNrLnRhc2tJZCk7XG4gICAgICAgIGRlbFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIixuZXdUYXNrLnRhc2tJZCk7XG4gICAgICAgIFxuICAgICAgICBuZXdUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tUaXRsZVwiKTtcbiAgICAgICAgbmV3VGFza0RhdGUuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tEYXRlXCIpO1xuXG4gICAgICAgIC8vc2V0aW5nIGNoZWtjYm94IHRwZVxuICAgICAgICBuZXdUYXNrQ2hlY2tib3gudHlwZT1cImNoZWNrYm94XCI7XG4gICAgICAgIGRlbFRhc2tCdG4udHlwZT1cImJ1dHRvblwiO1xuXG4gICAgICAgIC8vZmlsbGluZyBpbiB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2tcbiAgICAgICAgbmV3VGFza1RpdGxlLmlubmVySFRNTCA9IG5ld1Rhc2sudGl0bGU7XG4gICAgICAgIG5ld1Rhc2tEYXRlLmlubmVySFRNTCA9IG5ld1Rhc2suZGF0ZTtcbiAgICAgICAgZGVsVGFza0J0bi5pbm5lckhUTUw9XCJERUxcIjtcblxuICAgICAgICAvL2FkZGluZyBjb250ZW50IHRvIHRhc2tcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQ2hlY2tib3gpO1xuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG4gICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0RhdGUpO1xuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGRlbFRhc2tCdG4pO1xuICAgICAgICBcbiAgICAgICAgLy9kZWxldGUgd2hlbiBjaGVja2JveCBjbGlja2VkXG4gICAgICAgIG5ld1Rhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixyZW1vdmVEaXYpO1xuICAgICAgICBkZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlbW92ZURpdik7XG5cbiAgICAgICAgLy9hZGRpbmcgdG8gYWxsIHRhc2tzIHBhZ2VcbiAgICAgICAgYWxsVGFza3NEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtwcm9qRmxhZ1NldHRlcn0gZnJvbSBcIi4vbmV3UHJvamVjdEZvcm0uanNcIjtcblxubGV0IGFsbFByb2plY3RMaXN0ID0gW107XG5sZXQgY291bnQgPSBhbGxQcm9qZWN0TGlzdC5sZW5ndGgtMTtcblxuZnVuY3Rpb24gcHJvamVjdENyZWF0b3IoKXtcblxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUaXRsZVwiKS52YWx1ZTtcbiAgICBcbiAgICBpZihwcm9qZWN0VGl0bGU9PT1cIlwiKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvdW50Kz0xXG4gICAgbGV0IHByb2plY3RJZCA9IGNvdW50O1xuXG4gICAgbGV0IGFkZFByb2plY3QgPSB7dGl0bGU6cHJvamVjdFRpdGxlLHByb2plY3RObzpwcm9qZWN0SWQscHJvamVjdElkOlwicHJvamVjdFwiK3Byb2plY3RJZH07XG5cbiAgICBhbGxQcm9qZWN0TGlzdC5wdXNoKGFkZFByb2plY3QpO1xuXG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RMaXN0KXtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZFByb2plY3RcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0QWRkZXIoKXtcblxuICAgIGxldCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsUHJvamVjdHNcIik7XG5cbiAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RDcmVhdG9yKCk7XG5cbiAgICBpZihuZXdQcm9qZWN0PT09dW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGRlbFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdERpdlwiKTtcblxuICAgIG5ld1Byb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIixuZXdQcm9qZWN0LnByb2plY3RJZCk7XG4gICAgZGVsUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5ld1Byb2plY3QucHJvamVjdElkKTtcblxuICAgIG5ld1Byb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdFRpdGxlXCIpO1xuXG4gICAgLy9zZXR0aW5nIHR5cGVcbiAgICBkZWxQcm9qZWN0QnRuLnR5cGU9XCJidXR0b25cIjtcblxuICAgIC8vYWRkaW5nIHRleHQ7XG4gICAgbmV3UHJvamVjdFRpdGxlLmlubmVySFRNTD1uZXdQcm9qZWN0LnRpdGxlO1xuICAgIGRlbFByb2plY3RCdG4uaW5uZXJIVE1MPVwiREVMXCI7XG5cbiAgICAvL2FwcGVuZGluZyBjaGlsZHJlbjtcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZSk7XG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxQcm9qZWN0QnRuKTtcblxuICAgIGRlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIscmVtUHJvamVjdCk7XG5cbiAgICBhbGxQcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcblxuICAgIHJlbVByb2plY3RGb3JtKCk7XG59XG5cblxuXG5mdW5jdGlvbiByZW1Qcm9qZWN0KCl7XG4gICAgbGV0IHByb2plY3RUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdiMke3RoaXMuaWR9YCk7XG4gICAgcHJvamVjdFRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgIGZvcihsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0TGlzdCl7XG4gICAgICAgIGlmKHByb2plY3QucHJvamVjdElkPT09dGhpcy5pZCl7XG4gICAgICAgICAgICBhbGxQcm9qZWN0TGlzdC5zcGxpY2UoYWxsUHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0KSwxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RMaXN0KTtcblxufVxuXG5mdW5jdGlvbiByZW1Qcm9qZWN0Rm9ybSgpe1xuICAgIGxldCBwcm9qZWN0Rm9ybVRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVwiKTtcbiAgICBwcm9qZWN0Rm9ybVRvUmVtb3ZlLnJlbW92ZSgpXG4gICAgcHJvakZsYWdTZXR0ZXIoKTtcblxufSIsImltcG9ydCBuZXdQcm9qZWN0QWRkZXIgZnJvbSBcIi4vbmV3UHJvamVjdC5qc1wiO1xuXG5sZXQgZmxhZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpe1xuXG4gICAgaWYoZmxhZz09PXRydWUpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7IFxuICAgIFxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgcHJvamVjdEFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IHByb2plY3RDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRpdGxlXCIpO1xuICAgIHByb2plY3RBZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RBZGRCdXR0b25cIik7XG4gICAgcHJvamVjdENhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENhbmNlbEJ1dHRvblwiKTtcblxuICAgIHByb2plY3RUaXRsZS50eXBlPVwidGV4dFwiO1xuICAgIHByb2plY3RUaXRsZS5wbGFjZWhvbGRlcj1cIkVudGVyIFByb2plY3QgTmFtZVwiO1xuICAgIHByb2plY3RUaXRsZS5yZXF1aXJlZD10cnVlO1xuXG4gICAgcHJvamVjdEFkZEJ1dHRvbi50eXBlPVwiYnV0dG9uXCI7XG4gICAgcHJvamVjdENhbmNlbEJ1dHRvbi50eXBlPVwiYnV0dG9uXCI7XG5cbiAgICBwcm9qZWN0QWRkQnV0dG9uLmlubmVySFRNTD1cIkFERFwiO1xuICAgIHByb2plY3RDYW5jZWxCdXR0b24uaW5uZXJIVE1MPVwiQ0FOQ0VMXCI7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnV0dG9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RDYW5jZWxCdXR0b24pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBwcm9qZWN0QWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG5ld1Byb2plY3RBZGRlcik7XG4gICAgZmxhZyA9IHRydWU7XG4gICAgcHJvamVjdENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjYW5jZWxQcm9qZWN0Rm9ybSk7XG5cblxufVxuXG5mdW5jdGlvbiBjYW5jZWxQcm9qZWN0Rm9ybSgpe1xuICAgIGxldCBmb3JtVG9CZVJlbW92ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xuICAgIGZvcm1Ub0JlUmVtb3ZlZC5yZW1vdmUoKTtcbiAgICBmbGFnPWZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvakZsYWdTZXR0ZXIoKXtcbiAgICBmbGFnID0gZmFsc2U7XG59XG4iLCJpbXBvcnQge2ZsYWdTZXR0ZXJ9IGZyb20gXCIuL25ld1Rhc2tGb3JtLmpzXCI7XG5cbmV4cG9ydCBsZXQgYWxsVGFza3NMaXN0ID0gW3t0aXRsZTogJzAnLCBkYXRlOiAnMjAyMi0xMi0xNScsIHRhc2tObzogMCwgdGFza0lkOiAndGFzazAnfSx7dGl0bGU6ICcxJywgZGF0ZTogJzIwMjItMTItMTUnLCB0YXNrTm86IDEsIHRhc2tJZDogJ3Rhc2sxJ31dO1xuXG5sZXQgY291bnQ9YWxsVGFza3NMaXN0Lmxlbmd0aC0xO1xuXG5mdW5jdGlvbiBUYXNrQ3JlYXRvcigpe1xuICAgIFxuICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tUaXRsZVwiKS52YWx1ZTtcbiAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tEYXRlSW5wdXRcIikudmFsdWVcblxuICAgIGlmKHRhc2tUaXRsZT09PVwiXCIgfHwgdGFza0RhdGU9PT1cIlwiKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvdW50Kz0xO1xuICAgIGxldCB0YXNrSWQ9Y291bnQ7XG4gICAgXG4gICAgbGV0IGFkZFRhc2sgPSB7dGl0bGU6dGFza1RpdGxlLGRhdGU6dGFza0RhdGUsdGFza05vOnRhc2tJZCx0YXNrSWQ6XCJ0YXNrXCIrdGFza0lkfTtcbiAgICBcbiAgICBhbGxUYXNrc0xpc3QucHVzaChhZGRUYXNrKTtcbiAgICBcbiAgICBmb3IobGV0IHRhc2sgb2YgYWxsVGFza3NMaXN0KXtcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZFRhc2s7XG4gICAgXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdUYXNrQWRkZXIoKXtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGxldCBhbGxUYXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsVGFza3NEaXZcIik7XG5cbiAgICAvL3N0b3JpbmcgbmV3VGFza1xuICAgIGxldCBuZXdUYXNrID0gVGFza0NyZWF0b3IoKTtcblxuICAgIGlmKG5ld1Rhc2s9PT11bmRlZmluZWQpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICBsZXQgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IG5ld1Rhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuICAgIGxldCBkZWxUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIC8vIGFkZGluZyBjbGFzc2VzIHRvIHRoZSBjb21wb25lbnRzXG4gICAgbmV3VGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrQ2hlY2tib3hcIik7XG4gICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibmV3VGFza0RpdlwiKTtcblxuICAgIG5ld1Rhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIixuZXdUYXNrLnRhc2tJZCk7XG4gICAgbmV3VGFza0NoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsbmV3VGFzay50YXNrSWQpO1xuICAgIGRlbFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIixuZXdUYXNrLnRhc2tJZCk7XG4gICAgXG4gICAgbmV3VGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrVGl0bGVcIik7XG4gICAgbmV3VGFza0RhdGUuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tEYXRlXCIpO1xuXG4gICAgLy9zZXRpbmcgY2hla2Nib3ggdHBlXG4gICAgbmV3VGFza0NoZWNrYm94LnR5cGU9XCJjaGVja2JveFwiO1xuICAgIGRlbFRhc2tCdG4udHlwZT1cImJ1dHRvblwiO1xuXG4gICAgLy9maWxsaW5nIGluIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFza1xuICAgIG5ld1Rhc2tUaXRsZS5pbm5lckhUTUwgPSBuZXdUYXNrLnRpdGxlO1xuICAgIG5ld1Rhc2tEYXRlLmlubmVySFRNTCA9IG5ld1Rhc2suZGF0ZTtcbiAgICBkZWxUYXNrQnRuLmlubmVySFRNTD1cIkRFTFwiO1xuXG4gICAgLy9hZGRpbmcgY29udGVudCB0byB0YXNrXG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQ2hlY2tib3gpO1xuICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza1RpdGxlKTtcbiAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlKTtcbiAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGRlbFRhc2tCdG4pO1xuICAgIFxuICAgIC8vZGVsZXRlIHdoZW4gY2hlY2tib3ggY2xpY2tlZFxuICAgIG5ld1Rhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixyZW1vdmVEaXYpO1xuICAgIGRlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIscmVtb3ZlRGl2KTtcblxuICAgIC8vYWRkaW5nIHRvIGFsbCB0YXNrcyBwYWdlXG4gICAgYWxsVGFza3NEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XG5cbiAgICAvL1xuICAgIHJlbUZvcm0oKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRGl2KCl7XG5cbiAgICBsZXQgdG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYjJHt0aGlzLmlkfWApO1xuICAgIHRvUmVtb3ZlLnJlbW92ZSgpO1xuXG4gICAgZm9yKGxldCB0YXNrIG9mIGFsbFRhc2tzTGlzdCl7XG4gICAgICAgIGlmKHRhc2sudGFza0lkPT09dGhpcy5pZCl7XG4gICAgICAgICAgICBhbGxUYXNrc0xpc3Quc3BsaWNlKGFsbFRhc2tzTGlzdC5pbmRleE9mKHRhc2spLDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYWxsVGFza3NMaXN0KTtcblxufVxuXG5mdW5jdGlvbiByZW1Gb3JtKCl7XG4gICAgbGV0IGZvcm1Ub0JlUmVtb3ZlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0Zvcm1cIik7XG4gICAgZm9ybVRvQmVSZW1vdmVkLnJlbW92ZSgpO1xuICAgIGZsYWdTZXR0ZXIoKVxufSIsImltcG9ydCBuZXdUYXNrQWRkZXIgZnJvbSBcIi4vbmV3VGFza1wiO1xuaW1wb3J0IFRhc2tDcmVhdG9yIGZyb20gXCIuL25ld1Rhc2tcIjtcblxubGV0IGZsYWcgPSBmYWxzZTtcbi8vcHV0IGlucHV0IHRhZ3MgYW5kIGJ1dHRvbiBpbiBGT1JNIHRhZyB0byBtYWtlIHJlcXVpcmVkIHdvcmsgbGF0ZXJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3VGFza0Zvcm0oKXtcblxuICAgIGlmKGZsYWc9PT10cnVlKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBhbGxUYXNrc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFRhc2tzUGFnZVwiKTtcblxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgdGFza0FkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IHRhc2tDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidGFza0Zvcm1cIik7XG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gICAgdGFza0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFza0RhdGVJbnB1dFwiKTtcbiAgICB0YXNrQWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQWRkQnV0dG9uXCIpO1xuICAgIHRhc2tDYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2tDYW5jZWxCdXR0b25cIik7XG4gICAgXG4gICAgdGFza1RpdGxlLnR5cGU9XCJ0ZXh0XCI7XG4gICAgdGFza1RpdGxlLnBsYWNlaG9sZGVyPVwiRW50ZXIgdGFza1wiO1xuICAgIHRhc2tUaXRsZS5yZXF1aXJlZD10cnVlO1xuXG4gICAgdGFza0RhdGVJbnB1dC50eXBlPVwiZGF0ZVwiO1xuICAgIHRhc2tEYXRlSW5wdXQucmVxdWlyZWQ9dHJ1ZTtcblxuICAgIHRhc2tBZGRCdXR0b24udHlwZT1cImJ1dHRvblwiO1xuICAgIHRhc2tDYW5jZWxCdXR0b24udHlwZT1cImJ1dHRvblwiO1xuXG4gICAgdGFza0FkZEJ1dHRvbi5pbm5lckhUTUw9XCJBRERcIjtcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLmlubmVySFRNTD1cIkNBTkNFTFwiXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tBZGRCdXR0b24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0NhbmNlbEJ1dHRvbik7XG4gICAgYWxsVGFza3NQYWdlLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBmb3IgYWRkVGFza1xuICAgIHRhc2tBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbmV3VGFza0FkZGVyKTtcbiAgICBmbGFnPXRydWU7XG4gICAgdGFza0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjYW5jZWxGb3JtKTtcblxufVxuXG5mdW5jdGlvbiBjYW5jZWxGb3JtKCl7XG4gICAgbGV0IGZvcm1Ub0JlUmVtb3ZlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0Zvcm1cIik7XG4gICAgZm9ybVRvQmVSZW1vdmVkLnJlbW92ZSgpO1xuICAgIGZsYWc9ZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGFnU2V0dGVyKCl7XG4gICAgZmxhZyA9IGZhbHNlO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBhbGxUYXNrTG9hZGVyIGZyb20gXCIuL2FsbFRhc2tzLmpzXCI7XG5pbXBvcnQgbmV3UHJvamVjdEZvcm0gZnJvbSBcIi4vbmV3UHJvamVjdEZvcm0uanNcIjtcblxubGV0IGFsbFRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGxUYXNrc1wiKTtcbmFsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFsbFRhc2tMb2FkZXIpO1xuXG5sZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbmV3UHJvamVjdEZvcm0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==