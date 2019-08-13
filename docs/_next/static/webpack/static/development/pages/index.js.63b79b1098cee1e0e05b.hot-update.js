webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/homepage/splashPage.js":
/*!*******************************************!*\
  !*** ./components/homepage/splashPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _splashPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splashPage.css */ "./components/homepage/splashPage.css");
/* harmony import */ var _splashPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_splashPage_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\Rice-Datathon-Website\\components\\homepage\\splashPage.js";



var tiles = [{
  image: '../../static/data1.jpg',
  caption: 'January 24 - 25th 2020'
}, {
  image: '../../static/data2.jpg',
  caption: 'Sign Up'
}, {
  image: '../../static/data3.jpg',
  caption: 'Become a Sponsor'
}, {
  image: '../../static/data4.jpg',
  caption: ''
}];

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "image-box".concat(props.index),
    width: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "image-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.caption)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\n            .image-box".concat(props.index, " {\n                width: 350px;\n                height: 200px;\n            }\n            .image-box").concat(props.index, ":before {\n                content: \"\";\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                background-color: blue;\n            }\n        ")));
};

var SplashPage = function SplashPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "splashpage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, tiles.map(function (tile) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      height: 100,
      key: tile.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
      image: tile.image,
      index: tiles.indexOf(tile),
      caption: tile.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SplashPage);

/***/ })

})
//# sourceMappingURL=index.js.63b79b1098cee1e0e05b.hot-update.js.map