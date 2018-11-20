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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(32);
var toPrimitive = __webpack_require__(19);
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
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(12);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(35);
var defined = __webpack_require__(21);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(31);
var hide = __webpack_require__(5);
var has = __webpack_require__(4);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(34);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(21);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
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
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(15) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(15);
var wksExt = __webpack_require__(28);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// index.js, 页面入口文件
// 整个语句都开启严格模式的语法

// 输出对象

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(45);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keepsmiling = {};

// 运行代码
if (window && typeof window !== "undefined") {
  if (!window.keepsmiling) {
    window.ks = window.keepsmiling = keepsmiling;
  } else {
    // 怎么处理
  }
}

// 模块属性添加
var packageConfig = __webpack_require__(52);
keepsmiling.version = packageConfig.version;
keepsmiling.description = packageConfig.description;
keepsmiling.docs = packageConfig.docs;

// 获取下边的所有文件，并扩展原对象,files是一个函数，支持一级展示
var files = __webpack_require__(53);
// files.keys()，是拿到对应的文件夹的名称
files.keys().forEach(function (key) {
  key.substring(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
  (0, _assign2.default)(keepsmiling, files(key));
});

console.log("keepsmiling工具函数:", keepsmiling);

exports.default = keepsmiling;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(48);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(33)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(50)(false);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(57);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(68);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(59)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(40)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(41);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(14);
var $iterCreate = __webpack_require__(60);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(63);
var ITERATOR = __webpack_require__(1)('iterator');
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(61);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(33)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(62).appendChild(iframe);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(34);
var hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBrowserEnv = exports.isObject = undefined;

var _keys = __webpack_require__(93);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(38);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isEmptyObject = isEmptyObject;
exports.isEmail = isEmail;
exports.isIdCard = isIdCard;
exports.isPhoneNum = isPhoneNum;
exports.isUrl = isUrl;
exports.isPrime = isPrime;
exports.isPalindrome = isPalindrome;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module is
 */
/**
 * @desc 判断`obj`是否为空
 * @param {Object} obj object
 * @return {Boolean}
 */
function isEmptyObject(obj) {
  if (!obj || (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) !== "object" || Array.isArray(obj)) return false;
  return !(0, _keys2.default)(obj).length;
}

/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str - 邮箱地址
 * @return {Boolean}
 */
function isEmail(str) {
  return (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
  );
}
/**
 * @desc  判断是否为身份证号
 * @param  {String} code - 身份证号
 * @return {Object} 包括返回结果的状态及提示信息
 */
function isIdCard(code) {
  // return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
  var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
  var tip = "";
  var pass = true;
  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
    tip = "身份证号格式错误";
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    tip = "地址编码错误";
    pass = false;
  } else {
    //18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split("");
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      if (parity[sum % 11] != code[17]) {
        tip = "校验位错误";
        pass = false;
      }
    }
  }
  return { pass: pass, tip: tip };
}
/**
 * @desc   判断是否为手机号
 * @param  {String} str - 手机号的数值型或者字符串
 * @return {Boolean}
 */
function isPhoneNum(str) {
  return (/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
  );
}
/**
 * @desc   判断是否为URL地址
 * @param  {String} str - URL地址
 * @return {Boolean}
 */
function isUrl(str) {
  return (/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str)
  );
}

/**
 * 判断是纯对象（非数组，非函数）
 * @param {object} obj 需要判断的对象
 * @return {Boolean}
 */
