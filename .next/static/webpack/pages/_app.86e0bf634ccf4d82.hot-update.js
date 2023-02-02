"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_layouts_centeredLanding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/centeredLanding */ \"./components/layouts/centeredLanding.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst colors = {\n    brand: {\n        50: \"#faf5ff\",\n        100: \"#f3e8ff\",\n        200: \"#e9d5ff\",\n        300: \"#d8b4fe\",\n        400: \"#c084fc\",\n        500: \"#a855f7\",\n        600: \"#9333ea\",\n        700: \"#7e22ce\",\n        800: \"#6b21a8\",\n        900: \"#581c87\",\n        light: \"#d8b4fe\",\n        normal: \"#9333ea\",\n        heavy: \"#581c87\"\n    }\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.extendTheme)({\n    fonts: {\n        heading: \"'Roboto', sans-serif\",\n        body: \"'Raleway', sans-serif\"\n    },\n    colors\n});\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ChakraProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ColorModeScript, {\n                initialColorMode: theme.config.initialColorMode\n            }, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_centeredLanding__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"VbhIZxmY9zZheJ6pmP2vZ+FB3Jc=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU8wQjtBQUV3QztBQUVwQztBQUNDO0FBQ0k7QUFDc0I7QUFFekQsTUFBTU0sU0FBUztJQUNYQyxPQUFPO1FBQ0gsSUFBSTtRQUNKLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsT0FBTztJQUNYO0FBQ0o7QUFFQSxNQUFNQyxRQUFRViw2REFBV0EsQ0FBQztJQUN0QlcsT0FBTztRQUNIQyxTQUFVO1FBQ1ZDLE1BQU87SUFDWDtJQUNBUjtBQUNKO0FBRWUsU0FBU1MsSUFBSSxLQUFrQyxFQUFFO1FBQXBDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEdBQWxDOztJQUN4QixNQUFNLENBQUNDLE1BQU1DLFNBQVNDLE1BQU0sR0FBR2YsdUVBQVlBLENBQUNELDJDQUFJQTtJQUVoRCxxQkFDSSw4REFBQ0YsNERBQWNBO1FBQUNTLE9BQU9BOzswQkFDbkIsOERBQUNYLDZEQUFlQTtnQkFBQ3FCLGtCQUFrQlYsTUFBTVcsTUFBTSxDQUFDRCxnQkFBZ0I7Ozs7OzswQkFDaEUsOERBQUNsQiwyRUFBYUE7MEJBQ1YsNEVBQUNhO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDLENBQUM7R0FYdUJGOztRQUNXVixtRUFBWUE7OztLQUR2QlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5cbmltcG9ydCB7XG4gICAgQ29sb3JNb2RlU2NyaXB0LFxuICAgIGV4dGVuZFRoZW1lLFxuICAgIENoYWtyYVByb3ZpZGVyLFxuICAgIHVzZUVkaXRhYmxlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgQ2VudHJlZExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRzL2NlbnRlcmVkTGFuZGluZ1wiO1xuXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuXG5jb25zdCBjb2xvcnMgPSB7XG4gICAgYnJhbmQ6IHtcbiAgICAgICAgNTA6IFwiI2ZhZjVmZlwiLFxuICAgICAgICAxMDA6IFwiI2YzZThmZlwiLFxuICAgICAgICAyMDA6IFwiI2U5ZDVmZlwiLFxuICAgICAgICAzMDA6IFwiI2Q4YjRmZVwiLFxuICAgICAgICA0MDA6IFwiI2MwODRmY1wiLFxuICAgICAgICA1MDA6IFwiI2E4NTVmN1wiLFxuICAgICAgICA2MDA6IFwiIzkzMzNlYVwiLFxuICAgICAgICA3MDA6IFwiIzdlMjJjZVwiLFxuICAgICAgICA4MDA6IFwiIzZiMjFhOFwiLFxuICAgICAgICA5MDA6IFwiIzU4MWM4N1wiLFxuICAgICAgICBsaWdodDogXCIjZDhiNGZlXCIsXG4gICAgICAgIG5vcm1hbDogXCIjOTMzM2VhXCIsXG4gICAgICAgIGhlYXZ5OiBcIiM1ODFjODdcIixcbiAgICB9LFxufTtcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gICAgZm9udHM6IHtcbiAgICAgICAgaGVhZGluZzogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcbiAgICAgICAgYm9keTogYCdSYWxld2F5Jywgc2Fucy1zZXJpZmAsXG4gICAgfSxcbiAgICBjb2xvcnMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICA8Q29sb3JNb2RlU2NyaXB0IGluaXRpYWxDb2xvck1vZGU9e3RoZW1lLmNvbmZpZy5pbml0aWFsQ29sb3JNb2RlfSAvPlxuICAgICAgICAgICAgPENlbnRyZWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9DZW50cmVkTGF5b3V0PlxuICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiQ29sb3JNb2RlU2NyaXB0IiwiZXh0ZW5kVGhlbWUiLCJDaGFrcmFQcm92aWRlciIsIkNlbnRyZWRMYXlvdXQiLCJhdXRoIiwidXNlQXV0aFN0YXRlIiwiY29sb3JzIiwiYnJhbmQiLCJsaWdodCIsIm5vcm1hbCIsImhlYXZ5IiwidGhlbWUiLCJmb250cyIsImhlYWRpbmciLCJib2R5IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsImluaXRpYWxDb2xvck1vZGUiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});