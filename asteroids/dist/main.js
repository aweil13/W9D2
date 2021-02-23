/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nmodule.exports = Asteroid;\n\nconst RADIUS = 15;\nconst COLOR = 'yellow';\n\nfunction Asteroid(options){\n    options = options || {};\n    options.pos = options.pos || \"later\"; // fix this\n    options.vel = options.vel || Util.randomVec(5);\n    options.radius = RADIUS;\n    options.color = COLOR;\n    \n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\n\n\n// const as = new Asteroid({ pos: [30, 30] })\n// console.log(as)\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nconst DIM_X = 800;\nconst DIM_Y = 900;\nconst NUM_ASTEROIDS = 8;\n\nfunction Game(){\n   this.asteroids = []; \n}\n\nGame.prototype.addAsteroids = function () {\n    for (let i = this.asteroids.length; i < NUM_ASTEROIDS; i++) {\n        let as = new Asteroid(this.randomPosition());\n        this.asteroids.push(as);\n    }\n}\n\nGame.prototype.randomPosition = function () {\n    const x = Math.floor(Math.random() * (DIM_X - 25));\n    const y = Math.floor(Math.random() * (DIM_Y - 25));\n    const pos = [x, y];\n    return pos;\n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0,0,800,900);\n    this.asteroids.forEach(asteroid=> {\n        // let as = new Asteroid(asteroid_pos);\n        asteroid.draw(ctx);\n    });\n}\n\nGame.prototype.moveObjects = function () {\n    this.asteroids.forEach(asteroid_pos => {\n        // let as = new Asteroid(asteroid_pos);\n        asteroid.move();\n    });\n}\n\nmodule.exports = Game;\n\n// const game = new Game();\n// game.addAsteroids();\n// game.draw();\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// console.log(\"Webpack is working!\")\nconst Game  = __webpack_require__(/*! ./game */ \"./src/game.js\");\nwindow.Game = Game;\n\n// const MovingObject = require('./moving_object');\n// window.MovingObject = MovingObject;\n// const Asteroid = require('./asteroid');\n// window.Asteroid = Asteroid;\n\n// console.log(MovingObject);\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvasEl = document.getElementById('game-canvas');\n    canvasEl.width = 800;\n    canvasEl.height = 900;\n\n    const ctx = canvasEl.getContext('2d');\n    \n    ctx.fillStyle = 'grey';\n    ctx.fillRect(0, 0, 800, 900);\n    // const mo = new MovingObject({\n    //     pos: [30, 30],\n    //     vel: [10, 10],\n    //     radius: 5,\n    //     color: \"#00FF00\"\n    //   });\n\n    // mo.draw(ctx);\n\n    const game = new Game();\n    game.addAsteroids();\n    game.draw(ctx);\n    \n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\nfunction MovingObject(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nmodule.exports = MovingObject;\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.lineWidth = 2;\n    ctx.strokeStyle = 'blue';\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);\n    ctx.fillStyle = 'purple';\n    ctx.fill();\n    ctx.stroke();\n    ctx.closePath();\n}\n\nMovingObject.prototype.move = function (){\n    this.pos[0] = this.pos[0] + this.vel[0];\n    this.pos[1] = this.pos[1] + this.vel[1];\n    \n}\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass){\n        function Surrogate(){};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n      },\n      // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n      }\n}\n\n\nmodule.exports  = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;