/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*  \r\nHit Test\r\n--------\r\n\r\n(Shaun A. Noordin | shaunanoordin.com | 20200303)\r\n */\nvar POINT_RADIUS = 8;\nvar POINT_STROKE_WIDTH = 32;\nvar POLYGON_STROKE_WIDTH = 4;\nvar SVG_NAMESPACE = 'http://www.w3.org/2000/svg';\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.svg = document.getElementById('svg');\n    this.dataLayer = document.getElementById('data-layer');\n    this.polygon = {\n      points: [200, 300, 400, 0, 600, 150, 800, 0, 1000, 300, 600, 600]\n    };\n    this.point = {\n      x: 400,\n      y: 200\n    };\n    this.update();\n  }\n\n  _createClass(App, [{\n    key: \"update\",\n    value: function update() {\n      while (this.dataLayer.firstChild) {\n        this.dataLayer.removeChild(this.dataLayer.firstChild);\n      }\n\n      var polygon = document.createElementNS(SVG_NAMESPACE, 'polygon');\n      polygon.setAttribute('points', this.polygon.points.join(' '));\n      polygon.setAttribute('stroke-width', POLYGON_STROKE_WIDTH);\n      polygon.setAttribute('stroke', '#0cc');\n      polygon.setAttribute('fill', 'none');\n      this.dataLayer.appendChild(polygon);\n      var point = document.createElementNS(SVG_NAMESPACE, 'circle');\n      point.setAttribute('cx', this.point.x);\n      point.setAttribute('cy', this.point.y);\n      point.setAttribute('r', POINT_RADIUS);\n      point.setAttribute('stroke-width', POINT_STROKE_WIDTH);\n      point.setAttribute('stroke', 'rgba(192, 192, 192, 0.5)');\n      point.setAttribute('fill', 'rgba(0, 255, 0)');\n      this.dataLayer.appendChild(point);\n    }\n  }]);\n\n  return App;\n}();\n\nvar app;\n\nwindow.onload = function () {\n  window.app = new App();\n};\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });