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

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*  \r\nHit Test\r\n--------\r\n\r\n(Shaun A. Noordin | shaunanoordin.com | 20200303)\r\n */\nvar POINT_RADIUS = 8;\nvar POINT_STROKE_WIDTH = 32;\nvar POLYGON_STROKE_WIDTH = 4;\nvar SVG_NAMESPACE = 'http://www.w3.org/2000/svg';\nvar SVG_REVERSED_Y_AXIS = -1;\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.svg = document.getElementById('svg');\n    this.dataLayer = document.getElementById('data-layer');\n    this.polygon = {\n      points: [250, 300, 400, 50, 600, 200, 800, 50, 950, 300, 600, 550]\n    };\n    this.point = {\n      x: 600,\n      y: 300\n    };\n    this.svg.addEventListener('click', this.onClick.bind(this));\n    this.render();\n  }\n\n  _createClass(App, [{\n    key: \"onClick\",\n    value: function onClick(e) {\n      var svgBounds = this.svg.getBoundingClientRect();\n      var newX = (e.clientX - svgBounds.x) / (svgBounds.width / 1200);\n      var newY = (e.clientY - svgBounds.y) / (svgBounds.height / 600);\n      this.point.x = !isNaN(newX) ? newX : this.point.x;\n      this.point.y = !isNaN(newY) ? newY : this.point.y;\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      while (this.dataLayer.firstChild) {\n        this.dataLayer.removeChild(this.dataLayer.firstChild);\n      }\n\n      var polygon = document.createElementNS(SVG_NAMESPACE, 'polygon');\n      polygon.setAttribute('points', this.polygon.points.join(' '));\n      polygon.setAttribute('stroke-width', POLYGON_STROKE_WIDTH);\n      polygon.setAttribute('stroke', '#0cc');\n      polygon.setAttribute('fill', 'none');\n      this.dataLayer.appendChild(polygon);\n\n      for (var i = 0; i + 1 < this.polygon.points.length; i += 2) {\n        var text = document.createElementNS(SVG_NAMESPACE, 'text');\n        text.setAttribute('x', this.polygon.points[i]);\n        text.setAttribute('y', this.polygon.points[i + 1]);\n        text.setAttribute('fill', '#000');\n        text.textContent = Math.floor(i / 2);\n        this.dataLayer.appendChild(text);\n      }\n\n      var pointInPolygon = this.isPointInPolygon(this.point, this.polygon);\n      var point = document.createElementNS(SVG_NAMESPACE, 'circle');\n      point.setAttribute('cx', this.point.x);\n      point.setAttribute('cy', this.point.y);\n      point.setAttribute('r', POINT_RADIUS);\n      point.setAttribute('stroke-width', POINT_STROKE_WIDTH);\n      point.setAttribute('stroke', 'rgba(192, 192, 192, 0.5)');\n      console.log(pointInPolygon);\n\n      if (pointInPolygon) {\n        point.setAttribute('fill', '#0e0');\n      } else {\n        point.setAttribute('fill', '#e00');\n      }\n\n      this.dataLayer.appendChild(point);\n    }\n  }, {\n    key: \"isPointInPolygon\",\n    value: function isPointInPolygon(point, polygon) {\n      if (!point || point.x === undefined || point.y === undefined || !polygon || !polygon.points || polygon.points.length < 6 || polygon.points.length % 2 !== 0) return false;\n      /*let x2 = polygon.points[polygon.points.length - 2];\r\n      let y2 = polygon.points[polygon.points.length - 1];\r\n      let prevAngle = Math.atan2(SVG_REVERSED_Y_AXIS * (y2 - point.y), x2 - point.x);  // Initial angle\r\n      console.log('INITIAL ANGLE: ', prevAngle * 180 / Math.PI)*/\n\n      var rotation = 0; // Total rotation\n\n      function getMagnitude(x, y) {\n        return Math.sqrt(x * x + y * y);\n      }\n\n      for (var i = 0; i + 1 < polygon.points.length; i += 2) {\n        // Use dot product to calculate angle between two lines\n        var aX = polygon.points[i + 0] - this.point.x;\n        var aY = polygon.points[i + 1] - this.point.y;\n        var bX = polygon.points[(i + 2) % polygon.points.length] - this.point.x;\n        var bY = polygon.points[(i + 3) % polygon.points.length] - this.point.y;\n        var divisor = getMagnitude(aX, aY) * getMagnitude(bX, bY);\n        var angleDiff = divisor ? Math.acos((aX * bX + aY * bY) / divisor) : 0;\n        rotation += angleDiff;\n        var debugLine = document.createElementNS(SVG_NAMESPACE, 'line');\n        debugLine.setAttribute('x1', this.point.x);\n        debugLine.setAttribute('y1', this.point.y);\n        debugLine.setAttribute('x2', polygon.points[i + 0]);\n        debugLine.setAttribute('y2', polygon.points[i + 1]);\n        debugLine.setAttribute('stroke-width', 2);\n        debugLine.setAttribute('stroke', 'rgba(128, 128, 128, 0.5)');\n        this.dataLayer.appendChild(debugLine);\n      } // If rotation === 0, false. If rotation === 360 degrees or -360 degrees, true.\n      // Build in minor tolerances for rounding errors.\n\n\n      console.log(rotation * 180 / Math.PI);\n      return rotation < -0.1 || rotation > 0.1;\n    }\n  }]);\n\n  return App;\n}();\n\nvar app;\n\nwindow.onload = function () {\n  window.app = new App();\n};\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });