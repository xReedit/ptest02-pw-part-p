(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-repartidor-inicio-repartidor-module"],{

/***/ "./node_modules/@capacitor/push-notifications/dist/esm/definitions.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/definitions.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/push-notifications/dist/esm/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/index.js ***!
  \**********************************************************************/
/*! exports provided: PushNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotifications", function() { return PushNotifications; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "./node_modules/@capacitor/push-notifications/dist/esm/definitions.js");
/* empty/unused harmony star reexport */
const PushNotifications = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('PushNotifications', {});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/inicio-repartidor/inicio-repartidor.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/inicio-repartidor/inicio-repartidor.module.ts ***!
  \*********************************************************************/
/*! exports provided: InicioRepartidorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioRepartidorModule", function() { return InicioRepartidorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/pages/inicio-repartidor/main/main.component.ts");
/* harmony import */ var _inicio_repartidor_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio-repartidor.routing */ "./src/app/pages/inicio-repartidor/inicio-repartidor.routing.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");






class InicioRepartidorModule {
}
InicioRepartidorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InicioRepartidorModule });
InicioRepartidorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InicioRepartidorModule_Factory(t) { return new (t || InicioRepartidorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _inicio_repartidor_routing__WEBPACK_IMPORTED_MODULE_3__["InicioRepartidorRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InicioRepartidorModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _inicio_repartidor_routing__WEBPACK_IMPORTED_MODULE_3__["InicioRepartidorRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioRepartidorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _inicio_repartidor_routing__WEBPACK_IMPORTED_MODULE_3__["InicioRepartidorRoutingModule"],
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/inicio-repartidor/inicio-repartidor.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/inicio-repartidor/inicio-repartidor.routing.ts ***!
  \**********************************************************************/
/*! exports provided: InicioRepartidorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioRepartidorRoutingModule", function() { return InicioRepartidorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/pages/inicio-repartidor/main/main.component.ts");





const routes = [{
        path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        data: { titulo: 'Inicio' }
    }];
class InicioRepartidorRoutingModule {
}
InicioRepartidorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InicioRepartidorRoutingModule });
InicioRepartidorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InicioRepartidorRoutingModule_Factory(t) { return new (t || InicioRepartidorRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InicioRepartidorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioRepartidorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/inicio-repartidor/main/main.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/inicio-repartidor/main/main.component.ts ***!
  \****************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var src_app_shared_services_notificacion_push_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/notificacion-push.service */ "./src/app/shared/services/notificacion-push.service.ts");
/* harmony import */ var src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/gps-ubicacion-repartidor.service */ "./src/app/shared/services/gps-ubicacion-repartidor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/pedido-repartidor.service */ "./src/app/shared/services/pedido-repartidor.service.ts");
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/push-notifications */ "./node_modules/@capacitor/push-notifications/dist/esm/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");
/* harmony import */ var src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/utilitarios.service */ "./src/app/shared/services/utilitarios.service.ts");
/* harmony import */ var src_app_shared_config_config_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/config/config.const */ "./src/app/shared/config/config.const.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");




















function MainComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Para recibir pedidos es necesario que:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Active su ubicaci\u00F3n (GPS). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_container_12_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r180); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r179.aceptarPosition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Activar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function MainComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Active las notificaciones. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_container_13_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r182); const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r181.aceptarNotificacion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Activar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function MainComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Validando Permisos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
class MainComponent {
    constructor(infoTokenService, pushNotificationService, geoPositionService, router, pedidoRepartidorService, utilitarioService) {
        this.infoTokenService = infoTokenService;
        this.pushNotificationService = pushNotificationService;
        this.geoPositionService = geoPositionService;
        this.router = router;
        this.pedidoRepartidorService = pedidoRepartidorService;
        this.utilitarioService = utilitarioService;
        this.isOnNotificactionPush = false;
        this.isOnGeoPosition = false;
        this.isValid = false;
    }
    ngOnInit() {
        this.infoTokenService.getInfoUs();
        // console.log(this.infoTokenService.getInfoUs());
        this.nomRepartidor = this.infoTokenService.infoUsToken.usuario.nombre;
        this.pedidoRepartidorService.cleanLocal();
        console.log('aaa');
        if (!src_app_shared_config_config_const__WEBPACK_IMPORTED_MODULE_10__["IS_NATIVE"]) {
            return;
        }
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__["PushNotifications"].requestPermissions().then(result => {
            console.log('result.receive', result.receive);
            if (result.receive === 'granted') {
                // Register with Apple / Google to receive push via APNS/FCM
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__["PushNotifications"].register();
            }
            else {
                // Show some error
                console.log('error al registrar');
            }
        });
        // On success, we should be able to receive notifications
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__["PushNotifications"].addListener('registration', (token) => {
            console.log('addListener token.value ', token.value);
            this.pushNotificationService.saveSuscripcion(token.value);
        });
        // Some issue with our setup and push will not work
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__["PushNotifications"].addListener('registrationError', (error) => {
            alert('Error en registrar: ' + JSON.stringify(error));
        });
        // Show us the notification payload if the app is open on our device
        // PushNotifications.addListener('pushNotificationReceived',
        //   (notification: PushNotificationSchema) => {
        //     alert('Push received: ' + JSON.stringify(notification));
        //   }
        // );
        // Method called when tapping on a notification
        // PushNotifications.addListener('pushNotificationActionPerformed',
        //   (notification: ActionPerformed) => {
        //     alert('Push action performed: ' + JSON.stringify(notification));
        //   }
        // );
    }
    aceptarNotificacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!src_app_shared_config_config_const__WEBPACK_IMPORTED_MODULE_10__["IS_NATIVE"]) {
                try {
                    if (yield this.pushNotificationService.getIsTienePermiso()) {
                        this.pushNotificationService.suscribirse();
                    }
                }
                catch (error) {
                }
            }
            this.isOnNotificactionPush = true;
            this.validConf();
        });
    }
    // aceptarPosition() {
    //   this.geoPositionService.onGeoPosition();
    //   // setTimeout(() => {
    //   //   this.isOnGeoPosition = this.geoPositionService.getGeoPosition().hasPermition;
    //   //   this.pushNotificationService.suscribirse();
    //   //   this.isOnGeoPosition = true;
    //   //   this.validConf();
    //   // }, 1500);
    // }
    aceptarPosition() {
        try {
            Geolocation.requestPermissions().then(() => {
                // Permisos de geolocalización aceptados
                // GPS activado
                this.isOnGeoPosition = this.geoPositionService.getGeoPosition().hasPermition;
                // this.pushNotificationService.suscribirse();
                this.isOnGeoPosition = true;
                this.validConf();
            }, (err) => {
                // Permisos de geolocalización rechazados
                // GPS no activado
                alert('Es necesario que active su ubicación (GPS)');
                this.geoPositionService.onGeoPosition();
                setTimeout(() => {
                    this.isOnGeoPosition = this.geoPositionService.getGeoPosition().hasPermition;
                    this.pushNotificationService.suscribirse();
                    this.isOnGeoPosition = true;
                    this.validConf();
                }, 1500);
            });
        }
        catch (error) {
            // navegador
            this.geoPositionService.onGeoPosition();
            setTimeout(() => {
                this.isOnGeoPosition = this.geoPositionService.getGeoPosition().hasPermition;
                this.pushNotificationService.suscribirse();
                this.isOnGeoPosition = true;
                this.validConf();
            }, 1500);
        }
    }
    // aceptarPosition2() {
    //   Geolocation.getCurrentPosition().then(position => {
    //     alert(position);
    //   });
    // }
    validConf() {
        this.isValid = this.isOnNotificactionPush && this.isOnGeoPosition;
        if (this.isValid) {
            setTimeout(() => {
                this.router.navigate(['./main']);
            }, 1400);
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_notificacion_push_service__WEBPACK_IMPORTED_MODULE_3__["NotificacionPushService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_4__["GpsUbicacionRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_6__["PedidoRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_9__["UtilitariosService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 15, vars: 5, consts: [[1, "animated", "fadeIn"], [1, "p-3", "text-center", "w-100"], ["src", "assets/images/img-ini.png", "alt", "img-ini", 2, "max-width", "150px"], ["class", "fs-17", 4, "ngIf"], [4, "ngIf"], [1, "fs-17"], [1, "fw-100"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Hola");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MainComponent_p_10_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MainComponent_ng_container_12_Template, 8, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MainComponent_ng_container_13_Template, 9, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MainComponent_div_14_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.nomRepartidor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isOnGeoPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isOnNotificactionPush);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isValid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby1yZXBhcnRpZG9yL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"] }, { type: src_app_shared_services_notificacion_push_service__WEBPACK_IMPORTED_MODULE_3__["NotificacionPushService"] }, { type: src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_4__["GpsUbicacionRepartidorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_6__["PedidoRepartidorService"] }, { type: src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_9__["UtilitariosService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-inicio-repartidor-inicio-repartidor-module-es2015.js.map