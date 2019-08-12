webpackHotUpdate("static\\development\\pages\\faqs.js",{

/***/ "./components/faqs/faqs.js":
/*!*********************************!*\
  !*** ./components/faqs/faqs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title_title_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title/title.js */ "./components/title/title.js");
/* harmony import */ var _faqs_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs.css */ "./components/faqs/faqs.css");
/* harmony import */ var _faqs_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_faqs_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _faqs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faqs.json */ "./components/faqs/faqs.json");
var _faqs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./faqs.json */ "./components/faqs/faqs.json", 1);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\temp\\Rice-Datathon-Website\\components\\faqs\\faqs.js";






var Faq = function Faq(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "faq-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "faq-question",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Q: ", props.question)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "faq-answer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "A: ", props.answer)));
};

var FAQs = function FAQs() {
  var qas = [];

  for (var i = 0; i < _faqs_json__WEBPACK_IMPORTED_MODULE_4__["faqs"].length; i++) {
    qas.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Faq, {
      question: _faqs_json__WEBPACK_IMPORTED_MODULE_4__["faqs"][i].question,
      answer: _faqs_json__WEBPACK_IMPORTED_MODULE_4__["faqs"][i].answer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "faqs-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_title_title_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "FAQs",
    width: [0.5, 0.15],
    theme: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.9, 0.4],
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    className: "questions",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, qas)));
};

/* harmony default export */ __webpack_exports__["default"] = (FAQs);

/***/ })

})
//# sourceMappingURL=faqs.js.d518f98cd385c691aba1.hot-update.js.map