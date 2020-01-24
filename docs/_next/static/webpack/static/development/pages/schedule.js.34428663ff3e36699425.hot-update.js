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
/* harmony import */ var _schedule_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule.css */ "./components/schedule/schedule.css");
/* harmony import */ var _schedule_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_schedule_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\Rice-Datathon-Website\\components\\schedule\\schedule.js";





var Schedule = function Schedule() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "schedule-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_title_title_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Datathon Schedule",
    width: [0.7, 0.4],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "schedule-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      fontWeight: 'normal'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://icon.now.sh/event/A7BBCE/50",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), "Mark your calendars, the Rice Datathon will take place January 24-25, 2020"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      fontWeight: 'normal'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://icon.now.sh/pin/A7BBCE/50",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), "The Datathon will be held in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://goo.gl/maps/m3tKWrdj84y5RpY6A",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Duncan Hall"), " on the Rice Campus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      fontWeight: 'normal'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Order of Events"), _schedule_json__WEBPACK_IMPORTED_MODULE_2__["schedule"].map(function (day) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, day.day), day.events.map(function (event) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, event.time, " : ", event.name);
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ })

})
//# sourceMappingURL=schedule.js.34428663ff3e36699425.hot-update.js.map