var isObject = exports.isObject = function isObject(obj) {
  if (obj && (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === "object" && obj.toString === "[object Object]") {
    return true;
  } else {
    return false;
  }
};

/**
 * 检测是不是指数
 * @param {*} n - 需要判断的数值
 */
function isPrime(n) {
  return !/^.?$|^(..+?)\1+$/.test("1".repeat(n));
}

/**
 * @desc 添加js的类型判断函数
 * @return {function}
 */
(function () {
  "use strict";

  var types = "Array Object String Date RegExp Function Boolean Number Null Undefined".split(" ");
  function type() {
    return Object.prototype.toString.call(this).slice(8, -1);
  }
  for (var i = types.length; i--;) {
    window.keepsmiling["is" + types[i]] = function (self) {
      return function (elem) {
        return type.call(elem) === self;
      };
    }(types[i]);
  }
})(); //类型判断

/**
 * 判断是不是在node环境下执行代码
 * @summary Only Node.JS has a process letiable that is of [[Class]] process
 * @param {object} - 当前的全局process对象
 * @return {Boolean}
 */
var isBrowserEnv = exports.isBrowserEnv = function isBrowserEnv(process) {
  return Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
};
/**
 * @function
 * @description 检测字符串是不是回文结构
 * @param {String} str - 需要检测的字符串
 * @return {Boolean} 返回的boolan值
 * @example
 * isPalindrome("level");
 * // returns true
 * isPalindrome("levels");
 * // returns false
 */
function isPalindrome(str) {
  str = str.replace(/W/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(49) });


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(13);
var gOPS = __webpack_require__(26);
var pIE = __webpack_require__(17);
var toObject = __webpack_require__(18);
var IObject = __webpack_require__(35);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(7)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(51);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {"name":"keepsmiling","version":"1.1.0","description":"utils","main":"dist/keepsmiling.min.js","docs":"http://htmlpreview.github.io/?https://github.com/moonbreezee/keepsmiling/blob/master/docs/index.html","scripts":{"dev":"cross-env NODE_ENV=dev node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --config ./scripts/webpack.dev.config.js --color","build":"cross-env NODE_ENV=prod node ./node_modules/webpack/bin/webpack.js --config ./scripts/webpack.build.config.js --color","dep":"cross-env NODE_ENV=dep node ./node_modules/webpack/bin/webpack.js --config ./scripts/webpack.build.config.js --color","jsdoc":"node ./node_modules/jsdoc/jsdoc.js lib/index.js -c ./scripts/jsdoc.conf.json -R README.md -r","test":"npm run dep && node ./node_modules/karma/bin/karma start ./scripts/karma.conf.js","eslint":"node ./node_modules/eslint/bin/eslint.js -c ./scripts/.eslintrc.js lib/** --fix","beforePush":"npm run eslint && npm run jsdoc && npm run build","beforePublish":"npm run eslint && npm run jsdoc && npm run dep"},"repository":{"type":"git","url":"https://github.com/moonbreezee/keepsmiling.git"},"author":"moonbreezee","license":"ISC","bugs":{"url":"https://github.com/moonbreezee/keepsmiling/issues"},"homepage":"https://github.com/moonbreezee/keepsmiling","devDependencies":{"babel-core":"^6.22.1","babel-eslint":"^8.2.3","babel-loader":"^6.4.1","babel-plugin-transform-runtime":"^6.22.0","babel-preset-es2015":"^6.22.0","babel-preset-stage-0":"^6.24.1","cross-env":"^5.1.4","eslint":"^4.19.1","eslint-plugin-node":"^6.0.1","express":"^4.16.4","extract-text-webpack-plugin":"^3.0.2","jsdoc":"^3.5.5","karma":"^2.0.2","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","karma-power-assert":"^1.0.0","mocha":"^5.1.1","opn":"^5.4.0","power-assert":"^1.6.1","webpack":"^3.12.0","webpack-dev-server":"^2.11.3","webpack-merge":"^4.1.2","clean-webpack-plugin":"^1.0.0"}}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./advancedFunction/debounce.js": 54,
	"./advancedFunction/deepClone.js": 55,
	"./advancedFunction/once.js": 79,
	"./array.js": 80,
	"./format.js": 91,
	"./get.js": 92,
	"./index.js": 30,
	"./is.js": 44,
	"./keycode.js": 97,
	"./random.js": 98,
	"./storage.js": 99,
	"./string.js": 100
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 53;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;
/**
 * @description 事件停止被触发N秒后才会再次触发回调，防抖动函数
 * @summary 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
 * @param {Function} func - 回调执行函数
 * @param {String} wait - 触发间隔
 * @param {Boolean} immediate - 是否延时执行
 * @return {Function} 新的防抖函数。
 * @example
 * // Usage
 * var myEfficientFn = debounce(function () {
 * // todo
 * }, 250);
 * window.addEventListener('resize', myEfficientFn);
 */
function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectCopyData = undefined;

var _stringify = __webpack_require__(37);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(38);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.deepClone = deepClone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @desc 深拷贝，支持常见类型
 * @summary
 * 1. assign复制深层的引用对象，复制的只是一个引用；
 * 2. JSON的方法，不能复制function和prototype；
 * 3. 真正的复制，必须遍历依次复制；
 * @param {Any} values 需要拷贝的类型
 * @return {Any} 返回对应的数据结构
 */
function deepClone(values) {
  var copy = void 0;
  // Handle the 3 simple types, and null or undefined
  if (values == null || (typeof values === "undefined" ? "undefined" : (0, _typeof3.default)(values)) !== "object") return values;
  // Handle Date
  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }
  // Handle Array
  if (values instanceof Array) {
    copy = [];
    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }
  // Handle Object
  if (values instanceof Object) {
    copy = {};
    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }
    return copy;
  }
  throw new Error("Unable to copy values! Its type isn't supported.");
}

