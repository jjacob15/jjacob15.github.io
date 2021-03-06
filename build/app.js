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

/***/ "./assets/images/avatars/avatar-user.png":
/*!***********************************************!*\
  !*** ./assets/images/avatars/avatar-user.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABkCAYAAACfIP5qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABPNJREFUeNrsnU1oVFcUx898T2YyGpqgyaCiwdSFCKlpaQg1E/EDPyBudNGuKoLQLjooghUUUlrQRUG6KVRCuxA/Wld+bwQTFVFINBi7cEZjwDbGYFA6ic440fSd0aRT0Qkz7933znvz/8Mjk+TNvY/7m3POPefem7j+3tjaRUQxgqToOzfGQJ4ABVAgQAEUCFAABQIUQIEABQIUQIEABVAgQAEUCFAgQAEUCFAABTJHXjs/vK9+sXY1kGdO7fTPXo4MU3YgqV13AcU00w5XUnjTFgqtXq/BmPve+16OPKJnF87T+MkT9Gp8DO5LlYLNK2jOr39Q5IsvCwJh8e/5Pr4//XELoKhQ1Y499MHeHzRLCRdpWWGq79hP/m92A4rRQEKr1ulqo2btBtuAEQ8lFz90AskHk46tBRQ98syt1eLCVkPbnPdVnEaqagClVDGQYmPITPJXVlLo8630IJ0FlFJnWyq0MNZGfWMZsWDckoEYbSX51iIZjFgonK2rVE3DktxXiWDEQuEgrzRe1UWnX0sDIxaKVzWUaN3/vpcEBlVigWDEQsnc6lPa/lBvr1gwYqFwCV6lUg+HxFqMXEvpv6nWUm70inVlci3l0TC9uK3GhQ1e6ipoKVaDER3oU0d+U9Ju//GjooO/aCiZ/j5KX7tiuJXM5LqsBiN+Svz04H7K3jdmvX00maCL33eIny6Lh8Lr66Pfxil1L6kbyKmvt9OLVEp8HmOL5JHBPN0Tp78ud5fssvQCMROMbXazeJ6NU/bAPrp87lNqjO+kSG3dzBOF4Yd09eCPNNjdZXjmz5of9JU3FJbP5aIFt67Tmc3tuf1ei1rbKNrU9M5s/b5mHaOJO8qeRSUY2+37YjAtsyvo6kCSenjQO617FlVgbFmQnAIzy2v946uIMbatEjsZjK1L904FIyam8B5hXgL2L/uo6PduoEltQCYo82qypL6HbvTQYy2P0TtlNirGWA4lsKwxt+Eu2PyZrnZm63hvE22fzme4LlZsGcZoMF4rLYO3o+qFYaQWalNsvhgOl2NKtRy9YNxWAak+8JMoIG/Daf/5EPkjEUtijNsqIL5Fi0myqhs+tAyM6VDYZUkHkg9m5b4O02dlpkLhoC7VZRVyZdHlTaaCMRVKxer1tsyHlmxsNzWPMRWKqg3byq0l1mZYgjnwPCsHCrsuVRu2VYs3hOt1YVP6czxDfam0c8ssdtWDzERBMIAiEIw4KJxF93T+onSBisXtcz9GLBEbDUbcIhcPVP/vx3JLuJsPH1PWD5dRRt8UIVt27LIUDFGaGiNBuZbyOJF4/UlOJtRaypv2p/qT5MoQUwTGGC+GQxYYlyvTDEsRponJySCgCBSgAAoEKIACAQqgQI6Ewkfl/rmbtOUgcUlGz16wYmVqRv8kvo0GV6yhbM37/yjn2PB/p3Z7Ow8pfybur1A/fIr4ztnTpn4IXFb8l22u8byujkJvKxrwdlsSU7hMPT+Aspu4QA8wQmdfDKaxMgAK0qbEvAkaYATmKQAjNHlkMJ/MCuZOZwGKINX6vbnjcuUORlyZhc8vljsYkbWvcgcjtiDJYFqrZJz8BZQ8hTxuMUeyASVPks7KA8o7wFT7PIAiEUw51Mts5xPKoZBpS0ftdDC2jZ4MZmk4ACjSVF/hzEKm7eeZTqwwO2Ly7zQwjsnIGEysKuSIetm/AgwA8MT1ZZpoVSEAAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/images/logo.png":
/*!********************************!*\
  !*** ./assets/images/logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAiCAYAAADLYJIKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvZJREFUeNrsnLFu2zAQhukge+M3CJShYwq4D2ADytCti+eii+dmire4m7dklad0TR6gQwpY3WPAHTs40BNIfgOVrI/o4SrJlkRFdvD/wIEURd5R1GdZpA120jRVELSvOsIQONVUW8rM03ZP5RAAbV1jbc/azuh4SNbF0ADQfVNCT84FAK2uY5sZzFRfJ/0Xjh/ORyrctbLu4zudfHQUO9Kx78jvxJHPO+0zofyCvuJn2kZArSagBOd1C30IS8Bp6r5xFPenAYry1w6v5T3lL1j5DKi94q/4BuCEACjghF45oIATOgKcEAAFnJCDWXyRLrUtG4gf1YBz1z7dajvf9pnIKZ/nlH9jKwBcSyDVDqB1tJ6PdrtxJeD8bNcwd/C53lYnby12kL84FJVZv4WaB/SmRgyz3thvA04I76Cu3jlPASe0z5OkU8AJHcwsHnBChwToJeAEoPssLN1gFr/9KVYDlDWGGWoa0Do6of+aZsmsJ0ZlHZ7//j7JORX+evshrLCK0C87qctps9TXgw9kC4DeNBT/q7ZJhXZF/98MK/ibl6z/iew/1ivGhw58Fg8BUAgCoBAEQCEACkEvPou/bWEGGv2dQm/+utYp0W5Q5E/oi7aTjPL1Dv7KCj8quJbZm4ksTjcaUeqxMqNHll9ROmX5K0pj1pab9W1i+XTcE7G6dOwzP7bdk+hLTPGNAhZHibbyOlLmU9b3cvxmjcs0Y1wUzK3xg5TdJA6hJ1LF4Hxi+ZgB2mM3bcja21iBgFpCHrA2AYNZ9sX2p8tiKVFnldHGy7geL8Nv0bjYOh7gbM7kO+hKm6/+7YqRZD10Kb3S9oPlx6yObWc2L7hnvu0OGz5LeSxfnDd6UJv9jhYFXwQJi8W3mcm7jpWIkSXjK84ZF1UwLlBDkyR7E+0NzgKOa0zAmXNnBKv08Uhlstyjd05fxPKp3EJlwOgJ6BKWzgiMQMRKRD95W9mXlEE4pPMPlH/OGRcZW4k6kCN1sD8ohGUmCKqoPwIMAKJqAhoJz//sAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./assets/images/segimg.jpg":
/*!**********************************!*\
  !*** ./assets/images/segimg.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD83NL8Q3OmyW8V1CL7TvJZYY5yw8rMm8BGUgg7h7g7jkHNQ6hFLdX0h02JNO0uUGTZAW2JG2ThnJLMMZGCTyCOSKfZaRFLpVvcG/twskoidZ22m3bICuO7r1yVBxg+1dfZ6tH4fa/0TR3s7+wXbvmnJjkcrKjswXIYIACcjcAF3jDc11JXWp48pqEr01r+Hr2v+Zna3rWlz+F4bC4t2h1LTYlitZLWJAszeYWYXAyCWVXPzc4IVMHlq5/wtqVrpviLT9Q1ONru0guI5pIVCP5wVgduJFZecEfMpHqDSa9YRLeefp8jSaS2RbtI4aRVyTtcgDL+vA656EVSmWBY0jjzJIBljjj8B+NNt3v2CFOHI4raV/lff0Oit/C8GsKbq0N3dLFC1zNbW6iURRh9oV3H+rPUkFcADOeeNS48YSx6TBorLb3WnFhNtCY2bQyqE5BC5djjIJJyTyc8vZz3lmkiWszB5gYX8pinmFhgqcYyACePei6sX3yPxhYgFGegyoFVfTQydPmlabuuhqS6fHBYx6i8EvlTO8fzNiJtoTLK2MtgsPlxkYJJ5IGR4pu4bpYbe2g+zrGWcsg2RSAnK4XkgjLDJY5BHTnLxLPa3EePnjjlkTy25BBIz+f9KrzNNJcMJXJmiYBAedy9h9Mc/wD66hm9NNO7KDWUi2Kll+buufmA7H9aWx0G81aKd7WLzfIjMj/MAdo64yfmIHOBk4BOMA1dtbVbyzW7Bee+Mjr9nZcIyAAkgg5J+Y/LgcDOT0q94fhvJtYtxC7LdHldpK+VFgmRxjphc8AHgk4qLHQ5tJ23MBG+yQkSQiQnjDDp71PasCz3MqKkUfICjAY9gK3/ABPJceNLi41hWibMzGSSCFYljBy21lUAAjkg/wAQzzlSBZ8H6LrGtTXEunQRLp2nxOtxd3kaNCheN1WM7gQZH5CgfNuORjGQ+XWyM5VVGm5Ssn11OYbVJ7fASTDMN7/N3PP8sUVY1S4g85JEtroeaGYo05Gwh2Xbjbx90cfrRUX8zWKTV+UteIorS0urYLcrN5wMskMSkfZ+SBHnkHGM8E9TnnNX/Dug3utwSanCyQx6ShlN1JIEDhBlVB6lwduAOSOB0FYN1plzbs1u0MiGA5JdCD5bDIbHoev/AAIVo6Hp2oTTSCC0uY4/JfYfLbsN/pznbWq32OeXu09Ja93/AF2KV1r17dWq2f2u5ax8wS+RJKxVmUFQ5GcbsMw9tx9TTLGFo4xcY+dTsj/3vX8KuX2mwKyTROVDZEqbMeSw5Yf1H5dq1PD2nrfanZR3rywac0qB0iUease7DON3yghctlyB+FNJ3FKcYwuloYYmKyNtclYEI3k9WPGfz/lTtpktHkV2DbQD379P0rSvPCd/aWaeYuIpJA3mMCvbgHjg9ePyqlFp88TSbmUBXQlVkBJXBOMe/FFn1BThJXix8eny6vHqItopZGtgLiUjhUTcF3H0G51H4itX/hFb9bUzS2sbfZZPIeaO5RyT8xULtY7uVYZGRx1qza3UOlbbkLDNdXEQkdIwyLHkECKUMBkkDOBwQw54IrNtor6O+XUHjn1C0v1JfzJN8syFyMnGTkMh+bHVAfTNWSMeaUr20Ravo4dPt9NWGwu7W5kZma4I3Osu/hVjIG04VT1zz1xwa3ia+sre2iSMLc3cwVpbpcqyMOGTg4OWXcW57AHGcmowX3hf7LCZJ7Tz2kuBJkwl0LbASueGBjb8eOaR9Ns5NK8x51Gp+eiW9pBESs+4HLg9BghPl77uMYxU9yotR5ZN3XkWfBviKTw/qn26S6GmmGJszwodskgUtEjBep3qrZ65UE8jNVrWWaLwzczQRkXVxexxo0YAfzArFgO55dOh6jntVeFJtH1G2ENydPubKYTLJKSrrKpBDYHzAgjg47V3c3h+1udDhutLvftN1CHvJrN41D2olx5shQkqUQAKMkFtwO0AZpq7VuxnUcIy5rb2/Db+rmp4ZvPA0elJ/wAJMiDUGYlcxuf3fQfdccZDYzyBgEkiivHru7e4upHuPMV87Qs3LKoAAB98Cij2nkhSwXM+b2kl6PQ67Q/GWvR+IJfsur3EFpeW0sIEjloWUxEBHjIKsAVUYKn7o9quNZ6VY6Tdarf6fKL25V0h+zSiGLdlQzYIbcpUuMKVx1yRxXQfDHwqviS8jfWbc24aZGa8jkWLOz5ipD5UEnaCwwFzyCQAJNcs7bVNYTwxYPa2UZkMs2UYqjLG3lMdwLEfMwwAQAenStYxfLdnHVqx9q4Q0ta9uy81/X3nD6bruo29rPbWcdra294nlqnlxzMCvzqQz7mUkgDIxwT2zUepSNBZpCY/JlUbjECxV3LNwSSe38Of4eeal8PN9l8RJiVrS4gP2cyQA7nYnBwpIwT8wPbBx3rr9U8AxrodncMkGlK8sjpby3m1ZUVjgKCcscsVOOwyOuKSTktDac6dKaT0v/X5f0jM8GeJtR0aHV4LS5azXUbcwXiIAIvKZwiq6njkkHPbC1nWumWXkXttqDSLcwxF7c+Vs3MsZPXGGwf8ai1KyaODULp9XhudQlljlZZI5lLqAxY/MgyM44OBway9U1G6MkdnLKJY4WLQtGQ21WIIwVOOBjjqORkdk27JMdOnGU3KOl/lsl/w3oDTDTPJH21Z1QKzLJ/HkZHB+XK9OvYV2OueDRd6PJcWNzDLaQRxzW5mthHIyFFDAAZXIIB5PTccmuMt76zuoreK+tJJG/hmSRYw/OM5wOOMcnt9a2LvWtT0GT7DCqjTnTbFDKpYBTwcMOSD168Uk1Y0lGXNGzs/lqZetapPcX0H2uGzjukgSNiiL8/Gd7lc5c55PHvzmnQwrc3UZZ5LgQxk7wvMRHOOP9o4zjHPTNay+E7CTTzdyPLLNH03uCck5xgYPWrnhvWYdDt7lrWKKBZk8ueWVA0iqGDcMeVJIHKkHBI701HX3jKVRRjakrtfI5i80zUoVFzcRyfaVOGm2EvznBY+vB59upxxjMhjYtE7PJI/loVPO1ep/E4/I128fiC20W7E9iJVltyWlt9iqksRKsuG5J5ZvvL0xgnpVfWbbS9ekm1TS7i306SFQXsthQscgHy15ySW3EDjk4xwKzlFdDrp1ZfaWhxX9q3rAAujgcAzRqxx9SKK2YfB73EMcvnRhHG5PtM6QMVPfa5BI9+hoqOWR0e2oeR6Y3xOSwjjsjHFdRLFG73cJaLcWUMVCOAflJKnORkcE8E5+j3Gu6Br8+pSLb/Zr6B8XF0guIv3i7Q4ODtI3ZB4IxXmCXDf2hvnZpFBwckE7Rx1Oa1LjxNNeG2hmYiCHhIQxKBOy4PsSM9ea3VTW5wPBqK5Ur33Ebfa6lPdLeTNcpIXWZRgsemeemc1tjXZNS1i2S923MflRxsHTHIyQ7LnHBZvUYY8V0et+F7KZrbULJoJLDyP3xB3soGCCPVh6E9hVhrHS/F0aXenRw2V6Io4oHmE28qikSSqDuVjwvU5Bf5RgfLaj5mM68WlJx+fY5W31O7jmv5JGjiO/JtNiNtKn5NysNqkDrjn5enerFrqWi+KdcMl1otrpZuiCo0yV0jBAwflZm2liM9xluABV/WPAEt1pd69pdtLqsTb72FoNibMbhIrKSN2R8yYBG4EZBO3gZLTy1ZvPjd9+7zAxHfB7dc4/WoleOjNaSp1buLs9uq/ryOzh8Dx6LcXZvE+3wXEDrZLHt3mXg7cHocA4xnJx7ilh0HVvGkMNrHJYxR7vLTzitu4YAbQfMIG4+xPQ1d1jRtZ1Lw7pGvakqKlxCxlvLqeNY2jWQxoAqkE/dA2nGSNxGCpPMaRby/29aStLsje4WG3w8bhYySGYhThQAp49c4+7Sdou1tAjzVIuakuZfNXWhZt9A1uTWBpxubdJIztke5vIhGpx13qxUjuGzgjB71n+ItLnt7i4guJ0u0hOTdQvmKXGRkEdjjjIH866Hx74Nj0+4tJdOkkeBCkcgJ3fMW5UnPByT7E55zgGmtnFdatfWdwsttYrLIyTSjyhA27DFSfbqvf680WvoVz8rVS+lui/r7jlNOUusp/d7mBAcuBg/U+9dR4I8GrrdrfXv2mzt5bBo5PLup1AbIY4K8kqCik4B4OD1FVtYsVurwxQrbwQW1uSL1VCxT7EJIJUcuSCoOMk9e5HPabr95ojTyWMvkv0b5QcgnnOR7Co0i9TofPWg/ZuzdjVu5k89mV4rxn+Z55lmdnY9TkAAfTJ+pormpJjcSNIUyWOTtGB+Xaio5jpVPTc09NsJtQRnWCSTtlVJ+vP5D8atL4Zvkt7i9KRFISuQZk3EsTgBM5PQ9BxWj4i0SHS9RGnyXE0Fy8gEhaLdCjcFsOGOVBJ5APCjr1qxZ3Udn9otJrf/iXxMHYlwJpVA+8knIUkE7SMj5hndVpK9mcrqtrmhs/yM/QW1CG9S3sWk/tC7kES23G2VmOAGU8HJPetbxBfajYwQRQai07pCGukjzE0ORlo1VeqgYBYdeM4HXj7/VLvUdWlvZ5ZrmeR9xklYu5x0yfYAD8K6DVtBvNNeWK/jfTry2nCRidhFIobLISDgrjB5PZh6CqUtHYU4JTi52NbRvFv9mSRMLme1NzKBPeRxCQhQql5OWH7zDZ56lQeppIfK17XL5nksomhjLC6SJw8hVx8uMbPMYZwQPTp2pyaaJPD8hvo1eVZPOkuImDKFO75GIO3cWRckc/MvXNRaPq1x4a1RNQiu83rQmSCEbiEOBtO32PKjPVQSMcFX7kcsbNw3B/El7fxX7TXstvp8jqz2cb/uRHywUg8MQypjIPPPU1oeF9d0e6uby/vNHjtE8o28bWMrqvmshWI4ckZVirHHUAjHJNc3eeImvNMm03U7KCJ0uSxuoYRFcFiACshA+YDbnpnLE5Nad5pcmmtptpO32eysYY72SZdu6QuN8YUjIJIPvtyw524pXd7ouUI8vLLS/Z9NP+AVHjudKDz6XfL9nmztmU+UWz97LMx2ntjIPtViazudavle7tp5bp4441nZGOW2DhsDJ56N1HQ56iDR9VsmuUF7ZCDSnkXzo7d33SoD0VWJBwM88Y9QaZdaxEq313a25sp451TyGkDxhWLHBwoLEFRjcSPaka+83tr3Oih0O78L+HZ31WK1jeVZhHazyK5VnTy0l+U5Xo4zkDITd2zxVvcWn7+K9sn+6VDQv5bhhyB827PSt21jiju7uS7uylmsawFmjMheYAB0IOMnJc5z/FnqRUV5oc+n2kuoW0I1DSopI4obkhiqSNlwhbgA7VY4PJGDgcgD8iadldSer+Rf8ADNh4PfTd2q3OoWdwzkqkYRwUwMHJK989u1FR/wBgwz483xRp+mOnym0k85jHznAMaFSOc8HPPPOaKpN9jCUYybfPL8f8jHtZ2muprqWdrUqA7spIOzAIRfc4B/Cp9N8SWmpBdP1aWaDTGZiJrWBGmjIRtijJXKF2BYE+pHPXDa8a4Z8oWQD5Szcg5Bz+lQyQrGyqAHHUbD6/Wsebsd/sYy33/I3tPuptBl+1QXTWk20rA1sx8yTOVIJ7AjcCD19CKseJNd+1afpsarZG5cNKxjXdJG33PLfP+4WA6fP2zirktnpup2Wj2kd1Do2qLass8t00kiyymRyu3Yh2ZQoO+TzkA8YFpoaJqMNrJciHziUS6jTzY9+CFG7IGCwAJGcDJwcYOl2lZHPFQlLnktV+Wv8Aw5dsfGOs6asi299JbqzIbiFQNkgQnYzJjBK5PUdD9a1rWSDxItzezzpYahE7LLb2zC3ikBV3aRQF2pyB8owPm+UADAxtU0mDStQWw+2LcalCp+0bVHll8nCowJ8wFdvOBySACBk6Hh++t7Cyu7a702C7hulw0khdZYiFIG0qf9rkEHO2mm72ZFSMOXnprXyNuXT9J8S3UUl9d+XcSEzzT2+LqXnudpG7Jz/DkcfN2p3xC8O6R4R0vR7NNZ/trUZ4BdTeRE32WNnAKgufmZ/L8slCihd3U1g6lIkcj2kMz2qyOsX2eRMAbflGdg5IPIO3nPtU+vMtrfizRo7uEQRtthMc54ijXA7j5UUHGDkH0rS6s9DmjCSnF8z5Vd2/4NvM5z7HcGOS6O6eQDI2EMAB3OOgFdVpfh2yktbW71x2sLHUDFM0/XCqWV2IAJy3zFeMnrzxmLQ9Lv7idrqw01IntC01zIqMRFAo3ZBcnYRtOTwQSuDUWo3D+IrpjdXn22edFje73MTuwPvZ54Ybh6/MO/y52tqdUpOb5U7fmVvFtraadfJFHfwahZTRJOjWpIBZhuYsCAVbJ+uAAazj9ruNPMTXKxwEhlRXwjgE8hfbJ7cEmmyW5ttQMV0hhSGNVkSQcqyqFIA9dwIrR0/UIbe+nurYC10xklUeaBNJCroy7CSBuyDjIC56/LjiN2bWcYpLVr+vvMK7guFkVlVBuUE7sHJHGf0oroLqLTLFkSJpHRkWQC4QKV3DJUYJyAe//wCslTy+ZSraaROPhXc2CTjd6+1dt4T1ZI9asLb+zNOka4injlnnthM7Bt2CA+VVl2jaygEetFFOn1FjPhS9fyZy2oSM90krH52jjfgAAEADgDoMCtaBSupxyJJJG9zbTNIUcgsdsik598Z+pNFFSby2XoR6/bq3iAuxJZvKJJPfYvNaGn3sl5YrHKEZ/tEhabaPMfKJwzdSBjgdtx9aKK0juc1X+HEv/DnT4/FHxM0OzvWYxPcMh24ziNSyjkH0FcZqch+1SDP3juPuTzRRQ/h+f+Qqf8dr+6vzkdT4HuJ/LuLNbiZLe5KeaiuQGwrkcdODyD1BGRirU+h2+m7WiLmUQTzmViNzbCAEbAwVOcnIz70UU/son/l7L5fkWPFNjFqlx4dZ18lrnT4WlaLgsckZ5zyFwPwyckknmdK1OS51OHT2SMWMkqwtbqvykE4ye5bvnORRRSl8QUdaOvS5d8UD+x/EmqWMPzw21zJDH5nJ2qxAHHsKKKKT3HD4Uf/Z"

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/classnames/index.js from dll-reference utility ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference utility */ "dll-reference utility"))("./node_modules/classnames/index.js");

