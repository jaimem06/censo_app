"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/person/new/page",{

/***/ "(app-pages-browser)/./src/hooks/service_persona.js":
/*!**************************************!*\
  !*** ./src/hooks/service_persona.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   all_person: function() { return /* binding */ all_person; },\n/* harmony export */   estado_civil: function() { return /* binding */ estado_civil; },\n/* harmony export */   save_person_census: function() { return /* binding */ save_person_census; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection */ \"(app-pages-browser)/./src/hooks/connection.js\");\n\n\nasync function all_person() {\n    let datos = null;\n    try {\n        const token = await js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"persona\", token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n// TODO agarrar errores\n}\nasync function estado_civil() {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"estados_civiles\");\n    } catch (error) {\n        return error.response.data;\n    }\n    return datos.data;\n}\nasync function save_person_census(token, data) {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST)(\"persona/guardar/censado\", data, token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9zZXJ2aWNlX3BlcnNvbmEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDUztBQUVsQyxlQUFlRztJQUNsQixJQUFJQyxRQUFRO0lBRVosSUFBSTtRQUNBLE1BQU1DLFFBQVEsTUFBTUwsaURBQU9BLENBQUNNLEdBQUcsQ0FBQztRQUNoQ0YsUUFBUSxNQUFNSCxnREFBR0EsQ0FBQyxXQUFXSTtJQUNqQyxFQUFFLE9BQU9FLE9BQU87UUFDWkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxRQUFRLENBQUNDLElBQUk7UUFDL0IsT0FBTztZQUFFLFFBQVE7UUFBSTtJQUN6QjtJQUNBLE9BQU9QLE1BQU1PLElBQUk7QUFDakIsdUJBQXVCO0FBQzNCO0FBRU8sZUFBZUM7SUFDbEIsSUFBSVIsUUFBUTtJQUVaLElBQUk7UUFDQUEsUUFBUSxNQUFNSCxnREFBR0EsQ0FBQztJQUN0QixFQUFFLE9BQU9NLE9BQU87UUFDWixPQUFPQSxNQUFNRyxRQUFRLENBQUNDLElBQUk7SUFDOUI7SUFDQSxPQUFPUCxNQUFNTyxJQUFJO0FBQ3JCO0FBRU8sZUFBZUUsbUJBQW1CUixLQUFLLEVBQUVNLElBQUk7SUFDaEQsSUFBSVAsUUFBUTtJQUNaLElBQUk7UUFDQUEsUUFBUSxNQUFNRixpREFBSUEsQ0FBQywyQkFBMkJTLE1BQU1OO0lBQ3hELEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSTtRQUMvQixPQUFPO1lBQUUsUUFBUTtRQUFJO0lBQ3pCO0lBQ0EsT0FBT1AsTUFBTU8sSUFBSTtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3Mvc2VydmljZV9wZXJzb25hLmpzPzg2YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IEdFVCwgUE9TVCB9IGZyb20gJy4vY29ubmVjdGlvbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbGxfcGVyc29uKCkge1xuICAgIGxldCBkYXRvcyA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgICAgICBkYXRvcyA9IGF3YWl0IEdFVCgncGVyc29uYScsIHRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IDUwMCB9XG4gICAgfVxuICAgIHJldHVybiBkYXRvcy5kYXRhO1xuICAgIC8vIFRPRE8gYWdhcnJhciBlcnJvcmVzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlc3RhZG9fY2l2aWwoKSB7XG4gICAgbGV0IGRhdG9zID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICAgIGRhdG9zID0gYXdhaXQgR0VUKCdlc3RhZG9zX2NpdmlsZXMnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdG9zLmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlX3BlcnNvbl9jZW5zdXModG9rZW4sIGRhdGEpIHtcbiAgICBsZXQgZGF0b3MgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIGRhdG9zID0gYXdhaXQgUE9TVCgncGVyc29uYS9ndWFyZGFyL2NlbnNhZG8nLCBkYXRhLCB0b2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHJldHVybiB7IFwiY29kZVwiOiA1MDAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0b3MuZGF0YTtcbn0iXSwibmFtZXMiOlsiQ29va2llcyIsIkdFVCIsIlBPU1QiLCJhbGxfcGVyc29uIiwiZGF0b3MiLCJ0b2tlbiIsImdldCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZGF0YSIsImVzdGFkb19jaXZpbCIsInNhdmVfcGVyc29uX2NlbnN1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/service_persona.js\n"));

/***/ })

});