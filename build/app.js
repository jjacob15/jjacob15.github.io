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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/avatar-4.jpg":
/*!************************************!*\
  !*** ./assets/images/avatar-4.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAZABkAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8AxaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKdHG8sixxozyOQqqoyWJ6ACgBtFSrbXDWz3KwSGBDtaUIdqn0J6UXFtcWsgjuIJIXIDBZEKkg98GgCKinRxvLIscaM8jkKqqMliegAp8VtcTxySQwSSJEN0jIhIQepI6UARUVLLbXEEcck0EkaSjdGzoQHHqCetRUAFFFFABRRRQAUUUUAFanhu7Nl4l02bzhCguYxI5IACFhuyT0GM1l0UAdboF/ZWk2k3tzLH9ktIZYrmEsNzszuQQnVuGTnH8HtVQNFHJpdrc3FpO6XUsszvIHj8ptnBI/3XOOvzetc7RQB0dpdQWXjiyntJoobITwhXVlAEJ2/fPQNt+9nvmk0O4gjgsGeaONbS+a4uVdwpkiKpgAH733XGBn71c7RQB0WuXEEkF+yTRyLd3y3FsqOGMcQV8ggfd+8gwcfdrnaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k="

/***/ }),

/***/ "./assets/images/logo.png":
/*!********************************!*\
  !*** ./assets/images/logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAiCAYAAADLYJIKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvZJREFUeNrsnLFu2zAQhukge+M3CJShYwq4D2ADytCti+eii+dmire4m7dklad0TR6gQwpY3WPAHTs40BNIfgOVrI/o4SrJlkRFdvD/wIEURd5R1GdZpA120jRVELSvOsIQONVUW8rM03ZP5RAAbV1jbc/azuh4SNbF0ADQfVNCT84FAK2uY5sZzFRfJ/0Xjh/ORyrctbLu4zudfHQUO9Kx78jvxJHPO+0zofyCvuJn2kZArSagBOd1C30IS8Bp6r5xFPenAYry1w6v5T3lL1j5DKi94q/4BuCEACjghF45oIATOgKcEAAFnJCDWXyRLrUtG4gf1YBz1z7dajvf9pnIKZ/nlH9jKwBcSyDVDqB1tJ6PdrtxJeD8bNcwd/C53lYnby12kL84FJVZv4WaB/SmRgyz3thvA04I76Cu3jlPASe0z5OkU8AJHcwsHnBChwToJeAEoPssLN1gFr/9KVYDlDWGGWoa0Do6of+aZsmsJ0ZlHZ7//j7JORX+evshrLCK0C87qctps9TXgw9kC4DeNBT/q7ZJhXZF/98MK/ibl6z/iew/1ivGhw58Fg8BUAgCoBAEQCEACkEvPou/bWEGGv2dQm/+utYp0W5Q5E/oi7aTjPL1Dv7KCj8quJbZm4ksTjcaUeqxMqNHll9ROmX5K0pj1pab9W1i+XTcE7G6dOwzP7bdk+hLTPGNAhZHibbyOlLmU9b3cvxmjcs0Y1wUzK3xg5TdJA6hJ1LF4Hxi+ZgB2mM3bcja21iBgFpCHrA2AYNZ9sX2p8tiKVFnldHGy7geL8Nv0bjYOh7gbM7kO+hKm6/+7YqRZD10Kb3S9oPlx6yObWc2L7hnvu0OGz5LeSxfnDd6UJv9jhYFXwQJi8W3mcm7jpWIkSXjK84ZF1UwLlBDkyR7E+0NzgKOa0zAmXNnBKv08Uhlstyjd05fxPKp3EJlwOgJ6BKWzgiMQMRKRD95W9mXlEE4pPMPlH/OGRcZW4k6kCN1sD8ohGUmCKqoPwIMAKJqAhoJz//sAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/classnames/index.js from dll-reference utility ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference utility */ "dll-reference utility"))("./node_modules/classnames/index.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference react ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/react-modal/lib/index.js from dll-reference react ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/react-modal/lib/index.js");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/react-redux/es/index.js from dll-reference react ***!
  \*********************************************************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/react-redux/es/index.js");

/***/ }),

/***/ "./node_modules/react-transition-group/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-transition-group/index.js from dll-reference react ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/react-transition-group/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference react ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/redux-logger/dist/redux-logger.js from dll-reference react ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/redux-logger/dist/redux-logger.js");

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/redux-thunk/es/index.js from dll-reference react ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/redux-thunk/es/index.js");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/redux/es/redux.js from dll-reference react ***!
  \***************************************************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/redux/es/redux.js");

/***/ }),

/***/ "./node_modules/velocity-animate/velocity.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/velocity-animate/velocity.js from dll-reference utility ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference utility */ "dll-reference utility"))("./node_modules/velocity-animate/velocity.js");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _NavBar = __webpack_require__(/*! ./components/nav/NavBar */ "./src/components/nav/NavBar.jsx");

var _NavBar2 = _interopRequireDefault(_NavBar);

var _MainContainer = __webpack_require__(/*! ./components/MainContainer */ "./src/components/MainContainer.jsx");

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _types = __webpack_require__(/*! ./constants/types */ "./src/constants/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Jaison.Jacob on 7/11/2018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// map all necessary literals from state to props here
var stateMap = function stateMap(state) {
  return {
    auth: state.auth,
    nav: state.nav,
    iapply: state.iapply
  };
};

var propMap = function propMap(dispatch) {
  return {
    updateScreenSize: function updateScreenSize(status) {
      dispatch({ type: _types.SET_BROWSER_SIZE, size: status });
    },
    dimissSideBar: function dimissSideBar() {
      dispatch({ type: _types.TOGGLE_SIDEBAR });
    }
  };
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.updateDimensions = _this.updateDimensions.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
      this.updateDimensions();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions() {
      var _props = this.props,
          nav = _props.nav,
          updateScreenSize = _props.updateScreenSize;

      if (nav.isSmallDevice && document.body.offsetWidth > 992) {
        updateScreenSize(false);
      }

      if (!nav.isSmallDevice && document.body.offsetWidth < 992) {
        updateScreenSize(true);
      }
    }
  }, {
    key: 'renderOverlay',
    value: function renderOverlay() {
      var _props2 = this.props,
          dimissSideBar = _props2.dimissSideBar,
          nav = _props2.nav;
      var isSmallDevice = nav.isSmallDevice,
          displaySideBar = nav.displaySideBar;

      var c = (0, _classnames2.default)({
        'overlay-box': true,
        'overlay-box-show': isSmallDevice && displaySideBar
      });
      return _react2.default.createElement('div', { className: c, role: 'link', tabIndex: '0', onClick: dimissSideBar, onKeyDown: dimissSideBar });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { overflow: 'hidden' } },
        this.renderOverlay(),
        _react2.default.createElement(_NavBar2.default, this.props),
        _react2.default.createElement(_MainContainer2.default, this.props)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(stateMap, propMap)(App);

/***/ }),

/***/ "./src/Root.jsx":
/*!**********************!*\
  !*** ./src/Root.jsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _store = __webpack_require__(/*! ./store */ "./src/store.js");

var _App = __webpack_require__(/*! ./App */ "./src/App.jsx");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store.store },
    _react2.default.createElement(_App2.default, null)
  );
}; /**
    * Created by Jaison.Jacob on 7/9/2018.
    */


_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById('root'));

/***/ }),

/***/ "./src/actions/iapply.js":
/*!*******************************!*\
  !*** ./src/actions/iapply.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _types = __webpack_require__(/*! ../constants/types */ "./src/constants/types.js");

var _iapplyApps = __webpack_require__(/*! ../constants/iapplyApps */ "./src/constants/iapplyApps.js");

var _home = __webpack_require__(/*! ./testControl/home */ "./src/actions/testControl/home.js");

function setApplyApp(app) {
  // set the app
  if (app && app === _iapplyApps.APPLY_APP_TC) {
    return (0, _home.initializeTc)(app);
  }
  return function (dispatch) {
    // const items = menuConstant[1].content.map(x => ({ ...x, source: LANDING }));
    dispatch({ type: _types.SET_APPLY_APP, app: null });
    // reseting  landing menu
    // dispatch({ type: SET_LANDING_MENU, content: { content: items, context: LANDING } });
  };
}

module.exports = { setApplyApp: setApplyApp };

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Jaison.Jacob on 7/11/2018.
                                                                                                                                                                                                                                                                   */


var _landing = __webpack_require__(/*! ./landing */ "./src/actions/landing.js");

var landingActions = _interopRequireWildcard(_landing);

var _sidebar = __webpack_require__(/*! ./sidebar */ "./src/actions/sidebar.js");

var sidebarActions = _interopRequireWildcard(_sidebar);

var _iapply = __webpack_require__(/*! ./iapply */ "./src/actions/iapply.js");

var iapplyActions = _interopRequireWildcard(_iapply);

var _home = __webpack_require__(/*! ./testControl/home */ "./src/actions/testControl/home.js");

var testControlActions = _interopRequireWildcard(_home);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = _extends({}, landingActions, iapplyActions, sidebarActions, testControlActions);

/***/ }),

/***/ "./src/actions/landing.js":
/*!********************************!*\
  !*** ./src/actions/landing.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// import { SET_LANDING_MENU, SET_SELECTED_LANDING_MENU, SET_MENU } from '../constants/types';
// import { LANDING } from '../constants/iapplyApps';
// import menuConstant from '../constants/menuContent';
// import { manageLandingMenuSelect } from './landingMenu';

// function onLandingMenuSelected(item) {
//   return manageLandingMenuSelect(item);
// }

// function onToggleOptionIcons() {
//   return function (dispatch) {
//     dispatch({ type: TOGGLE_OPT_ICONS });
//   };
// }

// function setLandingMenu(items) {
//   return function(dispatch) {
//     if (items === undefined) {
//       let defaultItems = menuConstant.main.content[1].content.map(x => ({ ...x, source: LANDING }));

//       dispatch({ type: SET_LANDING_MENU, content: { content: defaultItems, context: LANDING } });
//       dispatch({ type: SET_SELECTED_LANDING_MENU, content: defaultItems[0] });
//     } else {
//       dispatch({ type: SET_LANDING_MENU, content: items });
//     }
//   };
// }

// module.exports = { onLandingMenuSelected, setLandingMenu };


/***/ }),

/***/ "./src/actions/sidebar.js":
/*!********************************!*\
  !*** ./src/actions/sidebar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _types = __webpack_require__(/*! ../constants/types */ "./src/constants/types.js");

var _iapply = __webpack_require__(/*! ./iapply */ "./src/actions/iapply.js");

var _menu = __webpack_require__(/*! ../constants/menu */ "./src/constants/menu.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onSideBarMenuSelected(item) {
  return function (dispatch, getState) {
    // remove app when main links are invoked
    dispatch((0, _iapply.setApplyApp)(null));

    //update menu content state
    if (item) {}
    // const state = getState();
    // menu[state.nav.menu.id].selected = item;


    //swtich if iapply
    if (item.id === 7) {
      dispatch({ type: _types.SET_MENU, content: _menu2.default.iapply });
    } else {
      dispatch({ type: _types.SET_SELECTED_MENU, item: item });
      // dispatch({ type: SET_SELECTED_LANDING_MENU, content: item });
    }
  };
}

module.exports = { onSideBarMenuSelected: onSideBarMenuSelected };

/***/ }),

/***/ "./src/actions/testControl/home.js":
/*!*****************************************!*\
  !*** ./src/actions/testControl/home.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types.js");

var _util = __webpack_require__(/*! ../../util */ "./src/util/index.js");

var _iapplyApps = __webpack_require__(/*! ../../constants/iapplyApps */ "./src/constants/iapplyApps.js");

var initialTestControlMenu = {
  id: -1,
  label: 'Program',
  source: _iapplyApps.TC
};

var getId = function getId() {
  return Math.floor(Math.random() * 1000);
};

function setTestControlView(view) {
  return function (dispatch) {
    dispatch({ type: _types.TC_SET_VIEW, content: view });
  };
}

