function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"], {
  /***/
  "./node_modules/@capacitor/geolocation/dist/esm/web.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/geolocation/dist/esm/web.js ***!
    \*************************************************************/

  /*! exports provided: GeolocationWeb, Geolocation */

  /***/
  function node_modulesCapacitorGeolocationDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationWeb", function () {
      return GeolocationWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
      return Geolocation;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");

    var GeolocationWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
      _inherits(GeolocationWeb, _capacitor_core__WEBP);

      var _super = _createSuper(GeolocationWeb);

      function GeolocationWeb() {
        _classCallCheck(this, GeolocationWeb);

        return _super.apply(this, arguments);
      }

      _createClass(GeolocationWeb, [{
        key: "getCurrentPosition",
        value: function () {
          var _getCurrentPosition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      navigator.geolocation.getCurrentPosition(function (pos) {
                        resolve(pos);
                      }, function (err) {
                        reject(err);
                      }, Object.assign({
                        enableHighAccuracy: false,
                        timeout: 10000,
                        maximumAge: 0
                      }, options));
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function getCurrentPosition(_x) {
            return _getCurrentPosition.apply(this, arguments);
          }

          return getCurrentPosition;
        }()
      }, {
        key: "watchPosition",
        value: function () {
          var _watchPosition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options, callback) {
            var id;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    id = navigator.geolocation.watchPosition(function (pos) {
                      callback(pos);
                    }, function (err) {
                      callback(null, err);
                    }, Object.assign({
                      enableHighAccuracy: false,
                      timeout: 10000,
                      maximumAge: 0
                    }, options));
                    return _context2.abrupt("return", "".concat(id));

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function watchPosition(_x2, _x3) {
            return _watchPosition.apply(this, arguments);
          }

          return watchPosition;
        }()
      }, {
        key: "clearWatch",
        value: function () {
          var _clearWatch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    window.navigator.geolocation.clearWatch(parseInt(options.id, 10));

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function clearWatch(_x4) {
            return _clearWatch.apply(this, arguments);
          }

          return clearWatch;
        }()
      }, {
        key: "checkPermissions",
        value: function () {
          var _checkPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var permission;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(typeof navigator === 'undefined' || !navigator.permissions)) {
                      _context4.next = 2;
                      break;
                    }

                    throw this.unavailable('Permissions API not available in this browser');

                  case 2:
                    _context4.next = 4;
                    return window.navigator.permissions.query({
                      name: 'geolocation'
                    });

                  case 4:
                    permission = _context4.sent;
                    return _context4.abrupt("return", {
                      location: permission.state,
                      coarseLocation: permission.state
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function checkPermissions() {
            return _checkPermissions.apply(this, arguments);
          }

          return checkPermissions;
        }()
      }, {
        key: "requestPermissions",
        value: function () {
          var _requestPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    throw this.unimplemented('Not implemented on web.');

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function requestPermissions() {
            return _requestPermissions.apply(this, arguments);
          }

          return requestPermissions;
        }()
      }]);

      return GeolocationWeb;
    }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

    var Geolocation = new GeolocationWeb(); //# sourceMappingURL=web.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/preferences/dist/esm/web.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/preferences/dist/esm/web.js ***!
    \*************************************************************/

  /*! exports provided: PreferencesWeb */

  /***/
  function node_modulesCapacitorPreferencesDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesWeb", function () {
      return PreferencesWeb;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");

    var PreferencesWeb = /*#__PURE__*/function (_capacitor_core__WEBP2) {
      _inherits(PreferencesWeb, _capacitor_core__WEBP2);

      var _super2 = _createSuper(PreferencesWeb);

      function PreferencesWeb() {
        var _this;

        _classCallCheck(this, PreferencesWeb);

        _this = _super2.apply(this, arguments);
        _this.group = 'CapacitorStorage';
        return _this;
      }

      _createClass(PreferencesWeb, [{
        key: "configure",
        value: function () {
          var _configure = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref) {
            var group;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    group = _ref.group;

                    if (typeof group === 'string') {
                      this.group = group;
                    }

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function configure(_x5) {
            return _configure.apply(this, arguments);
          }

          return configure;
        }()
      }, {
        key: "get",
        value: function () {
          var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(options) {
            var value;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    value = this.impl.getItem(this.applyPrefix(options.key));
                    return _context7.abrupt("return", {
                      value: value
                    });

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          function get(_x6) {
            return _get.apply(this, arguments);
          }

          return get;
        }()
      }, {
        key: "set",
        value: function () {
          var _set = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(options) {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.impl.setItem(this.applyPrefix(options.key), options.value);

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          function set(_x7) {
            return _set.apply(this, arguments);
          }

          return set;
        }()
      }, {
        key: "remove",
        value: function () {
          var _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(options) {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.impl.removeItem(this.applyPrefix(options.key));

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));

          function remove(_x8) {
            return _remove.apply(this, arguments);
          }

          return remove;
        }()
      }, {
        key: "keys",
        value: function () {
          var _keys = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this2 = this;

            var keys;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    keys = this.rawKeys().map(function (k) {
                      return k.substring(_this2.prefix.length);
                    });
                    return _context10.abrupt("return", {
                      keys: keys
                    });

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));

          function keys() {
            return _keys.apply(this, arguments);
          }

          return keys;
        }()
      }, {
        key: "clear",
        value: function () {
          var _clear = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _iterator, _step, key;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _iterator = _createForOfIteratorHelper(this.rawKeys());

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        key = _step.value;
                        this.impl.removeItem(key);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));

          function clear() {
            return _clear.apply(this, arguments);
          }

          return clear;
        }()
      }, {
        key: "migrate",
        value: function () {
          var _migrate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _a, migrated, existing, oldprefix, keys, _iterator2, _step2, oldkey, key, value, _yield$this$get, currentValue;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    migrated = [];
                    existing = [];
                    oldprefix = '_cap_';
                    keys = Object.keys(this.impl).filter(function (k) {
                      return k.indexOf(oldprefix) === 0;
                    });
                    _iterator2 = _createForOfIteratorHelper(keys);
                    _context12.prev = 5;

                    _iterator2.s();

                  case 7:
                    if ((_step2 = _iterator2.n()).done) {
                      _context12.next = 24;
                      break;
                    }

                    oldkey = _step2.value;
                    key = oldkey.substring(oldprefix.length);
                    value = (_a = this.impl.getItem(oldkey)) !== null && _a !== void 0 ? _a : '';
                    _context12.next = 13;
                    return this.get({
                      key: key
                    });

                  case 13:
                    _yield$this$get = _context12.sent;
                    currentValue = _yield$this$get.value;

                    if (!(typeof currentValue === 'string')) {
                      _context12.next = 19;
                      break;
                    }

                    existing.push(key);
                    _context12.next = 22;
                    break;

                  case 19:
                    _context12.next = 21;
                    return this.set({
                      key: key,
                      value: value
                    });

                  case 21:
                    migrated.push(key);

                  case 22:
                    _context12.next = 7;
                    break;

                  case 24:
                    _context12.next = 29;
                    break;

                  case 26:
                    _context12.prev = 26;
                    _context12.t0 = _context12["catch"](5);

                    _iterator2.e(_context12.t0);

                  case 29:
                    _context12.prev = 29;

                    _iterator2.f();

                    return _context12.finish(29);

                  case 32:
                    return _context12.abrupt("return", {
                      migrated: migrated,
                      existing: existing
                    });

                  case 33:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this, [[5, 26, 29, 32]]);
          }));

          function migrate() {
            return _migrate.apply(this, arguments);
          }

          return migrate;
        }()
      }, {
        key: "removeOld",
        value: function () {
          var _removeOld = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var oldprefix, keys, _iterator3, _step3, oldkey;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    oldprefix = '_cap_';
                    keys = Object.keys(this.impl).filter(function (k) {
                      return k.indexOf(oldprefix) === 0;
                    });
                    _iterator3 = _createForOfIteratorHelper(keys);

                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        oldkey = _step3.value;
                        this.impl.removeItem(oldkey);
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));

          function removeOld() {
            return _removeOld.apply(this, arguments);
          }

          return removeOld;
        }()
      }, {
        key: "rawKeys",
        value: function rawKeys() {
          var _this3 = this;

          return Object.keys(this.impl).filter(function (k) {
            return k.indexOf(_this3.prefix) === 0;
          });
        }
      }, {
        key: "applyPrefix",
        value: function applyPrefix(key) {
          return this.prefix + key;
        }
      }, {
        key: "impl",
        get: function get() {
          return window.localStorage;
        }
      }, {
        key: "prefix",
        get: function get() {
          return this.group === 'NativeStorage' ? '' : "".concat(this.group, ".");
        }
      }]);

      return PreferencesWeb;
    }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

    /***/

  }
}]);
//# sourceMappingURL=web-es5.js.map