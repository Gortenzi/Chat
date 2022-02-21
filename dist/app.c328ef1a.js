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
})({"request.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequest = exports.UI_REQUEST = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UI_REQUEST = {
  URL_PATCH: 'https://chat1-341409.oa.r.appspot.com/api/user',
  URL_POST: 'https://chat1-341409.oa.r.appspot.com/api/user',
  URL_GET: 'https://chat1-341409.oa.r.appspot.com/api/messages/',
  FORM_FOR_NAME: document.querySelector('.form__conf'),
  FORM_INPUT: document.querySelector('.form__autoconf'),
  USER_NAME: document.querySelector('.settings-input__name'),
  INPUT_CODE: document.querySelector('.input__code'),
  INPUT_EMAIL: document.querySelector('.input__value').value
};
exports.UI_REQUEST = UI_REQUEST;

var getRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var method,
        url,
        body,
        token,
        headers,
        response,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'POST';
            url = _args.length > 1 ? _args[1] : undefined;
            body = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
            token = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
            headers = {
              'Accept': 'aplication/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(token)
            };
            _context.prev = 5;
            _context.next = 8;
            return fetch(url, {
              method: method,
              headers: headers,
              body: JSON.stringify(body)
            });

          case 8:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](5);
            console.log(_context.t0);

          case 15:
            _context.prev = 15;
            return _context.finish(15);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 12, 15, 17]]);
  }));

  return function getRequest() {
    return _ref.apply(this, arguments);
  };
}(); // UI_REQUEST_FORM_INPUT.addEventListener('submit', getCode )
// UI_REQUEST_FORM_FOR_NAME.addEventListener('submit', setName )


exports.getRequest = getRequest;
},{}],"modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settingsModal = exports.closeBtn = exports.btns = void 0;
var settingsModal = document.querySelectorAll('.settings-modal');
exports.settingsModal = settingsModal;
var closeBtn = document.querySelectorAll('.close-btn');
exports.closeBtn = closeBtn;
var btns = document.querySelectorAll('.drop-btn');
exports.btns = btns;
btns.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var path = e.currentTarget.getAttribute('data-path');
    settingsModal.forEach(function (el) {
      el.classList.remove('active');
    });
    settingsModal.forEach(function (el) {
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('active');
    });
  });
});
closeBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    settingsModal.forEach(function (el) {
      el.classList.remove('active');
    });
  });
});
},{}],"template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTime = void 0;
exports.sendMyMessage = sendMyMessage;
exports.sendmessagesBtn = void 0;
var sendmessagesBtn = document.querySelector('.sendmessages-btn');
exports.sendmessagesBtn = sendmessagesBtn;

function sendMyMessage() {
  var message = document.querySelector('.message-input').value;
  var chat = document.querySelector('.middle-chat');
  var templ = document.querySelector('#templ');
  var txt = templ.content.querySelector('span');
  var time = templ.content.querySelector('.message-time');
  txt.textContent = "I: ".concat(message);
  time.textContent = getTime();
  var elem = templ.content.cloneNode(true);
  chat.append(elem);
  document.querySelector('.inp').form.reset();
}

sendmessagesBtn.addEventListener('click', function (e) {
  if (document.querySelector('.message-input').value == '') return;else if (e.code === "Enter") sendMyMessage();
  sendMyMessage();
});

var getTime = function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return "".concat(hours, ":").concat(minutes);
};

exports.getTime = getTime;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _request = require("./request.js");

var _modal = require("./modal.js");

var _template = require("./template.js");

// import 'regenerator-runtime/runtime'
// import {getCode, inputEmail, formInput } from "./post.js"
// import Cookies from 'js-cookie'
// const formForName = document.querySelector('.form__conf')
// const setName = async () => {
// const urlPatch = 'https://chat1-341409.oa.r.appspot.com/api/user';
// const inputCode =  document.querySelector('.input__code')
// const userName = document.querySelector('.settings-input__name').value
// Cookies.set('magic-code', inputCode.value)
// const token = Cookies.get('magic-code')
//   console.log(userName)
//   console.log(token)
//    try {
//         const patchResponse = await fetch(urlPatch, {
//          method: 'PATCH',
//          body: JSON.stringify({'name':userName.value}),
//          headers: {
//            'Accept': 'aplication/json',
//            'Content-Type': 'application/json',
//            'Authorization': `Bearer ${token}`,
//            },
//           })
//          const data = await patchResponse.json();
//          console.log(JSON.stringify(data));
//      } catch(error) {
//            console.log(error)
//     } finally {
//       inputCode.form.reset()
//     }
//      }
//      formForName.addEventListener('submit', setName )
//  Cookies.set('magic-code', inputCode.value)
//  const token = Cookies.get('magic-code')
var body = {
  // email: UI_REQUEST.INPUT_EMAIL.value
  email: _request.UI_REQUEST.INPUT_EMAIL
};
var getCode = (0, _request.getRequest)('POST', _request.UI_REQUEST.URL_POST, body); // const getCode = getRequest(method, url, body = null, token = null)

_request.UI_REQUEST.FORM_INPUT.addEventListener('submit', getCode); // UI_REQUEST.FORM_INPUT.addEventListener('submit', () =>{
//   const body = {
//     email: UI_REQUEST.INPUT_EMAIL.value
//   }
//   getCode('POST', UI_REQUEST.URL_POST, body) 
// })
// UI_REQUEST_FORM_FOR_NAME.addEventListener('submit', setName )
},{"./request.js":"request.js","./modal.js":"modal.js","./template.js":"template.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56089" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map