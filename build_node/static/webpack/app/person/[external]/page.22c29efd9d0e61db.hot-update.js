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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModificarPerson; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"(app-pages-browser)/./src/app/person/[external]/styles.css\");\n/* harmony import */ var _app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/menu/menu */ \"(app-pages-browser)/./src/app/components/menu/menu.jsx\");\n/* harmony import */ var _hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/service_persona */ \"(app-pages-browser)/./src/hooks/service_persona.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ \"(app-pages-browser)/./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Funcion para traer el enum de estado civil\nfunction ModificarPerson(params) {\n    _s();\n    console.log(params.params.external);\n    const [estadoCivil, setEstadoCivil] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [personData, setPersonData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const { register, handleSubmit, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchEstadoCivil = async ()=>{\n            const data = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.estado_civil)();\n            setEstadoCivil(data);\n        };\n        const fetchPersonData = async ()=>{\n            const data = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.get_person)(params.params.external);\n            setPersonData(data);\n            setValue(\"nombres\", data.nombres);\n            setValue(\"apellidos\", data.apellidos);\n            setValue(\"fecha_nac\", data.fecha_nac);\n            setValue(\"estado\", data.estado);\n        };\n        fetchEstadoCivil();\n        fetchPersonData();\n    }, []);\n    // Funcion para guardar un censado\n    const sendInfo = async (data)=>{\n        let token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n        const info = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.save_person_census)(token, data);\n        if (info.code == \"200\") {\n            console.log(info);\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Info\",\n                text: info.datos.tag,\n                icon: \"success\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            router.push(\"/person\");\n            router.refresh();\n        } else {\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Error\",\n                text: info.datos.error,\n                icon: \"error\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            console.log(info);\n            console.log(\"NO\");\n        }\n    };\n    const onSubmit = (data)=>sendInfo(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container\",\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: \"Modificar Censado\"\n                    }, void 0, false, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"form\",\n                        onSubmit: handleSubmit(onSubmit),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Nombres:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"nombres\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los nombres\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Apellidos:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"apellidos\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los apellidos\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"column\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-box\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Fecha de Nacimiento:\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            ...register(\"fecha_nac\"),\n                                            required: true,\n                                            placeholder: \"Fecha de nacimiento\",\n                                            type: \"date\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box estado\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Estado Civil\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"column\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"select-box\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                ...register(\"estado\"),\n                                                required: true,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        hidden: true,\n                                                        children: \"Estado Civil\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    estadoCivil.map((estado, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: estado,\n                                                            children: estado\n                                                        }, index, false, {\n                                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                            lineNumber: 96,\n                                                            columnNumber: 41\n                                                        }, this))\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"MODIFICAR\"\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(ModificarPerson, \"YB8YuJ8TtjSXyo8NJzm5pb/R/Po=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ModificarPerson;\nvar _c;\n$RefreshReg$(_c, \"ModificarPerson\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uL1tleHRlcm5hbF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0I7QUFDd0I7QUFDeUM7QUFDcEM7QUFDckI7QUFDRTtBQUNZO0FBQ0Y7QUFFMUMsNkNBQTZDO0FBQzlCLFNBQVNXLGdCQUFnQkMsTUFBTTs7SUFDMUNDLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0EsTUFBTSxDQUFDRyxRQUFRO0lBQ2xDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sRUFBRWMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRSxHQUFHWix3REFBT0E7SUFDcEQsTUFBTWEsU0FBU2QsMERBQVNBO0lBRXhCSixnREFBU0EsQ0FBQztRQUNOLE1BQU1tQixtQkFBbUI7WUFDckIsTUFBTUMsT0FBTyxNQUFNdkIsb0VBQVlBO1lBQy9CZSxlQUFlUTtRQUNuQjtRQUVBLE1BQU1DLGtCQUFrQjtZQUNwQixNQUFNRCxPQUFPLE1BQU10QixrRUFBVUEsQ0FBQ1MsT0FBT0EsTUFBTSxDQUFDRyxRQUFRO1lBQ3BESSxjQUFjTTtZQUNkSCxTQUFTLFdBQVdHLEtBQUtFLE9BQU87WUFDaENMLFNBQVMsYUFBYUcsS0FBS0csU0FBUztZQUNwQ04sU0FBUyxhQUFhRyxLQUFLSSxTQUFTO1lBQ3BDUCxTQUFTLFVBQVVHLEtBQUtLLE1BQU07UUFDbEM7UUFFQU47UUFDQUU7SUFDSixHQUFHLEVBQUU7SUFFTCxrQ0FBa0M7SUFDbEMsTUFBTUssV0FBVyxPQUFPTjtRQUNwQixJQUFJTyxRQUFReEIsaURBQU9BLENBQUN5QixHQUFHLENBQUM7UUFDeEIsTUFBTUMsT0FBTyxNQUFNakMsMEVBQWtCQSxDQUFDK0IsT0FBT1A7UUFDN0MsSUFBSVMsS0FBS0MsSUFBSSxJQUFJLE9BQU87WUFDcEJ0QixRQUFRQyxHQUFHLENBQUNvQjtZQUNaM0IsaURBQUlBLENBQUM7Z0JBQ0Q2QixPQUFPO2dCQUNQQyxNQUFNSCxLQUFLSSxLQUFLLENBQUNDLEdBQUc7Z0JBQ3BCQyxNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxPQUFPO2dCQUNQQyxZQUFZO1lBQ2hCO1lBQ0FwQixPQUFPcUIsSUFBSSxDQUFDO1lBQ1pyQixPQUFPc0IsT0FBTztRQUNsQixPQUFPO1lBQ0h0QyxpREFBSUEsQ0FBQztnQkFDRDZCLE9BQU87Z0JBQ1BDLE1BQU1ILEtBQUtJLEtBQUssQ0FBQ1EsS0FBSztnQkFDdEJOLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLFlBQVk7WUFDaEI7WUFDQTlCLFFBQVFDLEdBQUcsQ0FBQ29CO1lBQ1pyQixRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSjtJQUNBLE1BQU1pQyxXQUFXdEIsQ0FBQUEsT0FBUU0sU0FBU047SUFFbEMscUJBQ0ksOERBQUN1Qjs7MEJBQ0csOERBQUNoRCxpRUFBSUE7Ozs7OzBCQUNMLDhEQUFDaUQ7Z0JBQVFDLFdBQVU7Z0JBQVlDLE9BQU87b0JBQUVDLFdBQVc7Z0JBQU87O2tDQUN0RCw4REFBQ0M7a0NBQU87Ozs7OztrQ0FDUiw4REFBQ0M7d0JBQUtKLFdBQVU7d0JBQU9ILFVBQVUxQixhQUFhMEI7OzBDQUMxQyw4REFBQ0M7Z0NBQUlFLFdBQVU7O2tEQUNYLDhEQUFDSztrREFBTTs7Ozs7O2tEQUNQLDhEQUFDQzt3Q0FBTyxHQUFHcEMsU0FBUyxVQUFVO3dDQUFFcUMsUUFBUTt3Q0FBQ0MsYUFBWTt3Q0FBc0JDLE1BQUs7Ozs7Ozs7Ozs7OzswQ0FFcEYsOERBQUNYO2dDQUFJRSxXQUFVOztrREFDWCw4REFBQ0s7a0RBQU07Ozs7OztrREFDUCw4REFBQ0M7d0NBQU8sR0FBR3BDLFNBQVMsWUFBWTt3Q0FBRXFDLFFBQVE7d0NBQUNDLGFBQVk7d0NBQXdCQyxNQUFLOzs7Ozs7Ozs7Ozs7MENBRXhGLDhEQUFDWDtnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ0Y7b0NBQUlFLFdBQVU7O3NEQUNYLDhEQUFDSztzREFBTTs7Ozs7O3NEQUNQLDhEQUFDQzs0Q0FBTyxHQUFHcEMsU0FBUyxZQUFZOzRDQUFFcUMsUUFBUTs0Q0FBQ0MsYUFBWTs0Q0FBc0JDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUcxRiw4REFBQ1g7Z0NBQUlFLFdBQVU7O2tEQUNYLDhEQUFDSztrREFBTTs7Ozs7O2tEQUNQLDhEQUFDUDt3Q0FBSUUsV0FBVTtrREFDWCw0RUFBQ0Y7NENBQUlFLFdBQVU7c0RBQ1gsNEVBQUNVO2dEQUFRLEdBQUd4QyxTQUFTLFNBQVM7Z0RBQUVxQyxRQUFROztrRUFDcEMsOERBQUNJO3dEQUFPQyxNQUFNO2tFQUFDOzs7Ozs7b0RBQ2Q5QyxZQUFZK0MsR0FBRyxDQUFDLENBQUNqQyxRQUFRa0Msc0JBQ3RCLDhEQUFDSDs0REFBbUJJLE9BQU9uQztzRUFBU0E7MkRBQXZCa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNakMsOERBQUN2QjtnQ0FBT2tCLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQztHQS9Gd0JoRDs7UUFJeUJELG9EQUFPQTtRQUNyQ0Qsc0RBQVNBOzs7S0FMSkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wZXJzb24vW2V4dGVybmFsXS9wYWdlLmpzeD9iYzU1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBNZW51IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51JztcbmltcG9ydCB7IHNhdmVfcGVyc29uX2NlbnN1cywgZXN0YWRvX2NpdmlsLCBnZXRfcGVyc29uIH0gZnJvbSAnQC9ob29rcy9zZXJ2aWNlX3BlcnNvbmEnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbi8vIEZ1bmNpb24gcGFyYSB0cmFlciBlbCBlbnVtIGRlIGVzdGFkbyBjaXZpbFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kaWZpY2FyUGVyc29uKHBhcmFtcykge1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcy5wYXJhbXMuZXh0ZXJuYWwpO1xuICAgIGNvbnN0IFtlc3RhZG9DaXZpbCwgc2V0RXN0YWRvQ2l2aWxdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtwZXJzb25EYXRhLCBzZXRQZXJzb25EYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHNldFZhbHVlIH0gPSB1c2VGb3JtKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaEVzdGFkb0NpdmlsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGVzdGFkb19jaXZpbCgpO1xuICAgICAgICAgICAgc2V0RXN0YWRvQ2l2aWwoZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZmV0Y2hQZXJzb25EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldF9wZXJzb24ocGFyYW1zLnBhcmFtcy5leHRlcm5hbCk7XG4gICAgICAgICAgICBzZXRQZXJzb25EYXRhKGRhdGEpO1xuICAgICAgICAgICAgc2V0VmFsdWUoJ25vbWJyZXMnLCBkYXRhLm5vbWJyZXMpO1xuICAgICAgICAgICAgc2V0VmFsdWUoJ2FwZWxsaWRvcycsIGRhdGEuYXBlbGxpZG9zKTtcbiAgICAgICAgICAgIHNldFZhbHVlKCdmZWNoYV9uYWMnLCBkYXRhLmZlY2hhX25hYyk7XG4gICAgICAgICAgICBzZXRWYWx1ZSgnZXN0YWRvJywgZGF0YS5lc3RhZG8pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoRXN0YWRvQ2l2aWwoKTtcbiAgICAgICAgZmV0Y2hQZXJzb25EYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRnVuY2lvbiBwYXJhIGd1YXJkYXIgdW4gY2Vuc2Fkb1xuICAgIGNvbnN0IHNlbmRJbmZvID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBzYXZlX3BlcnNvbl9jZW5zdXModG9rZW4sIGRhdGEpO1xuICAgICAgICBpZiAoaW5mby5jb2RlID09ICcyMDAnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkluZm9cIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBpbmZvLmRhdG9zLnRhZyxcbiAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICBidXR0b246IFwiQWNlcHRhclwiLFxuICAgICAgICAgICAgICAgIHRpbWVyOiA0MDAwLFxuICAgICAgICAgICAgICAgIGNsb3NlT25Fc2M6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcGVyc29uJylcbiAgICAgICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IGluZm8uZGF0b3MuZXJyb3IsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogXCJBY2VwdGFyXCIsXG4gICAgICAgICAgICAgICAgdGltZXI6IDQwMDAsXG4gICAgICAgICAgICAgICAgY2xvc2VPbkVzYzogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5PXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiBzZW5kSW5mbyhkYXRhKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWVudT48L01lbnU+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+TW9kaWZpY2FyIENlbnNhZG88L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbWJyZXM6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ25vbWJyZXMnKX0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJJbmdyZXNhIGxvcyBub21icmVzXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BcGVsbGlkb3M6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2FwZWxsaWRvcycpfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkluZ3Jlc2EgbG9zIGFwZWxsaWRvc1wiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GZWNoYSBkZSBOYWNpbWllbnRvOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcignZmVjaGFfbmFjJyl9IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiRmVjaGEgZGUgbmFjaW1pZW50b1wiIHR5cGU9XCJkYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3ggZXN0YWRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0YWRvIENpdmlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgey4uLnJlZ2lzdGVyKCdlc3RhZG8nKX0gcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGhpZGRlbj5Fc3RhZG8gQ2l2aWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc3RhZG9DaXZpbC5tYXAoKGVzdGFkbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtlc3RhZG99Pntlc3RhZG99PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPk1PRElGSUNBUjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiTWVudSIsInNhdmVfcGVyc29uX2NlbnN1cyIsImVzdGFkb19jaXZpbCIsImdldF9wZXJzb24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3dhbCIsIkNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwiTW9kaWZpY2FyUGVyc29uIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImV4dGVybmFsIiwiZXN0YWRvQ2l2aWwiLCJzZXRFc3RhZG9DaXZpbCIsInBlcnNvbkRhdGEiLCJzZXRQZXJzb25EYXRhIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsInJvdXRlciIsImZldGNoRXN0YWRvQ2l2aWwiLCJkYXRhIiwiZmV0Y2hQZXJzb25EYXRhIiwibm9tYnJlcyIsImFwZWxsaWRvcyIsImZlY2hhX25hYyIsImVzdGFkbyIsInNlbmRJbmZvIiwidG9rZW4iLCJnZXQiLCJpbmZvIiwiY29kZSIsInRpdGxlIiwidGV4dCIsImRhdG9zIiwidGFnIiwiaWNvbiIsImJ1dHRvbiIsInRpbWVyIiwiY2xvc2VPbkVzYyIsInB1c2giLCJyZWZyZXNoIiwiZXJyb3IiLCJvblN1Ym1pdCIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpblRvcCIsImhlYWRlciIsImZvcm0iLCJsYWJlbCIsImlucHV0IiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJzZWxlY3QiLCJvcHRpb24iLCJoaWRkZW4iLCJtYXAiLCJpbmRleCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/person/[external]/page.jsx\n"));

/***/ })

});