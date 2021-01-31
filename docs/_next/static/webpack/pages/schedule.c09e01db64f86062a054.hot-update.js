webpackHotUpdate_N_E("pages/schedule",{

/***/ "./components/schedule/schedule.js":
/*!*****************************************!*\
  !*** ./components/schedule/schedule.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _title_title_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title/title.js */ \"./components/title/title.js\");\n/* harmony import */ var _schedule_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.json */ \"./components/schedule/schedule.json\");\nvar _schedule_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./schedule.json */ \"./components/schedule/schedule.json\", 1);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var _schedule_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule.css */ \"./components/schedule/schedule.css\");\n/* harmony import */ var _schedule_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_schedule_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/yuchengu/Rice-Datathon-Website/components/schedule/schedule.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Schedule = function Schedule() {\n  return __jsx(\"div\", {\n    className: \"schedule-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(_title_title_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Datathon Schedule\",\n    width: [0.7, 0.4],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"schedule-items\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    className: \"schedule-events\",\n    flexDirection: \"row\",\n    flexWrap: \"wrap\",\n    justifyContent: \"center\",\n    width: [1, 0.8],\n    ml: \"auto\",\n    mr: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, _schedule_json__WEBPACK_IMPORTED_MODULE_2__[\"schedule\"].map(function (day) {\n    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      width: [1, 0.5],\n      key: day.day,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 25\n      }\n    }, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 29\n      }\n    }, day.day), day.events.map(function (event) {\n      if (event.link.length === 0) {\n        return __jsx(\"p\", {\n          key: event.name,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 52\n          }\n        }, __jsx(\"strong\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 72\n          }\n        }, event.time), \" : \", event.name, \" \");\n      } else {\n        return __jsx(\"p\", {\n          key: event.name,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 52\n          }\n        }, __jsx(\"strong\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 72\n          }\n        }, event.time), \" : \", __jsx(\"a\", {\n          href: event.link,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 104\n          }\n        }, \" \", event.name, \" \"));\n      }\n    }));\n  })), __jsx(\"h1\", {\n    style: {\n      fontWeight: 'normal'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"https://icon.now.sh/pin/A7BBCE/50\",\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 50\n    }\n  }), \"The Datathon will be virtual.\")));\n};\n\n_c = Schedule;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Schedule);\n\nvar _c;\n\n$RefreshReg$(_c, \"Schedule\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5qcz9jNDZhIl0sIm5hbWVzIjpbIlNjaGVkdWxlIiwic2NoZWR1bGUiLCJtYXAiLCJkYXkiLCJldmVudHMiLCJldmVudCIsImxpbmsiLCJsZW5ndGgiLCJuYW1lIiwidGltZSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxTQUNiO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUQ7QUFBTyxTQUFLLEVBQUMsbUJBQWI7QUFBaUMsU0FBSyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkNBQUQ7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLGlCQUFhLEVBQUMsS0FBaEQ7QUFBc0QsWUFBUSxFQUFDLE1BQS9EO0FBQXNFLGtCQUFjLEVBQUMsUUFBckY7QUFBOEYsU0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBckc7QUFBK0csTUFBRSxFQUFDLE1BQWxIO0FBQXlILE1BQUUsRUFBQyxNQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFDLHVEQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFBQyxHQUFHO0FBQUEsV0FDWixNQUFDLDBDQUFEO0FBQUssV0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBWjtBQUFzQixTQUFHLEVBQUVBLEdBQUcsQ0FBQ0EsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsR0FBRyxDQUFDQSxHQUFULENBREosRUFHUUEsR0FBRyxDQUFDQyxNQUFKLENBQVdGLEdBQVgsQ0FBZSxVQUFBRyxLQUFLLEVBQ2hCO0FBQ0ksVUFBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsZUFBTztBQUFHLGFBQUcsRUFBRUYsS0FBSyxDQUFDRyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFTSCxLQUFLLENBQUNJLElBQWYsQ0FBcEIsU0FBcURKLEtBQUssQ0FBQ0csSUFBM0QsTUFBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU87QUFBRyxhQUFHLEVBQUVILEtBQUssQ0FBQ0csSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBU0gsS0FBSyxDQUFDSSxJQUFmLENBQXBCLFNBQW9EO0FBQUcsY0FBSSxFQUFFSixLQUFLLENBQUNDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBdUJELEtBQUssQ0FBQ0csSUFBN0IsTUFBcEQsQ0FBUDtBQUNIO0FBQ0osS0FQTCxDQUhSLENBRFk7QUFBQSxHQUFoQixDQUZSLENBREosRUF3Qkk7QUFBSSxTQUFLLEVBQUU7QUFBRUUsZ0JBQVUsRUFBRTtBQUFkLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQztBQUFLLE9BQUcsRUFBQyxtQ0FBVDtBQUE2QyxPQUFHLEVBQUMsRUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFyQyxrQ0F4QkosQ0FGSixDQURhO0FBQUEsQ0FBakI7O0tBQU1WLFE7QUFnQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZSBmcm9tICcuLi90aXRsZS90aXRsZS5qcyc7XG5pbXBvcnQgeyBzY2hlZHVsZSB9IGZyb20gXCIuL3NjaGVkdWxlLmpzb25cIjtcbmltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJ3JlYmFzcyc7XG5pbXBvcnQgJy4vc2NoZWR1bGUuY3NzJztcblxuY29uc3QgU2NoZWR1bGUgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NjaGVkdWxlLXBhZ2UnPlxuICAgICAgICA8VGl0bGUgdGl0bGU9XCJEYXRhdGhvbiBTY2hlZHVsZVwiIHdpZHRoPXtbMC43LCAwLjRdfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2NoZWR1bGUtaXRlbXMnPlxuICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPSdzY2hlZHVsZS1ldmVudHMnIGZsZXhEaXJlY3Rpb249J3JvdycgZmxleFdyYXA9J3dyYXAnIGp1c3RpZnlDb250ZW50PSdjZW50ZXInIHdpZHRoPXtbMSwgMC44XX0gbWw9J2F1dG8nIG1yPSdhdXRvJz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlLm1hcChkYXkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17WzEsIDAuNV19IGtleT17ZGF5LmRheX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntkYXkuZGF5fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXkuZXZlbnRzLm1hcChldmVudCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5saW5rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtldmVudC5uYW1lfT48c3Ryb25nPntldmVudC50aW1lfTwvc3Ryb25nPiA6IHtldmVudC5uYW1lfSA8L3A+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2V2ZW50Lm5hbWV9PjxzdHJvbmc+e2V2ZW50LnRpbWV9PC9zdHJvbmc+IDogPGEgaHJlZj17ZXZlbnQubGlua30+IHtldmVudC5uYW1lfSA8L2E+PC9wPjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgey8qPGgxIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PjxpbWcgc3JjPSdodHRwczovL2ljb24ubm93LnNoL3Bpbi9BN0JCQ0UvNTAnIGFsdD0nJyAvPlRoZSBEYXRhdGhvbiB3aWxsIGJlIGhlbGQgaW4gPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvbTN0S1dyZGo4NHk1UnBZNkFcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+RHVuY2FuIEhhbGw8L2E+IG9uIHRoZSBSaWNlIENhbXB1czwvaDE+Ki99XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFdlaWdodDogJ25vcm1hbCcgfX0+PGltZyBzcmM9J2h0dHBzOi8vaWNvbi5ub3cuc2gvcGluL0E3QkJDRS81MCcgYWx0PScnIC8+VGhlIERhdGF0aG9uIHdpbGwgYmUgdmlydHVhbC48L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2NoZWR1bGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/schedule/schedule.js\n");

/***/ })

})