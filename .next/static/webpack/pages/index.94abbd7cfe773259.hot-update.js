"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user && !loading) {\n            router.push(\"/dashboard\");\n        }\n    }, [\n        loading,\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n        spacing: 8,\n        align: \"center\",\n        textAlign: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                fontWeight: 600,\n                fontSize: {\n                    base: \"2xl\"\n                },\n                lineHeight: \"100%\",\n                variant: \"h2\",\n                children: [\n                    \"Get critiqued, not\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        as: \"span\",\n                        color: \"brand.normal\",\n                        children: \"crit-eeked!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                fontWeight: \"normal\",\n                fontSize: {\n                    base: \"xl\"\n                },\n                variant: \"h3\",\n                children: \"Manage and receive timely feedback from stakeholders for a wide range of projects.\"\n            }, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                minW: \"full\",\n                direction: \"row\",\n                spacing: 3,\n                align: \"center\",\n                alignSelf: \"center\",\n                position: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        w: \"full\",\n                        colorScheme: \"brand\",\n                        px: 6,\n                        onClick: ()=>router.push(\"/register\"),\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        w: \"full\",\n                        colorScheme: \"brand\",\n                        variant: \"outline\",\n                        px: 6,\n                        onClick: ()=>router.push(\"/login\"),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"tt6Uyrwog6rRa25dk+H/SEWALJ0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdFO0FBRXpCO0FBQ0w7QUFDdUI7QUFDdEI7QUFFcEIsU0FBU1EsT0FBTzs7SUFFM0IsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHTCx1RUFBWUEsQ0FBQ0MsMkNBQUlBO0lBRXpDRixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSUssUUFBUSxDQUFDQyxTQUFTO1lBQ2xCRixPQUFPRyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLEdBQUc7UUFBQ0Q7UUFBU0Q7S0FBSztJQUVsQixxQkFDSSw4REFBQ1AsbURBQUtBO1FBQUNVLFNBQVM7UUFBR0MsT0FBTztRQUFVQyxXQUFXOzswQkFDM0MsOERBQUNmLHFEQUFPQTtnQkFDSmdCLFlBQVk7Z0JBQ1pDLFVBQVU7b0JBQUVDLE1BQU07Z0JBQU07Z0JBQ3hCQyxZQUFZO2dCQUNaQyxTQUFTOztvQkFDWjtvQkFDc0I7a0NBQ25CLDhEQUFDbkIsa0RBQUlBO3dCQUFDb0IsSUFBSTt3QkFBUUMsT0FBTztrQ0FBZ0I7Ozs7Ozs7Ozs7OzswQkFJN0MsOERBQUN0QixxREFBT0E7Z0JBQ0pnQixZQUFZO2dCQUNaQyxVQUFVO29CQUFFQyxNQUFNO2dCQUFLO2dCQUN2QkUsU0FBUzswQkFDWjs7Ozs7OzBCQUlELDhEQUFDakIsbURBQUtBO2dCQUNGb0IsTUFBTTtnQkFDTkMsV0FBVztnQkFDWFgsU0FBUztnQkFDVEMsT0FBTztnQkFDUFcsV0FBVztnQkFDWEMsVUFBVTs7a0NBRVYsOERBQUN4QixvREFBTUE7d0JBQ0h5QixHQUFHO3dCQUNIQyxhQUFZO3dCQUNaQyxJQUFJO3dCQUNKQyxTQUFTLElBQU1yQixPQUFPRyxJQUFJLENBQUM7a0NBQzlCOzs7Ozs7a0NBR0QsOERBQUNWLG9EQUFNQTt3QkFDSHlCLEdBQUc7d0JBQ0hDLGFBQWE7d0JBQ2JSLFNBQVM7d0JBQ1RTLElBQUk7d0JBQ0pDLFNBQVMsSUFBTXJCLE9BQU9HLElBQUksQ0FBQztrQ0FDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQixDQUFDO0dBNUR1Qko7O1FBRUxKLGtEQUFTQTtRQUNBRSxtRUFBWUE7OztLQUhoQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGluZywgVGV4dCwgQnV0dG9uLCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3VzZXIsIGxvYWRpbmddID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHVzZXIgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XG4gICAgICAgIH1cbiAgICB9LCBbbG9hZGluZywgdXNlcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezh9IGFsaWduPXtcImNlbnRlclwifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs2MDB9XG4gICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCIyeGxcIiB9fVxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9e1wiMTAwJVwifVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wiaDJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHZXQgY3JpdGlxdWVkLCBub3R7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPFRleHQgYXM9e1wic3BhblwifSBjb2xvcj17XCJicmFuZC5ub3JtYWxcIn0+XG4gICAgICAgICAgICAgICAgICAgIGNyaXQtZWVrZWQhXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXtcIm5vcm1hbFwifVxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwieGxcIiB9fVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wiaDNcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNYW5hZ2UgYW5kIHJlY2VpdmUgdGltZWx5IGZlZWRiYWNrIGZyb20gc3Rha2Vob2xkZXJzIGZvciBhIHdpZGVcbiAgICAgICAgICAgICAgICByYW5nZSBvZiBwcm9qZWN0cy5cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIG1pblc9e1wiZnVsbFwifVxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17XCJyb3dcIn1cbiAgICAgICAgICAgICAgICBzcGFjaW5nPXszfVxuICAgICAgICAgICAgICAgIGFsaWduPXtcImNlbnRlclwifVxuICAgICAgICAgICAgICAgIGFsaWduU2VsZj17XCJjZW50ZXJcIn1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17XCJyZWxhdGl2ZVwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdz17XCJmdWxsXCJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYnJhbmRcIlxuICAgICAgICAgICAgICAgICAgICBweD17Nn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcmVnaXN0ZXJcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdz17XCJmdWxsXCJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtcImJyYW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wib3V0bGluZVwifVxuICAgICAgICAgICAgICAgICAgICBweD17Nn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW5cIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWRpbmciLCJUZXh0IiwiQnV0dG9uIiwiU3RhY2siLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwiUGFnZSIsInJvdXRlciIsInVzZXIiLCJsb2FkaW5nIiwicHVzaCIsInNwYWNpbmciLCJhbGlnbiIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImJhc2UiLCJsaW5lSGVpZ2h0IiwidmFyaWFudCIsImFzIiwiY29sb3IiLCJtaW5XIiwiZGlyZWN0aW9uIiwiYWxpZ25TZWxmIiwicG9zaXRpb24iLCJ3IiwiY29sb3JTY2hlbWUiLCJweCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});