/**
 * 如果只需要克隆数据，这个足以
 * @summary 这种方式对于prototype和function无法操作
 * @param  {Any} target 需要复制的内容
 * @return {Object} obj
 */
var objectCopyData = exports.objectCopyData = function objectCopyData() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return JSON.parse((0, _stringify2.default)(target));
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(64);
module.exports = __webpack_require__(28).f('iterator');


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(21);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(42);
var descriptor = __webpack_require__(12);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(13);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(18);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
var global = __webpack_require__(2);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(14);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(66);
var step = __webpack_require__(67);
var Iterators = __webpack_require__(14);
var toIObject = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(40)(Array, 'Array', function (iterated, kind) {
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
/* 66 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
__webpack_require__(76);
__webpack_require__(77);
__webpack_require__(78);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(41);
var META = __webpack_require__(71).KEY;
var $fails = __webpack_require__(7);
var shared = __webpack_require__(24);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(16);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(28);
var wksDefine = __webpack_require__(29);
var enumKeys = __webpack_require__(72);
var isArray = __webpack_require__(73);
var anObject = __webpack_require__(10);
var isObject = __webpack_require__(11);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(19);
var createDesc = __webpack_require__(12);
var _create = __webpack_require__(42);
var gOPNExt = __webpack_require__(74);
var $GOPD = __webpack_require__(75);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(13);
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
  __webpack_require__(43).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(17).f = $propertyIsEnumerable;
  __webpack_require__(26).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(15)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(16)('meta');
var isObject = __webpack_require__(11);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(7)(function () {
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(13);
var gOPS = __webpack_require__(26);
var pIE = __webpack_require__(17);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8);
var gOPN = __webpack_require__(43).f;
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(17);
var createDesc = __webpack_require__(12);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(19);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(32);
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
/* 76 */
/***/ (function(module, exports) {



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('asyncIterator');


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('observable');


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.once = once;
/**
 * @description once
 * @summary 实用的执行一次函数，不用多解释。虽然很简单的函数，但是防止重复加载或者初始化的习惯必须养成。
 * @param {Function} fn - 需要执行一次的函数，被包装后，只有第一次会执行
 * @param {*} context - 当前函数执行的上下问环境
 * @example
 * var canOnlyFireOnce = once(function () {
 *   console.log('Fired!');
 * });
 * canOnlyFireOnce(); // Fired
 * canOnlyFireOnce();
 */
function once(fn, context) {
  var result = void 0;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayMin = exports.arrayMax = undefined;

var _toConsumableArray2 = __webpack_require__(81);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.arrayAverage = arrayAverage;
exports.arrayFibonacci = arrayFibonacci;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module array
 */

/**
 * 获取数组的平均值
 * @function
 * @param {Array} arr - 输入数组
 * @return {number} 返回数组的平均值
 * @example
 * arrayAverage([1,2,3]);
 * // returns 2
 */
function arrayAverage(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce(function (acc, cur) {
      return acc + cur;
    }, 0) / arr.length;
  } else {
    throw Error("arrayAverage函数需要一个数组类型的参数");
  }
}
/**
 * 斐波那契数组
 * @function
 * @summary 使用Array.reduce（）向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
 * @param {Number} n - 创建一个特定长度的空数组，初始化前两个值（0和1）。
 * @return {Array} 返回斐波那契数组的指定长度
 * @example
 * arrayFibonacci(5)
 * // returns [0,1,1,2,3]
 */
function arrayFibonacci(n) {
  return Array(n).fill(0).reduce(function (acc, val, i) {
    return acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i);
  }, []);
}

/**
 * 从数组中获取最大值
 * @function
 * @summary 使用Math.max（）与spread运算符（...）结合得到数组中的最大值。
 * @param {Array} arr - 传入的数组，通过...运算，展开为一组数
 * @return {Nummber} 返回当前数组的最大值
 * @example
 * arrayMax([10, 1, 5]);
 * // returns 10
 */
var arrayMax = exports.arrayMax = function arrayMax(arr) {
  return Math.max.apply(Math, (0, _toConsumableArray3.default)(arr));
};
/**
 * 从数组中获取最小值
 * @function
 * @summary 使用Math.min（）与 spread运算符（...）结合得到数组中的最大值。
 * @param {Array} arr - 传入的数组，或者类数组
 * @return {Nummber} 返回当前数组的最小值
 * @example
 * arrayMin([10, 1, 5])
 * // returns 1
 */
var arrayMin = exports.arrayMin = function arrayMin(arr) {
  return Math.min.apply(Math, (0, _toConsumableArray3.default)(arr));
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(82);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(84);
module.exports = __webpack_require__(0).Array.from;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(31);
var $export = __webpack_require__(9);
var toObject = __webpack_require__(18);
var call = __webpack_require__(85);
var isArrayIter = __webpack_require__(86);
var toLength = __webpack_require__(36);
var createProperty = __webpack_require__(87);
var getIterFn = __webpack_require__(88);

$export($export.S + $export.F * !__webpack_require__(90)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(10);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(14);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(12);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(89);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(14);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.digitUppercase = digitUppercase;
exports.formatPassTime = formatPassTime;
exports.formatRemainTime = formatRemainTime;
exports.thousandsSeparator = thousandsSeparator;
exports.trim = trim;
/**
 * @module format
 */
/**
 * @desc   现金额转大写
 * @param  {Number} n - 金额
 * @return {String}
 * @example
 * digitUppercase(1000292);
 * // "壹佰万零贰佰玖拾贰元整"
 */
function digitUppercase(n) {
  if (1000000000000 <= n) {
    return "超限";
  }
  var fraction = ["角", "分"];
  var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  var unit = [["元", "万", "亿"], ["", "拾", "佰", "仟"]];
  var head = n < 0 ? "欠" : "";
  n = Math.abs(n);
  var s = "";
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, "");
  }
  s = s || "整";
  n = Math.floor(n);
  for (var _i = 0; _i < unit[0].length && n > 0; _i++) {
    var p = "";
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][_i] + s;
  }
  return head + s.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零").replace(/^整$/, "零元整");
}

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime - 现在的时间，格式是距今的毫秒数, 或者字符串型的描述
 * @return {String} - 返回一段描述的语句
 * @example
 * formatPassTime('2018/12/12'); // 默认是时间对应的格式
 * formatPassTime(1542200418000); // 数值型，默认是毫秒数
 */
function formatPassTime(startTime) {
  var currentTime = Date.parse(new Date()),
      time = currentTime - Date.parse(new Date(startTime)),
      day = parseInt(time / (1000 * 60 * 60 * 24)),
      hour = parseInt(time / (1000 * 60 * 60)),
      min = parseInt(time / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12);
  if (year) return year + "年前";
  if (month) return month + "个月前";
  if (day) return day + "天前";
  if (hour) return hour + "小时前";
  if (min) return min + "分钟前";else return "刚刚";
}

/**
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime 剩余时间的截止日期
 * @return {String}
 */
function formatRemainTime(endTime) {
  var startDate = new Date(); //开始时间
  var endDate = new Date(endTime); //结束时间
  var t = endDate.getTime() - startDate.getTime(); //时间差
  var d = 0,
      h = 0,
      m = 0,
      s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}

/**
 * 添加千分位，顺便固定小数位
 * @param  {number} num     - 数值型的值
 * @param  {number} fixNum  - 保留的小数位
 * @return {string} 返回结果字符串
 * @example
 * thousandsSeparator(123123123.4513212, 2);
 * // returns "123,123,123.45"
 */
function thousandsSeparator(num, fixNum) {
  if (typeof num !== "number") {
    throw new Error("传入的数据应为数值型");
  }
  return (num.toFixed(fixNum) + "").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
}

/**
 * @desc 去除字符串两端的空格
 * @param {String} str -字符串
 * @return {String} 返回一个字符串
 */
function trim() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  return str.replace(/^\s+|\s+$/g, "");
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.turnToStackoverflow = exports.getRate = exports.timeTaken = exports.getScrollPos = exports.getOS = exports.getExplore = exports.getQueryString = undefined;
exports.parseUrl = parseUrl;
exports.getPrime = getPrime;

var _is = __webpack_require__(44);

/**
 * @desc 获取当前页面的url中的查询参数
 * @param {String} key - 需要获取的简值对的key
 * @return {Function}
 */
var getQueryString = exports.getQueryString = function getQueryString(key) {
  var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};

/**
 * @desc 获取浏览器类型和版本
 * @return {String} 浏览器类型
 */
/**
 * @module get
 */
var getExplore = exports.getExplore = function getExplore() {
  var sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s = void 0;
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
  // 根据关系进行判断
  if (sys.ie) return "IE: " + sys.ie;
  if (sys.edge) return "EDGE: " + sys.edge;
  if (sys.firefox) return "Firefox: " + sys.firefox;
  if (sys.chrome) return "Chrome: " + sys.chrome;
  if (sys.opera) return "Opera: " + sys.opera;
  if (sys.safari) return "Safari: " + sys.safari;
  return "Unkonwn";
};

/**
 * @desc 获取操作系统类型
 * @return {String} 操作系统类型
 */
var getOS = exports.getOS = function getOS() {
  var userAgent = "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "";
  var appVersion = "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "";
  if (/mac/i.test(appVersion)) return "MacOSX";
  if (/win/i.test(appVersion)) return "windows";
  if (/linux/i.test(appVersion)) return "linux";
  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) "ios";
  if (/android/i.test(userAgent)) return "android";
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return "windowsPhone";
};

/**
 * @description 获取滚动位置
 * @summary 如果已定义，请使用pageXOffset和pageYOffset，否则使用scrollLeft和scrollTop，可以省略el来使用window的默认值。
 * @param {Element} el - 需要获取滚动位置的元素，原生的
 * @return {Object} 返回{x: x, y: y} 型表示横向还是竖向的滚动位置
 * @example
 * getScrollPos(window);
 * // return {x: 0, y: 100}
 */

var getScrollPos = exports.getScrollPos = function getScrollPos() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  };
};

