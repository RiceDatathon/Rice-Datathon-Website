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
var _jsxFileName = "C:\\Users\\shiji\\Desktop\\Rice-Datathon-Website\\components\\schedule\\schedule.js";






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
    className: "schedule-events",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: [1, 0.8],
    ml: "auto",
    mr: "auto",
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
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://icon.now.sh/pin/A7BBCE/50",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), "The Datathon will be held virtually and a booth will be held on Rice Campus(Location: TBA)")));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "./components/schedule/schedule.json":
/*!*******************************************!*\
  !*** ./components/schedule/schedule.json ***!
  \*******************************************/
/*! exports provided: schedule, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"schedule\":[{\"day\":\"Friday February 5th\",\"events\":[{\"time\":\"4:00 - 6:00pm\",\"name\":\"Check in and Registration\"},{\"time\":\"6:00-7:00pm\",\"name\":\"Dinner and Networking\"},{\"time\":\"7:00-7:30pm\",\"name\":\"Opening Ceremonies\"},{\"time\":\"7:30pm\",\"name\":\"Hacking Begins!\"}]},{\"day\":\"Saturday February 6th\",\"events\":[{\"time\":\"8:00-9:00am\",\"name\":\"Breakfast\"},{\"time\":\"11:30-12:30pm\",\"name\":\"Lunch\"},{\"time\":\"2:30pm\",\"name\":\"Hacking Ends!\"},{\"time\":\"3:00-4:00pm\",\"name\":\"Judging\"},{\"time\":\"4:30-5:00pm\",\"name\":\"Awards and Closing Ceremonies\"}]}]}");

/***/ })

})
//# sourceMappingURL=schedule.js.21bf49efceab8400e4ad.hot-update.js.map