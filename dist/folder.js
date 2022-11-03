/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/*!***********************!*\
  !*** ./src/folder.js ***!
  \***********************/
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLGFBQWE7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkUsMEVBQTBFO0FBQzFFLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVLFFBQVEsU0FBUztBQUN0RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDL0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0EsSUFBSSxxREFBVyxZQUFZLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVE7QUFDM0MsbUNBQW1DLFFBQVEsdUJBQXVCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb2xkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHRhc2tsaXN0cyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gbmV3dGFza2xpc3QobGlzdG51bWJlcil7XHJcbiAgICBsZXQgdGFza25ld2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tuZXdsaXN0LmNsYXNzTGlzdC5hZGQobGlzdG51bWJlcik7XHJcbiAgICB0YXNrbmV3bGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrbGlzdGdlbmVyYWwnKTtcclxuICAgIHRhc2tuZXdsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2JhcnRhc2tzJykuYXBwZW5kQ2hpbGQodGFza25ld2xpc3QpO1xyXG4gICAgZm9yIChsZXQgbiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza2xpc3RnZW5lcmFsJykpe1xyXG4gICAgICAgIG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgfVxyXG4gICAgdGFza25ld2xpc3Quc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzaWJsZScpKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXNpYmxlJykuaWQgPSAnJztcclxuICAgIHRhc2tuZXdsaXN0LmlkID0gJ3Zpc2libGUnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGV0YXNrd2luZG93KCkge1xyXG4gICAgbGV0IGJhY2tncm91bmRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJhY2tncm91bmRkaXYuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZGRpdicpO1xyXG4gICAgYmFja2dyb3VuZGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYmFja2dyb3VuZGRpdi5yZW1vdmUoKTtcclxuICAgICAgICBuZXd0YXNrd2luZG93LnJlbW92ZSgpO1xyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kZGl2KTtcclxuXHJcbiAgICBsZXQgbmV3dGFza3dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3dGFza3dpbmRvdy5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJuZXd0YXNrd2luXCIgYWN0aW9uPVwibm9uZVwiPjxicj48bGFiZWwgZm9yPVwidGFza2Rlc2NcIj5UYXNrIERlc2NyaXB0aW9uLiBNYXggMTAwIGNoYXJhY3RlcnM8L2xhYmVsPjxicj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza2Rlc2NcIiBwbGFjZWhvbGRlcj1cIkZlZWQgTWVsbG93XCIgbWF4bGVuZ3RoPVwiMTAwXCIgc3R5bGU9XCJoZWlnaHQ6MjBweDsgd2lkdGg6IDQwMHB4O1wiPjxicj48YnI+XHJcbiAgICA8bGFiZWwgZm9yPVwidGFza2RhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+PGJyPlxyXG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrZGF0ZVwiPjxicj48YnI+XHJcbiAgICA8bGFiZWwgZm9yPVwidGFza3VyZ2VuY3lcIj5VcmdlbmN5PC9sYWJlbD48YnI+XHJcbiAgICA8c2VsZWN0IG5hbWU9XCJ0YXNraW1wb3J0YW5jZVwiIGlkPVwidGFza3VyZ2VuY3lcIj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDI1NSwgMTkwKTtcIj5Ob3QgVXJnZW50PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1heWJlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyNTUsIDE5MCk7XCI+U29tZXdoYXQ8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTAsIDE5MCk7XCI+VXJnZW50PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD48YnI+PGJyPlxyXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZCBUYXNrXCI+PC9mb3JtPmA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQobmV3dGFza3dpbmRvdyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBuZXd0YXNrLCB0cnVlKTtcclxufSAgXHJcblxyXG52YXIgbmV3dGFzayA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGFza2Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza2Rlc2MnKS52YWx1ZTtcclxuICAgIGxldCB0YXNrZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrZGF0ZScpLnZhbHVlO1xyXG4gICAgbGV0IHRhc2t1cmdlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3VyZ2VuY3knKS52YWx1ZTtcclxuXHJcbiAgICBsZXQgdGFza2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza2Rpdi5pbm5lckhUTUwgPSBgJHt0YXNrZGVzY30gPHNwYW4+JHt0YXNrZGF0ZX08L3NwYW4+YDtcclxuICAgIGlmICh0YXNrdXJnZW50ID09ICdZZXMnKXtcclxuICAgICAgICB0YXNrZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjU1LCAxOTAsIDE5MCknXHJcbiAgICB9IGVsc2UgaWYgKHRhc2t1cmdlbnQgPT0gJ01heWJlJyl7XHJcbiAgICAgICAgdGFza2Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDI1NCwgMjU1LCAxOTApJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMTkwLCAyNTUsIDE5MCknXHJcbiAgICB9XHJcbiAgICB0YXNrZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuXHJcbiAgICB0YXNrZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2RvbmUnKSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpOyAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRhc2tkaXYuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgIHRhc2tkaXYuYWRkRXZlbnRMaXN0ZW5lcignYXV4Y2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH19KVxyXG4gICAgdGFza2Rlc2MgPSAnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXNpYmxlJykuYXBwZW5kQ2hpbGQodGFza2Rpdik7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVtZShlKXtcclxuICAgIGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHtuZXd0YXNrbGlzdCwgY3JlYXRldGFza3dpbmRvdywgZGVsZXRlbWV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtuZXd0YXNrbGlzdH0gZnJvbSAnLi90YXNrLmpzJ1xyXG5cclxubGV0IGZvbGRlcnMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIG5ld2ZvbGRlciAobmFtZSkge1xyXG4gICAgbGV0IGZvbGRlcm5hbWUgPSBwcm9tcHQoJ1doYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGZvbGRlcj8gUGxlYXNlIGxpbWl0IHRvIDUgd29yZHMnKTtcclxuICAgIGxldCB0YXNrc2xpc3QgPSBgdGFza2xpc3Qke2ZvbGRlcnMubGVuZ3RofWA7XHJcbiAgICBcclxuICAgIG5ld3Rhc2tsaXN0KGB0YXNrbGlzdCR7Zm9sZGVycy5sZW5ndGh9YCk7XHJcblxyXG4gICAgbGV0IGZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9sZGVyLmNsYXNzTGlzdC5hZGQoYGZvbGRlcmApO1xyXG4gICAgZm9sZGVyLmlkID0gYHRhc2tsaXN0JHtmb2xkZXJzLmxlbmd0aH1gICAgIFxyXG4gICAgZm9sZGVyLmlubmVyVGV4dCA9IGZvbGRlcm5hbWU7XHJcbiAgICBmb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvbGRlcicpKXtcclxuICAgICAgICAgICAgZi5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gICAgfSlcclxuICAgIGZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9sZGVyJykpe1xyXG4gICAgICAgICAgICBmLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XHJcbiAgICB9KTtcclxuICAgIGZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXNpYmxlJykpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc2libGUnKS5pZCA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IG4gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tsaXN0Z2VuZXJhbCcpKXtcclxuICAgICAgICAgICAgbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9YCkuc3R5bGUudmlzaWJpbGl0eSA9JyB2aXNpYmxlJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfWApLmlkID0gJ3Zpc2libGUnOyAgICB9KVxyXG5cclxuICAgIGZvciAobGV0IGYgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvbGRlcicpKXtcclxuICAgICAgICBmLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcclxuICAgIH07XHJcbiAgICBmb2xkZXIuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJmb2xkZXInKS5hcHBlbmRDaGlsZChmb2xkZXIpO1xyXG4gICAgZm9sZGVycy5wdXNoKGZvbGRlcm5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQge25ld2ZvbGRlcn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9