/**
 * @description 测试函数功能所花费的时间
 * @summary 使用performance.now（）获取函数的开始和结束时间，console.log（）所花费的时间。
 * 第一个参数是函数名，随后的参数传递给函数。
 * @param {Function} callback - 需要测试的函数
 * @return {string} 字符串描述的时间长度
 * @example
 * timeTaken(() => Math.pow(2, 10));
 * (logged): timeTaken: 0.02099609375ms
 */

var timeTaken = exports.timeTaken = function timeTaken(callback) {
  console.time("timeTaken");
  var r = callback();
  console.timeEnd("timeTaken");
  return r;
};

/**
 * 评级组件
 * @param {number} rate - 当前的评级，从0到5
 * @return {string} 当前的评级
 */
var getRate = exports.getRate = function getRate(rate) {
  return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
};

/**
 * 函数执行有错误，查stackoverflow
 * @param {*} something - 函数或者任何操作
 */
var turnToStackoverflow = exports.turnToStackoverflow = function turnToStackoverflow(func, context) {
  try {
    func.call(context);
  } catch (e) {
    window.location.href = "http://stackoverflow.com/search?q=[js]+" + e.message;
  }
};

/**
 * 解析url为一个对象
 * 这里的port比一般的对一个分号，如果要去掉需要单独处理
 * @param {Url} url - 需要解析的url
 * @return {Object} - 返回解析结果的对象
 * @example
 * var res = parseUrl('http://baidu.com:80/abd?id=123&title=123213#521');
 * console.log(res);
 * // return abject
 */