/***/ }),

/***/ "./node_modules/history/es/DOMUtils.js":
/*!*********************************************!*\
  !*** ./node_modules/history/es/DOMUtils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "./node_modules/history/es/LocationUtils.js":
/*!**************************************************!*\
  !*** ./node_modules/history/es/LocationUtils.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationsAreEqual = exports.createLocation = undefined;

var _resolvePathname = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/index.js");

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/index.js");

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/es/PathUtils.js":
/*!**********************************************!*\
  !*** ./node_modules/history/es/PathUtils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;

  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "./node_modules/history/es/createBrowserHistory.js":
/*!*********************************************************!*\
  !*** ./node_modules/history/es/createBrowserHistory.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/history/es/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ "./node_modules/history/es/DOMUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;

    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),

/***/ "./node_modules/history/es/createHashHistory.js":
/*!******************************************************!*\
  !*** ./node_modules/history/es/createHashHistory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/history/es/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ "./node_modules/history/es/DOMUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),

/***/ "./node_modules/history/es/createMemoryHistory.js":
/*!********************************************************!*\
  !*** ./node_modules/history/es/createMemoryHistory.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/history/es/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/history/es/createTransitionManager.js":
/*!************************************************************!*\
  !*** ./node_modules/history/es/createTransitionManager.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),

/***/ "./node_modules/history/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/history/es/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");