function initializeTc(app) {
  return function (dispatch, getState) {
    dispatch({ type: _types.SET_APPLY_APP, app: app });

    var state = getState();
    var testControl = state.iapply.testControl;
    var programs = testControl.program.programs;


    if (programs.length > 0) {
      // resuscitate from state
      var p = programs.map(function (x) {
        return { id: x.id, label: x.title, source: _iapplyApps.TC };
      });
      dispatch({ type: _types.SET_LANDING_MENU, content: { content: p, context: _iapplyApps.TC } });

      // TODO: get back the last selected item as well.
    } else {
      // setting inital landing menus
      dispatch({ type: _types.SET_LANDING_MENU, content: { content: [initialTestControlMenu], context: _iapplyApps.TC } });
    }
    // setting menus from state

    // setting option buttons
    dispatch({ type: _types.SET_OPT_BTN_LAYOUT, content: _types.TC_OPT_BTN_LAYOUT });

    // setting defaults for TC
    dispatch({ type: _types.TC_APP_INITIALIZE });
  };
}

function saveTcProgram(name, desc) {
  return function (dispatch, getState) {
    var id = getId();
    // call add program
    var state = getState();
    dispatch({ type: _types.TC_ADD_PROGRAM, content: { id: id, title: name, desc: desc, view: 'test' } });

    // call landing menu and set title.
    // if its the first dummy
    if (state.nav.landingMenu.selected.id === -1) {
      dispatch({ type: _types.SET_LANDING_MENU, content: { content: [{ id: id, label: name, source: _iapplyApps.TC }], context: _iapplyApps.TC } });
    } else {
      dispatch({ type: _types.ADD_LANDING_MENU, content: { id: id, label: name, source: _iapplyApps.TC } });
    }
  };
}

function deleteTcProgram() {
  return function (dispatch, getState) {
    var state = getState();
    var _state$iapply$testCon = state.iapply.testControl.program,
        programs = _state$iapply$testCon.programs,
        activeProgram = _state$iapply$testCon.activeProgram;


    var pIdx = programs.map(function (x) {
      return x.id;
    }).indexOf(activeProgram);
    var lIdx = state.nav.landingMenu.content.map(function (x) {
      return x.id;
    }).indexOf(activeProgram);

    dispatch({ type: _types.TC_REMOVE_PROGRAM, idx: pIdx });
    // remove item from  landing menu as well
    dispatch({ type: _types.REMOVE_LANDING_MENU, idx: lIdx });

    // reset landing menu to default and set to initial disabled state
    if (state.nav.landingMenu.content.length === 1) {
      dispatch({ type: _types.SET_LANDING_MENU, content: { content: [initialTestControlMenu], context: _iapplyApps.TC } });
    }

    dispatch({ type: _types.TC_HIDE_DELETE_MODAL });
  };
}

function setProgramView(view) {
  return function (dispatch, getState) {
    var state = getState();
    var program = state.iapply.testControl.program;

    // const active = program.programs.find(x => x.id === program.activeProgram);

    var active = (0, _util.getObjFromArr)(program.programs, program.activeProgram);

    if (active && active.view === view) return function () {};

    dispatch({ type: _types.TC_SET_PROGRAM_VIEW, content: view });
  };
}

module.exports = {
  setTestControlView: setTestControlView,
  saveTcProgram: saveTcProgram,
  deleteTcProgram: deleteTcProgram,
  initializeTc: initializeTc,
  setProgramView: setProgramView
};

/***/ }),

/***/ "./src/components/MainContainer.jsx":
/*!******************************************!*\
  !*** ./src/components/MainContainer.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Jaison.Jacob on 7/13/2018.
                                                                                                                                                                                                                                                                   */


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _Sidebar = __webpack_require__(/*! ./sidebar/Sidebar */ "./src/components/sidebar/Sidebar.jsx");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Landing = __webpack_require__(/*! ./landing/Landing */ "./src/components/landing/Landing.jsx");

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainContainer = function MainContainer(props) {
  var nav = props.nav;
  var displaySideBar = nav.displaySideBar;


  return _react2.default.createElement(
    'div',
    { className: 'main-container' },
    _react2.default.createElement(
      _reactTransitionGroup.Transition,
      { 'in': displaySideBar, timeout: 250 },
      function (status) {
        return _react2.default.createElement(_Sidebar2.default, _extends({ status: status }, props));
      }
    ),
    _react2.default.createElement(_Landing2.default, props)
  );
};

exports.default = MainContainer;

/***/ }),

/***/ "./src/components/content/Container.jsx":
/*!**********************************************!*\
  !*** ./src/components/content/Container.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _IExtract = __webpack_require__(/*! ./IExtract */ "./src/components/content/IExtract.jsx");

var _IExtract2 = _interopRequireDefault(_IExtract);

var _iapply = __webpack_require__(/*! ./iapply */ "./src/components/content/iapply/index.jsx");

var _iapply2 = _interopRequireDefault(_iapply);

var _IModel = __webpack_require__(/*! ./IModel */ "./src/components/content/IModel.jsx");

var _IModel2 = _interopRequireDefault(_IModel);

var _IPlan = __webpack_require__(/*! ./IPlan */ "./src/components/content/IPlan.jsx");

var _IPlan2 = _interopRequireDefault(_IPlan);

var _Empty = __webpack_require__(/*! ./Empty */ "./src/components/content/Empty.jsx");

var _Empty2 = _interopRequireDefault(_Empty);

var _home = __webpack_require__(/*! ./home */ "./src/components/content/home/index.jsx");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var nav = this.props.nav;

      switch (nav.menu.id) {
        case 'main':
          switch (nav.menu.selected.id) {
            case 2:
              return _react2.default.createElement(_home2.default, null);
            case 5:
              return _react2.default.createElement(_IExtract2.default, null);
            case 6:
              return _react2.default.createElement(_IModel2.default, null);
            case 8:
              return _react2.default.createElement(_IPlan2.default, null);
            default:
              return _react2.default.createElement(_home2.default, null);
          }
        case 'iapply':
          return _react2.default.createElement(_iapply2.default, this.props);

        default:
          return null;
      }
    }
  }]);

  return Container;
}(_react2.default.Component);

exports.default = Container;

/***/ }),

/***/ "./src/components/content/Empty.jsx":
/*!******************************************!*\
  !*** ./src/components/content/Empty.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Empty = function Empty() {
  return _react2.default.createElement('div', null);
};
module.exports = Empty;

/***/ }),

/***/ "./src/components/content/IExtract.jsx":
/*!*********************************************!*\
  !*** ./src/components/content/IExtract.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-block text-center' },
          _react2.default.createElement('i', { className: 'fa fa-envelope-open text-c-blue d-block f-40' }),
          _react2.default.createElement(
            'h4',
            { className: 'm-t-20' },
            _react2.default.createElement(
              'span',
              { className: 'text-c-blue' },
              '8.62k'
            ),
            ' Subscribers'
          ),
          _react2.default.createElement(
            'p',
            { className: 'm-b-20' },
            'Your main list is growing'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary btn-sm btn-round' },
            'Manage List'
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

module.exports = Page;

/***/ }),

/***/ "./src/components/content/IModel.jsx":
/*!*******************************************!*\
  !*** ./src/components/content/IModel.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page() {
  return _react2.default.createElement(
    'h1',
    null,
    'IModel'
  );
};
exports.default = Page;

/***/ }),

/***/ "./src/components/content/IPlan.jsx":
/*!******************************************!*\
  !*** ./src/components/content/IPlan.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page() {
  return _react2.default.createElement(
    'h1',
    null,
    'IPlan'
  );
};
exports.default = Page;

/***/ }),

/***/ "./src/components/content/home/HomeContainer.jsx":
/*!*******************************************************!*\
  !*** ./src/components/content/home/HomeContainer.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _aboutEai = __webpack_require__(/*! ./aboutEai */ "./src/components/content/home/aboutEai/index.jsx");

var _aboutEai2 = _interopRequireDefault(_aboutEai);

var _login = __webpack_require__(/*! ./login */ "./src/components/content/home/login/index.jsx");

var _login2 = _interopRequireDefault(_login);

var _IExtractLink = __webpack_require__(/*! ./IExtractLink */ "./src/components/content/home/IExtractLink.jsx");

var _IExtractLink2 = _interopRequireDefault(_IExtractLink);

var _IApplyLink = __webpack_require__(/*! ./IApplyLink */ "./src/components/content/home/IApplyLink.jsx");

var _IApplyLink2 = _interopRequireDefault(_IApplyLink);

var _IModelLink = __webpack_require__(/*! ./IModelLink */ "./src/components/content/home/IModelLink.jsx");

var _IModelLink2 = _interopRequireDefault(_IModelLink);

var _IPlanLink = __webpack_require__(/*! ./IPlanLink */ "./src/components/content/home/IPlanLink.jsx");

var _IPlanLink2 = _interopRequireDefault(_IPlanLink);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");

var _menu = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function actions(dispatch) {
    return {
        handleClick: function handleClick(fromId) {
            return dispatch((0, _actions.onSideBarMenuSelected)((0, _menu.getLink)(fromId)));
        }
    };
}

var HomeContainer = function (_React$Component) {
    _inherits(HomeContainer, _React$Component);

    function HomeContainer() {
        _classCallCheck(this, HomeContainer);

        var _this = _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).call(this));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(HomeContainer, [{
        key: 'handleClick',
        value: function handleClick(fromId) {
            this.props.handleClick(fromId);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-7 col-lg-7' },
                        _react2.default.createElement(_aboutEai2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-5 col-lg-5' },
                        _react2.default.createElement(_login2.default, null)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-3 col-lg-3' },
                        _react2.default.createElement(_IExtractLink2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-3 col-lg-3' },
                        _react2.default.createElement(_IModelLink2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-3 col-lg-3' },
                        _react2.default.createElement(_IApplyLink2.default, { onClick: this.handleClick })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-3 col-lg-3' },
                        _react2.default.createElement(_IPlanLink2.default, null)
                    )
                )
            );
        }
    }]);

    return HomeContainer;
}(_react2.default.Component);

module.exports = (0, _reactRedux.connect)(function () {
    return {};
}, actions)(HomeContainer);

/***/ }),

/***/ "./src/components/content/home/IApplyLink.jsx":
/*!****************************************************!*\
  !*** ./src/components/content/home/IApplyLink.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IApply = function (_React$Component) {
    _inherits(IApply, _React$Component);

    function IApply() {
        _classCallCheck(this, IApply);

        var _this = _possibleConstructorReturn(this, (IApply.__proto__ || Object.getPrototypeOf(IApply)).call(this));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(IApply, [{
        key: "handleClick",
        value: function handleClick() {
            this.props.onClick(7);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "card" },
                _react2.default.createElement(
                    "div",
                    { className: "card-block text-center" },
                    _react2.default.createElement("img", { alt: "avatar", src: __webpack_require__(/*! ../../../../assets/images/avatar-4.jpg */ "./assets/images/avatar-4.jpg"), className: "img-radius" }),
                    _react2.default.createElement(
                        "h4",
                        { className: "m-t-20" },
                        "iApply"
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "m-b-20" },
                        "Your main list is growing"
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "btn btn-info btn-sm btn-round", onClick: this.handleClick },
                        "Enter"
                    )
                )
            );
        }
    }]);

    return IApply;
}(_react2.default.Component);

module.exports = IApply;

/***/ }),

/***/ "./src/components/content/home/IExtractLink.jsx":
/*!******************************************************!*\
  !*** ./src/components/content/home/IExtractLink.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IExtract = function (_React$Component) {
    _inherits(IExtract, _React$Component);

    function IExtract() {
        _classCallCheck(this, IExtract);

        return _possibleConstructorReturn(this, (IExtract.__proto__ || Object.getPrototypeOf(IExtract)).call(this));
    }

    _createClass(IExtract, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "card" },
                _react2.default.createElement(
                    "div",
                    { className: "card-block text-center" },
                    _react2.default.createElement("img", { alt: "avatar", src: __webpack_require__(/*! ../../../../assets/images/avatar-4.jpg */ "./assets/images/avatar-4.jpg"), className: "img-radius" }),
                    _react2.default.createElement(
                        "h4",
                        { className: "m-t-20" },
                        "iExtract"
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "m-b-20" },
                        "Your main list is growing"
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "btn btn-primary btn-sm btn-round" },
                        "Enter"
                    )
                )
            );
        }
    }]);

    return IExtract;
}(_react2.default.Component);

