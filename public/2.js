webpackJsonp([2],{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(49)
/* template */
var __vue_template__ = __webpack_require__(50)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7394cbb5"
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
Component.options.__file = "resources/assets/admin/js/components/Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7394cbb5", Component.options)
  } else {
    hotAPI.reload("data-v-7394cbb5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4d35850c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7394cbb5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7394cbb5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sidebar-container" }, [
      _c(
        "div",
        {
          staticClass: "sidemenu-container navbar-collapse collapse fixed-menu"
        },
        [
          _c("div", { attrs: { id: "remove-scroll" } }, [
            _c(
              "ul",
              {
                staticClass: "sidemenu page-header-fixed p-t-20",
                attrs: {
                  "data-keep-expanded": "false",
                  "data-auto-scroll": "true",
                  "data-slide-speed": "200"
                }
              },
              [
                _c("li", { staticClass: "sidebar-toggler-wrapper hide" }, [
                  _c("div", { staticClass: "sidebar-toggler" }, [_c("span")])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item start active" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link nav-toggle",
                      attrs: { href: "#" }
                    },
                    [
                      _c("i", { staticClass: "material-icons" }, [
                        _vm._v("dashboard")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "title" }, [
                        _vm._v("Dashboard")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "selected" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "arrow open" })
                    ]
                  ),
                  _vm._v(" "),
                  _c("ul", { staticClass: "sub-menu" }, [
                    _c("li", { staticClass: "nav-item active" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link ",
                          attrs: { href: "index.html" }
                        },
                        [
                          _c("span", { staticClass: "title" }, [
                            _vm._v("Dashboard 1")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "selected" })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item " }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link ",
                          attrs: { href: "dashboard2.html" }
                        },
                        [
                          _c("span", { staticClass: "title" }, [
                            _vm._v("Dashboard 2")
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7394cbb5", module.exports)
  }
}

/***/ })

});