Object.defineProperty(exports, 'createLocation', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.createLocation;
  }
});
Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");

Object.defineProperty(exports, 'parsePath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.parsePath;
  }
});
Object.defineProperty(exports, 'createPath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.createPath;
  }
});

var _createBrowserHistory2 = __webpack_require__(/*! ./createBrowserHistory */ "./node_modules/history/es/createBrowserHistory.js");

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createHashHistory2 = __webpack_require__(/*! ./createHashHistory */ "./node_modules/history/es/createHashHistory.js");

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = __webpack_require__(/*! ./createMemoryHistory */ "./node_modules/history/es/createMemoryHistory.js");

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createBrowserHistory = _createBrowserHistory3.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!*********************************************************************************************************************!*\
  !*** delegated ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js from dll-reference react ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!******************************************************************************!*\
  !*** delegated ./node_modules/invariant/browser.js from dll-reference react ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/invariant/browser.js");

/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isarray = __webpack_require__(/*! isarray */ "./node_modules/path-to-regexp/node_modules/isarray/index.js");

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

/***/ }),

/***/ "./node_modules/path-to-regexp/node_modules/isarray/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/path-to-regexp/node_modules/isarray/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference react ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/prop-types/index.js");

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

/***/ "./node_modules/react-router-dom/es/BrowserRouter.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-router-dom/es/BrowserRouter.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/es/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createBrowserHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(_react2.default.Component);

BrowserRouter.propTypes = {
  basename: _propTypes2.default.string,
  forceRefresh: _propTypes2.default.bool,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};

exports.default = BrowserRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/es/HashRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/es/HashRouter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/es/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createHashHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(_react2.default.Component);

HashRouter.propTypes = {
  basename: _propTypes2.default.string,
  getUserConfirmation: _propTypes2.default.func,
  hashType: _propTypes2.default.oneOf(["hashbang", "noslash", "slash"]),
  children: _propTypes2.default.node
};

exports.default = HashRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/es/Link.js":
/*!**************************************************!*\
  !*** ./node_modules/react-router-dom/es/Link.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _history = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;

          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    (0, _invariant2.default)(this.context.router, "You should not use <Link> outside a <Router>");

    (0, _invariant2.default)(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? (0, _history.createLocation)(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return _react2.default.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(_react2.default.Component);

Link.propTypes = {
  onClick: _propTypes2.default.func,
  target: _propTypes2.default.string,
  replace: _propTypes2.default.bool,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired,
      createHref: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};

exports.default = Link;

/***/ }),

/***/ "./node_modules/react-router-dom/es/MemoryRouter.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/MemoryRouter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MemoryRouter = __webpack_require__(/*! react-router/es/MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");

var _MemoryRouter2 = _interopRequireDefault(_MemoryRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MemoryRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/es/NavLink.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/es/NavLink.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Route = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/es/Route.js");

var _Route2 = _interopRequireDefault(_Route);

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/es/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return _react2.default.createElement(_Route2.default, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return _react2.default.createElement(_Link2.default, _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link2.default.propTypes.to,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  location: _propTypes2.default.object,
  activeClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  isActive: _propTypes2.default.func,
  "aria-current": _propTypes2.default.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

exports.default = NavLink;

/***/ }),

/***/ "./node_modules/react-router-dom/es/Prompt.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Prompt.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Prompt = __webpack_require__(/*! react-router/es/Prompt */ "./node_modules/react-router/es/Prompt.js");

var _Prompt2 = _interopRequireDefault(_Prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Prompt2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/es/Redirect.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router-dom/es/Redirect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Redirect = __webpack_require__(/*! react-router/es/Redirect */ "./node_modules/react-router/es/Redirect.js");

var _Redirect2 = _interopRequireDefault(_Redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Redirect2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/es/Route.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/Route.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Route = __webpack_require__(/*! react-router/es/Route */ "./node_modules/react-router/es/Route.js");

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Route2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/es/Router.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Router.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Router = __webpack_require__(/*! react-router/es/Router */ "./node_modules/react-router/es/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Router2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/es/StaticRouter.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/StaticRouter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StaticRouter = __webpack_require__(/*! react-router/es/StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/es/Switch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Switch.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Switch = __webpack_require__(/*! react-router/es/Switch */ "./node_modules/react-router/es/Switch.js");

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/es/generatePath.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/generatePath.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generatePath = __webpack_require__(/*! react-router/es/generatePath */ "./node_modules/react-router/es/generatePath.js");

var _generatePath2 = _interopRequireDefault(_generatePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _generatePath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouter = exports.matchPath = exports.generatePath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

var _BrowserRouter2 = __webpack_require__(/*! ./BrowserRouter */ "./node_modules/react-router-dom/es/BrowserRouter.js");

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _HashRouter2 = __webpack_require__(/*! ./HashRouter */ "./node_modules/react-router-dom/es/HashRouter.js");

var _HashRouter3 = _interopRequireDefault(_HashRouter2);

var _Link2 = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/es/Link.js");

var _Link3 = _interopRequireDefault(_Link2);

var _MemoryRouter2 = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router-dom/es/MemoryRouter.js");

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _NavLink2 = __webpack_require__(/*! ./NavLink */ "./node_modules/react-router-dom/es/NavLink.js");

var _NavLink3 = _interopRequireDefault(_NavLink2);

var _Prompt2 = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router-dom/es/Prompt.js");

var _Prompt3 = _interopRequireDefault(_Prompt2);

var _Redirect2 = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router-dom/es/Redirect.js");

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/es/Route.js");

var _Route3 = _interopRequireDefault(_Route2);

var _Router2 = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/es/Router.js");

var _Router3 = _interopRequireDefault(_Router2);

var _StaticRouter2 = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router-dom/es/StaticRouter.js");

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _Switch2 = __webpack_require__(/*! ./Switch */ "./node_modules/react-router-dom/es/Switch.js");

var _Switch3 = _interopRequireDefault(_Switch2);

var _generatePath2 = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router-dom/es/generatePath.js");

var _generatePath3 = _interopRequireDefault(_generatePath2);

var _matchPath2 = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/es/matchPath.js");

var _matchPath3 = _interopRequireDefault(_matchPath2);

var _withRouter2 = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router-dom/es/withRouter.js");

var _withRouter3 = _interopRequireDefault(_withRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrowserRouter = _BrowserRouter3.default;
exports.HashRouter = _HashRouter3.default;
exports.Link = _Link3.default;
exports.MemoryRouter = _MemoryRouter3.default;
exports.NavLink = _NavLink3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.generatePath = _generatePath3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;

/***/ }),

/***/ "./node_modules/react-router-dom/es/matchPath.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/es/matchPath.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _matchPath = __webpack_require__(/*! react-router/es/matchPath */ "./node_modules/react-router/es/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/es/withRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/es/withRouter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withRouter = __webpack_require__(/*! react-router/es/withRouter */ "./node_modules/react-router/es/withRouter.js");

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _withRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/warning/warning.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/warning/warning.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/react-router/es/MemoryRouter.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/es/MemoryRouter.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createMemoryHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(_react2.default.Component);

MemoryRouter.propTypes = {
  initialEntries: _propTypes2.default.array,
  initialIndex: _propTypes2.default.number,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};

exports.default = MemoryRouter;

/***/ }),

/***/ "./node_modules/react-router/es/Prompt.js":
/*!************************************************!*\
  !*** ./node_modules/react-router/es/Prompt.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(_react2.default.Component);

Prompt.propTypes = {
  when: _propTypes2.default.bool,
  message: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      block: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};

exports.default = Prompt;

/***/ }),

/***/ "./node_modules/react-router/es/Redirect.js":
/*!**************************************************!*\
  !*** ./node_modules/react-router/es/Redirect.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _history = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");

var _generatePath = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");

var _generatePath2 = _interopRequireDefault(_generatePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = (0, _history.createLocation)(prevProps.to);
    var nextTo = (0, _history.createLocation)(this.props.to);

    if ((0, _history.locationsAreEqual)(prevTo, nextTo)) {
      (0, _warning2.default)(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return (0, _generatePath2.default)(to, computedMatch.params);
      } else {
        return _extends({}, to, {
          pathname: (0, _generatePath2.default)(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(_react2.default.Component);

Redirect.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  push: _propTypes2.default.bool,
  from: _propTypes2.default.string,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired
    }).isRequired,
    staticContext: _propTypes2.default.object
  }).isRequired
};

exports.default = Redirect;

/***/ }),

/***/ "./node_modules/react-router/es/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/Route.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _matchPath = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var isEmptyChildren = function isEmptyChildren(children) {
  return _react2.default.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    (0, _invariant2.default)(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    (0, _warning2.default)(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    (0, _warning2.default)(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? _react2.default.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children)) return _react2.default.Children.only(children);

    return null;
  };

  return Route;
}(_react2.default.Component);

Route.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  path: _propTypes2.default.string,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  sensitive: _propTypes2.default.bool,
  component: _propTypes2.default.func,
  render: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  location: _propTypes2.default.object
};
Route.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.object.isRequired,
    route: _propTypes2.default.object.isRequired,
    staticContext: _propTypes2.default.object
  })
};
Route.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = Route;

/***/ }),

/***/ "./node_modules/react-router/es/Router.js":
/*!************************************************!*\
  !*** ./node_modules/react-router/es/Router.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;

    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? _react2.default.Children.only(children) : null;
  };

  return Router;
}(_react2.default.Component);

Router.propTypes = {
  history: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};
Router.contextTypes = {
  router: _propTypes2.default.object
};
Router.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = Router;

/***/ }),

/***/ "./node_modules/react-router/es/StaticRouter.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/es/StaticRouter.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createURL = function createURL(location) {
  return typeof location === "string" ? location : (0, _history.createPath)(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    (0, _invariant2.default)(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return addLeadingSlash(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, (0, _history.createLocation)(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, (0, _history.createLocation)(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: stripBasename(basename, (0, _history.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(_react2.default.Component);

StaticRouter.propTypes = {
  basename: _propTypes2.default.string,
  context: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = StaticRouter;

/***/ }),

/***/ "./node_modules/react-router/es/Switch.js":
/*!************************************************!*\
  !*** ./node_modules/react-router/es/Switch.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _matchPath = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    _react2.default.Children.forEach(children, function (element) {
      if (match == null && _react2.default.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(_react2.default.Component);

Switch.contextTypes = {
  router: _propTypes2.default.shape({
    route: _propTypes2.default.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: _propTypes2.default.node,
  location: _propTypes2.default.object
};

exports.default = Switch;

/***/ }),

/***/ "./node_modules/react-router/es/generatePath.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/es/generatePath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = _pathToRegexp2.default.compile(pattern);

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledGenerator;
    cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = compileGenerator(pattern);
  return generator(params, { pretty: true });
};

exports.default = generatePath;

/***/ }),

/***/ "./node_modules/react-router/es/matchPath.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router/es/matchPath.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

  if (path == null) return parent;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

exports.default = matchPath;

/***/ }),

