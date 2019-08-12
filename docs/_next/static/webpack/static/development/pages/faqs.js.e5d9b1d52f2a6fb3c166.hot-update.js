webpackHotUpdate("static\\development\\pages\\faqs.js",{

/***/ "./components/faqs/faqs.js":
/*!*********************************!*\
  !*** ./components/faqs/faqs.js ***!
  \*********************************/
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
/* harmony import */ var _title_title_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../title/title.js */ "./components/title/title.js");
/* harmony import */ var _faqs_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./faqs.css */ "./components/faqs/faqs.css");
/* harmony import */ var _faqs_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_faqs_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _faqs_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faqs.json */ "./components/faqs/faqs.json");
var _faqs_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./faqs.json */ "./components/faqs/faqs.json", 1);






var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\temp\\Rice-Datathon-Website\\components\\faqs\\faqs.js";






var QuestionAnswer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(QuestionAnswer, _React$Component);

  function QuestionAnswer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuestionAnswer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuestionAnswer).call(this, props));
    _this.state = {
      extended: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuestionAnswer, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        extended: !this.state.extended
      });
    }
  }, {
    key: "render",
    value: function render() {
      var height = this.state.extended ? 500 : 0;
      var altTheme = {
        backgroundColor: '#2B354C',
        color: '#A7BBCE'
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "dropdown-container",
        onClick: this.handleClick,
        style: this.state.extended ? altTheme : undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "dropdown-question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.props.question), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "dropdown-answer",
        style: {
          maxHeight: height
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.answer));
    }
  }]);

  return QuestionAnswer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var FAQs = function FAQs() {
  var qas = [];

  for (var i = 0; i < _faqs_json__WEBPACK_IMPORTED_MODULE_10__["faqs"].length; i++) {
    qas.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
      width: 1,
      key: "".concat(_faqs_json__WEBPACK_IMPORTED_MODULE_10__["faqs"][i].question.slice(0, 10)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(QuestionAnswer, {
      question: _faqs_json__WEBPACK_IMPORTED_MODULE_10__["faqs"][i].question,
      answer: _faqs_json__WEBPACK_IMPORTED_MODULE_10__["faqs"][i].answer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })));
  }

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "faqs-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_title_title_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "FAQs",
    width: [0.5, 0.15],
    theme: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    className: "questions",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, qas));
};

/* harmony default export */ __webpack_exports__["default"] = (FAQs);

/***/ })

})
//# sourceMappingURL=faqs.js.e5d9b1d52f2a6fb3c166.hot-update.js.map