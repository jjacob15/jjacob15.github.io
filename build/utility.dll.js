var utility =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n__webpack_require__(/*! core-js/shim */ \"./node_modules/core-js/shim.js\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n__webpack_require__(/*! core-js/fn/regexp/escape */ \"./node_modules/core-js/fn/regexp/escape.js\");\n\nif (global._babelPolyfill) {\n  throw new Error(\"only one instance of babel-polyfill is allowed\");\n}\nglobal._babelPolyfill = true;\n\nvar DEFINE_PROPERTY = \"defineProperty\";\nfunction define(O, key, value) {\n  O[key] || Object[DEFINE_PROPERTY](O, key, {\n    writable: true,\n    configurable: true,\n    value: value\n  });\n}\n\ndefine(String.prototype, \"padLeft\", \"\".padStart);\ndefine(String.prototype, \"padRight\", \"\".padEnd);\n\n\"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill\".split(\",\").forEach(function (key) {\n  [][key] && define(Array, key, Function.call.bind([][key]));\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/regexp/escape.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/regexp/escape.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/core.regexp.escape */ \"./node_modules/core-js/modules/core.regexp.escape.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").RegExp.escape;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/fn/regexp/escape.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];\n    else delete O[to];\n    to += inc;\n    from += inc;\n  } return O;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) O[index++] = value;\n  return O;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_array-from-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {\n    memo = callbackfn(memo, self[index], index, O);\n  }\n  return memo;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-to-json.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-to-json.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/core-js/modules/_array-from-iterable.js\");\nmodule.exports = function (NAME) {\n  return function toJSON() {\n    if (classof(this) != NAME) throw TypeError(NAME + \"#toJSON isn't generic\");\n    return from(this);\n  };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_collection-to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar getWeak = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").getWeak;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\nvar $has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function (that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function () {\n  this.a = [];\n};\nvar findUncaughtFrozen = function (store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function (key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function (key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function (key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;\n    else this.a.push([key, value]);\n  },\n  'delete': function (key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;      // collection type\n      that._i = id++;      // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function (key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);\n    else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function (KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY,\n      KEY == 'delete' ? function (a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'has' ? function has(a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'get' ? function get(a) {\n        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }\n        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }\n    );\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) $instance[ADDER](index, index);\n      return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.7' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function (num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = (fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +\n    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +\n    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +\n    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) { /* empty */ }\n  } return true;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n  var fns = exec(defined, SYMBOL, ''[KEY]);\n  var strfn = fns[0];\n  var rxfn = fns[1];\n  if (fails(function () {\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  })) {\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      spreadable = false;\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = (!$expm1\n  // Old FF bug\n  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n  // Tor Browser bug\n  || $expm1(-2e-17) != -2e-17\n) ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function (n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-scale.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-scale.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nmodule.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {\n  if (\n    arguments.length === 0\n      // eslint-disable-next-line no-self-compare\n      || x != x\n      // eslint-disable-next-line no-self-compare\n      || inLow != inLow\n      // eslint-disable-next-line no-self-compare\n      || inHigh != inHigh\n      // eslint-disable-next-line no-self-compare\n      || outLow != outLow\n      // eslint-disable-next-line no-self-compare\n      || outHigh != outHigh\n  ) return NaN;\n  if (x === Infinity || x === -Infinity) return x;\n  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_math-scale.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var Map = __webpack_require__(/*! ./es6.map */ \"./node_modules/core-js/modules/es6.map.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('metadata');\nvar store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ \"./node_modules/core-js/modules/es6.weak-map.js\"))());\n\nvar getOrCreateMetadataMap = function (target, targetKey, create) {\n  var targetMetadata = store.get(target);\n  if (!targetMetadata) {\n    if (!create) return undefined;\n    store.set(target, targetMetadata = new Map());\n  }\n  var keyMetadata = targetMetadata.get(targetKey);\n  if (!keyMetadata) {\n    if (!create) return undefined;\n    targetMetadata.set(targetKey, keyMetadata = new Map());\n  } return keyMetadata;\n};\nvar ordinaryHasOwnMetadata = function (MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);\n};\nvar ordinaryGetOwnMetadata = function (MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);\n};\nvar ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {\n  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);\n};\nvar ordinaryOwnMetadataKeys = function (target, targetKey) {\n  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);\n  var keys = [];\n  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });\n  return keys;\n};\nvar toMetaKey = function (it) {\n  return it === undefined || typeof it == 'symbol' ? it : String(it);\n};\nvar exp = function (O) {\n  $export($export.S, 'Reflect', O);\n};\n\nmodule.exports = {\n  store: store,\n  map: getOrCreateMetadataMap,\n  has: ordinaryHasOwnMetadata,\n  get: ordinaryGetOwnMetadata,\n  set: ordinaryDefineOwnMetadata,\n  keys: ordinaryOwnMetadataKeys,\n  key: toMetaKey,\n  exp: exp\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-forced-pam.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-forced-pam.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Forced replacement prototype accessors methods\nmodule.exports = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") || !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  var K = Math.random();\n  // In FF throws only define methods\n  // eslint-disable-next-line no-undef, no-useless-call\n  __defineSetter__.call(null, K, function () { /* empty */ });\n  delete __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\")[K];\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-forced-pam.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar isEnum = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f;\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) if (isEnum.call(O, key = keys[i++])) {\n      result.push(isEntries ? [key, O[key]] : O[key]);\n    } return result;\n  };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Reflect = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect;\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseFloat = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseFloat;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseInt = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseInt;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar ws = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) redefine(target, key, src[key], safe);\n  return target;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar TO_STRING = 'toString';\nvar $toString = Function[TO_STRING];\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_replacer.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_replacer.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (regExp, replace) {\n  var replacer = replace === Object(replace) ? function (part) {\n    return replace[part];\n  } : replace;\n  return function (it) {\n    return String(it).replace(regExp, replacer);\n  };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_replacer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-from.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {\n    var mapFn = arguments[1];\n    var mapping, A, n, cb;\n    aFunction(this);\n    mapping = mapFn !== undefined;\n    if (mapping) aFunction(mapFn);\n    if (source == undefined) return new this();\n    A = [];\n    if (mapping) {\n      n = 0;\n      cb = ctx(mapFn, arguments[2], 2);\n      forOf(source, false, function (nextItem) {\n        A.push(cb(nextItem, n++));\n      });\n    } else {\n      forOf(source, false, A.push, A);\n    }\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_set-collection-from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-of.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { of: function of() {\n    var length = arguments.length;\n    var A = new Array(length);\n    while (length--) A[length] = arguments[length];\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_set-collection-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function (string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;\n  return res;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\")) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\n  var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\n  var fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n  var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n  var $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\n  var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\n  var anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n  var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\n  var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\n  var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n  var toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n  var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\n  var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\n  var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n  var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\n  var create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n  var gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n  var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\n  var wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\");\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n  var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\n  var setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\");\n  var $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function (it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function (it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function (C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    } return new C(length);\n  };\n\n  var speciesFromList = function (O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function (C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n    while (length > index) result[index] = list[index++];\n    return result;\n  };\n\n  var addGetter = function (it, key, internal) {\n    dP(it, key, { get: function () { return this._d[internal]; } });\n  };\n\n  var $from = function from(source /* , mapfn, thisArg */) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      } O = values;\n    }\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n    return result;\n  };\n\n  var $of = function of(/* ...items */) {\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n    while (length > index) result[index] = arguments[index++];\n    return result;\n  };\n\n  // iOS Safari 6.x fails here\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start /* , end */) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn /* , thisArg */) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn /* , thisArg */) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn,\n        arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate /* , thisArg */) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate /* , thisArg */) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn /* , thisArg */) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement /* , fromIndex */) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement /* , fromIndex */) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) { // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn /* , thisArg */) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      } return that;\n    },\n    some: function some(callbackfn /* , thisArg */) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(\n        O.buffer,\n        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,\n        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)\n      );\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike /* , offset */) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n    while (index < len) this[offset + index] = src[index++];\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function (target, key) {\n    return isObject(target)\n      && target[TYPED_ARRAY]\n      && typeof key != 'symbol'\n      && key in target\n      && String(+key) == String(key);\n  };\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true))\n      ? propertyDesc(2, target[key])\n      : gOPD(target, key);\n  };\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true))\n      && isObject(desc)\n      && has(desc, 'value')\n      && !has(desc, 'get')\n      && !has(desc, 'set')\n      // TODO: add validation descriptor w/o calling accessors\n      && !desc.configurable\n      && (!has(desc, 'writable') || desc.writable)\n      && (!has(desc, 'enumerable') || desc.enumerable)\n    ) {\n      target[key] = desc.value;\n      return target;\n    } return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () { arrayToString.call({}); })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function () { /* noop */ },\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function () { return this[TYPED_ARRAY]; }\n  });\n\n  // eslint-disable-next-line max-statements\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n    var getter = function (that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n    var setter = function (that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n    var addElement = function (that, index) {\n      dP(that, index, {\n        get: function () {\n          return getter(this, index);\n        },\n        set: function (value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n        while (index < length) addElement(that, index++);\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n      new TypedArray(null); // eslint-disable-line no-new\n      new TypedArray(1.5); // eslint-disable-line no-new\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass;\n        // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n        if (!isObject(data)) return new Base(toIndex(data));\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined\n            ? new Base(data, toOffset($offset, BYTES), $length)\n            : $offset !== undefined\n              ? new Base(data, toOffset($offset, BYTES))\n              : new Base(data);\n        }\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator\n      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function () { return NAME; }\n      });\n    }\n\n    O[NAME] = TypedArray;\n\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n\n    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {\n      from: $from,\n      of: $of\n    });\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n\n    $export($export.P, NAME, proto);\n\n    setSpecies(NAME);\n\n    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });\n\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, { slice: $slice });\n\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, { toLocaleString: $toLocaleString });\n\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError;\n// eslint-disable-next-line no-shadow-restricted-names\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;\n\n// IEEE754 conversions based on https://github.com/feross/ieee754\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = new Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value);\n  // eslint-disable-next-line no-self-compare\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);\n  e = e << mLen | m;\n  eLen += mLen;\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);\n  buffer[--i] |= s * 128;\n  return buffer;\n}\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  } return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\nfunction packI8(it) {\n  return [it & 0xff];\n}\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(new Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  }\n  // iOS Safari 7.x bug\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\n\nvar TypedArrayConstructors = (\n  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'\n).split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.regexp.escape.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/core.regexp.escape.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/benjamingr/RexExp.escape\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $re = __webpack_require__(/*! ./_replacer */ \"./node_modules/core-js/modules/_replacer.js\")(/[\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');\n\n$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/core.regexp.escape.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $every = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? $native.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;\n    return -1;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $map = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  function F() { /* empty */ }\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of(/* ...args */) {\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) createProperty(result, index, arguments[index++]);\n    result.length = aLen;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n    for (; i < size; i++) cloned[i] = klass == 'String'\n      ? this.charAt(start + i)\n      : this[start + i];\n    return cloned;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $some = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('Array');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"./node_modules/core-js/modules/_date-to-iso-string.js\");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null\n    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"./node_modules/core-js/modules/_date-to-primitive.js\"));\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(FunctionProto, HAS_INSTANCE, { value: function (O) {\n  if (typeof this != 'function' || !isObject(O)) return false;\n  if (!isObject(this.prototype)) return O instanceof this;\n  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;\n  return false;\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function () {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\");\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n  && Math.floor($acosh(Number.MAX_VALUE)) == 710\n  // Tor Browser bug: Math.acosh(Infinity) -> NaN\n  && $acosh(Infinity) == Infinity\n), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156\n      ? Math.log(x) + Math.LN2\n      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ \"./node_modules/core-js/modules/_math-fround.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1\n      ? (expm1(x) - expm1(-x)) / 2\n      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +\n    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar _isFinite = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").isFinite;\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function (n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function (n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = (c % n) * 1e7;\n  }\n};\nvar numToString = function () {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  } return s;\n};\nvar pow = function (x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function (x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  } return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (\n  0.00008.toFixed(3) !== '0.000' ||\n  0.9.toFixed(0) !== '1' ||\n  1.255.toFixed(2) !== '1.25' ||\n  1000000000000000128.0.toFixed(0) !== '1000000000000000128'\n) || !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    } return m;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\").f;\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar rApply = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).apply;\nvar fApply = Function.apply;\n// MS Edge argumentsList argument is optional\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  rApply(function () { /* empty */ });\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar bind = __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\");\nvar rConstruct = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () { /* empty */ });\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 26.1.5 Reflect.enumerate(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Enumerate = function (iterated) {\n  this._t = anObject(iterated); // target\n  this._i = 0;                  // next index\n  var keys = this._k = [];      // keys\n  var key;\n  for (key in iterated) keys.push(key);\n};\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\")(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n  do {\n    if (that._i >= keys.length) return { value: undefined, done: true };\n  } while (!((key = keys[that._i++]) in that._t));\n  return { value: key, done: false };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar getProto = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')\n    ? desc.value\n    : desc.get !== undefined\n      ? desc.get.call(receiver)\n      : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', { get: get });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $isExtensible = Object.isExtensible;\n\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $preventExtensions = Object.preventExtensions;\n\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar setProto = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\");\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n    ownDesc = createDesc(0);\n  }\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      dP.f(receiver, propertyKey, existingDescriptor);\n    } else dP.f(receiver, propertyKey, createDesc(0, V));\n    return true;\n  }\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', { set: set });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p\n      : inheritIfRequired(CORRECT_NEW\n        ? new Base(piRE && !fiU ? p.source : p, f)\n        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)\n      , tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function (key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function () { return Base[key]; },\n      set: function (it) { Base[key] = it; }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);\n  proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\")\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match) {\n  // 21.1.3.11 String.prototype.match(regexp)\n  return [function match(regexp) {\n    'use strict';\n    var O = defined(this);\n    var fn = regexp == undefined ? undefined : regexp[MATCH];\n    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n  }, $match];\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace) {\n  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)\n  return [function replace(searchValue, replaceValue) {\n    'use strict';\n    var O = defined(this);\n    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n    return fn !== undefined\n      ? fn.call(searchValue, O, replaceValue)\n      : $replace.call(String(O), searchValue, replaceValue);\n  }, $replace];\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search) {\n  // 21.1.3.15 String.prototype.search(regexp)\n  return [function search(regexp) {\n    'use strict';\n    var O = defined(this);\n    var fn = regexp == undefined ? undefined : regexp[SEARCH];\n    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n  }, $search];\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split) {\n  'use strict';\n  var isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\n  var _split = $split;\n  var $push = [].push;\n  var $SPLIT = 'split';\n  var LENGTH = 'length';\n  var LAST_INDEX = 'lastIndex';\n  if (\n    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||\n    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||\n    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||\n    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||\n    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||\n    ''[$SPLIT](/.?/)[LENGTH]\n  ) {\n    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group\n    // based on es5-shim implementation, need to rework it\n    $split = function (separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return _split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var separator2, match, lastIndex, lastLength, i;\n      // Doesn't need flags gy, but they don't hurt\n      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\\\s)', flags);\n      while (match = separatorCopy.exec(string)) {\n        // `separatorCopy.lastIndex` is not reliable cross-browser\n        lastIndex = match.index + match[0][LENGTH];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG\n          // eslint-disable-next-line no-loop-func\n          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {\n            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;\n          });\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n  // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    $split = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);\n    };\n  }\n  // 21.1.3.17 String.prototype.split(separator, limit)\n  return [function split(separator, limit) {\n    var O = defined(this);\n    var fn = separator == undefined ? undefined : separator[SPLIT];\n    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);\n  }, $split];\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith\n      ? $endsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)\n      );\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\")\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith\n      ? $startsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar ArrayBuffer = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").ArrayBuffer;\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });\n\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var fin = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n    while (first < fin) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    } return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(ARRAY_BUFFER);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\").ABV, {\n  DataView: __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\").DataView\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar assign = __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\");\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar tmp = {};\nvar InternalMap;\n\nvar wrapper = function (get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n      // store all the rest on native weakmap\n      } return method.call(this, a, b);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_SET = 'WeakSet';\n\n// 23.4 WeakSet Objects\n__webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_SET, function (get) {\n  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('flatMap');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flatten.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flatten.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatten: function flatten(/* depthArg = 1 */) {\n    var depthArg = arguments[0];\n    var O = toObject(this);\n    var sourceLen = toLength(O.length);\n    var A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('flatten');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.array.flatten.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/Array.prototype.includes\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $includes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('includes');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.asap.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/es7.asap.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar process = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").process;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\n$export($export.G, {\n  asap: function asap(fn) {\n    var domain = isNode && process.domain;\n    microtask(domain ? domain.bind(fn) : fn);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.asap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.error.is-error.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.error.is-error.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/ljharb/proposal-is-error\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n\n$export($export.S, 'Error', {\n  isError: function isError(it) {\n    return cof(it) === 'Error';\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.error.is-error.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.global.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.global.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.G, { global: __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.from.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('Map');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.map.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.of.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('Map');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.map.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/core-js/modules/_collection-to-json.js\")('Map') });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.map.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.clamp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.clamp.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clamp: function clamp(x, lower, upper) {\n    return Math.min(upper, Math.max(lower, x));\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.clamp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.deg-per-rad.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.degrees.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.degrees.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar RAD_PER_DEG = 180 / Math.PI;\n\n$export($export.S, 'Math', {\n  degrees: function degrees(radians) {\n    return radians * RAD_PER_DEG;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.degrees.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.fscale.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.fscale.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar scale = __webpack_require__(/*! ./_math-scale */ \"./node_modules/core-js/modules/_math-scale.js\");\nvar fround = __webpack_require__(/*! ./_math-fround */ \"./node_modules/core-js/modules/_math-fround.js\");\n\n$export($export.S, 'Math', {\n  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {\n    return fround(scale(x, inLow, inHigh, outLow, outHigh));\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.fscale.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.iaddh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.iaddh.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  iaddh: function iaddh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.iaddh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.imulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.imulh.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  imulh: function imulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >> 16;\n    var v1 = $v >> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.imulh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.isubh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.isubh.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  isubh: function isubh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.isubh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.rad-per-deg.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.radians.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.radians.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar DEG_PER_RAD = Math.PI / 180;\n\n$export($export.S, 'Math', {\n  radians: function radians(degrees) {\n    return degrees * DEG_PER_RAD;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.radians.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.scale.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.scale.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ \"./node_modules/core-js/modules/_math-scale.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.scale.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.signbit.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.signbit.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// http://jfbastien.github.io/papers/Math.signbit.html\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { signbit: function signbit(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.signbit.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.umulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.umulh.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  umulh: function umulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >>> 16;\n    var v1 = $v >>> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.math.umulh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n\n// B.2.2.2 Object.prototype.__defineGetter__(P, getter)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineGetter__: function __defineGetter__(P, getter) {\n    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.object.define-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n\n// B.2.2.3 Object.prototype.__defineSetter__(P, setter)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineSetter__: function __defineSetter__(P, setter) {\n    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.object.define-setter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $entries = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n// B.2.2.4 Object.prototype.__lookupGetter__(P)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupGetter__: function __lookupGetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.get;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.object.lookup-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n// B.2.2.5 Object.prototype.__lookupSetter__(P)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupSetter__: function __lookupSetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.set;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.object.lookup-setter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $values = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.observable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.observable.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/zenparsing/es-observable\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar OBSERVABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('observable');\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar RETURN = forOf.RETURN;\n\nvar getMethod = function (fn) {\n  return fn == null ? undefined : aFunction(fn);\n};\n\nvar cleanupSubscription = function (subscription) {\n  var cleanup = subscription._c;\n  if (cleanup) {\n    subscription._c = undefined;\n    cleanup();\n  }\n};\n\nvar subscriptionClosed = function (subscription) {\n  return subscription._o === undefined;\n};\n\nvar closeSubscription = function (subscription) {\n  if (!subscriptionClosed(subscription)) {\n    subscription._o = undefined;\n    cleanupSubscription(subscription);\n  }\n};\n\nvar Subscription = function (observer, subscriber) {\n  anObject(observer);\n  this._c = undefined;\n  this._o = observer;\n  observer = new SubscriptionObserver(this);\n  try {\n    var cleanup = subscriber(observer);\n    var subscription = cleanup;\n    if (cleanup != null) {\n      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };\n      else aFunction(cleanup);\n      this._c = cleanup;\n    }\n  } catch (e) {\n    observer.error(e);\n    return;\n  } if (subscriptionClosed(this)) cleanupSubscription(this);\n};\n\nSubscription.prototype = redefineAll({}, {\n  unsubscribe: function unsubscribe() { closeSubscription(this); }\n});\n\nvar SubscriptionObserver = function (subscription) {\n  this._s = subscription;\n};\n\nSubscriptionObserver.prototype = redefineAll({}, {\n  next: function next(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      try {\n        var m = getMethod(observer.next);\n        if (m) return m.call(observer, value);\n      } catch (e) {\n        try {\n          closeSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      }\n    }\n  },\n  error: function error(value) {\n    var subscription = this._s;\n    if (subscriptionClosed(subscription)) throw value;\n    var observer = subscription._o;\n    subscription._o = undefined;\n    try {\n      var m = getMethod(observer.error);\n      if (!m) throw value;\n      value = m.call(observer, value);\n    } catch (e) {\n      try {\n        cleanupSubscription(subscription);\n      } finally {\n        throw e;\n      }\n    } cleanupSubscription(subscription);\n    return value;\n  },\n  complete: function complete(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      subscription._o = undefined;\n      try {\n        var m = getMethod(observer.complete);\n        value = m ? m.call(observer, value) : undefined;\n      } catch (e) {\n        try {\n          cleanupSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      } cleanupSubscription(subscription);\n      return value;\n    }\n  }\n});\n\nvar $Observable = function Observable(subscriber) {\n  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);\n};\n\nredefineAll($Observable.prototype, {\n  subscribe: function subscribe(observer) {\n    return new Subscription(observer, this._f);\n  },\n  forEach: function forEach(fn) {\n    var that = this;\n    return new (core.Promise || global.Promise)(function (resolve, reject) {\n      aFunction(fn);\n      var subscription = that.subscribe({\n        next: function (value) {\n          try {\n            return fn(value);\n          } catch (e) {\n            reject(e);\n            subscription.unsubscribe();\n          }\n        },\n        error: reject,\n        complete: resolve\n      });\n    });\n  }\n});\n\nredefineAll($Observable, {\n  from: function from(x) {\n    var C = typeof this === 'function' ? this : $Observable;\n    var method = getMethod(anObject(x)[OBSERVABLE]);\n    if (method) {\n      var observable = anObject(method.call(x));\n      return observable.constructor === C ? observable : new C(function (observer) {\n        return observable.subscribe(observer);\n      });\n    }\n    return new C(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          try {\n            if (forOf(x, false, function (it) {\n              observer.next(it);\n              if (done) return RETURN;\n            }) === RETURN) return;\n          } catch (e) {\n            if (done) throw e;\n            observer.error(e);\n            return;\n          } observer.complete();\n        }\n      });\n      return function () { done = true; };\n    });\n  },\n  of: function of() {\n    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];\n    return new (typeof this === 'function' ? this : $Observable)(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          for (var j = 0; j < items.length; ++j) {\n            observer.next(items[j]);\n            if (done) return;\n          } observer.complete();\n        }\n      });\n      return function () { done = true; };\n    });\n  }\n});\n\nhide($Observable.prototype, OBSERVABLE, function () { return this; });\n\n$export($export.G, { Observable: $Observable });\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('Observable');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.promise.try.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar ordinaryDefineOwnMetadata = metadata.set;\n\nmetadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {\n  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.reflect.define-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar getOrCreateMetadataMap = metadata.map;\nvar store = metadata.store;\n\nmetadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {\n  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);\n  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);\n  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;\n  if (metadataMap.size) return true;\n  var targetMetadata = store.get(target);\n  targetMetadata['delete'](targetKey);\n  return !!targetMetadata.size || store['delete'](target);\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.reflect.delete-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var Set = __webpack_require__(/*! ./es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/core-js/modules/_array-from-iterable.js\");\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nvar ordinaryMetadataKeys = function (O, P) {\n  var oKeys = ordinaryOwnMetadataKeys(O, P);\n  var parent = getPrototypeOf(O);\n  if (parent === null) return oKeys;\n  var pKeys = ordinaryMetadataKeys(parent, P);\n  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;\n};\n\nmetadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {\n  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nvar ordinaryGetMetadata = function (MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;\n};\n\nmetadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.reflect.get-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {\n  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryGetOwnMetadata(metadataKey, anObject(target)\n    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.reflect.get-own-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nvar ordinaryHasMetadata = function (MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return true;\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;\n};\n\nmetadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.reflect.has-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryHasOwnMetadata(metadataKey, anObject(target)\n    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.reflect.has-own-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toMetaKey = $metadata.key;\nvar ordinaryDefineOwnMetadata = $metadata.set;\n\n$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {\n  return function decorator(target, targetKey) {\n    ordinaryDefineOwnMetadata(\n      metadataKey, metadataValue,\n      (targetKey !== undefined ? anObject : aFunction)(target),\n      toMetaKey(targetKey)\n    );\n  };\n} });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.reflect.metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.from.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('Set');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.set.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.of.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('Set');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.set.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/core-js/modules/_collection-to-json.js\")('Set') });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.set.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.at.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.at.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/mathiasbynens/String.prototype.at\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n$export($export.P, 'String', {\n  at: function at(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.string.at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.match-all.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.match-all.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/String.prototype.matchAll/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar getFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar RegExpProto = RegExp.prototype;\n\nvar $RegExpStringIterator = function (regexp, string) {\n  this._r = regexp;\n  this._s = string;\n};\n\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\")($RegExpStringIterator, 'RegExp String', function next() {\n  var match = this._r.exec(this._s);\n  return { value: match, done: match === null };\n});\n\n$export($export.P, 'String', {\n  matchAll: function matchAll(regexp) {\n    defined(this);\n    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');\n    var S = String(this);\n    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);\n    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);\n    rx.lastIndex = toLength(regexp.lastIndex);\n    return new $RegExpStringIterator(rx, S);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.string.match-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\n$export($export.P + $export.F * /Version\\/10\\.\\d+(\\.\\d+)? Safari\\//.test(userAgent), 'String', {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\n$export($export.P + $export.F * /Version\\/10\\.\\d+(\\.\\d+)? Safari\\//.test(userAgent), 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.observable.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.system.global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.system.global.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\") });\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.system.global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('WeakMap');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.weak-map.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('WeakMap');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.weak-map.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('WeakSet');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.weak-set.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('WeakSet');\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es7.weak-set.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\");\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar wrap = function (set) {\n  return function (fn, time /* , ...args */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js/shim.js":
/*!**************************************!*\
  !*** ./node_modules/core-js/shim.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ./modules/es6.object.create */ \"./node_modules/core-js/modules/es6.object.create.js\");\n__webpack_require__(/*! ./modules/es6.object.define-property */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n__webpack_require__(/*! ./modules/es6.object.define-properties */ \"./node_modules/core-js/modules/es6.object.define-properties.js\");\n__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ \"./node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.object.keys */ \"./node_modules/core-js/modules/es6.object.keys.js\");\n__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ \"./node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n__webpack_require__(/*! ./modules/es6.object.freeze */ \"./node_modules/core-js/modules/es6.object.freeze.js\");\n__webpack_require__(/*! ./modules/es6.object.seal */ \"./node_modules/core-js/modules/es6.object.seal.js\");\n__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ \"./node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n__webpack_require__(/*! ./modules/es6.object.is-frozen */ \"./node_modules/core-js/modules/es6.object.is-frozen.js\");\n__webpack_require__(/*! ./modules/es6.object.is-sealed */ \"./node_modules/core-js/modules/es6.object.is-sealed.js\");\n__webpack_require__(/*! ./modules/es6.object.is-extensible */ \"./node_modules/core-js/modules/es6.object.is-extensible.js\");\n__webpack_require__(/*! ./modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n__webpack_require__(/*! ./modules/es6.object.is */ \"./node_modules/core-js/modules/es6.object.is.js\");\n__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ \"./node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ./modules/es6.function.bind */ \"./node_modules/core-js/modules/es6.function.bind.js\");\n__webpack_require__(/*! ./modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n__webpack_require__(/*! ./modules/es6.function.has-instance */ \"./node_modules/core-js/modules/es6.function.has-instance.js\");\n__webpack_require__(/*! ./modules/es6.parse-int */ \"./node_modules/core-js/modules/es6.parse-int.js\");\n__webpack_require__(/*! ./modules/es6.parse-float */ \"./node_modules/core-js/modules/es6.parse-float.js\");\n__webpack_require__(/*! ./modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n__webpack_require__(/*! ./modules/es6.number.to-fixed */ \"./node_modules/core-js/modules/es6.number.to-fixed.js\");\n__webpack_require__(/*! ./modules/es6.number.to-precision */ \"./node_modules/core-js/modules/es6.number.to-precision.js\");\n__webpack_require__(/*! ./modules/es6.number.epsilon */ \"./node_modules/core-js/modules/es6.number.epsilon.js\");\n__webpack_require__(/*! ./modules/es6.number.is-finite */ \"./node_modules/core-js/modules/es6.number.is-finite.js\");\n__webpack_require__(/*! ./modules/es6.number.is-integer */ \"./node_modules/core-js/modules/es6.number.is-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.is-nan */ \"./node_modules/core-js/modules/es6.number.is-nan.js\");\n__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ \"./node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ \"./node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ \"./node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.parse-float */ \"./node_modules/core-js/modules/es6.number.parse-float.js\");\n__webpack_require__(/*! ./modules/es6.number.parse-int */ \"./node_modules/core-js/modules/es6.number.parse-int.js\");\n__webpack_require__(/*! ./modules/es6.math.acosh */ \"./node_modules/core-js/modules/es6.math.acosh.js\");\n__webpack_require__(/*! ./modules/es6.math.asinh */ \"./node_modules/core-js/modules/es6.math.asinh.js\");\n__webpack_require__(/*! ./modules/es6.math.atanh */ \"./node_modules/core-js/modules/es6.math.atanh.js\");\n__webpack_require__(/*! ./modules/es6.math.cbrt */ \"./node_modules/core-js/modules/es6.math.cbrt.js\");\n__webpack_require__(/*! ./modules/es6.math.clz32 */ \"./node_modules/core-js/modules/es6.math.clz32.js\");\n__webpack_require__(/*! ./modules/es6.math.cosh */ \"./node_modules/core-js/modules/es6.math.cosh.js\");\n__webpack_require__(/*! ./modules/es6.math.expm1 */ \"./node_modules/core-js/modules/es6.math.expm1.js\");\n__webpack_require__(/*! ./modules/es6.math.fround */ \"./node_modules/core-js/modules/es6.math.fround.js\");\n__webpack_require__(/*! ./modules/es6.math.hypot */ \"./node_modules/core-js/modules/es6.math.hypot.js\");\n__webpack_require__(/*! ./modules/es6.math.imul */ \"./node_modules/core-js/modules/es6.math.imul.js\");\n__webpack_require__(/*! ./modules/es6.math.log10 */ \"./node_modules/core-js/modules/es6.math.log10.js\");\n__webpack_require__(/*! ./modules/es6.math.log1p */ \"./node_modules/core-js/modules/es6.math.log1p.js\");\n__webpack_require__(/*! ./modules/es6.math.log2 */ \"./node_modules/core-js/modules/es6.math.log2.js\");\n__webpack_require__(/*! ./modules/es6.math.sign */ \"./node_modules/core-js/modules/es6.math.sign.js\");\n__webpack_require__(/*! ./modules/es6.math.sinh */ \"./node_modules/core-js/modules/es6.math.sinh.js\");\n__webpack_require__(/*! ./modules/es6.math.tanh */ \"./node_modules/core-js/modules/es6.math.tanh.js\");\n__webpack_require__(/*! ./modules/es6.math.trunc */ \"./node_modules/core-js/modules/es6.math.trunc.js\");\n__webpack_require__(/*! ./modules/es6.string.from-code-point */ \"./node_modules/core-js/modules/es6.string.from-code-point.js\");\n__webpack_require__(/*! ./modules/es6.string.raw */ \"./node_modules/core-js/modules/es6.string.raw.js\");\n__webpack_require__(/*! ./modules/es6.string.trim */ \"./node_modules/core-js/modules/es6.string.trim.js\");\n__webpack_require__(/*! ./modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ./modules/es6.string.code-point-at */ \"./node_modules/core-js/modules/es6.string.code-point-at.js\");\n__webpack_require__(/*! ./modules/es6.string.ends-with */ \"./node_modules/core-js/modules/es6.string.ends-with.js\");\n__webpack_require__(/*! ./modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n__webpack_require__(/*! ./modules/es6.string.repeat */ \"./node_modules/core-js/modules/es6.string.repeat.js\");\n__webpack_require__(/*! ./modules/es6.string.starts-with */ \"./node_modules/core-js/modules/es6.string.starts-with.js\");\n__webpack_require__(/*! ./modules/es6.string.anchor */ \"./node_modules/core-js/modules/es6.string.anchor.js\");\n__webpack_require__(/*! ./modules/es6.string.big */ \"./node_modules/core-js/modules/es6.string.big.js\");\n__webpack_require__(/*! ./modules/es6.string.blink */ \"./node_modules/core-js/modules/es6.string.blink.js\");\n__webpack_require__(/*! ./modules/es6.string.bold */ \"./node_modules/core-js/modules/es6.string.bold.js\");\n__webpack_require__(/*! ./modules/es6.string.fixed */ \"./node_modules/core-js/modules/es6.string.fixed.js\");\n__webpack_require__(/*! ./modules/es6.string.fontcolor */ \"./node_modules/core-js/modules/es6.string.fontcolor.js\");\n__webpack_require__(/*! ./modules/es6.string.fontsize */ \"./node_modules/core-js/modules/es6.string.fontsize.js\");\n__webpack_require__(/*! ./modules/es6.string.italics */ \"./node_modules/core-js/modules/es6.string.italics.js\");\n__webpack_require__(/*! ./modules/es6.string.link */ \"./node_modules/core-js/modules/es6.string.link.js\");\n__webpack_require__(/*! ./modules/es6.string.small */ \"./node_modules/core-js/modules/es6.string.small.js\");\n__webpack_require__(/*! ./modules/es6.string.strike */ \"./node_modules/core-js/modules/es6.string.strike.js\");\n__webpack_require__(/*! ./modules/es6.string.sub */ \"./node_modules/core-js/modules/es6.string.sub.js\");\n__webpack_require__(/*! ./modules/es6.string.sup */ \"./node_modules/core-js/modules/es6.string.sup.js\");\n__webpack_require__(/*! ./modules/es6.date.now */ \"./node_modules/core-js/modules/es6.date.now.js\");\n__webpack_require__(/*! ./modules/es6.date.to-json */ \"./node_modules/core-js/modules/es6.date.to-json.js\");\n__webpack_require__(/*! ./modules/es6.date.to-iso-string */ \"./node_modules/core-js/modules/es6.date.to-iso-string.js\");\n__webpack_require__(/*! ./modules/es6.date.to-string */ \"./node_modules/core-js/modules/es6.date.to-string.js\");\n__webpack_require__(/*! ./modules/es6.date.to-primitive */ \"./node_modules/core-js/modules/es6.date.to-primitive.js\");\n__webpack_require__(/*! ./modules/es6.array.is-array */ \"./node_modules/core-js/modules/es6.array.is-array.js\");\n__webpack_require__(/*! ./modules/es6.array.from */ \"./node_modules/core-js/modules/es6.array.from.js\");\n__webpack_require__(/*! ./modules/es6.array.of */ \"./node_modules/core-js/modules/es6.array.of.js\");\n__webpack_require__(/*! ./modules/es6.array.join */ \"./node_modules/core-js/modules/es6.array.join.js\");\n__webpack_require__(/*! ./modules/es6.array.slice */ \"./node_modules/core-js/modules/es6.array.slice.js\");\n__webpack_require__(/*! ./modules/es6.array.sort */ \"./node_modules/core-js/modules/es6.array.sort.js\");\n__webpack_require__(/*! ./modules/es6.array.for-each */ \"./node_modules/core-js/modules/es6.array.for-each.js\");\n__webpack_require__(/*! ./modules/es6.array.map */ \"./node_modules/core-js/modules/es6.array.map.js\");\n__webpack_require__(/*! ./modules/es6.array.filter */ \"./node_modules/core-js/modules/es6.array.filter.js\");\n__webpack_require__(/*! ./modules/es6.array.some */ \"./node_modules/core-js/modules/es6.array.some.js\");\n__webpack_require__(/*! ./modules/es6.array.every */ \"./node_modules/core-js/modules/es6.array.every.js\");\n__webpack_require__(/*! ./modules/es6.array.reduce */ \"./node_modules/core-js/modules/es6.array.reduce.js\");\n__webpack_require__(/*! ./modules/es6.array.reduce-right */ \"./node_modules/core-js/modules/es6.array.reduce-right.js\");\n__webpack_require__(/*! ./modules/es6.array.index-of */ \"./node_modules/core-js/modules/es6.array.index-of.js\");\n__webpack_require__(/*! ./modules/es6.array.last-index-of */ \"./node_modules/core-js/modules/es6.array.last-index-of.js\");\n__webpack_require__(/*! ./modules/es6.array.copy-within */ \"./node_modules/core-js/modules/es6.array.copy-within.js\");\n__webpack_require__(/*! ./modules/es6.array.fill */ \"./node_modules/core-js/modules/es6.array.fill.js\");\n__webpack_require__(/*! ./modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n__webpack_require__(/*! ./modules/es6.array.find-index */ \"./node_modules/core-js/modules/es6.array.find-index.js\");\n__webpack_require__(/*! ./modules/es6.array.species */ \"./node_modules/core-js/modules/es6.array.species.js\");\n__webpack_require__(/*! ./modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n__webpack_require__(/*! ./modules/es6.regexp.constructor */ \"./node_modules/core-js/modules/es6.regexp.constructor.js\");\n__webpack_require__(/*! ./modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n__webpack_require__(/*! ./modules/es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\n__webpack_require__(/*! ./modules/es6.regexp.match */ \"./node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ./modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ./modules/es6.regexp.search */ \"./node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ./modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n__webpack_require__(/*! ./modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ./modules/es6.map */ \"./node_modules/core-js/modules/es6.map.js\");\n__webpack_require__(/*! ./modules/es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\n__webpack_require__(/*! ./modules/es6.weak-map */ \"./node_modules/core-js/modules/es6.weak-map.js\");\n__webpack_require__(/*! ./modules/es6.weak-set */ \"./node_modules/core-js/modules/es6.weak-set.js\");\n__webpack_require__(/*! ./modules/es6.typed.array-buffer */ \"./node_modules/core-js/modules/es6.typed.array-buffer.js\");\n__webpack_require__(/*! ./modules/es6.typed.data-view */ \"./node_modules/core-js/modules/es6.typed.data-view.js\");\n__webpack_require__(/*! ./modules/es6.typed.int8-array */ \"./node_modules/core-js/modules/es6.typed.int8-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint8-array */ \"./node_modules/core-js/modules/es6.typed.uint8-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ \"./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.int16-array */ \"./node_modules/core-js/modules/es6.typed.int16-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint16-array */ \"./node_modules/core-js/modules/es6.typed.uint16-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.int32-array */ \"./node_modules/core-js/modules/es6.typed.int32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint32-array */ \"./node_modules/core-js/modules/es6.typed.uint32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.float32-array */ \"./node_modules/core-js/modules/es6.typed.float32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.float64-array */ \"./node_modules/core-js/modules/es6.typed.float64-array.js\");\n__webpack_require__(/*! ./modules/es6.reflect.apply */ \"./node_modules/core-js/modules/es6.reflect.apply.js\");\n__webpack_require__(/*! ./modules/es6.reflect.construct */ \"./node_modules/core-js/modules/es6.reflect.construct.js\");\n__webpack_require__(/*! ./modules/es6.reflect.define-property */ \"./node_modules/core-js/modules/es6.reflect.define-property.js\");\n__webpack_require__(/*! ./modules/es6.reflect.delete-property */ \"./node_modules/core-js/modules/es6.reflect.delete-property.js\");\n__webpack_require__(/*! ./modules/es6.reflect.enumerate */ \"./node_modules/core-js/modules/es6.reflect.enumerate.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get */ \"./node_modules/core-js/modules/es6.reflect.get.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.get-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.reflect.has */ \"./node_modules/core-js/modules/es6.reflect.has.js\");\n__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ \"./node_modules/core-js/modules/es6.reflect.is-extensible.js\");\n__webpack_require__(/*! ./modules/es6.reflect.own-keys */ \"./node_modules/core-js/modules/es6.reflect.own-keys.js\");\n__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ \"./node_modules/core-js/modules/es6.reflect.prevent-extensions.js\");\n__webpack_require__(/*! ./modules/es6.reflect.set */ \"./node_modules/core-js/modules/es6.reflect.set.js\");\n__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.set-prototype-of.js\");\n__webpack_require__(/*! ./modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\n__webpack_require__(/*! ./modules/es7.array.flat-map */ \"./node_modules/core-js/modules/es7.array.flat-map.js\");\n__webpack_require__(/*! ./modules/es7.array.flatten */ \"./node_modules/core-js/modules/es7.array.flatten.js\");\n__webpack_require__(/*! ./modules/es7.string.at */ \"./node_modules/core-js/modules/es7.string.at.js\");\n__webpack_require__(/*! ./modules/es7.string.pad-start */ \"./node_modules/core-js/modules/es7.string.pad-start.js\");\n__webpack_require__(/*! ./modules/es7.string.pad-end */ \"./node_modules/core-js/modules/es7.string.pad-end.js\");\n__webpack_require__(/*! ./modules/es7.string.trim-left */ \"./node_modules/core-js/modules/es7.string.trim-left.js\");\n__webpack_require__(/*! ./modules/es7.string.trim-right */ \"./node_modules/core-js/modules/es7.string.trim-right.js\");\n__webpack_require__(/*! ./modules/es7.string.match-all */ \"./node_modules/core-js/modules/es7.string.match-all.js\");\n__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ./modules/es7.symbol.observable */ \"./node_modules/core-js/modules/es7.symbol.observable.js\");\n__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ \"./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js\");\n__webpack_require__(/*! ./modules/es7.object.values */ \"./node_modules/core-js/modules/es7.object.values.js\");\n__webpack_require__(/*! ./modules/es7.object.entries */ \"./node_modules/core-js/modules/es7.object.entries.js\");\n__webpack_require__(/*! ./modules/es7.object.define-getter */ \"./node_modules/core-js/modules/es7.object.define-getter.js\");\n__webpack_require__(/*! ./modules/es7.object.define-setter */ \"./node_modules/core-js/modules/es7.object.define-setter.js\");\n__webpack_require__(/*! ./modules/es7.object.lookup-getter */ \"./node_modules/core-js/modules/es7.object.lookup-getter.js\");\n__webpack_require__(/*! ./modules/es7.object.lookup-setter */ \"./node_modules/core-js/modules/es7.object.lookup-setter.js\");\n__webpack_require__(/*! ./modules/es7.map.to-json */ \"./node_modules/core-js/modules/es7.map.to-json.js\");\n__webpack_require__(/*! ./modules/es7.set.to-json */ \"./node_modules/core-js/modules/es7.set.to-json.js\");\n__webpack_require__(/*! ./modules/es7.map.of */ \"./node_modules/core-js/modules/es7.map.of.js\");\n__webpack_require__(/*! ./modules/es7.set.of */ \"./node_modules/core-js/modules/es7.set.of.js\");\n__webpack_require__(/*! ./modules/es7.weak-map.of */ \"./node_modules/core-js/modules/es7.weak-map.of.js\");\n__webpack_require__(/*! ./modules/es7.weak-set.of */ \"./node_modules/core-js/modules/es7.weak-set.of.js\");\n__webpack_require__(/*! ./modules/es7.map.from */ \"./node_modules/core-js/modules/es7.map.from.js\");\n__webpack_require__(/*! ./modules/es7.set.from */ \"./node_modules/core-js/modules/es7.set.from.js\");\n__webpack_require__(/*! ./modules/es7.weak-map.from */ \"./node_modules/core-js/modules/es7.weak-map.from.js\");\n__webpack_require__(/*! ./modules/es7.weak-set.from */ \"./node_modules/core-js/modules/es7.weak-set.from.js\");\n__webpack_require__(/*! ./modules/es7.global */ \"./node_modules/core-js/modules/es7.global.js\");\n__webpack_require__(/*! ./modules/es7.system.global */ \"./node_modules/core-js/modules/es7.system.global.js\");\n__webpack_require__(/*! ./modules/es7.error.is-error */ \"./node_modules/core-js/modules/es7.error.is-error.js\");\n__webpack_require__(/*! ./modules/es7.math.clamp */ \"./node_modules/core-js/modules/es7.math.clamp.js\");\n__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ \"./node_modules/core-js/modules/es7.math.deg-per-rad.js\");\n__webpack_require__(/*! ./modules/es7.math.degrees */ \"./node_modules/core-js/modules/es7.math.degrees.js\");\n__webpack_require__(/*! ./modules/es7.math.fscale */ \"./node_modules/core-js/modules/es7.math.fscale.js\");\n__webpack_require__(/*! ./modules/es7.math.iaddh */ \"./node_modules/core-js/modules/es7.math.iaddh.js\");\n__webpack_require__(/*! ./modules/es7.math.isubh */ \"./node_modules/core-js/modules/es7.math.isubh.js\");\n__webpack_require__(/*! ./modules/es7.math.imulh */ \"./node_modules/core-js/modules/es7.math.imulh.js\");\n__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ \"./node_modules/core-js/modules/es7.math.rad-per-deg.js\");\n__webpack_require__(/*! ./modules/es7.math.radians */ \"./node_modules/core-js/modules/es7.math.radians.js\");\n__webpack_require__(/*! ./modules/es7.math.scale */ \"./node_modules/core-js/modules/es7.math.scale.js\");\n__webpack_require__(/*! ./modules/es7.math.umulh */ \"./node_modules/core-js/modules/es7.math.umulh.js\");\n__webpack_require__(/*! ./modules/es7.math.signbit */ \"./node_modules/core-js/modules/es7.math.signbit.js\");\n__webpack_require__(/*! ./modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ./modules/es7.promise.try */ \"./node_modules/core-js/modules/es7.promise.try.js\");\n__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ \"./node_modules/core-js/modules/es7.reflect.define-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ \"./node_modules/core-js/modules/es7.reflect.delete-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ \"./node_modules/core-js/modules/es7.reflect.get-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ \"./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ \"./node_modules/core-js/modules/es7.reflect.get-own-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ \"./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js\");\n__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ \"./node_modules/core-js/modules/es7.reflect.has-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ \"./node_modules/core-js/modules/es7.reflect.has-own-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.metadata */ \"./node_modules/core-js/modules/es7.reflect.metadata.js\");\n__webpack_require__(/*! ./modules/es7.asap */ \"./node_modules/core-js/modules/es7.asap.js\");\n__webpack_require__(/*! ./modules/es7.observable */ \"./node_modules/core-js/modules/es7.observable.js\");\n__webpack_require__(/*! ./modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n__webpack_require__(/*! ./modules/web.immediate */ \"./node_modules/core-js/modules/web.immediate.js\");\n__webpack_require__(/*! ./modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ./modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/shim.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/**\n * Copyright (c) 2014, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * https://raw.github.com/facebook/regenerator/master/LICENSE file. An\n * additional grant of patent rights can be found in the PATENTS file in\n * the same directory.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    if (typeof global.process === \"object\" && global.process.domain) {\n      invoke = global.process.domain.bind(invoke);\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // Among the various tricks for obtaining a reference to the global\n  // object, this seems to be the most reliable technique that does not\n  // use indirect eval (which violates Content Security Policy).\n  typeof global === \"object\" ? global :\n  typeof window === \"object\" ? window :\n  typeof self === \"object\" ? self : this\n);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/velocity-animate/velocity.js":
/*!***************************************************!*\
  !*** ./node_modules/velocity-animate/velocity.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */\r\n\r\n/*************************\r\n Velocity jQuery Shim\r\n *************************/\r\n\r\n/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */\r\n\r\n/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */\r\n/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */\r\n/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */\r\n\r\n(function(window) {\r\n\t\"use strict\";\r\n\t/***************\r\n\t Setup\r\n\t ***************/\r\n\r\n\t/* If jQuery is already loaded, there's no point in loading this shim. */\r\n\tif (window.jQuery) {\r\n\t\treturn;\r\n\t}\r\n\r\n\t/* jQuery base. */\r\n\tvar $ = function(selector, context) {\r\n\t\treturn new $.fn.init(selector, context);\r\n\t};\r\n\r\n\t/********************\r\n\t Private Methods\r\n\t ********************/\r\n\r\n\t/* jQuery */\r\n\t$.isWindow = function(obj) {\r\n\t\t/* jshint eqeqeq: false */\r\n\t\treturn obj && obj === obj.window;\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.type = function(obj) {\r\n\t\tif (!obj) {\r\n\t\t\treturn obj + \"\";\r\n\t\t}\r\n\r\n\t\treturn typeof obj === \"object\" || typeof obj === \"function\" ?\r\n\t\t\t\tclass2type[toString.call(obj)] || \"object\" :\r\n\t\t\t\ttypeof obj;\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.isArray = Array.isArray || function(obj) {\r\n\t\treturn $.type(obj) === \"array\";\r\n\t};\r\n\r\n\t/* jQuery */\r\n\tfunction isArraylike(obj) {\r\n\t\tvar length = obj.length,\r\n\t\t\t\ttype = $.type(obj);\r\n\r\n\t\tif (type === \"function\" || $.isWindow(obj)) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\tif (obj.nodeType === 1 && length) {\r\n\t\t\treturn true;\r\n\t\t}\r\n\r\n\t\treturn type === \"array\" || length === 0 || typeof length === \"number\" && length > 0 && (length - 1) in obj;\r\n\t}\r\n\r\n\t/***************\r\n\t $ Methods\r\n\t ***************/\r\n\r\n\t/* jQuery: Support removed for IE<9. */\r\n\t$.isPlainObject = function(obj) {\r\n\t\tvar key;\r\n\r\n\t\tif (!obj || $.type(obj) !== \"object\" || obj.nodeType || $.isWindow(obj)) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\ttry {\r\n\t\t\tif (obj.constructor &&\r\n\t\t\t\t\t!hasOwn.call(obj, \"constructor\") &&\r\n\t\t\t\t\t!hasOwn.call(obj.constructor.prototype, \"isPrototypeOf\")) {\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\t\t} catch (e) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\tfor (key in obj) {\r\n\t\t}\r\n\r\n\t\treturn key === undefined || hasOwn.call(obj, key);\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.each = function(obj, callback, args) {\r\n\t\tvar value,\r\n\t\t\t\ti = 0,\r\n\t\t\t\tlength = obj.length,\r\n\t\t\t\tisArray = isArraylike(obj);\r\n\r\n\t\tif (args) {\r\n\t\t\tif (isArray) {\r\n\t\t\t\tfor (; i < length; i++) {\r\n\t\t\t\t\tvalue = callback.apply(obj[i], args);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfor (i in obj) {\r\n\t\t\t\t\tif (!obj.hasOwnProperty(i)) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tvalue = callback.apply(obj[i], args);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t} else {\r\n\t\t\tif (isArray) {\r\n\t\t\t\tfor (; i < length; i++) {\r\n\t\t\t\t\tvalue = callback.call(obj[i], i, obj[i]);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfor (i in obj) {\r\n\t\t\t\t\tif (!obj.hasOwnProperty(i)) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tvalue = callback.call(obj[i], i, obj[i]);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn obj;\r\n\t};\r\n\r\n\t/* Custom */\r\n\t$.data = function(node, key, value) {\r\n\t\t/* $.getData() */\r\n\t\tif (value === undefined) {\r\n\t\t\tvar getId = node[$.expando],\r\n\t\t\t\t\tstore = getId && cache[getId];\r\n\r\n\t\t\tif (key === undefined) {\r\n\t\t\t\treturn store;\r\n\t\t\t} else if (store) {\r\n\t\t\t\tif (key in store) {\r\n\t\t\t\t\treturn store[key];\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t/* $.setData() */\r\n\t\t} else if (key !== undefined) {\r\n\t\t\tvar setId = node[$.expando] || (node[$.expando] = ++$.uuid);\r\n\r\n\t\t\tcache[setId] = cache[setId] || {};\r\n\t\t\tcache[setId][key] = value;\r\n\r\n\t\t\treturn value;\r\n\t\t}\r\n\t};\r\n\r\n\t/* Custom */\r\n\t$.removeData = function(node, keys) {\r\n\t\tvar id = node[$.expando],\r\n\t\t\t\tstore = id && cache[id];\r\n\r\n\t\tif (store) {\r\n\t\t\t// Cleanup the entire store if no keys are provided.\r\n\t\t\tif (!keys) {\r\n\t\t\t\tdelete cache[id];\r\n\t\t\t} else {\r\n\t\t\t\t$.each(keys, function(_, key) {\r\n\t\t\t\t\tdelete store[key];\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.extend = function() {\r\n\t\tvar src, copyIsArray, copy, name, options, clone,\r\n\t\t\t\ttarget = arguments[0] || {},\r\n\t\t\t\ti = 1,\r\n\t\t\t\tlength = arguments.length,\r\n\t\t\t\tdeep = false;\r\n\r\n\t\tif (typeof target === \"boolean\") {\r\n\t\t\tdeep = target;\r\n\r\n\t\t\ttarget = arguments[i] || {};\r\n\t\t\ti++;\r\n\t\t}\r\n\r\n\t\tif (typeof target !== \"object\" && $.type(target) !== \"function\") {\r\n\t\t\ttarget = {};\r\n\t\t}\r\n\r\n\t\tif (i === length) {\r\n\t\t\ttarget = this;\r\n\t\t\ti--;\r\n\t\t}\r\n\r\n\t\tfor (; i < length; i++) {\r\n\t\t\tif ((options = arguments[i])) {\r\n\t\t\t\tfor (name in options) {\r\n\t\t\t\t\tif (!options.hasOwnProperty(name)) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tsrc = target[name];\r\n\t\t\t\t\tcopy = options[name];\r\n\r\n\t\t\t\t\tif (target === copy) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {\r\n\t\t\t\t\t\tif (copyIsArray) {\r\n\t\t\t\t\t\t\tcopyIsArray = false;\r\n\t\t\t\t\t\t\tclone = src && $.isArray(src) ? src : [];\r\n\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tclone = src && $.isPlainObject(src) ? src : {};\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\ttarget[name] = $.extend(deep, clone, copy);\r\n\r\n\t\t\t\t\t} else if (copy !== undefined) {\r\n\t\t\t\t\t\ttarget[name] = copy;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn target;\r\n\t};\r\n\r\n\t/* jQuery 1.4.3 */\r\n\t$.queue = function(elem, type, data) {\r\n\t\tfunction $makeArray(arr, results) {\r\n\t\t\tvar ret = results || [];\r\n\r\n\t\t\tif (arr) {\r\n\t\t\t\tif (isArraylike(Object(arr))) {\r\n\t\t\t\t\t/* $.merge */\r\n\t\t\t\t\t(function(first, second) {\r\n\t\t\t\t\t\tvar len = +second.length,\r\n\t\t\t\t\t\t\t\tj = 0,\r\n\t\t\t\t\t\t\t\ti = first.length;\r\n\r\n\t\t\t\t\t\twhile (j < len) {\r\n\t\t\t\t\t\t\tfirst[i++] = second[j++];\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (len !== len) {\r\n\t\t\t\t\t\t\twhile (second[j] !== undefined) {\r\n\t\t\t\t\t\t\t\tfirst[i++] = second[j++];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tfirst.length = i;\r\n\r\n\t\t\t\t\t\treturn first;\r\n\t\t\t\t\t})(ret, typeof arr === \"string\" ? [arr] : arr);\r\n\t\t\t\t} else {\r\n\t\t\t\t\t[].push.call(ret, arr);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn ret;\r\n\t\t}\r\n\r\n\t\tif (!elem) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\ttype = (type || \"fx\") + \"queue\";\r\n\r\n\t\tvar q = $.data(elem, type);\r\n\r\n\t\tif (!data) {\r\n\t\t\treturn q || [];\r\n\t\t}\r\n\r\n\t\tif (!q || $.isArray(data)) {\r\n\t\t\tq = $.data(elem, type, $makeArray(data));\r\n\t\t} else {\r\n\t\t\tq.push(data);\r\n\t\t}\r\n\r\n\t\treturn q;\r\n\t};\r\n\r\n\t/* jQuery 1.4.3 */\r\n\t$.dequeue = function(elems, type) {\r\n\t\t/* Custom: Embed element iteration. */\r\n\t\t$.each(elems.nodeType ? [elems] : elems, function(i, elem) {\r\n\t\t\ttype = type || \"fx\";\r\n\r\n\t\t\tvar queue = $.queue(elem, type),\r\n\t\t\t\t\tfn = queue.shift();\r\n\r\n\t\t\tif (fn === \"inprogress\") {\r\n\t\t\t\tfn = queue.shift();\r\n\t\t\t}\r\n\r\n\t\t\tif (fn) {\r\n\t\t\t\tif (type === \"fx\") {\r\n\t\t\t\t\tqueue.unshift(\"inprogress\");\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfn.call(elem, function() {\r\n\t\t\t\t\t$.dequeue(elem, type);\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\t};\r\n\r\n\t/******************\r\n\t $.fn Methods\r\n\t ******************/\r\n\r\n\t/* jQuery */\r\n\t$.fn = $.prototype = {\r\n\t\tinit: function(selector) {\r\n\t\t\t/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */\r\n\t\t\tif (selector.nodeType) {\r\n\t\t\t\tthis[0] = selector;\r\n\r\n\t\t\t\treturn this;\r\n\t\t\t} else {\r\n\t\t\t\tthrow new Error(\"Not a DOM node.\");\r\n\t\t\t}\r\n\t\t},\r\n\t\toffset: function() {\r\n\t\t\t/* jQuery altered code: Dropped disconnected DOM node checking. */\r\n\t\t\tvar box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};\r\n\r\n\t\t\treturn {\r\n\t\t\t\ttop: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),\r\n\t\t\t\tleft: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)\r\n\t\t\t};\r\n\t\t},\r\n\t\tposition: function() {\r\n\t\t\t/* jQuery */\r\n\t\t\tfunction offsetParentFn(elem) {\r\n\t\t\t\tvar offsetParent = elem.offsetParent;\r\n\r\n\t\t\t\twhile (offsetParent && (offsetParent.nodeName.toLowerCase() !== \"html\" && offsetParent.style && offsetParent.style.position.toLowerCase() === \"static\")) {\r\n\t\t\t\t\toffsetParent = offsetParent.offsetParent;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn offsetParent || document;\r\n\t\t\t}\r\n\r\n\t\t\t/* Zepto */\r\n\t\t\tvar elem = this[0],\r\n\t\t\t\t\toffsetParent = offsetParentFn(elem),\r\n\t\t\t\t\toffset = this.offset(),\r\n\t\t\t\t\tparentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();\r\n\r\n\t\t\toffset.top -= parseFloat(elem.style.marginTop) || 0;\r\n\t\t\toffset.left -= parseFloat(elem.style.marginLeft) || 0;\r\n\r\n\t\t\tif (offsetParent.style) {\r\n\t\t\t\tparentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;\r\n\t\t\t\tparentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;\r\n\t\t\t}\r\n\r\n\t\t\treturn {\r\n\t\t\t\ttop: offset.top - parentOffset.top,\r\n\t\t\t\tleft: offset.left - parentOffset.left\r\n\t\t\t};\r\n\t\t}\r\n\t};\r\n\r\n\t/**********************\r\n\t Private Variables\r\n\t **********************/\r\n\r\n\t/* For $.data() */\r\n\tvar cache = {};\r\n\t$.expando = \"velocity\" + (new Date().getTime());\r\n\t$.uuid = 0;\r\n\r\n\t/* For $.queue() */\r\n\tvar class2type = {},\r\n\t\t\thasOwn = class2type.hasOwnProperty,\r\n\t\t\ttoString = class2type.toString;\r\n\r\n\tvar types = \"Boolean Number String Function Array Date RegExp Object Error\".split(\" \");\r\n\tfor (var i = 0; i < types.length; i++) {\r\n\t\tclass2type[\"[object \" + types[i] + \"]\"] = types[i].toLowerCase();\r\n\t}\r\n\r\n\t/* Makes $(node) possible, without having to call init. */\r\n\t$.fn.init.prototype = $.fn;\r\n\r\n\t/* Globalize Velocity onto the window, and assign its Utilities property. */\r\n\twindow.Velocity = {Utilities: $};\r\n})(window);\r\n\r\n/******************\r\n Velocity.js\r\n ******************/\r\n\r\n(function(factory) {\r\n\t\"use strict\";\r\n\t/* CommonJS module. */\r\n\tif (typeof module === \"object\" && typeof module.exports === \"object\") {\r\n\t\tmodule.exports = factory();\r\n\t\t/* AMD module. */\r\n\t} else if (true) {\r\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\t\t/* Browser globals. */\r\n\t} else {}\r\n}(function() {\r\n\t\"use strict\";\r\n\treturn function(global, window, document, undefined) {\r\n\r\n\t\t/***************\r\n\t\t Summary\r\n\t\t ***************/\r\n\r\n\t\t/*\r\n\t\t - CSS: CSS stack that works independently from the rest of Velocity.\r\n\t\t - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.\r\n\t\t - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.\r\n\t\t - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.\r\n\t\t Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).\r\n\t\t - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.\r\n\t\t - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.\r\n\t\t - completeCall(): Handles the cleanup process for each Velocity call.\r\n\t\t */\r\n\r\n\t\t/*********************\r\n\t\t Helper Functions\r\n\t\t *********************/\r\n\r\n\t\t/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */\r\n\t\tvar IE = (function() {\r\n\t\t\tif (document.documentMode) {\r\n\t\t\t\treturn document.documentMode;\r\n\t\t\t} else {\r\n\t\t\t\tfor (var i = 7; i > 4; i--) {\r\n\t\t\t\t\tvar div = document.createElement(\"div\");\r\n\r\n\t\t\t\t\tdiv.innerHTML = \"<!--[if IE \" + i + \"]><span></span><![endif]-->\";\r\n\r\n\t\t\t\t\tif (div.getElementsByTagName(\"span\").length) {\r\n\t\t\t\t\t\tdiv = null;\r\n\r\n\t\t\t\t\t\treturn i;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn undefined;\r\n\t\t})();\r\n\r\n\t\t/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */\r\n\t\tvar rAFShim = (function() {\r\n\t\t\tvar timeLast = 0;\r\n\r\n\t\t\treturn window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {\r\n\t\t\t\tvar timeCurrent = (new Date()).getTime(),\r\n\t\t\t\t\t\ttimeDelta;\r\n\r\n\t\t\t\t/* Dynamically set delay on a per-tick basis to match 60fps. */\r\n\t\t\t\t/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */\r\n\t\t\t\ttimeDelta = Math.max(0, 16 - (timeCurrent - timeLast));\r\n\t\t\t\ttimeLast = timeCurrent + timeDelta;\r\n\r\n\t\t\t\treturn setTimeout(function() {\r\n\t\t\t\t\tcallback(timeCurrent + timeDelta);\r\n\t\t\t\t}, timeDelta);\r\n\t\t\t};\r\n\t\t})();\r\n\r\n\t\tvar performance = (function() {\r\n\t\t\tvar perf = window.performance || {};\r\n\r\n\t\t\tif (typeof perf.now !== \"function\") {\r\n\t\t\t\tvar nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();\r\n\r\n\t\t\t\tperf.now = function() {\r\n\t\t\t\t\treturn (new Date()).getTime() - nowOffset;\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t\treturn perf;\r\n\t\t})();\r\n\r\n\t\t/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */\r\n\t\tfunction compactSparseArray(array) {\r\n\t\t\tvar index = -1,\r\n\t\t\t\t\tlength = array ? array.length : 0,\r\n\t\t\t\t\tresult = [];\r\n\r\n\t\t\twhile (++index < length) {\r\n\t\t\t\tvar value = array[index];\r\n\r\n\t\t\t\tif (value) {\r\n\t\t\t\t\tresult.push(value);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn result;\r\n\t\t}\r\n\r\n\t\t/**\r\n\t\t * Shim for \"fixing\" IE's lack of support (IE < 9) for applying slice\r\n\t\t * on host objects like NamedNodeMap, NodeList, and HTMLCollection\r\n\t\t * (technically, since host objects have been implementation-dependent,\r\n\t\t * at least before ES2015, IE hasn't needed to work this way).\r\n\t\t * Also works on strings, fixes IE < 9 to allow an explicit undefined\r\n\t\t * for the 2nd argument (as in Firefox), and prevents errors when\r\n\t\t * called on other DOM objects.\r\n\t\t */\r\n\t\tvar _slice = (function() {\r\n\t\t\tvar slice = Array.prototype.slice;\r\n\r\n\t\t\ttry {\r\n\t\t\t\t// Can't be used with DOM elements in IE < 9\r\n\t\t\t\tslice.call(document.documentElement);\r\n\t\t\t\treturn slice;\r\n\t\t\t} catch (e) { // Fails in IE < 9\r\n\r\n\t\t\t\t// This will work for genuine arrays, array-like objects, \r\n\t\t\t\t// NamedNodeMap (attributes, entities, notations),\r\n\t\t\t\t// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),\r\n\t\t\t\t// and will not fail on other DOM objects (as do DOM elements in IE < 9)\r\n\t\t\t\treturn function(begin, end) {\r\n\t\t\t\t\tvar len = this.length;\r\n\r\n\t\t\t\t\tif (typeof begin !== \"number\") {\r\n\t\t\t\t\t\tbegin = 0;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// IE < 9 gets unhappy with an undefined end argument\r\n\t\t\t\t\tif (typeof end !== \"number\") {\r\n\t\t\t\t\t\tend = len;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// For native Array objects, we use the native slice function\r\n\t\t\t\t\tif (this.slice) {\r\n\t\t\t\t\t\treturn slice.call(this, begin, end);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// For array like object we handle it ourselves.\r\n\t\t\t\t\tvar i,\r\n\t\t\t\t\t\t\tcloned = [],\r\n\t\t\t\t\t\t\t// Handle negative value for \"begin\"\r\n\t\t\t\t\t\t\tstart = (begin >= 0) ? begin : Math.max(0, len + begin),\r\n\t\t\t\t\t\t\t// Handle negative value for \"end\"\r\n\t\t\t\t\t\t\tupTo = end < 0 ? len + end : Math.min(end, len),\r\n\t\t\t\t\t\t\t// Actual expected size of the slice\r\n\t\t\t\t\t\t\tsize = upTo - start;\r\n\r\n\t\t\t\t\tif (size > 0) {\r\n\t\t\t\t\t\tcloned = new Array(size);\r\n\t\t\t\t\t\tif (this.charAt) {\r\n\t\t\t\t\t\t\tfor (i = 0; i < size; i++) {\r\n\t\t\t\t\t\t\t\tcloned[i] = this.charAt(start + i);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tfor (i = 0; i < size; i++) {\r\n\t\t\t\t\t\t\t\tcloned[i] = this[start + i];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn cloned;\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t})();\r\n\r\n\t\t/* .indexOf doesn't exist in IE<9 */\r\n\t\tvar _inArray = (function() {\r\n\t\t\tif (Array.prototype.includes) {\r\n\t\t\t\treturn function(arr, val) {\r\n\t\t\t\t\treturn arr.includes(val);\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t\tif (Array.prototype.indexOf) {\r\n\t\t\t\treturn function(arr, val) {\r\n\t\t\t\t\treturn arr.indexOf(val) >= 0;\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t\treturn function(arr, val) {\r\n\t\t\t\tfor (var i = 0; i < arr.length; i++) {\r\n\t\t\t\t\tif (arr[i] === val) {\r\n\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn false;\r\n\t\t\t};\r\n\t\t});\r\n\r\n\t\tfunction sanitizeElements(elements) {\r\n\t\t\t/* Unwrap jQuery/Zepto objects. */\r\n\t\t\tif (Type.isWrapped(elements)) {\r\n\t\t\t\telements = _slice.call(elements);\r\n\t\t\t\t/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */\r\n\t\t\t} else if (Type.isNode(elements)) {\r\n\t\t\t\telements = [elements];\r\n\t\t\t}\r\n\r\n\t\t\treturn elements;\r\n\t\t}\r\n\r\n\t\tvar Type = {\r\n\t\t\tisNumber: function(variable) {\r\n\t\t\t\treturn (typeof variable === \"number\");\r\n\t\t\t},\r\n\t\t\tisString: function(variable) {\r\n\t\t\t\treturn (typeof variable === \"string\");\r\n\t\t\t},\r\n\t\t\tisArray: Array.isArray || function(variable) {\r\n\t\t\t\treturn Object.prototype.toString.call(variable) === \"[object Array]\";\r\n\t\t\t},\r\n\t\t\tisFunction: function(variable) {\r\n\t\t\t\treturn Object.prototype.toString.call(variable) === \"[object Function]\";\r\n\t\t\t},\r\n\t\t\tisNode: function(variable) {\r\n\t\t\t\treturn variable && variable.nodeType;\r\n\t\t\t},\r\n\t\t\t/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */\r\n\t\t\t/* NOTE: HTMLFormElements also have a length. */\r\n\t\t\tisWrapped: function(variable) {\r\n\t\t\t\treturn variable\r\n\t\t\t\t\t\t&& variable !== window\r\n\t\t\t\t\t\t&& Type.isNumber(variable.length)\r\n\t\t\t\t\t\t&& !Type.isString(variable)\r\n\t\t\t\t\t\t&& !Type.isFunction(variable)\r\n\t\t\t\t\t\t&& !Type.isNode(variable)\r\n\t\t\t\t\t\t&& (variable.length === 0 || Type.isNode(variable[0]));\r\n\t\t\t},\r\n\t\t\tisSVG: function(variable) {\r\n\t\t\t\treturn window.SVGElement && (variable instanceof window.SVGElement);\r\n\t\t\t},\r\n\t\t\tisEmptyObject: function(variable) {\r\n\t\t\t\tfor (var name in variable) {\r\n\t\t\t\t\tif (variable.hasOwnProperty(name)) {\r\n\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn true;\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/*****************\r\n\t\t Dependencies\r\n\t\t *****************/\r\n\r\n\t\tvar $,\r\n\t\t\t\tisJQuery = false;\r\n\r\n\t\tif (global.fn && global.fn.jquery) {\r\n\t\t\t$ = global;\r\n\t\t\tisJQuery = true;\r\n\t\t} else {\r\n\t\t\t$ = window.Velocity.Utilities;\r\n\t\t}\r\n\r\n\t\tif (IE <= 8 && !isJQuery) {\r\n\t\t\tthrow new Error(\"Velocity: IE8 and below require jQuery to be loaded before Velocity.\");\r\n\t\t} else if (IE <= 7) {\r\n\t\t\t/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */\r\n\t\t\tjQuery.fn.velocity = jQuery.fn.animate;\r\n\r\n\t\t\t/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t/*****************\r\n\t\t Constants\r\n\t\t *****************/\r\n\r\n\t\tvar DURATION_DEFAULT = 400,\r\n\t\t\t\tEASING_DEFAULT = \"swing\";\r\n\r\n\t\t/*************\r\n\t\t State\r\n\t\t *************/\r\n\r\n\t\tvar Velocity = {\r\n\t\t\t/* Container for page-wide Velocity state data. */\r\n\t\t\tState: {\r\n\t\t\t\t/* Detect mobile devices to determine if mobileHA should be turned on. */\r\n\t\t\t\tisMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),\r\n\t\t\t\t/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */\r\n\t\t\t\tisAndroid: /Android/i.test(window.navigator.userAgent),\r\n\t\t\t\tisGingerbread: /Android 2\\.3\\.[3-7]/i.test(window.navigator.userAgent),\r\n\t\t\t\tisChrome: window.chrome,\r\n\t\t\t\tisFirefox: /Firefox/i.test(window.navigator.userAgent),\r\n\t\t\t\t/* Create a cached element for re-use when checking for CSS property prefixes. */\r\n\t\t\t\tprefixElement: document.createElement(\"div\"),\r\n\t\t\t\t/* Cache every prefix match to avoid repeating lookups. */\r\n\t\t\t\tprefixMatches: {},\r\n\t\t\t\t/* Cache the anchor used for animating window scrolling. */\r\n\t\t\t\tscrollAnchor: null,\r\n\t\t\t\t/* Cache the browser-specific property names associated with the scroll anchor. */\r\n\t\t\t\tscrollPropertyLeft: null,\r\n\t\t\t\tscrollPropertyTop: null,\r\n\t\t\t\t/* Keep track of whether our RAF tick is running. */\r\n\t\t\t\tisTicking: false,\r\n\t\t\t\t/* Container for every in-progress call to Velocity. */\r\n\t\t\t\tcalls: [],\r\n\t\t\t\tdelayedElements: {\r\n\t\t\t\t\tcount: 0\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/* Velocity's custom CSS stack. Made global for unit testing. */\r\n\t\t\tCSS: {/* Defined below. */},\r\n\t\t\t/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */\r\n\t\t\tUtilities: $,\r\n\t\t\t/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */\r\n\t\t\tRedirects: {/* Manually registered by the user. */},\r\n\t\t\tEasings: {/* Defined below. */},\r\n\t\t\t/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */\r\n\t\t\tPromise: window.Promise,\r\n\t\t\t/* Velocity option defaults, which can be overriden by the user. */\r\n\t\t\tdefaults: {\r\n\t\t\t\tqueue: \"\",\r\n\t\t\t\tduration: DURATION_DEFAULT,\r\n\t\t\t\teasing: EASING_DEFAULT,\r\n\t\t\t\tbegin: undefined,\r\n\t\t\t\tcomplete: undefined,\r\n\t\t\t\tprogress: undefined,\r\n\t\t\t\tdisplay: undefined,\r\n\t\t\t\tvisibility: undefined,\r\n\t\t\t\tloop: false,\r\n\t\t\t\tdelay: false,\r\n\t\t\t\tmobileHA: true,\r\n\t\t\t\t/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */\r\n\t\t\t\t_cacheValues: true,\r\n\t\t\t\t/* Advanced: Set to false if the promise should always resolve on empty element lists. */\r\n\t\t\t\tpromiseRejectEmpty: true\r\n\t\t\t},\r\n\t\t\t/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */\r\n\t\t\tinit: function(element) {\r\n\t\t\t\t$.data(element, \"velocity\", {\r\n\t\t\t\t\t/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */\r\n\t\t\t\t\tisSVG: Type.isSVG(element),\r\n\t\t\t\t\t/* Keep track of whether the element is currently being animated by Velocity.\r\n\t\t\t\t\t This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */\r\n\t\t\t\t\tisAnimating: false,\r\n\t\t\t\t\t/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */\r\n\t\t\t\t\tcomputedStyle: null,\r\n\t\t\t\t\t/* Tween data is cached for each animation on the element so that data can be passed across calls --\r\n\t\t\t\t\t in particular, end values are used as subsequent start values in consecutive Velocity calls. */\r\n\t\t\t\t\ttweensContainer: null,\r\n\t\t\t\t\t/* The full root property values of each CSS hook being animated on this element are cached so that:\r\n\t\t\t\t\t 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.\r\n\t\t\t\t\t 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */\r\n\t\t\t\t\trootPropertyValueCache: {},\r\n\t\t\t\t\t/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */\r\n\t\t\t\t\ttransformCache: {}\r\n\t\t\t\t});\r\n\t\t\t},\r\n\t\t\t/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */\r\n\t\t\thook: null, /* Defined below. */\r\n\t\t\t/* Velocity-wide animation time remapping for testing purposes. */\r\n\t\t\tmock: false,\r\n\t\t\tversion: {major: 1, minor: 5, patch: 2},\r\n\t\t\t/* Set to 1 or 2 (most verbose) to output debug info to console. */\r\n\t\t\tdebug: false,\r\n\t\t\t/* Use rAF high resolution timestamp when available */\r\n\t\t\ttimestamp: true,\r\n\t\t\t/* Pause all animations */\r\n\t\t\tpauseAll: function(queueName) {\r\n\t\t\t\tvar currentTime = (new Date()).getTime();\r\n\r\n\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\r\n\t\t\t\t\tif (activeCall) {\r\n\r\n\t\t\t\t\t\t/* If we have a queueName and this call is not on that queue, skip */\r\n\t\t\t\t\t\tif (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Set call to paused */\r\n\t\t\t\t\t\tactiveCall[5] = {\r\n\t\t\t\t\t\t\tresume: false\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\r\n\t\t\t\t/* Pause timers on any currently delayed calls */\r\n\t\t\t\t$.each(Velocity.State.delayedElements, function(k, element) {\r\n\t\t\t\t\tif (!element) {\r\n\t\t\t\t\t\treturn;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tpauseDelayOnElement(element, currentTime);\r\n\t\t\t\t});\r\n\t\t\t},\r\n\t\t\t/* Resume all animations */\r\n\t\t\tresumeAll: function(queueName) {\r\n\t\t\t\tvar currentTime = (new Date()).getTime();\r\n\r\n\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\r\n\t\t\t\t\tif (activeCall) {\r\n\r\n\t\t\t\t\t\t/* If we have a queueName and this call is not on that queue, skip */\r\n\t\t\t\t\t\tif (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Set call to resumed if it was paused */\r\n\t\t\t\t\t\tif (activeCall[5]) {\r\n\t\t\t\t\t\t\tactiveCall[5].resume = true;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\t/* Resume timers on any currently delayed calls */\r\n\t\t\t\t$.each(Velocity.State.delayedElements, function(k, element) {\r\n\t\t\t\t\tif (!element) {\r\n\t\t\t\t\t\treturn;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tresumeDelayOnElement(element, currentTime);\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */\r\n\t\tif (window.pageYOffset !== undefined) {\r\n\t\t\tVelocity.State.scrollAnchor = window;\r\n\t\t\tVelocity.State.scrollPropertyLeft = \"pageXOffset\";\r\n\t\t\tVelocity.State.scrollPropertyTop = \"pageYOffset\";\r\n\t\t} else {\r\n\t\t\tVelocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;\r\n\t\t\tVelocity.State.scrollPropertyLeft = \"scrollLeft\";\r\n\t\t\tVelocity.State.scrollPropertyTop = \"scrollTop\";\r\n\t\t}\r\n\r\n\t\t/* Shorthand alias for jQuery's $.data() utility. */\r\n\t\tfunction Data(element) {\r\n\t\t\t/* Hardcode a reference to the plugin name. */\r\n\t\t\tvar response = $.data(element, \"velocity\");\r\n\r\n\t\t\t/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */\r\n\t\t\treturn response === null ? undefined : response;\r\n\t\t}\r\n\r\n\t\t/**************\r\n\t\t Delay Timer\r\n\t\t **************/\r\n\r\n\t\tfunction pauseDelayOnElement(element, currentTime) {\r\n\t\t\t/* Check for any delay timers, and pause the set timeouts (while preserving time data)\r\n\t\t\t to be resumed when the \"resume\" command is issued */\r\n\t\t\tvar data = Data(element);\r\n\t\t\tif (data && data.delayTimer && !data.delayPaused) {\r\n\t\t\t\tdata.delayRemaining = data.delay - currentTime + data.delayBegin;\r\n\t\t\t\tdata.delayPaused = true;\r\n\t\t\t\tclearTimeout(data.delayTimer.setTimeout);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfunction resumeDelayOnElement(element, currentTime) {\r\n\t\t\t/* Check for any paused timers and resume */\r\n\t\t\tvar data = Data(element);\r\n\t\t\tif (data && data.delayTimer && data.delayPaused) {\r\n\t\t\t\t/* If the element was mid-delay, re initiate the timeout with the remaining delay */\r\n\t\t\t\tdata.delayPaused = false;\r\n\t\t\t\tdata.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\r\n\r\n\t\t/**************\r\n\t\t Easing\r\n\t\t **************/\r\n\r\n\t\t/* Step easing generator. */\r\n\t\tfunction generateStep(steps) {\r\n\t\t\treturn function(p) {\r\n\t\t\t\treturn Math.round(p * steps) * (1 / steps);\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\t/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */\r\n\t\tfunction generateBezier(mX1, mY1, mX2, mY2) {\r\n\t\t\tvar NEWTON_ITERATIONS = 4,\r\n\t\t\t\t\tNEWTON_MIN_SLOPE = 0.001,\r\n\t\t\t\t\tSUBDIVISION_PRECISION = 0.0000001,\r\n\t\t\t\t\tSUBDIVISION_MAX_ITERATIONS = 10,\r\n\t\t\t\t\tkSplineTableSize = 11,\r\n\t\t\t\t\tkSampleStepSize = 1.0 / (kSplineTableSize - 1.0),\r\n\t\t\t\t\tfloat32ArraySupported = \"Float32Array\" in window;\r\n\r\n\t\t\t/* Must contain four arguments. */\r\n\t\t\tif (arguments.length !== 4) {\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\r\n\t\t\t/* Arguments must be numbers. */\r\n\t\t\tfor (var i = 0; i < 4; ++i) {\r\n\t\t\t\tif (typeof arguments[i] !== \"number\" || isNaN(arguments[i]) || !isFinite(arguments[i])) {\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/* X values must be in the [0, 1] range. */\r\n\t\t\tmX1 = Math.min(mX1, 1);\r\n\t\t\tmX2 = Math.min(mX2, 1);\r\n\t\t\tmX1 = Math.max(mX1, 0);\r\n\t\t\tmX2 = Math.max(mX2, 0);\r\n\r\n\t\t\tvar mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);\r\n\r\n\t\t\tfunction A(aA1, aA2) {\r\n\t\t\t\treturn 1.0 - 3.0 * aA2 + 3.0 * aA1;\r\n\t\t\t}\r\n\t\t\tfunction B(aA1, aA2) {\r\n\t\t\t\treturn 3.0 * aA2 - 6.0 * aA1;\r\n\t\t\t}\r\n\t\t\tfunction C(aA1) {\r\n\t\t\t\treturn 3.0 * aA1;\r\n\t\t\t}\r\n\r\n\t\t\tfunction calcBezier(aT, aA1, aA2) {\r\n\t\t\t\treturn ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;\r\n\t\t\t}\r\n\r\n\t\t\tfunction getSlope(aT, aA1, aA2) {\r\n\t\t\t\treturn 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);\r\n\t\t\t}\r\n\r\n\t\t\tfunction newtonRaphsonIterate(aX, aGuessT) {\r\n\t\t\t\tfor (var i = 0; i < NEWTON_ITERATIONS; ++i) {\r\n\t\t\t\t\tvar currentSlope = getSlope(aGuessT, mX1, mX2);\r\n\r\n\t\t\t\t\tif (currentSlope === 0.0) {\r\n\t\t\t\t\t\treturn aGuessT;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvar currentX = calcBezier(aGuessT, mX1, mX2) - aX;\r\n\t\t\t\t\taGuessT -= currentX / currentSlope;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn aGuessT;\r\n\t\t\t}\r\n\r\n\t\t\tfunction calcSampleValues() {\r\n\t\t\t\tfor (var i = 0; i < kSplineTableSize; ++i) {\r\n\t\t\t\t\tmSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tfunction binarySubdivide(aX, aA, aB) {\r\n\t\t\t\tvar currentX, currentT, i = 0;\r\n\r\n\t\t\t\tdo {\r\n\t\t\t\t\tcurrentT = aA + (aB - aA) / 2.0;\r\n\t\t\t\t\tcurrentX = calcBezier(currentT, mX1, mX2) - aX;\r\n\t\t\t\t\tif (currentX > 0.0) {\r\n\t\t\t\t\t\taB = currentT;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\taA = currentT;\r\n\t\t\t\t\t}\r\n\t\t\t\t} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);\r\n\r\n\t\t\t\treturn currentT;\r\n\t\t\t}\r\n\r\n\t\t\tfunction getTForX(aX) {\r\n\t\t\t\tvar intervalStart = 0.0,\r\n\t\t\t\t\t\tcurrentSample = 1,\r\n\t\t\t\t\t\tlastSample = kSplineTableSize - 1;\r\n\r\n\t\t\t\tfor (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {\r\n\t\t\t\t\tintervalStart += kSampleStepSize;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t--currentSample;\r\n\r\n\t\t\t\tvar dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),\r\n\t\t\t\t\t\tguessForT = intervalStart + dist * kSampleStepSize,\r\n\t\t\t\t\t\tinitialSlope = getSlope(guessForT, mX1, mX2);\r\n\r\n\t\t\t\tif (initialSlope >= NEWTON_MIN_SLOPE) {\r\n\t\t\t\t\treturn newtonRaphsonIterate(aX, guessForT);\r\n\t\t\t\t} else if (initialSlope === 0.0) {\r\n\t\t\t\t\treturn guessForT;\r\n\t\t\t\t} else {\r\n\t\t\t\t\treturn binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tvar _precomputed = false;\r\n\r\n\t\t\tfunction precompute() {\r\n\t\t\t\t_precomputed = true;\r\n\t\t\t\tif (mX1 !== mY1 || mX2 !== mY2) {\r\n\t\t\t\t\tcalcSampleValues();\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tvar f = function(aX) {\r\n\t\t\t\tif (!_precomputed) {\r\n\t\t\t\t\tprecompute();\r\n\t\t\t\t}\r\n\t\t\t\tif (mX1 === mY1 && mX2 === mY2) {\r\n\t\t\t\t\treturn aX;\r\n\t\t\t\t}\r\n\t\t\t\tif (aX === 0) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\t\t\t\tif (aX === 1) {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn calcBezier(getTForX(aX), mY1, mY2);\r\n\t\t\t};\r\n\r\n\t\t\tf.getControlPoints = function() {\r\n\t\t\t\treturn [{x: mX1, y: mY1}, {x: mX2, y: mY2}];\r\n\t\t\t};\r\n\r\n\t\t\tvar str = \"generateBezier(\" + [mX1, mY1, mX2, mY2] + \")\";\r\n\t\t\tf.toString = function() {\r\n\t\t\t\treturn str;\r\n\t\t\t};\r\n\r\n\t\t\treturn f;\r\n\t\t}\r\n\r\n\t\t/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */\r\n\t\t/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass\r\n\t\t then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */\r\n\t\tvar generateSpringRK4 = (function() {\r\n\t\t\tfunction springAccelerationForState(state) {\r\n\t\t\t\treturn (-state.tension * state.x) - (state.friction * state.v);\r\n\t\t\t}\r\n\r\n\t\t\tfunction springEvaluateStateWithDerivative(initialState, dt, derivative) {\r\n\t\t\t\tvar state = {\r\n\t\t\t\t\tx: initialState.x + derivative.dx * dt,\r\n\t\t\t\t\tv: initialState.v + derivative.dv * dt,\r\n\t\t\t\t\ttension: initialState.tension,\r\n\t\t\t\t\tfriction: initialState.friction\r\n\t\t\t\t};\r\n\r\n\t\t\t\treturn {dx: state.v, dv: springAccelerationForState(state)};\r\n\t\t\t}\r\n\r\n\t\t\tfunction springIntegrateState(state, dt) {\r\n\t\t\t\tvar a = {\r\n\t\t\t\t\tdx: state.v,\r\n\t\t\t\t\tdv: springAccelerationForState(state)\r\n\t\t\t\t},\r\n\t\t\t\t\t\tb = springEvaluateStateWithDerivative(state, dt * 0.5, a),\r\n\t\t\t\t\t\tc = springEvaluateStateWithDerivative(state, dt * 0.5, b),\r\n\t\t\t\t\t\td = springEvaluateStateWithDerivative(state, dt, c),\r\n\t\t\t\t\t\tdxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),\r\n\t\t\t\t\t\tdvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);\r\n\r\n\t\t\t\tstate.x = state.x + dxdt * dt;\r\n\t\t\t\tstate.v = state.v + dvdt * dt;\r\n\r\n\t\t\t\treturn state;\r\n\t\t\t}\r\n\r\n\t\t\treturn function springRK4Factory(tension, friction, duration) {\r\n\r\n\t\t\t\tvar initState = {\r\n\t\t\t\t\tx: -1,\r\n\t\t\t\t\tv: 0,\r\n\t\t\t\t\ttension: null,\r\n\t\t\t\t\tfriction: null\r\n\t\t\t\t},\r\n\t\t\t\t\t\tpath = [0],\r\n\t\t\t\t\t\ttime_lapsed = 0,\r\n\t\t\t\t\t\ttolerance = 1 / 10000,\r\n\t\t\t\t\t\tDT = 16 / 1000,\r\n\t\t\t\t\t\thave_duration, dt, last_state;\r\n\r\n\t\t\t\ttension = parseFloat(tension) || 500;\r\n\t\t\t\tfriction = parseFloat(friction) || 20;\r\n\t\t\t\tduration = duration || null;\r\n\r\n\t\t\t\tinitState.tension = tension;\r\n\t\t\t\tinitState.friction = friction;\r\n\r\n\t\t\t\thave_duration = duration !== null;\r\n\r\n\t\t\t\t/* Calculate the actual time it takes for this animation to complete with the provided conditions. */\r\n\t\t\t\tif (have_duration) {\r\n\t\t\t\t\t/* Run the simulation without a duration. */\r\n\t\t\t\t\ttime_lapsed = springRK4Factory(tension, friction);\r\n\t\t\t\t\t/* Compute the adjusted time delta. */\r\n\t\t\t\t\tdt = time_lapsed / duration * DT;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tdt = DT;\r\n\t\t\t\t}\r\n\r\n\t\t\t\twhile (true) {\r\n\t\t\t\t\t/* Next/step function .*/\r\n\t\t\t\t\tlast_state = springIntegrateState(last_state || initState, dt);\r\n\t\t\t\t\t/* Store the position. */\r\n\t\t\t\t\tpath.push(1 + last_state.x);\r\n\t\t\t\t\ttime_lapsed += 16;\r\n\t\t\t\t\t/* If the change threshold is reached, break. */\r\n\t\t\t\t\tif (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the\r\n\t\t\t\t computed path and returns a snapshot of the position according to a given percentComplete. */\r\n\t\t\t\treturn !have_duration ? time_lapsed : function(percentComplete) {\r\n\t\t\t\t\treturn path[ (percentComplete * (path.length - 1)) | 0 ];\r\n\t\t\t\t};\r\n\t\t\t};\r\n\t\t}());\r\n\r\n\t\t/* jQuery easings. */\r\n\t\tVelocity.Easings = {\r\n\t\t\tlinear: function(p) {\r\n\t\t\t\treturn p;\r\n\t\t\t},\r\n\t\t\tswing: function(p) {\r\n\t\t\t\treturn 0.5 - Math.cos(p * Math.PI) / 2;\r\n\t\t\t},\r\n\t\t\t/* Bonus \"spring\" easing, which is a less exaggerated version of easeInOutElastic. */\r\n\t\t\tspring: function(p) {\r\n\t\t\t\treturn 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/* CSS3 and Robert Penner easings. */\r\n\t\t$.each(\r\n\t\t\t\t[\r\n\t\t\t\t\t[\"ease\", [0.25, 0.1, 0.25, 1.0]],\r\n\t\t\t\t\t[\"ease-in\", [0.42, 0.0, 1.00, 1.0]],\r\n\t\t\t\t\t[\"ease-out\", [0.00, 0.0, 0.58, 1.0]],\r\n\t\t\t\t\t[\"ease-in-out\", [0.42, 0.0, 0.58, 1.0]],\r\n\t\t\t\t\t[\"easeInSine\", [0.47, 0, 0.745, 0.715]],\r\n\t\t\t\t\t[\"easeOutSine\", [0.39, 0.575, 0.565, 1]],\r\n\t\t\t\t\t[\"easeInOutSine\", [0.445, 0.05, 0.55, 0.95]],\r\n\t\t\t\t\t[\"easeInQuad\", [0.55, 0.085, 0.68, 0.53]],\r\n\t\t\t\t\t[\"easeOutQuad\", [0.25, 0.46, 0.45, 0.94]],\r\n\t\t\t\t\t[\"easeInOutQuad\", [0.455, 0.03, 0.515, 0.955]],\r\n\t\t\t\t\t[\"easeInCubic\", [0.55, 0.055, 0.675, 0.19]],\r\n\t\t\t\t\t[\"easeOutCubic\", [0.215, 0.61, 0.355, 1]],\r\n\t\t\t\t\t[\"easeInOutCubic\", [0.645, 0.045, 0.355, 1]],\r\n\t\t\t\t\t[\"easeInQuart\", [0.895, 0.03, 0.685, 0.22]],\r\n\t\t\t\t\t[\"easeOutQuart\", [0.165, 0.84, 0.44, 1]],\r\n\t\t\t\t\t[\"easeInOutQuart\", [0.77, 0, 0.175, 1]],\r\n\t\t\t\t\t[\"easeInQuint\", [0.755, 0.05, 0.855, 0.06]],\r\n\t\t\t\t\t[\"easeOutQuint\", [0.23, 1, 0.32, 1]],\r\n\t\t\t\t\t[\"easeInOutQuint\", [0.86, 0, 0.07, 1]],\r\n\t\t\t\t\t[\"easeInExpo\", [0.95, 0.05, 0.795, 0.035]],\r\n\t\t\t\t\t[\"easeOutExpo\", [0.19, 1, 0.22, 1]],\r\n\t\t\t\t\t[\"easeInOutExpo\", [1, 0, 0, 1]],\r\n\t\t\t\t\t[\"easeInCirc\", [0.6, 0.04, 0.98, 0.335]],\r\n\t\t\t\t\t[\"easeOutCirc\", [0.075, 0.82, 0.165, 1]],\r\n\t\t\t\t\t[\"easeInOutCirc\", [0.785, 0.135, 0.15, 0.86]]\r\n\t\t\t\t], function(i, easingArray) {\r\n\t\t\tVelocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);\r\n\t\t});\r\n\r\n\t\t/* Determine the appropriate easing type given an easing input. */\r\n\t\tfunction getEasing(value, duration) {\r\n\t\t\tvar easing = value;\r\n\r\n\t\t\t/* The easing option can either be a string that references a pre-registered easing,\r\n\t\t\t or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */\r\n\t\t\tif (Type.isString(value)) {\r\n\t\t\t\t/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */\r\n\t\t\t\tif (!Velocity.Easings[value]) {\r\n\t\t\t\t\teasing = false;\r\n\t\t\t\t}\r\n\t\t\t} else if (Type.isArray(value) && value.length === 1) {\r\n\t\t\t\teasing = generateStep.apply(null, value);\r\n\t\t\t} else if (Type.isArray(value) && value.length === 2) {\r\n\t\t\t\t/* springRK4 must be passed the animation's duration. */\r\n\t\t\t\t/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing\r\n\t\t\t\t function generated with default tension and friction values. */\r\n\t\t\t\teasing = generateSpringRK4.apply(null, value.concat([duration]));\r\n\t\t\t} else if (Type.isArray(value) && value.length === 4) {\r\n\t\t\t\t/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */\r\n\t\t\t\teasing = generateBezier.apply(null, value);\r\n\t\t\t} else {\r\n\t\t\t\teasing = false;\r\n\t\t\t}\r\n\r\n\t\t\t/* Revert to the Velocity-wide default easing type, or fall back to \"swing\" (which is also jQuery's default)\r\n\t\t\t if the Velocity-wide default has been incorrectly modified. */\r\n\t\t\tif (easing === false) {\r\n\t\t\t\tif (Velocity.Easings[Velocity.defaults.easing]) {\r\n\t\t\t\t\teasing = Velocity.defaults.easing;\r\n\t\t\t\t} else {\r\n\t\t\t\t\teasing = EASING_DEFAULT;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn easing;\r\n\t\t}\r\n\r\n\t\t/*****************\r\n\t\t CSS Stack\r\n\t\t *****************/\r\n\r\n\t\t/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.\r\n\t\t It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */\r\n\t\t/* Note: A \"CSS\" shorthand is aliased so that our code is easier to read. */\r\n\t\tvar CSS = Velocity.CSS = {\r\n\t\t\t/*************\r\n\t\t\t RegEx\r\n\t\t\t *************/\r\n\r\n\t\t\tRegEx: {\r\n\t\t\t\tisHex: /^#([A-f\\d]{3}){1,2}$/i,\r\n\t\t\t\t/* Unwrap a property value's surrounding text, e.g. \"rgba(4, 3, 2, 1)\" ==> \"4, 3, 2, 1\" and \"rect(4px 3px 2px 1px)\" ==> \"4px 3px 2px 1px\". */\r\n\t\t\t\tvalueUnwrap: /^[A-z]+\\((.*)\\)$/i,\r\n\t\t\t\twrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,\r\n\t\t\t\t/* Split a multi-value property into an array of subvalues, e.g. \"rgba(4, 3, 2, 1) 4px 3px 2px 1px\" ==> [ \"rgba(4, 3, 2, 1)\", \"4px\", \"3px\", \"2px\", \"1px\" ]. */\r\n\t\t\t\tvalueSplit: /([A-z]+\\(.+\\))|(([A-z0-9#-.]+?)(?=\\s|$))/ig\r\n\t\t\t},\r\n\t\t\t/************\r\n\t\t\t Lists\r\n\t\t\t ************/\r\n\r\n\t\t\tLists: {\r\n\t\t\t\tcolors: [\"fill\", \"stroke\", \"stopColor\", \"color\", \"backgroundColor\", \"borderColor\", \"borderTopColor\", \"borderRightColor\", \"borderBottomColor\", \"borderLeftColor\", \"outlineColor\"],\r\n\t\t\t\ttransformsBase: [\"translateX\", \"translateY\", \"scale\", \"scaleX\", \"scaleY\", \"skewX\", \"skewY\", \"rotateZ\"],\r\n\t\t\t\ttransforms3D: [\"transformPerspective\", \"translateZ\", \"scaleZ\", \"rotateX\", \"rotateY\"],\r\n\t\t\t\tunits: [\r\n\t\t\t\t\t\"%\", // relative\r\n\t\t\t\t\t\"em\", \"ex\", \"ch\", \"rem\", // font relative\r\n\t\t\t\t\t\"vw\", \"vh\", \"vmin\", \"vmax\", // viewport relative\r\n\t\t\t\t\t\"cm\", \"mm\", \"Q\", \"in\", \"pc\", \"pt\", \"px\", // absolute lengths\r\n\t\t\t\t\t\"deg\", \"grad\", \"rad\", \"turn\", // angles\r\n\t\t\t\t\t\"s\", \"ms\" // time\r\n\t\t\t\t],\r\n\t\t\t\tcolorNames: {\r\n\t\t\t\t\t\"aliceblue\": \"240,248,255\",\r\n\t\t\t\t\t\"antiquewhite\": \"250,235,215\",\r\n\t\t\t\t\t\"aquamarine\": \"127,255,212\",\r\n\t\t\t\t\t\"aqua\": \"0,255,255\",\r\n\t\t\t\t\t\"azure\": \"240,255,255\",\r\n\t\t\t\t\t\"beige\": \"245,245,220\",\r\n\t\t\t\t\t\"bisque\": \"255,228,196\",\r\n\t\t\t\t\t\"black\": \"0,0,0\",\r\n\t\t\t\t\t\"blanchedalmond\": \"255,235,205\",\r\n\t\t\t\t\t\"blueviolet\": \"138,43,226\",\r\n\t\t\t\t\t\"blue\": \"0,0,255\",\r\n\t\t\t\t\t\"brown\": \"165,42,42\",\r\n\t\t\t\t\t\"burlywood\": \"222,184,135\",\r\n\t\t\t\t\t\"cadetblue\": \"95,158,160\",\r\n\t\t\t\t\t\"chartreuse\": \"127,255,0\",\r\n\t\t\t\t\t\"chocolate\": \"210,105,30\",\r\n\t\t\t\t\t\"coral\": \"255,127,80\",\r\n\t\t\t\t\t\"cornflowerblue\": \"100,149,237\",\r\n\t\t\t\t\t\"cornsilk\": \"255,248,220\",\r\n\t\t\t\t\t\"crimson\": \"220,20,60\",\r\n\t\t\t\t\t\"cyan\": \"0,255,255\",\r\n\t\t\t\t\t\"darkblue\": \"0,0,139\",\r\n\t\t\t\t\t\"darkcyan\": \"0,139,139\",\r\n\t\t\t\t\t\"darkgoldenrod\": \"184,134,11\",\r\n\t\t\t\t\t\"darkgray\": \"169,169,169\",\r\n\t\t\t\t\t\"darkgrey\": \"169,169,169\",\r\n\t\t\t\t\t\"darkgreen\": \"0,100,0\",\r\n\t\t\t\t\t\"darkkhaki\": \"189,183,107\",\r\n\t\t\t\t\t\"darkmagenta\": \"139,0,139\",\r\n\t\t\t\t\t\"darkolivegreen\": \"85,107,47\",\r\n\t\t\t\t\t\"darkorange\": \"255,140,0\",\r\n\t\t\t\t\t\"darkorchid\": \"153,50,204\",\r\n\t\t\t\t\t\"darkred\": \"139,0,0\",\r\n\t\t\t\t\t\"darksalmon\": \"233,150,122\",\r\n\t\t\t\t\t\"darkseagreen\": \"143,188,143\",\r\n\t\t\t\t\t\"darkslateblue\": \"72,61,139\",\r\n\t\t\t\t\t\"darkslategray\": \"47,79,79\",\r\n\t\t\t\t\t\"darkturquoise\": \"0,206,209\",\r\n\t\t\t\t\t\"darkviolet\": \"148,0,211\",\r\n\t\t\t\t\t\"deeppink\": \"255,20,147\",\r\n\t\t\t\t\t\"deepskyblue\": \"0,191,255\",\r\n\t\t\t\t\t\"dimgray\": \"105,105,105\",\r\n\t\t\t\t\t\"dimgrey\": \"105,105,105\",\r\n\t\t\t\t\t\"dodgerblue\": \"30,144,255\",\r\n\t\t\t\t\t\"firebrick\": \"178,34,34\",\r\n\t\t\t\t\t\"floralwhite\": \"255,250,240\",\r\n\t\t\t\t\t\"forestgreen\": \"34,139,34\",\r\n\t\t\t\t\t\"fuchsia\": \"255,0,255\",\r\n\t\t\t\t\t\"gainsboro\": \"220,220,220\",\r\n\t\t\t\t\t\"ghostwhite\": \"248,248,255\",\r\n\t\t\t\t\t\"gold\": \"255,215,0\",\r\n\t\t\t\t\t\"goldenrod\": \"218,165,32\",\r\n\t\t\t\t\t\"gray\": \"128,128,128\",\r\n\t\t\t\t\t\"grey\": \"128,128,128\",\r\n\t\t\t\t\t\"greenyellow\": \"173,255,47\",\r\n\t\t\t\t\t\"green\": \"0,128,0\",\r\n\t\t\t\t\t\"honeydew\": \"240,255,240\",\r\n\t\t\t\t\t\"hotpink\": \"255,105,180\",\r\n\t\t\t\t\t\"indianred\": \"205,92,92\",\r\n\t\t\t\t\t\"indigo\": \"75,0,130\",\r\n\t\t\t\t\t\"ivory\": \"255,255,240\",\r\n\t\t\t\t\t\"khaki\": \"240,230,140\",\r\n\t\t\t\t\t\"lavenderblush\": \"255,240,245\",\r\n\t\t\t\t\t\"lavender\": \"230,230,250\",\r\n\t\t\t\t\t\"lawngreen\": \"124,252,0\",\r\n\t\t\t\t\t\"lemonchiffon\": \"255,250,205\",\r\n\t\t\t\t\t\"lightblue\": \"173,216,230\",\r\n\t\t\t\t\t\"lightcoral\": \"240,128,128\",\r\n\t\t\t\t\t\"lightcyan\": \"224,255,255\",\r\n\t\t\t\t\t\"lightgoldenrodyellow\": \"250,250,210\",\r\n\t\t\t\t\t\"lightgray\": \"211,211,211\",\r\n\t\t\t\t\t\"lightgrey\": \"211,211,211\",\r\n\t\t\t\t\t\"lightgreen\": \"144,238,144\",\r\n\t\t\t\t\t\"lightpink\": \"255,182,193\",\r\n\t\t\t\t\t\"lightsalmon\": \"255,160,122\",\r\n\t\t\t\t\t\"lightseagreen\": \"32,178,170\",\r\n\t\t\t\t\t\"lightskyblue\": \"135,206,250\",\r\n\t\t\t\t\t\"lightslategray\": \"119,136,153\",\r\n\t\t\t\t\t\"lightsteelblue\": \"176,196,222\",\r\n\t\t\t\t\t\"lightyellow\": \"255,255,224\",\r\n\t\t\t\t\t\"limegreen\": \"50,205,50\",\r\n\t\t\t\t\t\"lime\": \"0,255,0\",\r\n\t\t\t\t\t\"linen\": \"250,240,230\",\r\n\t\t\t\t\t\"magenta\": \"255,0,255\",\r\n\t\t\t\t\t\"maroon\": \"128,0,0\",\r\n\t\t\t\t\t\"mediumaquamarine\": \"102,205,170\",\r\n\t\t\t\t\t\"mediumblue\": \"0,0,205\",\r\n\t\t\t\t\t\"mediumorchid\": \"186,85,211\",\r\n\t\t\t\t\t\"mediumpurple\": \"147,112,219\",\r\n\t\t\t\t\t\"mediumseagreen\": \"60,179,113\",\r\n\t\t\t\t\t\"mediumslateblue\": \"123,104,238\",\r\n\t\t\t\t\t\"mediumspringgreen\": \"0,250,154\",\r\n\t\t\t\t\t\"mediumturquoise\": \"72,209,204\",\r\n\t\t\t\t\t\"mediumvioletred\": \"199,21,133\",\r\n\t\t\t\t\t\"midnightblue\": \"25,25,112\",\r\n\t\t\t\t\t\"mintcream\": \"245,255,250\",\r\n\t\t\t\t\t\"mistyrose\": \"255,228,225\",\r\n\t\t\t\t\t\"moccasin\": \"255,228,181\",\r\n\t\t\t\t\t\"navajowhite\": \"255,222,173\",\r\n\t\t\t\t\t\"navy\": \"0,0,128\",\r\n\t\t\t\t\t\"oldlace\": \"253,245,230\",\r\n\t\t\t\t\t\"olivedrab\": \"107,142,35\",\r\n\t\t\t\t\t\"olive\": \"128,128,0\",\r\n\t\t\t\t\t\"orangered\": \"255,69,0\",\r\n\t\t\t\t\t\"orange\": \"255,165,0\",\r\n\t\t\t\t\t\"orchid\": \"218,112,214\",\r\n\t\t\t\t\t\"palegoldenrod\": \"238,232,170\",\r\n\t\t\t\t\t\"palegreen\": \"152,251,152\",\r\n\t\t\t\t\t\"paleturquoise\": \"175,238,238\",\r\n\t\t\t\t\t\"palevioletred\": \"219,112,147\",\r\n\t\t\t\t\t\"papayawhip\": \"255,239,213\",\r\n\t\t\t\t\t\"peachpuff\": \"255,218,185\",\r\n\t\t\t\t\t\"peru\": \"205,133,63\",\r\n\t\t\t\t\t\"pink\": \"255,192,203\",\r\n\t\t\t\t\t\"plum\": \"221,160,221\",\r\n\t\t\t\t\t\"powderblue\": \"176,224,230\",\r\n\t\t\t\t\t\"purple\": \"128,0,128\",\r\n\t\t\t\t\t\"red\": \"255,0,0\",\r\n\t\t\t\t\t\"rosybrown\": \"188,143,143\",\r\n\t\t\t\t\t\"royalblue\": \"65,105,225\",\r\n\t\t\t\t\t\"saddlebrown\": \"139,69,19\",\r\n\t\t\t\t\t\"salmon\": \"250,128,114\",\r\n\t\t\t\t\t\"sandybrown\": \"244,164,96\",\r\n\t\t\t\t\t\"seagreen\": \"46,139,87\",\r\n\t\t\t\t\t\"seashell\": \"255,245,238\",\r\n\t\t\t\t\t\"sienna\": \"160,82,45\",\r\n\t\t\t\t\t\"silver\": \"192,192,192\",\r\n\t\t\t\t\t\"skyblue\": \"135,206,235\",\r\n\t\t\t\t\t\"slateblue\": \"106,90,205\",\r\n\t\t\t\t\t\"slategray\": \"112,128,144\",\r\n\t\t\t\t\t\"snow\": \"255,250,250\",\r\n\t\t\t\t\t\"springgreen\": \"0,255,127\",\r\n\t\t\t\t\t\"steelblue\": \"70,130,180\",\r\n\t\t\t\t\t\"tan\": \"210,180,140\",\r\n\t\t\t\t\t\"teal\": \"0,128,128\",\r\n\t\t\t\t\t\"thistle\": \"216,191,216\",\r\n\t\t\t\t\t\"tomato\": \"255,99,71\",\r\n\t\t\t\t\t\"turquoise\": \"64,224,208\",\r\n\t\t\t\t\t\"violet\": \"238,130,238\",\r\n\t\t\t\t\t\"wheat\": \"245,222,179\",\r\n\t\t\t\t\t\"whitesmoke\": \"245,245,245\",\r\n\t\t\t\t\t\"white\": \"255,255,255\",\r\n\t\t\t\t\t\"yellowgreen\": \"154,205,50\",\r\n\t\t\t\t\t\"yellow\": \"255,255,0\"\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/************\r\n\t\t\t Hooks\r\n\t\t\t ************/\r\n\r\n\t\t\t/* Hooks allow a subproperty (e.g. \"boxShadowBlur\") of a compound-value CSS property\r\n\t\t\t (e.g. \"boxShadow: X Y Blur Spread Color\") to be animated as if it were a discrete property. */\r\n\t\t\t/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only\r\n\t\t\t tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */\r\n\t\t\tHooks: {\r\n\t\t\t\t/********************\r\n\t\t\t\t Registration\r\n\t\t\t\t ********************/\r\n\r\n\t\t\t\t/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */\r\n\t\t\t\t/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */\r\n\t\t\t\ttemplates: {\r\n\t\t\t\t\t\"textShadow\": [\"Color X Y Blur\", \"black 0px 0px 0px\"],\r\n\t\t\t\t\t\"boxShadow\": [\"Color X Y Blur Spread\", \"black 0px 0px 0px 0px\"],\r\n\t\t\t\t\t\"clip\": [\"Top Right Bottom Left\", \"0px 0px 0px 0px\"],\r\n\t\t\t\t\t\"backgroundPosition\": [\"X Y\", \"0% 0%\"],\r\n\t\t\t\t\t\"transformOrigin\": [\"X Y Z\", \"50% 50% 0px\"],\r\n\t\t\t\t\t\"perspectiveOrigin\": [\"X Y\", \"50% 50%\"]\r\n\t\t\t\t},\r\n\t\t\t\t/* A \"registered\" hook is one that has been converted from its template form into a live,\r\n\t\t\t\t tweenable property. It contains data to associate it with its root property. */\r\n\t\t\t\tregistered: {\r\n\t\t\t\t\t/* Note: A registered hook looks like this ==> textShadowBlur: [ \"textShadow\", 3 ],\r\n\t\t\t\t\t which consists of the subproperty's name, the associated root property's name,\r\n\t\t\t\t\t and the subproperty's position in the root's value. */\r\n\t\t\t\t},\r\n\t\t\t\t/* Convert the templates into individual hooks then append them to the registered object above. */\r\n\t\t\t\tregister: function() {\r\n\t\t\t\t\t/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are\r\n\t\t\t\t\t currently set to \"transparent\" default to their respective template below when color-animated,\r\n\t\t\t\t\t and white is typically a closer match to transparent than black is. An exception is made for text (\"color\"),\r\n\t\t\t\t\t which is almost always set closer to black than white. */\r\n\t\t\t\t\tfor (var i = 0; i < CSS.Lists.colors.length; i++) {\r\n\t\t\t\t\t\tvar rgbComponents = (CSS.Lists.colors[i] === \"color\") ? \"0 0 0 1\" : \"255 255 255 1\";\r\n\t\t\t\t\t\tCSS.Hooks.templates[CSS.Lists.colors[i]] = [\"Red Green Blue Alpha\", rgbComponents];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvar rootProperty,\r\n\t\t\t\t\t\t\thookTemplate,\r\n\t\t\t\t\t\t\thookNames;\r\n\r\n\t\t\t\t\t/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.\r\n\t\t\t\t\t Thus, we re-arrange the templates accordingly. */\r\n\t\t\t\t\tif (IE) {\r\n\t\t\t\t\t\tfor (rootProperty in CSS.Hooks.templates) {\r\n\t\t\t\t\t\t\tif (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {\r\n\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\thookTemplate = CSS.Hooks.templates[rootProperty];\r\n\t\t\t\t\t\t\thookNames = hookTemplate[0].split(\" \");\r\n\r\n\t\t\t\t\t\t\tvar defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);\r\n\r\n\t\t\t\t\t\t\tif (hookNames[0] === \"Color\") {\r\n\t\t\t\t\t\t\t\t/* Reposition both the hook's name and its default value to the end of their respective strings. */\r\n\t\t\t\t\t\t\t\thookNames.push(hookNames.shift());\r\n\t\t\t\t\t\t\t\tdefaultValues.push(defaultValues.shift());\r\n\r\n\t\t\t\t\t\t\t\t/* Replace the existing template for the hook's root property. */\r\n\t\t\t\t\t\t\t\tCSS.Hooks.templates[rootProperty] = [hookNames.join(\" \"), defaultValues.join(\" \")];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Hook registration. */\r\n\t\t\t\t\tfor (rootProperty in CSS.Hooks.templates) {\r\n\t\t\t\t\t\tif (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\thookTemplate = CSS.Hooks.templates[rootProperty];\r\n\t\t\t\t\t\thookNames = hookTemplate[0].split(\" \");\r\n\r\n\t\t\t\t\t\tfor (var j in hookNames) {\r\n\t\t\t\t\t\t\tif (!hookNames.hasOwnProperty(j)) {\r\n\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tvar fullHookName = rootProperty + hookNames[j],\r\n\t\t\t\t\t\t\t\t\thookPosition = j;\r\n\r\n\t\t\t\t\t\t\t/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)\r\n\t\t\t\t\t\t\t and the hook's position in its template's default value string. */\r\n\t\t\t\t\t\t\tCSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/*****************************\r\n\t\t\t\t Injection and Extraction\r\n\t\t\t\t *****************************/\r\n\r\n\t\t\t\t/* Look up the root property associated with the hook (e.g. return \"textShadow\" for \"textShadowBlur\"). */\r\n\t\t\t\t/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */\r\n\t\t\t\tgetRoot: function(property) {\r\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[property];\r\n\r\n\t\t\t\t\tif (hookData) {\r\n\t\t\t\t\t\treturn hookData[0];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* If there was no hook match, return the property name untouched. */\r\n\t\t\t\t\t\treturn property;\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\tgetUnit: function(str, start) {\r\n\t\t\t\t\tvar unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || \"\";\r\n\r\n\t\t\t\t\tif (unit && _inArray(CSS.Lists.units, unit)) {\r\n\t\t\t\t\t\treturn unit;\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn \"\";\r\n\t\t\t\t},\r\n\t\t\t\tfixColors: function(str) {\r\n\t\t\t\t\treturn str.replace(/(rgba?\\(\\s*)?(\\b[a-z]+\\b)/g, function($0, $1, $2) {\r\n\t\t\t\t\t\tif (CSS.Lists.colorNames.hasOwnProperty($2)) {\r\n\t\t\t\t\t\t\treturn ($1 ? $1 : \"rgba(\") + CSS.Lists.colorNames[$2] + ($1 ? \"\" : \",1)\");\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\treturn $1 + $2;\r\n\t\t\t\t\t});\r\n\t\t\t\t},\r\n\t\t\t\t/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that\r\n\t\t\t\t the targeted hook can be injected or extracted at its standard position. */\r\n\t\t\t\tcleanRootPropertyValue: function(rootProperty, rootPropertyValue) {\r\n\t\t\t\t\t/* If the rootPropertyValue is wrapped with \"rgb()\", \"clip()\", etc., remove the wrapping to normalize the value before manipulation. */\r\n\t\t\t\t\tif (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {\r\n\t\t\t\t\t\trootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),\r\n\t\t\t\t\t default to the root's default value as defined in CSS.Hooks.templates. */\r\n\t\t\t\t\t/* Note: CSS null-values include \"none\", \"auto\", and \"transparent\". They must be converted into their\r\n\t\t\t\t\t zero-values (e.g. textShadow: \"none\" ==> textShadow: \"0px 0px 0px black\") for hook manipulation to proceed. */\r\n\t\t\t\t\tif (CSS.Values.isCSSNullValue(rootPropertyValue)) {\r\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.templates[rootProperty][1];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn rootPropertyValue;\r\n\t\t\t\t},\r\n\t\t\t\t/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */\r\n\t\t\t\textractValue: function(fullHookName, rootPropertyValue) {\r\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[fullHookName];\r\n\r\n\t\t\t\t\tif (hookData) {\r\n\t\t\t\t\t\tvar hookRoot = hookData[0],\r\n\t\t\t\t\t\t\t\thookPosition = hookData[1];\r\n\r\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);\r\n\r\n\t\t\t\t\t\t/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */\r\n\t\t\t\t\t\treturn rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */\r\n\t\t\t\t\t\treturn rootPropertyValue;\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/* Inject the hook's value into its root property's value. This is used to piece back together the root property\r\n\t\t\t\t once Velocity has updated one of its individually hooked values through tweening. */\r\n\t\t\t\tinjectValue: function(fullHookName, hookValue, rootPropertyValue) {\r\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[fullHookName];\r\n\r\n\t\t\t\t\tif (hookData) {\r\n\t\t\t\t\t\tvar hookRoot = hookData[0],\r\n\t\t\t\t\t\t\t\thookPosition = hookData[1],\r\n\t\t\t\t\t\t\t\trootPropertyValueParts,\r\n\t\t\t\t\t\t\t\trootPropertyValueUpdated;\r\n\r\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);\r\n\r\n\t\t\t\t\t\t/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,\r\n\t\t\t\t\t\t then reconstruct the rootPropertyValue string. */\r\n\t\t\t\t\t\trootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);\r\n\t\t\t\t\t\trootPropertyValueParts[hookPosition] = hookValue;\r\n\t\t\t\t\t\trootPropertyValueUpdated = rootPropertyValueParts.join(\" \");\r\n\r\n\t\t\t\t\t\treturn rootPropertyValueUpdated;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */\r\n\t\t\t\t\t\treturn rootPropertyValue;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/*******************\r\n\t\t\t Normalizations\r\n\t\t\t *******************/\r\n\r\n\t\t\t/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)\r\n\t\t\t and reformatting special properties (e.g. clip, rgba) to look like standard ones. */\r\n\t\t\tNormalizations: {\r\n\t\t\t\t/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),\r\n\t\t\t\t the targeted element (which may need to be queried), and the targeted property value. */\r\n\t\t\t\tregistered: {\r\n\t\t\t\t\tclip: function(type, element, propertyValue) {\r\n\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\treturn \"clip\";\r\n\t\t\t\t\t\t\t\t/* Clip needs to be unwrapped and stripped of its commas during extraction. */\r\n\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\tvar extracted;\r\n\r\n\t\t\t\t\t\t\t\t/* If Velocity also extracted this value, skip extraction. */\r\n\t\t\t\t\t\t\t\tif (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\textracted = propertyValue;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/* Remove the \"rect()\" wrapper. */\r\n\t\t\t\t\t\t\t\t\textracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);\r\n\r\n\t\t\t\t\t\t\t\t\t/* Strip off commas. */\r\n\t\t\t\t\t\t\t\t\textracted = extracted ? extracted[1].replace(/,(\\s+)?/g, \" \") : propertyValue;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\treturn extracted;\r\n\t\t\t\t\t\t\t\t/* Clip needs to be re-wrapped during injection. */\r\n\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\treturn \"rect(\" + propertyValue + \")\";\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\tblur: function(type, element, propertyValue) {\r\n\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\treturn Velocity.State.isFirefox ? \"filter\" : \"-webkit-filter\";\r\n\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\tvar extracted = parseFloat(propertyValue);\r\n\r\n\t\t\t\t\t\t\t\t/* If extracted is NaN, meaning the value isn't already extracted. */\r\n\t\t\t\t\t\t\t\tif (!(extracted || extracted === 0)) {\r\n\t\t\t\t\t\t\t\t\tvar blurComponent = propertyValue.toString().match(/blur\\(([0-9]+[A-z]+)\\)/i);\r\n\r\n\t\t\t\t\t\t\t\t\t/* If the filter string had a blur component, return just the blur value and unit type. */\r\n\t\t\t\t\t\t\t\t\tif (blurComponent) {\r\n\t\t\t\t\t\t\t\t\t\textracted = blurComponent[1];\r\n\t\t\t\t\t\t\t\t\t\t/* If the component doesn't exist, default blur to 0. */\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\textracted = 0;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\treturn extracted;\r\n\t\t\t\t\t\t\t\t/* Blur needs to be re-wrapped during injection. */\r\n\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t/* For the blur effect to be fully de-applied, it needs to be set to \"none\" instead of 0. */\r\n\t\t\t\t\t\t\t\tif (!parseFloat(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\treturn \"none\";\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\treturn \"blur(\" + propertyValue + \")\";\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\t/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */\r\n\t\t\t\t\topacity: function(type, element, propertyValue) {\r\n\t\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\t\treturn \"filter\";\r\n\t\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\t\t/* <=IE8 return a \"filter\" value of \"alpha(opacity=\\d{1,3})\".\r\n\t\t\t\t\t\t\t\t\t Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */\r\n\t\t\t\t\t\t\t\t\tvar extracted = propertyValue.toString().match(/alpha\\(opacity=(.*)\\)/i);\r\n\r\n\t\t\t\t\t\t\t\t\tif (extracted) {\r\n\t\t\t\t\t\t\t\t\t\t/* Convert to decimal value. */\r\n\t\t\t\t\t\t\t\t\t\tpropertyValue = extracted[1] / 100;\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */\r\n\t\t\t\t\t\t\t\t\t\tpropertyValue = 1;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t\t/* Opacified elements are required to have their zoom property set to a non-zero value. */\r\n\t\t\t\t\t\t\t\t\telement.style.zoom = 1;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Setting the filter property on elements with certain font property combinations can result in a\r\n\t\t\t\t\t\t\t\t\t highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the\r\n\t\t\t\t\t\t\t\t\t value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */\r\n\t\t\t\t\t\t\t\t\tif (parseFloat(propertyValue) >= 1) {\r\n\t\t\t\t\t\t\t\t\t\treturn \"\";\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */\r\n\t\t\t\t\t\t\t\t\t\treturn \"alpha(opacity=\" + parseInt(parseFloat(propertyValue) * 100, 10) + \")\";\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* With all other browsers, normalization is not required; return the same values that were passed in. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\t\treturn \"opacity\";\r\n\t\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/*****************************\r\n\t\t\t\t Batched Registrations\r\n\t\t\t\t *****************************/\r\n\r\n\t\t\t\t/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */\r\n\t\t\t\tregister: function() {\r\n\r\n\t\t\t\t\t/*****************\r\n\t\t\t\t\t Transforms\r\n\t\t\t\t\t *****************/\r\n\r\n\t\t\t\t\t/* Transforms are the subproperties contained by the CSS \"transform\" property. Transforms must undergo normalization\r\n\t\t\t\t\t so that they can be referenced in a properties map by their individual names. */\r\n\t\t\t\t\t/* Note: When transforms are \"set\", they are actually assigned to a per-element transformCache. When all transform\r\n\t\t\t\t\t setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.\r\n\t\t\t\t\t Transform setting is batched in this way to improve performance: the transform style only needs to be updated\r\n\t\t\t\t\t once when multiple transform subproperties are being animated simultaneously. */\r\n\t\t\t\t\t/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported\r\n\t\t\t\t\t transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values\r\n\t\t\t\t\t from being normalized for these browsers so that tweening skips these properties altogether\r\n\t\t\t\t\t (since it will ignore them as being unsupported by the browser.) */\r\n\t\t\t\t\tif ((!IE || IE > 9) && !Velocity.State.isGingerbread) {\r\n\t\t\t\t\t\t/* Note: Since the standalone CSS \"perspective\" property and the CSS transform \"perspective\" subproperty\r\n\t\t\t\t\t\t share the same name, the latter is given a unique token within Velocity: \"transformPerspective\". */\r\n\t\t\t\t\t\tCSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tfor (var i = 0; i < CSS.Lists.transformsBase.length; i++) {\r\n\t\t\t\t\t\t/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is\r\n\t\t\t\t\t\t paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */\r\n\t\t\t\t\t\t(function() {\r\n\t\t\t\t\t\t\tvar transformName = CSS.Lists.transformsBase[i];\r\n\r\n\t\t\t\t\t\t\tCSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {\r\n\t\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\t\t/* The normalized property name is the parent \"transform\" property -- the property that is actually set in CSS. */\r\n\t\t\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\t\t\treturn \"transform\";\r\n\t\t\t\t\t\t\t\t\t\t/* Transform values are cached onto a per-element transformCache object. */\r\n\t\t\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\t\t\t/* If this transform has yet to be assigned a value, return its null value. */\r\n\t\t\t\t\t\t\t\t\t\tif (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */\r\n\t\t\t\t\t\t\t\t\t\t\treturn /^scale/i.test(transformName) ? 1 : 0;\r\n\t\t\t\t\t\t\t\t\t\t\t/* When transform values are set, they are wrapped in parentheses as per the CSS spec.\r\n\t\t\t\t\t\t\t\t\t\t\t Thus, when extracting their values (for tween calculations), we strip off the parentheses. */\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\treturn Data(element).transformCache[transformName].replace(/[()]/g, \"\");\r\n\t\t\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t\t\tvar invalid = false;\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.\r\n\t\t\t\t\t\t\t\t\t\t Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */\r\n\t\t\t\t\t\t\t\t\t\t/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */\r\n\t\t\t\t\t\t\t\t\t\tswitch (transformName.substr(0, transformName.length - 1)) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Whitelist unit types for each transform. */\r\n\t\t\t\t\t\t\t\t\t\t\tcase \"translate\":\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(%|px|em|rem|vw|vh|\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* Since an axis-free \"scale\" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */\r\n\t\t\t\t\t\t\t\t\t\t\tcase \"scal\":\r\n\t\t\t\t\t\t\t\t\t\t\tcase \"scale\":\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* Chrome on Android has a bug in which scaled elements blur if their initial scale\r\n\t\t\t\t\t\t\t\t\t\t\t\t value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property\r\n\t\t\t\t\t\t\t\t\t\t\t\t and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */\r\n\t\t\t\t\t\t\t\t\t\t\t\tif (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tpropertyValue = 1;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\tcase \"skew\":\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(deg|\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\tcase \"rotate\":\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(deg|\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (!invalid) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* As per the CSS spec, wrap the value in parentheses. */\r\n\t\t\t\t\t\t\t\t\t\t\tData(element).transformCache[transformName] = \"(\" + propertyValue + \")\";\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */\r\n\t\t\t\t\t\t\t\t\t\treturn Data(element).transformCache[transformName];\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})();\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/*************\r\n\t\t\t\t\t Colors\r\n\t\t\t\t\t *************/\r\n\r\n\t\t\t\t\t/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.\r\n\t\t\t\t\t Accordingly, color values must be normalized (e.g. \"#ff0000\", \"red\", and \"rgb(255, 0, 0)\" ==> \"255 0 0 1\") so that their components can be injected/extracted by CSS.Hooks logic. */\r\n\t\t\t\t\tfor (var j = 0; j < CSS.Lists.colors.length; j++) {\r\n\t\t\t\t\t\t/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.\r\n\t\t\t\t\t\t (Otherwise, all functions would take the final for loop's colorName.) */\r\n\t\t\t\t\t\t(function() {\r\n\t\t\t\t\t\t\tvar colorName = CSS.Lists.colors[j];\r\n\r\n\t\t\t\t\t\t\t/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */\r\n\t\t\t\t\t\t\tCSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {\r\n\t\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\t\t\treturn colorName;\r\n\t\t\t\t\t\t\t\t\t\t/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */\r\n\t\t\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\t\t\tvar extracted;\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* If the color is already in its hookable form (e.g. \"255 255 255 1\") due to having been previously extracted, skip extraction. */\r\n\t\t\t\t\t\t\t\t\t\tif (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\textracted = propertyValue;\r\n\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\tvar converted,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolorNames = {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tblack: \"rgb(0, 0, 0)\",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tblue: \"rgb(0, 0, 255)\",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tgray: \"rgb(128, 128, 128)\",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tgreen: \"rgb(0, 128, 0)\",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tred: \"rgb(255, 0, 0)\",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\twhite: \"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Convert color names to rgb. */\r\n\t\t\t\t\t\t\t\t\t\t\tif (/^[A-z]+$/i.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tif (colorNames[propertyValue] !== undefined) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames[propertyValue];\r\n\t\t\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/* If an unmatched color name is provided, default to black. */\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames.black;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* Convert hex values to rgb. */\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (CSS.RegEx.isHex.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tconverted = \"rgb(\" + CSS.Values.hexToRgb(propertyValue).join(\" \") + \")\";\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* If the provided color doesn't match any of the accepted color formats, default to black. */\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (!(/^rgba?\\(/i.test(propertyValue))) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames.black;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Remove the surrounding \"rgb/rgba()\" string then replace commas with spaces and strip\r\n\t\t\t\t\t\t\t\t\t\t\t repeated spaces (in case the value included spaces to begin with). */\r\n\t\t\t\t\t\t\t\t\t\t\textracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\\s+)?/g, \" \");\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */\r\n\t\t\t\t\t\t\t\t\t\tif ((!IE || IE > 8) && extracted.split(\" \").length === 3) {\r\n\t\t\t\t\t\t\t\t\t\t\textracted += \" 1\";\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\treturn extracted;\r\n\t\t\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t\t\t/* If we have a pattern then it might already have the right values */\r\n\t\t\t\t\t\t\t\t\t\tif (/^rgb/.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* If this is IE<=8 and an alpha component exists, strip it off. */\r\n\t\t\t\t\t\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\t\t\t\t\t\tif (propertyValue.split(\" \").length === 4) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tpropertyValue = propertyValue.split(/\\s+/).slice(0, 3).join(\" \");\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */\r\n\t\t\t\t\t\t\t\t\t\t} else if (propertyValue.split(\" \").length === 3) {\r\n\t\t\t\t\t\t\t\t\t\t\tpropertyValue += \" 1\";\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Re-insert the browser-appropriate wrapper(\"rgb/rgba()\"), insert commas, and strip off decimal units\r\n\t\t\t\t\t\t\t\t\t\t on all values but the fourth (R, G, and B only accept whole numbers). */\r\n\t\t\t\t\t\t\t\t\t\treturn (IE <= 8 ? \"rgb\" : \"rgba\") + \"(\" + propertyValue.replace(/\\s+/g, \",\").replace(/\\.(\\d)+(?=,)/g, \"\") + \")\";\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})();\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/**************\r\n\t\t\t\t\t Dimensions\r\n\t\t\t\t\t **************/\r\n\t\t\t\t\tfunction augmentDimension(name, element, wantInner) {\r\n\t\t\t\t\t\tvar isBorderBox = CSS.getPropertyValue(element, \"boxSizing\").toString().toLowerCase() === \"border-box\";\r\n\r\n\t\t\t\t\t\tif (isBorderBox === (wantInner || false)) {\r\n\t\t\t\t\t\t\t/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */\r\n\t\t\t\t\t\t\tvar i,\r\n\t\t\t\t\t\t\t\t\tvalue,\r\n\t\t\t\t\t\t\t\t\taugment = 0,\r\n\t\t\t\t\t\t\t\t\tsides = name === \"width\" ? [\"Left\", \"Right\"] : [\"Top\", \"Bottom\"],\r\n\t\t\t\t\t\t\t\t\tfields = [\"padding\" + sides[0], \"padding\" + sides[1], \"border\" + sides[0] + \"Width\", \"border\" + sides[1] + \"Width\"];\r\n\r\n\t\t\t\t\t\t\tfor (i = 0; i < fields.length; i++) {\r\n\t\t\t\t\t\t\t\tvalue = parseFloat(CSS.getPropertyValue(element, fields[i]));\r\n\t\t\t\t\t\t\t\tif (!isNaN(value)) {\r\n\t\t\t\t\t\t\t\t\taugment += value;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\treturn wantInner ? -augment : augment;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\treturn 0;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tfunction getDimension(name, wantInner) {\r\n\t\t\t\t\t\treturn function(type, element, propertyValue) {\r\n\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\t\treturn name;\r\n\t\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\t\treturn parseFloat(propertyValue) + augmentDimension(name, element, wantInner);\r\n\t\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t\treturn (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + \"px\";\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t}\r\n\t\t\t\t\tCSS.Normalizations.registered.innerWidth = getDimension(\"width\", true);\r\n\t\t\t\t\tCSS.Normalizations.registered.innerHeight = getDimension(\"height\", true);\r\n\t\t\t\t\tCSS.Normalizations.registered.outerWidth = getDimension(\"width\");\r\n\t\t\t\t\tCSS.Normalizations.registered.outerHeight = getDimension(\"height\");\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/************************\r\n\t\t\t CSS Property Names\r\n\t\t\t ************************/\r\n\r\n\t\t\tNames: {\r\n\t\t\t\t/* Camelcase a property name into its JavaScript notation (e.g. \"background-color\" ==> \"backgroundColor\").\r\n\t\t\t\t Camelcasing is used to normalize property names between and across calls. */\r\n\t\t\t\tcamelCase: function(property) {\r\n\t\t\t\t\treturn property.replace(/-(\\w)/g, function(match, subMatch) {\r\n\t\t\t\t\t\treturn subMatch.toUpperCase();\r\n\t\t\t\t\t});\r\n\t\t\t\t},\r\n\t\t\t\t/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */\r\n\t\t\t\tSVGAttribute: function(property) {\r\n\t\t\t\t\tvar SVGAttributes = \"width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2\";\r\n\r\n\t\t\t\t\t/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */\r\n\t\t\t\t\tif (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {\r\n\t\t\t\t\t\tSVGAttributes += \"|transform\";\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn new RegExp(\"^(\" + SVGAttributes + \")$\", \"i\").test(property);\r\n\t\t\t\t},\r\n\t\t\t\t/* Determine whether a property should be set with a vendor prefix. */\r\n\t\t\t\t/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.\r\n\t\t\t\t If the property is not at all supported by the browser, return a false flag. */\r\n\t\t\t\tprefixCheck: function(property) {\r\n\t\t\t\t\t/* If this property has already been checked, return the cached value. */\r\n\t\t\t\t\tif (Velocity.State.prefixMatches[property]) {\r\n\t\t\t\t\t\treturn [Velocity.State.prefixMatches[property], true];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tvar vendors = [\"\", \"Webkit\", \"Moz\", \"ms\", \"O\"];\r\n\r\n\t\t\t\t\t\tfor (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {\r\n\t\t\t\t\t\t\tvar propertyPrefixed;\r\n\r\n\t\t\t\t\t\t\tif (i === 0) {\r\n\t\t\t\t\t\t\t\tpropertyPrefixed = property;\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */\r\n\t\t\t\t\t\t\t\tpropertyPrefixed = vendors[i] + property.replace(/^\\w/, function(match) {\r\n\t\t\t\t\t\t\t\t\treturn match.toUpperCase();\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Check if the browser supports this property as prefixed. */\r\n\t\t\t\t\t\t\tif (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {\r\n\t\t\t\t\t\t\t\t/* Cache the match. */\r\n\t\t\t\t\t\t\t\tVelocity.State.prefixMatches[property] = propertyPrefixed;\r\n\r\n\t\t\t\t\t\t\t\treturn [propertyPrefixed, true];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */\r\n\t\t\t\t\t\treturn [property, false];\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/************************\r\n\t\t\t CSS Property Values\r\n\t\t\t ************************/\r\n\r\n\t\t\tValues: {\r\n\t\t\t\t/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */\r\n\t\t\t\thexToRgb: function(hex) {\r\n\t\t\t\t\tvar shortformRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,\r\n\t\t\t\t\t\t\tlongformRegex = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i,\r\n\t\t\t\t\t\t\trgbParts;\r\n\r\n\t\t\t\t\thex = hex.replace(shortformRegex, function(m, r, g, b) {\r\n\t\t\t\t\t\treturn r + r + g + g + b + b;\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\trgbParts = longformRegex.exec(hex);\r\n\r\n\t\t\t\t\treturn rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];\r\n\t\t\t\t},\r\n\t\t\t\tisCSSNullValue: function(value) {\r\n\t\t\t\t\t/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.\r\n\t\t\t\t\t Thus, we check for both falsiness and these special strings. */\r\n\t\t\t\t\t/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook\r\n\t\t\t\t\t templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */\r\n\t\t\t\t\t/* Note: Chrome returns \"rgba(0, 0, 0, 0)\" for an undefined color whereas IE returns \"transparent\". */\r\n\t\t\t\t\treturn (!value || /^(none|auto|transparent|(rgba\\(0, ?0, ?0, ?0\\)))$/i.test(value));\r\n\t\t\t\t},\r\n\t\t\t\t/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */\r\n\t\t\t\tgetUnitType: function(property) {\r\n\t\t\t\t\tif (/^(rotate|skew)/i.test(property)) {\r\n\t\t\t\t\t\treturn \"deg\";\r\n\t\t\t\t\t} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {\r\n\t\t\t\t\t\t/* The above properties are unitless. */\r\n\t\t\t\t\t\treturn \"\";\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* Default to px for all other properties. */\r\n\t\t\t\t\t\treturn \"px\";\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/* HTML elements default to an associated display type when they're not set to display:none. */\r\n\t\t\t\t/* Note: This function is used for correctly setting the non-\"none\" display value in certain Velocity redirects, such as fadeIn/Out. */\r\n\t\t\t\tgetDisplayType: function(element) {\r\n\t\t\t\t\tvar tagName = element && element.tagName.toString().toLowerCase();\r\n\r\n\t\t\t\t\tif (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn \"inline\";\r\n\t\t\t\t\t} else if (/^(li)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn \"list-item\";\r\n\t\t\t\t\t} else if (/^(tr)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn \"table-row\";\r\n\t\t\t\t\t} else if (/^(table)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn \"table\";\r\n\t\t\t\t\t} else if (/^(tbody)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn \"table-row-group\";\r\n\t\t\t\t\t\t/* Default to \"block\" when no match is found. */\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\treturn \"block\";\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/* The class add/remove functions are used to temporarily apply a \"velocity-animating\" class to elements while they're animating. */\r\n\t\t\t\taddClass: function(element, className) {\r\n\t\t\t\t\tif (element) {\r\n\t\t\t\t\t\tif (element.classList) {\r\n\t\t\t\t\t\t\telement.classList.add(className);\r\n\t\t\t\t\t\t} else if (Type.isString(element.className)) {\r\n\t\t\t\t\t\t\t// Element.className is around 15% faster then set/getAttribute\r\n\t\t\t\t\t\t\telement.className += (element.className.length ? \" \" : \"\") + className;\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it\r\n\t\t\t\t\t\t\tvar currentClass = element.getAttribute(IE <= 7 ? \"className\" : \"class\") || \"\";\r\n\r\n\t\t\t\t\t\t\telement.setAttribute(\"class\", currentClass + (currentClass ? \" \" : \"\") + className);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\tremoveClass: function(element, className) {\r\n\t\t\t\t\tif (element) {\r\n\t\t\t\t\t\tif (element.classList) {\r\n\t\t\t\t\t\t\telement.classList.remove(className);\r\n\t\t\t\t\t\t} else if (Type.isString(element.className)) {\r\n\t\t\t\t\t\t\t// Element.className is around 15% faster then set/getAttribute\r\n\t\t\t\t\t\t\t// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?\r\n\t\t\t\t\t\t\telement.className = element.className.toString().replace(new RegExp(\"(^|\\\\s)\" + className.split(\" \").join(\"|\") + \"(\\\\s|$)\", \"gi\"), \" \");\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it\r\n\t\t\t\t\t\t\tvar currentClass = element.getAttribute(IE <= 7 ? \"className\" : \"class\") || \"\";\r\n\r\n\t\t\t\t\t\t\telement.setAttribute(\"class\", currentClass.replace(new RegExp(\"(^|\\s)\" + className.split(\" \").join(\"|\") + \"(\\s|$)\", \"gi\"), \" \"));\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/****************************\r\n\t\t\t Style Getting & Setting\r\n\t\t\t ****************************/\r\n\r\n\t\t\t/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */\r\n\t\t\tgetPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {\r\n\t\t\t\t/* Get an element's computed property value. */\r\n\t\t\t\t/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's\r\n\t\t\t\t style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's\r\n\t\t\t\t *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */\r\n\t\t\t\tfunction computePropertyValue(element, property) {\r\n\t\t\t\t\t/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an\r\n\t\t\t\t\t element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate\r\n\t\t\t\t\t offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.\r\n\t\t\t\t\t We subtract border and padding to get the sum of interior + scrollbar. */\r\n\t\t\t\t\tvar computedValue = 0;\r\n\r\n\t\t\t\t\t/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array\r\n\t\t\t\t\t of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the\r\n\t\t\t\t\t codebase for a dying browser. The performance repercussions of using jQuery here are minimal since\r\n\t\t\t\t\t Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */\r\n\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\tcomputedValue = $.css(element, property); /* GET */\r\n\t\t\t\t\t\t/* All other browsers support getComputedStyle. The returned live object reference is cached onto its\r\n\t\t\t\t\t\t associated element so that it does not need to be refetched upon every GET. */\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* Browsers do not return height and width values for elements that are set to display:\"none\". Thus, we temporarily\r\n\t\t\t\t\t\t toggle display to the element type's default value. */\r\n\t\t\t\t\t\tvar toggleDisplay = false;\r\n\r\n\t\t\t\t\t\tif (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, \"display\") === 0) {\r\n\t\t\t\t\t\t\ttoggleDisplay = true;\r\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", CSS.Values.getDisplayType(element));\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tvar revertDisplay = function() {\r\n\t\t\t\t\t\t\tif (toggleDisplay) {\r\n\t\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", \"none\");\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\tif (!forceStyleLookup) {\r\n\t\t\t\t\t\t\tif (property === \"height\" && CSS.getPropertyValue(element, \"boxSizing\").toString().toLowerCase() !== \"border-box\") {\r\n\t\t\t\t\t\t\t\tvar contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, \"borderTopWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"borderBottomWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingTop\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingBottom\")) || 0);\r\n\t\t\t\t\t\t\t\trevertDisplay();\r\n\r\n\t\t\t\t\t\t\t\treturn contentBoxHeight;\r\n\t\t\t\t\t\t\t} else if (property === \"width\" && CSS.getPropertyValue(element, \"boxSizing\").toString().toLowerCase() !== \"border-box\") {\r\n\t\t\t\t\t\t\t\tvar contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, \"borderLeftWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"borderRightWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingLeft\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingRight\")) || 0);\r\n\t\t\t\t\t\t\t\trevertDisplay();\r\n\r\n\t\t\t\t\t\t\t\treturn contentBoxWidth;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tvar computedStyle;\r\n\r\n\t\t\t\t\t\t/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf\r\n\t\t\t\t\t\t of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */\r\n\t\t\t\t\t\tif (Data(element) === undefined) {\r\n\t\t\t\t\t\t\tcomputedStyle = window.getComputedStyle(element, null); /* GET */\r\n\t\t\t\t\t\t\t/* If the computedStyle object has yet to be cached, do so now. */\r\n\t\t\t\t\t\t} else if (!Data(element).computedStyle) {\r\n\t\t\t\t\t\t\tcomputedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */\r\n\t\t\t\t\t\t\t/* If computedStyle is cached, use it. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tcomputedStyle = Data(element).computedStyle;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.\r\n\t\t\t\t\t\t Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.\r\n\t\t\t\t\t\t So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */\r\n\t\t\t\t\t\tif (property === \"borderColor\") {\r\n\t\t\t\t\t\t\tproperty = \"borderTopColor\";\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* IE9 has a bug in which the \"filter\" property must be accessed from computedStyle using the getPropertyValue method\r\n\t\t\t\t\t\t instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */\r\n\t\t\t\t\t\tif (IE === 9 && property === \"filter\") {\r\n\t\t\t\t\t\t\tcomputedValue = computedStyle.getPropertyValue(property); /* GET */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tcomputedValue = computedStyle[property];\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Fall back to the property's style value (if defined) when computedValue returns nothing,\r\n\t\t\t\t\t\t which can happen when the element hasn't been painted. */\r\n\t\t\t\t\t\tif (computedValue === \"\" || computedValue === null) {\r\n\t\t\t\t\t\t\tcomputedValue = element.style[property];\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\trevertDisplay();\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* For top, right, bottom, and left (TRBL) values that are set to \"auto\" on elements of \"fixed\" or \"absolute\" position,\r\n\t\t\t\t\t defer to jQuery for converting \"auto\" to a numeric value. (For elements with a \"static\" or \"relative\" position, \"auto\" has the same\r\n\t\t\t\t\t effect as being set to 0, so no conversion is necessary.) */\r\n\t\t\t\t\t/* An example of why numeric conversion is necessary: When an element with \"position:absolute\" has an untouched \"left\"\r\n\t\t\t\t\t property, which reverts to \"auto\", left's value is 0 relative to its parent element, but is often non-zero relative\r\n\t\t\t\t\t to its *containing* (not parent) element, which is the nearest \"position:relative\" ancestor or the viewport (and always the viewport in the case of \"position:fixed\"). */\r\n\t\t\t\t\tif (computedValue === \"auto\" && /^(top|right|bottom|left)$/i.test(property)) {\r\n\t\t\t\t\t\tvar position = computePropertyValue(element, \"position\"); /* GET */\r\n\r\n\t\t\t\t\t\t/* For absolute positioning, jQuery's $.position() only returns values for top and left;\r\n\t\t\t\t\t\t right and bottom will have their \"auto\" value reverted to 0. */\r\n\t\t\t\t\t\t/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().\r\n\t\t\t\t\t\t Not a big deal since we're currently in a GET batch anyway. */\r\n\t\t\t\t\t\tif (position === \"fixed\" || (position === \"absolute\" && /top|left/i.test(property))) {\r\n\t\t\t\t\t\t\t/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */\r\n\t\t\t\t\t\t\tcomputedValue = $(element).position()[property] + \"px\"; /* GET */\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn computedValue;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tvar propertyValue;\r\n\r\n\t\t\t\t/* If this is a hooked property (e.g. \"clipLeft\" instead of the root property of \"clip\"),\r\n\t\t\t\t extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */\r\n\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\tvar hook = property,\r\n\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(hook);\r\n\r\n\t\t\t\t\t/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),\r\n\t\t\t\t\t query the DOM for the root property's value. */\r\n\t\t\t\t\tif (rootPropertyValue === undefined) {\r\n\t\t\t\t\t\t/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */\r\n\t\t\t\t\t\trootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If this root has a normalization registered, peform the associated normalization extraction. */\r\n\t\t\t\t\tif (CSS.Normalizations.registered[hookRoot]) {\r\n\t\t\t\t\t\trootPropertyValue = CSS.Normalizations.registered[hookRoot](\"extract\", element, rootPropertyValue);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Extract the hook's value. */\r\n\t\t\t\t\tpropertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);\r\n\r\n\t\t\t\t\t/* If this is a normalized property (e.g. \"opacity\" becomes \"filter\" in <=IE8) or \"translateX\" becomes \"transform\"),\r\n\t\t\t\t\t normalize the property's name and value, and handle the special case of transforms. */\r\n\t\t\t\t\t/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly\r\n\t\t\t\t\t numerical and therefore do not require normalization extraction. */\r\n\t\t\t\t} else if (CSS.Normalizations.registered[property]) {\r\n\t\t\t\t\tvar normalizedPropertyName,\r\n\t\t\t\t\t\t\tnormalizedPropertyValue;\r\n\r\n\t\t\t\t\tnormalizedPropertyName = CSS.Normalizations.registered[property](\"name\", element);\r\n\r\n\t\t\t\t\t/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.\r\n\t\t\t\t\t At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.\r\n\t\t\t\t\t This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;\r\n\t\t\t\t\t thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */\r\n\t\t\t\t\tif (normalizedPropertyName !== \"transform\") {\r\n\t\t\t\t\t\tnormalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */\r\n\r\n\t\t\t\t\t\t/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */\r\n\t\t\t\t\t\tif (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {\r\n\t\t\t\t\t\t\tnormalizedPropertyValue = CSS.Hooks.templates[property][1];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tpropertyValue = CSS.Normalizations.registered[property](\"extract\", element, normalizedPropertyValue);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */\r\n\t\t\t\tif (!/^[\\d-]/.test(propertyValue)) {\r\n\t\t\t\t\t/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via\r\n\t\t\t\t\t their HTML attribute values instead of their CSS style values. */\r\n\t\t\t\t\tvar data = Data(element);\r\n\r\n\t\t\t\t\tif (data && data.isSVG && CSS.Names.SVGAttribute(property)) {\r\n\t\t\t\t\t\t/* Since the height/width attribute values must be set manually, they don't reflect computed values.\r\n\t\t\t\t\t\t Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */\r\n\t\t\t\t\t\tif (/^(height|width)$/i.test(property)) {\r\n\t\t\t\t\t\t\t/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */\r\n\t\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\t\tpropertyValue = element.getBBox()[property];\r\n\t\t\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\t\t\tpropertyValue = 0;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* Otherwise, access the attribute value directly. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tpropertyValue = element.getAttribute(property);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tpropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),\r\n\t\t\t\t convert CSS null-values to an integer of value 0. */\r\n\t\t\t\tif (CSS.Values.isCSSNullValue(propertyValue)) {\r\n\t\t\t\t\tpropertyValue = 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (Velocity.debug >= 2) {\r\n\t\t\t\t\tconsole.log(\"Get \" + property + \": \" + propertyValue);\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn propertyValue;\r\n\t\t\t},\r\n\t\t\t/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */\r\n\t\t\tsetPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {\r\n\t\t\t\tvar propertyName = property;\r\n\r\n\t\t\t\t/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */\r\n\t\t\t\tif (property === \"scroll\") {\r\n\t\t\t\t\t/* If a container option is present, scroll the container instead of the browser window. */\r\n\t\t\t\t\tif (scrollData.container) {\r\n\t\t\t\t\t\tscrollData.container[\"scroll\" + scrollData.direction] = propertyValue;\r\n\t\t\t\t\t\t/* Otherwise, Velocity defaults to scrolling the browser window. */\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tif (scrollData.direction === \"Left\") {\r\n\t\t\t\t\t\t\twindow.scrollTo(propertyValue, scrollData.alternateValue);\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\twindow.scrollTo(scrollData.alternateValue, propertyValue);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t} else {\r\n\t\t\t\t\t/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().\r\n\t\t\t\t\t Thus, for now, we merely cache transforms being SET. */\r\n\t\t\t\t\tif (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property](\"name\", element) === \"transform\") {\r\n\t\t\t\t\t\t/* Perform a normalization injection. */\r\n\t\t\t\t\t\t/* Note: The normalization logic handles the transformCache updating. */\r\n\t\t\t\t\t\tCSS.Normalizations.registered[property](\"inject\", element, propertyValue);\r\n\r\n\t\t\t\t\t\tpropertyName = \"transform\";\r\n\t\t\t\t\t\tpropertyValue = Data(element).transformCache[property];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* Inject hooks. */\r\n\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\tvar hookName = property,\r\n\t\t\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(property);\r\n\r\n\t\t\t\t\t\t\t/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */\r\n\t\t\t\t\t\t\trootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */\r\n\r\n\t\t\t\t\t\t\tpropertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);\r\n\t\t\t\t\t\t\tproperty = hookRoot;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Normalize names and values. */\r\n\t\t\t\t\t\tif (CSS.Normalizations.registered[property]) {\r\n\t\t\t\t\t\t\tpropertyValue = CSS.Normalizations.registered[property](\"inject\", element, propertyValue);\r\n\t\t\t\t\t\t\tproperty = CSS.Normalizations.registered[property](\"name\", element);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Assign the appropriate vendor prefix before performing an official style update. */\r\n\t\t\t\t\t\tpropertyName = CSS.Names.prefixCheck(property)[0];\r\n\r\n\t\t\t\t\t\t/* A try/catch is used for IE<=8, which throws an error when \"invalid\" CSS values are set, e.g. a negative width.\r\n\t\t\t\t\t\t Try/catch is avoided for other browsers since it incurs a performance overhead. */\r\n\t\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\t\telement.style[propertyName] = propertyValue;\r\n\t\t\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\tconsole.log(\"Browser does not support [\" + propertyValue + \"] for [\" + propertyName + \"]\");\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */\r\n\t\t\t\t\t\t\t/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tvar data = Data(element);\r\n\r\n\t\t\t\t\t\t\tif (data && data.isSVG && CSS.Names.SVGAttribute(property)) {\r\n\t\t\t\t\t\t\t\t/* Note: For SVG attributes, vendor-prefixed property names are never used. */\r\n\t\t\t\t\t\t\t\t/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */\r\n\t\t\t\t\t\t\t\telement.setAttribute(property, propertyValue);\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\telement.style[propertyName] = propertyValue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (Velocity.debug >= 2) {\r\n\t\t\t\t\t\t\tconsole.log(\"Set \" + property + \" (\" + propertyName + \"): \" + propertyValue);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */\r\n\t\t\t\treturn [propertyName, propertyValue];\r\n\t\t\t},\r\n\t\t\t/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */\r\n\t\t\t/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */\r\n\t\t\tflushTransformCache: function(element) {\r\n\t\t\t\tvar transformString = \"\",\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string\r\n\t\t\t\t (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */\r\n\t\t\t\tif ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {\r\n\t\t\t\t\t/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.\r\n\t\t\t\t\t Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */\r\n\t\t\t\t\tvar getTransformFloat = function(transformProperty) {\r\n\t\t\t\t\t\treturn parseFloat(CSS.getPropertyValue(element, transformProperty));\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,\r\n\t\t\t\t\t we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */\r\n\t\t\t\t\tvar SVGTransforms = {\r\n\t\t\t\t\t\ttranslate: [getTransformFloat(\"translateX\"), getTransformFloat(\"translateY\")],\r\n\t\t\t\t\t\tskewX: [getTransformFloat(\"skewX\")], skewY: [getTransformFloat(\"skewY\")],\r\n\t\t\t\t\t\t/* If the scale property is set (non-1), use that value for the scaleX and scaleY values\r\n\t\t\t\t\t\t (this behavior mimics the result of animating all these properties at once on HTML elements). */\r\n\t\t\t\t\t\tscale: getTransformFloat(\"scale\") !== 1 ? [getTransformFloat(\"scale\"), getTransformFloat(\"scale\")] : [getTransformFloat(\"scaleX\"), getTransformFloat(\"scaleY\")],\r\n\t\t\t\t\t\t/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values\r\n\t\t\t\t\t\t defining the rotation's origin point. We ignore the origin values (default them to 0). */\r\n\t\t\t\t\t\trotate: [getTransformFloat(\"rotateZ\"), 0, 0]\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* Iterate through the transform properties in the user-defined property map order.\r\n\t\t\t\t\t (This mimics the behavior of non-SVG transform animation.) */\r\n\t\t\t\t\t$.each(Data(element).transformCache, function(transformName) {\r\n\t\t\t\t\t\t/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master\r\n\t\t\t\t\t\t properties so that they match up with SVG's accepted transform properties. */\r\n\t\t\t\t\t\tif (/^translate/i.test(transformName)) {\r\n\t\t\t\t\t\t\ttransformName = \"translate\";\r\n\t\t\t\t\t\t} else if (/^scale/i.test(transformName)) {\r\n\t\t\t\t\t\t\ttransformName = \"scale\";\r\n\t\t\t\t\t\t} else if (/^rotate/i.test(transformName)) {\r\n\t\t\t\t\t\t\ttransformName = \"rotate\";\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Check that we haven't yet deleted the property from the SVGTransforms container. */\r\n\t\t\t\t\t\tif (SVGTransforms[transformName]) {\r\n\t\t\t\t\t\t\t/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */\r\n\t\t\t\t\t\t\ttransformString += transformName + \"(\" + SVGTransforms[transformName].join(\" \") + \")\" + \" \";\r\n\r\n\t\t\t\t\t\t\t/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't\r\n\t\t\t\t\t\t\t re-insert the same master property if we encounter another one of its axis-specific properties. */\r\n\t\t\t\t\t\t\tdelete SVGTransforms[transformName];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\t\t\t\t} else {\r\n\t\t\t\t\tvar transformValue,\r\n\t\t\t\t\t\t\tperspective;\r\n\r\n\t\t\t\t\t/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */\r\n\t\t\t\t\t$.each(Data(element).transformCache, function(transformName) {\r\n\t\t\t\t\t\ttransformValue = Data(element).transformCache[transformName];\r\n\r\n\t\t\t\t\t\t/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */\r\n\t\t\t\t\t\tif (transformName === \"transformPerspective\") {\r\n\t\t\t\t\t\t\tperspective = transformValue;\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* IE9 only supports one rotation type, rotateZ, which it refers to as \"rotate\". */\r\n\t\t\t\t\t\tif (IE === 9 && transformName === \"rotateZ\") {\r\n\t\t\t\t\t\t\ttransformName = \"rotate\";\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\ttransformString += transformName + transformValue + \" \";\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* If present, set the perspective subproperty first. */\r\n\t\t\t\t\tif (perspective) {\r\n\t\t\t\t\t\ttransformString = \"perspective\" + perspective + \" \" + transformString;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tCSS.setPropertyValue(element, \"transform\", transformString);\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/* Register hooks and normalizations. */\r\n\t\tCSS.Hooks.register();\r\n\t\tCSS.Normalizations.register();\r\n\r\n\t\t/* Allow hook setting in the same fashion as jQuery's $.css(). */\r\n\t\tVelocity.hook = function(elements, arg2, arg3) {\r\n\t\t\tvar value;\r\n\r\n\t\t\telements = sanitizeElements(elements);\r\n\r\n\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */\r\n\t\t\t\tif (Data(element) === undefined) {\r\n\t\t\t\t\tVelocity.init(element);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Get property value. If an element set was passed in, only return the value for the first element. */\r\n\t\t\t\tif (arg3 === undefined) {\r\n\t\t\t\t\tif (value === undefined) {\r\n\t\t\t\t\t\tvalue = CSS.getPropertyValue(element, arg2);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t/* Set property value. */\r\n\t\t\t\t} else {\r\n\t\t\t\t\t/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */\r\n\t\t\t\t\tvar adjustedSet = CSS.setPropertyValue(element, arg2, arg3);\r\n\r\n\t\t\t\t\t/* Transform properties don't automatically set. They have to be flushed to the DOM. */\r\n\t\t\t\t\tif (adjustedSet[0] === \"transform\") {\r\n\t\t\t\t\t\tVelocity.CSS.flushTransformCache(element);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvalue = adjustedSet;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\treturn value;\r\n\t\t};\r\n\r\n\t\t/*****************\r\n\t\t Animation\r\n\t\t *****************/\r\n\r\n\t\tvar animate = function() {\r\n\t\t\tvar opts;\r\n\r\n\t\t\t/******************\r\n\t\t\t Call Chain\r\n\t\t\t ******************/\r\n\r\n\t\t\t/* Logic for determining what to return to the call stack when exiting out of Velocity. */\r\n\t\t\tfunction getChain() {\r\n\t\t\t\t/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,\r\n\t\t\t\t default to null instead of returning the targeted elements so that utility function's return value is standardized. */\r\n\t\t\t\tif (isUtility) {\r\n\t\t\t\t\treturn promiseData.promise || null;\r\n\t\t\t\t\t/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */\r\n\t\t\t\t} else {\r\n\t\t\t\t\treturn elementsWrapped;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/*************************\r\n\t\t\t Arguments Assignment\r\n\t\t\t *************************/\r\n\r\n\t\t\t/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which \"elements\" (or \"e\"), \"properties\" (or \"p\"), and \"options\" (or \"o\")\r\n\t\t\t objects are defined on a container object that's passed in as Velocity's sole argument. */\r\n\t\t\t/* Note: Some browsers automatically populate arguments with a \"properties\" object. We detect it by checking for its default \"names\" property. */\r\n\t\t\tvar syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),\r\n\t\t\t\t\t/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */\r\n\t\t\t\t\tisUtility,\r\n\t\t\t\t\t/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly\r\n\t\t\t\t\t passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */\r\n\t\t\t\t\telementsWrapped,\r\n\t\t\t\t\targumentIndex;\r\n\r\n\t\t\tvar elements,\r\n\t\t\t\t\tpropertiesMap,\r\n\t\t\t\t\toptions;\r\n\r\n\t\t\t/* Detect jQuery/Zepto elements being animated via the $.fn method. */\r\n\t\t\tif (Type.isWrapped(this)) {\r\n\t\t\t\tisUtility = false;\r\n\r\n\t\t\t\targumentIndex = 0;\r\n\t\t\t\telements = this;\r\n\t\t\t\telementsWrapped = this;\r\n\t\t\t\t/* Otherwise, raw elements are being animated via the utility function. */\r\n\t\t\t} else {\r\n\t\t\t\tisUtility = true;\r\n\r\n\t\t\t\targumentIndex = 1;\r\n\t\t\t\telements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];\r\n\t\t\t}\r\n\r\n\t\t\t/***************\r\n\t\t\t Promises\r\n\t\t\t ***************/\r\n\r\n\t\t\tvar promiseData = {\r\n\t\t\t\tpromise: null,\r\n\t\t\t\tresolver: null,\r\n\t\t\t\trejecter: null\r\n\t\t\t};\r\n\r\n\t\t\t/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if\r\n\t\t\t promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve\r\n\t\t\t method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated\r\n\t\t\t call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */\r\n\t\t\t/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that\r\n\t\t\t triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are\r\n\t\t\t grouped together for the purposes of resolving and rejecting a promise. */\r\n\t\t\tif (isUtility && Velocity.Promise) {\r\n\t\t\t\tpromiseData.promise = new Velocity.Promise(function(resolve, reject) {\r\n\t\t\t\t\tpromiseData.resolver = resolve;\r\n\t\t\t\t\tpromiseData.rejecter = reject;\r\n\t\t\t\t});\r\n\t\t\t}\r\n\r\n\t\t\tif (syntacticSugar) {\r\n\t\t\t\tpropertiesMap = arguments[0].properties || arguments[0].p;\r\n\t\t\t\toptions = arguments[0].options || arguments[0].o;\r\n\t\t\t} else {\r\n\t\t\t\tpropertiesMap = arguments[argumentIndex];\r\n\t\t\t\toptions = arguments[argumentIndex + 1];\r\n\t\t\t}\r\n\r\n\t\t\telements = sanitizeElements(elements);\r\n\r\n\t\t\tif (!elements) {\r\n\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\tif (!propertiesMap || !options || options.promiseRejectEmpty !== false) {\r\n\t\t\t\t\t\tpromiseData.rejecter();\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tpromiseData.resolver();\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\t/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a\r\n\t\t\t single raw DOM element is passed in (which doesn't contain a length property). */\r\n\t\t\tvar elementsLength = elements.length,\r\n\t\t\t\t\telementsIndex = 0;\r\n\r\n\t\t\t/***************************\r\n\t\t\t Argument Overloading\r\n\t\t\t ***************************/\r\n\r\n\t\t\t/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).\r\n\t\t\t Overloading is detected by checking for the absence of an object being passed into options. */\r\n\t\t\t/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */\r\n\t\t\tif (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {\r\n\t\t\t\t/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */\r\n\t\t\t\tvar startingArgumentPosition = argumentIndex + 1;\r\n\r\n\t\t\t\toptions = {};\r\n\r\n\t\t\t\t/* Iterate through all options arguments */\r\n\t\t\t\tfor (var i = startingArgumentPosition; i < arguments.length; i++) {\r\n\t\t\t\t\t/* Treat a number as a duration. Parse it out. */\r\n\t\t\t\t\t/* Note: The following RegEx will return true if passed an array with a number as its first item.\r\n\t\t\t\t\t Thus, arrays are skipped from this check. */\r\n\t\t\t\t\tif (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\\d/.test(arguments[i]))) {\r\n\t\t\t\t\t\toptions.duration = arguments[i];\r\n\t\t\t\t\t\t/* Treat strings and arrays as easings. */\r\n\t\t\t\t\t} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {\r\n\t\t\t\t\t\toptions.easing = arguments[i];\r\n\t\t\t\t\t\t/* Treat a function as a complete callback. */\r\n\t\t\t\t\t} else if (Type.isFunction(arguments[i])) {\r\n\t\t\t\t\t\toptions.complete = arguments[i];\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/*********************\r\n\t\t\t Action Detection\r\n\t\t\t *********************/\r\n\r\n\t\t\t/* Velocity's behavior is categorized into \"actions\": Elements can either be specially scrolled into view,\r\n\t\t\t or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's\r\n\t\t\t first argument, the associated action is \"start\". Alternatively, \"scroll\", \"reverse\", \"pause\", \"resume\" or \"stop\" can be passed in \r\n\t\t\t instead of a properties map. */\r\n\t\t\tvar action;\r\n\r\n\t\t\tswitch (propertiesMap) {\r\n\t\t\t\tcase \"scroll\":\r\n\t\t\t\t\taction = \"scroll\";\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase \"reverse\":\r\n\t\t\t\t\taction = \"reverse\";\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase \"pause\":\r\n\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Action: Pause\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\tvar currentTime = (new Date()).getTime();\r\n\r\n\t\t\t\t\t/* Handle delay timers */\r\n\t\t\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t\t\tpauseDelayOnElement(element, currentTime);\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a \r\n\t\t\t\t\t single element will cause any calls that containt tweens for that element to be paused/resumed\r\n\t\t\t\t\t as well. */\r\n\r\n\t\t\t\t\t/* Iterate through all calls and pause any that contain any of our elements */\r\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\r\n\t\t\t\t\t\tvar found = false;\r\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\r\n\t\t\t\t\t\tif (activeCall) {\r\n\t\t\t\t\t\t\t/* Iterate through the active call's targeted elements. */\r\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\r\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? \"\" : options;\r\n\r\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\r\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\r\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\r\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Set call to paused */\r\n\t\t\t\t\t\t\t\t\t\tactiveCall[5] = {\r\n\t\t\t\t\t\t\t\t\t\t\tresume: false\r\n\t\t\t\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Once we match an element, we can bounce out to the next call entirely */\r\n\t\t\t\t\t\t\t\t\t\tfound = true;\r\n\t\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t/* Proceed to check next call if we have already matched */\r\n\t\t\t\t\t\t\t\tif (found) {\r\n\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Since pause creates no new tweens, exit out of Velocity. */\r\n\t\t\t\t\treturn getChain();\r\n\r\n\t\t\t\tcase \"resume\":\r\n\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Action: Resume\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t/* Handle delay timers */\r\n\t\t\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t\t\tresumeDelayOnElement(element, currentTime);\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a \r\n\t\t\t\t\t single element will cause any calls that containt tweens for that element to be paused/resumed\r\n\t\t\t\t\t as well. */\r\n\r\n\t\t\t\t\t/* Iterate through all calls and pause any that contain any of our elements */\r\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\t\t\t\t\t\tvar found = false;\r\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\r\n\t\t\t\t\t\tif (activeCall) {\r\n\t\t\t\t\t\t\t/* Iterate through the active call's targeted elements. */\r\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\r\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? \"\" : options;\r\n\r\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Skip any calls that have never been paused */\r\n\t\t\t\t\t\t\t\tif (!activeCall[5]) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\r\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\r\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\r\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Flag a pause object to be resumed, which will occur during the next tick. In\r\n\t\t\t\t\t\t\t\t\t\t addition, the pause object will at that time be deleted */\r\n\t\t\t\t\t\t\t\t\t\tactiveCall[5].resume = true;\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Once we match an element, we can bounce out to the next call entirely */\r\n\t\t\t\t\t\t\t\t\t\tfound = true;\r\n\t\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t/* Proceed to check next call if we have already matched */\r\n\t\t\t\t\t\t\t\tif (found) {\r\n\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Since resume creates no new tweens, exit out of Velocity. */\r\n\t\t\t\t\treturn getChain();\r\n\r\n\t\t\t\tcase \"finish\":\r\n\t\t\t\tcase \"finishAll\":\r\n\t\t\t\tcase \"stop\":\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Action: Stop\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t/* Clear the currently-active delay on each targeted element. */\r\n\t\t\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t\t\tif (Data(element) && Data(element).delayTimer) {\r\n\t\t\t\t\t\t\t/* Stop the timer from triggering its cached next() function. */\r\n\t\t\t\t\t\t\tclearTimeout(Data(element).delayTimer.setTimeout);\r\n\r\n\t\t\t\t\t\t\t/* Manually call the next() function so that the subsequent queue items can progress. */\r\n\t\t\t\t\t\t\tif (Data(element).delayTimer.next) {\r\n\t\t\t\t\t\t\t\tData(element).delayTimer.next();\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tdelete Data(element).delayTimer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* If we want to finish everything in the queue, we have to iterate through it\r\n\t\t\t\t\t\t and call each function. This will make them active calls below, which will\r\n\t\t\t\t\t\t cause them to be applied via the duration setting. */\r\n\t\t\t\t\t\tif (propertiesMap === \"finishAll\" && (options === true || Type.isString(options))) {\r\n\t\t\t\t\t\t\t/* Iterate through the items in the element's queue. */\r\n\t\t\t\t\t\t\t$.each($.queue(element, Type.isString(options) ? options : \"\"), function(_, item) {\r\n\t\t\t\t\t\t\t\t/* The queue array can contain an \"inprogress\" string, which we skip. */\r\n\t\t\t\t\t\t\t\tif (Type.isFunction(item)) {\r\n\t\t\t\t\t\t\t\t\titem();\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t/* Clearing the $.queue() array is achieved by resetting it to []. */\r\n\t\t\t\t\t\t\t$.queue(element, Type.isString(options) ? options : \"\", []);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\tvar callsToStop = [];\r\n\r\n\t\t\t\t\t/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have\r\n\t\t\t\t\t been applied to multiple elements, in which case all of the call's elements will be stopped. When an element\r\n\t\t\t\t\t is stopped, the next item in its animation queue is immediately triggered. */\r\n\t\t\t\t\t/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the \"fx\" queue)\r\n\t\t\t\t\t or a custom queue string can be passed in. */\r\n\t\t\t\t\t/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,\r\n\t\t\t\t\t regardless of the element's current queue state. */\r\n\r\n\t\t\t\t\t/* Iterate through every active call. */\r\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\r\n\t\t\t\t\t\tif (activeCall) {\r\n\t\t\t\t\t\t\t/* Iterate through the active call's targeted elements. */\r\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\r\n\t\t\t\t\t\t\t\t/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only\r\n\t\t\t\t\t\t\t\t clear calls associated with the relevant queue. */\r\n\t\t\t\t\t\t\t\t/* Call stopping logic works as follows:\r\n\t\t\t\t\t\t\t\t - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.\r\n\t\t\t\t\t\t\t\t - options === undefined --> stop current queue:\"\" call and all queue:false calls.\r\n\t\t\t\t\t\t\t\t - options === false --> stop only queue:false calls.\r\n\t\t\t\t\t\t\t\t - options === \"custom\" --> stop current queue:\"custom\" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:\"custom\" call). */\r\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? \"\" : options;\r\n\r\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\r\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\r\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\r\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\r\n\t\t\t\t\t\t\t\t\t\t/* Optionally clear the remaining queued calls. If we're doing \"finishAll\" this won't find anything,\r\n\t\t\t\t\t\t\t\t\t\t due to the queue-clearing above. */\r\n\t\t\t\t\t\t\t\t\t\tif (options === true || Type.isString(options)) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Iterate through the items in the element's queue. */\r\n\t\t\t\t\t\t\t\t\t\t\t$.each($.queue(element, Type.isString(options) ? options : \"\"), function(_, item) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* The queue array can contain an \"inprogress\" string, which we skip. */\r\n\t\t\t\t\t\t\t\t\t\t\t\tif (Type.isFunction(item)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/* Pass the item's callback a flag indicating that we want to abort from the queue call.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t (Specifically, the queue will resolve the call's associated promise then abort.)  */\r\n\t\t\t\t\t\t\t\t\t\t\t\t\titem(null, true);\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Clearing the $.queue() array is achieved by resetting it to []. */\r\n\t\t\t\t\t\t\t\t\t\t\t$.queue(element, Type.isString(options) ? options : \"\", []);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (propertiesMap === \"stop\") {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Since \"reverse\" uses cached start values (the previous call's endValues), these values must be\r\n\t\t\t\t\t\t\t\t\t\t\t changed to reflect the final value that the elements were actually tweened to. */\r\n\t\t\t\t\t\t\t\t\t\t\t/* Note: If only queue:false/queue:\"custom\" animations are currently running on an element, it won't have a tweensContainer\r\n\t\t\t\t\t\t\t\t\t\t\t object. Also, queue:false/queue:\"custom\" animations can't be reversed. */\r\n\t\t\t\t\t\t\t\t\t\t\tvar data = Data(element);\r\n\t\t\t\t\t\t\t\t\t\t\tif (data && data.tweensContainer && (queueName === true || queueName === \"\")) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t$.each(data.tweensContainer, function(m, activeTween) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tactiveTween.endValue = activeTween.currentValue;\r\n\t\t\t\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\tcallsToStop.push(i);\r\n\t\t\t\t\t\t\t\t\t\t} else if (propertiesMap === \"finish\" || propertiesMap === \"finishAll\") {\r\n\t\t\t\t\t\t\t\t\t\t\t/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that\r\n\t\t\t\t\t\t\t\t\t\t\t they finish upon the next rAf tick then proceed with normal call completion logic. */\r\n\t\t\t\t\t\t\t\t\t\t\tactiveCall[2].duration = 1;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Prematurely call completeCall() on each matched active call. Pass an additional flag for \"stop\" to indicate\r\n\t\t\t\t\t that the complete callback and display:none setting should be skipped since we're completing prematurely. */\r\n\t\t\t\t\tif (propertiesMap === \"stop\") {\r\n\t\t\t\t\t\t$.each(callsToStop, function(i, j) {\r\n\t\t\t\t\t\t\tcompleteCall(j, true);\r\n\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\t\t\t/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */\r\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */\r\n\t\t\t\t\treturn getChain();\r\n\r\n\t\t\t\tdefault:\r\n\t\t\t\t\t/* Treat a non-empty plain object as a literal properties map. */\r\n\t\t\t\t\tif ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {\r\n\t\t\t\t\t\taction = \"start\";\r\n\r\n\t\t\t\t\t\t/****************\r\n\t\t\t\t\t\t Redirects\r\n\t\t\t\t\t\t ****************/\r\n\r\n\t\t\t\t\t\t/* Check if a string matches a registered redirect (see Redirects above). */\r\n\t\t\t\t\t} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {\r\n\t\t\t\t\t\topts = $.extend({}, options);\r\n\r\n\t\t\t\t\t\tvar durationOriginal = opts.duration,\r\n\t\t\t\t\t\t\t\tdelayOriginal = opts.delay || 0;\r\n\r\n\t\t\t\t\t\t/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */\r\n\t\t\t\t\t\tif (opts.backwards === true) {\r\n\t\t\t\t\t\t\telements = $.extend(true, [], elements).reverse();\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */\r\n\t\t\t\t\t\t$.each(elements, function(elementIndex, element) {\r\n\t\t\t\t\t\t\t/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */\r\n\t\t\t\t\t\t\tif (parseFloat(opts.stagger)) {\r\n\t\t\t\t\t\t\t\topts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);\r\n\t\t\t\t\t\t\t} else if (Type.isFunction(opts.stagger)) {\r\n\t\t\t\t\t\t\t\topts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)\r\n\t\t\t\t\t\t\t the duration of each element's animation, using floors to prevent producing very short durations. */\r\n\t\t\t\t\t\t\tif (opts.drag) {\r\n\t\t\t\t\t\t\t\t/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */\r\n\t\t\t\t\t\t\t\topts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);\r\n\r\n\t\t\t\t\t\t\t\t/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,\r\n\t\t\t\t\t\t\t\t B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).\r\n\t\t\t\t\t\t\t\t The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */\r\n\t\t\t\t\t\t\t\topts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to\r\n\t\t\t\t\t\t\t reduce the opts checking logic required inside the redirect. */\r\n\t\t\t\t\t\t\tVelocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);\r\n\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.\r\n\t\t\t\t\t\t (The performance overhead up to this point is virtually non-existant.) */\r\n\t\t\t\t\t\t/* Note: The jQuery call chain is kept intact by returning the complete element set. */\r\n\t\t\t\t\t\treturn getChain();\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tvar abortError = \"Velocity: First argument (\" + propertiesMap + \") was not a property map, a known action, or a registered redirect. Aborting.\";\r\n\r\n\t\t\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\t\t\tpromiseData.rejecter(new Error(abortError));\r\n\t\t\t\t\t\t} else if (window.console) {\r\n\t\t\t\t\t\t\tconsole.log(abortError);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\treturn getChain();\r\n\t\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/**************************\r\n\t\t\t Call-Wide Variables\r\n\t\t\t **************************/\r\n\r\n\t\t\t/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements\r\n\t\t\t being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore\r\n\t\t\t avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale\r\n\t\t\t conversion metrics across Velocity animations that are not immediately consecutively chained. */\r\n\t\t\tvar callUnitConversionData = {\r\n\t\t\t\tlastParent: null,\r\n\t\t\t\tlastPosition: null,\r\n\t\t\t\tlastFontSize: null,\r\n\t\t\t\tlastPercentToPxWidth: null,\r\n\t\t\t\tlastPercentToPxHeight: null,\r\n\t\t\t\tlastEmToPx: null,\r\n\t\t\t\tremToPx: null,\r\n\t\t\t\tvwToPx: null,\r\n\t\t\t\tvhToPx: null\r\n\t\t\t};\r\n\r\n\t\t\t/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide\r\n\t\t\t Velocity.State.calls array that is processed during animation ticking. */\r\n\t\t\tvar call = [];\r\n\r\n\t\t\t/************************\r\n\t\t\t Element Processing\r\n\t\t\t ************************/\r\n\r\n\t\t\t/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):\r\n\t\t\t 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.\r\n\t\t\t 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.\r\n\t\t\t 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.\r\n\t\t\t `elementArrayIndex` allows passing index of the element in the original array to value functions.\r\n\t\t\t If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.\r\n\t\t\t */\r\n\t\t\tfunction processElement(element, elementArrayIndex) {\r\n\r\n\t\t\t\t/*************************\r\n\t\t\t\t Part I: Pre-Queueing\r\n\t\t\t\t *************************/\r\n\r\n\t\t\t\t/***************************\r\n\t\t\t\t Element-Wide Variables\r\n\t\t\t\t ***************************/\r\n\r\n\t\t\t\tvar /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */\r\n\t\t\t\t\t\topts = $.extend({}, Velocity.defaults, options),\r\n\t\t\t\t\t\t/* A container for the processed data associated with each property in the propertyMap.\r\n\t\t\t\t\t\t (Each property in the map produces its own \"tween\".) */\r\n\t\t\t\t\t\ttweensContainer = {},\r\n\t\t\t\t\t\telementUnitConversionData;\r\n\r\n\t\t\t\t/******************\r\n\t\t\t\t Element Init\r\n\t\t\t\t ******************/\r\n\r\n\t\t\t\tif (Data(element) === undefined) {\r\n\t\t\t\t\tVelocity.init(element);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/******************\r\n\t\t\t\t Option: Delay\r\n\t\t\t\t ******************/\r\n\r\n\t\t\t\t/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */\r\n\t\t\t\t/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()\r\n\t\t\t\t (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */\r\n\t\t\t\tif (parseFloat(opts.delay) && opts.queue !== false) {\r\n\t\t\t\t\t$.queue(element, opts.queue, function(next, clearQueue) {\r\n\t\t\t\t\t\tif (clearQueue === true) {\r\n\t\t\t\t\t\t\t/* Do not continue with animation queueing. */\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */\r\n\t\t\t\t\t\tVelocity.velocityQueueEntryFlag = true;\r\n\r\n\t\t\t\t\t\t/* The ensuing queue item (which is assigned to the \"next\" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.\r\n\t\t\t\t\t\t The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's \"stop\" command, and\r\n\t\t\t\t\t\t delayBegin/delayTime is used to ensure we can \"pause\" and \"resume\" a tween that is still mid-delay. */\r\n\r\n\t\t\t\t\t\t/* Temporarily store delayed elements to facilite access for global pause/resume */\r\n\t\t\t\t\t\tvar callIndex = Velocity.State.delayedElements.count++;\r\n\t\t\t\t\t\tVelocity.State.delayedElements[callIndex] = element;\r\n\r\n\t\t\t\t\t\tvar delayComplete = (function(index) {\r\n\t\t\t\t\t\t\treturn function() {\r\n\t\t\t\t\t\t\t\t/* Clear the temporary element */\r\n\t\t\t\t\t\t\t\tVelocity.State.delayedElements[index] = false;\r\n\r\n\t\t\t\t\t\t\t\t/* Finally, issue the call */\r\n\t\t\t\t\t\t\t\tnext();\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})(callIndex);\r\n\r\n\r\n\t\t\t\t\t\tData(element).delayBegin = (new Date()).getTime();\r\n\t\t\t\t\t\tData(element).delay = parseFloat(opts.delay);\r\n\t\t\t\t\t\tData(element).delayTimer = {\r\n\t\t\t\t\t\t\tsetTimeout: setTimeout(next, parseFloat(opts.delay)),\r\n\t\t\t\t\t\t\tnext: delayComplete\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t});\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************\r\n\t\t\t\t Option: Duration\r\n\t\t\t\t *********************/\r\n\r\n\t\t\t\t/* Support for jQuery's named durations. */\r\n\t\t\t\tswitch (opts.duration.toString().toLowerCase()) {\r\n\t\t\t\t\tcase \"fast\":\r\n\t\t\t\t\t\topts.duration = 200;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tcase \"normal\":\r\n\t\t\t\t\t\topts.duration = DURATION_DEFAULT;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tcase \"slow\":\r\n\t\t\t\t\t\topts.duration = 600;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t/* Remove the potential \"ms\" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */\r\n\t\t\t\t\t\topts.duration = parseFloat(opts.duration) || 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/************************\r\n\t\t\t\t Global Option: Mock\r\n\t\t\t\t ************************/\r\n\r\n\t\t\t\tif (Velocity.mock !== false) {\r\n\t\t\t\t\t/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.\r\n\t\t\t\t\t Alternatively, a multiplier can be passed in to time remap all delays and durations. */\r\n\t\t\t\t\tif (Velocity.mock === true) {\r\n\t\t\t\t\t\topts.duration = opts.delay = 1;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\topts.duration *= parseFloat(Velocity.mock) || 1;\r\n\t\t\t\t\t\topts.delay *= parseFloat(Velocity.mock) || 1;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*******************\r\n\t\t\t\t Option: Easing\r\n\t\t\t\t *******************/\r\n\r\n\t\t\t\topts.easing = getEasing(opts.easing, opts.duration);\r\n\r\n\t\t\t\t/**********************\r\n\t\t\t\t Option: Callbacks\r\n\t\t\t\t **********************/\r\n\r\n\t\t\t\t/* Callbacks must functions. Otherwise, default to null. */\r\n\t\t\t\tif (opts.begin && !Type.isFunction(opts.begin)) {\r\n\t\t\t\t\topts.begin = null;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (opts.progress && !Type.isFunction(opts.progress)) {\r\n\t\t\t\t\topts.progress = null;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (opts.complete && !Type.isFunction(opts.complete)) {\r\n\t\t\t\t\topts.complete = null;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************************\r\n\t\t\t\t Option: Display & Visibility\r\n\t\t\t\t *********************************/\r\n\r\n\t\t\t\t/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */\r\n\t\t\t\t/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */\r\n\t\t\t\tif (opts.display !== undefined && opts.display !== null) {\r\n\t\t\t\t\topts.display = opts.display.toString().toLowerCase();\r\n\r\n\t\t\t\t\t/* Users can pass in a special \"auto\" value to instruct Velocity to set the element to its default display value. */\r\n\t\t\t\t\tif (opts.display === \"auto\") {\r\n\t\t\t\t\t\topts.display = Velocity.CSS.Values.getDisplayType(element);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== null) {\r\n\t\t\t\t\topts.visibility = opts.visibility.toString().toLowerCase();\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**********************\r\n\t\t\t\t Option: mobileHA\r\n\t\t\t\t **********************/\r\n\r\n\t\t\t\t/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)\r\n\t\t\t\t on animating elements. HA is removed from the element at the completion of its animation. */\r\n\t\t\t\t/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */\r\n\t\t\t\t/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */\r\n\t\t\t\topts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);\r\n\r\n\t\t\t\t/***********************\r\n\t\t\t\t Part II: Queueing\r\n\t\t\t\t ***********************/\r\n\r\n\t\t\t\t/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.\r\n\t\t\t\t In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */\r\n\t\t\t\t/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,\r\n\t\t\t\t the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */\r\n\t\t\t\tfunction buildQueue(next) {\r\n\t\t\t\t\tvar data, lastTweensContainer;\r\n\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Option: Begin\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */\r\n\t\t\t\t\tif (opts.begin && elementsIndex === 0) {\r\n\t\t\t\t\t\t/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */\r\n\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\topts.begin.call(elements, elements);\r\n\t\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\t\tsetTimeout(function() {\r\n\t\t\t\t\t\t\t\tthrow error;\r\n\t\t\t\t\t\t\t}, 1);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/*****************************************\r\n\t\t\t\t\t Tween Data Construction (for Scroll)\r\n\t\t\t\t\t *****************************************/\r\n\r\n\t\t\t\t\t/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */\r\n\t\t\t\t\tif (action === \"scroll\") {\r\n\t\t\t\t\t\t/* The scroll action uniquely takes an optional \"offset\" option -- specified in pixels -- that offsets the targeted scroll position. */\r\n\t\t\t\t\t\tvar scrollDirection = (/^x$/i.test(opts.axis) ? \"Left\" : \"Top\"),\r\n\t\t\t\t\t\t\t\tscrollOffset = parseFloat(opts.offset) || 0,\r\n\t\t\t\t\t\t\t\tscrollPositionCurrent,\r\n\t\t\t\t\t\t\t\tscrollPositionCurrentAlternate,\r\n\t\t\t\t\t\t\t\tscrollPositionEnd;\r\n\r\n\t\t\t\t\t\t/* Scroll also uniquely takes an optional \"container\" option, which indicates the parent element that should be scrolled --\r\n\t\t\t\t\t\t as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */\r\n\t\t\t\t\t\tif (opts.container) {\r\n\t\t\t\t\t\t\t/* Ensure that either a jQuery object or a raw DOM element was passed in. */\r\n\t\t\t\t\t\t\tif (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {\r\n\t\t\t\t\t\t\t\t/* Extract the raw DOM element from the jQuery wrapper. */\r\n\t\t\t\t\t\t\t\topts.container = opts.container[0] || opts.container;\r\n\t\t\t\t\t\t\t\t/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes\r\n\t\t\t\t\t\t\t\t (due to the user's natural interaction with the page). */\r\n\t\t\t\t\t\t\t\tscrollPositionCurrent = opts.container[\"scroll\" + scrollDirection]; /* GET */\r\n\r\n\t\t\t\t\t\t\t\t/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions\r\n\t\t\t\t\t\t\t\t -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*\r\n\t\t\t\t\t\t\t\t the scroll container's current scroll position. */\r\n\t\t\t\t\t\t\t\tscrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */\r\n\t\t\t\t\t\t\t\t/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\topts.container = null;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using\r\n\t\t\t\t\t\t\t the appropriate cached property names (which differ based on browser type). */\r\n\t\t\t\t\t\t\tscrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State[\"scrollProperty\" + scrollDirection]]; /* GET */\r\n\t\t\t\t\t\t\t/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */\r\n\t\t\t\t\t\t\tscrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State[\"scrollProperty\" + (scrollDirection === \"Left\" ? \"Top\" : \"Left\")]]; /* GET */\r\n\r\n\t\t\t\t\t\t\t/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --\r\n\t\t\t\t\t\t\t and therefore end values do not need to be compounded onto current values. */\r\n\t\t\t\t\t\t\tscrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */\r\n\t\t\t\t\t\ttweensContainer = {\r\n\t\t\t\t\t\t\tscroll: {\r\n\t\t\t\t\t\t\t\trootPropertyValue: false,\r\n\t\t\t\t\t\t\t\tstartValue: scrollPositionCurrent,\r\n\t\t\t\t\t\t\t\tcurrentValue: scrollPositionCurrent,\r\n\t\t\t\t\t\t\t\tendValue: scrollPositionEnd,\r\n\t\t\t\t\t\t\t\tunitType: \"\",\r\n\t\t\t\t\t\t\t\teasing: opts.easing,\r\n\t\t\t\t\t\t\t\tscrollData: {\r\n\t\t\t\t\t\t\t\t\tcontainer: opts.container,\r\n\t\t\t\t\t\t\t\t\tdirection: scrollDirection,\r\n\t\t\t\t\t\t\t\t\talternateValue: scrollPositionCurrentAlternate\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\telement: element\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\tconsole.log(\"tweensContainer (scroll): \", tweensContainer.scroll, element);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/******************************************\r\n\t\t\t\t\t\t Tween Data Construction (for Reverse)\r\n\t\t\t\t\t\t ******************************************/\r\n\r\n\t\t\t\t\t\t/* Reverse acts like a \"start\" action in that a property map is animated toward. The only difference is\r\n\t\t\t\t\t\t that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate\r\n\t\t\t\t\t\t the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */\r\n\t\t\t\t\t\t/* Note: Reverse can be directly called via the \"reverse\" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */\r\n\t\t\t\t\t\t/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;\r\n\t\t\t\t\t\t there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined\r\n\t\t\t\t\t\t as reverting to the element's values as they were prior to the previous *Velocity* call. */\r\n\t\t\t\t\t} else if (action === \"reverse\") {\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t\t\t/* Abort if there is no prior animation data to reverse to. */\r\n\t\t\t\t\t\tif (!data) {\r\n\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (!data.tweensContainer) {\r\n\t\t\t\t\t\t\t/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */\r\n\t\t\t\t\t\t\t$.dequeue(element, opts.queue);\r\n\r\n\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t/*********************\r\n\t\t\t\t\t\t\t Options Parsing\r\n\t\t\t\t\t\t\t *********************/\r\n\r\n\t\t\t\t\t\t\t/* If the element was hidden via the display option in the previous call,\r\n\t\t\t\t\t\t\t revert display to \"auto\" prior to reversal so that the element is visible again. */\r\n\t\t\t\t\t\t\tif (data.opts.display === \"none\") {\r\n\t\t\t\t\t\t\t\tdata.opts.display = \"auto\";\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (data.opts.visibility === \"hidden\") {\r\n\t\t\t\t\t\t\t\tdata.opts.visibility = \"visible\";\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If the loop option was set in the previous call, disable it so that \"reverse\" calls aren't recursively generated.\r\n\t\t\t\t\t\t\t Further, remove the previous call's callback options; typically, users do not want these to be refired. */\r\n\t\t\t\t\t\t\tdata.opts.loop = false;\r\n\t\t\t\t\t\t\tdata.opts.begin = null;\r\n\t\t\t\t\t\t\tdata.opts.complete = null;\r\n\r\n\t\t\t\t\t\t\t/* Since we're extending an opts object that has already been extended with the defaults options object,\r\n\t\t\t\t\t\t\t we remove non-explicitly-defined properties that are auto-assigned values. */\r\n\t\t\t\t\t\t\tif (!options.easing) {\r\n\t\t\t\t\t\t\t\tdelete opts.easing;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (!options.duration) {\r\n\t\t\t\t\t\t\t\tdelete opts.duration;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* The opts object used for reversal is an extension of the options object optionally passed into this\r\n\t\t\t\t\t\t\t reverse call plus the options used in the previous Velocity call. */\r\n\t\t\t\t\t\t\topts = $.extend({}, data.opts, opts);\r\n\r\n\t\t\t\t\t\t\t/*************************************\r\n\t\t\t\t\t\t\t Tweens Container Reconstruction\r\n\t\t\t\t\t\t\t *************************************/\r\n\r\n\t\t\t\t\t\t\t/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */\r\n\t\t\t\t\t\t\tlastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);\r\n\r\n\t\t\t\t\t\t\t/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */\r\n\t\t\t\t\t\t\tfor (var lastTween in lastTweensContainer) {\r\n\t\t\t\t\t\t\t\t/* In addition to tween data, tweensContainers contain an element property that we ignore here. */\r\n\t\t\t\t\t\t\t\tif (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== \"element\") {\r\n\t\t\t\t\t\t\t\t\tvar lastStartValue = lastTweensContainer[lastTween].startValue;\r\n\r\n\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;\r\n\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].endValue = lastStartValue;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).\r\n\t\t\t\t\t\t\t\t\t Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.\r\n\t\t\t\t\t\t\t\t\t The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */\r\n\t\t\t\t\t\t\t\t\tif (!Type.isEmptyObject(options)) {\r\n\t\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].easing = opts.easing;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\t\tconsole.log(\"reverse tweensContainer (\" + lastTween + \"): \" + JSON.stringify(lastTweensContainer[lastTween]), element);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\ttweensContainer = lastTweensContainer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/*****************************************\r\n\t\t\t\t\t\t Tween Data Construction (for Start)\r\n\t\t\t\t\t\t *****************************************/\r\n\r\n\t\t\t\t\t} else if (action === \"start\") {\r\n\r\n\t\t\t\t\t\t/*************************\r\n\t\t\t\t\t\t Value Transferring\r\n\t\t\t\t\t\t *************************/\r\n\r\n\t\t\t\t\t\t/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created\r\n\t\t\t\t\t\t while the element was in the process of being animated by Velocity, then this current call is safe to use\r\n\t\t\t\t\t\t the end values from the prior call as its start values. Velocity attempts to perform this value transfer\r\n\t\t\t\t\t\t process whenever possible in order to avoid requerying the DOM. */\r\n\t\t\t\t\t\t/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),\r\n\t\t\t\t\t\t then the DOM is queried for the element's current values as a last resort. */\r\n\t\t\t\t\t\t/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */\r\n\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t\t\t/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)\r\n\t\t\t\t\t\t to transfer over end values to use as start values. If it's set to true and there is a previous\r\n\t\t\t\t\t\t Velocity call to pull values from, do so. */\r\n\t\t\t\t\t\tif (data && data.tweensContainer && data.isAnimating === true) {\r\n\t\t\t\t\t\t\tlastTweensContainer = data.tweensContainer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t Tween Data Calculation\r\n\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */\r\n\t\t\t\t\t\t/* Property map values can either take the form of 1) a single value representing the end value,\r\n\t\t\t\t\t\t or 2) an array in the form of [ endValue, [, easing] [, startValue] ].\r\n\t\t\t\t\t\t The optional third parameter is a forcefed startValue to be used instead of querying the DOM for\r\n\t\t\t\t\t\t the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */\r\n\t\t\t\t\t\tvar parsePropertyValue = function(valueData, skipResolvingEasing) {\r\n\t\t\t\t\t\t\tvar endValue, easing, startValue;\r\n\r\n\t\t\t\t\t\t\t/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */\r\n\t\t\t\t\t\t\tif (Type.isFunction(valueData)) {\r\n\t\t\t\t\t\t\t\tvalueData = valueData.call(element, elementArrayIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Handle the array format, which can be structured as one of three potential overloads:\r\n\t\t\t\t\t\t\t A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */\r\n\t\t\t\t\t\t\tif (Type.isArray(valueData)) {\r\n\t\t\t\t\t\t\t\t/* endValue is always the first item in the array. Don't bother validating endValue's value now\r\n\t\t\t\t\t\t\t\t since the ensuing property cycling logic does that. */\r\n\t\t\t\t\t\t\t\tendValue = valueData[0];\r\n\r\n\t\t\t\t\t\t\t\t/* Two-item array format: If the second item is a number, function, or hex string, treat it as a\r\n\t\t\t\t\t\t\t\t start value since easings can only be non-hex strings or arrays. */\r\n\t\t\t\t\t\t\t\tif ((!Type.isArray(valueData[1]) && /^[\\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[1];\r\n\t\t\t\t\t\t\t\t\t/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */\r\n\t\t\t\t\t\t\t\t} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {\r\n\t\t\t\t\t\t\t\t\teasing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);\r\n\r\n\t\t\t\t\t\t\t\t\t/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[2];\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[1] || valueData[2];\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t/* Handle the single-value format. */\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\tendValue = valueData;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Default to the call's easing if a per-property easing type was not defined. */\r\n\t\t\t\t\t\t\tif (!skipResolvingEasing) {\r\n\t\t\t\t\t\t\t\teasing = easing || opts.easing;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If functions were passed in as values, pass the function the current element as its context,\r\n\t\t\t\t\t\t\t plus the element's index and the element set's size as arguments. Then, assign the returned value. */\r\n\t\t\t\t\t\t\tif (Type.isFunction(endValue)) {\r\n\t\t\t\t\t\t\t\tendValue = endValue.call(element, elementArrayIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (Type.isFunction(startValue)) {\r\n\t\t\t\t\t\t\t\tstartValue = startValue.call(element, elementArrayIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */\r\n\t\t\t\t\t\t\treturn [endValue || 0, easing, startValue];\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\tvar fixPropertyValue = function(property, valueData) {\r\n\t\t\t\t\t\t\t/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */\r\n\t\t\t\t\t\t\tvar rootProperty = CSS.Hooks.getRoot(property),\r\n\t\t\t\t\t\t\t\t\trootPropertyValue = false,\r\n\t\t\t\t\t\t\t\t\t/* Parse out endValue, easing, and startValue from the property's data. */\r\n\t\t\t\t\t\t\t\t\tendValue = valueData[0],\r\n\t\t\t\t\t\t\t\t\teasing = valueData[1],\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[2],\r\n\t\t\t\t\t\t\t\t\tpattern;\r\n\r\n\t\t\t\t\t\t\t/**************************\r\n\t\t\t\t\t\t\t Start Value Sourcing\r\n\t\t\t\t\t\t\t **************************/\r\n\r\n\t\t\t\t\t\t\t/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will\r\n\t\t\t\t\t\t\t inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.\r\n\t\t\t\t\t\t\t Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */\r\n\t\t\t\t\t\t\t/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,\r\n\t\t\t\t\t\t\t there is no way to check for their explicit browser support, and so we skip skip this check for them. */\r\n\t\t\t\t\t\t\tif ((!data || !data.isSVG) && rootProperty !== \"tween\" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {\r\n\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\tconsole.log(\"Skipping [\" + rootProperty + \"] due to a lack of browser support.\");\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If the display option is being set to a non-\"none\" (e.g. \"block\") and opacity (filter on IE<=8) is being\r\n\t\t\t\t\t\t\t animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity\r\n\t\t\t\t\t\t\t a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */\r\n\t\t\t\t\t\t\tif (((opts.display !== undefined && opts.display !== null && opts.display !== \"none\") || (opts.visibility !== undefined && opts.visibility !== \"hidden\")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {\r\n\t\t\t\t\t\t\t\tstartValue = 0;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue\r\n\t\t\t\t\t\t\t for all of the current call's properties that were *also* animated in the previous call. */\r\n\t\t\t\t\t\t\t/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */\r\n\t\t\t\t\t\t\tif (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {\r\n\t\t\t\t\t\t\t\tif (startValue === undefined) {\r\n\t\t\t\t\t\t\t\t\tstartValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the\r\n\t\t\t\t\t\t\t\t instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue\r\n\t\t\t\t\t\t\t\t attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */\r\n\t\t\t\t\t\t\t\trootPropertyValue = data.rootPropertyValueCache[rootProperty];\r\n\t\t\t\t\t\t\t\t/* If values were not transferred from a previous Velocity call, query the DOM as needed. */\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t/* Handle hooked properties. */\r\n\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\t\t\tif (startValue === undefined) {\r\n\t\t\t\t\t\t\t\t\t\trootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */\r\n\t\t\t\t\t\t\t\t\t\t/* Note: The following getPropertyValue() call does not actually trigger a DOM query;\r\n\t\t\t\t\t\t\t\t\t\t getPropertyValue() will extract the hook from rootPropertyValue. */\r\n\t\t\t\t\t\t\t\t\t\tstartValue = CSS.getPropertyValue(element, property, rootPropertyValue);\r\n\t\t\t\t\t\t\t\t\t\t/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;\r\n\t\t\t\t\t\t\t\t\t\t just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual\r\n\t\t\t\t\t\t\t\t\t\t root property value (if one is set), but this is acceptable since the primary reason users forcefeed is\r\n\t\t\t\t\t\t\t\t\t\t to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t/* Grab this hook's zero-value template, e.g. \"0px 0px 0px black\". */\r\n\t\t\t\t\t\t\t\t\t\trootPropertyValue = CSS.Hooks.templates[rootProperty][1];\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t/* Handle non-hooked properties that haven't already been defined via forcefeeding. */\r\n\t\t\t\t\t\t\t\t} else if (startValue === undefined) {\r\n\t\t\t\t\t\t\t\t\tstartValue = CSS.getPropertyValue(element, property); /* GET */\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/**************************\r\n\t\t\t\t\t\t\t Value Data Extraction\r\n\t\t\t\t\t\t\t **************************/\r\n\r\n\t\t\t\t\t\t\tvar separatedValue,\r\n\t\t\t\t\t\t\t\t\tendValueUnitType,\r\n\t\t\t\t\t\t\t\t\tstartValueUnitType,\r\n\t\t\t\t\t\t\t\t\toperator = false;\r\n\r\n\t\t\t\t\t\t\t/* Separates a property value into its numeric value and its unit type. */\r\n\t\t\t\t\t\t\tvar separateValue = function(property, value) {\r\n\t\t\t\t\t\t\t\tvar unitType,\r\n\t\t\t\t\t\t\t\t\t\tnumericValue;\r\n\r\n\t\t\t\t\t\t\t\tnumericValue = (value || \"0\")\r\n\t\t\t\t\t\t\t\t\t\t.toString()\r\n\t\t\t\t\t\t\t\t\t\t.toLowerCase()\r\n\t\t\t\t\t\t\t\t\t\t/* Match the unit type at the end of the value. */\r\n\t\t\t\t\t\t\t\t\t\t.replace(/[%A-z]+$/, function(match) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Grab the unit type. */\r\n\t\t\t\t\t\t\t\t\t\t\tunitType = match;\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Strip the unit type off of value. */\r\n\t\t\t\t\t\t\t\t\t\t\treturn \"\";\r\n\t\t\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t/* If no unit type was supplied, assign one that is appropriate for this property (e.g. \"deg\" for rotateZ or \"px\" for width). */\r\n\t\t\t\t\t\t\t\tif (!unitType) {\r\n\t\t\t\t\t\t\t\t\tunitType = CSS.Values.getUnitType(property);\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\treturn [numericValue, unitType];\r\n\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\tif (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {\r\n\t\t\t\t\t\t\t\tpattern = \"\";\r\n\t\t\t\t\t\t\t\tvar iStart = 0, // index in startValue\r\n\t\t\t\t\t\t\t\t\t\tiEnd = 0, // index in endValue\r\n\t\t\t\t\t\t\t\t\t\taStart = [], // array of startValue numbers\r\n\t\t\t\t\t\t\t\t\t\taEnd = [], // array of endValue numbers\r\n\t\t\t\t\t\t\t\t\t\tinCalc = 0, // Keep track of being inside a \"calc()\" so we don't duplicate it\r\n\t\t\t\t\t\t\t\t\t\tinRGB = 0, // Keep track of being inside an RGB as we can't use fractional values\r\n\t\t\t\t\t\t\t\t\t\tinRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel\r\n\r\n\t\t\t\t\t\t\t\tstartValue = CSS.Hooks.fixColors(startValue);\r\n\t\t\t\t\t\t\t\tendValue = CSS.Hooks.fixColors(endValue);\r\n\t\t\t\t\t\t\t\twhile (iStart < startValue.length && iEnd < endValue.length) {\r\n\t\t\t\t\t\t\t\t\tvar cStart = startValue[iStart],\r\n\t\t\t\t\t\t\t\t\t\t\tcEnd = endValue[iEnd];\r\n\r\n\t\t\t\t\t\t\t\t\tif (/[\\d\\.-]/.test(cStart) && /[\\d\\.-]/.test(cEnd)) {\r\n\t\t\t\t\t\t\t\t\t\tvar tStart = cStart, // temporary character buffer\r\n\t\t\t\t\t\t\t\t\t\t\t\ttEnd = cEnd, // temporary character buffer\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotStart = \".\", // Make sure we can only ever match a single dot in a decimal\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotEnd = \".\"; // Make sure we can only ever match a single dot in a decimal\r\n\r\n\t\t\t\t\t\t\t\t\t\twhile (++iStart < startValue.length) {\r\n\t\t\t\t\t\t\t\t\t\t\tcStart = startValue[iStart];\r\n\t\t\t\t\t\t\t\t\t\t\tif (cStart === dotStart) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotStart = \"..\"; // Can never match two characters\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (!/\\d/.test(cStart)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\ttStart += cStart;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\twhile (++iEnd < endValue.length) {\r\n\t\t\t\t\t\t\t\t\t\t\tcEnd = endValue[iEnd];\r\n\t\t\t\t\t\t\t\t\t\t\tif (cEnd === dotEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotEnd = \"..\"; // Can never match two characters\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (!/\\d/.test(cEnd)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\ttEnd += cEnd;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\tvar uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type\r\n\t\t\t\t\t\t\t\t\t\t\t\tuEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type\r\n\r\n\t\t\t\t\t\t\t\t\t\tiStart += uStart.length;\r\n\t\t\t\t\t\t\t\t\t\tiEnd += uEnd.length;\r\n\t\t\t\t\t\t\t\t\t\tif (uStart === uEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t// Same units\r\n\t\t\t\t\t\t\t\t\t\t\tif (tStart === tEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t// Same numbers, so just copy over\r\n\t\t\t\t\t\t\t\t\t\t\t\tpattern += tStart + uStart;\r\n\t\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\t\t// Different numbers, so store them\r\n\t\t\t\t\t\t\t\t\t\t\t\tpattern += \"{\" + aStart.length + (inRGB ? \"!\" : \"\") + \"}\" + uStart;\r\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(parseFloat(tStart));\r\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(parseFloat(tEnd));\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\t// Different units, so put into a \"calc(from + to)\" and animate each side to/from zero\r\n\t\t\t\t\t\t\t\t\t\t\tvar nStart = parseFloat(tStart),\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tnEnd = parseFloat(tEnd);\r\n\r\n\t\t\t\t\t\t\t\t\t\t\tpattern += (inCalc < 5 ? \"calc\" : \"\") + \"(\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ (nStart ? \"{\" + aStart.length + (inRGB ? \"!\" : \"\") + \"}\" : \"0\") + uStart\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ \" + \"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ (nEnd ? \"{\" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? \"!\" : \"\") + \"}\" : \"0\") + uEnd\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ \")\";\r\n\t\t\t\t\t\t\t\t\t\t\tif (nStart) {\r\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(nStart);\r\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(0);\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\tif (nEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(0);\r\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(nEnd);\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t} else if (cStart === cEnd) {\r\n\t\t\t\t\t\t\t\t\t\tpattern += cStart;\r\n\t\t\t\t\t\t\t\t\t\tiStart++;\r\n\t\t\t\t\t\t\t\t\t\tiEnd++;\r\n\t\t\t\t\t\t\t\t\t\t// Keep track of being inside a calc()\r\n\t\t\t\t\t\t\t\t\t\tif (inCalc === 0 && cStart === \"c\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 1 && cStart === \"a\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 2 && cStart === \"l\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 3 && cStart === \"c\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc >= 4 && cStart === \"(\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\t\tinCalc++;\r\n\t\t\t\t\t\t\t\t\t\t} else if ((inCalc && inCalc < 5)\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc >= 4 && cStart === \")\" && --inCalc < 5) {\r\n\t\t\t\t\t\t\t\t\t\t\tinCalc = 0;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t// Keep track of being inside an rgb() / rgba()\r\n\t\t\t\t\t\t\t\t\t\tif (inRGB === 0 && cStart === \"r\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 1 && cStart === \"g\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 2 && cStart === \"b\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 3 && cStart === \"a\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB >= 3 && cStart === \"(\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\t\tif (inRGB === 3 && cStart === \"a\") {\r\n\t\t\t\t\t\t\t\t\t\t\t\tinRGBA = 1;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\tinRGB++;\r\n\t\t\t\t\t\t\t\t\t\t} else if (inRGBA && cStart === \",\") {\r\n\t\t\t\t\t\t\t\t\t\t\tif (++inRGBA > 3) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tinRGB = inRGBA = 0;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB >= (inRGBA ? 4 : 3) && cStart === \")\" && --inRGB < (inRGBA ? 5 : 4)) {\r\n\t\t\t\t\t\t\t\t\t\t\tinRGB = inRGBA = 0;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\tinCalc = 0;\r\n\t\t\t\t\t\t\t\t\t\t// TODO: changing units, fixing colours\r\n\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif (iStart !== startValue.length || iEnd !== endValue.length) {\r\n\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\t\tconsole.error(\"Trying to pattern match mis-matched strings [\\\"\" + endValue + \"\\\", \\\"\" + startValue + \"\\\"]\");\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\tpattern = undefined;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif (pattern) {\r\n\t\t\t\t\t\t\t\t\tif (aStart.length) {\r\n\t\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\t\t\tconsole.log(\"Pattern found \\\"\" + pattern + \"\\\" -> \", aStart, aEnd, \"[\" + startValue + \",\" + endValue + \"]\");\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\tstartValue = aStart;\r\n\t\t\t\t\t\t\t\t\t\tendValue = aEnd;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType = \"\";\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\tpattern = undefined;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (!pattern) {\r\n\t\t\t\t\t\t\t\t/* Separate startValue. */\r\n\t\t\t\t\t\t\t\tseparatedValue = separateValue(property, startValue);\r\n\t\t\t\t\t\t\t\tstartValue = separatedValue[0];\r\n\t\t\t\t\t\t\t\tstartValueUnitType = separatedValue[1];\r\n\r\n\t\t\t\t\t\t\t\t/* Separate endValue, and extract a value operator (e.g. \"+=\", \"-=\") if one exists. */\r\n\t\t\t\t\t\t\t\tseparatedValue = separateValue(property, endValue);\r\n\t\t\t\t\t\t\t\tendValue = separatedValue[0].replace(/^([+-\\/*])=/, function(match, subMatch) {\r\n\t\t\t\t\t\t\t\t\toperator = subMatch;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Strip the operator off of the value. */\r\n\t\t\t\t\t\t\t\t\treturn \"\";\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\tendValueUnitType = separatedValue[1];\r\n\r\n\t\t\t\t\t\t\t\t/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */\r\n\t\t\t\t\t\t\t\tstartValue = parseFloat(startValue) || 0;\r\n\t\t\t\t\t\t\t\tendValue = parseFloat(endValue) || 0;\r\n\r\n\t\t\t\t\t\t\t\t/***************************************\r\n\t\t\t\t\t\t\t\t Property-Specific Value Conversion\r\n\t\t\t\t\t\t\t\t ***************************************/\r\n\r\n\t\t\t\t\t\t\t\t/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */\r\n\t\t\t\t\t\t\t\tif (endValueUnitType === \"%\") {\r\n\t\t\t\t\t\t\t\t\t/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),\r\n\t\t\t\t\t\t\t\t\t which is identical to the em unit's behavior, so we piggyback off of that. */\r\n\t\t\t\t\t\t\t\t\tif (/^(fontSize|lineHeight)$/.test(property)) {\r\n\t\t\t\t\t\t\t\t\t\t/* Convert % into an em decimal value. */\r\n\t\t\t\t\t\t\t\t\t\tendValue = endValue / 100;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = \"em\";\r\n\t\t\t\t\t\t\t\t\t\t/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */\r\n\t\t\t\t\t\t\t\t\t} else if (/^scale/.test(property)) {\r\n\t\t\t\t\t\t\t\t\t\tendValue = endValue / 100;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = \"\";\r\n\t\t\t\t\t\t\t\t\t\t/* For RGB components, take the defined percentage of 255 and strip off the unit type. */\r\n\t\t\t\t\t\t\t\t\t} else if (/(Red|Green|Blue)$/i.test(property)) {\r\n\t\t\t\t\t\t\t\t\t\tendValue = (endValue / 100) * 255;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = \"\";\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t\t Unit Ratio Calculation\r\n\t\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t\t/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of\r\n\t\t\t\t\t\t\t %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order\r\n\t\t\t\t\t\t\t for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred\r\n\t\t\t\t\t\t\t from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:\r\n\t\t\t\t\t\t\t 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels\r\n\t\t\t\t\t\t\t 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */\r\n\t\t\t\t\t\t\t/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,\r\n\t\t\t\t\t\t\t setting values with the target unit type then comparing the returned pixel value. */\r\n\t\t\t\t\t\t\t/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead\r\n\t\t\t\t\t\t\t of batching the SETs and GETs together upfront outweights the potential overhead\r\n\t\t\t\t\t\t\t of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */\r\n\t\t\t\t\t\t\t/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */\r\n\t\t\t\t\t\t\tvar calculateUnitRatios = function() {\r\n\r\n\t\t\t\t\t\t\t\t/************************\r\n\t\t\t\t\t\t\t\t Same Ratio Checks\r\n\t\t\t\t\t\t\t\t ************************/\r\n\r\n\t\t\t\t\t\t\t\t/* The properties below are used to determine whether the element differs sufficiently from this call's\r\n\t\t\t\t\t\t\t\t previously iterated element to also differ in its unit conversion ratios. If the properties match up with those\r\n\t\t\t\t\t\t\t\t of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,\r\n\t\t\t\t\t\t\t\t this is done to minimize DOM querying. */\r\n\t\t\t\t\t\t\t\tvar sameRatioIndicators = {\r\n\t\t\t\t\t\t\t\t\tmyParent: element.parentNode || document.body, /* GET */\r\n\t\t\t\t\t\t\t\t\tposition: CSS.getPropertyValue(element, \"position\"), /* GET */\r\n\t\t\t\t\t\t\t\t\tfontSize: CSS.getPropertyValue(element, \"fontSize\") /* GET */\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t\t\t/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */\r\n\t\t\t\t\t\t\t\t\t\tsamePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),\r\n\t\t\t\t\t\t\t\t\t\t/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */\r\n\t\t\t\t\t\t\t\t\t\tsameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);\r\n\r\n\t\t\t\t\t\t\t\t/* Store these ratio indicators call-wide for the next element to compare against. */\r\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastParent = sameRatioIndicators.myParent;\r\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastPosition = sameRatioIndicators.position;\r\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;\r\n\r\n\t\t\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t\t\t Element-Specific Units\r\n\t\t\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t\t\t/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement\r\n\t\t\t\t\t\t\t\t of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */\r\n\t\t\t\t\t\t\t\tvar measurement = 100,\r\n\t\t\t\t\t\t\t\t\t\tunitRatios = {};\r\n\r\n\t\t\t\t\t\t\t\tif (!sameEmRatio || !samePercentRatio) {\r\n\t\t\t\t\t\t\t\t\tvar dummy = data && data.isSVG ? document.createElementNS(\"http://www.w3.org/2000/svg\", \"rect\") : document.createElement(\"div\");\r\n\r\n\t\t\t\t\t\t\t\t\tVelocity.init(dummy);\r\n\t\t\t\t\t\t\t\t\tsameRatioIndicators.myParent.appendChild(dummy);\r\n\r\n\t\t\t\t\t\t\t\t\t/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.\r\n\t\t\t\t\t\t\t\t\t Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */\r\n\t\t\t\t\t\t\t\t\t/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */\r\n\t\t\t\t\t\t\t\t\t$.each([\"overflow\", \"overflowX\", \"overflowY\"], function(i, property) {\r\n\t\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, property, \"hidden\");\r\n\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"position\", sameRatioIndicators.position);\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"fontSize\", sameRatioIndicators.fontSize);\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"boxSizing\", \"content-box\");\r\n\r\n\t\t\t\t\t\t\t\t\t/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */\r\n\t\t\t\t\t\t\t\t\t$.each([\"minWidth\", \"maxWidth\", \"width\", \"minHeight\", \"maxHeight\", \"height\"], function(i, property) {\r\n\t\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, property, measurement + \"%\");\r\n\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\t\t/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"paddingLeft\", measurement + \"em\");\r\n\r\n\t\t\t\t\t\t\t\t\t/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, \"width\", null, true)) || 1) / measurement; /* GET */\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, \"height\", null, true)) || 1) / measurement; /* GET */\r\n\t\t\t\t\t\t\t\t\tunitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, \"paddingLeft\")) || 1) / measurement; /* GET */\r\n\r\n\t\t\t\t\t\t\t\t\tsameRatioIndicators.myParent.removeChild(dummy);\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\tunitRatios.emToPx = callUnitConversionData.lastEmToPx;\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t\t\t Element-Agnostic Units\r\n\t\t\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t\t\t/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked\r\n\t\t\t\t\t\t\t\t once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time\r\n\t\t\t\t\t\t\t\t that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,\r\n\t\t\t\t\t\t\t\t so we calculate it now. */\r\n\t\t\t\t\t\t\t\tif (callUnitConversionData.remToPx === null) {\r\n\t\t\t\t\t\t\t\t\t/* Default to browsers' default fontSize of 16px in the case of 0. */\r\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, \"fontSize\")) || 16; /* GET */\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Similarly, viewport units are %-relative to the window's inner dimensions. */\r\n\t\t\t\t\t\t\t\tif (callUnitConversionData.vwToPx === null) {\r\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */\r\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\tunitRatios.remToPx = callUnitConversionData.remToPx;\r\n\t\t\t\t\t\t\t\tunitRatios.vwToPx = callUnitConversionData.vwToPx;\r\n\t\t\t\t\t\t\t\tunitRatios.vhToPx = callUnitConversionData.vhToPx;\r\n\r\n\t\t\t\t\t\t\t\tif (Velocity.debug >= 1) {\r\n\t\t\t\t\t\t\t\t\tconsole.log(\"Unit ratios: \" + JSON.stringify(unitRatios), element);\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\treturn unitRatios;\r\n\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t/********************\r\n\t\t\t\t\t\t\t Unit Conversion\r\n\t\t\t\t\t\t\t ********************/\r\n\r\n\t\t\t\t\t\t\t/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */\r\n\t\t\t\t\t\t\tif (/[\\/*]/.test(operator)) {\r\n\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType;\r\n\t\t\t\t\t\t\t\t/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType\r\n\t\t\t\t\t\t\t\t is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend\r\n\t\t\t\t\t\t\t\t on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio\r\n\t\t\t\t\t\t\t\t would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */\r\n\t\t\t\t\t\t\t\t/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */\r\n\t\t\t\t\t\t\t} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {\r\n\t\t\t\t\t\t\t\t/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */\r\n\t\t\t\t\t\t\t\t/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively\r\n\t\t\t\t\t\t\t\t match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,\r\n\t\t\t\t\t\t\t\t which remains past the point of the animation's completion. */\r\n\t\t\t\t\t\t\t\tif (endValue === 0) {\r\n\t\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).\r\n\t\t\t\t\t\t\t\t\t If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */\r\n\t\t\t\t\t\t\t\t\telementUnitConversionData = elementUnitConversionData || calculateUnitRatios();\r\n\r\n\t\t\t\t\t\t\t\t\t/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */\r\n\t\t\t\t\t\t\t\t\t/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */\r\n\t\t\t\t\t\t\t\t\tvar axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === \"x\") ? \"x\" : \"y\";\r\n\r\n\t\t\t\t\t\t\t\t\t/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:\r\n\t\t\t\t\t\t\t\t\t 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */\r\n\t\t\t\t\t\t\t\t\tswitch (startValueUnitType) {\r\n\t\t\t\t\t\t\t\t\t\tcase \"%\":\r\n\t\t\t\t\t\t\t\t\t\t\t/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.\r\n\t\t\t\t\t\t\t\t\t\t\t Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value\r\n\t\t\t\t\t\t\t\t\t\t\t to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= (axis === \"x\" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tcase \"px\":\r\n\t\t\t\t\t\t\t\t\t\t\t/* px acts as our midpoint in the unit conversion process; do nothing. */\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= elementUnitConversionData[startValueUnitType + \"ToPx\"];\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t/* Invert the px ratios to convert into to the target unit. */\r\n\t\t\t\t\t\t\t\t\tswitch (endValueUnitType) {\r\n\t\t\t\t\t\t\t\t\t\tcase \"%\":\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= 1 / (axis === \"x\" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tcase \"px\":\r\n\t\t\t\t\t\t\t\t\t\t\t/* startValue is already in px, do nothing; we're done. */\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= 1 / elementUnitConversionData[endValueUnitType + \"ToPx\"];\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/*********************\r\n\t\t\t\t\t\t\t Relative Values\r\n\t\t\t\t\t\t\t *********************/\r\n\r\n\t\t\t\t\t\t\t/* Operator logic must be performed last since it requires unit-normalized start and end values. */\r\n\t\t\t\t\t\t\t/* Note: Relative *percent values* do not behave how most people think; while one would expect \"+=50%\"\r\n\t\t\t\t\t\t\t to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:\r\n\t\t\t\t\t\t\t 50 points is added on top of the current % value. */\r\n\t\t\t\t\t\t\tswitch (operator) {\r\n\t\t\t\t\t\t\t\tcase \"+\":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue + endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\tcase \"-\":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue - endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\tcase \"*\":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue * endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\tcase \"/\":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue / endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/**************************\r\n\t\t\t\t\t\t\t tweensContainer Push\r\n\t\t\t\t\t\t\t **************************/\r\n\r\n\t\t\t\t\t\t\t/* Construct the per-property tween object, and push it to the element's tweensContainer. */\r\n\t\t\t\t\t\t\ttweensContainer[property] = {\r\n\t\t\t\t\t\t\t\trootPropertyValue: rootPropertyValue,\r\n\t\t\t\t\t\t\t\tstartValue: startValue,\r\n\t\t\t\t\t\t\t\tcurrentValue: startValue,\r\n\t\t\t\t\t\t\t\tendValue: endValue,\r\n\t\t\t\t\t\t\t\tunitType: endValueUnitType,\r\n\t\t\t\t\t\t\t\teasing: easing\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t\tif (pattern) {\r\n\t\t\t\t\t\t\t\ttweensContainer[property].pattern = pattern;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\tconsole.log(\"tweensContainer (\" + property + \"): \" + JSON.stringify(tweensContainer[property]), element);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t/* Create a tween out of each property, and append its associated data to tweensContainer. */\r\n\t\t\t\t\t\tfor (var property in propertiesMap) {\r\n\r\n\t\t\t\t\t\t\tif (!propertiesMap.hasOwnProperty(property)) {\r\n\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* The original property name's format must be used for the parsePropertyValue() lookup,\r\n\t\t\t\t\t\t\t but we then use its camelCase styling to normalize it for manipulation. */\r\n\t\t\t\t\t\t\tvar propertyName = CSS.Names.camelCase(property),\r\n\t\t\t\t\t\t\t\t\tvalueData = parsePropertyValue(propertiesMap[property]);\r\n\r\n\t\t\t\t\t\t\t/* Find shorthand color properties that have been passed a hex string. */\r\n\t\t\t\t\t\t\t/* Would be quicker to use CSS.Lists.colors.includes() if possible */\r\n\t\t\t\t\t\t\tif (_inArray(CSS.Lists.colors, propertyName)) {\r\n\t\t\t\t\t\t\t\t/* Parse the value data for each shorthand. */\r\n\t\t\t\t\t\t\t\tvar endValue = valueData[0],\r\n\t\t\t\t\t\t\t\t\t\teasing = valueData[1],\r\n\t\t\t\t\t\t\t\t\t\tstartValue = valueData[2];\r\n\r\n\t\t\t\t\t\t\t\tif (CSS.RegEx.isHex.test(endValue)) {\r\n\t\t\t\t\t\t\t\t\t/* Convert the hex strings into their RGB component arrays. */\r\n\t\t\t\t\t\t\t\t\tvar colorComponents = [\"Red\", \"Green\", \"Blue\"],\r\n\t\t\t\t\t\t\t\t\t\t\tendValueRGB = CSS.Values.hexToRgb(endValue),\r\n\t\t\t\t\t\t\t\t\t\t\tstartValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Inject the RGB component tweens into propertiesMap. */\r\n\t\t\t\t\t\t\t\t\tfor (var i = 0; i < colorComponents.length; i++) {\r\n\t\t\t\t\t\t\t\t\t\tvar dataArray = [endValueRGB[i]];\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (easing) {\r\n\t\t\t\t\t\t\t\t\t\t\tdataArray.push(easing);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (startValueRGB !== undefined) {\r\n\t\t\t\t\t\t\t\t\t\t\tdataArray.push(startValueRGB[i]);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tfixPropertyValue(propertyName + colorComponents[i], dataArray);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t/* If we have replaced a shortcut color value then don't update the standard property name */\r\n\t\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tfixPropertyValue(propertyName, valueData);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Along with its property data, store a reference to the element itself onto tweensContainer. */\r\n\t\t\t\t\t\ttweensContainer.element = element;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/*****************\r\n\t\t\t\t\t Call Push\r\n\t\t\t\t\t *****************/\r\n\r\n\t\t\t\t\t/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not\r\n\t\t\t\t\t being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */\r\n\t\t\t\t\tif (tweensContainer.element) {\r\n\t\t\t\t\t\t/* Apply the \"velocity-animating\" indicator class. */\r\n\t\t\t\t\t\tCSS.Values.addClass(element, \"velocity-animating\");\r\n\r\n\t\t\t\t\t\t/* The call array houses the tweensContainers for each element being animated in the current call. */\r\n\t\t\t\t\t\tcall.push(tweensContainer);\r\n\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t\t\tif (data) {\r\n\t\t\t\t\t\t\t/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */\r\n\t\t\t\t\t\t\tif (opts.queue === \"\") {\r\n\r\n\t\t\t\t\t\t\t\tdata.tweensContainer = tweensContainer;\r\n\t\t\t\t\t\t\t\tdata.opts = opts;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Switch on the element's animating flag. */\r\n\t\t\t\t\t\t\tdata.isAnimating = true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Once the final element in this call's element set has been processed, push the call array onto\r\n\t\t\t\t\t\t Velocity.State.calls for the animation tick to immediately begin processing. */\r\n\t\t\t\t\t\tif (elementsIndex === elementsLength - 1) {\r\n\t\t\t\t\t\t\t/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.\r\n\t\t\t\t\t\t\t Anything on this call container is subjected to tick() processing. */\r\n\t\t\t\t\t\t\tVelocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);\r\n\r\n\t\t\t\t\t\t\t/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */\r\n\t\t\t\t\t\t\tif (Velocity.State.isTicking === false) {\r\n\t\t\t\t\t\t\t\tVelocity.State.isTicking = true;\r\n\r\n\t\t\t\t\t\t\t\t/* Start the tick loop. */\r\n\t\t\t\t\t\t\t\ttick();\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\telementsIndex++;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* When the queue option is set to false, the call skips the element's queue and fires immediately. */\r\n\t\t\t\tif (opts.queue === false) {\r\n\t\t\t\t\t/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),\r\n\t\t\t\t\t we manually inject the delay property here with an explicit setTimeout. */\r\n\t\t\t\t\tif (opts.delay) {\r\n\r\n\t\t\t\t\t\t/* Temporarily store delayed elements to facilitate access for global pause/resume */\r\n\t\t\t\t\t\tvar callIndex = Velocity.State.delayedElements.count++;\r\n\t\t\t\t\t\tVelocity.State.delayedElements[callIndex] = element;\r\n\r\n\t\t\t\t\t\tvar delayComplete = (function(index) {\r\n\t\t\t\t\t\t\treturn function() {\r\n\t\t\t\t\t\t\t\t/* Clear the temporary element */\r\n\t\t\t\t\t\t\t\tVelocity.State.delayedElements[index] = false;\r\n\r\n\t\t\t\t\t\t\t\t/* Finally, issue the call */\r\n\t\t\t\t\t\t\t\tbuildQueue();\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})(callIndex);\r\n\r\n\t\t\t\t\t\tData(element).delayBegin = (new Date()).getTime();\r\n\t\t\t\t\t\tData(element).delay = parseFloat(opts.delay);\r\n\t\t\t\t\t\tData(element).delayTimer = {\r\n\t\t\t\t\t\t\tsetTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),\r\n\t\t\t\t\t\t\tnext: delayComplete\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tbuildQueue();\r\n\t\t\t\t\t}\r\n\t\t\t\t\t/* Otherwise, the call undergoes element queueing as normal. */\r\n\t\t\t\t\t/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$.queue(element, opts.queue, function(next, clearQueue) {\r\n\t\t\t\t\t\t/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,\r\n\t\t\t\t\t\t so it's fine if this is repeatedly triggered for each element in the associated call.) */\r\n\t\t\t\t\t\tif (clearQueue === true) {\r\n\t\t\t\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Do not continue with animation queueing. */\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.\r\n\t\t\t\t\t\t See completeCall() for further details. */\r\n\t\t\t\t\t\tVelocity.velocityQueueEntryFlag = true;\r\n\r\n\t\t\t\t\t\tbuildQueue(next);\r\n\t\t\t\t\t});\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************\r\n\t\t\t\t Auto-Dequeuing\r\n\t\t\t\t *********************/\r\n\r\n\t\t\t\t/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element\r\n\t\t\t\t must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking\r\n\t\t\t\t for the \"inprogress\" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's\r\n\t\t\t\t queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's\r\n\t\t\t\t first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */\r\n\t\t\t\t/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until\r\n\t\t\t\t each one of the elements in the set has reached the end of its individually pre-existing queue chain. */\r\n\t\t\t\t/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.\r\n\t\t\t\t Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */\r\n\t\t\t\tif ((opts.queue === \"\" || opts.queue === \"fx\") && $.queue(element)[0] !== \"inprogress\") {\r\n\t\t\t\t\t$.dequeue(element);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/**************************\r\n\t\t\t Element Set Iteration\r\n\t\t\t **************************/\r\n\r\n\t\t\t/* If the \"nodeType\" property exists on the elements variable, we're animating a single element.\r\n\t\t\t Place it in an array so that $.each() can iterate over it. */\r\n\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */\r\n\t\t\t\tif (Type.isNode(element)) {\r\n\t\t\t\t\tprocessElement(element, i);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\t/******************\r\n\t\t\t Option: Loop\r\n\t\t\t ******************/\r\n\r\n\t\t\t/* The loop option accepts an integer indicating how many times the element should loop between the values in the\r\n\t\t\t current call's properties map and the element's property values prior to this call. */\r\n\t\t\t/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs\r\n\t\t\t to undergo its queue insertion prior to the loop option generating its series of constituent \"reverse\" calls,\r\n\t\t\t which chain after the current call. Two reverse calls (two \"alternations\") constitute one loop. */\r\n\t\t\topts = $.extend({}, Velocity.defaults, options);\r\n\t\t\topts.loop = parseInt(opts.loop, 10);\r\n\t\t\tvar reverseCallsCount = (opts.loop * 2) - 1;\r\n\r\n\t\t\tif (opts.loop) {\r\n\t\t\t\t/* Double the loop count to convert it into its appropriate number of \"reverse\" calls.\r\n\t\t\t\t Subtract 1 from the resulting value since the current call is included in the total alternation count. */\r\n\t\t\t\tfor (var x = 0; x < reverseCallsCount; x++) {\r\n\t\t\t\t\t/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object\r\n\t\t\t\t\t isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse\r\n\t\t\t\t\t call so that the delay logic that occurs inside *Pre-Queueing* can process it. */\r\n\t\t\t\t\tvar reverseOptions = {\r\n\t\t\t\t\t\tdelay: opts.delay,\r\n\t\t\t\t\t\tprogress: opts.progress\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* If a complete callback was passed into this call, transfer it to the loop redirect's final \"reverse\" call\r\n\t\t\t\t\t so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */\r\n\t\t\t\t\tif (x === reverseCallsCount - 1) {\r\n\t\t\t\t\t\treverseOptions.display = opts.display;\r\n\t\t\t\t\t\treverseOptions.visibility = opts.visibility;\r\n\t\t\t\t\t\treverseOptions.complete = opts.complete;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tanimate(elements, \"reverse\", reverseOptions);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/***************\r\n\t\t\t Chaining\r\n\t\t\t ***************/\r\n\r\n\t\t\t/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */\r\n\t\t\treturn getChain();\r\n\t\t};\r\n\r\n\t\t/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */\r\n\t\tVelocity = $.extend(animate, Velocity);\r\n\t\t/* For legacy support, also expose the literal animate method. */\r\n\t\tVelocity.animate = animate;\r\n\r\n\t\t/**************\r\n\t\t Timing\r\n\t\t **************/\r\n\r\n\t\t/* Ticker function. */\r\n\t\tvar ticker = window.requestAnimationFrame || rAFShim;\r\n\r\n\t\t/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.\r\n\t\t To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile\r\n\t\t devices to avoid wasting battery power on inactive tabs. */\r\n\t\t/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */\r\n\t\tif (!Velocity.State.isMobile && document.hidden !== undefined) {\r\n\t\t\tvar updateTicker = function() {\r\n\t\t\t\t/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */\r\n\t\t\t\tif (document.hidden) {\r\n\t\t\t\t\tticker = function(callback) {\r\n\t\t\t\t\t\t/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */\r\n\t\t\t\t\t\treturn setTimeout(function() {\r\n\t\t\t\t\t\t\tcallback(true);\r\n\t\t\t\t\t\t}, 16);\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* The rAF loop has been paused by the browser, so we manually restart the tick. */\r\n\t\t\t\t\ttick();\r\n\t\t\t\t} else {\r\n\t\t\t\t\tticker = window.requestAnimationFrame || rAFShim;\r\n\t\t\t\t}\r\n\t\t\t};\r\n\r\n\t\t\t/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */\r\n\t\t\tupdateTicker();\r\n\r\n\t\t\t/* And then run check again every time visibility changes */\r\n\t\t\tdocument.addEventListener(\"visibilitychange\", updateTicker);\r\n\t\t}\r\n\r\n\t\t/************\r\n\t\t Tick\r\n\t\t ************/\r\n\r\n\t\t/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */\r\n\t\tfunction tick(timestamp) {\r\n\t\t\t/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.\r\n\t\t\t We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever\r\n\t\t\t the browser's next tick sync time occurs, which results in the first elements subjected to Velocity\r\n\t\t\t calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore\r\n\t\t\t the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated\r\n\t\t\t by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */\r\n\t\t\tif (timestamp) {\r\n\t\t\t\t/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is\r\n\t\t\t\t under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.\r\n\t\t\t\t We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */\r\n\t\t\t\tvar timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();\r\n\r\n\t\t\t\t/********************\r\n\t\t\t\t Call Iteration\r\n\t\t\t\t ********************/\r\n\r\n\t\t\t\tvar callsLength = Velocity.State.calls.length;\r\n\r\n\t\t\t\t/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)\r\n\t\t\t\t when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation\r\n\t\t\t\t has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */\r\n\t\t\t\tif (callsLength > 10000) {\r\n\t\t\t\t\tVelocity.State.calls = compactSparseArray(Velocity.State.calls);\r\n\t\t\t\t\tcallsLength = Velocity.State.calls.length;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Iterate through each active call. */\r\n\t\t\t\tfor (var i = 0; i < callsLength; i++) {\r\n\t\t\t\t\t/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */\r\n\t\t\t\t\tif (!Velocity.State.calls[i]) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/************************\r\n\t\t\t\t\t Call-Wide Variables\r\n\t\t\t\t\t ************************/\r\n\r\n\t\t\t\t\tvar callContainer = Velocity.State.calls[i],\r\n\t\t\t\t\t\t\tcall = callContainer[0],\r\n\t\t\t\t\t\t\topts = callContainer[2],\r\n\t\t\t\t\t\t\ttimeStart = callContainer[3],\r\n\t\t\t\t\t\t\tfirstTick = !timeStart,\r\n\t\t\t\t\t\t\ttweenDummyValue = null,\r\n\t\t\t\t\t\t\tpauseObject = callContainer[5],\r\n\t\t\t\t\t\t\tmillisecondsEllapsed = callContainer[6];\r\n\r\n\r\n\r\n\t\t\t\t\t/* If timeStart is undefined, then this is the first time that this call has been processed by tick().\r\n\t\t\t\t\t We assign timeStart now so that its value is as close to the real animation start time as possible.\r\n\t\t\t\t\t (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay\r\n\t\t\t\t\t between that time and now would cause the first few frames of the tween to be skipped since\r\n\t\t\t\t\t percentComplete is calculated relative to timeStart.) */\r\n\t\t\t\t\t/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the\r\n\t\t\t\t\t first tick iteration isn't wasted by animating at 0% tween completion, which would produce the\r\n\t\t\t\t\t same style value as the element's current value. */\r\n\t\t\t\t\tif (!timeStart) {\r\n\t\t\t\t\t\ttimeStart = Velocity.State.calls[i][3] = timeCurrent - 16;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If a pause object is present, skip processing unless it has been set to resume */\r\n\t\t\t\t\tif (pauseObject) {\r\n\t\t\t\t\t\tif (pauseObject.resume === true) {\r\n\t\t\t\t\t\t\t/* Update the time start to accomodate the paused completion amount */\r\n\t\t\t\t\t\t\ttimeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);\r\n\r\n\t\t\t\t\t\t\t/* Remove pause object after processing */\r\n\t\t\t\t\t\t\tcallContainer[5] = null;\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tmillisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;\r\n\r\n\t\t\t\t\t/* The tween's completion percentage is relative to the tween's start time, not the tween's start value\r\n\t\t\t\t\t (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).\r\n\t\t\t\t\t Accordingly, we ensure that percentComplete does not exceed 1. */\r\n\t\t\t\t\tvar percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);\r\n\r\n\t\t\t\t\t/**********************\r\n\t\t\t\t\t Element Iteration\r\n\t\t\t\t\t **********************/\r\n\r\n\t\t\t\t\t/* For every call, iterate through each of the elements in its set. */\r\n\t\t\t\t\tfor (var j = 0, callLength = call.length; j < callLength; j++) {\r\n\t\t\t\t\t\tvar tweensContainer = call[j],\r\n\t\t\t\t\t\t\t\telement = tweensContainer.element;\r\n\r\n\t\t\t\t\t\t/* Check to see if this element has been deleted midway through the animation by checking for the\r\n\t\t\t\t\t\t continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */\r\n\t\t\t\t\t\tif (!Data(element)) {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tvar transformPropertyExists = false;\r\n\r\n\t\t\t\t\t\t/**********************************\r\n\t\t\t\t\t\t Display & Visibility Toggling\r\n\t\t\t\t\t\t **********************************/\r\n\r\n\t\t\t\t\t\t/* If the display option is set to non-\"none\", set it upfront so that the element can become visible before tweening begins.\r\n\t\t\t\t\t\t (Otherwise, display's \"none\" value is set in completeCall() once the animation has completed.) */\r\n\t\t\t\t\t\tif (opts.display !== undefined && opts.display !== null && opts.display !== \"none\") {\r\n\t\t\t\t\t\t\tif (opts.display === \"flex\") {\r\n\t\t\t\t\t\t\t\tvar flexValues = [\"-webkit-box\", \"-moz-box\", \"-ms-flexbox\", \"-webkit-flex\"];\r\n\r\n\t\t\t\t\t\t\t\t$.each(flexValues, function(i, flexValue) {\r\n\t\t\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", flexValue);\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", opts.display);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Same goes with the visibility option, but its \"none\" equivalent is \"hidden\". */\r\n\t\t\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== \"hidden\") {\r\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"visibility\", opts.visibility);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/************************\r\n\t\t\t\t\t\t Property Iteration\r\n\t\t\t\t\t\t ************************/\r\n\r\n\t\t\t\t\t\t/* For every element, iterate through each property. */\r\n\t\t\t\t\t\tfor (var property in tweensContainer) {\r\n\t\t\t\t\t\t\t/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */\r\n\t\t\t\t\t\t\tif (tweensContainer.hasOwnProperty(property) && property !== \"element\") {\r\n\t\t\t\t\t\t\t\tvar tween = tweensContainer[property],\r\n\t\t\t\t\t\t\t\t\t\tcurrentValue,\r\n\t\t\t\t\t\t\t\t\t\t/* Easing can either be a pre-genereated function or a string that references a pre-registered easing\r\n\t\t\t\t\t\t\t\t\t\t on the Velocity.Easings object. In either case, return the appropriate easing *function*. */\r\n\t\t\t\t\t\t\t\t\t\teasing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;\r\n\r\n\t\t\t\t\t\t\t\t/******************************\r\n\t\t\t\t\t\t\t\t Current Value Calculation\r\n\t\t\t\t\t\t\t\t ******************************/\r\n\r\n\t\t\t\t\t\t\t\tif (Type.isString(tween.pattern)) {\r\n\t\t\t\t\t\t\t\t\tvar patternReplace = percentComplete === 1 ?\r\n\t\t\t\t\t\t\t\t\t\t\tfunction($0, index, round) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tvar result = tween.endValue[index];\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\treturn round ? Math.round(result) : result;\r\n\t\t\t\t\t\t\t\t\t\t\t} :\r\n\t\t\t\t\t\t\t\t\t\t\tfunction($0, index, round) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tvar startValue = tween.startValue[index],\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttweenDelta = tween.endValue[index] - startValue,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\treturn round ? Math.round(result) : result;\r\n\t\t\t\t\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.pattern.replace(/{(\\d+)(!)?}/g, patternReplace);\r\n\t\t\t\t\t\t\t\t} else if (percentComplete === 1) {\r\n\t\t\t\t\t\t\t\t\t/* If this is the last tick pass (if we've reached 100% completion for this tween),\r\n\t\t\t\t\t\t\t\t\t ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */\r\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.endValue;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/* Otherwise, calculate currentValue based on the current delta from startValue. */\r\n\t\t\t\t\t\t\t\t\tvar tweenDelta = tween.endValue - tween.startValue;\r\n\r\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));\r\n\t\t\t\t\t\t\t\t\t/* If no value change is occurring, don't proceed with DOM updating. */\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif (!firstTick && (currentValue === tween.currentValue)) {\r\n\t\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\ttween.currentValue = currentValue;\r\n\r\n\t\t\t\t\t\t\t\t/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that\r\n\t\t\t\t\t\t\t\t it can be passed into the progress callback. */\r\n\t\t\t\t\t\t\t\tif (property === \"tween\") {\r\n\t\t\t\t\t\t\t\t\ttweenDummyValue = currentValue;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/******************\r\n\t\t\t\t\t\t\t\t\t Hooks: Part I\r\n\t\t\t\t\t\t\t\t\t ******************/\r\n\t\t\t\t\t\t\t\t\tvar hookRoot;\r\n\r\n\t\t\t\t\t\t\t\t\t/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used\r\n\t\t\t\t\t\t\t\t\t for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated\r\n\t\t\t\t\t\t\t\t\t rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's\r\n\t\t\t\t\t\t\t\t\t updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that\r\n\t\t\t\t\t\t\t\t\t subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */\r\n\t\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(property);\r\n\r\n\t\t\t\t\t\t\t\t\t\tvar rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (rootPropertyValueCache) {\r\n\t\t\t\t\t\t\t\t\t\t\ttween.rootPropertyValue = rootPropertyValueCache;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t/*****************\r\n\t\t\t\t\t\t\t\t\t DOM Update\r\n\t\t\t\t\t\t\t\t\t *****************/\r\n\r\n\t\t\t\t\t\t\t\t\t/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */\r\n\t\t\t\t\t\t\t\t\t/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */\r\n\t\t\t\t\t\t\t\t\tvar adjustedSetData = CSS.setPropertyValue(element, /* SET */\r\n\t\t\t\t\t\t\t\t\t\t\tproperty,\r\n\t\t\t\t\t\t\t\t\t\t\ttween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? \"\" : tween.unitType),\r\n\t\t\t\t\t\t\t\t\t\t\ttween.rootPropertyValue,\r\n\t\t\t\t\t\t\t\t\t\t\ttween.scrollData);\r\n\r\n\t\t\t\t\t\t\t\t\t/*******************\r\n\t\t\t\t\t\t\t\t\t Hooks: Part II\r\n\t\t\t\t\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t\t\t\t\t/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */\r\n\t\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\t\t\t\t/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */\r\n\t\t\t\t\t\t\t\t\t\tif (CSS.Normalizations.registered[hookRoot]) {\r\n\t\t\t\t\t\t\t\t\t\t\tData(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot](\"extract\", null, adjustedSetData[1]);\r\n\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\tData(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t/***************\r\n\t\t\t\t\t\t\t\t\t Transforms\r\n\t\t\t\t\t\t\t\t\t ***************/\r\n\r\n\t\t\t\t\t\t\t\t\t/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */\r\n\t\t\t\t\t\t\t\t\tif (adjustedSetData[0] === \"transform\") {\r\n\t\t\t\t\t\t\t\t\t\ttransformPropertyExists = true;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/****************\r\n\t\t\t\t\t\t mobileHA\r\n\t\t\t\t\t\t ****************/\r\n\r\n\t\t\t\t\t\t/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.\r\n\t\t\t\t\t\t It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */\r\n\t\t\t\t\t\tif (opts.mobileHA) {\r\n\t\t\t\t\t\t\t/* Don't set the null transform hack if we've already done so. */\r\n\t\t\t\t\t\t\tif (Data(element).transformCache.translate3d === undefined) {\r\n\t\t\t\t\t\t\t\t/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */\r\n\t\t\t\t\t\t\t\tData(element).transformCache.translate3d = \"(0px, 0px, 0px)\";\r\n\r\n\t\t\t\t\t\t\t\ttransformPropertyExists = true;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (transformPropertyExists) {\r\n\t\t\t\t\t\t\tCSS.flushTransformCache(element);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* The non-\"none\" display value is only applied to an element once -- when its associated call is first ticked through.\r\n\t\t\t\t\t Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */\r\n\t\t\t\t\tif (opts.display !== undefined && opts.display !== \"none\") {\r\n\t\t\t\t\t\tVelocity.State.calls[i][2].display = false;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== \"hidden\") {\r\n\t\t\t\t\t\tVelocity.State.calls[i][2].visibility = false;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */\r\n\t\t\t\t\tif (opts.progress) {\r\n\t\t\t\t\t\topts.progress.call(callContainer[1],\r\n\t\t\t\t\t\t\t\tcallContainer[1],\r\n\t\t\t\t\t\t\t\tpercentComplete,\r\n\t\t\t\t\t\t\t\tMath.max(0, (timeStart + opts.duration) - timeCurrent),\r\n\t\t\t\t\t\t\t\ttimeStart,\r\n\t\t\t\t\t\t\t\ttweenDummyValue);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */\r\n\t\t\t\t\tif (percentComplete === 1) {\r\n\t\t\t\t\t\tcompleteCall(i);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */\r\n\t\t\tif (Velocity.State.isTicking) {\r\n\t\t\t\tticker(tick);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t/**********************\r\n\t\t Call Completion\r\n\t\t **********************/\r\n\r\n\t\t/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */\r\n\t\tfunction completeCall(callIndex, isStopped) {\r\n\t\t\t/* Ensure the call exists. */\r\n\t\t\tif (!Velocity.State.calls[callIndex]) {\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\r\n\t\t\t/* Pull the metadata from the call. */\r\n\t\t\tvar call = Velocity.State.calls[callIndex][0],\r\n\t\t\t\t\telements = Velocity.State.calls[callIndex][1],\r\n\t\t\t\t\topts = Velocity.State.calls[callIndex][2],\r\n\t\t\t\t\tresolver = Velocity.State.calls[callIndex][4];\r\n\r\n\t\t\tvar remainingCallsExist = false;\r\n\r\n\t\t\t/*************************\r\n\t\t\t Element Finalization\r\n\t\t\t *************************/\r\n\r\n\t\t\tfor (var i = 0, callLength = call.length; i < callLength; i++) {\r\n\t\t\t\tvar element = call[i].element;\r\n\r\n\t\t\t\t/* If the user set display to \"none\" (intending to hide the element), set it now that the animation has completed. */\r\n\t\t\t\t/* Note: display:none isn't set when calls are manually stopped (via Velocity(\"stop\"). */\r\n\t\t\t\t/* Note: Display gets ignored with \"reverse\" calls and infinite loops, since this behavior would be undesirable. */\r\n\t\t\t\tif (!isStopped && !opts.loop) {\r\n\t\t\t\t\tif (opts.display === \"none\") {\r\n\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", opts.display);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (opts.visibility === \"hidden\") {\r\n\t\t\t\t\t\tCSS.setPropertyValue(element, \"visibility\", opts.visibility);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If the element's queue is empty (if only the \"inprogress\" item is left at position 0) or if its queue is about to run\r\n\t\t\t\t a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter\r\n\t\t\t\t an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,\r\n\t\t\t\t we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag\r\n\t\t\t\t is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */\r\n\t\t\t\tvar data = Data(element);\r\n\r\n\t\t\t\tif (opts.loop !== true && ($.queue(element)[1] === undefined || !/\\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {\r\n\t\t\t\t\t/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */\r\n\t\t\t\t\tif (data) {\r\n\t\t\t\t\t\tdata.isAnimating = false;\r\n\t\t\t\t\t\t/* Clear the element's rootPropertyValueCache, which will become stale. */\r\n\t\t\t\t\t\tdata.rootPropertyValueCache = {};\r\n\r\n\t\t\t\t\t\tvar transformHAPropertyExists = false;\r\n\t\t\t\t\t\t/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */\r\n\t\t\t\t\t\t$.each(CSS.Lists.transforms3D, function(i, transformName) {\r\n\t\t\t\t\t\t\tvar defaultValue = /^scale/.test(transformName) ? 1 : 0,\r\n\t\t\t\t\t\t\t\t\tcurrentValue = data.transformCache[transformName];\r\n\r\n\t\t\t\t\t\t\tif (data.transformCache[transformName] !== undefined && new RegExp(\"^\\\\(\" + defaultValue + \"[^.]\").test(currentValue)) {\r\n\t\t\t\t\t\t\t\ttransformHAPropertyExists = true;\r\n\r\n\t\t\t\t\t\t\t\tdelete data.transformCache[transformName];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */\r\n\t\t\t\t\t\tif (opts.mobileHA) {\r\n\t\t\t\t\t\t\ttransformHAPropertyExists = true;\r\n\t\t\t\t\t\t\tdelete data.transformCache.translate3d;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Flush the subproperty removals to the DOM. */\r\n\t\t\t\t\t\tif (transformHAPropertyExists) {\r\n\t\t\t\t\t\t\tCSS.flushTransformCache(element);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Remove the \"velocity-animating\" indicator class. */\r\n\t\t\t\t\t\tCSS.Values.removeClass(element, \"velocity-animating\");\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************\r\n\t\t\t\t Option: Complete\r\n\t\t\t\t *********************/\r\n\r\n\t\t\t\t/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */\r\n\t\t\t\t/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity(\"stop\"). */\r\n\t\t\t\tif (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {\r\n\t\t\t\t\t/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */\r\n\t\t\t\t\ttry {\r\n\t\t\t\t\t\topts.complete.call(elements, elements);\r\n\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\tsetTimeout(function() {\r\n\t\t\t\t\t\t\tthrow error;\r\n\t\t\t\t\t\t}, 1);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**********************\r\n\t\t\t\t Promise Resolving\r\n\t\t\t\t **********************/\r\n\r\n\t\t\t\t/* Note: Infinite loops don't return promises. */\r\n\t\t\t\tif (resolver && opts.loop !== true) {\r\n\t\t\t\t\tresolver(elements);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/****************************\r\n\t\t\t\t Option: Loop (Infinite)\r\n\t\t\t\t ****************************/\r\n\r\n\t\t\t\tif (data && opts.loop === true && !isStopped) {\r\n\t\t\t\t\t/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable\r\n\t\t\t\t\t continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */\r\n\t\t\t\t\t$.each(data.tweensContainer, function(propertyName, tweenContainer) {\r\n\t\t\t\t\t\tif (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {\r\n\t\t\t\t\t\t\tvar oldStartValue = tweenContainer.startValue;\r\n\r\n\t\t\t\t\t\t\ttweenContainer.startValue = tweenContainer.endValue;\r\n\t\t\t\t\t\t\ttweenContainer.endValue = oldStartValue;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === \"%\") {\r\n\t\t\t\t\t\t\ttweenContainer.endValue = 0;\r\n\t\t\t\t\t\t\ttweenContainer.startValue = 100;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\tVelocity(element, \"reverse\", {loop: true, delay: opts.delay});\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/***************\r\n\t\t\t\t Dequeueing\r\n\t\t\t\t ***************/\r\n\r\n\t\t\t\t/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),\r\n\t\t\t\t which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,\r\n\t\t\t\t $.dequeue() must still be called in order to completely clear jQuery's animation queue. */\r\n\t\t\t\tif (opts.queue !== false) {\r\n\t\t\t\t\t$.dequeue(element, opts.queue);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/************************\r\n\t\t\t Calls Array Cleanup\r\n\t\t\t ************************/\r\n\r\n\t\t\t/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().\r\n\t\t\t (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */\r\n\t\t\tVelocity.State.calls[callIndex] = false;\r\n\r\n\t\t\t/* Iterate through the calls array to determine if this was the final in-progress animation.\r\n\t\t\t If so, set a flag to end ticking and clear the calls array. */\r\n\t\t\tfor (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {\r\n\t\t\t\tif (Velocity.State.calls[j] !== false) {\r\n\t\t\t\t\tremainingCallsExist = true;\r\n\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (remainingCallsExist === false) {\r\n\t\t\t\t/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */\r\n\t\t\t\tVelocity.State.isTicking = false;\r\n\r\n\t\t\t\t/* Clear the calls array so that its length is reset. */\r\n\t\t\t\tdelete Velocity.State.calls;\r\n\t\t\t\tVelocity.State.calls = [];\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t/******************\r\n\t\t Frameworks\r\n\t\t ******************/\r\n\r\n\t\t/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.\r\n\t\t If either framework is loaded, register a \"velocity\" extension pointing to Velocity's core animate() method.  Velocity\r\n\t\t also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are\r\n\t\t accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn\r\n\t\t (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */\r\n\t\tglobal.Velocity = Velocity;\r\n\r\n\t\tif (global !== window) {\r\n\t\t\t/* Assign the element function to Velocity's core animate() method. */\r\n\t\t\tglobal.fn.velocity = animate;\r\n\t\t\t/* Assign the object function's defaults to Velocity's global defaults object. */\r\n\t\t\tglobal.fn.velocity.defaults = Velocity.defaults;\r\n\t\t}\r\n\r\n\t\t/***********************\r\n\t\t Packaged Redirects\r\n\t\t ***********************/\r\n\r\n\t\t/* slideUp, slideDown */\r\n\t\t$.each([\"Down\", \"Up\"], function(i, direction) {\r\n\t\t\tVelocity.Redirects[\"slide\" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {\r\n\t\t\t\tvar opts = $.extend({}, options),\r\n\t\t\t\t\t\tbegin = opts.begin,\r\n\t\t\t\t\t\tcomplete = opts.complete,\r\n\t\t\t\t\t\tinlineValues = {},\r\n\t\t\t\t\t\tcomputedValues = {height: \"\", marginTop: \"\", marginBottom: \"\", paddingTop: \"\", paddingBottom: \"\"};\r\n\r\n\t\t\t\tif (opts.display === undefined) {\r\n\t\t\t\t\t/* Show the element before slideDown begins and hide the element after slideUp completes. */\r\n\t\t\t\t\t/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */\r\n\t\t\t\t\topts.display = (direction === \"Down\" ? (Velocity.CSS.Values.getDisplayType(element) === \"inline\" ? \"inline-block\" : \"block\") : \"none\");\r\n\t\t\t\t}\r\n\r\n\t\t\t\topts.begin = function() {\r\n\t\t\t\t\t/* If the user passed in a begin callback, fire it now. */\r\n\t\t\t\t\tif (elementsIndex === 0 && begin) {\r\n\t\t\t\t\t\tbegin.call(elements, elements);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */\r\n\t\t\t\t\tfor (var property in computedValues) {\r\n\t\t\t\t\t\tif (!computedValues.hasOwnProperty(property)) {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tinlineValues[property] = element.style[property];\r\n\r\n\t\t\t\t\t\t/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,\r\n\t\t\t\t\t\t use forcefeeding to start from computed values and animate down to 0. */\r\n\t\t\t\t\t\tvar propertyValue = CSS.getPropertyValue(element, property);\r\n\t\t\t\t\t\tcomputedValues[property] = (direction === \"Down\") ? [propertyValue, 0] : [0, propertyValue];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Force vertical overflow content to clip so that sliding works as expected. */\r\n\t\t\t\t\tinlineValues.overflow = element.style.overflow;\r\n\t\t\t\t\telement.style.overflow = \"hidden\";\r\n\t\t\t\t};\r\n\r\n\t\t\t\topts.complete = function() {\r\n\t\t\t\t\t/* Reset element to its pre-slide inline values once its slide animation is complete. */\r\n\t\t\t\t\tfor (var property in inlineValues) {\r\n\t\t\t\t\t\tif (inlineValues.hasOwnProperty(property)) {\r\n\t\t\t\t\t\t\telement.style[property] = inlineValues[property];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If the user passed in a complete callback, fire it now. */\r\n\t\t\t\t\tif (elementsIndex === elementsSize - 1) {\r\n\t\t\t\t\t\tif (complete) {\r\n\t\t\t\t\t\t\tcomplete.call(elements, elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif (promiseData) {\r\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t};\r\n\r\n\t\t\t\tVelocity(element, computedValues, opts);\r\n\t\t\t};\r\n\t\t});\r\n\r\n\t\t/* fadeIn, fadeOut */\r\n\t\t$.each([\"In\", \"Out\"], function(i, direction) {\r\n\t\t\tVelocity.Redirects[\"fade\" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {\r\n\t\t\t\tvar opts = $.extend({}, options),\r\n\t\t\t\t\t\tcomplete = opts.complete,\r\n\t\t\t\t\t\tpropertiesMap = {opacity: (direction === \"In\") ? 1 : 0};\r\n\r\n\t\t\t\t/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering\r\n\t\t\t\t callbacks by firing them only when the final element has been reached. */\r\n\t\t\t\tif (elementsIndex !== 0) {\r\n\t\t\t\t\topts.begin = null;\r\n\t\t\t\t}\r\n\t\t\t\tif (elementsIndex !== elementsSize - 1) {\r\n\t\t\t\t\topts.complete = null;\r\n\t\t\t\t} else {\r\n\t\t\t\t\topts.complete = function() {\r\n\t\t\t\t\t\tif (complete) {\r\n\t\t\t\t\t\t\tcomplete.call(elements, elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif (promiseData) {\r\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t};\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If a display was passed in, use it. Otherwise, default to \"none\" for fadeOut or the element-specific default for fadeIn. */\r\n\t\t\t\t/* Note: We allow users to pass in \"null\" to skip display setting altogether. */\r\n\t\t\t\tif (opts.display === undefined) {\r\n\t\t\t\t\topts.display = (direction === \"In\" ? \"auto\" : \"none\");\r\n\t\t\t\t}\r\n\r\n\t\t\t\tVelocity(this, propertiesMap, opts);\r\n\t\t\t};\r\n\t\t});\r\n\r\n\t\treturn Velocity;\r\n\t}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));\r\n}));\r\n\r\n/******************\r\n Known Issues\r\n ******************/\r\n\r\n/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.\r\n Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties\r\n will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */\r\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/velocity-animate/velocity.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://%5Bname%5D/(webpack)/buildin/global.js?");

/***/ }),

/***/ 1:
/*!*******************!*\
  !*** dll utility ***!
  \*******************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__;\n\n//# sourceURL=webpack://%5Bname%5D/dll_utility?");

/***/ })

/******/ });