/***/ "./node_modules/react-router/es/withRouter.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router/es/withRouter.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _Route = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);

    return _react2.default.createElement(_Route2.default, {
      children: function children(routeComponentProps) {
        return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: _propTypes2.default.func
  };

  return (0, _hoistNonReactStatics2.default)(C, Component);
};

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/react-router/node_modules/warning/warning.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-router/node_modules/warning/warning.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

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

/***/ "./node_modules/resolve-pathname/index.js":
/*!************************************************!*\
  !*** ./node_modules/resolve-pathname/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

exports.default = resolvePathname;

/***/ }),

/***/ "./node_modules/value-equal/index.js":
/*!*******************************************!*\
  !*** ./node_modules/value-equal/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

exports.default = valueEqual;

/***/ }),

/***/ "./node_modules/velocity-animate/velocity.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/velocity-animate/velocity.js from dll-reference utility ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference utility */ "dll-reference utility"))("./node_modules/velocity-animate/velocity.js");

/***/ }),

/***/ "./node_modules/warning/browser.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/warning/browser.js from dll-reference react ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference react */ "dll-reference react"))("./node_modules/warning/browser.js");

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

var _types = __webpack_require__(/*! ./constants/types */ "./src/constants/types/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

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
    review: state.review
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

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(stateMap, propMap)(App));

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Jaison.Jacob on 7/9/2018.
 */
var Root = function Root() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store.store },
    _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(_App2.default, null)
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById('root'));

/***/ }),

/***/ "./src/actions/iapply.js":
/*!*******************************!*\
  !*** ./src/actions/iapply.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _types = __webpack_require__(/*! ../constants/types */ "./src/constants/types/index.js");

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
// import * as landingActions from './landing';
// import * as sidebarActions from './sidebar';


var _iapply = __webpack_require__(/*! ./iapply */ "./src/actions/iapply.js");

var iapplyActions = _interopRequireWildcard(_iapply);

var _home = __webpack_require__(/*! ./testControl/home */ "./src/actions/testControl/home.js");

var testControlActions = _interopRequireWildcard(_home);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = _extends({}, iapplyActions, testControlActions);

/***/ }),

/***/ "./src/actions/testControl/home.js":
/*!*****************************************!*\
  !*** ./src/actions/testControl/home.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types/index.js");

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

function addTestControlProgram(name, desc) {
  return function (dispatch) {
    var id = getId();
    dispatch({ type: _types.TC_ADD_PROGRAM, content: { id: id, title: name, desc: desc, view: 'test' } });
  };
}

function deleteTcProgram() {
  return function (dispatch, getState) {
    var state = getState();
    var _state$review$test$pr = state.review.test.program,
        programs = _state$review$test$pr.programs,
        activeProgram = _state$review$test$pr.activeProgram;


    var pIdx = programs.map(function (x) {
      return x.id;
    }).indexOf(activeProgram);
    // const lIdx = state.nav.landingMenu.content.map(x => x.id).indexOf(activeProgram);

    dispatch({ type: _types.TC_REMOVE_PROGRAM, idx: pIdx });
    // // remove item from  landing menu as well
    // dispatch({ type: REMOVE_LANDING_MENU, idx: lIdx });

    // // reset landing menu to default and set to initial disabled state
    // if (state.nav.landingMenu.content.length === 1) {
    //   dispatch({ type: SET_LANDING_MENU, content: { content: [initialTestControlMenu], context: TC } });
    // }

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
  addTestControlProgram: addTestControlProgram,
  deleteTcProgram: deleteTcProgram,
  initializeTc: initializeTc,
  setProgramView: setProgramView
};

/***/ }),

/***/ "./src/components/Empty/index.jsx":
/*!****************************************!*\
  !*** ./src/components/Empty/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyComponent = function EmptyComponent(_ref) {
  var location = _ref.location;

  return _react2.default.createElement(
    'h3',
    null,
    location.pathname.replace('/', '')
  );
};
module.exports = (0, _reactRouterDom.withRouter)(EmptyComponent);

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
  return _react2.default.createElement(
    'div',
    { className: 'main-container' },
    _react2.default.createElement(SideBarWrapper, props),
    _react2.default.createElement(_Landing2.default, props)
  );
};

var SideBarWrapper = function SideBarWrapper(props) {
  var nav = props.nav;
  var displaySideBar = nav.displaySideBar;

  return _react2.default.createElement(
    _reactTransitionGroup.Transition,
    { 'in': displaySideBar, timeout: 250 },
    function (status) {
      return _react2.default.createElement(_Sidebar2.default, _extends({ status: status }, props));
    }
  );
};
exports.default = MainContainer;

/***/ }),

/***/ "./src/components/Review/Home.jsx":
/*!****************************************!*\
  !*** ./src/components/Review/Home.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _accordian = __webpack_require__(/*! ../ui/accordian */ "./src/components/ui/accordian/index.jsx");

var _accordian2 = _interopRequireDefault(_accordian);

var _reviewData = __webpack_require__(/*! ./reviewData */ "./src/components/Review/reviewData.js");

var _reviewData2 = _interopRequireDefault(_reviewData);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _links = __webpack_require__(/*! ../../constants/links */ "./src/constants/links.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            var img = __webpack_require__(/*! ../../../assets/images/segimg.jpg */ "./assets/images/segimg.jpg");
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement('i', { className: 'fa fa-project-diagram text-c-green d-block f-40 m-l-20' }),
                    _react2.default.createElement(
                        'h4',
                        { className: 'm-l-20', style: { lineHeight: '40px' } },
                        'Review'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'm-t-25' },
                    _reviewData2.default.map(function (row, rIdx) {
                        return _react2.default.createElement(
                            _accordian2.default,
                            { title: row.title, key: rIdx },
                            _react2.default.createElement(
                                'div',
                                { className: 'card' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card-block' },
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'feed-blog' },
                                        row.content.map(function (content, cIdx) {
                                            return _react2.default.createElement(
                                                'li',
                                                { className: 'active-feed', key: cIdx },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'feed-user-img' },
                                                    _react2.default.createElement('img', { alt: content.title, src: img, className: 'img-radius' })
                                                ),
                                                _react2.default.createElement(
                                                    'h6',
                                                    { className: 'm-b-0' },
                                                    content.title
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'text-muted m-b-15 m-t-5 small' },
                                                    content.desc
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'row' },
                                                    _react2.default.createElement(
                                                        _reactRouterDom.Link,
                                                        { className: 'col-auto', to: _links.reviewTestPath },
                                                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'col-auto' },
                                                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'col-auto' },
                                                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                                                    )
                                                )
                                            );
                                        })
                                    )
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),

/***/ "./src/components/Review/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Review/index.jsx ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _links = __webpack_require__(/*! ../../constants/links */ "./src/constants/links.js");

var _test = __webpack_require__(/*! ./test */ "./src/components/Review/test/index.jsx");

var _test2 = _interopRequireDefault(_test);

var _Home = __webpack_require__(/*! ./Home */ "./src/components/Review/Home.jsx");

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _links.reviewPath, render: function render(p) {
                        return _react2.default.createElement(_Home2.default, null);
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { path: _links.reviewTestPath, render: function render(p) {
                        return _react2.default.createElement(_test2.default, _this2.props);
                    } })
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;

/***/ }),

/***/ "./src/components/Review/reviewData.js":
/*!*********************************************!*\
  !*** ./src/components/Review/reviewData.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
    title: 'Marketing Effectiveness',
    content: [{
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Consumer Pathway',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}, {
    title: 'Digital Media Effectiveness',
    content: [{
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Consumer Pathway',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}, {
    title: 'Pricing Effectiveness',
    content: [{
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Consumer Pathway',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}, {
    title: 'Trade Promotion Optimization',
    content: [{
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Consumer Pathway',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}, {
    title: 'Market Testing',
    content: [{
        title: 'Test to Know',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'New Product Launch',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}, {
    title: 'Assortment & Space Analytics',
    content: [{
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Consumer Pathway',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}, {
    title: 'Customer Analytics',
    content: [{
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Consumer Pathway',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}, {
    title: 'Employee Engagement Analytics',
    content: [{
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Consumer Pathway',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}, {
    title: 'Operations Analytics',
    content: [{
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Consumer Pathway',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}, {
    title: 'Supply Chain Analytics',
    content: [{
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Consumer Pathway',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}, {
    title: 'Custom Reports',
    content: [{
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Consumer Pathway',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        title: 'Digital Media ROI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
}];

/***/ }),

/***/ "./src/components/Review/test/DeleteProgramModal.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Review/test/DeleteProgramModal.jsx ***!
  \***********************************************************/
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

_reactModal2.default.defaultStyles.overlay.backgroundColor = 'rgba(111, 111, 111, 0.75)';
_reactModal2.default.defaultStyles.overlay.zIndex = '1000';

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
          { style: { marginTop: '20px' } },
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
          { style: { float: 'right' } },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary btn-sm', onClick: this.handleYes },
            'Yes'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-link btn-sm', onClick: this.handleClose },
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

/***/ "./src/components/Review/test/NewProgram.jsx":
/*!***************************************************!*\
  !*** ./src/components/Review/test/NewProgram.jsx ***!
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

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");

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
                { type: 'button', className: 'btn btn-link btn-sm', onClick: this.onCancel },
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
      dispatch((0, _actions.addTestControlProgram)(name, desc));
    }
  };
}
exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, actions)(NewProgram);

/***/ }),

/***/ "./src/components/Review/test/Program.jsx":
/*!************************************************!*\
  !*** ./src/components/Review/test/Program.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _tests = __webpack_require__(/*! ./subContainers/tests */ "./src/components/Review/test/subContainers/tests/index.jsx");

var _tests2 = _interopRequireDefault(_tests);

var _measures = __webpack_require__(/*! ./subContainers/measures */ "./src/components/Review/test/subContainers/measures/index.jsx");

var _measures2 = _interopRequireDefault(_measures);

var _util = __webpack_require__(/*! ../../../util */ "./src/util/index.js");

