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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import 'script-loader!CreateJS/builds/createjs-2015.11.26.combined.js';
var Food = __webpack_require__(2);

var Coord = function Coord(i, j) {
  this.i = i;
  this.j = j;
};

Coord.prototype.equals = function (coord2) {
  return this.i == coord2.i && this.j == coord2.j;
};

Coord.prototype.isOpposite = function (coord2) {
  return this.i == -1 * coord2.i && this.j == -1 * coord2.j;
};

Coord.prototype.plus = function (coord2) {
  return new Coord(this.i + coord2.i, this.j + coord2.j);
};

var Snake = function () {
  function Snake(options) {
    _classCallCheck(this, Snake);

    this.segments = [options.pos];
    // this.pos = options.pos
    // this.headPos = this.pos[0]
    // this.tailPos = this.pos[this.pos.length-1]
    this.vel = options.vel;
    this.color = 'green';
    this.dir = 'N';

    this.DIFFS = {
      "N": new Coord(-1, 0),
      "E": new Coord(0, 1),
      "S": new Coord(1, 0),
      "W": new Coord(0, -1)
    };

    this.move = this.move.bind(this);
  }

  _createClass(Snake, [{
    key: 'head',
    value: function head() {
      return this.segments[this.segments.length - 1];
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      var _this = this;

      console.log(this);
      this.segments.forEach(function (segment) {
        ctx.fillStyle = _this.color;
        ctx.beginPath();
        ctx.rect(segment[0], segment[1], 1, 1);
        ctx.fill();
      });
    }
  }, {
    key: 'move',
    value: function move() {
      if (this.dir = 'N') {
        this.segments.push([this.head()[0] - 1, this.head()[1]]);
        this.segments.shift();
      }
    }

    // grow() {
    //   if (this.pos[0] === Food.pos) {
    //     this.body.push([])
    //
    //   }
    // }


  }]);

  return Snake;
}();

//initial length is 2 (25px*2)
//each time it eats food, increase the length by 1
//when snake collides with food, make food disappear and reappear in a different spot
//if snake collides with obstacle, end game
//when game starts, make snake move to the right (setInterval?)
//have snake's moving direction respond to arrow keys

module.exports = Snake;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _snake = __webpack_require__(0);

var _snake2 = _interopRequireDefault(_snake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 400;
  canvasEl.height = 400;
  var ctx = canvasEl.getContext("2d");

  var snake = new _snake2.default({ pos: [10, 10] });
  snake.draw(ctx);
  window.snake = snake;
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map