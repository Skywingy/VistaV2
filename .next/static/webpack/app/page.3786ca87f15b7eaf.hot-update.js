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

/***/ "(app-pages-browser)/./src/comps/Menu/use-dimensions.js":
/*!******************************************!*\
  !*** ./src/comps/Menu/use-dimensions.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n// Naive implementation - in reality would want to attach\n// a window or resize listener. Also use state/layoutEffect instead of ref/effect\n// if this is important to know on initial client render.\n// It would be safer to  return null for unmeasured states.\nconst useDimensions = (ref)=>{\n    _s();\n    const dimensions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({\n        width: 0,\n        height: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        dimensions.current.width = ref.current.offsetWidth;\n        dimensions.current.height = ref.current.offsetHeight;\n    }, []);\n    return dimensions.current;\n};\n_s(useDimensions, \"NpC5NsAphXwbxBdzDONhVAO+yb4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDimensions);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wcy9NZW51L3VzZS1kaW1lbnNpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBaUQ7QUFFakQseURBQXlEO0FBQ3pELGlGQUFpRjtBQUNqRix5REFBeUQ7QUFDekQsMkRBQTJEO0FBQzNELE1BQU1HLGdCQUFnQixDQUFDQzs7SUFDckIsTUFBTUMsYUFBYUgsNkNBQU1BLENBQUM7UUFBRUksT0FBTztRQUFHQyxRQUFRO0lBQUU7SUFFaEROLGdEQUFTQSxDQUFDO1FBQ1JJLFdBQVdHLE9BQU8sQ0FBQ0YsS0FBSyxHQUFHRixJQUFJSSxPQUFPLENBQUNDLFdBQVc7UUFDbERKLFdBQVdHLE9BQU8sQ0FBQ0QsTUFBTSxHQUFHSCxJQUFJSSxPQUFPLENBQUNFLFlBQVk7SUFDdEQsR0FBRyxFQUFFO0lBRUwsT0FBT0wsV0FBV0csT0FBTztBQUMzQjtHQVRNTDtBQVdOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wcy9NZW51L3VzZS1kaW1lbnNpb25zLmpzPzJjNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIE5haXZlIGltcGxlbWVudGF0aW9uIC0gaW4gcmVhbGl0eSB3b3VsZCB3YW50IHRvIGF0dGFjaFxuLy8gYSB3aW5kb3cgb3IgcmVzaXplIGxpc3RlbmVyLiBBbHNvIHVzZSBzdGF0ZS9sYXlvdXRFZmZlY3QgaW5zdGVhZCBvZiByZWYvZWZmZWN0XG4vLyBpZiB0aGlzIGlzIGltcG9ydGFudCB0byBrbm93IG9uIGluaXRpYWwgY2xpZW50IHJlbmRlci5cbi8vIEl0IHdvdWxkIGJlIHNhZmVyIHRvICByZXR1cm4gbnVsbCBmb3IgdW5tZWFzdXJlZCBzdGF0ZXMuXG5jb25zdCB1c2VEaW1lbnNpb25zID0gKHJlZikgPT4ge1xuICBjb25zdCBkaW1lbnNpb25zID0gdXNlUmVmKHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpbWVuc2lvbnMuY3VycmVudC53aWR0aCA9IHJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgIGRpbWVuc2lvbnMuY3VycmVudC5oZWlnaHQgPSByZWYuY3VycmVudC5vZmZzZXRIZWlnaHQ7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZGltZW5zaW9ucy5jdXJyZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRGltZW5zaW9ucztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURpbWVuc2lvbnMiLCJyZWYiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/comps/Menu/use-dimensions.js\n"));

/***/ })

});