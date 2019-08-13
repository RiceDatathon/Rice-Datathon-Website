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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _splashPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splashPage.css */ "./components/homepage/splashPage.css");
/* harmony import */ var _splashPage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_splashPage_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\Rice-Datathon-Website\\components\\homepage\\splashPage.js";




var tiles = [{
  image: '../../static/data1.jpg',
  caption: 'January 24 - 25th 2020',
  to: '/schedule'
}, {
  image: '../../static/data2.jpg',
  caption: 'Sign Up (this fall)',
  href: ''
}, {
  image: '../../static/data3.jpg',
  caption: 'Become a Sponsor',
  href: "../../static/SponsorshipPacket.pdf"
}, {
  image: '../../static/data4.jpg',
  caption: 'About the Datathon',
  to: '/about'
}];

var Image = function Image(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "image-box".concat(props.index),
    width: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.to !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.to,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "image-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, props.caption)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "image-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.caption))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\n            .image-box".concat(props.index, " {\n                width: 350px;\n                height: 200px;\n                position: relative;\n                z-index: 200;\n                overflow: hidden;\n                margin: 10px;\n            }\n            .image-box").concat(props.index, ":before {\n                content: \"\";\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                z-index: -1;\n                background-image: url(").concat(props.image, ");\n                background-position: center;\n                background-size: cover;\n                transition: 0.3s ease-in-out;\n            }\n            .image-box").concat(props.index, ":after {\n                content: \"\";\n                position: absolute;\n                bottom: 0;\n                left: 0;\n                width: 100%;\n                height: 100px;\n                z-index: -1;\n                background-color: black;\n                opacity: 0.5;\n                box-shadow: 0 0 20px 20px black;\n                transition: 0.3s ease-in-out;\n            }\n            .image-caption {\n                color: rgb(197, 219, 240);\n                position: absolute;\n                top: 90px;\n                text-align: center;\n                width: 100%;\n                font-weight: normal;\n                transition: 0.3s ease-in-out;\n            }\n            .image-box").concat(props.index, ":hover:before {\n                transform: scale(1.3);\n            }\n            .image-box").concat(props.index, ":hover:after {\n                height: 100%;\n                opacity: 0.7;\n            }\n            .image-box").concat(props.index, ":hover .image-caption {\n                top: 50px;\n            }\n        ")));
};

var SplashPage = function SplashPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "splashpage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [1, 0.7],
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, tiles.map(function (tile) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
      image: tile.image,
      index: tiles.indexOf(tile),
      caption: tile.caption,
      to: tile.to,
      href: tile.href,
      key: tile.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SplashPage);

/***/ })

})
//# sourceMappingURL=index.js.8b54f285b6b5485442c6.hot-update.js.map