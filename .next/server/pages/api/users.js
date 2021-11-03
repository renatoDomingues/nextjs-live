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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    //res.end('Users!')\n    res.end(JSON.stringify({\n        users: [\n            {\n                id: 1\n            }\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNlLFFBQVEsQ0FBQ0EsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBQyxDQUFDO0lBQ3RDLEVBQW1CO0lBQ25CQSxHQUFHLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQUM7Z0JBQUNDLEVBQUUsRUFBRSxDQUFDO1lBQUMsQ0FBQztRQUFBLENBQUM7SUFBQyxDQUFDO0FBQ2pELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtbGl2ZS8uL3BhZ2VzL2FwaS91c2Vycy5qcz80OWY2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcclxuICAgIC8vcmVzLmVuZCgnVXNlcnMhJylcclxuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyB1c2VyczogW3sgaWQ6IDEgfV0gfSkpXHJcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VycyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/users.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/users.js"));
module.exports = __webpack_exports__;

})();