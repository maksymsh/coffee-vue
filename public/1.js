webpackJsonp([1],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(31)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(33)
/* template */
var __vue_template__ = __webpack_require__(34)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a3870e32"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/admin/js/pages/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3870e32", Component.options)
  } else {
    hotAPI.reload("data-v-a3870e32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("78b9791e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a3870e32\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a3870e32\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapState */])(['data']))
});

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._v("\n        " + _vm._s(_vm.data.test) + "\n        "),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _vm._m(4)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "state-overview" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-3 col-md-6 col-12" }, [
          _c("div", { staticClass: "info-box bg-blue" }, [
            _c("span", { staticClass: "info-box-icon push-bottom" }, [
              _c("i", { staticClass: "material-icons" }, [_vm._v("style")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "info-box-content" }, [
              _c("span", { staticClass: "info-box-text" }, [_vm._v("Orders")]),
              _vm._v(" "),
              _c("span", { staticClass: "info-box-number" }, [_vm._v("450")]),
              _vm._v(" "),
              _c("div", { staticClass: "progress" }, [
                _c("div", { staticClass: "progress-bar width-60" })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "progress-description" }, [
                _vm._v(
                  "\n\t\t\t\t\t                    60% Increase in 28 Days\n\t\t\t\t\t                  "
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 col-12" }, [
          _c("div", { staticClass: "info-box bg-orange" }, [
            _c("span", { staticClass: "info-box-icon push-bottom" }, [
              _c("i", { staticClass: "material-icons" }, [
                _vm._v("card_travel")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "info-box-content" }, [
              _c("span", { staticClass: "info-box-text" }, [
                _vm._v("New Booking")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "info-box-number" }, [_vm._v("155")]),
              _vm._v(" "),
              _c("div", { staticClass: "progress" }, [
                _c("div", { staticClass: "progress-bar width-40" })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "progress-description" }, [
                _vm._v(
                  "\n\t\t\t\t\t                    40% Increase in 28 Days\n\t\t\t\t\t                  "
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 col-12" }, [
          _c("div", { staticClass: "info-box bg-purple" }, [
            _c("span", { staticClass: "info-box-icon push-bottom" }, [
              _c("i", { staticClass: "material-icons" }, [
                _vm._v("phone_in_talk")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "info-box-content" }, [
              _c("span", { staticClass: "info-box-text" }, [_vm._v("Inquiry")]),
              _vm._v(" "),
              _c("span", { staticClass: "info-box-number" }, [_vm._v("52")]),
              _vm._v(" "),
              _c("div", { staticClass: "progress" }, [
                _c("div", { staticClass: "progress-bar width-80" })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "progress-description" }, [
                _vm._v(
                  "\n\t\t\t\t\t                    80% Increase in 28 Days\n\t\t\t\t\t                  "
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 col-12" }, [
          _c("div", { staticClass: "info-box bg-success" }, [
            _c("span", { staticClass: "info-box-icon push-bottom" }, [
              _c("i", { staticClass: "material-icons" }, [
                _vm._v("monetization_on")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "info-box-content" }, [
              _c("span", { staticClass: "info-box-text" }, [
                _vm._v("Total Earning")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "info-box-number" }, [
                _vm._v("13,921")
              ]),
              _c("span", [_vm._v("$")]),
              _vm._v(" "),
              _c("div", { staticClass: "progress" }, [
                _c("div", { staticClass: "progress-bar width-60" })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "progress-description" }, [
                _vm._v(
                  "\n\t\t\t\t\t                    60% Increase in 28 Days\n\t\t\t\t\t                  "
                )
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card card-box" }, [
          _c("div", { staticClass: "card-head" }, [
            _c("header", [_vm._v("Chart Survey")]),
            _vm._v(" "),
            _c("div", { staticClass: "tools" }, [
              _c("a", {
                staticClass: "fa fa-repeat btn-color box-refresh",
                attrs: { href: "javascript:;" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "t-collapse btn-color fa fa-chevron-down",
                attrs: { href: "javascript:;" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "t-close btn-color fa fa-times",
                attrs: { href: "javascript:;" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body no-padding height-9" }, [
            _c("div", { staticClass: "row text-center" }, [
              _c("div", { staticClass: "col-sm-3 col-6" }, [
                _c("h4", { staticClass: "margin-0" }, [_vm._v("$ 209 ")]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v(" Today's Income")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3 col-6" }, [
                _c("h4", { staticClass: "margin-0" }, [_vm._v("$ 837 ")]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v("This Week's Income")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3 col-6" }, [
                _c("h4", { staticClass: "margin-0" }, [_vm._v("$ 3410 ")]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v("This Month's Income")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3 col-6" }, [
                _c("h4", { staticClass: "margin-0" }, [_vm._v("$ 78,000 ")]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v("This Year's Income")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", {
                staticClass: "width-100",
                attrs: { id: "area_line_chart" }
              })
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4 col-sm-12 col-12" }, [
        _c("div", { staticClass: "card bg-info" }, [
          _c("div", { staticClass: "text-white py-3 px-4" }, [
            _c("h6", { staticClass: "card-title text-white mb-0" }, [
              _vm._v("Page View")
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("7582")]),
            _vm._v(" "),
            _c("div", { attrs: { id: "sparkline26" } }),
            _vm._v(" "),
            _c("small", { staticClass: "text-white" }, [_vm._v("View Details")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card bg-success" }, [
          _c("div", { staticClass: "text-white py-3 px-4" }, [
            _c("h6", { staticClass: "card-title text-white mb-0" }, [
              _vm._v("Earning")
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("3669.25")]),
            _vm._v(" "),
            _c("div", { attrs: { id: "sparkline27" } }),
            _vm._v(" "),
            _c("small", { staticClass: "text-white" }, [_vm._v("View Details")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 col-sm-12 col-12" }, [
        _c("div", { staticClass: "card  card-box" }, [
          _c("div", { staticClass: "card-head" }, [
            _c("header", [_vm._v("Notifications")]),
            _vm._v(" "),
            _c("div", { staticClass: "tools" }, [
              _c("a", {
                staticClass: "fa fa-repeat btn-color box-refresh",
                attrs: { href: "javascript:;" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "t-collapse btn-color fa fa-chevron-down",
                attrs: { href: "javascript:;" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "t-close btn-color fa fa-times",
                attrs: { href: "javascript:;" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body no-padding height-9" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "noti-information notification-menu" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "notification-list mail-list not-list small-slimscroll-style"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "single-mail",
                        attrs: { href: "javascript:;" }
                      },
                      [
                        _c("span", { staticClass: "icon bg-primary" }, [
                          _c("i", { staticClass: "fa fa-user-o" })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-purple" }, [
                          _vm._v("Abhay Jani")
                        ]),
                        _vm._v(
                          " Added you as friend\n                                        "
                        ),
                        _c("span", { staticClass: "notificationtime" }, [
                          _c("small", [_vm._v("Just Now")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "single-mail",
                        attrs: { href: "javascript:;" }
                      },
                      [
                        _c("span", { staticClass: "icon blue-bgcolor" }, [
                          _c("i", { staticClass: "fa fa-envelope-o" })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-purple" }, [
                          _vm._v("John Doe")
                        ]),
                        _vm._v(
                          " send you a mail\n                                        "
                        ),
                        _c("span", { staticClass: "notificationtime" }, [
                          _c("small", [_vm._v("Just Now")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "single-mail",
                        attrs: { href: "javascript:;" }
                      },
                      [
                        _c("span", { staticClass: "icon bg-success" }, [
                          _c("i", { staticClass: "fa fa-check-square-o" })
                        ]),
                        _vm._v(
                          " Success Message\n                                        "
                        ),
                        _c("span", { staticClass: "notificationtime" }, [
                          _c("small", [_vm._v(" 2 Days Ago")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "single-mail",
                        attrs: { href: "javascript:;" }
                      },
                      [
                        _c("span", { staticClass: "icon bg-warning" }, [
                          _c("i", { staticClass: "fa fa-warning" })
                        ]),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Database Overloaded Warning!")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "notificationtime" }, [
                          _c("small", [_vm._v("1 Week Ago")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "single-mail",
                        attrs: { href: "javascript:;" }
                      },
                      [
                        _c("span", { staticClass: "icon bg-primary" }, [
                          _c("i", { staticClass: "fa fa-user-o" })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-purple" }, [
                          _vm._v("Abhay Jani")
                        ]),
                        _vm._v(
                          " Added you as friend\n                                        "
                        ),
                        _c("span", { staticClass: "notificationtime" }, [
                          _c("small", [_vm._v("Just Now")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "single-mail",
                        attrs: { href: "javascript:;" }
                      },
                      [
                        _c("span", { staticClass: "icon blue-bgcolor" }, [
                          _c("i", { staticClass: "fa fa-envelope-o" })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-purple" }, [
                          _vm._v("John Doe")
                        ]),
                        _vm._v(
                          " send you a mail\n                                        "
                        ),
                        _c("span", { staticClass: "notificationtime" }, [
                          _c("small", [_vm._v("Just Now")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "single-mail",
                        attrs: { href: "javascript:;" }
                      },
                      [
                        _c("span", { staticClass: "icon bg-success" }, [
                          _c("i", { staticClass: "fa fa-check-square-o" })
                        ]),
                        _vm._v(
                          " Success Message\n                                        "
                        ),
                        _c("span", { staticClass: "notificationtime" }, [
                          _c("small", [_vm._v(" 2 Days Ago")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "single-mail",
                        attrs: { href: "javascript:;" }
                      },
                      [
                        _c("span", { staticClass: "icon bg-warning" }, [
                          _c("i", { staticClass: "fa fa-warning" })
                        ]),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Database Overloaded Warning!")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "notificationtime" }, [
                          _c("small", [_vm._v("1 Week Ago")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "single-mail",
                        attrs: { href: "javascript:;" }
                      },
                      [
                        _c("span", { staticClass: "icon bg-danger" }, [
                          _c("i", { staticClass: "fa fa-times" })
                        ]),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Server Error!")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "notificationtime" }, [
                          _c("small", [_vm._v("10 Days Ago")])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "full-width text-center p-t-10" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn purple btn-outline btn-circle margin-0",
                      attrs: { type: "button" }
                    },
                    [_vm._v("View All")]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 col-sm-12 col-12" }, [
        _c("div", { staticClass: "card  card-box" }, [
          _c("div", { staticClass: "card-head" }, [
            _c("header", [_vm._v("Earning")]),
            _vm._v(" "),
            _c("div", { staticClass: "tools" }, [
              _c("a", {
                staticClass: "fa fa-repeat btn-color box-refresh",
                attrs: { href: "javascript:;" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "t-collapse btn-color fa fa-chevron-down",
                attrs: { href: "javascript:;" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "t-close btn-color fa fa-times",
                attrs: { href: "javascript:;" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body no-padding height-9" }, [
            _c("div", { staticClass: "row text-center" }, [
              _c("div", { staticClass: "col-sm-4 col-6" }, [
                _c("h4", { staticClass: "margin-0" }, [_vm._v("$ 209 ")]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [_vm._v(" Today")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-6" }, [
                _c("h4", { staticClass: "margin-0" }, [_vm._v("$ 837 ")]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [_vm._v("This Week")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-6" }, [
                _c("h4", { staticClass: "margin-0" }, [_vm._v("$ 3410 ")]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [_vm._v("This Month")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", {
                staticClass: "width-100 height-250",
                attrs: { id: "donut_chart" }
              })
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 col-sm-12" }, [
        _c("div", { staticClass: "card  card-box" }, [
          _c("div", { staticClass: "card-head" }, [
            _c("header", [_vm._v("Booking Details")]),
            _vm._v(" "),
            _c("div", { staticClass: "tools" }, [
              _c("a", {
                staticClass: "fa fa-repeat btn-color box-refresh",
                attrs: { href: "javascript:;" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "t-collapse btn-color fa fa-chevron-down",
                attrs: { href: "javascript:;" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "t-close btn-color fa fa-times",
                attrs: { href: "javascript:;" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body " }, [
            _c("div", { staticClass: "table-wrap" }, [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table display product-overview mb-30",
                    attrs: { id: "support_table5" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("No")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Check In")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Check Out")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Phone")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Room Type")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Edit")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("1")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Jens Brincker")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("23/05/2016")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("27/05/2016")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            { staticClass: "label label-sm label-success" },
                            [_vm._v("paid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("123456789")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Single")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-tbl-edit btn-xs",
                              attrs: { href: "edit_booking.html" }
                            },
                            [_c("i", { staticClass: "fa fa-pencil" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-tbl-delete btn-xs" },
                            [_c("i", { staticClass: "fa fa-trash-o " })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("2")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Mark Hay")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("24/05/2017")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("26/05/2017")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            { staticClass: "label label-sm label-warning" },
                            [_vm._v("unpaid ")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("123456789")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Double")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-tbl-edit btn-xs",
                              attrs: { href: "edit_booking.html" }
                            },
                            [_c("i", { staticClass: "fa fa-pencil" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-tbl-delete btn-xs" },
                            [_c("i", { staticClass: "fa fa-trash-o " })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("3")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Anthony Davie")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("17/05/2016")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("21/05/2016")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            { staticClass: "label label-sm label-success " },
                            [_vm._v("paid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("123456789")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Queen")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-tbl-edit btn-xs",
                              attrs: { href: "edit_booking.html" }
                            },
                            [_c("i", { staticClass: "fa fa-pencil" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-tbl-delete btn-xs" },
                            [_c("i", { staticClass: "fa fa-trash-o " })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("4")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("David Perry")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("19/04/2016")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("20/04/2016")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            { staticClass: "label label-sm label-danger" },
                            [_vm._v("unpaid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("123456789")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("King")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-tbl-edit btn-xs",
                              attrs: { href: "edit_booking.html" }
                            },
                            [_c("i", { staticClass: "fa fa-pencil" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-tbl-delete btn-xs" },
                            [_c("i", { staticClass: "fa fa-trash-o " })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("5")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Anthony Davie")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("21/05/2016")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("24/05/2016")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            { staticClass: "label label-sm label-success " },
                            [_vm._v("paid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("123456789")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Single")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-tbl-edit btn-xs",
                              attrs: { href: "edit_booking.html" }
                            },
                            [_c("i", { staticClass: "fa fa-pencil" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-tbl-delete btn-xs" },
                            [_c("i", { staticClass: "fa fa-trash-o " })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("6")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Alan Gilchrist")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("15/05/2016")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("22/05/2016")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            { staticClass: "label label-sm label-warning " },
                            [_vm._v("unpaid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("123456789")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("King")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-tbl-edit btn-xs",
                              attrs: { href: "edit_booking.html" }
                            },
                            [_c("i", { staticClass: "fa fa-pencil" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-tbl-delete btn-xs" },
                            [_c("i", { staticClass: "fa fa-trash-o " })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("7")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Mark Hay")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("17/06/2016")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("18/06/2016")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            { staticClass: "label label-sm label-success " },
                            [_vm._v("paid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("123456789")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Single")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-tbl-edit btn-xs",
                              attrs: { href: "edit_booking.html" }
                            },
                            [_c("i", { staticClass: "fa fa-pencil" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-tbl-delete btn-xs" },
                            [_c("i", { staticClass: "fa fa-trash-o " })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("8")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Sue Woodger")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("15/05/2016")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("17/05/2016")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            { staticClass: "label label-sm label-danger" },
                            [_vm._v("unpaid")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("123456789")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Double")]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-tbl-edit btn-xs",
                              attrs: { href: "edit_booking.html" }
                            },
                            [_c("i", { staticClass: "fa fa-pencil" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-tbl-delete btn-xs" },
                            [_c("i", { staticClass: "fa fa-trash-o " })]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-8 col-md-12 col-sm-12 col-12" }, [
        _c("div", { staticClass: "card-box " }, [
          _c("div", { staticClass: "card-head" }, [
            _c("header", [_vm._v("Guest Review")]),
            _vm._v(" "),
            _c("div", { staticClass: "tools" }, [
              _c("a", {
                staticClass: "fa fa-repeat btn-color box-refresh",
                attrs: { href: "javascript:;" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "t-collapse btn-color fa fa-chevron-down",
                attrs: { href: "javascript:;" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "t-close btn-color fa fa-times",
                attrs: { href: "javascript:;" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body " }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "ul",
                { staticClass: "docListWindow small-slimscroll-style" },
                [
                  _c("li", [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8 col-sm-8" }, [
                        _c("div", { staticClass: "prog-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "assets/img/user/user1.jpg",
                              alt: "",
                              width: "40",
                              height: "40"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "details" }, [
                          _c("div", { staticClass: "title" }, [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Rajesh Mishra")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "rating-text" }, [
                              _vm._v("Awesome!!! Highly recommend")
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 col-sm-4 rating-style" },
                        [
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_half")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_border")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8 col-sm-8" }, [
                        _c("div", { staticClass: "prog-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "assets/img/user/user2.jpg",
                              alt: "",
                              width: "40",
                              height: "40"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "details" }, [
                          _c("div", { staticClass: "title" }, [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Sarah Smith")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "rating-text" }, [
                              _vm._v("Very bad service :(")
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 col-sm-4 rating-style" },
                        [
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_half")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_border")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_border")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_border")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8 col-sm-8" }, [
                        _c("div", { staticClass: "prog-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "assets/img/user/user3.jpg",
                              alt: "",
                              width: "40",
                              height: "40"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "details" }, [
                          _c("div", { staticClass: "title" }, [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("John Simensh")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "rating-text" }, [
                              _vm._v(" Staff was good nd i'll come again")
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 col-sm-4 rating-style" },
                        [
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8 col-sm-8" }, [
                        _c("div", { staticClass: "prog-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "assets/img/user/user4.jpg",
                              alt: "",
                              width: "40",
                              height: "40"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "details" }, [
                          _c("div", { staticClass: "title" }, [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Priya Sarma")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "rating-text" }, [
                              _vm._v("The price I received was good value.")
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 col-sm-4 rating-style" },
                        [
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_half")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8 col-sm-8" }, [
                        _c("div", { staticClass: "prog-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "assets/img/user/user5.jpg",
                              alt: "",
                              width: "40",
                              height: "40"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "details" }, [
                          _c("div", { staticClass: "title" }, [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Serlin Ponting")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "rating-text" }, [
                              _vm._v("Not Satisfy !!!1")
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 col-sm-4 rating-style" },
                        [
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_border")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_border")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_border")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_border")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8 col-sm-8" }, [
                        _c("div", { staticClass: "prog-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "assets/img/user/user6.jpg",
                              alt: "",
                              width: "40",
                              height: "40"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "details" }, [
                          _c("div", { staticClass: "title" }, [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Priyank Jain")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "rating-text" }, [
                              _vm._v("Good....")
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4 col-sm-4 rating-style" },
                        [
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_half")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("star_border")
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "full-width text-center p-t-10" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn purple btn-outline btn-circle margin-0",
                    attrs: { href: "#" }
                  },
                  [_vm._v("View All")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 col-md-12 col-sm-12 col-12" }, [
        _c("div", { staticClass: "card-box" }, [
          _c("div", { staticClass: "card-head" }, [
            _c("header", [_vm._v("Todo List")]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "mdl-button mdl-js-button mdl-button--icon pull-right",
                attrs: {
                  id: "panel-button",
                  "data-upgraded": ",MaterialButton"
                }
              },
              [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("more_vert")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass:
                  "mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect",
                attrs: { "data-mdl-for": "panel-button" }
              },
              [
                _c("li", { staticClass: "mdl-menu__item" }, [
                  _c("i", { staticClass: "material-icons" }, [
                    _vm._v("assistant_photo")
                  ]),
                  _vm._v("Action")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "mdl-menu__item" }, [
                  _c("i", { staticClass: "material-icons" }, [_vm._v("print")]),
                  _vm._v("Another action")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "mdl-menu__item" }, [
                  _c("i", { staticClass: "material-icons" }, [
                    _vm._v("favorite")
                  ]),
                  _vm._v("Something else here")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body " }, [
            _c(
              "ul",
              {
                staticClass: "to-do-list ui-sortable",
                attrs: { id: "sortable-todo" }
              },
              [
                _c("li", { staticClass: "clearfix" }, [
                  _c("div", { staticClass: "todo-check pull-left" }, [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        value: "None",
                        id: "todo-check1"
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "todo-check1" } })
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "todo-title" }, [
                    _vm._v(
                      "Add fees details in system\n                                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "todo-actionlist pull-right clearfix" },
                    [
                      _c(
                        "a",
                        { staticClass: "todo-remove", attrs: { href: "#" } },
                        [_c("i", { staticClass: "fa fa-times" })]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "clearfix" }, [
                  _c("div", { staticClass: "todo-check pull-left" }, [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        value: "None",
                        id: "todo-check2"
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "todo-check2" } })
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "todo-title" }, [
                    _vm._v(
                      "Announcement for holiday\n                                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "todo-actionlist pull-right clearfix" },
                    [
                      _c(
                        "a",
                        { staticClass: "todo-remove", attrs: { href: "#" } },
                        [_c("i", { staticClass: "fa fa-times" })]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "clearfix" }, [
                  _c("div", { staticClass: "todo-check pull-left" }, [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        value: "None",
                        id: "todo-check3"
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "todo-check3" } })
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "todo-title" }, [
                    _vm._v("call bus driver")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "todo-actionlist pull-right clearfix" },
                    [
                      _c(
                        "a",
                        { staticClass: "todo-remove", attrs: { href: "#" } },
                        [_c("i", { staticClass: "fa fa-times" })]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "clearfix" }, [
                  _c("div", { staticClass: "todo-check pull-left" }, [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        value: "None",
                        id: "todo-check4"
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "todo-check4" } })
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "todo-title" }, [
                    _vm._v("School picnic")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "todo-actionlist pull-right clearfix" },
                    [
                      _c(
                        "a",
                        { staticClass: "todo-remove", attrs: { href: "#" } },
                        [_c("i", { staticClass: "fa fa-times" })]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "clearfix" }, [
                  _c("div", { staticClass: "todo-check pull-left" }, [
                    _c("input", {
                      attrs: {
                        type: "checkbox",
                        value: "None",
                        id: "todo-check5"
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "todo-check5" } })
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "todo-title" }, [
                    _vm._v(
                      "Exam time table generate\n                                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "todo-actionlist pull-right clearfix" },
                    [
                      _c(
                        "a",
                        { staticClass: "todo-remove", attrs: { href: "#" } },
                        [_c("i", { staticClass: "fa fa-times" })]
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a3870e32", module.exports)
  }
}

/***/ })

});