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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --duration: .1s\r\n}\r\n\r\nhtml {\r\n    font-size: 20px;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.fa-github:hover {\r\n    -webkit-transition: all 0.5s ease-out;\r\n  -moz-transition: all 0.5s ease-out;\r\n  -o-transition: all 0.5s ease-out;\r\n    transition: all 0.5s ease-out;\r\n    background:#fff;\r\n    color:#000;\r\n    transform: rotate(360deg);\r\n    background-color: rgb(157, 157, 255);\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n\r\n}\r\n\r\n/* .thumbtackhover {\r\n    -webkit-transition: all var(--duration) linear;\r\n    -moz-transition: all var(--duration) linear;\r\n    -o-transition: all var(--duration) linear;\r\n    transition: all var(--duration) linear;\r\n    background:#fff;\r\n    color:#000;\r\n    background-color: rgb(157, 157, 255);\r\n}\r\n\r\n.squarehover {\r\n    -webkit-transition: all var(--duration) linear;\r\n    -moz-transition: all var(--duration) linear;\r\n    -o-transition: all var(--duration) linear;\r\n    transition: all var(--duration) linear;\r\n    background:#fff;\r\n    color:#000;\r\n    background-color: rgb(157, 157, 255);\r\n} */\r\n\r\n.mainbody {\r\n    display: grid;\r\n    grid-template-columns: 2fr 5fr;\r\n    background-color: rgb(157, 157, 255);\r\n    height: 85vh;\r\n    padding: 20px;\r\n    gap: 20px;\r\n}\r\n\r\n.header {\r\n    background-color: rgb(73, 70, 255);\r\n    height: 4vh;\r\n    padding: 20px 30px;\r\n    color: rgb(188, 224, 255);\r\n    font-size: 40px;\r\n}\r\n\r\nfooter {\r\n    height: 3vh;\r\n    background-color: rgb(157, 157, 255);\r\n    text-align: center;\r\n    top: 2px;\r\n    font-weight: 700;\r\n}\r\n\r\n.sidebar, .taskbar {\r\n    background-color: rgb(210, 210, 255);\r\n    padding: 20px;\r\n}\r\n\r\n\r\n.newfolderbtn:hover, .newtasksbtn:hover {\r\n    -webkit-transition: all var(--duration) linear;\r\n    -moz-transition: all var(--duration) linear;\r\n    -o-transition: all var(--duration) linear;\r\n    transition: all var(--duration) linear;\r\n    transform: scale(1.008);\r\n    box-shadow: 1px 1px 1px 1px;\r\n    font-size: 22px;\r\n}\r\n\r\n.newfolderbtn, .newtasksbtn {\r\n    border-radius: 5px;\r\n    border: #000 solid 1px;\r\n    padding: 15px;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}\r\n\r\n.sidebarfolder, .taskbartasks {\r\n    margin-top: 15px;\r\n    border-radius: 5px;\r\n    border: #000 solid 1px;\r\n    padding: 15px;\r\n    height: 69vh;\r\n    overflow-y: auto;\r\n}\r\n\r\n.folder {\r\n    height: 30px;\r\n    margin: 5px 0px;\r\n}\r\n\r\n.folder:hover {\r\n    -webkit-transition: all var(--duration) linear;\r\n    -moz-transition: all var(--duration) linear;\r\n    -o-transition: all var(--duration) linear;\r\n    transition: all var(--duration) linear;\r\n    font-weight: bolder;\r\n    padding-left: 5px;\r\n}\r\n\r\n.focused {\r\n    font-weight: bolder;\r\n    padding-left: 5px;\r\n}\r\n\r\n.focusedtask {\r\n    background-color: rgb(248, 193, 193);\r\n    z-index: 2;\r\n    visibility: visible !important;\r\n}\r\n\r\n.tasklistgeneral{\r\n    height: 69%;\r\n    width: 65.3%;\r\n    position: absolute;\r\n    overflow-y: auto;\r\n}\r\n\r\n.backgrounddiv {\r\n    top: 0;\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #000;\r\n    opacity: 60%;\r\n}\r\n\r\n#newtaskwin {\r\n    position: absolute;\r\n    height: 30vh;\r\n    width: 50vw;\r\n    top: 30%;\r\n    left: 25%;\r\n    background-color: cornflowerblue;\r\n    text-align: center;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.done {\r\n    opacity: 50%;\r\n    text-decoration: line-through;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI;AACJ;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;EACvC,kCAAkC;EAClC,gCAAgC;IAC9B,6BAA6B;IAC7B,eAAe;IACf,UAAU;IACV,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;IACI,SAAS;;AAEb;;AAEA;;;;;;;;;;;;;;;;;;GAkBG;;AAEH;IACI,aAAa;IACb,8BAA8B;IAC9B,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,oCAAoC;IACpC,kBAAkB;IAClB,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,aAAa;AACjB;;;AAGA;IACI,8CAA8C;IAC9C,2CAA2C;IAC3C,yCAAyC;IACzC,sCAAsC;IACtC,uBAAuB;IACvB,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,8CAA8C;IAC9C,2CAA2C;IAC3C,yCAAyC;IACzC,sCAAsC;IACtC,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;IACpC,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,MAAM;IACN,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,6BAA6B;AACjC","sourcesContent":[":root {\r\n    --duration: .1s\r\n}\r\n\r\nhtml {\r\n    font-size: 20px;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.fa-github:hover {\r\n    -webkit-transition: all 0.5s ease-out;\r\n  -moz-transition: all 0.5s ease-out;\r\n  -o-transition: all 0.5s ease-out;\r\n    transition: all 0.5s ease-out;\r\n    background:#fff;\r\n    color:#000;\r\n    transform: rotate(360deg);\r\n    background-color: rgb(157, 157, 255);\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n\r\n}\r\n\r\n/* .thumbtackhover {\r\n    -webkit-transition: all var(--duration) linear;\r\n    -moz-transition: all var(--duration) linear;\r\n    -o-transition: all var(--duration) linear;\r\n    transition: all var(--duration) linear;\r\n    background:#fff;\r\n    color:#000;\r\n    background-color: rgb(157, 157, 255);\r\n}\r\n\r\n.squarehover {\r\n    -webkit-transition: all var(--duration) linear;\r\n    -moz-transition: all var(--duration) linear;\r\n    -o-transition: all var(--duration) linear;\r\n    transition: all var(--duration) linear;\r\n    background:#fff;\r\n    color:#000;\r\n    background-color: rgb(157, 157, 255);\r\n} */\r\n\r\n.mainbody {\r\n    display: grid;\r\n    grid-template-columns: 2fr 5fr;\r\n    background-color: rgb(157, 157, 255);\r\n    height: 85vh;\r\n    padding: 20px;\r\n    gap: 20px;\r\n}\r\n\r\n.header {\r\n    background-color: rgb(73, 70, 255);\r\n    height: 4vh;\r\n    padding: 20px 30px;\r\n    color: rgb(188, 224, 255);\r\n    font-size: 40px;\r\n}\r\n\r\nfooter {\r\n    height: 3vh;\r\n    background-color: rgb(157, 157, 255);\r\n    text-align: center;\r\n    top: 2px;\r\n    font-weight: 700;\r\n}\r\n\r\n.sidebar, .taskbar {\r\n    background-color: rgb(210, 210, 255);\r\n    padding: 20px;\r\n}\r\n\r\n\r\n.newfolderbtn:hover, .newtasksbtn:hover {\r\n    -webkit-transition: all var(--duration) linear;\r\n    -moz-transition: all var(--duration) linear;\r\n    -o-transition: all var(--duration) linear;\r\n    transition: all var(--duration) linear;\r\n    transform: scale(1.008);\r\n    box-shadow: 1px 1px 1px 1px;\r\n    font-size: 22px;\r\n}\r\n\r\n.newfolderbtn, .newtasksbtn {\r\n    border-radius: 5px;\r\n    border: #000 solid 1px;\r\n    padding: 15px;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}\r\n\r\n.sidebarfolder, .taskbartasks {\r\n    margin-top: 15px;\r\n    border-radius: 5px;\r\n    border: #000 solid 1px;\r\n    padding: 15px;\r\n    height: 69vh;\r\n    overflow-y: auto;\r\n}\r\n\r\n.folder {\r\n    height: 30px;\r\n    margin: 5px 0px;\r\n}\r\n\r\n.folder:hover {\r\n    -webkit-transition: all var(--duration) linear;\r\n    -moz-transition: all var(--duration) linear;\r\n    -o-transition: all var(--duration) linear;\r\n    transition: all var(--duration) linear;\r\n    font-weight: bolder;\r\n    padding-left: 5px;\r\n}\r\n\r\n.focused {\r\n    font-weight: bolder;\r\n    padding-left: 5px;\r\n}\r\n\r\n.focusedtask {\r\n    background-color: rgb(248, 193, 193);\r\n    z-index: 2;\r\n    visibility: visible !important;\r\n}\r\n\r\n.tasklistgeneral{\r\n    height: 69%;\r\n    width: 65.3%;\r\n    position: absolute;\r\n    overflow-y: auto;\r\n}\r\n\r\n.backgrounddiv {\r\n    top: 0;\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #000;\r\n    opacity: 60%;\r\n}\r\n\r\n#newtaskwin {\r\n    position: absolute;\r\n    height: 30vh;\r\n    width: 50vw;\r\n    top: 30%;\r\n    left: 25%;\r\n    background-color: cornflowerblue;\r\n    text-align: center;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.done {\r\n    opacity: 50%;\r\n    text-decoration: line-through;\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/folder.js":
/*!***********************!*\
  !*** ./src/folder.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newfolder": () => (/* binding */ newfolder)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


let folders = [];

function newfolder (name) {
    let foldername = prompt('What is the name of the folder? Please limit to 5 words');
    let taskslist = `tasklist${folders.length}`;
    
    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.newtasklist)(`tasklist${folders.length}`);

    let folder = document.createElement('div');
    folder.classList.add(`folder`);
    folder.id = `tasklist${folders.length}`    
    folder.innerText = foldername;
    folder.addEventListener('click', function(){
        for (let f of document.querySelectorAll('.folder')){
            f.classList.remove('focused');
        }
        this.classList.add('focused');
    })
    folder.addEventListener('click', function(){
        for (let f of document.querySelectorAll('.folder')){
            f.classList.remove('focused');
        }
        this.classList.add('focused');
    });
    folder.addEventListener('click', function(){
        if (document.getElementById('visible'))
        document.getElementById('visible').id = '';
        for (let n of document.querySelectorAll('.tasklistgeneral')){
            n.style.visibility = 'hidden';
        }
        document.querySelector(`.${this.id}`).style.visibility =' visible';
        document.querySelector(`.${this.id}`).id = 'visible';    })

    for (let f of document.querySelectorAll('.folder')){
        f.classList.remove('focused');
    };
    folder.classList.add('focused');
    document.querySelector('.sidebarfolder').appendChild(folder);
    folders.push(foldername);
}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createtaskwindow": () => (/* binding */ createtaskwindow),
/* harmony export */   "deleteme": () => (/* binding */ deleteme),
/* harmony export */   "newtasklist": () => (/* binding */ newtasklist)
/* harmony export */ });
let tasklists = [];

