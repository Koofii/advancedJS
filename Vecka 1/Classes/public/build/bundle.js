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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PlayerState = function () {\n    function PlayerState(player) {\n        _classCallCheck(this, PlayerState);\n\n        this.player = player;\n    }\n\n    _createClass(PlayerState, [{\n        key: 'play',\n        value: function play() {}\n    }, {\n        key: 'pause',\n        value: function pause() {}\n    }, {\n        key: 'stop',\n        value: function stop() {}\n    }]);\n\n    return PlayerState;\n}();\n\nPlayerState.IDLE = 'IDLE';\nPlayerState.PLAYING = 'PLAYING';\nPlayerState.PAUSED = 'PAUSED';\n\nvar IdleState = function (_PlayerState) {\n    _inherits(IdleState, _PlayerState);\n\n    function IdleState(player) {\n        _classCallCheck(this, IdleState);\n\n        return _possibleConstructorReturn(this, (IdleState.__proto__ || Object.getPrototypeOf(IdleState)).call(this, player));\n    }\n\n    _createClass(IdleState, [{\n        key: 'play',\n        value: function play() {\n            this.player.setState(PlayerState.PLAYING);\n        }\n    }]);\n\n    return IdleState;\n}(PlayerState);\n\nvar PlayingState = function (_PlayerState2) {\n    _inherits(PlayingState, _PlayerState2);\n\n    function PlayingState(player) {\n        _classCallCheck(this, PlayingState);\n\n        return _possibleConstructorReturn(this, (PlayingState.__proto__ || Object.getPrototypeOf(PlayingState)).call(this, player));\n    }\n\n    _createClass(PlayingState, [{\n        key: 'pause',\n        value: function pause() {\n            this.player.setState(PlayerState.PAUSED);\n        }\n    }, {\n        key: 'stop',\n        value: function stop() {\n            this.player.setState(PlayerState.IDLE);\n        }\n    }]);\n\n    return PlayingState;\n}(PlayerState);\n\nvar PausedState = function (_PlayerState3) {\n    _inherits(PausedState, _PlayerState3);\n\n    function PausedState(player) {\n        _classCallCheck(this, PausedState);\n\n        return _possibleConstructorReturn(this, (PausedState.__proto__ || Object.getPrototypeOf(PausedState)).call(this, player));\n    }\n\n    _createClass(PausedState, [{\n        key: 'play',\n        value: function play() {\n            this.player.setState(PlayerState.PLAYING);\n        }\n    }, {\n        key: 'stop',\n        value: function stop() {\n            this.player.setState(PlayerState.IDLE);\n        }\n    }]);\n\n    return PausedState;\n}(PlayerState);\n\nvar Player = function () {\n    function Player() {\n        var _states;\n\n        _classCallCheck(this, Player);\n\n        this.states = (_states = {}, _defineProperty(_states, PlayerState.IDLE, new IdleState(this)), _defineProperty(_states, PlayerState.PLAYING, new PlayingState(this)), _defineProperty(_states, PlayerState.PAUSED, new PausedState(this)), _states);\n        this.currentState = PlayerState.IDLE;\n    }\n\n    _createClass(Player, [{\n        key: 'setState',\n        value: function setState(newState) {\n            this.currentState = newState;\n            this.status();\n        }\n    }, {\n        key: 'play',\n        value: function play() {\n            this.states[this.currentState].play();\n        }\n    }, {\n        key: 'pause',\n        value: function pause() {\n            this.states[this.currentState].pause();\n        }\n    }, {\n        key: 'stop',\n        value: function stop() {\n            this.states[this.currentState].stop();\n        }\n    }, {\n        key: 'status',\n        value: function status() {\n            console.log('Current state for player is: ' + this.currentState);\n        }\n    }]);\n\n    return Player;\n}();\n\nvar player = new Player();\nplayer.status();\nplayer.play();\nplayer.pause();\nplayer.pause();\nplayer.play();\nplayer.stop();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });