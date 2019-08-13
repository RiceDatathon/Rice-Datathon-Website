webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navbar/navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar.css */ "./components/navbar/navbar.css");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_navbar_css__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\Rice-Datathon-Website\\components\\navbar\\navbar.js";




var links = [{
  name: 'Home',
  href: '/'
}, {
  name: 'About',
  href: 'about'
}, {
  name: 'Schedule',
  href: 'schedule'
}, {
  name: 'FAQs',
  href: 'faqs'
}];

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar).call(this, props));
    _this.state = {
      open: false
    };
    _this.toggleNavbar = _this.toggleNavbar.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: [0.8, 0.25],
        className: "datathon-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "../../static/datathon-logo.png",
        alt: "Rice Datathon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.open ? 'navbar-visible' : 'navbar-hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: this.state.open ? 'navbar-toggle-open' : 'navbar-toggle-closed',
        onClick: this.toggleNavbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "+"), links.map(function (_ref) {
        var name = _ref.name,
            to = _ref.to,
            href = _ref.href;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "navbar-item",
          key: name,
          onClick: _this2.toggleNavbar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, name)));
      })));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Button.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Element.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Link.js":
false,

/***/ "./node_modules/react-scroll/modules/index.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
false

})
//# sourceMappingURL=index.js.e1ab20455ecd3d04294b.hot-update.js.map