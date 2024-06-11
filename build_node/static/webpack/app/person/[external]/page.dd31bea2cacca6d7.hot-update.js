"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/person/[external]/page",{

/***/ "(app-pages-browser)/./src/app/person/[external]/page.jsx":
/*!********************************************!*\
  !*** ./src/app/person/[external]/page.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditarCensado; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"(app-pages-browser)/./src/app/person/[external]/styles.css\");\n/* harmony import */ var _app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/menu/menu */ \"(app-pages-browser)/./src/app/components/menu/menu.jsx\");\n/* harmony import */ var _hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/service_persona */ \"(app-pages-browser)/./src/hooks/service_persona.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ \"(app-pages-browser)/./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Funcion para traer el enum de estado civil\nfunction EditarCensado(param) {\n    let { params } = param;\n    _s();\n    console.log(params.external);\n    const [estadoCivil, setEstadoCivil] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchEstadoCivil = async ()=>{\n            const data = await estado_civil();\n            setEstadoCivil(data);\n        };\n        fetchEstadoCivil();\n    }, []);\n    // Funcion para guardar un censado\n    const sendInfo = async (data)=>{\n        let token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n        const info = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.save_person_census)(token, data);\n        if (info.code == \"200\") {\n            console.log(info);\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Info\",\n                text: info.datos.tag,\n                icon: \"success\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            router.push(\"/person\");\n            router.refresh();\n        } else {\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Error\",\n                text: info.datos.error,\n                icon: \"error\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            console.log(info);\n            console.log(\"NO\");\n        }\n    };\n    const onSubmit = (data)=>sendInfo(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container\",\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: \"EDITAR Censado\"\n                    }, void 0, false, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"form\",\n                        onSubmit: handleSubmit(onSubmit),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Nombres:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"nombres\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los nombres\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Apellidos:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"apellidos\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los apellidos\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"column\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-box\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Fecha de Nacimiento:\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            ...register(\"fecha_nac\"),\n                                            required: true,\n                                            placeholder: \"Fecha de nacimiento\",\n                                            type: \"date\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box estado\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Estado Civil\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"column\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"select-box\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                ...register(\"estado\"),\n                                                required: true,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        hidden: true,\n                                                        children: \"Estado Civil\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    estadoCivil.map((estado, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: estado,\n                                                            children: estado\n                                                        }, index, false, {\n                                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                            lineNumber: 85,\n                                                            columnNumber: 41\n                                                        }, this))\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Editar Datos\"\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(EditarCensado, \"YZD9P8tz6sotvsU6/+GSdbw4aGI=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = EditarCensado;\nvar _c;\n$RefreshReg$(_c, \"EditarCensado\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uL1tleHRlcm5hbF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0I7QUFDd0I7QUFDZTtBQUNWO0FBQ3JCO0FBQ0U7QUFDWTtBQUNGO0FBRTFDLDZDQUE2QztBQUM5QixTQUFTUyxjQUFjLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjs7SUFDbENDLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0csUUFBUTtJQUMzQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLEVBQUVZLFFBQVEsRUFBRUMsWUFBWSxFQUFFLEdBQUdULHdEQUFPQTtJQUMxQyxNQUFNVSxTQUFTWCwwREFBU0E7SUFFeEJKLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWdCLG1CQUFtQjtZQUNyQixNQUFNQyxPQUFPLE1BQU1DO1lBQ25CTixlQUFlSztRQUNuQjtRQUVBRDtJQUNKLEdBQUcsRUFBRTtJQUVMLGtDQUFrQztJQUNsQyxNQUFNRyxXQUFXLE9BQU9GO1FBQ3BCLElBQUlHLFFBQVFqQixpREFBT0EsQ0FBQ2tCLEdBQUcsQ0FBQztRQUN4QixNQUFNQyxPQUFPLE1BQU14QiwwRUFBa0JBLENBQUNzQixPQUFPSDtRQUM3QyxJQUFJSyxLQUFLQyxJQUFJLElBQUksT0FBTztZQUNwQmYsUUFBUUMsR0FBRyxDQUFDYTtZQUNacEIsaURBQUlBLENBQUM7Z0JBQ0RzQixPQUFPO2dCQUNQQyxNQUFNSCxLQUFLSSxLQUFLLENBQUNDLEdBQUc7Z0JBQ3BCQyxNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxPQUFPO2dCQUNQQyxZQUFZO1lBQ2hCO1lBQ0FoQixPQUFPaUIsSUFBSSxDQUFDO1lBQ1pqQixPQUFPa0IsT0FBTztRQUNsQixPQUFPO1lBQ0gvQixpREFBSUEsQ0FBQztnQkFDRHNCLE9BQU87Z0JBQ1BDLE1BQU1ILEtBQUtJLEtBQUssQ0FBQ1EsS0FBSztnQkFDdEJOLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLFlBQVk7WUFDaEI7WUFDQXZCLFFBQVFDLEdBQUcsQ0FBQ2E7WUFDWmQsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0o7SUFDQSxNQUFNMEIsV0FBV2xCLENBQUFBLE9BQVFFLFNBQVNGO0lBRWxDLHFCQUNJLDhEQUFDbUI7OzBCQUNHLDhEQUFDdkMsaUVBQUlBOzs7OzswQkFDTCw4REFBQ3dDO2dCQUFRQyxXQUFVO2dCQUFZQyxPQUFPO29CQUFFQyxXQUFXO2dCQUFPOztrQ0FDdEQsOERBQUNDO2tDQUFPOzs7Ozs7a0NBQ1IsOERBQUNDO3dCQUFLSixXQUFVO3dCQUFPSCxVQUFVckIsYUFBYXFCOzswQ0FDMUMsOERBQUNDO2dDQUFJRSxXQUFVOztrREFDWCw4REFBQ0s7a0RBQU07Ozs7OztrREFDUCw4REFBQ0M7d0NBQU8sR0FBRy9CLFNBQVMsVUFBVTt3Q0FBRWdDLFFBQVE7d0NBQUNDLGFBQVk7d0NBQXNCQyxNQUFLOzs7Ozs7Ozs7Ozs7MENBRXBGLDhEQUFDWDtnQ0FBSUUsV0FBVTs7a0RBQ1gsOERBQUNLO2tEQUFNOzs7Ozs7a0RBQ1AsOERBQUNDO3dDQUFPLEdBQUcvQixTQUFTLFlBQVk7d0NBQUVnQyxRQUFRO3dDQUFDQyxhQUFZO3dDQUF3QkMsTUFBSzs7Ozs7Ozs7Ozs7OzBDQUV4Riw4REFBQ1g7Z0NBQUlFLFdBQVU7MENBQ1gsNEVBQUNGO29DQUFJRSxXQUFVOztzREFDWCw4REFBQ0s7c0RBQU07Ozs7OztzREFDUCw4REFBQ0M7NENBQU8sR0FBRy9CLFNBQVMsWUFBWTs0Q0FBRWdDLFFBQVE7NENBQUNDLGFBQVk7NENBQXNCQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHMUYsOERBQUNYO2dDQUFJRSxXQUFVOztrREFDWCw4REFBQ0s7a0RBQU07Ozs7OztrREFDUCw4REFBQ1A7d0NBQUlFLFdBQVU7a0RBQ1gsNEVBQUNGOzRDQUFJRSxXQUFVO3NEQUNYLDRFQUFDVTtnREFBUSxHQUFHbkMsU0FBUyxTQUFTO2dEQUFFZ0MsUUFBUTs7a0VBQ3BDLDhEQUFDSTt3REFBT0MsTUFBTTtrRUFBQzs7Ozs7O29EQUNkdkMsWUFBWXdDLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDdEIsOERBQUNKOzREQUFtQkssT0FBT0Y7c0VBQVNBOzJEQUF2QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNakMsOERBQUN4QjtnQ0FBT2tCLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQztHQXBGd0J6Qzs7UUFHZUQsb0RBQU9BO1FBQzNCRCxzREFBU0E7OztLQUpKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BlcnNvbi9bZXh0ZXJuYWxdL3BhZ2UuanN4P2JjNTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IE1lbnUgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9tZW51L21lbnUnO1xuaW1wb3J0IHsgc2F2ZV9wZXJzb25fY2Vuc3VzIH0gZnJvbSAnQC9ob29rcy9zZXJ2aWNlX3BlcnNvbmEnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbi8vIEZ1bmNpb24gcGFyYSB0cmFlciBlbCBlbnVtIGRlIGVzdGFkbyBjaXZpbFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFyQ2Vuc2Fkbyh7cGFyYW1zfSkge1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcy5leHRlcm5hbCk7XG4gICAgY29uc3QgW2VzdGFkb0NpdmlsLCBzZXRFc3RhZG9DaXZpbF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaEVzdGFkb0NpdmlsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGVzdGFkb19jaXZpbCgpO1xuICAgICAgICAgICAgc2V0RXN0YWRvQ2l2aWwoZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hFc3RhZG9DaXZpbCgpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEZ1bmNpb24gcGFyYSBndWFyZGFyIHVuIGNlbnNhZG9cbiAgICBjb25zdCBzZW5kSW5mbyA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgIGxldCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgc2F2ZV9wZXJzb25fY2Vuc3VzKHRva2VuLCBkYXRhKTtcbiAgICAgICAgaWYgKGluZm8uY29kZSA9PSAnMjAwJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XG4gICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJbmZvXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogaW5mby5kYXRvcy50YWcsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBcIkFjZXB0YXJcIixcbiAgICAgICAgICAgICAgICB0aW1lcjogNDAwMCxcbiAgICAgICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3BlcnNvbicpXG4gICAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBpbmZvLmRhdG9zLmVycm9yLFxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICBidXR0b246IFwiQWNlcHRhclwiLFxuICAgICAgICAgICAgICAgIHRpbWVyOiA0MDAwLFxuICAgICAgICAgICAgICAgIGNsb3NlT25Fc2M6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOT1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gc2VuZEluZm8oZGF0YSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1lbnU+PC9NZW51PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPkVESVRBUiBDZW5zYWRvPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob21icmVzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdub21icmVzJyl9IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiSW5ncmVzYSBsb3Mgbm9tYnJlc1wiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QXBlbGxpZG9zOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdhcGVsbGlkb3MnKX0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJJbmdyZXNhIGxvcyBhcGVsbGlkb3NcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmVjaGEgZGUgTmFjaW1pZW50bzo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2ZlY2hhX25hYycpfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkZlY2hhIGRlIG5hY2ltaWVudG9cIiB0eXBlPVwiZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94IGVzdGFkb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVzdGFkbyBDaXZpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHsuLi5yZWdpc3RlcignZXN0YWRvJyl9IHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBoaWRkZW4+RXN0YWRvIENpdmlsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXN0YWRvQ2l2aWwubWFwKChlc3RhZG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17ZXN0YWRvfT57ZXN0YWRvfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FZGl0YXIgRGF0b3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIk1lbnUiLCJzYXZlX3BlcnNvbl9jZW5zdXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3dhbCIsIkNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwiRWRpdGFyQ2Vuc2FkbyIsInBhcmFtcyIsImNvbnNvbGUiLCJsb2ciLCJleHRlcm5hbCIsImVzdGFkb0NpdmlsIiwic2V0RXN0YWRvQ2l2aWwiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJvdXRlciIsImZldGNoRXN0YWRvQ2l2aWwiLCJkYXRhIiwiZXN0YWRvX2NpdmlsIiwic2VuZEluZm8iLCJ0b2tlbiIsImdldCIsImluZm8iLCJjb2RlIiwidGl0bGUiLCJ0ZXh0IiwiZGF0b3MiLCJ0YWciLCJpY29uIiwiYnV0dG9uIiwidGltZXIiLCJjbG9zZU9uRXNjIiwicHVzaCIsInJlZnJlc2giLCJlcnJvciIsIm9uU3VibWl0IiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luVG9wIiwiaGVhZGVyIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInNlbGVjdCIsIm9wdGlvbiIsImhpZGRlbiIsIm1hcCIsImVzdGFkbyIsImluZGV4IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/person/[external]/page.jsx\n"));

/***/ })

});