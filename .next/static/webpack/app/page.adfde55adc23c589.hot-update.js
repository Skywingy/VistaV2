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

/***/ "(app-pages-browser)/./src/comps/Section6.js":
/*!*******************************!*\
  !*** ./src/comps/Section6.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n// components/Section6.js\n\nvar _s = $RefreshSig$();\n\n\nconst Section6 = ()=>{\n    _s();\n    console.log(\"section6\");\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView)(ref);\n    const sectionVariants = {\n        hidden: {\n            opacity: 0,\n            y: 100\n        },\n        visible: {\n            opacity: 1,\n            y: 0,\n            transition: {\n                duration: 1.5\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"now y see me\", isInView);\n        if (isInView) {\n            console.log(\"should be here\");\n            controls.start(\"visible\");\n        }\n    }, [\n        controls,\n        isInView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: ref,\n        id: \"section6\",\n        className: \"h-120% w-screen  bg-blue-700  z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-4xl font-bold pb-2\",\n                    children: \"For Sale\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card h-screen flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            variants: sectionVariants,\n                            initial: \"hidden\",\n                            animate: controls,\n                            className: \"first h-3/4 w-2/5 rounded border-2 border-rose-600\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            variants: sectionVariants,\n                            initial: \"hidden\",\n                            animate: controls,\n                            className: \"second h-3/4 w-2/5 rounded border-2 border-rose-600\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Section6, \"VZT9yWWS8pdArFQ0OA8soDLuINc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView\n    ];\n});\n_c = Section6;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section6);\nvar _c;\n$RefreshReg$(_c, \"Section6\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wcy9TZWN0aW9uNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEseUJBQXlCOzs7QUFDd0I7QUFDZTtBQUVoRSxNQUFNTSxXQUFXOztJQUNmQyxRQUFRQyxHQUFHLENBQUM7SUFFWixNQUFNQyxXQUFXTCwyREFBWUE7SUFDN0IsTUFBTU0sTUFBTVIsNkNBQU1BLENBQUM7SUFDbkIsTUFBTVMsV0FBV04sd0RBQVNBLENBQUNLO0lBRTNCLE1BQU1FLGtCQUFrQjtRQUN0QkMsUUFBUTtZQUFFQyxTQUFTO1lBQUdDLEdBQUc7UUFBSTtRQUM3QkMsU0FBUztZQUFFRixTQUFTO1lBQUdDLEdBQUc7WUFBR0UsWUFBWTtnQkFBRUMsVUFBVTtZQUFJO1FBQUU7SUFDN0Q7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1JNLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JHO1FBQzVCLElBQUlBLFVBQVU7WUFDWkosUUFBUUMsR0FBRyxDQUFDO1lBQ1pDLFNBQVNVLEtBQUssQ0FBQztRQUNqQjtJQUNGLEdBQUc7UUFBQ1Y7UUFBVUU7S0FBUztJQUN2QixxQkFDRSw4REFBQ1M7UUFDQ1YsS0FBS0E7UUFDTFcsSUFBRztRQUNIQyxXQUFVO2tCQUVWLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQTBCOzs7Ozs7OEJBQ3hDLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNuQixpREFBTUEsQ0FBQ29CLEdBQUc7NEJBQ1RFLFVBQVViOzRCQUNWYyxTQUFROzRCQUNSQyxTQUFTbEI7NEJBQ1RhLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ25CLGlEQUFNQSxDQUFDb0IsR0FBRzs0QkFDVEUsVUFBVWI7NEJBQ1ZjLFNBQVE7NEJBQ1JDLFNBQVNsQjs0QkFDVGEsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0E1Q01oQjs7UUFHYUYsdURBQVlBO1FBRVpDLG9EQUFTQTs7O0tBTHRCQztBQThDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcHMvU2VjdGlvbjYuanM/MzZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL1NlY3Rpb242LmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uLCB1c2VJblZpZXcgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBTZWN0aW9uNiA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJzZWN0aW9uNlwiKTtcblxuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZik7XG5cbiAgY29uc3Qgc2VjdGlvblZhcmlhbnRzID0ge1xuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAxMDAgfSxcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEuNSB9IH0sXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm5vdyB5IHNlZSBtZVwiLCBpc0luVmlldyk7XG4gICAgaWYgKGlzSW5WaWV3KSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNob3VsZCBiZSBoZXJlXCIpO1xuICAgICAgY29udHJvbHMuc3RhcnQoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbiAgfSwgW2NvbnRyb2xzLCBpc0luVmlld10pO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGlkPVwic2VjdGlvbjZcIlxuICAgICAgY2xhc3NOYW1lPVwiaC0xMjAlIHctc2NyZWVuICBiZy1ibHVlLTcwMCAgei01MFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS04XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgcGItMlwiPkZvciBTYWxlPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtc2NyZWVuIGZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgdmFyaWFudHM9e3NlY3Rpb25WYXJpYW50c31cbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXJzdCBoLTMvNCB3LTIvNSByb3VuZGVkIGJvcmRlci0yIGJvcmRlci1yb3NlLTYwMFwiXG4gICAgICAgICAgPjwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgdmFyaWFudHM9e3NlY3Rpb25WYXJpYW50c31cbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWNvbmQgaC0zLzQgdy0yLzUgcm91bmRlZCBib3JkZXItMiBib3JkZXItcm9zZS02MDBcIlxuICAgICAgICAgID48L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjY7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJ1c2VJblZpZXciLCJTZWN0aW9uNiIsImNvbnNvbGUiLCJsb2ciLCJjb250cm9scyIsInJlZiIsImlzSW5WaWV3Iiwic2VjdGlvblZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3RhcnQiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/comps/Section6.js\n"));

/***/ })

});