module.exports = IExtract;

/***/ }),

/***/ "./src/components/content/home/IModelLink.jsx":
/*!****************************************************!*\
  !*** ./src/components/content/home/IModelLink.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IModel = function (_React$Component) {
    _inherits(IModel, _React$Component);

    function IModel() {
        _classCallCheck(this, IModel);

        return _possibleConstructorReturn(this, (IModel.__proto__ || Object.getPrototypeOf(IModel)).call(this));
    }

    _createClass(IModel, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "card" },
                _react2.default.createElement(
                    "div",
                    { className: "card-block text-center" },
                    _react2.default.createElement("img", { alt: "avatar", src: __webpack_require__(/*! ../../../../assets/images/avatar-4.jpg */ "./assets/images/avatar-4.jpg"), className: "img-radius" }),
                    _react2.default.createElement(
                        "h4",
                        { className: "m-t-20" },
                        "iModel"
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "m-b-20" },
                        "Your main list is growing"
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "btn btn-success btn-sm btn-round" },
                        "Enter"
                    )
                )
            );
        }
    }]);

    return IModel;
}(_react2.default.Component);

module.exports = IModel;

/***/ }),

/***/ "./src/components/content/home/IPlanLink.jsx":
/*!***************************************************!*\
  !*** ./src/components/content/home/IPlanLink.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IPlan = function (_React$Component) {
    _inherits(IPlan, _React$Component);

    function IPlan() {
        _classCallCheck(this, IPlan);

        return _possibleConstructorReturn(this, (IPlan.__proto__ || Object.getPrototypeOf(IPlan)).call(this));
    }

    _createClass(IPlan, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "card" },
                _react2.default.createElement(
                    "div",
                    { className: "card-block text-center" },
                    _react2.default.createElement("img", { alt: "avatar", src: __webpack_require__(/*! ../../../../assets/images/avatar-4.jpg */ "./assets/images/avatar-4.jpg"), className: "img-radius" }),
                    _react2.default.createElement(
                        "h4",
                        { className: "m-t-20" },
                        "iPlan"
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "m-b-20" },
                        "Your main list is growing"
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "btn btn-warning btn-sm btn-round" },
                        "Enter"
                    )
                )
            );
        }
    }]);

    return IPlan;
}(_react2.default.Component);

module.exports = IPlan;

/***/ }),

/***/ "./src/components/content/home/aboutEai/index.jsx":
/*!********************************************************!*\
  !*** ./src/components/content/home/aboutEai/index.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (_Component) {
    _inherits(AboutEai, _Component);

    function AboutEai() {
        _classCallCheck(this, AboutEai);

        return _possibleConstructorReturn(this, (AboutEai.__proto__ || Object.getPrototypeOf(AboutEai)).apply(this, arguments));
    }

    _createClass(AboutEai, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "card" },
                _react2.default.createElement(
                    "div",
                    { className: "card-body" },
                    _react2.default.createElement(
                        "div",
                        { className: "usre-image" },
                        _react2.default.createElement("img", { src: "../../../../../assets/images/gold-coast-nature.jpg", alt: "User-Profile-Image", style: { height: '100%', width: '100%' } })
                    ),
                    _react2.default.createElement("hr", null),
                    _react2.default.createElement(
                        "h6",
                        { className: "f-w-600 m-t-25 m-b-10" },
                        "Enterprise Analytics Intelligence"
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "text-muted m-t-15" },
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    )
                )
            );
        }
    }]);

    return AboutEai;
}(_react.Component);

/***/ }),

/***/ "./src/components/content/home/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/content/home/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HomeContainer = __webpack_require__(/*! ./HomeContainer */ "./src/components/content/home/HomeContainer.jsx");

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _HomeContainer2.default;

/***/ }),

/***/ "./src/components/content/home/login/index.jsx":
/*!*****************************************************!*\
  !*** ./src/components/content/home/login/index.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (_Component) {
    _inherits(AboutEai, _Component);

    function AboutEai() {
        _classCallCheck(this, AboutEai);

        return _possibleConstructorReturn(this, (AboutEai.__proto__ || Object.getPrototypeOf(AboutEai)).apply(this, arguments));
    }

    _createClass(AboutEai, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "card" },
                _react2.default.createElement(
                    "div",
                    { className: "card-header" },
                    _react2.default.createElement(
                        "h3",
                        { className: "text-left txt-primary" },
                        "Sign In"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "card-body" },
                    _react2.default.createElement(
                        "form",
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: "input-group" },
                            _react2.default.createElement("input", { type: "email", className: "form-control", placeholder: "Your Email Address" }),
                            _react2.default.createElement("span", { className: "md-line" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "input-group" },
                            _react2.default.createElement("input", { type: "password", className: "form-control", placeholder: "Password" }),
                            _react2.default.createElement("span", { className: "md-line" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "row m-t-25 text-left" },
                            _react2.default.createElement(
                                "div",
                                { className: "col-12" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "checkbox-fade fade-in-primary d-" },
                                    _react2.default.createElement(
                                        "label",
                                        null,
                                        _react2.default.createElement("input", { type: "checkbox", value: "" }),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "cr" },
                                            _react2.default.createElement("i", { className: "cr-icon icofont icofont-ui-check txt-primary" })
                                        ),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "text-inverse" },
                                            "Remember me"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "forgot-phone text-right f-right" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "auth-reset-password.html", className: "text-right f-w-600 text-inverse" },
                                        " Forgot Password?"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "row m-t-30" },
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-12" },
                                _react2.default.createElement(
                                    "button",
                                    { type: "button", className: "btn btn-primary btn-md btn-block waves-effect text-center m-b-20" },
                                    "Sign in"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AboutEai;
}(_react.Component);

/***/ }),

/***/ "./src/components/content/iapply/home/Card.jsx":
/*!*****************************************************!*\
  !*** ./src/components/content/iapply/home/Card.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _EnterButton = __webpack_require__(/*! ./EnterButton */ "./src/components/content/iapply/home/EnterButton.jsx");

var _EnterButton2 = _interopRequireDefault(_EnterButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = exports.Card = function Card(props) {
  return _react2.default.createElement(
    'div',
    { className: 'card widget-statstic-card borderless-card' },
    _react2.default.createElement(
      'div',
      { className: 'card-header' },
      _react2.default.createElement(
        'div',
        { className: 'card-header-left' },
        _react2.default.createElement(
          'h5',
          null,
          props.title || 'Demand Driver'
        ),
        _react2.default.createElement(
          'p',
          { className: 'p-t-10 m-b-0 text-muted' },
          props.desc || 'Description of Demand Driver'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'card-block' },
      _react2.default.createElement('i', { className: 'fa fa-calendar st-icon bg-primary' }),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12 col-xl-12', style: { whiteSpace: 'nowrap' } },
          _react2.default.createElement(_EnterButton2.default, props),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-sm btn-grd-info' },
            'Learn More'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-sm btn-grd-warning' },
            'Update'
          )
        )
      )
    )
  );
};

/***/ }),

/***/ "./src/components/content/iapply/home/EnterButton.jsx":
/*!************************************************************!*\
  !*** ./src/components/content/iapply/home/EnterButton.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

    _this.onEnter = _this.onEnter.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: "onEnter",
    value: function onEnter() {
      this.props.onEnter(this.props.app || null);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "button",
        { type: "button", className: "btn btn-sm btn-grd-success", onClick: this.onEnter, onKeyPress: this.onEnter },
        "Enter"
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;

/***/ }),

/***/ "./src/components/content/iapply/home/IApply.jsx":
/*!*******************************************************!*\
  !*** ./src/components/content/iapply/home/IApply.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _accordian = __webpack_require__(/*! ../../../ui/accordian */ "./src/components/ui/accordian/index.jsx");

var _accordian2 = _interopRequireDefault(_accordian);

var _Card = __webpack_require__(/*! ./Card */ "./src/components/content/iapply/home/Card.jsx");

var _iapplyApps = __webpack_require__(/*! ../../../../constants/iapplyApps */ "./src/constants/iapplyApps.js");

var _actions = __webpack_require__(/*! ../../../../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.onEnter = _this.onEnter.bind(_this);
    return _this;
  }

  _createClass(Page, [{
    key: 'onEnter',
    value: function onEnter(app) {
      this.props.onEnter(app);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h5',
          null,
          'iApply'
        ),
        _react2.default.createElement(
          'div',
          { className: 'm-t-25' },
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Marketing Effectiveness' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Customer Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Pricing Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Market Testing' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { title: 'Test & Control', onEnter: this.onEnter, app: _iapplyApps.APPLY_APP_TC })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { title: 'New Product Launch', onEnter: this.onEnter, app: _iapplyApps.APPLY_APP_NPL })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Operational Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xl-4 col-md-6 col-sm-12' },
                _react2.default.createElement(_Card.Card, { onEnter: this.onEnter })
              )
            )
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

function actions(dispatch) {
  return {
    onEnter: function onEnter(app) {
      return dispatch((0, _actions.setApplyApp)(app));
    }
  };
}

exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, actions)(Page);

/***/ }),

/***/ "./src/components/content/iapply/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/content/iapply/index.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _IApply = __webpack_require__(/*! ./home/IApply */ "./src/components/content/iapply/home/IApply.jsx");

var _IApply2 = _interopRequireDefault(_IApply);

var _testControl = __webpack_require__(/*! ./testControl */ "./src/components/content/iapply/testControl/index.jsx");

var _testControl2 = _interopRequireDefault(_testControl);

var _iapplyApps = __webpack_require__(/*! ../../../constants/iapplyApps */ "./src/constants/iapplyApps.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var iapply = this.props.iapply;


      switch (iapply.common.app) {
        case _iapplyApps.APPLY_APP_TC:
          return _react2.default.createElement(_testControl2.default, this.props);
        default:
          return _react2.default.createElement(_IApply2.default, null);
      }
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ "./src/components/content/iapply/testControl/DeleteProgramModal.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/content/iapply/testControl/DeleteProgramModal.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

_reactModal2.default.setAppElement(document.getElementById('root'));

var DeleteModal = function (_React$Component) {
  _inherits(DeleteModal, _React$Component);

  function DeleteModal(props) {
    _classCallCheck(this, DeleteModal);

    var _this = _possibleConstructorReturn(this, (DeleteModal.__proto__ || Object.getPrototypeOf(DeleteModal)).call(this, props));

    _this.state = {
      modalIsOpen: props.isModalOpen
    };

    _this.handleYes = _this.handleYes.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  _createClass(DeleteModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nxt) {
      var modalIsOpen = this.state.modalIsOpen;

      if (modalIsOpen !== nxt.isModalOpen) {
        this.setState({
          modalIsOpen: nxt.isModalOpen
        });
      }
    }
  }, {
    key: 'handleYes',
    value: function handleYes() {
      this.props.handleDelete();
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.props.handleCloseModal();
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title;

      return _react2.default.createElement(
        _reactModal2.default,
        {
          isOpen: this.state.modalIsOpen,
          onAfterOpen: this.afterOpenModal,
          onRequestClose: this.closeModal,
          style: customStyles,
          contentLabel: 'Delete program' },
        _react2.default.createElement(
          'div',
          { style: { position: 'absolute', top: 0, right: 5 } },
          _react2.default.createElement('i', { className: 'fa fa-times close-card', onClick: this.closeModal, onKeyPress: this.closeModal })
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-title' },
          'Delete program'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Are you sure you would like to delete ',
            _react2.default.createElement(
              'b',
              null,
              title
            ),
            '? It will no longer be available to any user.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'btn-group', style: { float: 'right' } },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-outline-primary btn-sm', onClick: this.handleYes },
            'Yes'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-outline-primary btn-sm', onClick: this.handleClose },
            'Cancel'
          )
        )
      );
    }
  }]);

  return DeleteModal;
}(_react2.default.Component);

