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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// replace this firebase conFigvariable with your own\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDQVoCH26QKHxCAiAqYzBlBIyYyE8tp1F8\",\n    authDomain: \"cardly-48854.firebaseapp.com\",\n    projectId: \"cardly-48854\",\n    storageBucket: \"cardly-48854.appspot.com\",\n    messagingSenderId: \"61572234701\",\n    appId: \"1:61572234701:web:754b9606763ac3d8631884\",\n    measurementId: \"G-6D59TZ3LNC\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QztBQUNMO0FBQ1U7QUFDbEQscURBQXFEO0FBQ3JELE1BQU1HLGlCQUFpQjtJQUNuQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNuQjtBQUVBLE1BQU1DLE1BQU1YLDJEQUFhQSxDQUFDRztBQUMxQixNQUFNUyxPQUFPWCxzREFBT0EsQ0FBQ1U7QUFDckIsTUFBTUUsS0FBS1gsZ0VBQVlBLENBQUNTO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAtYm9pbGVycGxhdGUvLi9maXJlYmFzZS50cz85MmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbi8vIHJlcGxhY2UgdGhpcyBmaXJlYmFzZSBjb25GaWd2YXJpYWJsZSB3aXRoIHlvdXIgb3duXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5RFFWb0NIMjZRS0h4Q0FpQXFZekJsQkl5WXlFOHRwMUY4XCIsXG4gICAgYXV0aERvbWFpbjogXCJjYXJkbHktNDg4NTQuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgcHJvamVjdElkOiBcImNhcmRseS00ODg1NFwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY2FyZGx5LTQ4ODU0LmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjE1NzIyMzQ3MDFcIixcbiAgICBhcHBJZDogXCIxOjYxNTcyMjM0NzAxOndlYjo3NTRiOTYwNjc2M2FjM2Q4NjMxODg0XCIsXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTZENTlUWjNMTkNcIlxufTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbmV4cG9ydCB7IGF1dGgsIGRiIH07XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_5__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction Page() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (user && !loading) {\n            router.push(\"/dashboard\");\n        }\n    }, [\n        loading,\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n        spacing: 8,\n        align: \"center\",\n        textAlign: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                fontWeight: 600,\n                fontSize: {\n                    base: \"2xl\"\n                },\n                lineHeight: \"100%\",\n                variant: \"h2\",\n                children: [\n                    \"Get critiqued, not\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        as: \"span\",\n                        color: \"brand.normal\",\n                        children: \"crit-eeked!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                fontWeight: \"normal\",\n                fontSize: {\n                    base: \"xl\"\n                },\n                variant: \"h3\",\n                children: \"Manage and receive timely feedback from stakeholders for a wide range of projects.\"\n            }, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                minW: \"full\",\n                direction: \"row\",\n                spacing: 3,\n                align: \"center\",\n                alignSelf: \"center\",\n                position: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        w: \"full\",\n                        colorScheme: \"brand\",\n                        px: 6,\n                        onClick: ()=>router.push(\"/register\"),\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        w: \"full\",\n                        colorScheme: \"brand\",\n                        variant: \"outline\",\n                        px: 6,\n                        onClick: ()=>router.push(\"/login\"),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdFO0FBRXpCO0FBQ0w7QUFDdUI7QUFDdEI7QUFFcEIsU0FBU1EsT0FBTztJQUUzQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdMLHVFQUFZQSxDQUFDQywyQ0FBSUE7SUFFekNGLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJSyxRQUFRLENBQUNDLFNBQVM7WUFDbEJGLE9BQU9HLElBQUksQ0FBQztRQUNoQixDQUFDO0lBQ0wsR0FBRztRQUFDRDtRQUFTRDtLQUFLO0lBRWxCLHFCQUNJLDhEQUFDUCxtREFBS0E7UUFBQ1UsU0FBUztRQUFHQyxPQUFPO1FBQVVDLFdBQVc7OzBCQUMzQyw4REFBQ2YscURBQU9BO2dCQUNKZ0IsWUFBWTtnQkFDWkMsVUFBVTtvQkFBRUMsTUFBTTtnQkFBTTtnQkFDeEJDLFlBQVk7Z0JBQ1pDLFNBQVM7O29CQUNaO29CQUNzQjtrQ0FDbkIsOERBQUNuQixrREFBSUE7d0JBQUNvQixJQUFJO3dCQUFRQyxPQUFPO2tDQUFnQjs7Ozs7Ozs7Ozs7OzBCQUk3Qyw4REFBQ3RCLHFEQUFPQTtnQkFDSmdCLFlBQVk7Z0JBQ1pDLFVBQVU7b0JBQUVDLE1BQU07Z0JBQUs7Z0JBQ3ZCRSxTQUFTOzBCQUNaOzs7Ozs7MEJBSUQsOERBQUNqQixtREFBS0E7Z0JBQ0ZvQixNQUFNO2dCQUNOQyxXQUFXO2dCQUNYWCxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQVyxXQUFXO2dCQUNYQyxVQUFVOztrQ0FFViw4REFBQ3hCLG9EQUFNQTt3QkFDSHlCLEdBQUc7d0JBQ0hDLGFBQVk7d0JBQ1pDLElBQUk7d0JBQ0pDLFNBQVMsSUFBTXJCLE9BQU9HLElBQUksQ0FBQztrQ0FDOUI7Ozs7OztrQ0FHRCw4REFBQ1Ysb0RBQU1BO3dCQUNIeUIsR0FBRzt3QkFDSEMsYUFBYTt3QkFDYlIsU0FBUzt3QkFDVFMsSUFBSTt3QkFDSkMsU0FBUyxJQUFNckIsT0FBT0csSUFBSSxDQUFDO2tDQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAtYm9pbGVycGxhdGUvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkaW5nLCBUZXh0LCBCdXR0b24sIFN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlciAmJiAhbG9hZGluZykge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICAgICAgfVxuICAgIH0sIFtsb2FkaW5nLCB1c2VyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17OH0gYWxpZ249e1wiY2VudGVyXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezYwMH1cbiAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiBcIjJ4bFwiIH19XG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD17XCIxMDAlXCJ9XG4gICAgICAgICAgICAgICAgdmFyaWFudD17XCJoMlwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdldCBjcml0aXF1ZWQsIG5vdHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8VGV4dCBhcz17XCJzcGFuXCJ9IGNvbG9yPXtcImJyYW5kLm5vcm1hbFwifT5cbiAgICAgICAgICAgICAgICAgICAgY3JpdC1lZWtlZCFcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9e1wibm9ybWFsXCJ9XG4gICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCJ4bFwiIH19XG4gICAgICAgICAgICAgICAgdmFyaWFudD17XCJoM1wifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1hbmFnZSBhbmQgcmVjZWl2ZSB0aW1lbHkgZmVlZGJhY2sgZnJvbSBzdGFrZWhvbGRlcnMgZm9yIGEgd2lkZVxuICAgICAgICAgICAgICAgIHJhbmdlIG9mIHByb2plY3RzLlxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgbWluVz17XCJmdWxsXCJ9XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtcInJvd1wifVxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezN9XG4gICAgICAgICAgICAgICAgYWxpZ249e1wiY2VudGVyXCJ9XG4gICAgICAgICAgICAgICAgYWxpZ25TZWxmPXtcImNlbnRlclwifVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtcInJlbGF0aXZlXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB3PXtcImZ1bGxcIn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJicmFuZFwiXG4gICAgICAgICAgICAgICAgICAgIHB4PXs2fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9yZWdpc3RlclwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB3PXtcImZ1bGxcIn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9e1wiYnJhbmRcIn1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJvdXRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIHB4PXs2fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpblwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZGluZyIsIlRleHQiLCJCdXR0b24iLCJTdGFjayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJQYWdlIiwicm91dGVyIiwidXNlciIsImxvYWRpbmciLCJwdXNoIiwic3BhY2luZyIsImFsaWduIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiYmFzZSIsImxpbmVIZWlnaHQiLCJ2YXJpYW50IiwiYXMiLCJjb2xvciIsIm1pblciLCJkaXJlY3Rpb24iLCJhbGlnblNlbGYiLCJwb3NpdGlvbiIsInciLCJjb2xvclNjaGVtZSIsInB4Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();