function newtasklist(listnumber){
    let tasknewlist = document.createElement('div');
    tasknewlist.classList.add(listnumber);
    tasknewlist.classList.add('tasklistgeneral');
    tasknewlist.addEventListener('contextmenu', event => event.preventDefault());
    document.querySelector('.taskbartasks').appendChild(tasknewlist);
    for (let n of document.querySelectorAll('.tasklistgeneral')){
        n.style.visibility = 'hidden';
    }
    tasknewlist.style.visibility = 'visible';
    if (document.getElementById('visible'))
        document.getElementById('visible').id = '';
    tasknewlist.id = 'visible';
}

function createtaskwindow() {
    let backgrounddiv = document.createElement('div');
    backgrounddiv.classList.add('backgrounddiv');
    backgrounddiv.addEventListener('click', function(){
        backgrounddiv.remove();
        newtaskwindow.remove();
    })
    document.querySelector('body').appendChild(backgrounddiv);

    let newtaskwindow = document.createElement('div');
    newtaskwindow.innerHTML = `<form id="newtaskwin" action="none"><br><label for="taskdesc">Task Description. Max 100 characters</label><br>
    <input type="text" id="taskdesc" placeholder="Feed Mellow" maxlength="100" style="height:20px; width: 400px;"><br><br>
    <label for="taskdate">Due Date</label><br>
    <input type="date" id="taskdate"><br><br>
    <label for="taskurgency">Urgency</label><br>
    <select name="taskimportance" id="taskurgency">
        <option value="No" style="background-color: rgb(190, 255, 190);">Not Urgent</option>
        <option value="Maybe" style="background-color: rgb(254, 255, 190);">Somewhat</option>
        <option value="Yes" style="background-color: rgb(255, 190, 190);">Urgent</option>
    </select><br><br>
    <input type="submit" value="Add Task"></form>`;
    document.querySelector('body').appendChild(newtaskwindow);
    document.querySelector('form').addEventListener("submit", newtask, true);
}  

