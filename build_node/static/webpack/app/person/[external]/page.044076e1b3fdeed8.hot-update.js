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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModificarPerson; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"(app-pages-browser)/./src/app/person/[external]/styles.css\");\n/* harmony import */ var _app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/menu/menu */ \"(app-pages-browser)/./src/app/components/menu/menu.jsx\");\n/* harmony import */ var _hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/service_persona */ \"(app-pages-browser)/./src/hooks/service_persona.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ \"(app-pages-browser)/./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Funcion para traer el enum de estado civil\nfunction ModificarPerson(params) {\n    _s();\n    const [estadoCivil, setEstadoCivil] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const { register, handleSubmit, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const fetchPersonData = async ()=>{\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n        const response = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.get_person)(token, params.params.external);\n        const data = response.datos; // Accede a los datos correctos\n        setValue(\"nombres\", data.nombres);\n        setValue(\"apellidos\", data.apellidos);\n        setValue(\"fecha_nac\", data.fecha_nac);\n        setValue(\"estado\", data.estado);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchEstadoCivil = async ()=>{\n            const data = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.estado_civil)();\n            setEstadoCivil(data);\n        };\n        fetchPersonData();\n        fetchEstadoCivil();\n    }, []);\n    // Funcion para modificar un censado\n    const sendInfo = async (data)=>{\n        let token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n        const info = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.modify_person)(token, data.external_id, data);\n        if (info.code == \"200\") {\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Info\",\n                text: info.datos,\n                icon: \"success\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            router.push(\"/person\");\n            router.refresh();\n        } else {\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Error\",\n                text: info.datos,\n                icon: \"error\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n        }\n    };\n    const onSubmit = (data)=>sendInfo(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container\",\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: \"Modificar Censado\"\n                    }, void 0, false, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"form\",\n                        onSubmit: handleSubmit(onSubmit),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Nombres:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"nombres\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los nombres\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Apellidos:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"apellidos\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los apellidos\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"column\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-box\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Fecha de Nacimiento:\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            ...register(\"fecha_nac\"),\n                                            required: true,\n                                            placeholder: \"Fecha de nacimiento\",\n                                            type: \"date\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box estado\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Estado Civil\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"column\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"select-box\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                ...register(\"estado\"),\n                                                required: true,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        hidden: true,\n                                                        children: \"Estado Civil\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    estadoCivil.map((estado, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: estado,\n                                                            children: estado\n                                                        }, index, false, {\n                                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                            lineNumber: 93,\n                                                            columnNumber: 41\n                                                        }, this))\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"MODIFICAR\"\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, this);\n}\n_s(ModificarPerson, \"LMPNGBryfaeryI0PTpPdcusg5YI=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ModificarPerson;\nvar _c;\n$RefreshReg$(_c, \"ModificarPerson\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uL1tleHRlcm5hbF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0I7QUFDd0I7QUFDb0M7QUFDL0I7QUFDckI7QUFDRTtBQUNZO0FBQ0Y7QUFFMUMsNkNBQTZDO0FBQzlCLFNBQVNXLGdCQUFnQkMsTUFBTTs7SUFDMUMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxFQUFFUyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsUUFBUSxFQUFFLEdBQUdQLHdEQUFPQTtJQUNwRCxNQUFNUSxTQUFTVCwwREFBU0E7SUFFeEIsTUFBTVUsa0JBQWtCO1FBQ3BCLE1BQU1DLFFBQVFaLGlEQUFPQSxDQUFDYSxHQUFHLENBQUM7UUFDMUIsTUFBTUMsV0FBVyxNQUFNbkIsa0VBQVVBLENBQUNpQixPQUFPUixPQUFPQSxNQUFNLENBQUNXLFFBQVE7UUFDL0QsTUFBTUMsT0FBT0YsU0FBU0csS0FBSyxFQUFFLCtCQUErQjtRQUM1RFIsU0FBUyxXQUFXTyxLQUFLRSxPQUFPO1FBQ2hDVCxTQUFTLGFBQWFPLEtBQUtHLFNBQVM7UUFDcENWLFNBQVMsYUFBYU8sS0FBS0ksU0FBUztRQUNwQ1gsU0FBUyxVQUFVTyxLQUFLSyxNQUFNO0lBQ2xDO0lBRUF4QixnREFBU0EsQ0FBQztRQUNOLE1BQU15QixtQkFBbUI7WUFDckIsTUFBTU4sT0FBTyxNQUFNdEIsb0VBQVlBO1lBQy9CWSxlQUFlVTtRQUNuQjtRQUVBTDtRQUNBVztJQUNKLEdBQUcsRUFBRTtJQUVMLG9DQUFvQztJQUNwQyxNQUFNQyxXQUFXLE9BQU9QO1FBQ3BCLElBQUlKLFFBQVFaLGlEQUFPQSxDQUFDYSxHQUFHLENBQUM7UUFDeEIsTUFBTVcsT0FBTyxNQUFNL0IscUVBQWFBLENBQUNtQixPQUFPSSxLQUFLUyxXQUFXLEVBQUVUO1FBQzFELElBQUlRLEtBQUtFLElBQUksSUFBSSxPQUFPO1lBQ3BCM0IsaURBQUlBLENBQUM7Z0JBQ0Q0QixPQUFPO2dCQUNQQyxNQUFNSixLQUFLUCxLQUFLO2dCQUNoQlksTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsT0FBTztnQkFDUEMsWUFBWTtZQUNoQjtZQUNBdEIsT0FBT3VCLElBQUksQ0FBQztZQUNadkIsT0FBT3dCLE9BQU87UUFDbEIsT0FBTztZQUNIbkMsaURBQUlBLENBQUM7Z0JBQ0Q0QixPQUFPO2dCQUNQQyxNQUFNSixLQUFLUCxLQUFLO2dCQUNoQlksTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsT0FBTztnQkFDUEMsWUFBWTtZQUNoQjtRQUNKO0lBQ0o7SUFFQSxNQUFNRyxXQUFXbkIsQ0FBQUEsT0FBUU8sU0FBU1A7SUFFbEMscUJBQ0ksOERBQUNvQjs7MEJBQ0csOERBQUM1QyxpRUFBSUE7Ozs7OzBCQUNMLDhEQUFDNkM7Z0JBQVFDLFdBQVU7Z0JBQVlDLE9BQU87b0JBQUVDLFdBQVc7Z0JBQU87O2tDQUN0RCw4REFBQ0M7a0NBQU87Ozs7OztrQ0FDUiw4REFBQ0M7d0JBQUtKLFdBQVU7d0JBQU9ILFVBQVUzQixhQUFhMkI7OzBDQUMxQyw4REFBQ0M7Z0NBQUlFLFdBQVU7O2tEQUNYLDhEQUFDSztrREFBTTs7Ozs7O2tEQUNQLDhEQUFDQzt3Q0FBTyxHQUFHckMsU0FBUyxVQUFVO3dDQUFFc0MsUUFBUTt3Q0FBQ0MsYUFBWTt3Q0FBc0JDLE1BQUs7Ozs7Ozs7Ozs7OzswQ0FFcEYsOERBQUNYO2dDQUFJRSxXQUFVOztrREFDWCw4REFBQ0s7a0RBQU07Ozs7OztrREFDUCw4REFBQ0M7d0NBQU8sR0FBR3JDLFNBQVMsWUFBWTt3Q0FBRXNDLFFBQVE7d0NBQUNDLGFBQVk7d0NBQXdCQyxNQUFLOzs7Ozs7Ozs7Ozs7MENBRXhGLDhEQUFDWDtnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ0Y7b0NBQUlFLFdBQVU7O3NEQUNYLDhEQUFDSztzREFBTTs7Ozs7O3NEQUNQLDhEQUFDQzs0Q0FBTyxHQUFHckMsU0FBUyxZQUFZOzRDQUFFc0MsUUFBUTs0Q0FBQ0MsYUFBWTs0Q0FBc0JDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUcxRiw4REFBQ1g7Z0NBQUlFLFdBQVU7O2tEQUNYLDhEQUFDSztrREFBTTs7Ozs7O2tEQUNQLDhEQUFDUDt3Q0FBSUUsV0FBVTtrREFDWCw0RUFBQ0Y7NENBQUlFLFdBQVU7c0RBQ1gsNEVBQUNVO2dEQUFRLEdBQUd6QyxTQUFTLFNBQVM7Z0RBQUVzQyxRQUFROztrRUFDcEMsOERBQUNJO3dEQUFPQyxNQUFNO2tFQUFDOzs7Ozs7b0RBQ2Q3QyxZQUFZOEMsR0FBRyxDQUFDLENBQUM5QixRQUFRK0Isc0JBQ3RCLDhEQUFDSDs0REFBbUJJLE9BQU9oQztzRUFBU0E7MkRBQXZCK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNakMsOERBQUN0QjtnQ0FBT2lCLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQztHQTVGd0I1Qzs7UUFFeUJELG9EQUFPQTtRQUNyQ0Qsc0RBQVNBOzs7S0FISkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wZXJzb24vW2V4dGVybmFsXS9wYWdlLmpzeD9iYzU1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBNZW51IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51JztcbmltcG9ydCB7IG1vZGlmeV9wZXJzb24sIGVzdGFkb19jaXZpbCwgZ2V0X3BlcnNvbiB9IGZyb20gJ0AvaG9va3Mvc2VydmljZV9wZXJzb25hJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG4vLyBGdW5jaW9uIHBhcmEgdHJhZXIgZWwgZW51bSBkZSBlc3RhZG8gY2l2aWxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGlmaWNhclBlcnNvbihwYXJhbXMpIHtcbiAgICBjb25zdCBbZXN0YWRvQ2l2aWwsIHNldEVzdGFkb0NpdmlsXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHNldFZhbHVlIH0gPSB1c2VGb3JtKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBmZXRjaFBlcnNvbkRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0X3BlcnNvbih0b2tlbiwgcGFyYW1zLnBhcmFtcy5leHRlcm5hbCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRvczsgLy8gQWNjZWRlIGEgbG9zIGRhdG9zIGNvcnJlY3Rvc1xuICAgICAgICBzZXRWYWx1ZSgnbm9tYnJlcycsIGRhdGEubm9tYnJlcyk7XG4gICAgICAgIHNldFZhbHVlKCdhcGVsbGlkb3MnLCBkYXRhLmFwZWxsaWRvcyk7XG4gICAgICAgIHNldFZhbHVlKCdmZWNoYV9uYWMnLCBkYXRhLmZlY2hhX25hYyk7XG4gICAgICAgIHNldFZhbHVlKCdlc3RhZG8nLCBkYXRhLmVzdGFkbyk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRXN0YWRvQ2l2aWwgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZXN0YWRvX2NpdmlsKCk7XG4gICAgICAgICAgICBzZXRFc3RhZG9DaXZpbChkYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaFBlcnNvbkRhdGEoKTtcbiAgICAgICAgZmV0Y2hFc3RhZG9DaXZpbCgpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEZ1bmNpb24gcGFyYSBtb2RpZmljYXIgdW4gY2Vuc2Fkb1xuICAgIGNvbnN0IHNlbmRJbmZvID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBtb2RpZnlfcGVyc29uKHRva2VuLCBkYXRhLmV4dGVybmFsX2lkLCBkYXRhKTtcbiAgICAgICAgaWYgKGluZm8uY29kZSA9PSAnMjAwJykge1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSW5mb1wiLFxuICAgICAgICAgICAgICAgIHRleHQ6IGluZm8uZGF0b3MsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBcIkFjZXB0YXJcIixcbiAgICAgICAgICAgICAgICB0aW1lcjogNDAwMCxcbiAgICAgICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3BlcnNvbicpO1xuICAgICAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogaW5mby5kYXRvcyxcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBcIkFjZXB0YXJcIixcbiAgICAgICAgICAgICAgICB0aW1lcjogNDAwMCxcbiAgICAgICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IHNlbmRJbmZvKGRhdGEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+TW9kaWZpY2FyIENlbnNhZG88L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbWJyZXM6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ25vbWJyZXMnKX0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJJbmdyZXNhIGxvcyBub21icmVzXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BcGVsbGlkb3M6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2FwZWxsaWRvcycpfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkluZ3Jlc2EgbG9zIGFwZWxsaWRvc1wiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GZWNoYSBkZSBOYWNpbWllbnRvOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcignZmVjaGFfbmFjJyl9IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiRmVjaGEgZGUgbmFjaW1pZW50b1wiIHR5cGU9XCJkYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3ggZXN0YWRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0YWRvIENpdmlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgey4uLnJlZ2lzdGVyKCdlc3RhZG8nKX0gcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGhpZGRlbj5Fc3RhZG8gQ2l2aWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc3RhZG9DaXZpbC5tYXAoKGVzdGFkbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtlc3RhZG99Pntlc3RhZG99PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPk1PRElGSUNBUjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJNZW51IiwibW9kaWZ5X3BlcnNvbiIsImVzdGFkb19jaXZpbCIsImdldF9wZXJzb24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3dhbCIsIkNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwiTW9kaWZpY2FyUGVyc29uIiwicGFyYW1zIiwiZXN0YWRvQ2l2aWwiLCJzZXRFc3RhZG9DaXZpbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwic2V0VmFsdWUiLCJyb3V0ZXIiLCJmZXRjaFBlcnNvbkRhdGEiLCJ0b2tlbiIsImdldCIsInJlc3BvbnNlIiwiZXh0ZXJuYWwiLCJkYXRhIiwiZGF0b3MiLCJub21icmVzIiwiYXBlbGxpZG9zIiwiZmVjaGFfbmFjIiwiZXN0YWRvIiwiZmV0Y2hFc3RhZG9DaXZpbCIsInNlbmRJbmZvIiwiaW5mbyIsImV4dGVybmFsX2lkIiwiY29kZSIsInRpdGxlIiwidGV4dCIsImljb24iLCJidXR0b24iLCJ0aW1lciIsImNsb3NlT25Fc2MiLCJwdXNoIiwicmVmcmVzaCIsIm9uU3VibWl0IiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luVG9wIiwiaGVhZGVyIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInNlbGVjdCIsIm9wdGlvbiIsImhpZGRlbiIsIm1hcCIsImluZGV4IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/person/[external]/page.jsx\n"));

/***/ })

});