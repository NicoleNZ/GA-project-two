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
})({"src/newProduct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var form = "\n    <div class=\"row\">\n        <div class=\"col\" id=\"side-col\"></div>\n        <div class=\"col-10\" id=\"master-data-form\">\n            <h4>Create a New Product</h4>\n            <form id=\"product-form\">\n                <div class=\"form-group\">\n                    <label for=\"product-code\" id=\"product-code-label\">Product Code</label>\n                    <input type=\"text\" class=\"form-control\" id=\"product-code\" placeholder=\"E.g. FPC123\" name=\"product-code\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"product-description\" id=\"product-description-label\">Product Description</label>\n                    <input type=\"text\" class=\"form-control\" id=\"product-description\" placeholder=\"E.g. Acme Vanilla Bean Flavoured Almonds\" name=\"product-description\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"net-weight\" id=\"net-weight-label\">Net Weight</label>\n                    <input type=\"text\" class=\"form-control\" id=\"net-weight\" placeholder=\"E.g. 400g\" name=\"net-weight\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"units-case\" id=\"units-case-label\">Units per Case</label>\n                    <input type=\"text\" class=\"form-control\" id=\"units-case\" placeholder=\"E.g. 20\" name=\"units-case\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"list-price\" id=\"list-price-label\">List Price</label>\n                    <input type=\"text\" class=\"form-control\" id=\"list-price\" placeholder=\"E.g. $30.00\" name=\"list-price\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"unit-barcode\" id=\"unit-barcode-label\">Unit Barcode</label>\n                    <input type=\"text\" class=\"form-control\" id=\"unit-barcode\" placeholder=\"E.g. 942112345678\" name=\"unit-barcode\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"case-barcode\" id=\"case-barcode-label\">Case Barcode</label>\n                    <input type=\"text\" class=\"form-control\" id=\"case-barcode\" placeholder=\"E.g. 194212345678\" name=\"case-barcode\">\n                </div>\n                <fieldset class=\"form-group\">\n                    <legend class=\"col-form-label\" id=\"active-product-label\">Active Product?</legend>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" id=\"active-product-yes\" name =\"active-product\" value=\"true\">\n                        <label class=\"form-check-label\" for=\"active-product-yes\" id=\"active-product-yes-label\">Yes</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" id=\"active-product-no\" name =\"active-product\" value=\"false\">\n                        <label class=\"form-check-label\" for=\"active-product-no\" id=\"active-product-no-label\">No</label>\n                    </div>\n                </fieldset>\n                <button type=\"submit\" class=\"btn btn-light\">Create Product</button>\n            </form>\n        </div>\n        <div class=\"col\" id=\"side-col\"></div>\n    </div>\n";

var newProduct = function newProduct() {
  $(document).on("submit", "#product-form", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var requestBody, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log($("#product-code").val());
              console.log($("#product-description").val());
              console.log($("#net-weight").val());
              console.log($("#units-case").val());
              console.log($("#list-price").val());
              console.log($("#unit-barcode").val());
              console.log($("#case-barcode").val());
              console.log($("input[name=\"active-product\"]:checked").val());
              requestBody = {
                productCode: $("#product-code").val(),
                productName: $("#product-description").val(),
                netWeight: $("#net-weight").val(),
                unitsPerCase: $("#units-case").val(),
                listPrice: $("#list-price").val(),
                unitBarcode: $("#unit-barcode").val(),
                caseBarcode: $("#case-barcode").val(),
                activeProduct: $("input[name=\"active-product\"]:checked").val()
              };
              _context.next = 12;
              return $.ajax({
                type: "POST",
                url: "/api/vault/new-product",
                contentType: "application/json",
                data: JSON.stringify(requestBody)
              });

            case 12:
              response = _context.sent;
              console.log("response: ", response);
              console.log("This is the response I get back!: ".concat(response));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  return form;
};

var _default = newProduct;
exports.default = _default;
},{}],"src/app.js":[function(require,module,exports) {
"use strict";

var _newProduct = _interopRequireDefault(require("./newProduct.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import "regenerator-runtime/runtime";
console.log("Check if this works");
$("#append-product-form").append((0, _newProduct.default)());
},{"./newProduct.js":"src/newProduct.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58311" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/app.js"], null)
//# sourceMappingURL=/app.a6a4d504.js.map