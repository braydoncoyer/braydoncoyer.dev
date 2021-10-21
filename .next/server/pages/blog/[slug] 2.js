"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slugify */ \"slugify\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/braydoncoyer/Documents/Gatsby/braydoncoyer.dev/pages/blog/[slug].js\";\n\n\n\n\nconst ArticlePage = ({\n  content\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"pre\", {\n    children: JSON.stringify(content, null, 2)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, undefined);\n};\n\nconst getStaticPaths = async () => {\n  const notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_SECRET\n  });\n  const data = await notion.databases.query({\n    database_id: process.env.BLOG_DATABASE_ID,\n    filter: {\n      and: [{\n        property: \"Status\",\n        select: {\n          equals: \"✅ Published\"\n        }\n      }, {\n        property: \"Type\",\n        select: {\n          equals: \"Personal\"\n        }\n      }]\n    }\n  });\n  const paths = [];\n  data.results.forEach(result => {\n    if (result.object === \"page\") {\n      paths.push({\n        params: {\n          id: result.id,\n          slug: slugify__WEBPACK_IMPORTED_MODULE_1___default()(result.properties.Name.title[0].plain_text).toLowerCase()\n        }\n      });\n    }\n  });\n  console.log(paths);\n  return {\n    paths,\n    fallback: false\n  };\n};\nconst getStaticProps = async ({\n  params: {\n    slug,\n    id\n  }\n}) => {\n  const title = '';\n  const notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_SECRET\n  });\n  const page = await notion.pages.retrieve({\n    page_id: id\n  });\n  return {\n    props: {\n      content: page\n    }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsTUFBTUUsV0FBVyxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQWU7QUFDakMsc0JBQU87QUFBQSxjQUFNQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsT0FBZixFQUF3QixJQUF4QixFQUE4QixDQUE5QjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSU8sTUFBTUcsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTUMsTUFBTSxHQUFHLElBQUlQLG9EQUFKLENBQVc7QUFDeEJRLElBQUFBLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBRE0sR0FBWCxDQUFmO0FBSUEsUUFBTUMsSUFBSSxHQUFHLE1BQU1MLE1BQU0sQ0FBQ00sU0FBUCxDQUFpQkMsS0FBakIsQ0FBdUI7QUFDeENDLElBQUFBLFdBQVcsRUFBRU4sT0FBTyxDQUFDQyxHQUFSLENBQVlNLGdCQURlO0FBRXhDQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsR0FBRyxFQUFFLENBQ0g7QUFDRUMsUUFBQUEsUUFBUSxFQUFFLFFBRFo7QUFFRUMsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLE1BQU0sRUFBRTtBQURGO0FBRlYsT0FERyxFQU9IO0FBQ0VGLFFBQUFBLFFBQVEsRUFBRSxNQURaO0FBRUVDLFFBQUFBLE1BQU0sRUFBRTtBQUNOQyxVQUFBQSxNQUFNLEVBQUU7QUFERjtBQUZWLE9BUEc7QUFEQztBQUZnQyxHQUF2QixDQUFuQjtBQW9CQSxRQUFNQyxLQUFLLEdBQUcsRUFBZDtBQUVBVixFQUFBQSxJQUFJLENBQUNXLE9BQUwsQ0FBYUMsT0FBYixDQUFzQkMsTUFBRCxJQUFZO0FBQy9CLFFBQUlBLE1BQU0sQ0FBQ0MsTUFBUCxLQUFrQixNQUF0QixFQUE4QjtBQUM1QkosTUFBQUEsS0FBSyxDQUFDSyxJQUFOLENBQVc7QUFDVEMsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLEVBQUUsRUFBRUosTUFBTSxDQUFDSSxFQURMO0FBRU5DLFVBQUFBLElBQUksRUFBRTdCLDhDQUFPLENBQ1h3QixNQUFNLENBQUNNLFVBQVAsQ0FBa0JDLElBQWxCLENBQXVCQyxLQUF2QixDQUE2QixDQUE3QixFQUFnQ0MsVUFEckIsQ0FBUCxDQUVKQyxXQUZJO0FBRkE7QUFEQyxPQUFYO0FBUUQ7QUFDRixHQVhEO0FBYUFDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFaO0FBRUEsU0FBTztBQUNMQSxJQUFBQSxLQURLO0FBRUxnQixJQUFBQSxRQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0E5Q007QUFnREEsTUFBTUMsY0FBYyxHQUFHLE9BQU87QUFBQ1gsRUFBQUEsTUFBTSxFQUFFO0FBQUNFLElBQUFBLElBQUQ7QUFBT0QsSUFBQUE7QUFBUDtBQUFULENBQVAsS0FBZ0M7QUFDMUQsUUFBTUksS0FBSyxHQUFHLEVBQWQ7QUFFQSxRQUFNMUIsTUFBTSxHQUFHLElBQUlQLG9EQUFKLENBQVc7QUFDeEJRLElBQUFBLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBRE0sR0FBWCxDQUFmO0FBSUYsUUFBTTZCLElBQUksR0FBRyxNQUFNakMsTUFBTSxDQUFDa0MsS0FBUCxDQUFhQyxRQUFiLENBQXNCO0FBQ3RDQyxJQUFBQSxPQUFPLEVBQUVkO0FBRDZCLEdBQXRCLENBQW5CO0FBSUEsU0FBTztBQUNMZSxJQUFBQSxLQUFLLEVBQUU7QUFDTHpDLE1BQUFBLE9BQU8sRUFBRXFDO0FBREo7QUFERixHQUFQO0FBS0QsQ0FoQk07QUFrQlAsaUVBQWV0QyxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy9bc2x1Z10uanM/MjkzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiQG5vdGlvbmhxL2NsaWVudFwiO1xuaW1wb3J0IHNsdWdpZnkgZnJvbSBcInNsdWdpZnlcIjtcblxuY29uc3QgQXJ0aWNsZVBhZ2UgPSAoe2NvbnRlbnR9KSA9PiB7XG4gIHJldHVybiA8cHJlPntKU09OLnN0cmluZ2lmeShjb250ZW50LCBudWxsLCAyKX08L3ByZT47XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG5vdGlvbiA9IG5ldyBDbGllbnQoe1xuICAgIGF1dGg6IHByb2Nlc3MuZW52Lk5PVElPTl9TRUNSRVQsXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcbiAgICBkYXRhYmFzZV9pZDogcHJvY2Vzcy5lbnYuQkxPR19EQVRBQkFTRV9JRCxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIGFuZDogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvcGVydHk6IFwiU3RhdHVzXCIsXG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBlcXVhbHM6IFwi4pyFIFB1Ymxpc2hlZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wZXJ0eTogXCJUeXBlXCIsXG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBlcXVhbHM6IFwiUGVyc29uYWxcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBwYXRocyA9IFtdO1xuXG4gIGRhdGEucmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0Lm9iamVjdCA9PT0gXCJwYWdlXCIpIHtcbiAgICAgIHBhdGhzLnB1c2goe1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBpZDogcmVzdWx0LmlkLFxuICAgICAgICAgIHNsdWc6IHNsdWdpZnkoXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcy5OYW1lLnRpdGxlWzBdLnBsYWluX3RleHRcbiAgICAgICAgICApLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKHBhdGhzKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7cGFyYW1zOiB7c2x1ZywgaWR9fSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gJyc7XG4gICAgXG4gICAgY29uc3Qgbm90aW9uID0gbmV3IENsaWVudCh7XG4gICAgICBhdXRoOiBwcm9jZXNzLmVudi5OT1RJT05fU0VDUkVULFxuICAgIH0pO1xuXG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBub3Rpb24ucGFnZXMucmV0cmlldmUoe1xuICAgICBwYWdlX2lkOiBpZFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb250ZW50OiBwYWdlXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlUGFnZTtcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJzbHVnaWZ5IiwiQXJ0aWNsZVBhZ2UiLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFN0YXRpY1BhdGhzIiwibm90aW9uIiwiYXV0aCIsInByb2Nlc3MiLCJlbnYiLCJOT1RJT05fU0VDUkVUIiwiZGF0YSIsImRhdGFiYXNlcyIsInF1ZXJ5IiwiZGF0YWJhc2VfaWQiLCJCTE9HX0RBVEFCQVNFX0lEIiwiZmlsdGVyIiwiYW5kIiwicHJvcGVydHkiLCJzZWxlY3QiLCJlcXVhbHMiLCJwYXRocyIsInJlc3VsdHMiLCJmb3JFYWNoIiwicmVzdWx0Iiwib2JqZWN0IiwicHVzaCIsInBhcmFtcyIsImlkIiwic2x1ZyIsInByb3BlcnRpZXMiLCJOYW1lIiwidGl0bGUiLCJwbGFpbl90ZXh0IiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInBhZ2UiLCJwYWdlcyIsInJldHJpZXZlIiwicGFnZV9pZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "slugify":
/*!**************************!*\
  !*** external "slugify" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("slugify");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].js"));
module.exports = __webpack_exports__;

})();