(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{348:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _swan_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);\n/* harmony import */ var _swan_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _RegularForm_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);\n/* harmony import */ var _RegularForm_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_RegularForm_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\n/* eslint-disable no-console, no-alert */\n\n\n\n\n\n\nvar minLenTen = function minLenTen(value) {\n  return value.length > 9 ? false : \'Min len 10\';\n};\n\nvar alphaNumeric = function alphaNumeric(value) {\n  return /^[a-zA-Z0-9]{1,}$/.test(value) ? false : \'Alpha Numeric\';\n}; // const threeDigits = value => (/^[\\d]{3}$/.test(value) ? false : \'Must pass three digits\');\n\n\nvar tenAndAlpha = [minLenTen, alphaNumeric]; // const onSubmit = values => console.log(values);\n\nvar onSubmit = function onSubmit(values) {\n  return new Promise(function (res) {\n    setTimeout(function () {\n      console.log(values);\n      res(true);\n    }, 3000);\n  });\n};\n\nvar wrapperStyle = {\n  margin: \'5rem\',\n  border: \'1px solid steelblue\',\n  padding: \'0 5rem 5rem\'\n};\nvar fieldSetStyling = "\\n.remove-fieldset-styling {\\n  border: 0;\\n  padding: 0;\\n  margin: 0;\\n  min-width: 0;\\n}\\n.remove-fieldset-styling legend {\\n  margin: 0;\\n  padding: 0;\\n}".trim();\n\nvar onButtonClick = function onButtonClick() {\n  alert(\'I was clicked\');\n};\n\nvar RegularForm =\n/*#__PURE__*/\nfunction (_Component) {\n  _inheritsLoose(RegularForm, _Component);\n\n  function RegularForm(props) {\n    var _this;\n\n    _this = _Component.call(this, props) || this;\n    console.log(\'You should see a console.error message 👇 about an invalid type. It is a test to make sure that invalid types throw an error message. The field will instead be replaced with an HTML comment.\');\n    return _this;\n  }\n\n  var _proto = RegularForm.prototype;\n\n  _proto.render = function render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      style: wrapperStyle\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Form Component"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_form__WEBPACK_IMPORTED_MODULE_2__[/* Form */ "a"], {\n      onSubmit: onSubmit,\n      name: "testform"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A regular text field with a few validations and autofocus."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      type: "text",\n      name: "minTenField",\n      validate: tenAndAlpha,\n      label: "This is a label",\n      validateOnBlur: true,\n      validateOnChange: true,\n      placeholder: "test",\n      value: "testing12345",\n      required: true,\n      autoFocus: true\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      type: "button",\n      name: "alertButton",\n      onClick: onButtonClick\n    }, "Click me!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      type: "checkbox",\n      label: "Checkbox field",\n      name: "checkboxaaa",\n      checked: true\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can style inputs with CSS."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      type: "text",\n      label: "A Fancy Field",\n      name: "styledFancy",\n      pattern: "[\\\\d]{3}",\n      required: true,\n      placeholder: "Type \'323\' in this box",\n      className: "fancy-field",\n      value: "Type \'323\' in this box"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, \' \', "This uses the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Radios"), " component. Radio buttons are different than the rest of the standard form fields because they are, inherently, a set. Since they all share a sort of \\"state value\\" (as opposed to the value attribute), the value of the group is set to the currently selected radio button\'s value, so they get a different approach. The buttons are rendered in a", \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "fieldset"), " wrapper, and the overall label is set as a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "legend"), " tag."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Radios */ "b"], {\n      name: "radioset",\n      label: "Radio Set",\n      options: [{\n        label: \'first\',\n        value: \'first\'\n      }, {\n        label: \'second\',\n        value: \'second\'\n      }],\n      value: "second"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you do not want the native fieldset styling, then you can remove it"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Radios */ "b"], {\n      name: "radioset2",\n      className: "remove-fieldset-styling",\n      label: "Radio Set",\n      options: [{\n        label: \'first\',\n        value: \'first\'\n      }, {\n        label: \'second\',\n        value: \'second\'\n      }],\n      value: "first"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, fieldSetStyling)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This text field must be three digits because it uses the native pattern attribute for validation that browsers implement. So ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, \'pattern="[d]{3}"\'), " gets sent to the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "input"), " field."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      type: "text",\n      name: "withPattern" // validate={threeDigits}\n      ,\n      pattern: "[\\\\d]{3}",\n      validateOnBlur: true,\n      placeholder: "test2",\n      value: 323,\n      label: "field with pattern"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      type: "number",\n      label: "Number Field",\n      name: "number-field",\n      value: "4"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "date",\n      type: "date",\n      label: "Date Field",\n      placeholder: "MM/YYYY"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "button",\n      type: "button",\n      label: "Button",\n      onClick: function onClick() {\n        return alert(\'Hi\');\n      },\n      value: "What?"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "The color picker doesn\'t work quite right", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "color",\n      type: "color",\n      label: "Native Color Picker: ",\n      value: "#ff0000"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "datetime-local",\n      type: "datetime-local",\n      label: "DateTime Local"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "email",\n      type: "email"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "file",\n      type: "file",\n      accept: "dmg"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "month",\n      type: "month",\n      value: "2018-01",\n      label: "month"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "notapassword",\n      type: "password"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "range",\n      type: "range",\n      min: 0,\n      max: 200,\n      step: 5,\n      label: "Range"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "checkbox",\n      type: "checkbox",\n      checked: true\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "invalid",\n      type: "invalid"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "tel",\n      type: "tel",\n      label: "tel"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "time",\n      type: "time",\n      label: "time"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "url",\n      type: "url",\n      label: "url",\n      placeholder: "https://www.example.com",\n      size: 30\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, \'<Field name="url" type="url" label="url" placeholder="https://www.example.com" size={30} />\')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "week",\n      type: "week",\n      label: "week"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      type: "textarea",\n      name: "freeform",\n      label: "Please Explain",\n      value: "test",\n      rows: 5,\n      cols: 40,\n      required: true\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Field */ "a"], {\n      name: "selectField",\n      type: "select",\n      multiple: true,\n      options: [\'one\', \'two\', \'three\', {\n        label: \'four\',\n        value: \'four\'\n      }, {\n        OptGroup: [\'abc\', \'def\', \'hij\']\n      }]\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Submit */ "d"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_swan_form_field__WEBPACK_IMPORTED_MODULE_1__[/* Reset */ "c"], null))));\n  };\n\n  return RegularForm;\n}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);\n\n/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__["hot"])(module)(RegularForm));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))\n\n//# sourceURL=webpack:///./src/components/pages/RegularForm.js?')}}]);