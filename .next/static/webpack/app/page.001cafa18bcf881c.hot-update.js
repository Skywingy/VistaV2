"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/comps/MenuItem.js":
/*!*******************************!*\
  !*** ./src/comps/MenuItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst MenuItem = ()=>{\n    const scrollToSection = (sectionId)=>{\n        console.log(sectionId);\n        const section = document.getElementById(sectionId);\n        console.log(section);\n        if (section) {\n            section.scrollIntoView({\n                behavior: \"smooth\"\n            });\n            console.log(section);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-10 z-50 bg-red-300 p-4 shadow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex gap-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: ()=>scrollToSection(\"section1\"),\n                    className: \"cursor-pointer\",\n                    children: \"Section1\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: ()=>scrollToSection(\"section2\"),\n                    className: \"cursor-pointer\",\n                    children: \"Section2\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: ()=>scrollToSection(\"section3\"),\n                    className: \"cursor-pointer\",\n                    children: \"Section3\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: ()=>scrollToSection(\"section4\"),\n                    className: \"cursor-pointer\",\n                    children: \"Section4\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: ()=>scrollToSection(\"section5\"),\n                    className: \"cursor-pointer\",\n                    children: \"Section5\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MenuItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuItem);\nvar _c;\n$RefreshReg$(_c, \"MenuItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wcy9NZW51SXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUMwQjtBQUUxQixNQUFNQyxXQUFXO0lBQ2YsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osTUFBTUcsVUFBVUMsU0FBU0MsY0FBYyxDQUFDTDtRQUN4Q0MsUUFBUUMsR0FBRyxDQUFDQztRQUNaLElBQUlBLFNBQVM7WUFDWEEsUUFBUUcsY0FBYyxDQUFDO2dCQUFFQyxVQUFVO1lBQVM7WUFDNUNOLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUdELFdBQVU7OzhCQUNaLDhEQUFDRTtvQkFDQ0MsU0FBUyxJQUFNYixnQkFBZ0I7b0JBQy9CVSxXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNFO29CQUNDQyxTQUFTLElBQU1iLGdCQUFnQjtvQkFDL0JVLFdBQVU7OEJBQ1g7Ozs7Ozs4QkFHRCw4REFBQ0U7b0JBQ0NDLFNBQVMsSUFBTWIsZ0JBQWdCO29CQUMvQlUsV0FBVTs4QkFDWDs7Ozs7OzhCQUdELDhEQUFDRTtvQkFDQ0MsU0FBUyxJQUFNYixnQkFBZ0I7b0JBQy9CVSxXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNFO29CQUNDQyxTQUFTLElBQU1iLGdCQUFnQjtvQkFDL0JVLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7S0EvQ01YO0FBaUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wcy9NZW51SXRlbS5qcz83MWNiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNZW51SXRlbSA9ICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsVG9TZWN0aW9uID0gKHNlY3Rpb25JZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25JZCk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XG4gICAgY29uc29sZS5sb2coc2VjdGlvbik7XG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIHNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHNlY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTEwIHotNTAgYmctcmVkLTMwMCBwLTQgc2hhZG93XCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBnYXAtMTBcIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKFwic2VjdGlvbjFcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgU2VjdGlvbjFcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKFwic2VjdGlvbjJcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgU2VjdGlvbjJcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKFwic2VjdGlvbjNcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgU2VjdGlvbjNcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKFwic2VjdGlvbjRcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgU2VjdGlvbjRcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKFwic2VjdGlvbjVcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgU2VjdGlvbjVcbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnVJdGVtIiwic2Nyb2xsVG9TZWN0aW9uIiwic2VjdGlvbklkIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/comps/MenuItem.js\n"));

/***/ })

});