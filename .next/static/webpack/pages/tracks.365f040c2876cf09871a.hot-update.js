webpackHotUpdate_N_E("pages/tracks",{

/***/ "./components/tracks/trackList.js":
/*!****************************************!*\
  !*** ./components/tracks/trackList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {// const TrackList = [\n//     <div>\n//         <h2>Chevron Challenge</h2>\n//         <p>\n//             The process of drilling new wells, especially offshore, is extremely challenging and costly. After reaching the seabed more than 3,000 feet under water, rigs in the Gulf of Mexico must drill through an additional 20,000 feet of rock. In these extreme environments, where temperatures and pressures far exceed regular drilling conditions, specialized equipment and teams are required.\n//              These operations can involve hundreds of people and equipment with very high daily drilling costs. Reducing the time it takes to drill by even a few hours per well can result in significant savings for the company and provide a significant competitive advantage as more and more wells are drilled.\n//              Your task is to use historic drilling data to build a model that can predict the rate of penetration conditional on controllable drilling parameters and/or parameters that are known before the drilling process begins.  This model could then be used as part of the “Drilling Roadmap” development process, where the WOB and RPM (Among other variables) are determined before drilling begins.\n//         </p>\n//         <h4>Download the rest of the information and the data here:</h4>\n//         <a href=\"../../static/chevronChallenge.zip\">Chevron Challenge Zip File</a>\n//         <p></p>\n//         <a href=\"../../static/scoring.csv\">Scoring.csv File</a>\n//     </div>,\n//     <div>\n//         <h2>Predicting the Severity of Forest Fires Applied Machine Learning for Social Good Sponsored by Accenture</h2>\n//         <h3>Background</h3>\n//         <p>Forest fires are a serious natural disaster experienced by countries around the world. Recently, forest fires in Australia and California have engulfed huge swaths of habitat causing untold loss to local communities, wildlife, and ecosystems. Forest fires across the globe are responsible for killing thousands per year and costing billions of dollars. <a href=\"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1215.pdf\">Read More</a></p>\n//         <h3>Objective</h3>\n//         <p>Your goal is to develop a model that predicts the severity of a wildfire based on the expected area it will engulf using the fire’s initial conditions. You then need to create a plan for how your model should be used by firefighters or other governmental entities to combat this issue more intelligently and effectively. Included in your plan, you should take a step back from the numbers and discuss realistic data accessibility, whether the key factors found in your model make sense, and whether you would trust your model in this high-stakes situation. </p>\n//         <h3>Dataset Description</h3>\n//         <p>You are free to use any dataset you find online that assists you in answering the overall question. We have provided an initial data set to help you get started. </p>\n//         <h3>Kaggle Forest Fire Dataset</h3>\n//         <a href=\"https://www.kaggle.com/rtatman/188-million-us-wildfires\">https://www.kaggle.com/rtatman/188-million-us-wildfires</a>\n//         <p>This data publication contains a spatial database of wildfires that occurred in the United States from 1992 to 2015. It is the third update of a publication originally generated to support the national Fire Program Analysis (FPA) system. The wildfire records were acquired from the reporting systems of federal, state, and local fire organizations. The following core data elements were required for records to be included in this data publication: discovery date, final fire size, and a point location at least as precise as Public Land Survey System (PLSS) section (1-square mile grid). The data were transformed to conform, when possible, to the data standards of the National Wildfire Coordinating Group (NWCG). Basic error-checking was performed and redundant records were identified and removed, to the degree possible. The resulting product, referred to as the Fire Program Analysis Fire-occurrence Database (FPA FOD), includes 1.88 million geo-referenced wildfire records, representing a total of 140 million acres burned during the 24-year period.</p>\n//         <h3>Source</h3>\n//         <p>https://www.kaggle.com/rtatman/188-million-us-wildfires/kernels</p>\n//     </div>,\n//     <div>\n//         <h2>Machine Learning Systems Track</h2>\n//         <h3>Background</h3>\n//         <p>This track is designed for students who may not have an extensive background in modeling but are experienced programmers who are looking to get involved with data science.  In practice, especially in large industry projects, the modeling portion is generally only a small portion of the overall effort in serving a production-grade machine learning system.  To reflect that, we’re dedicating this track specifically for building tools for machine learning, fusing datasets, or interesting applications related to data science but not modeling per se.</p>\n//         <h3>Objective</h3>\n//         <p>The outcome of this track is highly dependent on what part of the data science pipeline you’re wishing to contribute.  Here are some project suggestions to give you an idea of what might fall under this track!</p>\n//         <ul>\n//             <li>Data Engineering/Scraping Project Suggestions\n//                 <ul>\n//                     <li>Combining related datasets in an interesting/useful way</li>\n//                     <li>Ex: Collecting data tied to different US States to develop an API for easily accessing and comparing information</li>\n//                 </ul>\n//             </li>\n//             <li>ML Tools\n//                 <ul>\n//                     <li>WYSIWIG Neural Network Application</li>\n//                     <li>Web application that lets you create drag n drop neural networks</li>\n//                 </ul>\n//             </li>\n//             <li>Data Visualization Tools\n//                 <ul>\n//                     <li>Automatic Data Summarization - Auto-generate summaries and visualizations of arbitrary CSV files</li>\n//                     <li>Cloropleth Plotting Toolkit - Matplotlib / Altair / Geopandas have great utilities for this, but I always have to refer to documentation because I forget! It would be great if I could pass a dataframe with “state, numeric feature” to a function to get a quick plot.</li>\n//                     <li>Complex Data Visualization to React Component - Can you make it easier to turn a complex & potentially live visualization into a component for a web frontend to consume?</li>\n//                 </ul>\n//             </li>\n//         </ul>\n//     </div>,\n//     <div>\n//         <h2>Houston/Texas Trends Track</h2>\n//         <h3>Background</h3>\n//         <p>This track is designed for students who are specifically interested in working with a Houston or Texas related dataset.  These projects should draft a narrative about a trend observed from a local dataset.</p>\n//         <h3>Objective</h3>\n//         <p>The outcome of this track is a presentation that paints a coherent story with supporting figures from Houston / Texas related datasets.  Great projects might extend this presentation to include a simple policy suggestion to the Houston City Government or Texas State Government.</p>\n//         <h3>Kinder UDP</h3>\n//         <p>The Kinder Urban Data Platform has a wealth of data collected and maintained by the Kinder Institute.  Find datasets here: <a href=\"https://kinderudp.org\">https://kinderudp.org</a>.</p>\n//         <p>Sample Datasets:</p>\n//         <ul>\n//             <li><a href=\"https://www.kinderudp.org/#/datasetCatalog/7mao80j3akg7\">Neighborhood Gentrification across Harris County: 1990 to 2016</a></li>\n//             <li><a href=\"https://www.kinderudp.org/#/datasetCatalog/035bqkx1dwov\">Public Crash Data Extract from TxDOT (2010-2016)</a></li>\n//         </ul>\n//         <h3>Open Data Houston</h3>\n//         <p>Houston’s open data portal! Collected resource of publicly accessible data on Houston Local Govt. activities.</p>\n//         <ul>\n//             <li><a href=\"http://data.houstontx.gov/dataset/city-of-houston-campaign-finance-reporting\">City of Houston Campaign Finance Reporting</a></li>\n//             <li><a href=\"http://data.houstontx.gov/dataset/public-schools-in-the-houston-region\">Public Schools in the Houston Region</a></li>\n//         </ul>\n//         <h3>Texas Open Data Portal</h3>\n//         <p>Texas’ open data portal! Collected resource of publicly available data on Texas Govt. activities.</p>\n//         <ul>\n//             <li><a href=\"https://data.texas.gov/Government-and-Taxes/Active-Cigarette-Tobacco-Retailers/u5nd-4vpg\">Active Cigarette/Tobacco Retailers</a></li>\n//             <li><a href=\"https://data.texas.gov/Transportation/CapMetro-APC-RAW-January-2016/sfrh-ucri\">CapMetro APC (RAW) - January 2016</a></li>\n//         </ul>\n//     </div>,\n//     <div>\n//         <h2>Other Interesting Datasets To Consider</h2>\n//         <h3>College/University Survey Data</h3>\n//         <a href=\"https://nces.ed.gov/ipeds/datacenter/DataFiles.aspx\">Get the Dataset Here</a>\n//         <p>\n//             The datasets available from this search tool offer a wide variety of data ranging from institutional characteristics of colleges, to their test scores and graduation rates. Choose the year and type of data you are looking for and press 'continue'. The column labeled data file has a download link for the dataset. The rightmost column labeled dictionary lets you download a spreadsheet containing a breakdown of what the features/labels in the dataset represent.\n//         </p>\n//         <h3>2018 World Cup Match Data</h3>\n//         <a href=\"https://github.com/fivethirtyeight/data/tree/master/world-cup-2018\">Get the Dataset Here</a>\n//         <p>\n//             The leftmost link contains match data from the 2018 world cup courtesy of fivethirtyeight. The right link contains their tournament predictions do not copy this as your own result, find a new way to analyze the data.\n//         </p>\n//         <h3>Divorce Prediction Dataset</h3>\n//         <a href=\"https://archive.ics.uci.edu/ml/datasets/Divorce+Predictors+data+set\">Get the Dataset Here</a>\n//         <p>\n//             Each row in this dataset represents an individuals responses to a survey containing 54 questions about various aspects of their marriage. The vectors are labeled based on whether or not the relationship ended in divorce. Have fun!\n//         </p>\n//         <h3>UK Online Retail Invoices</h3>\n//         <a href=\"https://archive.ics.uci.edu/ml/datasets/Online+Retail+II\">Get the Dataset Here</a>\n//         <p>\n//             This dataset contains the data from about 1,000,000 invoices from a UK online retail store between 2009 and 2011. The link 'data folder' at the top contains a download link for the dataset.\n//         </p>\n//     </div>\n// ]\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackList);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmFja3MvdHJhY2tMaXN0LmpzP2NiNzQiXSwibmFtZXMiOlsiVHJhY2tMaXN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdHJhY2tzL3RyYWNrTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IFRyYWNrTGlzdCA9IFtcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDI+Q2hldnJvbiBDaGFsbGVuZ2U8L2gyPlxuLy8gICAgICAgICA8cD5cbi8vICAgICAgICAgICAgIFRoZSBwcm9jZXNzIG9mIGRyaWxsaW5nIG5ldyB3ZWxscywgZXNwZWNpYWxseSBvZmZzaG9yZSwgaXMgZXh0cmVtZWx5IGNoYWxsZW5naW5nIGFuZCBjb3N0bHkuIEFmdGVyIHJlYWNoaW5nIHRoZSBzZWFiZWQgbW9yZSB0aGFuIDMsMDAwIGZlZXQgdW5kZXIgd2F0ZXIsIHJpZ3MgaW4gdGhlIEd1bGYgb2YgTWV4aWNvIG11c3QgZHJpbGwgdGhyb3VnaCBhbiBhZGRpdGlvbmFsIDIwLDAwMCBmZWV0IG9mIHJvY2suIEluIHRoZXNlIGV4dHJlbWUgZW52aXJvbm1lbnRzLCB3aGVyZSB0ZW1wZXJhdHVyZXMgYW5kIHByZXNzdXJlcyBmYXIgZXhjZWVkIHJlZ3VsYXIgZHJpbGxpbmcgY29uZGl0aW9ucywgc3BlY2lhbGl6ZWQgZXF1aXBtZW50IGFuZCB0ZWFtcyBhcmUgcmVxdWlyZWQuXG4vLyAgICAgICAgICAgICAgVGhlc2Ugb3BlcmF0aW9ucyBjYW4gaW52b2x2ZSBodW5kcmVkcyBvZiBwZW9wbGUgYW5kIGVxdWlwbWVudCB3aXRoIHZlcnkgaGlnaCBkYWlseSBkcmlsbGluZyBjb3N0cy4gUmVkdWNpbmcgdGhlIHRpbWUgaXQgdGFrZXMgdG8gZHJpbGwgYnkgZXZlbiBhIGZldyBob3VycyBwZXIgd2VsbCBjYW4gcmVzdWx0IGluIHNpZ25pZmljYW50IHNhdmluZ3MgZm9yIHRoZSBjb21wYW55IGFuZCBwcm92aWRlIGEgc2lnbmlmaWNhbnQgY29tcGV0aXRpdmUgYWR2YW50YWdlIGFzIG1vcmUgYW5kIG1vcmUgd2VsbHMgYXJlIGRyaWxsZWQuXG4vLyAgICAgICAgICAgICAgWW91ciB0YXNrIGlzIHRvIHVzZSBoaXN0b3JpYyBkcmlsbGluZyBkYXRhIHRvIGJ1aWxkIGEgbW9kZWwgdGhhdCBjYW4gcHJlZGljdCB0aGUgcmF0ZSBvZiBwZW5ldHJhdGlvbiBjb25kaXRpb25hbCBvbiBjb250cm9sbGFibGUgZHJpbGxpbmcgcGFyYW1ldGVycyBhbmQvb3IgcGFyYW1ldGVycyB0aGF0IGFyZSBrbm93biBiZWZvcmUgdGhlIGRyaWxsaW5nIHByb2Nlc3MgYmVnaW5zLiAgVGhpcyBtb2RlbCBjb3VsZCB0aGVuIGJlIHVzZWQgYXMgcGFydCBvZiB0aGUg4oCcRHJpbGxpbmcgUm9hZG1hcOKAnSBkZXZlbG9wbWVudCBwcm9jZXNzLCB3aGVyZSB0aGUgV09CIGFuZCBSUE0gKEFtb25nIG90aGVyIHZhcmlhYmxlcykgYXJlIGRldGVybWluZWQgYmVmb3JlIGRyaWxsaW5nIGJlZ2lucy5cbi8vICAgICAgICAgPC9wPlxuLy8gICAgICAgICA8aDQ+RG93bmxvYWQgdGhlIHJlc3Qgb2YgdGhlIGluZm9ybWF0aW9uIGFuZCB0aGUgZGF0YSBoZXJlOjwvaDQ+XG4vLyAgICAgICAgIDxhIGhyZWY9XCIuLi8uLi9zdGF0aWMvY2hldnJvbkNoYWxsZW5nZS56aXBcIj5DaGV2cm9uIENoYWxsZW5nZSBaaXAgRmlsZTwvYT5cbi8vICAgICAgICAgPHA+PC9wPlxuLy8gICAgICAgICA8YSBocmVmPVwiLi4vLi4vc3RhdGljL3Njb3JpbmcuY3N2XCI+U2NvcmluZy5jc3YgRmlsZTwvYT5cbi8vICAgICA8L2Rpdj4sXG4vLyAgICAgPGRpdj5cbi8vICAgICAgICAgPGgyPlByZWRpY3RpbmcgdGhlIFNldmVyaXR5IG9mIEZvcmVzdCBGaXJlcyBBcHBsaWVkIE1hY2hpbmUgTGVhcm5pbmcgZm9yIFNvY2lhbCBHb29kIFNwb25zb3JlZCBieSBBY2NlbnR1cmU8L2gyPlxuLy8gICAgICAgICA8aDM+QmFja2dyb3VuZDwvaDM+XG4vLyAgICAgICAgIDxwPkZvcmVzdCBmaXJlcyBhcmUgYSBzZXJpb3VzIG5hdHVyYWwgZGlzYXN0ZXIgZXhwZXJpZW5jZWQgYnkgY291bnRyaWVzIGFyb3VuZCB0aGUgd29ybGQuIFJlY2VudGx5LCBmb3Jlc3QgZmlyZXMgaW4gQXVzdHJhbGlhIGFuZCBDYWxpZm9ybmlhIGhhdmUgZW5ndWxmZWQgaHVnZSBzd2F0aHMgb2YgaGFiaXRhdCBjYXVzaW5nIHVudG9sZCBsb3NzIHRvIGxvY2FsIGNvbW11bml0aWVzLCB3aWxkbGlmZSwgYW5kIGVjb3N5c3RlbXMuIEZvcmVzdCBmaXJlcyBhY3Jvc3MgdGhlIGdsb2JlIGFyZSByZXNwb25zaWJsZSBmb3Iga2lsbGluZyB0aG91c2FuZHMgcGVyIHllYXIgYW5kIGNvc3RpbmcgYmlsbGlvbnMgb2YgZG9sbGFycy4gPGEgaHJlZj1cImh0dHBzOi8vbnZscHVicy5uaXN0Lmdvdi9uaXN0cHVicy9TcGVjaWFsUHVibGljYXRpb25zL05JU1QuU1AuMTIxNS5wZGZcIj5SZWFkIE1vcmU8L2E+PC9wPlxuLy8gICAgICAgICA8aDM+T2JqZWN0aXZlPC9oMz5cbi8vICAgICAgICAgPHA+WW91ciBnb2FsIGlzIHRvIGRldmVsb3AgYSBtb2RlbCB0aGF0IHByZWRpY3RzIHRoZSBzZXZlcml0eSBvZiBhIHdpbGRmaXJlIGJhc2VkIG9uIHRoZSBleHBlY3RlZCBhcmVhIGl0IHdpbGwgZW5ndWxmIHVzaW5nIHRoZSBmaXJl4oCZcyBpbml0aWFsIGNvbmRpdGlvbnMuIFlvdSB0aGVuIG5lZWQgdG8gY3JlYXRlIGEgcGxhbiBmb3IgaG93IHlvdXIgbW9kZWwgc2hvdWxkIGJlIHVzZWQgYnkgZmlyZWZpZ2h0ZXJzIG9yIG90aGVyIGdvdmVybm1lbnRhbCBlbnRpdGllcyB0byBjb21iYXQgdGhpcyBpc3N1ZSBtb3JlIGludGVsbGlnZW50bHkgYW5kIGVmZmVjdGl2ZWx5LiBJbmNsdWRlZCBpbiB5b3VyIHBsYW4sIHlvdSBzaG91bGQgdGFrZSBhIHN0ZXAgYmFjayBmcm9tIHRoZSBudW1iZXJzIGFuZCBkaXNjdXNzIHJlYWxpc3RpYyBkYXRhIGFjY2Vzc2liaWxpdHksIHdoZXRoZXIgdGhlIGtleSBmYWN0b3JzIGZvdW5kIGluIHlvdXIgbW9kZWwgbWFrZSBzZW5zZSwgYW5kIHdoZXRoZXIgeW91IHdvdWxkIHRydXN0IHlvdXIgbW9kZWwgaW4gdGhpcyBoaWdoLXN0YWtlcyBzaXR1YXRpb24uIDwvcD5cbi8vICAgICAgICAgPGgzPkRhdGFzZXQgRGVzY3JpcHRpb248L2gzPlxuLy8gICAgICAgICA8cD5Zb3UgYXJlIGZyZWUgdG8gdXNlIGFueSBkYXRhc2V0IHlvdSBmaW5kIG9ubGluZSB0aGF0IGFzc2lzdHMgeW91IGluIGFuc3dlcmluZyB0aGUgb3ZlcmFsbCBxdWVzdGlvbi4gV2UgaGF2ZSBwcm92aWRlZCBhbiBpbml0aWFsIGRhdGEgc2V0IHRvIGhlbHAgeW91IGdldCBzdGFydGVkLiA8L3A+XG4vLyAgICAgICAgIDxoMz5LYWdnbGUgRm9yZXN0IEZpcmUgRGF0YXNldDwvaDM+XG4vLyAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5rYWdnbGUuY29tL3J0YXRtYW4vMTg4LW1pbGxpb24tdXMtd2lsZGZpcmVzXCI+aHR0cHM6Ly93d3cua2FnZ2xlLmNvbS9ydGF0bWFuLzE4OC1taWxsaW9uLXVzLXdpbGRmaXJlczwvYT5cbi8vICAgICAgICAgPHA+VGhpcyBkYXRhIHB1YmxpY2F0aW9uIGNvbnRhaW5zIGEgc3BhdGlhbCBkYXRhYmFzZSBvZiB3aWxkZmlyZXMgdGhhdCBvY2N1cnJlZCBpbiB0aGUgVW5pdGVkIFN0YXRlcyBmcm9tIDE5OTIgdG8gMjAxNS4gSXQgaXMgdGhlIHRoaXJkIHVwZGF0ZSBvZiBhIHB1YmxpY2F0aW9uIG9yaWdpbmFsbHkgZ2VuZXJhdGVkIHRvIHN1cHBvcnQgdGhlIG5hdGlvbmFsIEZpcmUgUHJvZ3JhbSBBbmFseXNpcyAoRlBBKSBzeXN0ZW0uIFRoZSB3aWxkZmlyZSByZWNvcmRzIHdlcmUgYWNxdWlyZWQgZnJvbSB0aGUgcmVwb3J0aW5nIHN5c3RlbXMgb2YgZmVkZXJhbCwgc3RhdGUsIGFuZCBsb2NhbCBmaXJlIG9yZ2FuaXphdGlvbnMuIFRoZSBmb2xsb3dpbmcgY29yZSBkYXRhIGVsZW1lbnRzIHdlcmUgcmVxdWlyZWQgZm9yIHJlY29yZHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhpcyBkYXRhIHB1YmxpY2F0aW9uOiBkaXNjb3ZlcnkgZGF0ZSwgZmluYWwgZmlyZSBzaXplLCBhbmQgYSBwb2ludCBsb2NhdGlvbiBhdCBsZWFzdCBhcyBwcmVjaXNlIGFzIFB1YmxpYyBMYW5kIFN1cnZleSBTeXN0ZW0gKFBMU1MpIHNlY3Rpb24gKDEtc3F1YXJlIG1pbGUgZ3JpZCkuIFRoZSBkYXRhIHdlcmUgdHJhbnNmb3JtZWQgdG8gY29uZm9ybSwgd2hlbiBwb3NzaWJsZSwgdG8gdGhlIGRhdGEgc3RhbmRhcmRzIG9mIHRoZSBOYXRpb25hbCBXaWxkZmlyZSBDb29yZGluYXRpbmcgR3JvdXAgKE5XQ0cpLiBCYXNpYyBlcnJvci1jaGVja2luZyB3YXMgcGVyZm9ybWVkIGFuZCByZWR1bmRhbnQgcmVjb3JkcyB3ZXJlIGlkZW50aWZpZWQgYW5kIHJlbW92ZWQsIHRvIHRoZSBkZWdyZWUgcG9zc2libGUuIFRoZSByZXN1bHRpbmcgcHJvZHVjdCwgcmVmZXJyZWQgdG8gYXMgdGhlIEZpcmUgUHJvZ3JhbSBBbmFseXNpcyBGaXJlLW9jY3VycmVuY2UgRGF0YWJhc2UgKEZQQSBGT0QpLCBpbmNsdWRlcyAxLjg4IG1pbGxpb24gZ2VvLXJlZmVyZW5jZWQgd2lsZGZpcmUgcmVjb3JkcywgcmVwcmVzZW50aW5nIGEgdG90YWwgb2YgMTQwIG1pbGxpb24gYWNyZXMgYnVybmVkIGR1cmluZyB0aGUgMjQteWVhciBwZXJpb2QuPC9wPlxuLy8gICAgICAgICA8aDM+U291cmNlPC9oMz5cbi8vICAgICAgICAgPHA+aHR0cHM6Ly93d3cua2FnZ2xlLmNvbS9ydGF0bWFuLzE4OC1taWxsaW9uLXVzLXdpbGRmaXJlcy9rZXJuZWxzPC9wPlxuLy8gICAgIDwvZGl2Pixcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDI+TWFjaGluZSBMZWFybmluZyBTeXN0ZW1zIFRyYWNrPC9oMj5cbi8vICAgICAgICAgPGgzPkJhY2tncm91bmQ8L2gzPlxuLy8gICAgICAgICA8cD5UaGlzIHRyYWNrIGlzIGRlc2lnbmVkIGZvciBzdHVkZW50cyB3aG8gbWF5IG5vdCBoYXZlIGFuIGV4dGVuc2l2ZSBiYWNrZ3JvdW5kIGluIG1vZGVsaW5nIGJ1dCBhcmUgZXhwZXJpZW5jZWQgcHJvZ3JhbW1lcnMgd2hvIGFyZSBsb29raW5nIHRvIGdldCBpbnZvbHZlZCB3aXRoIGRhdGEgc2NpZW5jZS4gIEluIHByYWN0aWNlLCBlc3BlY2lhbGx5IGluIGxhcmdlIGluZHVzdHJ5IHByb2plY3RzLCB0aGUgbW9kZWxpbmcgcG9ydGlvbiBpcyBnZW5lcmFsbHkgb25seSBhIHNtYWxsIHBvcnRpb24gb2YgdGhlIG92ZXJhbGwgZWZmb3J0IGluIHNlcnZpbmcgYSBwcm9kdWN0aW9uLWdyYWRlIG1hY2hpbmUgbGVhcm5pbmcgc3lzdGVtLiAgVG8gcmVmbGVjdCB0aGF0LCB3ZeKAmXJlIGRlZGljYXRpbmcgdGhpcyB0cmFjayBzcGVjaWZpY2FsbHkgZm9yIGJ1aWxkaW5nIHRvb2xzIGZvciBtYWNoaW5lIGxlYXJuaW5nLCBmdXNpbmcgZGF0YXNldHMsIG9yIGludGVyZXN0aW5nIGFwcGxpY2F0aW9ucyByZWxhdGVkIHRvIGRhdGEgc2NpZW5jZSBidXQgbm90IG1vZGVsaW5nIHBlciBzZS48L3A+XG4vLyAgICAgICAgIDxoMz5PYmplY3RpdmU8L2gzPlxuLy8gICAgICAgICA8cD5UaGUgb3V0Y29tZSBvZiB0aGlzIHRyYWNrIGlzIGhpZ2hseSBkZXBlbmRlbnQgb24gd2hhdCBwYXJ0IG9mIHRoZSBkYXRhIHNjaWVuY2UgcGlwZWxpbmUgeW914oCZcmUgd2lzaGluZyB0byBjb250cmlidXRlLiAgSGVyZSBhcmUgc29tZSBwcm9qZWN0IHN1Z2dlc3Rpb25zIHRvIGdpdmUgeW91IGFuIGlkZWEgb2Ygd2hhdCBtaWdodCBmYWxsIHVuZGVyIHRoaXMgdHJhY2shPC9wPlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICA8bGk+RGF0YSBFbmdpbmVlcmluZy9TY3JhcGluZyBQcm9qZWN0IFN1Z2dlc3Rpb25zXG4vLyAgICAgICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgICAgICA8bGk+Q29tYmluaW5nIHJlbGF0ZWQgZGF0YXNldHMgaW4gYW4gaW50ZXJlc3RpbmcvdXNlZnVsIHdheTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxsaT5FeDogQ29sbGVjdGluZyBkYXRhIHRpZWQgdG8gZGlmZmVyZW50IFVTIFN0YXRlcyB0byBkZXZlbG9wIGFuIEFQSSBmb3IgZWFzaWx5IGFjY2Vzc2luZyBhbmQgY29tcGFyaW5nIGluZm9ybWF0aW9uPC9saT5cbi8vICAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgIDxsaT5NTCBUb29sc1xuLy8gICAgICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICAgICAgPGxpPldZU0lXSUcgTmV1cmFsIE5ldHdvcmsgQXBwbGljYXRpb248L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8bGk+V2ViIGFwcGxpY2F0aW9uIHRoYXQgbGV0cyB5b3UgY3JlYXRlIGRyYWcgbiBkcm9wIG5ldXJhbCBuZXR3b3JrczwvbGk+XG4vLyAgICAgICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICA8bGk+RGF0YSBWaXN1YWxpemF0aW9uIFRvb2xzXG4vLyAgICAgICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgICAgICA8bGk+QXV0b21hdGljIERhdGEgU3VtbWFyaXphdGlvbiAtIEF1dG8tZ2VuZXJhdGUgc3VtbWFyaWVzIGFuZCB2aXN1YWxpemF0aW9ucyBvZiBhcmJpdHJhcnkgQ1NWIGZpbGVzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgPGxpPkNsb3JvcGxldGggUGxvdHRpbmcgVG9vbGtpdCAtIE1hdHBsb3RsaWIgLyBBbHRhaXIgLyBHZW9wYW5kYXMgaGF2ZSBncmVhdCB1dGlsaXRpZXMgZm9yIHRoaXMsIGJ1dCBJIGFsd2F5cyBoYXZlIHRvIHJlZmVyIHRvIGRvY3VtZW50YXRpb24gYmVjYXVzZSBJIGZvcmdldCEgSXQgd291bGQgYmUgZ3JlYXQgaWYgSSBjb3VsZCBwYXNzIGEgZGF0YWZyYW1lIHdpdGgg4oCcc3RhdGUsIG51bWVyaWMgZmVhdHVyZeKAnSB0byBhIGZ1bmN0aW9uIHRvIGdldCBhIHF1aWNrIHBsb3QuPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbXBsZXggRGF0YSBWaXN1YWxpemF0aW9uIHRvIFJlYWN0IENvbXBvbmVudCAtIENhbiB5b3UgbWFrZSBpdCBlYXNpZXIgdG8gdHVybiBhIGNvbXBsZXggJiBwb3RlbnRpYWxseSBsaXZlIHZpc3VhbGl6YXRpb24gaW50byBhIGNvbXBvbmVudCBmb3IgYSB3ZWIgZnJvbnRlbmQgdG8gY29uc3VtZT88L2xpPlxuLy8gICAgICAgICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgIDwvZGl2Pixcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDI+SG91c3Rvbi9UZXhhcyBUcmVuZHMgVHJhY2s8L2gyPlxuLy8gICAgICAgICA8aDM+QmFja2dyb3VuZDwvaDM+XG4vLyAgICAgICAgIDxwPlRoaXMgdHJhY2sgaXMgZGVzaWduZWQgZm9yIHN0dWRlbnRzIHdobyBhcmUgc3BlY2lmaWNhbGx5IGludGVyZXN0ZWQgaW4gd29ya2luZyB3aXRoIGEgSG91c3RvbiBvciBUZXhhcyByZWxhdGVkIGRhdGFzZXQuICBUaGVzZSBwcm9qZWN0cyBzaG91bGQgZHJhZnQgYSBuYXJyYXRpdmUgYWJvdXQgYSB0cmVuZCBvYnNlcnZlZCBmcm9tIGEgbG9jYWwgZGF0YXNldC48L3A+XG4vLyAgICAgICAgIDxoMz5PYmplY3RpdmU8L2gzPlxuLy8gICAgICAgICA8cD5UaGUgb3V0Y29tZSBvZiB0aGlzIHRyYWNrIGlzIGEgcHJlc2VudGF0aW9uIHRoYXQgcGFpbnRzIGEgY29oZXJlbnQgc3Rvcnkgd2l0aCBzdXBwb3J0aW5nIGZpZ3VyZXMgZnJvbSBIb3VzdG9uIC8gVGV4YXMgcmVsYXRlZCBkYXRhc2V0cy4gIEdyZWF0IHByb2plY3RzIG1pZ2h0IGV4dGVuZCB0aGlzIHByZXNlbnRhdGlvbiB0byBpbmNsdWRlIGEgc2ltcGxlIHBvbGljeSBzdWdnZXN0aW9uIHRvIHRoZSBIb3VzdG9uIENpdHkgR292ZXJubWVudCBvciBUZXhhcyBTdGF0ZSBHb3Zlcm5tZW50LjwvcD5cbi8vICAgICAgICAgPGgzPktpbmRlciBVRFA8L2gzPlxuLy8gICAgICAgICA8cD5UaGUgS2luZGVyIFVyYmFuIERhdGEgUGxhdGZvcm0gaGFzIGEgd2VhbHRoIG9mIGRhdGEgY29sbGVjdGVkIGFuZCBtYWludGFpbmVkIGJ5IHRoZSBLaW5kZXIgSW5zdGl0dXRlLiAgRmluZCBkYXRhc2V0cyBoZXJlOiA8YSBocmVmPVwiaHR0cHM6Ly9raW5kZXJ1ZHAub3JnXCI+aHR0cHM6Ly9raW5kZXJ1ZHAub3JnPC9hPi48L3A+XG4vLyAgICAgICAgIDxwPlNhbXBsZSBEYXRhc2V0czo8L3A+XG4vLyAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cua2luZGVydWRwLm9yZy8jL2RhdGFzZXRDYXRhbG9nLzdtYW84MGozYWtnN1wiPk5laWdoYm9yaG9vZCBHZW50cmlmaWNhdGlvbiBhY3Jvc3MgSGFycmlzIENvdW50eTogMTk5MCB0byAyMDE2PC9hPjwvbGk+XG4vLyAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmtpbmRlcnVkcC5vcmcvIy9kYXRhc2V0Q2F0YWxvZy8wMzVicWt4MWR3b3ZcIj5QdWJsaWMgQ3Jhc2ggRGF0YSBFeHRyYWN0IGZyb20gVHhET1QgKDIwMTAtMjAxNik8L2E+PC9saT5cbi8vICAgICAgICAgPC91bD5cbi8vICAgICAgICAgPGgzPk9wZW4gRGF0YSBIb3VzdG9uPC9oMz5cbi8vICAgICAgICAgPHA+SG91c3RvbuKAmXMgb3BlbiBkYXRhIHBvcnRhbCEgQ29sbGVjdGVkIHJlc291cmNlIG9mIHB1YmxpY2x5IGFjY2Vzc2libGUgZGF0YSBvbiBIb3VzdG9uIExvY2FsIEdvdnQuIGFjdGl2aXRpZXMuPC9wPlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9kYXRhLmhvdXN0b250eC5nb3YvZGF0YXNldC9jaXR5LW9mLWhvdXN0b24tY2FtcGFpZ24tZmluYW5jZS1yZXBvcnRpbmdcIj5DaXR5IG9mIEhvdXN0b24gQ2FtcGFpZ24gRmluYW5jZSBSZXBvcnRpbmc8L2E+PC9saT5cbi8vICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL2RhdGEuaG91c3RvbnR4Lmdvdi9kYXRhc2V0L3B1YmxpYy1zY2hvb2xzLWluLXRoZS1ob3VzdG9uLXJlZ2lvblwiPlB1YmxpYyBTY2hvb2xzIGluIHRoZSBIb3VzdG9uIFJlZ2lvbjwvYT48L2xpPlxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgICAgICA8aDM+VGV4YXMgT3BlbiBEYXRhIFBvcnRhbDwvaDM+XG4vLyAgICAgICAgIDxwPlRleGFz4oCZIG9wZW4gZGF0YSBwb3J0YWwhIENvbGxlY3RlZCByZXNvdXJjZSBvZiBwdWJsaWNseSBhdmFpbGFibGUgZGF0YSBvbiBUZXhhcyBHb3Z0LiBhY3Rpdml0aWVzLjwvcD5cbi8vICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2RhdGEudGV4YXMuZ292L0dvdmVybm1lbnQtYW5kLVRheGVzL0FjdGl2ZS1DaWdhcmV0dGUtVG9iYWNjby1SZXRhaWxlcnMvdTVuZC00dnBnXCI+QWN0aXZlIENpZ2FyZXR0ZS9Ub2JhY2NvIFJldGFpbGVyczwvYT48L2xpPlxuLy8gICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2RhdGEudGV4YXMuZ292L1RyYW5zcG9ydGF0aW9uL0NhcE1ldHJvLUFQQy1SQVctSmFudWFyeS0yMDE2L3NmcmgtdWNyaVwiPkNhcE1ldHJvIEFQQyAoUkFXKSAtIEphbnVhcnkgMjAxNjwvYT48L2xpPlxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgIDwvZGl2Pixcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDI+T3RoZXIgSW50ZXJlc3RpbmcgRGF0YXNldHMgVG8gQ29uc2lkZXI8L2gyPlxuLy8gICAgICAgICA8aDM+Q29sbGVnZS9Vbml2ZXJzaXR5IFN1cnZleSBEYXRhPC9oMz5cbi8vICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmNlcy5lZC5nb3YvaXBlZHMvZGF0YWNlbnRlci9EYXRhRmlsZXMuYXNweFwiPkdldCB0aGUgRGF0YXNldCBIZXJlPC9hPlxuLy8gICAgICAgICA8cD5cbi8vICAgICAgICAgICAgIFRoZSBkYXRhc2V0cyBhdmFpbGFibGUgZnJvbSB0aGlzIHNlYXJjaCB0b29sIG9mZmVyIGEgd2lkZSB2YXJpZXR5IG9mIGRhdGEgcmFuZ2luZyBmcm9tIGluc3RpdHV0aW9uYWwgY2hhcmFjdGVyaXN0aWNzIG9mIGNvbGxlZ2VzLCB0byB0aGVpciB0ZXN0IHNjb3JlcyBhbmQgZ3JhZHVhdGlvbiByYXRlcy4gQ2hvb3NlIHRoZSB5ZWFyIGFuZCB0eXBlIG9mIGRhdGEgeW91IGFyZSBsb29raW5nIGZvciBhbmQgcHJlc3MgJ2NvbnRpbnVlJy4gVGhlIGNvbHVtbiBsYWJlbGVkIGRhdGEgZmlsZSBoYXMgYSBkb3dubG9hZCBsaW5rIGZvciB0aGUgZGF0YXNldC4gVGhlIHJpZ2h0bW9zdCBjb2x1bW4gbGFiZWxlZCBkaWN0aW9uYXJ5IGxldHMgeW91IGRvd25sb2FkIGEgc3ByZWFkc2hlZXQgY29udGFpbmluZyBhIGJyZWFrZG93biBvZiB3aGF0IHRoZSBmZWF0dXJlcy9sYWJlbHMgaW4gdGhlIGRhdGFzZXQgcmVwcmVzZW50LlxuLy8gICAgICAgICA8L3A+XG4vLyAgICAgICAgIDxoMz4yMDE4IFdvcmxkIEN1cCBNYXRjaCBEYXRhPC9oMz5cbi8vICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9maXZldGhpcnR5ZWlnaHQvZGF0YS90cmVlL21hc3Rlci93b3JsZC1jdXAtMjAxOFwiPkdldCB0aGUgRGF0YXNldCBIZXJlPC9hPlxuLy8gICAgICAgICA8cD5cbi8vICAgICAgICAgICAgIFRoZSBsZWZ0bW9zdCBsaW5rIGNvbnRhaW5zIG1hdGNoIGRhdGEgZnJvbSB0aGUgMjAxOCB3b3JsZCBjdXAgY291cnRlc3kgb2YgZml2ZXRoaXJ0eWVpZ2h0LiBUaGUgcmlnaHQgbGluayBjb250YWlucyB0aGVpciB0b3VybmFtZW50IHByZWRpY3Rpb25zIGRvIG5vdCBjb3B5IHRoaXMgYXMgeW91ciBvd24gcmVzdWx0LCBmaW5kIGEgbmV3IHdheSB0byBhbmFseXplIHRoZSBkYXRhLlxuLy8gICAgICAgICA8L3A+XG4vLyAgICAgICAgIDxoMz5EaXZvcmNlIFByZWRpY3Rpb24gRGF0YXNldDwvaDM+XG4vLyAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FyY2hpdmUuaWNzLnVjaS5lZHUvbWwvZGF0YXNldHMvRGl2b3JjZStQcmVkaWN0b3JzK2RhdGErc2V0XCI+R2V0IHRoZSBEYXRhc2V0IEhlcmU8L2E+XG4vLyAgICAgICAgIDxwPlxuLy8gICAgICAgICAgICAgRWFjaCByb3cgaW4gdGhpcyBkYXRhc2V0IHJlcHJlc2VudHMgYW4gaW5kaXZpZHVhbHMgcmVzcG9uc2VzIHRvIGEgc3VydmV5IGNvbnRhaW5pbmcgNTQgcXVlc3Rpb25zIGFib3V0IHZhcmlvdXMgYXNwZWN0cyBvZiB0aGVpciBtYXJyaWFnZS4gVGhlIHZlY3RvcnMgYXJlIGxhYmVsZWQgYmFzZWQgb24gd2hldGhlciBvciBub3QgdGhlIHJlbGF0aW9uc2hpcCBlbmRlZCBpbiBkaXZvcmNlLiBIYXZlIGZ1biFcbi8vICAgICAgICAgPC9wPlxuLy8gICAgICAgICA8aDM+VUsgT25saW5lIFJldGFpbCBJbnZvaWNlczwvaDM+XG4vLyAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FyY2hpdmUuaWNzLnVjaS5lZHUvbWwvZGF0YXNldHMvT25saW5lK1JldGFpbCtJSVwiPkdldCB0aGUgRGF0YXNldCBIZXJlPC9hPlxuLy8gICAgICAgICA8cD5cbi8vICAgICAgICAgICAgIFRoaXMgZGF0YXNldCBjb250YWlucyB0aGUgZGF0YSBmcm9tIGFib3V0IDEsMDAwLDAwMCBpbnZvaWNlcyBmcm9tIGEgVUsgb25saW5lIHJldGFpbCBzdG9yZSBiZXR3ZWVuIDIwMDkgYW5kIDIwMTEuIFRoZSBsaW5rICdkYXRhIGZvbGRlcicgYXQgdGhlIHRvcCBjb250YWlucyBhIGRvd25sb2FkIGxpbmsgZm9yIHRoZSBkYXRhc2V0LlxuLy8gICAgICAgICA8L3A+XG4vLyAgICAgPC9kaXY+XG4vLyBdXG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tracks/trackList.js\n");

/***/ })

})