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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n// components/Section6.js\n\nvar _s = $RefreshSig$();\n\n\nconst Section6 = ()=>{\n    _s();\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();\n    const [sectionRef, inView] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView)();\n    const [animationStarted, setAnimationStarted] = useState(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView && !animationStarted) {\n            controls.start(\"visible\");\n            setAnimationStarted(true);\n        }\n    }, [\n        controls,\n        inView,\n        animationStarted\n    ]);\n    const sectionVariants = {\n        hidden: {\n            opacity: 0,\n            y: 100\n        },\n        visible: {\n            opacity: 1,\n            y: 0,\n            transition: {\n                duration: 0.6\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"section6\",\n        className: \"h-screen w-screen  bg-blue-700  z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold\",\n                    children: \"For Sale\"\n                }, void 0, false, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card h-screen flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            variants: sectionVariants,\n                            initial: \"hidden\",\n                            animate: controls,\n                            className: \"first h-3/4 w-2/5 rounded border-2 border-rose-600\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            variants: sectionVariants,\n                            initial: \"hidden\",\n                            animate: controls,\n                            className: \"second h-3/4 w-2/5 rounded border-2 border-rose-600\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Section6.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Section6, \"aVv8UV2V2TAD/aQ7LMl44a/LJug=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView\n    ];\n});\n_c = Section6;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section6);\nvar _c;\n$RefreshReg$(_c, \"Section6\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wcy9TZWN0aW9uNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEseUJBQXlCOzs7QUFDZ0I7QUFDdUI7QUFFaEUsTUFBTUssV0FBVzs7SUFDZixNQUFNQyxXQUFXSCwyREFBWUE7SUFDN0IsTUFBTSxDQUFDSSxZQUFZQyxPQUFPLEdBQUdKLHdEQUFTQTtJQUN0QyxNQUFNLENBQUNLLGtCQUFrQkMsb0JBQW9CLEdBQUdDLFNBQVM7SUFFekRWLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sVUFBVSxDQUFDQyxrQkFBa0I7WUFDL0JILFNBQVNNLEtBQUssQ0FBQztZQUNmRixvQkFBb0I7UUFDdEI7SUFDRixHQUFHO1FBQUNKO1FBQVVFO1FBQVFDO0tBQWlCO0lBQ3ZDLE1BQU1JLGtCQUFrQjtRQUN0QkMsUUFBUTtZQUFFQyxTQUFTO1lBQUdDLEdBQUc7UUFBSTtRQUM3QkMsU0FBUztZQUFFRixTQUFTO1lBQUdDLEdBQUc7WUFBR0UsWUFBWTtnQkFBRUMsVUFBVTtZQUFJO1FBQUU7SUFDN0Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUUMsSUFBRztRQUFXQyxXQUFVO2tCQUMvQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFHRixXQUFVOzhCQUFxQjs7Ozs7OzhCQUNuQyw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDcEIsaURBQU1BLENBQUNxQixHQUFHOzRCQUNURSxVQUFVWjs0QkFDVmEsU0FBUTs0QkFDUkMsU0FBU3JCOzRCQUNUZ0IsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDcEIsaURBQU1BLENBQUNxQixHQUFHOzRCQUNURSxVQUFVWjs0QkFDVmEsU0FBUTs0QkFDUkMsU0FBU3JCOzRCQUNUZ0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0FyQ01qQjs7UUFDYUYsdURBQVlBO1FBQ0FDLG9EQUFTQTs7O0tBRmxDQztBQXVDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcHMvU2VjdGlvbjYuanM/MzZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL1NlY3Rpb242LmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiwgdXNlSW5WaWV3IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgU2VjdGlvbjYgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IFtzZWN0aW9uUmVmLCBpblZpZXddID0gdXNlSW5WaWV3KCk7XG4gIGNvbnN0IFthbmltYXRpb25TdGFydGVkLCBzZXRBbmltYXRpb25TdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpblZpZXcgJiYgIWFuaW1hdGlvblN0YXJ0ZWQpIHtcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KFwidmlzaWJsZVwiKTtcbiAgICAgIHNldEFuaW1hdGlvblN0YXJ0ZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbY29udHJvbHMsIGluVmlldywgYW5pbWF0aW9uU3RhcnRlZF0pO1xuICBjb25zdCBzZWN0aW9uVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDEwMCB9LFxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC42IH0gfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwic2VjdGlvbjZcIiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiAgYmctYmx1ZS03MDAgIHotNTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktOFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+Rm9yIFNhbGU8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC1zY3JlZW4gZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB2YXJpYW50cz17c2VjdGlvblZhcmlhbnRzfVxuICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpcnN0IGgtMy80IHctMi81IHJvdW5kZWQgYm9yZGVyLTIgYm9yZGVyLXJvc2UtNjAwXCJcbiAgICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB2YXJpYW50cz17c2VjdGlvblZhcmlhbnRzfVxuICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY29uZCBoLTMvNCB3LTIvNSByb3VuZGVkIGJvcmRlci0yIGJvcmRlci1yb3NlLTYwMFwiXG4gICAgICAgICAgPjwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uNjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsInVzZUluVmlldyIsIlNlY3Rpb242IiwiY29udHJvbHMiLCJzZWN0aW9uUmVmIiwiaW5WaWV3IiwiYW5pbWF0aW9uU3RhcnRlZCIsInNldEFuaW1hdGlvblN0YXJ0ZWQiLCJ1c2VTdGF0ZSIsInN0YXJ0Iiwic2VjdGlvblZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/comps/Section6.js\n"));

/***/ })

});