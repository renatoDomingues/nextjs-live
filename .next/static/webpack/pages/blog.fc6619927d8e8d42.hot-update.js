"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Blog = function(param) {\n    var posts = param.posts;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\fullstack\\\\nextjs-live\\\\pages\\\\blog.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \" SSG \"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"C:\\\\fullstack\\\\nextjs-live\\\\pages\\\\blog.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: posts.map(function(post) {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        __source: {\n                            fileName: \"C:\\\\fullstack\\\\nextjs-live\\\\pages\\\\blog.js\",\n                            lineNumber: 11,\n                            columnNumber: 25\n                        },\n                        __self: _this1,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: '/posts/' + post.id,\n                            __source: {\n                                fileName: \"C:\\\\fullstack\\\\nextjs-live\\\\pages\\\\blog.js\",\n                                lineNumber: 12,\n                                columnNumber: 29\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                __source: {\n                                    fileName: \"C:\\\\fullstack\\\\nextjs-live\\\\pages\\\\blog.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 33\n                                },\n                                __self: _this1,\n                                children: [\n                                    \" \",\n                                    post.title,\n                                    \" \"\n                                ]\n                            })\n                        })\n                    }));\n                })\n            })\n        ]\n    }));\n};\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEI7O0FBRTVCLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLFFBQVEsUUFBTyxDQUFDO1FBQWJDLEtBQUssU0FBTEEsS0FBSzs7SUFDakIsTUFBTSx1RUFBQzs7aUZBRUVDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBSzs7aUZBQ1JDLENBQUU7Ozs7Ozs7MEJBQ0VGLEtBQUssQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7b0JBQ2xCLE1BQU0sc0VBQ0RDLENBQUU7Ozs7Ozs7dUdBQ0VQLGtEQUFJOzRCQUFDUSxJQUFJLEVBQUUsQ0FBUyxXQUFDRixJQUFJLENBQUNHLEVBQUU7Ozs7Ozs7NEdBQ3hCQyxDQUFDOzs7Ozs7OztvQ0FBQyxDQUFDO29DQUFDSixJQUFJLENBQUNLLEtBQUs7b0NBQUMsQ0FBQzs7Ozs7Z0JBSWpDLENBQUM7Ozs7QUFJakIsQ0FBQztLQWpCS1YsSUFBSTs7QUFpQ1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBCbG9nID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT4gU1NHIDwvaDE+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0cy8nK3Bvc3QuaWR9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4ge3Bvc3QudGl0bGV9IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblxyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxyXG4gICAgY29uc3QgcG9zdHNEYXRhID0gYXdhaXQgcG9zdHMuanNvbigpXHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBuYW1lOiAncmVuYXRvRG9taW5ndWVzJyxcclxuICAgICAgICAgICAgcG9zdDogcG9zdHNEYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2ciXSwibmFtZXMiOlsiTGluayIsIkJsb2ciLCJwb3N0cyIsImgxIiwidWwiLCJtYXAiLCJwb3N0IiwibGkiLCJocmVmIiwiaWQiLCJhIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});