var newtask = function(event){
    event.preventDefault();
    let taskdesc = document.querySelector('#taskdesc').value;
    let taskdate = document.querySelector('#taskdate').value;
    let taskurgent = document.querySelector('#taskurgency').value;

    let taskdiv = document.createElement('div');
    taskdiv.innerHTML = `${taskdesc} <span>${taskdate}</span>`;
    if (taskurgent == 'Yes'){
        taskdiv.style.backgroundColor = 'rgb(255, 190, 190)'
    } else if (taskurgent == 'Maybe'){
        taskdiv.style.backgroundColor = 'rgb(254, 255, 190)'
    } else {
        taskdiv.style.backgroundColor = 'rgb(190, 255, 190)'
    }
    taskdiv.classList.add('task');

    taskdiv.addEventListener('click', function(){
        if (this.classList.contains('done')){
            this.classList.remove('done');  
        } else {
            this.classList.add('done');
        }
    })
    taskdiv.addEventListener('contextmenu', event => event.preventDefault());
    taskdiv.addEventListener('auxclick', function(e) {
        if (e.button == 2) {
            this.remove();
    }})
    taskdesc = '';
    document.querySelector('#visible').appendChild(taskdiv);

}

function deleteme(e){
    e.parentNode.remove();
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
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.js */ "./src/folder.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");