exports.default = DeleteModal;

/***/ }),

/***/ "./src/components/content/iapply/testControl/NewProgram.jsx":
/*!******************************************************************!*\
  !*** ./src/components/content/iapply/testControl/NewProgram.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = __webpack_require__(/*! ../../../../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewProgram = function (_React$Component) {
  _inherits(NewProgram, _React$Component);

  function NewProgram() {
    _classCallCheck(this, NewProgram);

    var _this = _possibleConstructorReturn(this, (NewProgram.__proto__ || Object.getPrototypeOf(NewProgram)).call(this));

    _this.state = {
      title: '',
      desc: ''
    };
    _this.onTitleChange = _this.onTitleChange.bind(_this);
    _this.onDescChange = _this.onDescChange.bind(_this);
    _this.onCancel = _this.onCancel.bind(_this);
    _this.onSave = _this.onSave.bind(_this);

    _this.input = _react2.default.createRef();
    return _this;
  }

  _createClass(NewProgram, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.input.current.focus();
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {
      this.props.onCancel(null);
    }
  }, {
    key: 'onSave',
    value: function onSave() {
      var _state = this.state,
          title = _state.title,
          desc = _state.desc;

      this.props.onSave(title, desc);
    }
  }, {
    key: 'onTitleChange',
    value: function onTitleChange(e) {
      this.setState({
        title: e.target.value
      });
    }
  }, {
    key: 'onDescChange',
    value: function onDescChange(e) {
      this.setState({
        desc: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          title = _state2.title,
          desc = _state2.desc;

      var saveBtn = (0, _classnames2.default)({
        'btn btn-primary btn-sm': true,
        'btn-disabled': title === ''
      });
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row margin-bottom' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4 col-xl-4' },
            _react2.default.createElement(
              'h5',
              null,
              'New Program'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control form-control-sm',
                placeholder: 'Name',
                onChange: this.onTitleChange,
                value: title,
                ref: this.input
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement('textarea', {
                rows: '4',
                cols: '50',
                placeholder: 'Description',
                className: 'form-control form-control-sm',
                onChange: this.onDescChange,
                value: desc
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'btn-group' },
              _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  className: saveBtn,
                  style: { marginRight: '1em' },
                  onClick: this.onSave,
                  disabled: title === '' },
                'Save'
              ),
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-default btn-sm', onClick: this.onCancel },
                'Cancel'
              )
            )
          )
        )
      );
    }
  }]);

  return NewProgram;
}(_react2.default.Component);

function actions(dispatch) {
  return {
    onCancel: function onCancel() {
      return dispatch((0, _actions.setTestControlView)(null));
    },
    onSave: function onSave(name, desc) {
      dispatch((0, _actions.saveTcProgram)(name, desc));
    }
  };
}
exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, actions)(NewProgram);

/***/ }),

/***/ "./src/components/content/iapply/testControl/Program.jsx":
/*!***************************************************************!*\
  !*** ./src/components/content/iapply/testControl/Program.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _tests = __webpack_require__(/*! ./subContainers/tests */ "./src/components/content/iapply/testControl/subContainers/tests/index.jsx");

var _tests2 = _interopRequireDefault(_tests);

var _measures = __webpack_require__(/*! ./subContainers/measures */ "./src/components/content/iapply/testControl/subContainers/measures/index.jsx");

var _measures2 = _interopRequireDefault(_measures);

var _util = __webpack_require__(/*! ../../../../util */ "./src/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Program = function (_Component) {
  _inherits(Program, _Component);

  function Program() {
    _classCallCheck(this, Program);

    return _possibleConstructorReturn(this, (Program.__proto__ || Object.getPrototypeOf(Program)).apply(this, arguments));
  }

  _createClass(Program, [{
    key: 'renderSubview',
    value: function renderSubview(selectedProgram) {
      switch (selectedProgram.view.toLowerCase()) {
        case 'test':
          return _react2.default.createElement(_tests2.default, this.props);
        case 'measures':
          return _react2.default.createElement(_measures2.default, null);
        default:
          return _react2.default.createElement(_tests2.default, null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          programs = _props.programs,
          activeProgram = _props.activeProgram;

      var selectedProgram = (0, _util.getObjFromArr)(programs, activeProgram);

      // const selectedProgram = programs.find(x => x.id === activeProgram);
      return _react2.default.createElement(
        'div',
        null,
        this.renderSubview(selectedProgram)
      );
    }
  }]);

  return Program;
}(_react.Component);

exports.default = Program;

/***/ }),

/***/ "./src/components/content/iapply/testControl/index.jsx":
/*!*************************************************************!*\
  !*** ./src/components/content/iapply/testControl/index.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _NewProgram = __webpack_require__(/*! ./NewProgram */ "./src/components/content/iapply/testControl/NewProgram.jsx");

var _NewProgram2 = _interopRequireDefault(_NewProgram);

var _DeleteProgramModal = __webpack_require__(/*! ./DeleteProgramModal */ "./src/components/content/iapply/testControl/DeleteProgramModal.jsx");

var _DeleteProgramModal2 = _interopRequireDefault(_DeleteProgramModal);

var _types = __webpack_require__(/*! ../../../../constants/types */ "./src/constants/types.js");

var _actions = __webpack_require__(/*! ../../../../actions */ "./src/actions/index.js");

var _Program = __webpack_require__(/*! ./Program */ "./src/components/content/iapply/testControl/Program.jsx");

var _Program2 = _interopRequireDefault(_Program);

var _util = __webpack_require__(/*! ../../../../util */ "./src/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TC = function TC() {
  return _react2.default.createElement('div', null);
};

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      height: 0
    };

    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    _this.card = _react2.default.createRef();
    return _this;
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      var rect = this.card.current.getBoundingClientRect();
      this.setState({ height: window.innerHeight - rect.top - 10 });
    }
  }, {
    key: 'renderInnerContent',
    value: function renderInnerContent() {
      var iapply = this.props.iapply;
      var testControl = iapply.testControl;

      switch (testControl.view) {
        case 'program':
          return _react2.default.createElement(_Program2.default, testControl.program);
        case 'newView':
          return _react2.default.createElement(_NewProgram2.default, iapply);
        default:
          return null;
      }
    }
  }, {
    key: 'renderDeleteModal',
    value: function renderDeleteModal() {
      var iapply = this.props.iapply;
      var testControl = iapply.testControl;
      var _testControl$program = testControl.program,
          programs = _testControl$program.programs,
          activeProgram = _testControl$program.activeProgram;


      var selectedProg = (0, _util.getObjFromArr)(programs, activeProgram);

      if (selectedProg === null) return null;
      // const selectedProg = activeProgram === -1
      //   ? ''
      //   : programs.find(x => x.id === activeProgram);

      return _react2.default.createElement(_DeleteProgramModal2.default, {
        isModalOpen: testControl.showDeleteProgram,
        title: selectedProg && selectedProg.title ? selectedProg.title : '',
        handleCloseModal: this.props.handleCloseDeleteModal,
        handleDelete: this.props.handleTcDelProgram
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            className: 'card nohover',
            ref: this.card,
            style: { height: this.state.height, transitionProperty: 'none', marginBottom: '0px', paddingTop: '15px' } },
          this.renderInnerContent()
        ),
        this.renderDeleteModal()
      );
    }
  }]);

  return Index;
}(_react.Component);

function actions(dispatch) {
  return {
    handleCloseDeleteModal: function handleCloseDeleteModal() {
      return dispatch({ type: _types.TC_HIDE_DELETE_MODAL });
    },
    handleTcDelProgram: function handleTcDelProgram() {
      return dispatch((0, _actions.deleteTcProgram)());
    }
  };
}
exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, actions)(Index);

/***/ }),

/***/ "./src/components/content/iapply/testControl/subContainers/measures/Container.jsx":
/*!****************************************************************************************!*\
  !*** ./src/components/content/iapply/testControl/subContainers/measures/Container.jsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container-fluid test-control" },
        _react2.default.createElement(
          "div",
          { className: "row spacedRow" },
          _react2.default.createElement(
            "div",
            { className: "col-md-12 col-lg-12" },
            _react2.default.createElement(
              "h5",
              { style: { marginBottom: '0px' } },
              "Measures"
            )
          )
        )
      );
    }
  }]);

  return Container;
}(_react2.default.Component);

exports.default = Container;

/***/ }),

/***/ "./src/components/content/iapply/testControl/subContainers/measures/index.jsx":
/*!************************************************************************************!*\
  !*** ./src/components/content/iapply/testControl/subContainers/measures/index.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Container = __webpack_require__(/*! ./Container */ "./src/components/content/iapply/testControl/subContainers/measures/Container.jsx");

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_Container2.default, props);
};

/***/ }),

/***/ "./src/components/content/iapply/testControl/subContainers/tests/Container.jsx":
/*!*************************************************************************************!*\
  !*** ./src/components/content/iapply/testControl/subContainers/tests/Container.jsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(/*! ./Tabs */ "./src/components/content/iapply/testControl/subContainers/tests/Tabs.jsx");

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid test-control' },
        _react2.default.createElement(
          'div',
          { className: 'row spacedRow' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-12' },
            _react2.default.createElement(
              'h5',
              { style: { marginBottom: '0px' } },
              'Tests'
            )
          )
        ),
        _react2.default.createElement(_Tabs2.default, null)
      );
    }
  }]);

  return Container;
}(_react2.default.Component);

exports.default = Container;

/***/ }),

/***/ "./src/components/content/iapply/testControl/subContainers/tests/Tabs.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/content/iapply/testControl/subContainers/tests/Tabs.jsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Table = __webpack_require__(/*! ./table/Table */ "./src/components/content/iapply/testControl/subContainers/tests/table/Table.jsx");

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function Link(_ref) {
  var title = _ref.title,
      isActive = _ref.isActive,
      handleOnClick = _ref.handleOnClick,
      idx = _ref.idx;

  var cx = (0, _classnames2.default)({
    'nav-link': true,
    active: isActive
  });
  return _react2.default.createElement(
    'li',
    { className: 'nav-item', onClick: function onClick() {
        return handleOnClick(idx);
      } },
    _react2.default.createElement(
      'span',
      { className: cx, role: 'tab' },
      title
    )
  );
};

var links = ['Tests', 'Analysis', 'Compare'];

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

    _this.state = {
      active: 0
    };

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    return _this;
  }

  _createClass(Tabs, [{
    key: 'handleOnClick',
    value: function handleOnClick(idx) {
      this.setState({
        active: idx
      });
    }
  }, {
    key: 'renderViews',
    value: function renderViews() {
      switch (this.state.active) {
        case 0:
          return _react2.default.createElement(_Table2.default, null);
        default:
          return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row spacedRow' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-12' },
            _react2.default.createElement(
              'ul',
              { className: 'nav nav-tabs  tabs', role: 'tablist' },
              links.map(function (l, i) {
                return _react2.default.createElement(Link, { key: i, idx: i, title: l, isActive: i === _this2.state.active, handleOnClick: _this2.handleOnClick });
              })
            )
          )
        ),
        this.renderViews()
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

exports.default = Tabs;

/***/ }),

/***/ "./src/components/content/iapply/testControl/subContainers/tests/index.jsx":
/*!*********************************************************************************!*\
  !*** ./src/components/content/iapply/testControl/subContainers/tests/index.jsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Container = __webpack_require__(/*! ./Container */ "./src/components/content/iapply/testControl/subContainers/tests/Container.jsx");

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_Container2.default, props);
};

/***/ }),

/***/ "./src/components/content/iapply/testControl/subContainers/tests/table/Table.jsx":
/*!***************************************************************************************!*\
  !*** ./src/components/content/iapply/testControl/subContainers/tests/table/Table.jsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _TableHeader = __webpack_require__(/*! ./TableHeader */ "./src/components/content/iapply/testControl/subContainers/tests/table/TableHeader.jsx");

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableFooter = __webpack_require__(/*! ./TableFooter */ "./src/components/content/iapply/testControl/subContainers/tests/table/TableFooter.jsx");