var _tabs = __webpack_require__(/*! ../../ui/tabs */ "./src/components/ui/tabs/index.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _DeleteProgramModal = __webpack_require__(/*! ./DeleteProgramModal */ "./src/components/Review/test/DeleteProgramModal.jsx");

var _DeleteProgramModal2 = _interopRequireDefault(_DeleteProgramModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getTabsFromArr = function getTabsFromArr(items) {
  if (items.length === 0) return [{ id: -1, name: 'Program' }];

  return items.map(function (x) {
    return { id: x.id, name: x.title };
  });
};

var Program = function (_Component) {
  _inherits(Program, _Component);

  function Program() {
    _classCallCheck(this, Program);

    var _this = _possibleConstructorReturn(this, (Program.__proto__ || Object.getPrototypeOf(Program)).call(this));

    _this.handleSelectedTab = _this.handleSelectedTab.bind(_this);
    // this.handleTabAdd = this.handleTabAdd.bind(this);
    return _this;
  }

  _createClass(Program, [{
    key: 'renderSubview',
    value: function renderSubview(selectedProgram) {
      if (!selectedProgram) return _react2.default.createElement(_tests2.default, this.props);

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
    key: 'handleSelectedTab',
    value: function handleSelectedTab(item) {
      this.props.setActiveProgram(item.id);
    }
    // handleTabAdd() {
    //   this.props.addNewTest();
    // }

  }, {
    key: 'renderDeleteModal',
    value: function renderDeleteModal() {
      console.log(this.props);
      var _props = this.props,
          showDeleteProgram = _props.showDeleteProgram,
          program = _props.program;
      var programs = program.programs,
          activeProgram = program.activeProgram;


      var selectedProg = (0, _util.getObjFromArr)(programs, activeProgram);

      if (selectedProg === null) return null;

      return _react2.default.createElement(_DeleteProgramModal2.default, {
        isModalOpen: showDeleteProgram,
        title: selectedProg && selectedProg.title ? selectedProg.title : '',
        handleCloseModal: this.props.handleCloseDeleteModal,
        handleDelete: this.props.handleTestProgramDelete
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$program = this.props.program,
          programs = _props$program.programs,
          activeProgram = _props$program.activeProgram;

      var selectedProgram = (0, _util.getObjFromArr)(programs, activeProgram);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _tabs2.default,
          {
            items: getTabsFromArr(programs),
            active: activeProgram,
            handleSelected: this.handleSelectedTab
          },
          _react2.default.createElement(
            'div',
            { style: { position: 'absolute', right: '0px', fontSize: '15px' } },
            _react2.default.createElement('i', { className: 'fa fa-file m-10', onClick: this.props.addNewTest }),
            activeProgram !== -1 && _react2.default.createElement('i', { className: 'fa fa-times m-10', onClick: this.props.displayDeleteModelWindow })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card m-t-20 p-20' },
          this.renderSubview(selectedProgram)
        ),
        this.renderDeleteModal()
      );
    }
  }]);

  return Program;
}(_react.Component);

exports.default = Program;

/***/ }),

/***/ "./src/components/Review/test/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/Review/test/index.jsx ***!
  \**********************************************/
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

var _NewProgram = __webpack_require__(/*! ./NewProgram */ "./src/components/Review/test/NewProgram.jsx");

var _NewProgram2 = _interopRequireDefault(_NewProgram);

var _DeleteProgramModal = __webpack_require__(/*! ./DeleteProgramModal */ "./src/components/Review/test/DeleteProgramModal.jsx");

var _DeleteProgramModal2 = _interopRequireDefault(_DeleteProgramModal);

var _Program = __webpack_require__(/*! ./Program */ "./src/components/Review/test/Program.jsx");

var _Program2 = _interopRequireDefault(_Program);

var _util = __webpack_require__(/*! ../../../util */ "./src/util/index.js");

var _tabs = __webpack_require__(/*! ../../ui/tabs */ "./src/components/ui/tabs/index.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _types = __webpack_require__(/*! ../../../constants/types */ "./src/constants/types/index.js");

var _actions = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WelcomeMessage = function WelcomeMessage(props) {
  return _react2.default.createElement(
    'div',
    { className: 'title-content-font', style: { fontSize: '50px' } },
    'Add your first test to review by clicking ',
    _react2.default.createElement(
      'a',
      { onClick: function onClick() {
          return props.handleClicked();
        } },
      'here'
    )
  );
};

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.setActiveProgram = _this.setActiveProgram.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'setActiveProgram',
    value: function setActiveProgram(id) {
      this.props.setActiveTestProgram(id);
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props);
      var review = this.props.review;
      var test = review.test;


      switch (test.view) {
        case 'new':
          return _react2.default.createElement(_NewProgram2.default, review);
        default:
          return _react2.default.createElement(_Program2.default, _extends({}, test, {
            addNewTest: this.props.changingViewToNew,
            setActiveProgram: this.setActiveProgram,
            handleCloseDeleteModal: this.props.handleCloseDeleteModal,
            handleTestProgramDelete: this.props.handleTestProgramDelete,
            displayDeleteModelWindow: this.props.displayDeleteModelWindow
          }));
      }
    }
  }]);

  return Index;
}(_react.Component);

function actions(dispatch) {
  return {
    changingViewToNew: function changingViewToNew() {
      return dispatch({ type: _types.TC_SET_VIEW, content: 'new' });
    },
    setActiveTestProgram: function setActiveTestProgram(id) {
      return dispatch({ type: _types.TC_SET_ACTIVE_PROGRAM, content: id });
    },
    handleCloseDeleteModal: function handleCloseDeleteModal() {
      return dispatch({ type: _types.TC_HIDE_DELETE_MODAL });
    },
    handleTestProgramDelete: function handleTestProgramDelete() {
      return dispatch((0, _actions.deleteTcProgram)());
    },
    displayDeleteModelWindow: function displayDeleteModelWindow() {
      return dispatch({ type: _types.TC_SHOW_DELETE_MODAL });
    }
  };
}
exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, actions)(Index);

/***/ }),

/***/ "./src/components/Review/test/subContainers/measures/Container.jsx":
/*!*************************************************************************!*\
  !*** ./src/components/Review/test/subContainers/measures/Container.jsx ***!
  \*************************************************************************/
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

/***/ "./src/components/Review/test/subContainers/measures/index.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/Review/test/subContainers/measures/index.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Container = __webpack_require__(/*! ./Container */ "./src/components/Review/test/subContainers/measures/Container.jsx");

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_Container2.default, props);
};

/***/ }),

/***/ "./src/components/Review/test/subContainers/tests/Container.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/Review/test/subContainers/tests/Container.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(/*! ./Tabs */ "./src/components/Review/test/subContainers/tests/Tabs.jsx");

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var activeProgram = this.props.program.activeProgram;

      return _react2.default.createElement(
        'div',
        { className: 'test-control' },
        _react2.default.createElement(
          'div',
          { className: 'row spacedRow' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-12' },
            _react2.default.createElement(
              'h5',
              { style: { marginBottom: '0px' } },
              'Tests (0)'
            ),
            activeProgram !== -1 && _react2.default.createElement(
              'div',
              { style: { position: 'absolute', right: '0', top: '5px', fontSize: '15px' } },
              _react2.default.createElement(
                'span',
                { style: { margin: '10px' } },
                _react2.default.createElement('i', { className: 'fa fa-plus' })
              ),
              _react2.default.createElement(
                'span',
                { style: { margin: '10px' } },
                _react2.default.createElement('i', { className: 'fa fa-copy' })
              ),
              _react2.default.createElement(
                'span',
                { style: { margin: '10px' } },
                _react2.default.createElement('i', { className: 'fa fa-times', title: 'Delete program' })
              ),
              _react2.default.createElement(
                'span',
                { style: { margin: '10px' } },
                _react2.default.createElement('i', { className: 'fa fa-ellipsis-h' })
              )
            )
          )
        ),
        _react2.default.createElement(_Tabs2.default, this.props)
      );
    }
  }]);

  return Container;
}(_react2.default.Component);

exports.default = Container;

/***/ }),

/***/ "./src/components/Review/test/subContainers/tests/Tabs.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Review/test/subContainers/tests/Tabs.jsx ***!
  \*****************************************************************/
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

var _Table = __webpack_require__(/*! ./table/Table */ "./src/components/Review/test/subContainers/tests/table/Table.jsx");

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
          return _react2.default.createElement(_Table2.default, this.props);
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

/***/ "./src/components/Review/test/subContainers/tests/index.jsx":
/*!******************************************************************!*\
  !*** ./src/components/Review/test/subContainers/tests/index.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Container = __webpack_require__(/*! ./Container */ "./src/components/Review/test/subContainers/tests/Container.jsx");

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_Container2.default, props);
};

/***/ }),

/***/ "./src/components/Review/test/subContainers/tests/table/Table.jsx":
/*!************************************************************************!*\
  !*** ./src/components/Review/test/subContainers/tests/table/Table.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _TableHeader = __webpack_require__(/*! ./TableHeader */ "./src/components/Review/test/subContainers/tests/table/TableHeader.jsx");

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableFooter = __webpack_require__(/*! ./TableFooter */ "./src/components/Review/test/subContainers/tests/table/TableFooter.jsx");

var _TableFooter2 = _interopRequireDefault(_TableFooter);

var _TableBody = __webpack_require__(/*! ./TableBody */ "./src/components/Review/test/subContainers/tests/table/TableBody.jsx");

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
        _react2.default.createElement(_TableBody2.default, this.props),
        _react2.default.createElement(_TableFooter2.default, null)
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

exports.default = Table;

/***/ }),

/***/ "./src/components/Review/test/subContainers/tests/table/TableBody.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/Review/test/subContainers/tests/table/TableBody.jsx ***!
  \****************************************************************************/
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
    key: "renderBody",
    value: function renderBody() {
      var activeProgram = this.props.program.activeProgram;


      if (activeProgram === -1) return null;

      return _react2.default.createElement(
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
          )
        )
      );
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-xs-12 col-sm-12", style: { overflow: 'auto' } },
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
                )
              )
            ),
            this.renderBody(),
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

/***/ "./src/components/Review/test/subContainers/tests/table/TableFooter.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/Review/test/subContainers/tests/table/TableFooter.jsx ***!
  \******************************************************************************/
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

/***/ "./src/components/Review/test/subContainers/tests/table/TableHeader.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/Review/test/subContainers/tests/table/TableHeader.jsx ***!
  \******************************************************************************/
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
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ "./src/components/home/HomeContainer.jsx":
/*!***********************************************!*\
  !*** ./src/components/home/HomeContainer.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _aboutEai = __webpack_require__(/*! ./aboutEai */ "./src/components/home/aboutEai/index.jsx");

var _aboutEai2 = _interopRequireDefault(_aboutEai);

var _login = __webpack_require__(/*! ./login */ "./src/components/home/login/index.jsx");

var _login2 = _interopRequireDefault(_login);

var _IExtractLink = __webpack_require__(/*! ./IExtractLink */ "./src/components/home/IExtractLink.jsx");

var _IExtractLink2 = _interopRequireDefault(_IExtractLink);

var _ReviewLink = __webpack_require__(/*! ./ReviewLink */ "./src/components/home/ReviewLink.jsx");

var _ReviewLink2 = _interopRequireDefault(_ReviewLink);

var _IModelLink = __webpack_require__(/*! ./IModelLink */ "./src/components/home/IModelLink.jsx");

var _IModelLink2 = _interopRequireDefault(_IModelLink);

var _IPlanLink = __webpack_require__(/*! ./IPlanLink */ "./src/components/home/IPlanLink.jsx");

var _IPlanLink2 = _interopRequireDefault(_IPlanLink);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _menu = __webpack_require__(/*! ../../constants/menu */ "./src/constants/menu.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeContainer = function (_React$Component) {
  _inherits(HomeContainer, _React$Component);

  function HomeContainer() {
    _classCallCheck(this, HomeContainer);

    return _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).call(this));
  }

  _createClass(HomeContainer, [{
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
            _react2.default.createElement(_ReviewLink2.default, null)
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

module.exports = HomeContainer;

/***/ }),

/***/ "./src/components/home/IExtractLink.jsx":
/*!**********************************************!*\
  !*** ./src/components/home/IExtractLink.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-block text-center' },
          _react2.default.createElement(
            'div',
            { className: 'm-t-10 m-b-30' },
            _react2.default.createElement('i', { className: 'fa fa-server text-c-green d-block f-50' })
          ),
          _react2.default.createElement(
            'h4',
            { className: 'm-t-20' },
            'Fact'
          ),
          _react2.default.createElement(
            'p',
            { className: 'm-b-25' },
            'Extract and process data'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'btn btn-primary btn-sm btn-round', to: '/iextract' },
            'Enter'
          )
        )
      );
    }
  }]);

  return IExtract;
}(_react2.default.Component);

module.exports = IExtract;

/***/ }),

