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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-cycle.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _use_dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-dimensions */ \"(app-pages-browser)/./src/comps/Menu/use-dimensions.js\");\n/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuToggle */ \"(app-pages-browser)/./src/comps/Menu/MenuToggle.js\");\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ \"(app-pages-browser)/./src/comps/Menu/Navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst sidebar = {\n    open: function() {\n        let height = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000;\n        return {\n            clipPath: \"circle(\".concat(height * 2 + 200, \"px at 40px 40px)\"),\n            transition: {\n                type: \"spring\",\n                stiffness: 20,\n                restDelta: 2\n            }\n        };\n    },\n    closed: {\n        clipPath: \"circle(30px at 40px 40px)\",\n        transition: {\n            delay: 0.5,\n            type: \"spring\",\n            stiffness: 400,\n            damping: 40\n        }\n    }\n};\nconst Example = ()=>{\n    _s();\n    const [isOpen, toggleOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useCycle)(false, true);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { height } = (0,_use_dimensions__WEBPACK_IMPORTED_MODULE_2__.useDimensions)(containerRef);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.nav, {\n        initial: false,\n        animate: isOpen ? \"open\" : \"closed\",\n        custom: height,\n        ref: containerRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                className: \"background1\",\n                variants: sidebar\n            }, void 0, false, {\n                fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_4__.Navigation, {}, void 0, false, {\n                fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuToggle__WEBPACK_IMPORTED_MODULE_3__.MenuToggle, {\n                toggle: ()=>toggleOpen()\n            }, void 0, false, {\n                fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Example, \"bkodWS93JBXr46jlqLzgn3OoaQc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useCycle,\n        _use_dimensions__WEBPACK_IMPORTED_MODULE_2__.useDimensions\n    ];\n});\n_c = Example;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);\nvar _c;\n$RefreshReg$(_c, \"Example\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wcy9NZW51L0V4YW1wbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDQTtBQUN3QjtBQUNOO0FBQ1A7QUFDQTtBQUUxQyxNQUFNUSxVQUFVO0lBQ2RDLE1BQU07WUFBQ0MsMEVBQVM7ZUFBVTtZQUN4QkMsVUFBVSxVQUEyQixPQUFqQkQsU0FBUyxJQUFJLEtBQUk7WUFDckNFLFlBQVk7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFdBQVc7Z0JBQ1hDLFdBQVc7WUFDYjtRQUNGOztJQUNBQyxRQUFRO1FBQ05MLFVBQVU7UUFDVkMsWUFBWTtZQUNWSyxPQUFPO1lBQ1BKLE1BQU07WUFDTkMsV0FBVztZQUNYSSxTQUFTO1FBQ1g7SUFDRjtBQUNGO0FBRUEsTUFBTUMsVUFBVTs7SUFDZCxNQUFNLENBQUNDLFFBQVFDLFdBQVcsR0FBR2pCLHVEQUFRQSxDQUFDLE9BQU87SUFDN0MsTUFBTWtCLGVBQWVyQiw2Q0FBTUEsQ0FBQztJQUM1QixNQUFNLEVBQUVTLE1BQU0sRUFBRSxHQUFHTCw4REFBYUEsQ0FBQ2lCO0lBRWpDLHFCQUNFLDhEQUFDcEIsaURBQU1BLENBQUNxQixHQUFHO1FBQ1RDLFNBQVM7UUFDVEMsU0FBU0wsU0FBUyxTQUFTO1FBQzNCTSxRQUFRaEI7UUFDUmlCLEtBQUtMOzswQkFFTCw4REFBQ3BCLGlEQUFNQSxDQUFDMEIsR0FBRztnQkFBQ0MsV0FBVTtnQkFBY0MsVUFBVXRCOzs7Ozs7MEJBQzlDLDhEQUFDRCxtREFBVUE7Ozs7OzBCQUNYLDhEQUFDRCxtREFBVUE7Z0JBQUN5QixRQUFRLElBQU1WOzs7Ozs7Ozs7Ozs7QUFHaEM7R0FqQk1GOztRQUN5QmYsbURBQVFBO1FBRWxCQywwREFBYUE7OztLQUg1QmM7QUFtQk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBzL01lbnUvRXhhbXBsZS5qcz84MzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHN5bmMsIHVzZUN5Y2xlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZURpbWVuc2lvbnMgfSBmcm9tIFwiLi91c2UtZGltZW5zaW9uc1wiO1xuaW1wb3J0IHsgTWVudVRvZ2dsZSB9IGZyb20gXCIuL01lbnVUb2dnbGVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IHNpZGViYXIgPSB7XG4gIG9wZW46IChoZWlnaHQgPSAxMDAwKSA9PiAoe1xuICAgIGNsaXBQYXRoOiBgY2lyY2xlKCR7aGVpZ2h0ICogMiArIDIwMH1weCBhdCA0MHB4IDQwcHgpYCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgc3RpZmZuZXNzOiAyMCxcbiAgICAgIHJlc3REZWx0YTogMixcbiAgICB9LFxuICB9KSxcbiAgY2xvc2VkOiB7XG4gICAgY2xpcFBhdGg6IFwiY2lyY2xlKDMwcHggYXQgNDBweCA0MHB4KVwiLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGRlbGF5OiAwLjUsXG4gICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgc3RpZmZuZXNzOiA0MDAsXG4gICAgICBkYW1waW5nOiA0MCxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgeyBoZWlnaHQgfSA9IHVzZURpbWVuc2lvbnMoY29udGFpbmVyUmVmKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24ubmF2XG4gICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgIGN1c3RvbT17aGVpZ2h0fVxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZDFcIiB2YXJpYW50cz17c2lkZWJhcn0gLz5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICA8TWVudVRvZ2dsZSB0b2dnbGU9eygpID0+IHRvZ2dsZU9wZW4oKX0gLz5cbiAgICA8L21vdGlvbi5uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwibW90aW9uIiwic3luYyIsInVzZUN5Y2xlIiwidXNlRGltZW5zaW9ucyIsIk1lbnVUb2dnbGUiLCJOYXZpZ2F0aW9uIiwic2lkZWJhciIsIm9wZW4iLCJoZWlnaHQiLCJjbGlwUGF0aCIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwicmVzdERlbHRhIiwiY2xvc2VkIiwiZGVsYXkiLCJkYW1waW5nIiwiRXhhbXBsZSIsImlzT3BlbiIsInRvZ2dsZU9wZW4iLCJjb250YWluZXJSZWYiLCJuYXYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImN1c3RvbSIsInJlZiIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/comps/Menu/Example.js\n"));

/***/ })

});