var _TableFooter2 = _interopRequireDefault(_TableFooter);

var _TableBody = __webpack_require__(/*! ./TableBody */ "./src/components/content/iapply/testControl/subContainers/tests/table/TableBody.jsx");

var _TableBody2 = _interopRequireDefault(_TableBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'dataTables_length' },
        _react2.default.createElement(_TableHeader2.default, null),
        _react2.default.createElement(_TableBody2.default, null),
        _react2.default.createElement(_TableFooter2.default, null)
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

exports.default = Table;

/***/ }),

/***/ "./src/components/content/iapply/testControl/subContainers/tests/table/TableBody.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/components/content/iapply/testControl/subContainers/tests/table/TableBody.jsx ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
  }

  _createClass(Body, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-xs-12 col-sm-12" },
          _react2.default.createElement(
            "table",
            { id: "simpletable", className: "table table-bordered table-hover nowrap dataTable" },
            _react2.default.createElement(
              "thead",
              null,
              _react2.default.createElement(
                "tr",
                { role: "row" },
                _react2.default.createElement(
                  "th",
                  {
                    className: "sorting_asc",
                    tabIndex: "0",
                    "aria-controls": "simpletable",
                    rowSpan: "1",
                    colSpan: "1",
                    "aria-sort": "ascending" },
                  "Test"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "sorting", tabIndex: "0", "aria-controls": "simpletable", rowSpan: "1", colSpan: "1" },
                  "Access"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "sorting", tabIndex: "0", "aria-controls": "simpletable", rowSpan: "1", colSpan: "1" },
                  "Primary Metric"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "sorting", tabIndex: "0", "aria-controls": "simpletable", rowSpan: "1", colSpan: "1" },
                  "Period"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "sorting", tabIndex: "0", "aria-controls": "simpletable", rowSpan: "1", colSpan: "1" },
                  "Test Stores"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "sorting", tabIndex: "0", "aria-controls": "simpletable", rowSpan: "1", colSpan: "1" },
                  "Average Controls"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "sorting", tabIndex: "0", "aria-controls": "simpletable", rowSpan: "1", colSpan: "1" },
                  "Last Run Date"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "sorting", tabIndex: "0", "aria-controls": "simpletable", rowSpan: "1", colSpan: "1" },
                  "Created By"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "sorting", tabIndex: "0", "aria-controls": "simpletable", rowSpan: "1", colSpan: "1" },
                  "Last Modified By"
                )
              )
            ),
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                { role: "row" },
                _react2.default.createElement(
                  "td",
                  { className: "sorting_1" },
                  "Airi Satou"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "Accountant"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "Tokyo"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "33"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "2008/11/28"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                )
              ),
              _react2.default.createElement(
                "tr",
                { role: "row" },
                _react2.default.createElement(
                  "td",
                  { className: "sorting_1" },
                  "Ashton Cox"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "Junior Technical Author"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "San Francisco"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "66"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "2009/01/12"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$86,000"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                )
              ),
              _react2.default.createElement(
                "tr",
                { role: "row" },
                _react2.default.createElement(
                  "td",
                  { className: "sorting_1" },
                  "Bradley Greer"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "Software Engineer"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "London"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "41"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "2012/10/13"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$132,000"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                )
              ),
              _react2.default.createElement(
                "tr",
                { role: "row" },
                _react2.default.createElement(
                  "td",
                  { className: "sorting_1" },
                  "Brielle Williamson"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "Integration Specialist"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "New York"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "61"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "2012/12/02"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$372,000"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                )
              ),
              _react2.default.createElement(
                "tr",
                { role: "row" },
                _react2.default.createElement(
                  "td",
                  { className: "sorting_1" },
                  "Cedric Kelly"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "Senior Javascript Developer"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "Edinburgh"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "22"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "2012/03/29"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$433,060"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                )
              ),
              _react2.default.createElement(
                "tr",
                { role: "row" },
                _react2.default.createElement(
                  "td",
                  { className: "sorting_1" },
                  "Charde Marshall"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "Regional Director"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "San Francisco"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "36"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "2008/10/16"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$470,600"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  "$162,700"
                )
              )
            ),
            _react2.default.createElement(
              "tfoot",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "th",
                  { rowSpan: "1", colSpan: "1" },
                  "Test"
                ),
                _react2.default.createElement(
                  "th",
                  { rowSpan: "1", colSpan: "1" },
                  "Access"
                ),
                _react2.default.createElement(
                  "th",
                  { rowSpan: "1", colSpan: "1" },
                  "Primary Metric"
                ),
                _react2.default.createElement(
                  "th",
                  { rowSpan: "1", colSpan: "1" },
                  "Period"
                ),
                _react2.default.createElement(
                  "th",
                  { rowSpan: "1", colSpan: "1" },
                  "Test Stores"
                ),
                _react2.default.createElement(
                  "th",
                  { rowSpan: "1", colSpan: "1" },
                  "Average Controls"
                ),
                _react2.default.createElement(
                  "th",
                  { rowSpan: "1", colSpan: "1" },
                  "Last Run Date"
                ),
                _react2.default.createElement(
                  "th",
                  { rowSpan: "1", colSpan: "1" },
                  "Created By"
                ),
                _react2.default.createElement(
                  "th",
                  { rowSpan: "1", colSpan: "1" },
                  "Last Modified By"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Body;
}(_react2.default.Component);

exports.default = Body;

/***/ }),

/***/ "./src/components/content/iapply/testControl/subContainers/tests/table/TableFooter.jsx":
/*!*********************************************************************************************!*\
  !*** ./src/components/content/iapply/testControl/subContainers/tests/table/TableFooter.jsx ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-xs-12 col-sm-12 col-md-5" },
          _react2.default.createElement(
            "div",
            { className: "dataTables_info" },
            "Showing 1 to 10 of 57 entries"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-xs-12 col-sm-12 col-md-7" },
          _react2.default.createElement(
            "div",
            { className: "dataTables_paginate paging_simple_numbers" },
            _react2.default.createElement(
              "ul",
              { className: "pagination" },
              _react2.default.createElement(
                "li",
                { className: "paginate_button page-item previous disabled" },
                _react2.default.createElement(
                  "a",
                  { className: "page-link" },
                  "Previous"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "paginate_button page-item active" },
                _react2.default.createElement(
                  "a",
                  { className: "page-link" },
                  "1"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "paginate_button page-item " },
                _react2.default.createElement(
                  "a",
                  { className: "page-link" },
                  "2"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "paginate_button page-item " },
                _react2.default.createElement(
                  "a",
                  { className: "page-link" },
                  "3"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "paginate_button page-item " },
                _react2.default.createElement(
                  "a",
                  { className: "page-link" },
                  "4"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "paginate_button page-item " },
                _react2.default.createElement(
                  "a",
                  { className: "page-link" },
                  "5"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "paginate_button page-item " },
                _react2.default.createElement(
                  "a",
                  { className: "page-link" },
                  "6"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "paginate_button page-item next" },
                _react2.default.createElement(
                  "a",
                  { className: "page-link" },
                  "Next"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),

/***/ "./src/components/content/iapply/testControl/subContainers/tests/table/TableHeader.jsx":
/*!*********************************************************************************************!*\
  !*** ./src/components/content/iapply/testControl/subContainers/tests/table/TableHeader.jsx ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "row justify-content-between spacedRow" },
        _react2.default.createElement(
          "div",
          { className: "col-md-8 col-xl-8" },
          _react2.default.createElement(
            "label",
            null,
            "Show",
            ' ',
            _react2.default.createElement(
              "select",
              { name: "simpletable_length", className: "form-control input-sm" },
              _react2.default.createElement(
                "option",
                { value: "10" },
                "10"
              ),
              _react2.default.createElement(
                "option",
                { value: "25" },
                "25"
              ),
              _react2.default.createElement(
                "option",
                { value: "50" },
                "50"
              ),
              _react2.default.createElement(
                "option",
                { value: "100" },
                "100"
              )
            ),
            ' ',
            "entries"
          ),
          _react2.default.createElement(
            "label",
            { style: { marginLeft: '10px' } },
            "Search: ",
            _react2.default.createElement("input", { type: "search", className: "form-control input-sm", placeholder: "", "aria-controls": "simpletable" })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-4 col-xl-4 padded-buttons", style: { textAlign: 'right' } },
          _react2.default.createElement(
            "button",
            { className: "btn btn-grd-primary btn-sm" },
            "Create"
          ),
          _react2.default.createElement(
            "button",
            { className: "btn btn-grd-success btn-sm" },
            "Copy"
          ),
          _react2.default.createElement(
            "button",
            { className: "btn btn-grd-info btn-sm" },
            "Combine"
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ "./src/components/landing/Landing.jsx":
/*!********************************************!*\
  !*** ./src/components/landing/Landing.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _TabContainer = __webpack_require__(/*! ./nav/TabContainer */ "./src/components/landing/nav/TabContainer.jsx");

var _TabContainer2 = _interopRequireDefault(_TabContainer);

var _Container = __webpack_require__(/*! ../content/Container */ "./src/components/content/Container.jsx");

var _Container2 = _interopRequireDefault(_Container);

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import OptionButtons from '../optionButtons';

// function actions(dispatch) {
//   return {
//     setLandingMenu: () => dispatch(setLandingMenu()),
//   };
// }

var Landing = function (_React$Component) {
  _inherits(Landing, _React$Component);

  function Landing(props) {
    _classCallCheck(this, Landing);

    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));

    _this.state = { height: 0 };
    _this.resizeTriggered = _this.resizeTriggered.bind(_this);
    return _this;
  }

  _createClass(Landing, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.resizeTriggered);
      this.resizeTriggered();
      // this.props.setLandingMenu();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeTriggered);
    }
  }, {
    key: 'resizeTriggered',
    value: function resizeTriggered() {
      var w = window;
      var d = document;
      var e = d.documentElement;
      var g = d.getElementsByTagName('body')[0];
      var y = w.innerHeight || e.clientHeight || g.clientHeight;
      this.setState({
        height: y - 76
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var nav = this.props.nav;
      var height = this.state.height;

      return _react2.default.createElement(
        'div',
        {
          className: 'landing-content',
          style: { marginLeft: nav.displaySideBar && !nav.isSmallDevice ? '255px' : '0px' } },
        _react2.default.createElement(
          'div',
          { className: 'landing-inner-content' },
          _react2.default.createElement(
            'div',
            { className: 'main-body' },
            _react2.default.createElement(
              'div',
              { className: 'page-wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xl-12' },
                  _react2.default.createElement(_Container2.default, this.props)
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Landing;
}(_react2.default.Component);

module.exports = Landing;
// export default connect(
//   () => ({}),
//   actions
// )(Landing);

/***/ }),

/***/ "./src/components/landing/nav/Tab.jsx":
/*!********************************************!*\
  !*** ./src/components/landing/nav/Tab.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab(props) {
    _classCallCheck(this, Tab);

    var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Tab, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          handleClick = _props.handleClick,
          item = _props.item;

      handleClick(item);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          item = _props2.item,
          active = _props2.active;

      var c = (0, _classnames2.default)({
        'nav-link': true,
        active: active
      });
      return _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          'a',
          { className: c, onClick: this.handleClick, onKeyDown: this.handleClick },
          item.label
        ),
        _react2.default.createElement('div', { className: 'slide' })
      );
    }
  }]);

  return Tab;
}(_react2.default.Component);

exports.default = Tab;

/***/ }),

/***/ "./src/components/landing/nav/TabContainer.jsx":
/*!*****************************************************!*\
  !*** ./src/components/landing/nav/TabContainer.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _Tabs = __webpack_require__(/*! ./Tabs */ "./src/components/landing/nav/Tabs.jsx");

var _Tabs2 = _interopRequireDefault(_Tabs);

var _actions = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import CollapseIcon from './CollapseIcon';
// import OptionButtonContainer from './OptionButtonContainer';

function actions(dispatch) {
  return {
    onMenuSelected: function onMenuSelected(item) {
      return dispatch((0, _actions.onLandingMenuSelected)(item));
    }
  };
}

var TabContainer = function (_React$Component) {
  _inherits(TabContainer, _React$Component);

  function TabContainer(props) {
    _classCallCheck(this, TabContainer);

    var _this = _possibleConstructorReturn(this, (TabContainer.__proto__ || Object.getPrototypeOf(TabContainer)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(TabContainer, [{
    key: 'handleClick',
    value: function handleClick(item) {
      var onMenuSelected = this.props.onMenuSelected;

      onMenuSelected(item);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row', style: { position: 'relative', marginBottom: '15px' } },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-xl-12' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Tabs2.default, _extends({ handleClick: this.handleClick }, this.props))
            )
          )
        )
      );
    }
  }]);

  return TabContainer;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, actions)(TabContainer);

