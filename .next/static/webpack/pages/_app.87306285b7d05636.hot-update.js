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

/***/ "./components/layouts/dashboardLayout.tsx":
/*!************************************************!*\
  !*** ./components/layouts/dashboardLayout.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header */ \"./components/header.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction DashboardLayout(param) {\n    let { children  } = param;\n    _s();\n    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();\n    const handleToggle = ()=>isOpen ? onClose() : onOpen();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        direction: \"column\",\n        w: \"100vw\",\n        minH: \"100vh\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.50\", \"gray.800\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/components/layouts/dashboardLayout.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                direction: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        w: \"xs\",\n                        children: \"Left\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darraghflynn/development/app-boilerplate/components/layouts/dashboardLayout.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        children: \"Right\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darraghflynn/development/app-boilerplate/components/layouts/dashboardLayout.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darraghflynn/development/app-boilerplate/components/layouts/dashboardLayout.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darraghflynn/development/app-boilerplate/components/layouts/dashboardLayout.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(DashboardLayout, \"6awIlLqqqpzda2oInKHfZNU7DaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = DashboardLayout;\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvZGFzaGJvYXJkTGF5b3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTTBCO0FBRUs7QUFFaEIsU0FBU00sZ0JBQWdCLEtBSXZDLEVBQUU7UUFKcUMsRUFDcENDLFNBQVEsRUFHWCxHQUp1Qzs7SUFLcEMsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLE9BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdOLCtEQUFhQTtJQUNqRCxNQUFNTyxlQUFlLElBQU9ILFNBQVNFLFlBQVlELFFBQVE7SUFFekQscUJBQ0ksOERBQUNULGtEQUFJQTtRQUNEWSxXQUFXO1FBQ1hDLEdBQUc7UUFDSEMsTUFBTTtRQUNOQyxJQUFJWixtRUFBaUJBLENBQUMsV0FBVzs7MEJBRWpDLDhEQUFDRSwrQ0FBTUE7Ozs7OzBCQUNQLDhEQUFDSCxtREFBS0E7Z0JBQUNVLFdBQVc7O2tDQUNkLDhEQUFDWCxpREFBR0E7d0JBQUNZLEdBQUc7a0NBQU07Ozs7OztrQ0FDZCw4REFBQ1osaURBQUdBO2tDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckIsQ0FBQztHQXRCdUJLOztRQUtnQkYsMkRBQWFBO1FBUXJDRCwrREFBaUJBOzs7S0FiVEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2Rhc2hib2FyZExheW91dC50c3g/Zjc5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEZsZXgsXG4gICAgQm94LFxuICAgIFN0YWNrLFxuICAgIHVzZUNvbG9yTW9kZVZhbHVlLFxuICAgIHVzZURpc2Nsb3N1cmUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vbG9nb1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vaGVhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZExheW91dCh7XG4gICAgY2hpbGRyZW4sXG59OiB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pIHtcbiAgICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4gKGlzT3BlbiA/IG9uQ2xvc2UoKSA6IG9uT3BlbigpKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgICBkaXJlY3Rpb249e1wiY29sdW1uXCJ9XG4gICAgICAgICAgICB3PXtcIjEwMHZ3XCJ9XG4gICAgICAgICAgICBtaW5IPXtcIjEwMHZoXCJ9XG4gICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjUwXCIsIFwiZ3JheS44MDBcIil9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9PlxuICAgICAgICAgICAgICAgIDxCb3ggdz17XCJ4c1wifT5MZWZ0PC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveD5SaWdodDwvQm94PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9GbGV4PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiRmxleCIsIkJveCIsIlN0YWNrIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VEaXNjbG9zdXJlIiwiSGVhZGVyIiwiRGFzaGJvYXJkTGF5b3V0IiwiY2hpbGRyZW4iLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiaGFuZGxlVG9nZ2xlIiwiZGlyZWN0aW9uIiwidyIsIm1pbkgiLCJiZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/dashboardLayout.tsx\n"));

/***/ })

});