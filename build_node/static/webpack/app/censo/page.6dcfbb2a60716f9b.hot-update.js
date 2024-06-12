"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/censo/page",{

/***/ "(app-pages-browser)/./src/hooks/services_censo.js":
/*!*************************************!*\
  !*** ./src/hooks/services_censo.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   guardar_censo: function() { return /* binding */ guardar_censo; },\n/* harmony export */   lista_censo: function() { return /* binding */ lista_censo; },\n/* harmony export */   motivo_censo: function() { return /* binding */ motivo_censo; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection */ \"(app-pages-browser)/./src/hooks/connection.js\");\n\n\nasync function guardar_censo(token, data) {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST)(\"guardar/censo/persona\", data, token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function motivo_censo() {\n    let datos = null;\n    try {\n        const response = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"motivo/activos\");\n        datos = response.data.datos;\n    } catch (error) {\n        return error.response.data;\n    }\n    return datos;\n}\nasync function lista_censo() {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"censo\");\n    } catch (error) {\n        return error.response.data;\n    }\n    return datos.data;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9zZXJ2aWNlc19jZW5zby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNPO0FBRWhDLGVBQWVHLGNBQWNDLEtBQUssRUFBRUMsSUFBSTtJQUMzQyxJQUFJQyxRQUFRO0lBQ1osSUFBSTtRQUNBQSxRQUFRLE1BQU1KLGlEQUFJQSxDQUFDLHlCQUF5QkcsTUFBTUQ7SUFDdEQsRUFBRSxPQUFPRyxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsUUFBUSxDQUFDTCxJQUFJO1FBQy9CLE9BQU87WUFBRSxRQUFRO1FBQUk7SUFDekI7SUFDQSxPQUFPQyxNQUFNRCxJQUFJO0FBQ3JCO0FBRU8sZUFBZU07SUFDbEIsSUFBSUwsUUFBUTtJQUVaLElBQUk7UUFDQSxNQUFNSSxXQUFXLE1BQU1ULGdEQUFHQSxDQUFDO1FBQzNCSyxRQUFRSSxTQUFTTCxJQUFJLENBQUNDLEtBQUs7SUFDL0IsRUFBRSxPQUFPQyxPQUFPO1FBQ1osT0FBT0EsTUFBTUcsUUFBUSxDQUFDTCxJQUFJO0lBQzlCO0lBQ0EsT0FBT0M7QUFDWDtBQUVPLGVBQWVNO0lBQ2xCLElBQUlOLFFBQVE7SUFFWixJQUFJO1FBQ0FBLFFBQVEsTUFBTUwsZ0RBQUdBLENBQUM7SUFDdEIsRUFBRSxPQUFPTSxPQUFPO1FBQ1osT0FBT0EsTUFBTUcsUUFBUSxDQUFDTCxJQUFJO0lBQzlCO0lBQ0EsT0FBT0MsTUFBTUQsSUFBSTtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3Mvc2VydmljZXNfY2Vuc28uanM/MDY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQge0dFVCwgUE9TVH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ3VhcmRhcl9jZW5zbyh0b2tlbiwgZGF0YSkge1xuICAgIGxldCBkYXRvcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgZGF0b3MgPSBhd2FpdCBQT1NUKCdndWFyZGFyL2NlbnNvL3BlcnNvbmEnLCBkYXRhLCB0b2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHJldHVybiB7IFwiY29kZVwiOiA1MDAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0b3MuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1vdGl2b19jZW5zbygpIHtcbiAgICBsZXQgZGF0b3MgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBHRVQoJ21vdGl2by9hY3Rpdm9zJyk7XG4gICAgICAgIGRhdG9zID0gcmVzcG9uc2UuZGF0YS5kYXRvcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdG9zO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdGFfY2Vuc28oKSB7XG4gICAgbGV0IGRhdG9zID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICAgIGRhdG9zID0gYXdhaXQgR0VUKCdjZW5zbycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0b3MuZGF0YTtcbn0iXSwibmFtZXMiOlsiQ29va2llcyIsIkdFVCIsIlBPU1QiLCJndWFyZGFyX2NlbnNvIiwidG9rZW4iLCJkYXRhIiwiZGF0b3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm1vdGl2b19jZW5zbyIsImxpc3RhX2NlbnNvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/services_censo.js\n"));

/***/ })

});