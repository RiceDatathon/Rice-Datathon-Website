webpackHotUpdate("static\\development\\pages\\schedule.js",{

/***/ "./components/schedule/schedule.js":
/*!*****************************************!*\
  !*** ./components/schedule/schedule.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _title_title_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title/title.js */ "./components/title/title.js");
/* harmony import */ var _schedule_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.json */ "./components/schedule/schedule.json");
var _schedule_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./schedule.json */ "./components/schedule/schedule.json", 1);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schedule_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule.css */ "./components/schedule/schedule.css");
/* harmony import */ var _schedule_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_schedule_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\Rice-Datathon-Website\\components\\schedule\\schedule.js";






var Schedule = function Schedule() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "schedule-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_title_title_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Datathon Schedule",
    width: [0.7, 0.4],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "schedule-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    className: "schedule-day",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _schedule_json__WEBPACK_IMPORTED_MODULE_2__["schedule"].map(function (day) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      width: [1, 0.5],
      key: day.day,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, day.day), day.events.map(function (event) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: event.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, event.time), " : ", event.name);
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      fontWeight: 'normal'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://icon.now.sh/pin/A7BBCE/50",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), "The Datathon will be held in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://goo.gl/maps/m3tKWrdj84y5RpY6A",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Duncan Hall"), " on the Rice Campus")));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ })

})
//# sourceMappingURL=schedule.js.92a55afb068ac613e25e.hot-update.js.map