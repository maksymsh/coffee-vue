webpackJsonp([3],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(41)
/* template */
var __vue_template__ = __webpack_require__(42)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-55ad2278"
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
Component.options.__file = "resources/assets/admin/js/components/Header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55ad2278", Component.options)
  } else {
    hotAPI.reload("data-v-55ad2278", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6cb5b0f6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55ad2278\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55ad2278\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 41:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 42:
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
    return _c("div", { staticClass: "page-header navbar navbar-fixed-top" }, [
      _c("div", { staticClass: "page-header-inner " }, [
        _c("div", { staticClass: "page-logo" }, [
          _c("a", { attrs: { href: "index.html" } }, [
            _c("img", {
              staticClass: "logo-img",
              attrs: { alt: "", src: "assets/img/logo.png" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "logo-default" }, [_vm._v("Compas")])
          ])
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "nav navbar-nav navbar-left in" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "menu-toggler sidebar-toggler",
                attrs: { href: "#" }
              },
              [_c("i", { staticClass: "icon-menu" })]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "search-form-opened",
            attrs: { action: "#", method: "GET" }
          },
          [
            _c("div", { staticClass: "input-group" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Search...", name: "query" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "input-group-btn search-btn" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn submit",
                    attrs: { href: "javascript:;" }
                  },
                  [_c("i", { staticClass: "icon-magnifier" })]
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "menu-toggler responsive-toggler",
            attrs: {
              href: "javascript:;",
              "data-toggle": "collapse",
              "data-target": ".navbar-collapse"
            }
          },
          [_c("span")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "top-menu" }, [
          _c("ul", { staticClass: "nav navbar-nav pull-right" }, [
            _c(
              "li",
              {
                staticClass: "dropdown dropdown-extended dropdown-notification",
                attrs: { id: "header_notification_bar" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      href: "javascript:;",
                      "data-toggle": "dropdown",
                      "data-hover": "dropdown",
                      "data-close-others": "true"
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-bell-o" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "badge headerBadgeColor1" }, [
                      _vm._v(" 6 ")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "dropdown-menu animated swing" }, [
                  _c("li", { staticClass: "external" }, [
                    _c("h3", [
                      _c("span", { staticClass: "bold" }, [
                        _vm._v("Notifications")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "notification-label purple-bgcolor" },
                      [_vm._v("New 6")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "ul",
                      {
                        staticClass:
                          "dropdown-menu-list small-slimscroll-style",
                        attrs: { "data-handle-color": "#637283" }
                      },
                      [
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:;" } }, [
                            _c("span", { staticClass: "time" }, [
                              _vm._v("just now")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "details" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "notification-icon circle deepPink-bgcolor"
                                },
                                [_c("i", { staticClass: "fa fa-check" })]
                              ),
                              _vm._v(" Congratulations!. ")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:;" } }, [
                            _c("span", { staticClass: "time" }, [
                              _vm._v("3 mins")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "details" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "notification-icon circle purple-bgcolor"
                                },
                                [_c("i", { staticClass: "fa fa-user o" })]
                              ),
                              _vm._v(" "),
                              _c("b", [_vm._v("John Micle ")]),
                              _vm._v("is now following you. ")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:;" } }, [
                            _c("span", { staticClass: "time" }, [
                              _vm._v("7 mins")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "details" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "notification-icon circle blue-bgcolor"
                                },
                                [_c("i", { staticClass: "fa fa-comments-o" })]
                              ),
                              _vm._v(" "),
                              _c("b", [_vm._v("Sneha Jogi ")]),
                              _vm._v("sent you a message. ")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:;" } }, [
                            _c("span", { staticClass: "time" }, [
                              _vm._v("12 mins")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "details" }, [
                              _c(
                                "span",
                                {
                                  staticClass: "notification-icon circle pink"
                                },
                                [_c("i", { staticClass: "fa fa-heart" })]
                              ),
                              _vm._v(" "),
                              _c("b", [_vm._v("Ravi Patel ")]),
                              _vm._v("like your photo. ")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:;" } }, [
                            _c("span", { staticClass: "time" }, [
                              _vm._v("15 mins")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "details" }, [
                              _c(
                                "span",
                                {
                                  staticClass: "notification-icon circle yellow"
                                },
                                [_c("i", { staticClass: "fa fa-warning" })]
                              ),
                              _vm._v(" Warning! ")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "javascript:;" } }, [
                            _c("span", { staticClass: "time" }, [
                              _vm._v("10 hrs")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "details" }, [
                              _c(
                                "span",
                                { staticClass: "notification-icon circle red" },
                                [_c("i", { staticClass: "fa fa-times" })]
                              ),
                              _vm._v(" Application error. ")
                            ])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-menu-footer" }, [
                      _c("a", { attrs: { href: "javascript:void(0)" } }, [
                        _vm._v(" All notifications ")
                      ])
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass: "dropdown dropdown-extended dropdown-inbox",
                attrs: { id: "header_inbox_bar" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      href: "javascript:;",
                      "data-toggle": "dropdown",
                      "data-hover": "dropdown",
                      "data-close-others": "true"
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-envelope-o" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "badge headerBadgeColor2" }, [
                      _vm._v(" 2 ")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "dropdown-menu animated slideInDown" },
                  [
                    _c("li", { staticClass: "external" }, [
                      _c("h3", [
                        _c("span", { staticClass: "bold" }, [
                          _vm._v("Messages")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "notification-label cyan-bgcolor" },
                        [_vm._v("New 2")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "ul",
                        {
                          staticClass:
                            "dropdown-menu-list small-slimscroll-style",
                          attrs: { "data-handle-color": "#637283" }
                        },
                        [
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("span", { staticClass: "photo" }, [
                                _c("img", {
                                  staticClass: "img-circle",
                                  attrs: {
                                    src: "assets/img/user/user2.jpg",
                                    alt: ""
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "subject" }, [
                                _c("span", { staticClass: "from" }, [
                                  _vm._v(" Sarah Smith ")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "time" }, [
                                  _vm._v("Just Now ")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "message" }, [
                                _vm._v(" Jatin I found you on LinkedIn... ")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("span", { staticClass: "photo" }, [
                                _c("img", {
                                  staticClass: "img-circle",
                                  attrs: {
                                    src: "assets/img/user/user3.jpg",
                                    alt: ""
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "subject" }, [
                                _c("span", { staticClass: "from" }, [
                                  _vm._v(" John Deo ")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "time" }, [
                                  _vm._v("16 mins ")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "message" }, [
                                _vm._v(
                                  " Fwd: Important Notice Regarding Your Domain Name... "
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("span", { staticClass: "photo" }, [
                                _c("img", {
                                  staticClass: "img-circle",
                                  attrs: {
                                    src: "assets/img/user/user1.jpg",
                                    alt: ""
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "subject" }, [
                                _c("span", { staticClass: "from" }, [
                                  _vm._v(" Rajesh ")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "time" }, [
                                  _vm._v("2 hrs ")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "message" }, [
                                _vm._v(" pls take a print of attachments. ")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("span", { staticClass: "photo" }, [
                                _c("img", {
                                  staticClass: "img-circle",
                                  attrs: {
                                    src: "assets/img/user/user8.jpg",
                                    alt: ""
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "subject" }, [
                                _c("span", { staticClass: "from" }, [
                                  _vm._v(" Lina Smith ")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "time" }, [
                                  _vm._v("40 mins ")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "message" }, [
                                _vm._v(" Apply for Ortho Surgeon ")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("span", { staticClass: "photo" }, [
                                _c("img", {
                                  staticClass: "img-circle",
                                  attrs: {
                                    src: "assets/img/user/user5.jpg",
                                    alt: ""
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "subject" }, [
                                _c("span", { staticClass: "from" }, [
                                  _vm._v(" Jacob Ryan ")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "time" }, [
                                  _vm._v("46 mins ")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "message" }, [
                                _vm._v(" Request for leave application. ")
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-menu-footer" }, [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(" All Messages ")
                        ])
                      ])
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("li", { staticClass: "dropdown dropdown-user" }, [
              _c(
                "a",
                {
                  staticClass: "dropdown-toggle",
                  attrs: {
                    href: "javascript:;",
                    "data-toggle": "dropdown",
                    "data-hover": "dropdown",
                    "data-close-others": "true"
                  }
                },
                [
                  _c("img", {
                    staticClass: "img-circle ",
                    attrs: { alt: "", src: "assets/img/dp.jpg" }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "username username-hide-on-mobile" },
                    [_vm._v(" John ")]
                  ),
                  _vm._v(" "),
                  _c("i", { staticClass: "fa fa-angle-down" })
                ]
              ),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass:
                    "dropdown-menu dropdown-menu-default animated jello"
                },
                [
                  _c("li", [
                    _c("a", { attrs: { href: "user_profile.html" } }, [
                      _c("i", { staticClass: "icon-user" }),
                      _vm._v(" Profile ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "icon-settings" }),
                      _vm._v(" Settings\n                            ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "icon-directions" }),
                      _vm._v(" Help\n                            ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "lock_screen.html" } }, [
                      _c("i", { staticClass: "icon-lock" }),
                      _vm._v(" Lock\n                            ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "login.html" } }, [
                      _c("i", { staticClass: "icon-logout" }),
                      _vm._v(" Log Out ")
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "dropdown dropdown-quick-sidebar-toggler" },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "mdl-button mdl-js-button mdl-button--icon pull-right",
                    attrs: {
                      id: "headerSettingButton",
                      "data-upgraded": ",MaterialButton"
                    }
                  },
                  [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("settings")
                    ])
                  ]
                )
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
    require("vue-hot-reload-api")      .rerender("data-v-55ad2278", module.exports)
  }
}

/***/ })

});