let user = prompt('Welcome to your to do list! What is your name?');
if (user == '') {
    user = 'User';
}

const headerbar = document.createElement('div');
const mainbody = document.createElement('div');
document.querySelector('body').appendChild(headerbar);
document.querySelector('body').appendChild(mainbody);

mainbody.classList.add('mainbody');
headerbar.classList.add('header');
headerbar.innerHTML = `Welcome, <span style="color: yellow;">${user}</span>`;

const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
mainbody.appendChild(sidebar);

const newfolderbtn = document.createElement('div');
newfolderbtn.classList.add('newfolderbtn')
newfolderbtn.innerHTML =`<i class="fa-solid fa-square-plus fa-xl">📋</i> New Folder`;
sidebar.appendChild(newfolderbtn);

const sidebarfolder = document.createElement('div');
sidebarfolder.classList.add('sidebarfolder');
sidebar.appendChild(sidebarfolder);

const taskbar = document.createElement('div');
taskbar.classList.add('taskbar');
mainbody.appendChild(taskbar);

const newtasksbtn = document.createElement('div');
newtasksbtn.classList.add('newtasksbtn'); 
newtasksbtn.innerHTML ='<i class="fa-solid fa-thumbtack fa-xl">📝</i> New task';
taskbar.appendChild(newtasksbtn);

let taskbartasks = document.createElement('div');
taskbartasks.classList.add('taskbartasks');
taskbar.appendChild(taskbartasks);

const footer = document.createElement('footer');
footer.innerHTML= `Copyright @ ${(new Date().getFullYear())} Phuoc Nguyen <a href="https://github.com/pnguyen-81"><i class="fa-brands fa-github">👾</i></a>`;
document.querySelector('html').appendChild(footer);

newfolderbtn.addEventListener('click', _folder_js__WEBPACK_IMPORTED_MODULE_1__.newfolder);

