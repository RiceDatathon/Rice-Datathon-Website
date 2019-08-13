webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/homepage/splashPage.js":
/*!*******************************************!*\
  !*** ./components/homepage/splashPage.js ***!
  \*******************************************/
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
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _splashPage_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./splashPage.css */ "./components/homepage/splashPage.css");
/* harmony import */ var _splashPage_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_splashPage_css__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\Rice-Datathon-Website\\components\\homepage\\splashPage.js";



var images = ['../../static/data1.jpg', '../../static/data2.jpg', '../../static/data3.jpg', '../../static/data4.jpg'];

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Carousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Carousel).call(this, props));
    _this.state = {
      images: props.images,
      current: 0,
      max: props.images.length,
      interval: null
    };
    _this.switchImage = _this.switchImage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Carousel, [{
    key: "switchImage",
    value: function switchImage() {
      var newState = this.state.current + 1;

      if (newState == this.state.max) {
        newState = 0;
      }

      this.setState({
        current: newState
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.state.interval = window.setInterval(this.switchImage, 2000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(this.state.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [0.9, 0.5],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        src: this.state.images[this.state.current],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var SplashPage = function SplashPage() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "splashpage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Carousel, {
    images: images,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: [0.9, 0.5],
    className: "splashpage-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Jan 24 - 25th 2020"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "intro-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Registration will open fall 2019")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "intro-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "../../static/SponsorshipPacket.pdf",
    style: {
      textDecoration: 'none'
    },
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Become a Sponsor"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SplashPage);

/***/ })

})
//# sourceMappingURL=index.js.a75fe290c7a984a4cac9.hot-update.js.map