/***/ }),

/***/ "./src/components/landing/nav/Tabs.jsx":
/*!*********************************************!*\
  !*** ./src/components/landing/nav/Tabs.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Tab = __webpack_require__(/*! ./Tab */ "./src/components/landing/nav/Tab.jsx");

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Tabs, [{
    key: 'handleClick',
    value: function handleClick(i) {
      var handleClick = this.props.handleClick;

      handleClick(i);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var nav = this.props.nav;

      return _react2.default.createElement(
        'ul',
        { className: 'nav nav-tabs md-tabs' },
        nav.landingMenu.content.map(function (m, i) {
          return _react2.default.createElement(_Tab2.default, { item: m, active: nav.landingMenu.selected.id === m.id, key: i, handleClick: _this2.handleClick });
        })
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

exports.default = Tabs;

/***/ }),

/***/ "./src/components/nav/FullScreen.jsx":
/*!*******************************************!*\
  !*** ./src/components/nav/FullScreen.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toggleFullScreen() {
  if (!document.fullscreenElement && // alternative standard method
  !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
} /**
   * Created by Jaison.Jacob on 7/11/2018.
   */


var NavLeft = function NavLeft() {
  return _react2.default.createElement(
    "li",
    null,
    _react2.default.createElement(
      "a",
      { href: "#!", onClick: toggleFullScreen },
      _react2.default.createElement("i", { className: "ti-fullscreen" })
    )
  );
};

exports.default = NavLeft;

/***/ }),

/***/ "./src/components/nav/NavBar.jsx":
/*!***************************************!*\
  !*** ./src/components/nav/NavBar.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _NavBarLogo = __webpack_require__(/*! ./NavBarLogo */ "./src/components/nav/NavBarLogo.jsx");

var _NavBarLogo2 = _interopRequireDefault(_NavBarLogo);

var _NavRight = __webpack_require__(/*! ./NavRight */ "./src/components/nav/NavRight.jsx");

var _NavRight2 = _interopRequireDefault(_NavRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(props) {
  var nav = props.nav;
  var headerMinimized = nav.headerMinimized;


  return _react2.default.createElement(
    'nav',
    { className: 'header-navbar' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_NavBarLogo2.default, nav),
      _react2.default.createElement(
        'div',
        { className: 'navbar-container container-fluid' },
        _react2.default.createElement(
          _reactTransitionGroup.Transition,
          { 'in': !headerMinimized, timeout: 250 },
          function (status) {
            return _react2.default.createElement(_NavRight2.default, _extends({ status: status }, props));
          }
        )
      )
    )
  );
};

exports.default = NavBar;

/***/ }),

/***/ "./src/components/nav/NavBarLogo.jsx":
/*!*******************************************!*\
  !*** ./src/components/nav/NavBarLogo.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
var mapProps = function mapProps(dispatch) {
  return {
    showMore: function showMore() {
      dispatch({ type: _types.TOGGLE_HEADER_NAVBAR });
    },
    toggleSideBar: function toggleSideBar() {
      dispatch({ type: _types.TOGGLE_SIDEBAR });
    }
  };
};

var NavBarLogo = function NavBarLogo(props) {
  var isSmallDevice = props.isSmallDevice,
      toggleSideBar = props.toggleSideBar,
      showMore = props.showMore;

  var c = (0, _classnames2.default)({
    'navbar-logo': true,
    'navbar-logo-sm': isSmallDevice
  });
  var m = (0, _classnames2.default)({
    'mobile-menu': true,
    'mobile-menu-sm': isSmallDevice
  });
  var o = (0, _classnames2.default)({
    'mobile-options': true,
    'mobile-options-sm': isSmallDevice
  });
  return _react2.default.createElement(
    'div',
    { className: c },
    _react2.default.createElement(
      'a',
      { className: m, onClick: toggleSideBar, onKeyDown: toggleSideBar, title: 'Collapse the Navigation Panel' },
      _react2.default.createElement('i', { className: 'ti-menu' })
    ),
    _react2.default.createElement(
      'a',
      null,
      _react2.default.createElement('img', { className: 'img-fluid', src: __webpack_require__(/*! ../../../assets/images/logo.png */ "./assets/images/logo.png"), alt: 'EAi' })
    ),
    _react2.default.createElement(
      'a',
      { className: o, onClick: showMore, onKeyDown: showMore },
      _react2.default.createElement('i', { className: 'ti-more' })
    )
  );
};

exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, mapProps)(NavBarLogo);

/***/ }),

/***/ "./src/components/nav/NavRight.jsx":
/*!*****************************************!*\
  !*** ./src/components/nav/NavRight.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _velocityAnimate = __webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _ProfileMenu = __webpack_require__(/*! ./ProfileMenu */ "./src/components/nav/ProfileMenu.jsx");

var _ProfileMenu2 = _interopRequireDefault(_ProfileMenu);

var _FullScreen = __webpack_require__(/*! ./FullScreen */ "./src/components/nav/FullScreen.jsx");

var _FullScreen2 = _interopRequireDefault(_FullScreen);

var _NotificationIcons = __webpack_require__(/*! ./NotificationIcons */ "./src/components/nav/NotificationIcons.jsx");

var _NotificationIcons2 = _interopRequireDefault(_NotificationIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Jaison.Jacob on 7/11/2018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NavRight = function (_React$Component) {
  _inherits(NavRight, _React$Component);

  function NavRight(props) {
    _classCallCheck(this, NavRight);

    var _this = _possibleConstructorReturn(this, (NavRight.__proto__ || Object.getPrototypeOf(NavRight)).call(this, props));

    _this.state = {
      showMenu: false
    };

    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.el = _react2.default.createRef();
    _this.animateMe = _this.animateMe.bind(_this);

    _this.currentState;
    return _this;
  }

  _createClass(NavRight, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      var status = next.status,
          nav = next.nav;
      var isSmallDevice = nav.isSmallDevice,
          headerMinimized = nav.headerMinimized;


      if (!isSmallDevice && this.currentState !== 'exited') return;

      console.log(isSmallDevice, headerMinimized, status);
      this.animateMe(isSmallDevice ? status : 'entering');
    }
  }, {
    key: 'animateMe',
    value: function animateMe(status) {
      var el = this.el.current;

      if (this.currentState !== status) {
        if (status === 'entering') (0, _velocityAnimate2.default)(el, 'slideDown', { duration: 250, ease: 'ease-in-out' });
        if (status === 'exiting' || status === 'exited') (0, _velocityAnimate2.default)(el, 'slideUp', { duration: 250, ease: 'ease-in-out' });

        this.currentState = status;
      }
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState(function (prev) {
        return {
          showMenu: !prev.showMenu
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var showMenu = this.state.showMenu;
      var _props = this.props,
          auth = _props.auth,
          nav = _props.nav;


      var upStyle = (0, _classnames2.default)({
        'user-profile header-notification': true,
        active: showMenu
      });
      return _react2.default.createElement(
        'ul',
        { className: 'nav-right', ref: this.el },
        nav.isSmallDevice ? null : _react2.default.createElement(_FullScreen2.default, null),
        _react2.default.createElement(_NotificationIcons2.default, null),
        _react2.default.createElement(
          'li',
          { className: upStyle, onClick: this.toggleMenu, onKeyPress: this.toggleMenu },
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement('img', { alt: 'avatar', src: __webpack_require__(/*! ../../../assets/images/avatar-4.jpg */ "./assets/images/avatar-4.jpg"), className: 'img-radius' }),
            _react2.default.createElement(
              'span',
              null,
              auth.user
            ),
            _react2.default.createElement('i', { className: 'ti-angle-down' })
          ),
          _react2.default.createElement(
            _reactTransitionGroup.Transition,
            { 'in': showMenu, timeout: 250 },
            function (status) {
              return _react2.default.createElement(_ProfileMenu2.default, { status: status, show: showMenu });
            }
          )
        )
      );
    }
  }]);

  return NavRight;
}(_react2.default.Component);

exports.default = NavRight;

/***/ }),

/***/ "./src/components/nav/NotificationIcons.jsx":
/*!**************************************************!*\
  !*** ./src/components/nav/NotificationIcons.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "span",
    null,
    _react2.default.createElement(
      "li",
      { className: "", title: "Notification" },
      _react2.default.createElement(
        "a",
        null,
        _react2.default.createElement("i", { className: "ti-bell" }),
        _react2.default.createElement("span", { className: "badge bg-c-pink" })
      )
    ),
    _react2.default.createElement(
      "li",
      { className: "", title: "Chat" },
      _react2.default.createElement(
        "a",
        { className: "displayChatbox" },
        _react2.default.createElement("i", { className: "ti-comments" }),
        _react2.default.createElement("span", { className: "badge bg-c-green" })
      )
    )
  );
};

/***/ }),

/***/ "./src/components/nav/ProfileMenu.jsx":
/*!********************************************!*\
  !*** ./src/components/nav/ProfileMenu.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _velocityAnimate = __webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileMenu = function (_Component) {
  _inherits(ProfileMenu, _Component);

  function ProfileMenu() {
    _classCallCheck(this, ProfileMenu);

    var _this = _possibleConstructorReturn(this, (ProfileMenu.__proto__ || Object.getPrototypeOf(ProfileMenu)).call(this));

    _this.el = _react2.default.createRef();
    _this.animateMe = _this.animateMe.bind(_this);
    _this.currentState;
    return _this;
  }

  _createClass(ProfileMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nxt) {
      this.animateMe(nxt.status);
    }
  }, {
    key: 'animateMe',
    value: function animateMe(status) {
      var el = this.el.current;

      if (this.currentState !== status) {
        if (status === 'entering') (0, _velocityAnimate2.default)(el, 'slideDown', { duration: 250, ease: 'ease-in-out' });
        if (status === 'exiting') (0, _velocityAnimate2.default)(el, 'slideUp', { duration: 250, ease: 'ease-in-out' });

        this.currentState = status;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var c = (0, _classnames2.default)({
        'show-notification': true,
        'profile-notification': true
      });
      return _react2.default.createElement(
        'ul',
        { className: c, ref: this.el },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement('i', { className: 'ti-settings' }),
            'Settings'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement('i', { className: 'ti-user' }),
            'Profile'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement('i', { className: 'ti-email' }),
            'My Messages'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement('i', { className: 'ti-lock' }),
            'Lock Screen'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement('i', { className: 'ti-layout-sidebar-left' }),
            'Logout'
          )
        )
      );
    }
  }]);

  return ProfileMenu;
}(_react.Component);

exports.default = ProfileMenu;

/***/ }),

/***/ "./src/components/sidebar/Menu.jsx":
/*!*****************************************!*\
  !*** ./src/components/sidebar/Menu.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _SubMenu = __webpack_require__(/*! ./SubMenu */ "./src/components/sidebar/SubMenu.jsx");

