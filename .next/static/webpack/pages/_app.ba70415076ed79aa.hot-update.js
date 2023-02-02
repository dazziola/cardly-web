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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_layouts_centeredLanding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/centeredLanding */ \"./components/layouts/centeredLanding.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst colors = {\n    brand: {\n        50: \"#faf5ff\",\n        100: \"#f3e8ff\",\n        200: \"#e9d5ff\",\n        300: \"#d8b4fe\",\n        400: \"#c084fc\",\n        500: \"#a855f7\",\n        600: \"#9333ea\",\n        700: \"#7e22ce\",\n        800: \"#6b21a8\",\n        900: \"#581c87\",\n        light: \"#d8b4fe\",\n        normal: \"#9333ea\",\n        heavy: \"#581c87\"\n    }\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.extendTheme)({\n    fonts: {\n        heading: \"'Roboto', sans-serif\",\n        body: \"'Raleway', sans-serif\"\n    },\n    colors\n});\nconst LayoutRenderer = (param)=>{\n    let { children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_centeredLanding__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n        lineNumber: 46,\n        columnNumber: 12\n    }, undefined);\n};\n_c = LayoutRenderer;\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ColorModeScript, {\n                initialColorMode: theme.config.initialColorMode\n            }, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutRenderer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"liTJYMwBp9eGkQxP/R7n+ki5K8M=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState\n    ];\n});\n_c1 = App;\nvar _c, _c1;\n$RefreshReg$(_c, \"LayoutRenderer\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPMEI7QUFFd0M7QUFFeEI7QUFFWjtBQUNDO0FBQ0k7QUFDc0I7QUFFekQsTUFBTU8sU0FBUztJQUNYQyxPQUFPO1FBQ0gsSUFBSTtRQUNKLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsT0FBTztJQUNYO0FBQ0o7QUFFQSxNQUFNQyxRQUFRWCw2REFBV0EsQ0FBQztJQUN0QlksT0FBTztRQUNIQyxTQUFVO1FBQ1ZDLE1BQU87SUFDWDtJQUNBUjtBQUNKO0FBRUEsTUFBTVMsaUJBQWlCLFNBQXFDO1FBQXBDLEVBQUVDLFNBQVEsRUFBcUI7SUFDbkQscUJBQU8sOERBQUNkLDJFQUFhQTtrQkFBRWM7Ozs7OztBQUMzQjtLQUZNRDtBQUlTLFNBQVNFLElBQUksS0FBa0MsRUFBRTtRQUFwQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxHQUFsQzs7SUFDeEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdoQix1RUFBWUEsQ0FBQ0QsMkNBQUlBO0lBRXpDLHFCQUNJLDhEQUFDSCw0REFBY0E7UUFBQ1UsT0FBT0E7OzBCQUNuQiw4REFBQ1osNkRBQWVBO2dCQUFDdUIsa0JBQWtCWCxNQUFNWSxNQUFNLENBQUNELGdCQUFnQjs7Ozs7OzBCQUNoRSw4REFBQ25CLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNZOzBCQUNHLDRFQUFDRztvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QyxDQUFDO0dBWnVCRjs7UUFDSVosbUVBQVlBOzs7TUFEaEJZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG5pbXBvcnQge1xuICAgIENvbG9yTW9kZVNjcmlwdCxcbiAgICBleHRlbmRUaGVtZSxcbiAgICBDaGFrcmFQcm92aWRlcixcbiAgICB1c2VFZGl0YWJsZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IENlbnRyZWRMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9jZW50ZXJlZExhbmRpbmdcIjtcbmltcG9ydCBEYXNoYm9hcmRMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9kYXNoYm9hcmRMYXlvdXRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgICBicmFuZDoge1xuICAgICAgICA1MDogXCIjZmFmNWZmXCIsXG4gICAgICAgIDEwMDogXCIjZjNlOGZmXCIsXG4gICAgICAgIDIwMDogXCIjZTlkNWZmXCIsXG4gICAgICAgIDMwMDogXCIjZDhiNGZlXCIsXG4gICAgICAgIDQwMDogXCIjYzA4NGZjXCIsXG4gICAgICAgIDUwMDogXCIjYTg1NWY3XCIsXG4gICAgICAgIDYwMDogXCIjOTMzM2VhXCIsXG4gICAgICAgIDcwMDogXCIjN2UyMmNlXCIsXG4gICAgICAgIDgwMDogXCIjNmIyMWE4XCIsXG4gICAgICAgIDkwMDogXCIjNTgxYzg3XCIsXG4gICAgICAgIGxpZ2h0OiBcIiNkOGI0ZmVcIixcbiAgICAgICAgbm9ybWFsOiBcIiM5MzMzZWFcIixcbiAgICAgICAgaGVhdnk6IFwiIzU4MWM4N1wiLFxuICAgIH0sXG59O1xuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgICBmb250czoge1xuICAgICAgICBoZWFkaW5nOiBgJ1JvYm90bycsIHNhbnMtc2VyaWZgLFxuICAgICAgICBib2R5OiBgJ1JhbGV3YXknLCBzYW5zLXNlcmlmYCxcbiAgICB9LFxuICAgIGNvbG9ycyxcbn0pO1xuXG5jb25zdCBMYXlvdXRSZW5kZXJlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IGFueSB9KSA9PiB7XG4gICAgcmV0dXJuIDxDZW50cmVkTGF5b3V0PntjaGlsZHJlbn08L0NlbnRyZWRMYXlvdXQ+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17dGhlbWUuY29uZmlnLmluaXRpYWxDb2xvck1vZGV9IC8+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8TGF5b3V0UmVuZGVyZXI+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXRSZW5kZXJlcj5cbiAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkNvbG9yTW9kZVNjcmlwdCIsImV4dGVuZFRoZW1lIiwiQ2hha3JhUHJvdmlkZXIiLCJDZW50cmVkTGF5b3V0IiwiSGVhZGVyIiwiYXV0aCIsInVzZUF1dGhTdGF0ZSIsImNvbG9ycyIsImJyYW5kIiwibGlnaHQiLCJub3JtYWwiLCJoZWF2eSIsInRoZW1lIiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsIkxheW91dFJlbmRlcmVyIiwiY2hpbGRyZW4iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VyIiwibG9hZGluZyIsImluaXRpYWxDb2xvck1vZGUiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});