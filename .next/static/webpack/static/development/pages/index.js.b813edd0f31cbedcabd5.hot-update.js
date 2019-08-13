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
  image: '../../static/data1.JPG',
  caption: 'January 24 - 25th 2020'
}, {
  image: '../../static/data2.JPG',
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
  }, "\n            .image-box".concat(props.index, " {\n                position: relative;\n                color: #DCDFE5;\n                overflow: hidden;\n                height: 200px;\n            }\n            \n            .image-box").concat(props.index, ":after {\n                position: absolute;\n                content: \"\";\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100px;\n                background-color: #2B2F3A;\n                opacity: 0;\n                z-index: -1;\n                transition: 0.3s ease-in-out;\n            }\n            \n            .image-box").concat(props.index, ":hover:after {\n                opacity: 0.8;\n            }\n            \n            .image-box").concat(props.index, ":hover:before {\n                transform: scale(1.3);\n            }\n            \n            .image-box").concat(props.index, ":active:after {\n                opacity: 0.8;\n            }\n            \n            .image-box").concat(props.index, ":active:before {\n                transform: scale(1.3);\n            }\n            \n            .image-box").concat(props.index, ":active .image-caption {\n                opacity: 1;\n            }\n            .image-box").concat(props.index, ":before {\n                content: \"\";\n                width: 100%;\n                height: 100%;\n                position: absolute;\n                top: 0; \n                left: 0;\n                z-index: -1;\n                background-image: url(").concat(props.image, ");\n                background-position: center;\n                transition: 0.3s ease-in-out;\n                background-size: cover;\n            }\n            \n            .image-caption {\n                text-align: center;\n                padding-top: 70px;\n                width: 70%;\n                margin-left: auto;\n                margin-right: auto;\n                transition: 0.3s ease-in-out;\n                font-size: 1.3em;\n            }\n        ")));
};

var SplashPage = function SplashPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "splashpage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, tiles.map(function (tile) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      height: 100,
      key: tile.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
      image: tile.image,
      index: tiles.indexOf(tile),
      caption: tile.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SplashPage);

/***/ })

})
//# sourceMappingURL=index.js.b813edd0f31cbedcabd5.hot-update.js.map