/***/ "./src/components/home/IModelLink.jsx":
/*!********************************************!*\
  !*** ./src/components/home/IModelLink.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-block text-center' },
          _react2.default.createElement(
            'div',
            { className: 'm-t-10 m-b-30' },
            _react2.default.createElement('i', { className: 'fa fa-dharmachakra text-c-green d-block f-50' })
          ),
          _react2.default.createElement(
            'h4',
            { className: 'm-t-20' },
            'Build'
          ),
          _react2.default.createElement(
            'p',
            { className: 'm-b-25' },
            'Create statistical models'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'btn btn-primary btn-sm btn-round', to: '/imodel' },
            'Enter'
          )
        )
      );
    }
  }]);

  return IModel;
}(_react2.default.Component);

module.exports = IModel;

/***/ }),

/***/ "./src/components/home/IPlanLink.jsx":
/*!*******************************************!*\
  !*** ./src/components/home/IPlanLink.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-block text-center' },
          _react2.default.createElement(
            'div',
            { className: 'm-t-10 m-b-30' },
            _react2.default.createElement('i', { className: 'fa fa-calendar-alt text-c-green d-block f-50' })
          ),
          _react2.default.createElement(
            'h4',
            { className: 'm-t-20' },
            'Plan'
          ),
          _react2.default.createElement(
            'p',
            { className: 'm-b-25' },
            'Simulate business scenarios'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'btn btn-primary btn-sm btn-round', to: '/iplan' },
            'Enter'
          )
        )
      );
    }
  }]);

  return IPlan;
}(_react2.default.Component);

module.exports = IPlan;

/***/ }),

/***/ "./src/components/home/ReviewLink.jsx":
/*!********************************************!*\
  !*** ./src/components/home/ReviewLink.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _links = __webpack_require__(/*! ../../constants/links */ "./src/constants/links.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReviewLink = function (_React$Component) {
  _inherits(ReviewLink, _React$Component);

  function ReviewLink() {
    _classCallCheck(this, ReviewLink);

    return _possibleConstructorReturn(this, (ReviewLink.__proto__ || Object.getPrototypeOf(ReviewLink)).call(this));
  }

  _createClass(ReviewLink, [{
    key: 'render',
    value: function render() {
      console.log(_links.reviewPath);
      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-block text-center' },
          _react2.default.createElement(
            'div',
            { className: 'm-t-10 m-b-30' },
            _react2.default.createElement('i', { className: 'fa fa-project-diagram text-c-green d-block f-50' })
          ),
          _react2.default.createElement(
            'h4',
            { className: 'm-t-20' },
            'Review'
          ),
          _react2.default.createElement(
            'p',
            { className: 'm-b-25' },
            'View business metrics'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'btn btn-primary btn-sm btn-round', to: _links.reviewPath },
            'Enter'
          )
        )
      );
    }
  }]);

  return ReviewLink;
}(_react2.default.Component);

module.exports = ReviewLink;

/***/ }),

/***/ "./src/components/home/aboutEai/index.jsx":
/*!************************************************!*\
  !*** ./src/components/home/aboutEai/index.jsx ***!
  \************************************************/
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
          { className: "card-body", style: { height: '390px' } },
          _react2.default.createElement(
            "div",
            { className: "EAImage", style: { overflow: 'hidden' } },
            _react2.default.createElement("img", { src: "../../../../../assets/images/EAi.png", alt: "About EAI", style: { width: '544px' } })
          ),
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "h6",
            { className: "f-w-600 m-b-10" },
            "Enterprise Analytics Intelligence"
          ),
          _react2.default.createElement(
            "span",
            { className: "text-muted m-t-15" },
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          )
        )
      );
    }
  }]);

  return AboutEai;
}(_react.Component);

/***/ }),

/***/ "./src/components/home/index.jsx":
/*!***************************************!*\
  !*** ./src/components/home/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HomeContainer = __webpack_require__(/*! ./HomeContainer */ "./src/components/home/HomeContainer.jsx");

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _HomeContainer2.default;

/***/ }),

/***/ "./src/components/home/login/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/home/login/index.jsx ***!
  \*********************************************/
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
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "card" },
        _react2.default.createElement(
          "div",
          { className: "card-body", style: { height: '390px' } },
          _react2.default.createElement(
            "div",
            { className: "m-t-10 m-b-20" },
            _react2.default.createElement(
              "h4",
              { className: "text-left txt-primary" },
              "Sign In"
            )
          ),
          _react2.default.createElement("hr", null),
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
                    { href: "auth-reset-password.html", className: "text-right f-w-600" },
                    "Forgot Password?"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "row m-t-20" },
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
          ),
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-md-10" },
              _react2.default.createElement(
                "p",
                { className: "text-inverse text-left m-b-0" },
                "Thank you and enjoy our website."
              )
            ),
            _react2.default.createElement(
              "div",
              { style: { position: 'absolute', height: '50px', right: '20px' } },
              _react2.default.createElement("img", { src: "../../../../../assets/images/logo-small.png", alt: "About EAI", style: { width: '50px' } })
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

/***/ }),

/***/ "./src/components/iExtract/home/Card.jsx":
/*!***********************************************!*\
  !*** ./src/components/iExtract/home/Card.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _EnterButton = __webpack_require__(/*! ./EnterButton */ "./src/components/iExtract/home/EnterButton.jsx");

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
            { type: 'button', title: 'Learn More', className: 'btn btn-sm btn-grd-info' },
            'Learn More'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', title: 'Update', className: 'btn btn-sm btn-grd-warning' },
            'Update'
          )
        )
      )
    )
  );
};

/***/ }),

/***/ "./src/components/iExtract/home/EnterButton.jsx":
/*!******************************************************!*\
  !*** ./src/components/iExtract/home/EnterButton.jsx ***!
  \******************************************************/
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
        {
          type: "button",
          title: "Enter",
          className: "btn btn-sm btn-grd-success",
          onClick: this.onEnter,
          onKeyPress: this.onEnter },
        "Enter"
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;

/***/ }),

/***/ "./src/components/iExtract/home/IExtract.jsx":
/*!***************************************************!*\
  !*** ./src/components/iExtract/home/IExtract.jsx ***!
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

var _accordian = __webpack_require__(/*! ../../ui/accordian */ "./src/components/ui/accordian/index.jsx");

var _accordian2 = _interopRequireDefault(_accordian);

var _Card = __webpack_require__(/*! ./Card */ "./src/components/iExtract/home/Card.jsx");

var _iapplyApps = __webpack_require__(/*! ../../../constants/iapplyApps */ "./src/constants/iapplyApps.js");

var _actions = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function actions(dispatch) {
  return {
    onEnter: function onEnter(app) {
      return dispatch((0, _actions.setApplyApp)(app));
    }
    // updateMenu: () => dispatch(onSideBarMenuSelected({ id: 7 })),
  };
}

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.onEnter = _this.onEnter.bind(_this);
    return _this;
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.props.updateMenu();
    }
  }, {
    key: 'onEnter',
    value: function onEnter(app) {
      this.props.onEnter(app);
    }
  }, {
    key: 'render',
    value: function render() {
      var img = __webpack_require__(/*! ../../../../assets/images/avatar-4.jpg */ "./assets/images/avatar-4.jpg");
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('i', { className: 'fa fa-server text-c-green d-block f-40 m-l-20' }),
          _react2.default.createElement(
            'h4',
            { className: 'm-l-20', style: { lineHeight: '40px' } },
            'Fact'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'm-t-25' },
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Marketing Effectiveness' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Digital Media Effectiveness' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Pricing Effectiveness' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Trade Promotion Optimization' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Market Testing' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Assortment & Space Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Customer Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Employee Engagement Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Operations Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Supply Chain Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Custom Reports' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, actions)(Page);

/***/ }),

/***/ "./src/components/iExtract/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/iExtract/index.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _IExtract = __webpack_require__(/*! ./home/IExtract */ "./src/components/iExtract/home/IExtract.jsx");

var _IExtract2 = _interopRequireDefault(_IExtract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_IExtract2.default, null);
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ "./src/components/iModel/home/Card.jsx":
/*!*********************************************!*\
  !*** ./src/components/iModel/home/Card.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _EnterButton = __webpack_require__(/*! ./EnterButton */ "./src/components/iModel/home/EnterButton.jsx");

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
            { type: 'button', title: 'Learn More', className: 'btn btn-sm btn-grd-info' },
            'Learn More'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', title: 'Update', className: 'btn btn-sm btn-grd-warning' },
            'Update'
          )
        )
      )
    )
  );
};

/***/ }),

/***/ "./src/components/iModel/home/EnterButton.jsx":
/*!****************************************************!*\
  !*** ./src/components/iModel/home/EnterButton.jsx ***!
  \****************************************************/
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
        {
          type: "button",
          title: "Enter",
          className: "btn btn-sm btn-grd-success",
          onClick: this.onEnter,
          onKeyPress: this.onEnter },
        "Enter"
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;

/***/ }),

/***/ "./src/components/iModel/home/IModel.jsx":
/*!***********************************************!*\
  !*** ./src/components/iModel/home/IModel.jsx ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _accordian = __webpack_require__(/*! ../../ui/accordian */ "./src/components/ui/accordian/index.jsx");

var _accordian2 = _interopRequireDefault(_accordian);

var _Card = __webpack_require__(/*! ./Card */ "./src/components/iModel/home/Card.jsx");

var _iapplyApps = __webpack_require__(/*! ../../../constants/iapplyApps */ "./src/constants/iapplyApps.js");

var _actions = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function actions(dispatch) {
  return {
    onEnter: function onEnter(app) {
      return dispatch((0, _actions.setApplyApp)(app));
    }
    // updateMenu: () => dispatch(onSideBarMenuSelected({ id: 7 })),
  };
}

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.onEnter = _this.onEnter.bind(_this);
    return _this;
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.props.updateMenu();
    }
  }, {
    key: 'onEnter',
    value: function onEnter(app) {
      this.props.onEnter(app);
    }
  }, {
    key: 'render',
    value: function render() {
      var img = __webpack_require__(/*! ../../../../assets/images/avatar-4.jpg */ "./assets/images/avatar-4.jpg");
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('i', { className: 'fa fa-dharmachakra text-c-green d-block f-40 m-l-20' }),
          _react2.default.createElement(
            'h4',
            { className: 'm-l-20', style: { lineHeight: '40px' } },
            'Build'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'm-t-25' },
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Simple Regression' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Ordinary Least Square', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Ordinary Least Square'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Constrained Regression', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Constrained Regression'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Hierarchical Linear Model' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Fixed Effects', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Fixed Effects'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Random Effects', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Random Effects'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Mixed Effects', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Mixed Effects'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Non-linear Mixed Constrained Effects', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Non-linear Mixed Constrained Effects'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Logistic Regression' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Probit Models', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Probit Models'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Other Regressions' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Lasso', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Lasso'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Ridge Regression', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Ridge Regression'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Elastic Net', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Elastic Net'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Partial Least Squares', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Partial Least Squares'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Testing' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'ANOVA', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'ANOVA'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'ANCOVA', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'ANCOVA'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Heuristics', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Heuristics'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Bass Diffusion Models', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Bass Diffusion Models'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Other Techniques' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Market Basket Analysis', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Market Basket Analysis'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Principle Component Analysis', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Principle Component Analysis'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Propensity Models', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Propensity Models'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Markov Chain', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Markov Chain'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, actions)(Page);

/***/ }),

/***/ "./src/components/iModel/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/iModel/index.jsx ***!
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

var _IModel = __webpack_require__(/*! ./home/IModel */ "./src/components/iModel/home/IModel.jsx");

var _IModel2 = _interopRequireDefault(_IModel);

var _iapplyApps = __webpack_require__(/*! ../../constants/iapplyApps */ "./src/constants/iapplyApps.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_IModel2.default, null);
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ "./src/components/iPlan/home/Card.jsx":
/*!********************************************!*\
  !*** ./src/components/iPlan/home/Card.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _EnterButton = __webpack_require__(/*! ./EnterButton */ "./src/components/iPlan/home/EnterButton.jsx");

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
            { type: 'button', title: 'Learn More', className: 'btn btn-sm btn-grd-info' },
            'Learn More'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', title: 'Update', className: 'btn btn-sm btn-grd-warning' },
            'Update'
          )
        )
      )
    )
  );
};

