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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModificarPerson; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"(app-pages-browser)/./src/app/person/[external]/styles.css\");\n/* harmony import */ var _app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/menu/menu */ \"(app-pages-browser)/./src/app/components/menu/menu.jsx\");\n/* harmony import */ var _hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/service_persona */ \"(app-pages-browser)/./src/hooks/service_persona.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ \"(app-pages-browser)/./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Funcion para traer el enum de estado civil\nfunction ModificarPerson(params) {\n    _s();\n    console.log(params.params.external);\n    const [estadoCivil, setEstadoCivil] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [personData, setPersonData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const { register, handleSubmit, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchEstadoCivil = async ()=>{\n            const data = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.estado_civil)();\n            setEstadoCivil(data);\n        };\n        console.log(params.params.external);\n        const fetchPersonData = async ()=>{\n            const data = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.get_person)(params.params.external);\n            setPersonData(data);\n            setValue(\"nombres\", data.nombres);\n            setValue(\"apellidos\", data.apellidos);\n            setValue(\"fecha_nac\", data.fecha_nac);\n            setValue(\"estado\", data.estado);\n        };\n        fetchEstadoCivil();\n        fetchPersonData();\n    }, []);\n    // Funcion para guardar un censado\n    const sendInfo = async (data)=>{\n        let token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n        const info = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.save_person_census)(token, data);\n        if (info.code == \"200\") {\n            console.log(info);\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Info\",\n                text: info.datos.tag,\n                icon: \"success\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            router.push(\"/person\");\n            router.refresh();\n        } else {\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Error\",\n                text: info.datos.error,\n                icon: \"error\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            console.log(info);\n            console.log(\"NO\");\n        }\n    };\n    const onSubmit = (data)=>sendInfo(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container\",\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: \"Modificar Censado\"\n                    }, void 0, false, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"form\",\n                        onSubmit: handleSubmit(onSubmit),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Nombres:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"nombres\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los nombres\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Apellidos:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"apellidos\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los apellidos\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"column\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-box\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Fecha de Nacimiento:\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            ...register(\"fecha_nac\"),\n                                            required: true,\n                                            placeholder: \"Fecha de nacimiento\",\n                                            type: \"date\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box estado\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Estado Civil\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"column\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"select-box\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                ...register(\"estado\"),\n                                                required: true,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        hidden: true,\n                                                        children: \"Estado Civil\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    estadoCivil.map((estado, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: estado,\n                                                            children: estado\n                                                        }, index, false, {\n                                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                            lineNumber: 98,\n                                                            columnNumber: 41\n                                                        }, this))\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"MODIFICAR\"\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n_s(ModificarPerson, \"YB8YuJ8TtjSXyo8NJzm5pb/R/Po=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ModificarPerson;\nvar _c;\n$RefreshReg$(_c, \"ModificarPerson\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uL1tleHRlcm5hbF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0I7QUFDd0I7QUFDeUM7QUFDcEM7QUFDckI7QUFDRTtBQUNZO0FBQ0Y7QUFFMUMsNkNBQTZDO0FBQzlCLFNBQVNXLGdCQUFnQkMsTUFBTTs7SUFDMUNDLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0EsTUFBTSxDQUFDRyxRQUFRO0lBQ2xDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sRUFBRWMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRSxHQUFHWix3REFBT0E7SUFDcEQsTUFBTWEsU0FBU2QsMERBQVNBO0lBRXhCSixnREFBU0EsQ0FBQztRQUNOLE1BQU1tQixtQkFBbUI7WUFDckIsTUFBTUMsT0FBTyxNQUFNdkIsb0VBQVlBO1lBQy9CZSxlQUFlUTtRQUNuQjtRQUVBWixRQUFRQyxHQUFHLENBQUNGLE9BQU9BLE1BQU0sQ0FBQ0csUUFBUTtRQUVsQyxNQUFNVyxrQkFBa0I7WUFDcEIsTUFBTUQsT0FBTyxNQUFNdEIsa0VBQVVBLENBQUNTLE9BQU9BLE1BQU0sQ0FBQ0csUUFBUTtZQUNwREksY0FBY007WUFDZEgsU0FBUyxXQUFXRyxLQUFLRSxPQUFPO1lBQ2hDTCxTQUFTLGFBQWFHLEtBQUtHLFNBQVM7WUFDcENOLFNBQVMsYUFBYUcsS0FBS0ksU0FBUztZQUNwQ1AsU0FBUyxVQUFVRyxLQUFLSyxNQUFNO1FBQ2xDO1FBRUFOO1FBQ0FFO0lBQ0osR0FBRyxFQUFFO0lBRUwsa0NBQWtDO0lBQ2xDLE1BQU1LLFdBQVcsT0FBT047UUFDcEIsSUFBSU8sUUFBUXhCLGlEQUFPQSxDQUFDeUIsR0FBRyxDQUFDO1FBQ3hCLE1BQU1DLE9BQU8sTUFBTWpDLDBFQUFrQkEsQ0FBQytCLE9BQU9QO1FBQzdDLElBQUlTLEtBQUtDLElBQUksSUFBSSxPQUFPO1lBQ3BCdEIsUUFBUUMsR0FBRyxDQUFDb0I7WUFDWjNCLGlEQUFJQSxDQUFDO2dCQUNENkIsT0FBTztnQkFDUEMsTUFBTUgsS0FBS0ksS0FBSyxDQUFDQyxHQUFHO2dCQUNwQkMsTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsT0FBTztnQkFDUEMsWUFBWTtZQUNoQjtZQUNBcEIsT0FBT3FCLElBQUksQ0FBQztZQUNackIsT0FBT3NCLE9BQU87UUFDbEIsT0FBTztZQUNIdEMsaURBQUlBLENBQUM7Z0JBQ0Q2QixPQUFPO2dCQUNQQyxNQUFNSCxLQUFLSSxLQUFLLENBQUNRLEtBQUs7Z0JBQ3RCTixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxPQUFPO2dCQUNQQyxZQUFZO1lBQ2hCO1lBQ0E5QixRQUFRQyxHQUFHLENBQUNvQjtZQUNackIsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0o7SUFDQSxNQUFNaUMsV0FBV3RCLENBQUFBLE9BQVFNLFNBQVNOO0lBRWxDLHFCQUNJLDhEQUFDdUI7OzBCQUNHLDhEQUFDaEQsaUVBQUlBOzs7OzswQkFDTCw4REFBQ2lEO2dCQUFRQyxXQUFVO2dCQUFZQyxPQUFPO29CQUFFQyxXQUFXO2dCQUFPOztrQ0FDdEQsOERBQUNDO2tDQUFPOzs7Ozs7a0NBQ1IsOERBQUNDO3dCQUFLSixXQUFVO3dCQUFPSCxVQUFVMUIsYUFBYTBCOzswQ0FDMUMsOERBQUNDO2dDQUFJRSxXQUFVOztrREFDWCw4REFBQ0s7a0RBQU07Ozs7OztrREFDUCw4REFBQ0M7d0NBQU8sR0FBR3BDLFNBQVMsVUFBVTt3Q0FBRXFDLFFBQVE7d0NBQUNDLGFBQVk7d0NBQXNCQyxNQUFLOzs7Ozs7Ozs7Ozs7MENBRXBGLDhEQUFDWDtnQ0FBSUUsV0FBVTs7a0RBQ1gsOERBQUNLO2tEQUFNOzs7Ozs7a0RBQ1AsOERBQUNDO3dDQUFPLEdBQUdwQyxTQUFTLFlBQVk7d0NBQUVxQyxRQUFRO3dDQUFDQyxhQUFZO3dDQUF3QkMsTUFBSzs7Ozs7Ozs7Ozs7OzBDQUV4Riw4REFBQ1g7Z0NBQUlFLFdBQVU7MENBQ1gsNEVBQUNGO29DQUFJRSxXQUFVOztzREFDWCw4REFBQ0s7c0RBQU07Ozs7OztzREFDUCw4REFBQ0M7NENBQU8sR0FBR3BDLFNBQVMsWUFBWTs0Q0FBRXFDLFFBQVE7NENBQUNDLGFBQVk7NENBQXNCQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHMUYsOERBQUNYO2dDQUFJRSxXQUFVOztrREFDWCw4REFBQ0s7a0RBQU07Ozs7OztrREFDUCw4REFBQ1A7d0NBQUlFLFdBQVU7a0RBQ1gsNEVBQUNGOzRDQUFJRSxXQUFVO3NEQUNYLDRFQUFDVTtnREFBUSxHQUFHeEMsU0FBUyxTQUFTO2dEQUFFcUMsUUFBUTs7a0VBQ3BDLDhEQUFDSTt3REFBT0MsTUFBTTtrRUFBQzs7Ozs7O29EQUNkOUMsWUFBWStDLEdBQUcsQ0FBQyxDQUFDakMsUUFBUWtDLHNCQUN0Qiw4REFBQ0g7NERBQW1CSSxPQUFPbkM7c0VBQVNBOzJEQUF2QmtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBTWpDLDhEQUFDdkI7Z0NBQU9rQixNQUFLOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUM7R0FqR3dCaEQ7O1FBSXlCRCxvREFBT0E7UUFDckNELHNEQUFTQTs7O0tBTEpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGVyc29uL1tleHRlcm5hbF0vcGFnZS5qc3g/YmM1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgTWVudSBmcm9tICdAL2FwcC9jb21wb25lbnRzL21lbnUvbWVudSc7XG5pbXBvcnQgeyBzYXZlX3BlcnNvbl9jZW5zdXMsIGVzdGFkb19jaXZpbCwgZ2V0X3BlcnNvbiB9IGZyb20gJ0AvaG9va3Mvc2VydmljZV9wZXJzb25hJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG4vLyBGdW5jaW9uIHBhcmEgdHJhZXIgZWwgZW51bSBkZSBlc3RhZG8gY2l2aWxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGlmaWNhclBlcnNvbihwYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMucGFyYW1zLmV4dGVybmFsKTtcbiAgICBjb25zdCBbZXN0YWRvQ2l2aWwsIHNldEVzdGFkb0NpdmlsXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcGVyc29uRGF0YSwgc2V0UGVyc29uRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBzZXRWYWx1ZSB9ID0gdXNlRm9ybSgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hFc3RhZG9DaXZpbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBlc3RhZG9fY2l2aWwoKTtcbiAgICAgICAgICAgIHNldEVzdGFkb0NpdmlsKGRhdGEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcy5wYXJhbXMuZXh0ZXJuYWwpOyAgICBcblxuICAgICAgICBjb25zdCBmZXRjaFBlcnNvbkRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0X3BlcnNvbihwYXJhbXMucGFyYW1zLmV4dGVybmFsKTtcbiAgICAgICAgICAgIHNldFBlcnNvbkRhdGEoZGF0YSk7XG4gICAgICAgICAgICBzZXRWYWx1ZSgnbm9tYnJlcycsIGRhdGEubm9tYnJlcyk7XG4gICAgICAgICAgICBzZXRWYWx1ZSgnYXBlbGxpZG9zJywgZGF0YS5hcGVsbGlkb3MpO1xuICAgICAgICAgICAgc2V0VmFsdWUoJ2ZlY2hhX25hYycsIGRhdGEuZmVjaGFfbmFjKTtcbiAgICAgICAgICAgIHNldFZhbHVlKCdlc3RhZG8nLCBkYXRhLmVzdGFkbyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hFc3RhZG9DaXZpbCgpO1xuICAgICAgICBmZXRjaFBlcnNvbkRhdGEoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBGdW5jaW9uIHBhcmEgZ3VhcmRhciB1biBjZW5zYWRvXG4gICAgY29uc3Qgc2VuZEluZm8gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHNhdmVfcGVyc29uX2NlbnN1cyh0b2tlbiwgZGF0YSk7XG4gICAgICAgIGlmIChpbmZvLmNvZGUgPT0gJzIwMCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSW5mb1wiLFxuICAgICAgICAgICAgICAgIHRleHQ6IGluZm8uZGF0b3MudGFnLFxuICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogXCJBY2VwdGFyXCIsXG4gICAgICAgICAgICAgICAgdGltZXI6IDQwMDAsXG4gICAgICAgICAgICAgICAgY2xvc2VPbkVzYzogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wZXJzb24nKVxuICAgICAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogaW5mby5kYXRvcy5lcnJvcixcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBcIkFjZXB0YXJcIixcbiAgICAgICAgICAgICAgICB0aW1lcjogNDAwMCxcbiAgICAgICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTk9cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IHNlbmRJbmZvKGRhdGEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNZW51PjwvTWVudT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5Nb2RpZmljYXIgQ2Vuc2FkbzwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tYnJlczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3Rlcignbm9tYnJlcycpfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkluZ3Jlc2EgbG9zIG5vbWJyZXNcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFwZWxsaWRvczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcignYXBlbGxpZG9zJyl9IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiSW5ncmVzYSBsb3MgYXBlbGxpZG9zXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZlY2hhIGRlIE5hY2ltaWVudG86PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdmZWNoYV9uYWMnKX0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJGZWNoYSBkZSBuYWNpbWllbnRvXCIgdHlwZT1cImRhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveCBlc3RhZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Fc3RhZG8gQ2l2aWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB7Li4ucmVnaXN0ZXIoJ2VzdGFkbycpfSByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gaGlkZGVuPkVzdGFkbyBDaXZpbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VzdGFkb0NpdmlsLm1hcCgoZXN0YWRvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2VzdGFkb30+e2VzdGFkb308L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TU9ESUZJQ0FSPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJNZW51Iiwic2F2ZV9wZXJzb25fY2Vuc3VzIiwiZXN0YWRvX2NpdmlsIiwiZ2V0X3BlcnNvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzd2FsIiwiQ29va2llcyIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJNb2RpZmljYXJQZXJzb24iLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiZXh0ZXJuYWwiLCJlc3RhZG9DaXZpbCIsInNldEVzdGFkb0NpdmlsIiwicGVyc29uRGF0YSIsInNldFBlcnNvbkRhdGEiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInNldFZhbHVlIiwicm91dGVyIiwiZmV0Y2hFc3RhZG9DaXZpbCIsImRhdGEiLCJmZXRjaFBlcnNvbkRhdGEiLCJub21icmVzIiwiYXBlbGxpZG9zIiwiZmVjaGFfbmFjIiwiZXN0YWRvIiwic2VuZEluZm8iLCJ0b2tlbiIsImdldCIsImluZm8iLCJjb2RlIiwidGl0bGUiLCJ0ZXh0IiwiZGF0b3MiLCJ0YWciLCJpY29uIiwiYnV0dG9uIiwidGltZXIiLCJjbG9zZU9uRXNjIiwicHVzaCIsInJlZnJlc2giLCJlcnJvciIsIm9uU3VibWl0IiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luVG9wIiwiaGVhZGVyIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInNlbGVjdCIsIm9wdGlvbiIsImhpZGRlbiIsIm1hcCIsImluZGV4IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/person/[external]/page.jsx\n"));

/***/ })

});