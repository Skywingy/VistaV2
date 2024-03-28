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

/***/ "(app-pages-browser)/./src/comps/Menu/Example.js":
/*!***********************************!*\
  !*** ./src/comps/Menu/Example.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-cycle.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _use_dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-dimensions */ \"(app-pages-browser)/./src/comps/Menu/use-dimensions.js\");\n/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuToggle */ \"(app-pages-browser)/./src/comps/Menu/MenuToggle.js\");\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ \"(app-pages-browser)/./src/comps/Menu/Navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst sidebar = {\n    open: function() {\n        let height = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000;\n        return {\n            clipPath: \"circle(\".concat(height * 2 + 200, \"px at 40px 40px)\"),\n            transition: {\n                type: \"spring\",\n                stiffness: 20,\n                restDelta: 2\n            }\n        };\n    },\n    closed: {\n        clipPath: \"circle(30px at 40px 40px)\",\n        transition: {\n            delay: 0.5,\n            type: \"spring\",\n            stiffness: 400,\n            damping: 40\n        }\n    }\n};\nconst debounce = (func, delay)=>{\n    let timeoutId;\n    return function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(()=>func.apply(this, args), delay);\n    };\n};\nconst Example = ()=>{\n    _s();\n    const [isOpen, toggleOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useCycle)(false, true);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { height } = (0,_use_dimensions__WEBPACK_IMPORTED_MODULE_2__.useDimensions)(containerRef);\n    const [isToggling, setIsToggling] = useState(false);\n    const debouncedToggle = debounce(()=>{\n        toggleOpen();\n        setIsToggling(false); // Reset isToggling state after debounce delay\n    }, 300);\n    const handleToggle = ()=>{\n        if (!isToggling) {\n            // Check if not already toggling\n            setIsToggling(true); // Set isToggling to true to indicate toggle started\n            debouncedToggle(); // Call debouncedToggle function\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.nav, {\n        initial: false,\n        animate: isOpen ? \"open\" : \"closed\",\n        custom: height,\n        ref: containerRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                className: \"background1\",\n                variants: sidebar\n            }, void 0, false, {\n                fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_4__.Navigation, {}, void 0, false, {\n                fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuToggle__WEBPACK_IMPORTED_MODULE_3__.MenuToggle, {\n                toggle: ()=>debouncedToggle()\n            }, void 0, false, {\n                fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Example, \"iJluUD/skTw6qbOSuMQXQABPEuY=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useCycle,\n        _use_dimensions__WEBPACK_IMPORTED_MODULE_2__.useDimensions\n    ];\n});\n_c = Example;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);\nvar _c;\n$RefreshReg$(_c, \"Example\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wcy9NZW51L0V4YW1wbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDQTtBQUN3QjtBQUNOO0FBQ1A7QUFDQTtBQUUxQyxNQUFNUSxVQUFVO0lBQ2RDLE1BQU07WUFBQ0MsMEVBQVM7ZUFBVTtZQUN4QkMsVUFBVSxVQUEyQixPQUFqQkQsU0FBUyxJQUFJLEtBQUk7WUFDckNFLFlBQVk7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFdBQVc7Z0JBQ1hDLFdBQVc7WUFDYjtRQUNGOztJQUNBQyxRQUFRO1FBQ05MLFVBQVU7UUFDVkMsWUFBWTtZQUNWSyxPQUFPO1lBQ1BKLE1BQU07WUFDTkMsV0FBVztZQUNYSSxTQUFTO1FBQ1g7SUFDRjtBQUNGO0FBRUEsTUFBTUMsV0FBVyxDQUFDQyxNQUFNSDtJQUN0QixJQUFJSTtJQUNKLE9BQU87UUFBVTtZQUFHQyxLQUFILHVCQUFPOztRQUN0QkMsYUFBYUY7UUFDYkEsWUFBWUcsV0FBVyxJQUFNSixLQUFLSyxLQUFLLENBQUMsSUFBSSxFQUFFSCxPQUFPTDtJQUN2RDtBQUNGO0FBRUEsTUFBTVMsVUFBVTs7SUFDZCxNQUFNLENBQUNDLFFBQVFDLFdBQVcsR0FBR3hCLHVEQUFRQSxDQUFDLE9BQU87SUFDN0MsTUFBTXlCLGVBQWU1Qiw2Q0FBTUEsQ0FBQztJQUM1QixNQUFNLEVBQUVTLE1BQU0sRUFBRSxHQUFHTCw4REFBYUEsQ0FBQ3dCO0lBQ2pDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHQyxTQUFTO0lBRTdDLE1BQU1DLGtCQUFrQmQsU0FBUztRQUMvQlM7UUFDQUcsY0FBYyxRQUFRLDhDQUE4QztJQUN0RSxHQUFHO0lBRUgsTUFBTUcsZUFBZTtRQUNuQixJQUFJLENBQUNKLFlBQVk7WUFDZixnQ0FBZ0M7WUFDaENDLGNBQWMsT0FBTyxvREFBb0Q7WUFDekVFLG1CQUFtQixnQ0FBZ0M7UUFDckQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDL0IsaURBQU1BLENBQUNpQyxHQUFHO1FBQ1RDLFNBQVM7UUFDVEMsU0FBU1YsU0FBUyxTQUFTO1FBQzNCVyxRQUFRNUI7UUFDUjZCLEtBQUtWOzswQkFFTCw4REFBQzNCLGlEQUFNQSxDQUFDc0MsR0FBRztnQkFBQ0MsV0FBVTtnQkFBY0MsVUFBVWxDOzs7Ozs7MEJBQzlDLDhEQUFDRCxtREFBVUE7Ozs7OzBCQUNYLDhEQUFDRCxtREFBVUE7Z0JBQUNxQyxRQUFRLElBQU1WOzs7Ozs7Ozs7Ozs7QUFHaEM7R0EvQk1QOztRQUN5QnRCLG1EQUFRQTtRQUVsQkMsMERBQWFBOzs7S0FINUJxQjtBQWlDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcHMvTWVudS9FeGFtcGxlLmpzPzgzM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgc3luYywgdXNlQ3ljbGUgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlRGltZW5zaW9ucyB9IGZyb20gXCIuL3VzZS1kaW1lbnNpb25zXCI7XG5pbXBvcnQgeyBNZW51VG9nZ2xlIH0gZnJvbSBcIi4vTWVudVRvZ2dsZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL05hdmlnYXRpb25cIjtcblxuY29uc3Qgc2lkZWJhciA9IHtcbiAgb3BlbjogKGhlaWdodCA9IDEwMDApID0+ICh7XG4gICAgY2xpcFBhdGg6IGBjaXJjbGUoJHtoZWlnaHQgKiAyICsgMjAwfXB4IGF0IDQwcHggNDBweClgLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICBzdGlmZm5lc3M6IDIwLFxuICAgICAgcmVzdERlbHRhOiAyLFxuICAgIH0sXG4gIH0pLFxuICBjbG9zZWQ6IHtcbiAgICBjbGlwUGF0aDogXCJjaXJjbGUoMzBweCBhdCA0MHB4IDQwcHgpXCIsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZGVsYXk6IDAuNSxcbiAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICBzdGlmZm5lc3M6IDQwMCxcbiAgICAgIGRhbXBpbmc6IDQwLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBkZWJvdW5jZSA9IChmdW5jLCBkZWxheSkgPT4ge1xuICBsZXQgdGltZW91dElkO1xuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMuYXBwbHkodGhpcywgYXJncyksIGRlbGF5KTtcbiAgfTtcbn07XG5cbmNvbnN0IEV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHRvZ2dsZU9wZW5dID0gdXNlQ3ljbGUoZmFsc2UsIHRydWUpO1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHsgaGVpZ2h0IH0gPSB1c2VEaW1lbnNpb25zKGNvbnRhaW5lclJlZik7XG4gIGNvbnN0IFtpc1RvZ2dsaW5nLCBzZXRJc1RvZ2dsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBkZWJvdW5jZWRUb2dnbGUgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgdG9nZ2xlT3BlbigpO1xuICAgIHNldElzVG9nZ2xpbmcoZmFsc2UpOyAvLyBSZXNldCBpc1RvZ2dsaW5nIHN0YXRlIGFmdGVyIGRlYm91bmNlIGRlbGF5XG4gIH0sIDMwMCk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgIGlmICghaXNUb2dnbGluZykge1xuICAgICAgLy8gQ2hlY2sgaWYgbm90IGFscmVhZHkgdG9nZ2xpbmdcbiAgICAgIHNldElzVG9nZ2xpbmcodHJ1ZSk7IC8vIFNldCBpc1RvZ2dsaW5nIHRvIHRydWUgdG8gaW5kaWNhdGUgdG9nZ2xlIHN0YXJ0ZWRcbiAgICAgIGRlYm91bmNlZFRvZ2dsZSgpOyAvLyBDYWxsIGRlYm91bmNlZFRvZ2dsZSBmdW5jdGlvblxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24ubmF2XG4gICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgIGN1c3RvbT17aGVpZ2h0fVxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiB2YXJpYW50cz17c2lkZWJhcn0gLz5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICA8TWVudVRvZ2dsZSB0b2dnbGU9eygpID0+IGRlYm91bmNlZFRvZ2dsZSgpfSAvPlxuICAgIDwvbW90aW9uLm5hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJzeW5jIiwidXNlQ3ljbGUiLCJ1c2VEaW1lbnNpb25zIiwiTWVudVRvZ2dsZSIsIk5hdmlnYXRpb24iLCJzaWRlYmFyIiwib3BlbiIsImhlaWdodCIsImNsaXBQYXRoIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJyZXN0RGVsdGEiLCJjbG9zZWQiLCJkZWxheSIsImRhbXBpbmciLCJkZWJvdW5jZSIsImZ1bmMiLCJ0aW1lb3V0SWQiLCJhcmdzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwiRXhhbXBsZSIsImlzT3BlbiIsInRvZ2dsZU9wZW4iLCJjb250YWluZXJSZWYiLCJpc1RvZ2dsaW5nIiwic2V0SXNUb2dnbGluZyIsInVzZVN0YXRlIiwiZGVib3VuY2VkVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlIiwibmF2IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjdXN0b20iLCJyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/comps/Menu/Example.js\n"));

/***/ })

});