newtasksbtn.addEventListener('click', _task_js__WEBPACK_IMPORTED_MODULE_2__.createtaskwindow);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDRCQUE0QjtBQUM3RDtBQUNBO0FBQ0EsdUNBQXVDLGlEQUFTO0FBQ2hEO0FBQ0Esc0NBQXNDLHNEQUFnQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9sZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tZHVyYXRpb246IC4xc1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5mYS1naXRodWI6aG92ZXIge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcXHJcXG4gICAgYmFja2dyb3VuZDojZmZmO1xcclxcbiAgICBjb2xvcjojMDAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU3LCAxNTcsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogLnRodW1idGFja2hvdmVyIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIHZhcigtLWR1cmF0aW9uKSBsaW5lYXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XFxyXFxuICAgIGNvbG9yOiMwMDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTcsIDE1NywgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZWhvdmVyIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIHZhcigtLWR1cmF0aW9uKSBsaW5lYXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XFxyXFxuICAgIGNvbG9yOiMwMDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTcsIDE1NywgMjU1KTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLm1haW5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU3LCAxNTcsIDI1NSk7XFxyXFxuICAgIGhlaWdodDogODV2aDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCA3MCwgMjU1KTtcXHJcXG4gICAgaGVpZ2h0OiA0dmg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG4gICAgY29sb3I6IHJnYigxODgsIDIyNCwgMjU1KTtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBoZWlnaHQ6IDN2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NywgMTU3LCAyNTUpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRvcDogMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciwgLnRhc2tiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDI1NSk7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5uZXdmb2xkZXJidG46aG92ZXIsIC5uZXd0YXNrc2J0bjpob3ZlciB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIHZhcigtLWR1cmF0aW9uKSBsaW5lYXI7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIHZhcigtLWR1cmF0aW9uKSBsaW5lYXI7XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwOCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Zm9sZGVyYnRuLCAubmV3dGFza3NidG4ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogIzAwMCBzb2xpZCAxcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXJmb2xkZXIsIC50YXNrYmFydGFza3Mge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogIzAwMCBzb2xpZCAxcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGhlaWdodDogNjl2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvbGRlciB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9sZGVyOmhvdmVyIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIHZhcigtLWR1cmF0aW9uKSBsaW5lYXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvY3VzZWQge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvY3VzZWR0YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMTkzLCAxOTMpO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrbGlzdGdlbmVyYWx7XFxyXFxuICAgIGhlaWdodDogNjklO1xcclxcbiAgICB3aWR0aDogNjUuMyU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmRkaXYge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgICBvcGFjaXR5OiA2MCU7XFxyXFxufVxcclxcblxcclxcbiNuZXd0YXNrd2luIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDMwdmg7XFxyXFxuICAgIHdpZHRoOiA1MHZ3O1xcclxcbiAgICB0b3A6IDMwJTtcXHJcXG4gICAgbGVmdDogMjUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmUge1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQ0FBcUM7RUFDdkMsa0NBQWtDO0VBQ2xDLGdDQUFnQztJQUM5Qiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksU0FBUzs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSw4Q0FBOEM7SUFDOUMsMkNBQTJDO0lBQzNDLHlDQUF5QztJQUN6QyxzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsMkNBQTJDO0lBQzNDLHlDQUF5QztJQUN6QyxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1kdXJhdGlvbjogLjFzXFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XFxyXFxuICAgIGNvbG9yOiMwMDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTcsIDE1NywgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiAudGh1bWJ0YWNraG92ZXIge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLWR1cmF0aW9uKSBsaW5lYXI7XFxyXFxuICAgIGJhY2tncm91bmQ6I2ZmZjtcXHJcXG4gICAgY29sb3I6IzAwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NywgMTU3LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlaG92ZXIge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLWR1cmF0aW9uKSBsaW5lYXI7XFxyXFxuICAgIGJhY2tncm91bmQ6I2ZmZjtcXHJcXG4gICAgY29sb3I6IzAwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NywgMTU3LCAyNTUpO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4ubWFpbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTcsIDE1NywgMjU1KTtcXHJcXG4gICAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDcwLCAyNTUpO1xcclxcbiAgICBoZWlnaHQ6IDR2aDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbiAgICBjb2xvcjogcmdiKDE4OCwgMjI0LCAyNTUpO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGhlaWdodDogM3ZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU3LCAxNTcsIDI1NSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdG9wOiAycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLCAudGFza2JhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjU1KTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm5ld2ZvbGRlcmJ0bjpob3ZlciwgLm5ld3Rhc2tzYnRuOmhvdmVyIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIHZhcigtLWR1cmF0aW9uKSBsaW5lYXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA4KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4O1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5uZXdmb2xkZXJidG4sIC5uZXd0YXNrc2J0biB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAjMDAwIHNvbGlkIDFweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhcmZvbGRlciwgLnRhc2tiYXJ0YXNrcyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAjMDAwIHNvbGlkIDFweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiA2OXZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9sZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW46IDVweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb2xkZXI6aG92ZXIge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCB2YXIoLS1kdXJhdGlvbikgbGluZWFyO1xcclxcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgdmFyKC0tZHVyYXRpb24pIGxpbmVhcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLWR1cmF0aW9uKSBsaW5lYXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9jdXNlZCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9jdXNlZHRhc2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxOTMsIDE5Myk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tsaXN0Z2VuZXJhbHtcXHJcXG4gICAgaGVpZ2h0OiA2OSU7XFxyXFxuICAgIHdpZHRoOiA2NS4zJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZGRpdiB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIG9wYWNpdHk6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuI25ld3Rhc2t3aW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMzB2aDtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIHRvcDogMzAlO1xcclxcbiAgICBsZWZ0OiAyNSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSB7XFxyXFxuICAgIG9wYWNpdHk6IDUwJTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtuZXd0YXNrbGlzdH0gZnJvbSAnLi90YXNrLmpzJ1xyXG5cclxubGV0IGZvbGRlcnMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIG5ld2ZvbGRlciAobmFtZSkge1xyXG4gICAgbGV0IGZvbGRlcm5hbWUgPSBwcm9tcHQoJ1doYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGZvbGRlcj8gUGxlYXNlIGxpbWl0IHRvIDUgd29yZHMnKTtcclxuICAgIGxldCB0YXNrc2xpc3QgPSBgdGFza2xpc3Qke2ZvbGRlcnMubGVuZ3RofWA7XHJcbiAgICBcclxuICAgIG5ld3Rhc2tsaXN0KGB0YXNrbGlzdCR7Zm9sZGVycy5sZW5ndGh9YCk7XHJcblxyXG4gICAgbGV0IGZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9sZGVyLmNsYXNzTGlzdC5hZGQoYGZvbGRlcmApO1xyXG4gICAgZm9sZGVyLmlkID0gYHRhc2tsaXN0JHtmb2xkZXJzLmxlbmd0aH1gICAgIFxyXG4gICAgZm9sZGVyLmlubmVyVGV4dCA9IGZvbGRlcm5hbWU7XHJcbiAgICBmb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvbGRlcicpKXtcclxuICAgICAgICAgICAgZi5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gICAgfSlcclxuICAgIGZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9sZGVyJykpe1xyXG4gICAgICAgICAgICBmLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XHJcbiAgICB9KTtcclxuICAgIGZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXNpYmxlJykpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc2libGUnKS5pZCA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IG4gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tsaXN0Z2VuZXJhbCcpKXtcclxuICAgICAgICAgICAgbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9YCkuc3R5bGUudmlzaWJpbGl0eSA9JyB2aXNpYmxlJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfWApLmlkID0gJ3Zpc2libGUnOyAgICB9KVxyXG5cclxuICAgIGZvciAobGV0IGYgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvbGRlcicpKXtcclxuICAgICAgICBmLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgIH07XHJcbiAgICBmb2xkZXIuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJmb2xkZXInKS5hcHBlbmRDaGlsZChmb2xkZXIpO1xyXG4gICAgZm9sZGVycy5wdXNoKGZvbGRlcm5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQge25ld2ZvbGRlcn07IiwibGV0IHRhc2tsaXN0cyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gbmV3dGFza2xpc3QobGlzdG51bWJlcil7XHJcbiAgICBsZXQgdGFza25ld2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tuZXdsaXN0LmNsYXNzTGlzdC5hZGQobGlzdG51bWJlcik7XHJcbiAgICB0YXNrbmV3bGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrbGlzdGdlbmVyYWwnKTtcclxuICAgIHRhc2tuZXdsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2JhcnRhc2tzJykuYXBwZW5kQ2hpbGQodGFza25ld2xpc3QpO1xyXG4gICAgZm9yIChsZXQgbiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza2xpc3RnZW5lcmFsJykpe1xyXG4gICAgICAgIG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgfVxyXG4gICAgdGFza25ld2xpc3Quc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzaWJsZScpKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXNpYmxlJykuaWQgPSAnJztcclxuICAgIHRhc2tuZXdsaXN0LmlkID0gJ3Zpc2libGUnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGV0YXNrd2luZG93KCkge1xyXG4gICAgbGV0IGJhY2tncm91bmRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJhY2tncm91bmRkaXYuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZGRpdicpO1xyXG4gICAgYmFja2dyb3VuZGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYmFja2dyb3VuZGRpdi5yZW1vdmUoKTtcclxuICAgICAgICBuZXd0YXNrd2luZG93LnJlbW92ZSgpO1xyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kZGl2KTtcclxuXHJcbiAgICBsZXQgbmV3dGFza3dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3dGFza3dpbmRvdy5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJuZXd0YXNrd2luXCIgYWN0aW9uPVwibm9uZVwiPjxicj48bGFiZWwgZm9yPVwidGFza2Rlc2NcIj5UYXNrIERlc2NyaXB0aW9uLiBNYXggMTAwIGNoYXJhY3RlcnM8L2xhYmVsPjxicj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza2Rlc2NcIiBwbGFjZWhvbGRlcj1cIkZlZWQgTWVsbG93XCIgbWF4bGVuZ3RoPVwiMTAwXCIgc3R5bGU9XCJoZWlnaHQ6MjBweDsgd2lkdGg6IDQwMHB4O1wiPjxicj48YnI+XHJcbiAgICA8bGFiZWwgZm9yPVwidGFza2RhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+PGJyPlxyXG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrZGF0ZVwiPjxicj48YnI+XHJcbiAgICA8bGFiZWwgZm9yPVwidGFza3VyZ2VuY3lcIj5VcmdlbmN5PC9sYWJlbD48YnI+XHJcbiAgICA8c2VsZWN0IG5hbWU9XCJ0YXNraW1wb3J0YW5jZVwiIGlkPVwidGFza3VyZ2VuY3lcIj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDI1NSwgMTkwKTtcIj5Ob3QgVXJnZW50PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1heWJlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyNTUsIDE5MCk7XCI+U29tZXdoYXQ8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTAsIDE5MCk7XCI+VXJnZW50PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD48YnI+PGJyPlxyXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZCBUYXNrXCI+PC9mb3JtPmA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQobmV3dGFza3dpbmRvdyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBuZXd0YXNrLCB0cnVlKTtcclxufSAgXHJcblxyXG52YXIgbmV3dGFzayA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGFza2Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza2Rlc2MnKS52YWx1ZTtcclxuICAgIGxldCB0YXNrZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrZGF0ZScpLnZhbHVlO1xyXG4gICAgbGV0IHRhc2t1cmdlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3VyZ2VuY3knKS52YWx1ZTtcclxuXHJcbiAgICBsZXQgdGFza2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza2Rpdi5pbm5lckhUTUwgPSBgJHt0YXNrZGVzY30gPHNwYW4+JHt0YXNrZGF0ZX08L3NwYW4+YDtcclxuICAgIGlmICh0YXNrdXJnZW50ID09ICdZZXMnKXtcclxuICAgICAgICB0YXNrZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjU1LCAxOTAsIDE5MCknXHJcbiAgICB9IGVsc2UgaWYgKHRhc2t1cmdlbnQgPT0gJ01heWJlJyl7XHJcbiAgICAgICAgdGFza2Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDI1NCwgMjU1LCAxOTApJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMTkwLCAyNTUsIDE5MCknXHJcbiAgICB9XHJcbiAgICB0YXNrZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuXHJcbiAgICB0YXNrZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2RvbmUnKSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpOyAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRhc2tkaXYuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgIHRhc2tkaXYuYWRkRXZlbnRMaXN0ZW5lcignYXV4Y2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH19KVxyXG4gICAgdGFza2Rlc2MgPSAnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXNpYmxlJykuYXBwZW5kQ2hpbGQodGFza2Rpdik7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVtZShlKXtcclxuICAgIGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHtuZXd0YXNrbGlzdCwgY3JlYXRldGFza3dpbmRvdywgZGVsZXRlbWV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge25ld2ZvbGRlcn0gZnJvbSAnLi9mb2xkZXIuanMnXHJcbmltcG9ydCB7Y3JlYXRldGFza3dpbmRvdywgZGVsZXRlbWV9IGZyb20gJy4vdGFzay5qcydcclxuXHJcbmxldCB1c2VyID0gcHJvbXB0KCdXZWxjb21lIHRvIHlvdXIgdG8gZG8gbGlzdCEgV2hhdCBpcyB5b3VyIG5hbWU/Jyk7XHJcbmlmICh1c2VyID09ICcnKSB7XHJcbiAgICB1c2VyID0gJ1VzZXInO1xyXG59XHJcblxyXG5jb25zdCBoZWFkZXJiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgbWFpbmJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGhlYWRlcmJhcik7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChtYWluYm9keSk7XHJcblxyXG5tYWluYm9keS5jbGFzc0xpc3QuYWRkKCdtYWluYm9keScpO1xyXG5oZWFkZXJiYXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbmhlYWRlcmJhci5pbm5lckhUTUwgPSBgV2VsY29tZSwgPHNwYW4gc3R5bGU9XCJjb2xvcjogeWVsbG93O1wiPiR7dXNlcn08L3NwYW4+YDtcclxuXHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XHJcbm1haW5ib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xyXG5cclxuY29uc3QgbmV3Zm9sZGVyYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm5ld2ZvbGRlcmJ0bi5jbGFzc0xpc3QuYWRkKCduZXdmb2xkZXJidG4nKVxyXG5uZXdmb2xkZXJidG4uaW5uZXJIVE1MID1gPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zcXVhcmUtcGx1cyBmYS14bFwiPvCfk4s8L2k+IE5ldyBGb2xkZXJgO1xyXG5zaWRlYmFyLmFwcGVuZENoaWxkKG5ld2ZvbGRlcmJ0bik7XHJcblxyXG5jb25zdCBzaWRlYmFyZm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnNpZGViYXJmb2xkZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcmZvbGRlcicpO1xyXG5zaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJmb2xkZXIpO1xyXG5cclxuY29uc3QgdGFza2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50YXNrYmFyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tiYXInKTtcclxubWFpbmJvZHkuYXBwZW5kQ2hpbGQodGFza2Jhcik7XHJcblxyXG5jb25zdCBuZXd0YXNrc2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5uZXd0YXNrc2J0bi5jbGFzc0xpc3QuYWRkKCduZXd0YXNrc2J0bicpOyBcclxubmV3dGFza3NidG4uaW5uZXJIVE1MID0nPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10aHVtYnRhY2sgZmEteGxcIj7wn5OdPC9pPiBOZXcgdGFzayc7XHJcbnRhc2tiYXIuYXBwZW5kQ2hpbGQobmV3dGFza3NidG4pO1xyXG5cclxubGV0IHRhc2tiYXJ0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50YXNrYmFydGFza3MuY2xhc3NMaXN0LmFkZCgndGFza2JhcnRhc2tzJyk7XHJcbnRhc2tiYXIuYXBwZW5kQ2hpbGQodGFza2JhcnRhc2tzKTtcclxuXHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5mb290ZXIuaW5uZXJIVE1MPSBgQ29weXJpZ2h0IEAgJHsobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKX0gUGh1b2MgTmd1eWVuIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcG5ndXllbi04MVwiPjxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdpdGh1YlwiPvCfkb48L2k+PC9hPmA7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxubmV3Zm9sZGVyYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3Zm9sZGVyKTtcclxuXHJcbm5ld3Rhc2tzYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRldGFza3dpbmRvdyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9