var _SubMenu2 = _interopRequireDefault(_SubMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(props) {
  var item = props.item,
      onMenuSelected = props.onMenuSelected,
      menu = props.menu;

  var aStyle = function aStyle(curr) {
    return (0, _classnames2.default)({
      'selected active': menu.selected && (menu.selected.id === curr.id || curr.content && curr.content.filter(function (x) {
        return x.id === menu.selected.id;
      }).length > 0)
    });
  };
  var caretStyle = function caretStyle(curr) {
    return (0, _classnames2.default)({
      mcaret: curr.content,
      'mcaret-plus': curr.content && !curr.expand,
      'mcaret-minus': curr.content && curr.expand
    });
  };
  var subMenuStyle = function subMenuStyle(curr) {
    return (0, _classnames2.default)({
      'sub-menu': true,
      'sub-menu-visible': curr.expand
    });
  };

  return _react2.default.createElement(
    'li',
    { className: aStyle(item) },
    _react2.default.createElement(
      'a',
      { onClick: function onClick() {
          return onMenuSelected(item);
        }, onKeyDown: function onKeyDown() {
          return onMenuSelected(item);
        } },
      _react2.default.createElement(
        'span',
        { className: 'micron' },
        _react2.default.createElement('i', { className: 'ti-' + item.icon })
      ),
      _react2.default.createElement(
        'span',
        { className: 'mtext' },
        item.label
      ),
      _react2.default.createElement('span', { className: caretStyle(item) })
    ),
    item.content && _react2.default.createElement(
      'ul',
      { className: subMenuStyle(item) },
      item.content.map(function (sub, j) {
        return _react2.default.createElement(_SubMenu2.default, { item: sub, key: j, onMenuSelected: onMenuSelected, menu: menu });
      })
    )
  );
};

exports.default = Menu;

/***/ }),

/***/ "./src/components/sidebar/SideBarContent.jsx":
/*!***************************************************!*\
  !*** ./src/components/sidebar/SideBarContent.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Menu = __webpack_require__(/*! ./Menu */ "./src/components/sidebar/Menu.jsx");

var _Menu2 = _interopRequireDefault(_Menu);

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types.js");

var _menu = __webpack_require__(/*! ../../constants/menu */ "./src/constants/menu.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Jaison.Jacob on 7/11/2018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SideBarContent = function (_Component) {
  _inherits(SideBarContent, _Component);

  function SideBarContent() {
    _classCallCheck(this, SideBarContent);

    var _this = _possibleConstructorReturn(this, (SideBarContent.__proto__ || Object.getPrototypeOf(SideBarContent)).call(this));

    _this.handleMenuBack = _this.handleMenuBack.bind(_this);
    return _this;
  }

  _createClass(SideBarContent, [{
    key: 'handleMenuBack',
    value: function handleMenuBack() {
      var _props = this.props,
          handleMenuBack = _props.handleMenuBack,
          menu = _props.menu;

      handleMenuBack(menu.back);
    }
  }, {
    key: 'renderNavLabel',
    value: function renderNavLabel(label, idx) {
      var menu = this.props.menu;

      if (menu.back && idx === 0) {
        return _react2.default.createElement(
          'div',
          { className: 'nav-label-back', onClick: this.handleMenuBack },
          this.renderBack(),
          label
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'nav-label' },
          label
        );
      }
    }
  }, {
    key: 'renderBack',
    value: function renderBack() {
      return _react2.default.createElement(
        'span',
        { className: 'micron', style: { marginRight: '5px' } },
        _react2.default.createElement('i', { className: 'ti-angle-left' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var onMenuSelected = this.props.onMenuSelected;
      var menu = this.props.menu;

      return _react2.default.createElement(
        'div',
        { className: 'main-menu' },
        menu.content.map(function (s, h) {
          return _react2.default.createElement(
            'div',
            { key: h },
            _this2.renderNavLabel(s.label, h),
            _react2.default.createElement(
              'ul',
              { className: 'left-item' },
              s.content.map(function (item, i) {
                return _react2.default.createElement(_Menu2.default, { item: item, key: i, menu: menu, onMenuSelected: onMenuSelected });
              })
            )
          );
        })
      );
    }
  }]);

  return SideBarContent;
}(_react.Component);

function actions(dispatch) {
  return {
    onMenuSelected: function onMenuSelected(item) {
      return dispatch((0, _actions.onSideBarMenuSelected)(item));
    },
    handleMenuBack: function handleMenuBack(item) {
      return dispatch({ type: _types.SET_MENU, content: _menu2.default[item] });
    }
  };
}

exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, actions)(SideBarContent);

/***/ }),

/***/ "./src/components/sidebar/Sidebar.jsx":
/*!********************************************!*\
  !*** ./src/components/sidebar/Sidebar.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _velocityAnimate = __webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var _SideBarContent = __webpack_require__(/*! ./SideBarContent.jsx */ "./src/components/sidebar/SideBarContent.jsx");

var _SideBarContent2 = _interopRequireDefault(_SideBarContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Jaison.Jacob on 7/11/2018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SideBar = function (_Component) {
  _inherits(SideBar, _Component);

  function SideBar() {
    _classCallCheck(this, SideBar);

    var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this));

    _this.el = _react2.default.createRef();
    return _this;
  }

  _createClass(SideBar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nxtProps) {
      this.animateMe(nxtProps.status);
    }
  }, {
    key: 'animateMe',
    value: function animateMe(status) {
      var el = this.el.current;

      if (status === 'exiting') (0, _velocityAnimate2.default)(el, { marginLeft: -260, opacity: 0 }, { duration: 250 });

      if (status === 'entering') (0, _velocityAnimate2.default)(el, { marginLeft: 0, opacity: 1 }, { duration: 250 });
    }
  }, {
    key: 'render',
    value: function render() {
      var nav = this.props.nav;
      var menu = nav.menu;

      return _react2.default.createElement(
        'nav',
        { className: 'side-bar', ref: this.el },
        _react2.default.createElement(_SideBarContent2.default, { menu: menu })
      );
    }
  }]);

  return SideBar;
}(_react.Component);

exports.default = SideBar;

/***/ }),

/***/ "./src/components/sidebar/SubMenu.jsx":
/*!********************************************!*\
  !*** ./src/components/sidebar/SubMenu.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = function SubMenu(props) {
  var item = props.item,
      onMenuSelected = props.onMenuSelected,
      menu = props.menu;


  var aStyle = function aStyle(curr) {
    return (0, _classnames2.default)({
      active: menu.selected && (menu.selected.id === curr.id || curr.content && curr.content.filter(function (x) {
        return x.id === menu.selected.id;
      }).length > 0)
    });
  };

  return _react2.default.createElement(
    'li',
    { className: aStyle(item) },
    _react2.default.createElement(
      'a',
      { onClick: function onClick() {
          return onMenuSelected(item);
        }, onKeyPress: function onKeyPress() {
          return onMenuSelected(item);
        } },
      _react2.default.createElement(
        'span',
        { className: 'mtext' },
        item.label
      )
    )
  );
};

exports.default = SubMenu;

/***/ }),

/***/ "./src/components/ui/accordian/Accordian.jsx":
/*!***************************************************!*\
  !*** ./src/components/ui/accordian/Accordian.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _Panel = __webpack_require__(/*! ./Panel */ "./src/components/ui/accordian/Panel.jsx");

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordian = function (_React$Component) {
  _inherits(Accordian, _React$Component);

  function Accordian() {
    _classCallCheck(this, Accordian);

    var _this = _possibleConstructorReturn(this, (Accordian.__proto__ || Object.getPrototypeOf(Accordian)).call(this));

    _this.state = {
      visible: false
    };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Accordian, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState(function (prevState) {
        return {
          visible: !prevState.visible
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'accordion-panel' },
          _react2.default.createElement(
            'div',
            { className: 'accordion-heading', onClick: this.handleClick, onKeyDown: this.handleClick },
            _react2.default.createElement(
              'h3',
              { className: 'card-title accordion-title' },
              _react2.default.createElement(
                'a',
                { className: 'accordion-msg scale_active', href: 'javascript:void(0)' },
                title
              )
            )
          ),
          _react2.default.createElement(
            _reactTransitionGroup.Transition,
            { 'in': this.state.visible, timeout: 350 },
            function (status) {
              return _react2.default.createElement(
                _Panel2.default,
                { status: status },
                children
              );
            }
          )
        )
      );
    }
  }]);

  return Accordian;
}(_react2.default.Component);

exports.default = Accordian;

/***/ }),

/***/ "./src/components/ui/accordian/Panel.jsx":
/*!***********************************************!*\
  !*** ./src/components/ui/accordian/Panel.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _velocityAnimate = __webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel(props) {
    _classCallCheck(this, Panel);

    var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

    _this.el = _react2.default.createRef();
    return _this;
  }

  _createClass(Panel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nxtProps) {
      this.animateThis(nxtProps.status);
    }
  }, {
    key: 'animateThis',
    value: function animateThis(status) {
      var el = this.el;
      if (status === 'entering') (0, _velocityAnimate2.default)(el, 'slideDown', { duration: 350, easing: 'ease' });

      if (status === 'exiting') (0, _velocityAnimate2.default)(el, 'slideUp', { duration: 350, easing: 'ease' });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        { className: 'panel-collapse in' },
        _react2.default.createElement(
          'div',
          { className: 'accordion-content accordion-desc', ref: this.el, style: { display: 'none' } },
          children
        )
      );
    }
  }]);

  return Panel;
}(_react2.default.Component);

exports.default = Panel;

/***/ }),

/***/ "./src/components/ui/accordian/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/ui/accordian/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Accordian = __webpack_require__(/*! ./Accordian */ "./src/components/ui/accordian/Accordian.jsx");

var _Accordian2 = _interopRequireDefault(_Accordian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comp = function (_React$Component) {
  _inherits(Comp, _React$Component);

  function Comp() {
    _classCallCheck(this, Comp);

    return _possibleConstructorReturn(this, (Comp.__proto__ || Object.getPrototypeOf(Comp)).apply(this, arguments));
  }

  _createClass(Comp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Accordian2.default, this.props);
    }
  }]);

  return Comp;
}(_react2.default.Component);

exports.default = Comp;

/***/ }),

/***/ "./src/constants/iapplyApps.js":
/*!*************************************!*\
  !*** ./src/constants/iapplyApps.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var APPLY_APP_TC = exports.APPLY_APP_TC = 'APPLY_APP_TC';
var APPLY_APP_NPL = exports.APPLY_APP_NPL = 'APPLY_APP_NPL';

var TC = exports.TC = '__TC';
var LANDING = exports.LANDING = '__LANDING';

/***/ }),

/***/ "./src/constants/menu.js":
/*!*******************************!*\
  !*** ./src/constants/menu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var quickLinks = [{
  id: 5,
  label: 'iExtract',
  icon: 'server'
}, {
  id: 6,
  label: 'iModel',
  icon: 'settings'
}, {
  id: 7,
  label: 'iApply',
  icon: 'bar-chart-alt'
}, {
  id: 8,
  label: 'iPlan',
  icon: 'panel'
}];

var getLink = function getLink(id) {
  return quickLinks.find(function (x) {
    return x.id === id;
  });
};
var getCompactedQuickLinks = function getCompactedQuickLinks(ignore) {
  if (!ignore) return quickLinks.slice();

  return quickLinks.filter(function (x) {
    return x.id !== ignore;
  });
};

module.exports = {
  main: {
    id: 'main',
    selected: {
      id: 2,
      label: 'About EAI',
      icon: 'shine'
    },
    content: [{
      label: 'Enterprise Analytics Intelligence',
      content: [{
        id: 1,
        label: 'SyncReal',
        icon: 'home'
      }, {
        id: 2,
        label: 'About EAI',
        icon: 'shine'
      }, {
        id: 3,
        label: 'Videos',
        icon: 'video-clapper',
        expand: false,
        content: [{
          id: 12,
          label: 'Video 1',
          parentId: 3
        }, {
          id: 13,
          label: 'Video 2',
          parentId: 3
        }]
      }, {
        id: 4,
        label: 'Tutorials',
        icon: 'book',
        expand: false,
        content: [{
          id: 15,
          label: 'Tutorials 1',
          parentId: 4
        }, {
          id: 16,
          label: 'Tutorials 2',
          parentId: 4
        }]
      }]
    }, {
      label: 'Support',
      content: [{
        id: 9,
        label: 'FAQs',
        icon: 'support'
      }, {
        id: 10,
        label: 'Help',
        icon: 'help'
      }, {
        id: 11,
        label: 'Contact Us',
        icon: 'email'
      }]
    }]
  },
  iapply: {
    id: 'iapply',
    back: 'main',
    selected: {
      id: 10,
      label: 'Test',
      icon: 'search'
    },
    content: [{
      label: 'iApply',
      content: [{
        id: 9,
        label: 'Help',
        icon: 'help'
      }, {
        id: 10,
        label: 'Test',
        icon: 'search'
      }, {
        id: 11,
        label: 'Measures',
        icon: 'filter'
      }, {
        id: 12,
        label: 'Clusters',
        icon: 'filter'
      }, {
        id: 13,
        label: 'Attributes',
        icon: 'zoom-in'
      }, {
        id: 14,
        label: 'Dates',
        icon: 'layout-grid3'
      }, {
        id: 15,
        label: 'Size',
        icon: 'printer'
      }]
    }, {
      label: 'Quick Links',
      content: getCompactedQuickLinks(7)
    }]
  },
  getLink: getLink
};

/***/ }),

