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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\resources\\js\\app.js: Cannot find module '@babel/generator'\nRequire stack:\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\@babel\\core\\lib\\transformation\\file\\generate.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\@babel\\core\\lib\\transformation\\index.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\@babel\\core\\lib\\transform.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\@babel\\core\\lib\\index.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\laravel-mix\\src\\FileCollection.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\laravel-mix\\src\\tasks\\ConcatenateFilesTask.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\laravel-mix\\src\\components\\Combine.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\laravel-mix\\src\\components\\ComponentFactory.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\laravel-mix\\setup\\webpack.config.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\webpack-cli\\bin\\utils\\convert-argv.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\webpack-cli\\bin\\cli.js\n- C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\webpack\\bin\\webpack.js\n    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)\n    at Function.Module._load (node:internal/modules/cjs/loader:778:27)\n    at Module.require (node:internal/modules/cjs/loader:1005:19)\n    at require (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\v8-compile-cache\\v8-compile-cache.js:159:20)\n    at _generator (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\@babel\\core\\lib\\transformation\\file\\generate.js:19:16)\n    at generateCode (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\@babel\\core\\lib\\transformation\\file\\generate.js:55:18)\n    at run (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\@babel\\core\\lib\\transformation\\index.js:53:33)\n    at run.next (<anonymous>)\n    at Function.transform (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\@babel\\core\\lib\\transform.js:25:41)\n    at transform.next (<anonymous>)\n    at step (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\gensync\\index.js:261:32)\n    at C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\gensync\\index.js:223:11)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n8 │ @import '~bootstrap/scss/bootstrap';\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\resources\\sass\\app.scss 8:9  root stylesheet\n    at C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:99012:16)\n    at render_closure1.call$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:84527:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:28080:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:28387:49)\n    at Object._Future__propagateToListeners (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:3901:77)\n    at _Future._completeError$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:28233:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:27881:12)\n    at Object._asyncRethrow (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:3704:17)\n    at C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:19778:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:3729:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:27900:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:27894:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:28080:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:28387:49)\n    at Object._Future__propagateToListeners (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:3901:77)\n    at _Future._completeError$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:28233:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:27881:12)\n    at Object._asyncRethrow (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:3704:17)\n    at C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:15279:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:3729:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:27900:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:27894:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:28080:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:28387:49)\n    at Object._Future__propagateToListeners (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:3901:77)\n    at _Future._completeError$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:28233:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:27881:12)\n    at Object._asyncRethrow (C:\\Users\\petre\\OneDrive\\Documenti\\Boolean\\Laravel\\cars\\node_modules\\sass\\sass.dart.js:3704:17)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\petre\OneDrive\Documenti\Boolean\Laravel\cars\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\petre\OneDrive\Documenti\Boolean\Laravel\cars\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });