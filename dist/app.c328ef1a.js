// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"calculator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculator =
/*#__PURE__*/
function () {
  function Calculator(input) {
    _classCallCheck(this, Calculator);

    this.rightArray = [];
    this.leftArray = [];
    this.operator = '';
    this.input = input;
    this.equation = '';
    this.previousResults = [];
    this.memoryPosition = 0;
    this.result = 0;
  }

  _createClass(Calculator, [{
    key: "newInput",
    value: function newInput(input) {
      var operatorCheck = new RegExp('[^.0-9]'); // TODO: Fix

      var isOperator = operatorCheck.test(input);
      console.log(isOperator);

      if (isOperator) {
        console.log("Operator", this.operator);
        return this.operator = input;
      }

      if (this.operator === '') {
        if (this.leftArray.length < 12) {
          if (this.leftArray.length == 9 && input !== '.') {
            return this.leftArray.join('');
          }

          this.leftArray.push(input);
          console.log(this.leftArray);
          return this.equation = this.leftArray.join('');
        }
      } else {
        this.rightArray.push(input);
        console.log(this.rightArray);
        return this.equation = this.rightArray.join('');
      }
    }
  }, {
    key: "square",
    value: function square(val) {
      console.log('square it');
      return Math.sqrt(parseInt(val));
    }
  }, {
    key: "pi",
    value: function pi() {
      return 3.14159;
    }
  }, {
    key: "evaluate",
    value: function evaluate() {
      var answer = this.validateResult(this.leftArray.join(''), this.operator, this.rightArray.join(''));
      return answer;
    }
  }, {
    key: "validateResult",
    value: function validateResult(left) {
      var operator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      this.result = eval(left + " " + operator + " " + right);
      console.log(this.result);
      if (this.result > 999999999) return 'Err';
      if (this.result % 1 != 0) return this.result.toFixed(2);
      return this.result;
    }
  }, {
    key: "memory",
    value: function memory() {
      if (this.memoryPosition <= this.previousResults.length) {
        var result = this.previousResults[this.memoryPosition];
        this.memoryPosition++;
        return result;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.leftArray = [];
      this.rightArray = [];
      this.previousResults.push(this.result);
      this.result = 0;
      this.operator = '';
      return this.equation = "";
    }
  }]);

  return Calculator;
}();

exports.default = Calculator;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _calculator = _interopRequireDefault(require("./calculator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  var calc = new _calculator.default(); // initialize application modules

  var app = {
    init: function init() {
      this.cacheDom();
      this.result = '0'; // document.getElementById('screen').innerHTML = '0'

      this.$screen.innerHTML = this.result;
      console.log(this.$screen);
      this.bindEvents();
    },
    cacheDom: function cacheDom() {
      this.$window = $(window);
      this.$calculator = $('#calculator');
      this.$main = this.$calculator.find('#main');
      this.$header = this.$calculator.find('#header');
      this.$screen = document.getElementById('screen');
      this.$numbers = this.$main.find('#numbers');
      this.$operators = this.$main.find('#operators');
      this.$btnAc = this.$operators.find('#btn-ac');
      this.$btnPlus = this.$operators.find('#btn-plus');
      this.$btnMinus = this.$operators.find('#btn-minus');
      this.$btnMultiply = this.$operators.find('#btn-multiply');
      this.$btnDivide = this.$operators.find('#btn-divide');
      this.$btnEquals = this.$operators.find('#btn-equals');
      this.$btnMem = this.$operators.find('#btn-mem');
      this.$btnPi = this.$operators.find('#btn-pi');
      this.$btnPoint = this.$numbers.find('#btn-point');
      this.$btnRoot = this.$numbers.find('#btn-root'); // this.$btnroot = document.getElementById('btn-root')
      // for (let i = 0; i< 10; i++) {
      //   let str = "this.$btn" + i + "= this.$numbers.find('#btn'" + i + ")"
      //   eval(str)
      // }

      this.$btn0 = this.$numbers.find('#btn0');
      this.$btn1 = this.$numbers.find('#btn1');
      this.$btn2 = this.$numbers.find('#btn2');
      this.$btn3 = this.$numbers.find('#btn3');
      this.$btn4 = this.$numbers.find('#btn4');
      this.$btn5 = this.$numbers.find('#btn5');
      this.$btn6 = this.$numbers.find('#btn6');
      this.$btn7 = this.$numbers.find('#btn7');
      this.$btn8 = this.$numbers.find('#btn8');
      this.$btn9 = this.$numbers.find('#btn9');
    },
    // Bind all dom element click events to app object
    bindEvents: function bindEvents() {
      this.$btn0.on('click', this.pressKey.bind(this));
      this.$btn1.on('click', this.pressKey.bind(this));
      this.$btn2.on('click', this.pressKey.bind(this));
      this.$btn3.on('click', this.pressKey.bind(this));
      this.$btn4.on('click', this.pressKey.bind(this));
      this.$btn5.on('click', this.pressKey.bind(this));
      this.$btn6.on('click', this.pressKey.bind(this));
      this.$btn7.on('click', this.pressKey.bind(this));
      this.$btn8.on('click', this.pressKey.bind(this));
      this.$btn9.on('click', this.pressKey.bind(this));
      this.$btnAc.on('click', this.clear.bind(this));
      this.$btnPlus.on('click', this.pressKey.bind(this));
      this.$btnMinus.on('click', this.pressKey.bind(this));
      this.$btnMem.on('click', this.lastResult.bind(this));
      this.$btnMultiply.on('click', this.pressKey.bind(this));
      this.$btnDivide.on('click', this.pressKey.bind(this));
      this.$btnPoint.on('click', this.pressKey.bind(this));
      this.$btnEquals.on('click', this.evaluate.bind(this));
      this.$btnRoot.on('click', this.square.bind(this));
      this.$btnPi.on('click', this.pi.bind(this));
    },
    pressKey: function pressKey(x) {
      var data = x.target.value;
      console.log('input', data); // Call newInput method of calculator class instance

      calc.newInput(data);
      this.result = calc.equation; // Display the result on screen
      // document.getElementById("screen").innerHTML = this.result

      this.$screen.innerHTML = this.result;
      console.log('Result', this.result);
    },
    evaluate: function evaluate() {
      // let data = x.target.value
      // document.getElementById("screen").innerHTML = calc.evaluate()
      this.$screen.innerHTML = calc.evaluate();
    },
    clear: function clear() {
      calc.clear(); // document.getElementById("screen").innerHTML = '0' 

      this.$screen.innerHTML = '0';
    },
    lastResult: function lastResult() {
      //  document.getElementById('screen').innerHTML = calc.memory()
      this.$screen.innerHTML = calc.memory();
    },
    square: function square() {
      console.log("squareroot"); // document.getElementById('screen').innerHTML = calc.squareRoot()

      this.$screen.innerHTML = calc.square(this.result);
    },
    pi: function pi() {
      this.$screen.innerHTML = calc.pi();
    }
  };
  app.init(); // calc.newInput(8)
  // calc.newInput("*")
  // calc.newInput(3)
  // console.log(calc.evaluate())
}); // calc.newInput(2) //?
// calc.newInput(5)//?
// calc.newInput('*')//?
// calc.newInput(25)
// // eval(calc.newInput(30))//?
// calc.evaluate()//?
},{"./calculator.js":"calculator.js"}],"../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43017" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map