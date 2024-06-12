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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModificarPerson; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"(app-pages-browser)/./src/app/person/[external]/styles.css\");\n/* harmony import */ var _app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/menu/menu */ \"(app-pages-browser)/./src/app/components/menu/menu.jsx\");\n/* harmony import */ var _hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/service_persona */ \"(app-pages-browser)/./src/hooks/service_persona.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ \"(app-pages-browser)/./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Funcion para traer el enum de estado civil\nfunction ModificarPerson(props) {\n    _s();\n    console.log(props.query.external);\n    const [estadoCivil, setEstadoCivil] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const { register, handleSubmit, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const fetchPersonData = async ()=>{\n        const data = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.get_person)(params.params.external);\n        setValue(\"nombres\", data.nombres);\n        setValue(\"apellidos\", data.apellidos);\n        setValue(\"fecha_nac\", data.fecha_nac);\n        setValue(\"estado\", data.estado);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchEstadoCivil = async ()=>{\n            const data = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.estado_civil)();\n            setEstadoCivil(data);\n        };\n        fetchEstadoCivil();\n        fetchPersonData();\n    }, []);\n    // Funcion para guardar un censado\n    const sendInfo = async (data)=>{\n        let token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n        const info = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.save_person_census)(token, data);\n        if (info.code == \"200\") {\n            console.log(info);\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Info\",\n                text: info.datos.tag,\n                icon: \"success\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            router.push(\"/person\");\n            router.refresh();\n        } else {\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Error\",\n                text: info.datos.error,\n                icon: \"error\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            console.log(info);\n            console.log(\"NO\");\n        }\n    };\n    const onSubmit = (data)=>sendInfo(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container\",\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: \"Modificar Censado\"\n                    }, void 0, false, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"form\",\n                        onSubmit: handleSubmit(onSubmit),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Nombres:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"nombres\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los nombres\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Apellidos:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"apellidos\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los apellidos\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"column\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-box\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Fecha de Nacimiento:\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            ...register(\"fecha_nac\"),\n                                            required: true,\n                                            placeholder: \"Fecha de nacimiento\",\n                                            type: \"date\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box estado\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Estado Civil\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"column\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"select-box\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                ...register(\"estado\"),\n                                                required: true,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        hidden: true,\n                                                        children: \"Estado Civil\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    estadoCivil.map((estado, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: estado,\n                                                            children: estado\n                                                        }, index, false, {\n                                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                            lineNumber: 94,\n                                                            columnNumber: 41\n                                                        }, this))\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"MODIFICAR\"\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n_s(ModificarPerson, \"LMPNGBryfaeryI0PTpPdcusg5YI=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ModificarPerson;\nvar _c;\n$RefreshReg$(_c, \"ModificarPerson\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uL1tleHRlcm5hbF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0I7QUFDd0I7QUFDeUM7QUFDcEM7QUFDckI7QUFDRTtBQUNZO0FBQ0Y7QUFFMUMsNkNBQTZDO0FBQzlCLFNBQVNXLGdCQUFnQkMsS0FBSzs7SUFDekNDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsS0FBSyxDQUFDQyxRQUFRO0lBQ2hDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sRUFBRWEsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRSxHQUFHWCx3REFBT0E7SUFDcEQsTUFBTVksU0FBU2IsMERBQVNBO0lBRXhCLE1BQU1jLGtCQUFrQjtRQUNwQixNQUFNQyxPQUFPLE1BQU1yQixrRUFBVUEsQ0FBQ3NCLE9BQU9BLE1BQU0sQ0FBQ1QsUUFBUTtRQUNwREssU0FBUyxXQUFXRyxLQUFLRSxPQUFPO1FBQ2hDTCxTQUFTLGFBQWFHLEtBQUtHLFNBQVM7UUFDcENOLFNBQVMsYUFBYUcsS0FBS0ksU0FBUztRQUNwQ1AsU0FBUyxVQUFVRyxLQUFLSyxNQUFNO0lBQ2xDO0lBRUF4QixnREFBU0EsQ0FBQztRQUNOLE1BQU15QixtQkFBbUI7WUFDckIsTUFBTU4sT0FBTyxNQUFNdEIsb0VBQVlBO1lBQy9CZ0IsZUFBZU07UUFDbkI7UUFFQU07UUFDQVA7SUFDSixHQUFHLEVBQUU7SUFFTCxrQ0FBa0M7SUFDbEMsTUFBTVEsV0FBVyxPQUFPUDtRQUNwQixJQUFJUSxRQUFReEIsaURBQU9BLENBQUN5QixHQUFHLENBQUM7UUFDeEIsTUFBTUMsT0FBTyxNQUFNakMsMEVBQWtCQSxDQUFDK0IsT0FBT1I7UUFDN0MsSUFBSVUsS0FBS0MsSUFBSSxJQUFJLE9BQU87WUFDcEJ0QixRQUFRQyxHQUFHLENBQUNvQjtZQUNaM0IsaURBQUlBLENBQUM7Z0JBQ0Q2QixPQUFPO2dCQUNQQyxNQUFNSCxLQUFLSSxLQUFLLENBQUNDLEdBQUc7Z0JBQ3BCQyxNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxPQUFPO2dCQUNQQyxZQUFZO1lBQ2hCO1lBQ0FyQixPQUFPc0IsSUFBSSxDQUFDO1lBQ1p0QixPQUFPdUIsT0FBTztRQUNsQixPQUFPO1lBQ0h0QyxpREFBSUEsQ0FBQztnQkFDRDZCLE9BQU87Z0JBQ1BDLE1BQU1ILEtBQUtJLEtBQUssQ0FBQ1EsS0FBSztnQkFDdEJOLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLFlBQVk7WUFDaEI7WUFDQTlCLFFBQVFDLEdBQUcsQ0FBQ29CO1lBQ1pyQixRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSjtJQUNBLE1BQU1pQyxXQUFXdkIsQ0FBQUEsT0FBUU8sU0FBU1A7SUFFbEMscUJBQ0ksOERBQUN3Qjs7MEJBQ0csOERBQUNoRCxpRUFBSUE7Ozs7OzBCQUNMLDhEQUFDaUQ7Z0JBQVFDLFdBQVU7Z0JBQVlDLE9BQU87b0JBQUVDLFdBQVc7Z0JBQU87O2tDQUN0RCw4REFBQ0M7a0NBQU87Ozs7OztrQ0FDUiw4REFBQ0M7d0JBQUtKLFdBQVU7d0JBQU9ILFVBQVUzQixhQUFhMkI7OzBDQUMxQyw4REFBQ0M7Z0NBQUlFLFdBQVU7O2tEQUNYLDhEQUFDSztrREFBTTs7Ozs7O2tEQUNQLDhEQUFDQzt3Q0FBTyxHQUFHckMsU0FBUyxVQUFVO3dDQUFFc0MsUUFBUTt3Q0FBQ0MsYUFBWTt3Q0FBc0JDLE1BQUs7Ozs7Ozs7Ozs7OzswQ0FFcEYsOERBQUNYO2dDQUFJRSxXQUFVOztrREFDWCw4REFBQ0s7a0RBQU07Ozs7OztrREFDUCw4REFBQ0M7d0NBQU8sR0FBR3JDLFNBQVMsWUFBWTt3Q0FBRXNDLFFBQVE7d0NBQUNDLGFBQVk7d0NBQXdCQyxNQUFLOzs7Ozs7Ozs7Ozs7MENBRXhGLDhEQUFDWDtnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ0Y7b0NBQUlFLFdBQVU7O3NEQUNYLDhEQUFDSztzREFBTTs7Ozs7O3NEQUNQLDhEQUFDQzs0Q0FBTyxHQUFHckMsU0FBUyxZQUFZOzRDQUFFc0MsUUFBUTs0Q0FBQ0MsYUFBWTs0Q0FBc0JDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUcxRiw4REFBQ1g7Z0NBQUlFLFdBQVU7O2tEQUNYLDhEQUFDSztrREFBTTs7Ozs7O2tEQUNQLDhEQUFDUDt3Q0FBSUUsV0FBVTtrREFDWCw0RUFBQ0Y7NENBQUlFLFdBQVU7c0RBQ1gsNEVBQUNVO2dEQUFRLEdBQUd6QyxTQUFTLFNBQVM7Z0RBQUVzQyxRQUFROztrRUFDcEMsOERBQUNJO3dEQUFPQyxNQUFNO2tFQUFDOzs7Ozs7b0RBQ2Q3QyxZQUFZOEMsR0FBRyxDQUFDLENBQUNsQyxRQUFRbUMsc0JBQ3RCLDhEQUFDSDs0REFBbUJJLE9BQU9wQztzRUFBU0E7MkRBQXZCbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNakMsOERBQUN2QjtnQ0FBT2tCLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQztHQTdGd0JoRDs7UUFHeUJELG9EQUFPQTtRQUNyQ0Qsc0RBQVNBOzs7S0FKSkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wZXJzb24vW2V4dGVybmFsXS9wYWdlLmpzeD9iYzU1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBNZW51IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51JztcbmltcG9ydCB7IHNhdmVfcGVyc29uX2NlbnN1cywgZXN0YWRvX2NpdmlsLCBnZXRfcGVyc29uIH0gZnJvbSAnQC9ob29rcy9zZXJ2aWNlX3BlcnNvbmEnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbi8vIEZ1bmNpb24gcGFyYSB0cmFlciBlbCBlbnVtIGRlIGVzdGFkbyBjaXZpbFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kaWZpY2FyUGVyc29uKHByb3BzKSB7XG4gICAgY29uc29sZS5sb2cocHJvcHMucXVlcnkuZXh0ZXJuYWwpO1xuICAgIGNvbnN0IFtlc3RhZG9DaXZpbCwgc2V0RXN0YWRvQ2l2aWxdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgc2V0VmFsdWUgfSA9IHVzZUZvcm0oKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGZldGNoUGVyc29uRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldF9wZXJzb24ocGFyYW1zLnBhcmFtcy5leHRlcm5hbCk7XG4gICAgICAgIHNldFZhbHVlKCdub21icmVzJywgZGF0YS5ub21icmVzKTtcbiAgICAgICAgc2V0VmFsdWUoJ2FwZWxsaWRvcycsIGRhdGEuYXBlbGxpZG9zKTtcbiAgICAgICAgc2V0VmFsdWUoJ2ZlY2hhX25hYycsIGRhdGEuZmVjaGFfbmFjKTtcbiAgICAgICAgc2V0VmFsdWUoJ2VzdGFkbycsIGRhdGEuZXN0YWRvKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hFc3RhZG9DaXZpbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBlc3RhZG9fY2l2aWwoKTtcbiAgICAgICAgICAgIHNldEVzdGFkb0NpdmlsKGRhdGEpO1xuICAgICAgICB9OyAgXG5cbiAgICAgICAgZmV0Y2hFc3RhZG9DaXZpbCgpO1xuICAgICAgICBmZXRjaFBlcnNvbkRhdGEoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBGdW5jaW9uIHBhcmEgZ3VhcmRhciB1biBjZW5zYWRvXG4gICAgY29uc3Qgc2VuZEluZm8gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHNhdmVfcGVyc29uX2NlbnN1cyh0b2tlbiwgZGF0YSk7XG4gICAgICAgIGlmIChpbmZvLmNvZGUgPT0gJzIwMCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSW5mb1wiLFxuICAgICAgICAgICAgICAgIHRleHQ6IGluZm8uZGF0b3MudGFnLFxuICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogXCJBY2VwdGFyXCIsXG4gICAgICAgICAgICAgICAgdGltZXI6IDQwMDAsXG4gICAgICAgICAgICAgICAgY2xvc2VPbkVzYzogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wZXJzb24nKVxuICAgICAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogaW5mby5kYXRvcy5lcnJvcixcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBcIkFjZXB0YXJcIixcbiAgICAgICAgICAgICAgICB0aW1lcjogNDAwMCxcbiAgICAgICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTk9cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IHNlbmRJbmZvKGRhdGEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNZW51PjwvTWVudT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5Nb2RpZmljYXIgQ2Vuc2FkbzwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tYnJlczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3Rlcignbm9tYnJlcycpfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkluZ3Jlc2EgbG9zIG5vbWJyZXNcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFwZWxsaWRvczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcignYXBlbGxpZG9zJyl9IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiSW5ncmVzYSBsb3MgYXBlbGxpZG9zXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZlY2hhIGRlIE5hY2ltaWVudG86PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdmZWNoYV9uYWMnKX0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJGZWNoYSBkZSBuYWNpbWllbnRvXCIgdHlwZT1cImRhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveCBlc3RhZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Fc3RhZG8gQ2l2aWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB7Li4ucmVnaXN0ZXIoJ2VzdGFkbycpfSByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gaGlkZGVuPkVzdGFkbyBDaXZpbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VzdGFkb0NpdmlsLm1hcCgoZXN0YWRvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2VzdGFkb30+e2VzdGFkb308L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TU9ESUZJQ0FSPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJNZW51Iiwic2F2ZV9wZXJzb25fY2Vuc3VzIiwiZXN0YWRvX2NpdmlsIiwiZ2V0X3BlcnNvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzd2FsIiwiQ29va2llcyIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJNb2RpZmljYXJQZXJzb24iLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImV4dGVybmFsIiwiZXN0YWRvQ2l2aWwiLCJzZXRFc3RhZG9DaXZpbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwic2V0VmFsdWUiLCJyb3V0ZXIiLCJmZXRjaFBlcnNvbkRhdGEiLCJkYXRhIiwicGFyYW1zIiwibm9tYnJlcyIsImFwZWxsaWRvcyIsImZlY2hhX25hYyIsImVzdGFkbyIsImZldGNoRXN0YWRvQ2l2aWwiLCJzZW5kSW5mbyIsInRva2VuIiwiZ2V0IiwiaW5mbyIsImNvZGUiLCJ0aXRsZSIsInRleHQiLCJkYXRvcyIsInRhZyIsImljb24iLCJidXR0b24iLCJ0aW1lciIsImNsb3NlT25Fc2MiLCJwdXNoIiwicmVmcmVzaCIsImVycm9yIiwib25TdWJtaXQiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJoZWFkZXIiLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwic2VsZWN0Iiwib3B0aW9uIiwiaGlkZGVuIiwibWFwIiwiaW5kZXgiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/person/[external]/page.jsx\n"));

/***/ })

});