/***/ "./src/constants/types.js":
/*!********************************!*\
  !*** ./src/constants/types.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
var SET_USER = exports.SET_USER = 'SET_USER';

var TOGGLE_HEADER_NAVBAR = exports.TOGGLE_HEADER_NAVBAR = 'TOGGLE_HEADER_NAVBAR';
var SET_BROWSER_SIZE = exports.SET_BROWSER_SIZE = 'SET_BROWSER_SIZE';
var TOGGLE_SIDEBAR = exports.TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
// export const TOGGLE_OPT_ICONS = 'TOGGLE_OPT_ICONS';

var SET_MENU = exports.SET_MENU = 'SET_MENU';
// export const SET_LANDING_MENU = 'SET_LANDING_MENU';
// export const SET_SELECTED_LANDING_MENU = 'SET_SELECTED_LANDING_MENU';
// export const ADD_LANDING_MENU = 'ADD_LANDING_MENU';
// export const REMOVE_LANDING_MENU = 'REMOVE_LANDING_MENU';

// export const SET_OPT_BTN_LAYOUT = 'SET_OPT_BTN_LAYOUT';

var SET_SELECTED_MENU = exports.SET_SELECTED_MENU = 'SET_SELECTED_MENU';

var SET_APPLY_APP = exports.SET_APPLY_APP = 'SET_APPLY_APP';

// export const HOME_OPT_BTN_LAYOUT = 'HOME_OPT_BTN_LAYOUT';

/*= =======================
      Test control app start
==========================  * */
// export const TC_OPT_BTN_LAYOUT = 'TC_OPT_BTN_LAYOUT';
var TC_APP_INITIALIZE = exports.TC_APP_INITIALIZE = 'TC_APP_INITIALIZE';

var TC_SET_VIEW = exports.TC_SET_VIEW = 'TC_SET_VIEW';
var TC_ADD_PROGRAM = exports.TC_ADD_PROGRAM = 'TC_ADD_PROGRAM';
var TC_REMOVE_PROGRAM = exports.TC_REMOVE_PROGRAM = 'TC_REMOVE_PROGRAM';
var TC_SET_ACTIVE_PROGRAM = exports.TC_SET_ACTIVE_PROGRAM = 'TC_SET_ACTIVE_PROGRAM';

var TC_SHOW_DELETE_MODAL = exports.TC_SHOW_DELETE_MODAL = 'TC_SHOW_DELETE_MODAL';
var TC_HIDE_DELETE_MODAL = exports.TC_HIDE_DELETE_MODAL = 'TC_HIDE_DELETE_MODAL';

var TC_SET_PROGRAM_VIEW = exports.TC_SET_PROGRAM_VIEW = 'TC_SET_PROGRAM_VIEW';
/*= =======================
      Test control app end
==========================  * */

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _auth = __webpack_require__(/*! ./reducers/auth */ "./src/reducers/auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _nav = __webpack_require__(/*! ./reducers/nav */ "./src/reducers/nav.js");

var _nav2 = _interopRequireDefault(_nav);

var _iapply = __webpack_require__(/*! ./reducers/iapplyApps/iapply */ "./src/reducers/iapplyApps/iapply.js");

var _iapply2 = _interopRequireDefault(_iapply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
exports.default = (0, _redux.combineReducers)({
  auth: _auth2.default,
  nav: _nav2.default,
  iapply: _iapply2.default
});

/***/ }),

/***/ "./src/reducers/auth.js":
/*!******************************!*\
  !*** ./src/reducers/auth.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(/*! ../constants/types */ "./src/constants/types.js");

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { user: 'Jaison Jacob' };
  var action = arguments[1];

  switch (action.type) {
    case _types.SET_USER:
      return {
        user: action.user
      };
    default:
      return state;
  }
}; /**
    * Created by Jaison.Jacob on 7/11/2018.
    */

/***/ }),

/***/ "./src/reducers/iapplyApps/iapply.js":
/*!*******************************************!*\
  !*** ./src/reducers/iapplyApps/iapply.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types.js");

var _testControl = __webpack_require__(/*! ./testControl */ "./src/reducers/iapplyApps/testControl.js");

var _testControl2 = _interopRequireDefault(_testControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  app: null
};
var common = function common() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.SET_APPLY_APP:
      return _extends({}, state, {
        app: action.app
      });
    default:
      return state;
  }
};

exports.default = (0, _redux.combineReducers)({
  common: common,
  testControl: _testControl2.default
});

/***/ }),

/***/ "./src/reducers/iapplyApps/testControl.js":
/*!************************************************!*\
  !*** ./src/reducers/iapplyApps/testControl.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  initialInactive: true,
  view: null,
  program: {
    programs: [],
    activeProgram: -1
  },
  showDeleteProgram: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.TC_ADD_PROGRAM:
      return _extends({}, state, {
        program: _extends({}, state.program, {
          programs: [].concat(state.program.programs, action.content),
          activeProgram: action.content.id
        }),
        view: 'program',
        initialInactive: false
      });
    case _types.TC_SET_ACTIVE_PROGRAM:
      return _extends({}, state, {
        program: _extends({}, state.program, {
          activeProgram: action.content
        })
      });
    case _types.TC_REMOVE_PROGRAM:
      if (state.program.programs.length === 1) {
        // set the dummy one
        return _extends({}, state, {
          program: {
            programs: [],
            activeProgram: -1
          },
          view: null,
          initialInactive: true
        });
      }

      var programs = state.program.programs;

      var newProg = [].concat(_toConsumableArray(programs.slice(0, action.idx)), _toConsumableArray(programs.slice(action.idx + 1, programs.length)));
      return _extends({}, state, {
        program: {
          programs: newProg,
          activeProgram: newProg.length > 0 ? newProg[newProg.length - 1].id : null
        }
      });

    case _types.TC_SHOW_DELETE_MODAL:
      return _extends({}, state, {
        showDeleteProgram: true
      });
    case _types.TC_HIDE_DELETE_MODAL:
      return _extends({}, state, {
        showDeleteProgram: false
      });
    case _types.TC_SET_VIEW:
      return _extends({}, state, {
        view: action.content
      });
    case _types.TC_SET_PROGRAM_VIEW:
      var updated = state.program.programs.map(function (p) {
        if (p.id === state.program.activeProgram) {
          return _extends({}, p, {
            view: action.content
          });
        }
        return p;
      });

      return _extends({}, state, {
        program: _extends({}, state.program, {
          programs: updated
        })
      });
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/nav.js":
/*!*****************************!*\
  !*** ./src/reducers/nav.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Jaison.Jacob on 7/11/2018.
                                                                                                                                                                                                                                                                   */


var _types = __webpack_require__(/*! ../constants/types */ "./src/constants/types.js");

var _menu = __webpack_require__(/*! ../constants/menu */ "./src/constants/menu.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isSmallDevice: false,
  headerMinimized: true,
  displaySideBar: true,
  displayOptionIcons: true,
  menu: _menu2.default.main
  // landingMenu: {
  //   selected: {},
  //   content: [],
  //   context: null,
  // },
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.SET_BROWSER_SIZE:
      return _extends({}, state, {
        isSmallDevice: action.size,
        headerMinimized: action.size ? true : state.headerMinimized,
        displaySideBar: !action.size
      });
    case _types.TOGGLE_HEADER_NAVBAR:
      return _extends({}, state, {
        headerMinimized: !state.headerMinimized
      });
    case _types.TOGGLE_SIDEBAR:
      {
        return _extends({}, state, {
          displaySideBar: !state.displaySideBar
        });
      }
    case _types.SET_MENU:
      {
        return _extends({}, state, {
          menu: action.content
        });
      }
    case _types.SET_SELECTED_MENU:
      if (action.item.content) {
        return _extends({}, state, {
          menu: _extends({}, state.menu, {
            content: state.menu.content.map(function (x) {
              return _extends({}, x, {
                content: x.content.map(function (c) {
                  return c.id === action.item.id ? _extends({}, c, {
                    expand: !c.expand
                  }) : _extends({}, c, {
                    expand: false
                  });
                })
              });
            })
          })
        });
      }
      return _extends({}, state, {
        menu: _extends({}, state.menu, {
          selected: action.item,
          content: state.menu.content.map(function (x) {
            return _extends({}, x, {
              content: x.content.map(function (c) {
                return c.id === action.item.id || action.item.parentId && action.item.parentId === c.id ? _extends({}, c) : _extends({}, c, {
                  expand: false
                });
              })
            });
          })
        })
      });
    // case SET_LANDING_MENU:
    //   return {
    //     ...state,
    //     landingMenu: {
    //       content: action.content.content,
    //       selected: action.content.content[0],
    //       context: action.content.context,
    //     },
    //   };
    // case ADD_LANDING_MENU:
    //   return {
    //     ...state,
    //     landingMenu: {
    //       content: [].concat(state.landingMenu.content, action.content),
    //       selected: action.content,
    //     },
    //   };
    // case REMOVE_LANDING_MENU:
    //   var newMenu = [
    //     ...state.landingMenu.content.slice(0, action.idx),
    //     ...state.landingMenu.content.slice(action.idx + 1, state.landingMenu.content.length),
    //   ];
    //   return {
    //     ...state,
    //     landingMenu: {
    //       content: newMenu,
    //       selected: newMenu[newMenu.length - 1],
    //     },
    //   };
    // case SET_SELECTED_LANDING_MENU:
    //   return {
    //     ...state,
    //     landingMenu: {
    //       ...state.landingMenu,
    //       selected: action.content,
    //     },
    //   };
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(/*! ./reducer */ "./src/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export const store = createStore(reducer, applyMiddleware(thunk));
/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
var store = exports.store = (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger.logger));

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./src/util/utils.js");

var utilsFunc = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = _extends({}, utilsFunc);

/***/ }),

/***/ "./src/util/utils.js":
/*!***************************!*\
  !*** ./src/util/utils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getObjFromArr(arr, id) {
  var idProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

  if (checkIfObjExists(arr, id, idProp)) {
    var result = arr.find(function (x) {
      return x[idProp] === id;
    });
    return result || null;
  }
  return null;
}

function getObjIdxFromArr(arr, id) {
  var idProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

  if (checkIfObjExists(arr, id, idProp)) {
    return programs.map(function (x) {
      return x.id;
    }).indexOf(id);
  }
  return null;
}

function checkIfObjExists(arr, id, idProp) {
  if (id === -1 || id === null) return false;

  if (arr.length === 0) return false;

  //check if id prop exists.
  if (!arr[0].hasOwnProperty(idProp)) return false;

  return true;
}

module.exports = {
  getObjFromArr: getObjFromArr,
  getObjIdxFromArr: getObjIdxFromArr
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/Root.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\susmita\project\eai-ui\src/Root.jsx */"./src/Root.jsx");


/***/ }),

/***/ "dll-reference react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),

/***/ "dll-reference utility":
/*!**************************!*\
  !*** external "utility" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = utility;

/***/ })

/******/ });
//# sourceMappingURL=app.js.map