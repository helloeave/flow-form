(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{154:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: /Users/shawn/projects/swan-form/node_modules/react/index.js\nvar react = __webpack_require__(0);\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: ../field/dist/index.es.js\nvar index_es = __webpack_require__(24);\n\n// EXTERNAL MODULE: ../form/dist/index.es.js\nvar dist_index_es = __webpack_require__(27);\n\n// EXTERNAL MODULE: ../helpers/dist/index.es.js\nvar helpers_dist_index_es = __webpack_require__(22);\n\n// EXTERNAL MODULE: /Users/shawn/projects/swan-form/node_modules/prop-types/index.js\nvar prop_types = __webpack_require__(23);\n\n// CONCATENATED MODULE: ../slider/dist/index.es.js\n\n\n\n\n\n\nvar _g = function g(e, t) {\n  return (_g = Object.setPrototypeOf || {\n    __proto__: []\n  } instanceof Array && function (e, t) {\n    e.__proto__ = t;\n  } || function (e, t) {\n    for (var r in t) {\n      t.hasOwnProperty(r) && (e[r] = t[r]);\n    }\n  })(e, t);\n};\n\nfunction index_es_x(e, t) {\n  function r() {\n    this.constructor = e;\n  }\n\n  _g(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());\n}\n\nvar _P = function P() {\n  return (_P = Object.assign || function (e) {\n    for (var t, r = 1, o = arguments.length; r < o; r++) {\n      for (var i in t = arguments[r]) {\n        ({}).hasOwnProperty.call(t, i) && (e[i] = t[i]);\n      }\n    }\n\n    return e;\n  }).apply(this, arguments);\n};\n\nfunction N(e, t) {\n  var r = {};\n\n  for (var o in e) {\n    ({}).hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);\n  }\n\n  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {\n    var i = 0;\n\n    for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) {\n      t.indexOf(o[i]) < 0 && (r[o[i]] = e[o[i]]);\n    }\n  }\n\n  return r;\n}\n\nfunction index_es_w(e, t, r, o) {\n  return new (r || (r = Promise))(function (i, n) {\n    function s(e) {\n      try {\n        a(o.next(e));\n      } catch (e) {\n        n(e);\n      }\n    }\n\n    function l(e) {\n      try {\n        a(o["throw"](e));\n      } catch (e) {\n        n(e);\n      }\n    }\n\n    function a(e) {\n      e.done ? i(e.value) : new r(function (t) {\n        t(e.value);\n      }).then(s, l);\n    }\n\n    a((o = o.apply(e, t || [])).next());\n  });\n}\n\nfunction index_es_E(e, t) {\n  var r,\n      o,\n      i,\n      n,\n      s = {\n    label: 0,\n    sent: function sent() {\n      if (1 & i[0]) throw i[1];\n      return i[1];\n    },\n    trys: [],\n    ops: []\n  };\n  return n = {\n    next: l(0),\n    "throw": l(1),\n    "return": l(2)\n  }, "function" == typeof Symbol && (n[Symbol.iterator] = function () {\n    return this;\n  }), n;\n\n  function l(n) {\n    return function (l) {\n      return function (n) {\n        if (r) throw new TypeError("Generator is already executing.");\n\n        for (; s;) {\n          try {\n            if (r = 1, o && (i = 2 & n[0] ? o["return"] : n[0] ? o["throw"] || ((i = o["return"]) && i.call(o), 0) : o.next) && !(i = i.call(o, n[1])).done) return i;\n\n            switch (o = 0, i && (n = [2 & n[0], i.value]), n[0]) {\n              case 0:\n              case 1:\n                i = n;\n                break;\n\n              case 4:\n                return s.label++, {\n                  value: n[1],\n                  done: !1\n                };\n\n              case 5:\n                s.label++, o = n[1], n = [0];\n                continue;\n\n              case 7:\n                n = s.ops.pop(), s.trys.pop();\n                continue;\n\n              default:\n                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {\n                  s = 0;\n                  continue;\n                }\n\n                if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {\n                  s.label = n[1];\n                  break;\n                }\n\n                if (6 === n[0] && s.label < i[1]) {\n                  s.label = i[1], i = n;\n                  break;\n                }\n\n                if (i && s.label < i[2]) {\n                  s.label = i[2], s.ops.push(n);\n                  break;\n                }\n\n                i[2] && s.ops.pop(), s.trys.pop();\n                continue;\n            }\n\n            n = t.call(e, s);\n          } catch (e) {\n            n = [6, e], o = 0;\n          } finally {\n            r = i = 0;\n          }\n        }\n\n        if (5 & n[0]) throw n[1];\n        return {\n          value: n[0] ? n[1] : void 0,\n          done: !0\n        };\n      }([n, l]);\n    };\n  }\n}\n\nvar index_es_V = function V() {\n  return !0;\n},\n    index_es_j = function (o) {\n  function d(t) {\n    var r = o.call(this, t) || this;\n    return r.injectSlideProps = function () {\n      return {\n        common: r.props.common || {},\n        getFormValues: r.getFormValues,\n        nextSlide: r.next,\n        prevSlide: r.prev,\n        setRef: r.setCurrentSlideRef,\n        currentSlideIndex: r.state.current,\n        totalSlides: react["Children"].count(r.props.children) || 0\n      };\n    }, r.setFormRef = function (e) {\n      r.form = e;\n    }, r.setCurrentSlideRef = function (e) {\n      r.currentSlide = e;\n    }, r.isCurrentSlideValid = function () {\n      return index_es_w(r, void 0, void 0, function () {\n        return index_es_E(this, function (e) {\n          return this.currentSlide && Object(helpers_dist_index_es["t" /* isFunction */])(this.currentSlide.isSlideValid) ? [2, this.currentSlide.isSlideValid()] : [2, !0];\n        });\n      });\n    }, r.getChildren = function () {\n      return react["Children"].toArray(r.props.children);\n    }, r.getFormValues = function () {\n      return r.form && Object(helpers_dist_index_es["t" /* isFunction */])(r.form.getValues) ? r.form.getValues() : {};\n    }, r.moveTo = function (e) {\n      var t = r.props.afterSlideChange;\n      r.mounted && r.setState({\n        current: e\n      }, function () {\n        return Object(helpers_dist_index_es["j" /* execIfFunc */])(t);\n      });\n    }, r.next = function () {\n      return index_es_w(r, void 0, void 0, function () {\n        var e,\n            t,\n            r,\n            o,\n            i = this;\n        return index_es_E(this, function (l) {\n          switch (l.label) {\n            case 0:\n              return [4, this.isCurrentSlideValid()];\n\n            case 1:\n              return l.sent() ? (e = this.findNext()) >= this.getChildren().length ? (this.form && Object(helpers_dist_index_es["t" /* isFunction */])(this.form.handleOnSubmit) && Object(helpers_dist_index_es["j" /* execIfFunc */])(this.form.doSubmit), [2]) : (t = this.currentSlide.props, r = t.beforeExit, o = t.beforeExitToNext, Object(helpers_dist_index_es["t" /* isFunction */])(o) ? (o(this.injectSlideProps()).then(function () {\n                return i.moveTo(e);\n              }), [2]) : Object(helpers_dist_index_es["t" /* isFunction */])(r) ? (r(this.injectSlideProps()).then(function () {\n                return i.moveTo(e);\n              }), [2]) : (this.moveTo(this.findNext()), [2])) : [2];\n          }\n        });\n      });\n    }, r.prev = function () {\n      var e = r.findPrev();\n\n      if (e !== r.state.current) {\n        var t = r.currentSlide.props,\n            o = t.beforeExit,\n            i = t.beforeExitToPrev;\n        Object(helpers_dist_index_es["t" /* isFunction */])(i) ? i(r.injectSlideProps()).then(function () {\n          return r.moveTo(e);\n        }) : Object(helpers_dist_index_es["t" /* isFunction */])(o) ? o(r.injectSlideProps()).then(function () {\n          return r.moveTo(e);\n        }) : r.moveTo(e);\n      }\n    }, r.findNext = function () {\n      for (var e = r.state.current, t = r.getChildren(), o = r.form && Object(helpers_dist_index_es["t" /* isFunction */])(r.form.getValues) ? r.form.getValues() : {}, i = t.length - 1, s = e + 1; s <= i; s++) {\n        var l = t[s].props.shouldShowIf;\n        if ((void 0 === l ? index_es_V : l)(o)) return s;\n      }\n\n      return i + 1;\n    }, r.findPrev = function () {\n      for (var e = r.state.current, t = r.getChildren(), o = r.form && Object(helpers_dist_index_es["t" /* isFunction */])(r.form.getValues) ? r.form.getValues() : {}, i = e - 1; i >= 0; i--) {\n        var s = t[i].props.shouldShowIf;\n        if ((void 0 === s ? index_es_V : s)(o)) return i;\n      }\n\n      return 0;\n    }, r.handleEnd = function () {\n      r.form && Object(helpers_dist_index_es["j" /* execIfFunc */])(r.form.doSubmit);\n    }, r.state = {\n      current: Object(helpers_dist_index_es["f" /* clamp */])(t.current || 0, 0, react["Children"].count(t.children)) || 0\n    }, r;\n  }\n\n  return index_es_x(d, o), d.prototype.componentDidMount = function () {\n    this.mounted = !0;\n    var e = this.currentSlide.props,\n        t = e.didEnter,\n        r = e.didEnterAsNext;\n    r ? Object(helpers_dist_index_es["j" /* execIfFunc */])(r, this.injectSlideProps()) : t && Object(helpers_dist_index_es["j" /* execIfFunc */])(t, this.injectSlideProps());\n  }, d.prototype.componentDidUpdate = function (e, t) {\n    if (this.state.current !== t.current) {\n      var r = this.currentSlide.props,\n          o = r.didEnter,\n          i = r.didEnterAsPrev,\n          n = r.didEnterAsNext;\n      t.current > this.state.current && i ? Object(helpers_dist_index_es["j" /* execIfFunc */])(i, this.injectSlideProps()) : t.current < this.state.current && n ? Object(helpers_dist_index_es["j" /* execIfFunc */])(n, this.injectSlideProps()) : o && Object(helpers_dist_index_es["j" /* execIfFunc */])(o, this.injectSlideProps());\n    }\n  }, d.prototype.componentWillUnmount = function () {\n    this.mounted = !1;\n  }, d.prototype.render = function () {\n    var e = this.props,\n        o = e.className,\n        s = e.formName,\n        l = e.PrevButton,\n        d = e.NextButton,\n        f = e.FinishButton,\n        c = e.onSubmit,\n        p = e.afterSubmit,\n        h = e.beforeSubmit,\n        m = e.autoComplete,\n        v = e.defaultValues,\n        S = N(e, ["className", "formName", "PrevButton", "NextButton", "FinishButton", "onSubmit", "afterSubmit", "beforeSubmit", "autoComplete", "defaultValues"]),\n        b = this.state.current,\n        y = this.getChildren(),\n        g = y[b],\n        x = Object(helpers_dist_index_es["g" /* classes */])(["sf--slider-control", "sf--slider-control-left"]),\n        w = Object(helpers_dist_index_es["g" /* classes */])(["sf--slider-control", "sf--slider-control-right"]),\n        E = y.length - 1 === b,\n        V = E ? this.handleEnd : this.next,\n        j = _P({}, Object(helpers_dist_index_es["l" /* filterKeysFromObj */])(S, ["afterSlideChange", "defaultFormValues", "formAutoComplete", "commonProps", "defaultValues", "setRef"]), Object(helpers_dist_index_es["t" /* isFunction */])(this.props.setRef) ? {\n      ref: this.props.setRef\n    } : {});\n\n    return Object(react["createElement"])("div", _P({}, j, {\n      className: Object(helpers_dist_index_es["g" /* classes */])("sf--slider", o)\n    }), Object(react["createElement"])("button", {\n      type: "button",\n      className: x,\n      disabled: 0 === b,\n      onClick: this.prev\n    }, l), Object(react["createElement"])("button", {\n      type: "button",\n      className: w,\n      onClick: V\n    }, E ? f : d), Object(react["createElement"])(dist_index_es["a" /* Form */], {\n      name: s,\n      onSubmit: c,\n      beforeSubmit: h,\n      afterSubmit: p,\n      autoComplete: m,\n      persist: !0,\n      defaultValues: v,\n      ref: this.setFormRef\n    }, Object(react["cloneElement"])(g, this.injectSlideProps())));\n  }, d.displayName = "Slider", d.defaultProps = {\n    autoComplete: "off",\n    afterSubmit: function afterSubmit(e) {\n      return Promise.resolve(e);\n    },\n    beforeSubmit: function beforeSubmit(e) {\n      return Promise.resolve(e);\n    },\n    commonProps: {},\n    current: 0,\n    defaultValues: {},\n    formName: "slider-form",\n    PrevButton: "←",\n    NextButton: "→",\n    FinishButton: "→"\n  }, d;\n}(react["PureComponent"]),\n    C = [],\n    O = {},\n    F = function F() {\n  return !0;\n},\n    T = function (e) {\n  function r(t) {\n    var r = e.call(this, t) || this;\n    return r.state = {\n      errors: C\n    }, r.fields = {}, r.maybeAutoFocus = function () {\n      var e = r.props.autoFocus,\n          t = Object.keys(r.fields)[0],\n          o = r.fields[t];\n      e && o && Object(helpers_dist_index_es["t" /* isFunction */])(o.focus) && o.focus();\n    }, r.registerWithSlide = function (e) {\n      r.fields[e.name] = _P({}, e);\n    }, r.unregisterFromSlide = function (e) {\n      var t = r.fields,\n          o = e,\n          i = (t[o], N(t, ["symbol" == typeof o ? o : o + ""]));\n      r.fields = i;\n    }, r.getSlideInterface = Object(helpers_dist_index_es["y" /* memoize */])(function () {\n      return {\n        registerWithSlide: r.registerWithSlide,\n        unregisterFromSlide: r.unregisterFromSlide,\n        advance: r.advance,\n        retreat: r.retreat\n      };\n    }), r.advance = function (e) {\n      var t = r.props.nextSlide,\n          o = Object.keys(r.fields),\n          i = o.filter(function (t) {\n        return r.fields[t].getRef() === e.target;\n      })[0];\n\n      if (i) {\n        var n = o.indexOf(i),\n            l = o[n + 1];\n        l ? r.fields[l].focus() : Object(helpers_dist_index_es["j" /* execIfFunc */])(t);\n      }\n    }, r.retreat = function (e) {\n      var t = Object.keys(r.fields),\n          o = t.filter(function (t) {\n        return r.fields[t].getRef() === e.target;\n      })[0];\n\n      if (o) {\n        var i = t.indexOf(o),\n            n = t[i - 1];\n        Object(helpers_dist_index_es["j" /* execIfFunc */])(n ? r.fields[n].focus : r.props.prevSlide);\n      }\n    }, r.isSlideValid = function () {\n      return index_es_w(r, void 0, void 0, function () {\n        var e;\n        return index_es_E(this, function (t) {\n          switch (t.label) {\n            case 0:\n              return e = Object(helpers_dist_index_es["n" /* gatherErrors */])(this.fields, !0), [4, this.validateSlide(!0)];\n\n            case 1:\n              return [2, 0 === t.sent().length && 0 === e.length];\n          }\n        });\n      });\n    }, r.validateSlide = function (e) {\n      return void 0 === e && (e = !1), index_es_w(r, void 0, void 0, function () {\n        var t, r;\n        return index_es_E(this, function (o) {\n          switch (o.label) {\n            case 0:\n              return [4, Object(helpers_dist_index_es["j" /* execIfFunc */])(this.props.validate, Object(helpers_dist_index_es["o" /* gatherValues */])(this.fields))];\n\n            case 1:\n              return t = o.sent(), r = Object(helpers_dist_index_es["c" /* alwaysFilteredArray */])(t), this.mounted && e && this.setState({\n                errors: r.length ? r : C\n              }), [2, r];\n          }\n        });\n      });\n    }, Object(helpers_dist_index_es["j" /* execIfFunc */])(t.setRef, r), r;\n  }\n\n  return index_es_x(r, e), r.prototype.componentDidMount = function () {\n    this.mounted = !0, this.maybeAutoFocus();\n  }, r.prototype.componentWillUnmount = function () {\n    this.mounted = !1;\n  }, r.prototype.render = function () {\n    var e = this.props,\n        r = e.className,\n        o = e.children,\n        i = e.style,\n        n = e.render,\n        l = void 0 === n ? o : n,\n        u = this.state.errors;\n    return Object(react["createElement"])("div", {\n      className: Object(helpers_dist_index_es["g" /* classes */])("sf--slide", u.length && "sf--slide-has-errors", r),\n      style: i\n    }, Object(react["createElement"])(helpers_dist_index_es["b" /* SlideContext */].Provider, {\n      value: this.getSlideInterface()\n    }, Object(helpers_dist_index_es["j" /* execIfFunc */])(l, this.props)), Object(react["createElement"])("div", {\n      className: "sf--slide-errors"\n    }, u.map(function (e) {\n      return Object(react["createElement"])("div", {\n        className: "sf--slide-error",\n        key: Object(helpers_dist_index_es["C" /* toKey */])(e)\n      }, e);\n    })));\n  }, r.propTypes = {\n    autoFocus: prop_types["bool"],\n    beforeExit: prop_types["func"],\n    beforeExitToNext: prop_types["func"],\n    beforeExitToPrev: prop_types["func"],\n    className: prop_types["string"],\n    didEnter: prop_types["func"],\n    didEnterAsPrev: prop_types["func"],\n    didEnterAsNext: prop_types["func"],\n    render: prop_types["func"],\n    shouldShowIf: prop_types["func"],\n    style: Object(prop_types["shape"])({}),\n    validate: prop_types["func"]\n  }, r.defaultProps = {\n    validate: function validate(e) {\n      return [];\n    },\n    className: "",\n    autoFocus: !0,\n    shouldShowIf: F,\n    style: O,\n    beforeExitToNext: void 0,\n    beforeExitToPrev: void 0,\n    beforeExit: void 0,\n    didEnter: void 0,\n    didEnterAsNext: void 0,\n    didEnterAsPrev: void 0,\n    render: void 0\n  }, r.displayName = "Slide", r;\n}(react["PureComponent"]);\n\n\n// CONCATENATED MODULE: ./src/components/pages/SliderForm.js\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/* eslint-disable no-alert, react/prefer-stateless-function */\n\n\n\n\n\nvar isNull = function isNull(value) {\n  return value === null;\n};\n\nvar isDefined = function isDefined(value) {\n  return typeof value !== \'undefined\';\n};\n/**\n * Helper validation\n */\n\n\nvar required = function required(value) {\n  return isDefined(value) && !isNull(value) && value.trim() ? false : \'Required\';\n};\n\nvar onSubmit = function onSubmit(values) {\n  alert(JSON.stringify(values));\n  return values;\n};\n\nvar beforeSubmit = function beforeSubmit(values) {\n  return Promise.resolve(Object.keys(values).reduce(function (acc, key) {\n    var _extends2;\n\n    return _extends({}, acc, (_extends2 = {}, _extends2[key] = typeof values[key] === \'string\' ? values[key].toUpperCase() : values[key], _extends2));\n  }, {}));\n};\n\nvar SliderForm_SliderForm =\n/*#__PURE__*/\nfunction (_Component) {\n  _inheritsLoose(SliderForm, _Component);\n\n  function SliderForm() {\n    var _this;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _Component.call.apply(_Component, [this].concat(args)) || this;\n\n    _defineProperty(_assertThisInitialized(_this), "scrollToTop", function () {\n      if (_this.wrapper) {\n        // will probably only work fully in Firefox and Chrome\n        _this.wrapper.scrollIntoView({\n          behavior: \'smooth\',\n          block: \'start\',\n          inline: \'nearest\'\n        });\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "setRef", function (el) {\n      _this.wrapper = el;\n    });\n\n    return _this;\n  }\n\n  var _proto = SliderForm.prototype;\n\n  _proto.render = function render() {\n    return react_default.a.createElement("div", {\n      ref: this.setRef\n    }, react_default.a.createElement(index_es_j, {\n      afterSlideChange: this.scrollToTop,\n      beforeSubmit: beforeSubmit,\n      onSubmit: onSubmit\n    }, react_default.a.createElement(T, {\n      validate: function validate(values) {\n        return Promise.resolve(values[\'first-question\'] === \'test\' ? false : \'Make the value `test`\');\n      },\n      didEnterAsNext: function didEnterAsNext() {\n        return console.log(\'First slide entered\');\n      }\n    }, react_default.a.createElement("div", null, react_default.a.createElement("h1", null, "A first question"), react_default.a.createElement(index_es["a" /* Field */], {\n      type: "text",\n      name: "first-question",\n      validate: required,\n      size: 50,\n      placeholder: "This field is required"\n    }), react_default.a.createElement("p", null, "This slider has five slides. This one, two that we skip, and one with a submit button. After we", \' \', react_default.a.createElement("em", null, "press"), " submit, we transform the value in the first to an uppercase string (", react_default.a.createElement("code", null, "beforeSubmit"), ") that is passed to the actual submit (", react_default.a.createElement("code", null, "onSubmit"), ") that is then logged to the console in the after submit method (", react_default.a.createElement("code", null, "afterSubmit"), ")."))), react_default.a.createElement(T, null, react_default.a.createElement("div", null, react_default.a.createElement("h1", null, "A second question"), react_default.a.createElement(index_es["a" /* Field */], {\n      name: "first-question-a",\n      placeholder: "This field is required",\n      size: 50,\n      type: "text",\n      validate: required\n    }), react_default.a.createElement("p", null, "This is just another random question."))), react_default.a.createElement(T, {\n      beforeExitToNext: function beforeExitToNext(_ref) {\n        var getFormValues = _ref.getFormValues;\n        return new Promise(function (res) {\n          console.log(\'In beforeExitToNext hook\');\n          alert("You chose " + getFormValues().decisionTree);\n          res();\n        });\n      }\n    }, react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Decision Tree"), react_default.a.createElement("p", null, "Here are two radio buttons. If you choose the first one, you\'ll see the next slide and skip the one after that. If you choose the other one, you\'ll see the reverse."), react_default.a.createElement(index_es["b" /* Radios */], {\n      validate: required,\n      name: "decisionTree",\n      options: [{\n        label: \'Next Slide\',\n        value: \'0\'\n      }, {\n        label: \'The Other One\',\n        value: \'1\'\n      }]\n    }))), react_default.a.createElement(T, {\n      shouldShowIf: function shouldShowIf(_ref2) {\n        var decisionTree = _ref2.decisionTree;\n        return decisionTree === \'0\';\n      }\n    }, react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "You chose the first slide."), react_default.a.createElement("p", null, "(This is a static message, in case you\'re wondering)."))), react_default.a.createElement(T, {\n      shouldShowIf: function shouldShowIf(_ref3) {\n        var decisionTree = _ref3.decisionTree;\n        return decisionTree === \'1\';\n      }\n    }, react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "You skipped the last slide."), react_default.a.createElement("p", null, "(This is a static message, in case you\'re wondering)."))), react_default.a.createElement(T, null, react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "File fields in slides are different"), react_default.a.createElement("p", null, "We cannot rehydrate the value when the field gets remounted because of browser security restrictions."), react_default.a.createElement(index_es["a" /* Field */], {\n      type: "file",\n      name: "file-field"\n    }))), react_default.a.createElement(T, null, react_default.a.createElement("h2", null, "A static slide"), react_default.a.createElement("p", null, "This is a static slide. There is no need to set values in forms, so we don\'t need to use a render prop.")), react_default.a.createElement(T, {\n      render: function render(props) {\n        return react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "These are all the values that were chosen"), react_default.a.createElement("pre", null, JSON.stringify(props.getFormValues(), null, 2)));\n      }\n    }), react_default.a.createElement(T, {\n      shouldShowIf: function shouldShowIf() {\n        return false;\n      }\n    }, "This will never show, and the submit action should happen as we press next.")));\n  };\n\n  return SliderForm;\n}(react["Component"]);\n\n/* harmony default export */ var pages_SliderForm = __webpack_exports__["default"] = (SliderForm_SliderForm);\n\n//# sourceURL=webpack:///./src/components/pages/SliderForm.js_+_1_modules?')}}]);