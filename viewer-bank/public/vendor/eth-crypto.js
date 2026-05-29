(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod4) => function __require() {
    return mod4 || (0, cb[__getOwnPropNames(cb)[0]])((mod4 = { exports: {} }).exports, mod4), mod4.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod4, isNodeMode, target) => (target = mod4 != null ? __create(__getProtoOf(mod4)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod4 || !mod4.__esModule ? __defProp(target, "default", { value: mod4, enumerable: true }) : target,
    mod4
  ));

  // node_modules/@babel/runtime/helpers/OverloadYield.js
  var require_OverloadYield = __commonJS({
    "node_modules/@babel/runtime/helpers/OverloadYield.js"(exports, module) {
      function _OverloadYield(e, d) {
        this.v = e, this.k = d;
      }
      module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/regeneratorDefine.js
  var require_regeneratorDefine = __commonJS({
    "node_modules/@babel/runtime/helpers/regeneratorDefine.js"(exports, module) {
      function _regeneratorDefine(e, r, n2, t) {
        var i = Object.defineProperty;
        try {
          i({}, "", {});
        } catch (e2) {
          i = 0;
        }
        module.exports = _regeneratorDefine = function regeneratorDefine(e2, r2, n3, t2) {
          function o(r3, n4) {
            _regeneratorDefine(e2, r3, function(e3) {
              return this._invoke(r3, n4, e3);
            });
          }
          r2 ? i ? i(e2, r2, {
            value: n3,
            enumerable: !t2,
            configurable: !t2,
            writable: !t2
          }) : e2[r2] = n3 : (o("next", 0), o("throw", 1), o("return", 2));
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n2, t);
      }
      module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/regenerator.js
  var require_regenerator = __commonJS({
    "node_modules/@babel/runtime/helpers/regenerator.js"(exports, module) {
      var regeneratorDefine = require_regeneratorDefine();
      function _regenerator() {
        var e, t, r = "function" == typeof Symbol ? Symbol : {}, n2 = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
        function i(r2, n3, o2, i2) {
          var c2 = n3 && n3.prototype instanceof Generator ? n3 : Generator, u2 = Object.create(c2.prototype);
          return regeneratorDefine(u2, "_invoke", function(r3, n4, o3) {
            var i3, c3, u3, f3 = 0, p = o3 || [], y = false, G = {
              p: 0,
              n: 0,
              v: e,
              a: d,
              f: d.bind(e, 4),
              d: function d2(t2, r4) {
                return i3 = t2, c3 = 0, u3 = e, G.n = r4, a;
              }
            };
            function d(r4, n5) {
              for (c3 = r4, u3 = n5, t = 0; !y && f3 && !o4 && t < p.length; t++) {
                var o4, i4 = p[t], d2 = G.p, l = i4[2];
                r4 > 3 ? (o4 = l === n5) && (u3 = i4[(c3 = i4[4]) ? 5 : (c3 = 3, 3)], i4[4] = i4[5] = e) : i4[0] <= d2 && ((o4 = r4 < 2 && d2 < i4[1]) ? (c3 = 0, G.v = n5, G.n = i4[1]) : d2 < l && (o4 = r4 < 3 || i4[0] > n5 || n5 > l) && (i4[4] = r4, i4[5] = n5, G.n = l, c3 = 0));
              }
              if (o4 || r4 > 1) return a;
              throw y = true, n5;
            }
            return function(o4, p2, l) {
              if (f3 > 1) throw TypeError("Generator is already running");
              for (y && 1 === p2 && d(p2, l), c3 = p2, u3 = l; (t = c3 < 2 ? e : u3) || !y; ) {
                i3 || (c3 ? c3 < 3 ? (c3 > 1 && (G.n = -1), d(c3, u3)) : G.n = u3 : G.v = u3);
                try {
                  if (f3 = 2, i3) {
                    if (c3 || (o4 = "next"), t = i3[o4]) {
                      if (!(t = t.call(i3, u3))) throw TypeError("iterator result is not an object");
                      if (!t.done) return t;
                      u3 = t.value, c3 < 2 && (c3 = 0);
                    } else 1 === c3 && (t = i3["return"]) && t.call(i3), c3 < 2 && (u3 = TypeError("The iterator does not provide a '" + o4 + "' method"), c3 = 1);
                    i3 = e;
                  } else if ((t = (y = G.n < 0) ? u3 : r3.call(n4, G)) !== a) break;
                } catch (t2) {
                  i3 = e, c3 = 1, u3 = t2;
                } finally {
                  f3 = 1;
                }
              }
              return {
                value: t,
                done: y
              };
            };
          }(r2, o2, i2), true), u2;
        }
        var a = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        t = Object.getPrototypeOf;
        var c = [][n2] ? t(t([][n2]())) : (regeneratorDefine(t = {}, n2, function() {
          return this;
        }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
        function f2(e2) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e2, GeneratorFunctionPrototype) : (e2.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e2, o, "GeneratorFunction")), e2.prototype = Object.create(u), e2;
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n2, function() {
          return this;
        }), regeneratorDefine(u, "toString", function() {
          return "[object Generator]";
        }), (module.exports = _regenerator = function _regenerator2() {
          return {
            w: i,
            m: f2
          };
        }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
      }
      module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js
  var require_regeneratorAsyncIterator = __commonJS({
    "node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js"(exports, module) {
      var OverloadYield = require_OverloadYield();
      var regeneratorDefine = require_regeneratorDefine();
      function AsyncIterator(t, e) {
        function n2(r2, o, i, f2) {
          try {
            var c = t[r2](o), u = c.value;
            return u instanceof OverloadYield ? e.resolve(u.v).then(function(t2) {
              n2("next", t2, i, f2);
            }, function(t2) {
              n2("throw", t2, i, f2);
            }) : e.resolve(u).then(function(t2) {
              c.value = t2, i(c);
            }, function(t2) {
              return n2("throw", t2, i, f2);
            });
          } catch (t2) {
            f2(t2);
          }
        }
        var r;
        this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
          return this;
        })), regeneratorDefine(this, "_invoke", function(t2, o, i) {
          function f2() {
            return new e(function(e2, r2) {
              n2(t2, i, e2, r2);
            });
          }
          return r = r ? r.then(f2, f2) : f2();
        }, true);
      }
      module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js
  var require_regeneratorAsyncGen = __commonJS({
    "node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js"(exports, module) {
      var regenerator = require_regenerator();
      var regeneratorAsyncIterator = require_regeneratorAsyncIterator();
      function _regeneratorAsyncGen(r, e, t, o, n2) {
        return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n2 || Promise);
      }
      module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/regeneratorAsync.js
  var require_regeneratorAsync = __commonJS({
    "node_modules/@babel/runtime/helpers/regeneratorAsync.js"(exports, module) {
      var regeneratorAsyncGen = require_regeneratorAsyncGen();
      function _regeneratorAsync(n2, e, r, t, o) {
        var a = regeneratorAsyncGen(n2, e, r, t, o);
        return a.next().then(function(n3) {
          return n3.done ? n3.value : a.next();
        });
      }
      module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/regeneratorKeys.js
  var require_regeneratorKeys = __commonJS({
    "node_modules/@babel/runtime/helpers/regeneratorKeys.js"(exports, module) {
      function _regeneratorKeys(e) {
        var n2 = Object(e), r = [];
        for (var t in n2) r.unshift(t);
        return function e2() {
          for (; r.length; ) if ((t = r.pop()) in n2) return e2.value = t, e2.done = false, e2;
          return e2.done = true, e2;
        };
      }
      module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/regeneratorValues.js
  var require_regeneratorValues = __commonJS({
    "node_modules/@babel/runtime/helpers/regeneratorValues.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      function _regeneratorValues(e) {
        if (null != e) {
          var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0;
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) return {
            next: function next() {
              return e && r >= e.length && (e = void 0), {
                value: e && e[r++],
                done: !e
              };
            }
          };
        }
        throw new TypeError(_typeof(e) + " is not iterable");
      }
      module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/regeneratorRuntime.js
  var require_regeneratorRuntime = __commonJS({
    "node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
      var OverloadYield = require_OverloadYield();
      var regenerator = require_regenerator();
      var regeneratorAsync = require_regeneratorAsync();
      var regeneratorAsyncGen = require_regeneratorAsyncGen();
      var regeneratorAsyncIterator = require_regeneratorAsyncIterator();
      var regeneratorKeys = require_regeneratorKeys();
      var regeneratorValues = require_regeneratorValues();
      function _regeneratorRuntime5() {
        "use strict";
        var r = regenerator(), e = r.m(_regeneratorRuntime5), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
        function n2(r2) {
          var e2 = "function" == typeof r2 && r2.constructor;
          return !!e2 && (e2 === t || "GeneratorFunction" === (e2.displayName || e2.name));
        }
        var o = {
          "throw": 1,
          "return": 2,
          "break": 3,
          "continue": 3
        };
        function a(r2) {
          var e2, t2;
          return function(n3) {
            e2 || (e2 = {
              stop: function stop() {
                return t2(n3.a, 2);
              },
              "catch": function _catch() {
                return n3.v;
              },
              abrupt: function abrupt(r3, e3) {
                return t2(n3.a, o[r3], e3);
              },
              delegateYield: function delegateYield(r3, o2, a2) {
                return e2.resultName = o2, t2(n3.d, regeneratorValues(r3), a2);
              },
              finish: function finish(r3) {
                return t2(n3.f, r3);
              }
            }, t2 = function t3(r3, _t, o2) {
              n3.p = e2.prev, n3.n = e2.next;
              try {
                return r3(_t, o2);
              } finally {
                e2.next = n3.n;
              }
            }), e2.resultName && (e2[e2.resultName] = n3.v, e2.resultName = void 0), e2.sent = n3.v, e2.next = n3.n;
            try {
              return r2.call(this, e2);
            } finally {
              n3.p = e2.prev, n3.n = e2.next;
            }
          };
        }
        return (module.exports = _regeneratorRuntime5 = function _regeneratorRuntime6() {
          return {
            wrap: function wrap(e2, t2, n3, o2) {
              return r.w(a(e2), t2, n3, o2 && o2.reverse());
            },
            isGeneratorFunction: n2,
            mark: r.m,
            awrap: function awrap(r2, e2) {
              return new OverloadYield(r2, e2);
            },
            AsyncIterator: regeneratorAsyncIterator,
            async: function async(r2, e2, t2, o2, u) {
              return (n2(e2) ? regeneratorAsyncGen : regeneratorAsync)(a(r2), e2, t2, o2, u);
            },
            keys: regeneratorKeys,
            values: regeneratorValues
          };
        }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
      }
      module.exports = _regeneratorRuntime5, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/regenerator/index.js
  var require_regenerator2 = __commonJS({
    "node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
      var runtime = require_regeneratorRuntime()();
      module.exports = runtime;
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }
    }
  });

  // node_modules/eventemitter3/index.js
  var require_eventemitter3 = __commonJS({
    "node_modules/eventemitter3/index.js"(exports, module) {
      "use strict";
      var has = Object.prototype.hasOwnProperty;
      var prefix = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = /* @__PURE__ */ Object.create(null);
        if (!new Events().__proto__) prefix = false;
      }
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
        else emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0) emitter._events = new Events();
        else delete emitter._events[evt];
      }
      function EventEmitter2() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter2.prototype.eventNames = function eventNames() {
        var names = [], events, name;
        if (this._eventsCount === 0) return names;
        for (name in events = this._events) {
          if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };
      EventEmitter2.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers) return [];
        if (handlers.fn) return [handlers.fn];
        for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
          ee[i] = handlers[i].fn;
        }
        return ee;
      };
      EventEmitter2.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners) return 0;
        if (listeners.fn) return 1;
        return listeners.length;
      };
      EventEmitter2.prototype.emit = function emit2(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
          if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length, j;
          for (i = 0; i < length; i++) {
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;
              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;
              default:
                if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter2.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      EventEmitter2.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i = 0, events = [], length = listeners.length; i < length; i++) {
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
              events.push(listeners[i]);
            }
          }
          if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
          else clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt]) clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
      EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
      EventEmitter2.prefixed = prefix;
      EventEmitter2.EventEmitter = EventEmitter2;
      if ("undefined" !== typeof module) {
        module.exports = EventEmitter2;
      }
    }
  });

  // node_modules/ethers/lib.esm/_version.js
  var version = "6.16.0";

  // node_modules/ethers/lib.esm/utils/properties.js
  function checkType(value, type, name) {
    const types = type.split("|").map((t) => t.trim());
    for (let i = 0; i < types.length; i++) {
      switch (type) {
        case "any":
          return;
        case "bigint":
        case "boolean":
        case "number":
        case "string":
          if (typeof value === type) {
            return;
          }
      }
    }
    const error = new Error(`invalid value for type ${type}`);
    error.code = "INVALID_ARGUMENT";
    error.argument = `value.${name}`;
    error.value = value;
    throw error;
  }
  async function resolveProperties(value) {
    const keys = Object.keys(value);
    const results = await Promise.all(keys.map((k) => Promise.resolve(value[k])));
    return results.reduce((accum, v, index) => {
      accum[keys[index]] = v;
      return accum;
    }, {});
  }
  function defineProperties(target, values, types) {
    for (let key in values) {
      let value = values[key];
      const type = types ? types[key] : null;
      if (type) {
        checkType(value, type, key);
      }
      Object.defineProperty(target, key, { enumerable: true, value, writable: false });
    }
  }

  // node_modules/ethers/lib.esm/utils/errors.js
  function stringify(value, seen) {
    if (value == null) {
      return "null";
    }
    if (seen == null) {
      seen = /* @__PURE__ */ new Set();
    }
    if (typeof value === "object") {
      if (seen.has(value)) {
        return "[Circular]";
      }
      seen.add(value);
    }
    if (Array.isArray(value)) {
      return "[ " + value.map((v) => stringify(v, seen)).join(", ") + " ]";
    }
    if (value instanceof Uint8Array) {
      const HEX = "0123456789abcdef";
      let result = "0x";
      for (let i = 0; i < value.length; i++) {
        result += HEX[value[i] >> 4];
        result += HEX[value[i] & 15];
      }
      return result;
    }
    if (typeof value === "object" && typeof value.toJSON === "function") {
      return stringify(value.toJSON(), seen);
    }
    switch (typeof value) {
      case "boolean":
      case "number":
      case "symbol":
        return value.toString();
      case "bigint":
        return BigInt(value).toString();
      case "string":
        return JSON.stringify(value);
      case "object": {
        const keys = Object.keys(value);
        keys.sort();
        return "{ " + keys.map((k) => `${stringify(k, seen)}: ${stringify(value[k], seen)}`).join(", ") + " }";
      }
    }
    return `[ COULD NOT SERIALIZE ]`;
  }
  function isError(error, code) {
    return error && error.code === code;
  }
  function isCallException(error) {
    return isError(error, "CALL_EXCEPTION");
  }
  function makeError(message, code, info) {
    let shortMessage = message;
    {
      const details = [];
      if (info) {
        if ("message" in info || "code" in info || "name" in info) {
          throw new Error(`value will overwrite populated values: ${stringify(info)}`);
        }
        for (const key in info) {
          if (key === "shortMessage") {
            continue;
          }
          const value = info[key];
          details.push(key + "=" + stringify(value));
        }
      }
      details.push(`code=${code}`);
      details.push(`version=${version}`);
      if (details.length) {
        message += " (" + details.join(", ") + ")";
      }
    }
    let error;
    switch (code) {
      case "INVALID_ARGUMENT":
        error = new TypeError(message);
        break;
      case "NUMERIC_FAULT":
      case "BUFFER_OVERRUN":
        error = new RangeError(message);
        break;
      default:
        error = new Error(message);
    }
    defineProperties(error, { code });
    if (info) {
      Object.assign(error, info);
    }
    if (error.shortMessage == null) {
      defineProperties(error, { shortMessage });
    }
    return error;
  }
  function assert(check, message, code, info) {
    if (!check) {
      throw makeError(message, code, info);
    }
  }
  function assertArgument(check, message, name, value) {
    assert(check, message, "INVALID_ARGUMENT", { argument: name, value });
  }
  function assertArgumentCount(count, expectedCount, message) {
    if (message == null) {
      message = "";
    }
    if (message) {
      message = ": " + message;
    }
    assert(count >= expectedCount, "missing argument" + message, "MISSING_ARGUMENT", {
      count,
      expectedCount
    });
    assert(count <= expectedCount, "too many arguments" + message, "UNEXPECTED_ARGUMENT", {
      count,
      expectedCount
    });
  }
  var _normalizeForms = ["NFD", "NFC", "NFKD", "NFKC"].reduce((accum, form) => {
    try {
      if ("test".normalize(form) !== "test") {
        throw new Error("bad");
      }
      ;
      if (form === "NFD") {
        const check = String.fromCharCode(233).normalize("NFD");
        const expected = String.fromCharCode(101, 769);
        if (check !== expected) {
          throw new Error("broken");
        }
      }
      accum.push(form);
    } catch (error) {
    }
    return accum;
  }, []);
  function assertNormalize(form) {
    assert(_normalizeForms.indexOf(form) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
      operation: "String.prototype.normalize",
      info: { form }
    });
  }
  function assertPrivate(givenGuard, guard, className) {
    if (className == null) {
      className = "";
    }
    if (givenGuard !== guard) {
      let method = className, operation = "new";
      if (className) {
        method += ".";
        operation += " " + className;
      }
      assert(false, `private constructor; use ${method}from* methods`, "UNSUPPORTED_OPERATION", {
        operation
      });
    }
  }

  // node_modules/ethers/lib.esm/utils/data.js
  function _getBytes(value, name, copy) {
    if (value instanceof Uint8Array) {
      if (copy) {
        return new Uint8Array(value);
      }
      return value;
    }
    if (typeof value === "string" && value.length % 2 === 0 && value.match(/^0x[0-9a-f]*$/i)) {
      const result = new Uint8Array((value.length - 2) / 2);
      let offset = 2;
      for (let i = 0; i < result.length; i++) {
        result[i] = parseInt(value.substring(offset, offset + 2), 16);
        offset += 2;
      }
      return result;
    }
    assertArgument(false, "invalid BytesLike value", name || "value", value);
  }
  function getBytes(value, name) {
    return _getBytes(value, name, false);
  }
  function getBytesCopy(value, name) {
    return _getBytes(value, name, true);
  }
  function isHexString(value, length) {
    if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
      return false;
    }
    if (typeof length === "number" && value.length !== 2 + 2 * length) {
      return false;
    }
    if (length === true && value.length % 2 !== 0) {
      return false;
    }
    return true;
  }
  function isBytesLike(value) {
    return isHexString(value, true) || value instanceof Uint8Array;
  }
  var HexCharacters = "0123456789abcdef";
  function hexlify(data) {
    const bytes2 = getBytes(data);
    let result = "0x";
    for (let i = 0; i < bytes2.length; i++) {
      const v = bytes2[i];
      result += HexCharacters[(v & 240) >> 4] + HexCharacters[v & 15];
    }
    return result;
  }
  function concat(datas) {
    return "0x" + datas.map((d) => hexlify(d).substring(2)).join("");
  }
  function dataLength(data) {
    if (isHexString(data, true)) {
      return (data.length - 2) / 2;
    }
    return getBytes(data).length;
  }
  function dataSlice(data, start, end) {
    const bytes2 = getBytes(data);
    if (end != null && end > bytes2.length) {
      assert(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
        buffer: bytes2,
        length: bytes2.length,
        offset: end
      });
    }
    return hexlify(bytes2.slice(start == null ? 0 : start, end == null ? bytes2.length : end));
  }
  function zeroPad(data, length, left) {
    const bytes2 = getBytes(data);
    assert(length >= bytes2.length, "padding exceeds data length", "BUFFER_OVERRUN", {
      buffer: new Uint8Array(bytes2),
      length,
      offset: length + 1
    });
    const result = new Uint8Array(length);
    result.fill(0);
    if (left) {
      result.set(bytes2, length - bytes2.length);
    } else {
      result.set(bytes2, 0);
    }
    return hexlify(result);
  }
  function zeroPadValue(data, length) {
    return zeroPad(data, length, true);
  }
  function zeroPadBytes(data, length) {
    return zeroPad(data, length, false);
  }

  // node_modules/ethers/lib.esm/utils/maths.js
  var BN_0 = BigInt(0);
  var BN_1 = BigInt(1);
  var maxValue = 9007199254740991;
  function fromTwos(_value, _width) {
    const value = getUint(_value, "value");
    const width = BigInt(getNumber(_width, "width"));
    assert(value >> width === BN_0, "overflow", "NUMERIC_FAULT", {
      operation: "fromTwos",
      fault: "overflow",
      value: _value
    });
    if (value >> width - BN_1) {
      const mask2 = (BN_1 << width) - BN_1;
      return -((~value & mask2) + BN_1);
    }
    return value;
  }
  function toTwos(_value, _width) {
    let value = getBigInt(_value, "value");
    const width = BigInt(getNumber(_width, "width"));
    const limit = BN_1 << width - BN_1;
    if (value < BN_0) {
      value = -value;
      assert(value <= limit, "too low", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: _value
      });
      const mask2 = (BN_1 << width) - BN_1;
      return (~value & mask2) + BN_1;
    } else {
      assert(value < limit, "too high", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: _value
      });
    }
    return value;
  }
  function mask(_value, _bits) {
    const value = getUint(_value, "value");
    const bits = BigInt(getNumber(_bits, "bits"));
    return value & (BN_1 << bits) - BN_1;
  }
  function getBigInt(value, name) {
    switch (typeof value) {
      case "bigint":
        return value;
      case "number":
        assertArgument(Number.isInteger(value), "underflow", name || "value", value);
        assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
        return BigInt(value);
      case "string":
        try {
          if (value === "") {
            throw new Error("empty string");
          }
          if (value[0] === "-" && value[1] !== "-") {
            return -BigInt(value.substring(1));
          }
          return BigInt(value);
        } catch (e) {
          assertArgument(false, `invalid BigNumberish string: ${e.message}`, name || "value", value);
        }
    }
    assertArgument(false, "invalid BigNumberish value", name || "value", value);
  }
  function getUint(value, name) {
    const result = getBigInt(value, name);
    assert(result >= BN_0, "unsigned value cannot be negative", "NUMERIC_FAULT", {
      fault: "overflow",
      operation: "getUint",
      value
    });
    return result;
  }
  var Nibbles = "0123456789abcdef";
  function toBigInt(value) {
    if (value instanceof Uint8Array) {
      let result = "0x0";
      for (const v of value) {
        result += Nibbles[v >> 4];
        result += Nibbles[v & 15];
      }
      return BigInt(result);
    }
    return getBigInt(value);
  }
  function getNumber(value, name) {
    switch (typeof value) {
      case "bigint":
        assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
        return Number(value);
      case "number":
        assertArgument(Number.isInteger(value), "underflow", name || "value", value);
        assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
        return value;
      case "string":
        try {
          if (value === "") {
            throw new Error("empty string");
          }
          return getNumber(BigInt(value), name);
        } catch (e) {
          assertArgument(false, `invalid numeric string: ${e.message}`, name || "value", value);
        }
    }
    assertArgument(false, "invalid numeric value", name || "value", value);
  }
  function toNumber(value) {
    return getNumber(toBigInt(value));
  }
  function toBeHex(_value, _width) {
    const value = getUint(_value, "value");
    let result = value.toString(16);
    if (_width == null) {
      if (result.length % 2) {
        result = "0" + result;
      }
    } else {
      const width = getNumber(_width, "width");
      if (width === 0 && value === BN_0) {
        return "0x";
      }
      assert(width * 2 >= result.length, `value exceeds width (${width} bytes)`, "NUMERIC_FAULT", {
        operation: "toBeHex",
        fault: "overflow",
        value: _value
      });
      while (result.length < width * 2) {
        result = "0" + result;
      }
    }
    return "0x" + result;
  }
  function toBeArray(_value, _width) {
    const value = getUint(_value, "value");
    if (value === BN_0) {
      const width = _width != null ? getNumber(_width, "width") : 0;
      return new Uint8Array(width);
    }
    let hex = value.toString(16);
    if (hex.length % 2) {
      hex = "0" + hex;
    }
    if (_width != null) {
      const width = getNumber(_width, "width");
      while (hex.length < width * 2) {
        hex = "00" + hex;
      }
      assert(width * 2 === hex.length, `value exceeds width (${width} bytes)`, "NUMERIC_FAULT", {
        operation: "toBeArray",
        fault: "overflow",
        value: _value
      });
    }
    const result = new Uint8Array(hex.length / 2);
    for (let i = 0; i < result.length; i++) {
      const offset = i * 2;
      result[i] = parseInt(hex.substring(offset, offset + 2), 16);
    }
    return result;
  }
  function toQuantity(value) {
    let result = hexlify(isBytesLike(value) ? value : toBeArray(value)).substring(2);
    while (result.startsWith("0")) {
      result = result.substring(1);
    }
    if (result === "") {
      result = "0";
    }
    return "0x" + result;
  }

  // node_modules/ethers/lib.esm/utils/base58.js
  var Alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var Lookup = null;
  function getAlpha(letter) {
    if (Lookup == null) {
      Lookup = {};
      for (let i = 0; i < Alphabet.length; i++) {
        Lookup[Alphabet[i]] = BigInt(i);
      }
    }
    const result = Lookup[letter];
    assertArgument(result != null, `invalid base58 value`, "letter", letter);
    return result;
  }
  var BN_02 = BigInt(0);
  var BN_58 = BigInt(58);
  function encodeBase58(_value) {
    const bytes2 = getBytes(_value);
    let value = toBigInt(bytes2);
    let result = "";
    while (value) {
      result = Alphabet[Number(value % BN_58)] + result;
      value /= BN_58;
    }
    for (let i = 0; i < bytes2.length; i++) {
      if (bytes2[i]) {
        break;
      }
      result = Alphabet[0] + result;
    }
    return result;
  }
  function decodeBase58(value) {
    let result = BN_02;
    for (let i = 0; i < value.length; i++) {
      result *= BN_58;
      result += getAlpha(value[i]);
    }
    return result;
  }

  // node_modules/ethers/lib.esm/utils/events.js
  var EventPayload = class {
    /**
     *  The event filter.
     */
    filter;
    /**
     *  The **EventEmitterable**.
     */
    emitter;
    #listener;
    /**
     *  Create a new **EventPayload** for %%emitter%% with
     *  the %%listener%% and for %%filter%%.
     */
    constructor(emitter, listener, filter) {
      this.#listener = listener;
      defineProperties(this, { emitter, filter });
    }
    /**
     *  Unregister the triggered listener for future events.
     */
    async removeListener() {
      if (this.#listener == null) {
        return;
      }
      await this.emitter.off(this.filter, this.#listener);
    }
  };

  // node_modules/ethers/lib.esm/utils/utf8.js
  function errorFunc(reason, offset, bytes2, output2, badCodepoint) {
    assertArgument(false, `invalid codepoint at offset ${offset}; ${reason}`, "bytes", bytes2);
  }
  function ignoreFunc(reason, offset, bytes2, output2, badCodepoint) {
    if (reason === "BAD_PREFIX" || reason === "UNEXPECTED_CONTINUE") {
      let i = 0;
      for (let o = offset + 1; o < bytes2.length; o++) {
        if (bytes2[o] >> 6 !== 2) {
          break;
        }
        i++;
      }
      return i;
    }
    if (reason === "OVERRUN") {
      return bytes2.length - offset - 1;
    }
    return 0;
  }
  function replaceFunc(reason, offset, bytes2, output2, badCodepoint) {
    if (reason === "OVERLONG") {
      assertArgument(typeof badCodepoint === "number", "invalid bad code point for replacement", "badCodepoint", badCodepoint);
      output2.push(badCodepoint);
      return 0;
    }
    output2.push(65533);
    return ignoreFunc(reason, offset, bytes2, output2, badCodepoint);
  }
  var Utf8ErrorFuncs = Object.freeze({
    error: errorFunc,
    ignore: ignoreFunc,
    replace: replaceFunc
  });
  function getUtf8CodePoints(_bytes, onError) {
    if (onError == null) {
      onError = Utf8ErrorFuncs.error;
    }
    const bytes2 = getBytes(_bytes, "bytes");
    const result = [];
    let i = 0;
    while (i < bytes2.length) {
      const c = bytes2[i++];
      if (c >> 7 === 0) {
        result.push(c);
        continue;
      }
      let extraLength = null;
      let overlongMask = null;
      if ((c & 224) === 192) {
        extraLength = 1;
        overlongMask = 127;
      } else if ((c & 240) === 224) {
        extraLength = 2;
        overlongMask = 2047;
      } else if ((c & 248) === 240) {
        extraLength = 3;
        overlongMask = 65535;
      } else {
        if ((c & 192) === 128) {
          i += onError("UNEXPECTED_CONTINUE", i - 1, bytes2, result);
        } else {
          i += onError("BAD_PREFIX", i - 1, bytes2, result);
        }
        continue;
      }
      if (i - 1 + extraLength >= bytes2.length) {
        i += onError("OVERRUN", i - 1, bytes2, result);
        continue;
      }
      let res = c & (1 << 8 - extraLength - 1) - 1;
      for (let j = 0; j < extraLength; j++) {
        let nextChar = bytes2[i];
        if ((nextChar & 192) != 128) {
          i += onError("MISSING_CONTINUE", i, bytes2, result);
          res = null;
          break;
        }
        ;
        res = res << 6 | nextChar & 63;
        i++;
      }
      if (res === null) {
        continue;
      }
      if (res > 1114111) {
        i += onError("OUT_OF_RANGE", i - 1 - extraLength, bytes2, result, res);
        continue;
      }
      if (res >= 55296 && res <= 57343) {
        i += onError("UTF16_SURROGATE", i - 1 - extraLength, bytes2, result, res);
        continue;
      }
      if (res <= overlongMask) {
        i += onError("OVERLONG", i - 1 - extraLength, bytes2, result, res);
        continue;
      }
      result.push(res);
    }
    return result;
  }
  function toUtf8Bytes(str, form) {
    assertArgument(typeof str === "string", "invalid string value", "str", str);
    if (form != null) {
      assertNormalize(form);
      str = str.normalize(form);
    }
    let result = [];
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      if (c < 128) {
        result.push(c);
      } else if (c < 2048) {
        result.push(c >> 6 | 192);
        result.push(c & 63 | 128);
      } else if ((c & 64512) == 55296) {
        i++;
        const c2 = str.charCodeAt(i);
        assertArgument(i < str.length && (c2 & 64512) === 56320, "invalid surrogate pair", "str", str);
        const pair = 65536 + ((c & 1023) << 10) + (c2 & 1023);
        result.push(pair >> 18 | 240);
        result.push(pair >> 12 & 63 | 128);
        result.push(pair >> 6 & 63 | 128);
        result.push(pair & 63 | 128);
      } else {
        result.push(c >> 12 | 224);
        result.push(c >> 6 & 63 | 128);
        result.push(c & 63 | 128);
      }
    }
    return new Uint8Array(result);
  }
  function _toUtf8String(codePoints) {
    return codePoints.map((codePoint) => {
      if (codePoint <= 65535) {
        return String.fromCharCode(codePoint);
      }
      codePoint -= 65536;
      return String.fromCharCode((codePoint >> 10 & 1023) + 55296, (codePoint & 1023) + 56320);
    }).join("");
  }
  function toUtf8String(bytes2, onError) {
    return _toUtf8String(getUtf8CodePoints(bytes2, onError));
  }

  // node_modules/ethers/lib.esm/utils/rlp-decode.js
  function hexlifyByte(value) {
    let result = value.toString(16);
    while (result.length < 2) {
      result = "0" + result;
    }
    return "0x" + result;
  }
  function unarrayifyInteger(data, offset, length) {
    let result = 0;
    for (let i = 0; i < length; i++) {
      result = result * 256 + data[offset + i];
    }
    return result;
  }
  function _decodeChildren(data, offset, childOffset, length) {
    const result = [];
    while (childOffset < offset + 1 + length) {
      const decoded = _decode(data, childOffset);
      result.push(decoded.result);
      childOffset += decoded.consumed;
      assert(childOffset <= offset + 1 + length, "child data too short", "BUFFER_OVERRUN", {
        buffer: data,
        length,
        offset
      });
    }
    return { consumed: 1 + length, result };
  }
  function _decode(data, offset) {
    assert(data.length !== 0, "data too short", "BUFFER_OVERRUN", {
      buffer: data,
      length: 0,
      offset: 1
    });
    const checkOffset = (offset2) => {
      assert(offset2 <= data.length, "data short segment too short", "BUFFER_OVERRUN", {
        buffer: data,
        length: data.length,
        offset: offset2
      });
    };
    if (data[offset] >= 248) {
      const lengthLength = data[offset] - 247;
      checkOffset(offset + 1 + lengthLength);
      const length = unarrayifyInteger(data, offset + 1, lengthLength);
      checkOffset(offset + 1 + lengthLength + length);
      return _decodeChildren(data, offset, offset + 1 + lengthLength, lengthLength + length);
    } else if (data[offset] >= 192) {
      const length = data[offset] - 192;
      checkOffset(offset + 1 + length);
      return _decodeChildren(data, offset, offset + 1, length);
    } else if (data[offset] >= 184) {
      const lengthLength = data[offset] - 183;
      checkOffset(offset + 1 + lengthLength);
      const length = unarrayifyInteger(data, offset + 1, lengthLength);
      checkOffset(offset + 1 + lengthLength + length);
      const result = hexlify(data.slice(offset + 1 + lengthLength, offset + 1 + lengthLength + length));
      return { consumed: 1 + lengthLength + length, result };
    } else if (data[offset] >= 128) {
      const length = data[offset] - 128;
      checkOffset(offset + 1 + length);
      const result = hexlify(data.slice(offset + 1, offset + 1 + length));
      return { consumed: 1 + length, result };
    }
    return { consumed: 1, result: hexlifyByte(data[offset]) };
  }
  function decodeRlp(_data) {
    const data = getBytes(_data, "data");
    const decoded = _decode(data, 0);
    assertArgument(decoded.consumed === data.length, "unexpected junk after rlp payload", "data", _data);
    return decoded.result;
  }

  // node_modules/ethers/lib.esm/utils/rlp-encode.js
  function arrayifyInteger(value) {
    const result = [];
    while (value) {
      result.unshift(value & 255);
      value >>= 8;
    }
    return result;
  }
  function _encode(object) {
    if (Array.isArray(object)) {
      let payload = [];
      object.forEach(function(child) {
        payload = payload.concat(_encode(child));
      });
      if (payload.length <= 55) {
        payload.unshift(192 + payload.length);
        return payload;
      }
      const length2 = arrayifyInteger(payload.length);
      length2.unshift(247 + length2.length);
      return length2.concat(payload);
    }
    const data = Array.prototype.slice.call(getBytes(object, "object"));
    if (data.length === 1 && data[0] <= 127) {
      return data;
    } else if (data.length <= 55) {
      data.unshift(128 + data.length);
      return data;
    }
    const length = arrayifyInteger(data.length);
    length.unshift(183 + length.length);
    return length.concat(data);
  }
  var nibbles = "0123456789abcdef";
  function encodeRlp(object) {
    let result = "0x";
    for (const v of _encode(object)) {
      result += nibbles[v >> 4];
      result += nibbles[v & 15];
    }
    return result;
  }

  // node_modules/ethers/lib.esm/utils/uuid.js
  function uuidV4(randomBytes7) {
    const bytes2 = getBytes(randomBytes7, "randomBytes");
    bytes2[6] = bytes2[6] & 15 | 64;
    bytes2[8] = bytes2[8] & 63 | 128;
    const value = hexlify(bytes2);
    return [
      value.substring(2, 10),
      value.substring(10, 14),
      value.substring(14, 18),
      value.substring(18, 22),
      value.substring(22, 34)
    ].join("-");
  }

  // node_modules/ethers/lib.esm/abi/coders/abstract-coder.js
  var WordSize = 32;
  var Padding = new Uint8Array(WordSize);
  var passProperties = ["then"];
  var _guard = {};
  var resultNames = /* @__PURE__ */ new WeakMap();
  function getNames(result) {
    return resultNames.get(result);
  }
  function setNames(result, names) {
    resultNames.set(result, names);
  }
  function throwError(name, error) {
    const wrapped = new Error(`deferred error during ABI decoding triggered accessing ${name}`);
    wrapped.error = error;
    throw wrapped;
  }
  function toObject(names, items, deep) {
    if (names.indexOf(null) >= 0) {
      return items.map((item, index) => {
        if (item instanceof Result) {
          return toObject(getNames(item), item, deep);
        }
        return item;
      });
    }
    return names.reduce((accum, name, index) => {
      let item = items.getValue(name);
      if (!(name in accum)) {
        if (deep && item instanceof Result) {
          item = toObject(getNames(item), item, deep);
        }
        accum[name] = item;
      }
      return accum;
    }, {});
  }
  var Result = class _Result extends Array {
    // No longer used; but cannot be removed as it will remove the
    // #private field from the .d.ts which may break backwards
    // compatibility
    #names;
    /**
     *  @private
     */
    constructor(...args) {
      const guard = args[0];
      let items = args[1];
      let names = (args[2] || []).slice();
      let wrap = true;
      if (guard !== _guard) {
        items = args;
        names = [];
        wrap = false;
      }
      super(items.length);
      items.forEach((item, index) => {
        this[index] = item;
      });
      const nameCounts = names.reduce((accum, name) => {
        if (typeof name === "string") {
          accum.set(name, (accum.get(name) || 0) + 1);
        }
        return accum;
      }, /* @__PURE__ */ new Map());
      setNames(this, Object.freeze(items.map((item, index) => {
        const name = names[index];
        if (name != null && nameCounts.get(name) === 1) {
          return name;
        }
        return null;
      })));
      this.#names = [];
      if (this.#names == null) {
        void this.#names;
      }
      if (!wrap) {
        return;
      }
      Object.freeze(this);
      const proxy = new Proxy(this, {
        get: (target, prop, receiver) => {
          if (typeof prop === "string") {
            if (prop.match(/^[0-9]+$/)) {
              const index = getNumber(prop, "%index");
              if (index < 0 || index >= this.length) {
                throw new RangeError("out of result range");
              }
              const item = target[index];
              if (item instanceof Error) {
                throwError(`index ${index}`, item);
              }
              return item;
            }
            if (passProperties.indexOf(prop) >= 0) {
              return Reflect.get(target, prop, receiver);
            }
            const value = target[prop];
            if (value instanceof Function) {
              return function(...args2) {
                return value.apply(this === receiver ? target : this, args2);
              };
            } else if (!(prop in target)) {
              return target.getValue.apply(this === receiver ? target : this, [prop]);
            }
          }
          return Reflect.get(target, prop, receiver);
        }
      });
      setNames(proxy, getNames(this));
      return proxy;
    }
    /**
     *  Returns the Result as a normal Array. If %%deep%%, any children
     *  which are Result objects are also converted to a normal Array.
     *
     *  This will throw if there are any outstanding deferred
     *  errors.
     */
    toArray(deep) {
      const result = [];
      this.forEach((item, index) => {
        if (item instanceof Error) {
          throwError(`index ${index}`, item);
        }
        if (deep && item instanceof _Result) {
          item = item.toArray(deep);
        }
        result.push(item);
      });
      return result;
    }
    /**
     *  Returns the Result as an Object with each name-value pair. If
     *  %%deep%%, any children which are Result objects are also
     *  converted to an Object.
     *
     *  This will throw if any value is unnamed, or if there are
     *  any outstanding deferred errors.
     */
    toObject(deep) {
      const names = getNames(this);
      return names.reduce((accum, name, index) => {
        assert(name != null, `value at index ${index} unnamed`, "UNSUPPORTED_OPERATION", {
          operation: "toObject()"
        });
        return toObject(names, this, deep);
      }, {});
    }
    /**
     *  @_ignore
     */
    slice(start, end) {
      if (start == null) {
        start = 0;
      }
      if (start < 0) {
        start += this.length;
        if (start < 0) {
          start = 0;
        }
      }
      if (end == null) {
        end = this.length;
      }
      if (end < 0) {
        end += this.length;
        if (end < 0) {
          end = 0;
        }
      }
      if (end > this.length) {
        end = this.length;
      }
      const _names = getNames(this);
      const result = [], names = [];
      for (let i = start; i < end; i++) {
        result.push(this[i]);
        names.push(_names[i]);
      }
      return new _Result(_guard, result, names);
    }
    /**
     *  @_ignore
     */
    filter(callback, thisArg) {
      const _names = getNames(this);
      const result = [], names = [];
      for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (item instanceof Error) {
          throwError(`index ${i}`, item);
        }
        if (callback.call(thisArg, item, i, this)) {
          result.push(item);
          names.push(_names[i]);
        }
      }
      return new _Result(_guard, result, names);
    }
    /**
     *  @_ignore
     */
    map(callback, thisArg) {
      const result = [];
      for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (item instanceof Error) {
          throwError(`index ${i}`, item);
        }
        result.push(callback.call(thisArg, item, i, this));
      }
      return result;
    }
    /**
     *  Returns the value for %%name%%.
     *
     *  Since it is possible to have a key whose name conflicts with
     *  a method on a [[Result]] or its superclass Array, or any
     *  JavaScript keyword, this ensures all named values are still
     *  accessible by name.
     */
    getValue(name) {
      const index = getNames(this).indexOf(name);
      if (index === -1) {
        return void 0;
      }
      const value = this[index];
      if (value instanceof Error) {
        throwError(`property ${JSON.stringify(name)}`, value.error);
      }
      return value;
    }
    /**
     *  Creates a new [[Result]] for %%items%% with each entry
     *  also accessible by its corresponding name in %%keys%%.
     */
    static fromItems(items, keys) {
      return new _Result(_guard, items, keys);
    }
  };
  function getValue(value) {
    let bytes2 = toBeArray(value);
    assert(bytes2.length <= WordSize, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: bytes2, length: WordSize, offset: bytes2.length });
    if (bytes2.length !== WordSize) {
      bytes2 = getBytesCopy(concat([Padding.slice(bytes2.length % WordSize), bytes2]));
    }
    return bytes2;
  }
  var Coder = class {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    name;
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    type;
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    localName;
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    dynamic;
    constructor(name, type, localName, dynamic) {
      defineProperties(this, { name, type, localName, dynamic }, {
        name: "string",
        type: "string",
        localName: "string",
        dynamic: "boolean"
      });
    }
    _throwError(message, value) {
      assertArgument(false, message, this.localName, value);
    }
  };
  var Writer = class {
    // An array of WordSize lengthed objects to concatenation
    #data;
    #dataLength;
    constructor() {
      this.#data = [];
      this.#dataLength = 0;
    }
    get data() {
      return concat(this.#data);
    }
    get length() {
      return this.#dataLength;
    }
    #writeData(data) {
      this.#data.push(data);
      this.#dataLength += data.length;
      return data.length;
    }
    appendWriter(writer) {
      return this.#writeData(getBytesCopy(writer.data));
    }
    // Arrayish item; pad on the right to *nearest* WordSize
    writeBytes(value) {
      let bytes2 = getBytesCopy(value);
      const paddingOffset = bytes2.length % WordSize;
      if (paddingOffset) {
        bytes2 = getBytesCopy(concat([bytes2, Padding.slice(paddingOffset)]));
      }
      return this.#writeData(bytes2);
    }
    // Numeric item; pad on the left *to* WordSize
    writeValue(value) {
      return this.#writeData(getValue(value));
    }
    // Inserts a numeric place-holder, returning a callback that can
    // be used to asjust the value later
    writeUpdatableValue() {
      const offset = this.#data.length;
      this.#data.push(Padding);
      this.#dataLength += WordSize;
      return (value) => {
        this.#data[offset] = getValue(value);
      };
    }
  };
  var Reader = class _Reader {
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    allowLoose;
    #data;
    #offset;
    #bytesRead;
    #parent;
    #maxInflation;
    constructor(data, allowLoose, maxInflation) {
      defineProperties(this, { allowLoose: !!allowLoose });
      this.#data = getBytesCopy(data);
      this.#bytesRead = 0;
      this.#parent = null;
      this.#maxInflation = maxInflation != null ? maxInflation : 1024;
      this.#offset = 0;
    }
    get data() {
      return hexlify(this.#data);
    }
    get dataLength() {
      return this.#data.length;
    }
    get consumed() {
      return this.#offset;
    }
    get bytes() {
      return new Uint8Array(this.#data);
    }
    #incrementBytesRead(count) {
      if (this.#parent) {
        return this.#parent.#incrementBytesRead(count);
      }
      this.#bytesRead += count;
      assert(this.#maxInflation < 1 || this.#bytesRead <= this.#maxInflation * this.dataLength, `compressed ABI data exceeds inflation ratio of ${this.#maxInflation} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
        buffer: getBytesCopy(this.#data),
        offset: this.#offset,
        length: count,
        info: {
          bytesRead: this.#bytesRead,
          dataLength: this.dataLength
        }
      });
    }
    #peekBytes(offset, length, loose) {
      let alignedLength = Math.ceil(length / WordSize) * WordSize;
      if (this.#offset + alignedLength > this.#data.length) {
        if (this.allowLoose && loose && this.#offset + length <= this.#data.length) {
          alignedLength = length;
        } else {
          assert(false, "data out-of-bounds", "BUFFER_OVERRUN", {
            buffer: getBytesCopy(this.#data),
            length: this.#data.length,
            offset: this.#offset + alignedLength
          });
        }
      }
      return this.#data.slice(this.#offset, this.#offset + alignedLength);
    }
    // Create a sub-reader with the same underlying data, but offset
    subReader(offset) {
      const reader = new _Reader(this.#data.slice(this.#offset + offset), this.allowLoose, this.#maxInflation);
      reader.#parent = this;
      return reader;
    }
    // Read bytes
    readBytes(length, loose) {
      let bytes2 = this.#peekBytes(0, length, !!loose);
      this.#incrementBytesRead(length);
      this.#offset += bytes2.length;
      return bytes2.slice(0, length);
    }
    // Read a numeric values
    readValue() {
      return toBigInt(this.readBytes(WordSize));
    }
    readIndex() {
      return toNumber(this.readBytes(WordSize));
    }
  };

  // node_modules/ethers/node_modules/@noble/hashes/esm/_assert.js
  function number(n2) {
    if (!Number.isSafeInteger(n2) || n2 < 0)
      throw new Error(`Wrong positive integer: ${n2}`);
  }
  function bytes(b2, ...lengths) {
    if (!(b2 instanceof Uint8Array))
      throw new Error("Expected Uint8Array");
    if (lengths.length > 0 && !lengths.includes(b2.length))
      throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b2.length}`);
  }
  function hash(hash3) {
    if (typeof hash3 !== "function" || typeof hash3.create !== "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(hash3.outputLen);
    number(hash3.blockLen);
  }
  function exists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
  }

  // node_modules/ethers/node_modules/@noble/hashes/esm/crypto.js
  var crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

  // node_modules/ethers/node_modules/@noble/hashes/esm/utils.js
  var u8a = (a) => a instanceof Uint8Array;
  var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  var rotr = (word, shift) => word << 32 - shift | word >>> shift;
  var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  if (!isLE)
    throw new Error("Non little-endian hardware is not supported");
  var nextTick = async () => {
  };
  async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0; i < iters; i++) {
      cb(i);
      const diff = Date.now() - ts;
      if (diff >= 0 && diff < tick)
        continue;
      await nextTick();
      ts += diff;
    }
  }
  function utf8ToBytes(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    if (!u8a(data))
      throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
  }
  function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
    let pad = 0;
    arrays.forEach((a) => {
      if (!u8a(a))
        throw new Error("Uint8Array expected");
      r.set(a, pad);
      pad += a.length;
    });
    return r;
  }
  var Hash = class {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  };
  var toStr = {}.toString;
  function checkOpts(defaults, opts) {
    if (opts !== void 0 && toStr.call(opts) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
  }
  function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  function randomBytes(bytesLength = 32) {
    if (crypto && typeof crypto.getRandomValues === "function") {
      return crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error("crypto.getRandomValues must be defined");
  }

  // node_modules/ethers/node_modules/@noble/hashes/esm/hmac.js
  var HMAC = class extends Hash {
    constructor(hash3, _key) {
      super();
      this.finished = false;
      this.destroyed = false;
      hash(hash3);
      const key = toBytes(_key);
      this.iHash = hash3.create();
      if (typeof this.iHash.update !== "function")
        throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen;
      this.outputLen = this.iHash.outputLen;
      const blockLen = this.blockLen;
      const pad = new Uint8Array(blockLen);
      pad.set(key.length > blockLen ? hash3.create().update(key).digest() : key);
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54;
      this.iHash.update(pad);
      this.oHash = hash3.create();
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54 ^ 92;
      this.oHash.update(pad);
      pad.fill(0);
    }
    update(buf) {
      exists(this);
      this.iHash.update(buf);
      return this;
    }
    digestInto(out) {
      exists(this);
      bytes(out, this.outputLen);
      this.finished = true;
      this.iHash.digestInto(out);
      this.oHash.update(out);
      this.oHash.digestInto(out);
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.oHash.outputLen);
      this.digestInto(out);
      return out;
    }
    _cloneInto(to) {
      to || (to = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
      to = to;
      to.finished = finished;
      to.destroyed = destroyed;
      to.blockLen = blockLen;
      to.outputLen = outputLen;
      to.oHash = oHash._cloneInto(to.oHash);
      to.iHash = iHash._cloneInto(to.iHash);
      return to;
    }
    destroy() {
      this.destroyed = true;
      this.oHash.destroy();
      this.iHash.destroy();
    }
  };
  var hmac = (hash3, key, message) => new HMAC(hash3, key).update(message).digest();
  hmac.create = (hash3, key) => new HMAC(hash3, key);

  // node_modules/ethers/node_modules/@noble/hashes/esm/pbkdf2.js
  function pbkdf2Init(hash3, _password, _salt, _opts) {
    hash(hash3);
    const opts = checkOpts({ dkLen: 32, asyncTick: 10 }, _opts);
    const { c, dkLen, asyncTick } = opts;
    number(c);
    number(dkLen);
    number(asyncTick);
    if (c < 1)
      throw new Error("PBKDF2: iterations (c) should be >= 1");
    const password = toBytes(_password);
    const salt = toBytes(_salt);
    const DK = new Uint8Array(dkLen);
    const PRF = hmac.create(hash3, password);
    const PRFSalt = PRF._cloneInto().update(salt);
    return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
  }
  function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW)
      prfW.destroy();
    u.fill(0);
    return DK;
  }
  function pbkdf2(hash3, password, salt, opts) {
    const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash3, password, salt, opts);
    let prfW;
    const arr = new Uint8Array(4);
    const view = createView(arr);
    const u = new Uint8Array(PRF.outputLen);
    for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
      const Ti = DK.subarray(pos, pos + PRF.outputLen);
      view.setInt32(0, ti, false);
      (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
      Ti.set(u.subarray(0, Ti.length));
      for (let ui = 1; ui < c; ui++) {
        PRF._cloneInto(prfW).update(u).digestInto(u);
        for (let i = 0; i < Ti.length; i++)
          Ti[i] ^= u[i];
      }
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
  }

  // node_modules/ethers/node_modules/@noble/hashes/esm/_sha2.js
  function setBigUint64(view, byteOffset, value, isLE4) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE4);
    const _32n3 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n3 & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE4 ? 4 : 0;
    const l = isLE4 ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE4);
    view.setUint32(byteOffset + l, wl, isLE4);
  }
  var SHA2 = class extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE4) {
      super();
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE4;
      this.finished = false;
      this.length = 0;
      this.pos = 0;
      this.destroyed = false;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView(this.buffer);
    }
    update(data) {
      exists(this);
      const { view, buffer, blockLen } = this;
      data = toBytes(data);
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView(data);
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      exists(this);
      output(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE: isLE4 } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      this.buffer.subarray(pos).fill(0);
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i = pos; i < blockLen; i++)
        buffer[i] = 0;
      setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE4);
      this.process(view, 0);
      const oview = createView(out);
      const len = this.outputLen;
      if (len % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const outLen = len / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i = 0; i < outLen; i++)
        oview.setUint32(4 * i, state[i], isLE4);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to) {
      to || (to = new this.constructor());
      to.set(...this.get());
      const { blockLen, buffer, length, finished, destroyed, pos } = this;
      to.length = length;
      to.pos = pos;
      to.finished = finished;
      to.destroyed = destroyed;
      if (length % blockLen)
        to.buffer.set(buffer);
      return to;
    }
  };

  // node_modules/ethers/node_modules/@noble/hashes/esm/sha256.js
  var Chi = (a, b2, c) => a & b2 ^ ~a & c;
  var Maj = (a, b2, c) => a & b2 ^ a & c ^ b2 & c;
  var SHA256_K = /* @__PURE__ */ new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var IV = /* @__PURE__ */ new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  var SHA256 = class extends SHA2 {
    constructor() {
      super(64, 32, 8, false);
      this.A = IV[0] | 0;
      this.B = IV[1] | 0;
      this.C = IV[2] | 0;
      this.D = IV[3] | 0;
      this.E = IV[4] | 0;
      this.F = IV[5] | 0;
      this.G = IV[6] | 0;
      this.H = IV[7] | 0;
    }
    get() {
      const { A, B, C, D, E, F, G, H } = this;
      return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
      this.A = A | 0;
      this.B = B | 0;
      this.C = C | 0;
      this.D = D | 0;
      this.E = E | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4)
        SHA256_W[i] = view.getUint32(offset, false);
      for (let i = 16; i < 64; i++) {
        const W15 = SHA256_W[i - 15];
        const W2 = SHA256_W[i - 2];
        const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
        SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
      }
      let { A, B, C, D, E, F, G, H } = this;
      for (let i = 0; i < 64; i++) {
        const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
        const T12 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
        const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
        const T22 = sigma0 + Maj(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T12 | 0;
        D = C;
        C = B;
        B = A;
        A = T12 + T22 | 0;
      }
      A = A + this.A | 0;
      B = B + this.B | 0;
      C = C + this.C | 0;
      D = D + this.D | 0;
      E = E + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H = H + this.H | 0;
      this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
      SHA256_W.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      this.buffer.fill(0);
    }
  };
  var sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());

  // node_modules/ethers/node_modules/@noble/hashes/esm/_u64.js
  var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  var _32n = /* @__PURE__ */ BigInt(32);
  function fromBig(n2, le = false) {
    if (le)
      return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
    return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
  }
  function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
      const { h, l } = fromBig(lst[i], le);
      [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
  }
  var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
  var shrSH = (h, _l, s) => h >>> s;
  var shrSL = (h, l, s) => h << 32 - s | l >>> s;
  var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
  var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
  var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
  var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
  var rotr32H = (_h, l) => l;
  var rotr32L = (h, _l) => h;
  var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
  var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
  var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
  var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
  function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
  }
  var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
  var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
  var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
  var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
  var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
  var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
  var u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
  };
  var u64_default = u64;

  // node_modules/ethers/node_modules/@noble/hashes/esm/sha512.js
  var [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => u64_default.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((n2) => BigInt(n2))))();
  var SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
  var SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
  var SHA512 = class extends SHA2 {
    constructor() {
      super(128, 64, 16, false);
      this.Ah = 1779033703 | 0;
      this.Al = 4089235720 | 0;
      this.Bh = 3144134277 | 0;
      this.Bl = 2227873595 | 0;
      this.Ch = 1013904242 | 0;
      this.Cl = 4271175723 | 0;
      this.Dh = 2773480762 | 0;
      this.Dl = 1595750129 | 0;
      this.Eh = 1359893119 | 0;
      this.El = 2917565137 | 0;
      this.Fh = 2600822924 | 0;
      this.Fl = 725511199 | 0;
      this.Gh = 528734635 | 0;
      this.Gl = 4215389547 | 0;
      this.Hh = 1541459225 | 0;
      this.Hl = 327033209 | 0;
    }
    // prettier-ignore
    get() {
      const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
      this.Ah = Ah | 0;
      this.Al = Al | 0;
      this.Bh = Bh | 0;
      this.Bl = Bl | 0;
      this.Ch = Ch | 0;
      this.Cl = Cl | 0;
      this.Dh = Dh | 0;
      this.Dl = Dl | 0;
      this.Eh = Eh | 0;
      this.El = El | 0;
      this.Fh = Fh | 0;
      this.Fl = Fl | 0;
      this.Gh = Gh | 0;
      this.Gl = Gl | 0;
      this.Hh = Hh | 0;
      this.Hl = Hl | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4) {
        SHA512_W_H[i] = view.getUint32(offset);
        SHA512_W_L[i] = view.getUint32(offset += 4);
      }
      for (let i = 16; i < 80; i++) {
        const W15h = SHA512_W_H[i - 15] | 0;
        const W15l = SHA512_W_L[i - 15] | 0;
        const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
        const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
        const W2h = SHA512_W_H[i - 2] | 0;
        const W2l = SHA512_W_L[i - 2] | 0;
        const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
        const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
        const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
        const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
        SHA512_W_H[i] = SUMh | 0;
        SHA512_W_L[i] = SUMl | 0;
      }
      let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      for (let i = 0; i < 80; i++) {
        const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
        const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
        const CHIh = Eh & Fh ^ ~Eh & Gh;
        const CHIl = El & Fl ^ ~El & Gl;
        const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
        const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
        const T1l = T1ll | 0;
        const sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
        const sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
        const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
        const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
        Hh = Gh | 0;
        Hl = Gl | 0;
        Gh = Fh | 0;
        Gl = Fl | 0;
        Fh = Eh | 0;
        Fl = El | 0;
        ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
        Dh = Ch | 0;
        Dl = Cl | 0;
        Ch = Bh | 0;
        Cl = Bl | 0;
        Bh = Ah | 0;
        Bl = Al | 0;
        const All = u64_default.add3L(T1l, sigma0l, MAJl);
        Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
        Al = All | 0;
      }
      ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
      ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
      ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
      ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
      ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
      ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
      ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
      ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
      this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
      SHA512_W_H.fill(0);
      SHA512_W_L.fill(0);
    }
    destroy() {
      this.buffer.fill(0);
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  var sha512 = /* @__PURE__ */ wrapConstructor(() => new SHA512());

  // node_modules/ethers/lib.esm/crypto/crypto-browser.js
  function getGlobal() {
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    throw new Error("unable to locate global object");
  }
  var anyGlobal = getGlobal();
  var crypto2 = anyGlobal.crypto || anyGlobal.msCrypto;
  function createHash(algo) {
    switch (algo) {
      case "sha256":
        return sha256.create();
      case "sha512":
        return sha512.create();
    }
    assertArgument(false, "invalid hashing algorithm name", "algorithm", algo);
  }
  function createHmac(_algo, key) {
    const algo = { sha256, sha512 }[_algo];
    assertArgument(algo != null, "invalid hmac algorithm", "algorithm", _algo);
    return hmac.create(algo, key);
  }
  function pbkdf2Sync(password, salt, iterations, keylen, _algo) {
    const algo = { sha256, sha512 }[_algo];
    assertArgument(algo != null, "invalid pbkdf2 algorithm", "algorithm", _algo);
    return pbkdf2(algo, password, salt, { c: iterations, dkLen: keylen });
  }
  function randomBytes2(length) {
    assert(crypto2 != null, "platform does not support secure random numbers", "UNSUPPORTED_OPERATION", {
      operation: "randomBytes"
    });
    assertArgument(Number.isInteger(length) && length > 0 && length <= 1024, "invalid length", "length", length);
    const result = new Uint8Array(length);
    crypto2.getRandomValues(result);
    return result;
  }

  // node_modules/ethers/lib.esm/crypto/hmac.js
  var locked = false;
  var _computeHmac = function(algorithm, key, data) {
    return createHmac(algorithm, key).update(data).digest();
  };
  var __computeHmac = _computeHmac;
  function computeHmac(algorithm, _key, _data) {
    const key = getBytes(_key, "key");
    const data = getBytes(_data, "data");
    return hexlify(__computeHmac(algorithm, key, data));
  }
  computeHmac._ = _computeHmac;
  computeHmac.lock = function() {
    locked = true;
  };
  computeHmac.register = function(func) {
    if (locked) {
      throw new Error("computeHmac is locked");
    }
    __computeHmac = func;
  };
  Object.freeze(computeHmac);

  // node_modules/ethers/node_modules/@noble/hashes/esm/sha3.js
  var [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
  var _0n = /* @__PURE__ */ BigInt(0);
  var _1n = /* @__PURE__ */ BigInt(1);
  var _2n = /* @__PURE__ */ BigInt(2);
  var _7n = /* @__PURE__ */ BigInt(7);
  var _256n = /* @__PURE__ */ BigInt(256);
  var _0x71n = /* @__PURE__ */ BigInt(113);
  for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    let t = _0n;
    for (let j = 0; j < 7; j++) {
      R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
      if (R & _2n)
        t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
  }
  var [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
  var rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
  var rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
  function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    for (let round = 24 - rounds; round < 24; round++) {
      for (let x = 0; x < 10; x++)
        B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
      for (let x = 0; x < 10; x += 2) {
        const idx1 = (x + 8) % 10;
        const idx0 = (x + 2) % 10;
        const B0 = B[idx0];
        const B1 = B[idx0 + 1];
        const Th = rotlH(B0, B1, 1) ^ B[idx1];
        const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
        for (let y = 0; y < 50; y += 10) {
          s[x + y] ^= Th;
          s[x + y + 1] ^= Tl;
        }
      }
      let curH = s[2];
      let curL = s[3];
      for (let t = 0; t < 24; t++) {
        const shift = SHA3_ROTL[t];
        const Th = rotlH(curH, curL, shift);
        const Tl = rotlL(curH, curL, shift);
        const PI = SHA3_PI[t];
        curH = s[PI];
        curL = s[PI + 1];
        s[PI] = Th;
        s[PI + 1] = Tl;
      }
      for (let y = 0; y < 50; y += 10) {
        for (let x = 0; x < 10; x++)
          B[x] = s[y + x];
        for (let x = 0; x < 10; x++)
          s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
      }
      s[0] ^= SHA3_IOTA_H[round];
      s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
  }
  var Keccak = class _Keccak extends Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
      super();
      this.blockLen = blockLen;
      this.suffix = suffix;
      this.outputLen = outputLen;
      this.enableXOF = enableXOF;
      this.rounds = rounds;
      this.pos = 0;
      this.posOut = 0;
      this.finished = false;
      this.destroyed = false;
      number(outputLen);
      if (0 >= this.blockLen || this.blockLen >= 200)
        throw new Error("Sha3 supports only keccak-f1600 function");
      this.state = new Uint8Array(200);
      this.state32 = u32(this.state);
    }
    keccak() {
      keccakP(this.state32, this.rounds);
      this.posOut = 0;
      this.pos = 0;
    }
    update(data) {
      exists(this);
      const { blockLen, state } = this;
      data = toBytes(data);
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        for (let i = 0; i < take; i++)
          state[this.pos++] ^= data[pos++];
        if (this.pos === blockLen)
          this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished)
        return;
      this.finished = true;
      const { state, suffix, pos, blockLen } = this;
      state[pos] ^= suffix;
      if ((suffix & 128) !== 0 && pos === blockLen - 1)
        this.keccak();
      state[blockLen - 1] ^= 128;
      this.keccak();
    }
    writeInto(out) {
      exists(this, false);
      bytes(out);
      this.finish();
      const bufferOut = this.state;
      const { blockLen } = this;
      for (let pos = 0, len = out.length; pos < len; ) {
        if (this.posOut >= blockLen)
          this.keccak();
        const take = Math.min(blockLen - this.posOut, len - pos);
        out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
        this.posOut += take;
        pos += take;
      }
      return out;
    }
    xofInto(out) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(out);
    }
    xof(bytes2) {
      number(bytes2);
      return this.xofInto(new Uint8Array(bytes2));
    }
    digestInto(out) {
      output(out, this);
      if (this.finished)
        throw new Error("digest() was already called");
      this.writeInto(out);
      this.destroy();
      return out;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true;
      this.state.fill(0);
    }
    _cloneInto(to) {
      const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
      to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
      to.state32.set(this.state32);
      to.pos = this.pos;
      to.posOut = this.posOut;
      to.finished = this.finished;
      to.rounds = rounds;
      to.suffix = suffix;
      to.outputLen = outputLen;
      to.enableXOF = enableXOF;
      to.destroyed = this.destroyed;
      return to;
    }
  };
  var gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
  var sha3_224 = /* @__PURE__ */ gen(6, 144, 224 / 8);
  var sha3_256 = /* @__PURE__ */ gen(6, 136, 256 / 8);
  var sha3_384 = /* @__PURE__ */ gen(6, 104, 384 / 8);
  var sha3_512 = /* @__PURE__ */ gen(6, 72, 512 / 8);
  var keccak_224 = /* @__PURE__ */ gen(1, 144, 224 / 8);
  var keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
  var keccak_384 = /* @__PURE__ */ gen(1, 104, 384 / 8);
  var keccak_512 = /* @__PURE__ */ gen(1, 72, 512 / 8);
  var genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
  var shake128 = /* @__PURE__ */ genShake(31, 168, 128 / 8);
  var shake256 = /* @__PURE__ */ genShake(31, 136, 256 / 8);

  // node_modules/ethers/lib.esm/crypto/keccak.js
  var locked2 = false;
  var _keccak256 = function(data) {
    return keccak_256(data);
  };
  var __keccak256 = _keccak256;
  function keccak256(_data) {
    const data = getBytes(_data, "data");
    return hexlify(__keccak256(data));
  }
  keccak256._ = _keccak256;
  keccak256.lock = function() {
    locked2 = true;
  };
  keccak256.register = function(func) {
    if (locked2) {
      throw new TypeError("keccak256 is locked");
    }
    __keccak256 = func;
  };
  Object.freeze(keccak256);

  // node_modules/ethers/node_modules/@noble/hashes/esm/ripemd160.js
  var Rho = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
  var Id = /* @__PURE__ */ Uint8Array.from({ length: 16 }, (_, i) => i);
  var Pi = /* @__PURE__ */ Id.map((i) => (9 * i + 5) % 16);
  var idxL = [Id];
  var idxR = [Pi];
  for (let i = 0; i < 4; i++)
    for (let j of [idxL, idxR])
      j.push(j[i].map((k) => Rho[k]));
  var shifts = /* @__PURE__ */ [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
  ].map((i) => new Uint8Array(i));
  var shiftsL = /* @__PURE__ */ idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
  var shiftsR = /* @__PURE__ */ idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
  var Kl = /* @__PURE__ */ new Uint32Array([
    0,
    1518500249,
    1859775393,
    2400959708,
    2840853838
  ]);
  var Kr = /* @__PURE__ */ new Uint32Array([
    1352829926,
    1548603684,
    1836072691,
    2053994217,
    0
  ]);
  var rotl = (word, shift) => word << shift | word >>> 32 - shift;
  function f(group, x, y, z) {
    if (group === 0)
      return x ^ y ^ z;
    else if (group === 1)
      return x & y | ~x & z;
    else if (group === 2)
      return (x | ~y) ^ z;
    else if (group === 3)
      return x & z | y & ~z;
    else
      return x ^ (y | ~z);
  }
  var BUF = /* @__PURE__ */ new Uint32Array(16);
  var RIPEMD160 = class extends SHA2 {
    constructor() {
      super(64, 20, 8, true);
      this.h0 = 1732584193 | 0;
      this.h1 = 4023233417 | 0;
      this.h2 = 2562383102 | 0;
      this.h3 = 271733878 | 0;
      this.h4 = 3285377520 | 0;
    }
    get() {
      const { h0, h1, h2, h3, h4 } = this;
      return [h0, h1, h2, h3, h4];
    }
    set(h0, h1, h2, h3, h4) {
      this.h0 = h0 | 0;
      this.h1 = h1 | 0;
      this.h2 = h2 | 0;
      this.h3 = h3 | 0;
      this.h4 = h4 | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4)
        BUF[i] = view.getUint32(offset, true);
      let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
      for (let group = 0; group < 5; group++) {
        const rGroup = 4 - group;
        const hbl = Kl[group], hbr = Kr[group];
        const rl = idxL[group], rr = idxR[group];
        const sl = shiftsL[group], sr = shiftsR[group];
        for (let i = 0; i < 16; i++) {
          const tl = rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el | 0;
          al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
        }
        for (let i = 0; i < 16; i++) {
          const tr = rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er | 0;
          ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
        }
      }
      this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
    }
    roundClean() {
      BUF.fill(0);
    }
    destroy() {
      this.destroyed = true;
      this.buffer.fill(0);
      this.set(0, 0, 0, 0, 0);
    }
  };
  var ripemd160 = /* @__PURE__ */ wrapConstructor(() => new RIPEMD160());

  // node_modules/ethers/lib.esm/crypto/ripemd160.js
  var locked3 = false;
  var _ripemd160 = function(data) {
    return ripemd160(data);
  };
  var __ripemd160 = _ripemd160;
  function ripemd1602(_data) {
    const data = getBytes(_data, "data");
    return hexlify(__ripemd160(data));
  }
  ripemd1602._ = _ripemd160;
  ripemd1602.lock = function() {
    locked3 = true;
  };
  ripemd1602.register = function(func) {
    if (locked3) {
      throw new TypeError("ripemd160 is locked");
    }
    __ripemd160 = func;
  };
  Object.freeze(ripemd1602);

  // node_modules/ethers/lib.esm/crypto/pbkdf2.js
  var locked4 = false;
  var _pbkdf2 = function(password, salt, iterations, keylen, algo) {
    return pbkdf2Sync(password, salt, iterations, keylen, algo);
  };
  var __pbkdf2 = _pbkdf2;
  function pbkdf22(_password, _salt, iterations, keylen, algo) {
    const password = getBytes(_password, "password");
    const salt = getBytes(_salt, "salt");
    return hexlify(__pbkdf2(password, salt, iterations, keylen, algo));
  }
  pbkdf22._ = _pbkdf2;
  pbkdf22.lock = function() {
    locked4 = true;
  };
  pbkdf22.register = function(func) {
    if (locked4) {
      throw new Error("pbkdf2 is locked");
    }
    __pbkdf2 = func;
  };
  Object.freeze(pbkdf22);

  // node_modules/ethers/lib.esm/crypto/random.js
  var locked5 = false;
  var _randomBytes = function(length) {
    return new Uint8Array(randomBytes2(length));
  };
  var __randomBytes = _randomBytes;
  function randomBytes3(length) {
    return __randomBytes(length);
  }
  randomBytes3._ = _randomBytes;
  randomBytes3.lock = function() {
    locked5 = true;
  };
  randomBytes3.register = function(func) {
    if (locked5) {
      throw new Error("randomBytes is locked");
    }
    __randomBytes = func;
  };
  Object.freeze(randomBytes3);

  // node_modules/ethers/node_modules/@noble/hashes/esm/scrypt.js
  var rotl2 = (a, b2) => a << b2 | a >>> 32 - b2;
  function XorAndSalsa(prev, pi, input, ii, out, oi) {
    let y00 = prev[pi++] ^ input[ii++], y01 = prev[pi++] ^ input[ii++];
    let y02 = prev[pi++] ^ input[ii++], y03 = prev[pi++] ^ input[ii++];
    let y04 = prev[pi++] ^ input[ii++], y05 = prev[pi++] ^ input[ii++];
    let y06 = prev[pi++] ^ input[ii++], y07 = prev[pi++] ^ input[ii++];
    let y08 = prev[pi++] ^ input[ii++], y09 = prev[pi++] ^ input[ii++];
    let y10 = prev[pi++] ^ input[ii++], y11 = prev[pi++] ^ input[ii++];
    let y12 = prev[pi++] ^ input[ii++], y13 = prev[pi++] ^ input[ii++];
    let y14 = prev[pi++] ^ input[ii++], y15 = prev[pi++] ^ input[ii++];
    let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
    for (let i = 0; i < 8; i += 2) {
      x04 ^= rotl2(x00 + x12 | 0, 7);
      x08 ^= rotl2(x04 + x00 | 0, 9);
      x12 ^= rotl2(x08 + x04 | 0, 13);
      x00 ^= rotl2(x12 + x08 | 0, 18);
      x09 ^= rotl2(x05 + x01 | 0, 7);
      x13 ^= rotl2(x09 + x05 | 0, 9);
      x01 ^= rotl2(x13 + x09 | 0, 13);
      x05 ^= rotl2(x01 + x13 | 0, 18);
      x14 ^= rotl2(x10 + x06 | 0, 7);
      x02 ^= rotl2(x14 + x10 | 0, 9);
      x06 ^= rotl2(x02 + x14 | 0, 13);
      x10 ^= rotl2(x06 + x02 | 0, 18);
      x03 ^= rotl2(x15 + x11 | 0, 7);
      x07 ^= rotl2(x03 + x15 | 0, 9);
      x11 ^= rotl2(x07 + x03 | 0, 13);
      x15 ^= rotl2(x11 + x07 | 0, 18);
      x01 ^= rotl2(x00 + x03 | 0, 7);
      x02 ^= rotl2(x01 + x00 | 0, 9);
      x03 ^= rotl2(x02 + x01 | 0, 13);
      x00 ^= rotl2(x03 + x02 | 0, 18);
      x06 ^= rotl2(x05 + x04 | 0, 7);
      x07 ^= rotl2(x06 + x05 | 0, 9);
      x04 ^= rotl2(x07 + x06 | 0, 13);
      x05 ^= rotl2(x04 + x07 | 0, 18);
      x11 ^= rotl2(x10 + x09 | 0, 7);
      x08 ^= rotl2(x11 + x10 | 0, 9);
      x09 ^= rotl2(x08 + x11 | 0, 13);
      x10 ^= rotl2(x09 + x08 | 0, 18);
      x12 ^= rotl2(x15 + x14 | 0, 7);
      x13 ^= rotl2(x12 + x15 | 0, 9);
      x14 ^= rotl2(x13 + x12 | 0, 13);
      x15 ^= rotl2(x14 + x13 | 0, 18);
    }
    out[oi++] = y00 + x00 | 0;
    out[oi++] = y01 + x01 | 0;
    out[oi++] = y02 + x02 | 0;
    out[oi++] = y03 + x03 | 0;
    out[oi++] = y04 + x04 | 0;
    out[oi++] = y05 + x05 | 0;
    out[oi++] = y06 + x06 | 0;
    out[oi++] = y07 + x07 | 0;
    out[oi++] = y08 + x08 | 0;
    out[oi++] = y09 + x09 | 0;
    out[oi++] = y10 + x10 | 0;
    out[oi++] = y11 + x11 | 0;
    out[oi++] = y12 + x12 | 0;
    out[oi++] = y13 + x13 | 0;
    out[oi++] = y14 + x14 | 0;
    out[oi++] = y15 + x15 | 0;
  }
  function BlockMix(input, ii, out, oi, r) {
    let head = oi + 0;
    let tail = oi + 16 * r;
    for (let i = 0; i < 16; i++)
      out[tail + i] = input[ii + (2 * r - 1) * 16 + i];
    for (let i = 0; i < r; i++, head += 16, ii += 16) {
      XorAndSalsa(out, tail, input, ii, out, head);
      if (i > 0)
        tail += 16;
      XorAndSalsa(out, head, input, ii += 16, out, tail);
    }
  }
  function scryptInit(password, salt, _opts) {
    const opts = checkOpts({
      dkLen: 32,
      asyncTick: 10,
      maxmem: 1024 ** 3 + 1024
    }, _opts);
    const { N: N2, r, p, dkLen, asyncTick, maxmem, onProgress } = opts;
    number(N2);
    number(r);
    number(p);
    number(dkLen);
    number(asyncTick);
    number(maxmem);
    if (onProgress !== void 0 && typeof onProgress !== "function")
      throw new Error("progressCb should be function");
    const blockSize = 128 * r;
    const blockSize32 = blockSize / 4;
    if (N2 <= 1 || (N2 & N2 - 1) !== 0 || N2 >= 2 ** (blockSize / 8) || N2 > 2 ** 32) {
      throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
    }
    if (p < 0 || p > (2 ** 32 - 1) * 32 / blockSize) {
      throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
    }
    if (dkLen < 0 || dkLen > (2 ** 32 - 1) * 32) {
      throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
    }
    const memUsed = blockSize * (N2 + p);
    if (memUsed > maxmem) {
      throw new Error(`Scrypt: parameters too large, ${memUsed} (128 * r * (N + p)) > ${maxmem} (maxmem)`);
    }
    const B = pbkdf2(sha256, password, salt, { c: 1, dkLen: blockSize * p });
    const B32 = u32(B);
    const V = u32(new Uint8Array(blockSize * N2));
    const tmp = u32(new Uint8Array(blockSize));
    let blockMixCb = () => {
    };
    if (onProgress) {
      const totalBlockMix = 2 * N2 * p;
      const callbackPer = Math.max(Math.floor(totalBlockMix / 1e4), 1);
      let blockMixCnt = 0;
      blockMixCb = () => {
        blockMixCnt++;
        if (onProgress && (!(blockMixCnt % callbackPer) || blockMixCnt === totalBlockMix))
          onProgress(blockMixCnt / totalBlockMix);
      };
    }
    return { N: N2, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick };
  }
  function scryptOutput(password, dkLen, B, V, tmp) {
    const res = pbkdf2(sha256, password, B, { c: 1, dkLen });
    B.fill(0);
    V.fill(0);
    tmp.fill(0);
    return res;
  }
  function scrypt(password, salt, opts) {
    const { N: N2, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb } = scryptInit(password, salt, opts);
    for (let pi = 0; pi < p; pi++) {
      const Pi2 = blockSize32 * pi;
      for (let i = 0; i < blockSize32; i++)
        V[i] = B32[Pi2 + i];
      for (let i = 0, pos = 0; i < N2 - 1; i++) {
        BlockMix(V, pos, V, pos += blockSize32, r);
        blockMixCb();
      }
      BlockMix(V, (N2 - 1) * blockSize32, B32, Pi2, r);
      blockMixCb();
      for (let i = 0; i < N2; i++) {
        const j = B32[Pi2 + blockSize32 - 16] % N2;
        for (let k = 0; k < blockSize32; k++)
          tmp[k] = B32[Pi2 + k] ^ V[j * blockSize32 + k];
        BlockMix(tmp, 0, B32, Pi2, r);
        blockMixCb();
      }
    }
    return scryptOutput(password, dkLen, B, V, tmp);
  }
  async function scryptAsync(password, salt, opts) {
    const { N: N2, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick } = scryptInit(password, salt, opts);
    for (let pi = 0; pi < p; pi++) {
      const Pi2 = blockSize32 * pi;
      for (let i = 0; i < blockSize32; i++)
        V[i] = B32[Pi2 + i];
      let pos = 0;
      await asyncLoop(N2 - 1, asyncTick, () => {
        BlockMix(V, pos, V, pos += blockSize32, r);
        blockMixCb();
      });
      BlockMix(V, (N2 - 1) * blockSize32, B32, Pi2, r);
      blockMixCb();
      await asyncLoop(N2, asyncTick, () => {
        const j = B32[Pi2 + blockSize32 - 16] % N2;
        for (let k = 0; k < blockSize32; k++)
          tmp[k] = B32[Pi2 + k] ^ V[j * blockSize32 + k];
        BlockMix(tmp, 0, B32, Pi2, r);
        blockMixCb();
      });
    }
    return scryptOutput(password, dkLen, B, V, tmp);
  }

  // node_modules/ethers/lib.esm/crypto/scrypt.js
  var lockedSync = false;
  var lockedAsync = false;
  var _scryptAsync = async function(passwd, salt, N2, r, p, dkLen, onProgress) {
    return await scryptAsync(passwd, salt, { N: N2, r, p, dkLen, onProgress });
  };
  var _scryptSync = function(passwd, salt, N2, r, p, dkLen) {
    return scrypt(passwd, salt, { N: N2, r, p, dkLen });
  };
  var __scryptAsync = _scryptAsync;
  var __scryptSync = _scryptSync;
  async function scrypt2(_passwd, _salt, N2, r, p, dkLen, progress) {
    const passwd = getBytes(_passwd, "passwd");
    const salt = getBytes(_salt, "salt");
    return hexlify(await __scryptAsync(passwd, salt, N2, r, p, dkLen, progress));
  }
  scrypt2._ = _scryptAsync;
  scrypt2.lock = function() {
    lockedAsync = true;
  };
  scrypt2.register = function(func) {
    if (lockedAsync) {
      throw new Error("scrypt is locked");
    }
    __scryptAsync = func;
  };
  Object.freeze(scrypt2);
  function scryptSync(_passwd, _salt, N2, r, p, dkLen) {
    const passwd = getBytes(_passwd, "passwd");
    const salt = getBytes(_salt, "salt");
    return hexlify(__scryptSync(passwd, salt, N2, r, p, dkLen));
  }
  scryptSync._ = _scryptSync;
  scryptSync.lock = function() {
    lockedSync = true;
  };
  scryptSync.register = function(func) {
    if (lockedSync) {
      throw new Error("scryptSync is locked");
    }
    __scryptSync = func;
  };
  Object.freeze(scryptSync);

  // node_modules/ethers/lib.esm/crypto/sha2.js
  var _sha256 = function(data) {
    return createHash("sha256").update(data).digest();
  };
  var _sha512 = function(data) {
    return createHash("sha512").update(data).digest();
  };
  var __sha256 = _sha256;
  var __sha512 = _sha512;
  var locked256 = false;
  var locked512 = false;
  function sha2562(_data) {
    const data = getBytes(_data, "data");
    return hexlify(__sha256(data));
  }
  sha2562._ = _sha256;
  sha2562.lock = function() {
    locked256 = true;
  };
  sha2562.register = function(func) {
    if (locked256) {
      throw new Error("sha256 is locked");
    }
    __sha256 = func;
  };
  Object.freeze(sha2562);
  function sha5122(_data) {
    const data = getBytes(_data, "data");
    return hexlify(__sha512(data));
  }
  sha5122._ = _sha512;
  sha5122.lock = function() {
    locked512 = true;
  };
  sha5122.register = function(func) {
    if (locked512) {
      throw new Error("sha512 is locked");
    }
    __sha512 = func;
  };
  Object.freeze(sha2562);

  // node_modules/ethers/node_modules/@noble/curves/esm/abstract/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    bitGet: () => bitGet,
    bitLen: () => bitLen,
    bitMask: () => bitMask,
    bitSet: () => bitSet,
    bytesToHex: () => bytesToHex,
    bytesToNumberBE: () => bytesToNumberBE,
    bytesToNumberLE: () => bytesToNumberLE,
    concatBytes: () => concatBytes2,
    createHmacDrbg: () => createHmacDrbg,
    ensureBytes: () => ensureBytes,
    equalBytes: () => equalBytes,
    hexToBytes: () => hexToBytes,
    hexToNumber: () => hexToNumber,
    numberToBytesBE: () => numberToBytesBE,
    numberToBytesLE: () => numberToBytesLE,
    numberToHexUnpadded: () => numberToHexUnpadded,
    numberToVarBytesBE: () => numberToVarBytesBE,
    utf8ToBytes: () => utf8ToBytes2,
    validateObject: () => validateObject
  });
  var _0n2 = BigInt(0);
  var _1n2 = BigInt(1);
  var _2n2 = BigInt(2);
  var u8a2 = (a) => a instanceof Uint8Array;
  var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex(bytes2) {
    if (!u8a2(bytes2))
      throw new Error("Uint8Array expected");
    let hex = "";
    for (let i = 0; i < bytes2.length; i++) {
      hex += hexes[bytes2[i]];
    }
    return hex;
  }
  function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
  }
  function hexToNumber(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    return BigInt(hex === "" ? "0" : `0x${hex}`);
  }
  function hexToBytes(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    const len = hex.length;
    if (len % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + len);
    const array = new Uint8Array(len / 2);
    for (let i = 0; i < array.length; i++) {
      const j = i * 2;
      const hexByte = hex.slice(j, j + 2);
      const byte = Number.parseInt(hexByte, 16);
      if (Number.isNaN(byte) || byte < 0)
        throw new Error("Invalid byte sequence");
      array[i] = byte;
    }
    return array;
  }
  function bytesToNumberBE(bytes2) {
    return hexToNumber(bytesToHex(bytes2));
  }
  function bytesToNumberLE(bytes2) {
    if (!u8a2(bytes2))
      throw new Error("Uint8Array expected");
    return hexToNumber(bytesToHex(Uint8Array.from(bytes2).reverse()));
  }
  function numberToBytesBE(n2, len) {
    return hexToBytes(n2.toString(16).padStart(len * 2, "0"));
  }
  function numberToBytesLE(n2, len) {
    return numberToBytesBE(n2, len).reverse();
  }
  function numberToVarBytesBE(n2) {
    return hexToBytes(numberToHexUnpadded(n2));
  }
  function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === "string") {
      try {
        res = hexToBytes(hex);
      } catch (e) {
        throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
      }
    } else if (u8a2(hex)) {
      res = Uint8Array.from(hex);
    } else {
      throw new Error(`${title} must be hex string or Uint8Array`);
    }
    const len = res.length;
    if (typeof expectedLength === "number" && len !== expectedLength)
      throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
  }
  function concatBytes2(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
    let pad = 0;
    arrays.forEach((a) => {
      if (!u8a2(a))
        throw new Error("Uint8Array expected");
      r.set(a, pad);
      pad += a.length;
    });
    return r;
  }
  function equalBytes(b1, b2) {
    if (b1.length !== b2.length)
      return false;
    for (let i = 0; i < b1.length; i++)
      if (b1[i] !== b2[i])
        return false;
    return true;
  }
  function utf8ToBytes2(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function bitLen(n2) {
    let len;
    for (len = 0; n2 > _0n2; n2 >>= _1n2, len += 1)
      ;
    return len;
  }
  function bitGet(n2, pos) {
    return n2 >> BigInt(pos) & _1n2;
  }
  var bitSet = (n2, pos, value) => {
    return n2 | (value ? _1n2 : _0n2) << BigInt(pos);
  };
  var bitMask = (n2) => (_2n2 << BigInt(n2 - 1)) - _1n2;
  var u8n = (data) => new Uint8Array(data);
  var u8fr = (arr) => Uint8Array.from(arr);
  function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== "number" || hashLen < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    if (typeof hmacFn !== "function")
      throw new Error("hmacFn must be a function");
    let v = u8n(hashLen);
    let k = u8n(hashLen);
    let i = 0;
    const reset = () => {
      v.fill(1);
      k.fill(0);
      i = 0;
    };
    const h = (...b2) => hmacFn(k, v, ...b2);
    const reseed = (seed = u8n()) => {
      k = h(u8fr([0]), seed);
      v = h();
      if (seed.length === 0)
        return;
      k = h(u8fr([1]), seed);
      v = h();
    };
    const gen2 = () => {
      if (i++ >= 1e3)
        throw new Error("drbg: tried 1000 values");
      let len = 0;
      const out = [];
      while (len < qByteLen) {
        v = h();
        const sl = v.slice();
        out.push(sl);
        len += v.length;
      }
      return concatBytes2(...out);
    };
    const genUntil = (seed, pred) => {
      reset();
      reseed(seed);
      let res = void 0;
      while (!(res = pred(gen2())))
        reseed();
      reset();
      return res;
    };
    return genUntil;
  }
  var validatorFns = {
    bigint: (val) => typeof val === "bigint",
    function: (val) => typeof val === "function",
    boolean: (val) => typeof val === "boolean",
    string: (val) => typeof val === "string",
    stringOrUint8Array: (val) => typeof val === "string" || val instanceof Uint8Array,
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
  };
  function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
      const checkVal = validatorFns[type];
      if (typeof checkVal !== "function")
        throw new Error(`Invalid validator "${type}", expected function`);
      const val = object[fieldName];
      if (isOptional && val === void 0)
        return;
      if (!checkVal(val, object)) {
        throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
      }
    };
    for (const [fieldName, type] of Object.entries(validators))
      checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
      checkField(fieldName, type, true);
    return object;
  }

  // node_modules/ethers/node_modules/@noble/curves/esm/abstract/modular.js
  var _0n3 = BigInt(0);
  var _1n3 = BigInt(1);
  var _2n3 = BigInt(2);
  var _3n = BigInt(3);
  var _4n = BigInt(4);
  var _5n = BigInt(5);
  var _8n = BigInt(8);
  var _9n = BigInt(9);
  var _16n = BigInt(16);
  function mod(a, b2) {
    const result = a % b2;
    return result >= _0n3 ? result : b2 + result;
  }
  function pow(num, power, modulo) {
    if (modulo <= _0n3 || power < _0n3)
      throw new Error("Expected power/modulo > 0");
    if (modulo === _1n3)
      return _0n3;
    let res = _1n3;
    while (power > _0n3) {
      if (power & _1n3)
        res = res * num % modulo;
      num = num * num % modulo;
      power >>= _1n3;
    }
    return res;
  }
  function pow2(x, power, modulo) {
    let res = x;
    while (power-- > _0n3) {
      res *= res;
      res %= modulo;
    }
    return res;
  }
  function invert(number2, modulo) {
    if (number2 === _0n3 || modulo <= _0n3) {
      throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
    }
    let a = mod(number2, modulo);
    let b2 = modulo;
    let x = _0n3, y = _1n3, u = _1n3, v = _0n3;
    while (a !== _0n3) {
      const q = b2 / a;
      const r = b2 % a;
      const m = x - u * q;
      const n2 = y - v * q;
      b2 = a, a = r, x = u, y = v, u = m, v = n2;
    }
    const gcd = b2;
    if (gcd !== _1n3)
      throw new Error("invert: does not exist");
    return mod(x, modulo);
  }
  function tonelliShanks(P) {
    const legendreC = (P - _1n3) / _2n3;
    let Q, S2, Z;
    for (Q = P - _1n3, S2 = 0; Q % _2n3 === _0n3; Q /= _2n3, S2++)
      ;
    for (Z = _2n3; Z < P && pow(Z, legendreC, P) !== P - _1n3; Z++)
      ;
    if (S2 === 1) {
      const p1div4 = (P + _1n3) / _4n;
      return function tonelliFast(Fp2, n2) {
        const root = Fp2.pow(n2, p1div4);
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    const Q1div2 = (Q + _1n3) / _2n3;
    return function tonelliSlow(Fp2, n2) {
      if (Fp2.pow(n2, legendreC) === Fp2.neg(Fp2.ONE))
        throw new Error("Cannot find square root");
      let r = S2;
      let g = Fp2.pow(Fp2.mul(Fp2.ONE, Z), Q);
      let x = Fp2.pow(n2, Q1div2);
      let b2 = Fp2.pow(n2, Q);
      while (!Fp2.eql(b2, Fp2.ONE)) {
        if (Fp2.eql(b2, Fp2.ZERO))
          return Fp2.ZERO;
        let m = 1;
        for (let t2 = Fp2.sqr(b2); m < r; m++) {
          if (Fp2.eql(t2, Fp2.ONE))
            break;
          t2 = Fp2.sqr(t2);
        }
        const ge = Fp2.pow(g, _1n3 << BigInt(r - m - 1));
        g = Fp2.sqr(ge);
        x = Fp2.mul(x, ge);
        b2 = Fp2.mul(b2, g);
        r = m;
      }
      return x;
    };
  }
  function FpSqrt(P) {
    if (P % _4n === _3n) {
      const p1div4 = (P + _1n3) / _4n;
      return function sqrt3mod42(Fp2, n2) {
        const root = Fp2.pow(n2, p1div4);
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    if (P % _8n === _5n) {
      const c1 = (P - _5n) / _8n;
      return function sqrt5mod82(Fp2, n2) {
        const n22 = Fp2.mul(n2, _2n3);
        const v = Fp2.pow(n22, c1);
        const nv = Fp2.mul(n2, v);
        const i = Fp2.mul(Fp2.mul(nv, _2n3), v);
        const root = Fp2.mul(nv, Fp2.sub(i, Fp2.ONE));
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    if (P % _16n === _9n) {
    }
    return tonelliShanks(P);
  }
  var FIELD_FIELDS = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function validateField(field) {
    const initial = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
      map[val] = "function";
      return map;
    }, initial);
    return validateObject(field, opts);
  }
  function FpPow(f2, num, power) {
    if (power < _0n3)
      throw new Error("Expected power > 0");
    if (power === _0n3)
      return f2.ONE;
    if (power === _1n3)
      return num;
    let p = f2.ONE;
    let d = num;
    while (power > _0n3) {
      if (power & _1n3)
        p = f2.mul(p, d);
      d = f2.sqr(d);
      power >>= _1n3;
    }
    return p;
  }
  function FpInvertBatch(f2, nums) {
    const tmp = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i) => {
      if (f2.is0(num))
        return acc;
      tmp[i] = acc;
      return f2.mul(acc, num);
    }, f2.ONE);
    const inverted = f2.inv(lastMultiplied);
    nums.reduceRight((acc, num, i) => {
      if (f2.is0(num))
        return acc;
      tmp[i] = f2.mul(acc, tmp[i]);
      return f2.mul(acc, num);
    }, inverted);
    return tmp;
  }
  function nLength(n2, nBitLength) {
    const _nBitLength = nBitLength !== void 0 ? nBitLength : n2.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
  }
  function Field(ORDER, bitLen4, isLE4 = false, redef = {}) {
    if (ORDER <= _0n3)
      throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen4);
    if (BYTES > 2048)
      throw new Error("Field lengths over 2048 bytes are not supported");
    const sqrtP = FpSqrt(ORDER);
    const f2 = Object.freeze({
      ORDER,
      BITS,
      BYTES,
      MASK: bitMask(BITS),
      ZERO: _0n3,
      ONE: _1n3,
      create: (num) => mod(num, ORDER),
      isValid: (num) => {
        if (typeof num !== "bigint")
          throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
        return _0n3 <= num && num < ORDER;
      },
      is0: (num) => num === _0n3,
      isOdd: (num) => (num & _1n3) === _1n3,
      neg: (num) => mod(-num, ORDER),
      eql: (lhs, rhs) => lhs === rhs,
      sqr: (num) => mod(num * num, ORDER),
      add: (lhs, rhs) => mod(lhs + rhs, ORDER),
      sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
      mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
      pow: (num, power) => FpPow(f2, num, power),
      div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
      // Same as above, but doesn't normalize
      sqrN: (num) => num * num,
      addN: (lhs, rhs) => lhs + rhs,
      subN: (lhs, rhs) => lhs - rhs,
      mulN: (lhs, rhs) => lhs * rhs,
      inv: (num) => invert(num, ORDER),
      sqrt: redef.sqrt || ((n2) => sqrtP(f2, n2)),
      invertBatch: (lst) => FpInvertBatch(f2, lst),
      // TODO: do we really need constant cmov?
      // We don't have const-time bigints anyway, so probably will be not very useful
      cmov: (a, b2, c) => c ? b2 : a,
      toBytes: (num) => isLE4 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
      fromBytes: (bytes2) => {
        if (bytes2.length !== BYTES)
          throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes2.length}`);
        return isLE4 ? bytesToNumberLE(bytes2) : bytesToNumberBE(bytes2);
      }
    });
    return Object.freeze(f2);
  }
  function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== "bigint")
      throw new Error("field order must be bigint");
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
  }
  function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
  }
  function mapHashToField(key, fieldOrder, isLE4 = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    if (len < 16 || len < minLen || len > 1024)
      throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
    const num = isLE4 ? bytesToNumberBE(key) : bytesToNumberLE(key);
    const reduced = mod(num, fieldOrder - _1n3) + _1n3;
    return isLE4 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
  }

  // node_modules/ethers/node_modules/@noble/curves/esm/abstract/curve.js
  var _0n4 = BigInt(0);
  var _1n4 = BigInt(1);
  function wNAF(c, bits) {
    const constTimeNegate2 = (condition, item) => {
      const neg = item.negate();
      return condition ? neg : item;
    };
    const opts = (W) => {
      const windows = Math.ceil(bits / W) + 1;
      const windowSize = 2 ** (W - 1);
      return { windows, windowSize };
    };
    return {
      constTimeNegate: constTimeNegate2,
      // non-const time multiplication ladder
      unsafeLadder(elm, n2) {
        let p = c.ZERO;
        let d = elm;
        while (n2 > _0n4) {
          if (n2 & _1n4)
            p = p.add(d);
          d = d.double();
          n2 >>= _1n4;
        }
        return p;
      },
      /**
       * Creates a wNAF precomputation window. Used for caching.
       * Default window size is set by `utils.precompute()` and is equal to 8.
       * Number of precomputed points depends on the curve size:
       * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
       * - 𝑊 is the window size
       * - 𝑛 is the bitlength of the curve order.
       * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
       * @returns precomputed point tables flattened to a single array
       */
      precomputeWindow(elm, W) {
        const { windows, windowSize } = opts(W);
        const points = [];
        let p = elm;
        let base = p;
        for (let window2 = 0; window2 < windows; window2++) {
          base = p;
          points.push(base);
          for (let i = 1; i < windowSize; i++) {
            base = base.add(p);
            points.push(base);
          }
          p = base.double();
        }
        return points;
      },
      /**
       * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @returns real and fake (for const-time) points
       */
      wNAF(W, precomputes, n2) {
        const { windows, windowSize } = opts(W);
        let p = c.ZERO;
        let f2 = c.BASE;
        const mask2 = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for (let window2 = 0; window2 < windows; window2++) {
          const offset = window2 * windowSize;
          let wbits = Number(n2 & mask2);
          n2 >>= shiftBy;
          if (wbits > windowSize) {
            wbits -= maxNumber;
            n2 += _1n4;
          }
          const offset1 = offset;
          const offset2 = offset + Math.abs(wbits) - 1;
          const cond1 = window2 % 2 !== 0;
          const cond2 = wbits < 0;
          if (wbits === 0) {
            f2 = f2.add(constTimeNegate2(cond1, precomputes[offset1]));
          } else {
            p = p.add(constTimeNegate2(cond2, precomputes[offset2]));
          }
        }
        return { p, f: f2 };
      },
      wNAFCached(P, precomputesMap, n2, transform) {
        const W = P._WINDOW_SIZE || 1;
        let comp = precomputesMap.get(P);
        if (!comp) {
          comp = this.precomputeWindow(P, W);
          if (W !== 1) {
            precomputesMap.set(P, transform(comp));
          }
        }
        return this.wNAF(W, comp, n2);
      }
    };
  }
  function validateBasic(curve) {
    validateField(curve.Fp);
    validateObject(curve, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    });
    return Object.freeze({
      ...nLength(curve.n, curve.nBitLength),
      ...curve,
      ...{ p: curve.Fp.ORDER }
    });
  }

  // node_modules/ethers/node_modules/@noble/curves/esm/abstract/weierstrass.js
  function validatePointOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      a: "field",
      b: "field"
    }, {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function"
    });
    const { endo, Fp: Fp2, a } = opts;
    if (endo) {
      if (!Fp2.eql(a, Fp2.ZERO)) {
        throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
      }
      if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
        throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
      }
    }
    return Object.freeze({ ...opts });
  }
  var { bytesToNumberBE: b2n, hexToBytes: h2b } = utils_exports;
  var DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
      constructor(m = "") {
        super(m);
      }
    },
    _parseInt(data) {
      const { Err: E } = DER;
      if (data.length < 2 || data[0] !== 2)
        throw new E("Invalid signature integer tag");
      const len = data[1];
      const res = data.subarray(2, len + 2);
      if (!len || res.length !== len)
        throw new E("Invalid signature integer: wrong length");
      if (res[0] & 128)
        throw new E("Invalid signature integer: negative");
      if (res[0] === 0 && !(res[1] & 128))
        throw new E("Invalid signature integer: unnecessary leading zero");
      return { d: b2n(res), l: data.subarray(len + 2) };
    },
    toSig(hex) {
      const { Err: E } = DER;
      const data = typeof hex === "string" ? h2b(hex) : hex;
      if (!(data instanceof Uint8Array))
        throw new Error("ui8a expected");
      let l = data.length;
      if (l < 2 || data[0] != 48)
        throw new E("Invalid signature tag");
      if (data[1] !== l - 2)
        throw new E("Invalid signature: incorrect length");
      const { d: r, l: sBytes } = DER._parseInt(data.subarray(2));
      const { d: s, l: rBytesLeft } = DER._parseInt(sBytes);
      if (rBytesLeft.length)
        throw new E("Invalid signature: left bytes after parsing");
      return { r, s };
    },
    hexFromSig(sig) {
      const slice = (s2) => Number.parseInt(s2[0], 16) & 8 ? "00" + s2 : s2;
      const h = (num) => {
        const hex = num.toString(16);
        return hex.length & 1 ? `0${hex}` : hex;
      };
      const s = slice(h(sig.s));
      const r = slice(h(sig.r));
      const shl = s.length / 2;
      const rhl = r.length / 2;
      const sl = h(shl);
      const rl = h(rhl);
      return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
    }
  };
  var _0n5 = BigInt(0);
  var _1n5 = BigInt(1);
  var _2n4 = BigInt(2);
  var _3n2 = BigInt(3);
  var _4n2 = BigInt(4);
  function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp: Fp2 } = CURVE;
    const toBytes5 = CURVE.toBytes || ((_c, point, _isCompressed) => {
      const a = point.toAffine();
      return concatBytes2(Uint8Array.from([4]), Fp2.toBytes(a.x), Fp2.toBytes(a.y));
    });
    const fromBytes = CURVE.fromBytes || ((bytes2) => {
      const tail = bytes2.subarray(1);
      const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
      const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
      return { x, y };
    });
    function weierstrassEquation(x) {
      const { a, b: b2 } = CURVE;
      const x2 = Fp2.sqr(x);
      const x3 = Fp2.mul(x2, x);
      return Fp2.add(Fp2.add(x3, Fp2.mul(x, a)), b2);
    }
    if (!Fp2.eql(Fp2.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
      throw new Error("bad generator point: equation left != right");
    function isWithinCurveOrder(num) {
      return typeof num === "bigint" && _0n5 < num && num < CURVE.n;
    }
    function assertGE(num) {
      if (!isWithinCurveOrder(num))
        throw new Error("Expected valid bigint: 0 < bigint < curve.n");
    }
    function normPrivateKeyToScalar(key) {
      const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: n2 } = CURVE;
      if (lengths && typeof key !== "bigint") {
        if (key instanceof Uint8Array)
          key = bytesToHex(key);
        if (typeof key !== "string" || !lengths.includes(key.length))
          throw new Error("Invalid key");
        key = key.padStart(nByteLength * 2, "0");
      }
      let num;
      try {
        num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
      } catch (error) {
        throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
      }
      if (wrapPrivateKey)
        num = mod(num, n2);
      assertGE(num);
      return num;
    }
    const pointPrecomputes3 = /* @__PURE__ */ new Map();
    function assertPrjPoint(other) {
      if (!(other instanceof Point3))
        throw new Error("ProjectivePoint expected");
    }
    class Point3 {
      constructor(px, py, pz) {
        this.px = px;
        this.py = py;
        this.pz = pz;
        if (px == null || !Fp2.isValid(px))
          throw new Error("x required");
        if (py == null || !Fp2.isValid(py))
          throw new Error("y required");
        if (pz == null || !Fp2.isValid(pz))
          throw new Error("z required");
      }
      // Does not validate if the point is on-curve.
      // Use fromHex instead, or call assertValidity() later.
      static fromAffine(p) {
        const { x, y } = p || {};
        if (!p || !Fp2.isValid(x) || !Fp2.isValid(y))
          throw new Error("invalid affine point");
        if (p instanceof Point3)
          throw new Error("projective point not allowed");
        const is0 = (i) => Fp2.eql(i, Fp2.ZERO);
        if (is0(x) && is0(y))
          return Point3.ZERO;
        return new Point3(x, y, Fp2.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      /**
       * Takes a bunch of Projective Points but executes only one
       * inversion on all of them. Inversion is very slow operation,
       * so this improves performance massively.
       * Optimization: converts a list of projective points to a list of identical points with Z=1.
       */
      static normalizeZ(points) {
        const toInv = Fp2.invertBatch(points.map((p) => p.pz));
        return points.map((p, i) => p.toAffine(toInv[i])).map(Point3.fromAffine);
      }
      /**
       * Converts hash string or Uint8Array to Point.
       * @param hex short/long ECDSA hex
       */
      static fromHex(hex) {
        const P = Point3.fromAffine(fromBytes(ensureBytes("pointHex", hex)));
        P.assertValidity();
        return P;
      }
      // Multiplies generator point by privateKey.
      static fromPrivateKey(privateKey) {
        return Point3.BASE.multiply(normPrivateKeyToScalar(privateKey));
      }
      // "Private method", don't use it directly
      _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes3.delete(this);
      }
      // A point on curve is valid if it conforms to equation.
      assertValidity() {
        if (this.is0()) {
          if (CURVE.allowInfinityPoint && !Fp2.is0(this.py))
            return;
          throw new Error("bad point: ZERO");
        }
        const { x, y } = this.toAffine();
        if (!Fp2.isValid(x) || !Fp2.isValid(y))
          throw new Error("bad point: x or y not FE");
        const left = Fp2.sqr(y);
        const right = weierstrassEquation(x);
        if (!Fp2.eql(left, right))
          throw new Error("bad point: equation left != right");
        if (!this.isTorsionFree())
          throw new Error("bad point: not in prime-order subgroup");
      }
      hasEvenY() {
        const { y } = this.toAffine();
        if (Fp2.isOdd)
          return !Fp2.isOdd(y);
        throw new Error("Field doesn't support isOdd");
      }
      /**
       * Compare one point to another.
       */
      equals(other) {
        assertPrjPoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        const U12 = Fp2.eql(Fp2.mul(X1, Z2), Fp2.mul(X2, Z1));
        const U22 = Fp2.eql(Fp2.mul(Y1, Z2), Fp2.mul(Y2, Z1));
        return U12 && U22;
      }
      /**
       * Flips point to one corresponding to (x, -y) in Affine coordinates.
       */
      negate() {
        return new Point3(this.px, Fp2.neg(this.py), this.pz);
      }
      // Renes-Costello-Batina exception-free doubling formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 3
      // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
      double() {
        const { a, b: b2 } = CURVE;
        const b3 = Fp2.mul(b2, _3n2);
        const { px: X1, py: Y1, pz: Z1 } = this;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        let t0 = Fp2.mul(X1, X1);
        let t1 = Fp2.mul(Y1, Y1);
        let t2 = Fp2.mul(Z1, Z1);
        let t3 = Fp2.mul(X1, Y1);
        t3 = Fp2.add(t3, t3);
        Z3 = Fp2.mul(X1, Z1);
        Z3 = Fp2.add(Z3, Z3);
        X3 = Fp2.mul(a, Z3);
        Y3 = Fp2.mul(b3, t2);
        Y3 = Fp2.add(X3, Y3);
        X3 = Fp2.sub(t1, Y3);
        Y3 = Fp2.add(t1, Y3);
        Y3 = Fp2.mul(X3, Y3);
        X3 = Fp2.mul(t3, X3);
        Z3 = Fp2.mul(b3, Z3);
        t2 = Fp2.mul(a, t2);
        t3 = Fp2.sub(t0, t2);
        t3 = Fp2.mul(a, t3);
        t3 = Fp2.add(t3, Z3);
        Z3 = Fp2.add(t0, t0);
        t0 = Fp2.add(Z3, t0);
        t0 = Fp2.add(t0, t2);
        t0 = Fp2.mul(t0, t3);
        Y3 = Fp2.add(Y3, t0);
        t2 = Fp2.mul(Y1, Z1);
        t2 = Fp2.add(t2, t2);
        t0 = Fp2.mul(t2, t3);
        X3 = Fp2.sub(X3, t0);
        Z3 = Fp2.mul(t2, t1);
        Z3 = Fp2.add(Z3, Z3);
        Z3 = Fp2.add(Z3, Z3);
        return new Point3(X3, Y3, Z3);
      }
      // Renes-Costello-Batina exception-free addition formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 1
      // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
      add(other) {
        assertPrjPoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        const a = CURVE.a;
        const b3 = Fp2.mul(CURVE.b, _3n2);
        let t0 = Fp2.mul(X1, X2);
        let t1 = Fp2.mul(Y1, Y2);
        let t2 = Fp2.mul(Z1, Z2);
        let t3 = Fp2.add(X1, Y1);
        let t4 = Fp2.add(X2, Y2);
        t3 = Fp2.mul(t3, t4);
        t4 = Fp2.add(t0, t1);
        t3 = Fp2.sub(t3, t4);
        t4 = Fp2.add(X1, Z1);
        let t5 = Fp2.add(X2, Z2);
        t4 = Fp2.mul(t4, t5);
        t5 = Fp2.add(t0, t2);
        t4 = Fp2.sub(t4, t5);
        t5 = Fp2.add(Y1, Z1);
        X3 = Fp2.add(Y2, Z2);
        t5 = Fp2.mul(t5, X3);
        X3 = Fp2.add(t1, t2);
        t5 = Fp2.sub(t5, X3);
        Z3 = Fp2.mul(a, t4);
        X3 = Fp2.mul(b3, t2);
        Z3 = Fp2.add(X3, Z3);
        X3 = Fp2.sub(t1, Z3);
        Z3 = Fp2.add(t1, Z3);
        Y3 = Fp2.mul(X3, Z3);
        t1 = Fp2.add(t0, t0);
        t1 = Fp2.add(t1, t0);
        t2 = Fp2.mul(a, t2);
        t4 = Fp2.mul(b3, t4);
        t1 = Fp2.add(t1, t2);
        t2 = Fp2.sub(t0, t2);
        t2 = Fp2.mul(a, t2);
        t4 = Fp2.add(t4, t2);
        t0 = Fp2.mul(t1, t4);
        Y3 = Fp2.add(Y3, t0);
        t0 = Fp2.mul(t5, t4);
        X3 = Fp2.mul(t3, X3);
        X3 = Fp2.sub(X3, t0);
        t0 = Fp2.mul(t3, t1);
        Z3 = Fp2.mul(t5, Z3);
        Z3 = Fp2.add(Z3, t0);
        return new Point3(X3, Y3, Z3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      is0() {
        return this.equals(Point3.ZERO);
      }
      wNAF(n2) {
        return wnaf.wNAFCached(this, pointPrecomputes3, n2, (comp) => {
          const toInv = Fp2.invertBatch(comp.map((p) => p.pz));
          return comp.map((p, i) => p.toAffine(toInv[i])).map(Point3.fromAffine);
        });
      }
      /**
       * Non-constant-time multiplication. Uses double-and-add algorithm.
       * It's faster, but should only be used when you don't care about
       * an exposed private key e.g. sig verification, which works over *public* keys.
       */
      multiplyUnsafe(n2) {
        const I = Point3.ZERO;
        if (n2 === _0n5)
          return I;
        assertGE(n2);
        if (n2 === _1n5)
          return this;
        const { endo } = CURVE;
        if (!endo)
          return wnaf.unsafeLadder(this, n2);
        let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n2);
        let k1p = I;
        let k2p = I;
        let d = this;
        while (k1 > _0n5 || k2 > _0n5) {
          if (k1 & _1n5)
            k1p = k1p.add(d);
          if (k2 & _1n5)
            k2p = k2p.add(d);
          d = d.double();
          k1 >>= _1n5;
          k2 >>= _1n5;
        }
        if (k1neg)
          k1p = k1p.negate();
        if (k2neg)
          k2p = k2p.negate();
        k2p = new Point3(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        return k1p.add(k2p);
      }
      /**
       * Constant time multiplication.
       * Uses wNAF method. Windowed method may be 10% faster,
       * but takes 2x longer to generate and consumes 2x memory.
       * Uses precomputes when available.
       * Uses endomorphism for Koblitz curves.
       * @param scalar by which the point would be multiplied
       * @returns New point
       */
      multiply(scalar) {
        assertGE(scalar);
        let n2 = scalar;
        let point, fake;
        const { endo } = CURVE;
        if (endo) {
          const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n2);
          let { p: k1p, f: f1p } = this.wNAF(k1);
          let { p: k2p, f: f2p } = this.wNAF(k2);
          k1p = wnaf.constTimeNegate(k1neg, k1p);
          k2p = wnaf.constTimeNegate(k2neg, k2p);
          k2p = new Point3(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
          point = k1p.add(k2p);
          fake = f1p.add(f2p);
        } else {
          const { p, f: f2 } = this.wNAF(n2);
          point = p;
          fake = f2;
        }
        return Point3.normalizeZ([point, fake])[0];
      }
      /**
       * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
       * Not using Strauss-Shamir trick: precomputation tables are faster.
       * The trick could be useful if both P and Q are not G (not in our case).
       * @returns non-zero affine point
       */
      multiplyAndAddUnsafe(Q, a, b2) {
        const G = Point3.BASE;
        const mul3 = (P, a2) => a2 === _0n5 || a2 === _1n5 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
        const sum = mul3(this, a).add(mul3(Q, b2));
        return sum.is0() ? void 0 : sum;
      }
      // Converts Projective point to affine (x, y) coordinates.
      // Can accept precomputed Z^-1 - for example, from invertBatch.
      // (x, y, z) ∋ (x=x/z, y=y/z)
      toAffine(iz) {
        const { px: x, py: y, pz: z } = this;
        const is0 = this.is0();
        if (iz == null)
          iz = is0 ? Fp2.ONE : Fp2.inv(z);
        const ax = Fp2.mul(x, iz);
        const ay = Fp2.mul(y, iz);
        const zz = Fp2.mul(z, iz);
        if (is0)
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        if (!Fp2.eql(zz, Fp2.ONE))
          throw new Error("invZ was invalid");
        return { x: ax, y: ay };
      }
      isTorsionFree() {
        const { h: cofactor, isTorsionFree } = CURVE;
        if (cofactor === _1n5)
          return true;
        if (isTorsionFree)
          return isTorsionFree(Point3, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: cofactor, clearCofactor } = CURVE;
        if (cofactor === _1n5)
          return this;
        if (clearCofactor)
          return clearCofactor(Point3, this);
        return this.multiplyUnsafe(CURVE.h);
      }
      toRawBytes(isCompressed = true) {
        this.assertValidity();
        return toBytes5(Point3, this, isCompressed);
      }
      toHex(isCompressed = true) {
        return bytesToHex(this.toRawBytes(isCompressed));
      }
    }
    Point3.BASE = new Point3(CURVE.Gx, CURVE.Gy, Fp2.ONE);
    Point3.ZERO = new Point3(Fp2.ZERO, Fp2.ONE, Fp2.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = wNAF(Point3, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    return {
      CURVE,
      ProjectivePoint: Point3,
      normPrivateKeyToScalar,
      weierstrassEquation,
      isWithinCurveOrder
    };
  }
  function validateOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    });
    return Object.freeze({ lowS: true, ...opts });
  }
  function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp: Fp2, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp2.BYTES + 1;
    const uncompressedLen = 2 * Fp2.BYTES + 1;
    function isValidFieldElement(num) {
      return _0n5 < num && num < Fp2.ORDER;
    }
    function modN(a) {
      return mod(a, CURVE_ORDER);
    }
    function invN(a) {
      return invert(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point3, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
      ...CURVE,
      toBytes(_c, point, isCompressed) {
        const a = point.toAffine();
        const x = Fp2.toBytes(a.x);
        const cat = concatBytes2;
        if (isCompressed) {
          return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
        } else {
          return cat(Uint8Array.from([4]), x, Fp2.toBytes(a.y));
        }
      },
      fromBytes(bytes2) {
        const len = bytes2.length;
        const head = bytes2[0];
        const tail = bytes2.subarray(1);
        if (len === compressedLen && (head === 2 || head === 3)) {
          const x = bytesToNumberBE(tail);
          if (!isValidFieldElement(x))
            throw new Error("Point is not on curve");
          const y2 = weierstrassEquation(x);
          let y = Fp2.sqrt(y2);
          const isYOdd = (y & _1n5) === _1n5;
          const isHeadOdd = (head & 1) === 1;
          if (isHeadOdd !== isYOdd)
            y = Fp2.neg(y);
          return { x, y };
        } else if (len === uncompressedLen && head === 4) {
          const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
          const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
          return { x, y };
        } else {
          throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
        }
      }
    });
    const numToNByteStr = (num) => bytesToHex(numberToBytesBE(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number2) {
      const HALF = CURVE_ORDER >> _1n5;
      return number2 > HALF;
    }
    function normalizeS(s) {
      return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    const slcNum = (b2, from, to) => bytesToNumberBE(b2.slice(from, to));
    class Signature2 {
      constructor(r, s, recovery) {
        this.r = r;
        this.s = s;
        this.recovery = recovery;
        this.assertValidity();
      }
      // pair (bytes of r, bytes of s)
      static fromCompact(hex) {
        const l = CURVE.nByteLength;
        hex = ensureBytes("compactSignature", hex, l * 2);
        return new Signature2(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
      }
      // DER encoded ECDSA signature
      // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
      static fromDER(hex) {
        const { r, s } = DER.toSig(ensureBytes("DER", hex));
        return new Signature2(r, s);
      }
      assertValidity() {
        if (!isWithinCurveOrder(this.r))
          throw new Error("r must be 0 < r < CURVE.n");
        if (!isWithinCurveOrder(this.s))
          throw new Error("s must be 0 < s < CURVE.n");
      }
      addRecoveryBit(recovery) {
        return new Signature2(this.r, this.s, recovery);
      }
      recoverPublicKey(msgHash) {
        const { r, s, recovery: rec } = this;
        const h = bits2int_modN(ensureBytes("msgHash", msgHash));
        if (rec == null || ![0, 1, 2, 3].includes(rec))
          throw new Error("recovery id invalid");
        const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
        if (radj >= Fp2.ORDER)
          throw new Error("recovery id 2 or 3 invalid");
        const prefix = (rec & 1) === 0 ? "02" : "03";
        const R = Point3.fromHex(prefix + numToNByteStr(radj));
        const ir = invN(radj);
        const u1 = modN(-h * ir);
        const u2 = modN(s * ir);
        const Q = Point3.BASE.multiplyAndAddUnsafe(R, u1, u2);
        if (!Q)
          throw new Error("point at infinify");
        Q.assertValidity();
        return Q;
      }
      // Signatures should be low-s, to prevent malleability.
      hasHighS() {
        return isBiggerThanHalfOrder(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new Signature2(this.r, modN(-this.s), this.recovery) : this;
      }
      // DER-encoded
      toDERRawBytes() {
        return hexToBytes(this.toDERHex());
      }
      toDERHex() {
        return DER.hexFromSig({ r: this.r, s: this.s });
      }
      // padded bytes of r, then padded bytes of s
      toCompactRawBytes() {
        return hexToBytes(this.toCompactHex());
      }
      toCompactHex() {
        return numToNByteStr(this.r) + numToNByteStr(this.s);
      }
    }
    const utils = {
      isValidPrivateKey(privateKey) {
        try {
          normPrivateKeyToScalar(privateKey);
          return true;
        } catch (error) {
          return false;
        }
      },
      normPrivateKeyToScalar,
      /**
       * Produces cryptographically secure private key from random of size
       * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
       */
      randomPrivateKey: () => {
        const length = getMinHashLength(CURVE.n);
        return mapHashToField(CURVE.randomBytes(length), CURVE.n);
      },
      /**
       * Creates precompute table for an arbitrary EC point. Makes point "cached".
       * Allows to massively speed-up `point.multiply(scalar)`.
       * @returns cached point
       * @example
       * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
       * fast.multiply(privKey); // much faster ECDH now
       */
      precompute(windowSize = 8, point = Point3.BASE) {
        point._setWindowSize(windowSize);
        point.multiply(BigInt(3));
        return point;
      }
    };
    function getPublicKey(privateKey, isCompressed = true) {
      return Point3.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    function isProbPub(item) {
      const arr = item instanceof Uint8Array;
      const str = typeof item === "string";
      const len = (arr || str) && item.length;
      if (arr)
        return len === compressedLen || len === uncompressedLen;
      if (str)
        return len === 2 * compressedLen || len === 2 * uncompressedLen;
      if (item instanceof Point3)
        return true;
      return false;
    }
    function getSharedSecret(privateA, publicB, isCompressed = true) {
      if (isProbPub(privateA))
        throw new Error("first arg must be private key");
      if (!isProbPub(publicB))
        throw new Error("second arg must be public key");
      const b2 = Point3.fromHex(publicB);
      return b2.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    const bits2int = CURVE.bits2int || function(bytes2) {
      const num = bytesToNumberBE(bytes2);
      const delta = bytes2.length * 8 - CURVE.nBitLength;
      return delta > 0 ? num >> BigInt(delta) : num;
    };
    const bits2int_modN = CURVE.bits2int_modN || function(bytes2) {
      return modN(bits2int(bytes2));
    };
    const ORDER_MASK = bitMask(CURVE.nBitLength);
    function int2octets(num) {
      if (typeof num !== "bigint")
        throw new Error("bigint expected");
      if (!(_0n5 <= num && num < ORDER_MASK))
        throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
      return numberToBytesBE(num, CURVE.nByteLength);
    }
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
      if (["recovered", "canonical"].some((k) => k in opts))
        throw new Error("sign() legacy options not supported");
      const { hash: hash3, randomBytes: randomBytes7 } = CURVE;
      let { lowS, prehash, extraEntropy: ent } = opts;
      if (lowS == null)
        lowS = true;
      msgHash = ensureBytes("msgHash", msgHash);
      if (prehash)
        msgHash = ensureBytes("prehashed msgHash", hash3(msgHash));
      const h1int = bits2int_modN(msgHash);
      const d = normPrivateKeyToScalar(privateKey);
      const seedArgs = [int2octets(d), int2octets(h1int)];
      if (ent != null) {
        const e = ent === true ? randomBytes7(Fp2.BYTES) : ent;
        seedArgs.push(ensureBytes("extraEntropy", e));
      }
      const seed = concatBytes2(...seedArgs);
      const m = h1int;
      function k2sig(kBytes) {
        const k = bits2int(kBytes);
        if (!isWithinCurveOrder(k))
          return;
        const ik = invN(k);
        const q = Point3.BASE.multiply(k).toAffine();
        const r = modN(q.x);
        if (r === _0n5)
          return;
        const s = modN(ik * modN(m + r * d));
        if (s === _0n5)
          return;
        let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n5);
        let normS = s;
        if (lowS && isBiggerThanHalfOrder(s)) {
          normS = normalizeS(s);
          recovery ^= 1;
        }
        return new Signature2(r, normS, recovery);
      }
      return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    function sign3(msgHash, privKey, opts = defaultSigOpts) {
      const { seed, k2sig } = prepSig(msgHash, privKey, opts);
      const C = CURVE;
      const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
      return drbg(seed, k2sig);
    }
    Point3.BASE._setWindowSize(8);
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
      const sg = signature;
      msgHash = ensureBytes("msgHash", msgHash);
      publicKey = ensureBytes("publicKey", publicKey);
      if ("strict" in opts)
        throw new Error("options.strict was renamed to lowS");
      const { lowS, prehash } = opts;
      let _sig = void 0;
      let P;
      try {
        if (typeof sg === "string" || sg instanceof Uint8Array) {
          try {
            _sig = Signature2.fromDER(sg);
          } catch (derError) {
            if (!(derError instanceof DER.Err))
              throw derError;
            _sig = Signature2.fromCompact(sg);
          }
        } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
          const { r: r2, s: s2 } = sg;
          _sig = new Signature2(r2, s2);
        } else {
          throw new Error("PARSE");
        }
        P = Point3.fromHex(publicKey);
      } catch (error) {
        if (error.message === "PARSE")
          throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
        return false;
      }
      if (lowS && _sig.hasHighS())
        return false;
      if (prehash)
        msgHash = CURVE.hash(msgHash);
      const { r, s } = _sig;
      const h = bits2int_modN(msgHash);
      const is = invN(s);
      const u1 = modN(h * is);
      const u2 = modN(r * is);
      const R = Point3.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
      if (!R)
        return false;
      const v = modN(R.x);
      return v === r;
    }
    return {
      CURVE,
      getPublicKey,
      getSharedSecret,
      sign: sign3,
      verify,
      ProjectivePoint: Point3,
      Signature: Signature2,
      utils
    };
  }

  // node_modules/ethers/node_modules/@noble/curves/esm/_shortw_utils.js
  function getHash(hash3) {
    return {
      hash: hash3,
      hmac: (key, ...msgs) => hmac(hash3, key, concatBytes(...msgs)),
      randomBytes
    };
  }
  function createCurve(curveDef, defHash) {
    const create = (hash3) => weierstrass({ ...curveDef, ...getHash(hash3) });
    return Object.freeze({ ...create(defHash), create });
  }

  // node_modules/ethers/node_modules/@noble/curves/esm/secp256k1.js
  var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
  var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
  var _1n6 = BigInt(1);
  var _2n5 = BigInt(2);
  var divNearest = (a, b2) => (a + b2 / _2n5) / b2;
  function sqrtMod(y) {
    const P = secp256k1P;
    const _3n7 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = y * y * y % P;
    const b3 = b2 * b2 * y % P;
    const b6 = pow2(b3, _3n7, P) * b3 % P;
    const b9 = pow2(b6, _3n7, P) * b3 % P;
    const b11 = pow2(b9, _2n5, P) * b2 % P;
    const b22 = pow2(b11, _11n, P) * b11 % P;
    const b44 = pow2(b22, _22n, P) * b22 % P;
    const b88 = pow2(b44, _44n, P) * b44 % P;
    const b176 = pow2(b88, _88n, P) * b88 % P;
    const b220 = pow2(b176, _44n, P) * b44 % P;
    const b223 = pow2(b220, _3n7, P) * b3 % P;
    const t1 = pow2(b223, _23n, P) * b22 % P;
    const t2 = pow2(t1, _6n, P) * b2 % P;
    const root = pow2(t2, _2n5, P);
    if (!Fp.eql(Fp.sqr(root), y))
      throw new Error("Cannot find square root");
    return root;
  }
  var Fp = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
  var secp256k1 = createCurve({
    a: BigInt(0),
    b: BigInt(7),
    Fp,
    n: secp256k1N,
    // Base point (x, y) aka generator point
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: true,
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (k) => {
        const n2 = secp256k1N;
        const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
        const b1 = -_1n6 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
        const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
        const b2 = a1;
        const POW_2_128 = BigInt("0x100000000000000000000000000000000");
        const c1 = divNearest(b2 * k, n2);
        const c2 = divNearest(-b1 * k, n2);
        let k1 = mod(k - c1 * a1 - c2 * a2, n2);
        let k2 = mod(-c1 * b1 - c2 * b2, n2);
        const k1neg = k1 > POW_2_128;
        const k2neg = k2 > POW_2_128;
        if (k1neg)
          k1 = n2 - k1;
        if (k2neg)
          k2 = n2 - k2;
        if (k1 > POW_2_128 || k2 > POW_2_128) {
          throw new Error("splitScalar: Endomorphism failed, k=" + k);
        }
        return { k1neg, k1, k2neg, k2 };
      }
    }
  }, sha256);
  var _0n6 = BigInt(0);
  var Point = secp256k1.ProjectivePoint;

  // node_modules/ethers/lib.esm/constants/addresses.js
  var ZeroAddress = "0x0000000000000000000000000000000000000000";

  // node_modules/ethers/lib.esm/constants/hashes.js
  var ZeroHash = "0x0000000000000000000000000000000000000000000000000000000000000000";

  // node_modules/ethers/lib.esm/constants/strings.js
  var MessagePrefix = "Ethereum Signed Message:\n";

  // node_modules/ethers/lib.esm/crypto/signature.js
  var BN_03 = BigInt(0);
  var BN_12 = BigInt(1);
  var BN_2 = BigInt(2);
  var BN_27 = BigInt(27);
  var BN_28 = BigInt(28);
  var BN_35 = BigInt(35);
  var BN_N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
  var BN_N_2 = BN_N / BN_2;
  var inspect = Symbol.for("nodejs.util.inspect.custom");
  var _guard2 = {};
  function toUint256(value) {
    return zeroPadValue(toBeArray(value), 32);
  }
  var Signature = class _Signature {
    #r;
    #s;
    #v;
    #networkV;
    /**
     *  The ``r`` value for a signature.
     *
     *  This represents the ``x`` coordinate of a "reference" or
     *  challenge point, from which the ``y`` can be computed.
     */
    get r() {
      return this.#r;
    }
    set r(value) {
      assertArgument(dataLength(value) === 32, "invalid r", "value", value);
      this.#r = hexlify(value);
    }
    /**
     *  The ``s`` value for a signature.
     */
    get s() {
      assertArgument(parseInt(this.#s.substring(0, 3)) < 8, "non-canonical s; use ._s", "s", this.#s);
      return this.#s;
    }
    set s(_value) {
      assertArgument(dataLength(_value) === 32, "invalid s", "value", _value);
      this.#s = hexlify(_value);
    }
    /**
     *  Return the s value, unchecked for EIP-2 compliance.
     *
     *  This should generally not be used and is for situations where
     *  a non-canonical S value might be relevant, such as Frontier blocks
     *  that were mined prior to EIP-2 or invalid Authorization List
     *  signatures.
     */
    get _s() {
      return this.#s;
    }
    /**
     *  Returns true if the Signature is valid for [[link-eip-2]] signatures.
     */
    isValid() {
      const s = BigInt(this.#s);
      return s <= BN_N_2;
    }
    /**
     *  The ``v`` value for a signature.
     *
     *  Since a given ``x`` value for ``r`` has two possible values for
     *  its correspondin ``y``, the ``v`` indicates which of the two ``y``
     *  values to use.
     *
     *  It is normalized to the values ``27`` or ``28`` for legacy
     *  purposes.
     */
    get v() {
      return this.#v;
    }
    set v(value) {
      const v = getNumber(value, "value");
      assertArgument(v === 27 || v === 28, "invalid v", "v", value);
      this.#v = v;
    }
    /**
     *  The EIP-155 ``v`` for legacy transactions. For non-legacy
     *  transactions, this value is ``null``.
     */
    get networkV() {
      return this.#networkV;
    }
    /**
     *  The chain ID for EIP-155 legacy transactions. For non-legacy
     *  transactions, this value is ``null``.
     */
    get legacyChainId() {
      const v = this.networkV;
      if (v == null) {
        return null;
      }
      return _Signature.getChainId(v);
    }
    /**
     *  The ``yParity`` for the signature.
     *
     *  See ``v`` for more details on how this value is used.
     */
    get yParity() {
      return this.v === 27 ? 0 : 1;
    }
    /**
     *  The [[link-eip-2098]] compact representation of the ``yParity``
     *  and ``s`` compacted into a single ``bytes32``.
     */
    get yParityAndS() {
      const yParityAndS = getBytes(this.s);
      if (this.yParity) {
        yParityAndS[0] |= 128;
      }
      return hexlify(yParityAndS);
    }
    /**
     *  The [[link-eip-2098]] compact representation.
     */
    get compactSerialized() {
      return concat([this.r, this.yParityAndS]);
    }
    /**
     *  The serialized representation.
     */
    get serialized() {
      return concat([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
    }
    /**
     *  @private
     */
    constructor(guard, r, s, v) {
      assertPrivate(guard, _guard2, "Signature");
      this.#r = r;
      this.#s = s;
      this.#v = v;
      this.#networkV = null;
    }
    /**
     *  Returns the canonical signature.
     *
     *  This is only necessary when dealing with legacy transaction which
     *  did not enforce canonical S values (i.e. [[link-eip-2]]. Most
     *  developers should never require this.
     */
    getCanonical() {
      if (this.isValid()) {
        return this;
      }
      const s = BN_N - BigInt(this._s);
      const v = 55 - this.v;
      const result = new _Signature(_guard2, this.r, toUint256(s), v);
      if (this.networkV) {
        result.#networkV = this.networkV;
      }
      return result;
    }
    /**
     *  Returns a new identical [[Signature]].
     */
    clone() {
      const clone = new _Signature(_guard2, this.r, this._s, this.v);
      if (this.networkV) {
        clone.#networkV = this.networkV;
      }
      return clone;
    }
    /**
     *  Returns a representation that is compatible with ``JSON.stringify``.
     */
    toJSON() {
      const networkV = this.networkV;
      return {
        _type: "signature",
        networkV: networkV != null ? networkV.toString() : null,
        r: this.r,
        s: this._s,
        v: this.v
      };
    }
    [inspect]() {
      return this.toString();
    }
    toString() {
      if (this.isValid()) {
        return `Signature { r: ${this.r}, s: ${this._s}, v: ${this.v} }`;
      }
      return `Signature { r: ${this.r}, s: ${this._s}, v: ${this.v}, valid: false }`;
    }
    /**
     *  Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.
     *
     *  @example:
     *    Signature.getChainId(45)
     *    //_result:
     *
     *    Signature.getChainId(46)
     *    //_result:
     */
    static getChainId(v) {
      const bv = getBigInt(v, "v");
      if (bv == BN_27 || bv == BN_28) {
        return BN_03;
      }
      assertArgument(bv >= BN_35, "invalid EIP-155 v", "v", v);
      return (bv - BN_35) / BN_2;
    }
    /**
     *  Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.
     *
     *  Legacy transactions which use [[link-eip-155]] hijack the ``v``
     *  property to include the chain ID.
     *
     *  @example:
     *    Signature.getChainIdV(5, 27)
     *    //_result:
     *
     *    Signature.getChainIdV(5, 28)
     *    //_result:
     *
     */
    static getChainIdV(chainId, v) {
      return getBigInt(chainId) * BN_2 + BigInt(35 + v - 27);
    }
    /**
     *  Compute the normalized legacy transaction ``v`` from a ``yParirty``,
     *  a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.
     *
     *  @example:
     *    // The values 0 and 1 imply v is actually yParity
     *    Signature.getNormalizedV(0)
     *    //_result:
     *
     *    // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
     *    Signature.getNormalizedV(27)
     *    //_result:
     *
     *    // Legacy EIP-155 transaction (i.e. >= 35)
     *    Signature.getNormalizedV(46)
     *    //_result:
     *
     *    // Invalid values throw
     *    Signature.getNormalizedV(5)
     *    //_error:
     */
    static getNormalizedV(v) {
      const bv = getBigInt(v);
      if (bv === BN_03 || bv === BN_27) {
        return 27;
      }
      if (bv === BN_12 || bv === BN_28) {
        return 28;
      }
      assertArgument(bv >= BN_35, "invalid v", "v", v);
      return bv & BN_12 ? 27 : 28;
    }
    /**
     *  Creates a new [[Signature]].
     *
     *  If no %%sig%% is provided, a new [[Signature]] is created
     *  with default values.
     *
     *  If %%sig%% is a string, it is parsed.
     */
    static from(sig) {
      function assertError(check, message) {
        assertArgument(check, message, "signature", sig);
      }
      ;
      if (sig == null) {
        return new _Signature(_guard2, ZeroHash, ZeroHash, 27);
      }
      if (typeof sig === "string") {
        const bytes2 = getBytes(sig, "signature");
        if (bytes2.length === 64) {
          const r2 = hexlify(bytes2.slice(0, 32));
          const s2 = bytes2.slice(32, 64);
          const v2 = s2[0] & 128 ? 28 : 27;
          s2[0] &= 127;
          return new _Signature(_guard2, r2, hexlify(s2), v2);
        }
        if (bytes2.length === 65) {
          const r2 = hexlify(bytes2.slice(0, 32));
          const s2 = hexlify(bytes2.slice(32, 64));
          const v2 = _Signature.getNormalizedV(bytes2[64]);
          return new _Signature(_guard2, r2, s2, v2);
        }
        assertError(false, "invalid raw signature length");
      }
      if (sig instanceof _Signature) {
        return sig.clone();
      }
      const _r = sig.r;
      assertError(_r != null, "missing r");
      const r = toUint256(_r);
      const s = function(s2, yParityAndS) {
        if (s2 != null) {
          return toUint256(s2);
        }
        if (yParityAndS != null) {
          assertError(isHexString(yParityAndS, 32), "invalid yParityAndS");
          const bytes2 = getBytes(yParityAndS);
          bytes2[0] &= 127;
          return hexlify(bytes2);
        }
        assertError(false, "missing s");
      }(sig.s, sig.yParityAndS);
      const { networkV, v } = function(_v, yParityAndS, yParity) {
        if (_v != null) {
          const v2 = getBigInt(_v);
          return {
            networkV: v2 >= BN_35 ? v2 : void 0,
            v: _Signature.getNormalizedV(v2)
          };
        }
        if (yParityAndS != null) {
          assertError(isHexString(yParityAndS, 32), "invalid yParityAndS");
          return { v: getBytes(yParityAndS)[0] & 128 ? 28 : 27 };
        }
        if (yParity != null) {
          switch (getNumber(yParity, "sig.yParity")) {
            case 0:
              return { v: 27 };
            case 1:
              return { v: 28 };
          }
          assertError(false, "invalid yParity");
        }
        assertError(false, "missing v");
      }(sig.v, sig.yParityAndS, sig.yParity);
      const result = new _Signature(_guard2, r, s, v);
      if (networkV) {
        result.#networkV = networkV;
      }
      assertError(sig.yParity == null || getNumber(sig.yParity, "sig.yParity") === result.yParity, "yParity mismatch");
      assertError(sig.yParityAndS == null || sig.yParityAndS === result.yParityAndS, "yParityAndS mismatch");
      return result;
    }
  };

  // node_modules/ethers/lib.esm/crypto/signing-key.js
  var SigningKey = class _SigningKey {
    #privateKey;
    /**
     *  Creates a new **SigningKey** for %%privateKey%%.
     */
    constructor(privateKey) {
      assertArgument(dataLength(privateKey) === 32, "invalid private key", "privateKey", "[REDACTED]");
      this.#privateKey = hexlify(privateKey);
    }
    /**
     *  The private key.
     */
    get privateKey() {
      return this.#privateKey;
    }
    /**
     *  The uncompressed public key.
     *
     * This will always begin with the prefix ``0x04`` and be 132
     * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
     */
    get publicKey() {
      return _SigningKey.computePublicKey(this.#privateKey);
    }
    /**
     *  The compressed public key.
     *
     *  This will always begin with either the prefix ``0x02`` or ``0x03``
     *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
     *  nibbles)
     */
    get compressedPublicKey() {
      return _SigningKey.computePublicKey(this.#privateKey, true);
    }
    /**
     *  Return the signature of the signed %%digest%%.
     */
    sign(digest) {
      assertArgument(dataLength(digest) === 32, "invalid digest length", "digest", digest);
      const sig = secp256k1.sign(getBytesCopy(digest), getBytesCopy(this.#privateKey), {
        lowS: true
      });
      return Signature.from({
        r: toBeHex(sig.r, 32),
        s: toBeHex(sig.s, 32),
        v: sig.recovery ? 28 : 27
      });
    }
    /**
     *  Returns the [[link-wiki-ecdh]] shared secret between this
     *  private key and the %%other%% key.
     *
     *  The %%other%% key may be any type of key, a raw public key,
     *  a compressed/uncompressed pubic key or aprivate key.
     *
     *  Best practice is usually to use a cryptographic hash on the
     *  returned value before using it as a symetric secret.
     *
     *  @example:
     *    sign1 = new SigningKey(id("some-secret-1"))
     *    sign2 = new SigningKey(id("some-secret-2"))
     *
     *    // Notice that privA.computeSharedSecret(pubB)...
     *    sign1.computeSharedSecret(sign2.publicKey)
     *    //_result:
     *
     *    // ...is equal to privB.computeSharedSecret(pubA).
     *    sign2.computeSharedSecret(sign1.publicKey)
     *    //_result:
     */
    computeSharedSecret(other) {
      const pubKey = _SigningKey.computePublicKey(other);
      return hexlify(secp256k1.getSharedSecret(getBytesCopy(this.#privateKey), getBytes(pubKey), false));
    }
    /**
     *  Compute the public key for %%key%%, optionally %%compressed%%.
     *
     *  The %%key%% may be any type of key, a raw public key, a
     *  compressed/uncompressed public key or private key.
     *
     *  @example:
     *    sign = new SigningKey(id("some-secret"));
     *
     *    // Compute the uncompressed public key for a private key
     *    SigningKey.computePublicKey(sign.privateKey)
     *    //_result:
     *
     *    // Compute the compressed public key for a private key
     *    SigningKey.computePublicKey(sign.privateKey, true)
     *    //_result:
     *
     *    // Compute the uncompressed public key
     *    SigningKey.computePublicKey(sign.publicKey, false);
     *    //_result:
     *
     *    // Compute the Compressed a public key
     *    SigningKey.computePublicKey(sign.publicKey, true);
     *    //_result:
     */
    static computePublicKey(key, compressed) {
      let bytes2 = getBytes(key, "key");
      if (bytes2.length === 32) {
        const pubKey = secp256k1.getPublicKey(bytes2, !!compressed);
        return hexlify(pubKey);
      }
      if (bytes2.length === 64) {
        const pub = new Uint8Array(65);
        pub[0] = 4;
        pub.set(bytes2, 1);
        bytes2 = pub;
      }
      const point = secp256k1.ProjectivePoint.fromHex(bytes2);
      return hexlify(point.toRawBytes(compressed));
    }
    /**
     *  Returns the public key for the private key which produced the
     *  %%signature%% for the given %%digest%%.
     *
     *  @example:
     *    key = new SigningKey(id("some-secret"))
     *    digest = id("hello world")
     *    sig = key.sign(digest)
     *
     *    // Notice the signer public key...
     *    key.publicKey
     *    //_result:
     *
     *    // ...is equal to the recovered public key
     *    SigningKey.recoverPublicKey(digest, sig)
     *    //_result:
     *
     */
    static recoverPublicKey(digest, signature) {
      assertArgument(dataLength(digest) === 32, "invalid digest length", "digest", digest);
      const sig = Signature.from(signature);
      let secpSig = secp256k1.Signature.fromCompact(getBytesCopy(concat([sig.r, sig.s])));
      secpSig = secpSig.addRecoveryBit(sig.yParity);
      const pubKey = secpSig.recoverPublicKey(getBytesCopy(digest));
      assertArgument(pubKey != null, "invalid signature for digest", "signature", signature);
      return "0x" + pubKey.toHex(false);
    }
    /**
     *  Returns the point resulting from adding the ellipic curve points
     *  %%p0%% and %%p1%%.
     *
     *  This is not a common function most developers should require, but
     *  can be useful for certain privacy-specific techniques.
     *
     *  For example, it is used by [[HDNodeWallet]] to compute child
     *  addresses from parent public keys and chain codes.
     */
    static addPoints(p0, p1, compressed) {
      const pub0 = secp256k1.ProjectivePoint.fromHex(_SigningKey.computePublicKey(p0).substring(2));
      const pub1 = secp256k1.ProjectivePoint.fromHex(_SigningKey.computePublicKey(p1).substring(2));
      return "0x" + pub0.add(pub1).toHex(!!compressed);
    }
  };

  // node_modules/ethers/lib.esm/address/address.js
  var BN_04 = BigInt(0);
  var BN_36 = BigInt(36);
  function getChecksumAddress(address) {
    address = address.toLowerCase();
    const chars = address.substring(2).split("");
    const expanded = new Uint8Array(40);
    for (let i = 0; i < 40; i++) {
      expanded[i] = chars[i].charCodeAt(0);
    }
    const hashed = getBytes(keccak256(expanded));
    for (let i = 0; i < 40; i += 2) {
      if (hashed[i >> 1] >> 4 >= 8) {
        chars[i] = chars[i].toUpperCase();
      }
      if ((hashed[i >> 1] & 15) >= 8) {
        chars[i + 1] = chars[i + 1].toUpperCase();
      }
    }
    return "0x" + chars.join("");
  }
  var ibanLookup = {};
  for (let i = 0; i < 10; i++) {
    ibanLookup[String(i)] = String(i);
  }
  for (let i = 0; i < 26; i++) {
    ibanLookup[String.fromCharCode(65 + i)] = String(10 + i);
  }
  var safeDigits = 15;
  function ibanChecksum(address) {
    address = address.toUpperCase();
    address = address.substring(4) + address.substring(0, 2) + "00";
    let expanded = address.split("").map((c) => {
      return ibanLookup[c];
    }).join("");
    while (expanded.length >= safeDigits) {
      let block = expanded.substring(0, safeDigits);
      expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
    }
    let checksum2 = String(98 - parseInt(expanded, 10) % 97);
    while (checksum2.length < 2) {
      checksum2 = "0" + checksum2;
    }
    return checksum2;
  }
  var Base36 = function() {
    ;
    const result = {};
    for (let i = 0; i < 36; i++) {
      const key = "0123456789abcdefghijklmnopqrstuvwxyz"[i];
      result[key] = BigInt(i);
    }
    return result;
  }();
  function fromBase36(value) {
    value = value.toLowerCase();
    let result = BN_04;
    for (let i = 0; i < value.length; i++) {
      result = result * BN_36 + Base36[value[i]];
    }
    return result;
  }
  function getAddress(address) {
    assertArgument(typeof address === "string", "invalid address", "address", address);
    if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
      if (!address.startsWith("0x")) {
        address = "0x" + address;
      }
      const result = getChecksumAddress(address);
      assertArgument(!address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || result === address, "bad address checksum", "address", address);
      return result;
    }
    if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
      assertArgument(address.substring(2, 4) === ibanChecksum(address), "bad icap checksum", "address", address);
      let result = fromBase36(address.substring(4)).toString(16);
      while (result.length < 40) {
        result = "0" + result;
      }
      return getChecksumAddress("0x" + result);
    }
    assertArgument(false, "invalid address", "address", address);
  }

  // node_modules/ethers/lib.esm/address/contract-address.js
  function getCreateAddress(tx) {
    const from = getAddress(tx.from);
    const nonce = getBigInt(tx.nonce, "tx.nonce");
    let nonceHex = nonce.toString(16);
    if (nonceHex === "0") {
      nonceHex = "0x";
    } else if (nonceHex.length % 2) {
      nonceHex = "0x0" + nonceHex;
    } else {
      nonceHex = "0x" + nonceHex;
    }
    return getAddress(dataSlice(keccak256(encodeRlp([from, nonceHex])), 12));
  }

  // node_modules/ethers/lib.esm/address/checks.js
  function isAddressable(value) {
    return value && typeof value.getAddress === "function";
  }
  async function checkAddress(target, promise) {
    const result = await promise;
    if (result == null || result === "0x0000000000000000000000000000000000000000") {
      assert(typeof target !== "string", "unconfigured name", "UNCONFIGURED_NAME", { value: target });
      assertArgument(false, "invalid AddressLike value; did not resolve to a value address", "target", target);
    }
    return getAddress(result);
  }
  function resolveAddress(target, resolver) {
    if (typeof target === "string") {
      if (target.match(/^0x[0-9a-f]{40}$/i)) {
        return getAddress(target);
      }
      assert(resolver != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" });
      return checkAddress(target, resolver.resolveName(target));
    } else if (isAddressable(target)) {
      return checkAddress(target, target.getAddress());
    } else if (target && typeof target.then === "function") {
      return checkAddress(target, target);
    }
    assertArgument(false, "unsupported addressable value", "target", target);
  }

  // node_modules/ethers/lib.esm/abi/typed.js
  var _gaurd = {};
  function n(value, width) {
    let signed = false;
    if (width < 0) {
      signed = true;
      width *= -1;
    }
    return new Typed(_gaurd, `${signed ? "" : "u"}int${width}`, value, { signed, width });
  }
  function b(value, size) {
    return new Typed(_gaurd, `bytes${size ? size : ""}`, value, { size });
  }
  var _typedSymbol = Symbol.for("_ethers_typed");
  var Typed = class _Typed {
    /**
     *  The type, as a Solidity-compatible type.
     */
    type;
    /**
     *  The actual value.
     */
    value;
    #options;
    /**
     *  @_ignore:
     */
    _typedSymbol;
    /**
     *  @_ignore:
     */
    constructor(gaurd, type, value, options) {
      if (options == null) {
        options = null;
      }
      assertPrivate(_gaurd, gaurd, "Typed");
      defineProperties(this, { _typedSymbol, type, value });
      this.#options = options;
      this.format();
    }
    /**
     *  Format the type as a Human-Readable type.
     */
    format() {
      if (this.type === "array") {
        throw new Error("");
      } else if (this.type === "dynamicArray") {
        throw new Error("");
      } else if (this.type === "tuple") {
        return `tuple(${this.value.map((v) => v.format()).join(",")})`;
      }
      return this.type;
    }
    /**
     *  The default value returned by this type.
     */
    defaultValue() {
      return 0;
    }
    /**
     *  The minimum value for numeric types.
     */
    minValue() {
      return 0;
    }
    /**
     *  The maximum value for numeric types.
     */
    maxValue() {
      return 0;
    }
    /**
     *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
     */
    isBigInt() {
      return !!this.type.match(/^u?int[0-9]+$/);
    }
    /**
     *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
     */
    isData() {
      return this.type.startsWith("bytes");
    }
    /**
     *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
     */
    isString() {
      return this.type === "string";
    }
    /**
     *  Returns the tuple name, if this is a tuple. Throws otherwise.
     */
    get tupleName() {
      if (this.type !== "tuple") {
        throw TypeError("not a tuple");
      }
      return this.#options;
    }
    // Returns the length of this type as an array
    // - `null` indicates the length is unforced, it could be dynamic
    // - `-1` indicates the length is dynamic
    // - any other value indicates it is a static array and is its length
    /**
     *  Returns the length of the array type or ``-1`` if it is dynamic.
     *
     *  Throws if the type is not an array.
     */
    get arrayLength() {
      if (this.type !== "array") {
        throw TypeError("not an array");
      }
      if (this.#options === true) {
        return -1;
      }
      if (this.#options === false) {
        return this.value.length;
      }
      return null;
    }
    /**
     *  Returns a new **Typed** of %%type%% with the %%value%%.
     */
    static from(type, value) {
      return new _Typed(_gaurd, type, value);
    }
    /**
     *  Return a new ``uint8`` type for %%v%%.
     */
    static uint8(v) {
      return n(v, 8);
    }
    /**
     *  Return a new ``uint16`` type for %%v%%.
     */
    static uint16(v) {
      return n(v, 16);
    }
    /**
     *  Return a new ``uint24`` type for %%v%%.
     */
    static uint24(v) {
      return n(v, 24);
    }
    /**
     *  Return a new ``uint32`` type for %%v%%.
     */
    static uint32(v) {
      return n(v, 32);
    }
    /**
     *  Return a new ``uint40`` type for %%v%%.
     */
    static uint40(v) {
      return n(v, 40);
    }
    /**
     *  Return a new ``uint48`` type for %%v%%.
     */
    static uint48(v) {
      return n(v, 48);
    }
    /**
     *  Return a new ``uint56`` type for %%v%%.
     */
    static uint56(v) {
      return n(v, 56);
    }
    /**
     *  Return a new ``uint64`` type for %%v%%.
     */
    static uint64(v) {
      return n(v, 64);
    }
    /**
     *  Return a new ``uint72`` type for %%v%%.
     */
    static uint72(v) {
      return n(v, 72);
    }
    /**
     *  Return a new ``uint80`` type for %%v%%.
     */
    static uint80(v) {
      return n(v, 80);
    }
    /**
     *  Return a new ``uint88`` type for %%v%%.
     */
    static uint88(v) {
      return n(v, 88);
    }
    /**
     *  Return a new ``uint96`` type for %%v%%.
     */
    static uint96(v) {
      return n(v, 96);
    }
    /**
     *  Return a new ``uint104`` type for %%v%%.
     */
    static uint104(v) {
      return n(v, 104);
    }
    /**
     *  Return a new ``uint112`` type for %%v%%.
     */
    static uint112(v) {
      return n(v, 112);
    }
    /**
     *  Return a new ``uint120`` type for %%v%%.
     */
    static uint120(v) {
      return n(v, 120);
    }
    /**
     *  Return a new ``uint128`` type for %%v%%.
     */
    static uint128(v) {
      return n(v, 128);
    }
    /**
     *  Return a new ``uint136`` type for %%v%%.
     */
    static uint136(v) {
      return n(v, 136);
    }
    /**
     *  Return a new ``uint144`` type for %%v%%.
     */
    static uint144(v) {
      return n(v, 144);
    }
    /**
     *  Return a new ``uint152`` type for %%v%%.
     */
    static uint152(v) {
      return n(v, 152);
    }
    /**
     *  Return a new ``uint160`` type for %%v%%.
     */
    static uint160(v) {
      return n(v, 160);
    }
    /**
     *  Return a new ``uint168`` type for %%v%%.
     */
    static uint168(v) {
      return n(v, 168);
    }
    /**
     *  Return a new ``uint176`` type for %%v%%.
     */
    static uint176(v) {
      return n(v, 176);
    }
    /**
     *  Return a new ``uint184`` type for %%v%%.
     */
    static uint184(v) {
      return n(v, 184);
    }
    /**
     *  Return a new ``uint192`` type for %%v%%.
     */
    static uint192(v) {
      return n(v, 192);
    }
    /**
     *  Return a new ``uint200`` type for %%v%%.
     */
    static uint200(v) {
      return n(v, 200);
    }
    /**
     *  Return a new ``uint208`` type for %%v%%.
     */
    static uint208(v) {
      return n(v, 208);
    }
    /**
     *  Return a new ``uint216`` type for %%v%%.
     */
    static uint216(v) {
      return n(v, 216);
    }
    /**
     *  Return a new ``uint224`` type for %%v%%.
     */
    static uint224(v) {
      return n(v, 224);
    }
    /**
     *  Return a new ``uint232`` type for %%v%%.
     */
    static uint232(v) {
      return n(v, 232);
    }
    /**
     *  Return a new ``uint240`` type for %%v%%.
     */
    static uint240(v) {
      return n(v, 240);
    }
    /**
     *  Return a new ``uint248`` type for %%v%%.
     */
    static uint248(v) {
      return n(v, 248);
    }
    /**
     *  Return a new ``uint256`` type for %%v%%.
     */
    static uint256(v) {
      return n(v, 256);
    }
    /**
     *  Return a new ``uint256`` type for %%v%%.
     */
    static uint(v) {
      return n(v, 256);
    }
    /**
     *  Return a new ``int8`` type for %%v%%.
     */
    static int8(v) {
      return n(v, -8);
    }
    /**
     *  Return a new ``int16`` type for %%v%%.
     */
    static int16(v) {
      return n(v, -16);
    }
    /**
     *  Return a new ``int24`` type for %%v%%.
     */
    static int24(v) {
      return n(v, -24);
    }
    /**
     *  Return a new ``int32`` type for %%v%%.
     */
    static int32(v) {
      return n(v, -32);
    }
    /**
     *  Return a new ``int40`` type for %%v%%.
     */
    static int40(v) {
      return n(v, -40);
    }
    /**
     *  Return a new ``int48`` type for %%v%%.
     */
    static int48(v) {
      return n(v, -48);
    }
    /**
     *  Return a new ``int56`` type for %%v%%.
     */
    static int56(v) {
      return n(v, -56);
    }
    /**
     *  Return a new ``int64`` type for %%v%%.
     */
    static int64(v) {
      return n(v, -64);
    }
    /**
     *  Return a new ``int72`` type for %%v%%.
     */
    static int72(v) {
      return n(v, -72);
    }
    /**
     *  Return a new ``int80`` type for %%v%%.
     */
    static int80(v) {
      return n(v, -80);
    }
    /**
     *  Return a new ``int88`` type for %%v%%.
     */
    static int88(v) {
      return n(v, -88);
    }
    /**
     *  Return a new ``int96`` type for %%v%%.
     */
    static int96(v) {
      return n(v, -96);
    }
    /**
     *  Return a new ``int104`` type for %%v%%.
     */
    static int104(v) {
      return n(v, -104);
    }
    /**
     *  Return a new ``int112`` type for %%v%%.
     */
    static int112(v) {
      return n(v, -112);
    }
    /**
     *  Return a new ``int120`` type for %%v%%.
     */
    static int120(v) {
      return n(v, -120);
    }
    /**
     *  Return a new ``int128`` type for %%v%%.
     */
    static int128(v) {
      return n(v, -128);
    }
    /**
     *  Return a new ``int136`` type for %%v%%.
     */
    static int136(v) {
      return n(v, -136);
    }
    /**
     *  Return a new ``int144`` type for %%v%%.
     */
    static int144(v) {
      return n(v, -144);
    }
    /**
     *  Return a new ``int52`` type for %%v%%.
     */
    static int152(v) {
      return n(v, -152);
    }
    /**
     *  Return a new ``int160`` type for %%v%%.
     */
    static int160(v) {
      return n(v, -160);
    }
    /**
     *  Return a new ``int168`` type for %%v%%.
     */
    static int168(v) {
      return n(v, -168);
    }
    /**
     *  Return a new ``int176`` type for %%v%%.
     */
    static int176(v) {
      return n(v, -176);
    }
    /**
     *  Return a new ``int184`` type for %%v%%.
     */
    static int184(v) {
      return n(v, -184);
    }
    /**
     *  Return a new ``int92`` type for %%v%%.
     */
    static int192(v) {
      return n(v, -192);
    }
    /**
     *  Return a new ``int200`` type for %%v%%.
     */
    static int200(v) {
      return n(v, -200);
    }
    /**
     *  Return a new ``int208`` type for %%v%%.
     */
    static int208(v) {
      return n(v, -208);
    }
    /**
     *  Return a new ``int216`` type for %%v%%.
     */
    static int216(v) {
      return n(v, -216);
    }
    /**
     *  Return a new ``int224`` type for %%v%%.
     */
    static int224(v) {
      return n(v, -224);
    }
    /**
     *  Return a new ``int232`` type for %%v%%.
     */
    static int232(v) {
      return n(v, -232);
    }
    /**
     *  Return a new ``int240`` type for %%v%%.
     */
    static int240(v) {
      return n(v, -240);
    }
    /**
     *  Return a new ``int248`` type for %%v%%.
     */
    static int248(v) {
      return n(v, -248);
    }
    /**
     *  Return a new ``int256`` type for %%v%%.
     */
    static int256(v) {
      return n(v, -256);
    }
    /**
     *  Return a new ``int256`` type for %%v%%.
     */
    static int(v) {
      return n(v, -256);
    }
    /**
     *  Return a new ``bytes1`` type for %%v%%.
     */
    static bytes1(v) {
      return b(v, 1);
    }
    /**
     *  Return a new ``bytes2`` type for %%v%%.
     */
    static bytes2(v) {
      return b(v, 2);
    }
    /**
     *  Return a new ``bytes3`` type for %%v%%.
     */
    static bytes3(v) {
      return b(v, 3);
    }
    /**
     *  Return a new ``bytes4`` type for %%v%%.
     */
    static bytes4(v) {
      return b(v, 4);
    }
    /**
     *  Return a new ``bytes5`` type for %%v%%.
     */
    static bytes5(v) {
      return b(v, 5);
    }
    /**
     *  Return a new ``bytes6`` type for %%v%%.
     */
    static bytes6(v) {
      return b(v, 6);
    }
    /**
     *  Return a new ``bytes7`` type for %%v%%.
     */
    static bytes7(v) {
      return b(v, 7);
    }
    /**
     *  Return a new ``bytes8`` type for %%v%%.
     */
    static bytes8(v) {
      return b(v, 8);
    }
    /**
     *  Return a new ``bytes9`` type for %%v%%.
     */
    static bytes9(v) {
      return b(v, 9);
    }
    /**
     *  Return a new ``bytes10`` type for %%v%%.
     */
    static bytes10(v) {
      return b(v, 10);
    }
    /**
     *  Return a new ``bytes11`` type for %%v%%.
     */
    static bytes11(v) {
      return b(v, 11);
    }
    /**
     *  Return a new ``bytes12`` type for %%v%%.
     */
    static bytes12(v) {
      return b(v, 12);
    }
    /**
     *  Return a new ``bytes13`` type for %%v%%.
     */
    static bytes13(v) {
      return b(v, 13);
    }
    /**
     *  Return a new ``bytes14`` type for %%v%%.
     */
    static bytes14(v) {
      return b(v, 14);
    }
    /**
     *  Return a new ``bytes15`` type for %%v%%.
     */
    static bytes15(v) {
      return b(v, 15);
    }
    /**
     *  Return a new ``bytes16`` type for %%v%%.
     */
    static bytes16(v) {
      return b(v, 16);
    }
    /**
     *  Return a new ``bytes17`` type for %%v%%.
     */
    static bytes17(v) {
      return b(v, 17);
    }
    /**
     *  Return a new ``bytes18`` type for %%v%%.
     */
    static bytes18(v) {
      return b(v, 18);
    }
    /**
     *  Return a new ``bytes19`` type for %%v%%.
     */
    static bytes19(v) {
      return b(v, 19);
    }
    /**
     *  Return a new ``bytes20`` type for %%v%%.
     */
    static bytes20(v) {
      return b(v, 20);
    }
    /**
     *  Return a new ``bytes21`` type for %%v%%.
     */
    static bytes21(v) {
      return b(v, 21);
    }
    /**
     *  Return a new ``bytes22`` type for %%v%%.
     */
    static bytes22(v) {
      return b(v, 22);
    }
    /**
     *  Return a new ``bytes23`` type for %%v%%.
     */
    static bytes23(v) {
      return b(v, 23);
    }
    /**
     *  Return a new ``bytes24`` type for %%v%%.
     */
    static bytes24(v) {
      return b(v, 24);
    }
    /**
     *  Return a new ``bytes25`` type for %%v%%.
     */
    static bytes25(v) {
      return b(v, 25);
    }
    /**
     *  Return a new ``bytes26`` type for %%v%%.
     */
    static bytes26(v) {
      return b(v, 26);
    }
    /**
     *  Return a new ``bytes27`` type for %%v%%.
     */
    static bytes27(v) {
      return b(v, 27);
    }
    /**
     *  Return a new ``bytes28`` type for %%v%%.
     */
    static bytes28(v) {
      return b(v, 28);
    }
    /**
     *  Return a new ``bytes29`` type for %%v%%.
     */
    static bytes29(v) {
      return b(v, 29);
    }
    /**
     *  Return a new ``bytes30`` type for %%v%%.
     */
    static bytes30(v) {
      return b(v, 30);
    }
    /**
     *  Return a new ``bytes31`` type for %%v%%.
     */
    static bytes31(v) {
      return b(v, 31);
    }
    /**
     *  Return a new ``bytes32`` type for %%v%%.
     */
    static bytes32(v) {
      return b(v, 32);
    }
    /**
     *  Return a new ``address`` type for %%v%%.
     */
    static address(v) {
      return new _Typed(_gaurd, "address", v);
    }
    /**
     *  Return a new ``bool`` type for %%v%%.
     */
    static bool(v) {
      return new _Typed(_gaurd, "bool", !!v);
    }
    /**
     *  Return a new ``bytes`` type for %%v%%.
     */
    static bytes(v) {
      return new _Typed(_gaurd, "bytes", v);
    }
    /**
     *  Return a new ``string`` type for %%v%%.
     */
    static string(v) {
      return new _Typed(_gaurd, "string", v);
    }
    /**
     *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
     */
    static array(v, dynamic) {
      throw new Error("not implemented yet");
      return new _Typed(_gaurd, "array", v, dynamic);
    }
    /**
     *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
     */
    static tuple(v, name) {
      throw new Error("not implemented yet");
      return new _Typed(_gaurd, "tuple", v, name);
    }
    /**
     *  Return a new ``uint8`` type for %%v%%.
     */
    static overrides(v) {
      return new _Typed(_gaurd, "overrides", Object.assign({}, v));
    }
    /**
     *  Returns true only if %%value%% is a [[Typed]] instance.
     */
    static isTyped(value) {
      return value && typeof value === "object" && "_typedSymbol" in value && value._typedSymbol === _typedSymbol;
    }
    /**
     *  If the value is a [[Typed]] instance, validates the underlying value
     *  and returns it, otherwise returns value directly.
     *
     *  This is useful for functions that with to accept either a [[Typed]]
     *  object or values.
     */
    static dereference(value, type) {
      if (_Typed.isTyped(value)) {
        if (value.type !== type) {
          throw new Error(`invalid type: expecetd ${type}, got ${value.type}`);
        }
        return value.value;
      }
      return value;
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/address.js
  var AddressCoder = class extends Coder {
    constructor(localName) {
      super("address", "address", localName, false);
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000";
    }
    encode(writer, _value) {
      let value = Typed.dereference(_value, "string");
      try {
        value = getAddress(value);
      } catch (error) {
        return this._throwError(error.message, _value);
      }
      return writer.writeValue(value);
    }
    decode(reader) {
      return getAddress(toBeHex(reader.readValue(), 20));
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/anonymous.js
  var AnonymousCoder = class extends Coder {
    coder;
    constructor(coder) {
      super(coder.name, coder.type, "_", coder.dynamic);
      this.coder = coder;
    }
    defaultValue() {
      return this.coder.defaultValue();
    }
    encode(writer, value) {
      return this.coder.encode(writer, value);
    }
    decode(reader) {
      return this.coder.decode(reader);
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/array.js
  function pack(writer, coders, values) {
    let arrayValues = [];
    if (Array.isArray(values)) {
      arrayValues = values;
    } else if (values && typeof values === "object") {
      let unique = {};
      arrayValues = coders.map((coder) => {
        const name = coder.localName;
        assert(name, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
        assert(!unique[name], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
        unique[name] = true;
        return values[name];
      });
    } else {
      assertArgument(false, "invalid tuple value", "tuple", values);
    }
    assertArgument(coders.length === arrayValues.length, "types/value length mismatch", "tuple", values);
    let staticWriter = new Writer();
    let dynamicWriter = new Writer();
    let updateFuncs = [];
    coders.forEach((coder, index) => {
      let value = arrayValues[index];
      if (coder.dynamic) {
        let dynamicOffset = dynamicWriter.length;
        coder.encode(dynamicWriter, value);
        let updateFunc = staticWriter.writeUpdatableValue();
        updateFuncs.push((baseOffset) => {
          updateFunc(baseOffset + dynamicOffset);
        });
      } else {
        coder.encode(staticWriter, value);
      }
    });
    updateFuncs.forEach((func) => {
      func(staticWriter.length);
    });
    let length = writer.appendWriter(staticWriter);
    length += writer.appendWriter(dynamicWriter);
    return length;
  }
  function unpack(reader, coders) {
    let values = [];
    let keys = [];
    let baseReader = reader.subReader(0);
    coders.forEach((coder) => {
      let value = null;
      if (coder.dynamic) {
        let offset = reader.readIndex();
        let offsetReader = baseReader.subReader(offset);
        try {
          value = coder.decode(offsetReader);
        } catch (error) {
          if (isError(error, "BUFFER_OVERRUN")) {
            throw error;
          }
          value = error;
          value.baseType = coder.name;
          value.name = coder.localName;
          value.type = coder.type;
        }
      } else {
        try {
          value = coder.decode(reader);
        } catch (error) {
          if (isError(error, "BUFFER_OVERRUN")) {
            throw error;
          }
          value = error;
          value.baseType = coder.name;
          value.name = coder.localName;
          value.type = coder.type;
        }
      }
      if (value == void 0) {
        throw new Error("investigate");
      }
      values.push(value);
      keys.push(coder.localName || null);
    });
    return Result.fromItems(values, keys);
  }
  var ArrayCoder = class extends Coder {
    coder;
    length;
    constructor(coder, length, localName) {
      const type = coder.type + "[" + (length >= 0 ? length : "") + "]";
      const dynamic = length === -1 || coder.dynamic;
      super("array", type, localName, dynamic);
      defineProperties(this, { coder, length });
    }
    defaultValue() {
      const defaultChild = this.coder.defaultValue();
      const result = [];
      for (let i = 0; i < this.length; i++) {
        result.push(defaultChild);
      }
      return result;
    }
    encode(writer, _value) {
      const value = Typed.dereference(_value, "array");
      if (!Array.isArray(value)) {
        this._throwError("expected array value", value);
      }
      let count = this.length;
      if (count === -1) {
        count = value.length;
        writer.writeValue(value.length);
      }
      assertArgumentCount(value.length, count, "coder array" + (this.localName ? " " + this.localName : ""));
      let coders = [];
      for (let i = 0; i < value.length; i++) {
        coders.push(this.coder);
      }
      return pack(writer, coders, value);
    }
    decode(reader) {
      let count = this.length;
      if (count === -1) {
        count = reader.readIndex();
        assert(count * WordSize <= reader.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: reader.bytes, offset: count * WordSize, length: reader.dataLength });
      }
      let coders = [];
      for (let i = 0; i < count; i++) {
        coders.push(new AnonymousCoder(this.coder));
      }
      return unpack(reader, coders);
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/boolean.js
  var BooleanCoder = class extends Coder {
    constructor(localName) {
      super("bool", "bool", localName, false);
    }
    defaultValue() {
      return false;
    }
    encode(writer, _value) {
      const value = Typed.dereference(_value, "bool");
      return writer.writeValue(value ? 1 : 0);
    }
    decode(reader) {
      return !!reader.readValue();
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/bytes.js
  var DynamicBytesCoder = class extends Coder {
    constructor(type, localName) {
      super(type, type, localName, true);
    }
    defaultValue() {
      return "0x";
    }
    encode(writer, value) {
      value = getBytesCopy(value);
      let length = writer.writeValue(value.length);
      length += writer.writeBytes(value);
      return length;
    }
    decode(reader) {
      return reader.readBytes(reader.readIndex(), true);
    }
  };
  var BytesCoder = class extends DynamicBytesCoder {
    constructor(localName) {
      super("bytes", localName);
    }
    decode(reader) {
      return hexlify(super.decode(reader));
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/fixed-bytes.js
  var FixedBytesCoder = class extends Coder {
    size;
    constructor(size, localName) {
      let name = "bytes" + String(size);
      super(name, name, localName, false);
      defineProperties(this, { size }, { size: "number" });
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
    }
    encode(writer, _value) {
      let data = getBytesCopy(Typed.dereference(_value, this.type));
      if (data.length !== this.size) {
        this._throwError("incorrect data length", _value);
      }
      return writer.writeBytes(data);
    }
    decode(reader) {
      return hexlify(reader.readBytes(this.size));
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/null.js
  var Empty = new Uint8Array([]);
  var NullCoder = class extends Coder {
    constructor(localName) {
      super("null", "", localName, false);
    }
    defaultValue() {
      return null;
    }
    encode(writer, value) {
      if (value != null) {
        this._throwError("not null", value);
      }
      return writer.writeBytes(Empty);
    }
    decode(reader) {
      reader.readBytes(0);
      return null;
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/number.js
  var BN_05 = BigInt(0);
  var BN_13 = BigInt(1);
  var BN_MAX_UINT256 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  var NumberCoder = class extends Coder {
    size;
    signed;
    constructor(size, signed, localName) {
      const name = (signed ? "int" : "uint") + size * 8;
      super(name, name, localName, false);
      defineProperties(this, { size, signed }, { size: "number", signed: "boolean" });
    }
    defaultValue() {
      return 0;
    }
    encode(writer, _value) {
      let value = getBigInt(Typed.dereference(_value, this.type));
      let maxUintValue = mask(BN_MAX_UINT256, WordSize * 8);
      if (this.signed) {
        let bounds = mask(maxUintValue, this.size * 8 - 1);
        if (value > bounds || value < -(bounds + BN_13)) {
          this._throwError("value out-of-bounds", _value);
        }
        value = toTwos(value, 8 * WordSize);
      } else if (value < BN_05 || value > mask(maxUintValue, this.size * 8)) {
        this._throwError("value out-of-bounds", _value);
      }
      return writer.writeValue(value);
    }
    decode(reader) {
      let value = mask(reader.readValue(), this.size * 8);
      if (this.signed) {
        value = fromTwos(value, this.size * 8);
      }
      return value;
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/string.js
  var StringCoder = class extends DynamicBytesCoder {
    constructor(localName) {
      super("string", localName);
    }
    defaultValue() {
      return "";
    }
    encode(writer, _value) {
      return super.encode(writer, toUtf8Bytes(Typed.dereference(_value, "string")));
    }
    decode(reader) {
      return toUtf8String(super.decode(reader));
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/tuple.js
  var TupleCoder = class extends Coder {
    coders;
    constructor(coders, localName) {
      let dynamic = false;
      const types = [];
      coders.forEach((coder) => {
        if (coder.dynamic) {
          dynamic = true;
        }
        types.push(coder.type);
      });
      const type = "tuple(" + types.join(",") + ")";
      super("tuple", type, localName, dynamic);
      defineProperties(this, { coders: Object.freeze(coders.slice()) });
    }
    defaultValue() {
      const values = [];
      this.coders.forEach((coder) => {
        values.push(coder.defaultValue());
      });
      const uniqueNames = this.coders.reduce((accum, coder) => {
        const name = coder.localName;
        if (name) {
          if (!accum[name]) {
            accum[name] = 0;
          }
          accum[name]++;
        }
        return accum;
      }, {});
      this.coders.forEach((coder, index) => {
        let name = coder.localName;
        if (!name || uniqueNames[name] !== 1) {
          return;
        }
        if (name === "length") {
          name = "_length";
        }
        if (values[name] != null) {
          return;
        }
        values[name] = values[index];
      });
      return Object.freeze(values);
    }
    encode(writer, _value) {
      const value = Typed.dereference(_value, "tuple");
      return pack(writer, this.coders, value);
    }
    decode(reader) {
      return unpack(reader, this.coders);
    }
  };

  // node_modules/ethers/lib.esm/transaction/accesslist.js
  function accessSetify(addr, storageKeys) {
    return {
      address: getAddress(addr),
      storageKeys: storageKeys.map((storageKey, index) => {
        assertArgument(isHexString(storageKey, 32), "invalid slot", `storageKeys[${index}]`, storageKey);
        return storageKey.toLowerCase();
      })
    };
  }
  function accessListify(value) {
    if (Array.isArray(value)) {
      return value.map((set, index) => {
        if (Array.isArray(set)) {
          assertArgument(set.length === 2, "invalid slot set", `value[${index}]`, set);
          return accessSetify(set[0], set[1]);
        }
        assertArgument(set != null && typeof set === "object", "invalid address-slot set", "value", value);
        return accessSetify(set.address, set.storageKeys);
      });
    }
    assertArgument(value != null && typeof value === "object", "invalid access list", "value", value);
    const result = Object.keys(value).map((addr) => {
      const storageKeys = value[addr].reduce((accum, storageKey) => {
        accum[storageKey] = true;
        return accum;
      }, {});
      return accessSetify(addr, Object.keys(storageKeys).sort());
    });
    result.sort((a, b2) => a.address.localeCompare(b2.address));
    return result;
  }

  // node_modules/ethers/lib.esm/transaction/authorization.js
  function authorizationify(auth) {
    return {
      address: getAddress(auth.address),
      nonce: getBigInt(auth.nonce != null ? auth.nonce : 0),
      chainId: getBigInt(auth.chainId != null ? auth.chainId : 0),
      signature: Signature.from(auth.signature)
    };
  }

  // node_modules/ethers/lib.esm/transaction/address.js
  function computeAddress(key) {
    let pubkey;
    if (typeof key === "string") {
      pubkey = SigningKey.computePublicKey(key, false);
    } else {
      pubkey = key.publicKey;
    }
    return getAddress(keccak256("0x" + pubkey.substring(4)).substring(26));
  }
  function recoverAddress(digest, signature) {
    return computeAddress(SigningKey.recoverPublicKey(digest, signature));
  }

  // node_modules/ethers/lib.esm/transaction/transaction.js
  var BN_06 = BigInt(0);
  var BN_22 = BigInt(2);
  var BN_272 = BigInt(27);
  var BN_282 = BigInt(28);
  var BN_352 = BigInt(35);
  var BN_MAX_UINT = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  var inspect2 = Symbol.for("nodejs.util.inspect.custom");
  var BLOB_SIZE = 4096 * 32;
  var CELL_COUNT = 128;
  function getKzgLibrary(kzg) {
    const blobToKzgCommitment = (blob) => {
      if ("computeBlobProof" in kzg) {
        if ("blobToKzgCommitment" in kzg && typeof kzg.blobToKzgCommitment === "function") {
          return getBytes(kzg.blobToKzgCommitment(hexlify(blob)));
        }
      } else if ("blobToKzgCommitment" in kzg && typeof kzg.blobToKzgCommitment === "function") {
        return getBytes(kzg.blobToKzgCommitment(blob));
      }
      if ("blobToKZGCommitment" in kzg && typeof kzg.blobToKZGCommitment === "function") {
        return getBytes(kzg.blobToKZGCommitment(hexlify(blob)));
      }
      assertArgument(false, "unsupported KZG library", "kzg", kzg);
    };
    const computeBlobKzgProof = (blob, commitment) => {
      if ("computeBlobProof" in kzg && typeof kzg.computeBlobProof === "function") {
        return getBytes(kzg.computeBlobProof(hexlify(blob), hexlify(commitment)));
      }
      if ("computeBlobKzgProof" in kzg && typeof kzg.computeBlobKzgProof === "function") {
        return kzg.computeBlobKzgProof(blob, commitment);
      }
      if ("computeBlobKZGProof" in kzg && typeof kzg.computeBlobKZGProof === "function") {
        return getBytes(kzg.computeBlobKZGProof(hexlify(blob), hexlify(commitment)));
      }
      assertArgument(false, "unsupported KZG library", "kzg", kzg);
    };
    return { blobToKzgCommitment, computeBlobKzgProof };
  }
  function getVersionedHash(version2, hash3) {
    let versioned = version2.toString(16);
    while (versioned.length < 2) {
      versioned = "0" + versioned;
    }
    versioned += sha2562(hash3).substring(4);
    return "0x" + versioned;
  }
  function handleAddress(value) {
    if (value === "0x") {
      return null;
    }
    return getAddress(value);
  }
  function handleAccessList(value, param) {
    try {
      return accessListify(value);
    } catch (error) {
      assertArgument(false, error.message, param, value);
    }
  }
  function handleAuthorizationList(value, param) {
    try {
      if (!Array.isArray(value)) {
        throw new Error("authorizationList: invalid array");
      }
      const result = [];
      for (let i = 0; i < value.length; i++) {
        const auth = value[i];
        if (!Array.isArray(auth)) {
          throw new Error(`authorization[${i}]: invalid array`);
        }
        if (auth.length !== 6) {
          throw new Error(`authorization[${i}]: wrong length`);
        }
        if (!auth[1]) {
          throw new Error(`authorization[${i}]: null address`);
        }
        result.push({
          address: handleAddress(auth[1]),
          nonce: handleUint(auth[2], "nonce"),
          chainId: handleUint(auth[0], "chainId"),
          signature: Signature.from({
            yParity: handleNumber(auth[3], "yParity"),
            r: zeroPadValue(auth[4], 32),
            s: zeroPadValue(auth[5], 32)
          })
        });
      }
      return result;
    } catch (error) {
      assertArgument(false, error.message, param, value);
    }
  }
  function handleNumber(_value, param) {
    if (_value === "0x") {
      return 0;
    }
    return getNumber(_value, param);
  }
  function handleUint(_value, param) {
    if (_value === "0x") {
      return BN_06;
    }
    const value = getBigInt(_value, param);
    assertArgument(value <= BN_MAX_UINT, "value exceeds uint size", param, value);
    return value;
  }
  function formatNumber(_value, name) {
    const value = getBigInt(_value, "value");
    const result = toBeArray(value);
    assertArgument(result.length <= 32, `value too large`, `tx.${name}`, value);
    return result;
  }
  function formatAccessList(value) {
    return accessListify(value).map((set) => [set.address, set.storageKeys]);
  }
  function formatAuthorizationList(value) {
    return value.map((a) => {
      return [
        formatNumber(a.chainId, "chainId"),
        a.address,
        formatNumber(a.nonce, "nonce"),
        formatNumber(a.signature.yParity, "yParity"),
        toBeArray(a.signature.r),
        toBeArray(a.signature._s)
      ];
    });
  }
  function formatHashes(value, param) {
    assertArgument(Array.isArray(value), `invalid ${param}`, "value", value);
    for (let i = 0; i < value.length; i++) {
      assertArgument(isHexString(value[i], 32), "invalid ${ param } hash", `value[${i}]`, value[i]);
    }
    return value;
  }
  function _parseLegacy(data) {
    const fields = decodeRlp(data);
    assertArgument(Array.isArray(fields) && (fields.length === 9 || fields.length === 6), "invalid field count for legacy transaction", "data", data);
    const tx = {
      type: 0,
      nonce: handleNumber(fields[0], "nonce"),
      gasPrice: handleUint(fields[1], "gasPrice"),
      gasLimit: handleUint(fields[2], "gasLimit"),
      to: handleAddress(fields[3]),
      value: handleUint(fields[4], "value"),
      data: hexlify(fields[5]),
      chainId: BN_06
    };
    if (fields.length === 6) {
      return tx;
    }
    const v = handleUint(fields[6], "v");
    const r = handleUint(fields[7], "r");
    const s = handleUint(fields[8], "s");
    if (r === BN_06 && s === BN_06) {
      tx.chainId = v;
    } else {
      let chainId = (v - BN_352) / BN_22;
      if (chainId < BN_06) {
        chainId = BN_06;
      }
      tx.chainId = chainId;
      assertArgument(chainId !== BN_06 || (v === BN_272 || v === BN_282), "non-canonical legacy v", "v", fields[6]);
      tx.signature = Signature.from({
        r: zeroPadValue(fields[7], 32),
        s: zeroPadValue(fields[8], 32),
        v
      });
    }
    return tx;
  }
  function _serializeLegacy(tx, sig) {
    const fields = [
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.gasPrice || 0, "gasPrice"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || "0x",
      formatNumber(tx.value, "value"),
      tx.data
    ];
    let chainId = BN_06;
    if (tx.chainId != BN_06) {
      chainId = getBigInt(tx.chainId, "tx.chainId");
      assertArgument(!sig || sig.networkV == null || sig.legacyChainId === chainId, "tx.chainId/sig.v mismatch", "sig", sig);
    } else if (tx.signature) {
      const legacy = tx.signature.legacyChainId;
      if (legacy != null) {
        chainId = legacy;
      }
    }
    if (!sig) {
      if (chainId !== BN_06) {
        fields.push(toBeArray(chainId));
        fields.push("0x");
        fields.push("0x");
      }
      return encodeRlp(fields);
    }
    let v = BigInt(27 + sig.yParity);
    if (chainId !== BN_06) {
      v = Signature.getChainIdV(chainId, sig.v);
    } else if (BigInt(sig.v) !== v) {
      assertArgument(false, "tx.chainId/sig.v mismatch", "sig", sig);
    }
    fields.push(toBeArray(v));
    fields.push(toBeArray(sig.r));
    fields.push(toBeArray(sig._s));
    return encodeRlp(fields);
  }
  function _parseEipSignature(tx, fields) {
    let yParity;
    try {
      yParity = handleNumber(fields[0], "yParity");
      if (yParity !== 0 && yParity !== 1) {
        throw new Error("bad yParity");
      }
    } catch (error) {
      assertArgument(false, "invalid yParity", "yParity", fields[0]);
    }
    const r = zeroPadValue(fields[1], 32);
    const s = zeroPadValue(fields[2], 32);
    const signature = Signature.from({ r, s, yParity });
    tx.signature = signature;
  }
  function _parseEip1559(data) {
    const fields = decodeRlp(getBytes(data).slice(1));
    assertArgument(Array.isArray(fields) && (fields.length === 9 || fields.length === 12), "invalid field count for transaction type: 2", "data", hexlify(data));
    const tx = {
      type: 2,
      chainId: handleUint(fields[0], "chainId"),
      nonce: handleNumber(fields[1], "nonce"),
      maxPriorityFeePerGas: handleUint(fields[2], "maxPriorityFeePerGas"),
      maxFeePerGas: handleUint(fields[3], "maxFeePerGas"),
      gasPrice: null,
      gasLimit: handleUint(fields[4], "gasLimit"),
      to: handleAddress(fields[5]),
      value: handleUint(fields[6], "value"),
      data: hexlify(fields[7]),
      accessList: handleAccessList(fields[8], "accessList")
    };
    if (fields.length === 9) {
      return tx;
    }
    _parseEipSignature(tx, fields.slice(9));
    return tx;
  }
  function _serializeEip1559(tx, sig) {
    const fields = [
      formatNumber(tx.chainId, "chainId"),
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
      formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || "0x",
      formatNumber(tx.value, "value"),
      tx.data,
      formatAccessList(tx.accessList || [])
    ];
    if (sig) {
      fields.push(formatNumber(sig.yParity, "yParity"));
      fields.push(toBeArray(sig.r));
      fields.push(toBeArray(sig.s));
    }
    return concat(["0x02", encodeRlp(fields)]);
  }
  function _parseEip2930(data) {
    const fields = decodeRlp(getBytes(data).slice(1));
    assertArgument(Array.isArray(fields) && (fields.length === 8 || fields.length === 11), "invalid field count for transaction type: 1", "data", hexlify(data));
    const tx = {
      type: 1,
      chainId: handleUint(fields[0], "chainId"),
      nonce: handleNumber(fields[1], "nonce"),
      gasPrice: handleUint(fields[2], "gasPrice"),
      gasLimit: handleUint(fields[3], "gasLimit"),
      to: handleAddress(fields[4]),
      value: handleUint(fields[5], "value"),
      data: hexlify(fields[6]),
      accessList: handleAccessList(fields[7], "accessList")
    };
    if (fields.length === 8) {
      return tx;
    }
    _parseEipSignature(tx, fields.slice(8));
    return tx;
  }
  function _serializeEip2930(tx, sig) {
    const fields = [
      formatNumber(tx.chainId, "chainId"),
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.gasPrice || 0, "gasPrice"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || "0x",
      formatNumber(tx.value, "value"),
      tx.data,
      formatAccessList(tx.accessList || [])
    ];
    if (sig) {
      fields.push(formatNumber(sig.yParity, "recoveryParam"));
      fields.push(toBeArray(sig.r));
      fields.push(toBeArray(sig.s));
    }
    return concat(["0x01", encodeRlp(fields)]);
  }
  function _parseEip4844(data) {
    let fields = decodeRlp(getBytes(data).slice(1));
    let typeName = "3";
    let blobWrapperVersion = null;
    let blobs = null;
    if (fields.length === 4 && Array.isArray(fields[0])) {
      typeName = "3 (network format)";
      const fBlobs = fields[1], fCommits = fields[2], fProofs = fields[3];
      assertArgument(Array.isArray(fBlobs), "invalid network format: blobs not an array", "fields[1]", fBlobs);
      assertArgument(Array.isArray(fCommits), "invalid network format: commitments not an array", "fields[2]", fCommits);
      assertArgument(Array.isArray(fProofs), "invalid network format: proofs not an array", "fields[3]", fProofs);
      assertArgument(fBlobs.length === fCommits.length, "invalid network format: blobs/commitments length mismatch", "fields", fields);
      assertArgument(fBlobs.length === fProofs.length, "invalid network format: blobs/proofs length mismatch", "fields", fields);
      blobs = [];
      for (let i = 0; i < fields[1].length; i++) {
        blobs.push({
          data: fBlobs[i],
          commitment: fCommits[i],
          proof: fProofs[i]
        });
      }
      fields = fields[0];
    } else if (fields.length === 5 && Array.isArray(fields[0])) {
      typeName = "3 (EIP-7594 network format)";
      blobWrapperVersion = getNumber(fields[1]);
      const fBlobs = fields[2], fCommits = fields[3], fProofs = fields[4];
      assertArgument(blobWrapperVersion === 1, `unsupported EIP-7594 network format version: ${blobWrapperVersion}`, "fields[1]", blobWrapperVersion);
      assertArgument(Array.isArray(fBlobs), "invalid EIP-7594 network format: blobs not an array", "fields[2]", fBlobs);
      assertArgument(Array.isArray(fCommits), "invalid EIP-7594 network format: commitments not an array", "fields[3]", fCommits);
      assertArgument(Array.isArray(fProofs), "invalid EIP-7594 network format: proofs not an array", "fields[4]", fProofs);
      assertArgument(fBlobs.length === fCommits.length, "invalid network format: blobs/commitments length mismatch", "fields", fields);
      assertArgument(fBlobs.length * CELL_COUNT === fProofs.length, "invalid network format: blobs/proofs length mismatch", "fields", fields);
      blobs = [];
      for (let i = 0; i < fBlobs.length; i++) {
        const proof = [];
        for (let j = 0; j < CELL_COUNT; j++) {
          proof.push(fProofs[i * CELL_COUNT + j]);
        }
        blobs.push({
          data: fBlobs[i],
          commitment: fCommits[i],
          proof: concat(proof)
        });
      }
      fields = fields[0];
    }
    assertArgument(Array.isArray(fields) && (fields.length === 11 || fields.length === 14), `invalid field count for transaction type: ${typeName}`, "data", hexlify(data));
    const tx = {
      type: 3,
      chainId: handleUint(fields[0], "chainId"),
      nonce: handleNumber(fields[1], "nonce"),
      maxPriorityFeePerGas: handleUint(fields[2], "maxPriorityFeePerGas"),
      maxFeePerGas: handleUint(fields[3], "maxFeePerGas"),
      gasPrice: null,
      gasLimit: handleUint(fields[4], "gasLimit"),
      to: handleAddress(fields[5]),
      value: handleUint(fields[6], "value"),
      data: hexlify(fields[7]),
      accessList: handleAccessList(fields[8], "accessList"),
      maxFeePerBlobGas: handleUint(fields[9], "maxFeePerBlobGas"),
      blobVersionedHashes: fields[10],
      blobWrapperVersion
    };
    if (blobs) {
      tx.blobs = blobs;
    }
    assertArgument(tx.to != null, `invalid address for transaction type: ${typeName}`, "data", data);
    assertArgument(Array.isArray(tx.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", data);
    for (let i = 0; i < tx.blobVersionedHashes.length; i++) {
      assertArgument(isHexString(tx.blobVersionedHashes[i], 32), `invalid blobVersionedHash at index ${i}: must be length 32`, "data", data);
    }
    if (fields.length === 11) {
      return tx;
    }
    _parseEipSignature(tx, fields.slice(11));
    return tx;
  }
  function _serializeEip4844(tx, sig, blobs) {
    const fields = [
      formatNumber(tx.chainId, "chainId"),
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
      formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || ZeroAddress,
      formatNumber(tx.value, "value"),
      tx.data,
      formatAccessList(tx.accessList || []),
      formatNumber(tx.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
      formatHashes(tx.blobVersionedHashes || [], "blobVersionedHashes")
    ];
    if (sig) {
      fields.push(formatNumber(sig.yParity, "yParity"));
      fields.push(toBeArray(sig.r));
      fields.push(toBeArray(sig.s));
      if (blobs) {
        if (tx.blobWrapperVersion != null) {
          const wrapperVersion = toBeArray(tx.blobWrapperVersion);
          const cellProofs = [];
          for (const { proof } of blobs) {
            const p = getBytes(proof);
            const cellSize = p.length / CELL_COUNT;
            for (let i = 0; i < p.length; i += cellSize) {
              cellProofs.push(p.subarray(i, i + cellSize));
            }
          }
          return concat([
            "0x03",
            encodeRlp([
              fields,
              wrapperVersion,
              blobs.map((b2) => b2.data),
              blobs.map((b2) => b2.commitment),
              cellProofs
            ])
          ]);
        }
        return concat([
          "0x03",
          encodeRlp([
            fields,
            blobs.map((b2) => b2.data),
            blobs.map((b2) => b2.commitment),
            blobs.map((b2) => b2.proof)
          ])
        ]);
      }
    }
    return concat(["0x03", encodeRlp(fields)]);
  }
  function _parseEip7702(data) {
    const fields = decodeRlp(getBytes(data).slice(1));
    assertArgument(Array.isArray(fields) && (fields.length === 10 || fields.length === 13), "invalid field count for transaction type: 4", "data", hexlify(data));
    const tx = {
      type: 4,
      chainId: handleUint(fields[0], "chainId"),
      nonce: handleNumber(fields[1], "nonce"),
      maxPriorityFeePerGas: handleUint(fields[2], "maxPriorityFeePerGas"),
      maxFeePerGas: handleUint(fields[3], "maxFeePerGas"),
      gasPrice: null,
      gasLimit: handleUint(fields[4], "gasLimit"),
      to: handleAddress(fields[5]),
      value: handleUint(fields[6], "value"),
      data: hexlify(fields[7]),
      accessList: handleAccessList(fields[8], "accessList"),
      authorizationList: handleAuthorizationList(fields[9], "authorizationList")
    };
    if (fields.length === 10) {
      return tx;
    }
    _parseEipSignature(tx, fields.slice(10));
    return tx;
  }
  function _serializeEip7702(tx, sig) {
    const fields = [
      formatNumber(tx.chainId, "chainId"),
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
      formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || "0x",
      formatNumber(tx.value, "value"),
      tx.data,
      formatAccessList(tx.accessList || []),
      formatAuthorizationList(tx.authorizationList || [])
    ];
    if (sig) {
      fields.push(formatNumber(sig.yParity, "yParity"));
      fields.push(toBeArray(sig.r));
      fields.push(toBeArray(sig.s));
    }
    return concat(["0x04", encodeRlp(fields)]);
  }
  var Transaction = class _Transaction {
    #type;
    #to;
    #data;
    #nonce;
    #gasLimit;
    #gasPrice;
    #maxPriorityFeePerGas;
    #maxFeePerGas;
    #value;
    #chainId;
    #sig;
    #accessList;
    #maxFeePerBlobGas;
    #blobVersionedHashes;
    #kzg;
    #blobs;
    #auths;
    #blobWrapperVersion;
    /**
     *  The transaction type.
     *
     *  If null, the type will be automatically inferred based on
     *  explicit properties.
     */
    get type() {
      return this.#type;
    }
    set type(value) {
      switch (value) {
        case null:
          this.#type = null;
          break;
        case 0:
        case "legacy":
          this.#type = 0;
          break;
        case 1:
        case "berlin":
        case "eip-2930":
          this.#type = 1;
          break;
        case 2:
        case "london":
        case "eip-1559":
          this.#type = 2;
          break;
        case 3:
        case "cancun":
        case "eip-4844":
          this.#type = 3;
          break;
        case 4:
        case "pectra":
        case "eip-7702":
          this.#type = 4;
          break;
        default:
          assertArgument(false, "unsupported transaction type", "type", value);
      }
    }
    /**
     *  The name of the transaction type.
     */
    get typeName() {
      switch (this.type) {
        case 0:
          return "legacy";
        case 1:
          return "eip-2930";
        case 2:
          return "eip-1559";
        case 3:
          return "eip-4844";
        case 4:
          return "eip-7702";
      }
      return null;
    }
    /**
     *  The ``to`` address for the transaction or ``null`` if the
     *  transaction is an ``init`` transaction.
     */
    get to() {
      const value = this.#to;
      if (value == null && this.type === 3) {
        return ZeroAddress;
      }
      return value;
    }
    set to(value) {
      this.#to = value == null ? null : getAddress(value);
    }
    /**
     *  The transaction nonce.
     */
    get nonce() {
      return this.#nonce;
    }
    set nonce(value) {
      this.#nonce = getNumber(value, "value");
    }
    /**
     *  The gas limit.
     */
    get gasLimit() {
      return this.#gasLimit;
    }
    set gasLimit(value) {
      this.#gasLimit = getBigInt(value);
    }
    /**
     *  The gas price.
     *
     *  On legacy networks this defines the fee that will be paid. On
     *  EIP-1559 networks, this should be ``null``.
     */
    get gasPrice() {
      const value = this.#gasPrice;
      if (value == null && (this.type === 0 || this.type === 1)) {
        return BN_06;
      }
      return value;
    }
    set gasPrice(value) {
      this.#gasPrice = value == null ? null : getBigInt(value, "gasPrice");
    }
    /**
     *  The maximum priority fee per unit of gas to pay. On legacy
     *  networks this should be ``null``.
     */
    get maxPriorityFeePerGas() {
      const value = this.#maxPriorityFeePerGas;
      if (value == null) {
        if (this.type === 2 || this.type === 3) {
          return BN_06;
        }
        return null;
      }
      return value;
    }
    set maxPriorityFeePerGas(value) {
      this.#maxPriorityFeePerGas = value == null ? null : getBigInt(value, "maxPriorityFeePerGas");
    }
    /**
     *  The maximum total fee per unit of gas to pay. On legacy
     *  networks this should be ``null``.
     */
    get maxFeePerGas() {
      const value = this.#maxFeePerGas;
      if (value == null) {
        if (this.type === 2 || this.type === 3) {
          return BN_06;
        }
        return null;
      }
      return value;
    }
    set maxFeePerGas(value) {
      this.#maxFeePerGas = value == null ? null : getBigInt(value, "maxFeePerGas");
    }
    /**
     *  The transaction data. For ``init`` transactions this is the
     *  deployment code.
     */
    get data() {
      return this.#data;
    }
    set data(value) {
      this.#data = hexlify(value);
    }
    /**
     *  The amount of ether (in wei) to send in this transactions.
     */
    get value() {
      return this.#value;
    }
    set value(value) {
      this.#value = getBigInt(value, "value");
    }
    /**
     *  The chain ID this transaction is valid on.
     */
    get chainId() {
      return this.#chainId;
    }
    set chainId(value) {
      this.#chainId = getBigInt(value);
    }
    /**
     *  If signed, the signature for this transaction.
     */
    get signature() {
      return this.#sig || null;
    }
    set signature(value) {
      this.#sig = value == null ? null : Signature.from(value);
    }
    isValid() {
      const sig = this.signature;
      if (sig && !sig.isValid()) {
        return false;
      }
      const auths = this.authorizationList;
      if (auths) {
        for (const auth of auths) {
          if (!auth.signature.isValid()) {
            return false;
          }
        }
      }
      return true;
    }
    /**
     *  The access list.
     *
     *  An access list permits discounted (but pre-paid) access to
     *  bytecode and state variable access within contract execution.
     */
    get accessList() {
      const value = this.#accessList || null;
      if (value == null) {
        if (this.type === 1 || this.type === 2 || this.type === 3) {
          return [];
        }
        return null;
      }
      return value;
    }
    set accessList(value) {
      this.#accessList = value == null ? null : accessListify(value);
    }
    get authorizationList() {
      const value = this.#auths || null;
      if (value == null) {
        if (this.type === 4) {
          return [];
        }
      }
      return value;
    }
    set authorizationList(auths) {
      this.#auths = auths == null ? null : auths.map((a) => authorizationify(a));
    }
    /**
     *  The max fee per blob gas for Cancun transactions.
     */
    get maxFeePerBlobGas() {
      const value = this.#maxFeePerBlobGas;
      if (value == null && this.type === 3) {
        return BN_06;
      }
      return value;
    }
    set maxFeePerBlobGas(value) {
      this.#maxFeePerBlobGas = value == null ? null : getBigInt(value, "maxFeePerBlobGas");
    }
    /**
     *  The BLOb versioned hashes for Cancun transactions.
     */
    get blobVersionedHashes() {
      let value = this.#blobVersionedHashes;
      if (value == null && this.type === 3) {
        return [];
      }
      return value;
    }
    set blobVersionedHashes(value) {
      if (value != null) {
        assertArgument(Array.isArray(value), "blobVersionedHashes must be an Array", "value", value);
        value = value.slice();
        for (let i = 0; i < value.length; i++) {
          assertArgument(isHexString(value[i], 32), "invalid blobVersionedHash", `value[${i}]`, value[i]);
        }
      }
      this.#blobVersionedHashes = value;
    }
    /**
     *  The BLObs for the Transaction, if any.
     *
     *  If ``blobs`` is non-``null``, then the [[seriailized]]
     *  will return the network formatted sidecar, otherwise it
     *  will return the standard [[link-eip-2718]] payload. The
     *  [[unsignedSerialized]] is unaffected regardless.
     *
     *  When setting ``blobs``, either fully valid [[Blob]] objects
     *  may be specified (i.e. correctly padded, with correct
     *  committments and proofs) or a raw [[BytesLike]] may
     *  be provided.
     *
     *  If raw [[BytesLike]] are provided, the [[kzg]] property **must**
     *  be already set. The blob will be correctly padded and the
     *  [[KzgLibrary]] will be used to compute the committment and
     *  proof for the blob.
     *
     *  A BLOb is a sequence of field elements, each of which must
     *  be within the BLS field modulo, so some additional processing
     *  may be required to encode arbitrary data to ensure each 32 byte
     *  field is within the valid range.
     *
     *  Setting this automatically populates [[blobVersionedHashes]],
     *  overwriting any existing values. Setting this to ``null``
     *  does **not** remove the [[blobVersionedHashes]], leaving them
     *  present.
     */
    get blobs() {
      if (this.#blobs == null) {
        return null;
      }
      return this.#blobs.map((b2) => Object.assign({}, b2));
    }
    set blobs(_blobs) {
      if (_blobs == null) {
        this.#blobs = null;
        return;
      }
      const blobs = [];
      const versionedHashes = [];
      for (let i = 0; i < _blobs.length; i++) {
        const blob = _blobs[i];
        if (isBytesLike(blob)) {
          assert(this.#kzg, "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
            operation: "set blobs()"
          });
          let data = getBytes(blob);
          assertArgument(data.length <= BLOB_SIZE, "blob is too large", `blobs[${i}]`, blob);
          if (data.length !== BLOB_SIZE) {
            const padded = new Uint8Array(BLOB_SIZE);
            padded.set(data);
            data = padded;
          }
          const commit = this.#kzg.blobToKzgCommitment(data);
          const proof = hexlify(this.#kzg.computeBlobKzgProof(data, commit));
          blobs.push({
            data: hexlify(data),
            commitment: hexlify(commit),
            proof
          });
          versionedHashes.push(getVersionedHash(1, commit));
        } else {
          const data = hexlify(blob.data);
          const commitment = hexlify(blob.commitment);
          const proof = hexlify(blob.proof);
          blobs.push({ data, commitment, proof });
          versionedHashes.push(getVersionedHash(1, commitment));
        }
      }
      this.#blobs = blobs;
      this.#blobVersionedHashes = versionedHashes;
    }
    get kzg() {
      return this.#kzg;
    }
    set kzg(kzg) {
      if (kzg == null) {
        this.#kzg = null;
      } else {
        this.#kzg = getKzgLibrary(kzg);
      }
    }
    get blobWrapperVersion() {
      return this.#blobWrapperVersion;
    }
    set blobWrapperVersion(value) {
      this.#blobWrapperVersion = value;
    }
    /**
     *  Creates a new Transaction with default values.
     */
    constructor() {
      this.#type = null;
      this.#to = null;
      this.#nonce = 0;
      this.#gasLimit = BN_06;
      this.#gasPrice = null;
      this.#maxPriorityFeePerGas = null;
      this.#maxFeePerGas = null;
      this.#data = "0x";
      this.#value = BN_06;
      this.#chainId = BN_06;
      this.#sig = null;
      this.#accessList = null;
      this.#maxFeePerBlobGas = null;
      this.#blobVersionedHashes = null;
      this.#kzg = null;
      this.#blobs = null;
      this.#auths = null;
      this.#blobWrapperVersion = null;
    }
    /**
     *  The transaction hash, if signed. Otherwise, ``null``.
     */
    get hash() {
      if (this.signature == null) {
        return null;
      }
      return keccak256(this.#getSerialized(true, false));
    }
    /**
     *  The pre-image hash of this transaction.
     *
     *  This is the digest that a [[Signer]] must sign to authorize
     *  this transaction.
     */
    get unsignedHash() {
      return keccak256(this.unsignedSerialized);
    }
    /**
     *  The sending address, if signed. Otherwise, ``null``.
     */
    get from() {
      if (this.signature == null) {
        return null;
      }
      return recoverAddress(this.unsignedHash, this.signature.getCanonical());
    }
    /**
     *  The public key of the sender, if signed. Otherwise, ``null``.
     */
    get fromPublicKey() {
      if (this.signature == null) {
        return null;
      }
      return SigningKey.recoverPublicKey(this.unsignedHash, this.signature.getCanonical());
    }
    /**
     *  Returns true if signed.
     *
     *  This provides a Type Guard that properties requiring a signed
     *  transaction are non-null.
     */
    isSigned() {
      return this.signature != null;
    }
    #getSerialized(signed, sidecar) {
      assert(!signed || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
      const sig = signed ? this.signature : null;
      switch (this.inferType()) {
        case 0:
          return _serializeLegacy(this, sig);
        case 1:
          return _serializeEip2930(this, sig);
        case 2:
          return _serializeEip1559(this, sig);
        case 3:
          return _serializeEip4844(this, sig, sidecar ? this.blobs : null);
        case 4:
          return _serializeEip7702(this, sig);
      }
      assert(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
    }
    /**
     *  The serialized transaction.
     *
     *  This throws if the transaction is unsigned. For the pre-image,
     *  use [[unsignedSerialized]].
     */
    get serialized() {
      return this.#getSerialized(true, true);
    }
    /**
     *  The transaction pre-image.
     *
     *  The hash of this is the digest which needs to be signed to
     *  authorize this transaction.
     */
    get unsignedSerialized() {
      return this.#getSerialized(false, false);
    }
    /**
     *  Return the most "likely" type; currently the highest
     *  supported transaction type.
     */
    inferType() {
      const types = this.inferTypes();
      if (types.indexOf(2) >= 0) {
        return 2;
      }
      return types.pop();
    }
    /**
     *  Validates the explicit properties and returns a list of compatible
     *  transaction types.
     */
    inferTypes() {
      const hasGasPrice = this.gasPrice != null;
      const hasFee = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null;
      const hasAccessList = this.accessList != null;
      const hasBlob = this.#maxFeePerBlobGas != null || this.#blobVersionedHashes;
      if (this.maxFeePerGas != null && this.maxPriorityFeePerGas != null) {
        assert(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this });
      }
      assert(!hasFee || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this });
      assert(this.type !== 0 || !hasAccessList, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
      const types = [];
      if (this.type != null) {
        types.push(this.type);
      } else {
        if (this.authorizationList && this.authorizationList.length) {
          types.push(4);
        } else if (hasFee) {
          types.push(2);
        } else if (hasGasPrice) {
          types.push(1);
          if (!hasAccessList) {
            types.push(0);
          }
        } else if (hasAccessList) {
          types.push(1);
          types.push(2);
        } else if (hasBlob && this.to) {
          types.push(3);
        } else {
          types.push(0);
          types.push(1);
          types.push(2);
          types.push(3);
        }
      }
      types.sort();
      return types;
    }
    /**
     *  Returns true if this transaction is a legacy transaction (i.e.
     *  ``type === 0``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isLegacy() {
      return this.type === 0;
    }
    /**
     *  Returns true if this transaction is berlin hardform transaction (i.e.
     *  ``type === 1``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isBerlin() {
      return this.type === 1;
    }
    /**
     *  Returns true if this transaction is london hardform transaction (i.e.
     *  ``type === 2``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isLondon() {
      return this.type === 2;
    }
    /**
     *  Returns true if this transaction is an [[link-eip-4844]] BLOB
     *  transaction.
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isCancun() {
      return this.type === 3;
    }
    /**
     *  Create a copy of this transaciton.
     */
    clone() {
      return _Transaction.from(this);
    }
    /**
     *  Return a JSON-friendly object.
     */
    toJSON() {
      const s = (v) => {
        if (v == null) {
          return null;
        }
        return v.toString();
      };
      return {
        type: this.type,
        to: this.to,
        //            from: this.from,
        data: this.data,
        nonce: this.nonce,
        gasLimit: s(this.gasLimit),
        gasPrice: s(this.gasPrice),
        maxPriorityFeePerGas: s(this.maxPriorityFeePerGas),
        maxFeePerGas: s(this.maxFeePerGas),
        value: s(this.value),
        chainId: s(this.chainId),
        sig: this.signature ? this.signature.toJSON() : null,
        accessList: this.accessList
      };
    }
    [inspect2]() {
      return this.toString();
    }
    toString() {
      const output2 = [];
      const add3 = (key) => {
        let value = this[key];
        if (typeof value === "string") {
          value = JSON.stringify(value);
        }
        output2.push(`${key}: ${value}`);
      };
      if (this.type) {
        add3("type");
      }
      add3("to");
      add3("data");
      add3("nonce");
      add3("gasLimit");
      add3("value");
      if (this.chainId != null) {
        add3("chainId");
      }
      if (this.signature) {
        add3("from");
        output2.push(`signature: ${this.signature.toString()}`);
      }
      const auths = this.authorizationList;
      if (auths) {
        const outputAuths = [];
        for (const auth of auths) {
          const o = [];
          o.push(`address: ${JSON.stringify(auth.address)}`);
          if (auth.nonce != null) {
            o.push(`nonce: ${auth.nonce}`);
          }
          if (auth.chainId != null) {
            o.push(`chainId: ${auth.chainId}`);
          }
          if (auth.signature) {
            o.push(`signature: ${auth.signature.toString()}`);
          }
          outputAuths.push(`Authorization { ${o.join(", ")} }`);
        }
        output2.push(`authorizations: [ ${outputAuths.join(", ")} ]`);
      }
      return `Transaction { ${output2.join(", ")} }`;
    }
    /**
     *  Create a **Transaction** from a serialized transaction or a
     *  Transaction-like object.
     */
    static from(tx) {
      if (tx == null) {
        return new _Transaction();
      }
      if (typeof tx === "string") {
        const payload = getBytes(tx);
        if (payload[0] >= 127) {
          return _Transaction.from(_parseLegacy(payload));
        }
        switch (payload[0]) {
          case 1:
            return _Transaction.from(_parseEip2930(payload));
          case 2:
            return _Transaction.from(_parseEip1559(payload));
          case 3:
            return _Transaction.from(_parseEip4844(payload));
          case 4:
            return _Transaction.from(_parseEip7702(payload));
        }
        assert(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
      }
      const result = new _Transaction();
      if (tx.type != null) {
        result.type = tx.type;
      }
      if (tx.to != null) {
        result.to = tx.to;
      }
      if (tx.nonce != null) {
        result.nonce = tx.nonce;
      }
      if (tx.gasLimit != null) {
        result.gasLimit = tx.gasLimit;
      }
      if (tx.gasPrice != null) {
        result.gasPrice = tx.gasPrice;
      }
      if (tx.maxPriorityFeePerGas != null) {
        result.maxPriorityFeePerGas = tx.maxPriorityFeePerGas;
      }
      if (tx.maxFeePerGas != null) {
        result.maxFeePerGas = tx.maxFeePerGas;
      }
      if (tx.maxFeePerBlobGas != null) {
        result.maxFeePerBlobGas = tx.maxFeePerBlobGas;
      }
      if (tx.data != null) {
        result.data = tx.data;
      }
      if (tx.value != null) {
        result.value = tx.value;
      }
      if (tx.chainId != null) {
        result.chainId = tx.chainId;
      }
      if (tx.signature != null) {
        result.signature = Signature.from(tx.signature);
      }
      if (tx.accessList != null) {
        result.accessList = tx.accessList;
      }
      if (tx.authorizationList != null) {
        result.authorizationList = tx.authorizationList;
      }
      if (tx.blobVersionedHashes != null) {
        result.blobVersionedHashes = tx.blobVersionedHashes;
      }
      if (tx.kzg != null) {
        result.kzg = tx.kzg;
      }
      if (tx.blobWrapperVersion != null) {
        result.blobWrapperVersion = tx.blobWrapperVersion;
      }
      if (tx.blobs != null) {
        result.blobs = tx.blobs;
      }
      if (tx.hash != null) {
        assertArgument(result.isSigned(), "unsigned transaction cannot define '.hash'", "tx", tx);
        assertArgument(result.hash === tx.hash, "hash mismatch", "tx", tx);
      }
      if (tx.from != null) {
        assertArgument(result.isSigned(), "unsigned transaction cannot define '.from'", "tx", tx);
        assertArgument(result.from.toLowerCase() === (tx.from || "").toLowerCase(), "from mismatch", "tx", tx);
      }
      return result;
    }
  };

  // node_modules/ethers/lib.esm/hash/authorization.js
  function hashAuthorization(auth) {
    assertArgument(typeof auth.address === "string", "invalid address for hashAuthorization", "auth.address", auth);
    return keccak256(concat([
      "0x05",
      encodeRlp([
        auth.chainId != null ? toBeArray(auth.chainId) : "0x",
        getAddress(auth.address),
        auth.nonce != null ? toBeArray(auth.nonce) : "0x"
      ])
    ]));
  }

  // node_modules/ethers/lib.esm/hash/id.js
  function id(value) {
    return keccak256(toUtf8Bytes(value));
  }

  // node_modules/ethers/lib.esm/hash/message.js
  function hashMessage(message) {
    if (typeof message === "string") {
      message = toUtf8Bytes(message);
    }
    return keccak256(concat([
      toUtf8Bytes(MessagePrefix),
      toUtf8Bytes(String(message.length)),
      message
    ]));
  }

  // node_modules/ethers/lib.esm/hash/solidity.js
  var regexBytes = new RegExp("^bytes([0-9]+)$");
  var regexNumber = new RegExp("^(u?int)([0-9]*)$");
  var regexArray = new RegExp("^(.*)\\[([0-9]*)\\]$");
  function _pack(type, value, isArray) {
    switch (type) {
      case "address":
        if (isArray) {
          return getBytes(zeroPadValue(value, 32));
        }
        return getBytes(getAddress(value));
      case "string":
        return toUtf8Bytes(value);
      case "bytes":
        return getBytes(value);
      case "bool":
        value = !!value ? "0x01" : "0x00";
        if (isArray) {
          return getBytes(zeroPadValue(value, 32));
        }
        return getBytes(value);
    }
    let match = type.match(regexNumber);
    if (match) {
      let signed = match[1] === "int";
      let size = parseInt(match[2] || "256");
      assertArgument((!match[2] || match[2] === String(size)) && size % 8 === 0 && size !== 0 && size <= 256, "invalid number type", "type", type);
      if (isArray) {
        size = 256;
      }
      if (signed) {
        value = toTwos(value, size);
      }
      return getBytes(zeroPadValue(toBeArray(value), size / 8));
    }
    match = type.match(regexBytes);
    if (match) {
      const size = parseInt(match[1]);
      assertArgument(String(size) === match[1] && size !== 0 && size <= 32, "invalid bytes type", "type", type);
      assertArgument(dataLength(value) === size, `invalid value for ${type}`, "value", value);
      if (isArray) {
        return getBytes(zeroPadBytes(value, 32));
      }
      return value;
    }
    match = type.match(regexArray);
    if (match && Array.isArray(value)) {
      const baseType = match[1];
      const count = parseInt(match[2] || String(value.length));
      assertArgument(count === value.length, `invalid array length for ${type}`, "value", value);
      const result = [];
      value.forEach(function(value2) {
        result.push(_pack(baseType, value2, true));
      });
      return getBytes(concat(result));
    }
    assertArgument(false, "invalid type", "type", type);
  }
  function solidityPacked(types, values) {
    assertArgument(types.length === values.length, "wrong number of values; expected ${ types.length }", "values", values);
    const tight = [];
    types.forEach(function(type, index) {
      tight.push(_pack(type, values[index]));
    });
    return hexlify(concat(tight));
  }
  function solidityPackedKeccak256(types, values) {
    return keccak256(solidityPacked(types, values));
  }

  // node_modules/ethers/lib.esm/hash/typed-data.js
  var padding = new Uint8Array(32);
  padding.fill(0);
  var BN__1 = BigInt(-1);
  var BN_07 = BigInt(0);
  var BN_14 = BigInt(1);
  var BN_MAX_UINT2562 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  function hexPadRight(value) {
    const bytes2 = getBytes(value);
    const padOffset = bytes2.length % 32;
    if (padOffset) {
      return concat([bytes2, padding.slice(padOffset)]);
    }
    return hexlify(bytes2);
  }
  var hexTrue = toBeHex(BN_14, 32);
  var hexFalse = toBeHex(BN_07, 32);
  var domainFieldTypes = {
    name: "string",
    version: "string",
    chainId: "uint256",
    verifyingContract: "address",
    salt: "bytes32"
  };
  var domainFieldNames = [
    "name",
    "version",
    "chainId",
    "verifyingContract",
    "salt"
  ];
  function checkString(key) {
    return function(value) {
      assertArgument(typeof value === "string", `invalid domain value for ${JSON.stringify(key)}`, `domain.${key}`, value);
      return value;
    };
  }
  var domainChecks = {
    name: checkString("name"),
    version: checkString("version"),
    chainId: function(_value) {
      const value = getBigInt(_value, "domain.chainId");
      assertArgument(value >= 0, "invalid chain ID", "domain.chainId", _value);
      if (Number.isSafeInteger(value)) {
        return Number(value);
      }
      return toQuantity(value);
    },
    verifyingContract: function(value) {
      try {
        return getAddress(value).toLowerCase();
      } catch (error) {
      }
      assertArgument(false, `invalid domain value "verifyingContract"`, "domain.verifyingContract", value);
    },
    salt: function(value) {
      const bytes2 = getBytes(value, "domain.salt");
      assertArgument(bytes2.length === 32, `invalid domain value "salt"`, "domain.salt", value);
      return hexlify(bytes2);
    }
  };
  function getBaseEncoder(type) {
    {
      const match = type.match(/^(u?)int(\d+)$/);
      if (match) {
        const signed = match[1] === "";
        const width = parseInt(match[2]);
        assertArgument(width % 8 === 0 && width !== 0 && width <= 256 && match[2] === String(width), "invalid numeric width", "type", type);
        const boundsUpper = mask(BN_MAX_UINT2562, signed ? width - 1 : width);
        const boundsLower = signed ? (boundsUpper + BN_14) * BN__1 : BN_07;
        return function(_value) {
          const value = getBigInt(_value, "value");
          assertArgument(value >= boundsLower && value <= boundsUpper, `value out-of-bounds for ${type}`, "value", value);
          return toBeHex(signed ? toTwos(value, 256) : value, 32);
        };
      }
    }
    {
      const match = type.match(/^bytes(\d+)$/);
      if (match) {
        const width = parseInt(match[1]);
        assertArgument(width !== 0 && width <= 32 && match[1] === String(width), "invalid bytes width", "type", type);
        return function(value) {
          const bytes2 = getBytes(value);
          assertArgument(bytes2.length === width, `invalid length for ${type}`, "value", value);
          return hexPadRight(value);
        };
      }
    }
    switch (type) {
      case "address":
        return function(value) {
          return zeroPadValue(getAddress(value), 32);
        };
      case "bool":
        return function(value) {
          return !value ? hexFalse : hexTrue;
        };
      case "bytes":
        return function(value) {
          return keccak256(value);
        };
      case "string":
        return function(value) {
          return id(value);
        };
    }
    return null;
  }
  function encodeType(name, fields) {
    return `${name}(${fields.map(({ name: name2, type }) => type + " " + name2).join(",")})`;
  }
  function splitArray(type) {
    const match = type.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
    if (match) {
      return {
        base: match[1],
        index: match[2] + match[4],
        array: {
          base: match[1],
          prefix: match[1] + match[2],
          count: match[5] ? parseInt(match[5]) : -1
        }
      };
    }
    return { base: type };
  }
  var TypedDataEncoder = class _TypedDataEncoder {
    /**
     *  The primary type for the structured [[types]].
     *
     *  This is derived automatically from the [[types]], since no
     *  recursion is possible, once the DAG for the types is consturcted
     *  internally, the primary type must be the only remaining type with
     *  no parent nodes.
     */
    primaryType;
    #types;
    /**
     *  The types.
     */
    get types() {
      return JSON.parse(this.#types);
    }
    #fullTypes;
    #encoderCache;
    /**
     *  Create a new **TypedDataEncoder** for %%types%%.
     *
     *  This performs all necessary checking that types are valid and
     *  do not violate the [[link-eip-712]] structural constraints as
     *  well as computes the [[primaryType]].
     */
    constructor(_types) {
      this.#fullTypes = /* @__PURE__ */ new Map();
      this.#encoderCache = /* @__PURE__ */ new Map();
      const links = /* @__PURE__ */ new Map();
      const parents = /* @__PURE__ */ new Map();
      const subtypes = /* @__PURE__ */ new Map();
      const types = {};
      Object.keys(_types).forEach((type) => {
        types[type] = _types[type].map(({ name, type: type2 }) => {
          let { base, index } = splitArray(type2);
          if (base === "int" && !_types["int"]) {
            base = "int256";
          }
          if (base === "uint" && !_types["uint"]) {
            base = "uint256";
          }
          return { name, type: base + (index || "") };
        });
        links.set(type, /* @__PURE__ */ new Set());
        parents.set(type, []);
        subtypes.set(type, /* @__PURE__ */ new Set());
      });
      this.#types = JSON.stringify(types);
      for (const name in types) {
        const uniqueNames = /* @__PURE__ */ new Set();
        for (const field of types[name]) {
          assertArgument(!uniqueNames.has(field.name), `duplicate variable name ${JSON.stringify(field.name)} in ${JSON.stringify(name)}`, "types", _types);
          uniqueNames.add(field.name);
          const baseType = splitArray(field.type).base;
          assertArgument(baseType !== name, `circular type reference to ${JSON.stringify(baseType)}`, "types", _types);
          const encoder = getBaseEncoder(baseType);
          if (encoder) {
            continue;
          }
          assertArgument(parents.has(baseType), `unknown type ${JSON.stringify(baseType)}`, "types", _types);
          parents.get(baseType).push(name);
          links.get(name).add(baseType);
        }
      }
      const primaryTypes = Array.from(parents.keys()).filter((n2) => parents.get(n2).length === 0);
      assertArgument(primaryTypes.length !== 0, "missing primary type", "types", _types);
      assertArgument(primaryTypes.length === 1, `ambiguous primary types or unused types: ${primaryTypes.map((t) => JSON.stringify(t)).join(", ")}`, "types", _types);
      defineProperties(this, { primaryType: primaryTypes[0] });
      function checkCircular(type, found) {
        assertArgument(!found.has(type), `circular type reference to ${JSON.stringify(type)}`, "types", _types);
        found.add(type);
        for (const child of links.get(type)) {
          if (!parents.has(child)) {
            continue;
          }
          checkCircular(child, found);
          for (const subtype of found) {
            subtypes.get(subtype).add(child);
          }
        }
        found.delete(type);
      }
      checkCircular(this.primaryType, /* @__PURE__ */ new Set());
      for (const [name, set] of subtypes) {
        const st = Array.from(set);
        st.sort();
        this.#fullTypes.set(name, encodeType(name, types[name]) + st.map((t) => encodeType(t, types[t])).join(""));
      }
    }
    /**
     *  Returnthe encoder for the specific %%type%%.
     */
    getEncoder(type) {
      let encoder = this.#encoderCache.get(type);
      if (!encoder) {
        encoder = this.#getEncoder(type);
        this.#encoderCache.set(type, encoder);
      }
      return encoder;
    }
    #getEncoder(type) {
      {
        const encoder = getBaseEncoder(type);
        if (encoder) {
          return encoder;
        }
      }
      const array = splitArray(type).array;
      if (array) {
        const subtype = array.prefix;
        const subEncoder = this.getEncoder(subtype);
        return (value) => {
          assertArgument(array.count === -1 || array.count === value.length, `array length mismatch; expected length ${array.count}`, "value", value);
          let result = value.map(subEncoder);
          if (this.#fullTypes.has(subtype)) {
            result = result.map(keccak256);
          }
          return keccak256(concat(result));
        };
      }
      const fields = this.types[type];
      if (fields) {
        const encodedType = id(this.#fullTypes.get(type));
        return (value) => {
          const values = fields.map(({ name, type: type2 }) => {
            const result = this.getEncoder(type2)(value[name]);
            if (this.#fullTypes.has(type2)) {
              return keccak256(result);
            }
            return result;
          });
          values.unshift(encodedType);
          return concat(values);
        };
      }
      assertArgument(false, `unknown type: ${type}`, "type", type);
    }
    /**
     *  Return the full type for %%name%%.
     */
    encodeType(name) {
      const result = this.#fullTypes.get(name);
      assertArgument(result, `unknown type: ${JSON.stringify(name)}`, "name", name);
      return result;
    }
    /**
     *  Return the encoded %%value%% for the %%type%%.
     */
    encodeData(type, value) {
      return this.getEncoder(type)(value);
    }
    /**
     *  Returns the hash of %%value%% for the type of %%name%%.
     */
    hashStruct(name, value) {
      return keccak256(this.encodeData(name, value));
    }
    /**
     *  Return the fulled encoded %%value%% for the [[types]].
     */
    encode(value) {
      return this.encodeData(this.primaryType, value);
    }
    /**
     *  Return the hash of the fully encoded %%value%% for the [[types]].
     */
    hash(value) {
      return this.hashStruct(this.primaryType, value);
    }
    /**
     *  @_ignore:
     */
    _visit(type, value, callback) {
      {
        const encoder = getBaseEncoder(type);
        if (encoder) {
          return callback(type, value);
        }
      }
      const array = splitArray(type).array;
      if (array) {
        assertArgument(array.count === -1 || array.count === value.length, `array length mismatch; expected length ${array.count}`, "value", value);
        return value.map((v) => this._visit(array.prefix, v, callback));
      }
      const fields = this.types[type];
      if (fields) {
        return fields.reduce((accum, { name, type: type2 }) => {
          accum[name] = this._visit(type2, value[name], callback);
          return accum;
        }, {});
      }
      assertArgument(false, `unknown type: ${type}`, "type", type);
    }
    /**
     *  Call %%calback%% for each value in %%value%%, passing the type and
     *  component within %%value%%.
     *
     *  This is useful for replacing addresses or other transformation that
     *  may be desired on each component, based on its type.
     */
    visit(value, callback) {
      return this._visit(this.primaryType, value, callback);
    }
    /**
     *  Create a new **TypedDataEncoder** for %%types%%.
     */
    static from(types) {
      return new _TypedDataEncoder(types);
    }
    /**
     *  Return the primary type for %%types%%.
     */
    static getPrimaryType(types) {
      return _TypedDataEncoder.from(types).primaryType;
    }
    /**
     *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
     */
    static hashStruct(name, types, value) {
      return _TypedDataEncoder.from(types).hashStruct(name, value);
    }
    /**
     *  Return the domain hash for %%domain%%.
     */
    static hashDomain(domain) {
      const domainFields = [];
      for (const name in domain) {
        if (domain[name] == null) {
          continue;
        }
        const type = domainFieldTypes[name];
        assertArgument(type, `invalid typed-data domain key: ${JSON.stringify(name)}`, "domain", domain);
        domainFields.push({ name, type });
      }
      domainFields.sort((a, b2) => {
        return domainFieldNames.indexOf(a.name) - domainFieldNames.indexOf(b2.name);
      });
      return _TypedDataEncoder.hashStruct("EIP712Domain", { EIP712Domain: domainFields }, domain);
    }
    /**
     *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
     */
    static encode(domain, types, value) {
      return concat([
        "0x1901",
        _TypedDataEncoder.hashDomain(domain),
        _TypedDataEncoder.from(types).hash(value)
      ]);
    }
    /**
     *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
     */
    static hash(domain, types, value) {
      return keccak256(_TypedDataEncoder.encode(domain, types, value));
    }
    // Replaces all address types with ENS names with their looked up address
    /**
     * Resolves to the value from resolving all addresses in %%value%% for
     * %%types%% and the %%domain%%.
     */
    static async resolveNames(domain, types, value, resolveName) {
      domain = Object.assign({}, domain);
      for (const key in domain) {
        if (domain[key] == null) {
          delete domain[key];
        }
      }
      const ensCache = {};
      if (domain.verifyingContract && !isHexString(domain.verifyingContract, 20)) {
        ensCache[domain.verifyingContract] = "0x";
      }
      const encoder = _TypedDataEncoder.from(types);
      encoder.visit(value, (type, value2) => {
        if (type === "address" && !isHexString(value2, 20)) {
          ensCache[value2] = "0x";
        }
        return value2;
      });
      for (const name in ensCache) {
        ensCache[name] = await resolveName(name);
      }
      if (domain.verifyingContract && ensCache[domain.verifyingContract]) {
        domain.verifyingContract = ensCache[domain.verifyingContract];
      }
      value = encoder.visit(value, (type, value2) => {
        if (type === "address" && ensCache[value2]) {
          return ensCache[value2];
        }
        return value2;
      });
      return { domain, value };
    }
    /**
     *  Returns the JSON-encoded payload expected by nodes which implement
     *  the JSON-RPC [[link-eip-712]] method.
     */
    static getPayload(domain, types, value) {
      _TypedDataEncoder.hashDomain(domain);
      const domainValues = {};
      const domainTypes = [];
      domainFieldNames.forEach((name) => {
        const value2 = domain[name];
        if (value2 == null) {
          return;
        }
        domainValues[name] = domainChecks[name](value2);
        domainTypes.push({ name, type: domainFieldTypes[name] });
      });
      const encoder = _TypedDataEncoder.from(types);
      types = encoder.types;
      const typesWithDomain = Object.assign({}, types);
      assertArgument(typesWithDomain.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", types);
      typesWithDomain.EIP712Domain = domainTypes;
      encoder.encode(value);
      return {
        types: typesWithDomain,
        domain: domainValues,
        primaryType: encoder.primaryType,
        message: encoder.visit(value, (type, value2) => {
          if (type.match(/^bytes(\d*)/)) {
            return hexlify(getBytes(value2));
          }
          if (type.match(/^u?int/)) {
            return getBigInt(value2).toString();
          }
          switch (type) {
            case "address":
              return value2.toLowerCase();
            case "bool":
              return !!value2;
            case "string":
              assertArgument(typeof value2 === "string", "invalid string", "value", value2);
              return value2;
          }
          assertArgument(false, "unsupported type", "type", type);
        })
      };
    }
  };

  // node_modules/ethers/lib.esm/abi/fragments.js
  function setify(items) {
    const result = /* @__PURE__ */ new Set();
    items.forEach((k) => result.add(k));
    return Object.freeze(result);
  }
  var _kwVisibDeploy = "external public payable override";
  var KwVisibDeploy = setify(_kwVisibDeploy.split(" "));
  var _kwVisib = "constant external internal payable private public pure view override";
  var KwVisib = setify(_kwVisib.split(" "));
  var _kwTypes = "constructor error event fallback function receive struct";
  var KwTypes = setify(_kwTypes.split(" "));
  var _kwModifiers = "calldata memory storage payable indexed";
  var KwModifiers = setify(_kwModifiers.split(" "));
  var _kwOther = "tuple returns";
  var _keywords = [_kwTypes, _kwModifiers, _kwOther, _kwVisib].join(" ");
  var Keywords = setify(_keywords.split(" "));
  var SimpleTokens = {
    "(": "OPEN_PAREN",
    ")": "CLOSE_PAREN",
    "[": "OPEN_BRACKET",
    "]": "CLOSE_BRACKET",
    ",": "COMMA",
    "@": "AT"
  };
  var regexWhitespacePrefix = new RegExp("^(\\s*)");
  var regexNumberPrefix = new RegExp("^([0-9]+)");
  var regexIdPrefix = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)");
  var regexId = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$");
  var regexType = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
  var TokenString = class _TokenString {
    #offset;
    #tokens;
    get offset() {
      return this.#offset;
    }
    get length() {
      return this.#tokens.length - this.#offset;
    }
    constructor(tokens) {
      this.#offset = 0;
      this.#tokens = tokens.slice();
    }
    clone() {
      return new _TokenString(this.#tokens);
    }
    reset() {
      this.#offset = 0;
    }
    #subTokenString(from = 0, to = 0) {
      return new _TokenString(this.#tokens.slice(from, to).map((t) => {
        return Object.freeze(Object.assign({}, t, {
          match: t.match - from,
          linkBack: t.linkBack - from,
          linkNext: t.linkNext - from
        }));
      }));
    }
    // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
    popKeyword(allowed) {
      const top = this.peek();
      if (top.type !== "KEYWORD" || !allowed.has(top.text)) {
        throw new Error(`expected keyword ${top.text}`);
      }
      return this.pop().text;
    }
    // Pops and returns the value of the next token if it is `type`; throws if out of tokens
    popType(type) {
      if (this.peek().type !== type) {
        const top = this.peek();
        throw new Error(`expected ${type}; got ${top.type} ${JSON.stringify(top.text)}`);
      }
      return this.pop().text;
    }
    // Pops and returns a "(" TOKENS ")"
    popParen() {
      const top = this.peek();
      if (top.type !== "OPEN_PAREN") {
        throw new Error("bad start");
      }
      const result = this.#subTokenString(this.#offset + 1, top.match + 1);
      this.#offset = top.match + 1;
      return result;
    }
    // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
    popParams() {
      const top = this.peek();
      if (top.type !== "OPEN_PAREN") {
        throw new Error("bad start");
      }
      const result = [];
      while (this.#offset < top.match - 1) {
        const link = this.peek().linkNext;
        result.push(this.#subTokenString(this.#offset + 1, link));
        this.#offset = link;
      }
      this.#offset = top.match + 1;
      return result;
    }
    // Returns the top Token, throwing if out of tokens
    peek() {
      if (this.#offset >= this.#tokens.length) {
        throw new Error("out-of-bounds");
      }
      return this.#tokens[this.#offset];
    }
    // Returns the next value, if it is a keyword in `allowed`
    peekKeyword(allowed) {
      const top = this.peekType("KEYWORD");
      return top != null && allowed.has(top) ? top : null;
    }
    // Returns the value of the next token if it is `type`
    peekType(type) {
      if (this.length === 0) {
        return null;
      }
      const top = this.peek();
      return top.type === type ? top.text : null;
    }
    // Returns the next token; throws if out of tokens
    pop() {
      const result = this.peek();
      this.#offset++;
      return result;
    }
    toString() {
      const tokens = [];
      for (let i = this.#offset; i < this.#tokens.length; i++) {
        const token = this.#tokens[i];
        tokens.push(`${token.type}:${token.text}`);
      }
      return `<TokenString ${tokens.join(" ")}>`;
    }
  };
  function lex(text) {
    const tokens = [];
    const throwError2 = (message) => {
      const token = offset < text.length ? JSON.stringify(text[offset]) : "$EOI";
      throw new Error(`invalid token ${token} at ${offset}: ${message}`);
    };
    let brackets = [];
    let commas = [];
    let offset = 0;
    while (offset < text.length) {
      let cur = text.substring(offset);
      let match = cur.match(regexWhitespacePrefix);
      if (match) {
        offset += match[1].length;
        cur = text.substring(offset);
      }
      const token = { depth: brackets.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset, value: -1 };
      tokens.push(token);
      let type = SimpleTokens[cur[0]] || "";
      if (type) {
        token.type = type;
        token.text = cur[0];
        offset++;
        if (type === "OPEN_PAREN") {
          brackets.push(tokens.length - 1);
          commas.push(tokens.length - 1);
        } else if (type == "CLOSE_PAREN") {
          if (brackets.length === 0) {
            throwError2("no matching open bracket");
          }
          token.match = brackets.pop();
          tokens[token.match].match = tokens.length - 1;
          token.depth--;
          token.linkBack = commas.pop();
          tokens[token.linkBack].linkNext = tokens.length - 1;
        } else if (type === "COMMA") {
          token.linkBack = commas.pop();
          tokens[token.linkBack].linkNext = tokens.length - 1;
          commas.push(tokens.length - 1);
        } else if (type === "OPEN_BRACKET") {
          token.type = "BRACKET";
        } else if (type === "CLOSE_BRACKET") {
          let suffix = tokens.pop().text;
          if (tokens.length > 0 && tokens[tokens.length - 1].type === "NUMBER") {
            const value = tokens.pop().text;
            suffix = value + suffix;
            tokens[tokens.length - 1].value = getNumber(value);
          }
          if (tokens.length === 0 || tokens[tokens.length - 1].type !== "BRACKET") {
            throw new Error("missing opening bracket");
          }
          tokens[tokens.length - 1].text += suffix;
        }
        continue;
      }
      match = cur.match(regexIdPrefix);
      if (match) {
        token.text = match[1];
        offset += token.text.length;
        if (Keywords.has(token.text)) {
          token.type = "KEYWORD";
          continue;
        }
        if (token.text.match(regexType)) {
          token.type = "TYPE";
          continue;
        }
        token.type = "ID";
        continue;
      }
      match = cur.match(regexNumberPrefix);
      if (match) {
        token.text = match[1];
        token.type = "NUMBER";
        offset += token.text.length;
        continue;
      }
      throw new Error(`unexpected token ${JSON.stringify(cur[0])} at position ${offset}`);
    }
    return new TokenString(tokens.map((t) => Object.freeze(t)));
  }
  function allowSingle(set, allowed) {
    let included = [];
    for (const key in allowed.keys()) {
      if (set.has(key)) {
        included.push(key);
      }
    }
    if (included.length > 1) {
      throw new Error(`conflicting types: ${included.join(", ")}`);
    }
  }
  function consumeName(type, tokens) {
    if (tokens.peekKeyword(KwTypes)) {
      const keyword = tokens.pop().text;
      if (keyword !== type) {
        throw new Error(`expected ${type}, got ${keyword}`);
      }
    }
    return tokens.popType("ID");
  }
  function consumeKeywords(tokens, allowed) {
    const keywords = /* @__PURE__ */ new Set();
    while (true) {
      const keyword = tokens.peekType("KEYWORD");
      if (keyword == null || allowed && !allowed.has(keyword)) {
        break;
      }
      tokens.pop();
      if (keywords.has(keyword)) {
        throw new Error(`duplicate keywords: ${JSON.stringify(keyword)}`);
      }
      keywords.add(keyword);
    }
    return Object.freeze(keywords);
  }
  function consumeMutability(tokens) {
    let modifiers = consumeKeywords(tokens, KwVisib);
    allowSingle(modifiers, setify("constant payable nonpayable".split(" ")));
    allowSingle(modifiers, setify("pure view payable nonpayable".split(" ")));
    if (modifiers.has("view")) {
      return "view";
    }
    if (modifiers.has("pure")) {
      return "pure";
    }
    if (modifiers.has("payable")) {
      return "payable";
    }
    if (modifiers.has("nonpayable")) {
      return "nonpayable";
    }
    if (modifiers.has("constant")) {
      return "view";
    }
    return "nonpayable";
  }
  function consumeParams(tokens, allowIndexed) {
    return tokens.popParams().map((t) => ParamType.from(t, allowIndexed));
  }
  function consumeGas(tokens) {
    if (tokens.peekType("AT")) {
      tokens.pop();
      if (tokens.peekType("NUMBER")) {
        return getBigInt(tokens.pop().text);
      }
      throw new Error("invalid gas");
    }
    return null;
  }
  function consumeEoi(tokens) {
    if (tokens.length) {
      throw new Error(`unexpected tokens at offset ${tokens.offset}: ${tokens.toString()}`);
    }
  }
  var regexArrayType = new RegExp(/^(.*)\[([0-9]*)\]$/);
  function verifyBasicType(type) {
    const match = type.match(regexType);
    assertArgument(match, "invalid type", "type", type);
    if (type === "uint") {
      return "uint256";
    }
    if (type === "int") {
      return "int256";
    }
    if (match[2]) {
      const length = parseInt(match[2]);
      assertArgument(length !== 0 && length <= 32, "invalid bytes length", "type", type);
    } else if (match[3]) {
      const size = parseInt(match[3]);
      assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid numeric width", "type", type);
    }
    return type;
  }
  var _guard3 = {};
  var internal = Symbol.for("_ethers_internal");
  var ParamTypeInternal = "_ParamTypeInternal";
  var ErrorFragmentInternal = "_ErrorInternal";
  var EventFragmentInternal = "_EventInternal";
  var ConstructorFragmentInternal = "_ConstructorInternal";
  var FallbackFragmentInternal = "_FallbackInternal";
  var FunctionFragmentInternal = "_FunctionInternal";
  var StructFragmentInternal = "_StructInternal";
  var ParamType = class _ParamType {
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    name;
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    type;
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    baseType;
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    indexed;
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    components;
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    arrayLength;
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    arrayChildren;
    /**
     *  @private
     */
    constructor(guard, name, type, baseType, indexed, components, arrayLength, arrayChildren) {
      assertPrivate(guard, _guard3, "ParamType");
      Object.defineProperty(this, internal, { value: ParamTypeInternal });
      if (components) {
        components = Object.freeze(components.slice());
      }
      if (baseType === "array") {
        if (arrayLength == null || arrayChildren == null) {
          throw new Error("");
        }
      } else if (arrayLength != null || arrayChildren != null) {
        throw new Error("");
      }
      if (baseType === "tuple") {
        if (components == null) {
          throw new Error("");
        }
      } else if (components != null) {
        throw new Error("");
      }
      defineProperties(this, {
        name,
        type,
        baseType,
        indexed,
        components,
        arrayLength,
        arrayChildren
      });
    }
    /**
     *  Return a string representation of this type.
     *
     *  For example,
     *
     *  ``sighash" => "(uint256,address)"``
     *
     *  ``"minimal" => "tuple(uint256,address) indexed"``
     *
     *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        const name = this.name || "";
        if (this.isArray()) {
          const result3 = JSON.parse(this.arrayChildren.format("json"));
          result3.name = name;
          result3.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`;
          return JSON.stringify(result3);
        }
        const result2 = {
          type: this.baseType === "tuple" ? "tuple" : this.type,
          name
        };
        if (typeof this.indexed === "boolean") {
          result2.indexed = this.indexed;
        }
        if (this.isTuple()) {
          result2.components = this.components.map((c) => JSON.parse(c.format(format)));
        }
        return JSON.stringify(result2);
      }
      let result = "";
      if (this.isArray()) {
        result += this.arrayChildren.format(format);
        result += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`;
      } else {
        if (this.isTuple()) {
          result += "(" + this.components.map((comp) => comp.format(format)).join(format === "full" ? ", " : ",") + ")";
        } else {
          result += this.type;
        }
      }
      if (format !== "sighash") {
        if (this.indexed === true) {
          result += " indexed";
        }
        if (format === "full" && this.name) {
          result += " " + this.name;
        }
      }
      return result;
    }
    /**
     *  Returns true if %%this%% is an Array type.
     *
     *  This provides a type gaurd ensuring that [[arrayChildren]]
     *  and [[arrayLength]] are non-null.
     */
    isArray() {
      return this.baseType === "array";
    }
    /**
     *  Returns true if %%this%% is a Tuple type.
     *
     *  This provides a type gaurd ensuring that [[components]]
     *  is non-null.
     */
    isTuple() {
      return this.baseType === "tuple";
    }
    /**
     *  Returns true if %%this%% is an Indexable type.
     *
     *  This provides a type gaurd ensuring that [[indexed]]
     *  is non-null.
     */
    isIndexable() {
      return this.indexed != null;
    }
    /**
     *  Walks the **ParamType** with %%value%%, calling %%process%%
     *  on each type, destructing the %%value%% recursively.
     */
    walk(value, process) {
      if (this.isArray()) {
        if (!Array.isArray(value)) {
          throw new Error("invalid array value");
        }
        if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
          throw new Error("array is wrong length");
        }
        const _this = this;
        return value.map((v) => _this.arrayChildren.walk(v, process));
      }
      if (this.isTuple()) {
        if (!Array.isArray(value)) {
          throw new Error("invalid tuple value");
        }
        if (value.length !== this.components.length) {
          throw new Error("array is wrong length");
        }
        const _this = this;
        return value.map((v, i) => _this.components[i].walk(v, process));
      }
      return process(this.type, value);
    }
    #walkAsync(promises, value, process, setValue) {
      if (this.isArray()) {
        if (!Array.isArray(value)) {
          throw new Error("invalid array value");
        }
        if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
          throw new Error("array is wrong length");
        }
        const childType = this.arrayChildren;
        const result2 = value.slice();
        result2.forEach((value2, index) => {
          childType.#walkAsync(promises, value2, process, (value3) => {
            result2[index] = value3;
          });
        });
        setValue(result2);
        return;
      }
      if (this.isTuple()) {
        const components = this.components;
        let result2;
        if (Array.isArray(value)) {
          result2 = value.slice();
        } else {
          if (value == null || typeof value !== "object") {
            throw new Error("invalid tuple value");
          }
          result2 = components.map((param) => {
            if (!param.name) {
              throw new Error("cannot use object value with unnamed components");
            }
            if (!(param.name in value)) {
              throw new Error(`missing value for component ${param.name}`);
            }
            return value[param.name];
          });
        }
        if (result2.length !== this.components.length) {
          throw new Error("array is wrong length");
        }
        result2.forEach((value2, index) => {
          components[index].#walkAsync(promises, value2, process, (value3) => {
            result2[index] = value3;
          });
        });
        setValue(result2);
        return;
      }
      const result = process(this.type, value);
      if (result.then) {
        promises.push(async function() {
          setValue(await result);
        }());
      } else {
        setValue(result);
      }
    }
    /**
     *  Walks the **ParamType** with %%value%%, asynchronously calling
     *  %%process%% on each type, destructing the %%value%% recursively.
     *
     *  This can be used to resolve ENS names by walking and resolving each
     *  ``"address"`` type.
     */
    async walkAsync(value, process) {
      const promises = [];
      const result = [value];
      this.#walkAsync(promises, value, process, (value2) => {
        result[0] = value2;
      });
      if (promises.length) {
        await Promise.all(promises);
      }
      return result[0];
    }
    /**
     *  Creates a new **ParamType** for %%obj%%.
     *
     *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
     *  otherwise the ``indexed`` keyword will throw an error.
     */
    static from(obj, allowIndexed) {
      if (_ParamType.isParamType(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _ParamType.from(lex(obj), allowIndexed);
        } catch (error) {
          assertArgument(false, "invalid param type", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        let type2 = "", baseType = "";
        let comps = null;
        if (consumeKeywords(obj, setify(["tuple"])).has("tuple") || obj.peekType("OPEN_PAREN")) {
          baseType = "tuple";
          comps = obj.popParams().map((t) => _ParamType.from(t));
          type2 = `tuple(${comps.map((c) => c.format()).join(",")})`;
        } else {
          type2 = verifyBasicType(obj.popType("TYPE"));
          baseType = type2;
        }
        let arrayChildren = null;
        let arrayLength = null;
        while (obj.length && obj.peekType("BRACKET")) {
          const bracket = obj.pop();
          arrayChildren = new _ParamType(_guard3, "", type2, baseType, null, comps, arrayLength, arrayChildren);
          arrayLength = bracket.value;
          type2 += bracket.text;
          baseType = "array";
          comps = null;
        }
        let indexed2 = null;
        const keywords = consumeKeywords(obj, KwModifiers);
        if (keywords.has("indexed")) {
          if (!allowIndexed) {
            throw new Error("");
          }
          indexed2 = true;
        }
        const name2 = obj.peekType("ID") ? obj.pop().text : "";
        if (obj.length) {
          throw new Error("leftover tokens");
        }
        return new _ParamType(_guard3, name2, type2, baseType, indexed2, comps, arrayLength, arrayChildren);
      }
      const name = obj.name;
      assertArgument(!name || typeof name === "string" && name.match(regexId), "invalid name", "obj.name", name);
      let indexed = obj.indexed;
      if (indexed != null) {
        assertArgument(allowIndexed, "parameter cannot be indexed", "obj.indexed", obj.indexed);
        indexed = !!indexed;
      }
      let type = obj.type;
      let arrayMatch = type.match(regexArrayType);
      if (arrayMatch) {
        const arrayLength = parseInt(arrayMatch[2] || "-1");
        const arrayChildren = _ParamType.from({
          type: arrayMatch[1],
          components: obj.components
        });
        return new _ParamType(_guard3, name || "", type, "array", indexed, null, arrayLength, arrayChildren);
      }
      if (type === "tuple" || type.startsWith(
        "tuple("
        /* fix: ) */
      ) || type.startsWith(
        "("
        /* fix: ) */
      )) {
        const comps = obj.components != null ? obj.components.map((c) => _ParamType.from(c)) : null;
        const tuple = new _ParamType(_guard3, name || "", type, "tuple", indexed, comps, null, null);
        return tuple;
      }
      type = verifyBasicType(obj.type);
      return new _ParamType(_guard3, name || "", type, type, indexed, null, null, null);
    }
    /**
     *  Returns true if %%value%% is a **ParamType**.
     */
    static isParamType(value) {
      return value && value[internal] === ParamTypeInternal;
    }
  };
  var Fragment = class _Fragment {
    /**
     *  The type of the fragment.
     */
    type;
    /**
     *  The inputs for the fragment.
     */
    inputs;
    /**
     *  @private
     */
    constructor(guard, type, inputs) {
      assertPrivate(guard, _guard3, "Fragment");
      inputs = Object.freeze(inputs.slice());
      defineProperties(this, { type, inputs });
    }
    /**
     *  Creates a new **Fragment** for %%obj%%, wich can be any supported
     *  ABI frgament type.
     */
    static from(obj) {
      if (typeof obj === "string") {
        try {
          _Fragment.from(JSON.parse(obj));
        } catch (e) {
        }
        return _Fragment.from(lex(obj));
      }
      if (obj instanceof TokenString) {
        const type = obj.peekKeyword(KwTypes);
        switch (type) {
          case "constructor":
            return ConstructorFragment.from(obj);
          case "error":
            return ErrorFragment.from(obj);
          case "event":
            return EventFragment.from(obj);
          case "fallback":
          case "receive":
            return FallbackFragment.from(obj);
          case "function":
            return FunctionFragment.from(obj);
          case "struct":
            return StructFragment.from(obj);
        }
      } else if (typeof obj === "object") {
        switch (obj.type) {
          case "constructor":
            return ConstructorFragment.from(obj);
          case "error":
            return ErrorFragment.from(obj);
          case "event":
            return EventFragment.from(obj);
          case "fallback":
          case "receive":
            return FallbackFragment.from(obj);
          case "function":
            return FunctionFragment.from(obj);
          case "struct":
            return StructFragment.from(obj);
        }
        assert(false, `unsupported type: ${obj.type}`, "UNSUPPORTED_OPERATION", {
          operation: "Fragment.from"
        });
      }
      assertArgument(false, "unsupported frgament object", "obj", obj);
    }
    /**
     *  Returns true if %%value%% is a [[ConstructorFragment]].
     */
    static isConstructor(value) {
      return ConstructorFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is an [[ErrorFragment]].
     */
    static isError(value) {
      return ErrorFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is an [[EventFragment]].
     */
    static isEvent(value) {
      return EventFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is a [[FunctionFragment]].
     */
    static isFunction(value) {
      return FunctionFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is a [[StructFragment]].
     */
    static isStruct(value) {
      return StructFragment.isFragment(value);
    }
  };
  var NamedFragment = class extends Fragment {
    /**
     *  The name of the fragment.
     */
    name;
    /**
     *  @private
     */
    constructor(guard, type, name, inputs) {
      super(guard, type, inputs);
      assertArgument(typeof name === "string" && name.match(regexId), "invalid identifier", "name", name);
      inputs = Object.freeze(inputs.slice());
      defineProperties(this, { name });
    }
  };
  function joinParams(format, params) {
    return "(" + params.map((p) => p.format(format)).join(format === "full" ? ", " : ",") + ")";
  }
  var ErrorFragment = class _ErrorFragment extends NamedFragment {
    /**
     *  @private
     */
    constructor(guard, name, inputs) {
      super(guard, "error", name, inputs);
      Object.defineProperty(this, internal, { value: ErrorFragmentInternal });
    }
    /**
     *  The Custom Error selector.
     */
    get selector() {
      return id(this.format("sighash")).substring(0, 10);
    }
    /**
     *  Returns a string representation of this fragment as %%format%%.
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        return JSON.stringify({
          type: "error",
          name: this.name,
          inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
        });
      }
      const result = [];
      if (format !== "sighash") {
        result.push("error");
      }
      result.push(this.name + joinParams(format, this.inputs));
      return result.join(" ");
    }
    /**
     *  Returns a new **ErrorFragment** for %%obj%%.
     */
    static from(obj) {
      if (_ErrorFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        return _ErrorFragment.from(lex(obj));
      } else if (obj instanceof TokenString) {
        const name = consumeName("error", obj);
        const inputs = consumeParams(obj);
        consumeEoi(obj);
        return new _ErrorFragment(_guard3, name, inputs);
      }
      return new _ErrorFragment(_guard3, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is an
     *  **ErrorFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === ErrorFragmentInternal;
    }
  };
  var EventFragment = class _EventFragment extends NamedFragment {
    /**
     *  Whether this event is anonymous.
     */
    anonymous;
    /**
     *  @private
     */
    constructor(guard, name, inputs, anonymous) {
      super(guard, "event", name, inputs);
      Object.defineProperty(this, internal, { value: EventFragmentInternal });
      defineProperties(this, { anonymous });
    }
    /**
     *  The Event topic hash.
     */
    get topicHash() {
      return id(this.format("sighash"));
    }
    /**
     *  Returns a string representation of this event as %%format%%.
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        return JSON.stringify({
          type: "event",
          anonymous: this.anonymous,
          name: this.name,
          inputs: this.inputs.map((i) => JSON.parse(i.format(format)))
        });
      }
      const result = [];
      if (format !== "sighash") {
        result.push("event");
      }
      result.push(this.name + joinParams(format, this.inputs));
      if (format !== "sighash" && this.anonymous) {
        result.push("anonymous");
      }
      return result.join(" ");
    }
    /**
     *  Return the topic hash for an event with %%name%% and %%params%%.
     */
    static getTopicHash(name, params) {
      params = (params || []).map((p) => ParamType.from(p));
      const fragment = new _EventFragment(_guard3, name, params, false);
      return fragment.topicHash;
    }
    /**
     *  Returns a new **EventFragment** for %%obj%%.
     */
    static from(obj) {
      if (_EventFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _EventFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid event fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const name = consumeName("event", obj);
        const inputs = consumeParams(obj, true);
        const anonymous = !!consumeKeywords(obj, setify(["anonymous"])).has("anonymous");
        consumeEoi(obj);
        return new _EventFragment(_guard3, name, inputs, anonymous);
      }
      return new _EventFragment(_guard3, obj.name, obj.inputs ? obj.inputs.map((p) => ParamType.from(p, true)) : [], !!obj.anonymous);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is an
     *  **EventFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === EventFragmentInternal;
    }
  };
  var ConstructorFragment = class _ConstructorFragment extends Fragment {
    /**
     *  Whether the constructor can receive an endowment.
     */
    payable;
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    gas;
    /**
     *  @private
     */
    constructor(guard, type, inputs, payable, gas) {
      super(guard, type, inputs);
      Object.defineProperty(this, internal, { value: ConstructorFragmentInternal });
      defineProperties(this, { payable, gas });
    }
    /**
     *  Returns a string representation of this constructor as %%format%%.
     */
    format(format) {
      assert(format != null && format !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" });
      if (format === "json") {
        return JSON.stringify({
          type: "constructor",
          stateMutability: this.payable ? "payable" : "undefined",
          payable: this.payable,
          gas: this.gas != null ? this.gas : void 0,
          inputs: this.inputs.map((i) => JSON.parse(i.format(format)))
        });
      }
      const result = [`constructor${joinParams(format, this.inputs)}`];
      if (this.payable) {
        result.push("payable");
      }
      if (this.gas != null) {
        result.push(`@${this.gas.toString()}`);
      }
      return result.join(" ");
    }
    /**
     *  Returns a new **ConstructorFragment** for %%obj%%.
     */
    static from(obj) {
      if (_ConstructorFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _ConstructorFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid constuctor fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        consumeKeywords(obj, setify(["constructor"]));
        const inputs = consumeParams(obj);
        const payable = !!consumeKeywords(obj, KwVisibDeploy).has("payable");
        const gas = consumeGas(obj);
        consumeEoi(obj);
        return new _ConstructorFragment(_guard3, "constructor", inputs, payable, gas);
      }
      return new _ConstructorFragment(_guard3, "constructor", obj.inputs ? obj.inputs.map(ParamType.from) : [], !!obj.payable, obj.gas != null ? obj.gas : null);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **ConstructorFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === ConstructorFragmentInternal;
    }
  };
  var FallbackFragment = class _FallbackFragment extends Fragment {
    /**
     *  If the function can be sent value during invocation.
     */
    payable;
    constructor(guard, inputs, payable) {
      super(guard, "fallback", inputs);
      Object.defineProperty(this, internal, { value: FallbackFragmentInternal });
      defineProperties(this, { payable });
    }
    /**
     *  Returns a string representation of this fallback as %%format%%.
     */
    format(format) {
      const type = this.inputs.length === 0 ? "receive" : "fallback";
      if (format === "json") {
        const stateMutability = this.payable ? "payable" : "nonpayable";
        return JSON.stringify({ type, stateMutability });
      }
      return `${type}()${this.payable ? " payable" : ""}`;
    }
    /**
     *  Returns a new **FallbackFragment** for %%obj%%.
     */
    static from(obj) {
      if (_FallbackFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _FallbackFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid fallback fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const errorObj = obj.toString();
        const topIsValid = obj.peekKeyword(setify(["fallback", "receive"]));
        assertArgument(topIsValid, "type must be fallback or receive", "obj", errorObj);
        const type = obj.popKeyword(setify(["fallback", "receive"]));
        if (type === "receive") {
          const inputs2 = consumeParams(obj);
          assertArgument(inputs2.length === 0, `receive cannot have arguments`, "obj.inputs", inputs2);
          consumeKeywords(obj, setify(["payable"]));
          consumeEoi(obj);
          return new _FallbackFragment(_guard3, [], true);
        }
        let inputs = consumeParams(obj);
        if (inputs.length) {
          assertArgument(inputs.length === 1 && inputs[0].type === "bytes", "invalid fallback inputs", "obj.inputs", inputs.map((i) => i.format("minimal")).join(", "));
        } else {
          inputs = [ParamType.from("bytes")];
        }
        const mutability = consumeMutability(obj);
        assertArgument(mutability === "nonpayable" || mutability === "payable", "fallback cannot be constants", "obj.stateMutability", mutability);
        if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
          const outputs = consumeParams(obj);
          assertArgument(outputs.length === 1 && outputs[0].type === "bytes", "invalid fallback outputs", "obj.outputs", outputs.map((i) => i.format("minimal")).join(", "));
        }
        consumeEoi(obj);
        return new _FallbackFragment(_guard3, inputs, mutability === "payable");
      }
      if (obj.type === "receive") {
        return new _FallbackFragment(_guard3, [], true);
      }
      if (obj.type === "fallback") {
        const inputs = [ParamType.from("bytes")];
        const payable = obj.stateMutability === "payable";
        return new _FallbackFragment(_guard3, inputs, payable);
      }
      assertArgument(false, "invalid fallback description", "obj", obj);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **FallbackFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === FallbackFragmentInternal;
    }
  };
  var FunctionFragment = class _FunctionFragment extends NamedFragment {
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    constant;
    /**
     *  The returned types for the result of calling this function.
     */
    outputs;
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    stateMutability;
    /**
     *  If the function can be sent value during invocation.
     */
    payable;
    /**
     *  The recommended gas limit to send when calling this function.
     */
    gas;
    /**
     *  @private
     */
    constructor(guard, name, stateMutability, inputs, outputs, gas) {
      super(guard, "function", name, inputs);
      Object.defineProperty(this, internal, { value: FunctionFragmentInternal });
      outputs = Object.freeze(outputs.slice());
      const constant = stateMutability === "view" || stateMutability === "pure";
      const payable = stateMutability === "payable";
      defineProperties(this, { constant, gas, outputs, payable, stateMutability });
    }
    /**
     *  The Function selector.
     */
    get selector() {
      return id(this.format("sighash")).substring(0, 10);
    }
    /**
     *  Returns a string representation of this function as %%format%%.
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        return JSON.stringify({
          type: "function",
          name: this.name,
          constant: this.constant,
          stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
          payable: this.payable,
          gas: this.gas != null ? this.gas : void 0,
          inputs: this.inputs.map((i) => JSON.parse(i.format(format))),
          outputs: this.outputs.map((o) => JSON.parse(o.format(format)))
        });
      }
      const result = [];
      if (format !== "sighash") {
        result.push("function");
      }
      result.push(this.name + joinParams(format, this.inputs));
      if (format !== "sighash") {
        if (this.stateMutability !== "nonpayable") {
          result.push(this.stateMutability);
        }
        if (this.outputs && this.outputs.length) {
          result.push("returns");
          result.push(joinParams(format, this.outputs));
        }
        if (this.gas != null) {
          result.push(`@${this.gas.toString()}`);
        }
      }
      return result.join(" ");
    }
    /**
     *  Return the selector for a function with %%name%% and %%params%%.
     */
    static getSelector(name, params) {
      params = (params || []).map((p) => ParamType.from(p));
      const fragment = new _FunctionFragment(_guard3, name, "view", params, [], null);
      return fragment.selector;
    }
    /**
     *  Returns a new **FunctionFragment** for %%obj%%.
     */
    static from(obj) {
      if (_FunctionFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _FunctionFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid function fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const name = consumeName("function", obj);
        const inputs = consumeParams(obj);
        const mutability = consumeMutability(obj);
        let outputs = [];
        if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
          outputs = consumeParams(obj);
        }
        const gas = consumeGas(obj);
        consumeEoi(obj);
        return new _FunctionFragment(_guard3, name, mutability, inputs, outputs, gas);
      }
      let stateMutability = obj.stateMutability;
      if (stateMutability == null) {
        stateMutability = "payable";
        if (typeof obj.constant === "boolean") {
          stateMutability = "view";
          if (!obj.constant) {
            stateMutability = "payable";
            if (typeof obj.payable === "boolean" && !obj.payable) {
              stateMutability = "nonpayable";
            }
          }
        } else if (typeof obj.payable === "boolean" && !obj.payable) {
          stateMutability = "nonpayable";
        }
      }
      return new _FunctionFragment(_guard3, obj.name, stateMutability, obj.inputs ? obj.inputs.map(ParamType.from) : [], obj.outputs ? obj.outputs.map(ParamType.from) : [], obj.gas != null ? obj.gas : null);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **FunctionFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === FunctionFragmentInternal;
    }
  };
  var StructFragment = class _StructFragment extends NamedFragment {
    /**
     *  @private
     */
    constructor(guard, name, inputs) {
      super(guard, "struct", name, inputs);
      Object.defineProperty(this, internal, { value: StructFragmentInternal });
    }
    /**
     *  Returns a string representation of this struct as %%format%%.
     */
    format() {
      throw new Error("@TODO");
    }
    /**
     *  Returns a new **StructFragment** for %%obj%%.
     */
    static from(obj) {
      if (typeof obj === "string") {
        try {
          return _StructFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid struct fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const name = consumeName("struct", obj);
        const inputs = consumeParams(obj);
        consumeEoi(obj);
        return new _StructFragment(_guard3, name, inputs);
      }
      return new _StructFragment(_guard3, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
    }
    // @TODO: fix this return type
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **StructFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === StructFragmentInternal;
    }
  };

  // node_modules/ethers/lib.esm/abi/abi-coder.js
  var PanicReasons = /* @__PURE__ */ new Map();
  PanicReasons.set(0, "GENERIC_PANIC");
  PanicReasons.set(1, "ASSERT_FALSE");
  PanicReasons.set(17, "OVERFLOW");
  PanicReasons.set(18, "DIVIDE_BY_ZERO");
  PanicReasons.set(33, "ENUM_RANGE_ERROR");
  PanicReasons.set(34, "BAD_STORAGE_DATA");
  PanicReasons.set(49, "STACK_UNDERFLOW");
  PanicReasons.set(50, "ARRAY_RANGE_ERROR");
  PanicReasons.set(65, "OUT_OF_MEMORY");
  PanicReasons.set(81, "UNINITIALIZED_FUNCTION_CALL");
  var paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
  var paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
  var defaultCoder = null;
  var defaultMaxInflation = 1024;
  function getBuiltinCallException(action, tx, data, abiCoder) {
    let message = "missing revert data";
    let reason = null;
    const invocation = null;
    let revert = null;
    if (data) {
      message = "execution reverted";
      const bytes2 = getBytes(data);
      data = hexlify(data);
      if (bytes2.length === 0) {
        message += " (no data present; likely require(false) occurred";
        reason = "require(false)";
      } else if (bytes2.length % 32 !== 4) {
        message += " (could not decode reason; invalid data length)";
      } else if (hexlify(bytes2.slice(0, 4)) === "0x08c379a0") {
        try {
          reason = abiCoder.decode(["string"], bytes2.slice(4))[0];
          revert = {
            signature: "Error(string)",
            name: "Error",
            args: [reason]
          };
          message += `: ${JSON.stringify(reason)}`;
        } catch (error) {
          message += " (could not decode reason; invalid string data)";
        }
      } else if (hexlify(bytes2.slice(0, 4)) === "0x4e487b71") {
        try {
          const code = Number(abiCoder.decode(["uint256"], bytes2.slice(4))[0]);
          revert = {
            signature: "Panic(uint256)",
            name: "Panic",
            args: [code]
          };
          reason = `Panic due to ${PanicReasons.get(code) || "UNKNOWN"}(${code})`;
          message += `: ${reason}`;
        } catch (error) {
          message += " (could not decode panic code)";
        }
      } else {
        message += " (unknown custom error)";
      }
    }
    const transaction = {
      to: tx.to ? getAddress(tx.to) : null,
      data: tx.data || "0x"
    };
    if (tx.from) {
      transaction.from = getAddress(tx.from);
    }
    return makeError(message, "CALL_EXCEPTION", {
      action,
      data,
      reason,
      transaction,
      invocation,
      revert
    });
  }
  var AbiCoder = class _AbiCoder {
    #getCoder(param) {
      if (param.isArray()) {
        return new ArrayCoder(this.#getCoder(param.arrayChildren), param.arrayLength, param.name);
      }
      if (param.isTuple()) {
        return new TupleCoder(param.components.map((c) => this.#getCoder(c)), param.name);
      }
      switch (param.baseType) {
        case "address":
          return new AddressCoder(param.name);
        case "bool":
          return new BooleanCoder(param.name);
        case "string":
          return new StringCoder(param.name);
        case "bytes":
          return new BytesCoder(param.name);
        case "":
          return new NullCoder(param.name);
      }
      let match = param.type.match(paramTypeNumber);
      if (match) {
        let size = parseInt(match[2] || "256");
        assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid " + match[1] + " bit length", "param", param);
        return new NumberCoder(size / 8, match[1] === "int", param.name);
      }
      match = param.type.match(paramTypeBytes);
      if (match) {
        let size = parseInt(match[1]);
        assertArgument(size !== 0 && size <= 32, "invalid bytes length", "param", param);
        return new FixedBytesCoder(size, param.name);
      }
      assertArgument(false, "invalid type", "type", param.type);
    }
    /**
     *  Get the default values for the given %%types%%.
     *
     *  For example, a ``uint`` is by default ``0`` and ``bool``
     *  is by default ``false``.
     */
    getDefaultValue(types) {
      const coders = types.map((type) => this.#getCoder(ParamType.from(type)));
      const coder = new TupleCoder(coders, "_");
      return coder.defaultValue();
    }
    /**
     *  Encode the %%values%% as the %%types%% into ABI data.
     *
     *  @returns DataHexstring
     */
    encode(types, values) {
      assertArgumentCount(values.length, types.length, "types/values length mismatch");
      const coders = types.map((type) => this.#getCoder(ParamType.from(type)));
      const coder = new TupleCoder(coders, "_");
      const writer = new Writer();
      coder.encode(writer, values);
      return writer.data;
    }
    /**
     *  Decode the ABI %%data%% as the %%types%% into values.
     *
     *  If %%loose%% decoding is enabled, then strict padding is
     *  not enforced. Some older versions of Solidity incorrectly
     *  padded event data emitted from ``external`` functions.
     */
    decode(types, data, loose) {
      const coders = types.map((type) => this.#getCoder(ParamType.from(type)));
      const coder = new TupleCoder(coders, "_");
      return coder.decode(new Reader(data, loose, defaultMaxInflation));
    }
    static _setDefaultMaxInflation(value) {
      assertArgument(typeof value === "number" && Number.isInteger(value), "invalid defaultMaxInflation factor", "value", value);
      defaultMaxInflation = value;
    }
    /**
     *  Returns the shared singleton instance of a default [[AbiCoder]].
     *
     *  On the first call, the instance is created internally.
     */
    static defaultAbiCoder() {
      if (defaultCoder == null) {
        defaultCoder = new _AbiCoder();
      }
      return defaultCoder;
    }
    /**
     *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
     *  result %%data%% for the [[CallExceptionAction]] %%action%% against
     *  the Transaction %%tx%%.
     */
    static getBuiltinCallException(action, tx, data) {
      return getBuiltinCallException(action, tx, data, _AbiCoder.defaultAbiCoder());
    }
  };

  // node_modules/ethers/lib.esm/abi/interface.js
  var LogDescription = class {
    /**
     *  The matching fragment for the ``topic0``.
     */
    fragment;
    /**
     *  The name of the Event.
     */
    name;
    /**
     *  The full Event signature.
     */
    signature;
    /**
     *  The topic hash for the Event.
     */
    topic;
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    args;
    /**
     *  @_ignore:
     */
    constructor(fragment, topic, args) {
      const name = fragment.name, signature = fragment.format();
      defineProperties(this, {
        fragment,
        name,
        signature,
        topic,
        args
      });
    }
  };
  var TransactionDescription = class {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    fragment;
    /**
     *  The name of the Function from the transaction ``data``.
     */
    name;
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    args;
    /**
     *  The full Function signature from the transaction ``data``.
     */
    signature;
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    selector;
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    value;
    /**
     *  @_ignore:
     */
    constructor(fragment, selector, args, value) {
      const name = fragment.name, signature = fragment.format();
      defineProperties(this, {
        fragment,
        name,
        args,
        signature,
        selector,
        value
      });
    }
  };
  var ErrorDescription = class {
    /**
     *  The matching fragment.
     */
    fragment;
    /**
     *  The name of the Error.
     */
    name;
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    args;
    /**
     *  The full Error signature.
     */
    signature;
    /**
     *  The selector for the Error.
     */
    selector;
    /**
     *  @_ignore:
     */
    constructor(fragment, selector, args) {
      const name = fragment.name, signature = fragment.format();
      defineProperties(this, {
        fragment,
        name,
        args,
        signature,
        selector
      });
    }
  };
  var Indexed = class {
    /**
     *  The ``keccak256`` of the value logged.
     */
    hash;
    /**
     *  @_ignore:
     */
    _isIndexed;
    /**
     *  Returns ``true`` if %%value%% is an **Indexed**.
     *
     *  This provides a Type Guard for property access.
     */
    static isIndexed(value) {
      return !!(value && value._isIndexed);
    }
    /**
     *  @_ignore:
     */
    constructor(hash3) {
      defineProperties(this, { hash: hash3, _isIndexed: true });
    }
  };
  var PanicReasons2 = {
    "0": "generic panic",
    "1": "assert(false)",
    "17": "arithmetic overflow",
    "18": "division or modulo by zero",
    "33": "enum overflow",
    "34": "invalid encoded storage byte array accessed",
    "49": "out-of-bounds array access; popping on an empty array",
    "50": "out-of-bounds access of an array or bytesN",
    "65": "out of memory",
    "81": "uninitialized function"
  };
  var BuiltinErrors = {
    "0x08c379a0": {
      signature: "Error(string)",
      name: "Error",
      inputs: ["string"],
      reason: (message) => {
        return `reverted with reason string ${JSON.stringify(message)}`;
      }
    },
    "0x4e487b71": {
      signature: "Panic(uint256)",
      name: "Panic",
      inputs: ["uint256"],
      reason: (code) => {
        let reason = "unknown panic code";
        if (code >= 0 && code <= 255 && PanicReasons2[code.toString()]) {
          reason = PanicReasons2[code.toString()];
        }
        return `reverted with panic code 0x${code.toString(16)} (${reason})`;
      }
    }
  };
  var Interface = class _Interface {
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    fragments;
    /**
     *  The Contract constructor.
     */
    deploy;
    /**
     *  The Fallback method, if any.
     */
    fallback;
    /**
     *  If receiving ether is supported.
     */
    receive;
    #errors;
    #events;
    #functions;
    //    #structs: Map<string, StructFragment>;
    #abiCoder;
    /**
     *  Create a new Interface for the %%fragments%%.
     */
    constructor(fragments) {
      let abi = [];
      if (typeof fragments === "string") {
        abi = JSON.parse(fragments);
      } else {
        abi = fragments;
      }
      this.#functions = /* @__PURE__ */ new Map();
      this.#errors = /* @__PURE__ */ new Map();
      this.#events = /* @__PURE__ */ new Map();
      const frags = [];
      for (const a of abi) {
        try {
          frags.push(Fragment.from(a));
        } catch (error) {
          console.log(`[Warning] Invalid Fragment ${JSON.stringify(a)}:`, error.message);
        }
      }
      defineProperties(this, {
        fragments: Object.freeze(frags)
      });
      let fallback = null;
      let receive = false;
      this.#abiCoder = this.getAbiCoder();
      this.fragments.forEach((fragment, index) => {
        let bucket;
        switch (fragment.type) {
          case "constructor":
            if (this.deploy) {
              console.log("duplicate definition - constructor");
              return;
            }
            defineProperties(this, { deploy: fragment });
            return;
          case "fallback":
            if (fragment.inputs.length === 0) {
              receive = true;
            } else {
              assertArgument(!fallback || fragment.payable !== fallback.payable, "conflicting fallback fragments", `fragments[${index}]`, fragment);
              fallback = fragment;
              receive = fallback.payable;
            }
            return;
          case "function":
            bucket = this.#functions;
            break;
          case "event":
            bucket = this.#events;
            break;
          case "error":
            bucket = this.#errors;
            break;
          default:
            return;
        }
        const signature = fragment.format();
        if (bucket.has(signature)) {
          return;
        }
        bucket.set(signature, fragment);
      });
      if (!this.deploy) {
        defineProperties(this, {
          deploy: ConstructorFragment.from("constructor()")
        });
      }
      defineProperties(this, { fallback, receive });
    }
    /**
     *  Returns the entire Human-Readable ABI, as an array of
     *  signatures, optionally as %%minimal%% strings, which
     *  removes parameter names and unneceesary spaces.
     */
    format(minimal) {
      const format = minimal ? "minimal" : "full";
      const abi = this.fragments.map((f2) => f2.format(format));
      return abi;
    }
    /**
     *  Return the JSON-encoded ABI. This is the format Solidiy
     *  returns.
     */
    formatJson() {
      const abi = this.fragments.map((f2) => f2.format("json"));
      return JSON.stringify(abi.map((j) => JSON.parse(j)));
    }
    /**
     *  The ABI coder that will be used to encode and decode binary
     *  data.
     */
    getAbiCoder() {
      return AbiCoder.defaultAbiCoder();
    }
    // Find a function definition by any means necessary (unless it is ambiguous)
    #getFunction(key, values, forceUnique) {
      if (isHexString(key)) {
        const selector = key.toLowerCase();
        for (const fragment of this.#functions.values()) {
          if (selector === fragment.selector) {
            return fragment;
          }
        }
        return null;
      }
      if (key.indexOf("(") === -1) {
        const matching = [];
        for (const [name, fragment] of this.#functions) {
          if (name.split(
            "("
            /* fix:) */
          )[0] === key) {
            matching.push(fragment);
          }
        }
        if (values) {
          const lastValue = values.length > 0 ? values[values.length - 1] : null;
          let valueLength = values.length;
          let allowOptions = true;
          if (Typed.isTyped(lastValue) && lastValue.type === "overrides") {
            allowOptions = false;
            valueLength--;
          }
          for (let i = matching.length - 1; i >= 0; i--) {
            const inputs = matching[i].inputs.length;
            if (inputs !== valueLength && (!allowOptions || inputs !== valueLength - 1)) {
              matching.splice(i, 1);
            }
          }
          for (let i = matching.length - 1; i >= 0; i--) {
            const inputs = matching[i].inputs;
            for (let j = 0; j < values.length; j++) {
              if (!Typed.isTyped(values[j])) {
                continue;
              }
              if (j >= inputs.length) {
                if (values[j].type === "overrides") {
                  continue;
                }
                matching.splice(i, 1);
                break;
              }
              if (values[j].type !== inputs[j].baseType) {
                matching.splice(i, 1);
                break;
              }
            }
          }
        }
        if (matching.length === 1 && values && values.length !== matching[0].inputs.length) {
          const lastArg = values[values.length - 1];
          if (lastArg == null || Array.isArray(lastArg) || typeof lastArg !== "object") {
            matching.splice(0, 1);
          }
        }
        if (matching.length === 0) {
          return null;
        }
        if (matching.length > 1 && forceUnique) {
          const matchStr = matching.map((m) => JSON.stringify(m.format())).join(", ");
          assertArgument(false, `ambiguous function description (i.e. matches ${matchStr})`, "key", key);
        }
        return matching[0];
      }
      const result = this.#functions.get(FunctionFragment.from(key).format());
      if (result) {
        return result;
      }
      return null;
    }
    /**
     *  Get the function name for %%key%%, which may be a function selector,
     *  function name or function signature that belongs to the ABI.
     */
    getFunctionName(key) {
      const fragment = this.#getFunction(key, null, false);
      assertArgument(fragment, "no matching function", "key", key);
      return fragment.name;
    }
    /**
     *  Returns true if %%key%% (a function selector, function name or
     *  function signature) is present in the ABI.
     *
     *  In the case of a function name, the name may be ambiguous, so
     *  accessing the [[FunctionFragment]] may require refinement.
     */
    hasFunction(key) {
      return !!this.#getFunction(key, null, false);
    }
    /**
     *  Get the [[FunctionFragment]] for %%key%%, which may be a function
     *  selector, function name or function signature that belongs to the ABI.
     *
     *  If %%values%% is provided, it will use the Typed API to handle
     *  ambiguous cases where multiple functions match by name.
     *
     *  If the %%key%% and %%values%% do not refine to a single function in
     *  the ABI, this will throw.
     */
    getFunction(key, values) {
      return this.#getFunction(key, values || null, true);
    }
    /**
     *  Iterate over all functions, calling %%callback%%, sorted by their name.
     */
    forEachFunction(callback) {
      const names = Array.from(this.#functions.keys());
      names.sort((a, b2) => a.localeCompare(b2));
      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        callback(this.#functions.get(name), i);
      }
    }
    // Find an event definition by any means necessary (unless it is ambiguous)
    #getEvent(key, values, forceUnique) {
      if (isHexString(key)) {
        const eventTopic = key.toLowerCase();
        for (const fragment of this.#events.values()) {
          if (eventTopic === fragment.topicHash) {
            return fragment;
          }
        }
        return null;
      }
      if (key.indexOf("(") === -1) {
        const matching = [];
        for (const [name, fragment] of this.#events) {
          if (name.split(
            "("
            /* fix:) */
          )[0] === key) {
            matching.push(fragment);
          }
        }
        if (values) {
          for (let i = matching.length - 1; i >= 0; i--) {
            if (matching[i].inputs.length < values.length) {
              matching.splice(i, 1);
            }
          }
          for (let i = matching.length - 1; i >= 0; i--) {
            const inputs = matching[i].inputs;
            for (let j = 0; j < values.length; j++) {
              if (!Typed.isTyped(values[j])) {
                continue;
              }
              if (values[j].type !== inputs[j].baseType) {
                matching.splice(i, 1);
                break;
              }
            }
          }
        }
        if (matching.length === 0) {
          return null;
        }
        if (matching.length > 1 && forceUnique) {
          const matchStr = matching.map((m) => JSON.stringify(m.format())).join(", ");
          assertArgument(false, `ambiguous event description (i.e. matches ${matchStr})`, "key", key);
        }
        return matching[0];
      }
      const result = this.#events.get(EventFragment.from(key).format());
      if (result) {
        return result;
      }
      return null;
    }
    /**
     *  Get the event name for %%key%%, which may be a topic hash,
     *  event name or event signature that belongs to the ABI.
     */
    getEventName(key) {
      const fragment = this.#getEvent(key, null, false);
      assertArgument(fragment, "no matching event", "key", key);
      return fragment.name;
    }
    /**
     *  Returns true if %%key%% (an event topic hash, event name or
     *  event signature) is present in the ABI.
     *
     *  In the case of an event name, the name may be ambiguous, so
     *  accessing the [[EventFragment]] may require refinement.
     */
    hasEvent(key) {
      return !!this.#getEvent(key, null, false);
    }
    /**
     *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
     *  event name or event signature that belongs to the ABI.
     *
     *  If %%values%% is provided, it will use the Typed API to handle
     *  ambiguous cases where multiple events match by name.
     *
     *  If the %%key%% and %%values%% do not refine to a single event in
     *  the ABI, this will throw.
     */
    getEvent(key, values) {
      return this.#getEvent(key, values || null, true);
    }
    /**
     *  Iterate over all events, calling %%callback%%, sorted by their name.
     */
    forEachEvent(callback) {
      const names = Array.from(this.#events.keys());
      names.sort((a, b2) => a.localeCompare(b2));
      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        callback(this.#events.get(name), i);
      }
    }
    /**
     *  Get the [[ErrorFragment]] for %%key%%, which may be an error
     *  selector, error name or error signature that belongs to the ABI.
     *
     *  If %%values%% is provided, it will use the Typed API to handle
     *  ambiguous cases where multiple errors match by name.
     *
     *  If the %%key%% and %%values%% do not refine to a single error in
     *  the ABI, this will throw.
     */
    getError(key, values) {
      if (isHexString(key)) {
        const selector = key.toLowerCase();
        if (BuiltinErrors[selector]) {
          return ErrorFragment.from(BuiltinErrors[selector].signature);
        }
        for (const fragment of this.#errors.values()) {
          if (selector === fragment.selector) {
            return fragment;
          }
        }
        return null;
      }
      if (key.indexOf("(") === -1) {
        const matching = [];
        for (const [name, fragment] of this.#errors) {
          if (name.split(
            "("
            /* fix:) */
          )[0] === key) {
            matching.push(fragment);
          }
        }
        if (matching.length === 0) {
          if (key === "Error") {
            return ErrorFragment.from("error Error(string)");
          }
          if (key === "Panic") {
            return ErrorFragment.from("error Panic(uint256)");
          }
          return null;
        } else if (matching.length > 1) {
          const matchStr = matching.map((m) => JSON.stringify(m.format())).join(", ");
          assertArgument(false, `ambiguous error description (i.e. ${matchStr})`, "name", key);
        }
        return matching[0];
      }
      key = ErrorFragment.from(key).format();
      if (key === "Error(string)") {
        return ErrorFragment.from("error Error(string)");
      }
      if (key === "Panic(uint256)") {
        return ErrorFragment.from("error Panic(uint256)");
      }
      const result = this.#errors.get(key);
      if (result) {
        return result;
      }
      return null;
    }
    /**
     *  Iterate over all errors, calling %%callback%%, sorted by their name.
     */
    forEachError(callback) {
      const names = Array.from(this.#errors.keys());
      names.sort((a, b2) => a.localeCompare(b2));
      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        callback(this.#errors.get(name), i);
      }
    }
    // Get the 4-byte selector used by Solidity to identify a function
    /*
    getSelector(fragment: ErrorFragment | FunctionFragment): string {
        if (typeof(fragment) === "string") {
            const matches: Array<Fragment> = [ ];
    
            try { matches.push(this.getFunction(fragment)); } catch (error) { }
            try { matches.push(this.getError(<string>fragment)); } catch (_) { }
    
            if (matches.length === 0) {
                logger.throwArgumentError("unknown fragment", "key", fragment);
            } else if (matches.length > 1) {
                logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
            }
    
            fragment = matches[0];
        }
    
        return dataSlice(id(fragment.format()), 0, 4);
    }
        */
    // Get the 32-byte topic hash used by Solidity to identify an event
    /*
    getEventTopic(fragment: EventFragment): string {
        //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
        return id(fragment.format());
    }
    */
    _decodeParams(params, data) {
      return this.#abiCoder.decode(params, data);
    }
    _encodeParams(params, values) {
      return this.#abiCoder.encode(params, values);
    }
    /**
     *  Encodes a ``tx.data`` object for deploying the Contract with
     *  the %%values%% as the constructor arguments.
     */
    encodeDeploy(values) {
      return this._encodeParams(this.deploy.inputs, values || []);
    }
    /**
     *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
     *  specified error (see [[getError]] for valid values for
     *  %%key%%).
     *
     *  Most developers should prefer the [[parseCallResult]] method instead,
     *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
     *  corresponding error.
     */
    decodeErrorResult(fragment, data) {
      if (typeof fragment === "string") {
        const f2 = this.getError(fragment);
        assertArgument(f2, "unknown error", "fragment", fragment);
        fragment = f2;
      }
      assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match error ${fragment.name}.`, "data", data);
      return this._decodeParams(fragment.inputs, dataSlice(data, 4));
    }
    /**
     *  Encodes the transaction revert data for a call result that
     *  reverted from the the Contract with the sepcified %%error%%
     *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
     *
     *  This is generally not used by most developers, unless trying to mock
     *  a result from a Contract.
     */
    encodeErrorResult(fragment, values) {
      if (typeof fragment === "string") {
        const f2 = this.getError(fragment);
        assertArgument(f2, "unknown error", "fragment", fragment);
        fragment = f2;
      }
      return concat([
        fragment.selector,
        this._encodeParams(fragment.inputs, values || [])
      ]);
    }
    /**
     *  Decodes the %%data%% from a transaction ``tx.data`` for
     *  the function specified (see [[getFunction]] for valid values
     *  for %%fragment%%).
     *
     *  Most developers should prefer the [[parseTransaction]] method
     *  instead, which will automatically detect the fragment.
     */
    decodeFunctionData(fragment, data) {
      if (typeof fragment === "string") {
        const f2 = this.getFunction(fragment);
        assertArgument(f2, "unknown function", "fragment", fragment);
        fragment = f2;
      }
      assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match function ${fragment.name}.`, "data", data);
      return this._decodeParams(fragment.inputs, dataSlice(data, 4));
    }
    /**
     *  Encodes the ``tx.data`` for a transaction that calls the function
     *  specified (see [[getFunction]] for valid values for %%fragment%%) with
     *  the %%values%%.
     */
    encodeFunctionData(fragment, values) {
      if (typeof fragment === "string") {
        const f2 = this.getFunction(fragment);
        assertArgument(f2, "unknown function", "fragment", fragment);
        fragment = f2;
      }
      return concat([
        fragment.selector,
        this._encodeParams(fragment.inputs, values || [])
      ]);
    }
    /**
     *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
     *  specified function (see [[getFunction]] for valid values for
     *  %%key%%).
     *
     *  Most developers should prefer the [[parseCallResult]] method instead,
     *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
     *  corresponding error.
     */
    decodeFunctionResult(fragment, data) {
      if (typeof fragment === "string") {
        const f2 = this.getFunction(fragment);
        assertArgument(f2, "unknown function", "fragment", fragment);
        fragment = f2;
      }
      let message = "invalid length for result data";
      const bytes2 = getBytesCopy(data);
      if (bytes2.length % 32 === 0) {
        try {
          return this.#abiCoder.decode(fragment.outputs, bytes2);
        } catch (error) {
          message = "could not decode result data";
        }
      }
      assert(false, message, "BAD_DATA", {
        value: hexlify(bytes2),
        info: { method: fragment.name, signature: fragment.format() }
      });
    }
    makeError(_data, tx) {
      const data = getBytes(_data, "data");
      const error = AbiCoder.getBuiltinCallException("call", tx, data);
      const customPrefix = "execution reverted (unknown custom error)";
      if (error.message.startsWith(customPrefix)) {
        const selector = hexlify(data.slice(0, 4));
        const ef = this.getError(selector);
        if (ef) {
          try {
            const args = this.#abiCoder.decode(ef.inputs, data.slice(4));
            error.revert = {
              name: ef.name,
              signature: ef.format(),
              args
            };
            error.reason = error.revert.signature;
            error.message = `execution reverted: ${error.reason}`;
          } catch (e) {
            error.message = `execution reverted (coult not decode custom error)`;
          }
        }
      }
      const parsed = this.parseTransaction(tx);
      if (parsed) {
        error.invocation = {
          method: parsed.name,
          signature: parsed.signature,
          args: parsed.args
        };
      }
      return error;
    }
    /**
     *  Encodes the result data (e.g. from an ``eth_call``) for the
     *  specified function (see [[getFunction]] for valid values
     *  for %%fragment%%) with %%values%%.
     *
     *  This is generally not used by most developers, unless trying to mock
     *  a result from a Contract.
     */
    encodeFunctionResult(fragment, values) {
      if (typeof fragment === "string") {
        const f2 = this.getFunction(fragment);
        assertArgument(f2, "unknown function", "fragment", fragment);
        fragment = f2;
      }
      return hexlify(this.#abiCoder.encode(fragment.outputs, values || []));
    }
    /*
        spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
            const promises: Array<Promise<>> = [ ];
            const process = function(type: ParamType, value: any): any {
                if (type.baseType === "array") {
                    return descend(type.child
                }
                if (type. === "address") {
                }
            };
    
            const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
                if (inputs.length !== values.length) { throw new Error("length mismatch"); }
                
            };
    
            const result: Array<any> = [ ];
            values.forEach((value, index) => {
                if (value == null) {
                    topics.push(null);
                } else if (param.baseType === "array" || param.baseType === "tuple") {
                    logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
                } else if (Array.isArray(value)) {
                    topics.push(value.map((value) => encodeTopic(param, value)));
                } else {
                    topics.push(encodeTopic(param, value));
                }
            });
        }
    */
    // Create the filter for the event with search criteria (e.g. for eth_filterLog)
    encodeFilterTopics(fragment, values) {
      if (typeof fragment === "string") {
        const f2 = this.getEvent(fragment);
        assertArgument(f2, "unknown event", "eventFragment", fragment);
        fragment = f2;
      }
      assert(values.length <= fragment.inputs.length, `too many arguments for ${fragment.format()}`, "UNEXPECTED_ARGUMENT", { count: values.length, expectedCount: fragment.inputs.length });
      const topics = [];
      if (!fragment.anonymous) {
        topics.push(fragment.topicHash);
      }
      const encodeTopic = (param, value) => {
        if (param.type === "string") {
          return id(value);
        } else if (param.type === "bytes") {
          return keccak256(hexlify(value));
        }
        if (param.type === "bool" && typeof value === "boolean") {
          value = value ? "0x01" : "0x00";
        } else if (param.type.match(/^u?int/)) {
          value = toBeHex(value);
        } else if (param.type.match(/^bytes/)) {
          value = zeroPadBytes(value, 32);
        } else if (param.type === "address") {
          this.#abiCoder.encode(["address"], [value]);
        }
        return zeroPadValue(hexlify(value), 32);
      };
      values.forEach((value, index) => {
        const param = fragment.inputs[index];
        if (!param.indexed) {
          assertArgument(value == null, "cannot filter non-indexed parameters; must be null", "contract." + param.name, value);
          return;
        }
        if (value == null) {
          topics.push(null);
        } else if (param.baseType === "array" || param.baseType === "tuple") {
          assertArgument(false, "filtering with tuples or arrays not supported", "contract." + param.name, value);
        } else if (Array.isArray(value)) {
          topics.push(value.map((value2) => encodeTopic(param, value2)));
        } else {
          topics.push(encodeTopic(param, value));
        }
      });
      while (topics.length && topics[topics.length - 1] === null) {
        topics.pop();
      }
      return topics;
    }
    encodeEventLog(fragment, values) {
      if (typeof fragment === "string") {
        const f2 = this.getEvent(fragment);
        assertArgument(f2, "unknown event", "eventFragment", fragment);
        fragment = f2;
      }
      const topics = [];
      const dataTypes = [];
      const dataValues = [];
      if (!fragment.anonymous) {
        topics.push(fragment.topicHash);
      }
      assertArgument(values.length === fragment.inputs.length, "event arguments/values mismatch", "values", values);
      fragment.inputs.forEach((param, index) => {
        const value = values[index];
        if (param.indexed) {
          if (param.type === "string") {
            topics.push(id(value));
          } else if (param.type === "bytes") {
            topics.push(keccak256(value));
          } else if (param.baseType === "tuple" || param.baseType === "array") {
            throw new Error("not implemented");
          } else {
            topics.push(this.#abiCoder.encode([param.type], [value]));
          }
        } else {
          dataTypes.push(param);
          dataValues.push(value);
        }
      });
      return {
        data: this.#abiCoder.encode(dataTypes, dataValues),
        topics
      };
    }
    // Decode a filter for the event and the search criteria
    decodeEventLog(fragment, data, topics) {
      if (typeof fragment === "string") {
        const f2 = this.getEvent(fragment);
        assertArgument(f2, "unknown event", "eventFragment", fragment);
        fragment = f2;
      }
      if (topics != null && !fragment.anonymous) {
        const eventTopic = fragment.topicHash;
        assertArgument(isHexString(topics[0], 32) && topics[0].toLowerCase() === eventTopic, "fragment/topic mismatch", "topics[0]", topics[0]);
        topics = topics.slice(1);
      }
      const indexed = [];
      const nonIndexed = [];
      const dynamic = [];
      fragment.inputs.forEach((param, index) => {
        if (param.indexed) {
          if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
            indexed.push(ParamType.from({ type: "bytes32", name: param.name }));
            dynamic.push(true);
          } else {
            indexed.push(param);
            dynamic.push(false);
          }
        } else {
          nonIndexed.push(param);
          dynamic.push(false);
        }
      });
      const resultIndexed = topics != null ? this.#abiCoder.decode(indexed, concat(topics)) : null;
      const resultNonIndexed = this.#abiCoder.decode(nonIndexed, data, true);
      const values = [];
      const keys = [];
      let nonIndexedIndex = 0, indexedIndex = 0;
      fragment.inputs.forEach((param, index) => {
        let value = null;
        if (param.indexed) {
          if (resultIndexed == null) {
            value = new Indexed(null);
          } else if (dynamic[index]) {
            value = new Indexed(resultIndexed[indexedIndex++]);
          } else {
            try {
              value = resultIndexed[indexedIndex++];
            } catch (error) {
              value = error;
            }
          }
        } else {
          try {
            value = resultNonIndexed[nonIndexedIndex++];
          } catch (error) {
            value = error;
          }
        }
        values.push(value);
        keys.push(param.name || null);
      });
      return Result.fromItems(values, keys);
    }
    /**
     *  Parses a transaction, finding the matching function and extracts
     *  the parameter values along with other useful function details.
     *
     *  If the matching function cannot be found, return null.
     */
    parseTransaction(tx) {
      const data = getBytes(tx.data, "tx.data");
      const value = getBigInt(tx.value != null ? tx.value : 0, "tx.value");
      const fragment = this.getFunction(hexlify(data.slice(0, 4)));
      if (!fragment) {
        return null;
      }
      const args = this.#abiCoder.decode(fragment.inputs, data.slice(4));
      return new TransactionDescription(fragment, fragment.selector, args, value);
    }
    parseCallResult(data) {
      throw new Error("@TODO");
    }
    /**
     *  Parses a receipt log, finding the matching event and extracts
     *  the parameter values along with other useful event details.
     *
     *  If the matching event cannot be found, returns null.
     */
    parseLog(log) {
      const fragment = this.getEvent(log.topics[0]);
      if (!fragment || fragment.anonymous) {
        return null;
      }
      return new LogDescription(fragment, fragment.topicHash, this.decodeEventLog(fragment, log.data, log.topics));
    }
    /**
     *  Parses a revert data, finding the matching error and extracts
     *  the parameter values along with other useful error details.
     *
     *  If the matching error cannot be found, returns null.
     */
    parseError(data) {
      const hexData = hexlify(data);
      const fragment = this.getError(dataSlice(hexData, 0, 4));
      if (!fragment) {
        return null;
      }
      const args = this.#abiCoder.decode(fragment.inputs, dataSlice(hexData, 4));
      return new ErrorDescription(fragment, fragment.selector, args);
    }
    /**
     *  Creates a new [[Interface]] from the ABI %%value%%.
     *
     *  The %%value%% may be provided as an existing [[Interface]] object,
     *  a JSON-encoded ABI or any Human-Readable ABI format.
     */
    static from(value) {
      if (value instanceof _Interface) {
        return value;
      }
      if (typeof value === "string") {
        return new _Interface(JSON.parse(value));
      }
      if (typeof value.formatJson === "function") {
        return new _Interface(value.formatJson());
      }
      if (typeof value.format === "function") {
        return new _Interface(value.format("json"));
      }
      return new _Interface(value);
    }
  };

  // node_modules/ethers/lib.esm/providers/provider.js
  var BN_08 = BigInt(0);
  function toJson(value) {
    if (value == null) {
      return null;
    }
    return value.toString();
  }
  function copyRequest(req) {
    const result = {};
    if (req.to) {
      result.to = req.to;
    }
    if (req.from) {
      result.from = req.from;
    }
    if (req.data) {
      result.data = hexlify(req.data);
    }
    const bigIntKeys = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
    for (const key of bigIntKeys) {
      if (!(key in req) || req[key] == null) {
        continue;
      }
      result[key] = getBigInt(req[key], `request.${key}`);
    }
    const numberKeys = "type,nonce".split(/,/);
    for (const key of numberKeys) {
      if (!(key in req) || req[key] == null) {
        continue;
      }
      result[key] = getNumber(req[key], `request.${key}`);
    }
    if (req.accessList) {
      result.accessList = accessListify(req.accessList);
    }
    if (req.authorizationList) {
      result.authorizationList = req.authorizationList.slice();
    }
    if ("blockTag" in req) {
      result.blockTag = req.blockTag;
    }
    if ("enableCcipRead" in req) {
      result.enableCcipRead = !!req.enableCcipRead;
    }
    if ("customData" in req) {
      result.customData = req.customData;
    }
    if ("blobVersionedHashes" in req && req.blobVersionedHashes) {
      result.blobVersionedHashes = req.blobVersionedHashes.slice();
    }
    if ("kzg" in req) {
      result.kzg = req.kzg;
    }
    if ("blobWrapperVersion" in req) {
      result.blobWrapperVersion = req.blobWrapperVersion;
    }
    if ("blobs" in req && req.blobs) {
      result.blobs = req.blobs.map((b2) => {
        if (isBytesLike(b2)) {
          return hexlify(b2);
        }
        return Object.assign({}, b2);
      });
    }
    return result;
  }
  var Log = class {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    provider;
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    transactionHash;
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    blockHash;
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    blockNumber;
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    removed;
    /**
     *  The address of the contract that emitted this log.
     */
    address;
    /**
     *  The data included in this log when it was emitted.
     */
    data;
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    topics;
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    index;
    /**
     *  The index within the transaction of this log.
     */
    transactionIndex;
    /**
     *  @_ignore:
     */
    constructor(log, provider) {
      this.provider = provider;
      const topics = Object.freeze(log.topics.slice());
      defineProperties(this, {
        transactionHash: log.transactionHash,
        blockHash: log.blockHash,
        blockNumber: log.blockNumber,
        removed: log.removed,
        address: log.address,
        data: log.data,
        topics,
        index: log.index,
        transactionIndex: log.transactionIndex
      });
    }
    /**
     *  Returns a JSON-compatible object.
     */
    toJSON() {
      const { address, blockHash, blockNumber, data, index, removed, topics, transactionHash, transactionIndex } = this;
      return {
        _type: "log",
        address,
        blockHash,
        blockNumber,
        data,
        index,
        removed,
        topics,
        transactionHash,
        transactionIndex
      };
    }
    /**
     *  Returns the block that this log occurred in.
     */
    async getBlock() {
      const block = await this.provider.getBlock(this.blockHash);
      assert(!!block, "failed to find transaction", "UNKNOWN_ERROR", {});
      return block;
    }
    /**
     *  Returns the transaction that this log occurred in.
     */
    async getTransaction() {
      const tx = await this.provider.getTransaction(this.transactionHash);
      assert(!!tx, "failed to find transaction", "UNKNOWN_ERROR", {});
      return tx;
    }
    /**
     *  Returns the transaction receipt fot the transaction that this
     *  log occurred in.
     */
    async getTransactionReceipt() {
      const receipt = await this.provider.getTransactionReceipt(this.transactionHash);
      assert(!!receipt, "failed to find transaction receipt", "UNKNOWN_ERROR", {});
      return receipt;
    }
    /**
     *  @_ignore:
     */
    removedEvent() {
      return createRemovedLogFilter(this);
    }
  };
  var TransactionReceipt = class {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    provider;
    /**
     *  The address the transaction was sent to.
     */
    to;
    /**
     *  The sender of the transaction.
     */
    from;
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    contractAddress;
    /**
     *  The transaction hash.
     */
    hash;
    /**
     *  The index of this transaction within the block transactions.
     */
    index;
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    blockHash;
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    blockNumber;
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    logsBloom;
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    gasUsed;
    /**
     *  The gas used for BLObs. See [[link-eip-4844]].
     */
    blobGasUsed;
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    cumulativeGasUsed;
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    gasPrice;
    /**
     *  The price paid per BLOB in gas. See [[link-eip-4844]].
     */
    blobGasPrice;
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    type;
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    status;
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    root;
    #logs;
    /**
     *  @_ignore:
     */
    constructor(tx, provider) {
      this.#logs = Object.freeze(tx.logs.map((log) => {
        return new Log(log, provider);
      }));
      let gasPrice = BN_08;
      if (tx.effectiveGasPrice != null) {
        gasPrice = tx.effectiveGasPrice;
      } else if (tx.gasPrice != null) {
        gasPrice = tx.gasPrice;
      }
      defineProperties(this, {
        provider,
        to: tx.to,
        from: tx.from,
        contractAddress: tx.contractAddress,
        hash: tx.hash,
        index: tx.index,
        blockHash: tx.blockHash,
        blockNumber: tx.blockNumber,
        logsBloom: tx.logsBloom,
        gasUsed: tx.gasUsed,
        cumulativeGasUsed: tx.cumulativeGasUsed,
        blobGasUsed: tx.blobGasUsed,
        gasPrice,
        blobGasPrice: tx.blobGasPrice,
        type: tx.type,
        //byzantium: tx.byzantium,
        status: tx.status,
        root: tx.root
      });
    }
    /**
     *  The logs for this transaction.
     */
    get logs() {
      return this.#logs;
    }
    /**
     *  Returns a JSON-compatible representation.
     */
    toJSON() {
      const {
        to,
        from,
        contractAddress,
        hash: hash3,
        index,
        blockHash,
        blockNumber,
        logsBloom,
        logs,
        //byzantium, 
        status,
        root
      } = this;
      return {
        _type: "TransactionReceipt",
        blockHash,
        blockNumber,
        //byzantium, 
        contractAddress,
        cumulativeGasUsed: toJson(this.cumulativeGasUsed),
        from,
        gasPrice: toJson(this.gasPrice),
        blobGasUsed: toJson(this.blobGasUsed),
        blobGasPrice: toJson(this.blobGasPrice),
        gasUsed: toJson(this.gasUsed),
        hash: hash3,
        index,
        logs,
        logsBloom,
        root,
        status,
        to
      };
    }
    /**
     *  @_ignore:
     */
    get length() {
      return this.logs.length;
    }
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.length) {
            return { value: this.logs[index++], done: false };
          }
          return { value: void 0, done: true };
        }
      };
    }
    /**
     *  The total fee for this transaction, in wei.
     */
    get fee() {
      return this.gasUsed * this.gasPrice;
    }
    /**
     *  Resolves to the block this transaction occurred in.
     */
    async getBlock() {
      const block = await this.provider.getBlock(this.blockHash);
      if (block == null) {
        throw new Error("TODO");
      }
      return block;
    }
    /**
     *  Resolves to the transaction this transaction occurred in.
     */
    async getTransaction() {
      const tx = await this.provider.getTransaction(this.hash);
      if (tx == null) {
        throw new Error("TODO");
      }
      return tx;
    }
    /**
     *  Resolves to the return value of the execution of this transaction.
     *
     *  Support for this feature is limited, as it requires an archive node
     *  with the ``debug_`` or ``trace_`` API enabled.
     */
    async getResult() {
      return await this.provider.getTransactionResult(this.hash);
    }
    /**
     *  Resolves to the number of confirmations this transaction has.
     */
    async confirmations() {
      return await this.provider.getBlockNumber() - this.blockNumber + 1;
    }
    /**
     *  @_ignore:
     */
    removedEvent() {
      return createRemovedTransactionFilter(this);
    }
    /**
     *  @_ignore:
     */
    reorderedEvent(other) {
      assert(!other || other.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" });
      return createReorderedTransactionFilter(this, other);
    }
  };
  var TransactionResponse = class _TransactionResponse {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    provider;
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    blockNumber;
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    blockHash;
    /**
     *  The index within the block that this transaction resides at.
     */
    index;
    /**
     *  The transaction hash.
     */
    hash;
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    type;
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    to;
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    from;
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    nonce;
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    gasLimit;
    /**
     *  The gas price can have various values, depending on the network.
     *
     *  In modern networks, for transactions that are included this is
     *  the //effective gas price// (the fee per gas that was actually
     *  charged), while for transactions that have not been included yet
     *  is the [[maxFeePerGas]].
     *
     *  For legacy transactions, or transactions on legacy networks, this
     *  is the fee that will be charged per unit of gas the transaction
     *  consumes.
     */
    gasPrice;
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    maxPriorityFeePerGas;
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    maxFeePerGas;
    /**
     *  The [[link-eip-4844]] max fee per BLOb gas.
     */
    maxFeePerBlobGas;
    /**
     *  The data.
     */
    data;
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    value;
    /**
     *  The chain ID.
     */
    chainId;
    /**
     *  The signature.
     */
    signature;
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    accessList;
    /**
     *  The [[link-eip-4844]] BLOb versioned hashes.
     */
    blobVersionedHashes;
    /**
     *  The [[link-eip-7702]] authorizations (if any).
     */
    authorizationList;
    #startBlock;
    /**
     *  @_ignore:
     */
    constructor(tx, provider) {
      this.provider = provider;
      this.blockNumber = tx.blockNumber != null ? tx.blockNumber : null;
      this.blockHash = tx.blockHash != null ? tx.blockHash : null;
      this.hash = tx.hash;
      this.index = tx.index;
      this.type = tx.type;
      this.from = tx.from;
      this.to = tx.to || null;
      this.gasLimit = tx.gasLimit;
      this.nonce = tx.nonce;
      this.data = tx.data;
      this.value = tx.value;
      this.gasPrice = tx.gasPrice;
      this.maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? tx.maxPriorityFeePerGas : null;
      this.maxFeePerGas = tx.maxFeePerGas != null ? tx.maxFeePerGas : null;
      this.maxFeePerBlobGas = tx.maxFeePerBlobGas != null ? tx.maxFeePerBlobGas : null;
      this.chainId = tx.chainId;
      this.signature = tx.signature;
      this.accessList = tx.accessList != null ? tx.accessList : null;
      this.blobVersionedHashes = tx.blobVersionedHashes != null ? tx.blobVersionedHashes : null;
      this.authorizationList = tx.authorizationList != null ? tx.authorizationList : null;
      this.#startBlock = -1;
    }
    /**
     *  Returns a JSON-compatible representation of this transaction.
     */
    toJSON() {
      const { blockNumber, blockHash, index, hash: hash3, type, to, from, nonce, data, signature, accessList, blobVersionedHashes } = this;
      return {
        _type: "TransactionResponse",
        accessList,
        blockNumber,
        blockHash,
        blobVersionedHashes,
        chainId: toJson(this.chainId),
        data,
        from,
        gasLimit: toJson(this.gasLimit),
        gasPrice: toJson(this.gasPrice),
        hash: hash3,
        maxFeePerGas: toJson(this.maxFeePerGas),
        maxPriorityFeePerGas: toJson(this.maxPriorityFeePerGas),
        maxFeePerBlobGas: toJson(this.maxFeePerBlobGas),
        nonce,
        signature,
        to,
        index,
        type,
        value: toJson(this.value)
      };
    }
    /**
     *  Resolves to the Block that this transaction was included in.
     *
     *  This will return null if the transaction has not been included yet.
     */
    async getBlock() {
      let blockNumber = this.blockNumber;
      if (blockNumber == null) {
        const tx = await this.getTransaction();
        if (tx) {
          blockNumber = tx.blockNumber;
        }
      }
      if (blockNumber == null) {
        return null;
      }
      const block = this.provider.getBlock(blockNumber);
      if (block == null) {
        throw new Error("TODO");
      }
      return block;
    }
    /**
     *  Resolves to this transaction being re-requested from the
     *  provider. This can be used if you have an unmined transaction
     *  and wish to get an up-to-date populated instance.
     */
    async getTransaction() {
      return this.provider.getTransaction(this.hash);
    }
    /**
     *  Resolve to the number of confirmations this transaction has.
     */
    async confirmations() {
      if (this.blockNumber == null) {
        const { tx, blockNumber: blockNumber2 } = await resolveProperties({
          tx: this.getTransaction(),
          blockNumber: this.provider.getBlockNumber()
        });
        if (tx == null || tx.blockNumber == null) {
          return 0;
        }
        return blockNumber2 - tx.blockNumber + 1;
      }
      const blockNumber = await this.provider.getBlockNumber();
      return blockNumber - this.blockNumber + 1;
    }
    /**
     *  Resolves once this transaction has been mined and has
     *  %%confirms%% blocks including it (default: ``1``) with an
     *  optional %%timeout%%.
     *
     *  This can resolve to ``null`` only if %%confirms%% is ``0``
     *  and the transaction has not been mined, otherwise this will
     *  wait until enough confirmations have completed.
     */
    async wait(_confirms, _timeout) {
      const confirms = _confirms == null ? 1 : _confirms;
      const timeout = _timeout == null ? 0 : _timeout;
      let startBlock = this.#startBlock;
      let nextScan = -1;
      let stopScanning = startBlock === -1 ? true : false;
      const checkReplacement = async () => {
        if (stopScanning) {
          return null;
        }
        const { blockNumber, nonce } = await resolveProperties({
          blockNumber: this.provider.getBlockNumber(),
          nonce: this.provider.getTransactionCount(this.from)
        });
        if (nonce < this.nonce) {
          startBlock = blockNumber;
          return;
        }
        if (stopScanning) {
          return null;
        }
        const mined = await this.getTransaction();
        if (mined && mined.blockNumber != null) {
          return;
        }
        if (nextScan === -1) {
          nextScan = startBlock - 3;
          if (nextScan < this.#startBlock) {
            nextScan = this.#startBlock;
          }
        }
        while (nextScan <= blockNumber) {
          if (stopScanning) {
            return null;
          }
          const block = await this.provider.getBlock(nextScan, true);
          if (block == null) {
            return;
          }
          for (const hash3 of block) {
            if (hash3 === this.hash) {
              return;
            }
          }
          for (let i = 0; i < block.length; i++) {
            const tx = await block.getTransaction(i);
            if (tx.from === this.from && tx.nonce === this.nonce) {
              if (stopScanning) {
                return null;
              }
              const receipt2 = await this.provider.getTransactionReceipt(tx.hash);
              if (receipt2 == null) {
                return;
              }
              if (blockNumber - receipt2.blockNumber + 1 < confirms) {
                return;
              }
              let reason = "replaced";
              if (tx.data === this.data && tx.to === this.to && tx.value === this.value) {
                reason = "repriced";
              } else if (tx.data === "0x" && tx.from === tx.to && tx.value === BN_08) {
                reason = "cancelled";
              }
              assert(false, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: reason === "replaced" || reason === "cancelled",
                reason,
                replacement: tx.replaceableTransaction(startBlock),
                hash: tx.hash,
                receipt: receipt2
              });
            }
          }
          nextScan++;
        }
        return;
      };
      const checkReceipt = (receipt2) => {
        if (receipt2 == null || receipt2.status !== 0) {
          return receipt2;
        }
        assert(false, "transaction execution reverted", "CALL_EXCEPTION", {
          action: "sendTransaction",
          data: null,
          reason: null,
          invocation: null,
          revert: null,
          transaction: {
            to: receipt2.to,
            from: receipt2.from,
            data: ""
            // @TODO: in v7, split out sendTransaction properties
          },
          receipt: receipt2
        });
      };
      const receipt = await this.provider.getTransactionReceipt(this.hash);
      if (confirms === 0) {
        return checkReceipt(receipt);
      }
      if (receipt) {
        if (confirms === 1 || await receipt.confirmations() >= confirms) {
          return checkReceipt(receipt);
        }
      } else {
        await checkReplacement();
        if (confirms === 0) {
          return null;
        }
      }
      const waiter = new Promise((resolve, reject) => {
        const cancellers = [];
        const cancel = () => {
          cancellers.forEach((c) => c());
        };
        cancellers.push(() => {
          stopScanning = true;
        });
        if (timeout > 0) {
          const timer = setTimeout(() => {
            cancel();
            reject(makeError("wait for transaction timeout", "TIMEOUT"));
          }, timeout);
          cancellers.push(() => {
            clearTimeout(timer);
          });
        }
        const txListener = async (receipt2) => {
          if (await receipt2.confirmations() >= confirms) {
            cancel();
            try {
              resolve(checkReceipt(receipt2));
            } catch (error) {
              reject(error);
            }
          }
        };
        cancellers.push(() => {
          this.provider.off(this.hash, txListener);
        });
        this.provider.on(this.hash, txListener);
        if (startBlock >= 0) {
          const replaceListener = async () => {
            try {
              await checkReplacement();
            } catch (error) {
              if (isError(error, "TRANSACTION_REPLACED")) {
                cancel();
                reject(error);
                return;
              }
            }
            if (!stopScanning) {
              this.provider.once("block", replaceListener);
            }
          };
          cancellers.push(() => {
            this.provider.off("block", replaceListener);
          });
          this.provider.once("block", replaceListener);
        }
      });
      return await waiter;
    }
    /**
     *  Returns ``true`` if this transaction has been included.
     *
     *  This is effective only as of the time the TransactionResponse
     *  was instantiated. To get up-to-date information, use
     *  [[getTransaction]].
     *
     *  This provides a Type Guard that this transaction will have
     *  non-null property values for properties that are null for
     *  unmined transactions.
     */
    isMined() {
      return this.blockHash != null;
    }
    /**
     *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
     *  transaction.
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */
    isLegacy() {
      return this.type === 0;
    }
    /**
     *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
     *  transaction. See [[link-eip-2070]].
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */
    isBerlin() {
      return this.type === 1;
    }
    /**
     *  Returns true if the transaction is a London (i.e. ``type == 2``)
     *  transaction. See [[link-eip-1559]].
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */
    isLondon() {
      return this.type === 2;
    }
    /**
     *  Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
     *  transaction. See [[link-eip-4844]].
     */
    isCancun() {
      return this.type === 3;
    }
    /**
     *  Returns a filter which can be used to listen for orphan events
     *  that evict this transaction.
     */
    removedEvent() {
      assert(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
      return createRemovedTransactionFilter(this);
    }
    /**
     *  Returns a filter which can be used to listen for orphan events
     *  that re-order this event against %%other%%.
     */
    reorderedEvent(other) {
      assert(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
      assert(!other || other.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
      return createReorderedTransactionFilter(this, other);
    }
    /**
     *  Returns a new TransactionResponse instance which has the ability to
     *  detect (and throw an error) if the transaction is replaced, which
     *  will begin scanning at %%startBlock%%.
     *
     *  This should generally not be used by developers and is intended
     *  primarily for internal use. Setting an incorrect %%startBlock%% can
     *  have devastating performance consequences if used incorrectly.
     */
    replaceableTransaction(startBlock) {
      assertArgument(Number.isInteger(startBlock) && startBlock >= 0, "invalid startBlock", "startBlock", startBlock);
      const tx = new _TransactionResponse(this, this.provider);
      tx.#startBlock = startBlock;
      return tx;
    }
  };
  function createReorderedTransactionFilter(tx, other) {
    return { orphan: "reorder-transaction", tx, other };
  }
  function createRemovedTransactionFilter(tx) {
    return { orphan: "drop-transaction", tx };
  }
  function createRemovedLogFilter(log) {
    return { orphan: "drop-log", log: {
      transactionHash: log.transactionHash,
      blockHash: log.blockHash,
      blockNumber: log.blockNumber,
      address: log.address,
      data: log.data,
      topics: Object.freeze(log.topics.slice()),
      index: log.index
    } };
  }

  // node_modules/ethers/lib.esm/contract/wrappers.js
  var EventLog = class extends Log {
    /**
     *  The Contract Interface.
     */
    interface;
    /**
     *  The matching event.
     */
    fragment;
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    args;
    /**
     * @_ignore:
     */
    constructor(log, iface, fragment) {
      super(log, log.provider);
      const args = iface.decodeEventLog(fragment, log.data, log.topics);
      defineProperties(this, { args, fragment, interface: iface });
    }
    /**
     *  The name of the event.
     */
    get eventName() {
      return this.fragment.name;
    }
    /**
     *  The signature of the event.
     */
    get eventSignature() {
      return this.fragment.format();
    }
  };
  var UndecodedEventLog = class extends Log {
    /**
     *  The error encounted when trying to decode the log.
     */
    error;
    /**
     * @_ignore:
     */
    constructor(log, error) {
      super(log, log.provider);
      defineProperties(this, { error });
    }
  };
  var ContractTransactionReceipt = class extends TransactionReceipt {
    #iface;
    /**
     *  @_ignore:
     */
    constructor(iface, provider, tx) {
      super(tx, provider);
      this.#iface = iface;
    }
    /**
     *  The parsed logs for any [[Log]] which has a matching event in the
     *  Contract ABI.
     */
    get logs() {
      return super.logs.map((log) => {
        const fragment = log.topics.length ? this.#iface.getEvent(log.topics[0]) : null;
        if (fragment) {
          try {
            return new EventLog(log, this.#iface, fragment);
          } catch (error) {
            return new UndecodedEventLog(log, error);
          }
        }
        return log;
      });
    }
  };
  var ContractTransactionResponse = class extends TransactionResponse {
    #iface;
    /**
     *  @_ignore:
     */
    constructor(iface, provider, tx) {
      super(tx, provider);
      this.#iface = iface;
    }
    /**
     *  Resolves once this transaction has been mined and has
     *  %%confirms%% blocks including it (default: ``1``) with an
     *  optional %%timeout%%.
     *
     *  This can resolve to ``null`` only if %%confirms%% is ``0``
     *  and the transaction has not been mined, otherwise this will
     *  wait until enough confirmations have completed.
     */
    async wait(confirms, timeout) {
      const receipt = await super.wait(confirms, timeout);
      if (receipt == null) {
        return null;
      }
      return new ContractTransactionReceipt(this.#iface, this.provider, receipt);
    }
  };
  var ContractUnknownEventPayload = class extends EventPayload {
    /**
     *  The log with no matching events.
     */
    log;
    /**
     *  @_event:
     */
    constructor(contract, listener, filter, log) {
      super(contract, listener, filter);
      defineProperties(this, { log });
    }
    /**
     *  Resolves to the block the event occured in.
     */
    async getBlock() {
      return await this.log.getBlock();
    }
    /**
     *  Resolves to the transaction the event occured in.
     */
    async getTransaction() {
      return await this.log.getTransaction();
    }
    /**
     *  Resolves to the transaction receipt the event occured in.
     */
    async getTransactionReceipt() {
      return await this.log.getTransactionReceipt();
    }
  };
  var ContractEventPayload = class extends ContractUnknownEventPayload {
    /**
     *  @_ignore:
     */
    constructor(contract, listener, filter, fragment, _log) {
      super(contract, listener, filter, new EventLog(_log, contract.interface, fragment));
      const args = contract.interface.decodeEventLog(fragment, this.log.data, this.log.topics);
      defineProperties(this, { args, fragment });
    }
    /**
     *  The event name.
     */
    get eventName() {
      return this.fragment.name;
    }
    /**
     *  The event signature.
     */
    get eventSignature() {
      return this.fragment.format();
    }
  };

  // node_modules/ethers/lib.esm/contract/contract.js
  var BN_09 = BigInt(0);
  function canCall(value) {
    return value && typeof value.call === "function";
  }
  function canEstimate(value) {
    return value && typeof value.estimateGas === "function";
  }
  function canResolve(value) {
    return value && typeof value.resolveName === "function";
  }
  function canSend(value) {
    return value && typeof value.sendTransaction === "function";
  }
  function getResolver(value) {
    if (value != null) {
      if (canResolve(value)) {
        return value;
      }
      if (value.provider) {
        return value.provider;
      }
    }
    return void 0;
  }
  var PreparedTopicFilter = class {
    #filter;
    fragment;
    constructor(contract, fragment, args) {
      defineProperties(this, { fragment });
      if (fragment.inputs.length < args.length) {
        throw new Error("too many arguments");
      }
      const runner = getRunner(contract.runner, "resolveName");
      const resolver = canResolve(runner) ? runner : null;
      this.#filter = async function() {
        const resolvedArgs = await Promise.all(fragment.inputs.map((param, index) => {
          const arg = args[index];
          if (arg == null) {
            return null;
          }
          return param.walkAsync(args[index], (type, value) => {
            if (type === "address") {
              if (Array.isArray(value)) {
                return Promise.all(value.map((v) => resolveAddress(v, resolver)));
              }
              return resolveAddress(value, resolver);
            }
            return value;
          });
        }));
        return contract.interface.encodeFilterTopics(fragment, resolvedArgs);
      }();
    }
    getTopicFilter() {
      return this.#filter;
    }
  };
  function getRunner(value, feature) {
    if (value == null) {
      return null;
    }
    if (typeof value[feature] === "function") {
      return value;
    }
    if (value.provider && typeof value.provider[feature] === "function") {
      return value.provider;
    }
    return null;
  }
  function getProvider(value) {
    if (value == null) {
      return null;
    }
    return value.provider || null;
  }
  async function copyOverrides(arg, allowed) {
    const _overrides = Typed.dereference(arg, "overrides");
    assertArgument(typeof _overrides === "object", "invalid overrides parameter", "overrides", arg);
    const overrides = copyRequest(_overrides);
    assertArgument(overrides.to == null || (allowed || []).indexOf("to") >= 0, "cannot override to", "overrides.to", overrides.to);
    assertArgument(overrides.data == null || (allowed || []).indexOf("data") >= 0, "cannot override data", "overrides.data", overrides.data);
    if (overrides.from) {
      overrides.from = overrides.from;
    }
    return overrides;
  }
  async function resolveArgs(_runner, inputs, args) {
    const runner = getRunner(_runner, "resolveName");
    const resolver = canResolve(runner) ? runner : null;
    return await Promise.all(inputs.map((param, index) => {
      return param.walkAsync(args[index], (type, value) => {
        value = Typed.dereference(value, type);
        if (type === "address") {
          return resolveAddress(value, resolver);
        }
        return value;
      });
    }));
  }
  function buildWrappedFallback(contract) {
    const populateTransaction = async function(overrides) {
      const tx = await copyOverrides(overrides, ["data"]);
      tx.to = await contract.getAddress();
      if (tx.from) {
        tx.from = await resolveAddress(tx.from, getResolver(contract.runner));
      }
      const iface = contract.interface;
      const noValue = getBigInt(tx.value || BN_09, "overrides.value") === BN_09;
      const noData = (tx.data || "0x") === "0x";
      if (iface.fallback && !iface.fallback.payable && iface.receive && !noData && !noValue) {
        assertArgument(false, "cannot send data to receive or send value to non-payable fallback", "overrides", overrides);
      }
      assertArgument(iface.fallback || noData, "cannot send data to receive-only contract", "overrides.data", tx.data);
      const payable = iface.receive || iface.fallback && iface.fallback.payable;
      assertArgument(payable || noValue, "cannot send value to non-payable fallback", "overrides.value", tx.value);
      assertArgument(iface.fallback || noData, "cannot send data to receive-only contract", "overrides.data", tx.data);
      return tx;
    };
    const staticCall = async function(overrides) {
      const runner = getRunner(contract.runner, "call");
      assert(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
      const tx = await populateTransaction(overrides);
      try {
        return await runner.call(tx);
      } catch (error) {
        if (isCallException(error) && error.data) {
          throw contract.interface.makeError(error.data, tx);
        }
        throw error;
      }
    };
    const send = async function(overrides) {
      const runner = contract.runner;
      assert(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
      const tx = await runner.sendTransaction(await populateTransaction(overrides));
      const provider = getProvider(contract.runner);
      return new ContractTransactionResponse(contract.interface, provider, tx);
    };
    const estimateGas = async function(overrides) {
      const runner = getRunner(contract.runner, "estimateGas");
      assert(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
      return await runner.estimateGas(await populateTransaction(overrides));
    };
    const method = async (overrides) => {
      return await send(overrides);
    };
    defineProperties(method, {
      _contract: contract,
      estimateGas,
      populateTransaction,
      send,
      staticCall
    });
    return method;
  }
  function buildWrappedMethod(contract, key) {
    const getFragment = function(...args) {
      const fragment = contract.interface.getFunction(key, args);
      assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key, args }
      });
      return fragment;
    };
    const populateTransaction = async function(...args) {
      const fragment = getFragment(...args);
      let overrides = {};
      if (fragment.inputs.length + 1 === args.length) {
        overrides = await copyOverrides(args.pop());
        if (overrides.from) {
          overrides.from = await resolveAddress(overrides.from, getResolver(contract.runner));
        }
      }
      if (fragment.inputs.length !== args.length) {
        throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
      }
      const resolvedArgs = await resolveArgs(contract.runner, fragment.inputs, args);
      return Object.assign({}, overrides, await resolveProperties({
        to: contract.getAddress(),
        data: contract.interface.encodeFunctionData(fragment, resolvedArgs)
      }));
    };
    const staticCall = async function(...args) {
      const result = await staticCallResult(...args);
      if (result.length === 1) {
        return result[0];
      }
      return result;
    };
    const send = async function(...args) {
      const runner = contract.runner;
      assert(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
      const tx = await runner.sendTransaction(await populateTransaction(...args));
      const provider = getProvider(contract.runner);
      return new ContractTransactionResponse(contract.interface, provider, tx);
    };
    const estimateGas = async function(...args) {
      const runner = getRunner(contract.runner, "estimateGas");
      assert(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
      return await runner.estimateGas(await populateTransaction(...args));
    };
    const staticCallResult = async function(...args) {
      const runner = getRunner(contract.runner, "call");
      assert(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
      const tx = await populateTransaction(...args);
      let result = "0x";
      try {
        result = await runner.call(tx);
      } catch (error) {
        if (isCallException(error) && error.data) {
          throw contract.interface.makeError(error.data, tx);
        }
        throw error;
      }
      const fragment = getFragment(...args);
      return contract.interface.decodeFunctionResult(fragment, result);
    };
    const method = async (...args) => {
      const fragment = getFragment(...args);
      if (fragment.constant) {
        return await staticCall(...args);
      }
      return await send(...args);
    };
    defineProperties(method, {
      name: contract.interface.getFunctionName(key),
      _contract: contract,
      _key: key,
      getFragment,
      estimateGas,
      populateTransaction,
      send,
      staticCall,
      staticCallResult
    });
    Object.defineProperty(method, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const fragment = contract.interface.getFunction(key);
        assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: { key }
        });
        return fragment;
      }
    });
    return method;
  }
  function buildWrappedEvent(contract, key) {
    const getFragment = function(...args) {
      const fragment = contract.interface.getEvent(key, args);
      assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key, args }
      });
      return fragment;
    };
    const method = function(...args) {
      return new PreparedTopicFilter(contract, getFragment(...args), args);
    };
    defineProperties(method, {
      name: contract.interface.getEventName(key),
      _contract: contract,
      _key: key,
      getFragment
    });
    Object.defineProperty(method, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const fragment = contract.interface.getEvent(key);
        assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: { key }
        });
        return fragment;
      }
    });
    return method;
  }
  var internal2 = Symbol.for("_ethersInternal_contract");
  var internalValues = /* @__PURE__ */ new WeakMap();
  function setInternal(contract, values) {
    internalValues.set(contract[internal2], values);
  }
  function getInternal(contract) {
    return internalValues.get(contract[internal2]);
  }
  function isDeferred(value) {
    return value && typeof value === "object" && "getTopicFilter" in value && typeof value.getTopicFilter === "function" && value.fragment;
  }
  async function getSubInfo(contract, event) {
    let topics;
    let fragment = null;
    if (Array.isArray(event)) {
      const topicHashify = function(name) {
        if (isHexString(name, 32)) {
          return name;
        }
        const fragment2 = contract.interface.getEvent(name);
        assertArgument(fragment2, "unknown fragment", "name", name);
        return fragment2.topicHash;
      };
      topics = event.map((e) => {
        if (e == null) {
          return null;
        }
        if (Array.isArray(e)) {
          return e.map(topicHashify);
        }
        return topicHashify(e);
      });
    } else if (event === "*") {
      topics = [null];
    } else if (typeof event === "string") {
      if (isHexString(event, 32)) {
        topics = [event];
      } else {
        fragment = contract.interface.getEvent(event);
        assertArgument(fragment, "unknown fragment", "event", event);
        topics = [fragment.topicHash];
      }
    } else if (isDeferred(event)) {
      topics = await event.getTopicFilter();
    } else if ("fragment" in event) {
      fragment = event.fragment;
      topics = [fragment.topicHash];
    } else {
      assertArgument(false, "unknown event name", "event", event);
    }
    topics = topics.map((t) => {
      if (t == null) {
        return null;
      }
      if (Array.isArray(t)) {
        const items = Array.from(new Set(t.map((t2) => t2.toLowerCase())).values());
        if (items.length === 1) {
          return items[0];
        }
        items.sort();
        return items;
      }
      return t.toLowerCase();
    });
    const tag = topics.map((t) => {
      if (t == null) {
        return "null";
      }
      if (Array.isArray(t)) {
        return t.join("|");
      }
      return t;
    }).join("&");
    return { fragment, tag, topics };
  }
  async function hasSub(contract, event) {
    const { subs } = getInternal(contract);
    return subs.get((await getSubInfo(contract, event)).tag) || null;
  }
  async function getSub(contract, operation, event) {
    const provider = getProvider(contract.runner);
    assert(provider, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation });
    const { fragment, tag, topics } = await getSubInfo(contract, event);
    const { addr, subs } = getInternal(contract);
    let sub = subs.get(tag);
    if (!sub) {
      const address = addr ? addr : contract;
      const filter = { address, topics };
      const listener = (log) => {
        let foundFragment = fragment;
        if (foundFragment == null) {
          try {
            foundFragment = contract.interface.getEvent(log.topics[0]);
          } catch (error) {
          }
        }
        if (foundFragment) {
          const _foundFragment = foundFragment;
          const args = fragment ? contract.interface.decodeEventLog(fragment, log.data, log.topics) : [];
          emit(contract, event, args, (listener2) => {
            return new ContractEventPayload(contract, listener2, event, _foundFragment, log);
          });
        } else {
          emit(contract, event, [], (listener2) => {
            return new ContractUnknownEventPayload(contract, listener2, event, log);
          });
        }
      };
      let starting = [];
      const start = () => {
        if (starting.length) {
          return;
        }
        starting.push(provider.on(filter, listener));
      };
      const stop = async () => {
        if (starting.length == 0) {
          return;
        }
        let started = starting;
        starting = [];
        await Promise.all(started);
        provider.off(filter, listener);
      };
      sub = { tag, listeners: [], start, stop };
      subs.set(tag, sub);
    }
    return sub;
  }
  var lastEmit = Promise.resolve();
  async function _emit(contract, event, args, payloadFunc) {
    await lastEmit;
    const sub = await hasSub(contract, event);
    if (!sub) {
      return false;
    }
    const count = sub.listeners.length;
    sub.listeners = sub.listeners.filter(({ listener, once }) => {
      const passArgs = Array.from(args);
      if (payloadFunc) {
        passArgs.push(payloadFunc(once ? null : listener));
      }
      try {
        listener.call(contract, ...passArgs);
      } catch (error) {
      }
      return !once;
    });
    if (sub.listeners.length === 0) {
      sub.stop();
      getInternal(contract).subs.delete(sub.tag);
    }
    return count > 0;
  }
  async function emit(contract, event, args, payloadFunc) {
    try {
      await lastEmit;
    } catch (error) {
    }
    const resultPromise = _emit(contract, event, args, payloadFunc);
    lastEmit = resultPromise;
    return await resultPromise;
  }
  var passProperties2 = ["then"];
  var BaseContract = class _BaseContract {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resolved address, use the ``getAddress``
     *  method.
     */
    target;
    /**
     *  The contract Interface.
     */
    interface;
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    runner;
    /**
     *  All the Events available on this contract.
     */
    filters;
    /**
     *  @_ignore:
     */
    [internal2];
    /**
     *  The fallback or receive function if any.
     */
    fallback;
    /**
     *  Creates a new contract connected to %%target%% with the %%abi%% and
     *  optionally connected to a %%runner%% to perform operations on behalf
     *  of.
     */
    constructor(target, abi, runner, _deployTx) {
      assertArgument(typeof target === "string" || isAddressable(target), "invalid value for Contract target", "target", target);
      if (runner == null) {
        runner = null;
      }
      const iface = Interface.from(abi);
      defineProperties(this, { target, runner, interface: iface });
      Object.defineProperty(this, internal2, { value: {} });
      let addrPromise;
      let addr = null;
      let deployTx = null;
      if (_deployTx) {
        const provider = getProvider(runner);
        deployTx = new ContractTransactionResponse(this.interface, provider, _deployTx);
      }
      let subs = /* @__PURE__ */ new Map();
      if (typeof target === "string") {
        if (isHexString(target)) {
          addr = target;
          addrPromise = Promise.resolve(target);
        } else {
          const resolver = getRunner(runner, "resolveName");
          if (!canResolve(resolver)) {
            throw makeError("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
              operation: "resolveName"
            });
          }
          addrPromise = resolver.resolveName(target).then((addr2) => {
            if (addr2 == null) {
              throw makeError("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
                value: target
              });
            }
            getInternal(this).addr = addr2;
            return addr2;
          });
        }
      } else {
        addrPromise = target.getAddress().then((addr2) => {
          if (addr2 == null) {
            throw new Error("TODO");
          }
          getInternal(this).addr = addr2;
          return addr2;
        });
      }
      setInternal(this, { addrPromise, addr, deployTx, subs });
      const filters = new Proxy({}, {
        get: (target2, prop, receiver) => {
          if (typeof prop === "symbol" || passProperties2.indexOf(prop) >= 0) {
            return Reflect.get(target2, prop, receiver);
          }
          try {
            return this.getEvent(prop);
          } catch (error) {
            if (!isError(error, "INVALID_ARGUMENT") || error.argument !== "key") {
              throw error;
            }
          }
          return void 0;
        },
        has: (target2, prop) => {
          if (passProperties2.indexOf(prop) >= 0) {
            return Reflect.has(target2, prop);
          }
          return Reflect.has(target2, prop) || this.interface.hasEvent(String(prop));
        }
      });
      defineProperties(this, { filters });
      defineProperties(this, {
        fallback: iface.receive || iface.fallback ? buildWrappedFallback(this) : null
      });
      return new Proxy(this, {
        get: (target2, prop, receiver) => {
          if (typeof prop === "symbol" || prop in target2 || passProperties2.indexOf(prop) >= 0) {
            return Reflect.get(target2, prop, receiver);
          }
          try {
            return target2.getFunction(prop);
          } catch (error) {
            if (!isError(error, "INVALID_ARGUMENT") || error.argument !== "key") {
              throw error;
            }
          }
          return void 0;
        },
        has: (target2, prop) => {
          if (typeof prop === "symbol" || prop in target2 || passProperties2.indexOf(prop) >= 0) {
            return Reflect.has(target2, prop);
          }
          return target2.interface.hasFunction(prop);
        }
      });
    }
    /**
     *  Return a new Contract instance with the same target and ABI, but
     *  a different %%runner%%.
     */
    connect(runner) {
      return new _BaseContract(this.target, this.interface, runner);
    }
    /**
     *  Return a new Contract instance with the same ABI and runner, but
     *  a different %%target%%.
     */
    attach(target) {
      return new _BaseContract(target, this.interface, this.runner);
    }
    /**
     *  Return the resolved address of this Contract.
     */
    async getAddress() {
      return await getInternal(this).addrPromise;
    }
    /**
     *  Return the deployed bytecode or null if no bytecode is found.
     */
    async getDeployedCode() {
      const provider = getProvider(this.runner);
      assert(provider, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
      const code = await provider.getCode(await this.getAddress());
      if (code === "0x") {
        return null;
      }
      return code;
    }
    /**
     *  Resolve to this Contract once the bytecode has been deployed, or
     *  resolve immediately if already deployed.
     */
    async waitForDeployment() {
      const deployTx = this.deploymentTransaction();
      if (deployTx) {
        await deployTx.wait();
        return this;
      }
      const code = await this.getDeployedCode();
      if (code != null) {
        return this;
      }
      const provider = getProvider(this.runner);
      assert(provider != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" });
      return new Promise((resolve, reject) => {
        const checkCode = async () => {
          try {
            const code2 = await this.getDeployedCode();
            if (code2 != null) {
              return resolve(this);
            }
            provider.once("block", checkCode);
          } catch (error) {
            reject(error);
          }
        };
        checkCode();
      });
    }
    /**
     *  Return the transaction used to deploy this contract.
     *
     *  This is only available if this instance was returned from a
     *  [[ContractFactory]].
     */
    deploymentTransaction() {
      return getInternal(this).deployTx;
    }
    /**
     *  Return the function for a given name. This is useful when a contract
     *  method name conflicts with a JavaScript name such as ``prototype`` or
     *  when using a Contract programmatically.
     */
    getFunction(key) {
      if (typeof key !== "string") {
        key = key.format();
      }
      const func = buildWrappedMethod(this, key);
      return func;
    }
    /**
     *  Return the event for a given name. This is useful when a contract
     *  event name conflicts with a JavaScript name such as ``prototype`` or
     *  when using a Contract programmatically.
     */
    getEvent(key) {
      if (typeof key !== "string") {
        key = key.format();
      }
      return buildWrappedEvent(this, key);
    }
    /**
     *  @_ignore:
     */
    async queryTransaction(hash3) {
      throw new Error("@TODO");
    }
    /*
        // @TODO: this is a non-backwards compatible change, but will be added
        //        in v7 and in a potential SmartContract class in an upcoming
        //        v6 release
        async getTransactionReceipt(hash: string): Promise<null | ContractTransactionReceipt> {
            const provider = getProvider(this.runner);
            assert(provider, "contract runner does not have a provider",
                "UNSUPPORTED_OPERATION", { operation: "queryTransaction" });
    
            const receipt = await provider.getTransactionReceipt(hash);
            if (receipt == null) { return null; }
    
            return new ContractTransactionReceipt(this.interface, provider, receipt);
        }
        */
    /**
     *  Provide historic access to event data for %%event%% in the range
     *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
     *  inclusive.
     */
    async queryFilter(event, fromBlock, toBlock) {
      if (fromBlock == null) {
        fromBlock = 0;
      }
      if (toBlock == null) {
        toBlock = "latest";
      }
      const { addr, addrPromise } = getInternal(this);
      const address = addr ? addr : await addrPromise;
      const { fragment, topics } = await getSubInfo(this, event);
      const filter = { address, topics, fromBlock, toBlock };
      const provider = getProvider(this.runner);
      assert(provider, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" });
      return (await provider.getLogs(filter)).map((log) => {
        let foundFragment = fragment;
        if (foundFragment == null) {
          try {
            foundFragment = this.interface.getEvent(log.topics[0]);
          } catch (error) {
          }
        }
        if (foundFragment) {
          try {
            return new EventLog(log, this.interface, foundFragment);
          } catch (error) {
            return new UndecodedEventLog(log, error);
          }
        }
        return new Log(log, provider);
      });
    }
    /**
     *  Add an event %%listener%% for the %%event%%.
     */
    async on(event, listener) {
      const sub = await getSub(this, "on", event);
      sub.listeners.push({ listener, once: false });
      sub.start();
      return this;
    }
    /**
     *  Add an event %%listener%% for the %%event%%, but remove the listener
     *  after it is fired once.
     */
    async once(event, listener) {
      const sub = await getSub(this, "once", event);
      sub.listeners.push({ listener, once: true });
      sub.start();
      return this;
    }
    /**
     *  Emit an %%event%% calling all listeners with %%args%%.
     *
     *  Resolves to ``true`` if any listeners were called.
     */
    async emit(event, ...args) {
      return await emit(this, event, args, null);
    }
    /**
     *  Resolves to the number of listeners of %%event%% or the total number
     *  of listeners if unspecified.
     */
    async listenerCount(event) {
      if (event) {
        const sub = await hasSub(this, event);
        if (!sub) {
          return 0;
        }
        return sub.listeners.length;
      }
      const { subs } = getInternal(this);
      let total = 0;
      for (const { listeners } of subs.values()) {
        total += listeners.length;
      }
      return total;
    }
    /**
     *  Resolves to the listeners subscribed to %%event%% or all listeners
     *  if unspecified.
     */
    async listeners(event) {
      if (event) {
        const sub = await hasSub(this, event);
        if (!sub) {
          return [];
        }
        return sub.listeners.map(({ listener }) => listener);
      }
      const { subs } = getInternal(this);
      let result = [];
      for (const { listeners } of subs.values()) {
        result = result.concat(listeners.map(({ listener }) => listener));
      }
      return result;
    }
    /**
     *  Remove the %%listener%% from the listeners for %%event%% or remove
     *  all listeners if unspecified.
     */
    async off(event, listener) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return this;
      }
      if (listener) {
        const index = sub.listeners.map(({ listener: listener2 }) => listener2).indexOf(listener);
        if (index >= 0) {
          sub.listeners.splice(index, 1);
        }
      }
      if (listener == null || sub.listeners.length === 0) {
        sub.stop();
        getInternal(this).subs.delete(sub.tag);
      }
      return this;
    }
    /**
     *  Remove all the listeners for %%event%% or remove all listeners if
     *  unspecified.
     */
    async removeAllListeners(event) {
      if (event) {
        const sub = await hasSub(this, event);
        if (!sub) {
          return this;
        }
        sub.stop();
        getInternal(this).subs.delete(sub.tag);
      } else {
        const { subs } = getInternal(this);
        for (const { tag, stop } of subs.values()) {
          stop();
          subs.delete(tag);
        }
      }
      return this;
    }
    /**
     *  Alias for [on].
     */
    async addListener(event, listener) {
      return await this.on(event, listener);
    }
    /**
     *  Alias for [off].
     */
    async removeListener(event, listener) {
      return await this.off(event, listener);
    }
    /**
     *  Create a new Class for the %%abi%%.
     */
    static buildClass(abi) {
      class CustomContract extends _BaseContract {
        constructor(address, runner = null) {
          super(address, abi, runner);
        }
      }
      return CustomContract;
    }
    /**
     *  Create a new BaseContract with a specified Interface.
     */
    static from(target, abi, runner) {
      if (runner == null) {
        runner = null;
      }
      const contract = new this(target, abi, runner);
      return contract;
    }
  };
  function _ContractBase() {
    return BaseContract;
  }
  var Contract = class extends _ContractBase() {
  };

  // node_modules/ethers/lib.esm/contract/factory.js
  var ContractFactory = class _ContractFactory {
    /**
     *  The Contract Interface.
     */
    interface;
    /**
     *  The Contract deployment bytecode. Often called the initcode.
     */
    bytecode;
    /**
     *  The ContractRunner to deploy the Contract as.
     */
    runner;
    /**
     *  Create a new **ContractFactory** with %%abi%% and %%bytecode%%,
     *  optionally connected to %%runner%%.
     *
     *  The %%bytecode%% may be the ``bytecode`` property within the
     *  standard Solidity JSON output.
     */
    constructor(abi, bytecode, runner) {
      const iface = Interface.from(abi);
      if (bytecode instanceof Uint8Array) {
        bytecode = hexlify(getBytes(bytecode));
      } else {
        if (typeof bytecode === "object") {
          bytecode = bytecode.object;
        }
        if (!bytecode.startsWith("0x")) {
          bytecode = "0x" + bytecode;
        }
        bytecode = hexlify(getBytes(bytecode));
      }
      defineProperties(this, {
        bytecode,
        interface: iface,
        runner: runner || null
      });
    }
    attach(target) {
      return new BaseContract(target, this.interface, this.runner);
    }
    /**
     *  Resolves to the transaction to deploy the contract, passing %%args%%
     *  into the constructor.
     */
    async getDeployTransaction(...args) {
      let overrides = {};
      const fragment = this.interface.deploy;
      if (fragment.inputs.length + 1 === args.length) {
        overrides = await copyOverrides(args.pop());
      }
      if (fragment.inputs.length !== args.length) {
        throw new Error("incorrect number of arguments to constructor");
      }
      const resolvedArgs = await resolveArgs(this.runner, fragment.inputs, args);
      const data = concat([this.bytecode, this.interface.encodeDeploy(resolvedArgs)]);
      return Object.assign({}, overrides, { data });
    }
    /**
     *  Resolves to the Contract deployed by passing %%args%% into the
     *  constructor.
     *
     *  This will resolve to the Contract before it has been deployed to the
     *  network, so the [[BaseContract-waitForDeployment]] should be used before
     *  sending any transactions to it.
     */
    async deploy(...args) {
      const tx = await this.getDeployTransaction(...args);
      assert(this.runner && typeof this.runner.sendTransaction === "function", "factory runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
        operation: "sendTransaction"
      });
      const sentTx = await this.runner.sendTransaction(tx);
      const address = getCreateAddress(sentTx);
      return new BaseContract(address, this.interface, this.runner, sentTx);
    }
    /**
     *  Return a new **ContractFactory** with the same ABI and bytecode,
     *  but connected to %%runner%%.
     */
    connect(runner) {
      return new _ContractFactory(this.interface, this.bytecode, runner);
    }
    /**
     *  Create a new **ContractFactory** from the standard Solidity JSON output.
     */
    static fromSolidity(output2, runner) {
      assertArgument(output2 != null, "bad compiler output", "output", output2);
      if (typeof output2 === "string") {
        output2 = JSON.parse(output2);
      }
      const abi = output2.abi;
      let bytecode = "";
      if (output2.bytecode) {
        bytecode = output2.bytecode;
      } else if (output2.evm && output2.evm.bytecode) {
        bytecode = output2.evm.bytecode;
      }
      return new this(abi, bytecode, runner);
    }
  };

  // node_modules/ethers/lib.esm/providers/abstract-signer.js
  function checkProvider(signer, operation) {
    if (signer.provider) {
      return signer.provider;
    }
    assert(false, "missing provider", "UNSUPPORTED_OPERATION", { operation });
  }
  async function populate(signer, tx) {
    let pop = copyRequest(tx);
    if (pop.to != null) {
      pop.to = resolveAddress(pop.to, signer);
    }
    if (pop.from != null) {
      const from = pop.from;
      pop.from = Promise.all([
        signer.getAddress(),
        resolveAddress(from, signer)
      ]).then(([address, from2]) => {
        assertArgument(address.toLowerCase() === from2.toLowerCase(), "transaction from mismatch", "tx.from", from2);
        return address;
      });
    } else {
      pop.from = signer.getAddress();
    }
    return await resolveProperties(pop);
  }
  var AbstractSigner = class {
    /**
     *  The provider this signer is connected to.
     */
    provider;
    /**
     *  Creates a new Signer connected to %%provider%%.
     */
    constructor(provider) {
      defineProperties(this, { provider: provider || null });
    }
    async getNonce(blockTag) {
      return checkProvider(this, "getTransactionCount").getTransactionCount(await this.getAddress(), blockTag);
    }
    async populateCall(tx) {
      const pop = await populate(this, tx);
      return pop;
    }
    async populateTransaction(tx) {
      const provider = checkProvider(this, "populateTransaction");
      const pop = await populate(this, tx);
      if (pop.nonce == null) {
        pop.nonce = await this.getNonce("pending");
      }
      if (pop.gasLimit == null) {
        pop.gasLimit = await this.estimateGas(pop);
      }
      const network = await this.provider.getNetwork();
      if (pop.chainId != null) {
        const chainId = getBigInt(pop.chainId);
        assertArgument(chainId === network.chainId, "transaction chainId mismatch", "tx.chainId", tx.chainId);
      } else {
        pop.chainId = network.chainId;
      }
      const hasEip1559 = pop.maxFeePerGas != null || pop.maxPriorityFeePerGas != null;
      if (pop.gasPrice != null && (pop.type === 2 || hasEip1559)) {
        assertArgument(false, "eip-1559 transaction do not support gasPrice", "tx", tx);
      } else if ((pop.type === 0 || pop.type === 1) && hasEip1559) {
        assertArgument(false, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", tx);
      }
      if ((pop.type === 2 || pop.type == null) && (pop.maxFeePerGas != null && pop.maxPriorityFeePerGas != null)) {
        pop.type = 2;
      } else if (pop.type === 0 || pop.type === 1) {
        const feeData = await provider.getFeeData();
        assert(feeData.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
          operation: "getGasPrice"
        });
        if (pop.gasPrice == null) {
          pop.gasPrice = feeData.gasPrice;
        }
      } else {
        const feeData = await provider.getFeeData();
        if (pop.type == null) {
          if (feeData.maxFeePerGas != null && feeData.maxPriorityFeePerGas != null) {
            if (pop.authorizationList && pop.authorizationList.length) {
              pop.type = 4;
            } else {
              pop.type = 2;
            }
            if (pop.gasPrice != null) {
              const gasPrice = pop.gasPrice;
              delete pop.gasPrice;
              pop.maxFeePerGas = gasPrice;
              pop.maxPriorityFeePerGas = gasPrice;
            } else {
              if (pop.maxFeePerGas == null) {
                pop.maxFeePerGas = feeData.maxFeePerGas;
              }
              if (pop.maxPriorityFeePerGas == null) {
                pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
              }
            }
          } else if (feeData.gasPrice != null) {
            assert(!hasEip1559, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
              operation: "populateTransaction"
            });
            if (pop.gasPrice == null) {
              pop.gasPrice = feeData.gasPrice;
            }
            pop.type = 0;
          } else {
            assert(false, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
              operation: "signer.getFeeData"
            });
          }
        } else if (pop.type === 2 || pop.type === 3 || pop.type === 4) {
          if (pop.maxFeePerGas == null) {
            pop.maxFeePerGas = feeData.maxFeePerGas;
          }
          if (pop.maxPriorityFeePerGas == null) {
            pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
          }
        }
      }
      return await resolveProperties(pop);
    }
    async populateAuthorization(_auth) {
      const auth = Object.assign({}, _auth);
      if (auth.chainId == null) {
        auth.chainId = (await checkProvider(this, "getNetwork").getNetwork()).chainId;
      }
      if (auth.nonce == null) {
        auth.nonce = await this.getNonce();
      }
      return auth;
    }
    async estimateGas(tx) {
      return checkProvider(this, "estimateGas").estimateGas(await this.populateCall(tx));
    }
    async call(tx) {
      return checkProvider(this, "call").call(await this.populateCall(tx));
    }
    async resolveName(name) {
      const provider = checkProvider(this, "resolveName");
      return await provider.resolveName(name);
    }
    async sendTransaction(tx) {
      const provider = checkProvider(this, "sendTransaction");
      const pop = await this.populateTransaction(tx);
      delete pop.from;
      const txObj = Transaction.from(pop);
      return await provider.broadcastTransaction(await this.signTransaction(txObj));
    }
    // @TODO: in v7 move this to be abstract
    authorize(authorization) {
      assert(false, "authorization not implemented for this signer", "UNSUPPORTED_OPERATION", { operation: "authorize" });
    }
  };
  var VoidSigner = class _VoidSigner extends AbstractSigner {
    /**
     *  The signer address.
     */
    address;
    /**
     *  Creates a new **VoidSigner** with %%address%% attached to
     *  %%provider%%.
     */
    constructor(address, provider) {
      super(provider);
      defineProperties(this, { address });
    }
    async getAddress() {
      return this.address;
    }
    connect(provider) {
      return new _VoidSigner(this.address, provider);
    }
    #throwUnsupported(suffix, operation) {
      assert(false, `VoidSigner cannot sign ${suffix}`, "UNSUPPORTED_OPERATION", { operation });
    }
    async signTransaction(tx) {
      this.#throwUnsupported("transactions", "signTransaction");
    }
    async signMessage(message) {
      this.#throwUnsupported("messages", "signMessage");
    }
    async signTypedData(domain, types, value) {
      this.#throwUnsupported("typed-data", "signTypedData");
    }
  };

  // node_modules/ethers/lib.esm/wallet/base-wallet.js
  var BaseWallet = class _BaseWallet extends AbstractSigner {
    /**
     *  The wallet address.
     */
    address;
    #signingKey;
    /**
     *  Creates a new BaseWallet for %%privateKey%%, optionally
     *  connected to %%provider%%.
     *
     *  If %%provider%% is not specified, only offline methods can
     *  be used.
     */
    constructor(privateKey, provider) {
      super(provider);
      assertArgument(privateKey && typeof privateKey.sign === "function", "invalid private key", "privateKey", "[ REDACTED ]");
      this.#signingKey = privateKey;
      const address = computeAddress(this.signingKey.publicKey);
      defineProperties(this, { address });
    }
    // Store private values behind getters to reduce visibility
    // in console.log
    /**
     *  The [[SigningKey]] used for signing payloads.
     */
    get signingKey() {
      return this.#signingKey;
    }
    /**
     *  The private key for this wallet.
     */
    get privateKey() {
      return this.signingKey.privateKey;
    }
    async getAddress() {
      return this.address;
    }
    connect(provider) {
      return new _BaseWallet(this.#signingKey, provider);
    }
    async signTransaction(tx) {
      tx = copyRequest(tx);
      const { to, from } = await resolveProperties({
        to: tx.to ? resolveAddress(tx.to, this) : void 0,
        from: tx.from ? resolveAddress(tx.from, this) : void 0
      });
      if (to != null) {
        tx.to = to;
      }
      if (from != null) {
        tx.from = from;
      }
      if (tx.from != null) {
        assertArgument(getAddress(tx.from) === this.address, "transaction from address mismatch", "tx.from", tx.from);
        delete tx.from;
      }
      const btx = Transaction.from(tx);
      btx.signature = this.signingKey.sign(btx.unsignedHash);
      return btx.serialized;
    }
    async signMessage(message) {
      return this.signMessageSync(message);
    }
    // @TODO: Add a secialized signTx and signTyped sync that enforces
    // all parameters are known?
    /**
     *  Returns the signature for %%message%% signed with this wallet.
     */
    signMessageSync(message) {
      return this.signingKey.sign(hashMessage(message)).serialized;
    }
    /**
     *  Returns the Authorization for %%auth%%.
     */
    authorizeSync(auth) {
      assertArgument(typeof auth.address === "string", "invalid address for authorizeSync", "auth.address", auth);
      const signature = this.signingKey.sign(hashAuthorization(auth));
      return Object.assign({}, {
        address: getAddress(auth.address),
        nonce: getBigInt(auth.nonce || 0),
        chainId: getBigInt(auth.chainId || 0)
      }, { signature });
    }
    /**
     *  Resolves to the Authorization for %%auth%%.
     */
    async authorize(auth) {
      auth = Object.assign({}, auth, {
        address: await resolveAddress(auth.address, this)
      });
      return this.authorizeSync(await this.populateAuthorization(auth));
    }
    async signTypedData(domain, types, value) {
      const populated = await TypedDataEncoder.resolveNames(domain, types, value, async (name) => {
        assert(this.provider != null, "cannot resolve ENS names without a provider", "UNSUPPORTED_OPERATION", {
          operation: "resolveName",
          info: { name }
        });
        const address = await this.provider.resolveName(name);
        assert(address != null, "unconfigured ENS name", "UNCONFIGURED_NAME", {
          value: name
        });
        return address;
      });
      return this.signingKey.sign(TypedDataEncoder.hash(populated.domain, types, populated.value)).serialized;
    }
  };

  // node_modules/ethers/lib.esm/wordlists/decode-owl.js
  var subsChrs = " !#$%&'()*+,-./<=>?@[]^_`{|}~";
  var Word = /^[a-z]*$/i;
  function unfold(words2, sep) {
    let initial = 97;
    return words2.reduce((accum, word) => {
      if (word === sep) {
        initial++;
      } else if (word.match(Word)) {
        accum.push(String.fromCharCode(initial) + word);
      } else {
        initial = 97;
        accum.push(word);
      }
      return accum;
    }, []);
  }
  function decode(data, subs) {
    for (let i = subsChrs.length - 1; i >= 0; i--) {
      data = data.split(subsChrs[i]).join(subs.substring(2 * i, 2 * i + 2));
    }
    const clumps = [];
    const leftover = data.replace(/(:|([0-9])|([A-Z][a-z]*))/g, (all, item, semi, word) => {
      if (semi) {
        for (let i = parseInt(semi); i >= 0; i--) {
          clumps.push(";");
        }
      } else {
        clumps.push(item.toLowerCase());
      }
      return "";
    });
    if (leftover) {
      throw new Error(`leftovers: ${JSON.stringify(leftover)}`);
    }
    return unfold(unfold(clumps, ";"), ":");
  }
  function decodeOwl(data) {
    assertArgument(data[0] === "0", "unsupported auwl data", "data", data);
    return decode(data.substring(1 + 2 * subsChrs.length), data.substring(1, 1 + 2 * subsChrs.length));
  }

  // node_modules/ethers/lib.esm/wordlists/wordlist.js
  var Wordlist = class {
    locale;
    /**
     *  Creates a new Wordlist instance.
     *
     *  Sub-classes MUST call this if they provide their own constructor,
     *  passing in the locale string of the language.
     *
     *  Generally there is no need to create instances of a Wordlist,
     *  since each language-specific Wordlist creates an instance and
     *  there is no state kept internally, so they are safe to share.
     */
    constructor(locale) {
      defineProperties(this, { locale });
    }
    /**
     *  Sub-classes may override this to provide a language-specific
     *  method for spliting %%phrase%% into individual words.
     *
     *  By default, %%phrase%% is split using any sequences of
     *  white-space as defined by regular expressions (i.e. ``/\s+/``).
     */
    split(phrase) {
      return phrase.toLowerCase().split(/\s+/g);
    }
    /**
     *  Sub-classes may override this to provider a language-specific
     *  method for joining %%words%% into a phrase.
     *
     *  By default, %%words%% are joined by a single space.
     */
    join(words2) {
      return words2.join(" ");
    }
  };

  // node_modules/ethers/lib.esm/wordlists/wordlist-owl.js
  var WordlistOwl = class extends Wordlist {
    #data;
    #checksum;
    /**
     *  Creates a new Wordlist for %%locale%% using the OWL %%data%%
     *  and validated against the %%checksum%%.
     */
    constructor(locale, data, checksum2) {
      super(locale);
      this.#data = data;
      this.#checksum = checksum2;
      this.#words = null;
    }
    /**
     *  The OWL-encoded data.
     */
    get _data() {
      return this.#data;
    }
    /**
     *  Decode all the words for the wordlist.
     */
    _decodeWords() {
      return decodeOwl(this.#data);
    }
    #words;
    #loadWords() {
      if (this.#words == null) {
        const words2 = this._decodeWords();
        const checksum2 = id(words2.join("\n") + "\n");
        if (checksum2 !== this.#checksum) {
          throw new Error(`BIP39 Wordlist for ${this.locale} FAILED`);
        }
        this.#words = words2;
      }
      return this.#words;
    }
    getWord(index) {
      const words2 = this.#loadWords();
      assertArgument(index >= 0 && index < words2.length, `invalid word index: ${index}`, "index", index);
      return words2[index];
    }
    getWordIndex(word) {
      return this.#loadWords().indexOf(word);
    }
  };

  // node_modules/ethers/lib.esm/wordlists/lang-en.js
  var words = "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO";
  var checksum = "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60";
  var wordlist = null;
  var LangEn = class _LangEn extends WordlistOwl {
    /**
     *  Creates a new instance of the English language Wordlist.
     *
     *  This should be unnecessary most of the time as the exported
     *  [[langEn]] should suffice.
     *
     *  @_ignore:
     */
    constructor() {
      super("en", words, checksum);
    }
    /**
     *  Returns a singleton instance of a ``LangEn``, creating it
     *  if this is the first time being called.
     */
    static wordlist() {
      if (wordlist == null) {
        wordlist = new _LangEn();
      }
      return wordlist;
    }
  };

  // node_modules/ethers/lib.esm/wallet/mnemonic.js
  function getUpperMask(bits) {
    return (1 << bits) - 1 << 8 - bits & 255;
  }
  function getLowerMask(bits) {
    return (1 << bits) - 1 & 255;
  }
  function mnemonicToEntropy(mnemonic, wordlist2) {
    assertNormalize("NFKD");
    if (wordlist2 == null) {
      wordlist2 = LangEn.wordlist();
    }
    const words2 = wordlist2.split(mnemonic);
    assertArgument(words2.length % 3 === 0 && words2.length >= 12 && words2.length <= 24, "invalid mnemonic length", "mnemonic", "[ REDACTED ]");
    const entropy = new Uint8Array(Math.ceil(11 * words2.length / 8));
    let offset = 0;
    for (let i = 0; i < words2.length; i++) {
      let index = wordlist2.getWordIndex(words2[i].normalize("NFKD"));
      assertArgument(index >= 0, `invalid mnemonic word at index ${i}`, "mnemonic", "[ REDACTED ]");
      for (let bit = 0; bit < 11; bit++) {
        if (index & 1 << 10 - bit) {
          entropy[offset >> 3] |= 1 << 7 - offset % 8;
        }
        offset++;
      }
    }
    const entropyBits = 32 * words2.length / 3;
    const checksumBits = words2.length / 3;
    const checksumMask = getUpperMask(checksumBits);
    const checksum2 = getBytes(sha2562(entropy.slice(0, entropyBits / 8)))[0] & checksumMask;
    assertArgument(checksum2 === (entropy[entropy.length - 1] & checksumMask), "invalid mnemonic checksum", "mnemonic", "[ REDACTED ]");
    return hexlify(entropy.slice(0, entropyBits / 8));
  }
  function entropyToMnemonic(entropy, wordlist2) {
    assertArgument(entropy.length % 4 === 0 && entropy.length >= 16 && entropy.length <= 32, "invalid entropy size", "entropy", "[ REDACTED ]");
    if (wordlist2 == null) {
      wordlist2 = LangEn.wordlist();
    }
    const indices = [0];
    let remainingBits = 11;
    for (let i = 0; i < entropy.length; i++) {
      if (remainingBits > 8) {
        indices[indices.length - 1] <<= 8;
        indices[indices.length - 1] |= entropy[i];
        remainingBits -= 8;
      } else {
        indices[indices.length - 1] <<= remainingBits;
        indices[indices.length - 1] |= entropy[i] >> 8 - remainingBits;
        indices.push(entropy[i] & getLowerMask(8 - remainingBits));
        remainingBits += 3;
      }
    }
    const checksumBits = entropy.length / 4;
    const checksum2 = parseInt(sha2562(entropy).substring(2, 4), 16) & getUpperMask(checksumBits);
    indices[indices.length - 1] <<= checksumBits;
    indices[indices.length - 1] |= checksum2 >> 8 - checksumBits;
    return wordlist2.join(indices.map((index) => wordlist2.getWord(index)));
  }
  var _guard4 = {};
  var Mnemonic = class _Mnemonic {
    /**
     *  The mnemonic phrase of 12, 15, 18, 21 or 24 words.
     *
     *  Use the [[wordlist]] ``split`` method to get the individual words.
     */
    phrase;
    /**
     *  The password used for this mnemonic. If no password is used this
     *  is the empty string (i.e. ``""``) as per the specification.
     */
    password;
    /**
     *  The wordlist for this mnemonic.
     */
    wordlist;
    /**
     *  The underlying entropy which the mnemonic encodes.
     */
    entropy;
    /**
     *  @private
     */
    constructor(guard, entropy, phrase, password, wordlist2) {
      if (password == null) {
        password = "";
      }
      if (wordlist2 == null) {
        wordlist2 = LangEn.wordlist();
      }
      assertPrivate(guard, _guard4, "Mnemonic");
      defineProperties(this, { phrase, password, wordlist: wordlist2, entropy });
    }
    /**
     *  Returns the seed for the mnemonic.
     */
    computeSeed() {
      const salt = toUtf8Bytes("mnemonic" + this.password, "NFKD");
      return pbkdf22(toUtf8Bytes(this.phrase, "NFKD"), salt, 2048, 64, "sha512");
    }
    /**
     *  Creates a new Mnemonic for the %%phrase%%.
     *
     *  The default %%password%% is the empty string and the default
     *  wordlist is the [English wordlists](LangEn).
     */
    static fromPhrase(phrase, password, wordlist2) {
      const entropy = mnemonicToEntropy(phrase, wordlist2);
      phrase = entropyToMnemonic(getBytes(entropy), wordlist2);
      return new _Mnemonic(_guard4, entropy, phrase, password, wordlist2);
    }
    /**
     *  Create a new **Mnemonic** from the %%entropy%%.
     *
     *  The default %%password%% is the empty string and the default
     *  wordlist is the [English wordlists](LangEn).
     */
    static fromEntropy(_entropy, password, wordlist2) {
      const entropy = getBytes(_entropy, "entropy");
      const phrase = entropyToMnemonic(entropy, wordlist2);
      return new _Mnemonic(_guard4, hexlify(entropy), phrase, password, wordlist2);
    }
    /**
     *  Returns the phrase for %%mnemonic%%.
     */
    static entropyToPhrase(_entropy, wordlist2) {
      const entropy = getBytes(_entropy, "entropy");
      return entropyToMnemonic(entropy, wordlist2);
    }
    /**
     *  Returns the entropy for %%phrase%%.
     */
    static phraseToEntropy(phrase, wordlist2) {
      return mnemonicToEntropy(phrase, wordlist2);
    }
    /**
     *  Returns true if %%phrase%% is a valid [[link-bip-39]] phrase.
     *
     *  This checks all the provided words belong to the %%wordlist%%,
     *  that the length is valid and the checksum is correct.
     */
    static isValidMnemonic(phrase, wordlist2) {
      try {
        mnemonicToEntropy(phrase, wordlist2);
        return true;
      } catch (error) {
      }
      return false;
    }
  };

  // node_modules/aes-js/lib.esm/aes.js
  var __classPrivateFieldGet = function(receiver, state, kind, f2) {
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
  };
  var __classPrivateFieldSet = function(receiver, state, value, kind, f2) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
  };
  var _AES_key;
  var _AES_Kd;
  var _AES_Ke;
  var numberOfRounds = { 16: 10, 24: 12, 32: 14 };
  var rcon = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145];
  var S = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22];
  var Si = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125];
  var T1 = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986];
  var T2 = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766];
  var T3 = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126];
  var T4 = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436];
  var T5 = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890];
  var T6 = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935];
  var T7 = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600];
  var T8 = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480];
  var U1 = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795];
  var U2 = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855];
  var U3 = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150];
  var U4 = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
  function convertToInt32(bytes2) {
    const result = [];
    for (let i = 0; i < bytes2.length; i += 4) {
      result.push(bytes2[i] << 24 | bytes2[i + 1] << 16 | bytes2[i + 2] << 8 | bytes2[i + 3]);
    }
    return result;
  }
  var AES = class _AES {
    get key() {
      return __classPrivateFieldGet(this, _AES_key, "f").slice();
    }
    constructor(key) {
      _AES_key.set(this, void 0);
      _AES_Kd.set(this, void 0);
      _AES_Ke.set(this, void 0);
      if (!(this instanceof _AES)) {
        throw Error("AES must be instanitated with `new`");
      }
      __classPrivateFieldSet(this, _AES_key, new Uint8Array(key), "f");
      const rounds = numberOfRounds[this.key.length];
      if (rounds == null) {
        throw new TypeError("invalid key size (must be 16, 24 or 32 bytes)");
      }
      __classPrivateFieldSet(this, _AES_Ke, [], "f");
      __classPrivateFieldSet(this, _AES_Kd, [], "f");
      for (let i = 0; i <= rounds; i++) {
        __classPrivateFieldGet(this, _AES_Ke, "f").push([0, 0, 0, 0]);
        __classPrivateFieldGet(this, _AES_Kd, "f").push([0, 0, 0, 0]);
      }
      const roundKeyCount = (rounds + 1) * 4;
      const KC = this.key.length / 4;
      const tk = convertToInt32(this.key);
      let index;
      for (let i = 0; i < KC; i++) {
        index = i >> 2;
        __classPrivateFieldGet(this, _AES_Ke, "f")[index][i % 4] = tk[i];
        __classPrivateFieldGet(this, _AES_Kd, "f")[rounds - index][i % 4] = tk[i];
      }
      let rconpointer = 0;
      let t = KC, tt;
      while (t < roundKeyCount) {
        tt = tk[KC - 1];
        tk[0] ^= S[tt >> 16 & 255] << 24 ^ S[tt >> 8 & 255] << 16 ^ S[tt & 255] << 8 ^ S[tt >> 24 & 255] ^ rcon[rconpointer] << 24;
        rconpointer += 1;
        if (KC != 8) {
          for (let i2 = 1; i2 < KC; i2++) {
            tk[i2] ^= tk[i2 - 1];
          }
        } else {
          for (let i2 = 1; i2 < KC / 2; i2++) {
            tk[i2] ^= tk[i2 - 1];
          }
          tt = tk[KC / 2 - 1];
          tk[KC / 2] ^= S[tt & 255] ^ S[tt >> 8 & 255] << 8 ^ S[tt >> 16 & 255] << 16 ^ S[tt >> 24 & 255] << 24;
          for (let i2 = KC / 2 + 1; i2 < KC; i2++) {
            tk[i2] ^= tk[i2 - 1];
          }
        }
        let i = 0, r, c;
        while (i < KC && t < roundKeyCount) {
          r = t >> 2;
          c = t % 4;
          __classPrivateFieldGet(this, _AES_Ke, "f")[r][c] = tk[i];
          __classPrivateFieldGet(this, _AES_Kd, "f")[rounds - r][c] = tk[i++];
          t++;
        }
      }
      for (let r = 1; r < rounds; r++) {
        for (let c = 0; c < 4; c++) {
          tt = __classPrivateFieldGet(this, _AES_Kd, "f")[r][c];
          __classPrivateFieldGet(this, _AES_Kd, "f")[r][c] = U1[tt >> 24 & 255] ^ U2[tt >> 16 & 255] ^ U3[tt >> 8 & 255] ^ U4[tt & 255];
        }
      }
    }
    encrypt(plaintext) {
      if (plaintext.length != 16) {
        throw new TypeError("invalid plaintext size (must be 16 bytes)");
      }
      const rounds = __classPrivateFieldGet(this, _AES_Ke, "f").length - 1;
      const a = [0, 0, 0, 0];
      let t = convertToInt32(plaintext);
      for (let i = 0; i < 4; i++) {
        t[i] ^= __classPrivateFieldGet(this, _AES_Ke, "f")[0][i];
      }
      for (let r = 1; r < rounds; r++) {
        for (let i = 0; i < 4; i++) {
          a[i] = T1[t[i] >> 24 & 255] ^ T2[t[(i + 1) % 4] >> 16 & 255] ^ T3[t[(i + 2) % 4] >> 8 & 255] ^ T4[t[(i + 3) % 4] & 255] ^ __classPrivateFieldGet(this, _AES_Ke, "f")[r][i];
        }
        t = a.slice();
      }
      const result = new Uint8Array(16);
      let tt = 0;
      for (let i = 0; i < 4; i++) {
        tt = __classPrivateFieldGet(this, _AES_Ke, "f")[rounds][i];
        result[4 * i] = (S[t[i] >> 24 & 255] ^ tt >> 24) & 255;
        result[4 * i + 1] = (S[t[(i + 1) % 4] >> 16 & 255] ^ tt >> 16) & 255;
        result[4 * i + 2] = (S[t[(i + 2) % 4] >> 8 & 255] ^ tt >> 8) & 255;
        result[4 * i + 3] = (S[t[(i + 3) % 4] & 255] ^ tt) & 255;
      }
      return result;
    }
    decrypt(ciphertext) {
      if (ciphertext.length != 16) {
        throw new TypeError("invalid ciphertext size (must be 16 bytes)");
      }
      const rounds = __classPrivateFieldGet(this, _AES_Kd, "f").length - 1;
      const a = [0, 0, 0, 0];
      let t = convertToInt32(ciphertext);
      for (let i = 0; i < 4; i++) {
        t[i] ^= __classPrivateFieldGet(this, _AES_Kd, "f")[0][i];
      }
      for (let r = 1; r < rounds; r++) {
        for (let i = 0; i < 4; i++) {
          a[i] = T5[t[i] >> 24 & 255] ^ T6[t[(i + 3) % 4] >> 16 & 255] ^ T7[t[(i + 2) % 4] >> 8 & 255] ^ T8[t[(i + 1) % 4] & 255] ^ __classPrivateFieldGet(this, _AES_Kd, "f")[r][i];
        }
        t = a.slice();
      }
      const result = new Uint8Array(16);
      let tt = 0;
      for (let i = 0; i < 4; i++) {
        tt = __classPrivateFieldGet(this, _AES_Kd, "f")[rounds][i];
        result[4 * i] = (Si[t[i] >> 24 & 255] ^ tt >> 24) & 255;
        result[4 * i + 1] = (Si[t[(i + 3) % 4] >> 16 & 255] ^ tt >> 16) & 255;
        result[4 * i + 2] = (Si[t[(i + 2) % 4] >> 8 & 255] ^ tt >> 8) & 255;
        result[4 * i + 3] = (Si[t[(i + 1) % 4] & 255] ^ tt) & 255;
      }
      return result;
    }
  };
  _AES_key = /* @__PURE__ */ new WeakMap(), _AES_Kd = /* @__PURE__ */ new WeakMap(), _AES_Ke = /* @__PURE__ */ new WeakMap();

  // node_modules/aes-js/lib.esm/mode.js
  var ModeOfOperation = class {
    constructor(name, key, cls) {
      if (cls && !(this instanceof cls)) {
        throw new Error(`${name} must be instantiated with "new"`);
      }
      Object.defineProperties(this, {
        aes: { enumerable: true, value: new AES(key) },
        name: { enumerable: true, value: name }
      });
    }
  };

  // node_modules/aes-js/lib.esm/mode-cbc.js
  var __classPrivateFieldSet2 = function(receiver, state, value, kind, f2) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet2 = function(receiver, state, kind, f2) {
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
  };
  var _CBC_iv;
  var _CBC_lastBlock;
  var CBC = class _CBC extends ModeOfOperation {
    constructor(key, iv) {
      super("ECC", key, _CBC);
      _CBC_iv.set(this, void 0);
      _CBC_lastBlock.set(this, void 0);
      if (iv) {
        if (iv.length % 16) {
          throw new TypeError("invalid iv size (must be 16 bytes)");
        }
        __classPrivateFieldSet2(this, _CBC_iv, new Uint8Array(iv), "f");
      } else {
        __classPrivateFieldSet2(this, _CBC_iv, new Uint8Array(16), "f");
      }
      __classPrivateFieldSet2(this, _CBC_lastBlock, this.iv, "f");
    }
    get iv() {
      return new Uint8Array(__classPrivateFieldGet2(this, _CBC_iv, "f"));
    }
    encrypt(plaintext) {
      if (plaintext.length % 16) {
        throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
      }
      const ciphertext = new Uint8Array(plaintext.length);
      for (let i = 0; i < plaintext.length; i += 16) {
        for (let j = 0; j < 16; j++) {
          __classPrivateFieldGet2(this, _CBC_lastBlock, "f")[j] ^= plaintext[i + j];
        }
        __classPrivateFieldSet2(this, _CBC_lastBlock, this.aes.encrypt(__classPrivateFieldGet2(this, _CBC_lastBlock, "f")), "f");
        ciphertext.set(__classPrivateFieldGet2(this, _CBC_lastBlock, "f"), i);
      }
      return ciphertext;
    }
    decrypt(ciphertext) {
      if (ciphertext.length % 16) {
        throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
      }
      const plaintext = new Uint8Array(ciphertext.length);
      for (let i = 0; i < ciphertext.length; i += 16) {
        const block = this.aes.decrypt(ciphertext.subarray(i, i + 16));
        for (let j = 0; j < 16; j++) {
          plaintext[i + j] = block[j] ^ __classPrivateFieldGet2(this, _CBC_lastBlock, "f")[j];
          __classPrivateFieldGet2(this, _CBC_lastBlock, "f")[j] = ciphertext[i + j];
        }
      }
      return plaintext;
    }
  };
  _CBC_iv = /* @__PURE__ */ new WeakMap(), _CBC_lastBlock = /* @__PURE__ */ new WeakMap();

  // node_modules/aes-js/lib.esm/mode-cfb.js
  var __classPrivateFieldGet3 = function(receiver, state, kind, f2) {
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
  };
  var _CFB_instances;
  var _CFB_iv;
  var _CFB_shiftRegister;
  var _CFB_shift;
  _CFB_iv = /* @__PURE__ */ new WeakMap(), _CFB_shiftRegister = /* @__PURE__ */ new WeakMap(), _CFB_instances = /* @__PURE__ */ new WeakSet(), _CFB_shift = function _CFB_shift2(data) {
    const segmentSize = this.segmentSize / 8;
    __classPrivateFieldGet3(this, _CFB_shiftRegister, "f").set(__classPrivateFieldGet3(this, _CFB_shiftRegister, "f").subarray(segmentSize));
    __classPrivateFieldGet3(this, _CFB_shiftRegister, "f").set(data.subarray(0, segmentSize), 16 - segmentSize);
  };

  // node_modules/aes-js/lib.esm/mode-ctr.js
  var __classPrivateFieldSet3 = function(receiver, state, value, kind, f2) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet4 = function(receiver, state, kind, f2) {
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
  };
  var _CTR_remaining;
  var _CTR_remainingIndex;
  var _CTR_counter;
  var CTR = class _CTR extends ModeOfOperation {
    constructor(key, initialValue) {
      super("CTR", key, _CTR);
      _CTR_remaining.set(this, void 0);
      _CTR_remainingIndex.set(this, void 0);
      _CTR_counter.set(this, void 0);
      __classPrivateFieldSet3(this, _CTR_counter, new Uint8Array(16), "f");
      __classPrivateFieldGet4(this, _CTR_counter, "f").fill(0);
      __classPrivateFieldSet3(this, _CTR_remaining, __classPrivateFieldGet4(this, _CTR_counter, "f"), "f");
      __classPrivateFieldSet3(this, _CTR_remainingIndex, 16, "f");
      if (initialValue == null) {
        initialValue = 1;
      }
      if (typeof initialValue === "number") {
        this.setCounterValue(initialValue);
      } else {
        this.setCounterBytes(initialValue);
      }
    }
    get counter() {
      return new Uint8Array(__classPrivateFieldGet4(this, _CTR_counter, "f"));
    }
    setCounterValue(value) {
      if (!Number.isInteger(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) {
        throw new TypeError("invalid counter initial integer value");
      }
      for (let index = 15; index >= 0; --index) {
        __classPrivateFieldGet4(this, _CTR_counter, "f")[index] = value % 256;
        value = Math.floor(value / 256);
      }
    }
    setCounterBytes(value) {
      if (value.length !== 16) {
        throw new TypeError("invalid counter initial Uint8Array value length");
      }
      __classPrivateFieldGet4(this, _CTR_counter, "f").set(value);
    }
    increment() {
      for (let i = 15; i >= 0; i--) {
        if (__classPrivateFieldGet4(this, _CTR_counter, "f")[i] === 255) {
          __classPrivateFieldGet4(this, _CTR_counter, "f")[i] = 0;
        } else {
          __classPrivateFieldGet4(this, _CTR_counter, "f")[i]++;
          break;
        }
      }
    }
    encrypt(plaintext) {
      var _a, _b;
      const crypttext = new Uint8Array(plaintext);
      for (let i = 0; i < crypttext.length; i++) {
        if (__classPrivateFieldGet4(this, _CTR_remainingIndex, "f") === 16) {
          __classPrivateFieldSet3(this, _CTR_remaining, this.aes.encrypt(__classPrivateFieldGet4(this, _CTR_counter, "f")), "f");
          __classPrivateFieldSet3(this, _CTR_remainingIndex, 0, "f");
          this.increment();
        }
        crypttext[i] ^= __classPrivateFieldGet4(this, _CTR_remaining, "f")[__classPrivateFieldSet3(this, _CTR_remainingIndex, (_b = __classPrivateFieldGet4(this, _CTR_remainingIndex, "f"), _a = _b++, _b), "f"), _a];
      }
      return crypttext;
    }
    decrypt(ciphertext) {
      return this.encrypt(ciphertext);
    }
  };
  _CTR_remaining = /* @__PURE__ */ new WeakMap(), _CTR_remainingIndex = /* @__PURE__ */ new WeakMap(), _CTR_counter = /* @__PURE__ */ new WeakMap();

  // node_modules/aes-js/lib.esm/mode-ofb.js
  var _OFB_iv;
  var _OFB_lastPrecipher;
  var _OFB_lastPrecipherIndex;
  _OFB_iv = /* @__PURE__ */ new WeakMap(), _OFB_lastPrecipher = /* @__PURE__ */ new WeakMap(), _OFB_lastPrecipherIndex = /* @__PURE__ */ new WeakMap();

  // node_modules/aes-js/lib.esm/padding.js
  function pkcs7Strip(data) {
    if (data.length < 16) {
      throw new TypeError("PKCS#7 invalid length");
    }
    const padder = data[data.length - 1];
    if (padder > 16) {
      throw new TypeError("PKCS#7 padding byte out of range");
    }
    const length = data.length - padder;
    for (let i = 0; i < padder; i++) {
      if (data[length + i] !== padder) {
        throw new TypeError("PKCS#7 invalid padding byte");
      }
    }
    return new Uint8Array(data.subarray(0, length));
  }

  // node_modules/ethers/lib.esm/wallet/utils.js
  function looseArrayify(hexString) {
    if (typeof hexString === "string" && !hexString.startsWith("0x")) {
      hexString = "0x" + hexString;
    }
    return getBytesCopy(hexString);
  }
  function zpad(value, length) {
    value = String(value);
    while (value.length < length) {
      value = "0" + value;
    }
    return value;
  }
  function getPassword(password) {
    if (typeof password === "string") {
      return toUtf8Bytes(password, "NFKC");
    }
    return getBytesCopy(password);
  }
  function spelunk(object, _path) {
    const match = _path.match(/^([a-z0-9$_.-]*)(:([a-z]+))?(!)?$/i);
    assertArgument(match != null, "invalid path", "path", _path);
    const path = match[1];
    const type = match[3];
    const reqd = match[4] === "!";
    let cur = object;
    for (const comp of path.toLowerCase().split(".")) {
      if (Array.isArray(cur)) {
        if (!comp.match(/^[0-9]+$/)) {
          break;
        }
        cur = cur[parseInt(comp)];
      } else if (typeof cur === "object") {
        let found = null;
        for (const key in cur) {
          if (key.toLowerCase() === comp) {
            found = cur[key];
            break;
          }
        }
        cur = found;
      } else {
        cur = null;
      }
      if (cur == null) {
        break;
      }
    }
    assertArgument(!reqd || cur != null, "missing required value", "path", path);
    if (type && cur != null) {
      if (type === "int") {
        if (typeof cur === "string" && cur.match(/^-?[0-9]+$/)) {
          return parseInt(cur);
        } else if (Number.isSafeInteger(cur)) {
          return cur;
        }
      }
      if (type === "number") {
        if (typeof cur === "string" && cur.match(/^-?[0-9.]*$/)) {
          return parseFloat(cur);
        }
      }
      if (type === "data") {
        if (typeof cur === "string") {
          return looseArrayify(cur);
        }
      }
      if (type === "array" && Array.isArray(cur)) {
        return cur;
      }
      if (type === typeof cur) {
        return cur;
      }
      assertArgument(false, `wrong type found for ${type} `, "path", path);
    }
    return cur;
  }

  // node_modules/ethers/lib.esm/wallet/json-keystore.js
  var defaultPath = "m/44'/60'/0'/0/0";
  function isKeystoreJson(json) {
    try {
      const data = JSON.parse(json);
      const version2 = data.version != null ? parseInt(data.version) : 0;
      if (version2 === 3) {
        return true;
      }
    } catch (error) {
    }
    return false;
  }
  function decrypt(data, key, ciphertext) {
    const cipher = spelunk(data, "crypto.cipher:string");
    if (cipher === "aes-128-ctr") {
      const iv = spelunk(data, "crypto.cipherparams.iv:data!");
      const aesCtr = new CTR(key, iv);
      return hexlify(aesCtr.decrypt(ciphertext));
    }
    assert(false, "unsupported cipher", "UNSUPPORTED_OPERATION", {
      operation: "decrypt"
    });
  }
  function getAccount(data, _key) {
    const key = getBytes(_key);
    const ciphertext = spelunk(data, "crypto.ciphertext:data!");
    const computedMAC = hexlify(keccak256(concat([key.slice(16, 32), ciphertext]))).substring(2);
    assertArgument(computedMAC === spelunk(data, "crypto.mac:string!").toLowerCase(), "incorrect password", "password", "[ REDACTED ]");
    const privateKey = decrypt(data, key.slice(0, 16), ciphertext);
    const address = computeAddress(privateKey);
    if (data.address) {
      let check = data.address.toLowerCase();
      if (!check.startsWith("0x")) {
        check = "0x" + check;
      }
      assertArgument(getAddress(check) === address, "keystore address/privateKey mismatch", "address", data.address);
    }
    const account = { address, privateKey };
    const version2 = spelunk(data, "x-ethers.version:string");
    if (version2 === "0.1") {
      const mnemonicKey = key.slice(32, 64);
      const mnemonicCiphertext = spelunk(data, "x-ethers.mnemonicCiphertext:data!");
      const mnemonicIv = spelunk(data, "x-ethers.mnemonicCounter:data!");
      const mnemonicAesCtr = new CTR(mnemonicKey, mnemonicIv);
      account.mnemonic = {
        path: spelunk(data, "x-ethers.path:string") || defaultPath,
        locale: spelunk(data, "x-ethers.locale:string") || "en",
        entropy: hexlify(getBytes(mnemonicAesCtr.decrypt(mnemonicCiphertext)))
      };
    }
    return account;
  }
  function getDecryptKdfParams(data) {
    const kdf = spelunk(data, "crypto.kdf:string");
    if (kdf && typeof kdf === "string") {
      if (kdf.toLowerCase() === "scrypt") {
        const salt = spelunk(data, "crypto.kdfparams.salt:data!");
        const N2 = spelunk(data, "crypto.kdfparams.n:int!");
        const r = spelunk(data, "crypto.kdfparams.r:int!");
        const p = spelunk(data, "crypto.kdfparams.p:int!");
        assertArgument(N2 > 0 && (N2 & N2 - 1) === 0, "invalid kdf.N", "kdf.N", N2);
        assertArgument(r > 0 && p > 0, "invalid kdf", "kdf", kdf);
        const dkLen = spelunk(data, "crypto.kdfparams.dklen:int!");
        assertArgument(dkLen === 32, "invalid kdf.dklen", "kdf.dflen", dkLen);
        return { name: "scrypt", salt, N: N2, r, p, dkLen: 64 };
      } else if (kdf.toLowerCase() === "pbkdf2") {
        const salt = spelunk(data, "crypto.kdfparams.salt:data!");
        const prf = spelunk(data, "crypto.kdfparams.prf:string!");
        const algorithm = prf.split("-").pop();
        assertArgument(algorithm === "sha256" || algorithm === "sha512", "invalid kdf.pdf", "kdf.pdf", prf);
        const count = spelunk(data, "crypto.kdfparams.c:int!");
        const dkLen = spelunk(data, "crypto.kdfparams.dklen:int!");
        assertArgument(dkLen === 32, "invalid kdf.dklen", "kdf.dklen", dkLen);
        return { name: "pbkdf2", salt, count, dkLen, algorithm };
      }
    }
    assertArgument(false, "unsupported key-derivation function", "kdf", kdf);
  }
  function decryptKeystoreJsonSync(json, _password) {
    const data = JSON.parse(json);
    const password = getPassword(_password);
    const params = getDecryptKdfParams(data);
    if (params.name === "pbkdf2") {
      const { salt: salt2, count, dkLen: dkLen2, algorithm } = params;
      const key2 = pbkdf22(password, salt2, count, dkLen2, algorithm);
      return getAccount(data, key2);
    }
    assert(params.name === "scrypt", "cannot be reached", "UNKNOWN_ERROR", { params });
    const { salt, N: N2, r, p, dkLen } = params;
    const key = scryptSync(password, salt, N2, r, p, dkLen);
    return getAccount(data, key);
  }
  function stall(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
  async function decryptKeystoreJson(json, _password, progress) {
    const data = JSON.parse(json);
    const password = getPassword(_password);
    const params = getDecryptKdfParams(data);
    if (params.name === "pbkdf2") {
      if (progress) {
        progress(0);
        await stall(0);
      }
      const { salt: salt2, count, dkLen: dkLen2, algorithm } = params;
      const key2 = pbkdf22(password, salt2, count, dkLen2, algorithm);
      if (progress) {
        progress(1);
        await stall(0);
      }
      return getAccount(data, key2);
    }
    assert(params.name === "scrypt", "cannot be reached", "UNKNOWN_ERROR", { params });
    const { salt, N: N2, r, p, dkLen } = params;
    const key = await scrypt2(password, salt, N2, r, p, dkLen, progress);
    return getAccount(data, key);
  }
  function getEncryptKdfParams(options) {
    const salt = options.salt != null ? getBytes(options.salt, "options.salt") : randomBytes3(32);
    let N2 = 1 << 17, r = 8, p = 1;
    if (options.scrypt) {
      if (options.scrypt.N) {
        N2 = options.scrypt.N;
      }
      if (options.scrypt.r) {
        r = options.scrypt.r;
      }
      if (options.scrypt.p) {
        p = options.scrypt.p;
      }
    }
    assertArgument(typeof N2 === "number" && N2 > 0 && Number.isSafeInteger(N2) && (BigInt(N2) & BigInt(N2 - 1)) === BigInt(0), "invalid scrypt N parameter", "options.N", N2);
    assertArgument(typeof r === "number" && r > 0 && Number.isSafeInteger(r), "invalid scrypt r parameter", "options.r", r);
    assertArgument(typeof p === "number" && p > 0 && Number.isSafeInteger(p), "invalid scrypt p parameter", "options.p", p);
    return { name: "scrypt", dkLen: 32, salt, N: N2, r, p };
  }
  function _encryptKeystore(key, kdf, account, options) {
    const privateKey = getBytes(account.privateKey, "privateKey");
    const iv = options.iv != null ? getBytes(options.iv, "options.iv") : randomBytes3(16);
    assertArgument(iv.length === 16, "invalid options.iv length", "options.iv", options.iv);
    const uuidRandom = options.uuid != null ? getBytes(options.uuid, "options.uuid") : randomBytes3(16);
    assertArgument(uuidRandom.length === 16, "invalid options.uuid length", "options.uuid", options.iv);
    const derivedKey = key.slice(0, 16);
    const macPrefix = key.slice(16, 32);
    const aesCtr = new CTR(derivedKey, iv);
    const ciphertext = getBytes(aesCtr.encrypt(privateKey));
    const mac = keccak256(concat([macPrefix, ciphertext]));
    const data = {
      address: account.address.substring(2).toLowerCase(),
      id: uuidV4(uuidRandom),
      version: 3,
      Crypto: {
        cipher: "aes-128-ctr",
        cipherparams: {
          iv: hexlify(iv).substring(2)
        },
        ciphertext: hexlify(ciphertext).substring(2),
        kdf: "scrypt",
        kdfparams: {
          salt: hexlify(kdf.salt).substring(2),
          n: kdf.N,
          dklen: 32,
          p: kdf.p,
          r: kdf.r
        },
        mac: mac.substring(2)
      }
    };
    if (account.mnemonic) {
      const client = options.client != null ? options.client : `ethers/${version}`;
      const path = account.mnemonic.path || defaultPath;
      const locale = account.mnemonic.locale || "en";
      const mnemonicKey = key.slice(32, 64);
      const entropy = getBytes(account.mnemonic.entropy, "account.mnemonic.entropy");
      const mnemonicIv = randomBytes3(16);
      const mnemonicAesCtr = new CTR(mnemonicKey, mnemonicIv);
      const mnemonicCiphertext = getBytes(mnemonicAesCtr.encrypt(entropy));
      const now = /* @__PURE__ */ new Date();
      const timestamp = now.getUTCFullYear() + "-" + zpad(now.getUTCMonth() + 1, 2) + "-" + zpad(now.getUTCDate(), 2) + "T" + zpad(now.getUTCHours(), 2) + "-" + zpad(now.getUTCMinutes(), 2) + "-" + zpad(now.getUTCSeconds(), 2) + ".0Z";
      const gethFilename = "UTC--" + timestamp + "--" + data.address;
      data["x-ethers"] = {
        client,
        gethFilename,
        path,
        locale,
        mnemonicCounter: hexlify(mnemonicIv).substring(2),
        mnemonicCiphertext: hexlify(mnemonicCiphertext).substring(2),
        version: "0.1"
      };
    }
    return JSON.stringify(data);
  }
  function encryptKeystoreJsonSync(account, password, options) {
    if (options == null) {
      options = {};
    }
    const passwordBytes = getPassword(password);
    const kdf = getEncryptKdfParams(options);
    const key = scryptSync(passwordBytes, kdf.salt, kdf.N, kdf.r, kdf.p, 64);
    return _encryptKeystore(getBytes(key), kdf, account, options);
  }
  async function encryptKeystoreJson(account, password, options) {
    if (options == null) {
      options = {};
    }
    const passwordBytes = getPassword(password);
    const kdf = getEncryptKdfParams(options);
    const key = await scrypt2(passwordBytes, kdf.salt, kdf.N, kdf.r, kdf.p, 64, options.progressCallback);
    return _encryptKeystore(getBytes(key), kdf, account, options);
  }

  // node_modules/ethers/lib.esm/wallet/hdwallet.js
  var defaultPath2 = "m/44'/60'/0'/0/0";
  var MasterSecret = new Uint8Array([66, 105, 116, 99, 111, 105, 110, 32, 115, 101, 101, 100]);
  var HardenedBit = 2147483648;
  var N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
  var Nibbles2 = "0123456789abcdef";
  function zpad2(value, length) {
    let result = "";
    while (value) {
      result = Nibbles2[value % 16] + result;
      value = Math.trunc(value / 16);
    }
    while (result.length < length * 2) {
      result = "0" + result;
    }
    return "0x" + result;
  }
  function encodeBase58Check(_value) {
    const value = getBytes(_value);
    const check = dataSlice(sha2562(sha2562(value)), 0, 4);
    const bytes2 = concat([value, check]);
    return encodeBase58(bytes2);
  }
  var _guard5 = {};
  function ser_I(index, chainCode, publicKey, privateKey) {
    const data = new Uint8Array(37);
    if (index & HardenedBit) {
      assert(privateKey != null, "cannot derive child of neutered node", "UNSUPPORTED_OPERATION", {
        operation: "deriveChild"
      });
      data.set(getBytes(privateKey), 1);
    } else {
      data.set(getBytes(publicKey));
    }
    for (let i = 24; i >= 0; i -= 8) {
      data[33 + (i >> 3)] = index >> 24 - i & 255;
    }
    const I = getBytes(computeHmac("sha512", chainCode, data));
    return { IL: I.slice(0, 32), IR: I.slice(32) };
  }
  function derivePath(node, path) {
    const components = path.split("/");
    assertArgument(components.length > 0, "invalid path", "path", path);
    if (components[0] === "m") {
      assertArgument(node.depth === 0, `cannot derive root path (i.e. path starting with "m/") for a node at non-zero depth ${node.depth}`, "path", path);
      components.shift();
    }
    let result = node;
    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      if (component.match(/^[0-9]+'$/)) {
        const index = parseInt(component.substring(0, component.length - 1));
        assertArgument(index < HardenedBit, "invalid path index", `path[${i}]`, component);
        result = result.deriveChild(HardenedBit + index);
      } else if (component.match(/^[0-9]+$/)) {
        const index = parseInt(component);
        assertArgument(index < HardenedBit, "invalid path index", `path[${i}]`, component);
        result = result.deriveChild(index);
      } else {
        assertArgument(false, "invalid path component", `path[${i}]`, component);
      }
    }
    return result;
  }
  var HDNodeWallet = class _HDNodeWallet extends BaseWallet {
    /**
     *  The compressed public key.
     */
    publicKey;
    /**
     *  The fingerprint.
     *
     *  A fingerprint allows quick qay to detect parent and child nodes,
     *  but developers should be prepared to deal with collisions as it
     *  is only 4 bytes.
     */
    fingerprint;
    /**
     *  The parent fingerprint.
     */
    parentFingerprint;
    /**
     *  The mnemonic used to create this HD Node, if available.
     *
     *  Sources such as extended keys do not encode the mnemonic, in
     *  which case this will be ``null``.
     */
    mnemonic;
    /**
     *  The chaincode, which is effectively a public key used
     *  to derive children.
     */
    chainCode;
    /**
     *  The derivation path of this wallet.
     *
     *  Since extended keys do not provide full path details, this
     *  may be ``null``, if instantiated from a source that does not
     *  encode it.
     */
    path;
    /**
     *  The child index of this wallet. Values over ``2 *\* 31`` indicate
     *  the node is hardened.
     */
    index;
    /**
     *  The depth of this wallet, which is the number of components
     *  in its path.
     */
    depth;
    /**
     *  @private
     */
    constructor(guard, signingKey, parentFingerprint, chainCode, path, index, depth, mnemonic, provider) {
      super(signingKey, provider);
      assertPrivate(guard, _guard5, "HDNodeWallet");
      defineProperties(this, { publicKey: signingKey.compressedPublicKey });
      const fingerprint = dataSlice(ripemd1602(sha2562(this.publicKey)), 0, 4);
      defineProperties(this, {
        parentFingerprint,
        fingerprint,
        chainCode,
        path,
        index,
        depth
      });
      defineProperties(this, { mnemonic });
    }
    connect(provider) {
      return new _HDNodeWallet(_guard5, this.signingKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, this.mnemonic, provider);
    }
    #account() {
      const account = { address: this.address, privateKey: this.privateKey };
      const m = this.mnemonic;
      if (this.path && m && m.wordlist.locale === "en" && m.password === "") {
        account.mnemonic = {
          path: this.path,
          locale: "en",
          entropy: m.entropy
        };
      }
      return account;
    }
    /**
     *  Resolves to a [JSON Keystore Wallet](json-wallets) encrypted with
     *  %%password%%.
     *
     *  If %%progressCallback%% is specified, it will receive periodic
     *  updates as the encryption process progreses.
     */
    async encrypt(password, progressCallback) {
      return await encryptKeystoreJson(this.#account(), password, { progressCallback });
    }
    /**
     *  Returns a [JSON Keystore Wallet](json-wallets) encryped with
     *  %%password%%.
     *
     *  It is preferred to use the [async version](encrypt) instead,
     *  which allows a [[ProgressCallback]] to keep the user informed.
     *
     *  This method will block the event loop (freezing all UI) until
     *  it is complete, which may be a non-trivial duration.
     */
    encryptSync(password) {
      return encryptKeystoreJsonSync(this.#account(), password);
    }
    /**
     *  The extended key.
     *
     *  This key will begin with the prefix ``xpriv`` and can be used to
     *  reconstruct this HD Node to derive its children.
     */
    get extendedKey() {
      assert(this.depth < 256, "Depth too deep", "UNSUPPORTED_OPERATION", { operation: "extendedKey" });
      return encodeBase58Check(concat([
        "0x0488ADE4",
        zpad2(this.depth, 1),
        this.parentFingerprint,
        zpad2(this.index, 4),
        this.chainCode,
        concat(["0x00", this.privateKey])
      ]));
    }
    /**
     *  Returns true if this wallet has a path, providing a Type Guard
     *  that the path is non-null.
     */
    hasPath() {
      return this.path != null;
    }
    /**
     *  Returns a neutered HD Node, which removes the private details
     *  of an HD Node.
     *
     *  A neutered node has no private key, but can be used to derive
     *  child addresses and other public data about the HD Node.
     */
    neuter() {
      return new HDNodeVoidWallet(_guard5, this.address, this.publicKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, this.provider);
    }
    /**
     *  Return the child for %%index%%.
     */
    deriveChild(_index) {
      const index = getNumber(_index, "index");
      assertArgument(index <= 4294967295, "invalid index", "index", index);
      let path = this.path;
      if (path) {
        path += "/" + (index & ~HardenedBit);
        if (index & HardenedBit) {
          path += "'";
        }
      }
      const { IR, IL } = ser_I(index, this.chainCode, this.publicKey, this.privateKey);
      const ki = new SigningKey(toBeHex((toBigInt(IL) + BigInt(this.privateKey)) % N, 32));
      return new _HDNodeWallet(_guard5, ki, this.fingerprint, hexlify(IR), path, index, this.depth + 1, this.mnemonic, this.provider);
    }
    /**
     *  Return the HDNode for %%path%% from this node.
     */
    derivePath(path) {
      return derivePath(this, path);
    }
    static #fromSeed(_seed, mnemonic) {
      assertArgument(isBytesLike(_seed), "invalid seed", "seed", "[REDACTED]");
      const seed = getBytes(_seed, "seed");
      assertArgument(seed.length >= 16 && seed.length <= 64, "invalid seed", "seed", "[REDACTED]");
      const I = getBytes(computeHmac("sha512", MasterSecret, seed));
      const signingKey = new SigningKey(hexlify(I.slice(0, 32)));
      return new _HDNodeWallet(_guard5, signingKey, "0x00000000", hexlify(I.slice(32)), "m", 0, 0, mnemonic, null);
    }
    /**
     *  Creates a new HD Node from %%extendedKey%%.
     *
     *  If the %%extendedKey%% will either have a prefix or ``xpub`` or
     *  ``xpriv``, returning a neutered HD Node ([[HDNodeVoidWallet]])
     *  or full HD Node ([[HDNodeWallet) respectively.
     */
    static fromExtendedKey(extendedKey) {
      const bytes2 = toBeArray(decodeBase58(extendedKey));
      assertArgument(bytes2.length === 82 || encodeBase58Check(bytes2.slice(0, 78)) === extendedKey, "invalid extended key", "extendedKey", "[ REDACTED ]");
      const depth = bytes2[4];
      const parentFingerprint = hexlify(bytes2.slice(5, 9));
      const index = parseInt(hexlify(bytes2.slice(9, 13)).substring(2), 16);
      const chainCode = hexlify(bytes2.slice(13, 45));
      const key = bytes2.slice(45, 78);
      switch (hexlify(bytes2.slice(0, 4))) {
        case "0x0488b21e":
        case "0x043587cf": {
          const publicKey = hexlify(key);
          return new HDNodeVoidWallet(_guard5, computeAddress(publicKey), publicKey, parentFingerprint, chainCode, null, index, depth, null);
        }
        case "0x0488ade4":
        case "0x04358394 ":
          if (key[0] !== 0) {
            break;
          }
          return new _HDNodeWallet(_guard5, new SigningKey(key.slice(1)), parentFingerprint, chainCode, null, index, depth, null, null);
      }
      assertArgument(false, "invalid extended key prefix", "extendedKey", "[ REDACTED ]");
    }
    /**
     *  Creates a new random HDNode.
     */
    static createRandom(password, path, wordlist2) {
      if (password == null) {
        password = "";
      }
      if (path == null) {
        path = defaultPath2;
      }
      if (wordlist2 == null) {
        wordlist2 = LangEn.wordlist();
      }
      const mnemonic = Mnemonic.fromEntropy(randomBytes3(16), password, wordlist2);
      return _HDNodeWallet.#fromSeed(mnemonic.computeSeed(), mnemonic).derivePath(path);
    }
    /**
     *  Create an HD Node from %%mnemonic%%.
     */
    static fromMnemonic(mnemonic, path) {
      if (!path) {
        path = defaultPath2;
      }
      return _HDNodeWallet.#fromSeed(mnemonic.computeSeed(), mnemonic).derivePath(path);
    }
    /**
     *  Creates an HD Node from a mnemonic %%phrase%%.
     */
    static fromPhrase(phrase, password, path, wordlist2) {
      if (password == null) {
        password = "";
      }
      if (path == null) {
        path = defaultPath2;
      }
      if (wordlist2 == null) {
        wordlist2 = LangEn.wordlist();
      }
      const mnemonic = Mnemonic.fromPhrase(phrase, password, wordlist2);
      return _HDNodeWallet.#fromSeed(mnemonic.computeSeed(), mnemonic).derivePath(path);
    }
    /**
     *  Creates an HD Node from a %%seed%%.
     */
    static fromSeed(seed) {
      return _HDNodeWallet.#fromSeed(seed, null);
    }
  };
  var HDNodeVoidWallet = class _HDNodeVoidWallet extends VoidSigner {
    /**
     *  The compressed public key.
     */
    publicKey;
    /**
     *  The fingerprint.
     *
     *  A fingerprint allows quick qay to detect parent and child nodes,
     *  but developers should be prepared to deal with collisions as it
     *  is only 4 bytes.
     */
    fingerprint;
    /**
     *  The parent node fingerprint.
     */
    parentFingerprint;
    /**
     *  The chaincode, which is effectively a public key used
     *  to derive children.
     */
    chainCode;
    /**
     *  The derivation path of this wallet.
     *
     *  Since extended keys do not provider full path details, this
     *  may be ``null``, if instantiated from a source that does not
     *  enocde it.
     */
    path;
    /**
     *  The child index of this wallet. Values over ``2 *\* 31`` indicate
     *  the node is hardened.
     */
    index;
    /**
     *  The depth of this wallet, which is the number of components
     *  in its path.
     */
    depth;
    /**
     *  @private
     */
    constructor(guard, address, publicKey, parentFingerprint, chainCode, path, index, depth, provider) {
      super(address, provider);
      assertPrivate(guard, _guard5, "HDNodeVoidWallet");
      defineProperties(this, { publicKey });
      const fingerprint = dataSlice(ripemd1602(sha2562(publicKey)), 0, 4);
      defineProperties(this, {
        publicKey,
        fingerprint,
        parentFingerprint,
        chainCode,
        path,
        index,
        depth
      });
    }
    connect(provider) {
      return new _HDNodeVoidWallet(_guard5, this.address, this.publicKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, provider);
    }
    /**
     *  The extended key.
     *
     *  This key will begin with the prefix ``xpub`` and can be used to
     *  reconstruct this neutered key to derive its children addresses.
     */
    get extendedKey() {
      assert(this.depth < 256, "Depth too deep", "UNSUPPORTED_OPERATION", { operation: "extendedKey" });
      return encodeBase58Check(concat([
        "0x0488B21E",
        zpad2(this.depth, 1),
        this.parentFingerprint,
        zpad2(this.index, 4),
        this.chainCode,
        this.publicKey
      ]));
    }
    /**
     *  Returns true if this wallet has a path, providing a Type Guard
     *  that the path is non-null.
     */
    hasPath() {
      return this.path != null;
    }
    /**
     *  Return the child for %%index%%.
     */
    deriveChild(_index) {
      const index = getNumber(_index, "index");
      assertArgument(index <= 4294967295, "invalid index", "index", index);
      let path = this.path;
      if (path) {
        path += "/" + (index & ~HardenedBit);
        if (index & HardenedBit) {
          path += "'";
        }
      }
      const { IR, IL } = ser_I(index, this.chainCode, this.publicKey, null);
      const Ki = SigningKey.addPoints(IL, this.publicKey, true);
      const address = computeAddress(Ki);
      return new _HDNodeVoidWallet(_guard5, address, Ki, this.fingerprint, hexlify(IR), path, index, this.depth + 1, this.provider);
    }
    /**
     *  Return the signer for %%path%% from this node.
     */
    derivePath(path) {
      return derivePath(this, path);
    }
  };

  // node_modules/ethers/lib.esm/wallet/json-crowdsale.js
  function isCrowdsaleJson(json) {
    try {
      const data = JSON.parse(json);
      if (data.encseed) {
        return true;
      }
    } catch (error) {
    }
    return false;
  }
  function decryptCrowdsaleJson(json, _password) {
    const data = JSON.parse(json);
    const password = getPassword(_password);
    const address = getAddress(spelunk(data, "ethaddr:string!"));
    const encseed = looseArrayify(spelunk(data, "encseed:string!"));
    assertArgument(encseed && encseed.length % 16 === 0, "invalid encseed", "json", json);
    const key = getBytes(pbkdf22(password, password, 2e3, 32, "sha256")).slice(0, 16);
    const iv = encseed.slice(0, 16);
    const encryptedSeed = encseed.slice(16);
    const aesCbc = new CBC(key, iv);
    const seed = pkcs7Strip(getBytes(aesCbc.decrypt(encryptedSeed)));
    let seedHex = "";
    for (let i = 0; i < seed.length; i++) {
      seedHex += String.fromCharCode(seed[i]);
    }
    return { address, privateKey: id(seedHex) };
  }

  // node_modules/ethers/lib.esm/wallet/wallet.js
  function stall2(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
  var Wallet = class _Wallet extends BaseWallet {
    /**
     *  Create a new wallet for the private %%key%%, optionally connected
     *  to %%provider%%.
     */
    constructor(key, provider) {
      if (typeof key === "string" && !key.startsWith("0x")) {
        key = "0x" + key;
      }
      let signingKey = typeof key === "string" ? new SigningKey(key) : key;
      super(signingKey, provider);
    }
    connect(provider) {
      return new _Wallet(this.signingKey, provider);
    }
    /**
     *  Resolves to a [JSON Keystore Wallet](json-wallets) encrypted with
     *  %%password%%.
     *
     *  If %%progressCallback%% is specified, it will receive periodic
     *  updates as the encryption process progreses.
     */
    async encrypt(password, progressCallback) {
      const account = { address: this.address, privateKey: this.privateKey };
      return await encryptKeystoreJson(account, password, { progressCallback });
    }
    /**
     *  Returns a [JSON Keystore Wallet](json-wallets) encryped with
     *  %%password%%.
     *
     *  It is preferred to use the [async version](encrypt) instead,
     *  which allows a [[ProgressCallback]] to keep the user informed.
     *
     *  This method will block the event loop (freezing all UI) until
     *  it is complete, which may be a non-trivial duration.
     */
    encryptSync(password) {
      const account = { address: this.address, privateKey: this.privateKey };
      return encryptKeystoreJsonSync(account, password);
    }
    static #fromAccount(account) {
      assertArgument(account, "invalid JSON wallet", "json", "[ REDACTED ]");
      if ("mnemonic" in account && account.mnemonic && account.mnemonic.locale === "en") {
        const mnemonic = Mnemonic.fromEntropy(account.mnemonic.entropy);
        const wallet2 = HDNodeWallet.fromMnemonic(mnemonic, account.mnemonic.path);
        if (wallet2.address === account.address && wallet2.privateKey === account.privateKey) {
          return wallet2;
        }
        console.log("WARNING: JSON mismatch address/privateKey != mnemonic; fallback onto private key");
      }
      const wallet = new _Wallet(account.privateKey);
      assertArgument(wallet.address === account.address, "address/privateKey mismatch", "json", "[ REDACTED ]");
      return wallet;
    }
    /**
     *  Creates (asynchronously) a **Wallet** by decrypting the %%json%%
     *  with %%password%%.
     *
     *  If %%progress%% is provided, it is called periodically during
     *  decryption so that any UI can be updated.
     */
    static async fromEncryptedJson(json, password, progress) {
      let account = null;
      if (isKeystoreJson(json)) {
        account = await decryptKeystoreJson(json, password, progress);
      } else if (isCrowdsaleJson(json)) {
        if (progress) {
          progress(0);
          await stall2(0);
        }
        account = decryptCrowdsaleJson(json, password);
        if (progress) {
          progress(1);
          await stall2(0);
        }
      }
      return _Wallet.#fromAccount(account);
    }
    /**
     *  Creates a **Wallet** by decrypting the %%json%% with %%password%%.
     *
     *  The [[fromEncryptedJson]] method is preferred, as this method
     *  will lock up and freeze the UI during decryption, which may take
     *  some time.
     */
    static fromEncryptedJsonSync(json, password) {
      let account = null;
      if (isKeystoreJson(json)) {
        account = decryptKeystoreJsonSync(json, password);
      } else if (isCrowdsaleJson(json)) {
        account = decryptCrowdsaleJson(json, password);
      } else {
        assertArgument(false, "invalid JSON wallet", "json", "[ REDACTED ]");
      }
      return _Wallet.#fromAccount(account);
    }
    /**
     *  Creates a new random [[HDNodeWallet]] using the available
     *  [cryptographic random source](randomBytes).
     *
     *  If there is no crytographic random source, this will throw.
     */
    static createRandom(provider) {
      const wallet = HDNodeWallet.createRandom();
      if (provider) {
        return wallet.connect(provider);
      }
      return wallet;
    }
    /**
     *  Creates a [[HDNodeWallet]] for %%phrase%%.
     */
    static fromPhrase(phrase, provider) {
      const wallet = HDNodeWallet.fromPhrase(phrase);
      if (provider) {
        return wallet.connect(provider);
      }
      return wallet;
    }
  };

  // node_modules/@noble/hashes/utils.js
  function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in a && a.BYTES_PER_ELEMENT === 1;
  }
  function anumber(n2, title = "") {
    if (typeof n2 !== "number") {
      const prefix = title && `"${title}" `;
      throw new TypeError(`${prefix}expected number, got ${typeof n2}`);
    }
    if (!Number.isSafeInteger(n2) || n2 < 0) {
      const prefix = title && `"${title}" `;
      throw new RangeError(`${prefix}expected integer >= 0, got ${n2}`);
    }
  }
  function abytes(value, length, title = "") {
    const bytes2 = isBytes(value);
    const len = value?.length;
    const needsLen = length !== void 0;
    if (!bytes2 || needsLen && len !== length) {
      const prefix = title && `"${title}" `;
      const ofLen = needsLen ? ` of length ${length}` : "";
      const got = bytes2 ? `length=${len}` : `type=${typeof value}`;
      const message = prefix + "expected Uint8Array" + ofLen + ", got " + got;
      if (!bytes2)
        throw new TypeError(message);
      throw new RangeError(message);
    }
    return value;
  }
  function ahash(h) {
    if (typeof h !== "function" || typeof h.create !== "function")
      throw new TypeError("Hash must wrapped by utils.createHasher");
    anumber(h.outputLen);
    anumber(h.blockLen);
    if (h.outputLen < 1)
      throw new Error('"outputLen" must be >= 1');
    if (h.blockLen < 1)
      throw new Error('"blockLen" must be >= 1');
  }
  function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function aoutput(out, instance) {
    abytes(out, void 0, "digestInto() output");
    const min = instance.outputLen;
    if (out.length < min) {
      throw new RangeError('"digestInto() output" expected to be of length >=' + min);
    }
  }
  function u322(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  }
  function clean(...arrays) {
    for (let i = 0; i < arrays.length; i++) {
      arrays[i].fill(0);
    }
  }
  function createView2(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function rotr2(word, shift) {
    return word << 32 - shift | word >>> shift;
  }
  var isLE2 = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
  function byteSwap(word) {
    return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
  }
  function byteSwap32(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = byteSwap(arr[i]);
    }
    return arr;
  }
  var swap32IfBE = isLE2 ? (u) => u : byteSwap32;
  var hasHexBuiltin = /* @__PURE__ */ (() => (
    // @ts-ignore
    typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
  ))();
  var hexes2 = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex2(bytes2) {
    abytes(bytes2);
    if (hasHexBuiltin)
      return bytes2.toHex();
    let hex = "";
    for (let i = 0; i < bytes2.length; i++) {
      hex += hexes2[bytes2[i]];
    }
    return hex;
  }
  var asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
      return ch - asciis._0;
    if (ch >= asciis.A && ch <= asciis.F)
      return ch - (asciis.A - 10);
    if (ch >= asciis.a && ch <= asciis.f)
      return ch - (asciis.a - 10);
    return;
  }
  function hexToBytes2(hex) {
    if (typeof hex !== "string")
      throw new TypeError("hex string expected, got " + typeof hex);
    if (hasHexBuiltin) {
      try {
        return Uint8Array.fromHex(hex);
      } catch (error) {
        if (error instanceof SyntaxError)
          throw new RangeError(error.message);
        throw error;
      }
    }
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
      throw new RangeError("hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      const n1 = asciiToBase16(hex.charCodeAt(hi));
      const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
      if (n1 === void 0 || n2 === void 0) {
        const char = hex[hi] + hex[hi + 1];
        throw new RangeError('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  function utf8ToBytes3(str) {
    if (typeof str !== "string")
      throw new TypeError("string expected");
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function concatBytes3(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
      const a = arrays[i];
      abytes(a);
      sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const a = arrays[i];
      res.set(a, pad);
      pad += a.length;
    }
    return res;
  }
  function createHasher(hashCons, info = {}) {
    const hashC = (msg, opts) => hashCons(opts).update(msg).digest();
    const tmp = hashCons(void 0);
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.canXOF = tmp.canXOF;
    hashC.create = (opts) => hashCons(opts);
    Object.assign(hashC, info);
    return Object.freeze(hashC);
  }
  function randomBytes4(bytesLength = 32) {
    anumber(bytesLength, "bytesLength");
    const cr = typeof globalThis === "object" ? globalThis.crypto : null;
    if (typeof cr?.getRandomValues !== "function")
      throw new Error("crypto.getRandomValues must be defined");
    if (bytesLength > 65536)
      throw new RangeError(`"bytesLength" expected <= 65536, got ${bytesLength}`);
    return cr.getRandomValues(new Uint8Array(bytesLength));
  }
  var oidNist = (suffix) => ({
    // Current NIST hashAlgs suffixes used here fit in one DER subidentifier octet.
    // Larger suffix values would need base-128 OID encoding and a different length byte.
    oid: Uint8Array.from([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, suffix])
  });

  // node_modules/@noble/hashes/_md.js
  function Chi2(a, b2, c) {
    return a & b2 ^ ~a & c;
  }
  function Maj2(a, b2, c) {
    return a & b2 ^ a & c ^ b2 & c;
  }
  var HashMD = class {
    blockLen;
    outputLen;
    canXOF = false;
    padOffset;
    isLE;
    // For partial updates less than block size
    buffer;
    view;
    finished = false;
    length = 0;
    pos = 0;
    destroyed = false;
    constructor(blockLen, outputLen, padOffset, isLE4) {
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE4;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView2(this.buffer);
    }
    update(data) {
      aexists(this);
      abytes(data);
      const { view, buffer, blockLen } = this;
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView2(data);
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      aexists(this);
      aoutput(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE: isLE4 } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      clean(this.buffer.subarray(pos));
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i = pos; i < blockLen; i++)
        buffer[i] = 0;
      view.setBigUint64(blockLen - 8, BigInt(this.length * 8), isLE4);
      this.process(view, 0);
      const oview = createView2(out);
      const len = this.outputLen;
      if (len % 4)
        throw new Error("_sha2: outputLen must be aligned to 32bit");
      const outLen = len / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i = 0; i < outLen; i++)
        oview.setUint32(4 * i, state[i], isLE4);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to) {
      to ||= new this.constructor();
      to.set(...this.get());
      const { blockLen, buffer, length, finished, destroyed, pos } = this;
      to.destroyed = destroyed;
      to.finished = finished;
      to.length = length;
      to.pos = pos;
      if (length % blockLen)
        to.buffer.set(buffer);
      return to;
    }
    clone() {
      return this._cloneInto();
    }
  };
  var SHA256_IV = /* @__PURE__ */ Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  var SHA512_IV = /* @__PURE__ */ Uint32Array.from([
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ]);

  // node_modules/@noble/hashes/_u64.js
  var U32_MASK642 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  var _32n2 = /* @__PURE__ */ BigInt(32);
  function fromBig2(n2, le = false) {
    if (le)
      return { h: Number(n2 & U32_MASK642), l: Number(n2 >> _32n2 & U32_MASK642) };
    return { h: Number(n2 >> _32n2 & U32_MASK642) | 0, l: Number(n2 & U32_MASK642) | 0 };
  }
  function split2(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for (let i = 0; i < len; i++) {
      const { h, l } = fromBig2(lst[i], le);
      [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
  }
  var shrSH2 = (h, _l, s) => h >>> s;
  var shrSL2 = (h, l, s) => h << 32 - s | l >>> s;
  var rotrSH2 = (h, l, s) => h >>> s | l << 32 - s;
  var rotrSL2 = (h, l, s) => h << 32 - s | l >>> s;
  var rotrBH2 = (h, l, s) => h << 64 - s | l >>> s - 32;
  var rotrBL2 = (h, l, s) => h >>> s - 32 | l << 64 - s;
  var rotlSH2 = (h, l, s) => h << s | l >>> 32 - s;
  var rotlSL2 = (h, l, s) => l << s | h >>> 32 - s;
  var rotlBH2 = (h, l, s) => l << s - 32 | h >>> 64 - s;
  var rotlBL2 = (h, l, s) => h << s - 32 | l >>> 64 - s;
  function add2(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
  }
  var add3L2 = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
  var add3H2 = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
  var add4L2 = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
  var add4H2 = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
  var add5L2 = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
  var add5H2 = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;

  // node_modules/@noble/hashes/sha2.js
  var SHA256_K2 = /* @__PURE__ */ Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var SHA256_W2 = /* @__PURE__ */ new Uint32Array(64);
  var SHA2_32B = class extends HashMD {
    constructor(outputLen) {
      super(64, outputLen, 8, false);
    }
    get() {
      const { A, B, C, D, E, F, G, H } = this;
      return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
      this.A = A | 0;
      this.B = B | 0;
      this.C = C | 0;
      this.D = D | 0;
      this.E = E | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4)
        SHA256_W2[i] = view.getUint32(offset, false);
      for (let i = 16; i < 64; i++) {
        const W15 = SHA256_W2[i - 15];
        const W2 = SHA256_W2[i - 2];
        const s0 = rotr2(W15, 7) ^ rotr2(W15, 18) ^ W15 >>> 3;
        const s1 = rotr2(W2, 17) ^ rotr2(W2, 19) ^ W2 >>> 10;
        SHA256_W2[i] = s1 + SHA256_W2[i - 7] + s0 + SHA256_W2[i - 16] | 0;
      }
      let { A, B, C, D, E, F, G, H } = this;
      for (let i = 0; i < 64; i++) {
        const sigma1 = rotr2(E, 6) ^ rotr2(E, 11) ^ rotr2(E, 25);
        const T12 = H + sigma1 + Chi2(E, F, G) + SHA256_K2[i] + SHA256_W2[i] | 0;
        const sigma0 = rotr2(A, 2) ^ rotr2(A, 13) ^ rotr2(A, 22);
        const T22 = sigma0 + Maj2(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T12 | 0;
        D = C;
        C = B;
        B = A;
        A = T12 + T22 | 0;
      }
      A = A + this.A | 0;
      B = B + this.B | 0;
      C = C + this.C | 0;
      D = D + this.D | 0;
      E = E + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H = H + this.H | 0;
      this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
      clean(SHA256_W2);
    }
    destroy() {
      this.destroyed = true;
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      clean(this.buffer);
    }
  };
  var _SHA256 = class extends SHA2_32B {
    // We cannot use array here since array allows indexing by variable
    // which means optimizer/compiler cannot use registers.
    A = SHA256_IV[0] | 0;
    B = SHA256_IV[1] | 0;
    C = SHA256_IV[2] | 0;
    D = SHA256_IV[3] | 0;
    E = SHA256_IV[4] | 0;
    F = SHA256_IV[5] | 0;
    G = SHA256_IV[6] | 0;
    H = SHA256_IV[7] | 0;
    constructor() {
      super(32);
    }
  };
  var K512 = /* @__PURE__ */ (() => split2([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((n2) => BigInt(n2))))();
  var SHA512_Kh2 = /* @__PURE__ */ (() => K512[0])();
  var SHA512_Kl2 = /* @__PURE__ */ (() => K512[1])();
  var SHA512_W_H2 = /* @__PURE__ */ new Uint32Array(80);
  var SHA512_W_L2 = /* @__PURE__ */ new Uint32Array(80);
  var SHA2_64B = class extends HashMD {
    constructor(outputLen) {
      super(128, outputLen, 16, false);
    }
    // prettier-ignore
    get() {
      const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
      this.Ah = Ah | 0;
      this.Al = Al | 0;
      this.Bh = Bh | 0;
      this.Bl = Bl | 0;
      this.Ch = Ch | 0;
      this.Cl = Cl | 0;
      this.Dh = Dh | 0;
      this.Dl = Dl | 0;
      this.Eh = Eh | 0;
      this.El = El | 0;
      this.Fh = Fh | 0;
      this.Fl = Fl | 0;
      this.Gh = Gh | 0;
      this.Gl = Gl | 0;
      this.Hh = Hh | 0;
      this.Hl = Hl | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4) {
        SHA512_W_H2[i] = view.getUint32(offset);
        SHA512_W_L2[i] = view.getUint32(offset += 4);
      }
      for (let i = 16; i < 80; i++) {
        const W15h = SHA512_W_H2[i - 15] | 0;
        const W15l = SHA512_W_L2[i - 15] | 0;
        const s0h = rotrSH2(W15h, W15l, 1) ^ rotrSH2(W15h, W15l, 8) ^ shrSH2(W15h, W15l, 7);
        const s0l = rotrSL2(W15h, W15l, 1) ^ rotrSL2(W15h, W15l, 8) ^ shrSL2(W15h, W15l, 7);
        const W2h = SHA512_W_H2[i - 2] | 0;
        const W2l = SHA512_W_L2[i - 2] | 0;
        const s1h = rotrSH2(W2h, W2l, 19) ^ rotrBH2(W2h, W2l, 61) ^ shrSH2(W2h, W2l, 6);
        const s1l = rotrSL2(W2h, W2l, 19) ^ rotrBL2(W2h, W2l, 61) ^ shrSL2(W2h, W2l, 6);
        const SUMl = add4L2(s0l, s1l, SHA512_W_L2[i - 7], SHA512_W_L2[i - 16]);
        const SUMh = add4H2(SUMl, s0h, s1h, SHA512_W_H2[i - 7], SHA512_W_H2[i - 16]);
        SHA512_W_H2[i] = SUMh | 0;
        SHA512_W_L2[i] = SUMl | 0;
      }
      let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      for (let i = 0; i < 80; i++) {
        const sigma1h = rotrSH2(Eh, El, 14) ^ rotrSH2(Eh, El, 18) ^ rotrBH2(Eh, El, 41);
        const sigma1l = rotrSL2(Eh, El, 14) ^ rotrSL2(Eh, El, 18) ^ rotrBL2(Eh, El, 41);
        const CHIh = Eh & Fh ^ ~Eh & Gh;
        const CHIl = El & Fl ^ ~El & Gl;
        const T1ll = add5L2(Hl, sigma1l, CHIl, SHA512_Kl2[i], SHA512_W_L2[i]);
        const T1h = add5H2(T1ll, Hh, sigma1h, CHIh, SHA512_Kh2[i], SHA512_W_H2[i]);
        const T1l = T1ll | 0;
        const sigma0h = rotrSH2(Ah, Al, 28) ^ rotrBH2(Ah, Al, 34) ^ rotrBH2(Ah, Al, 39);
        const sigma0l = rotrSL2(Ah, Al, 28) ^ rotrBL2(Ah, Al, 34) ^ rotrBL2(Ah, Al, 39);
        const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
        const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
        Hh = Gh | 0;
        Hl = Gl | 0;
        Gh = Fh | 0;
        Gl = Fl | 0;
        Fh = Eh | 0;
        Fl = El | 0;
        ({ h: Eh, l: El } = add2(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
        Dh = Ch | 0;
        Dl = Cl | 0;
        Ch = Bh | 0;
        Cl = Bl | 0;
        Bh = Ah | 0;
        Bl = Al | 0;
        const All = add3L2(T1l, sigma0l, MAJl);
        Ah = add3H2(All, T1h, sigma0h, MAJh);
        Al = All | 0;
      }
      ({ h: Ah, l: Al } = add2(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
      ({ h: Bh, l: Bl } = add2(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
      ({ h: Ch, l: Cl } = add2(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
      ({ h: Dh, l: Dl } = add2(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
      ({ h: Eh, l: El } = add2(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
      ({ h: Fh, l: Fl } = add2(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
      ({ h: Gh, l: Gl } = add2(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
      ({ h: Hh, l: Hl } = add2(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
      this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
      clean(SHA512_W_H2, SHA512_W_L2);
    }
    destroy() {
      this.destroyed = true;
      clean(this.buffer);
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  var _SHA512 = class extends SHA2_64B {
    Ah = SHA512_IV[0] | 0;
    Al = SHA512_IV[1] | 0;
    Bh = SHA512_IV[2] | 0;
    Bl = SHA512_IV[3] | 0;
    Ch = SHA512_IV[4] | 0;
    Cl = SHA512_IV[5] | 0;
    Dh = SHA512_IV[6] | 0;
    Dl = SHA512_IV[7] | 0;
    Eh = SHA512_IV[8] | 0;
    El = SHA512_IV[9] | 0;
    Fh = SHA512_IV[10] | 0;
    Fl = SHA512_IV[11] | 0;
    Gh = SHA512_IV[12] | 0;
    Gl = SHA512_IV[13] | 0;
    Hh = SHA512_IV[14] | 0;
    Hl = SHA512_IV[15] | 0;
    constructor() {
      super(64);
    }
  };
  var sha2563 = /* @__PURE__ */ createHasher(
    () => new _SHA256(),
    /* @__PURE__ */ oidNist(1)
  );
  var sha5123 = /* @__PURE__ */ createHasher(
    () => new _SHA512(),
    /* @__PURE__ */ oidNist(3)
  );

  // node_modules/@noble/curves/utils.js
  var abytes2 = (value, length, title) => abytes(value, length, title);
  var anumber2 = anumber;
  var bytesToHex3 = bytesToHex2;
  var concatBytes4 = (...arrays) => concatBytes3(...arrays);
  var hexToBytes3 = (hex) => hexToBytes2(hex);
  var isBytes2 = isBytes;
  var randomBytes5 = (bytesLength) => randomBytes4(bytesLength);
  var _0n7 = /* @__PURE__ */ BigInt(0);
  var _1n7 = /* @__PURE__ */ BigInt(1);
  function abool(value, title = "") {
    if (typeof value !== "boolean") {
      const prefix = title && `"${title}" `;
      throw new TypeError(prefix + "expected boolean, got type=" + typeof value);
    }
    return value;
  }
  function abignumber(n2) {
    if (typeof n2 === "bigint") {
      if (!isPosBig(n2))
        throw new RangeError("positive bigint expected, got " + n2);
    } else
      anumber2(n2);
    return n2;
  }
  function asafenumber(value, title = "") {
    if (typeof value !== "number") {
      const prefix = title && `"${title}" `;
      throw new TypeError(prefix + "expected number, got type=" + typeof value);
    }
    if (!Number.isSafeInteger(value)) {
      const prefix = title && `"${title}" `;
      throw new RangeError(prefix + "expected safe integer, got " + value);
    }
  }
  function numberToHexUnpadded2(num) {
    const hex = abignumber(num).toString(16);
    return hex.length & 1 ? "0" + hex : hex;
  }
  function hexToNumber2(hex) {
    if (typeof hex !== "string")
      throw new TypeError("hex string expected, got " + typeof hex);
    return hex === "" ? _0n7 : BigInt("0x" + hex);
  }
  function bytesToNumberBE2(bytes2) {
    return hexToNumber2(bytesToHex2(bytes2));
  }
  function bytesToNumberLE2(bytes2) {
    return hexToNumber2(bytesToHex2(copyBytes(abytes(bytes2)).reverse()));
  }
  function numberToBytesBE2(n2, len) {
    anumber(len);
    if (len === 0)
      throw new RangeError("zero length");
    n2 = abignumber(n2);
    const hex = n2.toString(16);
    if (hex.length > len * 2)
      throw new RangeError("number too large");
    return hexToBytes2(hex.padStart(len * 2, "0"));
  }
  function numberToBytesLE2(n2, len) {
    return numberToBytesBE2(n2, len).reverse();
  }
  function copyBytes(bytes2) {
    return Uint8Array.from(abytes2(bytes2));
  }
  var isPosBig = (n2) => typeof n2 === "bigint" && _0n7 <= n2;
  function inRange(n2, min, max) {
    return isPosBig(n2) && isPosBig(min) && isPosBig(max) && min <= n2 && n2 < max;
  }
  function aInRange(title, n2, min, max) {
    if (!inRange(n2, min, max))
      throw new RangeError("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n2);
  }
  function bitLen2(n2) {
    if (n2 < _0n7)
      throw new Error("expected non-negative bigint, got " + n2);
    let len;
    for (len = 0; n2 > _0n7; n2 >>= _1n7, len += 1)
      ;
    return len;
  }
  var bitMask2 = (n2) => (_1n7 << BigInt(n2)) - _1n7;
  function createHmacDrbg2(hashLen, qByteLen, hmacFn) {
    anumber(hashLen, "hashLen");
    anumber(qByteLen, "qByteLen");
    if (typeof hmacFn !== "function")
      throw new TypeError("hmacFn must be a function");
    const u8n3 = (len) => new Uint8Array(len);
    const NULL = Uint8Array.of();
    const byte0 = Uint8Array.of(0);
    const byte1 = Uint8Array.of(1);
    const _maxDrbgIters = 1e3;
    let v = u8n3(hashLen);
    let k = u8n3(hashLen);
    let i = 0;
    const reset = () => {
      v.fill(1);
      k.fill(0);
      i = 0;
    };
    const h = (...msgs) => hmacFn(k, concatBytes4(v, ...msgs));
    const reseed = (seed = NULL) => {
      k = h(byte0, seed);
      v = h();
      if (seed.length === 0)
        return;
      k = h(byte1, seed);
      v = h();
    };
    const gen2 = () => {
      if (i++ >= _maxDrbgIters)
        throw new Error("drbg: tried max amount of iterations");
      let len = 0;
      const out = [];
      while (len < qByteLen) {
        v = h();
        const sl = v.slice();
        out.push(sl);
        len += v.length;
      }
      return concatBytes4(...out);
    };
    const genUntil = (seed, pred) => {
      reset();
      reseed(seed);
      let res = void 0;
      while ((res = pred(gen2())) === void 0)
        reseed();
      reset();
      return res;
    };
    return genUntil;
  }
  function validateObject2(object, fields = {}, optFields = {}) {
    if (Object.prototype.toString.call(object) !== "[object Object]")
      throw new TypeError("expected valid options object");
    function checkField(fieldName, expectedType, isOpt) {
      if (!isOpt && expectedType !== "function" && !Object.hasOwn(object, fieldName))
        throw new TypeError(`param "${fieldName}" is invalid: expected own property`);
      const val = object[fieldName];
      if (isOpt && val === void 0)
        return;
      const current = typeof val;
      if (current !== expectedType || val === null)
        throw new TypeError(`param "${fieldName}" is invalid: expected ${expectedType}, got ${current}`);
    }
    const iter = (f2, isOpt) => Object.entries(f2).forEach(([k, v]) => checkField(k, v, isOpt));
    iter(fields, false);
    iter(optFields, true);
  }

  // node_modules/@noble/curves/abstract/modular.js
  var _0n8 = /* @__PURE__ */ BigInt(0);
  var _1n8 = /* @__PURE__ */ BigInt(1);
  var _2n6 = /* @__PURE__ */ BigInt(2);
  var _3n3 = /* @__PURE__ */ BigInt(3);
  var _4n3 = /* @__PURE__ */ BigInt(4);
  var _5n2 = /* @__PURE__ */ BigInt(5);
  var _7n2 = /* @__PURE__ */ BigInt(7);
  var _8n2 = /* @__PURE__ */ BigInt(8);
  var _9n2 = /* @__PURE__ */ BigInt(9);
  var _16n2 = /* @__PURE__ */ BigInt(16);
  function mod2(a, b2) {
    if (b2 <= _0n8)
      throw new Error("mod: expected positive modulus, got " + b2);
    const result = a % b2;
    return result >= _0n8 ? result : b2 + result;
  }
  function pow22(x, power, modulo) {
    if (power < _0n8)
      throw new Error("pow2: expected non-negative exponent, got " + power);
    let res = x;
    while (power-- > _0n8) {
      res *= res;
      res %= modulo;
    }
    return res;
  }
  function invert2(number2, modulo) {
    if (number2 === _0n8)
      throw new Error("invert: expected non-zero number");
    if (modulo <= _0n8)
      throw new Error("invert: expected positive modulus, got " + modulo);
    let a = mod2(number2, modulo);
    let b2 = modulo;
    let x = _0n8, y = _1n8, u = _1n8, v = _0n8;
    while (a !== _0n8) {
      const q = b2 / a;
      const r = b2 - a * q;
      const m = x - u * q;
      const n2 = y - v * q;
      b2 = a, a = r, x = u, y = v, u = m, v = n2;
    }
    const gcd = b2;
    if (gcd !== _1n8)
      throw new Error("invert: does not exist");
    return mod2(x, modulo);
  }
  function assertIsSquare(Fp2, root, n2) {
    const F = Fp2;
    if (!F.eql(F.sqr(root), n2))
      throw new Error("Cannot find square root");
  }
  function sqrt3mod4(Fp2, n2) {
    const F = Fp2;
    const p1div4 = (F.ORDER + _1n8) / _4n3;
    const root = F.pow(n2, p1div4);
    assertIsSquare(F, root, n2);
    return root;
  }
  function sqrt5mod8(Fp2, n2) {
    const F = Fp2;
    const p5div8 = (F.ORDER - _5n2) / _8n2;
    const n22 = F.mul(n2, _2n6);
    const v = F.pow(n22, p5div8);
    const nv = F.mul(n2, v);
    const i = F.mul(F.mul(nv, _2n6), v);
    const root = F.mul(nv, F.sub(i, F.ONE));
    assertIsSquare(F, root, n2);
    return root;
  }
  function sqrt9mod16(P) {
    const Fp_ = Field2(P);
    const tn = tonelliShanks2(P);
    const c1 = tn(Fp_, Fp_.neg(Fp_.ONE));
    const c2 = tn(Fp_, c1);
    const c3 = tn(Fp_, Fp_.neg(c1));
    const c4 = (P + _7n2) / _16n2;
    return (Fp2, n2) => {
      const F = Fp2;
      let tv1 = F.pow(n2, c4);
      let tv2 = F.mul(tv1, c1);
      const tv3 = F.mul(tv1, c2);
      const tv4 = F.mul(tv1, c3);
      const e1 = F.eql(F.sqr(tv2), n2);
      const e2 = F.eql(F.sqr(tv3), n2);
      tv1 = F.cmov(tv1, tv2, e1);
      tv2 = F.cmov(tv4, tv3, e2);
      const e3 = F.eql(F.sqr(tv2), n2);
      const root = F.cmov(tv1, tv2, e3);
      assertIsSquare(F, root, n2);
      return root;
    };
  }
  function tonelliShanks2(P) {
    if (P < _3n3)
      throw new Error("sqrt is not defined for small field");
    let Q = P - _1n8;
    let S2 = 0;
    while (Q % _2n6 === _0n8) {
      Q /= _2n6;
      S2++;
    }
    let Z = _2n6;
    const _Fp = Field2(P);
    while (FpLegendre(_Fp, Z) === 1) {
      if (Z++ > 1e3)
        throw new Error("Cannot find square root: probably non-prime P");
    }
    if (S2 === 1)
      return sqrt3mod4;
    let cc = _Fp.pow(Z, Q);
    const Q1div2 = (Q + _1n8) / _2n6;
    return function tonelliSlow(Fp2, n2) {
      const F = Fp2;
      if (F.is0(n2))
        return n2;
      if (FpLegendre(F, n2) !== 1)
        throw new Error("Cannot find square root");
      let M = S2;
      let c = F.mul(F.ONE, cc);
      let t = F.pow(n2, Q);
      let R = F.pow(n2, Q1div2);
      while (!F.eql(t, F.ONE)) {
        if (F.is0(t))
          return F.ZERO;
        let i = 1;
        let t_tmp = F.sqr(t);
        while (!F.eql(t_tmp, F.ONE)) {
          i++;
          t_tmp = F.sqr(t_tmp);
          if (i === M)
            throw new Error("Cannot find square root");
        }
        const exponent = _1n8 << BigInt(M - i - 1);
        const b2 = F.pow(c, exponent);
        M = i;
        c = F.sqr(b2);
        t = F.mul(t, c);
        R = F.mul(R, b2);
      }
      return R;
    };
  }
  function FpSqrt2(P) {
    if (P % _4n3 === _3n3)
      return sqrt3mod4;
    if (P % _8n2 === _5n2)
      return sqrt5mod8;
    if (P % _16n2 === _9n2)
      return sqrt9mod16(P);
    return tonelliShanks2(P);
  }
  var FIELD_FIELDS2 = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function validateField2(field) {
    const initial = {
      ORDER: "bigint",
      BYTES: "number",
      BITS: "number"
    };
    const opts = FIELD_FIELDS2.reduce((map, val) => {
      map[val] = "function";
      return map;
    }, initial);
    validateObject2(field, opts);
    asafenumber(field.BYTES, "BYTES");
    asafenumber(field.BITS, "BITS");
    if (field.BYTES < 1 || field.BITS < 1)
      throw new Error("invalid field: expected BYTES/BITS > 0");
    if (field.ORDER <= _1n8)
      throw new Error("invalid field: expected ORDER > 1, got " + field.ORDER);
    return field;
  }
  function FpPow2(Fp2, num, power) {
    const F = Fp2;
    if (power < _0n8)
      throw new Error("invalid exponent, negatives unsupported");
    if (power === _0n8)
      return F.ONE;
    if (power === _1n8)
      return num;
    let p = F.ONE;
    let d = num;
    while (power > _0n8) {
      if (power & _1n8)
        p = F.mul(p, d);
      d = F.sqr(d);
      power >>= _1n8;
    }
    return p;
  }
  function FpInvertBatch2(Fp2, nums, passZero = false) {
    const F = Fp2;
    const inverted = new Array(nums.length).fill(passZero ? F.ZERO : void 0);
    const multipliedAcc = nums.reduce((acc, num, i) => {
      if (F.is0(num))
        return acc;
      inverted[i] = acc;
      return F.mul(acc, num);
    }, F.ONE);
    const invertedAcc = F.inv(multipliedAcc);
    nums.reduceRight((acc, num, i) => {
      if (F.is0(num))
        return acc;
      inverted[i] = F.mul(acc, inverted[i]);
      return F.mul(acc, num);
    }, invertedAcc);
    return inverted;
  }
  function FpLegendre(Fp2, n2) {
    const F = Fp2;
    const p1mod2 = (F.ORDER - _1n8) / _2n6;
    const powered = F.pow(n2, p1mod2);
    const yes = F.eql(powered, F.ONE);
    const zero = F.eql(powered, F.ZERO);
    const no = F.eql(powered, F.neg(F.ONE));
    if (!yes && !zero && !no)
      throw new Error("invalid Legendre symbol result");
    return yes ? 1 : zero ? 0 : -1;
  }
  function nLength2(n2, nBitLength) {
    if (nBitLength !== void 0)
      anumber2(nBitLength);
    if (n2 <= _0n8)
      throw new Error("invalid n length: expected positive n, got " + n2);
    if (nBitLength !== void 0 && nBitLength < 1)
      throw new Error("invalid n length: expected positive bit length, got " + nBitLength);
    const bits = bitLen2(n2);
    if (nBitLength !== void 0 && nBitLength < bits)
      throw new Error(`invalid n length: expected bit length (${bits}) >= n.length (${nBitLength})`);
    const _nBitLength = nBitLength !== void 0 ? nBitLength : bits;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
  }
  var FIELD_SQRT = /* @__PURE__ */ new WeakMap();
  var _Field = class {
    ORDER;
    BITS;
    BYTES;
    isLE;
    ZERO = _0n8;
    ONE = _1n8;
    _lengths;
    _mod;
    constructor(ORDER, opts = {}) {
      if (ORDER <= _1n8)
        throw new Error("invalid field: expected ORDER > 1, got " + ORDER);
      let _nbitLength = void 0;
      this.isLE = false;
      if (opts != null && typeof opts === "object") {
        if (typeof opts.BITS === "number")
          _nbitLength = opts.BITS;
        if (typeof opts.sqrt === "function")
          Object.defineProperty(this, "sqrt", { value: opts.sqrt, enumerable: true });
        if (typeof opts.isLE === "boolean")
          this.isLE = opts.isLE;
        if (opts.allowedLengths)
          this._lengths = Object.freeze(opts.allowedLengths.slice());
        if (typeof opts.modFromBytes === "boolean")
          this._mod = opts.modFromBytes;
      }
      const { nBitLength, nByteLength } = nLength2(ORDER, _nbitLength);
      if (nByteLength > 2048)
        throw new Error("invalid field: expected ORDER of <= 2048 bytes");
      this.ORDER = ORDER;
      this.BITS = nBitLength;
      this.BYTES = nByteLength;
      Object.freeze(this);
    }
    create(num) {
      return mod2(num, this.ORDER);
    }
    isValid(num) {
      if (typeof num !== "bigint")
        throw new TypeError("invalid field element: expected bigint, got " + typeof num);
      return _0n8 <= num && num < this.ORDER;
    }
    is0(num) {
      return num === _0n8;
    }
    // is valid and invertible
    isValidNot0(num) {
      return !this.is0(num) && this.isValid(num);
    }
    isOdd(num) {
      return (num & _1n8) === _1n8;
    }
    neg(num) {
      return mod2(-num, this.ORDER);
    }
    eql(lhs, rhs) {
      return lhs === rhs;
    }
    sqr(num) {
      return mod2(num * num, this.ORDER);
    }
    add(lhs, rhs) {
      return mod2(lhs + rhs, this.ORDER);
    }
    sub(lhs, rhs) {
      return mod2(lhs - rhs, this.ORDER);
    }
    mul(lhs, rhs) {
      return mod2(lhs * rhs, this.ORDER);
    }
    pow(num, power) {
      return FpPow2(this, num, power);
    }
    div(lhs, rhs) {
      return mod2(lhs * invert2(rhs, this.ORDER), this.ORDER);
    }
    // Same as above, but doesn't normalize
    sqrN(num) {
      return num * num;
    }
    addN(lhs, rhs) {
      return lhs + rhs;
    }
    subN(lhs, rhs) {
      return lhs - rhs;
    }
    mulN(lhs, rhs) {
      return lhs * rhs;
    }
    inv(num) {
      return invert2(num, this.ORDER);
    }
    sqrt(num) {
      let sqrt = FIELD_SQRT.get(this);
      if (!sqrt)
        FIELD_SQRT.set(this, sqrt = FpSqrt2(this.ORDER));
      return sqrt(this, num);
    }
    toBytes(num) {
      return this.isLE ? numberToBytesLE2(num, this.BYTES) : numberToBytesBE2(num, this.BYTES);
    }
    fromBytes(bytes2, skipValidation = false) {
      abytes2(bytes2);
      const { _lengths: allowedLengths, BYTES, isLE: isLE4, ORDER, _mod: modFromBytes } = this;
      if (allowedLengths) {
        if (bytes2.length < 1 || !allowedLengths.includes(bytes2.length) || bytes2.length > BYTES) {
          throw new Error("Field.fromBytes: expected " + allowedLengths + " bytes, got " + bytes2.length);
        }
        const padded = new Uint8Array(BYTES);
        padded.set(bytes2, isLE4 ? 0 : padded.length - bytes2.length);
        bytes2 = padded;
      }
      if (bytes2.length !== BYTES)
        throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes2.length);
      let scalar = isLE4 ? bytesToNumberLE2(bytes2) : bytesToNumberBE2(bytes2);
      if (modFromBytes)
        scalar = mod2(scalar, ORDER);
      if (!skipValidation) {
        if (!this.isValid(scalar))
          throw new Error("invalid field element: outside of range 0..ORDER");
      }
      return scalar;
    }
    // TODO: we don't need it here, move out to separate fn
    invertBatch(lst) {
      return FpInvertBatch2(this, lst);
    }
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov(a, b2, condition) {
      abool(condition, "condition");
      return condition ? b2 : a;
    }
  };
  Object.freeze(_Field.prototype);
  function Field2(ORDER, opts = {}) {
    return new _Field(ORDER, opts);
  }
  function getFieldBytesLength2(fieldOrder) {
    if (typeof fieldOrder !== "bigint")
      throw new Error("field order must be bigint");
    if (fieldOrder <= _1n8)
      throw new Error("field order must be greater than 1");
    const bitLength = bitLen2(fieldOrder - _1n8);
    return Math.ceil(bitLength / 8);
  }
  function getMinHashLength2(fieldOrder) {
    const length = getFieldBytesLength2(fieldOrder);
    return length + Math.ceil(length / 2);
  }
  function mapHashToField2(key, fieldOrder, isLE4 = false) {
    abytes2(key);
    const len = key.length;
    const fieldLen = getFieldBytesLength2(fieldOrder);
    const minLen = Math.max(getMinHashLength2(fieldOrder), 16);
    if (len < minLen || len > 1024)
      throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
    const num = isLE4 ? bytesToNumberLE2(key) : bytesToNumberBE2(key);
    const reduced = mod2(num, fieldOrder - _1n8) + _1n8;
    return isLE4 ? numberToBytesLE2(reduced, fieldLen) : numberToBytesBE2(reduced, fieldLen);
  }

  // node_modules/@noble/curves/abstract/curve.js
  var _0n9 = /* @__PURE__ */ BigInt(0);
  var _1n9 = /* @__PURE__ */ BigInt(1);
  function negateCt(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
  }
  function normalizeZ(c, points) {
    const invertedZs = FpInvertBatch2(c.Fp, points.map((p) => p.Z));
    return points.map((p, i) => c.fromAffine(p.toAffine(invertedZs[i])));
  }
  function validateW(W, bits) {
    if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
      throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
  }
  function calcWOpts(W, scalarBits) {
    validateW(W, scalarBits);
    const windows = Math.ceil(scalarBits / W) + 1;
    const windowSize = 2 ** (W - 1);
    const maxNumber = 2 ** W;
    const mask2 = bitMask2(W);
    const shiftBy = BigInt(W);
    return { windows, windowSize, mask: mask2, maxNumber, shiftBy };
  }
  function calcOffsets(n2, window2, wOpts) {
    const { windowSize, mask: mask2, maxNumber, shiftBy } = wOpts;
    let wbits = Number(n2 & mask2);
    let nextN = n2 >> shiftBy;
    if (wbits > windowSize) {
      wbits -= maxNumber;
      nextN += _1n9;
    }
    const offsetStart = window2 * windowSize;
    const offset = offsetStart + Math.abs(wbits) - 1;
    const isZero = wbits === 0;
    const isNeg = wbits < 0;
    const isNegF = window2 % 2 !== 0;
    const offsetF = offsetStart;
    return { nextN, offset, isZero, isNeg, isNegF, offsetF };
  }
  var pointPrecomputes = /* @__PURE__ */ new WeakMap();
  var pointWindowSizes = /* @__PURE__ */ new WeakMap();
  function getW(P) {
    return pointWindowSizes.get(P) || 1;
  }
  function assert0(n2) {
    if (n2 !== _0n9)
      throw new Error("invalid wNAF");
  }
  var wNAF2 = class {
    BASE;
    ZERO;
    Fn;
    bits;
    // Parametrized with a given Point class (not individual point)
    constructor(Point3, bits) {
      this.BASE = Point3.BASE;
      this.ZERO = Point3.ZERO;
      this.Fn = Point3.Fn;
      this.bits = bits;
    }
    // non-const time multiplication ladder
    _unsafeLadder(elm, n2, p = this.ZERO) {
      let d = elm;
      while (n2 > _0n9) {
        if (n2 & _1n9)
          p = p.add(d);
        d = d.double();
        n2 >>= _1n9;
      }
      return p;
    }
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @param point - Point instance
     * @param W - window size
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(point, W) {
      const { windows, windowSize } = calcWOpts(W, this.bits);
      const points = [];
      let p = point;
      let base = p;
      for (let window2 = 0; window2 < windows; window2++) {
        base = p;
        points.push(base);
        for (let i = 1; i < windowSize; i++) {
          base = base.add(p);
          points.push(base);
        }
        p = base.double();
      }
      return points;
    }
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * More compact implementation:
     * https://github.com/paulmillr/noble-secp256k1/blob/47cb1669b6e506ad66b35fe7d76132ae97465da2/index.ts#L502-L541
     * @returns real and fake (for const-time) points
     */
    wNAF(W, precomputes, n2) {
      if (!this.Fn.isValid(n2))
        throw new Error("invalid scalar");
      let p = this.ZERO;
      let f2 = this.BASE;
      const wo = calcWOpts(W, this.bits);
      for (let window2 = 0; window2 < wo.windows; window2++) {
        const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n2, window2, wo);
        n2 = nextN;
        if (isZero) {
          f2 = f2.add(negateCt(isNegF, precomputes[offsetF]));
        } else {
          p = p.add(negateCt(isNeg, precomputes[offset]));
        }
      }
      assert0(n2);
      return { p, f: f2 };
    }
    /**
     * Implements unsafe EC multiplication using precomputed tables
     * and w-ary non-adjacent form.
     * @param acc - accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(W, precomputes, n2, acc = this.ZERO) {
      const wo = calcWOpts(W, this.bits);
      for (let window2 = 0; window2 < wo.windows; window2++) {
        if (n2 === _0n9)
          break;
        const { nextN, offset, isZero, isNeg } = calcOffsets(n2, window2, wo);
        n2 = nextN;
        if (isZero) {
          continue;
        } else {
          const item = precomputes[offset];
          acc = acc.add(isNeg ? item.negate() : item);
        }
      }
      assert0(n2);
      return acc;
    }
    getPrecomputes(W, point, transform) {
      let comp = pointPrecomputes.get(point);
      if (!comp) {
        comp = this.precomputeWindow(point, W);
        if (W !== 1) {
          if (typeof transform === "function")
            comp = transform(comp);
          pointPrecomputes.set(point, comp);
        }
      }
      return comp;
    }
    cached(point, scalar, transform) {
      const W = getW(point);
      return this.wNAF(W, this.getPrecomputes(W, point, transform), scalar);
    }
    unsafe(point, scalar, transform, prev) {
      const W = getW(point);
      if (W === 1)
        return this._unsafeLadder(point, scalar, prev);
      return this.wNAFUnsafe(W, this.getPrecomputes(W, point, transform), scalar, prev);
    }
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    createCache(P, W) {
      validateW(W, this.bits);
      pointWindowSizes.set(P, W);
      pointPrecomputes.delete(P);
    }
    hasCache(elm) {
      return getW(elm) !== 1;
    }
  };
  function mulEndoUnsafe(Point3, point, k1, k2) {
    let acc = point;
    let p1 = Point3.ZERO;
    let p2 = Point3.ZERO;
    while (k1 > _0n9 || k2 > _0n9) {
      if (k1 & _1n9)
        p1 = p1.add(acc);
      if (k2 & _1n9)
        p2 = p2.add(acc);
      acc = acc.double();
      k1 >>= _1n9;
      k2 >>= _1n9;
    }
    return { p1, p2 };
  }
  function createField(order, field, isLE4) {
    if (field) {
      if (field.ORDER !== order)
        throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      validateField2(field);
      return field;
    } else {
      return Field2(order, { isLE: isLE4 });
    }
  }
  function createCurveFields(type, CURVE, curveOpts = {}, FpFnLE) {
    if (FpFnLE === void 0)
      FpFnLE = type === "edwards";
    if (!CURVE || typeof CURVE !== "object")
      throw new Error(`expected valid ${type} CURVE object`);
    for (const p of ["p", "n", "h"]) {
      const val = CURVE[p];
      if (!(typeof val === "bigint" && val > _0n9))
        throw new Error(`CURVE.${p} must be positive bigint`);
    }
    const Fp2 = createField(CURVE.p, curveOpts.Fp, FpFnLE);
    const Fn = createField(CURVE.n, curveOpts.Fn, FpFnLE);
    const _b = type === "weierstrass" ? "b" : "d";
    const params = ["Gx", "Gy", "a", _b];
    for (const p of params) {
      if (!Fp2.isValid(CURVE[p]))
        throw new Error(`CURVE.${p} must be valid field element of CURVE.Fp`);
    }
    CURVE = Object.freeze(Object.assign({}, CURVE));
    return { CURVE, Fp: Fp2, Fn };
  }
  function createKeygen(randomSecretKey, getPublicKey) {
    return function keygen(seed) {
      const secretKey = randomSecretKey(seed);
      return { secretKey, publicKey: getPublicKey(secretKey) };
    };
  }

  // node_modules/@noble/hashes/hmac.js
  var _HMAC = class {
    oHash;
    iHash;
    blockLen;
    outputLen;
    canXOF = false;
    finished = false;
    destroyed = false;
    constructor(hash3, key) {
      ahash(hash3);
      abytes(key, void 0, "key");
      this.iHash = hash3.create();
      if (typeof this.iHash.update !== "function")
        throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen;
      this.outputLen = this.iHash.outputLen;
      const blockLen = this.blockLen;
      const pad = new Uint8Array(blockLen);
      pad.set(key.length > blockLen ? hash3.create().update(key).digest() : key);
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54;
      this.iHash.update(pad);
      this.oHash = hash3.create();
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54 ^ 92;
      this.oHash.update(pad);
      clean(pad);
    }
    update(buf) {
      aexists(this);
      this.iHash.update(buf);
      return this;
    }
    digestInto(out) {
      aexists(this);
      aoutput(out, this);
      this.finished = true;
      const buf = out.subarray(0, this.outputLen);
      this.iHash.digestInto(buf);
      this.oHash.update(buf);
      this.oHash.digestInto(buf);
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.oHash.outputLen);
      this.digestInto(out);
      return out;
    }
    _cloneInto(to) {
      to ||= Object.create(Object.getPrototypeOf(this), {});
      const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
      to = to;
      to.finished = finished;
      to.destroyed = destroyed;
      to.blockLen = blockLen;
      to.outputLen = outputLen;
      to.oHash = oHash._cloneInto(to.oHash);
      to.iHash = iHash._cloneInto(to.iHash);
      return to;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true;
      this.oHash.destroy();
      this.iHash.destroy();
    }
  };
  var hmac2 = /* @__PURE__ */ (() => {
    const hmac_ = (hash3, key, message) => new _HMAC(hash3, key).update(message).digest();
    hmac_.create = (hash3, key) => new _HMAC(hash3, key);
    return hmac_;
  })();

  // node_modules/@noble/curves/abstract/weierstrass.js
  var divNearest2 = (num, den) => (num + (num >= 0 ? den : -den) / _2n7) / den;
  function _splitEndoScalar(k, basis, n2) {
    aInRange("scalar", k, _0n10, n2);
    const [[a1, b1], [a2, b2]] = basis;
    const c1 = divNearest2(b2 * k, n2);
    const c2 = divNearest2(-b1 * k, n2);
    let k1 = k - c1 * a1 - c2 * a2;
    let k2 = -c1 * b1 - c2 * b2;
    const k1neg = k1 < _0n10;
    const k2neg = k2 < _0n10;
    if (k1neg)
      k1 = -k1;
    if (k2neg)
      k2 = -k2;
    const MAX_NUM = bitMask2(Math.ceil(bitLen2(n2) / 2)) + _1n10;
    if (k1 < _0n10 || k1 >= MAX_NUM || k2 < _0n10 || k2 >= MAX_NUM) {
      throw new Error("splitScalar (endomorphism): failed for k");
    }
    return { k1neg, k1, k2neg, k2 };
  }
  function validateSigFormat(format) {
    if (!["compact", "recovered", "der"].includes(format))
      throw new Error('Signature format must be "compact", "recovered", or "der"');
    return format;
  }
  function validateSigOpts(opts, def) {
    validateObject2(opts);
    const optsn = {};
    for (let optName of Object.keys(def)) {
      optsn[optName] = opts[optName] === void 0 ? def[optName] : opts[optName];
    }
    abool(optsn.lowS, "lowS");
    abool(optsn.prehash, "prehash");
    if (optsn.format !== void 0)
      validateSigFormat(optsn.format);
    return optsn;
  }
  var DERErr2 = class extends Error {
    constructor(m = "") {
      super(m);
    }
  };
  var DER2 = {
    // asn.1 DER encoding utils
    Err: DERErr2,
    // Basic building block is TLV (Tag-Length-Value)
    _tlv: {
      encode: (tag, data) => {
        const { Err: E } = DER2;
        asafenumber(tag, "tag");
        if (tag < 0 || tag > 255)
          throw new E("tlv.encode: wrong tag");
        if (typeof data !== "string")
          throw new TypeError('"data" expected string, got type=' + typeof data);
        if (data.length & 1)
          throw new E("tlv.encode: unpadded data");
        const dataLen = data.length / 2;
        const len = numberToHexUnpadded2(dataLen);
        if (len.length / 2 & 128)
          throw new E("tlv.encode: long form length too big");
        const lenLen = dataLen > 127 ? numberToHexUnpadded2(len.length / 2 | 128) : "";
        const t = numberToHexUnpadded2(tag);
        return t + lenLen + len + data;
      },
      // v - value, l - left bytes (unparsed)
      decode(tag, data) {
        const { Err: E } = DER2;
        data = abytes2(data, void 0, "DER data");
        let pos = 0;
        if (tag < 0 || tag > 255)
          throw new E("tlv.encode: wrong tag");
        if (data.length < 2 || data[pos++] !== tag)
          throw new E("tlv.decode: wrong tlv");
        const first = data[pos++];
        const isLong = !!(first & 128);
        let length = 0;
        if (!isLong)
          length = first;
        else {
          const lenLen = first & 127;
          if (!lenLen)
            throw new E("tlv.decode(long): indefinite length not supported");
          if (lenLen > 4)
            throw new E("tlv.decode(long): byte length is too big");
          const lengthBytes = data.subarray(pos, pos + lenLen);
          if (lengthBytes.length !== lenLen)
            throw new E("tlv.decode: length bytes not complete");
          if (lengthBytes[0] === 0)
            throw new E("tlv.decode(long): zero leftmost byte");
          for (const b2 of lengthBytes)
            length = length << 8 | b2;
          pos += lenLen;
          if (length < 128)
            throw new E("tlv.decode(long): not minimal encoding");
        }
        const v = data.subarray(pos, pos + length);
        if (v.length !== length)
          throw new E("tlv.decode: wrong value length");
        return { v, l: data.subarray(pos + length) };
      }
    },
    // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
    // since we always use positive integers here. It must always be empty:
    // - add zero byte if exists
    // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
    _int: {
      encode(num) {
        const { Err: E } = DER2;
        abignumber(num);
        if (num < _0n10)
          throw new E("integer: negative integers are not allowed");
        let hex = numberToHexUnpadded2(num);
        if (Number.parseInt(hex[0], 16) & 8)
          hex = "00" + hex;
        if (hex.length & 1)
          throw new E("unexpected DER parsing assertion: unpadded hex");
        return hex;
      },
      decode(data) {
        const { Err: E } = DER2;
        if (data.length < 1)
          throw new E("invalid signature integer: empty");
        if (data[0] & 128)
          throw new E("invalid signature integer: negative");
        if (data.length > 1 && data[0] === 0 && !(data[1] & 128))
          throw new E("invalid signature integer: unnecessary leading zero");
        return bytesToNumberBE2(data);
      }
    },
    toSig(bytes2) {
      const { Err: E, _int: int, _tlv: tlv } = DER2;
      const data = abytes2(bytes2, void 0, "signature");
      const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
      if (seqLeftBytes.length)
        throw new E("invalid signature: left bytes after parsing");
      const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
      const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
      if (sLeftBytes.length)
        throw new E("invalid signature: left bytes after parsing");
      return { r: int.decode(rBytes), s: int.decode(sBytes) };
    },
    hexFromSig(sig) {
      const { _tlv: tlv, _int: int } = DER2;
      const rs = tlv.encode(2, int.encode(sig.r));
      const ss = tlv.encode(2, int.encode(sig.s));
      const seq = rs + ss;
      return tlv.encode(48, seq);
    }
  };
  Object.freeze(DER2._tlv);
  Object.freeze(DER2._int);
  Object.freeze(DER2);
  var _0n10 = /* @__PURE__ */ BigInt(0);
  var _1n10 = /* @__PURE__ */ BigInt(1);
  var _2n7 = /* @__PURE__ */ BigInt(2);
  var _3n4 = /* @__PURE__ */ BigInt(3);
  var _4n4 = /* @__PURE__ */ BigInt(4);
  function weierstrass2(params, extraOpts = {}) {
    const validated = createCurveFields("weierstrass", params, extraOpts);
    const Fp2 = validated.Fp;
    const Fn = validated.Fn;
    let CURVE = validated.CURVE;
    const { h: cofactor, n: CURVE_ORDER } = CURVE;
    validateObject2(extraOpts, {}, {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object"
    });
    const { endo, allowInfinityPoint } = extraOpts;
    if (endo) {
      if (!Fp2.is0(CURVE.a) || typeof endo.beta !== "bigint" || !Array.isArray(endo.basises)) {
        throw new Error('invalid endo: expected "beta": bigint and "basises": array');
      }
    }
    const lengths = getWLengths(Fp2, Fn);
    function assertCompressionIsSupported() {
      if (!Fp2.isOdd)
        throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function pointToBytes(_c, point, isCompressed) {
      if (allowInfinityPoint && point.is0())
        return Uint8Array.of(0);
      const { x, y } = point.toAffine();
      const bx = Fp2.toBytes(x);
      abool(isCompressed, "isCompressed");
      if (isCompressed) {
        assertCompressionIsSupported();
        const hasEvenY = !Fp2.isOdd(y);
        return concatBytes4(pprefix(hasEvenY), bx);
      } else {
        return concatBytes4(Uint8Array.of(4), bx, Fp2.toBytes(y));
      }
    }
    function pointFromBytes(bytes2) {
      abytes2(bytes2, void 0, "Point");
      const { publicKey: comp, publicKeyUncompressed: uncomp } = lengths;
      const length = bytes2.length;
      const head = bytes2[0];
      const tail = bytes2.subarray(1);
      if (allowInfinityPoint && length === 1 && head === 0)
        return { x: Fp2.ZERO, y: Fp2.ZERO };
      if (length === comp && (head === 2 || head === 3)) {
        const x = Fp2.fromBytes(tail);
        if (!Fp2.isValid(x))
          throw new Error("bad point: is not on curve, wrong x");
        const y2 = weierstrassEquation(x);
        let y;
        try {
          y = Fp2.sqrt(y2);
        } catch (sqrtError) {
          const err = sqrtError instanceof Error ? ": " + sqrtError.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + err);
        }
        assertCompressionIsSupported();
        const evenY = Fp2.isOdd(y);
        const evenH = (head & 1) === 1;
        if (evenH !== evenY)
          y = Fp2.neg(y);
        return { x, y };
      } else if (length === uncomp && head === 4) {
        const L = Fp2.BYTES;
        const x = Fp2.fromBytes(tail.subarray(0, L));
        const y = Fp2.fromBytes(tail.subarray(L, L * 2));
        if (!isValidXY(x, y))
          throw new Error("bad point: is not on curve");
        return { x, y };
      } else {
        throw new Error(`bad point: got length ${length}, expected compressed=${comp} or uncompressed=${uncomp}`);
      }
    }
    const encodePoint = extraOpts.toBytes === void 0 ? pointToBytes : extraOpts.toBytes;
    const decodePoint = extraOpts.fromBytes === void 0 ? pointFromBytes : extraOpts.fromBytes;
    function weierstrassEquation(x) {
      const x2 = Fp2.sqr(x);
      const x3 = Fp2.mul(x2, x);
      return Fp2.add(Fp2.add(x3, Fp2.mul(x, CURVE.a)), CURVE.b);
    }
    function isValidXY(x, y) {
      const left = Fp2.sqr(y);
      const right = weierstrassEquation(x);
      return Fp2.eql(left, right);
    }
    if (!isValidXY(CURVE.Gx, CURVE.Gy))
      throw new Error("bad curve params: generator point");
    const _4a3 = Fp2.mul(Fp2.pow(CURVE.a, _3n4), _4n4);
    const _27b2 = Fp2.mul(Fp2.sqr(CURVE.b), BigInt(27));
    if (Fp2.is0(Fp2.add(_4a3, _27b2)))
      throw new Error("bad curve params: a or b");
    function acoord(title, n2, banZero = false) {
      if (!Fp2.isValid(n2) || banZero && Fp2.is0(n2))
        throw new Error(`bad point coordinate ${title}`);
      return n2;
    }
    function aprjpoint(other) {
      if (!(other instanceof Point3))
        throw new Error("Weierstrass Point expected");
    }
    function splitEndoScalarN(k) {
      if (!endo || !endo.basises)
        throw new Error("no endo");
      return _splitEndoScalar(k, endo.basises, Fn.ORDER);
    }
    function finishEndo(endoBeta, k1p, k2p, k1neg, k2neg) {
      k2p = new Point3(Fp2.mul(k2p.X, endoBeta), k2p.Y, k2p.Z);
      k1p = negateCt(k1neg, k1p);
      k2p = negateCt(k2neg, k2p);
      return k1p.add(k2p);
    }
    class Point3 {
      // base / generator point
      static BASE = new Point3(CURVE.Gx, CURVE.Gy, Fp2.ONE);
      // zero / infinity / identity point
      static ZERO = new Point3(Fp2.ZERO, Fp2.ONE, Fp2.ZERO);
      // 0, 1, 0
      // math field
      static Fp = Fp2;
      // scalar field
      static Fn = Fn;
      X;
      Y;
      Z;
      /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
      constructor(X, Y, Z) {
        this.X = acoord("x", X);
        this.Y = acoord("y", Y, true);
        this.Z = acoord("z", Z);
        Object.freeze(this);
      }
      static CURVE() {
        return CURVE;
      }
      /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
      static fromAffine(p) {
        const { x, y } = p || {};
        if (!p || !Fp2.isValid(x) || !Fp2.isValid(y))
          throw new Error("invalid affine point");
        if (p instanceof Point3)
          throw new Error("projective point not allowed");
        if (Fp2.is0(x) && Fp2.is0(y))
          return Point3.ZERO;
        return new Point3(x, y, Fp2.ONE);
      }
      static fromBytes(bytes2) {
        const P = Point3.fromAffine(decodePoint(abytes2(bytes2, void 0, "point")));
        P.assertValidity();
        return P;
      }
      static fromHex(hex) {
        return Point3.fromBytes(hexToBytes3(hex));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      /**
       *
       * @param windowSize
       * @param isLazy - true will defer table computation until the first multiplication
       * @returns
       */
      precompute(windowSize = 8, isLazy = true) {
        wnaf.createCache(this, windowSize);
        if (!isLazy)
          this.multiply(_3n4);
        return this;
      }
      // TODO: return `this`
      /** A point on curve is valid if it conforms to equation. */
      assertValidity() {
        const p = this;
        if (p.is0()) {
          if (extraOpts.allowInfinityPoint && Fp2.is0(p.X) && Fp2.eql(p.Y, Fp2.ONE) && Fp2.is0(p.Z))
            return;
          throw new Error("bad point: ZERO");
        }
        const { x, y } = p.toAffine();
        if (!Fp2.isValid(x) || !Fp2.isValid(y))
          throw new Error("bad point: x or y not field elements");
        if (!isValidXY(x, y))
          throw new Error("bad point: equation left != right");
        if (!p.isTorsionFree())
          throw new Error("bad point: not in prime-order subgroup");
      }
      hasEvenY() {
        const { y } = this.toAffine();
        if (!Fp2.isOdd)
          throw new Error("Field doesn't support isOdd");
        return !Fp2.isOdd(y);
      }
      /** Compare one point to another. */
      equals(other) {
        aprjpoint(other);
        const { X: X1, Y: Y1, Z: Z1 } = this;
        const { X: X2, Y: Y2, Z: Z2 } = other;
        const U12 = Fp2.eql(Fp2.mul(X1, Z2), Fp2.mul(X2, Z1));
        const U22 = Fp2.eql(Fp2.mul(Y1, Z2), Fp2.mul(Y2, Z1));
        return U12 && U22;
      }
      /** Flips point to one corresponding to (x, -y) in Affine coordinates. */
      negate() {
        return new Point3(this.X, Fp2.neg(this.Y), this.Z);
      }
      // Renes-Costello-Batina exception-free doubling formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 3
      // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
      double() {
        const { a, b: b2 } = CURVE;
        const b3 = Fp2.mul(b2, _3n4);
        const { X: X1, Y: Y1, Z: Z1 } = this;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        let t0 = Fp2.mul(X1, X1);
        let t1 = Fp2.mul(Y1, Y1);
        let t2 = Fp2.mul(Z1, Z1);
        let t3 = Fp2.mul(X1, Y1);
        t3 = Fp2.add(t3, t3);
        Z3 = Fp2.mul(X1, Z1);
        Z3 = Fp2.add(Z3, Z3);
        X3 = Fp2.mul(a, Z3);
        Y3 = Fp2.mul(b3, t2);
        Y3 = Fp2.add(X3, Y3);
        X3 = Fp2.sub(t1, Y3);
        Y3 = Fp2.add(t1, Y3);
        Y3 = Fp2.mul(X3, Y3);
        X3 = Fp2.mul(t3, X3);
        Z3 = Fp2.mul(b3, Z3);
        t2 = Fp2.mul(a, t2);
        t3 = Fp2.sub(t0, t2);
        t3 = Fp2.mul(a, t3);
        t3 = Fp2.add(t3, Z3);
        Z3 = Fp2.add(t0, t0);
        t0 = Fp2.add(Z3, t0);
        t0 = Fp2.add(t0, t2);
        t0 = Fp2.mul(t0, t3);
        Y3 = Fp2.add(Y3, t0);
        t2 = Fp2.mul(Y1, Z1);
        t2 = Fp2.add(t2, t2);
        t0 = Fp2.mul(t2, t3);
        X3 = Fp2.sub(X3, t0);
        Z3 = Fp2.mul(t2, t1);
        Z3 = Fp2.add(Z3, Z3);
        Z3 = Fp2.add(Z3, Z3);
        return new Point3(X3, Y3, Z3);
      }
      // Renes-Costello-Batina exception-free addition formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 1
      // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
      add(other) {
        aprjpoint(other);
        const { X: X1, Y: Y1, Z: Z1 } = this;
        const { X: X2, Y: Y2, Z: Z2 } = other;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        const a = CURVE.a;
        const b3 = Fp2.mul(CURVE.b, _3n4);
        let t0 = Fp2.mul(X1, X2);
        let t1 = Fp2.mul(Y1, Y2);
        let t2 = Fp2.mul(Z1, Z2);
        let t3 = Fp2.add(X1, Y1);
        let t4 = Fp2.add(X2, Y2);
        t3 = Fp2.mul(t3, t4);
        t4 = Fp2.add(t0, t1);
        t3 = Fp2.sub(t3, t4);
        t4 = Fp2.add(X1, Z1);
        let t5 = Fp2.add(X2, Z2);
        t4 = Fp2.mul(t4, t5);
        t5 = Fp2.add(t0, t2);
        t4 = Fp2.sub(t4, t5);
        t5 = Fp2.add(Y1, Z1);
        X3 = Fp2.add(Y2, Z2);
        t5 = Fp2.mul(t5, X3);
        X3 = Fp2.add(t1, t2);
        t5 = Fp2.sub(t5, X3);
        Z3 = Fp2.mul(a, t4);
        X3 = Fp2.mul(b3, t2);
        Z3 = Fp2.add(X3, Z3);
        X3 = Fp2.sub(t1, Z3);
        Z3 = Fp2.add(t1, Z3);
        Y3 = Fp2.mul(X3, Z3);
        t1 = Fp2.add(t0, t0);
        t1 = Fp2.add(t1, t0);
        t2 = Fp2.mul(a, t2);
        t4 = Fp2.mul(b3, t4);
        t1 = Fp2.add(t1, t2);
        t2 = Fp2.sub(t0, t2);
        t2 = Fp2.mul(a, t2);
        t4 = Fp2.add(t4, t2);
        t0 = Fp2.mul(t1, t4);
        Y3 = Fp2.add(Y3, t0);
        t0 = Fp2.mul(t5, t4);
        X3 = Fp2.mul(t3, X3);
        X3 = Fp2.sub(X3, t0);
        t0 = Fp2.mul(t3, t1);
        Z3 = Fp2.mul(t5, Z3);
        Z3 = Fp2.add(Z3, t0);
        return new Point3(X3, Y3, Z3);
      }
      subtract(other) {
        aprjpoint(other);
        return this.add(other.negate());
      }
      is0() {
        return this.equals(Point3.ZERO);
      }
      /**
       * Constant time multiplication.
       * Uses wNAF method. Windowed method may be 10% faster,
       * but takes 2x longer to generate and consumes 2x memory.
       * Uses precomputes when available.
       * Uses endomorphism for Koblitz curves.
       * @param scalar - by which the point would be multiplied
       * @returns New point
       */
      multiply(scalar) {
        const { endo: endo2 } = extraOpts;
        if (!Fn.isValidNot0(scalar))
          throw new RangeError("invalid scalar: out of range");
        let point, fake;
        const mul3 = (n2) => wnaf.cached(this, n2, (p) => normalizeZ(Point3, p));
        if (endo2) {
          const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(scalar);
          const { p: k1p, f: k1f } = mul3(k1);
          const { p: k2p, f: k2f } = mul3(k2);
          fake = k1f.add(k2f);
          point = finishEndo(endo2.beta, k1p, k2p, k1neg, k2neg);
        } else {
          const { p, f: f2 } = mul3(scalar);
          point = p;
          fake = f2;
        }
        return normalizeZ(Point3, [point, fake])[0];
      }
      /**
       * Non-constant-time multiplication. Uses double-and-add algorithm.
       * It's faster, but should only be used when you don't care about
       * an exposed secret key e.g. sig verification, which works over *public* keys.
       */
      multiplyUnsafe(scalar) {
        const { endo: endo2 } = extraOpts;
        const p = this;
        const sc = scalar;
        if (!Fn.isValid(sc))
          throw new RangeError("invalid scalar: out of range");
        if (sc === _0n10 || p.is0())
          return Point3.ZERO;
        if (sc === _1n10)
          return p;
        if (wnaf.hasCache(this))
          return this.multiply(sc);
        if (endo2) {
          const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(sc);
          const { p1, p2 } = mulEndoUnsafe(Point3, p, k1, k2);
          return finishEndo(endo2.beta, p1, p2, k1neg, k2neg);
        } else {
          return wnaf.unsafe(p, sc);
        }
      }
      /**
       * Converts Projective point to affine (x, y) coordinates.
       * (X, Y, Z) ∋ (x=X/Z, y=Y/Z).
       * @param invertedZ - Z^-1 (inverted zero) - optional, precomputation is useful for invertBatch
       */
      toAffine(invertedZ) {
        const p = this;
        let iz = invertedZ;
        const { X, Y, Z } = p;
        if (Fp2.eql(Z, Fp2.ONE))
          return { x: X, y: Y };
        const is0 = p.is0();
        if (iz == null)
          iz = is0 ? Fp2.ONE : Fp2.inv(Z);
        const x = Fp2.mul(X, iz);
        const y = Fp2.mul(Y, iz);
        const zz = Fp2.mul(Z, iz);
        if (is0)
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        if (!Fp2.eql(zz, Fp2.ONE))
          throw new Error("invZ was invalid");
        return { x, y };
      }
      /**
       * Checks whether Point is free of torsion elements (is in prime subgroup).
       * Always torsion-free for cofactor=1 curves.
       */
      isTorsionFree() {
        const { isTorsionFree } = extraOpts;
        if (cofactor === _1n10)
          return true;
        if (isTorsionFree)
          return isTorsionFree(Point3, this);
        return wnaf.unsafe(this, CURVE_ORDER).is0();
      }
      clearCofactor() {
        const { clearCofactor } = extraOpts;
        if (cofactor === _1n10)
          return this;
        if (clearCofactor)
          return clearCofactor(Point3, this);
        return this.multiplyUnsafe(cofactor);
      }
      isSmallOrder() {
        if (cofactor === _1n10)
          return this.is0();
        return this.clearCofactor().is0();
      }
      toBytes(isCompressed = true) {
        abool(isCompressed, "isCompressed");
        this.assertValidity();
        return encodePoint(Point3, this, isCompressed);
      }
      toHex(isCompressed = true) {
        return bytesToHex3(this.toBytes(isCompressed));
      }
      toString() {
        return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
      }
    }
    const bits = Fn.BITS;
    const wnaf = new wNAF2(Point3, extraOpts.endo ? Math.ceil(bits / 2) : bits);
    if (bits >= 8)
      Point3.BASE.precompute(8);
    Object.freeze(Point3.prototype);
    Object.freeze(Point3);
    return Point3;
  }
  function pprefix(hasEvenY) {
    return Uint8Array.of(hasEvenY ? 2 : 3);
  }
  function getWLengths(Fp2, Fn) {
    return {
      secretKey: Fn.BYTES,
      publicKey: 1 + Fp2.BYTES,
      publicKeyUncompressed: 1 + 2 * Fp2.BYTES,
      publicKeyHasPrefix: true,
      // Raw compact `(r || s)` signature width; DER and recovered signatures use
      // different lengths outside this helper.
      signature: 2 * Fn.BYTES
    };
  }
  function ecdh(Point3, ecdhOpts = {}) {
    const { Fn } = Point3;
    const randomBytes_ = ecdhOpts.randomBytes === void 0 ? randomBytes5 : ecdhOpts.randomBytes;
    const lengths = Object.assign(getWLengths(Point3.Fp, Fn), {
      seed: Math.max(getMinHashLength2(Fn.ORDER), 16)
    });
    function isValidSecretKey(secretKey) {
      try {
        const num = Fn.fromBytes(secretKey);
        return Fn.isValidNot0(num);
      } catch (error) {
        return false;
      }
    }
    function isValidPublicKey(publicKey, isCompressed) {
      const { publicKey: comp, publicKeyUncompressed } = lengths;
      try {
        const l = publicKey.length;
        if (isCompressed === true && l !== comp)
          return false;
        if (isCompressed === false && l !== publicKeyUncompressed)
          return false;
        return !!Point3.fromBytes(publicKey);
      } catch (error) {
        return false;
      }
    }
    function randomSecretKey(seed) {
      seed = seed === void 0 ? randomBytes_(lengths.seed) : seed;
      return mapHashToField2(abytes2(seed, lengths.seed, "seed"), Fn.ORDER);
    }
    function getPublicKey(secretKey, isCompressed = true) {
      return Point3.BASE.multiply(Fn.fromBytes(secretKey)).toBytes(isCompressed);
    }
    function isProbPub(item) {
      const { secretKey, publicKey, publicKeyUncompressed } = lengths;
      const allowedLengths = Fn._lengths;
      if (!isBytes2(item))
        return void 0;
      const l = abytes2(item, void 0, "key").length;
      const isPub = l === publicKey || l === publicKeyUncompressed;
      const isSec = l === secretKey || !!allowedLengths?.includes(l);
      if (isPub && isSec)
        return void 0;
      return isPub;
    }
    function getSharedSecret(secretKeyA, publicKeyB, isCompressed = true) {
      if (isProbPub(secretKeyA) === true)
        throw new Error("first arg must be private key");
      if (isProbPub(publicKeyB) === false)
        throw new Error("second arg must be public key");
      const s = Fn.fromBytes(secretKeyA);
      const b2 = Point3.fromBytes(publicKeyB);
      return b2.multiply(s).toBytes(isCompressed);
    }
    const utils = {
      isValidSecretKey,
      isValidPublicKey,
      randomSecretKey
    };
    const keygen = createKeygen(randomSecretKey, getPublicKey);
    Object.freeze(utils);
    Object.freeze(lengths);
    return Object.freeze({ getPublicKey, getSharedSecret, keygen, Point: Point3, utils, lengths });
  }
  function ecdsa(Point3, hash3, ecdsaOpts = {}) {
    const hash_ = hash3;
    ahash(hash_);
    validateObject2(ecdsaOpts, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    ecdsaOpts = Object.assign({}, ecdsaOpts);
    const randomBytes7 = ecdsaOpts.randomBytes === void 0 ? randomBytes5 : ecdsaOpts.randomBytes;
    const hmac4 = ecdsaOpts.hmac === void 0 ? (key, msg) => hmac2(hash_, key, msg) : ecdsaOpts.hmac;
    const { Fp: Fp2, Fn } = Point3;
    const { ORDER: CURVE_ORDER, BITS: fnBits } = Fn;
    const { keygen, getPublicKey, getSharedSecret, utils, lengths } = ecdh(Point3, ecdsaOpts);
    const defaultSigOpts = {
      prehash: true,
      lowS: typeof ecdsaOpts.lowS === "boolean" ? ecdsaOpts.lowS : true,
      format: "compact",
      extraEntropy: false
    };
    const hasLargeRecoveryLifts = CURVE_ORDER * _2n7 + _1n10 < Fp2.ORDER;
    function isBiggerThanHalfOrder(number2) {
      const HALF = CURVE_ORDER >> _1n10;
      return number2 > HALF;
    }
    function validateRS(title, num) {
      if (!Fn.isValidNot0(num))
        throw new Error(`invalid signature ${title}: out of range 1..Point.Fn.ORDER`);
      return num;
    }
    function assertRecoverableCurve() {
      if (hasLargeRecoveryLifts)
        throw new Error('"recovered" sig type is not supported for cofactor >2 curves');
    }
    function validateSigLength(bytes2, format) {
      validateSigFormat(format);
      const size = lengths.signature;
      const sizer = format === "compact" ? size : format === "recovered" ? size + 1 : void 0;
      return abytes2(bytes2, sizer);
    }
    class Signature2 {
      r;
      s;
      recovery;
      constructor(r, s, recovery) {
        this.r = validateRS("r", r);
        this.s = validateRS("s", s);
        if (recovery != null) {
          assertRecoverableCurve();
          if (![0, 1, 2, 3].includes(recovery))
            throw new Error("invalid recovery id");
          this.recovery = recovery;
        }
        Object.freeze(this);
      }
      static fromBytes(bytes2, format = defaultSigOpts.format) {
        validateSigLength(bytes2, format);
        let recid;
        if (format === "der") {
          const { r: r2, s: s2 } = DER2.toSig(abytes2(bytes2));
          return new Signature2(r2, s2);
        }
        if (format === "recovered") {
          recid = bytes2[0];
          format = "compact";
          bytes2 = bytes2.subarray(1);
        }
        const L = lengths.signature / 2;
        const r = bytes2.subarray(0, L);
        const s = bytes2.subarray(L, L * 2);
        return new Signature2(Fn.fromBytes(r), Fn.fromBytes(s), recid);
      }
      static fromHex(hex, format) {
        return this.fromBytes(hexToBytes3(hex), format);
      }
      assertRecovery() {
        const { recovery } = this;
        if (recovery == null)
          throw new Error("invalid recovery id: must be present");
        return recovery;
      }
      addRecoveryBit(recovery) {
        return new Signature2(this.r, this.s, recovery);
      }
      // Unlike the top-level helper below, this method expects a digest that has
      // already been hashed to the curve's message representative.
      recoverPublicKey(messageHash) {
        const { r, s } = this;
        const recovery = this.assertRecovery();
        const radj = recovery === 2 || recovery === 3 ? r + CURVE_ORDER : r;
        if (!Fp2.isValid(radj))
          throw new Error("invalid recovery id: sig.r+curve.n != R.x");
        const x = Fp2.toBytes(radj);
        const R = Point3.fromBytes(concatBytes4(pprefix((recovery & 1) === 0), x));
        const ir = Fn.inv(radj);
        const h = bits2int_modN(abytes2(messageHash, void 0, "msgHash"));
        const u1 = Fn.create(-h * ir);
        const u2 = Fn.create(s * ir);
        const Q = Point3.BASE.multiplyUnsafe(u1).add(R.multiplyUnsafe(u2));
        if (Q.is0())
          throw new Error("invalid recovery: point at infinify");
        Q.assertValidity();
        return Q;
      }
      // Signatures should be low-s, to prevent malleability.
      hasHighS() {
        return isBiggerThanHalfOrder(this.s);
      }
      toBytes(format = defaultSigOpts.format) {
        validateSigFormat(format);
        if (format === "der")
          return hexToBytes3(DER2.hexFromSig(this));
        const { r, s } = this;
        const rb = Fn.toBytes(r);
        const sb = Fn.toBytes(s);
        if (format === "recovered") {
          assertRecoverableCurve();
          return concatBytes4(Uint8Array.of(this.assertRecovery()), rb, sb);
        }
        return concatBytes4(rb, sb);
      }
      toHex(format) {
        return bytesToHex3(this.toBytes(format));
      }
    }
    Object.freeze(Signature2.prototype);
    Object.freeze(Signature2);
    const bits2int = ecdsaOpts.bits2int === void 0 ? function bits2int_def(bytes2) {
      if (bytes2.length > 8192)
        throw new Error("input is too large");
      const num = bytesToNumberBE2(bytes2);
      const delta = bytes2.length * 8 - fnBits;
      return delta > 0 ? num >> BigInt(delta) : num;
    } : ecdsaOpts.bits2int;
    const bits2int_modN = ecdsaOpts.bits2int_modN === void 0 ? function bits2int_modN_def(bytes2) {
      return Fn.create(bits2int(bytes2));
    } : ecdsaOpts.bits2int_modN;
    const ORDER_MASK = bitMask2(fnBits);
    function int2octets(num) {
      aInRange("num < 2^" + fnBits, num, _0n10, ORDER_MASK);
      return Fn.toBytes(num);
    }
    function validateMsgAndHash(message, prehash) {
      abytes2(message, void 0, "message");
      return prehash ? abytes2(hash_(message), void 0, "prehashed message") : message;
    }
    function prepSig(message, secretKey, opts) {
      const { lowS, prehash, extraEntropy } = validateSigOpts(opts, defaultSigOpts);
      message = validateMsgAndHash(message, prehash);
      const h1int = bits2int_modN(message);
      const d = Fn.fromBytes(secretKey);
      if (!Fn.isValidNot0(d))
        throw new Error("invalid private key");
      const seedArgs = [int2octets(d), int2octets(h1int)];
      if (extraEntropy != null && extraEntropy !== false) {
        const e = extraEntropy === true ? randomBytes7(lengths.secretKey) : extraEntropy;
        seedArgs.push(abytes2(e, void 0, "extraEntropy"));
      }
      const seed = concatBytes4(...seedArgs);
      const m = h1int;
      function k2sig(kBytes) {
        const k = bits2int(kBytes);
        if (!Fn.isValidNot0(k))
          return;
        const ik = Fn.inv(k);
        const q = Point3.BASE.multiply(k).toAffine();
        const r = Fn.create(q.x);
        if (r === _0n10)
          return;
        const s = Fn.create(ik * Fn.create(m + r * d));
        if (s === _0n10)
          return;
        let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n10);
        let normS = s;
        if (lowS && isBiggerThanHalfOrder(s)) {
          normS = Fn.neg(s);
          recovery ^= 1;
        }
        return new Signature2(r, normS, hasLargeRecoveryLifts ? void 0 : recovery);
      }
      return { seed, k2sig };
    }
    function sign3(message, secretKey, opts = {}) {
      const { seed, k2sig } = prepSig(message, secretKey, opts);
      const drbg = createHmacDrbg2(hash_.outputLen, Fn.BYTES, hmac4);
      const sig = drbg(seed, k2sig);
      return sig.toBytes(opts.format);
    }
    function verify(signature, message, publicKey, opts = {}) {
      const { lowS, prehash, format } = validateSigOpts(opts, defaultSigOpts);
      publicKey = abytes2(publicKey, void 0, "publicKey");
      message = validateMsgAndHash(message, prehash);
      if (!isBytes2(signature)) {
        const end = signature instanceof Signature2 ? ", use sig.toBytes()" : "";
        throw new Error("verify expects Uint8Array signature" + end);
      }
      validateSigLength(signature, format);
      try {
        const sig = Signature2.fromBytes(signature, format);
        const P = Point3.fromBytes(publicKey);
        if (lowS && sig.hasHighS())
          return false;
        const { r, s } = sig;
        const h = bits2int_modN(message);
        const is = Fn.inv(s);
        const u1 = Fn.create(h * is);
        const u2 = Fn.create(r * is);
        const R = Point3.BASE.multiplyUnsafe(u1).add(P.multiplyUnsafe(u2));
        if (R.is0())
          return false;
        const v = Fn.create(R.x);
        return v === r;
      } catch (e) {
        return false;
      }
    }
    function recoverPublicKey2(signature, message, opts = {}) {
      const { prehash } = validateSigOpts(opts, defaultSigOpts);
      message = validateMsgAndHash(message, prehash);
      return Signature2.fromBytes(signature, "recovered").recoverPublicKey(message).toBytes();
    }
    return Object.freeze({
      keygen,
      getPublicKey,
      getSharedSecret,
      utils,
      lengths,
      Point: Point3,
      sign: sign3,
      verify,
      recoverPublicKey: recoverPublicKey2,
      Signature: Signature2,
      hash: hash_
    });
  }

  // node_modules/@noble/curves/secp256k1.js
  var secp256k1_CURVE = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    h: BigInt(1),
    a: BigInt(0),
    b: BigInt(7),
    Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
    Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
  };
  var secp256k1_ENDO = {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    basises: [
      [BigInt("0x3086d221a7d46bcde86c90e49284eb15"), -BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],
      [BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), BigInt("0x3086d221a7d46bcde86c90e49284eb15")]
    ]
  };
  var _2n8 = /* @__PURE__ */ BigInt(2);
  function sqrtMod2(y) {
    const P = secp256k1_CURVE.p;
    const _3n7 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = y * y * y % P;
    const b3 = b2 * b2 * y % P;
    const b6 = pow22(b3, _3n7, P) * b3 % P;
    const b9 = pow22(b6, _3n7, P) * b3 % P;
    const b11 = pow22(b9, _2n8, P) * b2 % P;
    const b22 = pow22(b11, _11n, P) * b11 % P;
    const b44 = pow22(b22, _22n, P) * b22 % P;
    const b88 = pow22(b44, _44n, P) * b44 % P;
    const b176 = pow22(b88, _88n, P) * b88 % P;
    const b220 = pow22(b176, _44n, P) * b44 % P;
    const b223 = pow22(b220, _3n7, P) * b3 % P;
    const t1 = pow22(b223, _23n, P) * b22 % P;
    const t2 = pow22(t1, _6n, P) * b2 % P;
    const root = pow22(t2, _2n8, P);
    if (!Fpk1.eql(Fpk1.sqr(root), y))
      throw new Error("Cannot find square root");
    return root;
  }
  var Fpk1 = Field2(secp256k1_CURVE.p, { sqrt: sqrtMod2 });
  var Pointk1 = /* @__PURE__ */ weierstrass2(secp256k1_CURVE, {
    Fp: Fpk1,
    endo: secp256k1_ENDO
  });
  var secp256k12 = /* @__PURE__ */ ecdsa(Pointk1, sha2563);

  // node_modules/@ethereumjs/rlp/dist/esm/errors.js
  var DEFAULT_ERROR_CODE = "ETHEREUMJS_DEFAULT_ERROR_CODE";
  var EthereumJSError = class extends Error {
    constructor(type, message, stack) {
      super(message ?? type.code);
      this.type = type;
      if (stack !== void 0)
        this.stack = stack;
    }
    getMetadata() {
      return this.type;
    }
    /**
     * Get the metadata and the stacktrace for the error.
     */
    toObject() {
      return {
        type: this.getMetadata(),
        message: this.message ?? "",
        stack: this.stack ?? "",
        className: this.constructor.name
      };
    }
  };
  function EthereumJSErrorWithoutCode(message, stack) {
    return new EthereumJSError({ code: DEFAULT_ERROR_CODE }, message, stack);
  }

  // node_modules/@ethereumjs/rlp/dist/esm/index.js
  function decodeLength(v) {
    if (v[0] === 0) {
      throw EthereumJSErrorWithoutCode("invalid RLP: extra zeros");
    }
    return parseHexByte(bytesToHex4(v));
  }
  function encodeLength(len, offset) {
    if (len < 56) {
      return Uint8Array.from([len + offset]);
    }
    const hexLength = numberToHex(len);
    const lLength = hexLength.length / 2;
    const firstByte = numberToHex(offset + 55 + lLength);
    return Uint8Array.from(hexToBytes4(firstByte + hexLength));
  }
  function safeSlice(input, start, end) {
    if (end > input.length) {
      throw EthereumJSErrorWithoutCode("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
    }
    return input.slice(start, end);
  }
  function _decode2(input) {
    let length, lLength, data, innerRemainder, d;
    const decoded = [];
    const firstByte = input[0];
    if (firstByte <= 127) {
      return {
        data: input.slice(0, 1),
        remainder: input.subarray(1)
      };
    } else if (firstByte <= 183) {
      length = firstByte - 127;
      if (firstByte === 128) {
        data = Uint8Array.from([]);
      } else {
        data = safeSlice(input, 1, length);
      }
      if (length === 2 && data[0] < 128) {
        throw EthereumJSErrorWithoutCode("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
      }
      return {
        data,
        remainder: input.subarray(length)
      };
    } else if (firstByte <= 191) {
      lLength = firstByte - 182;
      if (input.length - 1 < lLength) {
        throw EthereumJSErrorWithoutCode("invalid RLP: not enough bytes for string length");
      }
      length = decodeLength(safeSlice(input, 1, lLength));
      if (length <= 55) {
        throw EthereumJSErrorWithoutCode("invalid RLP: expected string length to be greater than 55");
      }
      data = safeSlice(input, lLength, length + lLength);
      return {
        data,
        remainder: input.subarray(length + lLength)
      };
    } else if (firstByte <= 247) {
      length = firstByte - 191;
      innerRemainder = safeSlice(input, 1, length);
      while (innerRemainder.length) {
        d = _decode2(innerRemainder);
        decoded.push(d.data);
        innerRemainder = d.remainder;
      }
      return {
        data: decoded,
        remainder: input.subarray(length)
      };
    } else {
      lLength = firstByte - 246;
      length = decodeLength(safeSlice(input, 1, lLength));
      if (length < 56) {
        throw EthereumJSErrorWithoutCode("invalid RLP: encoded list too short");
      }
      const totalLength = lLength + length;
      if (totalLength > input.length) {
        throw EthereumJSErrorWithoutCode("invalid RLP: total length is larger than the data");
      }
      innerRemainder = safeSlice(input, lLength, totalLength);
      while (innerRemainder.length) {
        d = _decode2(innerRemainder);
        decoded.push(d.data);
        innerRemainder = d.remainder;
      }
      return {
        data: decoded,
        remainder: input.subarray(totalLength)
      };
    }
  }
  var cachedHexes = Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex4(uint8a) {
    let hex = "";
    for (let i = 0; i < uint8a.length; i++) {
      hex += cachedHexes[uint8a[i]];
    }
    return hex;
  }
  function parseHexByte(hexByte) {
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte))
      throw EthereumJSErrorWithoutCode("Invalid byte sequence");
    return byte;
  }
  var asciis2 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function asciiToBase162(char) {
    if (char >= asciis2._0 && char <= asciis2._9)
      return char - asciis2._0;
    if (char >= asciis2._A && char <= asciis2._F)
      return char - (asciis2._A - 10);
    if (char >= asciis2._a && char <= asciis2._f)
      return char - (asciis2._a - 10);
    return;
  }
  function hexToBytes4(hex) {
    if (hex.slice(0, 2) === "0x")
      hex = hex.slice(0, 2);
    if (typeof hex !== "string")
      throw EthereumJSErrorWithoutCode("hex string expected, got " + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
      throw EthereumJSErrorWithoutCode("padded hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      const n1 = asciiToBase162(hex.charCodeAt(hi));
      const n2 = asciiToBase162(hex.charCodeAt(hi + 1));
      if (n1 === void 0 || n2 === void 0) {
        const char = hex[hi] + hex[hi + 1];
        throw EthereumJSErrorWithoutCode('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  function concatBytes5(...arrays) {
    if (arrays.length === 1)
      return arrays[0];
    const length = arrays.reduce((a, arr) => a + arr.length, 0);
    const result = new Uint8Array(length);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const arr = arrays[i];
      result.set(arr, pad);
      pad += arr.length;
    }
    return result;
  }
  function utf8ToBytes4(utf) {
    return new TextEncoder().encode(utf);
  }
  function numberToHex(integer) {
    if (integer < 0) {
      throw EthereumJSErrorWithoutCode("Invalid integer as argument, must be unsigned!");
    }
    const hex = integer.toString(16);
    return hex.length % 2 ? `0${hex}` : hex;
  }
  function padToEven(a) {
    return a.length % 2 ? `0${a}` : a;
  }
  function isHexString2(str) {
    return str.length >= 2 && str[0] === "0" && str[1] === "x";
  }
  function stripHexPrefix(str) {
    if (typeof str !== "string") {
      return str;
    }
    return isHexString2(str) ? str.slice(2) : str;
  }
  function toBytes2(v) {
    if (v instanceof Uint8Array) {
      return v;
    }
    if (typeof v === "string") {
      if (isHexString2(v)) {
        return hexToBytes4(padToEven(stripHexPrefix(v)));
      }
      return utf8ToBytes4(v);
    }
    if (typeof v === "number" || typeof v === "bigint") {
      if (!v) {
        return Uint8Array.from([]);
      }
      return hexToBytes4(numberToHex(v));
    }
    if (v === null || v === void 0) {
      return Uint8Array.from([]);
    }
    throw EthereumJSErrorWithoutCode("toBytes: received unsupported type " + typeof v);
  }
  function encode(input) {
    if (Array.isArray(input)) {
      const output2 = [];
      let outputLength = 0;
      for (let i = 0; i < input.length; i++) {
        const encoded = encode(input[i]);
        output2.push(encoded);
        outputLength += encoded.length;
      }
      return concatBytes5(encodeLength(outputLength, 192), ...output2);
    }
    const inputBuf = toBytes2(input);
    if (inputBuf.length === 1 && inputBuf[0] < 128) {
      return inputBuf;
    }
    return concatBytes5(encodeLength(inputBuf.length, 128), inputBuf);
  }
  function decode2(input, stream = false) {
    if (typeof input === "undefined" || input === null || input.length === 0) {
      return Uint8Array.from([]);
    }
    const inputBytes = toBytes2(input);
    const decoded = _decode2(inputBytes);
    if (stream) {
      return {
        data: decoded.data,
        remainder: decoded.remainder.slice()
      };
    }
    if (decoded.remainder.length !== 0) {
      throw EthereumJSErrorWithoutCode("invalid RLP: remainder must be zero");
    }
    return decoded.data;
  }
  var RLP = { encode, decode: decode2 };

  // node_modules/@ethereumjs/util/dist/esm/internal.js
  function isHexString3(value, length) {
    if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/))
      return false;
    if (typeof length !== "undefined" && length > 0 && value.length !== 2 + 2 * length)
      return false;
    return true;
  }
  var stripHexPrefix2 = (str) => {
    if (typeof str !== "string")
      throw EthereumJSErrorWithoutCode(`[stripHexPrefix] input must be type 'string', received ${typeof str}`);
    return isHexString3(str) ? str.slice(2) : str;
  };
  function padToEven2(value) {
    let a = value;
    if (typeof a !== "string") {
      throw EthereumJSErrorWithoutCode(`[padToEven] value must be type 'string', received ${typeof a}`);
    }
    if (a.length % 2)
      a = `0${a}`;
    return a;
  }

  // node_modules/@ethereumjs/util/dist/esm/helpers.js
  var assertIsHexString = function(input) {
    if (!isHexString3(input)) {
      const msg = `This method only supports 0x-prefixed hex strings but input was: ${input}`;
      throw EthereumJSErrorWithoutCode(msg);
    }
  };
  var assertIsBytes = function(input) {
    if (!(input instanceof Uint8Array)) {
      const msg = `This method only supports Uint8Array but input was: ${input}`;
      throw EthereumJSErrorWithoutCode(msg);
    }
  };

  // node_modules/@ethereumjs/util/dist/esm/bytes.js
  var BIGINT_0 = BigInt(0);
  var bytesToUnprefixedHex = bytesToHex2;
  var hexToBytes5 = (hex) => {
    if (!hex.startsWith("0x"))
      throw EthereumJSErrorWithoutCode("input string must be 0x prefixed");
    return hexToBytes2(padToEven2(stripHexPrefix2(hex)));
  };
  var unprefixedHexToBytes = (hex) => {
    if (hex.startsWith("0x"))
      throw EthereumJSErrorWithoutCode("input string cannot be 0x prefixed");
    return hexToBytes2(padToEven2(hex));
  };
  var bytesToHex5 = (bytes2) => {
    const unprefixedHex = bytesToUnprefixedHex(bytes2);
    return `0x${unprefixedHex}`;
  };
  var BIGINT_CACHE = [];
  for (let i = 0; i <= 256 * 256 - 1; i++) {
    BIGINT_CACHE[i] = BigInt(i);
  }
  var bytesToBigInt = (bytes2, littleEndian = false) => {
    assertIsBytes(bytes2);
    if (littleEndian) {
      bytes2 = bytes2.slice().reverse();
    }
    const hex = bytesToHex5(bytes2);
    if (hex === "0x") {
      return BIGINT_0;
    }
    if (hex.length === 4) {
      return BIGINT_CACHE[bytes2[0]];
    }
    if (hex.length === 6) {
      return BIGINT_CACHE[bytes2[0] * 256 + bytes2[1]];
    }
    return BigInt(hex);
  };
  var bytesToInt = (bytes2) => {
    const res = Number(bytesToBigInt(bytes2));
    if (!Number.isSafeInteger(res))
      throw EthereumJSErrorWithoutCode("Number exceeds 53 bits");
    return res;
  };
  var intToHex = (i) => {
    if (!Number.isSafeInteger(i) || i < 0) {
      throw EthereumJSErrorWithoutCode(`Received an invalid integer type: ${i}`);
    }
    return `0x${i.toString(16)}`;
  };
  var intToBytes = (i) => {
    const hex = intToHex(i);
    return hexToBytes5(hex);
  };
  var bigIntToBytes = (num, littleEndian = false) => {
    const bytes2 = hexToBytes5(`0x${padToEven2(num.toString(16))}`);
    return littleEndian ? bytes2.reverse() : bytes2;
  };
  var setLength = (msg, length, right, allowTruncate) => {
    if (msg.length > length) {
      if (!allowTruncate) {
        throw EthereumJSErrorWithoutCode(`Input length ${msg.length} exceeds target length ${length}. Use allowTruncate option to truncate.`);
      }
      return right ? msg.subarray(0, length) : msg.subarray(-length);
    }
    if (msg.length < length) {
      return right ? new Uint8Array([...msg, ...new Uint8Array(length - msg.length)]) : new Uint8Array([...new Uint8Array(length - msg.length), ...msg]);
    }
    return msg;
  };
  var setLengthLeft = (msg, length, opts = {}) => {
    assertIsBytes(msg);
    return setLength(msg, length, false, opts.allowTruncate ?? false);
  };
  var stripZeros = (a) => {
    let first = a[0];
    while (a.length > 0 && first.toString() === "0") {
      a = a.slice(1);
      first = a[0];
    }
    return a;
  };
  var unpadBytes = (a) => {
    assertIsBytes(a);
    return stripZeros(a);
  };
  var toBytes3 = (v) => {
    if (v === null || v === void 0) {
      return new Uint8Array();
    }
    if (Array.isArray(v) || v instanceof Uint8Array) {
      return Uint8Array.from(v);
    }
    if (typeof v === "string") {
      if (!isHexString3(v)) {
        throw EthereumJSErrorWithoutCode(`Cannot convert string to Uint8Array. toBytes only supports 0x-prefixed hex strings and this string was given: ${v}`);
      }
      return hexToBytes5(v);
    }
    if (typeof v === "number") {
      return intToBytes(v);
    }
    if (typeof v === "bigint") {
      if (v < BIGINT_0) {
        throw EthereumJSErrorWithoutCode(`Cannot convert negative bigint to Uint8Array. Given: ${v}`);
      }
      let n2 = v.toString(16);
      if (n2.length % 2)
        n2 = "0" + n2;
      return unprefixedHexToBytes(n2);
    }
    if (v.toBytes !== void 0) {
      return v.toBytes();
    }
    throw EthereumJSErrorWithoutCode("invalid type");
  };
  var validateNoLeadingZeroes = (values) => {
    for (const [k, v] of Object.entries(values)) {
      if (v !== void 0 && v.length > 0 && v[0] === 0) {
        throw EthereumJSErrorWithoutCode(`${k} cannot have leading zeroes, received: ${bytesToHex5(v)}`);
      }
    }
  };
  var bigIntToHex = (num) => {
    return `0x${num.toString(16)}`;
  };
  var bigIntMax = (...args) => args.reduce((m, e) => e > m ? e : m);
  var bigIntToUnpaddedBytes = (value) => {
    return unpadBytes(bigIntToBytes(value));
  };
  var intToUnpaddedBytes = (value) => {
    return unpadBytes(intToBytes(value));
  };
  var concatBytes6 = (...arrays) => {
    if (arrays.length === 1)
      return arrays[0];
    const length = arrays.reduce((a, arr) => a + arr.length, 0);
    const result = new Uint8Array(length);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const arr = arrays[i];
      result.set(arr, pad);
      pad += arr.length;
    }
    return result;
  };
  function equalsBytes(a, b2) {
    if (a.length !== b2.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b2[i]) {
        return false;
      }
    }
    return true;
  }

  // node_modules/@ethereumjs/util/dist/esm/constants.js
  var MAX_UINT64 = BigInt("0xffffffffffffffff");
  var MAX_INTEGER = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  var MAX_INTEGER_BIGINT = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935");
  var SECP256K1_ORDER = secp256k12.Point.CURVE().n;
  var SECP256K1_ORDER_DIV_2 = SECP256K1_ORDER / BigInt(2);
  var TWO_POW256 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
  var KECCAK256_NULL_S = "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
  var KECCAK256_NULL = hexToBytes5(KECCAK256_NULL_S);
  var KECCAK256_RLP_ARRAY_S = "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347";
  var KECCAK256_RLP_ARRAY = hexToBytes5(KECCAK256_RLP_ARRAY_S);
  var KECCAK256_RLP_S = "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421";
  var KECCAK256_RLP = hexToBytes5(KECCAK256_RLP_S);
  var SHA256_NULL = sha2563(new Uint8Array());
  var RLP_EMPTY_STRING = Uint8Array.from([128]);
  var MAX_BLOCK_SIZE = 10485760;
  var SAFETY_MARGIN = 2097152;
  var MAX_RLP_BLOCK_SIZE = MAX_BLOCK_SIZE - SAFETY_MARGIN;
  var BIGINT_NEG1 = BigInt(-1);
  var BIGINT_02 = BigInt(0);
  var BIGINT_1 = BigInt(1);
  var BIGINT_2 = BigInt(2);
  var BIGINT_3 = BigInt(3);
  var BIGINT_7 = BigInt(7);
  var BIGINT_8 = BigInt(8);
  var BIGINT_27 = BigInt(27);
  var BIGINT_28 = BigInt(28);
  var BIGINT_31 = BigInt(31);
  var BIGINT_32 = BigInt(32);
  var BIGINT_64 = BigInt(64);
  var BIGINT_128 = BigInt(128);
  var BIGINT_255 = BigInt(255);
  var BIGINT_256 = BigInt(256);
  var BIGINT_96 = BigInt(96);
  var BIGINT_100 = BigInt(100);
  var BIGINT_160 = BigInt(160);
  var BIGINT_224 = BigInt(224);
  var BIGINT_2EXP96 = BigInt(7922816251426434e13);
  var BIGINT_2EXP160 = BigInt(1461501637330903e33);
  var BIGINT_2EXP224 = BigInt(2695994666715064e52);
  var BIGINT_2EXP256 = BIGINT_2 ** BIGINT_256;

  // node_modules/@ethereumjs/util/dist/esm/units.js
  var GWEI_TO_WEI = BigInt(10 ** 9);
  var ETHER_TO_WEI = BigInt(10 ** 18);

  // node_modules/@noble/hashes/sha3.js
  var _0n11 = BigInt(0);
  var _1n11 = BigInt(1);
  var _2n9 = BigInt(2);
  var _7n3 = BigInt(7);
  var _256n2 = BigInt(256);
  var _0x71n2 = BigInt(113);
  var SHA3_PI2 = [];
  var SHA3_ROTL2 = [];
  var _SHA3_IOTA2 = [];
  for (let round = 0, R = _1n11, x = 1, y = 0; round < 24; round++) {
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI2.push(2 * (5 * y + x));
    SHA3_ROTL2.push((round + 1) * (round + 2) / 2 % 64);
    let t = _0n11;
    for (let j = 0; j < 7; j++) {
      R = (R << _1n11 ^ (R >> _7n3) * _0x71n2) % _256n2;
      if (R & _2n9)
        t ^= _1n11 << (_1n11 << BigInt(j)) - _1n11;
    }
    _SHA3_IOTA2.push(t);
  }
  var IOTAS = split2(_SHA3_IOTA2, true);
  var SHA3_IOTA_H2 = IOTAS[0];
  var SHA3_IOTA_L2 = IOTAS[1];
  var rotlH2 = (h, l, s) => s > 32 ? rotlBH2(h, l, s) : rotlSH2(h, l, s);
  var rotlL2 = (h, l, s) => s > 32 ? rotlBL2(h, l, s) : rotlSL2(h, l, s);
  function keccakP2(s, rounds = 24) {
    anumber(rounds, "rounds");
    if (rounds < 1 || rounds > 24)
      throw new Error('"rounds" expected integer 1..24');
    const B = new Uint32Array(5 * 2);
    for (let round = 24 - rounds; round < 24; round++) {
      for (let x = 0; x < 10; x++)
        B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
      for (let x = 0; x < 10; x += 2) {
        const idx1 = (x + 8) % 10;
        const idx0 = (x + 2) % 10;
        const B0 = B[idx0];
        const B1 = B[idx0 + 1];
        const Th = rotlH2(B0, B1, 1) ^ B[idx1];
        const Tl = rotlL2(B0, B1, 1) ^ B[idx1 + 1];
        for (let y = 0; y < 50; y += 10) {
          s[x + y] ^= Th;
          s[x + y + 1] ^= Tl;
        }
      }
      let curH = s[2];
      let curL = s[3];
      for (let t = 0; t < 24; t++) {
        const shift = SHA3_ROTL2[t];
        const Th = rotlH2(curH, curL, shift);
        const Tl = rotlL2(curH, curL, shift);
        const PI = SHA3_PI2[t];
        curH = s[PI];
        curL = s[PI + 1];
        s[PI] = Th;
        s[PI + 1] = Tl;
      }
      for (let y = 0; y < 50; y += 10) {
        const b0 = s[y], b1 = s[y + 1], b2 = s[y + 2], b3 = s[y + 3];
        s[y] ^= ~s[y + 2] & s[y + 4];
        s[y + 1] ^= ~s[y + 3] & s[y + 5];
        s[y + 2] ^= ~s[y + 4] & s[y + 6];
        s[y + 3] ^= ~s[y + 5] & s[y + 7];
        s[y + 4] ^= ~s[y + 6] & s[y + 8];
        s[y + 5] ^= ~s[y + 7] & s[y + 9];
        s[y + 6] ^= ~s[y + 8] & b0;
        s[y + 7] ^= ~s[y + 9] & b1;
        s[y + 8] ^= ~b0 & b2;
        s[y + 9] ^= ~b1 & b3;
      }
      s[0] ^= SHA3_IOTA_H2[round];
      s[1] ^= SHA3_IOTA_L2[round];
    }
    clean(B);
  }
  var Keccak2 = class _Keccak {
    state;
    pos = 0;
    posOut = 0;
    finished = false;
    state32;
    destroyed = false;
    blockLen;
    suffix;
    outputLen;
    canXOF;
    enableXOF = false;
    rounds;
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
      this.blockLen = blockLen;
      this.suffix = suffix;
      this.outputLen = outputLen;
      this.enableXOF = enableXOF;
      this.canXOF = enableXOF;
      this.rounds = rounds;
      anumber(outputLen, "outputLen");
      if (!(0 < blockLen && blockLen < 200))
        throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200);
      this.state32 = u322(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      swap32IfBE(this.state32);
      keccakP2(this.state32, this.rounds);
      swap32IfBE(this.state32);
      this.posOut = 0;
      this.pos = 0;
    }
    update(data) {
      aexists(this);
      abytes(data);
      const { blockLen, state } = this;
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        for (let i = 0; i < take; i++)
          state[this.pos++] ^= data[pos++];
        if (this.pos === blockLen)
          this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished)
        return;
      this.finished = true;
      const { state, suffix, pos, blockLen } = this;
      state[pos] ^= suffix;
      if ((suffix & 128) !== 0 && pos === blockLen - 1)
        this.keccak();
      state[blockLen - 1] ^= 128;
      this.keccak();
    }
    writeInto(out) {
      aexists(this, false);
      abytes(out);
      this.finish();
      const bufferOut = this.state;
      const { blockLen } = this;
      for (let pos = 0, len = out.length; pos < len; ) {
        if (this.posOut >= blockLen)
          this.keccak();
        const take = Math.min(blockLen - this.posOut, len - pos);
        out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
        this.posOut += take;
        pos += take;
      }
      return out;
    }
    xofInto(out) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(out);
    }
    xof(bytes2) {
      anumber(bytes2);
      return this.xofInto(new Uint8Array(bytes2));
    }
    digestInto(out) {
      aoutput(out, this);
      if (this.finished)
        throw new Error("digest() was already called");
      this.writeInto(out.subarray(0, this.outputLen));
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.outputLen);
      this.digestInto(out);
      return out;
    }
    destroy() {
      this.destroyed = true;
      clean(this.state);
    }
    _cloneInto(to) {
      const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
      to ||= new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds);
      to.blockLen = blockLen;
      to.state32.set(this.state32);
      to.pos = this.pos;
      to.posOut = this.posOut;
      to.finished = this.finished;
      to.rounds = rounds;
      to.suffix = suffix;
      to.outputLen = outputLen;
      to.enableXOF = enableXOF;
      to.canXOF = this.canXOF;
      to.destroyed = this.destroyed;
      return to;
    }
  };
  var genKeccak = (suffix, blockLen, outputLen, info = {}) => createHasher(() => new Keccak2(blockLen, suffix, outputLen), info);
  var keccak_2562 = /* @__PURE__ */ genKeccak(1, 136, 32);

  // node_modules/@ethereumjs/util/dist/esm/account.js
  var toChecksumAddress = function(hexAddress, eip1191ChainId) {
    assertIsHexString(hexAddress);
    const address = stripHexPrefix2(hexAddress).toLowerCase();
    let prefix = "";
    if (eip1191ChainId !== void 0) {
      const chainId = bytesToBigInt(toBytes3(eip1191ChainId));
      prefix = chainId.toString() + "0x";
    }
    const bytes2 = utf8ToBytes3(prefix + address);
    const hash3 = bytesToHex5(keccak_2562(bytes2)).slice(2);
    let ret = "";
    for (let i = 0; i < address.length; i++) {
      if (parseInt(hash3[i], 16) >= 8) {
        ret += address[i].toUpperCase();
      } else {
        ret += address[i];
      }
    }
    return `0x${ret}`;
  };
  var generateAddress = function(from, nonce) {
    assertIsBytes(from);
    assertIsBytes(nonce);
    if (bytesToBigInt(nonce) === BIGINT_02) {
      return keccak_2562(RLP.encode([from, Uint8Array.from([])])).subarray(-20);
    }
    return keccak_2562(RLP.encode([from, nonce])).subarray(-20);
  };
  var pubToAddress = function(pubKey, sanitize = false) {
    assertIsBytes(pubKey);
    if (sanitize && pubKey.length !== 64) {
      pubKey = secp256k12.Point.fromBytes(pubKey).toBytes(false).slice(1);
    }
    if (pubKey.length !== 64) {
      throw EthereumJSErrorWithoutCode("Expected pubKey to be of length 64");
    }
    return keccak_2562(pubKey).subarray(-20);
  };
  var publicToAddress = pubToAddress;
  var privateToPublic = function(privateKey) {
    assertIsBytes(privateKey);
    return secp256k12.getPublicKey(privateKey, false).slice(1);
  };
  var emptyUint8Arr = new Uint8Array(0);

  // node_modules/@ethereumjs/util/dist/esm/address.js
  var Address = class _Address {
    constructor(bytes2) {
      if (bytes2.length !== 20) {
        throw EthereumJSErrorWithoutCode("Invalid address length");
      }
      this.bytes = bytes2;
    }
    /**
     * Is address equal to another.
     */
    equals(address) {
      return equalsBytes(this.bytes, address.bytes);
    }
    /**
     * Is address zero.
     */
    isZero() {
      return this.equals(new _Address(new Uint8Array(20)));
    }
    /**
     * True if address is in the address range defined
     * by EIP-1352
     */
    isPrecompileOrSystemAddress() {
      const address = bytesToBigInt(this.bytes);
      const rangeMin = BIGINT_02;
      const rangeMax = BigInt("0xffff");
      return address >= rangeMin && address <= rangeMax;
    }
    /**
     * Returns hex encoding of address.
     */
    toString() {
      return bytesToHex5(this.bytes);
    }
    /**
     * Returns a new Uint8Array representation of address.
     */
    toBytes() {
      return new Uint8Array(this.bytes);
    }
  };

  // node_modules/@ethereumjs/util/dist/esm/types.js
  var TypeOutput = {
    Number: 0,
    BigInt: 1,
    Uint8Array: 2,
    PrefixedHexString: 3
  };
  function toType(input, outputType) {
    if (input === null) {
      return null;
    }
    if (input === void 0) {
      return void 0;
    }
    if (typeof input === "string" && !isHexString3(input)) {
      throw EthereumJSErrorWithoutCode(`A string must be provided with a 0x-prefix, given: ${input}`);
    } else if (typeof input === "number" && !Number.isSafeInteger(input)) {
      throw EthereumJSErrorWithoutCode("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
    }
    const output2 = toBytes3(input);
    switch (outputType) {
      case TypeOutput.Uint8Array:
        return output2;
      case TypeOutput.BigInt:
        return bytesToBigInt(output2);
      case TypeOutput.Number: {
        const bigInt = bytesToBigInt(output2);
        if (bigInt > BigInt(Number.MAX_SAFE_INTEGER)) {
          throw EthereumJSErrorWithoutCode("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
        }
        return Number(bigInt);
      }
      case TypeOutput.PrefixedHexString:
        return bytesToHex5(output2);
      default:
        throw EthereumJSErrorWithoutCode("unknown outputType");
    }
  }
  function isEOACode7702AuthorizationListBytes(input) {
    if (input.length === 0) {
      return true;
    }
    const firstItem = input[0];
    if (Array.isArray(firstItem)) {
      return true;
    }
    return false;
  }
  function isEOACode7702AuthorizationList(input) {
    return !isEOACode7702AuthorizationListBytes(input);
  }

  // node_modules/@ethereumjs/util/dist/esm/signature.js
  function calculateSigRecovery(v, chainId) {
    if (v === BIGINT_02 || v === BIGINT_1)
      return v;
    if (chainId === void 0) {
      return v - BIGINT_27;
    }
    return v - (chainId * BIGINT_2 + BigInt(35));
  }
  function isValidSigRecovery(recovery) {
    return recovery === BIGINT_02 || recovery === BIGINT_1;
  }
  var ecrecover = function(msgHash, v, r, s, chainId) {
    const signature = concatBytes6(setLengthLeft(r, 32), setLengthLeft(s, 32));
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
      throw EthereumJSErrorWithoutCode("Invalid signature v value");
    }
    const sig = secp256k12.Signature.fromBytes(signature).addRecoveryBit(Number(recovery));
    const senderPubKey = sig.recoverPublicKey(msgHash);
    return senderPubKey.toBytes(false).slice(1);
  };

  // node_modules/@ethereumjs/util/dist/esm/authorization.js
  var EOA_CODE_7702_AUTHORITY_SIGNING_MAGIC = hexToBytes5("0x05");
  function eoaCode7702AuthorizationListBytesItemToJSON(authorizationList) {
    const [chainId, address, nonce, yParity, r, s] = authorizationList;
    return {
      chainId: bytesToHex5(chainId),
      address: bytesToHex5(address),
      nonce: bytesToHex5(nonce),
      yParity: bytesToHex5(yParity),
      r: bytesToHex5(r),
      s: bytesToHex5(s)
    };
  }
  function eoaCode7702AuthorizationListJSONItemToBytes(authorizationList) {
    const requiredFields = ["chainId", "address", "nonce", "yParity", "r", "s"];
    for (const field of requiredFields) {
      if (authorizationList[field] === void 0) {
        throw EthereumJSErrorWithoutCode(`EIP-7702 authorization list invalid: ${field} is not defined`);
      }
    }
    return [
      unpadBytes(hexToBytes5(authorizationList.chainId)),
      hexToBytes5(authorizationList.address),
      unpadBytes(hexToBytes5(authorizationList.nonce)),
      unpadBytes(hexToBytes5(authorizationList.yParity)),
      unpadBytes(hexToBytes5(authorizationList.r)),
      unpadBytes(hexToBytes5(authorizationList.s))
    ];
  }

  // node_modules/@ethereumjs/util/dist/esm/binaryTree.js
  var BinaryTreeLeafType = {
    BasicData: 0,
    CodeHash: 1
  };
  var BINARY_TREE_BASIC_DATA_LEAF_KEY = intToBytes(BinaryTreeLeafType.BasicData);
  var BINARY_TREE_CODE_HASH_LEAF_KEY = intToBytes(BinaryTreeLeafType.CodeHash);
  var BINARY_TREE_CODE_CHUNK_SIZE = 31;
  var BINARY_TREE_MAIN_STORAGE_OFFSET = BigInt(256) ** BigInt(BINARY_TREE_CODE_CHUNK_SIZE);

  // node_modules/@ethereumjs/util/dist/esm/blobs.js
  var BYTES_PER_FIELD_ELEMENT = 32;
  var FIELD_ELEMENTS_PER_BLOB = 4096;
  var BLOB_SIZE2 = BYTES_PER_FIELD_ELEMENT * FIELD_ELEMENTS_PER_BLOB;
  var MAX_BLOBS_PER_TX = 6;
  var MAX_BLOB_BYTES_PER_TX = BLOB_SIZE2 * MAX_BLOBS_PER_TX - 1;
  var CELLS_PER_EXT_BLOB = 128;
  function getPadded(data, blobs_len) {
    const pData = new Uint8Array(blobs_len * BLOB_SIZE2);
    pData.set(data);
    pData[data.byteLength] = 128;
    return pData;
  }
  function getBlob(data) {
    const blob = new Uint8Array(BLOB_SIZE2);
    for (let i = 0; i < FIELD_ELEMENTS_PER_BLOB; i++) {
      const chunk = new Uint8Array(32);
      chunk.set(data.subarray(i * 31, (i + 1) * 31), 0);
      blob.set(chunk, i * 32);
    }
    return bytesToHex5(blob);
  }
  var getBlobs = (input) => {
    const inputArray = Array.isArray(input) ? input : [input];
    const blobs = [];
    for (const input2 of inputArray) {
      const data = utf8ToBytes3(input2);
      const len = data.byteLength;
      if (len === 0) {
        throw Error("invalid blob data (0 bytes)");
      }
      if (len > MAX_BLOB_BYTES_PER_TX) {
        throw Error(`blob data is too large (${len} bytes > ${MAX_BLOB_BYTES_PER_TX} bytes)`);
      }
      const blobs_len = Math.ceil(len / BLOB_SIZE2);
      const pData = getPadded(data, blobs_len);
      for (let i = 0; i < blobs_len; i++) {
        const chunk = pData.subarray(i * BLOB_SIZE2, (i + 1) * BLOB_SIZE2);
        const blob = getBlob(chunk);
        blobs.push(blob);
      }
    }
    return blobs;
  };
  var blobsToCommitments = (kzg, blobs) => {
    const commitments = [];
    for (const blob of blobs) {
      commitments.push(kzg.blobToKzgCommitment(blob).toLowerCase());
    }
    return commitments;
  };
  var blobsToProofs = (kzg, blobs, commitments) => {
    const proofs = blobs.map((blob, ctx) => kzg.computeBlobProof(blob, commitments[ctx]).toLowerCase());
    return proofs;
  };
  var computeVersionedHash = (commitment, blobCommitmentVersion) => {
    const computedVersionedHash = new Uint8Array(32);
    computedVersionedHash.set([blobCommitmentVersion], 0);
    computedVersionedHash.set(sha2563(hexToBytes5(commitment)).subarray(1), 1);
    return bytesToHex5(computedVersionedHash);
  };
  var commitmentsToVersionedHashes = (commitments) => {
    const hashes = [];
    for (const commitment of commitments) {
      hashes.push(computeVersionedHash(commitment, 1));
    }
    return hashes;
  };
  var blobsToCellsAndProofs = (kzg, blobs) => {
    const blobsAndCells = blobs.reduce(([cellsAcc, proofsAcc], elem) => {
      const blobCellsAndProofs = kzg.computeCellsAndProofs(elem);
      return [
        [...cellsAcc, ...blobCellsAndProofs[0]],
        [...proofsAcc, ...blobCellsAndProofs[1]]
      ];
    }, [[], []]);
    const indices = Array.from({ length: CELLS_PER_EXT_BLOB }, (_, i) => i);
    return [...blobsAndCells, indices];
  };
  var blobsToCellProofs = (kzg, blobs) => {
    return blobsToCellsAndProofs(kzg, blobs)[1];
  };

  // node_modules/eth-crypto/dist/es/create-identity.js
  var MIN_ENTROPY_SIZE = 128;
  function createPrivateKey(entropy) {
    if (entropy) {
      if (!Buffer.isBuffer(entropy)) throw new Error("EthCrypto.createPrivateKey(): given entropy is no Buffer");
      if (Buffer.byteLength(entropy, "utf8") < MIN_ENTROPY_SIZE) throw new Error("EthCrypto.createPrivateKey(): Entropy-size must be at least " + MIN_ENTROPY_SIZE);
      var outerHex = keccak256(entropy);
      return outerHex;
    } else {
      var innerHex = keccak256(concat([randomBytes3(32), randomBytes3(32)]));
      var middleHex = concat([concat([randomBytes3(32), innerHex]), randomBytes3(32)]);
      var _outerHex = keccak256(middleHex);
      return _outerHex;
    }
  }
  function createIdentity(entropy) {
    var privateKey = createPrivateKey(entropy);
    var wallet = new Wallet(privateKey);
    var identity = {
      privateKey,
      // remove trailing '0x04'
      publicKey: stripHexPrefix2(wallet.signingKey.publicKey).slice(2),
      address: wallet.address
    };
    return identity;
  }

  // node_modules/eth-crypto/dist/es/public-key.js
  var public_key_exports = {};
  __export(public_key_exports, {
    compress: () => compress,
    decompress: () => decompress,
    toAddress: () => toAddress
  });

  // node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/crypto.js
  var crypto3 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

  // node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/utils.js
  function isBytes3(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
  }
  function anumber3(n2) {
    if (!Number.isSafeInteger(n2) || n2 < 0)
      throw new Error("positive integer expected, got " + n2);
  }
  function abytes3(b2, ...lengths) {
    if (!isBytes3(b2))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b2.length))
      throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b2.length);
  }
  function ahash2(h) {
    if (typeof h !== "function" || typeof h.create !== "function")
      throw new Error("Hash should be wrapped by utils.createHasher");
    anumber3(h.outputLen);
    anumber3(h.blockLen);
  }
  function aexists2(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function aoutput2(out, instance) {
    abytes3(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error("digestInto() expects output buffer of length at least " + min);
    }
  }
  function clean2(...arrays) {
    for (let i = 0; i < arrays.length; i++) {
      arrays[i].fill(0);
    }
  }
  function createView3(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function rotr3(word, shift) {
    return word << 32 - shift | word >>> shift;
  }
  function utf8ToBytes5(str) {
    if (typeof str !== "string")
      throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function toBytes4(data) {
    if (typeof data === "string")
      data = utf8ToBytes5(data);
    abytes3(data);
    return data;
  }
  function concatBytes7(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
      const a = arrays[i];
      abytes3(a);
      sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const a = arrays[i];
      res.set(a, pad);
      pad += a.length;
    }
    return res;
  }
  var Hash2 = class {
  };
  function createHasher2(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes4(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  function randomBytes6(bytesLength = 32) {
    if (crypto3 && typeof crypto3.getRandomValues === "function") {
      return crypto3.getRandomValues(new Uint8Array(bytesLength));
    }
    if (crypto3 && typeof crypto3.randomBytes === "function") {
      return Uint8Array.from(crypto3.randomBytes(bytesLength));
    }
    throw new Error("crypto.getRandomValues must be defined");
  }

  // node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/_md.js
  function setBigUint642(view, byteOffset, value, isLE4) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE4);
    const _32n3 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n3 & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE4 ? 4 : 0;
    const l = isLE4 ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE4);
    view.setUint32(byteOffset + l, wl, isLE4);
  }
  function Chi3(a, b2, c) {
    return a & b2 ^ ~a & c;
  }
  function Maj3(a, b2, c) {
    return a & b2 ^ a & c ^ b2 & c;
  }
  var HashMD2 = class extends Hash2 {
    constructor(blockLen, outputLen, padOffset, isLE4) {
      super();
      this.finished = false;
      this.length = 0;
      this.pos = 0;
      this.destroyed = false;
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE4;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView3(this.buffer);
    }
    update(data) {
      aexists2(this);
      data = toBytes4(data);
      abytes3(data);
      const { view, buffer, blockLen } = this;
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView3(data);
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      aexists2(this);
      aoutput2(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE: isLE4 } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      clean2(this.buffer.subarray(pos));
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i = pos; i < blockLen; i++)
        buffer[i] = 0;
      setBigUint642(view, blockLen - 8, BigInt(this.length * 8), isLE4);
      this.process(view, 0);
      const oview = createView3(out);
      const len = this.outputLen;
      if (len % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const outLen = len / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i = 0; i < outLen; i++)
        oview.setUint32(4 * i, state[i], isLE4);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to) {
      to || (to = new this.constructor());
      to.set(...this.get());
      const { blockLen, buffer, length, finished, destroyed, pos } = this;
      to.destroyed = destroyed;
      to.finished = finished;
      to.length = length;
      to.pos = pos;
      if (length % blockLen)
        to.buffer.set(buffer);
      return to;
    }
    clone() {
      return this._cloneInto();
    }
  };
  var SHA256_IV2 = /* @__PURE__ */ Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);

  // node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/sha2.js
  var SHA256_K3 = /* @__PURE__ */ Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var SHA256_W3 = /* @__PURE__ */ new Uint32Array(64);
  var SHA2562 = class extends HashMD2 {
    constructor(outputLen = 32) {
      super(64, outputLen, 8, false);
      this.A = SHA256_IV2[0] | 0;
      this.B = SHA256_IV2[1] | 0;
      this.C = SHA256_IV2[2] | 0;
      this.D = SHA256_IV2[3] | 0;
      this.E = SHA256_IV2[4] | 0;
      this.F = SHA256_IV2[5] | 0;
      this.G = SHA256_IV2[6] | 0;
      this.H = SHA256_IV2[7] | 0;
    }
    get() {
      const { A, B, C, D, E, F, G, H } = this;
      return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
      this.A = A | 0;
      this.B = B | 0;
      this.C = C | 0;
      this.D = D | 0;
      this.E = E | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4)
        SHA256_W3[i] = view.getUint32(offset, false);
      for (let i = 16; i < 64; i++) {
        const W15 = SHA256_W3[i - 15];
        const W2 = SHA256_W3[i - 2];
        const s0 = rotr3(W15, 7) ^ rotr3(W15, 18) ^ W15 >>> 3;
        const s1 = rotr3(W2, 17) ^ rotr3(W2, 19) ^ W2 >>> 10;
        SHA256_W3[i] = s1 + SHA256_W3[i - 7] + s0 + SHA256_W3[i - 16] | 0;
      }
      let { A, B, C, D, E, F, G, H } = this;
      for (let i = 0; i < 64; i++) {
        const sigma1 = rotr3(E, 6) ^ rotr3(E, 11) ^ rotr3(E, 25);
        const T12 = H + sigma1 + Chi3(E, F, G) + SHA256_K3[i] + SHA256_W3[i] | 0;
        const sigma0 = rotr3(A, 2) ^ rotr3(A, 13) ^ rotr3(A, 22);
        const T22 = sigma0 + Maj3(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T12 | 0;
        D = C;
        C = B;
        B = A;
        A = T12 + T22 | 0;
      }
      A = A + this.A | 0;
      B = B + this.B | 0;
      C = C + this.C | 0;
      D = D + this.D | 0;
      E = E + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H = H + this.H | 0;
      this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
      clean2(SHA256_W3);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      clean2(this.buffer);
    }
  };
  var sha2564 = /* @__PURE__ */ createHasher2(() => new SHA2562());

  // node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/hmac.js
  var HMAC2 = class extends Hash2 {
    constructor(hash3, _key) {
      super();
      this.finished = false;
      this.destroyed = false;
      ahash2(hash3);
      const key = toBytes4(_key);
      this.iHash = hash3.create();
      if (typeof this.iHash.update !== "function")
        throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen;
      this.outputLen = this.iHash.outputLen;
      const blockLen = this.blockLen;
      const pad = new Uint8Array(blockLen);
      pad.set(key.length > blockLen ? hash3.create().update(key).digest() : key);
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54;
      this.iHash.update(pad);
      this.oHash = hash3.create();
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54 ^ 92;
      this.oHash.update(pad);
      clean2(pad);
    }
    update(buf) {
      aexists2(this);
      this.iHash.update(buf);
      return this;
    }
    digestInto(out) {
      aexists2(this);
      abytes3(out, this.outputLen);
      this.finished = true;
      this.iHash.digestInto(out);
      this.oHash.update(out);
      this.oHash.digestInto(out);
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.oHash.outputLen);
      this.digestInto(out);
      return out;
    }
    _cloneInto(to) {
      to || (to = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
      to = to;
      to.finished = finished;
      to.destroyed = destroyed;
      to.blockLen = blockLen;
      to.outputLen = outputLen;
      to.oHash = oHash._cloneInto(to.oHash);
      to.iHash = iHash._cloneInto(to.iHash);
      return to;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true;
      this.oHash.destroy();
      this.iHash.destroy();
    }
  };
  var hmac3 = (hash3, key, message) => new HMAC2(hash3, key).update(message).digest();
  hmac3.create = (hash3, key) => new HMAC2(hash3, key);

  // node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/abstract/utils.js
  var _0n12 = /* @__PURE__ */ BigInt(0);
  var _1n12 = /* @__PURE__ */ BigInt(1);
  function isBytes4(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
  }
  function abytes4(item) {
    if (!isBytes4(item))
      throw new Error("Uint8Array expected");
  }
  function abool2(title, value) {
    if (typeof value !== "boolean")
      throw new Error(title + " boolean expected, got " + value);
  }
  function numberToHexUnpadded3(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? "0" + hex : hex;
  }
  function hexToNumber3(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    return hex === "" ? _0n12 : BigInt("0x" + hex);
  }
  var hasHexBuiltin2 = (
    // @ts-ignore
    typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
  );
  var hexes3 = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex6(bytes2) {
    abytes4(bytes2);
    if (hasHexBuiltin2)
      return bytes2.toHex();
    let hex = "";
    for (let i = 0; i < bytes2.length; i++) {
      hex += hexes3[bytes2[i]];
    }
    return hex;
  }
  var asciis3 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function asciiToBase163(ch) {
    if (ch >= asciis3._0 && ch <= asciis3._9)
      return ch - asciis3._0;
    if (ch >= asciis3.A && ch <= asciis3.F)
      return ch - (asciis3.A - 10);
    if (ch >= asciis3.a && ch <= asciis3.f)
      return ch - (asciis3.a - 10);
    return;
  }
  function hexToBytes6(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    if (hasHexBuiltin2)
      return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      const n1 = asciiToBase163(hex.charCodeAt(hi));
      const n2 = asciiToBase163(hex.charCodeAt(hi + 1));
      if (n1 === void 0 || n2 === void 0) {
        const char = hex[hi] + hex[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  function bytesToNumberBE3(bytes2) {
    return hexToNumber3(bytesToHex6(bytes2));
  }
  function bytesToNumberLE3(bytes2) {
    abytes4(bytes2);
    return hexToNumber3(bytesToHex6(Uint8Array.from(bytes2).reverse()));
  }
  function numberToBytesBE3(n2, len) {
    return hexToBytes6(n2.toString(16).padStart(len * 2, "0"));
  }
  function numberToBytesLE3(n2, len) {
    return numberToBytesBE3(n2, len).reverse();
  }
  function ensureBytes2(title, hex, expectedLength) {
    let res;
    if (typeof hex === "string") {
      try {
        res = hexToBytes6(hex);
      } catch (e) {
        throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
      }
    } else if (isBytes4(hex)) {
      res = Uint8Array.from(hex);
    } else {
      throw new Error(title + " must be hex string or Uint8Array");
    }
    const len = res.length;
    if (typeof expectedLength === "number" && len !== expectedLength)
      throw new Error(title + " of length " + expectedLength + " expected, got " + len);
    return res;
  }
  function concatBytes8(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
      const a = arrays[i];
      abytes4(a);
      sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const a = arrays[i];
      res.set(a, pad);
      pad += a.length;
    }
    return res;
  }
  var isPosBig2 = (n2) => typeof n2 === "bigint" && _0n12 <= n2;
  function inRange2(n2, min, max) {
    return isPosBig2(n2) && isPosBig2(min) && isPosBig2(max) && min <= n2 && n2 < max;
  }
  function aInRange2(title, n2, min, max) {
    if (!inRange2(n2, min, max))
      throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n2);
  }
  function bitLen3(n2) {
    let len;
    for (len = 0; n2 > _0n12; n2 >>= _1n12, len += 1)
      ;
    return len;
  }
  var bitMask3 = (n2) => (_1n12 << BigInt(n2)) - _1n12;
  var u8n2 = (len) => new Uint8Array(len);
  var u8fr2 = (arr) => Uint8Array.from(arr);
  function createHmacDrbg3(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== "number" || hashLen < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    if (typeof hmacFn !== "function")
      throw new Error("hmacFn must be a function");
    let v = u8n2(hashLen);
    let k = u8n2(hashLen);
    let i = 0;
    const reset = () => {
      v.fill(1);
      k.fill(0);
      i = 0;
    };
    const h = (...b2) => hmacFn(k, v, ...b2);
    const reseed = (seed = u8n2(0)) => {
      k = h(u8fr2([0]), seed);
      v = h();
      if (seed.length === 0)
        return;
      k = h(u8fr2([1]), seed);
      v = h();
    };
    const gen2 = () => {
      if (i++ >= 1e3)
        throw new Error("drbg: tried 1000 values");
      let len = 0;
      const out = [];
      while (len < qByteLen) {
        v = h();
        const sl = v.slice();
        out.push(sl);
        len += v.length;
      }
      return concatBytes8(...out);
    };
    const genUntil = (seed, pred) => {
      reset();
      reseed(seed);
      let res = void 0;
      while (!(res = pred(gen2())))
        reseed();
      reset();
      return res;
    };
    return genUntil;
  }
  var validatorFns2 = {
    bigint: (val) => typeof val === "bigint",
    function: (val) => typeof val === "function",
    boolean: (val) => typeof val === "boolean",
    string: (val) => typeof val === "string",
    stringOrUint8Array: (val) => typeof val === "string" || isBytes4(val),
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
  };
  function validateObject3(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
      const checkVal = validatorFns2[type];
      if (typeof checkVal !== "function")
        throw new Error("invalid validator function");
      const val = object[fieldName];
      if (isOptional && val === void 0)
        return;
      if (!checkVal(val, object)) {
        throw new Error("param " + String(fieldName) + " is invalid. Expected " + type + ", got " + val);
      }
    };
    for (const [fieldName, type] of Object.entries(validators))
      checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
      checkField(fieldName, type, true);
    return object;
  }
  function memoized(fn) {
    const map = /* @__PURE__ */ new WeakMap();
    return (arg, ...args) => {
      const val = map.get(arg);
      if (val !== void 0)
        return val;
      const computed = fn(arg, ...args);
      map.set(arg, computed);
      return computed;
    };
  }

  // node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/abstract/modular.js
  var _0n13 = BigInt(0);
  var _1n13 = BigInt(1);
  var _2n10 = /* @__PURE__ */ BigInt(2);
  var _3n5 = /* @__PURE__ */ BigInt(3);
  var _4n5 = /* @__PURE__ */ BigInt(4);
  var _5n3 = /* @__PURE__ */ BigInt(5);
  var _8n3 = /* @__PURE__ */ BigInt(8);
  var _9n3 = /* @__PURE__ */ BigInt(9);
  var _16n3 = /* @__PURE__ */ BigInt(16);
  function mod3(a, b2) {
    const result = a % b2;
    return result >= _0n13 ? result : b2 + result;
  }
  function pow23(x, power, modulo) {
    let res = x;
    while (power-- > _0n13) {
      res *= res;
      res %= modulo;
    }
    return res;
  }
  function invert3(number2, modulo) {
    if (number2 === _0n13)
      throw new Error("invert: expected non-zero number");
    if (modulo <= _0n13)
      throw new Error("invert: expected positive modulus, got " + modulo);
    let a = mod3(number2, modulo);
    let b2 = modulo;
    let x = _0n13, y = _1n13, u = _1n13, v = _0n13;
    while (a !== _0n13) {
      const q = b2 / a;
      const r = b2 % a;
      const m = x - u * q;
      const n2 = y - v * q;
      b2 = a, a = r, x = u, y = v, u = m, v = n2;
    }
    const gcd = b2;
    if (gcd !== _1n13)
      throw new Error("invert: does not exist");
    return mod3(x, modulo);
  }
  function tonelliShanks3(P) {
    let Q = P - _1n13;
    let S2 = 0;
    while (Q % _2n10 === _0n13) {
      Q /= _2n10;
      S2++;
    }
    let Z = _2n10;
    const _Fp = Field3(P);
    while (Z < P && FpIsSquare2(_Fp, Z)) {
      if (Z++ > 1e3)
        throw new Error("Cannot find square root: probably non-prime P");
    }
    if (S2 === 1) {
      const p1div4 = (P + _1n13) / _4n5;
      return function tonelliFast(Fp2, n2) {
        const root = Fp2.pow(n2, p1div4);
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    const Q1div2 = (Q + _1n13) / _2n10;
    return function tonelliSlow(Fp2, n2) {
      if (!FpIsSquare2(Fp2, n2))
        throw new Error("Cannot find square root");
      let r = S2;
      let g = Fp2.pow(Fp2.mul(Fp2.ONE, Z), Q);
      let x = Fp2.pow(n2, Q1div2);
      let b2 = Fp2.pow(n2, Q);
      while (!Fp2.eql(b2, Fp2.ONE)) {
        if (Fp2.eql(b2, Fp2.ZERO))
          return Fp2.ZERO;
        let m = 1;
        for (let t2 = Fp2.sqr(b2); m < r; m++) {
          if (Fp2.eql(t2, Fp2.ONE))
            break;
          t2 = Fp2.sqr(t2);
        }
        const ge = Fp2.pow(g, _1n13 << BigInt(r - m - 1));
        g = Fp2.sqr(ge);
        x = Fp2.mul(x, ge);
        b2 = Fp2.mul(b2, g);
        r = m;
      }
      return x;
    };
  }
  function FpSqrt3(P) {
    if (P % _4n5 === _3n5) {
      return function sqrt3mod42(Fp2, n2) {
        const p1div4 = (P + _1n13) / _4n5;
        const root = Fp2.pow(n2, p1div4);
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    if (P % _8n3 === _5n3) {
      return function sqrt5mod82(Fp2, n2) {
        const n22 = Fp2.mul(n2, _2n10);
        const c1 = (P - _5n3) / _8n3;
        const v = Fp2.pow(n22, c1);
        const nv = Fp2.mul(n2, v);
        const i = Fp2.mul(Fp2.mul(nv, _2n10), v);
        const root = Fp2.mul(nv, Fp2.sub(i, Fp2.ONE));
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    if (P % _16n3 === _9n3) {
    }
    return tonelliShanks3(P);
  }
  var FIELD_FIELDS3 = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function validateField3(field) {
    const initial = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    };
    const opts = FIELD_FIELDS3.reduce((map, val) => {
      map[val] = "function";
      return map;
    }, initial);
    return validateObject3(field, opts);
  }
  function FpPow3(Fp2, num, power) {
    if (power < _0n13)
      throw new Error("invalid exponent, negatives unsupported");
    if (power === _0n13)
      return Fp2.ONE;
    if (power === _1n13)
      return num;
    let p = Fp2.ONE;
    let d = num;
    while (power > _0n13) {
      if (power & _1n13)
        p = Fp2.mul(p, d);
      d = Fp2.sqr(d);
      power >>= _1n13;
    }
    return p;
  }
  function FpInvertBatch3(Fp2, nums, passZero = false) {
    const inverted = new Array(nums.length).fill(passZero ? Fp2.ZERO : void 0);
    const multipliedAcc = nums.reduce((acc, num, i) => {
      if (Fp2.is0(num))
        return acc;
      inverted[i] = acc;
      return Fp2.mul(acc, num);
    }, Fp2.ONE);
    const invertedAcc = Fp2.inv(multipliedAcc);
    nums.reduceRight((acc, num, i) => {
      if (Fp2.is0(num))
        return acc;
      inverted[i] = Fp2.mul(acc, inverted[i]);
      return Fp2.mul(acc, num);
    }, invertedAcc);
    return inverted;
  }
  function FpLegendre2(Fp2, n2) {
    const legc = (Fp2.ORDER - _1n13) / _2n10;
    const powered = Fp2.pow(n2, legc);
    const yes = Fp2.eql(powered, Fp2.ONE);
    const zero = Fp2.eql(powered, Fp2.ZERO);
    const no = Fp2.eql(powered, Fp2.neg(Fp2.ONE));
    if (!yes && !zero && !no)
      throw new Error("Cannot find square root: probably non-prime P");
    return yes ? 1 : zero ? 0 : -1;
  }
  function FpIsSquare2(Fp2, n2) {
    const l = FpLegendre2(Fp2, n2);
    return l === 0 || l === 1;
  }
  function nLength3(n2, nBitLength) {
    if (nBitLength !== void 0)
      anumber3(nBitLength);
    const _nBitLength = nBitLength !== void 0 ? nBitLength : n2.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
  }
  function Field3(ORDER, bitLen4, isLE4 = false, redef = {}) {
    if (ORDER <= _0n13)
      throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength3(ORDER, bitLen4);
    if (BYTES > 2048)
      throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let sqrtP;
    const f2 = Object.freeze({
      ORDER,
      isLE: isLE4,
      BITS,
      BYTES,
      MASK: bitMask3(BITS),
      ZERO: _0n13,
      ONE: _1n13,
      create: (num) => mod3(num, ORDER),
      isValid: (num) => {
        if (typeof num !== "bigint")
          throw new Error("invalid field element: expected bigint, got " + typeof num);
        return _0n13 <= num && num < ORDER;
      },
      is0: (num) => num === _0n13,
      isOdd: (num) => (num & _1n13) === _1n13,
      neg: (num) => mod3(-num, ORDER),
      eql: (lhs, rhs) => lhs === rhs,
      sqr: (num) => mod3(num * num, ORDER),
      add: (lhs, rhs) => mod3(lhs + rhs, ORDER),
      sub: (lhs, rhs) => mod3(lhs - rhs, ORDER),
      mul: (lhs, rhs) => mod3(lhs * rhs, ORDER),
      pow: (num, power) => FpPow3(f2, num, power),
      div: (lhs, rhs) => mod3(lhs * invert3(rhs, ORDER), ORDER),
      // Same as above, but doesn't normalize
      sqrN: (num) => num * num,
      addN: (lhs, rhs) => lhs + rhs,
      subN: (lhs, rhs) => lhs - rhs,
      mulN: (lhs, rhs) => lhs * rhs,
      inv: (num) => invert3(num, ORDER),
      sqrt: redef.sqrt || ((n2) => {
        if (!sqrtP)
          sqrtP = FpSqrt3(ORDER);
        return sqrtP(f2, n2);
      }),
      toBytes: (num) => isLE4 ? numberToBytesLE3(num, BYTES) : numberToBytesBE3(num, BYTES),
      fromBytes: (bytes2) => {
        if (bytes2.length !== BYTES)
          throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes2.length);
        return isLE4 ? bytesToNumberLE3(bytes2) : bytesToNumberBE3(bytes2);
      },
      // TODO: we don't need it here, move out to separate fn
      invertBatch: (lst) => FpInvertBatch3(f2, lst),
      // We can't move this out because Fp6, Fp12 implement it
      // and it's unclear what to return in there.
      cmov: (a, b2, c) => c ? b2 : a
    });
    return Object.freeze(f2);
  }
  function getFieldBytesLength3(fieldOrder) {
    if (typeof fieldOrder !== "bigint")
      throw new Error("field order must be bigint");
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
  }
  function getMinHashLength3(fieldOrder) {
    const length = getFieldBytesLength3(fieldOrder);
    return length + Math.ceil(length / 2);
  }
  function mapHashToField3(key, fieldOrder, isLE4 = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength3(fieldOrder);
    const minLen = getMinHashLength3(fieldOrder);
    if (len < 16 || len < minLen || len > 1024)
      throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
    const num = isLE4 ? bytesToNumberLE3(key) : bytesToNumberBE3(key);
    const reduced = mod3(num, fieldOrder - _1n13) + _1n13;
    return isLE4 ? numberToBytesLE3(reduced, fieldLen) : numberToBytesBE3(reduced, fieldLen);
  }

  // node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/abstract/curve.js
  var _0n14 = BigInt(0);
  var _1n14 = BigInt(1);
  function constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
  }
  function validateW2(W, bits) {
    if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
      throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
  }
  function calcWOpts2(W, scalarBits) {
    validateW2(W, scalarBits);
    const windows = Math.ceil(scalarBits / W) + 1;
    const windowSize = 2 ** (W - 1);
    const maxNumber = 2 ** W;
    const mask2 = bitMask3(W);
    const shiftBy = BigInt(W);
    return { windows, windowSize, mask: mask2, maxNumber, shiftBy };
  }
  function calcOffsets2(n2, window2, wOpts) {
    const { windowSize, mask: mask2, maxNumber, shiftBy } = wOpts;
    let wbits = Number(n2 & mask2);
    let nextN = n2 >> shiftBy;
    if (wbits > windowSize) {
      wbits -= maxNumber;
      nextN += _1n14;
    }
    const offsetStart = window2 * windowSize;
    const offset = offsetStart + Math.abs(wbits) - 1;
    const isZero = wbits === 0;
    const isNeg = wbits < 0;
    const isNegF = window2 % 2 !== 0;
    const offsetF = offsetStart;
    return { nextN, offset, isZero, isNeg, isNegF, offsetF };
  }
  function validateMSMPoints(points, c) {
    if (!Array.isArray(points))
      throw new Error("array expected");
    points.forEach((p, i) => {
      if (!(p instanceof c))
        throw new Error("invalid point at index " + i);
    });
  }
  function validateMSMScalars(scalars, field) {
    if (!Array.isArray(scalars))
      throw new Error("array of scalars expected");
    scalars.forEach((s, i) => {
      if (!field.isValid(s))
        throw new Error("invalid scalar at index " + i);
    });
  }
  var pointPrecomputes2 = /* @__PURE__ */ new WeakMap();
  var pointWindowSizes2 = /* @__PURE__ */ new WeakMap();
  function getW2(P) {
    return pointWindowSizes2.get(P) || 1;
  }
  function wNAF3(c, bits) {
    return {
      constTimeNegate,
      hasPrecomputes(elm) {
        return getW2(elm) !== 1;
      },
      // non-const time multiplication ladder
      unsafeLadder(elm, n2, p = c.ZERO) {
        let d = elm;
        while (n2 > _0n14) {
          if (n2 & _1n14)
            p = p.add(d);
          d = d.double();
          n2 >>= _1n14;
        }
        return p;
      },
      /**
       * Creates a wNAF precomputation window. Used for caching.
       * Default window size is set by `utils.precompute()` and is equal to 8.
       * Number of precomputed points depends on the curve size:
       * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
       * - 𝑊 is the window size
       * - 𝑛 is the bitlength of the curve order.
       * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
       * @param elm Point instance
       * @param W window size
       * @returns precomputed point tables flattened to a single array
       */
      precomputeWindow(elm, W) {
        const { windows, windowSize } = calcWOpts2(W, bits);
        const points = [];
        let p = elm;
        let base = p;
        for (let window2 = 0; window2 < windows; window2++) {
          base = p;
          points.push(base);
          for (let i = 1; i < windowSize; i++) {
            base = base.add(p);
            points.push(base);
          }
          p = base.double();
        }
        return points;
      },
      /**
       * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @returns real and fake (for const-time) points
       */
      wNAF(W, precomputes, n2) {
        let p = c.ZERO;
        let f2 = c.BASE;
        const wo = calcWOpts2(W, bits);
        for (let window2 = 0; window2 < wo.windows; window2++) {
          const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets2(n2, window2, wo);
          n2 = nextN;
          if (isZero) {
            f2 = f2.add(constTimeNegate(isNegF, precomputes[offsetF]));
          } else {
            p = p.add(constTimeNegate(isNeg, precomputes[offset]));
          }
        }
        return { p, f: f2 };
      },
      /**
       * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @param acc accumulator point to add result of multiplication
       * @returns point
       */
      wNAFUnsafe(W, precomputes, n2, acc = c.ZERO) {
        const wo = calcWOpts2(W, bits);
        for (let window2 = 0; window2 < wo.windows; window2++) {
          if (n2 === _0n14)
            break;
          const { nextN, offset, isZero, isNeg } = calcOffsets2(n2, window2, wo);
          n2 = nextN;
          if (isZero) {
            continue;
          } else {
            const item = precomputes[offset];
            acc = acc.add(isNeg ? item.negate() : item);
          }
        }
        return acc;
      },
      getPrecomputes(W, P, transform) {
        let comp = pointPrecomputes2.get(P);
        if (!comp) {
          comp = this.precomputeWindow(P, W);
          if (W !== 1)
            pointPrecomputes2.set(P, transform(comp));
        }
        return comp;
      },
      wNAFCached(P, n2, transform) {
        const W = getW2(P);
        return this.wNAF(W, this.getPrecomputes(W, P, transform), n2);
      },
      wNAFCachedUnsafe(P, n2, transform, prev) {
        const W = getW2(P);
        if (W === 1)
          return this.unsafeLadder(P, n2, prev);
        return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n2, prev);
      },
      // We calculate precomputes for elliptic curve point multiplication
      // using windowed method. This specifies window size and
      // stores precomputed values. Usually only base point would be precomputed.
      setWindowSize(P, W) {
        validateW2(W, bits);
        pointWindowSizes2.set(P, W);
        pointPrecomputes2.delete(P);
      }
    };
  }
  function pippenger(c, fieldN, points, scalars) {
    validateMSMPoints(points, c);
    validateMSMScalars(scalars, fieldN);
    if (points.length !== scalars.length)
      throw new Error("arrays of points and scalars must have equal length");
    const zero = c.ZERO;
    const wbits = bitLen3(BigInt(points.length));
    const windowSize = wbits > 12 ? wbits - 3 : wbits > 4 ? wbits - 2 : wbits ? 2 : 1;
    const MASK = bitMask3(windowSize);
    const buckets = new Array(Number(MASK) + 1).fill(zero);
    const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
    let sum = zero;
    for (let i = lastBits; i >= 0; i -= windowSize) {
      buckets.fill(zero);
      for (let j = 0; j < scalars.length; j++) {
        const scalar = scalars[j];
        const wbits2 = Number(scalar >> BigInt(i) & MASK);
        buckets[wbits2] = buckets[wbits2].add(points[j]);
      }
      let resI = zero;
      for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
        sumI = sumI.add(buckets[j]);
        resI = resI.add(sumI);
      }
      sum = sum.add(resI);
      if (i !== 0)
        for (let j = 0; j < windowSize; j++)
          sum = sum.double();
    }
    return sum;
  }
  function validateBasic2(curve) {
    validateField3(curve.Fp);
    validateObject3(curve, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    });
    return Object.freeze({
      ...nLength3(curve.n, curve.nBitLength),
      ...curve,
      ...{ p: curve.Fp.ORDER }
    });
  }

  // node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/abstract/weierstrass.js
  function validateSigVerOpts(opts) {
    if (opts.lowS !== void 0)
      abool2("lowS", opts.lowS);
    if (opts.prehash !== void 0)
      abool2("prehash", opts.prehash);
  }
  function validatePointOpts2(curve) {
    const opts = validateBasic2(curve);
    validateObject3(opts, {
      a: "field",
      b: "field"
    }, {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function"
    });
    const { endo, Fp: Fp2, a } = opts;
    if (endo) {
      if (!Fp2.eql(a, Fp2.ZERO)) {
        throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
      }
      if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
        throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
      }
    }
    return Object.freeze({ ...opts });
  }
  var DERErr3 = class extends Error {
    constructor(m = "") {
      super(m);
    }
  };
  var DER3 = {
    // asn.1 DER encoding utils
    Err: DERErr3,
    // Basic building block is TLV (Tag-Length-Value)
    _tlv: {
      encode: (tag, data) => {
        const { Err: E } = DER3;
        if (tag < 0 || tag > 256)
          throw new E("tlv.encode: wrong tag");
        if (data.length & 1)
          throw new E("tlv.encode: unpadded data");
        const dataLen = data.length / 2;
        const len = numberToHexUnpadded3(dataLen);
        if (len.length / 2 & 128)
          throw new E("tlv.encode: long form length too big");
        const lenLen = dataLen > 127 ? numberToHexUnpadded3(len.length / 2 | 128) : "";
        const t = numberToHexUnpadded3(tag);
        return t + lenLen + len + data;
      },
      // v - value, l - left bytes (unparsed)
      decode(tag, data) {
        const { Err: E } = DER3;
        let pos = 0;
        if (tag < 0 || tag > 256)
          throw new E("tlv.encode: wrong tag");
        if (data.length < 2 || data[pos++] !== tag)
          throw new E("tlv.decode: wrong tlv");
        const first = data[pos++];
        const isLong = !!(first & 128);
        let length = 0;
        if (!isLong)
          length = first;
        else {
          const lenLen = first & 127;
          if (!lenLen)
            throw new E("tlv.decode(long): indefinite length not supported");
          if (lenLen > 4)
            throw new E("tlv.decode(long): byte length is too big");
          const lengthBytes = data.subarray(pos, pos + lenLen);
          if (lengthBytes.length !== lenLen)
            throw new E("tlv.decode: length bytes not complete");
          if (lengthBytes[0] === 0)
            throw new E("tlv.decode(long): zero leftmost byte");
          for (const b2 of lengthBytes)
            length = length << 8 | b2;
          pos += lenLen;
          if (length < 128)
            throw new E("tlv.decode(long): not minimal encoding");
        }
        const v = data.subarray(pos, pos + length);
        if (v.length !== length)
          throw new E("tlv.decode: wrong value length");
        return { v, l: data.subarray(pos + length) };
      }
    },
    // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
    // since we always use positive integers here. It must always be empty:
    // - add zero byte if exists
    // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
    _int: {
      encode(num) {
        const { Err: E } = DER3;
        if (num < _0n15)
          throw new E("integer: negative integers are not allowed");
        let hex = numberToHexUnpadded3(num);
        if (Number.parseInt(hex[0], 16) & 8)
          hex = "00" + hex;
        if (hex.length & 1)
          throw new E("unexpected DER parsing assertion: unpadded hex");
        return hex;
      },
      decode(data) {
        const { Err: E } = DER3;
        if (data[0] & 128)
          throw new E("invalid signature integer: negative");
        if (data[0] === 0 && !(data[1] & 128))
          throw new E("invalid signature integer: unnecessary leading zero");
        return bytesToNumberBE3(data);
      }
    },
    toSig(hex) {
      const { Err: E, _int: int, _tlv: tlv } = DER3;
      const data = ensureBytes2("signature", hex);
      const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
      if (seqLeftBytes.length)
        throw new E("invalid signature: left bytes after parsing");
      const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
      const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
      if (sLeftBytes.length)
        throw new E("invalid signature: left bytes after parsing");
      return { r: int.decode(rBytes), s: int.decode(sBytes) };
    },
    hexFromSig(sig) {
      const { _tlv: tlv, _int: int } = DER3;
      const rs = tlv.encode(2, int.encode(sig.r));
      const ss = tlv.encode(2, int.encode(sig.s));
      const seq = rs + ss;
      return tlv.encode(48, seq);
    }
  };
  var _0n15 = BigInt(0);
  var _1n15 = BigInt(1);
  var _2n11 = BigInt(2);
  var _3n6 = BigInt(3);
  var _4n6 = BigInt(4);
  function weierstrassPoints2(opts) {
    const CURVE = validatePointOpts2(opts);
    const { Fp: Fp2 } = CURVE;
    const Fn = Field3(CURVE.n, CURVE.nBitLength);
    const toBytes5 = CURVE.toBytes || ((_c, point, _isCompressed) => {
      const a = point.toAffine();
      return concatBytes8(Uint8Array.from([4]), Fp2.toBytes(a.x), Fp2.toBytes(a.y));
    });
    const fromBytes = CURVE.fromBytes || ((bytes2) => {
      const tail = bytes2.subarray(1);
      const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
      const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
      return { x, y };
    });
    function weierstrassEquation(x) {
      const { a, b: b2 } = CURVE;
      const x2 = Fp2.sqr(x);
      const x3 = Fp2.mul(x2, x);
      return Fp2.add(Fp2.add(x3, Fp2.mul(x, a)), b2);
    }
    if (!Fp2.eql(Fp2.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
      throw new Error("bad generator point: equation left != right");
    function isWithinCurveOrder(num) {
      return inRange2(num, _1n15, CURVE.n);
    }
    function normPrivateKeyToScalar(key) {
      const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N2 } = CURVE;
      if (lengths && typeof key !== "bigint") {
        if (isBytes4(key))
          key = bytesToHex6(key);
        if (typeof key !== "string" || !lengths.includes(key.length))
          throw new Error("invalid private key");
        key = key.padStart(nByteLength * 2, "0");
      }
      let num;
      try {
        num = typeof key === "bigint" ? key : bytesToNumberBE3(ensureBytes2("private key", key, nByteLength));
      } catch (error) {
        throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
      }
      if (wrapPrivateKey)
        num = mod3(num, N2);
      aInRange2("private key", num, _1n15, N2);
      return num;
    }
    function aprjpoint(other) {
      if (!(other instanceof Point3))
        throw new Error("ProjectivePoint expected");
    }
    const toAffineMemo = memoized((p, iz) => {
      const { px: x, py: y, pz: z } = p;
      if (Fp2.eql(z, Fp2.ONE))
        return { x, y };
      const is0 = p.is0();
      if (iz == null)
        iz = is0 ? Fp2.ONE : Fp2.inv(z);
      const ax = Fp2.mul(x, iz);
      const ay = Fp2.mul(y, iz);
      const zz = Fp2.mul(z, iz);
      if (is0)
        return { x: Fp2.ZERO, y: Fp2.ZERO };
      if (!Fp2.eql(zz, Fp2.ONE))
        throw new Error("invZ was invalid");
      return { x: ax, y: ay };
    });
    const assertValidMemo = memoized((p) => {
      if (p.is0()) {
        if (CURVE.allowInfinityPoint && !Fp2.is0(p.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x, y } = p.toAffine();
      if (!Fp2.isValid(x) || !Fp2.isValid(y))
        throw new Error("bad point: x or y not FE");
      const left = Fp2.sqr(y);
      const right = weierstrassEquation(x);
      if (!Fp2.eql(left, right))
        throw new Error("bad point: equation left != right");
      if (!p.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    class Point3 {
      constructor(px, py, pz) {
        if (px == null || !Fp2.isValid(px))
          throw new Error("x required");
        if (py == null || !Fp2.isValid(py) || Fp2.is0(py))
          throw new Error("y required");
        if (pz == null || !Fp2.isValid(pz))
          throw new Error("z required");
        this.px = px;
        this.py = py;
        this.pz = pz;
        Object.freeze(this);
      }
      // Does not validate if the point is on-curve.
      // Use fromHex instead, or call assertValidity() later.
      static fromAffine(p) {
        const { x, y } = p || {};
        if (!p || !Fp2.isValid(x) || !Fp2.isValid(y))
          throw new Error("invalid affine point");
        if (p instanceof Point3)
          throw new Error("projective point not allowed");
        const is0 = (i) => Fp2.eql(i, Fp2.ZERO);
        if (is0(x) && is0(y))
          return Point3.ZERO;
        return new Point3(x, y, Fp2.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      /**
       * Takes a bunch of Projective Points but executes only one
       * inversion on all of them. Inversion is very slow operation,
       * so this improves performance massively.
       * Optimization: converts a list of projective points to a list of identical points with Z=1.
       */
      static normalizeZ(points) {
        const toInv = FpInvertBatch3(Fp2, points.map((p) => p.pz));
        return points.map((p, i) => p.toAffine(toInv[i])).map(Point3.fromAffine);
      }
      /**
       * Converts hash string or Uint8Array to Point.
       * @param hex short/long ECDSA hex
       */
      static fromHex(hex) {
        const P = Point3.fromAffine(fromBytes(ensureBytes2("pointHex", hex)));
        P.assertValidity();
        return P;
      }
      // Multiplies generator point by privateKey.
      static fromPrivateKey(privateKey) {
        return Point3.BASE.multiply(normPrivateKeyToScalar(privateKey));
      }
      // Multiscalar Multiplication
      static msm(points, scalars) {
        return pippenger(Point3, Fn, points, scalars);
      }
      // "Private method", don't use it directly
      _setWindowSize(windowSize) {
        wnaf.setWindowSize(this, windowSize);
      }
      // A point on curve is valid if it conforms to equation.
      assertValidity() {
        assertValidMemo(this);
      }
      hasEvenY() {
        const { y } = this.toAffine();
        if (Fp2.isOdd)
          return !Fp2.isOdd(y);
        throw new Error("Field doesn't support isOdd");
      }
      /**
       * Compare one point to another.
       */
      equals(other) {
        aprjpoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        const U12 = Fp2.eql(Fp2.mul(X1, Z2), Fp2.mul(X2, Z1));
        const U22 = Fp2.eql(Fp2.mul(Y1, Z2), Fp2.mul(Y2, Z1));
        return U12 && U22;
      }
      /**
       * Flips point to one corresponding to (x, -y) in Affine coordinates.
       */
      negate() {
        return new Point3(this.px, Fp2.neg(this.py), this.pz);
      }
      // Renes-Costello-Batina exception-free doubling formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 3
      // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
      double() {
        const { a, b: b2 } = CURVE;
        const b3 = Fp2.mul(b2, _3n6);
        const { px: X1, py: Y1, pz: Z1 } = this;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        let t0 = Fp2.mul(X1, X1);
        let t1 = Fp2.mul(Y1, Y1);
        let t2 = Fp2.mul(Z1, Z1);
        let t3 = Fp2.mul(X1, Y1);
        t3 = Fp2.add(t3, t3);
        Z3 = Fp2.mul(X1, Z1);
        Z3 = Fp2.add(Z3, Z3);
        X3 = Fp2.mul(a, Z3);
        Y3 = Fp2.mul(b3, t2);
        Y3 = Fp2.add(X3, Y3);
        X3 = Fp2.sub(t1, Y3);
        Y3 = Fp2.add(t1, Y3);
        Y3 = Fp2.mul(X3, Y3);
        X3 = Fp2.mul(t3, X3);
        Z3 = Fp2.mul(b3, Z3);
        t2 = Fp2.mul(a, t2);
        t3 = Fp2.sub(t0, t2);
        t3 = Fp2.mul(a, t3);
        t3 = Fp2.add(t3, Z3);
        Z3 = Fp2.add(t0, t0);
        t0 = Fp2.add(Z3, t0);
        t0 = Fp2.add(t0, t2);
        t0 = Fp2.mul(t0, t3);
        Y3 = Fp2.add(Y3, t0);
        t2 = Fp2.mul(Y1, Z1);
        t2 = Fp2.add(t2, t2);
        t0 = Fp2.mul(t2, t3);
        X3 = Fp2.sub(X3, t0);
        Z3 = Fp2.mul(t2, t1);
        Z3 = Fp2.add(Z3, Z3);
        Z3 = Fp2.add(Z3, Z3);
        return new Point3(X3, Y3, Z3);
      }
      // Renes-Costello-Batina exception-free addition formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 1
      // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
      add(other) {
        aprjpoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        const a = CURVE.a;
        const b3 = Fp2.mul(CURVE.b, _3n6);
        let t0 = Fp2.mul(X1, X2);
        let t1 = Fp2.mul(Y1, Y2);
        let t2 = Fp2.mul(Z1, Z2);
        let t3 = Fp2.add(X1, Y1);
        let t4 = Fp2.add(X2, Y2);
        t3 = Fp2.mul(t3, t4);
        t4 = Fp2.add(t0, t1);
        t3 = Fp2.sub(t3, t4);
        t4 = Fp2.add(X1, Z1);
        let t5 = Fp2.add(X2, Z2);
        t4 = Fp2.mul(t4, t5);
        t5 = Fp2.add(t0, t2);
        t4 = Fp2.sub(t4, t5);
        t5 = Fp2.add(Y1, Z1);
        X3 = Fp2.add(Y2, Z2);
        t5 = Fp2.mul(t5, X3);
        X3 = Fp2.add(t1, t2);
        t5 = Fp2.sub(t5, X3);
        Z3 = Fp2.mul(a, t4);
        X3 = Fp2.mul(b3, t2);
        Z3 = Fp2.add(X3, Z3);
        X3 = Fp2.sub(t1, Z3);
        Z3 = Fp2.add(t1, Z3);
        Y3 = Fp2.mul(X3, Z3);
        t1 = Fp2.add(t0, t0);
        t1 = Fp2.add(t1, t0);
        t2 = Fp2.mul(a, t2);
        t4 = Fp2.mul(b3, t4);
        t1 = Fp2.add(t1, t2);
        t2 = Fp2.sub(t0, t2);
        t2 = Fp2.mul(a, t2);
        t4 = Fp2.add(t4, t2);
        t0 = Fp2.mul(t1, t4);
        Y3 = Fp2.add(Y3, t0);
        t0 = Fp2.mul(t5, t4);
        X3 = Fp2.mul(t3, X3);
        X3 = Fp2.sub(X3, t0);
        t0 = Fp2.mul(t3, t1);
        Z3 = Fp2.mul(t5, Z3);
        Z3 = Fp2.add(Z3, t0);
        return new Point3(X3, Y3, Z3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      is0() {
        return this.equals(Point3.ZERO);
      }
      wNAF(n2) {
        return wnaf.wNAFCached(this, n2, Point3.normalizeZ);
      }
      /**
       * Non-constant-time multiplication. Uses double-and-add algorithm.
       * It's faster, but should only be used when you don't care about
       * an exposed private key e.g. sig verification, which works over *public* keys.
       */
      multiplyUnsafe(sc) {
        const { endo, n: N2 } = CURVE;
        aInRange2("scalar", sc, _0n15, N2);
        const I = Point3.ZERO;
        if (sc === _0n15)
          return I;
        if (this.is0() || sc === _1n15)
          return this;
        if (!endo || wnaf.hasPrecomputes(this))
          return wnaf.wNAFCachedUnsafe(this, sc, Point3.normalizeZ);
        let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
        let k1p = I;
        let k2p = I;
        let d = this;
        while (k1 > _0n15 || k2 > _0n15) {
          if (k1 & _1n15)
            k1p = k1p.add(d);
          if (k2 & _1n15)
            k2p = k2p.add(d);
          d = d.double();
          k1 >>= _1n15;
          k2 >>= _1n15;
        }
        if (k1neg)
          k1p = k1p.negate();
        if (k2neg)
          k2p = k2p.negate();
        k2p = new Point3(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        return k1p.add(k2p);
      }
      /**
       * Constant time multiplication.
       * Uses wNAF method. Windowed method may be 10% faster,
       * but takes 2x longer to generate and consumes 2x memory.
       * Uses precomputes when available.
       * Uses endomorphism for Koblitz curves.
       * @param scalar by which the point would be multiplied
       * @returns New point
       */
      multiply(scalar) {
        const { endo, n: N2 } = CURVE;
        aInRange2("scalar", scalar, _1n15, N2);
        let point, fake;
        if (endo) {
          const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
          let { p: k1p, f: f1p } = this.wNAF(k1);
          let { p: k2p, f: f2p } = this.wNAF(k2);
          k1p = wnaf.constTimeNegate(k1neg, k1p);
          k2p = wnaf.constTimeNegate(k2neg, k2p);
          k2p = new Point3(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
          point = k1p.add(k2p);
          fake = f1p.add(f2p);
        } else {
          const { p, f: f2 } = this.wNAF(scalar);
          point = p;
          fake = f2;
        }
        return Point3.normalizeZ([point, fake])[0];
      }
      /**
       * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
       * Not using Strauss-Shamir trick: precomputation tables are faster.
       * The trick could be useful if both P and Q are not G (not in our case).
       * @returns non-zero affine point
       */
      multiplyAndAddUnsafe(Q, a, b2) {
        const G = Point3.BASE;
        const mul3 = (P, a2) => a2 === _0n15 || a2 === _1n15 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
        const sum = mul3(this, a).add(mul3(Q, b2));
        return sum.is0() ? void 0 : sum;
      }
      // Converts Projective point to affine (x, y) coordinates.
      // Can accept precomputed Z^-1 - for example, from invertBatch.
      // (x, y, z) ∋ (x=x/z, y=y/z)
      toAffine(iz) {
        return toAffineMemo(this, iz);
      }
      isTorsionFree() {
        const { h: cofactor, isTorsionFree } = CURVE;
        if (cofactor === _1n15)
          return true;
        if (isTorsionFree)
          return isTorsionFree(Point3, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: cofactor, clearCofactor } = CURVE;
        if (cofactor === _1n15)
          return this;
        if (clearCofactor)
          return clearCofactor(Point3, this);
        return this.multiplyUnsafe(CURVE.h);
      }
      toRawBytes(isCompressed = true) {
        abool2("isCompressed", isCompressed);
        this.assertValidity();
        return toBytes5(Point3, this, isCompressed);
      }
      toHex(isCompressed = true) {
        abool2("isCompressed", isCompressed);
        return bytesToHex6(this.toRawBytes(isCompressed));
      }
    }
    Point3.BASE = new Point3(CURVE.Gx, CURVE.Gy, Fp2.ONE);
    Point3.ZERO = new Point3(Fp2.ZERO, Fp2.ONE, Fp2.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = wNAF3(Point3, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    return {
      CURVE,
      ProjectivePoint: Point3,
      normPrivateKeyToScalar,
      weierstrassEquation,
      isWithinCurveOrder
    };
  }
  function validateOpts2(curve) {
    const opts = validateBasic2(curve);
    validateObject3(opts, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    });
    return Object.freeze({ lowS: true, ...opts });
  }
  function weierstrass3(curveDef) {
    const CURVE = validateOpts2(curveDef);
    const { Fp: Fp2, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp2.BYTES + 1;
    const uncompressedLen = 2 * Fp2.BYTES + 1;
    function modN(a) {
      return mod3(a, CURVE_ORDER);
    }
    function invN(a) {
      return invert3(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point3, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints2({
      ...CURVE,
      toBytes(_c, point, isCompressed) {
        const a = point.toAffine();
        const x = Fp2.toBytes(a.x);
        const cat = concatBytes8;
        abool2("isCompressed", isCompressed);
        if (isCompressed) {
          return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
        } else {
          return cat(Uint8Array.from([4]), x, Fp2.toBytes(a.y));
        }
      },
      fromBytes(bytes2) {
        const len = bytes2.length;
        const head = bytes2[0];
        const tail = bytes2.subarray(1);
        if (len === compressedLen && (head === 2 || head === 3)) {
          const x = bytesToNumberBE3(tail);
          if (!inRange2(x, _1n15, Fp2.ORDER))
            throw new Error("Point is not on curve");
          const y2 = weierstrassEquation(x);
          let y;
          try {
            y = Fp2.sqrt(y2);
          } catch (sqrtError) {
            const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
            throw new Error("Point is not on curve" + suffix);
          }
          const isYOdd = (y & _1n15) === _1n15;
          const isHeadOdd = (head & 1) === 1;
          if (isHeadOdd !== isYOdd)
            y = Fp2.neg(y);
          return { x, y };
        } else if (len === uncompressedLen && head === 4) {
          const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
          const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
          return { x, y };
        } else {
          const cl = compressedLen;
          const ul = uncompressedLen;
          throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
        }
      }
    });
    const numToNByteHex = (num) => bytesToHex6(numberToBytesBE3(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number2) {
      const HALF = CURVE_ORDER >> _1n15;
      return number2 > HALF;
    }
    function normalizeS(s) {
      return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    const slcNum = (b2, from, to) => bytesToNumberBE3(b2.slice(from, to));
    class Signature2 {
      constructor(r, s, recovery) {
        aInRange2("r", r, _1n15, CURVE_ORDER);
        aInRange2("s", s, _1n15, CURVE_ORDER);
        this.r = r;
        this.s = s;
        if (recovery != null)
          this.recovery = recovery;
        Object.freeze(this);
      }
      // pair (bytes of r, bytes of s)
      static fromCompact(hex) {
        const l = CURVE.nByteLength;
        hex = ensureBytes2("compactSignature", hex, l * 2);
        return new Signature2(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
      }
      // DER encoded ECDSA signature
      // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
      static fromDER(hex) {
        const { r, s } = DER3.toSig(ensureBytes2("DER", hex));
        return new Signature2(r, s);
      }
      /**
       * @todo remove
       * @deprecated
       */
      assertValidity() {
      }
      addRecoveryBit(recovery) {
        return new Signature2(this.r, this.s, recovery);
      }
      recoverPublicKey(msgHash) {
        const { r, s, recovery: rec } = this;
        const h = bits2int_modN(ensureBytes2("msgHash", msgHash));
        if (rec == null || ![0, 1, 2, 3].includes(rec))
          throw new Error("recovery id invalid");
        const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
        if (radj >= Fp2.ORDER)
          throw new Error("recovery id 2 or 3 invalid");
        const prefix = (rec & 1) === 0 ? "02" : "03";
        const R = Point3.fromHex(prefix + numToNByteHex(radj));
        const ir = invN(radj);
        const u1 = modN(-h * ir);
        const u2 = modN(s * ir);
        const Q = Point3.BASE.multiplyAndAddUnsafe(R, u1, u2);
        if (!Q)
          throw new Error("point at infinify");
        Q.assertValidity();
        return Q;
      }
      // Signatures should be low-s, to prevent malleability.
      hasHighS() {
        return isBiggerThanHalfOrder(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new Signature2(this.r, modN(-this.s), this.recovery) : this;
      }
      // DER-encoded
      toDERRawBytes() {
        return hexToBytes6(this.toDERHex());
      }
      toDERHex() {
        return DER3.hexFromSig(this);
      }
      // padded bytes of r, then padded bytes of s
      toCompactRawBytes() {
        return hexToBytes6(this.toCompactHex());
      }
      toCompactHex() {
        return numToNByteHex(this.r) + numToNByteHex(this.s);
      }
    }
    const utils = {
      isValidPrivateKey(privateKey) {
        try {
          normPrivateKeyToScalar(privateKey);
          return true;
        } catch (error) {
          return false;
        }
      },
      normPrivateKeyToScalar,
      /**
       * Produces cryptographically secure private key from random of size
       * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
       */
      randomPrivateKey: () => {
        const length = getMinHashLength3(CURVE.n);
        return mapHashToField3(CURVE.randomBytes(length), CURVE.n);
      },
      /**
       * Creates precompute table for an arbitrary EC point. Makes point "cached".
       * Allows to massively speed-up `point.multiply(scalar)`.
       * @returns cached point
       * @example
       * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
       * fast.multiply(privKey); // much faster ECDH now
       */
      precompute(windowSize = 8, point = Point3.BASE) {
        point._setWindowSize(windowSize);
        point.multiply(BigInt(3));
        return point;
      }
    };
    function getPublicKey(privateKey, isCompressed = true) {
      return Point3.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    function isProbPub(item) {
      const arr = isBytes4(item);
      const str = typeof item === "string";
      const len = (arr || str) && item.length;
      if (arr)
        return len === compressedLen || len === uncompressedLen;
      if (str)
        return len === 2 * compressedLen || len === 2 * uncompressedLen;
      if (item instanceof Point3)
        return true;
      return false;
    }
    function getSharedSecret(privateA, publicB, isCompressed = true) {
      if (isProbPub(privateA))
        throw new Error("first arg must be private key");
      if (!isProbPub(publicB))
        throw new Error("second arg must be public key");
      const b2 = Point3.fromHex(publicB);
      return b2.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    const bits2int = CURVE.bits2int || function(bytes2) {
      if (bytes2.length > 8192)
        throw new Error("input is too large");
      const num = bytesToNumberBE3(bytes2);
      const delta = bytes2.length * 8 - CURVE.nBitLength;
      return delta > 0 ? num >> BigInt(delta) : num;
    };
    const bits2int_modN = CURVE.bits2int_modN || function(bytes2) {
      return modN(bits2int(bytes2));
    };
    const ORDER_MASK = bitMask3(CURVE.nBitLength);
    function int2octets(num) {
      aInRange2("num < 2^" + CURVE.nBitLength, num, _0n15, ORDER_MASK);
      return numberToBytesBE3(num, CURVE.nByteLength);
    }
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
      if (["recovered", "canonical"].some((k) => k in opts))
        throw new Error("sign() legacy options not supported");
      const { hash: hash3, randomBytes: randomBytes7 } = CURVE;
      let { lowS, prehash, extraEntropy: ent } = opts;
      if (lowS == null)
        lowS = true;
      msgHash = ensureBytes2("msgHash", msgHash);
      validateSigVerOpts(opts);
      if (prehash)
        msgHash = ensureBytes2("prehashed msgHash", hash3(msgHash));
      const h1int = bits2int_modN(msgHash);
      const d = normPrivateKeyToScalar(privateKey);
      const seedArgs = [int2octets(d), int2octets(h1int)];
      if (ent != null && ent !== false) {
        const e = ent === true ? randomBytes7(Fp2.BYTES) : ent;
        seedArgs.push(ensureBytes2("extraEntropy", e));
      }
      const seed = concatBytes8(...seedArgs);
      const m = h1int;
      function k2sig(kBytes) {
        const k = bits2int(kBytes);
        if (!isWithinCurveOrder(k))
          return;
        const ik = invN(k);
        const q = Point3.BASE.multiply(k).toAffine();
        const r = modN(q.x);
        if (r === _0n15)
          return;
        const s = modN(ik * modN(m + r * d));
        if (s === _0n15)
          return;
        let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n15);
        let normS = s;
        if (lowS && isBiggerThanHalfOrder(s)) {
          normS = normalizeS(s);
          recovery ^= 1;
        }
        return new Signature2(r, normS, recovery);
      }
      return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    function sign3(msgHash, privKey, opts = defaultSigOpts) {
      const { seed, k2sig } = prepSig(msgHash, privKey, opts);
      const C = CURVE;
      const drbg = createHmacDrbg3(C.hash.outputLen, C.nByteLength, C.hmac);
      return drbg(seed, k2sig);
    }
    Point3.BASE._setWindowSize(8);
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
      const sg = signature;
      msgHash = ensureBytes2("msgHash", msgHash);
      publicKey = ensureBytes2("publicKey", publicKey);
      const { lowS, prehash, format } = opts;
      validateSigVerOpts(opts);
      if ("strict" in opts)
        throw new Error("options.strict was renamed to lowS");
      if (format !== void 0 && format !== "compact" && format !== "der")
        throw new Error("format must be compact or der");
      const isHex = typeof sg === "string" || isBytes4(sg);
      const isObj = !isHex && !format && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
      if (!isHex && !isObj)
        throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      let _sig = void 0;
      let P;
      try {
        if (isObj)
          _sig = new Signature2(sg.r, sg.s);
        if (isHex) {
          try {
            if (format !== "compact")
              _sig = Signature2.fromDER(sg);
          } catch (derError) {
            if (!(derError instanceof DER3.Err))
              throw derError;
          }
          if (!_sig && format !== "der")
            _sig = Signature2.fromCompact(sg);
        }
        P = Point3.fromHex(publicKey);
      } catch (error) {
        return false;
      }
      if (!_sig)
        return false;
      if (lowS && _sig.hasHighS())
        return false;
      if (prehash)
        msgHash = CURVE.hash(msgHash);
      const { r, s } = _sig;
      const h = bits2int_modN(msgHash);
      const is = invN(s);
      const u1 = modN(h * is);
      const u2 = modN(r * is);
      const R = Point3.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
      if (!R)
        return false;
      const v = modN(R.x);
      return v === r;
    }
    return {
      CURVE,
      getPublicKey,
      getSharedSecret,
      sign: sign3,
      verify,
      ProjectivePoint: Point3,
      Signature: Signature2,
      utils
    };
  }

  // node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/_shortw_utils.js
  function getHash2(hash3) {
    return {
      hash: hash3,
      hmac: (key, ...msgs) => hmac3(hash3, key, concatBytes7(...msgs)),
      randomBytes: randomBytes6
    };
  }
  function createCurve2(curveDef, defHash) {
    const create = (hash3) => weierstrass3({ ...curveDef, ...getHash2(hash3) });
    return { ...create(defHash), create };
  }

  // node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/secp256k1.js
  var secp256k1P2 = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
  var secp256k1N2 = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
  var _1n16 = BigInt(1);
  var _2n12 = BigInt(2);
  var divNearest3 = (a, b2) => (a + b2 / _2n12) / b2;
  function sqrtMod3(y) {
    const P = secp256k1P2;
    const _3n7 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = y * y * y % P;
    const b3 = b2 * b2 * y % P;
    const b6 = pow23(b3, _3n7, P) * b3 % P;
    const b9 = pow23(b6, _3n7, P) * b3 % P;
    const b11 = pow23(b9, _2n12, P) * b2 % P;
    const b22 = pow23(b11, _11n, P) * b11 % P;
    const b44 = pow23(b22, _22n, P) * b22 % P;
    const b88 = pow23(b44, _44n, P) * b44 % P;
    const b176 = pow23(b88, _88n, P) * b88 % P;
    const b220 = pow23(b176, _44n, P) * b44 % P;
    const b223 = pow23(b220, _3n7, P) * b3 % P;
    const t1 = pow23(b223, _23n, P) * b22 % P;
    const t2 = pow23(t1, _6n, P) * b2 % P;
    const root = pow23(t2, _2n12, P);
    if (!Fpk12.eql(Fpk12.sqr(root), y))
      throw new Error("Cannot find square root");
    return root;
  }
  var Fpk12 = Field3(secp256k1P2, void 0, void 0, { sqrt: sqrtMod3 });
  var secp256k13 = createCurve2({
    a: BigInt(0),
    b: BigInt(7),
    Fp: Fpk12,
    n: secp256k1N2,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: true,
    // Allow only low-S signatures by default in sign() and verify()
    endo: {
      // Endomorphism, see above
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (k) => {
        const n2 = secp256k1N2;
        const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
        const b1 = -_1n16 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
        const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
        const b2 = a1;
        const POW_2_128 = BigInt("0x100000000000000000000000000000000");
        const c1 = divNearest3(b2 * k, n2);
        const c2 = divNearest3(-b1 * k, n2);
        let k1 = mod3(k - c1 * a1 - c2 * a2, n2);
        let k2 = mod3(-c1 * b1 - c2 * b2, n2);
        const k1neg = k1 > POW_2_128;
        const k2neg = k2 > POW_2_128;
        if (k1neg)
          k1 = n2 - k1;
        if (k2neg)
          k2 = n2 - k2;
        if (k1 > POW_2_128 || k2 > POW_2_128) {
          throw new Error("splitScalar: Endomorphism failed, k=" + k);
        }
        return { k1neg, k1, k2neg, k2 };
      }
    }
  }, sha2564);
  var _0n16 = BigInt(0);
  var Point2 = secp256k13.ProjectivePoint;

  // node_modules/eth-crypto/dist/es/util.js
  var util_exports = {};
  __export(util_exports, {
    addLeading0x: () => addLeading0x,
    hexToUnit8Array: () => hexToUnit8Array,
    removeLeading0x: () => removeLeading0x,
    uint8ArrayToHex: () => uint8ArrayToHex
  });
  function removeLeading0x(str) {
    if (str.startsWith("0x")) return str.substring(2);
    else return str;
  }
  function addLeading0x(str) {
    if (!str.startsWith("0x")) return "0x" + str;
    else return str;
  }
  function uint8ArrayToHex(arr) {
    return Buffer.from(arr).toString("hex");
  }
  function hexToUnit8Array(str) {
    return new Uint8Array(Buffer.from(str, "hex"));
  }

  // node_modules/eth-crypto/dist/es/public-key.js
  function compress(startsWith04) {
    var testBuffer = Buffer.from(startsWith04, "hex");
    if (testBuffer.length === 64) startsWith04 = "04" + startsWith04;
    return uint8ArrayToHex(secp256k13.ProjectivePoint.fromHex(hexToUnit8Array(startsWith04)).toRawBytes(true));
  }
  function decompress(startsWith02Or03) {
    var testBuffer = Buffer.from(startsWith02Or03, "hex");
    if (testBuffer.length === 64) startsWith02Or03 = "04" + startsWith02Or03;
    var decompressed = uint8ArrayToHex(secp256k13.ProjectivePoint.fromHex(hexToUnit8Array(startsWith02Or03)).toRawBytes(false));
    decompressed = decompressed.substring(2);
    return decompressed;
  }
  function toAddress(publicKey) {
    publicKey = decompress(publicKey);
    publicKey = addLeading0x(publicKey);
    var addressBuffer = pubToAddress(hexToBytes5(publicKey));
    var address = bytesToHex5(addressBuffer);
    var checkSumAdress = toChecksumAddress(addLeading0x(address));
    return checkSumAdress;
  }

  // node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
  function asyncGeneratorStep(n2, t, e, r, o, a, c) {
    try {
      var i = n2[a](c), u = i.value;
    } catch (n3) {
      return void e(n3);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n2) {
    return function() {
      var t = this, e = arguments;
      return new Promise(function(r, o) {
        var a = n2.apply(t, e);
        function _next(n3) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n3);
        }
        function _throw(n3) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n3);
        }
        _next(void 0);
      });
    };
  }

  // node_modules/eth-crypto/dist/es/decrypt-with-private-key.js
  var import_regenerator = __toESM(require_regenerator2());

  // node_modules/@noble/ciphers/esm/utils.js
  function isBytes5(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
  }
  function abytes5(b2, ...lengths) {
    if (!isBytes5(b2))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b2.length))
      throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b2.length);
  }
  function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function u323(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  }
  function clean3(...arrays) {
    for (let i = 0; i < arrays.length; i++) {
      arrays[i].fill(0);
    }
  }
  var isLE3 = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
  function overlapBytes(a, b2) {
    return a.buffer === b2.buffer && // best we can do, may fail with an obscure Proxy
    a.byteOffset < b2.byteOffset + b2.byteLength && // a starts before b end
    b2.byteOffset < a.byteOffset + a.byteLength;
  }
  function complexOverlapBytes(input, output2) {
    if (overlapBytes(input, output2) && input.byteOffset < output2.byteOffset)
      throw new Error("complex overlap of input and output is not supported");
  }
  var wrapCipher = /* @__NO_SIDE_EFFECTS__ */ (params, constructor) => {
    function wrappedCipher(key, ...args) {
      abytes5(key);
      if (!isLE3)
        throw new Error("Non little-endian hardware is not yet supported");
      if (params.nonceLength !== void 0) {
        const nonce = args[0];
        if (!nonce)
          throw new Error("nonce / iv required");
        if (params.varSizeNonce)
          abytes5(nonce);
        else
          abytes5(nonce, params.nonceLength);
      }
      const tagl = params.tagLength;
      if (tagl && args[1] !== void 0) {
        abytes5(args[1]);
      }
      const cipher = constructor(key, ...args);
      const checkOutput = (fnLength, output2) => {
        if (output2 !== void 0) {
          if (fnLength !== 2)
            throw new Error("cipher output not supported");
          abytes5(output2);
        }
      };
      let called = false;
      const wrCipher = {
        encrypt(data, output2) {
          if (called)
            throw new Error("cannot encrypt() twice with same key + nonce");
          called = true;
          abytes5(data);
          checkOutput(cipher.encrypt.length, output2);
          return cipher.encrypt(data, output2);
        },
        decrypt(data, output2) {
          abytes5(data);
          if (tagl && data.length < tagl)
            throw new Error("invalid ciphertext length: smaller than tagLength=" + tagl);
          checkOutput(cipher.decrypt.length, output2);
          return cipher.decrypt(data, output2);
        }
      };
      return wrCipher;
    }
    Object.assign(wrappedCipher, params);
    return wrappedCipher;
  };
  function getOutput(expectedLength, out, onlyAligned = true) {
    if (out === void 0)
      return new Uint8Array(expectedLength);
    if (out.length !== expectedLength)
      throw new Error("invalid output length, expected " + expectedLength + ", got: " + out.length);
    if (onlyAligned && !isAligned32(out))
      throw new Error("invalid output, must be aligned");
    return out;
  }
  function isAligned32(bytes2) {
    return bytes2.byteOffset % 4 === 0;
  }
  function copyBytes2(bytes2) {
    return Uint8Array.from(bytes2);
  }

  // node_modules/@noble/ciphers/esm/aes.js
  var BLOCK_SIZE = 16;
  var BLOCK_SIZE32 = 4;
  var POLY = 283;
  function mul2(n2) {
    return n2 << 1 ^ POLY & -(n2 >> 7);
  }
  function mul(a, b2) {
    let res = 0;
    for (; b2 > 0; b2 >>= 1) {
      res ^= a & -(b2 & 1);
      a = mul2(a);
    }
    return res;
  }
  var sbox = /* @__PURE__ */ (() => {
    const t = new Uint8Array(256);
    for (let i = 0, x = 1; i < 256; i++, x ^= mul2(x))
      t[i] = x;
    const box = new Uint8Array(256);
    box[0] = 99;
    for (let i = 0; i < 255; i++) {
      let x = t[255 - i];
      x |= x << 8;
      box[t[i]] = (x ^ x >> 4 ^ x >> 5 ^ x >> 6 ^ x >> 7 ^ 99) & 255;
    }
    clean3(t);
    return box;
  })();
  var invSbox = /* @__PURE__ */ sbox.map((_, j) => sbox.indexOf(j));
  var rotr32_8 = (n2) => n2 << 24 | n2 >>> 8;
  var rotl32_8 = (n2) => n2 << 8 | n2 >>> 24;
  function genTtable(sbox2, fn) {
    if (sbox2.length !== 256)
      throw new Error("Wrong sbox length");
    const T0 = new Uint32Array(256).map((_, j) => fn(sbox2[j]));
    const T12 = T0.map(rotl32_8);
    const T22 = T12.map(rotl32_8);
    const T32 = T22.map(rotl32_8);
    const T01 = new Uint32Array(256 * 256);
    const T23 = new Uint32Array(256 * 256);
    const sbox22 = new Uint16Array(256 * 256);
    for (let i = 0; i < 256; i++) {
      for (let j = 0; j < 256; j++) {
        const idx = i * 256 + j;
        T01[idx] = T0[i] ^ T12[j];
        T23[idx] = T22[i] ^ T32[j];
        sbox22[idx] = sbox2[i] << 8 | sbox2[j];
      }
    }
    return { sbox: sbox2, sbox2: sbox22, T0, T1: T12, T2: T22, T3: T32, T01, T23 };
  }
  var tableEncoding = /* @__PURE__ */ genTtable(sbox, (s) => mul(s, 3) << 24 | s << 16 | s << 8 | mul(s, 2));
  var tableDecoding = /* @__PURE__ */ genTtable(invSbox, (s) => mul(s, 11) << 24 | mul(s, 13) << 16 | mul(s, 9) << 8 | mul(s, 14));
  var xPowers = /* @__PURE__ */ (() => {
    const p = new Uint8Array(16);
    for (let i = 0, x = 1; i < 16; i++, x = mul2(x))
      p[i] = x;
    return p;
  })();
  function expandKeyLE(key) {
    abytes5(key);
    const len = key.length;
    if (![16, 24, 32].includes(len))
      throw new Error("aes: invalid key size, should be 16, 24 or 32, got " + len);
    const { sbox2 } = tableEncoding;
    const toClean = [];
    if (!isAligned32(key))
      toClean.push(key = copyBytes2(key));
    const k32 = u323(key);
    const Nk = k32.length;
    const subByte = (n2) => applySbox(sbox2, n2, n2, n2, n2);
    const xk = new Uint32Array(len + 28);
    xk.set(k32);
    for (let i = Nk; i < xk.length; i++) {
      let t = xk[i - 1];
      if (i % Nk === 0)
        t = subByte(rotr32_8(t)) ^ xPowers[i / Nk - 1];
      else if (Nk > 6 && i % Nk === 4)
        t = subByte(t);
      xk[i] = xk[i - Nk] ^ t;
    }
    clean3(...toClean);
    return xk;
  }
  function expandKeyDecLE(key) {
    const encKey = expandKeyLE(key);
    const xk = encKey.slice();
    const Nk = encKey.length;
    const { sbox2 } = tableEncoding;
    const { T0, T1: T12, T2: T22, T3: T32 } = tableDecoding;
    for (let i = 0; i < Nk; i += 4) {
      for (let j = 0; j < 4; j++)
        xk[i + j] = encKey[Nk - i - 4 + j];
    }
    clean3(encKey);
    for (let i = 4; i < Nk - 4; i++) {
      const x = xk[i];
      const w = applySbox(sbox2, x, x, x, x);
      xk[i] = T0[w & 255] ^ T12[w >>> 8 & 255] ^ T22[w >>> 16 & 255] ^ T32[w >>> 24];
    }
    return xk;
  }
  function apply0123(T01, T23, s0, s1, s2, s3) {
    return T01[s0 << 8 & 65280 | s1 >>> 8 & 255] ^ T23[s2 >>> 8 & 65280 | s3 >>> 24 & 255];
  }
  function applySbox(sbox2, s0, s1, s2, s3) {
    return sbox2[s0 & 255 | s1 & 65280] | sbox2[s2 >>> 16 & 255 | s3 >>> 16 & 65280] << 16;
  }
  function encrypt(xk, s0, s1, s2, s3) {
    const { sbox2, T01, T23 } = tableEncoding;
    let k = 0;
    s0 ^= xk[k++], s1 ^= xk[k++], s2 ^= xk[k++], s3 ^= xk[k++];
    const rounds = xk.length / 4 - 2;
    for (let i = 0; i < rounds; i++) {
      const t02 = xk[k++] ^ apply0123(T01, T23, s0, s1, s2, s3);
      const t12 = xk[k++] ^ apply0123(T01, T23, s1, s2, s3, s0);
      const t22 = xk[k++] ^ apply0123(T01, T23, s2, s3, s0, s1);
      const t32 = xk[k++] ^ apply0123(T01, T23, s3, s0, s1, s2);
      s0 = t02, s1 = t12, s2 = t22, s3 = t32;
    }
    const t0 = xk[k++] ^ applySbox(sbox2, s0, s1, s2, s3);
    const t1 = xk[k++] ^ applySbox(sbox2, s1, s2, s3, s0);
    const t2 = xk[k++] ^ applySbox(sbox2, s2, s3, s0, s1);
    const t3 = xk[k++] ^ applySbox(sbox2, s3, s0, s1, s2);
    return { s0: t0, s1: t1, s2: t2, s3: t3 };
  }
  function decrypt2(xk, s0, s1, s2, s3) {
    const { sbox2, T01, T23 } = tableDecoding;
    let k = 0;
    s0 ^= xk[k++], s1 ^= xk[k++], s2 ^= xk[k++], s3 ^= xk[k++];
    const rounds = xk.length / 4 - 2;
    for (let i = 0; i < rounds; i++) {
      const t02 = xk[k++] ^ apply0123(T01, T23, s0, s3, s2, s1);
      const t12 = xk[k++] ^ apply0123(T01, T23, s1, s0, s3, s2);
      const t22 = xk[k++] ^ apply0123(T01, T23, s2, s1, s0, s3);
      const t32 = xk[k++] ^ apply0123(T01, T23, s3, s2, s1, s0);
      s0 = t02, s1 = t12, s2 = t22, s3 = t32;
    }
    const t0 = xk[k++] ^ applySbox(sbox2, s0, s3, s2, s1);
    const t1 = xk[k++] ^ applySbox(sbox2, s1, s0, s3, s2);
    const t2 = xk[k++] ^ applySbox(sbox2, s2, s1, s0, s3);
    const t3 = xk[k++] ^ applySbox(sbox2, s3, s2, s1, s0);
    return { s0: t0, s1: t1, s2: t2, s3: t3 };
  }
  function ctrCounter(xk, nonce, src, dst) {
    abytes5(nonce, BLOCK_SIZE);
    abytes5(src);
    const srcLen = src.length;
    dst = getOutput(srcLen, dst);
    complexOverlapBytes(src, dst);
    const ctr2 = nonce;
    const c32 = u323(ctr2);
    let { s0, s1, s2, s3 } = encrypt(xk, c32[0], c32[1], c32[2], c32[3]);
    const src32 = u323(src);
    const dst32 = u323(dst);
    for (let i = 0; i + 4 <= src32.length; i += 4) {
      dst32[i + 0] = src32[i + 0] ^ s0;
      dst32[i + 1] = src32[i + 1] ^ s1;
      dst32[i + 2] = src32[i + 2] ^ s2;
      dst32[i + 3] = src32[i + 3] ^ s3;
      let carry = 1;
      for (let i2 = ctr2.length - 1; i2 >= 0; i2--) {
        carry = carry + (ctr2[i2] & 255) | 0;
        ctr2[i2] = carry & 255;
        carry >>>= 8;
      }
      ({ s0, s1, s2, s3 } = encrypt(xk, c32[0], c32[1], c32[2], c32[3]));
    }
    const start = BLOCK_SIZE * Math.floor(src32.length / BLOCK_SIZE32);
    if (start < srcLen) {
      const b32 = new Uint32Array([s0, s1, s2, s3]);
      const buf = u8(b32);
      for (let i = start, pos = 0; i < srcLen; i++, pos++)
        dst[i] = src[i] ^ buf[pos];
      clean3(b32);
    }
    return dst;
  }
  var ctr = /* @__PURE__ */ wrapCipher({ blockSize: 16, nonceLength: 16 }, function aesctr(key, nonce) {
    function processCtr(buf, dst) {
      abytes5(buf);
      if (dst !== void 0) {
        abytes5(dst);
        if (!isAligned32(dst))
          throw new Error("unaligned destination");
      }
      const xk = expandKeyLE(key);
      const n2 = copyBytes2(nonce);
      const toClean = [xk, n2];
      if (!isAligned32(buf))
        toClean.push(buf = copyBytes2(buf));
      const out = ctrCounter(xk, n2, buf, dst);
      clean3(...toClean);
      return out;
    }
    return {
      encrypt: (plaintext, dst) => processCtr(plaintext, dst),
      decrypt: (ciphertext, dst) => processCtr(ciphertext, dst)
    };
  });
  function validateBlockDecrypt(data) {
    abytes5(data);
    if (data.length % BLOCK_SIZE !== 0) {
      throw new Error("aes-(cbc/ecb).decrypt ciphertext should consist of blocks with size " + BLOCK_SIZE);
    }
  }
  function validateBlockEncrypt(plaintext, pcks5, dst) {
    abytes5(plaintext);
    let outLen = plaintext.length;
    const remaining = outLen % BLOCK_SIZE;
    if (!pcks5 && remaining !== 0)
      throw new Error("aec/(cbc-ecb): unpadded plaintext with disabled padding");
    if (!isAligned32(plaintext))
      plaintext = copyBytes2(plaintext);
    const b2 = u323(plaintext);
    if (pcks5) {
      let left = BLOCK_SIZE - remaining;
      if (!left)
        left = BLOCK_SIZE;
      outLen = outLen + left;
    }
    dst = getOutput(outLen, dst);
    complexOverlapBytes(plaintext, dst);
    const o = u323(dst);
    return { b: b2, o, out: dst };
  }
  function validatePCKS(data, pcks5) {
    if (!pcks5)
      return data;
    const len = data.length;
    if (!len)
      throw new Error("aes/pcks5: empty ciphertext not allowed");
    const lastByte = data[len - 1];
    if (lastByte <= 0 || lastByte > 16)
      throw new Error("aes/pcks5: wrong padding");
    const out = data.subarray(0, -lastByte);
    for (let i = 0; i < lastByte; i++)
      if (data[len - i - 1] !== lastByte)
        throw new Error("aes/pcks5: wrong padding");
    return out;
  }
  function padPCKS(left) {
    const tmp = new Uint8Array(16);
    const tmp32 = u323(tmp);
    tmp.set(left);
    const paddingByte = BLOCK_SIZE - left.length;
    for (let i = BLOCK_SIZE - paddingByte; i < BLOCK_SIZE; i++)
      tmp[i] = paddingByte;
    return tmp32;
  }
  var cbc = /* @__PURE__ */ wrapCipher({ blockSize: 16, nonceLength: 16 }, function aescbc(key, iv, opts = {}) {
    const pcks5 = !opts.disablePadding;
    return {
      encrypt(plaintext, dst) {
        const xk = expandKeyLE(key);
        const { b: b2, o, out: _out } = validateBlockEncrypt(plaintext, pcks5, dst);
        let _iv = iv;
        const toClean = [xk];
        if (!isAligned32(_iv))
          toClean.push(_iv = copyBytes2(_iv));
        const n32 = u323(_iv);
        let s0 = n32[0], s1 = n32[1], s2 = n32[2], s3 = n32[3];
        let i = 0;
        for (; i + 4 <= b2.length; ) {
          s0 ^= b2[i + 0], s1 ^= b2[i + 1], s2 ^= b2[i + 2], s3 ^= b2[i + 3];
          ({ s0, s1, s2, s3 } = encrypt(xk, s0, s1, s2, s3));
          o[i++] = s0, o[i++] = s1, o[i++] = s2, o[i++] = s3;
        }
        if (pcks5) {
          const tmp32 = padPCKS(plaintext.subarray(i * 4));
          s0 ^= tmp32[0], s1 ^= tmp32[1], s2 ^= tmp32[2], s3 ^= tmp32[3];
          ({ s0, s1, s2, s3 } = encrypt(xk, s0, s1, s2, s3));
          o[i++] = s0, o[i++] = s1, o[i++] = s2, o[i++] = s3;
        }
        clean3(...toClean);
        return _out;
      },
      decrypt(ciphertext, dst) {
        validateBlockDecrypt(ciphertext);
        const xk = expandKeyDecLE(key);
        let _iv = iv;
        const toClean = [xk];
        if (!isAligned32(_iv))
          toClean.push(_iv = copyBytes2(_iv));
        const n32 = u323(_iv);
        dst = getOutput(ciphertext.length, dst);
        if (!isAligned32(ciphertext))
          toClean.push(ciphertext = copyBytes2(ciphertext));
        complexOverlapBytes(ciphertext, dst);
        const b2 = u323(ciphertext);
        const o = u323(dst);
        let s0 = n32[0], s1 = n32[1], s2 = n32[2], s3 = n32[3];
        for (let i = 0; i + 4 <= b2.length; ) {
          const ps0 = s0, ps1 = s1, ps2 = s2, ps3 = s3;
          s0 = b2[i + 0], s1 = b2[i + 1], s2 = b2[i + 2], s3 = b2[i + 3];
          const { s0: o0, s1: o1, s2: o2, s3: o3 } = decrypt2(xk, s0, s1, s2, s3);
          o[i++] = o0 ^ ps0, o[i++] = o1 ^ ps1, o[i++] = o2 ^ ps2, o[i++] = o3 ^ ps3;
        }
        clean3(...toClean);
        return validatePCKS(dst, pcks5);
      }
    };
  });

  // node_modules/ethereum-cryptography/esm/aes.js
  function getCipher(key, iv, mode, pkcs7PaddingEnabled = true) {
    if (!mode.startsWith("aes-")) {
      throw new Error("AES: unsupported mode");
    }
    const len = key.length;
    if (mode.startsWith("aes-128") && len !== 16 || mode.startsWith("aes-256") && len !== 32) {
      throw new Error("AES: wrong key length");
    }
    if (iv.length !== 16) {
      throw new Error("AES: wrong IV length");
    }
    if (["aes-128-cbc", "aes-256-cbc"].includes(mode)) {
      return cbc(key, iv, { disablePadding: !pkcs7PaddingEnabled });
    }
    if (["aes-128-ctr", "aes-256-ctr"].includes(mode)) {
      return ctr(key, iv);
    }
    throw new Error("AES: unsupported mode");
  }
  function encrypt2(msg, key, iv, mode = "aes-128-ctr", pkcs7PaddingEnabled = true) {
    return getCipher(key, iv, mode, pkcs7PaddingEnabled).encrypt(msg);
  }
  function decrypt3(ciphertext, key, iv, mode = "aes-128-ctr", pkcs7PaddingEnabled = true) {
    return getCipher(key, iv, mode, pkcs7PaddingEnabled).decrypt(ciphertext);
  }

  // node_modules/eth-crypto/dist/es/cipher.js
  var cipher_exports = {};
  __export(cipher_exports, {
    parse: () => parse,
    stringify: () => stringify2
  });
  function stringify2(cipher) {
    if (typeof cipher === "string") return cipher;
    var compressedKey = compress(cipher.ephemPublicKey);
    var ret = Buffer.concat([
      Buffer.from(cipher.iv, "hex"),
      // 16bit
      Buffer.from(compressedKey, "hex"),
      // 33bit
      Buffer.from(cipher.mac, "hex"),
      // 32bit
      Buffer.from(cipher.ciphertext, "hex")
      // var bit
    ]);
    return ret.toString("hex");
  }
  function parse(str) {
    if (typeof str !== "string") return str;
    var buf = Buffer.from(str, "hex");
    var ret = {
      iv: buf.toString("hex", 0, 16),
      ephemPublicKey: buf.toString("hex", 16, 49),
      mac: buf.toString("hex", 49, 81),
      ciphertext: buf.toString("hex", 81, buf.length)
    };
    ret.ephemPublicKey = "04" + decompress(ret.ephemPublicKey);
    return ret;
  }

  // node_modules/eth-crypto/dist/es/decrypt-with-private-key.js
  function equalBytes3(a, b2) {
    if (a.length !== b2.length) return false;
    var diff = 0;
    for (var i = 0; i < a.length; i++) diff |= a[i] ^ b2[i];
    return diff === 0;
  }
  function decryptWithPrivateKey(_x, _x2) {
    return _decryptWithPrivateKey.apply(this, arguments);
  }
  function _decryptWithPrivateKey() {
    _decryptWithPrivateKey = _asyncToGenerator(/* @__PURE__ */ import_regenerator.default.mark(function _callee(privateKey, encrypted) {
      var twoStripped, privKeyBytes, ephemPubKey, iv, ciphertext, storedMac, sharedSecret, hash3, encKey, macKey, dataToMac, computedMac, decrypted;
      return import_regenerator.default.wrap(function(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            encrypted = parse(encrypted);
            twoStripped = removeLeading0x(privateKey);
            privKeyBytes = new Uint8Array(Buffer.from(twoStripped, "hex"));
            ephemPubKey = new Uint8Array(Buffer.from(encrypted.ephemPublicKey, "hex"));
            iv = new Uint8Array(Buffer.from(encrypted.iv, "hex"));
            ciphertext = new Uint8Array(Buffer.from(encrypted.ciphertext, "hex"));
            storedMac = new Uint8Array(Buffer.from(encrypted.mac, "hex"));
            sharedSecret = secp256k13.getSharedSecret(privKeyBytes, ephemPubKey, true).slice(1);
            hash3 = sha5123(sharedSecret);
            encKey = hash3.slice(0, 32);
            macKey = hash3.slice(32);
            dataToMac = concatBytes3(iv, ephemPubKey, ciphertext);
            computedMac = hmac2(sha2563, macKey, dataToMac);
            if (equalBytes3(storedMac, computedMac)) {
              _context.next = 1;
              break;
            }
            throw new Error("Bad MAC");
          case 1:
            _context.next = 2;
            return decrypt3(ciphertext, encKey, iv, "aes-256-cbc");
          case 2:
            decrypted = _context.sent;
            return _context.abrupt("return", Buffer.from(decrypted).toString());
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _decryptWithPrivateKey.apply(this, arguments);
  }

  // node_modules/eth-crypto/dist/es/encrypt-with-public-key.js
  var import_regenerator2 = __toESM(require_regenerator2());
  function encryptWithPublicKey(_x, _x2, _x3) {
    return _encryptWithPublicKey.apply(this, arguments);
  }
  function _encryptWithPublicKey() {
    _encryptWithPublicKey = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee(publicKey, message, opts) {
      var pubKeyBytes, ephemPrivKey, ephemPubKey, sharedSecret, hash3, encKey, macKey, iv, msgBytes, ciphertext, dataToMac, mac, _t, _t2;
      return import_regenerator2.default.wrap(function(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            publicKey = decompress(publicKey);
            pubKeyBytes = new Uint8Array(Buffer.from("04" + publicKey, "hex"));
            opts = opts || {};
            ephemPrivKey = opts.ephemPrivateKey ? new Uint8Array(Buffer.from(opts.ephemPrivateKey)) : randomBytes4(32);
            while (!secp256k13.utils.isValidPrivateKey(ephemPrivKey)) {
              ephemPrivKey = randomBytes4(32);
            }
            ephemPubKey = secp256k13.getPublicKey(ephemPrivKey, false);
            sharedSecret = secp256k13.getSharedSecret(ephemPrivKey, pubKeyBytes, true).slice(1);
            hash3 = sha5123(sharedSecret);
            encKey = hash3.slice(0, 32);
            macKey = hash3.slice(32);
            iv = opts.iv ? new Uint8Array(Buffer.from(opts.iv)) : randomBytes4(16);
            msgBytes = new Uint8Array(Buffer.from(message));
            _t = Uint8Array;
            _context.next = 1;
            return encrypt2(msgBytes, encKey, iv, "aes-256-cbc");
          case 1:
            _t2 = _context.sent;
            ciphertext = new _t(_t2);
            dataToMac = concatBytes3(iv, ephemPubKey, ciphertext);
            mac = hmac2(sha2563, macKey, dataToMac);
            return _context.abrupt("return", {
              iv: Buffer.from(iv).toString("hex"),
              ephemPublicKey: Buffer.from(ephemPubKey).toString("hex"),
              ciphertext: Buffer.from(ciphertext).toString("hex"),
              mac: Buffer.from(mac).toString("hex")
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _encryptWithPublicKey.apply(this, arguments);
  }

  // node_modules/eth-crypto/dist/es/public-key-by-private-key.js
  function publicKeyByPrivateKey(privateKey) {
    privateKey = addLeading0x(privateKey);
    var publicKeyBuffer = privateToPublic(hexToBytes5(privateKey));
    var ret = removeLeading0x(bytesToHex5(publicKeyBuffer));
    return ret;
  }

  // node_modules/eth-crypto/dist/es/recover-public-key.js
  function recoverPublicKey(signature, hash3) {
    signature = removeLeading0x(signature);
    var sigOnly = signature.substring(0, signature.length - 2);
    var vValue = signature.slice(-2);
    var recoveryNumber = vValue === "1c" ? 1 : 0;
    var point = secp256k13.Signature.fromCompact(hexToUnit8Array(sigOnly)).addRecoveryBit(recoveryNumber).recoverPublicKey(hexToUnit8Array(removeLeading0x(hash3)));
    var pubKey = uint8ArrayToHex(point.toRawBytes(false));
    pubKey = pubKey.slice(2);
    return pubKey;
  }

  // node_modules/eth-crypto/dist/es/recover.js
  function recover(sigString, hash3) {
    var pubkey = recoverPublicKey(sigString, hash3);
    var address = toAddress(pubkey);
    return address;
  }

  // node_modules/eth-crypto/dist/es/sign.js
  function sign(privateKey, hash3) {
    hash3 = addLeading0x(hash3);
    if (hash3.length !== 66) throw new Error("EthCrypto.sign(): Can only sign hashes, given: " + hash3);
    var sig = secp256k13.sign(new Uint8Array(Buffer.from(removeLeading0x(hash3), "hex")), new Uint8Array(Buffer.from(removeLeading0x(privateKey), "hex")));
    var recoveryId = sig.recovery === 1 ? "1c" : "1b";
    var newSignature = "0x" + Buffer.from(sig.toCompactRawBytes()).toString("hex") + recoveryId;
    return newSignature;
  }

  // node_modules/eth-crypto/dist/es/sign-transaction.js
  var import_regenerator3 = __toESM(require_regenerator2());

  // node_modules/@ethereumjs/tx/dist/esm/types.js
  var Capability = {
    /**
     * Tx supports EIP-155 replay protection
     * See: [155](https://eips.ethereum.org/EIPS/eip-155) Replay Attack Protection EIP
     */
    EIP155ReplayProtection: 155,
    /**
     * Tx supports EIP-1559 gas fee market mechanism
     * See: [1559](https://eips.ethereum.org/EIPS/eip-1559) Fee Market EIP
     */
    EIP1559FeeMarket: 1559,
    /**
     * Tx is a typed transaction as defined in EIP-2718
     * See: [2718](https://eips.ethereum.org/EIPS/eip-2718) Transaction Type EIP
     */
    EIP2718TypedTransaction: 2718,
    /**
     * Tx supports access list generation as defined in EIP-2930
     * See: [2930](https://eips.ethereum.org/EIPS/eip-2930) Access Lists EIP
     */
    EIP2930AccessLists: 2930,
    /**
     * Tx supports setting EOA code
     * See [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702)
     */
    EIP7702EOACode: 7702
  };
  function isAccessListBytes(input) {
    if (input.length === 0) {
      return true;
    }
    const firstItem = input[0];
    if (Array.isArray(firstItem)) {
      return true;
    }
    return false;
  }
  function isAccessList(input) {
    return !isAccessListBytes(input);
  }
  var TransactionType = {
    Legacy: 0,
    AccessListEIP2930: 1,
    FeeMarketEIP1559: 2,
    BlobEIP4844: 3,
    EOACodeEIP7702: 4
  };
  function isLegacyTxData(txData) {
    const txType = Number(bytesToBigInt(toBytes3(txData.type)));
    return txType === TransactionType.Legacy;
  }
  function isAccessList2930TxData(txData) {
    const txType = Number(bytesToBigInt(toBytes3(txData.type)));
    return txType === TransactionType.AccessListEIP2930;
  }
  function isFeeMarket1559TxData(txData) {
    const txType = Number(bytesToBigInt(toBytes3(txData.type)));
    return txType === TransactionType.FeeMarketEIP1559;
  }
  function isBlob4844TxData(txData) {
    const txType = Number(bytesToBigInt(toBytes3(txData.type)));
    return txType === TransactionType.BlobEIP4844;
  }
  function isEOACode7702TxData(txData) {
    const txType = Number(bytesToBigInt(toBytes3(txData.type)));
    return txType === TransactionType.EOACodeEIP7702;
  }

  // node_modules/@ethereumjs/common/dist/esm/chains.js
  var Mainnet = {
    name: "mainnet",
    chainId: 1,
    defaultHardfork: "prague",
    consensus: {
      type: "pow",
      algorithm: "ethash",
      ethash: {}
    },
    comment: "The Ethereum main chain",
    url: "https://ethstats.net/",
    genesis: {
      gasLimit: 5e3,
      difficulty: 17179869184,
      nonce: "0x0000000000000042",
      extraData: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"
    },
    depositContractAddress: "0x00000000219ab540356cBB839Cbe05303d7705Fa",
    hardforks: [
      {
        name: "chainstart",
        block: 0,
        forkHash: "0xfc64ec04"
      },
      {
        name: "homestead",
        block: 115e4,
        forkHash: "0x97c2c34c"
      },
      {
        name: "dao",
        block: 192e4,
        forkHash: "0x91d1f948"
      },
      {
        name: "tangerineWhistle",
        block: 2463e3,
        forkHash: "0x7a64da13"
      },
      {
        name: "spuriousDragon",
        block: 2675e3,
        forkHash: "0x3edd5b10"
      },
      {
        name: "byzantium",
        block: 437e4,
        forkHash: "0xa00bc324"
      },
      {
        name: "constantinople",
        block: 728e4,
        forkHash: "0x668db0af"
      },
      {
        name: "petersburg",
        block: 728e4,
        forkHash: "0x668db0af"
      },
      {
        name: "istanbul",
        block: 9069e3,
        forkHash: "0x879d6e30"
      },
      {
        name: "muirGlacier",
        block: 92e5,
        forkHash: "0xe029e991"
      },
      {
        name: "berlin",
        block: 12244e3,
        forkHash: "0x0eb440f6"
      },
      {
        name: "london",
        block: 12965e3,
        forkHash: "0xb715077d"
      },
      {
        name: "arrowGlacier",
        block: 13773e3,
        forkHash: "0x20c327fc"
      },
      {
        name: "grayGlacier",
        block: 1505e4,
        forkHash: "0xf0afd0e3"
      },
      {
        // The forkHash will remain same as mergeNetsplitBlock is post merge
        // terminal block: https://etherscan.io/block/15537393
        name: "paris",
        block: 15537394,
        forkHash: "0xf0afd0e3"
      },
      {
        name: "mergeNetsplitBlock",
        block: null,
        forkHash: null
      },
      {
        name: "shanghai",
        block: null,
        timestamp: "1681338455",
        forkHash: "0xdce96c2d"
      },
      {
        name: "cancun",
        block: null,
        timestamp: "1710338135",
        forkHash: "0x9f3d2254"
      },
      {
        name: "prague",
        block: null,
        timestamp: "1746612311",
        forkHash: "0xc376cf8b"
      },
      {
        name: "osaka",
        block: null,
        timestamp: "1764798551",
        forkHash: "0x5167e2a6"
      },
      {
        name: "bpo1",
        block: null,
        timestamp: "1765290071",
        forkHash: "0xcba2a1c0"
      },
      {
        name: "bpo2",
        block: null,
        timestamp: "1767747671",
        forkHash: "0x07c9462e"
      },
      {
        name: "amsterdam",
        block: null
      }
    ],
    bootstrapNodes: [
      {
        ip: "18.138.108.67",
        port: 30303,
        id: "d860a01f9722d78051619d1e2351aba3f43f943f6f00718d1b9baa4101932a1f5011f16bb2b1bb35db20d6fe28fa0bf09636d26a87d31de9ec6203eeedb1f666",
        location: "ap-southeast-1-001",
        comment: "bootnode-aws-ap-southeast-1-001"
      },
      {
        ip: "3.209.45.79",
        port: 30303,
        id: "22a8232c3abc76a16ae9d6c3b164f98775fe226f0917b0ca871128a74a8e9630b458460865bab457221f1d448dd9791d24c4e5d88786180ac185df813a68d4de",
        location: "us-east-1-001",
        comment: "bootnode-aws-us-east-1-001"
      },
      {
        ip: "65.108.70.101",
        port: 30303,
        id: "2b252ab6a1d0f971d9722cb839a42cb81db019ba44c08754628ab4a823487071b5695317c8ccd085219c3a03af063495b2f1da8d18218da2d6a82981b45e6ffc",
        location: "eu-west-1-001",
        comment: "bootnode-hetzner-hel"
      },
      {
        ip: "157.90.35.166",
        port: 30303,
        id: "4aeb4ab6c14b23e2c4cfdce879c04b0748a20d8e9b59e25ded2a08143e265c6c25936e74cbc8e641e3312ca288673d91f2f93f8e277de3cfa444ecdaaf982052",
        location: "eu-central-1-001",
        comment: "bootnode-hetzner-fsn"
      }
    ],
    dnsNetworks: [
      "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"
    ]
  };

  // node_modules/eventemitter3/index.mjs
  var import_index = __toESM(require_eventemitter3(), 1);

  // node_modules/@ethereumjs/common/dist/esm/crc.js
  var TABLE = [
    0,
    1996959894,
    3993919788,
    2567524794,
    124634137,
    1886057615,
    3915621685,
    2657392035,
    249268274,
    2044508324,
    3772115230,
    2547177864,
    162941995,
    2125561021,
    3887607047,
    2428444049,
    498536548,
    1789927666,
    4089016648,
    2227061214,
    450548861,
    1843258603,
    4107580753,
    2211677639,
    325883990,
    1684777152,
    4251122042,
    2321926636,
    335633487,
    1661365465,
    4195302755,
    2366115317,
    997073096,
    1281953886,
    3579855332,
    2724688242,
    1006888145,
    1258607687,
    3524101629,
    2768942443,
    901097722,
    1119000684,
    3686517206,
    2898065728,
    853044451,
    1172266101,
    3705015759,
    2882616665,
    651767980,
    1373503546,
    3369554304,
    3218104598,
    565507253,
    1454621731,
    3485111705,
    3099436303,
    671266974,
    1594198024,
    3322730930,
    2970347812,
    795835527,
    1483230225,
    3244367275,
    3060149565,
    1994146192,
    31158534,
    2563907772,
    4023717930,
    1907459465,
    112637215,
    2680153253,
    3904427059,
    2013776290,
    251722036,
    2517215374,
    3775830040,
    2137656763,
    141376813,
    2439277719,
    3865271297,
    1802195444,
    476864866,
    2238001368,
    4066508878,
    1812370925,
    453092731,
    2181625025,
    4111451223,
    1706088902,
    314042704,
    2344532202,
    4240017532,
    1658658271,
    366619977,
    2362670323,
    4224994405,
    1303535960,
    984961486,
    2747007092,
    3569037538,
    1256170817,
    1037604311,
    2765210733,
    3554079995,
    1131014506,
    879679996,
    2909243462,
    3663771856,
    1141124467,
    855842277,
    2852801631,
    3708648649,
    1342533948,
    654459306,
    3188396048,
    3373015174,
    1466479909,
    544179635,
    3110523913,
    3462522015,
    1591671054,
    702138776,
    2966460450,
    3352799412,
    1504918807,
    783551873,
    3082640443,
    3233442989,
    3988292384,
    2596254646,
    62317068,
    1957810842,
    3939845945,
    2647816111,
    81470997,
    1943803523,
    3814918930,
    2489596804,
    225274430,
    2053790376,
    3826175755,
    2466906013,
    167816743,
    2097651377,
    4027552580,
    2265490386,
    503444072,
    1762050814,
    4150417245,
    2154129355,
    426522225,
    1852507879,
    4275313526,
    2312317920,
    282753626,
    1742555852,
    4189708143,
    2394877945,
    397917763,
    1622183637,
    3604390888,
    2714866558,
    953729732,
    1340076626,
    3518719985,
    2797360999,
    1068828381,
    1219638859,
    3624741850,
    2936675148,
    906185462,
    1090812512,
    3747672003,
    2825379669,
    829329135,
    1181335161,
    3412177804,
    3160834842,
    628085408,
    1382605366,
    3423369109,
    3138078467,
    570562233,
    1426400815,
    3317316542,
    2998733608,
    733239954,
    1555261956,
    3268935591,
    3050360625,
    752459403,
    1541320221,
    2607071920,
    3965973030,
    1969922972,
    40735498,
    2617837225,
    3943577151,
    1913087877,
    83908371,
    2512341634,
    3803740692,
    2075208622,
    213261112,
    2463272603,
    3855990285,
    2094854071,
    198958881,
    2262029012,
    4057260610,
    1759359992,
    534414190,
    2176718541,
    4139329115,
    1873836001,
    414664567,
    2282248934,
    4279200368,
    1711684554,
    285281116,
    2405801727,
    4167216745,
    1634467795,
    376229701,
    2685067896,
    3608007406,
    1308918612,
    956543938,
    2808555105,
    3495958263,
    1231636301,
    1047427035,
    2932959818,
    3654703836,
    1088359270,
    936918e3,
    2847714899,
    3736837829,
    1202900863,
    817233897,
    3183342108,
    3401237130,
    1404277552,
    615818150,
    3134207493,
    3453421203,
    1423857449,
    601450431,
    3009837614,
    3294710456,
    1567103746,
    711928724,
    3020668471,
    3272380065,
    1510334235,
    755167117
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE = new Int32Array(TABLE);
  }
  var crc = (current, previous) => {
    let crc2 = previous === 0 ? 0 : ~~previous ^ -1;
    for (let index = 0; index < current.length; index++) {
      crc2 = TABLE[(crc2 ^ current[index]) & 255] ^ crc2 >>> 8;
    }
    return crc2 ^ -1;
  };
  var crc32 = (current, previous) => {
    return crc(current, previous) >>> 0;
  };

  // node_modules/@ethereumjs/common/dist/esm/enums.js
  var Chain = {
    Mainnet: 1,
    Sepolia: 11155111,
    Holesky: 17e3,
    Hoodi: 560048
  };
  var ChainNameFromNumber = Object.entries(Chain).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
  var ChainGenesis = {
    [Chain.Mainnet]: {
      name: "mainnet",
      blockNumber: BIGINT_02,
      stateRoot: hexToBytes5("0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544")
    },
    [Chain.Sepolia]: {
      name: "sepolia",
      blockNumber: BIGINT_02,
      stateRoot: hexToBytes5("0x5eb6e371a698b8d68f665192350ffcecbbbf322916f4b51bd79bb6887da3f494")
    },
    [Chain.Holesky]: {
      name: "holesky",
      blockNumber: BIGINT_02,
      stateRoot: hexToBytes5("0x69d8c9d72f6fa4ad42d4702b433707212f90db395eb54dc20bc85de253788783")
    },
    [Chain.Hoodi]: {
      name: "hoodi",
      blockNumber: BIGINT_02,
      stateRoot: hexToBytes5("0xda87d7f5f91c51508791bbcbd4aa5baf04917830b86985eeb9ad3d5bfb657576")
    }
  };
  var Hardfork = {
    Chainstart: "chainstart",
    Homestead: "homestead",
    Dao: "dao",
    TangerineWhistle: "tangerineWhistle",
    SpuriousDragon: "spuriousDragon",
    Byzantium: "byzantium",
    Constantinople: "constantinople",
    Petersburg: "petersburg",
    Istanbul: "istanbul",
    MuirGlacier: "muirGlacier",
    Berlin: "berlin",
    London: "london",
    ArrowGlacier: "arrowGlacier",
    GrayGlacier: "grayGlacier",
    MergeNetsplitBlock: "mergeNetsplitBlock",
    Paris: "paris",
    Shanghai: "shanghai",
    Cancun: "cancun",
    Prague: "prague",
    Osaka: "osaka",
    Bpo1: "bpo1",
    Bpo2: "bpo2",
    Bpo3: "bpo3",
    Bpo4: "bpo4",
    Bpo5: "bpo5",
    Amsterdam: "amsterdam"
  };

  // node_modules/@ethereumjs/common/dist/esm/eips.js
  var eipsDict = {
    /**
     * Frontier/Chainstart
     * (there is no Meta-EIP currently for Frontier, so 1 was chosen)
     */
    1: {
      minimumHardfork: Hardfork.Chainstart
    },
    /**
     * Homestead HF Meta EIP
     */
    606: {
      minimumHardfork: Hardfork.Chainstart
    },
    /**
     * TangerineWhistle HF Meta EIP
     */
    608: {
      minimumHardfork: Hardfork.Homestead
    },
    /**
     * Spurious Dragon HF Meta EIP
     */
    607: {
      minimumHardfork: Hardfork.TangerineWhistle
    },
    /**
     * Byzantium HF Meta EIP
     */
    609: {
      minimumHardfork: Hardfork.SpuriousDragon
    },
    /**
     * Constantinople HF Meta EIP
     */
    1013: {
      minimumHardfork: Hardfork.Constantinople
    },
    /**
     * Petersburg HF Meta EIP
     */
    1716: {
      minimumHardfork: Hardfork.Constantinople
    },
    /**
     * Istanbul HF Meta EIP
     */
    1679: {
      minimumHardfork: Hardfork.Constantinople
    },
    /**
     * MuirGlacier HF Meta EIP
     */
    2384: {
      minimumHardfork: Hardfork.Istanbul
    },
    /**
     * Description : SWAPN, DUPN and EXCHANGE instructions
     * URL         : https://github.com/ethereum/EIPs/blob/bd421962b4e241aa2b00a85d9cf4e57770bdb954/EIPS/eip-663.md
     * Status      : Review
     */
    663: {
      minimumHardfork: Hardfork.Chainstart,
      requiredEIPs: [3540, 5450]
    },
    /**
     * Description : Transient storage opcodes
     * URL         : https://eips.ethereum.org/EIPS/eip-1153
     * Status      : Final
     */
    1153: {
      minimumHardfork: Hardfork.Chainstart
    },
    /**
     * Description : Fee market change for ETH 1.0 chain
     * URL         : https://eips.ethereum.org/EIPS/eip-1559
     * Status      : Final
     */
    1559: {
      minimumHardfork: Hardfork.Berlin,
      requiredEIPs: [2930]
    },
    /**
     * Description : ModExp gas cost
     * URL         : https://eips.ethereum.org/EIPS/eip-2565
     * Status      : Final
     */
    2565: {
      minimumHardfork: Hardfork.Byzantium
    },
    /**
     * Description : BLS12-381 precompiles
     * URL         : https://eips.ethereum.org/EIPS/eip-2537
     * Status      : Review
     */
    2537: {
      minimumHardfork: Hardfork.Chainstart
    },
    /**
     * Description : Typed Transaction Envelope
     * URL         : https://eips.ethereum.org/EIPS/eip-2718
     * Status      : Final
     */
    2718: {
      minimumHardfork: Hardfork.Chainstart
    },
    /**
     * Description : Gas cost increases for state access opcodes
     * URL         : https://eips.ethereum.org/EIPS/eip-2929
     * Status      : Final
     */
    2929: {
      minimumHardfork: Hardfork.Chainstart
    },
    /**
     * Description : Optional access lists
     * URL         : https://eips.ethereum.org/EIPS/eip-2930
     * Status      : Final
     */
    2930: {
      minimumHardfork: Hardfork.Istanbul,
      requiredEIPs: [2718, 2929]
    },
    /**
     * Description : Save historical block hashes in state (Verkle related usage, UNSTABLE)
     * URL         : https://github.com/gballet/EIPs/pull/3/commits/2e9ac09a142b0d9fb4db0b8d4609f92e5d9990c5
     * Status      : Draft
     */
    2935: {
      minimumHardfork: Hardfork.Chainstart
    },
    /**
     * Description : BASEFEE opcode
     * URL         : https://eips.ethereum.org/EIPS/eip-3198
     * Status      : Final
     */
    3198: {
      minimumHardfork: Hardfork.London
    },
    /**
     * Description : Reduction in refunds
     * URL         : https://eips.ethereum.org/EIPS/eip-3529
     * Status      : Final
     */
    3529: {
      minimumHardfork: Hardfork.Berlin,
      requiredEIPs: [2929]
    },
    /**
     * Description : EVM Object Format (EOF) v1
     * URL         : https://github.com/ethereum/EIPs/blob/bd421962b4e241aa2b00a85d9cf4e57770bdb954/EIPS/eip-3540.md
     * Status      : Review
     */
    3540: {
      minimumHardfork: Hardfork.London,
      requiredEIPs: [3541, 3860]
    },
    /**
     * Description : Reject new contracts starting with the 0xEF byte
     * URL         : https://eips.ethereum.org/EIPS/eip-3541
     * Status      : Final
     */
    3541: {
      minimumHardfork: Hardfork.Berlin
    },
    /**
     * Description : Difficulty Bomb Delay to December 1st 2021
     * URL         : https://eips.ethereum.org/EIPS/eip-3554
     * Status      : Final
     */
    3554: {
      minimumHardfork: Hardfork.MuirGlacier
    },
    /**
     * Description : Reject transactions from senders with deployed code
     * URL         : https://eips.ethereum.org/EIPS/eip-3607
     * Status      : Final
     */
    3607: {
      minimumHardfork: Hardfork.Chainstart
    },
    /**
     * Description : Warm COINBASE
     * URL         : https://eips.ethereum.org/EIPS/eip-3651
     * Status      : Final
     */
    3651: {
      minimumHardfork: Hardfork.London,
      requiredEIPs: [2929]
    },
    /**
     * Description : EOF - Code Validation
     * URL         : https://github.com/ethereum/EIPs/blob/bd421962b4e241aa2b00a85d9cf4e57770bdb954/EIPS/eip-3670.md
     * Status      : Review
     */
    3670: {
      minimumHardfork: Hardfork.London,
      requiredEIPs: [3540]
    },
    /**
     * Description : Upgrade consensus to Proof-of-Stake
     * URL         : https://eips.ethereum.org/EIPS/eip-3675
     * Status      : Final
     */
    3675: {
      minimumHardfork: Hardfork.London
    },
    /**
     * Description : PUSH0 instruction
     * URL         : https://eips.ethereum.org/EIPS/eip-3855
     * Status      : Final
     */
    3855: {
      minimumHardfork: Hardfork.Chainstart
    },
    /**
     * Description : Limit and meter initcode
     * URL         : https://eips.ethereum.org/EIPS/eip-3860
     * Status      : Final
     */
    3860: {
      minimumHardfork: Hardfork.SpuriousDragon
    },
    /**
     * Description : EOF - Static relative jumps
     * URL         : https://github.com/ethereum/EIPs/blob/bd421962b4e241aa2b00a85d9cf4e57770bdb954/EIPS/eip-4200.md
     * Status      : Review
     */
    4200: {
      minimumHardfork: Hardfork.London,
      requiredEIPs: [3540, 3670]
    },
    /**
     * Description : Difficulty Bomb Delay to June 2022
     * URL         : https://eips.ethereum.org/EIPS/eip-4345
     * Status      : Final
     */
    4345: {
      minimumHardfork: Hardfork.London
    },
    /**
     * Description : Supplant DIFFICULTY opcode with PREVRANDAO
     * URL         : https://eips.ethereum.org/EIPS/eip-4399
     * Status      : Final
     */
    4399: {
      minimumHardfork: Hardfork.London
    },
    /**
     * Description : EOF - Functions
     * URL         : https://github.com/ethereum/EIPs/blob/bd421962b4e241aa2b00a85d9cf4e57770bdb954/EIPS/eip-4750.md
     * Status      : Review
     */
    4750: {
      minimumHardfork: Hardfork.London,
      requiredEIPs: [3540, 3670, 5450]
    },
    /**
     * Description : Beacon block root in the EVM
     * URL         : https://eips.ethereum.org/EIPS/eip-4788
     * Status      : Final
     */
    4788: {
      minimumHardfork: Hardfork.Cancun
    },
    /**
     * Description : Shard Blob Transactions
     * URL         : https://eips.ethereum.org/EIPS/eip-4844
     * Status      : Final
     */
    4844: {
      minimumHardfork: Hardfork.Paris,
      requiredEIPs: [1559, 2718, 2930, 4895]
    },
    /**
     * Description : Beacon chain push withdrawals as operations
     * URL         : https://eips.ethereum.org/EIPS/eip-4895
     * Status      : Final
     */
    4895: {
      minimumHardfork: Hardfork.Paris
    },
    /**
     * Description : Delaying Difficulty Bomb to mid-September 2022
     * URL         : https://eips.ethereum.org/EIPS/eip-5133
     * Status      : Final
     */
    5133: {
      minimumHardfork: Hardfork.GrayGlacier
    },
    /**
     * Description : EOF - Stack Validation
     * URL         : https://github.com/ethereum/EIPs/blob/bd421962b4e241aa2b00a85d9cf4e57770bdb954/EIPS/eip-5450.md
     * Status      : Review
     */
    5450: {
      minimumHardfork: Hardfork.London,
      requiredEIPs: [3540, 3670, 4200, 4750]
    },
    /**
     * Description : MCOPY - Memory copying instruction
     * URL         : https://eips.ethereum.org/EIPS/eip-5656
     * Status      : Final
     */
    5656: {
      minimumHardfork: Hardfork.Shanghai
    },
    /**
     * Description : Supply validator deposits on chain
     * URL         : https://eips.ethereum.org/EIPS/eip-6110
     * Status      : Review
     */
    6110: {
      minimumHardfork: Hardfork.Cancun,
      requiredEIPs: [7685]
    },
    /**
     * Description : EOF - JUMPF and non-returning functions
     * URL         : https://github.com/ethereum/EIPs/blob/bd421962b4e241aa2b00a85d9cf4e57770bdb954/EIPS/eip-6206.md
     * Status      : Review
     */
    6206: {
      minimumHardfork: Hardfork.London,
      requiredEIPs: [4750, 5450]
    },
    /**
     * Description : SELFDESTRUCT only in same transaction
     * URL         : https://eips.ethereum.org/EIPS/eip-6780
     * Status      : Final
     */
    6780: {
      minimumHardfork: Hardfork.London
    },
    /**
     * Description : Execution layer triggerable withdrawals (experimental)
     * URL         : https://github.com/ethereum/EIPs/blob/3b5fcad6b35782f8aaeba7d4ac26004e8fbd720f/EIPS/eip-7002.md
     * Status      : Review
     */
    7002: {
      minimumHardfork: Hardfork.Paris,
      requiredEIPs: [7685]
    },
    /**
     * Description : Revamped CALL instructions
     * URL         : https://github.com/ethereum/EIPs/blob/bd421962b4e241aa2b00a85d9cf4e57770bdb954/EIPS/eip-7069.md
     * Status      : Review
     */
    7069: {
      minimumHardfork: Hardfork.Berlin,
      /* Note: per EIP these are the additionally required EIPs:
        EIP 150 - This is the entire Tangerine Whistle hardfork
        EIP 211 - (RETURNDATASIZE / RETURNDATACOPY) - Included in Byzantium
        EIP 214 - (STATICCALL) - Included in Byzantium
      */
      requiredEIPs: [2929]
    },
    /**
     * Description : Increase the MAX_EFFECTIVE_BALANCE -> Execution layer triggered consolidations (experimental)
     * URL         : https://eips.ethereum.org/EIPS/eip-7251
     * Status      : Draft
     */
    7251: {
      minimumHardfork: Hardfork.Paris,
      requiredEIPs: [7685]
    },
    /**
     * Description : EOF - Data section access instructions
     * URL         : https://github.com/ethereum/EIPs/blob/bd421962b4e241aa2b00a85d9cf4e57770bdb954/EIPS/eip-7480.md
     * Status      : Review
     */
    7480: {
      minimumHardfork: Hardfork.London,
      requiredEIPs: [3540, 3670]
    },
    /**
     * Description : BLOBBASEFEE opcode
     * URL         : https://eips.ethereum.org/EIPS/eip-7516
     * Status      : Final
     */
    7516: {
      minimumHardfork: Hardfork.Paris,
      requiredEIPs: [4844]
    },
    /**
     * Description : Peerdas blob transactions
     * URL         : hhttps://eips.ethereum.org/EIPS/eip-7594
     * Status      : Review
     */
    7594: {
      minimumHardfork: Hardfork.Paris,
      requiredEIPs: [4844]
    },
    /**
     * Description : EOF Contract Creation
     * URL         : https://github.com/ethereum/EIPs/blob/dd32a34cfe4473bce143641bfffe4fd67e1987ab/EIPS/eip-7620.md
     * Status      : Review
     */
    7620: {
      minimumHardfork: Hardfork.London,
      /* Note: per EIP these are the additionally required EIPs:
        EIP 170 - (Max contract size) - Included in Spurious Dragon
      */
      requiredEIPs: [3540, 3541, 3670]
    },
    /**
     * Description : Increase calldata cost to reduce maximum block size
     * URL         : https://github.com/ethereum/EIPs/blob/da2a86bf15044416e8eb0301c9bdb8d561feeb32/EIPS/eip-7623.md
     * Status      : Review
     */
    7623: {
      minimumHardfork: Hardfork.Chainstart,
      requiredEIPs: []
    },
    /**
     * Description : General purpose execution layer requests
     * URL         : https://eips.ethereum.org/EIPS/eip-7685
     * Status      : Review
     */
    7685: {
      // TODO: Set correct minimum hardfork
      minimumHardfork: Hardfork.Cancun,
      requiredEIPs: [3675]
    },
    /**
     * Description : Blob throughput increase
     * URL         : https://eips.ethereum.org/EIPS/eip-7691
     * Status      : Review
     */
    7691: {
      minimumHardfork: Hardfork.Paris,
      requiredEIPs: [4844]
    },
    /**
     * Description : Blob base fee bounded by execution cost
     * URL         : https://eips.ethereum.org/EIPS/eip-7918
     * Status      : Last Call
     */
    7918: {
      minimumHardfork: Hardfork.Paris,
      requiredEIPs: [4844]
    },
    /**
     * Description : EVM Object Format (EOFv1) Meta
     * URL         : https://github.com/ethereum/EIPs/blob/4153e95befd0264082de3c4c2fe3a85cc74d3152/EIPS/eip-7692.md
     * Status      : Draft
     */
    7692: {
      minimumHardfork: Hardfork.Cancun,
      requiredEIPs: [663, 3540, 3670, 4200, 4750, 5450, 6206, 7069, 7480, 7620, 7698]
    },
    /**
     * Description : EOF - Creation transaction
     * URL         : https://github.com/ethereum/EIPs/blob/bd421962b4e241aa2b00a85d9cf4e57770bdb954/EIPS/eip-7698.md
     * Status      : Draft
     */
    7698: {
      minimumHardfork: Hardfork.London,
      requiredEIPs: [3540, 7620]
    },
    /**
     * Description : Set EOA account code for one transaction
     * URL         : https://github.com/ethereum/EIPs/blob/62419ca3f45375db00b04a368ea37c0bfb05386a/EIPS/eip-7702.md
     * Status      : Review
     */
    7702: {
      // TODO: Set correct minimum hardfork
      minimumHardfork: Hardfork.Cancun,
      requiredEIPs: [2718, 2929, 2930]
    },
    /**
     * Description : Set upper bounds for MODEXP
     * URL         : https://eips.ethereum.org/EIPS/eip-7823
     * Status      : Review
     */
    7823: {
      minimumHardfork: Hardfork.Byzantium
    },
    /**
     * Description : Use historical block hashes saved in state for BLOCKHASH
     * URL         : https://eips.ethereum.org/EIPS/eip-7709
     * Status      : Final
     */
    7709: {
      minimumHardfork: Hardfork.Chainstart,
      requiredEIPs: [2935]
    },
    /**
     * Description : Transaction Gas Limit Cap
     * URL         : https://eips.ethereum.org/EIPS/eip-7825
     * Status      : Draft
     */
    7825: {
      minimumHardfork: Hardfork.Chainstart,
      requiredEIPs: []
    },
    /**
     * Description : Ethereum state using a unified binary tree (experimental)
     * URL         : hhttps://eips.ethereum.org/EIPS/eip-7864
     * Status      : Draft
     */
    7864: {
      minimumHardfork: Hardfork.London
    },
    /**
     * Description : EIP-7883: ModExp Gas Cost Increase
     * URL         : hhttps://eips.ethereum.org/EIPS/eip-7883
     * Status      : Draft
     */
    7883: {
      minimumHardfork: Hardfork.Chainstart
    },
    /**
     * Description : Block Level Access Lists (BAL)
     * URL         : https://eips.ethereum.org/EIPS/eip-7928
     * Status      : Draft (in development, do not use in production)
     */
    7928: {
      minimumHardfork: Hardfork.Prague,
      requiredEIPs: []
    },
    /**
     * Description : Count leading zeros (CLZ) opcode
     * URL         : https://eips.ethereum.org/EIPS/eip-7939
     * Status      : Draft
     */
    7939: {
      minimumHardfork: Hardfork.Chainstart,
      requiredEIPs: []
    },
    /**
     * Description : Precompile for secp256r1 Curve Support
     * URL         : https://eips.ethereum.org/EIPS/eip-7951
     * Status      : Draft
     */
    7951: {
      minimumHardfork: Hardfork.Chainstart,
      requiredEIPs: []
    },
    /**
     * Description : RLP Execution Block Size Limit
     * URL         : https://eips.ethereum.org/EIPS/eip-7934
     * Status      : Last Call
     */
    7934: {
      minimumHardfork: Hardfork.Chainstart,
      requiredEIPs: []
    }
  };

  // node_modules/@ethereumjs/common/dist/esm/hardforks.js
  var hardforksDict = {
    /**
     * Description: Start of the Ethereum main chain
     * URL        : -
     * Status     : Final
     */
    chainstart: {
      eips: [1]
    },
    /**
     * Description: Homestead hardfork with protocol and network changes
     * URL        : https://eips.ethereum.org/EIPS/eip-606
     * Status     : Final
     */
    homestead: {
      eips: [606]
    },
    /**
     * Description: DAO rescue hardfork
     * URL        : https://eips.ethereum.org/EIPS/eip-779
     * Status     : Final
     */
    dao: {
      eips: []
    },
    /**
     * Description: Hardfork with gas cost changes for IO-heavy operations
     * URL        : https://eips.ethereum.org/EIPS/eip-608
     * Status     : Final
     */
    tangerineWhistle: {
      eips: [608]
    },
    /**
     * Description: HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit
     * URL        : https://eips.ethereum.org/EIPS/eip-607
     * Status     : Final
     */
    spuriousDragon: {
      eips: [607]
    },
    /**
     * Description: Hardfork with new precompiles, instructions and other protocol changes
     * URL        : https://eips.ethereum.org/EIPS/eip-609
     * Status     : Final
     */
    byzantium: {
      eips: [609]
    },
    /**
     * Description: Postponed hardfork including EIP-1283 (SSTORE gas metering changes)
     * URL        : https://eips.ethereum.org/EIPS/eip-1013
     * Status     : Final
     */
    constantinople: {
      eips: [1013]
    },
    /**
     * Description: Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople
     * URL        : https://eips.ethereum.org/EIPS/eip-1716
     * Status     : Final
     */
    petersburg: {
      eips: [1716]
    },
    /**
     * Description: HF targeted for December 2019 following the Constantinople/Petersburg HF
     * URL        : https://eips.ethereum.org/EIPS/eip-1679
     * Status     : Final
     */
    istanbul: {
      eips: [1679]
    },
    /**
     * Description: HF to delay the difficulty bomb
     * URL        : https://eips.ethereum.org/EIPS/eip-2384
     * Status     : Final
     */
    muirGlacier: {
      eips: [2384]
    },
    /**
     * Description: HF targeted for July 2020 following the Muir Glacier HF
     * URL        : https://eips.ethereum.org/EIPS/eip-2070
     * Status     : Final
     */
    berlin: {
      eips: [2565, 2929, 2718, 2930]
    },
    /**
     * Description: HF targeted for July 2021 following the Berlin fork
     * URL        : https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md
     * Status     : Final
     */
    london: {
      eips: [1559, 3198, 3529, 3541]
    },
    /**
     * Description: HF to delay the difficulty bomb
     * URL        : https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md
     * Status     : Final
     */
    arrowGlacier: {
      eips: [4345]
    },
    /**
     * Description: Delaying the difficulty bomb to Mid September 2022
     * URL        : https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md
     * Status     : Final
     */
    grayGlacier: {
      eips: [5133]
    },
    /**
     * Description: Hardfork to upgrade the consensus mechanism to Proof-of-Stake
     * URL        : https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md
     * Status     : Final
     */
    paris: {
      consensus: {
        type: "pos",
        algorithm: "casper",
        casper: {}
      },
      eips: [3675, 4399]
    },
    /**
     * Description: Pre-merge hardfork to fork off non-upgraded clients
     * URL        : https://eips.ethereum.org/EIPS/eip-3675
     * Status     : Final
     */
    mergeNetsplitBlock: {
      eips: []
    },
    /**
     * Description: Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode
     * URL        : https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md
     * Status     : Final
     */
    shanghai: {
      eips: [3651, 3855, 3860, 4895]
    },
    /**
     * Description: Next feature hardfork after shanghai, includes proto-danksharding EIP 4844 blobs,
     * transient storage opcodes, parent beacon block root availability in EVM, selfdestruct only in
     * same transaction, and blob base fee opcode
     * URL        : https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/cancun.md
     * Status     : Final
     */
    cancun: {
      eips: [1153, 4844, 4788, 5656, 6780, 7516]
    },
    /**
     * Description: Next feature hardfork after cancun including EIP-7702 account abstraction + other EIPs
     * URL        : https://eips.ethereum.org/EIPS/eip-7600
     * Status     : Final
     */
    prague: {
      eips: [2537, 2935, 6110, 7002, 7251, 7623, 7685, 7691, 7702]
    },
    /**
     * Description: Next feature hardfork after prague (headliner: PeerDAS)
     * URL        : https://eips.ethereum.org/EIPS/eip-7607
     * Status     : Final
     */
    osaka: {
      eips: [7594, 7823, 7825, 7883, 7892, 7939, 7951, 7918]
    },
    /**
     * Description: HF to update the blob target, max and updateFraction (see also EIP-7892)
     * URL        : TBD
     * Status     : Final
     */
    bpo1: {
      eips: [],
      params: {
        target: 10,
        max: 15,
        blobGasPriceUpdateFraction: 8346193
      }
    },
    /**
     * Description: HF to update the blob target, max and updateFraction (see also EIP-7892)
     * URL        : TBD
     * Status     : Final
     */
    bpo2: {
      eips: [],
      params: {
        target: 14,
        max: 21,
        blobGasPriceUpdateFraction: 11684671
      }
    },
    /**
     * Description: Feature hardfork after osaka (headliner: EIP-7928 Block Level Access Lists (BAL))
     * URL        : https://eips.ethereum.org/EIPS/eip-7773
     * Status     : Draft (implementation incomplete + spec still moving!)
     */
    amsterdam: {
      eips: [7928]
    }
  };

  // node_modules/@ethereumjs/common/dist/esm/common.js
  var Common = class {
    constructor(opts) {
      this._eips = [];
      this._paramsCache = {};
      this._activatedEIPsCache = [];
      this.events = new import_index.default();
      this._chainParams = JSON.parse(JSON.stringify(opts.chain));
      this.DEFAULT_HARDFORK = this._chainParams.defaultHardfork ?? Hardfork.Prague;
      this.HARDFORK_CHANGES = this.hardforks().map((hf) => [
        hf.name,
        // Allow to even override an existing hardfork specification
        (this._chainParams.customHardforks && this._chainParams.customHardforks[hf.name]) ?? hardforksDict[hf.name]
      ]);
      this._hardfork = this.DEFAULT_HARDFORK;
      this._params = opts.params ? JSON.parse(JSON.stringify(opts.params)) : {};
      if (opts.hardfork !== void 0) {
        this.setHardfork(opts.hardfork);
      }
      if (opts.eips) {
        this.setEIPs(opts.eips);
      }
      this.customCrypto = opts.customCrypto ?? {};
      if (Object.keys(this._paramsCache).length === 0) {
        this._buildParamsCache();
        this._buildActivatedEIPsCache();
      }
    }
    /**
     * Update the internal Common EIP params set. Existing values
     * will get preserved unless there is a new value for a parameter
     * provided with params.
     *
     * Example Format:
     *
     * ```ts
     * {
     *   1559: {
     *     initialBaseFee: 1000000000,
     *   }
     * }
     * ```
     *
     * @param params
     */
    updateParams(params) {
      for (const [eip, paramsConfig] of Object.entries(params)) {
        if (!(eip in this._params)) {
          this._params[eip] = JSON.parse(JSON.stringify(paramsConfig));
        } else {
          this._params[eip] = JSON.parse(JSON.stringify({ ...this._params[eip], ...params[eip] }));
        }
      }
      this._buildParamsCache();
    }
    /**
     * Fully resets the internal Common EIP params set with the values provided.
     *
     * Example Format:
     *
     * ```ts
     * {
     *   1559: {
     *     initialBaseFee: 1000000000,
     *   }
     * }
     * ```
     *
     * @param params
     */
    resetParams(params) {
      this._params = JSON.parse(JSON.stringify(params));
      this._buildParamsCache();
    }
    /**
     * Sets the hardfork to get params for
     * @param hardfork String identifier (e.g. 'byzantium') or {@link Hardfork} enum
     */
    setHardfork(hardfork) {
      let existing = false;
      for (const hfChanges of this.HARDFORK_CHANGES) {
        if (hfChanges[0] === hardfork) {
          if (this._hardfork !== hardfork) {
            this._hardfork = hardfork;
            this._buildParamsCache();
            this._buildActivatedEIPsCache();
            this.events.emit("hardforkChanged", hardfork);
          }
          existing = true;
        }
      }
      if (!existing) {
        throw EthereumJSErrorWithoutCode(`Hardfork with name ${hardfork} not supported`);
      }
    }
    /**
     * Returns the hardfork either based on block number (older HFs) or
     * timestamp (Shanghai upwards).
     *
     * @param opts Block number or timestamp
     * @returns The name of the HF
     */
    getHardforkBy(opts) {
      const blockNumber = toType(opts.blockNumber, TypeOutput.BigInt);
      const timestamp = toType(opts.timestamp, TypeOutput.BigInt);
      const hfs = this.hardforks().filter((hf) => hf.block !== null || hf.timestamp !== void 0);
      let hfIndex = hfs.findIndex((hf) => blockNumber !== void 0 && hf.block !== null && BigInt(hf.block) > blockNumber || timestamp !== void 0 && hf.timestamp !== void 0 && BigInt(hf.timestamp) > timestamp);
      if (hfIndex === -1) {
        hfIndex = hfs.length;
      } else if (hfIndex === 0) {
        throw Error("Must have at least one hardfork at block 0");
      }
      if (timestamp === void 0) {
        const stepBack = hfs.slice(0, hfIndex).reverse().findIndex((hf) => hf.block !== null);
        hfIndex = hfIndex - stepBack;
      }
      hfIndex = hfIndex - 1;
      const hfStartIndex = hfIndex;
      for (; hfIndex < hfs.length - 1; hfIndex++) {
        if (hfs[hfIndex].block !== hfs[hfIndex + 1].block || hfs[hfIndex].timestamp !== hfs[hfIndex + 1].timestamp) {
          break;
        }
      }
      if (timestamp !== void 0) {
        const minTimeStamp = hfs.slice(0, hfStartIndex).reduce((acc, hf) => Math.max(Number(hf.timestamp ?? "0"), acc), 0);
        if (minTimeStamp > timestamp) {
          throw Error(`Maximum HF determined by timestamp is lower than the block number HF`);
        }
        const maxTimeStamp = hfs.slice(hfIndex + 1).reduce((acc, hf) => Math.min(Number(hf.timestamp ?? timestamp), acc), Number(timestamp));
        if (maxTimeStamp < timestamp) {
          throw Error(`Maximum HF determined by block number is lower than timestamp HF`);
        }
      }
      const hardfork = hfs[hfIndex];
      return hardfork.name;
    }
    /**
     * Sets a new hardfork either based on block number (older HFs) or
     * timestamp (Shanghai upwards).
     *
     * @param opts Block number or timestamp
     * @returns The name of the HF set
     */
    setHardforkBy(opts) {
      const hardfork = this.getHardforkBy(opts);
      this.setHardfork(hardfork);
      return hardfork;
    }
    /**
     * Internal helper function, returns the params for the given hardfork for the chain set
     * @param hardfork Hardfork name
     * @returns Dictionary with hardfork params or null if hardfork not on chain
     */
    _getHardfork(hardfork) {
      const hfs = this.hardforks();
      for (const hf of hfs) {
        if (hf["name"] === hardfork)
          return hf;
      }
      return null;
    }
    /**
     * Sets the active EIPs
     * @param eips
     */
    setEIPs(eips = []) {
      for (const eip of eips) {
        if (!(eip in eipsDict)) {
          throw EthereumJSErrorWithoutCode(`${eip} not supported`);
        }
        const minHF = this.gteHardfork(eipsDict[eip]["minimumHardfork"]);
        if (!minHF) {
          throw EthereumJSErrorWithoutCode(`${eip} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${minHF}`);
        }
      }
      this._eips = eips;
      this._buildParamsCache();
      this._buildActivatedEIPsCache();
      for (const eip of eips) {
        if (eipsDict[eip].requiredEIPs !== void 0) {
          for (const elem of eipsDict[eip].requiredEIPs) {
            if (!(eips.includes(elem) || this.isActivatedEIP(elem))) {
              throw EthereumJSErrorWithoutCode(`${eip} requires EIP ${elem}, but is not included in the EIP list`);
            }
          }
        }
      }
    }
    /**
     * Internal helper for _buildParamsCache()
     */
    _mergeWithParamsCache(params) {
      for (const [key, value] of Object.entries(params)) {
        this._paramsCache[key] = value;
      }
    }
    /**
     * Build up a cache for all parameter values for the current HF and all activated EIPs
     */
    _buildParamsCache() {
      this._paramsCache = {};
      const hardfork = this.hardfork();
      for (const hfChanges of this.HARDFORK_CHANGES) {
        if ("eips" in hfChanges[1]) {
          const hfEIPs = hfChanges[1].eips ?? [];
          for (const eip of hfEIPs) {
            if (this._params[eip] !== void 0 && this._params[eip] !== null) {
              this._mergeWithParamsCache(this._params[eip]);
            }
          }
        }
        const hfScopedParams = this._params[hfChanges[0]];
        if (hfScopedParams !== void 0 && hfScopedParams !== null) {
          this._mergeWithParamsCache(hfScopedParams);
        }
        if (hfChanges[1].params !== void 0 && hfChanges[1].params !== null) {
          this._mergeWithParamsCache(hfChanges[1].params);
        }
        if (hfChanges[0] === hardfork)
          break;
      }
      for (const eip of this._eips) {
        if (this._params[eip] !== void 0 && this._params[eip] !== null) {
          this._mergeWithParamsCache(this._params[eip]);
        }
      }
    }
    /**
     * Builds the cache of EIPs activated either via hardforks or constructor `eips`.
     */
    _buildActivatedEIPsCache() {
      this._activatedEIPsCache = [];
      for (const [name, hf] of this.HARDFORK_CHANGES) {
        if (this.gteHardfork(name) && "eips" in hf) {
          this._activatedEIPsCache = this._activatedEIPsCache.concat(hf.eips ?? []);
        }
      }
      this._activatedEIPsCache = this._activatedEIPsCache.concat(this._eips);
    }
    /**
     * Returns a parameter for the current chain setup
     *
     * If the parameter is present in an EIP, the EIP always takes precedence.
     * Otherwise the parameter is taken from the latest applied HF with
     * a change on the respective parameter.
     *
     * @param name Parameter name (e.g. 'minGasLimit')
     * @returns The value requested (throws if not found)
     */
    param(name) {
      if (!(name in this._paramsCache)) {
        throw EthereumJSErrorWithoutCode(`Missing parameter value for ${name}`);
      }
      const value = this._paramsCache[name];
      return BigInt(value ?? 0);
    }
    /**
     * Returns the parameter corresponding to a hardfork
     * @param name Parameter name (e.g. 'minGasLimit')
     * @param hardfork Hardfork name
     * @returns The value requested (throws if not found)
     */
    paramByHardfork(name, hardfork) {
      let value;
      for (const hfChanges of this.HARDFORK_CHANGES) {
        if ("eips" in hfChanges[1]) {
          const hfEIPs = hfChanges[1]["eips"];
          for (const eip of hfEIPs) {
            const eipParams = this._params[eip];
            const eipValue = eipParams?.[name];
            if (eipValue !== void 0) {
              value = eipValue;
            }
          }
        } else {
          const hfValue = hfChanges[1].params?.[name];
          if (hfValue !== void 0) {
            value = hfValue;
          }
        }
        if (hfChanges[0] === hardfork)
          break;
      }
      if (value === void 0) {
        throw EthereumJSErrorWithoutCode(`Missing parameter value for ${name}`);
      }
      return BigInt(value ?? 0);
    }
    /**
     * Returns a parameter corresponding to an EIP
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @param eip Number of the EIP
     * @returns The value requested (throws if not found)
     */
    paramByEIP(name, eip) {
      if (!(eip in eipsDict)) {
        throw EthereumJSErrorWithoutCode(`${eip} not supported`);
      }
      const eipParams = this._params[eip];
      if (eipParams?.[name] === void 0) {
        throw EthereumJSErrorWithoutCode(`Missing parameter value for ${name}`);
      }
      const value = eipParams[name];
      return BigInt(value ?? 0);
    }
    /**
     * Returns a parameter for the hardfork active on block number or
     * optional provided total difficulty (Merge HF)
     * @param name Parameter name
     * @param blockNumber Block number
     * @returns The value requested or `BigInt(0)` if not found
     */
    paramByBlock(name, blockNumber, timestamp) {
      const hardfork = this.getHardforkBy({ blockNumber, timestamp });
      return this.paramByHardfork(name, hardfork);
    }
    /**
     * Returns the blob gas schedule for the current hardfork
     * @returns The blob gas schedule
     */
    getBlobGasSchedule() {
      if (this.gteHardfork(Hardfork.Bpo1)) {
        return {
          targetBlobGasPerBlock: this.param("target") * this.param("blobGasPerBlob"),
          maxBlobGasPerBlock: this.param("max") * this.param("blobGasPerBlob"),
          blobGasPriceUpdateFraction: this.param("blobGasPriceUpdateFraction")
        };
      }
      return {
        targetBlobGasPerBlock: this.param("targetBlobGasPerBlock"),
        maxBlobGasPerBlock: this.param("maxBlobGasPerBlock"),
        blobGasPriceUpdateFraction: this.param("blobGasPriceUpdateFraction")
      };
    }
    /**
     * Checks if an EIP is activated by either being included in the EIPs
     * manually passed in with the {@link CommonOpts.eips} or in a
     * hardfork currently being active
     *
     * Note: this method only works for EIPs being supported
     * by the {@link CommonOpts.eips} constructor option
     * @param eip
     */
    isActivatedEIP(eip) {
      if (this._activatedEIPsCache.includes(eip)) {
        return true;
      }
      return false;
    }
    /**
     * Checks if set or provided hardfork is active on block number
     * @param hardfork Hardfork name or null (for HF set)
     * @param blockNumber
     * @returns True if HF is active on block number
     */
    hardforkIsActiveOnBlock(hardfork, blockNumber) {
      blockNumber = toType(blockNumber, TypeOutput.BigInt);
      hardfork = hardfork ?? this._hardfork;
      const hfBlock = this.hardforkBlock(hardfork);
      if (typeof hfBlock === "bigint" && hfBlock !== BIGINT_02 && blockNumber >= hfBlock) {
        return true;
      }
      return false;
    }
    /**
     * Alias to hardforkIsActiveOnBlock when hardfork is set
     * @param blockNumber
     * @returns True if HF is active on block number
     */
    activeOnBlock(blockNumber) {
      return this.hardforkIsActiveOnBlock(null, blockNumber);
    }
    /**
     * Sequence based check if given or set HF1 is greater than or equal HF2
     * @param hardfork1 Hardfork name or null (if set)
     * @param hardfork2 Hardfork name
     * @returns True if HF1 gte HF2
     */
    hardforkGteHardfork(hardfork1, hardfork2) {
      hardfork1 = hardfork1 ?? this._hardfork;
      const hardforks = this.hardforks();
      let posHf1 = -1, posHf2 = -1;
      let index = 0;
      for (const hf of hardforks) {
        if (hf["name"] === hardfork1)
          posHf1 = index;
        if (hf["name"] === hardfork2)
          posHf2 = index;
        index += 1;
      }
      return posHf1 >= posHf2 && posHf2 !== -1;
    }
    /**
     * Alias to hardforkGteHardfork when hardfork is set
     * @param hardfork Hardfork name
     * @returns True if hardfork set is greater than hardfork provided
     */
    gteHardfork(hardfork) {
      return this.hardforkGteHardfork(null, hardfork);
    }
    /**
     * Returns the hardfork change block for hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number or null if unscheduled
     */
    hardforkBlock(hardfork) {
      hardfork = hardfork ?? this._hardfork;
      const block = this._getHardfork(hardfork)?.["block"];
      if (block === void 0 || block === null) {
        return null;
      }
      return BigInt(block);
    }
    /**
     * Returns the timestamp at which a given hardfork is scheduled (if any).
     * @param hardfork Hardfork name, optional if HF set
     * @returns Timestamp or null if the hardfork is not timestamp-based
     */
    hardforkTimestamp(hardfork) {
      hardfork = hardfork ?? this._hardfork;
      const timestamp = this._getHardfork(hardfork)?.["timestamp"];
      if (timestamp === void 0 || timestamp === null) {
        return null;
      }
      return BigInt(timestamp);
    }
    /**
     * Returns the hardfork change block for eip
     * @param eip EIP number
     * @returns Block number or null if unscheduled
     */
    eipBlock(eip) {
      for (const hfChanges of this.HARDFORK_CHANGES) {
        const hf = hfChanges[1];
        if ("eips" in hf) {
          if (hf["eips"].includes(eip)) {
            return this.hardforkBlock(hfChanges[0]);
          }
        }
      }
      return null;
    }
    /**
     * Returns the scheduled timestamp of the EIP (if scheduled and scheduled by timestamp)
     * @param eip EIP number
     * @returns Scheduled timestamp. If this EIP is unscheduled, or the EIP is scheduled by block number, then it returns `null`.
     */
    eipTimestamp(eip) {
      for (const hfChanges of this.HARDFORK_CHANGES) {
        const hf = hfChanges[1];
        if ("eips" in hf) {
          if (hf["eips"].includes(eip)) {
            return this.hardforkTimestamp(hfChanges[0]);
          }
        }
      }
      return null;
    }
    /**
     * Returns the block number or timestamp at which the next hardfork will occur.
     * For pre-merge hardforks, returns the block number.
     * For post-merge hardforks, returns the timestamp.
     * Returns null if there is no next hardfork.
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number or timestamp, or null if not available
     */
    nextHardforkBlockOrTimestamp(hardfork) {
      const targetHardfork = hardfork ?? this._hardfork;
      const hfs = this.hardforks();
      let targetHfIndex = hfs.findIndex((hf) => hf.name === targetHardfork);
      if (targetHardfork === Hardfork.Paris) {
        targetHfIndex -= 1;
      }
      if (targetHfIndex < 0) {
        return null;
      }
      const currentHf = hfs[targetHfIndex];
      const currentBlockOrTimestamp = currentHf.timestamp ?? currentHf.block;
      if (currentBlockOrTimestamp === null || currentBlockOrTimestamp === void 0) {
        return null;
      }
      const nextHf = hfs.slice(targetHfIndex + 1).find((hf) => {
        const nextBlockOrTimestamp2 = hf.timestamp ?? hf.block;
        return nextBlockOrTimestamp2 !== null && nextBlockOrTimestamp2 !== void 0 && nextBlockOrTimestamp2 !== currentBlockOrTimestamp;
      });
      if (nextHf === void 0) {
        return null;
      }
      const nextBlockOrTimestamp = nextHf.timestamp ?? nextHf.block;
      if (nextBlockOrTimestamp === null || nextBlockOrTimestamp === void 0) {
        return null;
      }
      return BigInt(nextBlockOrTimestamp);
    }
    /**
     * Internal helper function to calculate a fork hash
     * @param hardfork Hardfork name
     * @param genesisHash Genesis block hash of the chain
     * @returns Fork hash as hex string
     */
    _calcForkHash(hardfork, genesisHash) {
      let hfBytes = new Uint8Array(0);
      let prevBlockOrTime = 0;
      for (const hf of this.hardforks()) {
        const { block, timestamp, name } = hf;
        let blockOrTime = timestamp ?? block;
        blockOrTime = blockOrTime !== null ? Number(blockOrTime) : null;
        if (typeof blockOrTime === "number" && blockOrTime !== 0 && blockOrTime !== prevBlockOrTime && name !== Hardfork.Paris) {
          const hfBlockBytes = hexToBytes5(`0x${blockOrTime.toString(16).padStart(16, "0")}`);
          hfBytes = concatBytes6(hfBytes, hfBlockBytes);
          prevBlockOrTime = blockOrTime;
        }
        if (hf.name === hardfork)
          break;
      }
      const inputBytes = concatBytes6(genesisHash, hfBytes);
      const forkhash = bytesToHex5(intToBytes(crc32(inputBytes) >>> 0));
      return forkhash;
    }
    /**
     * Returns an eth/64 compliant fork hash (EIP-2124)
     * @param hardfork Hardfork name, optional if HF set
     * @param genesisHash Genesis block hash of the network, optional if already defined and not needed to be calculated
     * @returns Fork hash as a hex string
     */
    forkHash(hardfork, genesisHash) {
      hardfork = hardfork ?? this._hardfork;
      const data = this._getHardfork(hardfork);
      if (data === null || data?.block === null && data?.timestamp === void 0) {
        const msg = "No fork hash calculation possible for future hardfork";
        throw EthereumJSErrorWithoutCode(msg);
      }
      if (data?.forkHash !== null && data?.forkHash !== void 0) {
        return data.forkHash;
      }
      if (!genesisHash)
        throw EthereumJSErrorWithoutCode("genesisHash required for forkHash calculation");
      return this._calcForkHash(hardfork, genesisHash);
    }
    /**
     *
     * @param forkHash Fork hash as a hex string
     * @returns Array with hardfork data (name, block, forkHash)
     */
    hardforkForForkHash(forkHash) {
      const resArray = this.hardforks().filter((hf) => {
        return hf.forkHash === forkHash;
      });
      return resArray.length >= 1 ? resArray[resArray.length - 1] : null;
    }
    /**
     * Sets any missing forkHashes on this {@link Common} instance.
     * @param genesisHash The genesis block hash
     */
    setForkHashes(genesisHash) {
      for (const hf of this.hardforks()) {
        const blockOrTime = hf.timestamp ?? hf.block;
        if ((hf.forkHash === null || hf.forkHash === void 0) && blockOrTime !== null && blockOrTime !== void 0) {
          hf.forkHash = this.forkHash(hf.name, genesisHash);
        }
      }
    }
    /**
     * Returns the Genesis parameters of the current chain
     * @returns Genesis dictionary
     */
    genesis() {
      return this._chainParams.genesis;
    }
    /**
     * Returns the hardfork definitions for the current chain.
     * @returns Array of hardfork transition configs
     */
    hardforks() {
      const hfs = this._chainParams.hardforks;
      if (this._chainParams.customHardforks !== void 0) {
        const existingNames = new Set(hfs.map((hf) => hf.name));
        const customHfEntries = Object.keys(this._chainParams.customHardforks).filter((name) => !existingNames.has(name)).map((name) => ({
          name,
          block: null
          // Custom hardforks without explicit transition config default to null (inactive by block)
        }));
        return [...hfs, ...customHfEntries];
      }
      return hfs;
    }
    /**
     * Returns bootstrap nodes for the current chain.
     * @returns Array of bootstrap node configs
     */
    bootstrapNodes() {
      return this._chainParams.bootstrapNodes;
    }
    /**
     * Returns DNS networks for the current chain
     * @returns {String[]} Array of DNS ENR urls
     */
    dnsNetworks() {
      return this._chainParams.dnsNetworks;
    }
    /**
     * Returns the hardfork set
     * @returns Hardfork name
     */
    hardfork() {
      return this._hardfork;
    }
    /**
     * Returns the Id of current chain
     * @returns chain Id
     */
    chainId() {
      return BigInt(this._chainParams.chainId);
    }
    /**
     * Returns the name of current chain
     * @returns chain name (lower case)
     */
    chainName() {
      return this._chainParams.name;
    }
    /**
     * Returns the additionally activated EIPs
     * (by using the `eips` constructor option)
     * @returns List of EIPs
     */
    eips() {
      return this._eips;
    }
    /**
     * Returns the consensus type of the network
     * Possible values: "pow"|"poa"|"pos"
     *
     * Note: This value can update along a Hardfork.
     */
    consensusType() {
      const hardfork = this.hardfork();
      let value;
      for (const hfChanges of this.HARDFORK_CHANGES) {
        if ("consensus" in hfChanges[1]) {
          value = hfChanges[1]["consensus"]["type"];
        }
        if (hfChanges[0] === hardfork)
          break;
      }
      return value ?? this._chainParams["consensus"]["type"];
    }
    /**
     * Returns the concrete consensus implementation
     * algorithm or protocol for the network
     * e.g. "ethash" for "pow" consensus type,
     * "clique" for "poa" consensus type or
     * "casper" for "pos" consensus type.
     *
     * Note: This value can update along a Hardfork.
     */
    consensusAlgorithm() {
      const hardfork = this.hardfork();
      let value;
      for (const hfChanges of this.HARDFORK_CHANGES) {
        if ("consensus" in hfChanges[1]) {
          value = hfChanges[1]["consensus"]["algorithm"];
        }
        if (hfChanges[0] === hardfork)
          break;
      }
      return value ?? this._chainParams["consensus"]["algorithm"];
    }
    /**
     * Returns a dictionary with consensus configuration
     * parameters based on the consensus algorithm
     *
     * Expected returns (parameters must be present in
     * the respective chain JSON files):
     *
     * ethash: empty object
     * clique: period, epoch
     * casper: empty object
     *
     * Note: This value can update along a Hardfork.
     */
    consensusConfig() {
      const hardfork = this.hardfork();
      let value;
      for (const hfChanges of this.HARDFORK_CHANGES) {
        if ("consensus" in hfChanges[1]) {
          const config = hfChanges[1];
          const algorithm = config["consensus"]["algorithm"];
          value = config["consensus"][algorithm];
        }
        if (hfChanges[0] === hardfork)
          break;
      }
      return value ?? this._chainParams["consensus"][this.consensusAlgorithm()] ?? {};
    }
    /**
     * Returns a deep copy of this {@link Common} instance.
     */
    copy() {
      const copy = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
      copy.events = new import_index.default();
      return copy;
    }
  };

  // node_modules/@ethereumjs/tx/dist/esm/params.js
  var paramsTx = {
    /**
     * Frontier/Chainstart
     */
    1: {
      // gasPrices
      txGas: 21e3,
      // Per transaction. NOTE: Not payable on data of calls between transactions
      txCreationGas: 32e3,
      // The cost of creating a contract via tx
      txDataZeroGas: 4,
      // Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions
      txDataNonZeroGas: 68,
      // Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions
      accessListStorageKeyGas: 0,
      accessListAddressGas: 0
    },
    /**
    .  * Istanbul HF Meta EIP
    .  */
    1679: {
      // gasPrices
      txDataNonZeroGas: 16
      // Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions
    },
    /**
    .  * Optional access lists
    .  */
    2930: {
      // gasPrices
      accessListStorageKeyGas: 1900,
      // Gas cost per storage key in an Access List transaction
      accessListAddressGas: 2400
      // Gas cost per storage key in an Access List transaction
    },
    /**
    .  * Limit and meter initcode
    .  */
    3860: {
      // gasPrices
      initCodeWordGas: 2,
      // Gas to pay for each word (32 bytes) of initcode when creating a contract
      // format
      maxInitCodeSize: 49152
      // Maximum length of initialization code when creating a contract
    },
    /**
    .  * Shard Blob Transactions
    .  */
    4844: {
      blobCommitmentVersionKzg: 1,
      // The number indicated a versioned hash is a KZG commitment
      blobGasPerBlob: 131072,
      // The base fee for blob gas per blob
      maxBlobGasPerBlock: 786432
      // The max blob gas allowable per block
    },
    /**
     * PeerDAS - Peer Data Availability Sampling
     */
    7594: {
      maxBlobsPerTx: 6
      // Max number of blobs per tx
    },
    /**
     * Increase calldata cost to reduce maximum block size
     */
    7623: {
      totalCostFloorPerToken: 10
    },
    /**
    .  * Set EOA account code for one transaction
    .  */
    7702: {
      // TODO: Set correct minimum hardfork
      // gasPrices
      perAuthBaseGas: 12500,
      // Gas cost of each authority item, provided the authority exists in the trie
      perEmptyAccountCost: 25e3
      // Gas cost of each authority item, in case the authority does not exist in the trie
    },
    /**
    .  * Shard Blob Transactions
    .  */
    7691: {
      maxBlobGasPerBlock: 1179648
      // The max blob gas allowable per block
    },
    /**
     * Transaction Gas Limit Cap
     */
    7825: {
      maxTransactionGasLimit: 16777216
      // Maximum gas limit for a single transaction (2^24)
    }
  };

  // node_modules/@ethereumjs/tx/dist/esm/util/internal.js
  function getCommon(common) {
    return common?.copy() ?? new Common({ chain: Mainnet });
  }
  function txTypeBytes(txType) {
    return hexToBytes5(`0x${txType.toString(16).padStart(2, "0")}`);
  }
  function validateNotArray(values) {
    const txDataKeys = [
      "nonce",
      "gasPrice",
      "gasLimit",
      "to",
      "value",
      "data",
      "v",
      "r",
      "s",
      "type",
      "baseFee",
      "maxFeePerGas",
      "chainId"
    ];
    for (const [key, value] of Object.entries(values)) {
      if (txDataKeys.includes(key)) {
        if (Array.isArray(value)) {
          throw EthereumJSErrorWithoutCode(`${key} cannot be an array`);
        }
      }
    }
  }
  function checkMaxInitCodeSize(common, length) {
    const maxInitCodeSize = common.param("maxInitCodeSize");
    if (maxInitCodeSize && BigInt(length) > maxInitCodeSize) {
      throw EthereumJSErrorWithoutCode(`the initcode size of this transaction is too large: it is ${length} while the max is ${common.param("maxInitCodeSize")}`);
    }
  }
  function valueOverflowCheck(values, bits = 256, cannotEqual = false) {
    for (const [key, value] of Object.entries(values)) {
      switch (bits) {
        case 64:
          if (cannotEqual) {
            if (value !== void 0 && value >= MAX_UINT64) {
              throw EthereumJSErrorWithoutCode(`${key} cannot equal or exceed MAX_UINT64 (2^64-1), given ${value}`);
            }
          } else {
            if (value !== void 0 && value > MAX_UINT64) {
              throw EthereumJSErrorWithoutCode(`${key} cannot exceed MAX_UINT64 (2^64-1), given ${value}`);
            }
          }
          break;
        case 256:
          if (cannotEqual) {
            if (value !== void 0 && value >= MAX_INTEGER) {
              throw EthereumJSErrorWithoutCode(`${key} cannot equal or exceed MAX_INTEGER (2^256-1), given ${value}`);
            }
          } else {
            if (value !== void 0 && value > MAX_INTEGER) {
              throw EthereumJSErrorWithoutCode(`${key} cannot exceed MAX_INTEGER (2^256-1), given ${value}`);
            }
          }
          break;
        default: {
          throw EthereumJSErrorWithoutCode("unimplemented bits value");
        }
      }
    }
  }
  function sharedConstructor(tx, txData, opts = {}) {
    tx.common = getCommon(opts.common);
    tx.common.updateParams(opts.params ?? paramsTx);
    validateNotArray(txData);
    const { nonce, gasLimit, to, value, data, v, r, s } = txData;
    tx.txOptions = opts;
    const toB = toBytes3(to === "" ? "0x" : to);
    tx.to = toB.length > 0 ? new Address(toB) : void 0;
    const vB = toBytes3(v);
    const rB = toBytes3(r);
    const sB = toBytes3(s);
    tx.nonce = bytesToBigInt(toBytes3(nonce));
    tx.gasLimit = bytesToBigInt(toBytes3(gasLimit));
    tx.to = toB.length > 0 ? new Address(toB) : void 0;
    tx.value = bytesToBigInt(toBytes3(value));
    tx.data = toBytes3(data === "" ? "0x" : data);
    tx.v = vB.length > 0 ? bytesToBigInt(vB) : void 0;
    tx.r = rB.length > 0 ? bytesToBigInt(rB) : void 0;
    tx.s = sB.length > 0 ? bytesToBigInt(sB) : void 0;
    valueOverflowCheck({ value: tx.value, r: tx.r, s: tx.s });
    valueOverflowCheck({ gasLimit: tx.gasLimit }, 64);
    valueOverflowCheck({ nonce: tx.nonce }, 64, true);
    if (tx.common.isActivatedEIP(7825)) {
      const maxGasLimit = tx.common.param("maxTransactionGasLimit");
      if (tx.gasLimit > maxGasLimit) {
        throw EthereumJSErrorWithoutCode(`Transaction gas limit ${tx.gasLimit} exceeds the maximum allowed by EIP-7825 (${maxGasLimit})`);
      }
    }
    const createContract = tx.to === void 0 || tx.to === null;
    const allowUnlimitedInitCodeSize = opts.allowUnlimitedInitCodeSize ?? false;
    if (createContract && tx.common.isActivatedEIP(3860) && allowUnlimitedInitCodeSize === false) {
      checkMaxInitCodeSize(tx.common, tx.data.length);
    }
  }
  function getBaseJSON(tx) {
    return {
      type: bigIntToHex(BigInt(tx.type)),
      nonce: bigIntToHex(tx.nonce),
      gasLimit: bigIntToHex(tx.gasLimit),
      to: tx.to !== void 0 ? tx.to.toString() : void 0,
      value: bigIntToHex(tx.value),
      data: bytesToHex5(tx.data),
      v: tx.v !== void 0 ? bigIntToHex(tx.v) : void 0,
      r: tx.r !== void 0 ? bigIntToHex(tx.r) : void 0,
      s: tx.s !== void 0 ? bigIntToHex(tx.s) : void 0,
      chainId: bigIntToHex(tx.common.chainId()),
      yParity: tx.v === 0n || tx.v === 1n ? bigIntToHex(tx.v) : void 0
    };
  }

  // node_modules/@ethereumjs/tx/dist/esm/capabilities/eip1559.js
  function getUpfrontCost(tx, baseFee) {
    const prio = tx.maxPriorityFeePerGas;
    const maxBase = tx.maxFeePerGas - baseFee;
    const inclusionFeePerGas = prio < maxBase ? prio : maxBase;
    const gasPrice = inclusionFeePerGas + baseFee;
    return tx.gasLimit * gasPrice + tx.value;
  }
  function getEffectivePriorityFee(tx, baseFee) {
    if (baseFee === void 0 || baseFee > tx.maxFeePerGas) {
      throw EthereumJSErrorWithoutCode("Tx cannot pay baseFee");
    }
    const remainingFee = tx.maxFeePerGas - baseFee;
    return tx.maxPriorityFeePerGas < remainingFee ? tx.maxPriorityFeePerGas : remainingFee;
  }

  // node_modules/@ethereumjs/tx/dist/esm/capabilities/legacy.js
  function errorMsg(tx, msg) {
    return `${msg} (${tx.errorStr()})`;
  }
  function isSigned(tx) {
    const { v, r, s } = tx;
    if (v === void 0 || r === void 0 || s === void 0) {
      return false;
    } else {
      return true;
    }
  }
  function getDataGas(tx) {
    if (tx.cache.dataFee && tx.cache.dataFee.hardfork === tx.common.hardfork()) {
      return tx.cache.dataFee.value;
    }
    const txDataZero = tx.common.param("txDataZeroGas");
    const txDataNonZero = tx.common.param("txDataNonZeroGas");
    let cost = BIGINT_02;
    for (let i = 0; i < tx.data.length; i++) {
      tx.data[i] === 0 ? cost += txDataZero : cost += txDataNonZero;
    }
    if ((tx.to === void 0 || tx.to === null) && tx.common.isActivatedEIP(3860)) {
      const dataLength2 = BigInt(Math.ceil(tx.data.length / 32));
      const initCodeCost = tx.common.param("initCodeWordGas") * dataLength2;
      cost += initCodeCost;
    }
    if (Object.isFrozen(tx)) {
      tx.cache.dataFee = {
        value: cost,
        hardfork: tx.common.hardfork()
      };
    }
    return cost;
  }
  function getIntrinsicGas(tx) {
    const txFee = tx.common.param("txGas");
    let fee = tx.getDataGas();
    if (txFee)
      fee += txFee;
    let isContractCreation = false;
    try {
      isContractCreation = tx.toCreationAddress();
    } catch {
      isContractCreation = false;
    }
    if (tx.common.gteHardfork("homestead") && isContractCreation) {
      const txCreationFee = tx.common.param("txCreationGas");
      if (txCreationFee)
        fee += txCreationFee;
    }
    return fee;
  }
  function toCreationAddress(tx) {
    return tx.to === void 0 || tx.to.bytes.length === 0;
  }
  function hash2(tx) {
    var _a;
    if (!tx.isSigned()) {
      const msg = errorMsg(tx, "Cannot call hash method if transaction is not signed");
      throw EthereumJSErrorWithoutCode(msg);
    }
    const keccakFunction = tx.common.customCrypto.keccak256 ?? keccak_2562;
    if (Object.isFrozen(tx)) {
      (_a = tx.cache).hash ?? (_a.hash = keccakFunction(tx.serialize()));
      return tx.cache.hash;
    }
    return keccakFunction(tx.serialize());
  }
  function validateHighS(tx) {
    const { s } = tx;
    if (tx.common.gteHardfork("homestead") && s !== void 0 && s > SECP256K1_ORDER_DIV_2) {
      const msg = errorMsg(tx, "Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
      throw EthereumJSErrorWithoutCode(msg);
    }
  }
  function getSenderPublicKey(tx) {
    if (tx.cache.senderPubKey !== void 0) {
      return tx.cache.senderPubKey;
    }
    const msgHash = tx.getMessageToVerifySignature();
    const { v, r, s } = tx;
    validateHighS(tx);
    try {
      const ecrecoverFunction = tx.common.customCrypto.ecrecover ?? ecrecover;
      const sender = ecrecoverFunction(msgHash, v, bigIntToUnpaddedBytes(r), bigIntToUnpaddedBytes(s), tx.supports(Capability.EIP155ReplayProtection) ? tx.common.chainId() : void 0);
      if (Object.isFrozen(tx)) {
        tx.cache.senderPubKey = sender;
      }
      return sender;
    } catch {
      const msg = errorMsg(tx, "Invalid Signature");
      throw EthereumJSErrorWithoutCode(msg);
    }
  }
  function getEffectivePriorityFee2(gasPrice, baseFee) {
    if (baseFee !== void 0 && baseFee > gasPrice) {
      throw EthereumJSErrorWithoutCode("Tx cannot pay baseFee");
    }
    if (baseFee === void 0) {
      return gasPrice;
    }
    return gasPrice - baseFee;
  }
  function getValidationErrors(tx) {
    const errors = [];
    if (tx.isSigned() && !tx.verifySignature()) {
      errors.push("Invalid Signature");
    }
    let intrinsicGas = tx.getIntrinsicGas();
    if (tx.common.isActivatedEIP(7623)) {
      let tokens = 0;
      for (let i = 0; i < tx.data.length; i++) {
        tokens += tx.data[i] === 0 ? 1 : 4;
      }
      const floorCost = tx.common.param("txGas") + tx.common.param("totalCostFloorPerToken") * BigInt(tokens);
      intrinsicGas = bigIntMax(intrinsicGas, floorCost);
    }
    if (intrinsicGas > tx.gasLimit) {
      errors.push(`gasLimit is too low. The gasLimit is lower than the minimum gas limit of ${tx.getIntrinsicGas()}, the gas limit is: ${tx.gasLimit}`);
    }
    return errors;
  }
  function isValid(tx) {
    const errors = tx.getValidationErrors();
    return errors.length === 0;
  }
  function verifySignature(tx) {
    try {
      const publicKey = tx.getSenderPublicKey();
      return unpadBytes(publicKey).length !== 0;
    } catch {
      return false;
    }
  }
  function getSenderAddress(tx) {
    return new Address(publicToAddress(tx.getSenderPublicKey()));
  }
  function sign2(tx, privateKey, extraEntropy = true) {
    if (privateKey.length !== 32) {
      const msg = errorMsg(tx, "Private key must be 32 bytes in length.");
      throw EthereumJSErrorWithoutCode(msg);
    }
    let hackApplied = false;
    if (tx.type === TransactionType.Legacy && tx.common.gteHardfork("spuriousDragon") && !tx.supports(Capability.EIP155ReplayProtection)) {
      ;
      tx["activeCapabilities"].push(Capability.EIP155ReplayProtection);
      hackApplied = true;
    }
    const msgHash = tx.getHashedMessageToSign();
    const ecSignFunction = tx.common.customCrypto?.ecsign ?? secp256k12.sign;
    const signatureBytes = ecSignFunction(msgHash, privateKey, {
      extraEntropy,
      format: "recovered",
      prehash: false
    });
    const { recovery, r, s } = secp256k12.Signature.fromBytes(signatureBytes, "recovered");
    if (recovery === void 0) {
      throw EthereumJSErrorWithoutCode("Invalid signature recovery");
    }
    const signedTx = tx.addSignature(BigInt(recovery), r, s, true);
    if (hackApplied) {
      const index = tx["activeCapabilities"].indexOf(Capability.EIP155ReplayProtection);
      if (index > -1) {
        ;
        tx["activeCapabilities"].splice(index, 1);
      }
    }
    return signedTx;
  }
  function getSharedErrorPostfix(tx) {
    let hash3 = "";
    try {
      hash3 = tx.isSigned() ? bytesToHex5(tx.hash()) : "not available (unsigned)";
    } catch {
      hash3 = "error";
    }
    let isSigned2 = "";
    try {
      isSigned2 = tx.isSigned().toString();
    } catch {
      hash3 = "error";
    }
    let hf = "";
    try {
      hf = tx.common.hardfork();
    } catch {
      hf = "error";
    }
    let postfix = `tx type=${tx.type} hash=${hash3} nonce=${tx.nonce} value=${tx.value} `;
    postfix += `signed=${isSigned2} hf=${hf}`;
    return postfix;
  }

  // node_modules/@ethereumjs/tx/dist/esm/capabilities/eip2718.js
  function getHashedMessageToSign(tx) {
    const keccakFunction = tx.common.customCrypto.keccak256 ?? keccak_2562;
    return keccakFunction(tx.getMessageToSign());
  }
  function serialize(tx, base) {
    return concatBytes6(txTypeBytes(tx.type), RLP.encode(base ?? tx.raw()));
  }
  function validateYParity(tx) {
    const { v } = tx;
    if (v !== void 0 && v !== BIGINT_02 && v !== BIGINT_1) {
      const msg = errorMsg(tx, "The y-parity of the transaction should either be 0 or 1");
      throw EthereumJSErrorWithoutCode(msg);
    }
  }

  // node_modules/@ethereumjs/tx/dist/esm/capabilities/eip2930.js
  function getDataGas2(tx) {
    const eip2930Gas = BigInt(getAccessListDataGas(tx));
    return getDataGas(tx) + eip2930Gas;
  }
  function getAccessListDataGas(tx) {
    const { common, accessList } = tx;
    const accessListStorageKeyCost = common.param("accessListStorageKeyGas");
    const accessListAddressCost = common.param("accessListAddressGas");
    const totalSlots = accessList.reduce((sum, item) => sum + item[1].length, 0);
    const addresses = accessList.length;
    return addresses * Number(accessListAddressCost) + totalSlots * Number(accessListStorageKeyCost);
  }
  function verifyAccessList(tx) {
    const accessList = tx.accessList;
    for (const accessListItem of accessList) {
      if (accessListItem.length !== 2) {
        throw EthereumJSErrorWithoutCode("Invalid EIP-2930 transaction: access list item should have 2 elements");
      }
      const [address, storageSlots] = accessListItem;
      if (address.length !== 20) {
        throw EthereumJSErrorWithoutCode("Invalid EIP-2930 transaction: address length should be 20 bytes");
      }
      for (const slot of storageSlots) {
        if (slot.length !== 32) {
          throw EthereumJSErrorWithoutCode("Invalid EIP-2930 transaction: storage slot length should be 32 bytes");
        }
      }
    }
  }

  // node_modules/@ethereumjs/tx/dist/esm/util/access.js
  function accessListBytesToJSON(accessList) {
    return accessList.map(([address, storageSlots]) => ({
      address: bytesToHex5(setLengthLeft(address, 20)),
      storageKeys: storageSlots.map((slot) => bytesToHex5(setLengthLeft(slot, 32)))
    }));
  }
  function accessListJSONToBytes(accessList) {
    return accessList.map((item) => [
      hexToBytes5(item.address),
      item.storageKeys.map((key) => hexToBytes5(key))
    ]);
  }

  // node_modules/@ethereumjs/tx/dist/esm/1559/tx.js
  var FeeMarket1559Tx = class {
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */
    constructor(txData, opts = {}) {
      this.type = TransactionType.FeeMarketEIP1559;
      this.cache = {};
      this.activeCapabilities = [];
      sharedConstructor(this, { ...txData, type: TransactionType.FeeMarketEIP1559 }, opts);
      const { chainId, accessList: rawAccessList, maxFeePerGas, maxPriorityFeePerGas } = txData;
      const accessList = rawAccessList ?? [];
      if (chainId !== void 0 && bytesToBigInt(toBytes3(chainId)) !== this.common.chainId()) {
        throw EthereumJSErrorWithoutCode(`Common chain ID ${this.common.chainId} not matching the derived chain ID ${chainId}`);
      }
      this.chainId = this.common.chainId();
      if (!this.common.isActivatedEIP(1559)) {
        throw EthereumJSErrorWithoutCode("EIP-1559 not enabled on Common");
      }
      this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930]);
      this.accessList = isAccessList(accessList) ? accessListJSONToBytes(accessList) : accessList;
      verifyAccessList(this);
      this.maxFeePerGas = bytesToBigInt(toBytes3(maxFeePerGas));
      this.maxPriorityFeePerGas = bytesToBigInt(toBytes3(maxPriorityFeePerGas));
      valueOverflowCheck({
        maxFeePerGas: this.maxFeePerGas,
        maxPriorityFeePerGas: this.maxPriorityFeePerGas
      });
      if (this.gasLimit * this.maxFeePerGas > MAX_INTEGER) {
        const msg = errorMsg(this, "gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
        throw EthereumJSErrorWithoutCode(msg);
      }
      if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
        const msg = errorMsg(this, "maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
        throw EthereumJSErrorWithoutCode(msg);
      }
      validateYParity(this);
      validateHighS(this);
      const freeze = opts?.freeze ?? true;
      if (freeze) {
        Object.freeze(this);
      }
    }
    /**
     * Checks if a tx type defining capability is active
     * on a tx, for example the EIP-1559 fee market mechanism
     * or the EIP-2930 access list feature.
     *
     * Note that this is different from the tx type itself,
     * so EIP-2930 access lists can very well be active
     * on an EIP-1559 tx for example.
     *
     * This method can be useful for feature checks if the
     * tx type is unknown (e.g. when instantiated with
     * the tx factory).
     *
     * See `Capabilities` in the `types` module for a reference
     * on all supported capabilities.
     */
    supports(capability) {
      return this.activeCapabilities.includes(capability);
    }
    /**
     * The amount of gas paid for the data in this tx
     */
    getDataGas() {
      return getDataGas2(this);
    }
    /**
     * Returns the minimum of calculated priority fee (from maxFeePerGas and baseFee) and maxPriorityFeePerGas
     * @param baseFee Base fee retrieved from block
     */
    getEffectivePriorityFee(baseFee) {
      return getEffectivePriorityFee(this, baseFee);
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     * @param baseFee The base fee of the block (will be set to 0 if not provided)
     */
    getUpfrontCost(baseFee = BIGINT_02) {
      return getUpfrontCost(this, baseFee);
    }
    /**
     * The minimum gas limit which the tx to have to be valid.
     * This covers costs as the standard fee (21000 gas), the data fee (paid for each calldata byte),
     * the optional creation fee (if the transaction creates a contract), and if relevant the gas
     * to be paid for access lists (EIP-2930) and authority lists (EIP-7702).
     */
    getIntrinsicGas() {
      return getIntrinsicGas(this);
    }
    // TODO figure out if this is necessary
    /**
     * If the tx's `to` is to the creation address
     */
    toCreationAddress() {
      return toCreationAddress(this);
    }
    /**
     * Returns a Uint8Array Array of the raw Bytes of the EIP-1559 transaction, in order.
     *
     * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS]`
     *
     * Use {@link FeeMarket1559Tx.serialize} to add a transaction to a block
     * with {@link createBlockFromBytesArray}.
     *
     * For an unsigned tx this method uses the empty Bytes values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link FeeMarket1559Tx.getMessageToSign}.
     */
    raw() {
      return [
        bigIntToUnpaddedBytes(this.chainId),
        bigIntToUnpaddedBytes(this.nonce),
        bigIntToUnpaddedBytes(this.maxPriorityFeePerGas),
        bigIntToUnpaddedBytes(this.maxFeePerGas),
        bigIntToUnpaddedBytes(this.gasLimit),
        this.to !== void 0 ? this.to.bytes : new Uint8Array(0),
        bigIntToUnpaddedBytes(this.value),
        this.data,
        this.accessList,
        this.v !== void 0 ? bigIntToUnpaddedBytes(this.v) : new Uint8Array(0),
        this.r !== void 0 ? bigIntToUnpaddedBytes(this.r) : new Uint8Array(0),
        this.s !== void 0 ? bigIntToUnpaddedBytes(this.s) : new Uint8Array(0)
      ];
    }
    /**
     * Returns the serialized encoding of the EIP-1559 transaction.
     *
     * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS])`
     *
     * Note that in contrast to the legacy tx serialization format this is not
     * valid RLP any more due to the raw tx type preceding and concatenated to
     * the RLP encoding of the values.
     */
    serialize() {
      return serialize(this);
    }
    /**
     * Returns the raw serialized unsigned tx, which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     *
     * ```javascript
     * const serializedMessage = tx.getMessageToSign() // use this for the HW wallet input
     * ```
     * @returns Serialized unsigned transaction payload
     */
    getMessageToSign() {
      return serialize(this, this.raw().slice(0, 9));
    }
    /**
     * Returns the hashed serialized unsigned tx, which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     * @returns Keccak hash of the unsigned transaction payload
     */
    getHashedMessageToSign() {
      return getHashedMessageToSign(this);
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link FeeMarket1559Tx.getMessageToSign} to get a tx hash for the purpose of signing.
     * @returns Hash of the serialized signed transaction
     */
    hash() {
      return hash2(this);
    }
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     * @returns Hash used when verifying the signature
     */
    getMessageToVerifySignature() {
      return this.getHashedMessageToSign();
    }
    /**
     * Returns the public key of the sender
     * @returns Sender public key
     */
    getSenderPublicKey() {
      return getSenderPublicKey(this);
    }
    /**
     * Adds signature values and returns a new EIP-1559 transaction instance.
     * @param v - Recovery parameter (y-parity)
     * @param r - Signature `r` value
     * @param s - Signature `s` value
     * @returns Newly created transaction that includes the signature
     */
    addSignature(v, r, s) {
      r = toBytes3(r);
      s = toBytes3(s);
      const opts = { ...this.txOptions, common: this.common };
      return createFeeMarket1559Tx({
        chainId: this.chainId,
        nonce: this.nonce,
        maxPriorityFeePerGas: this.maxPriorityFeePerGas,
        maxFeePerGas: this.maxFeePerGas,
        gasLimit: this.gasLimit,
        to: this.to,
        value: this.value,
        data: this.data,
        accessList: this.accessList,
        v,
        r: bytesToBigInt(r),
        s: bytesToBigInt(s)
      }, opts);
    }
    /**
     * Returns an object with the JSON representation of the transaction
     * @returns JSON encoding of the transaction
     */
    toJSON() {
      const accessListJSON = accessListBytesToJSON(this.accessList);
      const baseJSON = getBaseJSON(this);
      return {
        ...baseJSON,
        chainId: bigIntToHex(this.chainId),
        maxPriorityFeePerGas: bigIntToHex(this.maxPriorityFeePerGas),
        maxFeePerGas: bigIntToHex(this.maxFeePerGas),
        accessList: accessListJSON
      };
    }
    /**
     * Runs validation logic and returns encountered errors, if any.
     * @returns Array of validation error messages.
     */
    getValidationErrors() {
      return getValidationErrors(this);
    }
    /**
     * @returns true if the transaction passes validation
     */
    isValid() {
      return isValid(this);
    }
    /**
     * Verifies the embedded signature.
     * @returns true if signature verification succeeds
     */
    verifySignature() {
      return verifySignature(this);
    }
    /**
     * Recovers the sender address from the signature.
     * @returns Sender {@link Address}
     */
    getSenderAddress() {
      return getSenderAddress(this);
    }
    /**
     * Signs the transaction with the provided private key and returns the signed instance.
     * @param privateKey - 32-byte private key
     * @param extraEntropy - Optional entropy passed to the signing routine
     * @returns Newly signed transaction
     */
    sign(privateKey, extraEntropy = false) {
      return sign2(this, privateKey, extraEntropy);
    }
    /**
     * Reports whether the transaction already contains `v`, `r`, and `s`.
     * @returns true if signature parts are present
     */
    isSigned() {
      const { v, r, s } = this;
      if (v === void 0 || r === void 0 || s === void 0) {
        return false;
      } else {
        return true;
      }
    }
    /**
     * Return a compact error string representation of the object
     * @returns Human-readable error summary
     */
    errorStr() {
      let errorStr = getSharedErrorPostfix(this);
      errorStr += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`;
      return errorStr;
    }
  };

  // node_modules/@ethereumjs/tx/dist/esm/1559/constructors.js
  function createFeeMarket1559Tx(txData, opts = {}) {
    return new FeeMarket1559Tx(txData, opts);
  }

  // node_modules/@ethereumjs/tx/dist/esm/2930/tx.js
  var AccessList2930Tx = class {
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */
    constructor(txData, opts = {}) {
      this.type = TransactionType.AccessListEIP2930;
      this.cache = {};
      this.activeCapabilities = [];
      sharedConstructor(this, { ...txData, type: TransactionType.AccessListEIP2930 }, opts);
      const { chainId, accessList: rawAccessList, gasPrice } = txData;
      const accessList = rawAccessList ?? [];
      if (chainId !== void 0 && bytesToBigInt(toBytes3(chainId)) !== this.common.chainId()) {
        throw EthereumJSErrorWithoutCode(`Common chain ID ${this.common.chainId} not matching the derived chain ID ${chainId}`);
      }
      this.chainId = this.common.chainId();
      if (!this.common.isActivatedEIP(2930)) {
        throw EthereumJSErrorWithoutCode("EIP-2930 not enabled on Common");
      }
      this.activeCapabilities = this.activeCapabilities.concat([2718, 2930]);
      this.accessList = isAccessList(accessList) ? accessListJSONToBytes(accessList) : accessList;
      verifyAccessList(this);
      this.gasPrice = bytesToBigInt(toBytes3(gasPrice));
      valueOverflowCheck({ gasPrice: this.gasPrice });
      if (this.gasPrice * this.gasLimit > MAX_INTEGER) {
        const msg = errorMsg(this, "gasLimit * gasPrice cannot exceed MAX_INTEGER");
        throw EthereumJSErrorWithoutCode(msg);
      }
      validateYParity(this);
      validateHighS(this);
      const freeze = opts?.freeze ?? true;
      if (freeze) {
        Object.freeze(this);
      }
    }
    /**
     * Checks if a tx type defining capability is active
     * on a tx, for example the EIP-1559 fee market mechanism
     * or the EIP-2930 access list feature.
     *
     * Note that this is different from the tx type itself,
     * so EIP-2930 access lists can very well be active
     * on an EIP-1559 tx for example.
     *
     * This method can be useful for feature checks if the
     * tx type is unknown (e.g. when instantiated with
     * the tx factory).
     *
     * See `Capabilities` in the `types` module for a reference
     * on all supported capabilities.
     */
    supports(capability) {
      return this.activeCapabilities.includes(capability);
    }
    getEffectivePriorityFee(baseFee) {
      return getEffectivePriorityFee2(this.gasPrice, baseFee);
    }
    /**
     * The amount of gas paid for the data in this tx
     */
    getDataGas() {
      return getDataGas2(this);
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     */
    getUpfrontCost() {
      return this.gasLimit * this.gasPrice + this.value;
    }
    /**
     * The minimum gas limit which the tx to have to be valid.
     * This covers costs as the standard fee (21000 gas), the data fee (paid for each calldata byte),
     * the optional creation fee (if the transaction creates a contract), and if relevant the gas
     * to be paid for access lists (EIP-2930) and authority lists (EIP-7702).
     */
    getIntrinsicGas() {
      return getIntrinsicGas(this);
    }
    // TODO figure out if this is necessary
    /**
     * If the tx's `to` is to the creation address
     */
    toCreationAddress() {
      return toCreationAddress(this);
    }
    /**
     * Returns a Uint8Array Array of the raw Bytes of the EIP-2930 transaction, in order.
     *
     * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)]`
     *
     * Use {@link AccessList2930Tx.serialize} to add a transaction to a block
     * with {@link createBlockFromBytesArray}.
     *
     * For an unsigned tx this method uses the empty Bytes values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link AccessList2930Tx.getMessageToSign}.
     */
    raw() {
      return [
        bigIntToUnpaddedBytes(this.chainId),
        bigIntToUnpaddedBytes(this.nonce),
        bigIntToUnpaddedBytes(this.gasPrice),
        bigIntToUnpaddedBytes(this.gasLimit),
        this.to !== void 0 ? this.to.bytes : new Uint8Array(0),
        bigIntToUnpaddedBytes(this.value),
        this.data,
        this.accessList,
        this.v !== void 0 ? bigIntToUnpaddedBytes(this.v) : new Uint8Array(0),
        this.r !== void 0 ? bigIntToUnpaddedBytes(this.r) : new Uint8Array(0),
        this.s !== void 0 ? bigIntToUnpaddedBytes(this.s) : new Uint8Array(0)
      ];
    }
    /**
     * Returns the serialized encoding of the EIP-2930 transaction.
     *
     * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)])`
     *
     * Note that in contrast to the legacy tx serialization format this is not
     * valid RLP any more due to the raw tx type preceding and concatenated to
     * the RLP encoding of the values.
     */
    serialize() {
      return serialize(this);
    }
    /**
     * Returns the raw serialized unsigned tx, which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     *
     * ```javascript
     * const serializedMessage = tx.getMessageToSign() // use this for the HW wallet input
     * ```
     * @returns Serialized unsigned transaction payload
     */
    getMessageToSign() {
      return serialize(this, this.raw().slice(0, 8));
    }
    /**
     * Returns the hashed serialized unsigned tx, which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     * @returns Keccak hash of the unsigned transaction payload
     */
    getHashedMessageToSign() {
      return getHashedMessageToSign(this);
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     * @returns Hash of the serialized signed transaction
     */
    hash() {
      return hash2(this);
    }
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     * @returns Hash used when verifying the signature
     */
    getMessageToVerifySignature() {
      return this.getHashedMessageToSign();
    }
    /**
     * Returns the public key of the sender
     * @returns Sender public key
     */
    getSenderPublicKey() {
      return getSenderPublicKey(this);
    }
    /**
     * Adds the provided signature values and returns a new transaction instance.
     * @param v - Recovery parameter (y-parity)
     * @param r - `r` component of the signature
     * @param s - `s` component of the signature
     * @returns New `AccessList2930Tx` with the supplied signature
     */
    addSignature(v, r, s) {
      r = toBytes3(r);
      s = toBytes3(s);
      const opts = { ...this.txOptions, common: this.common };
      return createAccessList2930Tx({
        chainId: this.chainId,
        nonce: this.nonce,
        gasPrice: this.gasPrice,
        gasLimit: this.gasLimit,
        to: this.to,
        value: this.value,
        data: this.data,
        accessList: this.accessList,
        v,
        r: bytesToBigInt(r),
        s: bytesToBigInt(s)
      }, opts);
    }
    /**
     * Returns an object with the JSON representation of the transaction
     * @returns JSON encoding of the transaction
     */
    toJSON() {
      const accessListJSON = accessListBytesToJSON(this.accessList);
      const baseJSON = getBaseJSON(this);
      return {
        ...baseJSON,
        chainId: bigIntToHex(this.chainId),
        gasPrice: bigIntToHex(this.gasPrice),
        accessList: accessListJSON
      };
    }
    /**
     * Runs transaction validation and returns any discovered errors.
     * @returns Array of validation error messages
     */
    getValidationErrors() {
      return getValidationErrors(this);
    }
    /**
     * @returns true if the transaction has no validation errors
     */
    isValid() {
      return isValid(this);
    }
    /**
     * Checks whether the signature currently attached to the transaction is valid.
     * @returns true if signature verification succeeds
     */
    verifySignature() {
      return verifySignature(this);
    }
    /**
     * Returns the signer's address recovered from the signature.
     * @returns Sender {@link Address}
     */
    getSenderAddress() {
      return getSenderAddress(this);
    }
    /**
     * Signs the transaction with the provided private key and returns a new instance.
     * @param privateKey - 32-byte private key
     * @param extraEntropy - Optional entropy fed into the signing algorithm
     * @returns Newly signed transaction
     */
    sign(privateKey, extraEntropy = false) {
      return sign2(this, privateKey, extraEntropy);
    }
    /**
     * Reports whether the transaction already contains signature values.
     * @returns true if signature parts are present
     */
    isSigned() {
      return isSigned(this);
    }
    /**
     * Return a compact error string representation of the object
     */
    errorStr() {
      let errorStr = getSharedErrorPostfix(this);
      errorStr += ` gasPrice=${this.gasPrice} accessListCount=${this.accessList?.length ?? 0}`;
      return errorStr;
    }
  };

  // node_modules/@ethereumjs/tx/dist/esm/2930/constructors.js
  function createAccessList2930Tx(txData, opts = {}) {
    return new AccessList2930Tx(txData, opts);
  }

  // node_modules/@ethereumjs/tx/dist/esm/4844/tx.js
  var NetworkWrapperType = {
    EIP4844: 0,
    EIP7594: 1
  };
  var Blob4844Tx = class {
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static constructors or factory methods to assist in creating a Transaction object from
     * varying data types.
     */
    constructor(txData, opts = {}) {
      this.type = TransactionType.BlobEIP4844;
      this.cache = {};
      this.activeCapabilities = [];
      const common = getCommon(opts.common);
      const networkWrapperVersion = txData.networkWrapperVersion !== void 0 ? bytesToInt(toBytes3(txData.networkWrapperVersion)) : void 0;
      if (networkWrapperVersion !== void 0) {
        switch (networkWrapperVersion) {
          case NetworkWrapperType.EIP7594:
            if (!common.isActivatedEIP(7594)) {
              throw EthereumJSErrorWithoutCode("EIP-7594 not enabled on Common for EIP-7594 network wrapper version");
            }
            break;
          case NetworkWrapperType.EIP4844:
            if (common.isActivatedEIP(7594)) {
              throw EthereumJSErrorWithoutCode("EIP-7594 is active on Common for EIP-4844 network wrapper version");
            }
            break;
          default:
            throw EthereumJSErrorWithoutCode(`Invalid networkWrapperVersion=${networkWrapperVersion}`);
        }
      }
      sharedConstructor(this, { ...txData, type: TransactionType.BlobEIP4844 }, opts);
      const { chainId, accessList: rawAccessList, maxFeePerGas, maxPriorityFeePerGas, maxFeePerBlobGas } = txData;
      const accessList = rawAccessList ?? [];
      if (chainId !== void 0 && bytesToBigInt(toBytes3(chainId)) !== this.common.chainId()) {
        throw EthereumJSErrorWithoutCode(`Common chain ID ${this.common.chainId} not matching the derived chain ID ${chainId}`);
      }
      this.chainId = this.common.chainId();
      if (!this.common.isActivatedEIP(1559)) {
        throw EthereumJSErrorWithoutCode("EIP-1559 not enabled on Common");
      }
      if (!this.common.isActivatedEIP(4844)) {
        throw EthereumJSErrorWithoutCode("EIP-4844 not enabled on Common");
      }
      this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930]);
      this.accessList = isAccessList(accessList) ? accessListJSONToBytes(accessList) : accessList;
      verifyAccessList(this);
      this.maxFeePerGas = bytesToBigInt(toBytes3(maxFeePerGas));
      this.maxPriorityFeePerGas = bytesToBigInt(toBytes3(maxPriorityFeePerGas));
      valueOverflowCheck({
        maxFeePerGas: this.maxFeePerGas,
        maxPriorityFeePerGas: this.maxPriorityFeePerGas
      });
      validateNotArray(txData);
      if (this.gasLimit * this.maxFeePerGas > MAX_INTEGER) {
        const msg = errorMsg(this, "gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
        throw EthereumJSErrorWithoutCode(msg);
      }
      if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
        const msg = errorMsg(this, "maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
        throw EthereumJSErrorWithoutCode(msg);
      }
      this.maxFeePerBlobGas = bytesToBigInt(toBytes3((maxFeePerBlobGas ?? "") === "" ? "0x" : maxFeePerBlobGas));
      this.blobVersionedHashes = (txData.blobVersionedHashes ?? []).map((vh) => toType(vh, TypeOutput.PrefixedHexString));
      validateYParity(this);
      validateHighS(this);
      for (const hash3 of this.blobVersionedHashes) {
        if (hash3.length !== 66) {
          const msg = errorMsg(this, "versioned hash is invalid length");
          throw EthereumJSErrorWithoutCode(msg);
        }
        if (BigInt(parseInt(hash3.slice(2, 4))) !== this.common.param("blobCommitmentVersionKzg")) {
          const msg = errorMsg(this, "versioned hash does not start with KZG commitment version");
          throw EthereumJSErrorWithoutCode(msg);
        }
      }
      const limitBlobsPerTx = this.common.param("maxBlobGasPerBlock") / this.common.param("blobGasPerBlob");
      if (this.blobVersionedHashes.length > limitBlobsPerTx) {
        const msg = errorMsg(this, `tx causes total blob gas of ${Number(this.common.param("blobGasPerBlob")) * this.blobVersionedHashes.length} to exceed maximum blob gas per block of ${this.common.param("maxBlobGasPerBlock")}`);
        throw EthereumJSErrorWithoutCode(msg);
      }
      if (this.common.isActivatedEIP(7594)) {
        const maxBlobsPerTx = this.common.param("maxBlobsPerTx");
        if (this.blobVersionedHashes.length > maxBlobsPerTx) {
          const msg = errorMsg(this, `${this.blobVersionedHashes.length} blobs exceeds max ${maxBlobsPerTx} blobs per tx (EIP-7594)`);
          throw EthereumJSErrorWithoutCode(msg);
        }
      }
      if (this.blobVersionedHashes.length === 0) {
        const msg = errorMsg(this, `tx should contain at least one blob`);
        throw EthereumJSErrorWithoutCode(msg);
      }
      if (this.to === void 0) {
        const msg = errorMsg(this, `tx should have a "to" field and cannot be used to create contracts`);
        throw EthereumJSErrorWithoutCode(msg);
      }
      this.networkWrapperVersion = txData.networkWrapperVersion !== void 0 ? bytesToInt(toBytes3(txData.networkWrapperVersion)) : void 0;
      this.blobs = txData.blobs?.map((blob) => toType(blob, TypeOutput.PrefixedHexString));
      if (this.networkWrapperVersion === void 0 && this.blobs !== void 0) {
        if (this.common.isActivatedEIP(7594)) {
          this.networkWrapperVersion = 1;
        } else {
          this.networkWrapperVersion = 0;
        }
      }
      if (this.networkWrapperVersion !== void 0 && this.blobs === void 0) {
        const msg = errorMsg(this, "tx is not allowed to be in network wrapper format if no blob list is provided");
        throw EthereumJSErrorWithoutCode(msg);
      }
      this.kzgCommitments = txData.kzgCommitments?.map((commitment) => toType(commitment, TypeOutput.PrefixedHexString));
      this.kzgProofs = txData.kzgProofs?.map((proof) => toType(proof, TypeOutput.PrefixedHexString));
      if (this.blobs !== void 0) {
        if (this.kzgCommitments === void 0) {
          const msg = errorMsg(this, "kzgCommitments are mandatory if blobs are provided");
          throw EthereumJSErrorWithoutCode(msg);
        }
        if (this.kzgProofs === void 0) {
          const msg = errorMsg(this, "kzgProofs are mandatory if blobs are provided");
          throw EthereumJSErrorWithoutCode(msg);
        }
      }
      const freeze = opts?.freeze ?? true;
      if (freeze) {
        Object.freeze(this);
      }
    }
    /**
     * Checks if a tx type defining capability is active
     * on a tx, for example the EIP-1559 fee market mechanism
     * or the EIP-2930 access list feature.
     *
     * Note that this is different from the tx type itself,
     * so EIP-2930 access lists can very well be active
     * on an EIP-1559 tx for example.
     *
     * This method can be useful for feature checks if the
     * tx type is unknown (e.g. when instantiated with
     * the tx factory).
     *
     * See `Capabilities` in the `types` module for a reference
     * on all supported capabilities.
     */
    supports(capability) {
      return this.activeCapabilities.includes(capability);
    }
    /**
     * Returns the minimum of calculated priority fee (from maxFeePerGas and baseFee) and maxPriorityFeePerGas
     * @param baseFee Base fee retrieved from block
     */
    getEffectivePriorityFee(baseFee) {
      return getEffectivePriorityFee(this, baseFee);
    }
    /**
     * The amount of gas paid for the data in this tx
     */
    getDataGas() {
      return getDataGas2(this);
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     * @param baseFee The base fee of the block (will be set to 0 if not provided)
     */
    getUpfrontCost(baseFee = BIGINT_02) {
      return getUpfrontCost(this, baseFee);
    }
    /**
     * Blob4844Tx cannot create contracts
     */
    toCreationAddress() {
      throw EthereumJSErrorWithoutCode("Blob4844Tx cannot create contracts");
    }
    /**
     * The minimum gas limit which the tx to have to be valid.
     * This covers costs as the standard fee (21000 gas), the data fee (paid for each calldata byte),
     * the optional creation fee (if the transaction creates a contract), and if relevant the gas
     * to be paid for access lists (EIP-2930) and authority lists (EIP-7702).
     */
    getIntrinsicGas() {
      return getIntrinsicGas(this);
    }
    /**
     * Returns a Uint8Array Array of the raw Bytes of the EIP-4844 transaction, in order.
     *
     * Format: [chain_id, nonce, max_priority_fee_per_gas, max_fee_per_gas, gas_limit, to, value, data,
     * access_list, max_fee_per_data_gas, blob_versioned_hashes, y_parity, r, s]`.
     *
     * Use {@link Blob4844Tx.serialize} to add a transaction to a block
     * with {@link createBlockFromBytesArray}.
     *
     * For an unsigned tx this method uses the empty Bytes values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link Blob4844Tx.getMessageToSign}.
     */
    raw() {
      return [
        bigIntToUnpaddedBytes(this.chainId),
        bigIntToUnpaddedBytes(this.nonce),
        bigIntToUnpaddedBytes(this.maxPriorityFeePerGas),
        bigIntToUnpaddedBytes(this.maxFeePerGas),
        bigIntToUnpaddedBytes(this.gasLimit),
        this.to !== void 0 ? this.to.bytes : new Uint8Array(0),
        bigIntToUnpaddedBytes(this.value),
        this.data,
        this.accessList,
        bigIntToUnpaddedBytes(this.maxFeePerBlobGas),
        this.blobVersionedHashes.map((hash3) => hexToBytes5(hash3)),
        this.v !== void 0 ? bigIntToUnpaddedBytes(this.v) : new Uint8Array(0),
        this.r !== void 0 ? bigIntToUnpaddedBytes(this.r) : new Uint8Array(0),
        this.s !== void 0 ? bigIntToUnpaddedBytes(this.s) : new Uint8Array(0)
      ];
    }
    /**
     * Returns the serialized encoding of the EIP-4844 transaction.
     *
     * Format: `0x03 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * access_list, max_fee_per_data_gas, blob_versioned_hashes, y_parity, r, s])`.
     *
     * Note that in contrast to the legacy tx serialization format this is not
     * valid RLP any more due to the raw tx type preceding and concatenated to
     * the RLP encoding of the values.
     */
    serialize() {
      return serialize(this);
    }
    /**
     * @returns the serialized form of a blob transaction in the network wrapper format
     * This format is used for gossipping mempool transactions over devp2p or when
     * submitting a transaction via RPC.
     */
    serializeNetworkWrapper() {
      if (this.networkWrapperVersion === void 0 || this.blobs === void 0 || this.kzgCommitments === void 0 || this.kzgProofs === void 0) {
        throw EthereumJSErrorWithoutCode("cannot serialize network wrapper without networkWrapperVersion, blobs, KZG commitments and KZG proofs provided");
      }
      const networkSerialized = this.networkWrapperVersion === NetworkWrapperType.EIP4844 ? serialize(this, [this.raw(), this.blobs, this.kzgCommitments, this.kzgProofs]) : serialize(this, [
        this.raw(),
        intToUnpaddedBytes(this.networkWrapperVersion),
        this.blobs,
        this.kzgCommitments,
        this.kzgProofs
      ]);
      return networkSerialized;
    }
    /**
     * Returns the raw serialized unsigned tx, which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     *
     * ```javascript
     * const serializedMessage = tx.getMessageToSign() // use this for the HW wallet input
     * ```
     * @returns Serialized unsigned transaction payload
     */
    getMessageToSign() {
      return serialize(this, this.raw().slice(0, 11));
    }
    /**
     * Returns the hashed serialized unsigned tx, which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     * @returns Keccak hash of the unsigned transaction payload
     */
    getHashedMessageToSign() {
      return getHashedMessageToSign(this);
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link Blob4844Tx.getMessageToSign} to get a tx hash for the purpose of signing.
     * @returns Hash of the serialized signed transaction
     */
    hash() {
      return hash2(this);
    }
    /**
     * Returns the hashed unsigned transaction that should be used for signature verification.
     * @returns Hash of the unsigned transaction payload
     */
    getMessageToVerifySignature() {
      return this.getHashedMessageToSign();
    }
    /**
     * Returns the public key of the sender
     * @returns Sender public key
     */
    getSenderPublicKey() {
      return getSenderPublicKey(this);
    }
    /**
     * Produces a JSON representation compliant with the execution API.
     * @returns JSON encoding of the transaction
     */
    toJSON() {
      const accessListJSON = accessListBytesToJSON(this.accessList);
      const baseJSON = getBaseJSON(this);
      return {
        ...baseJSON,
        chainId: bigIntToHex(this.chainId),
        maxPriorityFeePerGas: bigIntToHex(this.maxPriorityFeePerGas),
        maxFeePerGas: bigIntToHex(this.maxFeePerGas),
        accessList: accessListJSON,
        maxFeePerBlobGas: bigIntToHex(this.maxFeePerBlobGas),
        blobVersionedHashes: this.blobVersionedHashes
      };
    }
    /**
     * Adds signature values (and optional network wrapper fields) and returns a new transaction.
     * @param v - Recovery parameter
     * @param r - Signature `r` value
     * @param s - Signature `s` value
     * @returns New `Blob4844Tx` instance containing the signature
     */
    addSignature(v, r, s) {
      r = toBytes3(r);
      s = toBytes3(s);
      const opts = { ...this.txOptions, common: this.common };
      return createBlob4844Tx({
        chainId: this.chainId,
        nonce: this.nonce,
        maxPriorityFeePerGas: this.maxPriorityFeePerGas,
        maxFeePerGas: this.maxFeePerGas,
        gasLimit: this.gasLimit,
        to: this.to,
        value: this.value,
        data: this.data,
        accessList: this.accessList,
        v,
        r: bytesToBigInt(r),
        s: bytesToBigInt(s),
        maxFeePerBlobGas: this.maxFeePerBlobGas,
        networkWrapperVersion: this.networkWrapperVersion,
        blobVersionedHashes: this.blobVersionedHashes,
        blobs: this.blobs,
        kzgCommitments: this.kzgCommitments,
        kzgProofs: this.kzgProofs
      }, opts);
    }
    /**
     * Returns validation errors for this transaction, if any.
     * @returns Array of validation error messages
     */
    getValidationErrors() {
      return getValidationErrors(this);
    }
    /**
     * @returns true if the transaction has no validation errors
     */
    isValid() {
      return isValid(this);
    }
    /**
     * Verifies whether the attached signature is valid.
     * @returns true if signature verification succeeds
     */
    verifySignature() {
      return verifySignature(this);
    }
    /**
     * Returns the recovered sender address.
     * @returns Sender {@link Address}
     */
    getSenderAddress() {
      return getSenderAddress(this);
    }
    /**
     * Signs the transaction with the provided private key and returns the signed instance.
     * @param privateKey - 32-byte private key used for signing
     * @param extraEntropy - Optional entropy passed to the signing routine
     * @returns Newly signed transaction
     */
    sign(privateKey, extraEntropy = false) {
      return sign2(this, privateKey, extraEntropy);
    }
    /**
     * Indicates whether the transaction already carries signature values.
     * @returns true if signature parts are present
     */
    isSigned() {
      const { v, r, s } = this;
      if (v === void 0 || r === void 0 || s === void 0) {
        return false;
      } else {
        return true;
      }
    }
    /**
     * Return a compact error string representation of the object
     * @returns Human-readable error summary
     */
    errorStr() {
      let errorStr = getSharedErrorPostfix(this);
      errorStr += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`;
      return errorStr;
    }
    /**
     * @returns the number of blobs included with this transaction
     */
    numBlobs() {
      return this.blobVersionedHashes.length;
    }
  };

  // node_modules/@ethereumjs/tx/dist/esm/4844/constructors.js
  function createBlob4844Tx(txData, opts) {
    if (opts?.common?.customCrypto?.kzg === void 0) {
      throw EthereumJSErrorWithoutCode("A common object with customCrypto.kzg initialized required to instantiate a 4844 blob tx");
    }
    const kzg = opts.common.customCrypto.kzg;
    if (txData.blobsData !== void 0 && txData.blobs !== void 0) {
      throw EthereumJSErrorWithoutCode("cannot have both raw blobs data and encoded blobs in constructor");
    }
    if (txData.blobsData !== void 0 || txData.blobs !== void 0) {
      txData.blobs ?? (txData.blobs = getBlobs(txData.blobsData.reduce((acc, cur) => acc + cur)));
      txData.kzgCommitments ?? (txData.kzgCommitments = blobsToCommitments(kzg, txData.blobs));
      txData.blobVersionedHashes ?? (txData.blobVersionedHashes = commitmentsToVersionedHashes(txData.kzgCommitments));
      if (opts.common.isActivatedEIP(7594)) {
        txData.kzgProofs ?? (txData.kzgProofs = blobsToCellProofs(kzg, txData.blobs));
      } else {
        txData.kzgProofs ?? (txData.kzgProofs = blobsToProofs(kzg, txData.blobs, txData.kzgCommitments));
      }
    }
    return new Blob4844Tx(txData, opts);
  }

  // node_modules/@ethereumjs/tx/dist/esm/capabilities/eip7702.js
  function getDataGas3(tx) {
    const eip2930Cost = getDataGas2(tx);
    const eip7702Cost = BigInt(tx.authorizationList.length * Number(tx.common.param("perEmptyAccountCost")));
    return eip2930Cost + eip7702Cost;
  }
  function verifyAuthorizationList(tx) {
    const authorizationList = tx.authorizationList;
    if (authorizationList.length === 0) {
      throw EthereumJSErrorWithoutCode("Invalid EIP-7702 transaction: authorization list is empty");
    }
    for (const item of authorizationList) {
      if (item.length !== 6) {
        throw EthereumJSErrorWithoutCode("Invalid EIP-7702 transaction: authorization list item should have 6 elements");
      }
      for (const member of item) {
        if (Array.isArray(member)) {
          throw EthereumJSErrorWithoutCode("Invalid EIP-7702 transaction: authority list element is a list, not bytes");
        }
      }
      const [chainId, address, nonce, yParity, r, s] = item;
      validateNoLeadingZeroes({ yParity, r, s, nonce, chainId });
      if (address.length !== 20) {
        throw EthereumJSErrorWithoutCode("Invalid EIP-7702 transaction: address length should be 20 bytes");
      }
      if (bytesToBigInt(chainId) > MAX_INTEGER) {
        throw EthereumJSErrorWithoutCode("Invalid EIP-7702 transaction: chainId exceeds 2^256 - 1");
      }
      if (bytesToBigInt(nonce) > MAX_UINT64) {
        throw EthereumJSErrorWithoutCode("Invalid EIP-7702 transaction: nonce exceeds 2^64 - 1");
      }
      const yParityBigInt = bytesToBigInt(yParity);
      if (yParityBigInt >= BigInt(2 ** 8)) {
        throw EthereumJSErrorWithoutCode("Invalid EIP-7702 transaction: yParity should be fit within 1 byte (0 - 255)");
      }
      if (bytesToBigInt(r) > MAX_INTEGER) {
        throw EthereumJSErrorWithoutCode("Invalid EIP-7702 transaction: r exceeds 2^256 - 1");
      }
      if (bytesToBigInt(s) > MAX_INTEGER) {
        throw EthereumJSErrorWithoutCode("Invalid EIP-7702 transaction: s exceeds 2^256 - 1");
      }
    }
  }

  // node_modules/@ethereumjs/tx/dist/esm/7702/tx.js
  var EOACode7702Tx = class {
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */
    constructor(txData, opts = {}) {
      this.type = TransactionType.EOACodeEIP7702;
      this.cache = {};
      this.activeCapabilities = [];
      sharedConstructor(this, { ...txData, type: TransactionType.EOACodeEIP7702 }, opts);
      const { chainId, accessList: rawAccessList, authorizationList: rawAuthorizationList, maxFeePerGas, maxPriorityFeePerGas } = txData;
      const accessList = rawAccessList ?? [];
      const authorizationList = rawAuthorizationList ?? [];
      if (chainId !== void 0 && bytesToBigInt(toBytes3(chainId)) !== this.common.chainId()) {
        throw EthereumJSErrorWithoutCode(`Common chain ID ${this.common.chainId} not matching the derived chain ID ${chainId}`);
      }
      this.chainId = this.common.chainId();
      if (!this.common.isActivatedEIP(7702)) {
        throw EthereumJSErrorWithoutCode("EIP-7702 not enabled on Common");
      }
      this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930, 7702]);
      this.accessList = isAccessList(accessList) ? accessListJSONToBytes(accessList) : accessList;
      verifyAccessList(this);
      this.authorizationList = isEOACode7702AuthorizationList(authorizationList) ? authorizationList.map((item) => eoaCode7702AuthorizationListJSONItemToBytes(item)) : authorizationList;
      verifyAuthorizationList(this);
      this.maxFeePerGas = bytesToBigInt(toBytes3(maxFeePerGas));
      this.maxPriorityFeePerGas = bytesToBigInt(toBytes3(maxPriorityFeePerGas));
      valueOverflowCheck({
        maxFeePerGas: this.maxFeePerGas,
        maxPriorityFeePerGas: this.maxPriorityFeePerGas
      });
      validateNotArray(txData);
      if (this.gasLimit * this.maxFeePerGas > MAX_INTEGER) {
        const msg = errorMsg(this, "gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
        throw EthereumJSErrorWithoutCode(msg);
      }
      if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
        const msg = errorMsg(this, "maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
        throw EthereumJSErrorWithoutCode(msg);
      }
      validateYParity(this);
      validateHighS(this);
      if (this.to === void 0) {
        const msg = errorMsg(this, `tx should have a "to" field and cannot be used to create contracts`);
        throw EthereumJSErrorWithoutCode(msg);
      }
      const freeze = opts?.freeze ?? true;
      if (freeze) {
        Object.freeze(this);
      }
    }
    /**
     * Checks if a tx type defining capability is active
     * on a tx, for example the EIP-1559 fee market mechanism
     * or the EIP-2930 access list feature.
     *
     * Note that this is different from the tx type itself,
     * so EIP-2930 access lists can very well be active
     * on an EIP-1559 tx for example.
     *
     * This method can be useful for feature checks if the
     * tx type is unknown (e.g. when instantiated with
     * the tx factory).
     *
     * See `Capabilities` in the `types` module for a reference
     * on all supported capabilities.
     */
    supports(capability) {
      return this.activeCapabilities.includes(capability);
    }
    /**
     * The amount of gas paid for the data in this tx
     */
    getDataGas() {
      return getDataGas3(this);
    }
    /**
     * Returns the minimum of calculated priority fee (from maxFeePerGas and baseFee) and maxPriorityFeePerGas
     * @param baseFee Base fee retrieved from block
     */
    getEffectivePriorityFee(baseFee) {
      return getEffectivePriorityFee(this, baseFee);
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     * @param baseFee The base fee of the block (will be set to 0 if not provided)
     */
    getUpfrontCost(baseFee = BIGINT_02) {
      return getUpfrontCost(this, baseFee);
    }
    /**
     * The minimum gas limit which the tx to have to be valid.
     * This covers costs as the standard fee (21000 gas), the data fee (paid for each calldata byte),
     * the optional creation fee (if the transaction creates a contract), and if relevant the gas
     * to be paid for access lists (EIP-2930) and authority lists (EIP-7702).
     */
    getIntrinsicGas() {
      return getIntrinsicGas(this);
    }
    /**
     * EOACode7702Tx cannot create contracts
     */
    toCreationAddress() {
      throw EthereumJSErrorWithoutCode("EOACode7702Tx cannot create contracts");
    }
    /**
     * Returns a Uint8Array Array of the raw Bytes of the EIP-7702 transaction, in order.
     *
     * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, authorizationList, signatureYParity, signatureR, signatureS]`
     *
     * Use {@link EOACode7702Transaction.serialize} to add a transaction to a block
     * with {@link createBlockFromBytesArray}.
     *
     * For an unsigned tx this method uses the empty Bytes values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link EOACode7702Transaction.getMessageToSign}.
     */
    raw() {
      return [
        bigIntToUnpaddedBytes(this.chainId),
        bigIntToUnpaddedBytes(this.nonce),
        bigIntToUnpaddedBytes(this.maxPriorityFeePerGas),
        bigIntToUnpaddedBytes(this.maxFeePerGas),
        bigIntToUnpaddedBytes(this.gasLimit),
        this.to !== void 0 ? this.to.bytes : new Uint8Array(0),
        bigIntToUnpaddedBytes(this.value),
        this.data,
        this.accessList,
        this.authorizationList,
        this.v !== void 0 ? bigIntToUnpaddedBytes(this.v) : new Uint8Array(0),
        this.r !== void 0 ? bigIntToUnpaddedBytes(this.r) : new Uint8Array(0),
        this.s !== void 0 ? bigIntToUnpaddedBytes(this.s) : new Uint8Array(0)
      ];
    }
    /**
     * Returns the serialized encoding of the EIP-7702 transaction.
     *
     * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, authorizationList, signatureYParity, signatureR, signatureS])`
     *
     * Note that in contrast to the legacy tx serialization format this is not
     * valid RLP any more due to the raw tx type preceding and concatenated to
     * the RLP encoding of the values.
     */
    serialize() {
      return serialize(this);
    }
    /**
     * Returns the raw serialized unsigned tx, which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     *
     * ```javascript
     * const serializedMessage = tx.getMessageToSign() // use this for the HW wallet input
     * ```
     * @returns Serialized unsigned transaction payload
     */
    getMessageToSign() {
      return serialize(this, this.raw().slice(0, 10));
    }
    /**
     * Returns the hashed serialized unsigned tx, which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     * @returns Keccak hash of the unsigned transaction payload
     */
    getHashedMessageToSign() {
      return getHashedMessageToSign(this);
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link EOACode7702Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     * @returns Hash of the serialized signed transaction
     */
    hash() {
      return hash2(this);
    }
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     * @returns Hash used when verifying the signature
     */
    getMessageToVerifySignature() {
      return this.getHashedMessageToSign();
    }
    /**
     * Returns the public key of the sender
     * @returns Sender public key
     */
    getSenderPublicKey() {
      return getSenderPublicKey(this);
    }
    /**
     * Adds the provided signature values and returns a new transaction instance.
     * @param v - Recovery parameter
     * @param r - Signature `r` value
     * @param s - Signature `s` value
     * @returns New `EOACode7702Tx` that includes the signature
     */
    addSignature(v, r, s) {
      r = toBytes3(r);
      s = toBytes3(s);
      const opts = { ...this.txOptions, common: this.common };
      return createEOACode7702Tx({
        chainId: this.chainId,
        nonce: this.nonce,
        maxPriorityFeePerGas: this.maxPriorityFeePerGas,
        maxFeePerGas: this.maxFeePerGas,
        gasLimit: this.gasLimit,
        to: this.to,
        value: this.value,
        data: this.data,
        accessList: this.accessList,
        authorizationList: this.authorizationList,
        v,
        r: bytesToBigInt(r),
        s: bytesToBigInt(s)
      }, opts);
    }
    /**
     * Returns an object with the JSON representation of the transaction
     * @returns JSON encoding of the transaction
     */
    toJSON() {
      const accessListJSON = accessListBytesToJSON(this.accessList);
      const authorizationList = this.authorizationList.map((item) => eoaCode7702AuthorizationListBytesItemToJSON(item));
      const baseJSON = getBaseJSON(this);
      return {
        ...baseJSON,
        chainId: bigIntToHex(this.chainId),
        maxPriorityFeePerGas: bigIntToHex(this.maxPriorityFeePerGas),
        maxFeePerGas: bigIntToHex(this.maxFeePerGas),
        accessList: accessListJSON,
        authorizationList
      };
    }
    /**
     * Returns the list of validation errors, if any.
     * @returns Array of validation error messages
     */
    getValidationErrors() {
      return getValidationErrors(this);
    }
    /**
     * @returns true if the transaction has no validation issues
     */
    isValid() {
      return isValid(this);
    }
    /**
     * Verifies the embedded signature.
     * @returns true if signature verification succeeds
     */
    verifySignature() {
      return verifySignature(this);
    }
    /**
     * Returns the recovered sender address.
     * @returns Sender {@link Address}
     */
    getSenderAddress() {
      return getSenderAddress(this);
    }
    /**
     * Signs the transaction and returns the signed instance.
     * @param privateKey - 32-byte private key
     * @param extraEntropy - Optional entropy supplied to the signing routine
     * @returns Newly signed transaction
     */
    sign(privateKey, extraEntropy = false) {
      return sign2(this, privateKey, extraEntropy);
    }
    /**
     * Indicates whether the transaction already carries signature data.
     * @returns true if signature parts are present
     */
    isSigned() {
      const { v, r, s } = this;
      if (v === void 0 || r === void 0 || s === void 0) {
        return false;
      } else {
        return true;
      }
    }
    /**
     * Return a compact error string representation of the object
     */
    errorStr() {
      let errorStr = getSharedErrorPostfix(this);
      errorStr += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`;
      return errorStr;
    }
  };

  // node_modules/@ethereumjs/tx/dist/esm/7702/constructors.js
  function createEOACode7702Tx(txData, opts = {}) {
    return new EOACode7702Tx(txData, opts);
  }

  // node_modules/@ethereumjs/tx/dist/esm/legacy/tx.js
  function meetsEIP155(_v, chainId) {
    const v = Number(_v);
    const chainIdDoubled = Number(chainId) * 2;
    return v === chainIdDoubled + 35 || v === chainIdDoubled + 36;
  }
  function validateVAndExtractChainID(common, _v) {
    let chainIdBigInt;
    const v = _v !== void 0 ? Number(_v) : void 0;
    if (v !== void 0) {
      if (v < 37 && v !== 27 && v !== 28) {
        throw EthereumJSErrorWithoutCode(`Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${v}`);
      }
    }
    if (v !== void 0 && v !== 0 && common.gteHardfork("spuriousDragon") && v !== 27 && v !== 28) {
      if (!meetsEIP155(BigInt(v), common.chainId())) {
        throw EthereumJSErrorWithoutCode(`Incompatible EIP155-based V ${v} and chain id ${common.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`);
      }
      let numSub;
      if ((v - 35) % 2 === 0) {
        numSub = 35;
      } else {
        numSub = 36;
      }
      chainIdBigInt = BigInt(v - numSub) / BIGINT_2;
    }
    return chainIdBigInt;
  }
  var LegacyTx = class {
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */
    constructor(txData, opts = {}) {
      this.type = TransactionType.Legacy;
      this.cache = {};
      this.activeCapabilities = [];
      sharedConstructor(this, txData, opts);
      this.gasPrice = bytesToBigInt(toBytes3(txData.gasPrice));
      valueOverflowCheck({ gasPrice: this.gasPrice });
      this.common.updateParams(opts.params ?? paramsTx);
      const chainId = validateVAndExtractChainID(this.common, this.v);
      if (chainId !== void 0 && chainId !== this.common.chainId()) {
        throw EthereumJSErrorWithoutCode(`Common chain ID ${this.common.chainId} not matching the derived chain ID ${chainId}`);
      }
      this.keccakFunction = this.common.customCrypto.keccak256 ?? keccak_2562;
      if (this.gasPrice * this.gasLimit > MAX_INTEGER) {
        throw EthereumJSErrorWithoutCode("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
      }
      if (this.common.gteHardfork("spuriousDragon")) {
        if (!this.isSigned()) {
          this.activeCapabilities.push(Capability.EIP155ReplayProtection);
        } else {
          if (meetsEIP155(this.v, this.common.chainId())) {
            this.activeCapabilities.push(Capability.EIP155ReplayProtection);
          }
        }
      }
      const freeze = opts?.freeze ?? true;
      if (freeze) {
        Object.freeze(this);
      }
    }
    /**
     * Checks if a tx type defining capability is active
     * on a tx, for example the EIP-1559 fee market mechanism
     * or the EIP-2930 access list feature.
     *
     * Note that this is different from the tx type itself,
     * so EIP-2930 access lists can very well be active
     * on an EIP-1559 tx for example.
     *
     * This method can be useful for feature checks if the
     * tx type is unknown (e.g. when instantiated with
     * the tx factory).
     *
     * See `Capabilities` in the `types` module for a reference
     * on all supported capabilities.
     */
    supports(capability) {
      return this.activeCapabilities.includes(capability);
    }
    /**
     * Indicates whether the transaction already contains signature values.
     * @returns true if `v`, `r`, and `s` are populated
     */
    isSigned() {
      return isSigned(this);
    }
    /**
     * Computes the effective priority fee for this legacy transaction, optionally considering a base fee.
     * @param baseFee - Optional base fee used on networks that emulate 1559-style pricing
     * @returns Priority fee portion denominated in wei
     */
    getEffectivePriorityFee(baseFee) {
      return getEffectivePriorityFee2(this.gasPrice, baseFee);
    }
    /**
     * Returns a Uint8Array Array of the raw Bytes of the legacy transaction, in order.
     *
     * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
     *
     * For legacy txs this is also the correct format to add transactions
     * to a block with {@link createBlockFromBytesArray} (use the `serialize()` method
     * for typed txs).
     *
     * For an unsigned tx this method returns the empty Bytes values
     * for the signature parameters `v`, `r` and `s`. For an EIP-155 compliant
     * representation have a look at {@link Transaction.getMessageToSign}.
     */
    raw() {
      return [
        bigIntToUnpaddedBytes(this.nonce),
        bigIntToUnpaddedBytes(this.gasPrice),
        bigIntToUnpaddedBytes(this.gasLimit),
        this.to !== void 0 ? this.to.bytes : new Uint8Array(0),
        bigIntToUnpaddedBytes(this.value),
        this.data,
        this.v !== void 0 ? bigIntToUnpaddedBytes(this.v) : new Uint8Array(0),
        this.r !== void 0 ? bigIntToUnpaddedBytes(this.r) : new Uint8Array(0),
        this.s !== void 0 ? bigIntToUnpaddedBytes(this.s) : new Uint8Array(0)
      ];
    }
    /**
     * Returns the serialized encoding of the legacy transaction.
     *
     * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
     *
     * For an unsigned tx this method uses the empty Uint8Array values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link Transaction.getMessageToSign}.
     */
    serialize() {
      return RLP.encode(this.raw());
    }
    /**
     * Returns the raw unsigned tx, which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: the raw message message format for the legacy tx is not RLP encoded
     * and you might need to do yourself with:
     *
     * ```javascript
     * import { RLP } from '@ethereumjs/rlp'
     * const message = tx.getMessageToSign()
     * const serializedMessage = RLP.encode(message)) // use this for the HW wallet input
     * ```
     * @returns Array representing the unsigned transaction fields
     */
    getMessageToSign() {
      const message = [
        bigIntToUnpaddedBytes(this.nonce),
        bigIntToUnpaddedBytes(this.gasPrice),
        bigIntToUnpaddedBytes(this.gasLimit),
        this.to !== void 0 ? this.to.bytes : new Uint8Array(0),
        bigIntToUnpaddedBytes(this.value),
        this.data
      ];
      if (this.supports(Capability.EIP155ReplayProtection)) {
        message.push(bigIntToUnpaddedBytes(this.common.chainId()));
        message.push(unpadBytes(intToBytes(0)));
        message.push(unpadBytes(intToBytes(0)));
      }
      return message;
    }
    /**
     * Returns the hashed serialized unsigned tx, which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     * @returns Hash of the unsigned transaction payload
     */
    getHashedMessageToSign() {
      const message = this.getMessageToSign();
      return this.keccakFunction(RLP.encode(message));
    }
    /**
     * The amount of gas paid for the data in this tx
     */
    getDataGas() {
      return getDataGas(this);
    }
    // TODO figure out if this is necessary
    /**
     * If the tx's `to` is to the creation address
     */
    toCreationAddress() {
      return toCreationAddress(this);
    }
    /**
     * The minimum gas limit which the tx to have to be valid.
     * This covers costs as the standard fee (21000 gas), the data fee (paid for each calldata byte),
     * the optional creation fee (if the transaction creates a contract), and if relevant the gas
     * to be paid for access lists (EIP-2930) and authority lists (EIP-7702).
     */
    getIntrinsicGas() {
      return getIntrinsicGas(this);
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     */
    getUpfrontCost() {
      return this.gasLimit * this.gasPrice + this.value;
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     * @returns Hash of the serialized signed transaction
     */
    hash() {
      return hash2(this);
    }
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     * @returns Hash used when verifying the signature
     */
    getMessageToVerifySignature() {
      if (!this.isSigned()) {
        const msg = errorMsg(this, "This transaction is not signed");
        throw EthereumJSErrorWithoutCode(msg);
      }
      return this.getHashedMessageToSign();
    }
    /**
     * Returns the public key of the sender
     * @returns Sender public key
     */
    getSenderPublicKey() {
      return getSenderPublicKey(this);
    }
    /**
     * Adds a signature (or replaces an existing one) and returns a new transaction instance.
     * @param v - Recovery parameter, potentially unconverted when `convertV` is false
     * @param r - `r` value of the signature
     * @param s - `s` value of the signature
     * @param convertV - When true, converts the recovery ID into the appropriate legacy `v`
     * @returns A new `LegacyTx` that includes the provided signature
     */
    addSignature(v, r, s, convertV = false) {
      r = toBytes3(r);
      s = toBytes3(s);
      if (convertV && this.supports(Capability.EIP155ReplayProtection)) {
        v += BigInt(35) + this.common.chainId() * BIGINT_2;
      } else if (convertV) {
        v += BigInt(27);
      }
      const opts = { ...this.txOptions, common: this.common };
      return createLegacyTx({
        nonce: this.nonce,
        gasPrice: this.gasPrice,
        gasLimit: this.gasLimit,
        to: this.to,
        value: this.value,
        data: this.data,
        v,
        r: bytesToBigInt(r),
        s: bytesToBigInt(s)
      }, opts);
    }
    /**
     * Returns an object with the JSON representation of the transaction.
     * @returns JSON encoding of the transaction
     */
    toJSON() {
      const baseJSON = getBaseJSON(this);
      baseJSON.gasPrice = bigIntToHex(this.gasPrice);
      return baseJSON;
    }
    /**
     * Validates the transaction and returns any encountered errors.
     * @returns Array containing validation error messages
     */
    getValidationErrors() {
      return getValidationErrors(this);
    }
    /**
     * Determines whether the transaction passes all validation checks.
     * @returns true if no validation errors were found
     */
    isValid() {
      return isValid(this);
    }
    /**
     * Checks whether the stored signature can be successfully verified.
     * @returns true if the signature is valid
     */
    verifySignature() {
      return verifySignature(this);
    }
    /**
     * Returns the recovered sender address.
     * @returns Sender {@link Address}
     */
    getSenderAddress() {
      return getSenderAddress(this);
    }
    /**
     * Signs the transaction with the provided private key and returns the new signed instance.
     * @param privateKey - 32-byte private key used to sign the transaction
     * @param extraEntropy - Optional entropy passed to the signing routine
     * @returns A new signed `LegacyTx`
     */
    sign(privateKey, extraEntropy = false) {
      return sign2(this, privateKey, extraEntropy);
    }
    /**
     * Return a compact error string representation of the object
     * @returns Human-readable error summary
     */
    errorStr() {
      let errorStr = getSharedErrorPostfix(this);
      errorStr += ` gasPrice=${this.gasPrice}`;
      return errorStr;
    }
  };

  // node_modules/@ethereumjs/tx/dist/esm/legacy/constructors.js
  function createLegacyTx(txData, opts = {}) {
    return new LegacyTx(txData, opts);
  }

  // node_modules/@ethereumjs/tx/dist/esm/util/general.js
  var normalizeTxParams = (txParamsFromRPC) => {
    const txParams = Object.assign({}, txParamsFromRPC);
    txParams.gasLimit = toType(txParams.gasLimit ?? txParams.gas, TypeOutput.BigInt);
    txParams.data = txParams.data === void 0 ? txParams.input : txParams.data;
    txParams.gasPrice = txParams.gasPrice !== void 0 ? BigInt(txParams.gasPrice) : void 0;
    txParams.value = txParams.value !== void 0 ? BigInt(txParams.value) : void 0;
    txParams.to = txParams.to !== null && txParams.to !== void 0 ? setLengthLeft(toBytes3(txParams.to), 20) : null;
    txParams.v = txParams.v === "0x0" ? "0x" : txParams.v;
    txParams.r = txParams.r === "0x0" ? "0x" : txParams.r;
    txParams.s = txParams.s === "0x0" ? "0x" : txParams.s;
    if (txParams.v !== "0x" || txParams.r !== "0x" || txParams.s !== "0x") {
      txParams.v = toType(txParams.v, TypeOutput.BigInt);
    }
    return txParams;
  };

  // node_modules/@ethereumjs/tx/dist/esm/transactionFactory.js
  function createTx(txData, txOptions = {}) {
    if (!("type" in txData) || txData.type === void 0) {
      return createLegacyTx(txData, txOptions);
    } else {
      if (isLegacyTxData(txData)) {
        return createLegacyTx(txData, txOptions);
      } else if (isAccessList2930TxData(txData)) {
        return createAccessList2930Tx(txData, txOptions);
      } else if (isFeeMarket1559TxData(txData)) {
        return createFeeMarket1559Tx(txData, txOptions);
      } else if (isBlob4844TxData(txData)) {
        return createBlob4844Tx(txData, txOptions);
      } else if (isEOACode7702TxData(txData)) {
        return createEOACode7702Tx(txData, txOptions);
      } else {
        throw EthereumJSErrorWithoutCode(`Tx instantiation with type ${txData?.type} not supported`);
      }
    }
  }
  async function createTxFromRPC(txData, txOptions = {}) {
    return createTx(normalizeTxParams(txData), txOptions);
  }

  // node_modules/eth-crypto/dist/es/sign-transaction.js
  function signTransaction(_x, _x2) {
    return _signTransaction.apply(this, arguments);
  }
  function _signTransaction() {
    _signTransaction = _asyncToGenerator(/* @__PURE__ */ import_regenerator3.default.mark(function _callee(rawTx, privateKey) {
      var txOptions, publicKey, address, privateKeyBuffer, tx, signedTx, serializedTx, _args = arguments;
      return import_regenerator3.default.wrap(function(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            txOptions = _args.length > 2 && _args[2] !== void 0 ? _args[2] : {};
            publicKey = publicKeyByPrivateKey(privateKey);
            address = toAddress(publicKey);
            if (!(address != rawTx.from)) {
              _context.next = 1;
              break;
            }
            throw new Error("EthCrypto.signTransaction(): rawTx.from does not match the address of the privateKey");
          case 1:
            privateKeyBuffer = Buffer.from(privateKey.replace(/^.{2}/g, ""), "hex");
            _context.next = 2;
            return createTxFromRPC(rawTx, txOptions);
          case 2:
            tx = _context.sent;
            signedTx = tx.sign(privateKeyBuffer);
            serializedTx = bytesToHex5(signedTx.serialize());
            return _context.abrupt("return", serializedTx);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _signTransaction.apply(this, arguments);
  }

  // node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n2 = Array(a); e < a; e++) n2[e] = r[e];
    return n2;
  }

  // node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }

  // node_modules/@babel/runtime/helpers/esm/iterableToArray.js
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }

  // node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  // node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }

  // node_modules/eth-crypto/dist/es/tx-data-by-compiled.js
  var import_regenerator4 = __toESM(require_regenerator2());
  function txDataByCompiled(_x, _x2, _x3) {
    return _txDataByCompiled.apply(this, arguments);
  }
  function _txDataByCompiled() {
    _txDataByCompiled = _asyncToGenerator(/* @__PURE__ */ import_regenerator4.default.mark(function _callee(abi, bytecode, args) {
      var factory, deployTransaction;
      return import_regenerator4.default.wrap(function(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (typeof abi === "string") abi = JSON.parse(abi);
            factory = new ContractFactory(abi, "0x" + bytecode);
            _context.next = 1;
            return factory.getDeployTransaction.apply(factory, _toConsumableArray(args));
          case 1:
            deployTransaction = _context.sent;
            return _context.abrupt("return", deployTransaction.data);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _txDataByCompiled.apply(this, arguments);
  }

  // node_modules/eth-crypto/dist/es/calculate-contract-address.js
  function calculateContractAddress(creatorAddress, nonce) {
    var addressBuffer = generateAddress(hexToBytes5(addLeading0x(creatorAddress)), hexToBytes5(intToHex(nonce)));
    var address = bytesToHex5(addressBuffer);
    return toChecksumAddress(addLeading0x(address));
  }

  // node_modules/eth-crypto/dist/es/hash.js
  var hash_exports = {};
  __export(hash_exports, {
    SIGN_PREFIX: () => SIGN_PREFIX,
    keccak256: () => keccak2562
  });
  function keccak2562(params) {
    var types = [];
    var values = [];
    if (!Array.isArray(params)) {
      types.push("string");
      values.push(params);
    } else {
      params.forEach(function(p) {
        types.push(p.type);
        values.push(p.value);
      });
    }
    return solidityPackedKeccak256(types, values);
  }
  var SIGN_PREFIX = "Ethereum Signed Message:\n32";

  // node_modules/eth-crypto/dist/es/hex.js
  var hex_exports = {};
  __export(hex_exports, {
    compress: () => compress2,
    decompress: () => decompress2
  });
  function compress2(hex) {
    var base64 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    hex = removeLeading0x(hex);
    if (base64 === true) return Buffer.from(hex, "hex").toString("base64");
    var string = "";
    while (hex.length % 4 != 0) {
      hex = "0" + hex;
    }
    for (var i = 0; i < hex.length; i += 4) {
      string += String.fromCharCode(parseInt(hex.substring(i, i + 4), 16));
    }
    return string;
  }
  function decompress2(compressedString) {
    var base64 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (base64 === true) {
      var ret = Buffer.from(compressedString, "base64").toString("hex");
      return addLeading0x(ret);
    }
    var hex = "";
    for (var i = 0; i < compressedString.length; i++) {
      hex += ((i == 0 ? "" : "000") + compressedString.charCodeAt(i).toString(16)).slice(-4);
    }
    hex = hex.toLowerCase();
    return addLeading0x(hex);
  }

  // node_modules/eth-crypto/dist/es/vrs.js
  var vrs_exports = {};
  __export(vrs_exports, {
    fromString: () => fromString,
    toString: () => toString
  });
  function fromString(hexString) {
    var arr = Signature.from(hexString);
    return {
      // convert "v" to hex
      v: "0x".concat(arr.v.toString(16)),
      r: arr.r,
      s: arr.s
    };
  }
  function toString(sig) {
    return Signature.from(sig).serialized;
  }

  // node_modules/eth-crypto/dist/es/index.js
  var es_default = {
    createIdentity,
    publicKey: public_key_exports,
    decryptWithPrivateKey,
    encryptWithPublicKey,
    cipher: cipher_exports,
    publicKeyByPrivateKey,
    recover,
    recoverPublicKey,
    sign,
    signTransaction,
    txDataByCompiled,
    calculateContractAddress,
    hash: hash_exports,
    hex: hex_exports,
    vrs: vrs_exports,
    util: util_exports
  };

  // _ethc_entry.js
  window.EthCrypto = es_default;
})();
/*! Bundled license information:

@babel/runtime/helpers/regenerator.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

aes-js/lib.esm/aes.js:
  (*! MIT License. Copyright 2015-2022 Richard Moore <me@ricmoo.com>. See LICENSE.txt. *)

@noble/curves/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/ciphers/esm/utils.js:
  (*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) *)
*/