function parseUrl(url) {
  var result = {};
  var keys = ["href", "origin", "protocol", "host", "hostname", "port", "pathname", "search", "hash"];
  var regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/;
  var match = regexp.exec(url);
  if (match) {
    for (var i = keys.length - 1; i >= 0; i--) {
      result[keys[i]] = match[i] ? match[i] : "";
    }
    // 单独处理port
    result["port"] = result["port"].substr(1);
  }
  return result;
}

/**
 * 输出从str到end的所有质数
 * @param {Number} str - 起始数值
 * @param {Number} end - 结束数值
 * @return {Array} 结果的数组
 * @example
 * getPrime(1, 1000);
 * // return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
 */
function getPrime(str, end) {
  var res = [];
  for (var i = str; i <= end; i++) {
    if ((0, _is.isPrime)(i)) {
      res.push(i);
    } else {
      continue;
    }
  }
  return res;
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(18);
var $keys = __webpack_require__(13);

__webpack_require__(96)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9);
var core = __webpack_require__(0);
var fails = __webpack_require__(7);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeyName = getKeyName;
/**
 * @module keycode
 */
var keyCodeMap = {
  8: "Backspace",
  9: "Tab",
  13: "Enter",
  16: "Shift",
  17: "Ctrl",
  18: "Alt",
  19: "Pause",
  20: "Caps Lock",
  27: "Escape",
  32: "Space",
  33: "Page Up",
  34: "Page Down",
  35: "End",
  36: "Home",
  37: "Left",
  38: "Up",
  39: "Right",
  40: "Down",
  42: "Print Screen",
  45: "Insert",
  46: "Delete",

  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",

  65: "A",
  66: "B",
  67: "C",
  68: "D",
  69: "E",
  70: "F",
  71: "G",
  72: "H",
  73: "I",
  74: "J",
  75: "K",
  76: "L",
  77: "M",
  78: "N",
  79: "O",
  80: "P",
  81: "Q",
  82: "R",
  83: "S",
  84: "T",
  85: "U",
  86: "V",
  87: "W",
  88: "X",
  89: "Y",
  90: "Z",

  91: "Windows",
  93: "Right Click",

  96: "Numpad 0",
  97: "Numpad 1",
  98: "Numpad 2",
  99: "Numpad 3",
  100: "Numpad 4",
  101: "Numpad 5",
  102: "Numpad 6",
  103: "Numpad 7",
  104: "Numpad 8",
  105: "Numpad 9",
  106: "Numpad *",
  107: "Numpad +",
  109: "Numpad -",
  110: "Numpad .",
  111: "Numpad /",

  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",

  144: "Num Lock",
  145: "Scroll Lock",
  182: "My Computer",
  183: "My Calculator",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
};
/**
 * @desc 根据keycode获得键名
 * @param  {number} keycode - code
 * @return {string} 返回的对应的key
 * @example
 * getKeyName(13);
 * // returns 'Enter'
 */
