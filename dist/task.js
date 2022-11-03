/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyxhQUFhO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFLDBFQUEwRTtBQUMxRSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVSxRQUFRLFNBQVM7QUFDdEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImxldCB0YXNrbGlzdHMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIG5ld3Rhc2tsaXN0KGxpc3RudW1iZXIpe1xyXG4gICAgbGV0IHRhc2tuZXdsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrbmV3bGlzdC5jbGFzc0xpc3QuYWRkKGxpc3RudW1iZXIpO1xyXG4gICAgdGFza25ld2xpc3QuY2xhc3NMaXN0LmFkZCgndGFza2xpc3RnZW5lcmFsJyk7XHJcbiAgICB0YXNrbmV3bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tiYXJ0YXNrcycpLmFwcGVuZENoaWxkKHRhc2tuZXdsaXN0KTtcclxuICAgIGZvciAobGV0IG4gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tsaXN0Z2VuZXJhbCcpKXtcclxuICAgICAgICBuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIH1cclxuICAgIHRhc2tuZXdsaXN0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc2libGUnKSlcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzaWJsZScpLmlkID0gJyc7XHJcbiAgICB0YXNrbmV3bGlzdC5pZCA9ICd2aXNpYmxlJztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRldGFza3dpbmRvdygpIHtcclxuICAgIGxldCBiYWNrZ3JvdW5kZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYWNrZ3JvdW5kZGl2LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmRkaXYnKTtcclxuICAgIGJhY2tncm91bmRkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGJhY2tncm91bmRkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgbmV3dGFza3dpbmRvdy5yZW1vdmUoKTtcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZGRpdik7XHJcblxyXG4gICAgbGV0IG5ld3Rhc2t3aW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld3Rhc2t3aW5kb3cuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwibmV3dGFza3dpblwiIGFjdGlvbj1cIm5vbmVcIj48YnI+PGxhYmVsIGZvcj1cInRhc2tkZXNjXCI+VGFzayBEZXNjcmlwdGlvbi4gTWF4IDEwMCBjaGFyYWN0ZXJzPC9sYWJlbD48YnI+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tkZXNjXCIgcGxhY2Vob2xkZXI9XCJGZWVkIE1lbGxvd1wiIG1heGxlbmd0aD1cIjEwMFwiIHN0eWxlPVwiaGVpZ2h0OjIwcHg7IHdpZHRoOiA0MDBweDtcIj48YnI+PGJyPlxyXG4gICAgPGxhYmVsIGZvcj1cInRhc2tkYXRlXCI+RHVlIERhdGU8L2xhYmVsPjxicj5cclxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidGFza2RhdGVcIj48YnI+PGJyPlxyXG4gICAgPGxhYmVsIGZvcj1cInRhc2t1cmdlbmN5XCI+VXJnZW5jeTwvbGFiZWw+PGJyPlxyXG4gICAgPHNlbGVjdCBuYW1lPVwidGFza2ltcG9ydGFuY2VcIiBpZD1cInRhc2t1cmdlbmN5XCI+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAyNTUsIDE5MCk7XCI+Tm90IFVyZ2VudDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYXliZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjU1LCAxOTApO1wiPlNvbWV3aGF0PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkwLCAxOTApO1wiPlVyZ2VudDwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+PGJyPjxicj5cclxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGQgVGFza1wiPjwvZm9ybT5gO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKG5ld3Rhc2t3aW5kb3cpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgbmV3dGFzaywgdHJ1ZSk7XHJcbn0gIFxyXG5cclxudmFyIG5ld3Rhc2sgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRhc2tkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tkZXNjJykudmFsdWU7XHJcbiAgICBsZXQgdGFza2RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza2RhdGUnKS52YWx1ZTtcclxuICAgIGxldCB0YXNrdXJnZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2t1cmdlbmN5JykudmFsdWU7XHJcblxyXG4gICAgbGV0IHRhc2tkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tkaXYuaW5uZXJIVE1MID0gYCR7dGFza2Rlc2N9IDxzcGFuPiR7dGFza2RhdGV9PC9zcGFuPmA7XHJcbiAgICBpZiAodGFza3VyZ2VudCA9PSAnWWVzJyl7XHJcbiAgICAgICAgdGFza2Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDI1NSwgMTkwLCAxOTApJ1xyXG4gICAgfSBlbHNlIGlmICh0YXNrdXJnZW50ID09ICdNYXliZScpe1xyXG4gICAgICAgIHRhc2tkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTQsIDI1NSwgMTkwKSdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza2Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE5MCwgMjU1LCAxOTApJ1xyXG4gICAgfVxyXG4gICAgdGFza2Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblxyXG4gICAgdGFza2Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb25lJykpe1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTsgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0YXNrZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICB0YXNrZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2F1eGNsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9fSlcclxuICAgIHRhc2tkZXNjID0gJyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlzaWJsZScpLmFwcGVuZENoaWxkKHRhc2tkaXYpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlbWUoZSl7XHJcbiAgICBlLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7bmV3dGFza2xpc3QsIGNyZWF0ZXRhc2t3aW5kb3csIGRlbGV0ZW1lfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=