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
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title/title */ "./components/title/title.js");
/* harmony import */ var _splashPage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splashPage.css */ "./components/homepage/splashPage.css");
/* harmony import */ var _splashPage_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_splashPage_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\shiji\\Desktop\\Rice-Datathon-Website\\components\\homepage\\splashPage.js";





var tiles = [{
  image: '../../static/data1.jpg',
  caption: 'Schedule →',
  to: '/schedule'
}, {
  image: '../../static/data2.jpg',
  caption: 'Sign Up for Rice Students →',
  href: 'https://docs.google.com/forms/d/1tFTTyBX3lrXdHI732LT0OXrGkJzgr277grncbTM_f64/edit'
}, {
  image: '../../static/data5.jpg',
  caption: 'Sign Up for None-Rice Students →',
  href: 'https://docs.google.com/forms/d/1EIr1aHaG0kyHbfaAVxmOV_2yNxqKPtdH0stHpVyTAlg/edit'
}, {
  image: '../../static/data3.jpg',
  caption: 'Become a Sponsor →',
  href: "../../static/SponsorshipPacket.pdf"
}, {
  image: '../../static/data4.jpg',
  caption: 'Facebook Event →',
  href: 'https://www.facebook.com/events/1628573120683113?acontext=%7B%22source%22%3A%2229%22%2C%22ref_notif_type%22%3A%22plan_user_invited%22%2C%22action_history%22%3A%22null%22%7D&notif_id=1606185224129347&notif_t=plan_user_invited&ref=notif'
}];

var CoolImage = function CoolImage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "image-box".concat(props.index),
    width: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.to !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.to,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image-caption-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "image-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, props.caption))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image-caption-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "image-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, props.caption)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\n            .image-box".concat(props.index, " {\n                width: 350px;\n                height: 200px;\n                position: relative;\n                z-index: 200;\n                overflow: hidden;\n                margin: 20px;\n            }\n            .image-box").concat(props.index, ":before {\n                content: \"\";\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                z-index: -1;\n                background-image: url(").concat(props.image, ");\n                background-position: center;\n                background-size: cover;\n                transition: 0.3s ease-in-out;\n            }\n            .image-box").concat(props.index, ":after {\n                content: \"\";\n                position: absolute;\n                bottom: 0;\n                left: 0;\n                width: 100%;\n                height: 100px;\n                z-index: -1;\n                background-color: black;\n                opacity: 0.5;\n                box-shadow: 0 0 20px 20px black;\n                transition: 0.3s ease-in-out;\n            }\n            .image-caption-container {\n                height: 100%;\n            }\n            .image-caption {\n                color: white;\n                position: absolute;\n                top: 90px;\n                text-align: center;\n                width: 100%;\n                font-weight: normal;\n                transition: 0.3s ease-in-out;\n            }\n            .image-box").concat(props.index, ":hover:before {\n                transform: scale(1.3);\n            }\n            .image-box").concat(props.index, ":hover:after {\n                height: 100%;\n                opacity: 0.8\n            }\n            .image-box").concat(props.index, ":hover .image-caption {\n                top: 50px;\n            }\n            .image-caption-container:hover {\n                cursor: pointer;\n            }\n        ")));
};

var SplashPage = function SplashPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "splashpage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [1, 0.7],
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_title_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Quick Links",
    width: [0.8, 0.4],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    className: "quick-links",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://rice-datathon-2020.devpost.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Devpost")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://piazza.com/class/k58n0jdmc721zx",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Piazza")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ricedatathon2020.slack.com/join/shared_invite/enQtODU2NTAxNzU0MzQxLTBiYmFlYzkxZDNjMDFjNGJiYzQ2YmVhMzFlMDEyMTMyZGNiZDJlZDUxY2JlM2QzZmJkODRiMGQxMzI0MjYyMDk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Slack")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://docs.google.com/presentation/d/1TlqM4wdSpreIJPW0M-eEt-kRJRZ1_yGtwdIVXcCUE5M/edit?usp=sharing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Opening Presentation"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, tiles.map(function (tile) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CoolImage, {
      image: tile.image,
      index: tiles.indexOf(tile),
      caption: tile.caption,
      to: tile.to,
      href: tile.href,
      key: tile.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_title_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Thank you to our Sponsors!",
    width: [1, 0.6],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [0.9, 0.8],
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: 180,
    m: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "../../static/d2k.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: 240,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "../../static/chevron.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: 340,
    mt: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "../../static/2ndMD.png",
    alt: "",
    mt: 35,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: 280,
    my: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "../../static/bill.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SplashPage);

/***/ })

})
//# sourceMappingURL=index.js.5bf09fee795ff6f1a590.hot-update.js.map