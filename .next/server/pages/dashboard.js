"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// replace this firebase conFigvariable with your own\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDQVoCH26QKHxCAiAqYzBlBIyYyE8tp1F8\",\n    authDomain: \"cardly-48854.firebaseapp.com\",\n    projectId: \"cardly-48854\",\n    storageBucket: \"cardly-48854.appspot.com\",\n    messagingSenderId: \"61572234701\",\n    appId: \"1:61572234701:web:754b9606763ac3d8631884\",\n    measurementId: \"G-6D59TZ3LNC\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QztBQUNMO0FBQ1U7QUFDbEQscURBQXFEO0FBQ3JELE1BQU1HLGlCQUFpQjtJQUNuQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNuQjtBQUVBLE1BQU1DLE1BQU1YLDJEQUFhQSxDQUFDRztBQUMxQixNQUFNUyxPQUFPWCxzREFBT0EsQ0FBQ1U7QUFDckIsTUFBTUUsS0FBS1gsZ0VBQVlBLENBQUNTO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAtYm9pbGVycGxhdGUvLi9maXJlYmFzZS50cz85MmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbi8vIHJlcGxhY2UgdGhpcyBmaXJlYmFzZSBjb25GaWd2YXJpYWJsZSB3aXRoIHlvdXIgb3duXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5RFFWb0NIMjZRS0h4Q0FpQXFZekJsQkl5WXlFOHRwMUY4XCIsXG4gICAgYXV0aERvbWFpbjogXCJjYXJkbHktNDg4NTQuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgcHJvamVjdElkOiBcImNhcmRseS00ODg1NFwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY2FyZGx5LTQ4ODU0LmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjE1NzIyMzQ3MDFcIixcbiAgICBhcHBJZDogXCIxOjYxNTcyMjM0NzAxOndlYjo3NTRiOTYwNjc2M2FjM2Q4NjMxODg0XCIsXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTZENTlUWjNMTkNcIlxufTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbmV4cG9ydCB7IGF1dGgsIGRiIH07XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./pages/dashboard/index.tsx":
/*!***********************************!*\
  !*** ./pages/dashboard/index.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase */ \"./firebase.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!user && !loading) {\n            router.push(\"/login\");\n        }\n    }, [\n        loading,\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {}, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/dashboard/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/dashboard/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/dashboard/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n// export the component\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNuQjtBQUNFO0FBQ047QUFDUztBQUUzQyxNQUFNSyxZQUFZLElBQU07SUFFcEIsTUFBTSxDQUFDQyxNQUFNQyxTQUFTQyxNQUFNLEdBQUdSLHVFQUFZQSxDQUFDQywyQ0FBSUE7SUFDaEQsTUFBTVEsU0FBU1Asc0RBQVNBO0lBRXhCQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSSxDQUFDRyxRQUFRLENBQUNDLFNBQVM7WUFDbkJFLE9BQU9DLElBQUksQ0FBQztRQUNoQixDQUFDO0lBQ0wsR0FBRztRQUFDSDtRQUFTRDtLQUFLO0lBRWxCLHFCQUNJLDhEQUFDSzs7WUFDSUoseUJBQVcsOERBQUNILHFEQUFPQTs7Ozs7MEJBQ3BCLDhEQUFDUTswQkFBRzs7Ozs7Ozs7Ozs7O0FBR2hCO0FBRUEsdUJBQXVCO0FBQ3ZCLGlFQUFlUCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLWJvaWxlcnBsYXRlLy4vcGFnZXMvZGFzaGJvYXJkL2luZGV4LnRzeD81ZTg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uLy4uL2ZpcmViYXNlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdXNlciAmJiAhbG9hZGluZykge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICB9XG4gICAgfSwgW2xvYWRpbmcsIHVzZXJdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cbiAgICAgICAgICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuLy8gZXhwb3J0IHRoZSBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiU3Bpbm5lciIsIkRhc2hib2FyZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJyb3V0ZXIiLCJwdXNoIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard/index.tsx"));
module.exports = __webpack_exports__;

})();