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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\nconst MenuItem = ()=>{\n    console.log(\"clicked\", sectionId);\n    const scrollToSection = (sectionId1)=>{\n        const section = document.getElementById(sectionId1);\n        if (section) {\n            section.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"fixed top-10 bg-red-300 p-4 shadow menu\",\n        initial: {\n            opacity: 0,\n            y: -20\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex gap-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {\n                    onClick: ()=>scrollToSection(\"section1\"),\n                    className: \"cursor-pointer\",\n                    whileHover: {\n                        scale: 1.1\n                    },\n                    whileTap: {\n                        scale: 0.9\n                    },\n                    children: \"Section1\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {\n                    onClick: ()=>scrollToSection(\"section2\"),\n                    className: \"cursor-pointer\",\n                    whileHover: {\n                        scale: 1.1\n                    },\n                    whileTap: {\n                        scale: 0.9\n                    },\n                    children: \"Section2\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {\n                    onClick: ()=>scrollToSection(\"section3\"),\n                    className: \"cursor-pointer\",\n                    whileHover: {\n                        scale: 1.1\n                    },\n                    whileTap: {\n                        scale: 0.9\n                    },\n                    children: \"Section3\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {\n                    onClick: ()=>scrollToSection(\"section4\"),\n                    className: \"cursor-pointer\",\n                    whileHover: {\n                        scale: 1.1\n                    },\n                    whileTap: {\n                        scale: 0.9\n                    },\n                    children: \"Section4\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {\n                    onClick: ()=>scrollToSection(\"section5\"),\n                    className: \"cursor-pointer\",\n                    whileHover: {\n                        scale: 1.1\n                    },\n                    whileTap: {\n                        scale: 0.9\n                    },\n                    children: \"Section5\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/MenuItem.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MenuItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuItem);\nvar _c;\n$RefreshReg$(_c, \"MenuItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wcy9NZW51SXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDYTtBQUV2QyxNQUFNRSxXQUFXO0lBQ2ZDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXQztJQUN2QixNQUFNQyxrQkFBa0IsQ0FBQ0Q7UUFDdkIsTUFBTUUsVUFBVUMsU0FBU0MsY0FBYyxDQUFDSjtRQUN4QyxJQUFJRSxTQUFTO1lBQ1hBLFFBQVFHLGNBQWMsQ0FBQztnQkFBRUMsVUFBVTtZQUFTO1FBQzlDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1YsaURBQU1BLENBQUNXLEdBQUc7UUFDVEMsV0FBVTtRQUNWQyxTQUFTO1lBQUVDLFNBQVM7WUFBR0MsR0FBRyxDQUFDO1FBQUc7UUFDOUJDLFNBQVM7WUFBRUYsU0FBUztZQUFHQyxHQUFHO1FBQUU7UUFDNUJFLFlBQVk7WUFBRUMsVUFBVTtRQUFJO2tCQUU1Qiw0RUFBQ0M7WUFBR1AsV0FBVTs7OEJBQ1osOERBQUNaLGlEQUFNQSxDQUFDb0IsRUFBRTtvQkFDUkMsU0FBUyxJQUFNaEIsZ0JBQWdCO29CQUMvQk8sV0FBVTtvQkFDVlUsWUFBWTt3QkFBRUMsT0FBTztvQkFBSTtvQkFDekJDLFVBQVU7d0JBQUVELE9BQU87b0JBQUk7OEJBQ3hCOzs7Ozs7OEJBR0QsOERBQUN2QixpREFBTUEsQ0FBQ29CLEVBQUU7b0JBQ1JDLFNBQVMsSUFBTWhCLGdCQUFnQjtvQkFDL0JPLFdBQVU7b0JBQ1ZVLFlBQVk7d0JBQUVDLE9BQU87b0JBQUk7b0JBQ3pCQyxVQUFVO3dCQUFFRCxPQUFPO29CQUFJOzhCQUN4Qjs7Ozs7OzhCQUdELDhEQUFDdkIsaURBQU1BLENBQUNvQixFQUFFO29CQUNSQyxTQUFTLElBQU1oQixnQkFBZ0I7b0JBQy9CTyxXQUFVO29CQUNWVSxZQUFZO3dCQUFFQyxPQUFPO29CQUFJO29CQUN6QkMsVUFBVTt3QkFBRUQsT0FBTztvQkFBSTs4QkFDeEI7Ozs7Ozs4QkFHRCw4REFBQ3ZCLGlEQUFNQSxDQUFDb0IsRUFBRTtvQkFDUkMsU0FBUyxJQUFNaEIsZ0JBQWdCO29CQUMvQk8sV0FBVTtvQkFDVlUsWUFBWTt3QkFBRUMsT0FBTztvQkFBSTtvQkFDekJDLFVBQVU7d0JBQUVELE9BQU87b0JBQUk7OEJBQ3hCOzs7Ozs7OEJBR0QsOERBQUN2QixpREFBTUEsQ0FBQ29CLEVBQUU7b0JBQ1JDLFNBQVMsSUFBTWhCLGdCQUFnQjtvQkFDL0JPLFdBQVU7b0JBQ1ZVLFlBQVk7d0JBQUVDLE9BQU87b0JBQUk7b0JBQ3pCQyxVQUFVO3dCQUFFRCxPQUFPO29CQUFJOzhCQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtLQTVETXRCO0FBOEROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wcy9NZW51SXRlbS5qcz83MWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IE1lbnVJdGVtID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIiwgc2VjdGlvbklkKTtcbiAgY29uc3Qgc2Nyb2xsVG9TZWN0aW9uID0gKHNlY3Rpb25JZCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSWQpO1xuICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0xMCBiZy1yZWQtMzAwIHAtNCBzaGFkb3cgbWVudVwiXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICA+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBnYXAtMTBcIj5cbiAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvU2VjdGlvbihcInNlY3Rpb24xXCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgID5cbiAgICAgICAgICBTZWN0aW9uMVxuICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvU2VjdGlvbihcInNlY3Rpb24yXCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgID5cbiAgICAgICAgICBTZWN0aW9uMlxuICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvU2VjdGlvbihcInNlY3Rpb24zXCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgID5cbiAgICAgICAgICBTZWN0aW9uM1xuICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvU2VjdGlvbihcInNlY3Rpb240XCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgID5cbiAgICAgICAgICBTZWN0aW9uNFxuICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvU2VjdGlvbihcInNlY3Rpb241XCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgID5cbiAgICAgICAgICBTZWN0aW9uNVxuICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgIDwvdWw+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJNZW51SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uSWQiLCJzY3JvbGxUb1NlY3Rpb24iLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ3aGlsZVRhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/comps/MenuItem.js\n"));

/***/ })

});