function getKeyName(keycode) {
  if (keyCodeMap[keycode]) {
    return keyCodeMap[keycode];
  } else {
    console.log("Unknow Key(Key Code:" + keycode + ")");
    return "";
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomColor = randomColor;
exports.randomNum = randomNum;
/**
 * @module random
 */
/**
 * @description 生成随机的6位16进制颜色值
 * @returns {String} 返回一个#aabbcc的颜色值
 * @example
 * randomColor();
 * // #aabbcc
 */
function randomColor() {
  return "#" + (~~(Math.random() * (1 << 24))).toString(16);
}

/**
 * @description 返回一个[min, max]的数值
 * @param  {Number} min - 左边界，不传就是0
 * @param  {Number} max - 右边界，不传默认10000
 * @return {Number} 返回一个数值型的值
 * @example
 * randomNum(1,3);
 * // 1,2,3一个随机的数
 */
function randomNum() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.pow(2, 53) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeCookie = exports.getCookie = exports.setCookie = exports.removeLocalStorage = exports.getLocalStorage = exports.setLocalStorage = undefined;

var _stringify = __webpack_require__(37);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module storage
 */
/**
 * 存储localStorage
 * @param {string} name - 要存储的key
 * @param {*} content - 内容会被序列化为字符串
 * @example
 * setLocalStorage({a:1});
 * setLocalStorage(123);
 */
var setLocalStorage = exports.setLocalStorage = function setLocalStorage(name, content) {
  if (!name) return;
  if (typeof content !== "string") {
    content = (0, _stringify2.default)(content);
  }
  window.localStorage.setItem(name, content);
};
/**
 * 获取localStorage
 * @param {string} name - 想要获取的键名
 * @return {*} 返回结果的真是状态，如果是字符串就返回字符串，如果是json对象就返回js对象
 */
var getLocalStorage = exports.getLocalStorage = function getLocalStorage(name) {
  if (!name) return;
  var value = window.localStorage.getItem(name);
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};
/**
 * 删除localStorage
 * @param {string} name key
 */
var removeLocalStorage = exports.removeLocalStorage = function removeLocalStorage(name) {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 设置cookie
 * @param {string} cname - 需要设置的cookie的名称
 * @param {string|number} cvalue - 这里不可以是引用类型的，需要拆开，不要存储太复杂的数据结构
 * @param {number} exdays - 过期天数
 * @example
 * setCookie('token', 'adsdfdsf', 2);
 */
var setCookie = exports.setCookie = function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};
/**
 * 获取cookie
 * @param {string} cname - key
 * @return {string|number} - value
 * @example
 * getCookie('token');
 * // returns adsdfdsf
 */
var getCookie = exports.getCookie = function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

/**
 * @desc 设置过期时间为之前的值
 * @param {string} name - 需要设置的key
 */
var removeCookie = exports.removeCookie = function removeCookie(name) {
  undefined.setCookie(name, "1", -1);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module string
 */
/**
 * 大写每个单词的首字母
 * @summary 使用replace（）匹配每个单词的第一个字符
 * @function
 * @param {String} str - 需要判断的字符串
 * @return {Boolean}
 * @example
 * stringCapitalizeEveryWord('hello world!')
 * // 'Hello World!'
 */
var stringCapitalizeEveryWord = exports.stringCapitalizeEveryWord = function stringCapitalizeEveryWord(str) {
  return str.replace(/\b[a-z]/g, function (char) {
    return char.toUpperCase();
  });
};

/***/ })
/******/ ]);
//# sourceMappingURL=keepsmiling.js.map