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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_layouts_centeredLanding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/centeredLanding */ \"./components/layouts/centeredLanding.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst colors = {\n    brand: {\n        50: \"#faf5ff\",\n        100: \"#f3e8ff\",\n        200: \"#e9d5ff\",\n        300: \"#d8b4fe\",\n        400: \"#c084fc\",\n        500: \"#a855f7\",\n        600: \"#9333ea\",\n        700: \"#7e22ce\",\n        800: \"#6b21a8\",\n        900: \"#581c87\",\n        light: \"#d8b4fe\",\n        normal: \"#9333ea\",\n        heavy: \"#581c87\"\n    }\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.extendTheme)({\n    fonts: {\n        heading: \"'Roboto', sans-serif\",\n        body: \"'Raleway', sans-serif\"\n    },\n    colors\n});\nconst LayoutRenderer = (param)=>{\n    let { children , props  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_centeredLanding__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n        lineNumber: 52,\n        columnNumber: 12\n    }, undefined);\n};\n_c = LayoutRenderer;\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ColorModeScript, {\n                initialColorMode: theme.config.initialColorMode\n            }, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutRenderer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darraghflynn/development/app-boilerplate/pages/_app.tsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"liTJYMwBp9eGkQxP/R7n+ki5K8M=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState\n    ];\n});\n_c1 = App;\nvar _c, _c1;\n$RefreshReg$(_c, \"LayoutRenderer\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPMEI7QUFFd0M7QUFFeEI7QUFFWjtBQUNDO0FBQ0k7QUFDc0I7QUFFekQsTUFBTU8sU0FBUztJQUNYQyxPQUFPO1FBQ0gsSUFBSTtRQUNKLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsT0FBTztJQUNYO0FBQ0o7QUFFQSxNQUFNQyxRQUFRWCw2REFBV0EsQ0FBQztJQUN0QlksT0FBTztRQUNIQyxTQUFVO1FBQ1ZDLE1BQU87SUFDWDtJQUNBUjtBQUNKO0FBRUEsTUFBTVMsaUJBQWlCLFNBTWpCO1FBTmtCLEVBQ3BCQyxTQUFRLEVBQ1JDLE1BQUssRUFJUjtJQUNHLHFCQUFPLDhEQUFDZiwyRUFBYUE7a0JBQUVjOzs7Ozs7QUFDM0I7S0FSTUQ7QUFVUyxTQUFTRyxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7O0lBQ3hCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHakIsdUVBQVlBLENBQUNELDJDQUFJQTtJQUV6QyxxQkFDSSw4REFBQ0gsNERBQWNBO1FBQUNVLE9BQU9BOzswQkFDbkIsOERBQUNaLDZEQUFlQTtnQkFBQ3dCLGtCQUFrQlosTUFBTWEsTUFBTSxDQUFDRCxnQkFBZ0I7Ozs7OzswQkFDaEUsOERBQUNwQiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDWTswQkFDRyw0RUFBQ0k7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEMsQ0FBQztHQVp1QkY7O1FBQ0liLG1FQUFZQTs7O01BRGhCYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuaW1wb3J0IHtcbiAgICBDb2xvck1vZGVTY3JpcHQsXG4gICAgZXh0ZW5kVGhlbWUsXG4gICAgQ2hha3JhUHJvdmlkZXIsXG4gICAgdXNlRWRpdGFibGUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCBDZW50cmVkTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvY2VudGVyZWRMYW5kaW5nXCI7XG5pbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvZGFzaGJvYXJkTGF5b3V0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuXG5jb25zdCBjb2xvcnMgPSB7XG4gICAgYnJhbmQ6IHtcbiAgICAgICAgNTA6IFwiI2ZhZjVmZlwiLFxuICAgICAgICAxMDA6IFwiI2YzZThmZlwiLFxuICAgICAgICAyMDA6IFwiI2U5ZDVmZlwiLFxuICAgICAgICAzMDA6IFwiI2Q4YjRmZVwiLFxuICAgICAgICA0MDA6IFwiI2MwODRmY1wiLFxuICAgICAgICA1MDA6IFwiI2E4NTVmN1wiLFxuICAgICAgICA2MDA6IFwiIzkzMzNlYVwiLFxuICAgICAgICA3MDA6IFwiIzdlMjJjZVwiLFxuICAgICAgICA4MDA6IFwiIzZiMjFhOFwiLFxuICAgICAgICA5MDA6IFwiIzU4MWM4N1wiLFxuICAgICAgICBsaWdodDogXCIjZDhiNGZlXCIsXG4gICAgICAgIG5vcm1hbDogXCIjOTMzM2VhXCIsXG4gICAgICAgIGhlYXZ5OiBcIiM1ODFjODdcIixcbiAgICB9LFxufTtcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gICAgZm9udHM6IHtcbiAgICAgICAgaGVhZGluZzogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcbiAgICAgICAgYm9keTogYCdSYWxld2F5Jywgc2Fucy1zZXJpZmAsXG4gICAgfSxcbiAgICBjb2xvcnMsXG59KTtcblxuY29uc3QgTGF5b3V0UmVuZGVyZXIgPSAoe1xuICAgIGNoaWxkcmVuLFxuICAgIHByb3BzLFxufToge1xuICAgIGNoaWxkcmVuOiBhbnk7XG4gICAgcHJvcHM6IHsgdXNlcjogYW55IH07XG59KSA9PiB7XG4gICAgcmV0dXJuIDxDZW50cmVkTGF5b3V0PntjaGlsZHJlbn08L0NlbnRyZWRMYXlvdXQ+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17dGhlbWUuY29uZmlnLmluaXRpYWxDb2xvck1vZGV9IC8+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8TGF5b3V0UmVuZGVyZXI+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXRSZW5kZXJlcj5cbiAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkNvbG9yTW9kZVNjcmlwdCIsImV4dGVuZFRoZW1lIiwiQ2hha3JhUHJvdmlkZXIiLCJDZW50cmVkTGF5b3V0IiwiSGVhZGVyIiwiYXV0aCIsInVzZUF1dGhTdGF0ZSIsImNvbG9ycyIsImJyYW5kIiwibGlnaHQiLCJub3JtYWwiLCJoZWF2eSIsInRoZW1lIiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsIkxheW91dFJlbmRlcmVyIiwiY2hpbGRyZW4iLCJwcm9wcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJsb2FkaW5nIiwiaW5pdGlhbENvbG9yTW9kZSIsImNvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});