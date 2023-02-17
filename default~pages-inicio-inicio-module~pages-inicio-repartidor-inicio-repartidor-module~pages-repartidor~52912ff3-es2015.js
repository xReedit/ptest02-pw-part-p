(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-inicio-inicio-module~pages-inicio-repartidor-inicio-repartidor-module~pages-repartidor~52912ff3"],{

/***/ "./node_modules/@capacitor/geolocation/dist/esm/definitions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/geolocation/dist/esm/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/*! exports provided: Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "./node_modules/@capacitor/geolocation/dist/esm/definitions.js");
/* empty/unused harmony star reexport */
const Geolocation = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Geolocation', {
    web: () => __webpack_require__.e(/*! import() | web */ "web").then(__webpack_require__.bind(null, /*! ./web */ "./node_modules/@capacitor/geolocation/dist/esm/web.js")).then(m => new m.GeolocationWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/shared/services/gps-ubicacion-repartidor.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/services/gps-ubicacion-repartidor.service.ts ***!
  \*********************************************************************/
/*! exports provided: GpsUbicacionRepartidorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsUbicacionRepartidorService", function() { return GpsUbicacionRepartidorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/geoposition.model */ "./src/app/modelos/geoposition.model.ts");
/* harmony import */ var _repartidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repartidor.service */ "./src/app/shared/services/repartidor.service.ts");
/* harmony import */ var _pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pedido-repartidor.service */ "./src/app/shared/services/pedido-repartidor.service.ts");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/geolocation */ "./node_modules/@capacitor/geolocation/dist/esm/index.js");










