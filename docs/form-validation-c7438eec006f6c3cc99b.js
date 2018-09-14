(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{392:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormValidation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _swan_form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);\n/* harmony import */ var _swan_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);\n/* harmony import */ var _swan_form_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar onSubmit = function onSubmit(values) {\n  return Promise.resolve(values);\n};\n\nvar validateForm = function validateForm(values) {\n  if (!values.testField2) {\n    return \'Fill out testField2\';\n  }\n\n  return false;\n};\n\nvar beforeSubmit = function beforeSubmit(values) {\n  return Promise.reject(\'This is not right\');\n};\n\nvar FormValidation =\n/*#__PURE__*/\nfunction (_Component) {\n  _inheritsLoose(FormValidation, _Component);\n\n  function FormValidation() {\n    return _Component.apply(this, arguments) || this;\n  }\n\n  var _proto = FormValidation.prototype;\n\n  _proto.render = function render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_form__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"], {\n      onSubmit: onSubmit,\n      validate: validateForm,\n      beforeSubmit: beforeSubmit\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "This has field validation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_2__[/* default */ "f"], {\n      name: "textField1",\n      type: "text",\n      validate: _swan_form_helpers__WEBPACK_IMPORTED_MODULE_3__[/* required */ "w"]\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "This has form validation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_2__[/* default */ "f"], {\n      name: "textField2",\n      type: "text"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_helpers__WEBPACK_IMPORTED_MODULE_3__[/* FormContext */ "b"].Consumer, null, function (_ref) {\n      var formErrors = _ref.formErrors;\n      console.log(formErrors);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, formErrors.map(function (err, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          key: index\n        }, err);\n      }));\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_2__[/* Submit */ "d"], null));\n  };\n\n  return FormValidation;\n}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);\n\n\n\n//# sourceURL=webpack:///./src/components/pages/FormValidation.js?')}}]);