/***/ }),

/***/ "./src/components/iPlan/home/EnterButton.jsx":
/*!***************************************************!*\
  !*** ./src/components/iPlan/home/EnterButton.jsx ***!
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
        {
          type: "button",
          title: "Enter",
          className: "btn btn-sm btn-grd-success",
          onClick: this.onEnter,
          onKeyPress: this.onEnter },
        "Enter"
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;

/***/ }),

/***/ "./src/components/iPlan/home/IPlan.jsx":
/*!*********************************************!*\
  !*** ./src/components/iPlan/home/IPlan.jsx ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _accordian = __webpack_require__(/*! ../../ui/accordian */ "./src/components/ui/accordian/index.jsx");

var _accordian2 = _interopRequireDefault(_accordian);

var _Card = __webpack_require__(/*! ./Card */ "./src/components/iPlan/home/Card.jsx");

var _iapplyApps = __webpack_require__(/*! ../../../constants/iapplyApps */ "./src/constants/iapplyApps.js");

var _actions = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function actions(dispatch) {
  return {
    onEnter: function onEnter(app) {
      return dispatch((0, _actions.setApplyApp)(app));
    }
    // updateMenu: () => dispatch(onSideBarMenuSelected({ id: 7 })),
  };
}

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.onEnter = _this.onEnter.bind(_this);
    return _this;
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.props.updateMenu();
    }
  }, {
    key: 'onEnter',
    value: function onEnter(app) {
      this.props.onEnter(app);
    }
  }, {
    key: 'render',
    value: function render() {
      var img = __webpack_require__(/*! ../../../../assets/images/avatar-4.jpg */ "./assets/images/avatar-4.jpg");
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('i', { className: 'fa fa-calendar-alt text-c-green d-block f-40 m-l-20' }),
          _react2.default.createElement(
            'h4',
            { className: 'm-l-20', style: { lineHeight: '40px' } },
            'Plan'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'm-t-25' },
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Marketing Effectiveness' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Digital Media Effectiveness' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Pricing Effectiveness' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Trade Promotion Optimization' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Market Testing' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Assortment & Space Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Customer Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Employee Engagement Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Operations Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Supply Chain Analytics' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _accordian2.default,
            { title: 'Custom Reports' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'ul',
                  { className: 'feed-blog' },
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'active-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Consumer Pathway', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Consumer Pathway'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'diactive-feed' },
                    _react2.default.createElement(
                      'div',
                      { className: 'feed-user-img' },
                      _react2.default.createElement('img', { alt: 'Digital Media ROI', src: img, className: 'img-radius' })
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'm-b-0' },
                      'Digital Media ROI'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted m-b-15 m-t-5 small' },
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-sign-in-alt text-c-blue d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-info-circle text-c-green d-block f-20' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-auto' },
                        _react2.default.createElement('i', { className: 'fa fa-upload text-c-yellow d-block f-20' })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function () {
  return {};
}, actions)(Page);

/***/ }),

/***/ "./src/components/iPlan/index.jsx":
/*!****************************************!*\
  !*** ./src/components/iPlan/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _IPlan = __webpack_require__(/*! ./home/IPlan */ "./src/components/iPlan/home/IPlan.jsx");

var _IPlan2 = _interopRequireDefault(_IPlan);

var _iapplyApps = __webpack_require__(/*! ../../constants/iapplyApps */ "./src/constants/iapplyApps.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_IPlan2.default, null);
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

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

var _home = __webpack_require__(/*! ../home */ "./src/components/home/index.jsx");

var _home2 = _interopRequireDefault(_home);

var _Review = __webpack_require__(/*! ../Review */ "./src/components/Review/index.jsx");

var _Review2 = _interopRequireDefault(_Review);

var _iExtract = __webpack_require__(/*! ../iExtract */ "./src/components/iExtract/index.jsx");

var _iExtract2 = _interopRequireDefault(_iExtract);

var _iPlan = __webpack_require__(/*! ../iPlan */ "./src/components/iPlan/index.jsx");

var _iPlan2 = _interopRequireDefault(_iPlan);

var _iModel = __webpack_require__(/*! ../iModel */ "./src/components/iModel/index.jsx");

var _iModel2 = _interopRequireDefault(_iModel);

var _Empty = __webpack_require__(/*! ../Empty */ "./src/components/Empty/index.jsx");

var _Empty2 = _interopRequireDefault(_Empty);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _links = __webpack_require__(/*! ../../constants/links */ "./src/constants/links.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      var _this2 = this;

      var nav = this.props.nav;

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
                  _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(rProps) {
                        return _react2.default.createElement(_home2.default, _this2.props);
                      } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: _links.reviewPath, render: function render(rProps) {
                        return _react2.default.createElement(_Review2.default, _this2.props);
                      } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: _links.iextractPath, render: function render(rProps) {
                        return _react2.default.createElement(_iExtract2.default, _this2.props);
                      } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: _links.iplanPath, render: function render(rProps) {
                        return _react2.default.createElement(_iPlan2.default, _this2.props);
                      } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: _links.imodelPath, render: function render(rProps) {
                        return _react2.default.createElement(_iModel2.default, _this2.props);
                      } }),
                    _react2.default.createElement(_reactRouterDom.Route, { component: function component() {
                        return _react2.default.createElement(_Empty2.default, null);
                      } })
                  )
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

module.exports = (0, _reactRouterDom.withRouter)(Landing);

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
      _react2.default.createElement("i", { className: "ti-fullscreen", title: "Full Screen" })
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

var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types/index.js");

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
            _react2.default.createElement('img', { alt: 'avatar', src: __webpack_require__(/*! ../../../assets/images/avatars/avatar-user.png */ "./assets/images/avatars/avatar-user.png"), className: 'img-radius' }),
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

/***/ "./src/components/sidebar/Link.jsx":
/*!*****************************************!*\
  !*** ./src/components/sidebar/Link.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegularLink = function (_React$Component) {
  _inherits(RegularLink, _React$Component);

  function RegularLink() {
    _classCallCheck(this, RegularLink);

    var _this = _possibleConstructorReturn(this, (RegularLink.__proto__ || Object.getPrototypeOf(RegularLink)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(RegularLink, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick(this.props.item);
    }
  }, {
    key: 'render',
    value: function render() {
      var item = this.props.item;

      var caretStyle = function caretStyle(curr) {
        return (0, _classnames2.default)({
          mcaret: curr.content,
          'mcaret-plus': curr.content && !curr.expand,
          'mcaret-minus': curr.content && curr.expand
        });
      };

      return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: item.link, onClick: this.handleClick },
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
      );
    }
  }]);

  return RegularLink;
}(_react2.default.Component);

module.exports = RegularLink;

/***/ }),

/***/ "./src/components/sidebar/LinkWithChildren.jsx":
/*!*****************************************************!*\
  !*** ./src/components/sidebar/LinkWithChildren.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _SubMenu = __webpack_require__(/*! ./SubMenu */ "./src/components/sidebar/SubMenu.jsx");

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkWithChildren = function (_Component) {
  _inherits(LinkWithChildren, _Component);

  function LinkWithChildren() {
    _classCallCheck(this, LinkWithChildren);

    var _this = _possibleConstructorReturn(this, (LinkWithChildren.__proto__ || Object.getPrototypeOf(LinkWithChildren)).call(this));

    _this.state = {
      expand: false
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(LinkWithChildren, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick(this.props.item);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        expand: nextProps.item.id === nextProps.selectedSubMenuId
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var item = this.props.item;
      var expand = this.state.expand;


      var caretStyle = function caretStyle(curr) {
        return (0, _classnames2.default)({
          mcaret: curr.content,
          'mcaret-plus': curr.content && expand,
          'mcaret-minus': curr.content && expand
        });
      };

      var subMenuStyle = function subMenuStyle(curr) {
        return (0, _classnames2.default)({
          'sub-menu': true,
          'sub-menu-visible': expand
        });
      };

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'a',
          { onClick: this.handleClick },
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
            return _react2.default.createElement(_SubMenu2.default, { item: sub, key: j, handleClick: _this2.handleClick });
          })
        )
      );
    }
  }]);

  return LinkWithChildren;
}(_react.Component);

module.exports = LinkWithChildren;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Link = __webpack_require__(/*! ./Link */ "./src/components/sidebar/Link.jsx");

var _Link2 = _interopRequireDefault(_Link);

var _LinkWithChildren = __webpack_require__(/*! ./LinkWithChildren */ "./src/components/sidebar/LinkWithChildren.jsx");

var _LinkWithChildren2 = _interopRequireDefault(_LinkWithChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Menu, [{
    key: 'handleClick',
    value: function handleClick(item) {
      this.props.handleClick(item);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          location = _props.location,
          selectedSubMenuId = _props.selectedSubMenuId;


      var getStyle = function getStyle(curr) {
        return (0, _classnames2.default)({
          'selected active': curr.link === location
        });
      };

      var LinkObj = void 0;

      if (item.content) {
        LinkObj = _react2.default.createElement(_LinkWithChildren2.default, { item: item, handleClick: this.handleClick, selectedSubMenuId: selectedSubMenuId });
      } else {
        LinkObj = _react2.default.createElement(_Link2.default, { item: item, handleClick: this.handleClick });
      }
      return _react2.default.createElement(
        'li',
        { className: getStyle(item) },
        LinkObj
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

exports.default = Menu;

/***/ }),

/***/ "./src/components/sidebar/SideBarContent.jsx":
/*!***************************************************!*\
  !*** ./src/components/sidebar/SideBarContent.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Menu = __webpack_require__(/*! ./Menu */ "./src/components/sidebar/Menu.jsx");

var _Menu2 = _interopRequireDefault(_Menu);

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types/index.js");

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

    _this.state = {
      selectedSubMenuId: 0
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SideBarContent, [{
    key: 'handleClick',
    value: function handleClick(item) {
      this.setState({
        selectedSubMenuId: item.content ? item.id : 0
      });
    }
  }, {
    key: 'renderNavLabel',
    value: function renderNavLabel(label, idx) {
      var menu = this.props.menu;

      if (menu.back && idx === 0) {
        return _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'nav-label-back', to: menu.back.link },
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

      var _props = this.props,
          menu = _props.menu,
          location = _props.location;
      var selectedSubMenuId = this.state.selectedSubMenuId;


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
                return _react2.default.createElement(_Menu2.default, {
                  item: item,
                  key: i,
                  handleClick: _this2.handleClick,
                  selectedSubMenuId: selectedSubMenuId,
                  location: location.pathname
                });
              })
            )
          );
        })
      );
    }
  }]);

  return SideBarContent;
}(_react.Component);