class GpsUbicacionRepartidorService {
    constructor(repartidorService, pedidoRepartidorService) {
        this.repartidorService = repartidorService;
        this.pedidoRepartidorService = pedidoRepartidorService;
        this.geoPosition = new src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_2__["GeoPositionModel"];
        this.key = 'sys::pos';
        this.geoPositionNowSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.geoPosition);
        this.geoPositionNow$ = this.geoPositionNowSource.asObservable();
        this.geoPositionCapacitorNowSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.geoPosition);
        this.geoPositionCapacitorNow$ = this.geoPositionCapacitorNowSource.asObservable();
    }
    // activar geoposition
    onGeoPosition(saveBdPositionInit = false) {
        this.get();
        navigator.geolocation.getCurrentPosition((position) => {
            // const divicePos = { lat: position.coords.latitude, lng: position.coords.longitude};
            this.geoPosition.latitude = position.coords.latitude;
            this.geoPosition.longitude = position.coords.longitude;
            this.geoPosition.hasPermition = true;
            this.set();
            // guarda en la bd su posicion actual
            if (saveBdPositionInit) {
                this.repartidorService.guardarPositionActual(this.geoPosition);
            }
        }, this.showPositionError);
    }
    susccesWatchPosition(pos) {
        // console.log('onGeoWatchPosition');
        // console.log('position actual', this.geoPosition);
        // console.log('position actual pos', pos);
        this.geoPositionNowSource.next(this.geoPosition);
        if (this.geoPosition.latitude === pos.coords.latitude && this.geoPosition.longitude === pos.coords.longitude) {
            return;
        }
        this.geoPosition.latitude = pos.coords.latitude;
        this.geoPosition.longitude = pos.coords.longitude;
        // console.log('this.geoPosition', this.geoPosition);
        this.set();
        // emitimos la position al comercio cliente y central
        this.repartidorService.emitPositionNow(this.geoPosition);
        // guarda en la bd // si el pedido aun no esta aceptado, si pedido esta en proceso de entrega no graba, porque es constante
        // -- no aplica tiene que guardar no mas -- para que el comercio sepa su position inicial
        // ahora va a guardar cada 2 minutos
        // console.log('transmitiendo pos');
        const _mLastPos = this.getMinLastNotificationPosition();
        const _mMinNow = new Date().getMinutes();
        if (_mLastPos !== _mMinNow) {
            if (_mMinNow % 2 === 0) {
                // console.log('save transmitiendo pos');
                this.setMinLastNotificationPosition();
                this.repartidorService.guardarPositionActual(this.geoPosition);
            }
        }
    }
    errorWatchPosition(err) {
        // console.warn('ERROR(' + err.code + '): ' + err.message);
        // console.log('error gps', err);
    }
    setMinLastNotificationPosition() {
        localStorage.setItem('sys::last:m:pos', new Date().getMinutes().toString());
    }
    getMinLastNotificationPosition() {
        const _m = localStorage.getItem('sys::last:m:pos');
        return _m ? parseInt(_m, 0) : 2;
        // localStorage.setItem('sys::last:m:pos', new Date().getMinutes().toString());
    }
    onGeoWatchPosition() {
        this.get();
        const options = {
            enableHighAccuracy: true,
            timeout: 7000,
            maximumAge: 3000
        };
        navigator.geolocation.watchPosition(pos => this.susccesWatchPosition(pos), this.errorWatchPosition, options);
    }
    onGeoWatchPositionCapacitor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                enableHighAccuracy: true,
                timeout: 7000,
                maximumAge: 3000
            };
            const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__["Geolocation"].getCurrentPosition();
            this.geoPositionCapacitorNowSource.next(coordinates);
            // console.log('Current position:', coordinates);
            yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__["Geolocation"].watchPosition(options, (data) => {
                try {
                    // do something with data
                    const _returnValue = new src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_2__["GeoPositionModel"]();
                    _returnValue.latitude = data.coords.latitude;
                    _returnValue.longitude = data.coords.longitude;
                    _returnValue.hasPermition = true;
                    this.geoPosition = _returnValue;
                    this.set();
                    this.geoPositionCapacitorNowSource.next(_returnValue);
                    // console.log('Current position:', _returnValue);
                }
                catch (e) {
                    // do something with error
                }
            });
        });
    }
    ;
    aonGeoWatchPositionCapacitor() {
        // Solicita permiso al usuario para acceder a su ubicación
        // this.geolocation.requestPermissions()
        //   .then(() => {
        // Obtiene la ubicación del usuario cada vez que cambia
        // const options = {
        //   enableHighAccuracy: true,
        //   timeout: 7000, // cada 7 segundos notifica position
        //   maximumAge: 0
        // };
        // this.geolocatioC.watchPosition(
        //   position => {
        //     // Almacena la latitud y la longitud en las variables correspondientes
        //     return this.geoPositionNowSource.next(position);            
        //   }
        // ).subscribe();
        // });  
    }
    getGeoPosition() {
        return this.geoPosition;
    }
    showPositionError(error) {
        // if ( error.PERMISSION_DENIED ) {
        this.geoPosition.hasPermition = false;
        // }
    }
    set() {
        localStorage.setItem(this.key, JSON.stringify(this.geoPosition));
    }
    get() {
        const _geoPosition = localStorage.getItem(this.key);
        this.geoPosition = _geoPosition ? JSON.parse(_geoPosition) : new src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_2__["GeoPositionModel"];
        return this.geoPosition;
    }
}
GpsUbicacionRepartidorService.ɵfac = function GpsUbicacionRepartidorService_Factory(t) { return new (t || GpsUbicacionRepartidorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_repartidor_service__WEBPACK_IMPORTED_MODULE_3__["RepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_4__["PedidoRepartidorService"])); };
GpsUbicacionRepartidorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GpsUbicacionRepartidorService, factory: GpsUbicacionRepartidorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GpsUbicacionRepartidorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _repartidor_service__WEBPACK_IMPORTED_MODULE_3__["RepartidorService"] }, { type: _pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_4__["PedidoRepartidorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/notificacion-push.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/notificacion-push.service.ts ***!
  \**************************************************************/
/*! exports provided: NotificacionPushService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionPushService", function() { return NotificacionPushService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _config_config_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config.const */ "./src/app/shared/config/config.const.ts");










// import { Observable } from 'rxjs/internal/Observable';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { DialogDesicionComponent } from 'src/app/componentes/dialog-desicion/dialog-desicion.component';
class NotificacionPushService {
    // private VAPID_PUBLIC = 'BC7ietauZE99Hx9HkPyuGVr8jaYETyEJgH-gLaYIsbORYobppt9dX49_K_wubDqphu1afi7XrM6x1zAp4kJh_wU';
    constructor(swPush, crudService, infoTokenService) {
        // this.showMessages();
        this.swPush = swPush;
        this.crudService = crudService;
        this.infoTokenService = infoTokenService;
        this.swPush.notificationClicks.subscribe(event => {
            // const url = event.notification.data.url;
            // window.location.reload();
            // window.open('reparto.papaya.com.pe');
        });
    }
    getIsTienePermiso() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Notification.requestPermission()
                .then((permission) => {
                // If the user accepts, let's create a notification
                // if (permission === "granted") {
                //   // const notification = new Notification("Hi there!");
                //   // …
                // }
                // return permission === "granted"
            });
            return Notification.permission === 'granted' ? true : false;
        });
    }
    // se suscribe a la notificacion
    suscribirse() {
        // console.log('llego a suscribirse estado this.swPush.isEnabled: ', this.swPush.isEnabled);
        // if ( this.swPush.isEnabled ) {
        // this.swPush.subscription.subscribe(res => {
        // if (!res) {return; }
        // this.lanzarPermisoNotificationPush(option);
        this.keySuscribtion();
        // });
        // }    
    }
    //  suscriberse
    keySuscribtion() {
        console.log('keySuscribtion');
        this.swPush
            .requestSubscription({
            serverPublicKey: _config_config_const__WEBPACK_IMPORTED_MODULE_5__["VAPID_PUBLIC"],
        })
            .then(subscription => {
            // send subscription to the server
            console.log('suscrito a notificaciones push', subscription);
            this.saveSuscripcion(subscription);
        })
            .catch(console.error);
    }
    // native
    saveSuscripcion(_subscription) {
        const _data = {
            suscripcion: _subscription,
            idcliente: this.infoTokenService.infoUsToken.idcliente
        };
        this.crudService.postFree(_data, 'repartidor', 'push-suscripcion', true)
            .subscribe(res => console.log(res));
    }
}
NotificacionPushService.ɵfac = function NotificacionPushService_Factory(t) { return new (t || NotificacionPushService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_4__["InfoTockenService"])); };
NotificacionPushService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificacionPushService, factory: NotificacionPushService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificacionPushService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"] }, { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] }, { type: _info_token_service__WEBPACK_IMPORTED_MODULE_4__["InfoTockenService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-inicio-inicio-module~pages-inicio-repartidor-inicio-repartidor-module~pages-repartidor~52912ff3-es2015.js.map