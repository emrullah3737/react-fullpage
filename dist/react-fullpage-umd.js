/*!
 * @fullpage/react-fullpage 0.1.10
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define("ReactFullpage", ["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactFullpage"] = factory(require("React"));
	else
		root["ReactFullpage"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(11);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(14);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(37);
var defined = __webpack_require__(35);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(42);
var toPrimitive = __webpack_require__(25);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(38);
var enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var hide = __webpack_require__(3);
var has = __webpack_require__(4);
var SRC = __webpack_require__(11)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(12).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(12);
var hide = __webpack_require__(3);
var redefine = __webpack_require__(13);
var ctx = __webpack_require__(39);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(debug,compName){return debug?function(){var _console;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(_console=console).log.apply(_console,["<".concat(compName,"/> Debug Log: ")].concat(args));}:function(){};});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(35);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(11);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(12);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(17) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(2)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(3)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(27);
var step = __webpack_require__(63);
var Iterators = __webpack_require__(20);
var toIObject = __webpack_require__(5);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(62)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(38);
var hiddenKeys = __webpack_require__(22).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(16);
var dPs = __webpack_require__(68);
var enumBugKeys = __webpack_require__(22);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(67).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(36);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(70)(false);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(73);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(13);
var META = __webpack_require__(72).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(26);
var setToStringTag = __webpack_require__(24);
var uid = __webpack_require__(11);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(43);
var wksDefine = __webpack_require__(44);
var enumKeys = __webpack_require__(71);
var isArray = __webpack_require__(31);
var anObject = __webpack_require__(16);
var isObject = __webpack_require__(7);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(25);
var createDesc = __webpack_require__(14);
var _create = __webpack_require__(30);
var gOPNExt = __webpack_require__(66);
var $GOPD = __webpack_require__(65);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(9);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(29).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(21).f = $propertyIsEnumerable;
  __webpack_require__(32).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(17)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(3)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(12);
var LIBRARY = __webpack_require__(17);
var wksExt = __webpack_require__(43);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('asyncIterator');


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(1);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// CONCATENATED MODULE: ./components/Wrapper/index.js
/* eslint-disable import/no-extraneous-dependencies */var Wrapper_Wrapper=function Wrapper(_ref){var children=_ref.children;return external_React_default.a.createElement(external_React_["Fragment"],null,children);};/* harmony default export */ var components_Wrapper = (Wrapper_Wrapper);
// CONCATENATED MODULE: ./components/index.js
/* eslint-disable */var windowExists=function windowExists(){return typeof window!=='undefined';};/* harmony default export */ var components = __webpack_exports__["default"] = ((function(){var exported;if(windowExists()){exported=__webpack_require__(74).default;}else{// NOTE: SSR support
exported=__webpack_require__(47).default;}exported.Wrapper=components_Wrapper;return exported;})());

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// NOTE: SSR support
var ReactFullpageShell=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpageShell,_React$Component);function ReactFullpageShell(props){var _this;_classCallCheck(this,ReactFullpageShell);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpageShell).call(this,props));_this.state={};_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this.props.debug,'ReactFullpageShell');_this.log('Building component');return _this;}_createClass(ReactFullpageShell,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{id:"fullpage"},this.props.render(this));}}]);return ReactFullpageShell;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpageShell);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.4 - Extensions 0.1.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e.fullpage=o(t,n),e.fullpage}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,window,document,function(Vt,Zt){"use strict";var Gt="fullpage-wrapper",Ft="."+Gt,Ut="fp-responsive",_t="fp-notransition",Qt="fp-destroyed",Jt="fp-enabled",Kt="fp-viewing",qt="active",$t="."+qt,en="fp-completely",tn="fp-section",nn="."+tn,on=nn+$t,rn="fp-tableCell",ln="."+rn,an="fp-auto-height",sn="fp-normal-scroll",cn="fp-nav",un="#"+cn,fn="fp-tooltip",dn="fp-slide",vn="."+dn,pn=vn+$t,hn="fp-slides",gn="."+hn,mn="fp-slidesContainer",Sn="."+mn,bn="fp-table",wn="fp-slidesNav",yn="."+wn,En=yn+" a",e="fp-controlArrow",xn="."+e,An="fp-prev",Ln=xn+".fp-prev",Mn=xn+".fp-next";function Tn(e,t){Vt.console&&Vt.console[e]&&Vt.console[e]("fullPage: "+t)}function On(e,t){return(t=1<arguments.length?t:Zt)?t.querySelectorAll(e):null}function kn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=kn(e[r],o[r]))}return e}function Cn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Hn(){return"innerHeight"in Vt?Vt.innerHeight:Zt.documentElement.offsetHeight}function Rn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!to(o,t);)o=o[n];return o}function In(e,t){return n(e,t,"previousElementSibling")}function zn(e,t){return n(e,t,"nextElementSibling")}function Bn(e,t){if(null==t)return e.previousElementSibling;var n=Bn(e);return n&&to(n,t)?n:null}function Nn(e,t){if(null==t)return e.nextElementSibling;var n=Nn(e);return n&&to(n,t)?n:null}function jn(e){return e[e.length-1]}function Pn(e,t){e=i(e)?e[0]:e;for(var n=null!=t?On(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return i(e)?e:[e]}function Yn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function Dn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function Wn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function Xn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function Vn(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||Zt.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function Zn(e,t){o(e,t,!0)}function Gn(e,t){for("string"==typeof t&&(t=oo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function Fn(e){for(var t=Zt.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function Un(e,t){return e&&1===e.nodeType?to(e,t)?e:Un(e.parentNode,t):null}function _n(e,t){r(e,e.nextSibling,t)}function Qn(e,t){r(e,e,t)}function r(e,t,n){i(n)||("string"==typeof n&&(n=oo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Jn(){var e=Zt.documentElement;return(Vt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Kn(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function qn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function $n(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function eo(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof Vt.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=Zt.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function to(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function no(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function oo(e){var t=Zt.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function ro(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function a(e,t,n){for(var o=e[n],r=[];o;)(to(o,t)||null==t)&&r.push(o),o=o[n];return r}function io(e,t){return a(e,t,"nextElementSibling")}function lo(e,t){return a(e,t,"previousElementSibling")}function ao(e,t){e.insertBefore(t,e.firstChild)}return Vt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||Vt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),Vt.fp_utils={$:On,deepExtend:kn,hasClass:Cn,getWindowHeight:Hn,css:Rn,until:n,prevUntil:In,nextUntil:zn,prev:Bn,next:Nn,last:jn,index:Pn,getList:l,hide:Yn,show:Dn,isArrayOrList:i,addClass:Wn,removeClass:Xn,appendTo:Vn,wrap:o,wrapAll:Zn,wrapInner:Gn,unwrap:Fn,closest:Un,after:_n,before:Qn,insertBefore:r,getScrollTop:Jn,siblings:Kn,preventDefault:qn,isFunction:$n,trigger:eo,matches:to,toggle:no,createElementFromHTML:oo,remove:ro,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:a,nextAll:io,prevAll:lo,showError:Tn,prependTo:ao,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Cn(e,t);o&&null==n||!n?Xn(e,t):(!o&&null==n||n)&&Wn(e,t)}}},function(e,g){var t=g&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)||-1<Zt.domain.indexOf("alvarotrigo.com");if(!Cn(On("html"),Jt)){var r=On("html, body"),m=On("body")[0],S={};g=kn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:Vt.fp_scrolloverflow?Vt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},g);var b,i,c,u,a=!1,n=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),o="ontouchstart"in Vt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?On(e)[0]:e,y=Hn(),E=!1,l=!0,x=!0,f=[],d={m:{up:!0,down:!0,left:!0,right:!0}};d.k=kn({},d.m);var v,s,p,h,A,L,M,T,O,k=Lt(),C={touchmove:"ontouchmove"in Vt?"touchmove":k.move,touchstart:"ontouchstart"in Vt?"touchstart":k.down},H=!1,R='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',I=kn({},g),z=!1,B={};jt(),Vt.fp_easings=kn(Vt.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(S.version="3.0.2",S.setAutoScrolling=_,S.setRecordHistory=Q,S.setScrollingSpeed=J,S.setFitToSection=K,S.setLockAnchors=function(e){g.lockAnchors=e},S.setMouseWheelScrolling=q,S.setAllowScrolling=$,S.setKeyboardScrolling=te,S.moveSectionUp=ne,S.moveSectionDown=oe,S.silentMoveTo=re,S.moveTo=ie,S.moveSlideRight=le,S.moveSlideLeft=ae,S.fitToSection=be,S.reBuild=se,S.setResponsive=ce,S.getFullpageData=function(){return{options:g,internals:{container:w,canScroll:x,isScrollAllowed:d,getDestinationPosition:ke,isTouch:o,c:Fe,getXmovement:pt,removeAnimation:ft,getTransforms:kt,lazyLoad:je,addAnimation:ut,performHorizontalMove:at,landscapeScroll:rt,silentLandscapeScroll:Tt,keepSlidesPosition:Oe,silentScroll:Ot,styleSlides:pe,scrollHandler:Se,getEventsPage:Mt,getMSPointer:Lt,isReallyTouch:xe,usingExtension:Rt,toggleControlArrows:it,touchStartHandler:Ae,touchMoveHandler:Ee}}},S.destroy=function(e){eo(w,"destroy",e),_(!1,"internal"),$(!0),ee(!1),te(!1),Wn(w,Qt),clearTimeout(h),clearTimeout(p),clearTimeout(s),clearTimeout(A),clearTimeout(L),Vt.removeEventListener("scroll",Se),Vt.removeEventListener("hashchange",Qe),Vt.removeEventListener("resize",st),Zt.removeEventListener("keydown",Ke),Zt.removeEventListener("keyup",qe),["click","touchstart"].forEach(function(e){Zt.removeEventListener(e,ue)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){Zt.removeEventListener(e,de,!0)}),Rt("dragAndMove")&&S.dragAndMove.destroy(),clearTimeout(h),clearTimeout(p),e&&(Ot(0),On("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){Ne(e,"src")}),On("img[data-srcset]").forEach(function(e){Ne(e,"srcset")}),ro(On(un+", "+yn+", "+xn)),Rn(On(nn),{height:"","background-color":"",padding:""}),Rn(On(vn),{width:""}),Rn(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Rn(r,{overflow:"",height:""}),Xn(On("html"),Jt),Xn(m,Ut),m.className.split(/\s+/).forEach(function(e){0===e.indexOf(Kt)&&Xn(m,e)}),On(nn+", "+vn).forEach(function(e){g.scrollOverflowHandler&&g.scrollOverflow&&g.scrollOverflowHandler.remove(e),Xn(e,bn+" "+qt+" "+en);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Cn(e,tn)&&!z&&e.removeAttribute("data-anchor")}),Ht(w),[ln,Sn,gn].forEach(function(e){On(e,w).forEach(function(e){Fn(e)})}),Vt.scrollTo(0,0),[tn,dn,mn].forEach(function(e){Xn(On("."+e),e)}))},S.getActiveSection=function(){return new Wt(On(on)[0])},S.getActiveSlide=function(){return Ie(On(pn,On(on)[0])[0])},S.landscapeScroll=rt,S.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<On(g.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<On(g.sectionSelector,w).length;t++)e.push(0);return e}(),options:g,setAutoScrolling:_},S.shared={afterRenderActions:me},Vt.fullpage_api=S,ve("continuousHorizontal"),ve("scrollHorizontally"),ve("resetSliders"),ve("interlockedSlides"),ve("responsiveSlides"),ve("fadingEffect"),ve("dragAndMove"),ve("offsetSections"),ve("scrollOverflowReset"),ve("parallax"),Rt("dragAndMove")&&S.dragAndMove.init(),g.css3&&(g.css3=function(){var e,t=Zt.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",Zt.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=Vt.getComputedStyle(t).getPropertyValue(n[o]));return Zt.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),g.scrollBar=g.scrollBar||g.hybrid,function(){if(!g.anchors.length){var e="[data-anchor]",t=On(g.sectionSelector.split(",").join(e+",")+e,w);t.length&&(z=!0,t.forEach(function(e){g.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!g.navigationTooltips.length){var e="[data-tooltip]",n=On(g.sectionSelector.split(",").join(e+",")+e,w);n.length&&n.forEach(function(e){g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Rn(w,{height:"100%",position:"relative"}),Wn(w,Gt),Wn(On("html"),Jt),y=Hn(),Xn(w,Qt),Wn(On(g.sectionSelector,w),tn),Wn(On(g.slideSelector,w),dn),It("parallax","init");for(var e=On(nn),t=0;t<e.length;t++){var n=t,o=e[t],r=On(vn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),s=o,(c=n)||null!=On(on)[0]||Wn(s,qt),u=On(on)[0],Rn(s,{height:he(s)+"px"}),g.paddingTop&&Rn(s,{"padding-top":g.paddingTop}),g.paddingBottom&&Rn(s,{"padding-bottom":g.paddingBottom}),void 0!==g.sectionsColor[c]&&Rn(s,{"background-color":g.sectionsColor[c]}),void 0!==g.anchors[c]&&s.setAttribute("data-anchor",g.anchors[c]),l=o,a=n,void 0!==g.anchors[a]&&Cn(l,qt)&&dt(g.anchors[a],a),g.menu&&g.css3&&null!=Un(On(g.menu)[0],Ft)&&m.appendChild(On(g.menu)[0]),0<i?pe(o,r,i):g.verticalCentered&&ht(o)}var l,a,s,c;g.fixedElements&&g.css3&&On(g.fixedElements).forEach(function(e){m.appendChild(e)}),g.navigation&&function(){var e=Zt.createElement("div");e.setAttribute("id",cn);var t=Zt.createElement("ul");e.appendChild(t),Vn(e,m);var n=On(un)[0];Wn(n,"fp-"+g.navigationPosition),g.showActiveTooltip&&Wn(n,"fp-show-active");for(var o="",r=0;r<On(nn).length;r++){var i="";g.anchors.length&&(i=g.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ge(r,"Section")+"</span><span></span></a>";var l=g.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+fn+" fp-"+g.navigationPosition+'">'+l+"</div>"),o+="</li>"}On("ul",n)[0].innerHTML=o,Rn(On(un),{"margin-top":"-"+On(un)[0].offsetHeight/2+"px"}),Wn(On("a",On("li",On(un)[0])[Pn(On(on)[0],nn)]),qt)}(),On('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),g.fadingEffect&&S.fadingEffect&&S.fadingEffect.apply(),g.scrollOverflow&&(v=g.scrollOverflowHandler.init(g))}(),$(!0),ee(!0),_(g.autoScrolling,"internal"),ct(),At(),"complete"===Zt.readyState&&_e(),Vt.addEventListener("load",_e),g.scrollOverflow||me(),Vt.addEventListener("scroll",Se),Vt.addEventListener("hashchange",Qe),Vt.addEventListener("blur",nt),Vt.addEventListener("resize",st),Zt.addEventListener("keydown",Ke),Zt.addEventListener("keyup",qe),["click","touchstart"].forEach(function(e){Zt.addEventListener(e,ue)}),g.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){fe(e,!1)}),["mouseleave","touchend"].forEach(function(e){fe(e,!0)})),Rt("dragAndMove")&&S.dragAndMove.turnOffTouch());var N,j,P,Y=!1,D=0,W=0,X=0,V=0,Z=(new Date).getTime(),G=0,F=0,U=y;return S}function _(e,t){e||Ot(0),Nt("autoScrolling",e,t);var n=On(on)[0];if(g.autoScrolling&&!g.scrollBar)Rn(r,{overflow:"hidden",height:"100%"}),Q(I.recordHistory,"internal"),Rn(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Ot(n.offsetTop);else if(Rn(r,{overflow:"visible",height:"initial"}),Q(!1,"internal"),Rn(w,{"-ms-touch-action":"","touch-action":""}),Ht(w),null!=n){var o=ze(n.offsetTop);o.element.scrollTo(0,o.options)}eo(w,"setAutoScrolling",e)}function Q(e,t){Nt("recordHistory",e,t)}function J(e,t){"internal"!==t&&g.fadingEffect&&S.fadingEffect&&S.fadingEffect.update(e),Nt("scrollingSpeed",e,t)}function K(e,t){Nt("fitToSection",e,t)}function q(e){e?(function(){var e,t="";Vt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in Zt.createElement("div")?"wheel":void 0!==Zt.onmousewheel?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==n?Zt[e](t+"MozMousePixelScroll",Me,!1):Zt[e](t+n,Me,!1)}(),w.addEventListener("mousedown",$e),w.addEventListener("mouseup",et)):(Zt.addEventListener?(Zt.removeEventListener("mousewheel",Me,!1),Zt.removeEventListener("wheel",Me,!1),Zt.removeEventListener("MozMousePixelScroll",Me,!1)):Zt.detachEvent("onmousewheel",Me),w.removeEventListener("mousedown",$e),w.removeEventListener("mouseup",et))}function $(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ct(t,e,"m")}):Ct(t,"all","m"),eo(w,"setAllowScrolling",{value:t,directions:e})}function ee(e){e?(q(!0),function(){if(n||o){g.autoScrolling&&(m.removeEventListener(C.touchmove,ye,{passive:!1}),m.addEventListener(C.touchmove,ye,{passive:!1}));var e=On(Ft)[0];e&&(e.removeEventListener(C.touchstart,Ae),e.removeEventListener(C.touchmove,Ee,{passive:!1}),e.addEventListener(C.touchstart,Ae),e.addEventListener(C.touchmove,Ee,{passive:!1}))}}()):(q(!1),function(){if(n||o){g.autoScrolling&&(m.removeEventListener(C.touchmove,Ee,{passive:!1}),m.removeEventListener(C.touchmove,ye,{passive:!1}));var e=On(Ft)[0];e&&(e.removeEventListener(C.touchstart,Ae),e.removeEventListener(C.touchmove,Ee,{passive:!1}))}}())}function te(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ct(t,e,"k")}):(Ct(t,"all","k"),g.keyboardScrolling=t)}function ne(){var e=In(On(on)[0],nn);e||!g.loopTop&&!g.continuousVertical||(e=jn(On(nn))),null!=e&&Ce(e,null,!0)}function oe(){var e=zn(On(on)[0],nn);e||!g.loopBottom&&!g.continuousVertical||(e=On(nn)[0]),null!=e&&Ce(e,null,!1)}function re(e,t){J(0,"internal"),ie(e,t),J(I.scrollingSpeed,"internal")}function ie(e,t){var n=St(e);void 0!==t?bt(e,t):null!=n&&Ce(n)}function le(e){Te("right",e)}function ae(e){Te("left",e)}function se(e){if(!Cn(w,Qt)){E=!0,y=Hn();for(var t=On(nn),n=0;n<t.length;++n){var o=t[n],r=On(gn,o)[0],i=On(vn,o);g.verticalCentered&&Rn(On(ln,o),{height:gt(o)+"px"}),Rn(o,{height:he(o)+"px"}),1<i.length&&rt(r,On(pn,r)[0])}g.scrollOverflow&&v.createScrollBarForAll();var l=Pn(On(on)[0],nn);l&&!Rt("fadingEffect")&&re(l+1),E=!1,$n(g.afterResize)&&e&&g.afterResize.call(w,Vt.innerWidth,Vt.innerHeight),$n(g.afterReBuild)&&!e&&g.afterReBuild.call(w),eo(w,"afterRebuild")}}function ce(e){var t=Cn(m,Ut);e?t||(_(!1,"internal"),K(!1,"internal"),Yn(On(un)),Wn(m,Ut),$n(g.afterResponsive)&&g.afterResponsive.call(w,e),g.responsiveSlides&&S.responsiveSlides&&S.responsiveSlides.toSections(),eo(w,"afterResponsive",e),g.scrollOverflow&&v.createScrollBarForAll()):t&&(_(I.autoScrolling,"internal"),K(I.autoScrolling,"internal"),Dn(On(un)),Xn(m,Ut),$n(g.afterResponsive)&&g.afterResponsive.call(w,e),g.responsiveSlides&&S.responsiveSlides&&S.responsiveSlides.toSlides(),eo(w,"afterResponsive",e))}function ue(e){var t=e.target;t&&Un(t,un+" a")?function(e){qn(e);var t=Pn(Un(this,un+" li"));Ce(On(nn)[t])}.call(t,e):to(t,".fp-tooltip")?function(){eo(Bn(this),"click")}.call(t):to(t,xn)?function(){var e=Un(this,nn);Cn(this,An)?d.m.left&&ae(e):d.m.right&&le(e)}.call(t,e):to(t,En)||null!=Un(t,En)?function(e){qn(e);var t=On(gn,Un(this,nn))[0],n=On(vn,t)[Pn(Un(this,"li"))];rt(t,n)}.call(t,e):Un(t,g.menu+" [data-menuanchor]")&&function(e){!On(g.menu)[0]||!g.lockAnchors&&g.anchors.length||(qn(e),ie(this.getAttribute("data-menuanchor")))}.call(t,e)}function fe(e,t){Zt["fp_"+e]=t,Zt.addEventListener(e,de,!0)}function de(t){t.target!=Zt&&g.normalScrollElements.split(",").forEach(function(e){null!=Un(t.target,e)&&ee(Zt["fp_"+t.type])})}function ve(e){var t="fp_"+e+"Extension";B[e]=g[e+"Key"],S[e]=void 0!==Vt[t]?new Vt[t]:null,S[e]&&S[e].c(e)}function pe(e,t,n){var o=100*n,r=100/n,i=Zt.createElement("div");i.className=hn,Zn(t,i);var l,a,s=Zt.createElement("div");s.className=mn,Zn(t,s),Rn(On(Sn,e),{width:o+"%"}),1<n&&(g.controlArrows&&(l=e,a=[oo('<div class="fp-controlArrow fp-prev"></div>'),oo('<div class="fp-controlArrow fp-next"></div>')],_n(On(gn,l)[0],a),"#fff"!==g.controlArrowColor&&(Rn(On(Mn,l),{"border-color":"transparent transparent transparent "+g.controlArrowColor}),Rn(On(Ln,l),{"border-color":"transparent "+g.controlArrowColor+" transparent transparent"})),g.loopHorizontal||Yn(On(Ln,l))),g.slidesNavigation&&function(e,t){Vn(oo('<div class="'+wn+'"><ul></ul></div>'),e);var n=On(yn,e)[0];Wn(n,"fp-"+g.slidesNavPosition);for(var o=0;o<t;o++)Vn(oo('<li><a href="#"><span class="fp-sr-only">'+ge(o,"Slide")+"</span><span></span></a></li>"),On("ul",n)[0]);Rn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),Wn(On("a",On("li",n)[0]),qt)}(e,n)),t.forEach(function(e){Rn(e,{width:r+"%"}),g.verticalCentered&&ht(e)});var c=On(pn,e)[0];null!=c&&(0!==Pn(On(on),nn)||0===Pn(On(on),nn)&&0!==Pn(c))?(Tt(c,"internal"),Wn(c,"fp-initial")):Wn(t[0],qt)}function he(e){return g.offsetSections&&S.offsetSections?Math.round(S.offsetSections.getWindowHeight(e)):Hn()}function ge(e,t){return g.navigationTooltips[e]||g.anchors[e]||t+" "+(e+1)}function me(){var e,t=On(on)[0];Wn(t,en),je(t),Pe(t),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),(!(e=St(Je().section))||void 0!==e&&Pn(e)===Pn(u))&&$n(g.afterLoad)&&He("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:Pn(t,nn)}),$n(g.afterRender)&&He("afterRender"),eo(w,"afterRender")}function Se(){var e;if(eo(w,"onScroll"),(!g.autoScrolling||g.scrollBar||Rt("dragAndMove"))&&!Bt()){var t=Rt("dragAndMove")?Math.abs(S.dragAndMove.getCurrentScroll()):Jn(),n=0,o=t+Hn()/2,r=(Rt("dragAndMove")?S.dragAndMove.getDocumentHeight():m.offsetHeight-Hn())===t,i=On(nn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Cn(e=i[n],qt)){Y=!0;var a,s,c=On(on)[0],u=Pn(c,nn)+1,f=vt(e),d=e.getAttribute("data-anchor"),v=Pn(e,nn)+1,p=On(pn,e)[0],h={activeSection:c,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(s=p.getAttribute("data-anchor"),a=Pn(p)),x&&(Wn(e,qt),Xn(Kn(e),qt),It("parallax","afterLoad"),$n(g.onLeave)&&He("onLeave",h),$n(g.afterLoad)&&He("afterLoad",h),g.resetSliders&&S.resetSliders&&S.resetSliders.apply({localIsResizing:E,leavingSection:u}),De(c),je(e),Pe(e),dt(d,v-1),g.anchors.length&&(b=d),yt(a,s,d)),clearTimeout(A),A=setTimeout(function(){Y=!1},100)}g.fitToSection&&(clearTimeout(L),L=setTimeout(function(){g.fitToSection&&On(on)[0].offsetHeight<=y&&be()},g.fitToSectionDelay))}}function be(){x&&(E=!0,Ce(On(on)[0]),E=!1)}function we(e){if(d.m[e]){var t="down"===e?oe:ne;if(S.scrollHorizontally&&(t=S.scrollHorizontally.getScrollSection(e,t)),g.scrollOverflow){var n=g.scrollOverflowHandler.scrollable(On(on)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!g.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function ye(e){g.autoScrolling&&xe(e)&&qn(e)}function Ee(e){var t=Un(e.target,nn);if(xe(e)){g.autoScrolling&&qn(e);var n=Mt(e);X=n.y,V=n.x,On(gn,t).length&&Math.abs(W-V)>Math.abs(D-X)?!a&&Math.abs(W-V)>Vt.innerWidth/100*g.touchSensitivity&&(V<W?d.m.right&&le(t):d.m.left&&ae(t)):g.autoScrolling&&x&&Math.abs(D-X)>Vt.innerHeight/100*g.touchSensitivity&&(X<D?we("down"):D<X&&we("up"))}}function xe(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Ae(e){if(g.fitToSection&&(O=!1),xe(e)){var t=Mt(e);D=t.y,W=t.x}}function Le(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Me(e){var t=(new Date).getTime(),n=Cn(On(".fp-completely")[0],sn);if(!d.m.down&&!d.m.up)return qn(e),!1;if(g.autoScrolling&&!c&&!n){var o=(e=e||Vt.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<f.length&&f.shift(),f.push(Math.abs(o)),g.scrollBar&&qn(e);var a=t-Z;if(Z=t,200<a&&(f=[]),x&&!zt()){var s=Le(f,10);Le(f,70)<=s&&l&&we(r<0?"down":"up")}return!1}g.fitToSection&&(O=!1)}function Te(e,t){var n=null==t?On(on)[0]:t,o=On(gn,n)[0];if(!(null==o||zt()||a||On(vn,o).length<2)){var r=On(pn,o)[0],i=null;if(null==(i="left"===e?In(r,vn):zn(r,vn))){if(!g.loopHorizontal)return;var l=Kn(r);i="left"===e?l[l.length-1]:l[0]}a=!S.test.isTesting,rt(o,i,e)}}function Oe(){for(var e=On(pn),t=0;t<e.length;t++)Tt(e[t],"internal")}function ke(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=Rt("dragAndMove")&&S.dragAndMove.isGrabbing?S.dragAndMove.isScrollingDown():G<n,i=o-y+t,l=g.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==Nn(e))&&(o=i),g.offsetSections&&S.offsetSections&&(o=S.offsetSections.getSectionPosition(r,o,e)),G=o}function Ce(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:ke(e),yMovement:vt(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:Pn(e,nn),activeSlide:On(pn,e)[0],activeSection:On(on)[0],leavingSection:Pn(On(on),nn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||g.scrollBar&&Jn()===i.dtop&&!Cn(e,an))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=Pn(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,$n(g.onLeave)&&!1===He("onLeave",i))return}var a;It("parallax","apply",i),g.autoScrolling&&g.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((s=i).isMovementUp?Qn(On(on)[0],io(s.activeSection,nn)):_n(On(on)[0],lo(s.activeSection,nn).reverse()),Ot(On(on)[0].offsetTop),Oe(),s.wrapAroundElements=s.activeSection,s.dtop=s.element.offsetTop,s.yMovement=vt(s.element),s.leavingSection=Pn(s.activeSection,nn)+1,s.sectionIndex=Pn(s.element,nn),eo(On(Ft)[0],"onContinuousVertical",s),i=s),Rt("scrollOverflowReset")&&S.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||De(i.activeSection),g.scrollOverflow&&g.scrollOverflowHandler.beforeLeave(),Wn(e,qt),Xn(Kn(e),qt),je(e),g.scrollOverflow&&g.scrollOverflowHandler.onLeave(),x=S.test.isTesting,yt(r,o,i.anchorLink,i.sectionIndex),function(e){if(g.css3&&g.autoScrolling&&!g.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";mt(t,!0),g.scrollingSpeed?(clearTimeout(p),p=setTimeout(function(){Be(e)},g.scrollingSpeed)):Be(e)}else{var n=ze(e.dtop);S.test.top=-e.dtop+"px",Pt(n.element,n.options,g.scrollingSpeed,function(){g.scrollBar?setTimeout(function(){Be(e)},30):Be(e)})}}(i),b=i.anchorLink,dt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?On(nn).length-1:0)}}var s}function He(e,t){var n,o,r,i,l=(o=e,r=t,(i=g.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Re(On(on)[0]),slide:Ie(On(pn,On(on)[0])[0])}},onLeave:function(){return{origin:Re(r.activeSection),destination:Re(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Re(r.section),origin:Ie(r.prevSlide),destination:Ie(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(g.v2compatible){if(!1===g[e].apply(l[0],l.slice(1)))return!1}else if(eo(w,e,l),!1===g[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Re(e){return e?new Wt(e):null}function Ie(e){return e?new Xt(e):null}function ze(e){var t={};return g.autoScrolling&&!g.scrollBar?(t.options=-e,t.element=On(Ft)[0]):(t.options=e,t.element=Vt),t}function Be(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?Qn(On(nn)[0],t.wrapAroundElements):_n(On(nn)[On(nn).length-1],t.wrapAroundElements),Ot(On(on)[0].offsetTop),Oe(),t.sectionIndex=Pn(t.element,nn),t.leavingSection=Pn(t.activeSection,nn)+1),$n(g.afterLoad)&&!e.localIsResizing&&He("afterLoad",e),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),It("parallax","afterLoad"),Rt("scrollOverflowReset")&&S.scrollOverflowReset.reset(),Rt("resetSliders")&&S.resetSliders.apply(e),e.localIsResizing||Pe(e.element),Wn(e.element,en),Xn(Kn(e.element),en),x=!0,$n(e.callback)&&e.callback()}function Ne(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function je(e){g.lazyLoading&&On("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",We(e)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&Ne(n,e)}),to(n,"source")){var e=Un(n,"video, audio");e&&e.load()}})}function Pe(e){var t=We(e);On("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),On('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Ye(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Ye(e)}})}function Ye(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function De(e){var t=We(e);On("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),On('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function We(e){var t=On(pn,e);return t.length&&(e=t[0]),e}function Xe(e){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",s=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");s<e.length;)t=c.indexOf(e.charAt(s++))<<2|(r=c.indexOf(e.charAt(s++)))>>4,n=(15&r)<<4|(i=c.indexOf(e.charAt(s++)))>>2,o=(3&i)<<6|(l=c.indexOf(e.charAt(s++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function Ve(e){var t=function(){if(Zt.domain.length){for(var e=Zt.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],o=Xe(n[0]),r=Xe(n[1]),i=Xe(n[2]),l=Xe(n[3]),a=[o,r,i].indexOf(t)<0&&0!==t.length,s=void 0!==B[e]&&B[e].length;if(!s&&a)return!1;var c=s?Xe(B[e]):"",u=1<(c=c.split("_")).length&&-1<c[1].indexOf(e,c[1].length-e.length);return!(c[0].indexOf(t,c[0].length-t.length)<0&&a&&l!=c[0])&&u||!a}function Ze(e){e.forEach(function(e){e.removedNodes[0]&&e.removedNodes[0].isEqualNode(j)&&(clearTimeout(P),P=setTimeout(Ge,900))})}function Ge(){H=!1}function Fe(e){j=Zt.createElement("div"),N=Xe("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),j.innerHTML=N,j=j.firstChild,"MutationObserver"in Vt&&new MutationObserver(Ze).observe(Zt.body,{childList:!0,subtree:!1}),Rt(e)&&S[e]&&(Ve(e)||(Ue(),setInterval(Ue,2e3)))}function Ue(){j&&(H||(Math.random()<.5?ao(m,j):Vn(j,m),H=!0),j.setAttribute("style",Xe("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,Xe("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function _e(){var e=Je(),t=e.section,n=e.slide;t&&(g.animateAnchor?bt(t,n):re(t,n))}function Qe(){if(!Y&&!g.lockAnchors){var e=Je(),t=e.section,n=e.slide,o=void 0===b,r=void 0===b&&void 0===n&&!a;t&&t.length&&(t&&t!==b&&!o||r||!a&&i!=n)&&bt(t,n)}}function Je(){var e,t,n=Vt.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function Ke(e){clearTimeout(M);var t=Zt.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=Zt.activeElement,u=tt(We(On(on)[0]));function f(e){return qn(e),u[0]?u[0].focus():null}(t=e,n=tt(Zt),o=n.indexOf(Zt.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Ie(Un(i,vn)),a=Re(Un(i,nn)),l||a)&&(c?null==Un(c,on+","+on+" "+pn)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&qn(e))}(e):to(t,"textarea")||to(t,"input")||to(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!g.keyboardScrolling||!g.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&qn(e),c=e.ctrlKey,M=setTimeout(function(){!function(e){var t=e.shiftKey;if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:d.k.up&&ne();break;case 32:if(t&&d.k.up){ne();break}case 40:case 34:d.k.down&&oe();break;case 36:d.k.up&&ie(1);break;case 35:d.k.down&&ie(On(nn).length);break;case 37:d.k.left&&ae();break;case 39:d.k.right&&le()}}(e)},150))}function qe(e){l&&(c=e.ctrlKey)}function $e(e){2==e.which&&(F=e.pageY,w.addEventListener("mousemove",ot))}function et(e){2==e.which&&w.removeEventListener("mousemove",ot)}function tt(e){return[].slice.call(On(R,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function nt(){c=l=!1}function ot(e){x&&(e.pageY<F&&d.m.up?ne():e.pageY>F&&d.m.down&&oe()),F=e.pageY}function rt(e,t,n){var o=Un(e,nn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:Pn(t),section:o,sectionIndex:Pn(o,nn),anchorLink:o.getAttribute("data-anchor"),slidesNav:On(yn,o)[0],slideAnchor:xt(t),prevSlide:On(pn,o)[0],prevSlideIndex:Pn(On(pn,o)[0]),localIsResizing:E};r.xMovement=pt(r.prevSlideIndex,r.slideIndex),r.localIsResizing||(x=!1),It("parallax","applyHorizontal",r),g.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&$n(g.onSlideLeave)&&!1===He("onSlideLeave",r)?a=!1:(Wn(t,qt),Xn(Kn(t),qt),r.localIsResizing||(De(r.prevSlide),je(t)),it(r),Cn(o,qt)&&!r.localIsResizing&&yt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),S.continuousHorizontal&&S.continuousHorizontal.apply(r),Bt()?lt(r):at(e,r,!0),g.interlockedSlides&&S.interlockedSlides&&(Rt("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||S.interlockedSlides.apply(r)))}function it(e){!g.loopHorizontal&&g.controlArrows&&(no(On(Ln,e.section),0!==e.slideIndex),no(On(Mn,e.section),null!=Nn(e.destiny)))}function lt(e){var t,n;S.continuousHorizontal&&S.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,g.slidesNavigation&&null!=t&&(Xn(On($t,t),qt),Wn(On("a",On("li",t)[n]),qt)),e.localIsResizing||(It("parallax","afterSlideLoads"),$n(g.afterSlideLoad)&&He("afterSlideLoad",e),x=!0,Pe(e.destiny)),a=!1,Rt("interlockedSlides")&&S.interlockedSlides.apply(e)}function at(e,t,n){var o=t.destinyPos;if(g.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";S.test.translate3dH[t.sectionIndex]=r,Rn(ut(On(Sn,e)),kt(r)),h=setTimeout(function(){n&&lt(t)},g.scrollingSpeed)}else S.test.left[t.sectionIndex]=Math.round(o.left),Pt(e,Math.round(o.left),g.scrollingSpeed,function(){n&&lt(t)})}function st(){if(eo(w,"onResize"),ct(),n){var e=Zt.activeElement;if(!to(e,"textarea")&&!to(e,"input")&&!to(e,"select")){var t=Hn();Math.abs(t-U)>20*Math.max(U,t)/100&&(s=setTimeout(function(){se(!0),U=t},navigator.userAgent.match("CriOS")?50:0))}}else clearTimeout(s),s=setTimeout(function(){se(!0)},350)}function ct(){var e=g.responsive||g.responsiveWidth,t=g.responsiveHeight,n=e&&Vt.innerWidth<e,o=t&&Vt.innerHeight<t;e&&t?ce(n||o):e?ce(n):t&&ce(o)}function ut(e){var t="all "+g.scrollingSpeed+"ms "+g.easingcss3;return Xn(e,_t),Rn(e,{"-webkit-transition":t,transition:t})}function ft(e){return Wn(e,_t)}function dt(e,t){var n,o,r,i;n=e,o=On(g.menu)[0],g.menu&&null!=o&&(Xn(On($t,o),qt),Wn(On('[data-menuanchor="'+n+'"]',o),qt)),r=e,i=t,g.navigation&&null!=On(un)[0]&&(Xn(On($t,On(un)[0]),qt),Wn(r?On('a[href="#'+r+'"]',On(un)[0]):On("a",On("li",On(un)[0])[i]),qt))}function vt(e){var t=Pn(On(on)[0],nn),n=Pn(e,nn);return t==n?"none":n<t?"up":"down"}function pt(e,t){return e==t?"none":t<e?"left":"right"}function ht(e){if(!Cn(e,bn)){var t=Zt.createElement("div");t.className=rn,t.style.height=gt(e)+"px",Wn(e,bn),Gn(e,t)}}function gt(e){var t=he(e);if(g.paddingTop||g.paddingBottom){var n=e;Cn(n,tn)||(n=Un(e,nn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function mt(e,t){t?ut(w):ft(w),clearTimeout(T),Rn(w,kt(e)),S.test.translate3d=e,T=setTimeout(function(){Xn(w,_t)},10)}function St(e){var t=On(nn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=On(nn)[n]}return t}function bt(e,t){var n=St(e);if(null!=n){var o,r,i,l=(null==(i=On(vn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=On(vn,r)[o]),i);xt(n)===b||Cn(n,qt)?wt(l):Ce(n,function(){wt(l)})}}function wt(e){null!=e&&rt(Un(e,gn),e)}function yt(e,t,n,o){var r="";g.anchors.length&&!g.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Et(r+"/"+(i=t))):(null!=e&&(i=t),Et(n))),At()}function Et(e){if(g.recordHistory)location.hash=e;else if(n||o)Vt.history.replaceState(void 0,void 0,"#"+e);else{var t=Vt.location.href.split("#")[0];Vt.location.replace(t+"#"+e)}}function xt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=Pn(e);return null==t&&(t=n),t}function At(){var e=On(on)[0],t=On(pn,e)[0],n=xt(e),o=xt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+Kt+"-[^\\s]+\\b","g");m.className=m.className.replace(i,""),Wn(m,Kt+"-"+r)}function Lt(){return Vt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Mt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,o&&xe(e)&&g.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Tt(e,t){J(0,"internal"),void 0!==t&&(E=!0),rt(Un(e,gn),e),void 0!==t&&(E=!1),J(I.scrollingSpeed,"internal")}function Ot(e){var t=Math.round(e);if(g.css3&&g.autoScrolling&&!g.scrollBar)mt("translate3d(0px, -"+t+"px, 0px)",!1);else if(g.autoScrolling&&!g.scrollBar)Rn(w,{top:-t+"px"}),S.test.top=-t+"px";else{var n=ze(t);Yt(n.element,n.options)}}function kt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Ct(t,e,n){"all"!==e?d[n][e]=t:Object.keys(d[n]).forEach(function(e){d[n][e]=t})}function Ht(e){return Rn(e,{"-webkit-transition":"none",transition:"none"})}function Rt(e){return null!==g[e]&&"[object Array]"===Object.prototype.toString.call(g[e])?g[e].length&&S[e]:g[e]&&S[e]}function It(e,t,n){if(Rt(e))return S[e][t](n)}function zt(){return Rt("dragAndMove")&&S.dragAndMove.isAnimating}function Bt(){return Rt("dragAndMove")&&S.dragAndMove.isGrabbing}function Nt(e,t,n){g[e]=t,"internal"!==n&&(I[e]=t)}function jt(){t||(Tn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Tn("error","https://github.com/alvarotrigo/fullPage.js#options.")),Cn(On("html"),Jt)?Tn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,Tn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!g.scrollOverflow||!g.scrollBar&&g.autoScrolling||Tn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!g.continuousVertical||!g.scrollBar&&g.autoScrolling||(g.continuousVertical=!1,Tn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),g.scrollOverflow&&null==g.scrollOverflowHandler&&(g.scrollOverflow=!1,Tn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),g.anchors.forEach(function(t){var e=[].slice.call(On("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(On("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});(n.length||e.length)&&(Tn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&Tn("error",'"'+t+'" is is being used by another element `id` property'),e.length&&Tn("error",'"'+t+'" is is being used by another element `name` property'))}))}function Pt(t,n,o,r){var e,i=(e=t).self!=Vt&&Cn(e,hn)?e.scrollLeft:!g.autoScrolling||g.scrollBar?Jn():e.offsetTop,l=n-i,a=0;O=!0;var s=function(){if(O){var e=n;a+=20,o&&(e=Vt.fp_easings[g.easing](a,i,l,o)),Yt(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function Yt(e,t){!g.autoScrolling||g.scrollBar||e.self!=Vt&&Cn(e,hn)?e.self!=Vt&&Cn(e,hn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function Dt(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=Pn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Wt(e){Dt.call(this,e,nn)}function Xt(e){Dt.call(this,e,vn)}jt()}}),window.jQuery&&window.fullpage&&function(n,o){"use strict";n&&o?n.fn.fullpage=function(e){var t=new o(this[0],e);Object.keys(t).forEach(function(e){n.fn.fullpage[e]=t[e]})}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 49 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(49);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * fullPage 3.0.4\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{position:relative}.fp-scrollable,.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;margin-top:-32px;top:50%;opacity:1;-webkit-transform:translateZ(0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li:hover a.active span,#fp-nav ul li a.active span,.fp-slidesNav ul li:hover a.active span,.fp-slidesNav ul li a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav.fp-show-active a.active+.fp-tooltip,#fp-nav ul li:hover .fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height.fp-section,.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section,.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(52);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(50)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var isArray = __webpack_require__(31);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(54);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(39);
var IObject = __webpack_require__(37);
var toObject = __webpack_require__(19);
var toLength = __webpack_require__(34);
var asc = __webpack_require__(55);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(15);
var $find = __webpack_require__(56)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(27)(KEY);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(15);
var core = __webpack_require__(12);
var fails = __webpack_require__(10);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(19);
var $keys = __webpack_require__(9);

__webpack_require__(58)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(19);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(30);
var descriptor = __webpack_require__(14);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(13);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(20);
var $iterCreate = __webpack_require__(61);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(60);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(28);
var getKeys = __webpack_require__(9);
var redefine = __webpack_require__(13);
var global = __webpack_require__(0);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(20);
var wks = __webpack_require__(2);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(21);
var createDesc = __webpack_require__(14);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(25);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(42);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(5);
var gOPN = __webpack_require__(29).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(16);
var getKeys = __webpack_require__(9);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(69);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(9);
var gOPS = __webpack_require__(32);
var pIE = __webpack_require__(21);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(11)('meta');
var isObject = __webpack_require__(7);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// eslint-disable-line no-unused-vars
var Fullpage;var isFunc=function isFunc(val){return typeof val==='function';};var fullpageCallbacks=['afterLoad','afterRender','afterResize','afterResponsive','afterSlideLoad','onLeave','onSlideLeave'];var ReactFullpage=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpage,_React$Component);function ReactFullpage(props){var _this;_classCallCheck(this,ReactFullpage);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpage).call(this,props));var _this$props=_this.props,render=_this$props.render,pluginWrapper=_this$props.pluginWrapper;if(!isFunc(render)){throw new Error('must provide render prop to <ReactFullpage />');}_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this.props.debug,'ReactFullpage');_this.log('Building component');if(pluginWrapper){_this.log('Calling plugin wrapper');pluginWrapper();}_this.log('Requiring fullpage.js');Fullpage=__webpack_require__(48);_this.state={initialized:false};return _this;}_createClass(ReactFullpage,[{key:"componentDidMount",value:function componentDidMount(){var opts=this.buildOptions();if(Fullpage){this.init(opts);this.markInitialized();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){var newSectionCount=this.getSectionCount();var newSlideCount=this.getSlideCount();var _this$state=this.state,sectionCount=_this$state.sectionCount,slideCount=_this$state.slideCount;// NOTE: if fullpage props have changed we need to rebuild
if(this.props.sectionsColor!==prevProps.sectionsColor){this.log('rebuilding due to a change in fullpage.js props');this.destroy();this.init(this.buildOptions());return;}if(sectionCount===newSectionCount&&slideCount===newSlideCount){return;}// NOTE: if sections/slides have changed we need to rebuild
this.log('rebuilding due to a change in fullpage.js sections/slides');this.destroy();this.init(this.buildOptions());}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.destroy();}},{key:"getSectionCount",value:function getSectionCount(){var _this$props$sectionSe=this.props.sectionSelector,sectionSelector=_this$props$sectionSe===void 0?'.section':_this$props$sectionSe;return document.querySelectorAll(sectionSelector).length;}},{key:"getSlideCount",value:function getSlideCount(){var _this$props$slideSele=this.props.slideSelector,slideSelector=_this$props$slideSele===void 0?'.slide':_this$props$slideSele;return document.querySelectorAll(slideSelector).length;}},{key:"init",value:function init(opts){this.log('Reinitializing fullpage with options',opts);new Fullpage('#fullpage',opts);// eslint-disable-line
this.fullpageApi=window.fullpage_api;this.fpUtils=window.fp_utils;this.fpEasings=window.fp_easings;}},{key:"destroy",value:function destroy(){this.log('Destroying fullpage instance');this.fullpageApi.destroy('all');}},{key:"markInitialized",value:function markInitialized(){this.log('Marking initialized');this.setState({initialized:true,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});}},{key:"buildOptions",value:function buildOptions(){var _this2=this;var filterCb=function filterCb(key){return!!Object.keys(_this2.props).find(function(cb){return cb===key;});};var registered=fullpageCallbacks.filter(filterCb);var listeners=registered.reduce(function(result,key){return _objectSpread({},result,_defineProperty({},key,function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _this2.update.apply(_this2,[key].concat(args));}));},{});// NOTE: override passed in callbacks w/  wrapped listeners
var options=_objectSpread({},this.props,listeners);this.log('Building fullpage.js options: ',options);return options;}},{key:"update",value:function update(lastEvent){var _this$props2;for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}this.log('Event trigger: ',lastEvent);var state=_objectSpread({},this.state,{sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});var makeState=function makeState(callbackParameters){return _objectSpread({},state,callbackParameters,{lastEvent:lastEvent});};var fromArgs=function fromArgs(argList){return argList.reduce(function(result,key,i){var value=args[i];result[key]=value;// eslint-disable-line
return result;},{});};// NOTE: remapping callback args to v3
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['origin','destination','direction']));break;case'afterResize':state=makeState(fromArgs(['']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['section','origin','destination','direction']));break;// On-*
case'onLeave':state=makeState(fromArgs(['origin','destination','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['section','origin','slideIndex','destination','direction']));break;default:break;}var returned=(_this$props2=this.props)[lastEvent].apply(_this$props2,args);this.log('Called callback: Returning => ',returned);this.log('Updating State => ',state);this.setState(state);return returned;}},{key:"render",value:function render(){this.log('<== Rendering ==>');return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{id:"fullpage"},this.props.render(this));}}]);return ReactFullpage;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpage);

/***/ })
/******/ ]);
});