module.exports = (0, _reactRouterDom.withRouter)(SideBarContent);

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _menu = __webpack_require__(/*! ../../constants/menu */ "./src/constants/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _links = __webpack_require__(/*! ../../constants/links */ "./src/constants/links.js");

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
      // const { menu } = nav;

      return _react2.default.createElement(
        'nav',
        { className: 'side-bar', ref: this.el },
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
            return _react2.default.createElement(_SideBarContent2.default, { menu: _menu2.default.main });
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _links.reviewPath, render: function render() {
            return _react2.default.createElement(_SideBarContent2.default, { menu: _menu2.default.mainApp });
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: _links.reviewTestPath, render: function render() {
            return _react2.default.createElement(_SideBarContent2.default, { menu: _menu2.default.reivewTestApp });
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/imodel', render: function render() {
            return _react2.default.createElement(_SideBarContent2.default, { menu: _menu2.default.mainApp });
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/iextract', render: function render() {
            return _react2.default.createElement(_SideBarContent2.default, { menu: _menu2.default.mainApp });
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/iplan', render: function render() {
            return _react2.default.createElement(_SideBarContent2.default, { menu: _menu2.default.mainApp });
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { render: function render() {
            return _react2.default.createElement(_SideBarContent2.default, { menu: _menu2.default.main });
          } })
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = function (_React$Component) {
  _inherits(SubMenu, _React$Component);

  function SubMenu() {
    _classCallCheck(this, SubMenu);

    var _this = _possibleConstructorReturn(this, (SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SubMenu, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          location = _props.location;


      var aStyle = function aStyle(curr) {
        return (0, _classnames2.default)({
          active: curr.link === location.pathname
        });
      };

      return _react2.default.createElement(
        'li',
        { className: aStyle(item) },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: item.link, onClick: this.handleClick },
          _react2.default.createElement(
            'span',
            { className: 'mtext' },
            item.label
          )
        )
      );
    }
  }]);

  return SubMenu;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(SubMenu);

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

/***/ "./src/components/ui/tabs/Tab.jsx":
/*!****************************************!*\
  !*** ./src/components/ui/tabs/Tab.jsx ***!
  \****************************************/
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
        active: active === item.id
      });
      return _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          'a',
          { className: c, onClick: this.handleClick, onKeyDown: this.handleClick },
          item.name
        ),
        _react2.default.createElement('div', { className: 'slide' })
      );
    }
  }]);

  return Tab;
}(_react2.default.Component);

exports.default = Tab;

/***/ }),

/***/ "./src/components/ui/tabs/index.jsx":
/*!******************************************!*\
  !*** ./src/components/ui/tabs/index.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Tab = __webpack_require__(/*! ./Tab */ "./src/components/ui/tabs/Tab.jsx");

var _Tab2 = _interopRequireDefault(_Tab);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

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
      var handleSelected = this.props.handleSelected;

      handleSelected(i);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          active = _props.active;

      return _react2.default.createElement(
        'ul',
        { className: 'nav nav-tabs md-tabs' },
        items.map(function (m, i) {
          return _react2.default.createElement(_Tab2.default, { item: m, active: active, key: i, handleClick: _this2.handleClick });
        }),
        this.props.children
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

exports.default = Tabs;


Tabs.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    name: _propTypes2.default.string
  })).isRequired,
  active: _propTypes2.default.number.isRequired,

  handleSelected: _propTypes2.default.func.isRequired
};

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

/***/ "./src/constants/links.js":
/*!********************************!*\
  !*** ./src/constants/links.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reviewPath = exports.reviewPath = '/review';
var reviewTestPath = exports.reviewTestPath = '/review/test';
var iextractPath = exports.iextractPath = '/iextract';
var iplanPath = exports.iplanPath = '/iplan';
var imodelPath = exports.imodelPath = '/imodel';

/***/ }),

/***/ "./src/constants/menu.js":
/*!*******************************!*\
  !*** ./src/constants/menu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _links = __webpack_require__(/*! ./links */ "./src/constants/links.js");

var vid1 = { id: 16, label: 'Video 1', link: '/video1', parentId: 3 };
var vid2 = { id: 17, label: 'Video 2', link: '/video2', parentId: 3 };
var tutorial1 = { id: 18, label: 'Tutorials 1', link: '/tutorials1', parentId: 4 };
var tutorial2 = { id: 19, label: 'Tutorials 2', link: '/tutorials2', parentId: 4 };

var home = { id: 1, label: 'Home', icon: 'home', link: '/' };
var syncReal = { id: 2, label: 'SyncReal', icon: 'shine', link: '/syncreal' };
var videos = { id: 3, label: 'Videos', icon: 'video-clapper', link: '/videos', content: [vid1, vid2] };
var tutorials = { id: 4, label: 'Tutorials', icon: 'book', link: '/tutorials', content: [tutorial1, tutorial2] };
var iextract = { id: 5, label: 'Fact', icon: 'server', link: _links.iextractPath };
var imodel = { id: 6, label: 'Build', icon: 'settings', link: _links.imodelPath };
var review = { id: 7, label: 'Review', icon: 'bar-chart-alt', link: _links.reviewPath };
var iplan = { id: 8, label: 'Plan', icon: 'panel', link: _links.iplanPath };
var faq = { id: 9, label: 'FAQs', icon: 'support', link: '/faqs' };
var help = { id: 10, label: 'Help', icon: 'help', link: '/help' };
var contact = { id: 20, label: 'Contact Us', icon: 'ticket', link: '/contact' };
var find = { id: 11, label: 'Find', icon: 'search', link: _links.reviewPath + '/find' };
var sort = { id: 12, label: 'Sort', icon: 'exchange-vertical', link: _links.reviewPath + '/sort' };
var print = { id: 13, label: 'Print', icon: 'printer', link: _links.reviewPath + '/print' };
var exportLink = { id: 14, label: 'Export', icon: 'export', link: _links.reviewPath + '/exportlink' };
var saveView = { id: 15, label: 'Save View', icon: 'layout-grid3', link: _links.reviewPath + '/save' };

var test = { id: 16, label: 'Test', icon: 'layout-grid3', link: _links.reviewTestPath };
var measures = { id: 17, label: 'Measures', icon: 'layout-grid3', link: _links.reviewPath };
var clusters = { id: 18, label: 'Clusters', icon: 'layout-grid3', link: _links.reviewPath };
var attributes = { id: 19, label: 'Attributes', icon: 'layout-grid3', link: _links.reviewPath };
var dates = { id: 20, label: 'Dates', icon: 'layout-grid3', link: _links.reviewPath };
var size = { id: 21, label: 'Size', icon: 'layout-grid3', link: _links.reviewPath };

var quickLinks = [iextract, imodel, review, iplan];

var getLink = function getLink(id) {
  return quickLinks.find(function (x) {
    return x.id === id;
  });
};
// const getCompactedQuickLinks = function(ignore) {
//   if (!ignore) return quickLinks.slice();

//   return quickLinks.filter(x => x.id !== ignore);
// };

module.exports = {
  main: {
    id: 'main',
    content: [{
      label: 'Enterprise Analytics Intelligence',
      content: [home, syncReal, videos, tutorials]
    }, {
      label: 'Support',
      content: [faq, help, contact]
    }]
  },

  mainApp: {
    id: 'mainApp',
    back: home,
    selected: find,
    content: [{
      label: 'Home',
      content: quickLinks
    }, {
      label: 'Tools',
      content: [find, sort, print, exportLink, saveView]
    }]
  },

  reivewTestApp: {
    id: 'reivewTestApp',
    back: review,
    selected: find,
    content: [{
      label: 'Review',
      content: [test, measures, clusters, attributes, dates, size]
    }, {
      label: 'Quick Links',
      content: quickLinks
    }]
  },

  getLink: getLink
};

/***/ }),

/***/ "./src/constants/types/home.js":
/*!*************************************!*\
  !*** ./src/constants/types/home.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_USER = exports.SET_USER = 'SET_USER';

var TOGGLE_HEADER_NAVBAR = exports.TOGGLE_HEADER_NAVBAR = 'TOGGLE_HEADER_NAVBAR';
var SET_BROWSER_SIZE = exports.SET_BROWSER_SIZE = 'SET_BROWSER_SIZE';
var TOGGLE_SIDEBAR = exports.TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

var SET_APPLY_APP = exports.SET_APPLY_APP = 'SET_APPLY_APP';

/***/ }),

/***/ "./src/constants/types/index.js":
/*!**************************************!*\
  !*** ./src/constants/types/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _home = __webpack_require__(/*! ./home */ "./src/constants/types/home.js");

var homeTypes = _interopRequireWildcard(_home);

var _test = __webpack_require__(/*! ./review/test */ "./src/constants/types/review/test.js");

var testTypes = _interopRequireWildcard(_test);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = _extends({}, homeTypes, testTypes);

/***/ }),

/***/ "./src/constants/types/review/test.js":
/*!********************************************!*\
  !*** ./src/constants/types/review/test.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TC_APP_INITIALIZE = exports.TC_APP_INITIALIZE = 'TC_APP_INITIALIZE';

var TC_SET_VIEW = exports.TC_SET_VIEW = 'TC_SET_VIEW';
var TC_ADD_PROGRAM = exports.TC_ADD_PROGRAM = 'TC_ADD_PROGRAM';
var TC_REMOVE_PROGRAM = exports.TC_REMOVE_PROGRAM = 'TC_REMOVE_PROGRAM';
var TC_SET_ACTIVE_PROGRAM = exports.TC_SET_ACTIVE_PROGRAM = 'TC_SET_ACTIVE_PROGRAM';

var TC_SHOW_DELETE_MODAL = exports.TC_SHOW_DELETE_MODAL = 'TC_SHOW_DELETE_MODAL';
var TC_HIDE_DELETE_MODAL = exports.TC_HIDE_DELETE_MODAL = 'TC_HIDE_DELETE_MODAL';

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

var _review = __webpack_require__(/*! ./reducers/review */ "./src/reducers/review/index.js");

var _review2 = _interopRequireDefault(_review);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
exports.default = (0, _redux.combineReducers)({
  auth: _auth2.default,
  nav: _nav2.default,
  review: _review2.default
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

var _types = __webpack_require__(/*! ../constants/types */ "./src/constants/types/index.js");

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { user: 'User Profile' };
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


var _types = __webpack_require__(/*! ../constants/types */ "./src/constants/types/index.js");

var _menu = __webpack_require__(/*! ../constants/menu */ "./src/constants/menu.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isSmallDevice: false,
  headerMinimized: true,
  displaySideBar: true,
  displayOptionIcons: true
  // menu: menu.main,
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
    // case SET_MENU: {
    //   return {
    //     ...state,
    //     menu: action.content,
    //   };
    // }
    // case SET_SELECTED_MENU:
    //   if (action.item.content) {
    //     return {
    //       ...state,
    //       menu: {
    //         ...state.menu,
    //         content: state.menu.content.map(x => ({
    //           ...x,
    //           content: x.content.map(
    //             c =>
    //               c.id === action.item.id
    //                 ? {
    //                     ...c,
    //                     expand: !c.expand,
    //                   }
    //                 : {
    //                     ...c,
    //                     expand: false,
    //                   }
    //           ),
    //         })),
    //       },
    //     };
    //   }
    //   return {
    //     ...state,
    //     menu: {
    //       ...state.menu,
    //       selected: action.item,
    //       content: state.menu.content.map(x => ({
    //         ...x,
    //         content: x.content.map(
    //           c =>
    //             c.id === action.item.id || (action.item.parentId && action.item.parentId === c.id)
    //               ? {
    //                   ...c,
    //                 }
    //               : {
    //                   ...c,
    //                   expand: false,
    //                 }
    //         ),
    //       })),
    //     },
    //   };
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

/***/ "./src/reducers/review/index.js":
/*!**************************************!*\
  !*** ./src/reducers/review/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _test = __webpack_require__(/*! ./test */ "./src/reducers/review/test.js");

var _test2 = _interopRequireDefault(_test);

var _measure = __webpack_require__(/*! ./measure */ "./src/reducers/review/measure.js");

var _measure2 = _interopRequireDefault(_measure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  test: _test2.default,
  measure: _measure2.default
});

/***/ }),

/***/ "./src/reducers/review/measure.js":
/*!****************************************!*\
  !*** ./src/reducers/review/measure.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { dummy: [] };
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/review/test.js":
/*!*************************************!*\
  !*** ./src/reducers/review/test.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(/*! ../../constants/types */ "./src/constants/types/index.js");

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
        initialInactive: false,
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

  if (!arr) return false;

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