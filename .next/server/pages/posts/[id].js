"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Post = (props)=>{\n    var ref;\n    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\fullstack\\\\nextjs-live\\\\pages\\\\posts\\\\[id].js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: [\n                    \" SSG (Post) \",\n                    (ref = props.post) === null || ref === void 0 ? void 0 : ref.title,\n                    \" \"\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: ()=>setShow((old)=>!old\n                    )\n                ,\n                __source: {\n                    fileName: \"C:\\\\fullstack\\\\nextjs-live\\\\pages\\\\posts\\\\[id].js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \" Toggle \"\n            }),\n            show && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\fullstack\\\\nextjs-live\\\\pages\\\\posts\\\\[id].js\",\n                    lineNumber: 13,\n                    columnNumber: 25\n                },\n                __self: undefined,\n                children: [\n                    \" \",\n                    props.posts.userId,\n                    \" \"\n                ]\n            })\n        ]\n    }));\n};\nasync function getStaticProps({ params  }) {\n    const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);\n    const postData = await post.json();\n    return {\n        props: {\n            date: new Date().getTime(),\n            name: 'renatoDomingues',\n            id: params.id,\n            posts: postData\n        },\n        revalidate: 60\n    };\n}\nasync function getStaticPaths() {\n    const posts = await fetch('http://jsonplaceholder.typicode.com/posts');\n    const postsData = await posts.json();\n    const paths = postsData.map((post)=>{\n        return {\n            params: {\n                id: post.id.toString()\n            }\n        };\n    });\n    return {\n        paths: paths,\n        fallback: 'blocking'\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dDO0FBRWhDLEtBQUssQ0FBQ0MsSUFBSSxJQUFJQyxLQUFLLEdBQUssQ0FBQztRQU1JQSxHQUFVO0lBSm5DLEtBQUssTUFBR0MsSUFBSSxNQUFFQyxPQUFPLE1BQUtKLCtDQUFRLENBQUMsS0FBSztJQUV4QyxNQUFNLHVFQUFDOztrRkFFRUssQ0FBRTs7Ozs7Ozs7b0JBQUMsQ0FBWTtxQkFBQ0gsR0FBVSxHQUFWQSxLQUFLLENBQUNJLElBQUksY0FBVkosR0FBVSxLQUFWQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxHQUFVLENBQUVLLEtBQUs7b0JBQUMsQ0FBQzs7O2lGQUNuQ0MsQ0FBTTtnQkFBQ0MsT0FBTyxNQUFRTCxPQUFPLEVBQUVNLEdBQUcsSUFBTUEsR0FBRzs7Ozs7Ozs7OzBCQUFHLENBQVE7O1lBRW5EUCxJQUFJLDBFQUFLUSxDQUFDOzs7Ozs7OztvQkFBQyxDQUFDO29CQUFDVCxLQUFLLENBQUNVLEtBQUssQ0FBQ0MsTUFBTTtvQkFBQyxDQUFDOzs7OztBQUlqRCxDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFFLENBQUNDLENBQUFBLE1BQU0sR0FBQyxFQUFHLENBQUM7SUFFOUMsS0FBSyxDQUFDVCxJQUFJLEdBQUcsS0FBSyxDQUFDVSxLQUFLLENBQUMsQ0FBNkMsK0NBQUNELE1BQU0sQ0FBQ0UsRUFBRTtJQUNoRixLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNaLElBQUksQ0FBQ2EsSUFBSTtJQUVoQyxNQUFNLEVBQUM7UUFDSGpCLEtBQUssRUFBRSxDQUFDO1lBQ0prQixJQUFJLEVBQUUsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLE9BQU87WUFDeEJDLElBQUksRUFBRSxDQUFpQjtZQUN2Qk4sRUFBRSxFQUFFRixNQUFNLENBQUNFLEVBQUU7WUFDYkwsS0FBSyxFQUFFTSxRQUFRO1FBQ25CLENBQUM7UUFDRE0sVUFBVSxFQUFFLEVBQUU7SUFDbEIsQ0FBQztBQUNMLENBQUM7QUFFTSxlQUFlQyxjQUFjLEdBQUUsQ0FBQztJQUVuQyxLQUFLLENBQUNiLEtBQUssR0FBRyxLQUFLLENBQUNJLEtBQUssQ0FBQyxDQUEyQztJQUNyRSxLQUFLLENBQUNVLFNBQVMsR0FBRyxLQUFLLENBQUNkLEtBQUssQ0FBQ08sSUFBSTtJQUVsQyxLQUFLLENBQUNRLEtBQUssR0FBR0QsU0FBUyxDQUFDRSxHQUFHLEVBQUN0QixJQUFJLEdBQUksQ0FBQztRQUNqQyxNQUFNLENBQUMsQ0FBQztZQUNKUyxNQUFNLEVBQUUsQ0FBQztnQkFDTEUsRUFBRSxFQUFFWCxJQUFJLENBQUNXLEVBQUUsQ0FBQ1ksUUFBUTtZQUN4QixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLEVBQUM7UUFDSEYsS0FBSyxFQUFFQSxLQUFLO1FBQ1pHLFFBQVEsRUFBRSxDQUFVO0lBQ3hCLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWU3QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWxpdmUvLi9wYWdlcy9wb3N0cy9baWRdLmpzPzc5NjYiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbIHNob3csIHNldFNob3cgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+IFNTRyAoUG9zdCkge3Byb3BzLnBvc3Q/LnRpdGxlfSA8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3coKG9sZCkgPT4gIW9sZCl9PiBUb2dnbGUgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3cgJiYgPHA+IHtwcm9wcy5wb3N0cy51c2VySWR9IDwvcD5cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoIHtwYXJhbXN9ICkge1xyXG5cclxuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLycrcGFyYW1zLmlkKVxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBwb3N0Lmpzb24oKVxyXG4gICAgXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIG5hbWU6ICdyZW5hdG9Eb21pbmd1ZXMnLFxyXG4gICAgICAgICAgICBpZDogcGFyYW1zLmlkLFxyXG4gICAgICAgICAgICBwb3N0czogcG9zdERhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDYwLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcclxuXHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IGZldGNoKCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpXHJcbiAgICBjb25zdCBwb3N0c0RhdGEgPSBhd2FpdCBwb3N0cy5qc29uKClcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IHBvc3RzRGF0YS5tYXAocG9zdCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogcG9zdC5pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcGF0aHM6IHBhdGhzLCAvL1t7IHBhcmFtczogeyBpZDogJzEnfX0sIHsgcGFyYW1zOiB7IGlkOiAnNSd9IH1dLFxyXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUG9zdCIsInByb3BzIiwic2hvdyIsInNldFNob3ciLCJoMSIsInBvc3QiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbGQiLCJwIiwicG9zdHMiLCJ1c2VySWQiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImZldGNoIiwiaWQiLCJwb3N0RGF0YSIsImpzb24iLCJkYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJuYW1lIiwicmV2YWxpZGF0ZSIsImdldFN0YXRpY1BhdGhzIiwicG9zdHNEYXRhIiwicGF0aHMiLCJtYXAiLCJ0b1N0cmluZyIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();