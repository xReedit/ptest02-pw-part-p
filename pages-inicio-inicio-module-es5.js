function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"], {
  /***/
  "./src/app/componentes/dialog-ubicacion/dialog-ubicacion.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/componentes/dialog-ubicacion/dialog-ubicacion.component.ts ***!
    \****************************************************************************/

  /*! exports provided: DialogUbicacionComponent */

  /***/
  function srcAppComponentesDialogUbicacionDialogUbicacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogUbicacionComponent", function () {
      return DialogUbicacionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var geolocation_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! geolocation-utils */
    "./node_modules/geolocation-utils/lib/index.js");
    /* harmony import */


    var geolocation_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(geolocation_utils__WEBPACK_IMPORTED_MODULE_2__);

    var DialogUbicacionComponent = /*#__PURE__*/function () {
      function DialogUbicacionComponent(dialogRef, data) {
        _classCallCheck(this, DialogUbicacionComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.hasPermissionPosition = true;
        this.cLocal = data.cLocal;
      }

      _createClass(DialogUbicacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadGPS();
        }
      }, {
        key: "loadGPS",
        value: function loadGPS() {
          var _this = this;

          setTimeout(function () {
            // loading
            _this.getPosition();
          }, 4000);
        }
      }, {
        key: "getPosition",
        value: function getPosition() {
          var _this2 = this;

          navigator.geolocation.getCurrentPosition(function (position) {
            var divicePos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            _this2.cDispositivo = divicePos;
            _this2.hasPermissionPosition = true;
            _this2.data.posIssValid = _this2.data.isDemo ? true : _this2.arePointsNear(_this2.cLocal, _this2.cDispositivo, 1);

            _this2.cerrarDlg();
          }, this.showPositionError);
        }
      }, {
        key: "showPositionError",
        value: function showPositionError(error) {
          // if ( error.PERMISSION_DENIED ) {
          this.hasPermissionPosition = false;
          this.data.posIssValid = false;
          this.cerrarDlg(); // }
        }
      }, {
        key: "arePointsNear",
        value: function arePointsNear(checkPoint, centerPoint, km) {
          // const ky = 40000 / 360;
          // const kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
          // const dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
          // const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
          // return Math.sqrt(dx * dx + dy * dy) <= km;
          var center = {
            lat: centerPoint.lat,
            lon: centerPoint.lng
          };
          var radius = 65; // meters
          // insideCircle({lat: 51.03, lon: 4.05}, center, radius) // true

          return Object(geolocation_utils__WEBPACK_IMPORTED_MODULE_2__["insideCircle"])({
            lat: checkPoint.lat,
            lon: checkPoint.lng
          }, center, radius); // false
        }
      }, {
        key: "cerrarDlg",
        value: function cerrarDlg() {
          this.dialogRef.close(this.data.posIssValid);
        }
      }]);

      return DialogUbicacionComponent;
    }();

    DialogUbicacionComponent.ɵfac = function DialogUbicacionComponent_Factory(t) {
      return new (t || DialogUbicacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogUbicacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogUbicacionComponent,
      selectors: [["app-dialog-ubicacion"]],
      decls: 4,
      vars: 0,
      consts: [[1, "text-center", "p-3"], [1, "fa", "fa-map-marker", "fa-2x"], [1, "fs-20"]],
      template: function DialogUbicacionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Verificando su ubicaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RpYWxvZy11YmljYWNpb24vZGlhbG9nLXViaWNhY2lvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogUbicacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-ubicacion',
          templateUrl: './dialog-ubicacion.component.html',
          styleUrls: ['./dialog-ubicacion.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modelos/usuario-autorizado.model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modelos/usuario-autorizado.model.ts ***!
    \*****************************************************/

  /*! exports provided: UsuarioAutorizadoModel */

  /***/
  function srcAppModelosUsuarioAutorizadoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioAutorizadoModel", function () {
      return UsuarioAutorizadoModel;
    });

    var UsuarioAutorizadoModel = function UsuarioAutorizadoModel() {
      _classCallCheck(this, UsuarioAutorizadoModel);
    };
    /***/

  },

  /***/
  "./src/app/pages/inicio/callback-auth/callback-auth.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/inicio/callback-auth/callback-auth.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CallbackAuthComponent */

  /***/
  function srcAppPagesInicioCallbackAuthCallbackAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallbackAuthComponent", function () {
      return CallbackAuthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/verify-auth-client.service */
    "./src/app/shared/services/verify-auth-client.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/fesm2015/progress-bar.js");

    var CallbackAuthComponent = /*#__PURE__*/function () {
      function CallbackAuthComponent(verifyClientService, router, authService, infoToken) {
        _classCallCheck(this, CallbackAuthComponent);

        this.verifyClientService = verifyClientService;
        this.router = router;
        this.authService = authService;
        this.infoToken = infoToken;
        this.isProcesando = true;
        this.veryfyClient = null;
      }

      _createClass(CallbackAuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // this.verifyClientService.verifyClient();
          this.veryfyClient = this.verifyClientService.verifyClient().subscribe(function (res) {
            if (!res) {
              return;
            }

            _this3.isProcesando = false; // console.log('res idcliente', res);

            _this3.setInfoToken(res);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.veryfyClient.unsubscribe();
        }
      }, {
        key: "setInfoToken",
        value: function setInfoToken(token) {
          var _token = "eyCJ9.".concat(btoa(JSON.stringify(token)));

          this.authService.setLocalToken(_token);
          this.authService.setLoggedStatus(true);
          this.infoToken.converToJSON();

          if (!this.infoToken.infoUsToken.direccionEnvioSelected && this.infoToken.isDelivery()) {
            this.verifyClientService.setIsDelivery(true);
            this.router.navigate(['./zona-delivery']);
          } else {
            this.router.navigate(['./pedido']);
          }
        }
      }]);

      return CallbackAuthComponent;
    }();

    CallbackAuthComponent.ɵfac = function CallbackAuthComponent_Factory(t) {
      return new (t || CallbackAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_1__["VerifyAuthClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_4__["InfoTockenService"]));
    };

    CallbackAuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CallbackAuthComponent,
      selectors: [["app-callback-auth"]],
      decls: 6,
      vars: 0,
      consts: [[1, "container-scan", "animated", "fadeIn", "text-center"], [1, "text-center"], ["mode", "indeterminate"]],
      template: function CallbackAuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Obteniendo datos ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-progress-bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"]],
      styles: [".container-scan[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    background: rgba(158,158,158,0.31);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL2NhbGxiYWNrLWF1dGgvY2FsbGJhY2stYXV0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtDQUFrQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9jYWxsYmFjay1hdXRoL2NhbGxiYWNrLWF1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItc2NhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNTgsMTU4LDE1OCwwLjMxKTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbackAuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-callback-auth',
          templateUrl: './callback-auth.component.html',
          styleUrls: ['./callback-auth.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_1__["VerifyAuthClientService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_4__["InfoTockenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inicio/inicio.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/inicio/inicio.module.ts ***!
    \***********************************************/

  /*! exports provided: InicioModule */

  /***/
  function srcAppPagesInicioInicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioModule", function () {
      return InicioModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _inicio_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./inicio.routing */
    "./src/app/pages/inicio/inicio.routing.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/material/material.module */
    "./src/app/core/material/material.module.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/pages/inicio/main/main.component.ts");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/pages/inicio/inicio/inicio.component.ts");
    /* harmony import */


    var _login_personal_autorizado_login_personal_autorizado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login-personal-autorizado/login-personal-autorizado.component */
    "./src/app/pages/inicio/login-personal-autorizado/login-personal-autorizado.component.ts");
    /* harmony import */


    var _lector_codigo_qr_lector_codigo_qr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lector-codigo-qr/lector-codigo-qr.component */
    "./src/app/pages/inicio/lector-codigo-qr/lector-codigo-qr.component.ts");
    /* harmony import */


    var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @zxing/ngx-scanner */
    "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
    /* harmony import */


    var _lector_success_lector_success_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./lector-success/lector-success.component */
    "./src/app/pages/inicio/lector-success/lector-success.component.ts");
    /* harmony import */


    var _callback_auth_callback_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./callback-auth/callback-auth.component */
    "./src/app/pages/inicio/callback-auth/callback-auth.component.ts");
    /* harmony import */


    var _login_cliente_login_cliente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login-cliente/login-cliente.component */
    "./src/app/pages/inicio/login-cliente/login-cliente.component.ts");
    /* harmony import */


    var src_app_componentes_dialog_ubicacion_dialog_ubicacion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/componentes/dialog-ubicacion/dialog-ubicacion.component */
    "./src/app/componentes/dialog-ubicacion/dialog-ubicacion.component.ts");
    /* harmony import */


    var _seleccionar_ubicacion_delivery_seleccionar_ubicacion_delivery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./seleccionar-ubicacion-delivery/seleccionar-ubicacion-delivery.component */
    "./src/app/pages/inicio/seleccionar-ubicacion-delivery/seleccionar-ubicacion-delivery.component.ts");
    /* harmony import */


    var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/componentes/componentes.module */
    "./src/app/componentes/componentes.module.ts"); // import { CallbackAuth0Component } from './callback-auth0/callback-auth0.component';


    var InicioModule = function InicioModule() {
      _classCallCheck(this, InicioModule);
    };

    InicioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InicioModule
    });
    InicioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InicioModule_Factory(t) {
        return new (t || InicioModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _inicio_routing__WEBPACK_IMPORTED_MODULE_2__["InicioRoutingModule"], src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_15__["ComponentesModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_9__["ZXingScannerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InicioModule, {
        declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__["InicioComponent"], _login_personal_autorizado_login_personal_autorizado_component__WEBPACK_IMPORTED_MODULE_7__["LoginPersonalAutorizadoComponent"], _lector_codigo_qr_lector_codigo_qr_component__WEBPACK_IMPORTED_MODULE_8__["LectorCodigoQrComponent"], _lector_success_lector_success_component__WEBPACK_IMPORTED_MODULE_10__["LectorSuccessComponent"], _callback_auth_callback_auth_component__WEBPACK_IMPORTED_MODULE_11__["CallbackAuthComponent"], _login_cliente_login_cliente_component__WEBPACK_IMPORTED_MODULE_12__["LoginClienteComponent"], src_app_componentes_dialog_ubicacion_dialog_ubicacion_component__WEBPACK_IMPORTED_MODULE_13__["DialogUbicacionComponent"], _seleccionar_ubicacion_delivery_seleccionar_ubicacion_delivery_component__WEBPACK_IMPORTED_MODULE_14__["SeleccionarUbicacionDeliveryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _inicio_routing__WEBPACK_IMPORTED_MODULE_2__["InicioRoutingModule"], src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_15__["ComponentesModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_9__["ZXingScannerModule"]],
        exports: [src_app_componentes_dialog_ubicacion_dialog_ubicacion_component__WEBPACK_IMPORTED_MODULE_13__["DialogUbicacionComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__["InicioComponent"], _login_personal_autorizado_login_personal_autorizado_component__WEBPACK_IMPORTED_MODULE_7__["LoginPersonalAutorizadoComponent"], _lector_codigo_qr_lector_codigo_qr_component__WEBPACK_IMPORTED_MODULE_8__["LectorCodigoQrComponent"], _lector_success_lector_success_component__WEBPACK_IMPORTED_MODULE_10__["LectorSuccessComponent"], _callback_auth_callback_auth_component__WEBPACK_IMPORTED_MODULE_11__["CallbackAuthComponent"], _login_cliente_login_cliente_component__WEBPACK_IMPORTED_MODULE_12__["LoginClienteComponent"], src_app_componentes_dialog_ubicacion_dialog_ubicacion_component__WEBPACK_IMPORTED_MODULE_13__["DialogUbicacionComponent"], _seleccionar_ubicacion_delivery_seleccionar_ubicacion_delivery_component__WEBPACK_IMPORTED_MODULE_14__["SeleccionarUbicacionDeliveryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _inicio_routing__WEBPACK_IMPORTED_MODULE_2__["InicioRoutingModule"], src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_15__["ComponentesModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_9__["ZXingScannerModule"]],
          exports: [src_app_componentes_dialog_ubicacion_dialog_ubicacion_component__WEBPACK_IMPORTED_MODULE_13__["DialogUbicacionComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inicio/inicio.routing.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/inicio/inicio.routing.ts ***!
    \************************************************/

  /*! exports provided: InicioRoutingModule */

  /***/
  function srcAppPagesInicioInicioRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioRoutingModule", function () {
      return InicioRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/pages/inicio/main/main.component.ts");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/pages/inicio/inicio/inicio.component.ts");
    /* harmony import */


    var _login_personal_autorizado_login_personal_autorizado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-personal-autorizado/login-personal-autorizado.component */
    "./src/app/pages/inicio/login-personal-autorizado/login-personal-autorizado.component.ts");
    /* harmony import */


    var _lector_codigo_qr_lector_codigo_qr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lector-codigo-qr/lector-codigo-qr.component */
    "./src/app/pages/inicio/lector-codigo-qr/lector-codigo-qr.component.ts");
    /* harmony import */


    var _lector_success_lector_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lector-success/lector-success.component */
    "./src/app/pages/inicio/lector-success/lector-success.component.ts");
    /* harmony import */


    var _callback_auth_callback_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./callback-auth/callback-auth.component */
    "./src/app/pages/inicio/callback-auth/callback-auth.component.ts");
    /* harmony import */


    var src_app_shared_guards_codigo_qr_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/guards/codigo-qr.guard */
    "./src/app/shared/guards/codigo-qr.guard.ts");
    /* harmony import */


    var _login_cliente_login_cliente_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login-cliente/login-cliente.component */
    "./src/app/pages/inicio/login-cliente/login-cliente.component.ts");
    /* harmony import */


    var _seleccionar_ubicacion_delivery_seleccionar_ubicacion_delivery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./seleccionar-ubicacion-delivery/seleccionar-ubicacion-delivery.component */
    "./src/app/pages/inicio/seleccionar-ubicacion-delivery/seleccionar-ubicacion-delivery.component.ts");

    var routes = [{
      path: '',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
      data: {
        titulo: 'Inicio'
      },
      children: [{
        path: '',
        redirectTo: 'inicio'
      }, {
        path: 'inicio',
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"],
        data: {
          titulo: 'Inicio'
        }
      }, {
        path: 'login-personal-autorizado',
        component: _login_personal_autorizado_login_personal_autorizado_component__WEBPACK_IMPORTED_MODULE_4__["LoginPersonalAutorizadoComponent"],
        data: {
          titulo: 'Login Personal Autorizado'
        }
      }, {
        path: 'lector-qr',
        component: _lector_codigo_qr_lector_codigo_qr_component__WEBPACK_IMPORTED_MODULE_5__["LectorCodigoQrComponent"],
        data: {
          titulo: 'Lector QR'
        }
      }, {
        path: 'lector-success',
        component: _lector_success_lector_success_component__WEBPACK_IMPORTED_MODULE_6__["LectorSuccessComponent"],
        canActivate: [src_app_shared_guards_codigo_qr_guard__WEBPACK_IMPORTED_MODULE_8__["CodigoQrGuard"]],
        data: {
          titulo: 'Lector QR'
        }
      }, {
        path: 'login-client',
        component: _login_cliente_login_cliente_component__WEBPACK_IMPORTED_MODULE_9__["LoginClienteComponent"],
        canActivate: [src_app_shared_guards_codigo_qr_guard__WEBPACK_IMPORTED_MODULE_8__["CodigoQrGuard"]],
        data: {
          titulo: 'Loguear'
        }
      }, {
        path: 'callback-auth',
        canActivate: [src_app_shared_guards_codigo_qr_guard__WEBPACK_IMPORTED_MODULE_8__["CodigoQrGuard"]],
        component: _callback_auth_callback_auth_component__WEBPACK_IMPORTED_MODULE_7__["CallbackAuthComponent"],
        data: {
          titulo: 'Callback Auth'
        }
      } // delivery
      , {
        path: 'direccion-delivery',
        // canActivate: [CodigoQrGuard],
        component: _seleccionar_ubicacion_delivery_seleccionar_ubicacion_delivery_component__WEBPACK_IMPORTED_MODULE_10__["SeleccionarUbicacionDeliveryComponent"],
        data: {
          titulo: 'Seleccionar Direccion'
        }
      }]
    }];

    var InicioRoutingModule = function InicioRoutingModule() {
      _classCallCheck(this, InicioRoutingModule);
    };

    InicioRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InicioRoutingModule
    });
    InicioRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InicioRoutingModule_Factory(t) {
        return new (t || InicioRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InicioRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inicio/inicio/inicio.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/inicio/inicio/inicio.component.ts ***!
    \*********************************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppPagesInicioInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/verify-auth-client.service */
    "./src/app/shared/services/verify-auth-client.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");

    function InicioComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Hola ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, ", que quieres pedir hoy?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.nombreClientSocket);
      }
    }

    var _c0 = function _c0() {
      return ["/login-personal-autorizado"];
    }; // import { take } from 'rxjs/internal/operators/take';
    // import { ListenStatusService } from 'src/app/shared/services/listen-status.service';


    var InicioComponent = /*#__PURE__*/function () {
      function InicioComponent(verifyClientService, router, storageService // private webSocketService: WebsocketService
      ) {
        _classCallCheck(this, InicioComponent);

        this.verifyClientService = verifyClientService;
        this.router = router;
        this.storageService = storageService;
        this.veryfyClient = null;
        this.isLogin = false;
        this.nombreClientSocket = '';
      }

      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nombreClientSocket = '';
          screen.orientation.unlock(); // setTimeout(() => {
          // this.loadInit();
          // }, 800);

          this.checkUserLogin();
        }
      }, {
        key: "checkUserLogin",
        value: function checkUserLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var userLogin;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storageService.getLoginUser();

                  case 2:
                    userLogin = _context.sent;

                    if (userLogin) {
                      // alert( `User ${JSON.stringify(userLogin)}`)
                      this.router.navigate(['/login-personal-autorizado']);
                    } else {
                      // limpiar datos
                      localStorage.clear();
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadInit",
        value: function loadInit() {
          var _this4 = this;

          this.verifyClientService.getDataClient();
          this.verifyClientService.setQrSuccess(false);
          this.verifyClientService.setIsDelivery(false);
          this.verifyClientService.setDireccionDeliverySelected(null);
          this.isLogin = this.verifyClientService.isLogin(); // console.log('desde incio', this.isLogin);

          this.verifyClientService.setMesa(null);
          this.verifyClientService.setIdOrg(null);
          this.verifyClientService.setIdSede(null);
          this.veryfyClient = this.verifyClientService.verifyClient().subscribe(function (res) {
            _this4.nombreClientSocket = res.usuario;
            _this4.isLogin = _this4.verifyClientService.getIsLoginByDNI() ? true : _this4.verifyClientService.isLogin();

            _this4.verifyClientService.setQrSuccess(false); // console.log('res idcliente', res);

          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {} // this.verifyClientService.unsubscribeClient();
        // this.veryfyClient.unsubscribe();
        // changeLenguage() {
        //   const elements = this.elem.nativeElement.querySelectorAll('.goog-te-combo');
        //   elements.value = 'es';
        // }

      }, {
        key: "cerrarSession",
        value: function cerrarSession() {
          this.verifyClientService.loginOut();
        }
      }, {
        key: "showClienteProfile",
        value: function showClienteProfile() {
          if (this.isLogin) {
            this.router.navigate(['/cliente-profile']);
          }
        }
      }, {
        key: "showDelivery",
        value: function showDelivery() {
          if (this.isLogin) {
            this.router.navigate(['./zona-delivery']);
          } else {
            this.verifyClientService.setIsDelivery(true);
            this.router.navigate(['/login-client']);
          }
        }
      }]);

      return InicioComponent;
    }();

    InicioComponent.ɵfac = function InicioComponent_Factory(t) {
      return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__["VerifyAuthClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]));
    };

    InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InicioComponent,
      selectors: [["app-inicio"]],
      decls: 31,
      vars: 3,
      consts: [[1, "text-center", "container-ini"], [1, "container-body"], [1, "header"], [1, "inner-header", "flex"], ["src", "assets/images/papaya_text-white.png", "width", "190px"], [1, "fs-12"], ["viewBox", "0 24 150 28", "preserveAspectRatio", "none", "shape-rendering", "auto", 1, "waves"], ["id", "gentle-wave", "d", "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"], [1, "parallax"], [0, "xlink", "href", "#gentle-wave", "x", "48", "y", "0", "fill", "rgba(255,255,255,0.7"], [0, "xlink", "href", "#gentle-wave", "x", "48", "y", "3", "fill", "rgba(255,255,255,0.5)"], [0, "xlink", "href", "#gentle-wave", "x", "48", "y", "5", "fill", "rgba(255,255,255,0.3)"], [0, "xlink", "href", "#gentle-wave", "x", "48", "y", "7", "fill", "#fff"], [1, "text-center", "pl-4", "pr-4"], ["src", "assets/images/img-ini.png", "alt", "ini", 2, "max-width", "320px", "width", "100%"], [1, "fs-14", 2, "color", "#616161"], ["class", "border-bottom", "style", "background: blanchedalmond;", 4, "ngIf"], ["matRipple", "", 1, "p-3", "border-bottom", "border-top", 3, "routerLink"], ["src", "assets/images/btn-login.png", "alt", "btn-scan"], [1, "pl-2"], [1, "border-bottom", 2, "background", "blanchedalmond"], [1, "fs-13"]],
      template: function InicioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Repartidor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "v.2c");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "use", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "use", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "use", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "use", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Gana dinero con cada entrega que hagas, \xA1no hay l\xEDmites de ganancia!.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, InicioComponent_div_25_Template, 7, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Ingresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".container-ini[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 100vh;\r\n}\r\n\r\n.container-body[_ngcontent-%COMP%] {\r\n    padding-bottom: 3.5rem\r\n}\r\n\r\n.xfooter[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    text-align: center;\r\n    width: 100%;\r\n    padding: 20px;    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaW8vaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pbmkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXItYm9keSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMy41cmVtXHJcbn1cclxuXHJcbi54Zm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4OyAgICBcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-inicio',
          templateUrl: './inicio.component.html',
          styleUrls: ['./inicio.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__["VerifyAuthClientService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inicio/lector-codigo-qr/lector-codigo-qr.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/inicio/lector-codigo-qr/lector-codigo-qr.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: LectorCodigoQrComponent */

  /***/
  function srcAppPagesInicioLectorCodigoQrLectorCodigoQrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LectorCodigoQrComponent", function () {
      return LectorCodigoQrComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/verify-auth-client.service */
    "./src/app/shared/services/verify-auth-client.service.ts");
    /* harmony import */


    var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var src_app_componentes_dialog_ubicacion_dialog_ubicacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/componentes/dialog-ubicacion/dialog-ubicacion.component */
    "./src/app/componentes/dialog-ubicacion/dialog-ubicacion.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @zxing/ngx-scanner */
    "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/fesm2015/progress-bar.js"); // import { Auth0Service } from 'src/app/shared/services/auth0.service';
    // import { Subscription } from 'rxjs/internal/Subscription';
    // import { take } from 'rxjs/operators';
    // import {
    //   toLatLon, toLatitudeLongitude, headingDistanceTo, moveTo, insidePolygon, insideCircle
    // } from 'geolocation-utils';


    function LectorCodigoQrComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Es necesario que active la ubicaci\xF3n de su telefono ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LectorCodigoQrComponent_div_1_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Obteniendo Camara...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LectorCodigoQrComponent_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
      }
    }

    function LectorCodigoQrComponent_div_1_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LectorCodigoQrComponent_div_1_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.onDeviceSelectChange();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rotar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LectorCodigoQrComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LectorCodigoQrComponent_div_1_div_1_Template, 5, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Scanear codigo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LectorCodigoQrComponent_div_1_p_4_Template, 2, 0, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "zxing-scanner", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deviceChange", function LectorCodigoQrComponent_div_1_Template_zxing_scanner_deviceChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.currentDevice = $event;
        })("camerasFound", function LectorCodigoQrComponent_div_1_Template_zxing_scanner_camerasFound_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onCamerasFound($event);
        })("permissionResponse", function LectorCodigoQrComponent_div_1_Template_zxing_scanner_permissionResponse_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onHasPermission($event);
        })("scanSuccess", function LectorCodigoQrComponent_div_1_Template_zxing_scanner_scanSuccess_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.scanSuccessHandler($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LectorCodigoQrComponent_div_1_div_6_Template, 1, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LectorCodigoQrComponent_div_1_button_8_Template, 4, 0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.hasPermissionPosition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isCameraReady);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("device", ctx_r2.currentDevice);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isCameraReady);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOptionChangeCamera);
      }
    }

    function LectorCodigoQrComponent_div_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Obteniendo datos ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-progress-bar", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function LectorCodigoQrComponent_div_2_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Codigo no valido.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LectorCodigoQrComponent_div_2_ng_template_3_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.volverALeer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Intentar nuevamente.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LectorCodigoQrComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LectorCodigoQrComponent_div_2_ng_container_2_Template, 4, 0, "ng-container", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LectorCodigoQrComponent_div_2_ng_template_3_Template, 7, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Se requiere que acepte los permisos.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LectorCodigoQrComponent_div_2_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.getPosition();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Intentar nuevamente.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isCodigoQrValido)("ngIfElse", _r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.hasPermissionPosition);
      }
    } // import {QrScannerComponent} from 'angular2-qrscanner';


    var LectorCodigoQrComponent = /*#__PURE__*/function () {
      // private veryfyClient: Subscription = null;
      function LectorCodigoQrComponent(verifyClientService, crudService, dialog, router) {
        _classCallCheck(this, LectorCodigoQrComponent);

        this.verifyClientService = verifyClientService;
        this.crudService = crudService;
        this.dialog = dialog;
        this.router = router;
        this.codQR = '';
        this.hasPermission = true;
        this.hasPermissionPosition = true;
        this.isProcesando = false;
        this.currentDevice = null;
        this.indexSelectCamera = 0;
        this.isOptionChangeCamera = false;
        this.isCodigoQrValido = true;
        this.isCameraReady = false;
        this.isSedeRequiereGPS = false; // si sede ruquiere gps

        this.isSoloLLevar = false; // si escanea qr solo para llevar
        // hasPermissionPosition = false;

        this.isDemo = false;
      }

      _createClass(LectorCodigoQrComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// const qrScanner = new QrScanner(this.videoplayer, (result: any) => // console.log('decoded qr code:', result));
          // verifica si hay usuario logeado
          // this.verifyClientService.verifyClient();
          // this.veryfyClient = this.verifyClientService.verifyClient()
          //   .pipe(take(1))
          //   .subscribe(res => {
          //     console.log('res idcliente', res);
          //   });
          // this.verifyAceptPosition();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // this.verifyClientService.unsubscribeClient();
          // this.veryfyClient.unsubscribe();
          this.currentDevice = null;
        }
      }, {
        key: "scanSuccessHandler",
        value: function scanSuccessHandler($event) {
          // console.log($event);
          this.codQR = $event;
          this.isProcesando = true;
          this.leerDatosQR(); // this.getPosition();
        }
      }, {
        key: "onHasPermission",
        value: function onHasPermission(has) {
          this.hasPermission = has;
        } // getPosition(): void {
        //   this.hasPermissionPosition = true;
        //   navigator.geolocation.getCurrentPosition((position: any) => {
        //     const divicePos = { lat: position.coords.latitude, lng: position.coords.longitude};
        //     // this.leerDatosQR(divicePos);
        //     this.divicePos = divicePos;
        //   }, this.showPositionError);
        // }
        // verifyAceptPosition() {
        //   navigator.geolocation.getCurrentPosition(this.getPosition, (error: any) => {
        //     // El segundo parámetro es la función de error
        //         switch (error.code) {
        //             case error.PERMISSION_DENIED:
        //               this.hasPermissionPosition = false;
        //                 // El usuario denegó el permiso para la Geolocalización.
        //                 break;
        //             case error.POSITION_UNAVAILABLE:
        //                 // La ubicación no está disponible.
        //                 this.hasPermissionPosition = false;
        //                 break;
        //             case error.TIMEOUT:
        //                 // Se ha excedido el tiempo para obtener la ubicación.
        //                 break;
        //             case error.UNKNOWN_ERROR:
        //                 // Un error desconocido.
        //                 this.hasPermissionPosition = false;
        //                 break;
        //         }
        //   });
        // }

      }, {
        key: "showPositionError",
        value: function showPositionError(error) {
          // if ( error.PERMISSION_DENIED ) {
          this.hasPermissionPosition = false; // }
        }
      }, {
        key: "onCamerasFound",
        value: function onCamerasFound(devices) {
          this.availableDevices = devices;
          this.hasDevices = Boolean(devices && devices.length);
          this.indexSelectCamera = devices.length - 1;
          this.isOptionChangeCamera = this.indexSelectCamera > 0 ? true : false;
          this.deviceSelectChange(); // console.log(this.availableDevices);
        }
      }, {
        key: "onDeviceSelectChange",
        value: function onDeviceSelectChange() {
          this.isCameraReady = false;
          var countCamaras = this.availableDevices.length - 1;
          this.indexSelectCamera = this.indexSelectCamera === countCamaras ? 0 : this.indexSelectCamera + 1;
          this.deviceSelectChange();
        }
      }, {
        key: "deviceSelectChange",
        value: function deviceSelectChange() {
          var _this5 = this;

          var device = this.availableDevices[this.indexSelectCamera];
          this.currentDevice = device || null;
          setTimeout(function () {
            _this5.isCameraReady = true;
          }, 1000);
        } // leer qr // formato keyQrPwa::5|-6.0283481:-76.9714528|1 -> mesa | coordenadas del local | idsede

      }, {
        key: "leerDatosQR",
        value: function leerDatosQR() {
          var _this6 = this;

          this.isCodigoQrValido = true;
          var _codQr = [];

          try {
            _codQr = atob(this.codQR).split('::');
          } catch (error) {
            this.resValidQR(false);
            return;
          }

          var isValidKeyQR = _codQr[0] === 'keyQrPwa' ? true : false;

          if (!isValidKeyQR) {
            this.isDemo = _codQr[0] === 'keyQrPwaDemo' ? true : false;
          } // no se encuentra el key no es qr valido


          if (!isValidKeyQR && !this.isDemo) {
            this.resValidQR(isValidKeyQR);
            return;
          } // const dataQr = this.codQR.split('|');


          var dataQr = _codQr[1].split('|');

          var m = dataQr[0];
          var s = dataQr[2]; // -1 = solo llevar // activa ubicacion

          this.isSoloLLevar = m === '-1' ? true : false;
          var dataSend = {
            m: m,
            s: s
          }; // consultar si sede requiere geolocalizacion

          var dataHeader = {
            idsede: s
          };
          this.crudService.postFree(dataHeader, 'ini', 'info-sede-gps', false).subscribe(function (res) {
            _this6.isSedeRequiereGPS = res.data[0].pwa_requiere_gps === '0' ? false : true;
            _this6.isSedeRequiereGPS = _this6.isSoloLLevar ? true : _this6.isSedeRequiereGPS; // setear idsede en clienteSOcket

            if (!_this6.isSoloLLevar) {
              _this6.verifyClientService.setMesa(m);
            }

            _this6.verifyClientService.getDataClient();

            _this6.verifyClientService.setIdSede(s);

            _this6.verifyClientService.setQrSuccess(true);

            _this6.verifyClientService.setIsSoloLLevar(_this6.isSoloLLevar); // this.verifyClientService.setDataClient();


            var position = dataQr[1].split(':');
            var localPos = {
              lat: parseFloat(position[0]),
              lng: parseFloat(position[1])
            };
            var isPositionCorrect = true;

            if (_this6.isSedeRequiereGPS) {
              // this.getPosition();
              // isPositionCorrect = this.isDemo ? true : this.arePointsNear(localPos, this.divicePos, 1);
              _this6.openDialogPOS(localPos);
            } else {
              _this6.resValidQR(isPositionCorrect);
            }
          });
        }
      }, {
        key: "openDialogPOS",
        value: function openDialogPOS(localPos) {
          var _this7 = this;

          var isPositionValid = false;
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.hasBackdrop = true;
          dialogConfig.data = {
            cLocal: localPos,
            isDemo: this.isDemo
          };
          var dialogRef = this.dialog.open(src_app_componentes_dialog_ubicacion_dialog_ubicacion_component__WEBPACK_IMPORTED_MODULE_5__["DialogUbicacionComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function (data) {
            if (!data) {
              isPositionValid = false;
            } // console.log('data dialog', data);


            isPositionValid = data;

            _this7.resValidQR(isPositionValid);
          });
        }
      }, {
        key: "resValidQR",
        value: function resValidQR(isValid) {
          var _this8 = this;

          if (isValid) {
            // console.log('pase correcto');
            setTimeout(function () {
              _this8.router.navigate(['/lector-success']);
            }, 1000);
          } else {
            this.isCodigoQrValido = false;
          }
        } // calcula si esta dentro del rango
        // private arePointsNear(checkPoint: any, centerPoint: any, km: number): boolean {
        //   // const ky = 40000 / 360;
        //   // const kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
        //   // const dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
        //   // const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
        //   // return Math.sqrt(dx * dx + dy * dy) <= km;
        //   const center = {lat: centerPoint.lat, lon: centerPoint.lng };
        //   const radius = 65; // meters
        //   // insideCircle({lat: 51.03, lon: 4.05}, center, radius) // true
        //   return insideCircle({lat: checkPoint.lat, lon: checkPoint.lng}, center, radius);  // false
        // }

      }, {
        key: "volverALeer",
        value: function volverALeer() {
          this.isProcesando = false;
          this.isCodigoQrValido = true;
        }
      }]);

      return LectorCodigoQrComponent;
    }();

    LectorCodigoQrComponent.ɵfac = function LectorCodigoQrComponent_Factory(t) {
      return new (t || LectorCodigoQrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__["VerifyAuthClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    LectorCodigoQrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LectorCodigoQrComponent,
      selectors: [["app-lector-codigo-qr"]],
      decls: 3,
      vars: 2,
      consts: [[1, "container-scan", "animated", "fadeIn"], ["class", "video text-center", 4, "ngIf"], [4, "ngIf"], [1, "video", "text-center"], ["class", "fw-100", 4, "ngIf"], [1, "video-scan", 3, "device", "deviceChange", "camerasFound", "permissionResponse", "scanSuccess"], ["class", "linea-scan", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], [1, "text-danger", "fs-14"], [1, "fa", "fa-map-marker"], [1, "fw-100"], [1, "linea-scan"], ["mat-button", "", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-undo"], [1, "pl-2"], [1, "text-center"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "hidden"], [1, "text-info"], ["mat-stroked-button", "", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["mode", "indeterminate"], [1, "animated", "pulse"], [1, "text-danger"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"]],
      template: function LectorCodigoQrComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LectorCodigoQrComponent_div_1_Template, 9, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LectorCodigoQrComponent_div_2_Template, 12, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isProcesando);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isProcesando);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__["ZXingScannerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"]],
      styles: ["[_nghost-%COMP%]   zxing-scanner[_ngcontent-%COMP%]  video {\r\n    max-width: 300px;\r\n    max-height: 225px;\r\n  }\r\n\r\n.container-scan[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    background: rgba(158,158,158,0.31);\r\n}\r\n\r\n.container-scan[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n}\r\n\r\n.video-scan[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n    max-height: 225px;\r\n}\r\n\r\n.linea-scan[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n    background: rgba(0,230,118,0.5);\r\n    position: relative;\r\n    -webkit-animation: updown 3s infinite;\r\n            animation: updown 3s infinite;\r\n}\r\n\r\n@-webkit-keyframes updown {\r\n    0% { bottom: 15px; }\r\n    50% { bottom: 235px;}\r\n    100% { bottom: 15px; }\r\n }\r\n\r\n@keyframes updown {\r\n    0% { bottom: 15px; }\r\n    50% { bottom: 235px;}\r\n    100% { bottom: 15px; }\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL2xlY3Rvci1jb2RpZ28tcXIvbGVjdG9yLWNvZGlnby1xci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLEtBQUssWUFBWSxFQUFFO0lBQ25CLE1BQU0sYUFBYSxDQUFDO0lBQ3BCLE9BQU8sWUFBWSxFQUFFO0NBQ3hCOztBQUpEO0lBQ0ksS0FBSyxZQUFZLEVBQUU7SUFDbkIsTUFBTSxhQUFhLENBQUM7SUFDcEIsT0FBTyxZQUFZLEVBQUU7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaW8vbGVjdG9yLWNvZGlnby1xci9sZWN0b3ItY29kaWdvLXFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB6eGluZy1zY2FubmVyOjpuZy1kZWVwIHZpZGVvIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMjVweDtcclxuICB9XHJcblxyXG4uY29udGFpbmVyLXNjYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTU4LDE1OCwxNTgsMC4zMSk7XHJcbn1cclxuXHJcbi5jb250YWluZXItc2NhbiAudmlkZW8ge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnZpZGVvLXNjYW4ge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIyNXB4O1xyXG59XHJcblxyXG5cclxuLmxpbmVhLXNjYW4ge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDIzMCwxMTgsMC41KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbjogdXBkb3duIDNzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHVwZG93biB7XHJcbiAgICAwJSB7IGJvdHRvbTogMTVweDsgfVxyXG4gICAgNTAlIHsgYm90dG9tOiAyMzVweDt9XHJcbiAgICAxMDAlIHsgYm90dG9tOiAxNXB4OyB9XHJcbiB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LectorCodigoQrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lector-codigo-qr',
          templateUrl: './lector-codigo-qr.component.html',
          styleUrls: ['./lector-codigo-qr.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__["VerifyAuthClientService"]
        }, {
          type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inicio/lector-success/lector-success.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/inicio/lector-success/lector-success.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LectorSuccessComponent */

  /***/
  function srcAppPagesInicioLectorSuccessLectorSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LectorSuccessComponent", function () {
      return LectorSuccessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");
    /* harmony import */


    var src_app_shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/auth0.service */
    "./src/app/shared/services/auth0.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/verify-auth-client.service */
    "./src/app/shared/services/verify-auth-client.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");

    function LectorSuccessComponent_div_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r23.numMesa, "2."));
      }
    }

    function LectorSuccessComponent_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LectorSuccessComponent_div_0_div_14_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/images/", item_r27.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r27.descripcion);
      }
    }

    function LectorSuccessComponent_div_0_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Informaci\xF3n B\xE1sica");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LectorSuccessComponent_div_0_div_14_div_4_Template, 5, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.listReglas);
      }
    }

    function LectorSuccessComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LectorSuccessComponent_div_0_div_4_Template, 4, 4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LectorSuccessComponent_div_0_div_5_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LectorSuccessComponent_div_0_div_14_Template, 5, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LectorSuccessComponent_div_0_Template_div_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.listoEmpezar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Listo Empezar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.numMesa > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.usLog.isSoloLLevar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.dataSede.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.dataSede.eslogan);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.dataSede.pwa_msj_ini);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.listReglas);
      }
    }

    var LectorSuccessComponent = /*#__PURE__*/function () {
      function LectorSuccessComponent(crudService, verifyClientService, auth, router) {
        _classCallCheck(this, LectorSuccessComponent);

        this.crudService = crudService;
        this.verifyClientService = verifyClientService;
        this.auth = auth;
        this.router = router;
        this.numMesa = 0;
      }

      _createClass(LectorSuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDataIni(); // // console.log(this.auth.userProfile$);
        }
      }, {
        key: "loadDataIni",
        value: function loadDataIni() {
          var _this9 = this;

          // datos sede
          this.usLog = this.verifyClientService.getDataClient();
          var _data = {
            idsede: this.usLog.idsede
          };
          this.numMesa = this.usLog.numMesaLector;
          console.log(this.usLog);
          this.crudService.postFree(_data, 'ini', 'info-sede', false).subscribe(function (res) {
            _this9.dataSede = res.data[0]; // datos para registrar luego de loguear
            // si existe usuario en el local storage actualiza nada mas sede e idorg
            // let dataTpm = JSON.parse(window.localStorage.getItem('sys::tpm'));

            _this9.verifyClientService.getDataClient();

            _this9.verifyClientService.setIdOrg(_this9.dataSede.idorg);

            _this9.verifyClientService.setIdSede(_this9.dataSede.idsede); // if ( !dataTpm ) {
            //   dataTpm = {
            //     idorg: this.dataSede.idorg,
            //     idsede: this.dataSede.idsede
            //   };
            // } else {
            //   dataTpm.idorg = this.dataSede.idorg;
            //   dataTpm.idsede = this.dataSede.idsede;
            // }
            // window.localStorage.setItem('sys::tpm', JSON.stringify(dataTpm));
            // console.log(this.dataSede);
            // reglas del app


            _this9.crudService.getAll('ini', 'reglas-app', false, false, false).subscribe(function (resp) {
              _this9.listReglas = resp.data.map(function (x) {
                x.descripcion = x.descripcion.replace('?', _this9.dataSede.pwa_time_limit);
                return x;
              }); // console.log('reglas', resp);
            });
          });
        }
      }, {
        key: "listoEmpezar",
        value: function listoEmpezar() {
          if (this.auth.loggedIn || this.verifyClientService.getIsLoginByDNI()) {
            this.router.navigate(['/callback-auth']);
          } else {
            // this.auth.login();
            this.router.navigate(['/login-client']);
          }
        }
      }]);

      return LectorSuccessComponent;
    }();

    LectorSuccessComponent.ɵfac = function LectorSuccessComponent_Factory(t) {
      return new (t || LectorSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_4__["VerifyAuthClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_2__["Auth0Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LectorSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LectorSuccessComponent,
      selectors: [["app-lector-success"]],
      decls: 1,
      vars: 1,
      consts: [["class", "animated fadeIn text-center", 4, "ngIf"], [1, "animated", "fadeIn", "text-center"], [1, "content-body"], [1, "pt-3", "pb-2", "border-bottom", "fondo-beige"], [1, "text-center", "d-inline"], ["class", "content-num-mesa", 4, "ngIf"], [4, "ngIf"], [1, "info-establecimiento-content", "pt-3"], [1, "fs-20"], [1, "fw-100", "fs-12", "pb-2"], [1, "fw-100", "fs-13"], ["class", "pl-3 pr-3 mb-4 animated fadeInUp", 4, "ngIf"], ["matRipple", "", 1, "content-ready", 3, "click"], [1, "pr-2"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], [1, "content-num-mesa"], [1, "num-mesa"], ["src", "/assets/images/solo-llevar.png"], [1, "pl-3", "pr-3", "mb-4", "animated", "fadeInUp"], [1, "pb-2"], [1, "text-left"], ["class", "d-flex p-1 mb-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "p-1", "mb-3"], ["alt", "i1", 3, "src"]],
      template: function LectorSuccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LectorSuccessComponent_div_0_Template, 21, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSede);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: ["[_ngcontent-%COMP%]:global   .text-simple[_ngcontent-%COMP%] {\r\n     display: none;\r\n }\r\n\r\n.content-body[_ngcontent-%COMP%] {\r\n    min-height: calc(100vh - 74px);\r\n}\r\n\r\n.fondo-beige[_ngcontent-%COMP%] {\r\n    background: beige;    \r\n}\r\n\r\n.content-num-mesa[_ngcontent-%COMP%]  {\r\n    border: solid 1px #616161;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    display: table-cell;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    color: #424242;  \r\n}\r\n\r\n.num-mesa[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    margin: 0px;    \r\n    font-size: 42px;\r\n}\r\n\r\n.info-establecimiento-content[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n}\r\n\r\n.content-register[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    background: #303f9f;\r\n    color: white;\r\n}\r\n\r\n.content-ready[_ngcontent-%COMP%] {\r\n    padding: 25px;\r\n    background: #00695c;\r\n    color: white;\r\n}\r\n\r\n.xp-15[_ngcontent-%COMP%] {\r\n padding: 15px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0px;    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL2xlY3Rvci1zdWNjZXNzL2xlY3Rvci1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxhQUFhO0NBQ2pCOztBQUVEO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaW8vbGVjdG9yLXN1Y2Nlc3MvbGVjdG9yLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpnbG9iYWwgLnRleHQtc2ltcGxlIHtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG5cclxuLmNvbnRlbnQtYm9keSB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzRweCk7XHJcbn1cclxuXHJcbi5mb25kby1iZWlnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBiZWlnZTsgICAgXHJcbn1cclxuLmNvbnRlbnQtbnVtLW1lc2EgIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICM2MTYxNjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjogIzQyNDI0MjsgIFxyXG59XHJcblxyXG4ubnVtLW1lc2Ege1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMHB4OyAgICBcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxufVxyXG5cclxuLmluZm8tZXN0YWJsZWNpbWllbnRvLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmNvbnRlbnQtcmVnaXN0ZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMDNmOWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250ZW50LXJlYWR5IHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2OTVjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ueHAtMTUge1xyXG4gcGFkZGluZzogMTVweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDBweDsgICAgXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LectorSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lector-success',
          templateUrl: './lector-success.component.html',
          styleUrls: ['./lector-success.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"]
        }, {
          type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_4__["VerifyAuthClientService"]
        }, {
          type: src_app_shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_2__["Auth0Service"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inicio/login-cliente/login-cliente.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/inicio/login-cliente/login-cliente.component.ts ***!
    \***********************************************************************/

  /*! exports provided: LoginClienteComponent */

  /***/
  function srcAppPagesInicioLoginClienteLoginClienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginClienteComponent", function () {
      return LoginClienteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/verify-auth-client.service */
    "./src/app/shared/services/verify-auth-client.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");
    /* harmony import */


    var src_app_modelos_socket_client_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modelos/socket.client.model */
    "./src/app/modelos/socket.client.model.ts");
    /* harmony import */


    var src_app_shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/auth0.service */
    "./src/app/shared/services/auth0.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/fesm2015/progress-bar.js");

    function LoginClienteComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registrate para comenzar hacer tu pedido.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginClienteComponent_div_1_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.goFb();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Con Facebook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginClienteComponent_div_1_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.goGmail();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Con Gmail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginClienteComponent_div_1_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.viewLoginDni();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Con DNI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "selected": a0
      };
    };

    function LoginClienteComponent_div_2_div_7_ng_container_10_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginClienteComponent_div_2_div_7_ng_container_10_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var item_r41 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r42.verificarDNI(item_r41);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r41.selected));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r41.fecha);
      }
    }

    function LoginClienteComponent_div_2_div_7_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Para confirmar su identidad, indique la fecha en que nacio.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginClienteComponent_div_2_div_7_ng_container_10_div_6_Template, 3, 4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r39.dataCliente.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.listViewDate);
      }
    }

    function LoginClienteComponent_div_2_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 21, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function LoginClienteComponent_div_2_div_7_Template_input_keyup_enter_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.buscarDNI(_r38.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginClienteComponent_div_2_div_7_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r46.buscarDNI(_r38.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-progress-bar", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginClienteComponent_div_2_div_7_ng_container_10_Template, 7, 2, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r36.loadConsulta);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r36.msj_error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.isValidDNI);
      }
    }

    function LoginClienteComponent_div_2_ng_container_9_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Excelente usuario validado.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function LoginClienteComponent_div_2_ng_container_9_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Seleccione con cuidado, de lo contrario no podra registrase con este documento.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginClienteComponent_div_2_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginClienteComponent_div_2_ng_container_9_ng_container_1_Template, 3, 0, "ng-container", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginClienteComponent_div_2_ng_container_9_ng_template_2_Template, 2, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.isDateBirthdayValid && ctx_r37.isPaseOk)("ngIfElse", _r48);
      }
    }

    function LoginClienteComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginClienteComponent_div_2_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.viewLoginDni();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Escriba su DNI.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginClienteComponent_div_2_div_7_Template, 11, 3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginClienteComponent_div_2_ng_container_9_Template, 4, 2, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r31.isPaseOk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.isListDateSelect);
      }
    }

    var LoginClienteComponent = /*#__PURE__*/function () {
      function LoginClienteComponent(verifyClientService, router, auth, crudService) {
        _classCallCheck(this, LoginClienteComponent);

        this.verifyClientService = verifyClientService;
        this.router = router;
        this.auth = auth;
        this.crudService = crudService;
        this.loadConsulta = false;
        this.isViewLoginDNI = false;
        this.isValidDNI = false;
        this.isDateBirthdayValid = false;
        this.isListDateSelect = false;
        this.isPaseOk = false;
        this.dataClienteSend = new src_app_modelos_socket_client_model__WEBPACK_IMPORTED_MODULE_4__["SocketClientModel"]();
        this.msj_error = '';
        this.listViewDate = [];
        this.listDay = [];
        this.listMotnh = [];
        this.listYear = [];
        this.numDocumento = '';
      }

      _createClass(LoginClienteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataClienteSend = this.verifyClientService.getDataClient(); // console.log('data cliente', this.dataClienteSend);
        } // goFb() {
        //   this.router.navigate(['/login-client']);
        // }

      }, {
        key: "goFb",
        value: function goFb() {
          // tslint:disable-next-line:max-line-length
          this.auth.login('#', 'facebook'); // window.open('https://m.facebook.com/login.php?skip_api_login=1&api_key=433734160901286&kid_directed_site=0&app_id=433734160901286&signed_next=1
          // &next=https%3A%2F%2Fm.facebook.com%2Fdialog%2Foauth%3Fdisplay%3Dtouch%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fdev
          // -m48s1pe2.auth0.com%252Flogin%252Fcallback%26scope%3Dpublic_profile%252Cemail%252Cuser_age_range%252Cuser_birthday%26state%3DXNLlXc5bBETMHz3ZsKjdrJN5Qg-m7tAs%26client_id%3D433734160901286%26ret%3Dlogin
          // %26fbapp_pres%3D0%26logger_id%3D0da22dc3-2e21-4512-9630-6755b932362e&cancel_url=https%3A%2F
          // %2Fdev-m48s1pe2.auth0.com%2Flogin%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state
          // %3DXNLlXc5bBETMHz3ZsKjdrJN5Qg-m7tAs%23_%3D_&display=touch&locale=es_ES&pl_dbl=0&refsrc=https%3A%2F%2Fm.facebook.com%2Fdialog%2Foauth&_rdr', '_self');
        }
      }, {
        key: "goGmail",
        value: function goGmail() {
          // tslint:disable-next-line:max-line-length
          this.auth.login('#', 'google-oauth2'); // window.open('https://accounts.google.com/signin/oauth/identifier?client_id=503309244000-nuq1e4aq964rumajuuuh8jrr8hqj4ggj.apps
          // .googleusercontent.com&as=Gt8_kdS94yJ8-SSNJ_FvAw&destination=https
          // %3A%2F%2Fdev-m48s1pe2.auth0.com&approval_state=!ChRYak5ZSGpadUgxXzNqb3hhcGZUehIfczJlb1h3T2JGZU1VRUZvSEdUZHlJLTJOcDdqNy1SWQ%E2%88%99AJDr988AAAAAXh3sARBYEr4oYCKCWs9U5zUn4rvw6fZ7&oauthgdpr=1&
          // xsrfsig=ChkAeAh8T3hpGUbuZ88B9xbsKFXhx8WEy7mEEg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&
          // flowName=GeneralOAuthFlow', '_self');
        }
      }, {
        key: "viewLoginDni",
        value: function viewLoginDni() {
          this.isViewLoginDNI = !this.isViewLoginDNI;
        }
      }, {
        key: "buscarDNI",
        value: function buscarDNI(value) {
          var _this10 = this;

          if (value.length < 8 || this.numDocumento === value) {
            return;
          }

          this.isValidDNI = false;
          this.isListDateSelect = false;
          this.limpiarFrm();
          this.numDocumento = value;
          this.loadConsulta = true; // buscamos cliente en bd

          this.crudService.getConsultaRucDni('dni', this.numDocumento).subscribe(function (response) {
            if (!response.success) {
              _this10.loadConsulta = false;
              _this10.isValidDNI = false;
              _this10.msj_error = 'Numero de documento no valido.';
              return;
            }

            _this10.loadConsulta = false;
            _this10.isValidDNI = true;
            _this10.dataCliente = response.data; // console.log(response);

            _this10.getListDates();
          }, function (error) {
            _this10.loadConsulta = false;
            _this10.isValidDNI = false;
            _this10.msj_error = 'No se encontro, intentelo nuevamente.';
            alert(error.message); // console.log(error.message);
          });
        }
      }, {
        key: "limpiarFrm",
        value: function limpiarFrm() {
          this.listViewDate = [];
          this.listDay = [];
          this.listMotnh = [];
          this.listYear = [];
          this.isValidDNI = false;
          this.numDocumento = '';
          this.msj_error = '';
        }
      }, {
        key: "getListDates",
        value: function getListDates() {
          var listDate = this.dataCliente.date_of_birthday.split('/');
          this.listViewDate = [];
          this.listDay = [];
          this.listMotnh = [];
          this.listYear = [];
          this.addListDate(this.listDay, listDate[0], 'dd');
          this.addListDate(this.listMotnh, listDate[1], 'mm');
          this.addListDate(this.listYear, listDate[2], 'yy'); // console.log('listDay', this.listDay);
          // console.log('listMotnh', this.listMotnh);
          // console.log('listYear', this.listYear);
          // year

          var contador = 0;
          var _date = '';
          this.listViewDate.push({
            'fecha': this.dataCliente.date_of_birthday,
            selected: false
          });

          while (contador < 3) {
            _date = "".concat(this.listDay[this.getRandomArbitrary(0, 2)], "/").concat(this.listMotnh[this.getRandomArbitrary(0, 2)], "/").concat(this.listYear[this.getRandomArbitrary(0, 2)]);
            this.listViewDate.push({
              'fecha': _date,
              selected: false
            });
            contador++;
          }

          this.listViewDate.sort(function (a, b) {
            return 0.5 - Math.random();
          });
          this.listViewDate.sort(function (a, b) {
            return 0.5 - Math.random();
          }); // console.log('listViewDate', this.listViewDate);
        }
      }, {
        key: "addListDate",
        value: function addListDate(list, _num, tipo) {
          var num = parseInt(_num.toString(), 0);
          var numRamond = 0;
          list.push(this.ceroIzq(num));
          numRamond = this.getRandomArbitrary(1, 4);
          var numAdd = this.getRandomArbitrary(0, 20) < 10 ? num + numRamond : num - numRamond;
          numAdd = numAdd === num ? this.getRandomArbitrary(0, 20) < 10 ? num + numRamond : num - numRamond : numAdd;
          list.push(this.ceroIzq(this.verificarNum(numAdd, tipo)));
          numRamond = this.getRandomArbitrary(1, 4);
          var numAdd2 = this.getRandomArbitrary(0, 20) < 10 ? num + numRamond : num - numRamond;
          numAdd2 = numAdd === numAdd2 ? this.getRandomArbitrary(0, 20) < 10 ? num + numRamond : num - numRamond : numAdd2;
          list.push(this.ceroIzq(this.verificarNum(numAdd2, tipo)));
          list.sort(function (a, b) {
            return a + b;
          });
        }
      }, {
        key: "ceroIzq",
        value: function ceroIzq(num) {
          return num < 10 ? '0' + num.toString() : num.toString();
        }
      }, {
        key: "verificarNum",
        value: function verificarNum(num, tipo) {
          var rpt = num;

          switch (tipo) {
            case 'dd':
              rpt = num <= 0 || num > 31 ? this.getRandomArbitrary(1, 28) : num;
              break;

            case 'mm':
              rpt = num <= 0 || num > 12 ? this.getRandomArbitrary(1, 12) : num;
              break;
          }

          return rpt;
        }
      }, {
        key: "getRandomArbitrary",
        value: function getRandomArbitrary(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
        }
      }, {
        key: "verificarDNI",
        value: function verificarDNI(item) {
          var _this11 = this;

          this.listViewDate.map(function (x) {
            return x.selected = false;
          });
          item.selected = true;
          this.isListDateSelect = true;
          this.isDateBirthdayValid = item.fecha === this.dataCliente.date_of_birthday;
          this.isPaseOk = this.isDateBirthdayValid;

          if (this.isPaseOk) {
            this.verifyClientService.clientSocket.datalogin = this.dataCliente;
            this.verifyClientService.clientSocket.datalogin.sub = 'dni|' + this.dataCliente.number;
            this.verifyClientService.clientSocket.datalogin.name = this.dataCliente.names + ' ' + this.dataCliente.first_name + ' ' + this.dataCliente.last_name;
            this.verifyClientService.clientSocket.datalogin.given_name = this.dataCliente.names ? this.dataCliente.names.indexOf(' ') > 0 ? this.dataCliente.names.split(' ')[0] : this.dataCliente.names : this.dataCliente.names;
            this.verifyClientService.setDataClient();
            this.verifyClientService.setIsLoginByDNI(true);
            this.auth.loggedIn = true;
            setTimeout(function () {
              _this11.router.navigate(['/callback-auth']);
            }, 2000);
          } else {
            this.limpiarFrm();
          } // console.log(item);

        }
      }]);

      return LoginClienteComponent;
    }();

    LoginClienteComponent.ɵfac = function LoginClienteComponent_Factory(t) {
      return new (t || LoginClienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_1__["VerifyAuthClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_5__["Auth0Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]));
    };

    LoginClienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginClienteComponent,
      selectors: [["app-login-cliente"]],
      decls: 3,
      vars: 2,
      consts: [[1, "animated", "fadeIn"], ["class", "text-center", 4, "ngIf"], ["class", "animated fadeInUp", 4, "ngIf"], [1, "text-center"], [1, "p-3", "pt-5"], [1, "fs-18", "fw-600"], [1, "p-3"], ["matRipple", "", 1, "btn-social", "fb", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], [1, "pl-2"], ["matRipple", "", 1, "btn-social", "gmail", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-google"], ["matRipple", "", 1, "btn-social", "dni", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-id-card-o"], [1, "animated", "fadeInUp"], [1, "pr-5", "pt-5", "pl-5", "pb-2", 3, "click"], [1, "fa", "fa-arrow-left", "pr-2"], [1, "pr-5", "pt-2", "pl-5", "pb-0"], [4, "ngIf"], ["class", "animated pulse", 4, "ngIf"], [1, "w-100"], ["matInput", "", "placeholder", "DNI", "maxlength", "8", "type", "number", 3, "keyup.enter"], ["dni", ""], ["mat-flat-button", "", "color", "primary", "matSuffix", "", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], ["mode", "indeterminate", 2, "bottom", "20px", 3, "hidden"], [1, "fs-13", "text-danger"], [1, "fs-13", "fw-600"], [1, "fs-13", "text-info"], [1, "div-list-date", "text-center"], ["matRipple", "", "class", "item-list-date border-bottom", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "item-list-date", "border-bottom", 3, "ngClass", "click"], [1, "animated", "pulse"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "text-success", "fs-20"], [1, "text-danger", "fs-14"]],
      template: function LoginClienteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginClienteComponent_div_1_Template, 19, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginClienteComponent_div_2_Template, 10, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isViewLoginDNI);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViewLoginDNI);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      styles: [".div-list-date[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n\r\n.item-list-date[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;    \r\n}\r\n\r\n.item-list-date.selected[_ngcontent-%COMP%] {\r\n    background-attachment: lightyellow;\r\n}\r\n\r\n.btn-social[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    color: white;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.btn-social.fb[_ngcontent-%COMP%] {\r\n    background: dodgerblue;\r\n}\r\n\r\n.btn-social.gmail[_ngcontent-%COMP%] {\r\n    background: #d32f2f;\r\n}\r\n\r\n.btn-social.dni[_ngcontent-%COMP%] {\r\n    background: #5e35b1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL2xvZ2luLWNsaWVudGUvbG9naW4tY2xpZW50ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaW8vbG9naW4tY2xpZW50ZS9sb2dpbi1jbGllbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LWxpc3QtZGF0ZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaXRlbS1saXN0LWRhdGUge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgICAgXHJcbn1cclxuXHJcbi5pdGVtLWxpc3QtZGF0ZS5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGxpZ2h0eWVsbG93O1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbCB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbC5mYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbC5nbWFpbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDMyZjJmO1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbC5kbmkge1xyXG4gICAgYmFja2dyb3VuZDogIzVlMzViMTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginClienteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-cliente',
          templateUrl: './login-cliente.component.html',
          styleUrls: ['./login-cliente.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_1__["VerifyAuthClientService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_5__["Auth0Service"]
        }, {
          type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inicio/login-personal-autorizado/login-personal-autorizado.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/inicio/login-personal-autorizado/login-personal-autorizado.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: LoginPersonalAutorizadoComponent */

  /***/
  function srcAppPagesInicioLoginPersonalAutorizadoLoginPersonalAutorizadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPersonalAutorizadoComponent", function () {
      return LoginPersonalAutorizadoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modelos_usuario_autorizado_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modelos/usuario-autorizado.model */
    "./src/app/modelos/usuario-autorizado.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");

    var LoginPersonalAutorizadoComponent = /*#__PURE__*/function () {
      function LoginPersonalAutorizadoComponent(router, authService, infoToken, storageService) {
        _classCallCheck(this, LoginPersonalAutorizadoComponent);

        this.router = router;
        this.authService = authService;
        this.infoToken = infoToken;
        this.storageService = storageService;
        this.usuario = new src_app_modelos_usuario_autorizado_model__WEBPACK_IMPORTED_MODULE_2__["UsuarioAutorizadoModel"]();
        this.loading = false;
        this.msjErr = false;
      }

      _createClass(LoginPersonalAutorizadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usuario = new src_app_modelos_usuario_autorizado_model__WEBPACK_IMPORTED_MODULE_2__["UsuarioAutorizadoModel"]();
          this.checkUserLogin();
        }
      }, {
        key: "checkUserLogin",
        value: function checkUserLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var userLogin;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.storageService.getLoginUser();

                  case 2:
                    userLogin = _context2.sent;

                    if (userLogin) {
                      if (userLogin.recordar) {
                        this.usuario = userLogin;
                        this.logear(true);
                      }
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "logear",
        value: function logear() {
          var _this12 = this;

          var isLoginStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.loading = true;
          this.msjErr = false;
          this.usuario.op = 1; // console.log('this.usuario', this.usuario);

          this.authService.setLocalToken('');
          this.authService.getUserLogged(this.usuario).subscribe(function (res) {
            setTimeout(function () {
              console.log('res');

              if (res.success) {
                _this12.storageService.setLoginUser(_this12.usuario);

                var _t = res.token;

                _this12.authService.setTokenAuth(_t);

                _this12.authService.getInfoRepartidor(res.usuario).subscribe(function (response) {
                  _this12.authService.setLocalToken(response);

                  _this12.authService.setLoggedStatus(true);

                  _this12.authService.setLocalUsuario(_this12.usuario);

                  _this12.infoToken.converToJSON();

                  if (!isLoginStorage) {
                    _this12.router.navigate(['./main-inicio']);
                  } else {
                    _this12.router.navigate(['./main']);
                  }
                }); // this.loading = false;

              } else {
                _this12.loading = false;
                _this12.msjErr = true;
              }
            }, 2000);
          });
        }
      }]);

      return LoginPersonalAutorizadoComponent;
    }();

    LoginPersonalAutorizadoComponent.ɵfac = function LoginPersonalAutorizadoComponent_Factory(t) {
      return new (t || LoginPersonalAutorizadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]));
    };

    LoginPersonalAutorizadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginPersonalAutorizadoComponent,
      selectors: [["app-login-personal-autorizado"]],
      decls: 27,
      vars: 7,
      consts: [[1, "text-center", "animated", "fadeIn"], ["src", "assets/images/img-ini.png", "alt", "..", 2, "max-width", "300px"], [1, "text-center", "ml-5", "mr-5"], ["src", "assets/images/papaya_text-2.png", "width", "160px"], [1, "fs-16", "fw-100", "text-secondary"], [1, "content-login-us", 3, "ngSubmit"], ["frmpass", "ngForm"], [1, "row"], [1, "col-sm-6"], [1, "w-100"], ["matInput", "", "placeholder", "Usuario", "name", "nomusuario", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "name", "pass", "placeholder", "Clave", "required", "", 3, "ngModel", "ngModelChange"], ["name", "recordar", 3, "ngModel", "checked", "ngModelChange"], [1, "text-center"], ["mode", "indeterminate", 3, "hidden"], [1, "fs-14", "font-weight-bold", "text-danger", "animated", "flash", 3, "hidden"], ["mat-flat-button", "", "color", "primary", 3, "disabled"]],
      template: function LoginPersonalAutorizadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Repartidor Autorizado");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginPersonalAutorizadoComponent_Template_form_ngSubmit_7_listener() {
            return ctx.logear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPersonalAutorizadoComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.usuario.nomusuario = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPersonalAutorizadoComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.usuario.pass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-checkbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPersonalAutorizadoComponent_Template_mat_checkbox_ngModelChange_17_listener($event) {
            return ctx.usuario.recordar = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Recordar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-progress-bar", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Credenciales Incorrectas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Listo, Ingresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.usuario.nomusuario);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.usuario.pass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.usuario.recordar)("checked", ctx.usuario.recordar);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.msjErr);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r1.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
      styles: [".content-login-us[_ngcontent-%COMP%] {\r\n    background: #eeeeee;\r\n    border-radius: 5px;\r\n    padding: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL2xvZ2luLXBlcnNvbmFsLWF1dG9yaXphZG8vbG9naW4tcGVyc29uYWwtYXV0b3JpemFkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5pY2lvL2xvZ2luLXBlcnNvbmFsLWF1dG9yaXphZG8vbG9naW4tcGVyc29uYWwtYXV0b3JpemFkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtbG9naW4tdXMge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginPersonalAutorizadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login-personal-autorizado',
          templateUrl: './login-personal-autorizado.component.html',
          styleUrls: ['./login-personal-autorizado.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]
        }, {
          type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inicio/main/main.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/inicio/main/main.component.ts ***!
    \*****************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppPagesInicioMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 1,
      vars: 0,
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9tYWluL21haW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inicio/seleccionar-ubicacion-delivery/seleccionar-ubicacion-delivery.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/inicio/seleccionar-ubicacion-delivery/seleccionar-ubicacion-delivery.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: SeleccionarUbicacionDeliveryComponent */

  /***/
  function srcAppPagesInicioSeleccionarUbicacionDeliverySeleccionarUbicacionDeliveryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeleccionarUbicacionDeliveryComponent", function () {
      return SeleccionarUbicacionDeliveryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/verify-auth-client.service */
    "./src/app/shared/services/verify-auth-client.service.ts");
    /* harmony import */


    var _componentes_seleccionar_direccion_seleccionar_direccion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../componentes/seleccionar-direccion/seleccionar-direccion.component */
    "./src/app/componentes/seleccionar-direccion/seleccionar-direccion.component.ts");
    /* harmony import */


    var _componentes_agregar_direccion_agregar_direccion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../componentes/agregar-direccion/agregar-direccion.component */
    "./src/app/componentes/agregar-direccion/agregar-direccion.component.ts"); // import { CrudHttpService } from 'src/app/shared/services/crud-http.service';
    // import { InfoTockenService } from 'src/app/shared/services/info-token.service';


    var _c0 = function _c0() {
      return ["../"];
    };

    var SeleccionarUbicacionDeliveryComponent = /*#__PURE__*/function () {
      // private infoClienteLogueado;
      function SeleccionarUbicacionDeliveryComponent(router, verifyClientService) {
        _classCallCheck(this, SeleccionarUbicacionDeliveryComponent);

        this.router = router;
        this.verifyClientService = verifyClientService;
        this.isFormValid = false;
        this.loader = 0;
      }

      _createClass(SeleccionarUbicacionDeliveryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // infoMaps($event: any) {
        //   console.log($event);
        //   this.isFormValid = false;
        //   this.dataCliente = $event;
        //   if ( this.dataCliente.isvalid ) {
        //     this.isFormValid = true;
        //   }
        // }
        // saveDireccion() {
        //   this.loader = 1;
        //   this.crudService.postFree(this.dataCliente, 'cliente', 'get-direccion-cliente', false)
        //     .subscribe((res: any) => {
        //       setTimeout(() => {
        //         this.loader = 2;
        //         setTimeout(() => {
        //           this.goZonaEstablecimiento();
        //         }, 500);
        //       }, 1000);
        //       console.log(res);
        //     });
        // }

      }, {
        key: "setDireccion",
        value: function setDireccion($event) {
          // console.log($event);
          // guardar en infotoken
          this.verifyClientService.setDireccionDeliverySelected($event); // enviar a zona de establecimientos

          this.goZonaEstablecimiento();
        }
      }, {
        key: "goZonaEstablecimiento",
        value: function goZonaEstablecimiento() {
          this.router.navigate(['/zona-delivery']);
        }
      }]);

      return SeleccionarUbicacionDeliveryComponent;
    }();

    SeleccionarUbicacionDeliveryComponent.ɵfac = function SeleccionarUbicacionDeliveryComponent_Factory(t) {
      return new (t || SeleccionarUbicacionDeliveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__["VerifyAuthClientService"]));
    };

    SeleccionarUbicacionDeliveryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SeleccionarUbicacionDeliveryComponent,
      selectors: [["app-seleccionar-ubicacion-delivery"]],
      decls: 9,
      vars: 2,
      consts: [[1, "animated", "fadeIn"], [1, "header-app", "p-3"], [1, "fa", "fa-arrow-left", 3, "routerLink"], [1, "pl-2"], [3, "direccionSelected"], [3, "saveDireccionOk"]],
      template: function SeleccionarUbicacionDeliveryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Direccion de entrega");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-seleccionar-direccion", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("direccionSelected", function SeleccionarUbicacionDeliveryComponent_Template_app_seleccionar_direccion_direccionSelected_6_listener($event) {
            return ctx.setDireccion($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-agregar-direccion", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveDireccionOk", function SeleccionarUbicacionDeliveryComponent_Template_app_agregar_direccion_saveDireccionOk_8_listener($event) {
            return ctx.setDireccion($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _componentes_seleccionar_direccion_seleccionar_direccion_component__WEBPACK_IMPORTED_MODULE_3__["SeleccionarDireccionComponent"], _componentes_agregar_direccion_agregar_direccion_component__WEBPACK_IMPORTED_MODULE_4__["AgregarDireccionComponent"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL3NlbGVjY2lvbmFyLXViaWNhY2lvbi1kZWxpdmVyeS9zZWxlY2Npb25hci11YmljYWNpb24tZGVsaXZlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaW8vc2VsZWNjaW9uYXItdWJpY2FjaW9uLWRlbGl2ZXJ5L3NlbGVjY2lvbmFyLXViaWNhY2lvbi1kZWxpdmVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeleccionarUbicacionDeliveryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-seleccionar-ubicacion-delivery',
          templateUrl: './seleccionar-ubicacion-delivery.component.html',
          styleUrls: ['./seleccionar-ubicacion-delivery.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__["VerifyAuthClientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guards/codigo-qr.guard.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/guards/codigo-qr.guard.ts ***!
    \**************************************************/

  /*! exports provided: CodigoQrGuard */

  /***/
  function srcAppSharedGuardsCodigoQrGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodigoQrGuard", function () {
      return CodigoQrGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/verify-auth-client.service */
    "./src/app/shared/services/verify-auth-client.service.ts");

    var CodigoQrGuard = /*#__PURE__*/function () {
      function CodigoQrGuard(verifyClientService) {
        _classCallCheck(this, CodigoQrGuard);

        this.verifyClientService = verifyClientService;
      } // canActivate(
      //   next: ActivatedRouteSnapshot,
      //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //   return true;
      // }


      _createClass(CodigoQrGuard, [{
        key: "canActivate",
        value: function canActivate() {
          // console.log('canActivate', this.verifyClientService.getIsQrSuccess() || this.verifyClientService.getIsDelivery());
          return this.verifyClientService.getIsQrSuccess() || this.verifyClientService.getIsDelivery();
        }
      }]);

      return CodigoQrGuard;
    }();

    CodigoQrGuard.ɵfac = function CodigoQrGuard_Factory(t) {
      return new (t || CodigoQrGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_1__["VerifyAuthClientService"]));
    };

    CodigoQrGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CodigoQrGuard,
      factory: CodigoQrGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodigoQrGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_1__["VerifyAuthClientService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-inicio-inicio-module-es5.js.map