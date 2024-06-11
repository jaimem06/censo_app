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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditarCensado; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"(app-pages-browser)/./src/app/person/[external]/styles.css\");\n/* harmony import */ var _app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/menu/menu */ \"(app-pages-browser)/./src/app/components/menu/menu.jsx\");\n/* harmony import */ var _hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/service_persona */ \"(app-pages-browser)/./src/hooks/service_persona.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ \"(app-pages-browser)/./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Funcion para traer el enum de estado civil\nfunction EditarCensado(param) {\n    let { params } = param;\n    _s();\n    console.log(params.external);\n    const [estadoCivil, setEstadoCivil] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();\n    const [censado, setCensado] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const { external } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchEstadoCivil = async ()=>{\n            const data = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.estado_civil)();\n            setEstadoCivil(data);\n        };\n        fetchEstadoCivil();\n    }, []);\n    if (!estadoCivil) {\n        estadoCivil().then((info)=>{\n            if (info.code == \"200\") {\n                setEstadoCivil(info.datos);\n            }\n        });\n        (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.get_person)(js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\"), params.external).then((info)=>{\n            if (info.code == \"200\") {\n                setCensado(info.datos);\n                console.log(info.datos);\n            }\n        });\n        setEstadoCivil(true);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchPersonData = async ()=>{\n            const token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n            const personData = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.get_person)(token, external);\n            if (personData.code === \"200\") {\n                setCensado(personData.datos);\n            }\n        };\n        fetchPersonData();\n    }, [\n        external\n    ]);\n    // Funcion para guardar un censado\n    const sendInfo = async (data)=>{\n        let token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n        const info = await (0,_hooks_service_persona__WEBPACK_IMPORTED_MODULE_3__.save_person_census)(token, data);\n        if (info.code == \"200\") {\n            console.log(info);\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Info\",\n                text: info.datos.tag,\n                icon: \"success\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            router.push(\"/person\");\n            router.refresh();\n        } else {\n            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({\n                title: \"Error\",\n                text: info.datos.error,\n                icon: \"error\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            console.log(info);\n            console.log(\"NO\");\n        }\n    };\n    const onSubmit = (data)=>sendInfo(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container\",\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: \"EDITAR Censado\"\n                    }, void 0, false, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"form\",\n                        onSubmit: handleSubmit(onSubmit),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Nombres:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"nombres\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los nombres\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Apellidos:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"apellidos\"),\n                                        required: true,\n                                        placeholder: \"Ingresa los apellidos\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"column\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-box\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Fecha de Nacimiento:\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            ...register(\"fecha_nac\"),\n                                            required: true,\n                                            placeholder: \"Fecha de nacimiento\",\n                                            type: \"date\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box estado\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Estado Civil\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"column\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"select-box\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                ...register(\"estado\"),\n                                                required: true,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        hidden: true,\n                                                        children: \"Estado Civil\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                        lineNumber: 111,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    estadoCivil.map((estado, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: estado,\n                                                            children: estado\n                                                        }, index, false, {\n                                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                            lineNumber: 113,\n                                                            columnNumber: 41\n                                                        }, this))\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Editar Datos\"\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                                lineNumber: 119,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/j4ime/Documentos/GitHub/censo_app/src/app/person/[external]/page.jsx\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, this);\n}\n_s(EditarCensado, \"cxVkD8w40JGiFb3XZ42nKygmN+Q=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = EditarCensado;\nvar _c;\n$RefreshReg$(_c, \"EditarCensado\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uL1tleHRlcm5hbF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0I7QUFDd0I7QUFDeUM7QUFDcEM7QUFDckI7QUFDRTtBQUNZO0FBQ1E7QUFFcEQsNkNBQTZDO0FBQzlCLFNBQVNhLGNBQWMsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUNsQ0MsUUFBUUMsR0FBRyxDQUFDRixPQUFPRyxRQUFRO0lBQzNCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sRUFBRWMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR1Qsd0RBQU9BO0lBQzFDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHakIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWtCLFNBQVNmLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVRLFFBQVEsRUFBRSxHQUFHTyxPQUFPQyxLQUFLO0lBRWpDcEIsZ0RBQVNBLENBQUM7UUFDTixNQUFNcUIsbUJBQW1CO1lBQ3JCLE1BQU1DLE9BQU8sTUFBTXpCLG9FQUFZQTtZQUMvQmlCLGVBQWVRO1FBQ25CO1FBQ0FEO0lBQ0osR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDUixhQUFhO1FBQ2RBLGNBQWNVLElBQUksQ0FBQyxDQUFDQztZQUNoQixJQUFJQSxLQUFLQyxJQUFJLElBQUksT0FBTztnQkFDcEJYLGVBQWVVLEtBQUtFLEtBQUs7WUFDN0I7UUFDSjtRQUNBNUIsa0VBQVVBLENBQUNLLGlEQUFPQSxDQUFDRSxHQUFHLENBQUMsVUFBVUksT0FBT0csUUFBUSxFQUFFVyxJQUFJLENBQUMsQ0FBQ0M7WUFDcEQsSUFBSUEsS0FBS0MsSUFBSSxJQUFJLE9BQU87Z0JBQ3BCUCxXQUFXTSxLQUFLRSxLQUFLO2dCQUNyQmhCLFFBQVFDLEdBQUcsQ0FBQ2EsS0FBS0UsS0FBSztZQUMxQjtRQUVKO1FBQ0FaLGVBQWU7SUFD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QUFTQTs7O0tBTEpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGVyc29uL1tleHRlcm5hbF0vcGFnZS5qc3g/YmM1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgTWVudSBmcm9tICdAL2FwcC9jb21wb25lbnRzL21lbnUvbWVudSc7XG5pbXBvcnQgeyBzYXZlX3BlcnNvbl9jZW5zdXMsIGVzdGFkb19jaXZpbCwgZ2V0X3BlcnNvbiB9IGZyb20gJ0AvaG9va3Mvc2VydmljZV9wZXJzb25hJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdldCwgc2V0LCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuLy8gRnVuY2lvbiBwYXJhIHRyYWVyIGVsIGVudW0gZGUgZXN0YWRvIGNpdmlsXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0YXJDZW5zYWRvKHsgcGFyYW1zIH0pIHtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMuZXh0ZXJuYWwpO1xuICAgIGNvbnN0IFtlc3RhZG9DaXZpbCwgc2V0RXN0YWRvQ2l2aWxdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xuICAgIGNvbnN0IFtjZW5zYWRvLCBzZXRDZW5zYWRvXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgZXh0ZXJuYWwgfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRXN0YWRvQ2l2aWwgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZXN0YWRvX2NpdmlsKCk7XG4gICAgICAgICAgICBzZXRFc3RhZG9DaXZpbChkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2hFc3RhZG9DaXZpbCgpO1xuICAgIH0sIFtdKTtcblxuICAgIGlmICghZXN0YWRvQ2l2aWwpIHtcbiAgICAgICAgZXN0YWRvQ2l2aWwoKS50aGVuKChpbmZvKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5mby5jb2RlID09ICcyMDAnKSB7XG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvQ2l2aWwoaW5mby5kYXRvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGdldF9wZXJzb24oQ29va2llcy5nZXQoJ3Rva2VuJyksIHBhcmFtcy5leHRlcm5hbCkudGhlbigoaW5mbykgPT4ge1xuICAgICAgICAgICAgaWYgKGluZm8uY29kZSA9PSAnMjAwJykge1xuICAgICAgICAgICAgICAgIHNldENlbnNhZG8oaW5mby5kYXRvcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5mby5kYXRvcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHNldEVzdGFkb0NpdmlsKHRydWUpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUGVyc29uRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgICAgICAgICBjb25zdCBwZXJzb25EYXRhID0gYXdhaXQgZ2V0X3BlcnNvbih0b2tlbiwgZXh0ZXJuYWwpO1xuICAgICAgICAgICAgaWYgKHBlcnNvbkRhdGEuY29kZSA9PT0gJzIwMCcpIHtcbiAgICAgICAgICAgICAgICBzZXRDZW5zYWRvKHBlcnNvbkRhdGEuZGF0b3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmZXRjaFBlcnNvbkRhdGEoKTtcbiAgICB9LCBbZXh0ZXJuYWxdKTtcblxuICAgIC8vIEZ1bmNpb24gcGFyYSBndWFyZGFyIHVuIGNlbnNhZG9cbiAgICBjb25zdCBzZW5kSW5mbyA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgIGxldCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgc2F2ZV9wZXJzb25fY2Vuc3VzKHRva2VuLCBkYXRhKTtcbiAgICAgICAgaWYgKGluZm8uY29kZSA9PSAnMjAwJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XG4gICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJbmZvXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogaW5mby5kYXRvcy50YWcsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBcIkFjZXB0YXJcIixcbiAgICAgICAgICAgICAgICB0aW1lcjogNDAwMCxcbiAgICAgICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3BlcnNvbicpXG4gICAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBpbmZvLmRhdG9zLmVycm9yLFxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICBidXR0b246IFwiQWNlcHRhclwiLFxuICAgICAgICAgICAgICAgIHRpbWVyOiA0MDAwLFxuICAgICAgICAgICAgICAgIGNsb3NlT25Fc2M6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOT1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gc2VuZEluZm8oZGF0YSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1lbnU+PC9NZW51PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPkVESVRBUiBDZW5zYWRvPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob21icmVzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdub21icmVzJyl9IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiSW5ncmVzYSBsb3Mgbm9tYnJlc1wiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QXBlbGxpZG9zOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdhcGVsbGlkb3MnKX0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJJbmdyZXNhIGxvcyBhcGVsbGlkb3NcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmVjaGEgZGUgTmFjaW1pZW50bzo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2ZlY2hhX25hYycpfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkZlY2hhIGRlIG5hY2ltaWVudG9cIiB0eXBlPVwiZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94IGVzdGFkb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVzdGFkbyBDaXZpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHsuLi5yZWdpc3RlcignZXN0YWRvJyl9IHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBoaWRkZW4+RXN0YWRvIENpdmlsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXN0YWRvQ2l2aWwubWFwKChlc3RhZG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17ZXN0YWRvfT57ZXN0YWRvfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FZGl0YXIgRGF0b3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIk1lbnUiLCJzYXZlX3BlcnNvbl9jZW5zdXMiLCJlc3RhZG9fY2l2aWwiLCJnZXRfcGVyc29uIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN3YWwiLCJDb29raWVzIiwidXNlUm91dGVyIiwiZ2V0Iiwic2V0IiwidXNlRm9ybSIsIkVkaXRhckNlbnNhZG8iLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiZXh0ZXJuYWwiLCJlc3RhZG9DaXZpbCIsInNldEVzdGFkb0NpdmlsIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJjZW5zYWRvIiwic2V0Q2Vuc2FkbyIsInJvdXRlciIsInF1ZXJ5IiwiZmV0Y2hFc3RhZG9DaXZpbCIsImRhdGEiLCJ0aGVuIiwiaW5mbyIsImNvZGUiLCJkYXRvcyIsImZldGNoUGVyc29uRGF0YSIsInRva2VuIiwicGVyc29uRGF0YSIsInNlbmRJbmZvIiwidGl0bGUiLCJ0ZXh0IiwidGFnIiwiaWNvbiIsImJ1dHRvbiIsInRpbWVyIiwiY2xvc2VPbkVzYyIsInB1c2giLCJyZWZyZXNoIiwiZXJyb3IiLCJvblN1Ym1pdCIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpblRvcCIsImhlYWRlciIsImZvcm0iLCJsYWJlbCIsImlucHV0IiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJzZWxlY3QiLCJvcHRpb24iLCJoaWRkZW4iLCJtYXAiLCJlc3RhZG8iLCJpbmRleCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/person/[external]/page.jsx\n"));

/***/ })

});