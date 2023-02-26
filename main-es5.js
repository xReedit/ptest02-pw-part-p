function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/guards/auth.guard */
    "./src/app/shared/guards/auth.guard.ts");

    var routes = [// { path: '', redirectTo: '', pathMatch: 'full' },
    // {
    // path: '',
    // component: LayoutMainComponent,
    // children: [
    {
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-inicio-inicio-module */
        [__webpack_require__.e("default~pages-inicio-inicio-module~pages-inicio-repartidor-inicio-repartidor-module~pages-repartidor~52912ff3"), __webpack_require__.e("default~pages-inicio-inicio-module~pages-repartidor-repartidor-module"), __webpack_require__.e("pages-inicio-inicio-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/inicio/inicio.module */
        "./src/app/pages/inicio/inicio.module.ts")).then(function (m) {
          return m.InicioModule;
        });
      },
      data: {
        'tituloModulo': 'Inicio'
      }
    }, {
      path: 'main-inicio',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-inicio-repartidor-inicio-repartidor-module */
        [__webpack_require__.e("default~pages-inicio-inicio-module~pages-inicio-repartidor-inicio-repartidor-module~pages-repartidor~52912ff3"), __webpack_require__.e("common"), __webpack_require__.e("pages-inicio-repartidor-inicio-repartidor-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/inicio-repartidor/inicio-repartidor.module */
        "./src/app/pages/inicio-repartidor/inicio-repartidor.module.ts")).then(function (m) {
          return m.InicioRepartidorModule;
        });
      },
      canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      data: {
        'tituloModulo': 'Inicio Repartidor'
      }
    }, {
      path: 'main',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-repartidor-repartidor-module */
        [__webpack_require__.e("default~pages-inicio-inicio-module~pages-inicio-repartidor-inicio-repartidor-module~pages-repartidor~52912ff3"), __webpack_require__.e("default~pages-inicio-inicio-module~pages-repartidor-repartidor-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-repartidor-repartidor-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/repartidor/repartidor.module */
        "./src/app/pages/repartidor/repartidor.module.ts")).then(function (m) {
          return m.RepartidorModule;
        });
      },
      canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      data: {
        'tituloModulo': 'Repartidor'
      }
    } // ,
    // {
    //   path: 'lanzar-encuesta',
    //   loadChildren: () => import('./pages/encuesta/encuesta.module').then(m => m.EncuestaModule),
    //   canActivate: [AuthGuard],
    //   data: { 'tituloModulo': 'Encuesta' }
    // },
    // {
    //   path: 'pagar-cuenta',
    //   loadChildren: () => import('./pages/pagar-cuenta/pagar-cuenta.module').then(m => m.PagarCuentaModule),
    //   canActivate: [AuthGuard],
    //   data: { 'tituloModulo': 'Cuenta' }
    // },
    // {
    //   path: 'cliente-profile',
    //   loadChildren: () => import('./pages/cliente-profile/cliente-profile.module').then(m => m.ClienteProfileModule),
    //   canActivate: [ClienteProfileGuard],
    //   data: { 'tituloModulo': 'Cliente Profile' }
    // },
    // {
    //   path: 'zona-delivery',
    //   loadChildren: () => import('./pages/zona-establecimientos/zona-establecimientos.module').then(m => m.ZonaEstablecimientosModule),
    //   canActivate: [ClienteProfileGuard],
    //   data: { 'tituloModulo': 'Cliente Zona Delivery' }
    // }
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'enabled',
        // anchorScrolling: 'enabled',
        paramsInheritanceStrategy: 'always'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true,
            scrollPositionRestoration: 'enabled',
            // anchorScrolling: 'enabled',
            paramsInheritanceStrategy: 'always'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/services/auth0.service */
    "./src/app/shared/services/auth0.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = // title = 'pwa-app-repartidor';
    function AppComponent(auth) {
      _classCallCheck(this, AppComponent);

      this.auth = auth;
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_1__["Auth0Service"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_1__["Auth0Service"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_services_error_global_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/services/error.global.handler */
    "./src/app/shared/services/error.global.handler.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
        useClass: _shared_services_error_global_handler__WEBPACK_IMPORTED_MODULE_9__["GlobalErrorHandler"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], // ReactiveFormsModule,
      _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], // ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], // ReactiveFormsModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
          })],
          providers: [{
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
            useClass: _shared_services_error_global_handler__WEBPACK_IMPORTED_MODULE_9__["GlobalErrorHandler"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");
    /* harmony import */


    var _layout_main_layout_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout-main/layout-main.component */
    "./src/app/core/layout-main/layout-main.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/core/material/material.module.ts");
    /* harmony import */


    var _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./progress-time-limit/progress-time-limit.component */
    "./src/app/core/progress-time-limit/progress-time-limit.component.ts");
    /* harmony import */


    var _shared_services_http_config_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/services/http-config-interceptor.service */
    "./src/app/shared/services/http-config-interceptor.service.ts");
    /* harmony import */


    var _tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tool-bar-repartidor/tool-bar-repartidor.component */
    "./src/app/core/tool-bar-repartidor/tool-bar-repartidor.component.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      providers: [_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _shared_services_http_config_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["HttpConfigInterceptorService"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_layout_main_layout_main_component__WEBPACK_IMPORTED_MODULE_4__["LayoutMainComponent"], // ToolBarComponent,
        _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_7__["ProgressTimeLimitComponent"], _tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_9__["ToolBarRepartidorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
        exports: [_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], // ToolBarComponent,
        _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_7__["ProgressTimeLimitComponent"], _tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_9__["ToolBarRepartidorComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_layout_main_layout_main_component__WEBPACK_IMPORTED_MODULE_4__["LayoutMainComponent"], // ToolBarComponent,
          _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_7__["ProgressTimeLimitComponent"], _tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_9__["ToolBarRepartidorComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
          exports: [_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], // ToolBarComponent,
          _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_7__["ProgressTimeLimitComponent"], _tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_9__["ToolBarRepartidorComponent"]],
          providers: [_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _shared_services_http_config_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["HttpConfigInterceptorService"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/layout-main/layout-main.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/layout-main/layout-main.component.ts ***!
    \***********************************************************/

  /*! exports provided: LayoutMainComponent */

  /***/
  function srcAppCoreLayoutMainLayoutMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutMainComponent", function () {
      return LayoutMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LayoutMainComponent = /*#__PURE__*/function () {
      function LayoutMainComponent() {
        _classCallCheck(this, LayoutMainComponent);
      }

      _createClass(LayoutMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutMainComponent;
    }();

    LayoutMainComponent.ɵfac = function LayoutMainComponent_Factory(t) {
      return new (t || LayoutMainComponent)();
    };

    LayoutMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutMainComponent,
      selectors: [["app-layout-main"]],
      decls: 1,
      vars: 0,
      template: function LayoutMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0LW1haW4vbGF5b3V0LW1haW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout-main',
          templateUrl: './layout-main.component.html',
          styleUrls: ['./layout-main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/material/material.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/material/material.module.ts ***!
    \**************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppCoreMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
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


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/fesm2015/table.js"); // material
    // import { MatTooltipModule } from '@angular/material/tooltip';


    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"] // MatTooltipModule
      ], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"] // MatTooltipModule
      ]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"] // MatTooltipModule
        ],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"] // MatTooltipModule
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"] // MatTooltipModule
          ],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"] // MatTooltipModule
          ]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/progress-time-limit/progress-time-limit.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/core/progress-time-limit/progress-time-limit.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProgressTimeLimitComponent */

  /***/
  function srcAppCoreProgressTimeLimitProgressTimeLimitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressTimeLimitComponent", function () {
      return ProgressTimeLimitComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/timer-limit.service */
    "./src/app/shared/services/timer-limit.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/fesm2015/progress-bar.js");

    function ProgressTimeLimitComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r183.timerLimitService.countdown$));
      }
    }

    var ProgressTimeLimitComponent = /*#__PURE__*/function () {
      function ProgressTimeLimitComponent(timerLimitService) {
        _classCallCheck(this, ProgressTimeLimitComponent);

        this.timerLimitService = timerLimitService;
      }

      _createClass(ProgressTimeLimitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressTimeLimitComponent;
    }();

    ProgressTimeLimitComponent.ɵfac = function ProgressTimeLimitComponent_Factory(t) {
      return new (t || ProgressTimeLimitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_1__["TimerLimitService"]));
    };

    ProgressTimeLimitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressTimeLimitComponent,
      selectors: [["app-progress-time-limit"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["mode", "determinate", "color", "accent", 1, "animated", "fadeInDown", 3, "value"]],
      template: function ProgressTimeLimitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressTimeLimitComponent_ng_container_0_Template, 3, 3, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.timerLimitService.isPorgressVisible$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZ3Jlc3MtdGltZS1saW1pdC9wcm9ncmVzcy10aW1lLWxpbWl0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressTimeLimitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-progress-time-limit',
          templateUrl: './progress-time-limit.component.html',
          styleUrls: ['./progress-time-limit.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_1__["TimerLimitService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/tool-bar-repartidor/tool-bar-repartidor.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/core/tool-bar-repartidor/tool-bar-repartidor.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ToolBarRepartidorComponent */

  /***/
  function srcAppCoreToolBarRepartidorToolBarRepartidorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolBarRepartidorComponent", function () {
      return ToolBarRepartidorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/repartidor.service */
    "./src/app/shared/services/repartidor.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/fesm2015/slide-toggle.js"); // import { MatDialogConfig, MatDialog } from '@angular/material/dialog';


    function ToolBarRepartidorComponent_mat_slide_toggle_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-slide-toggle", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ToolBarRepartidorComponent_mat_slide_toggle_9_Template_mat_slide_toggle_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r186);

          var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r185.repartidorOnLine($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r184.isTogleActive);
      }
    } // import { SocketService } from 'src/app/shared/services/socket.service';


    var ToolBarRepartidorComponent = /*#__PURE__*/function () {
      function ToolBarRepartidorComponent(infoTokenService, repartidorService // private socketService: SocketService
      ) {
        _classCallCheck(this, ToolBarRepartidorComponent);

        this.infoTokenService = infoTokenService;
        this.repartidorService = repartidorService;
        this.changeTogle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.openMenuLateral = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.isTogleActive = false;
        this.isRepartidorPropio = false;
        this.estadoOnline = 'En linea';
        this.nomRepatidor = '';
      }

      _createClass(ToolBarRepartidorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isTogleActive = this.infoTokenService.infoUsToken.isOnline;
          this.isRepartidorPropio = this.infoTokenService.infoUsToken.usuario.idsede_suscrito;
          this.estadoOnline = this.isRepartidorPropio ? 'En linea' : this.isTogleActive ? 'En linea' : 'Fuera de linea'; // console.log(this.infoTokenService.infoUsToken.usuario);

          this.nomRepatidor = this.infoTokenService.infoUsToken.usuario.nombre + ' ' + this.infoTokenService.infoUsToken.usuario.apellido; // this.changeTogle.emit(this.isTogleActive);
          // if ( this.isTogleActive ) {
          //   this.socketService.connect();
          // }

          if (this.isRepartidorPropio) {
            this.infoTokenService.setisOnline(this.isTogleActive);
          }
        }
      }, {
        key: "repartidorOnLine",
        value: function repartidorOnLine($event) {
          this.isTogleActive = $event.checked; // this.infoTokenService.setisOnline(this.isTogleActive);
          // this.changeTogle.emit(this.isTogleActive);
          // this.estadoOnline = 'En linea';

          if (!this.isTogleActive) {
            this.estadoOnline = 'Fuera de linea';
            this.repartidorService.guardarEfectivo(0, 0);
          } else {
            // this.isTogleActive = $event.checked;
            this.infoTokenService.setisOnline(this.isTogleActive);
            this.changeTogle.emit(this.isTogleActive);
            this.estadoOnline = 'En linea';
          }
        }
      }, {
        key: "abrirMenuLateral",
        value: function abrirMenuLateral() {
          // console.log('this.openMenuLateral', true);
          this.openMenuLateral.emit(true);
        }
      }]);

      return ToolBarRepartidorComponent;
    }();

    ToolBarRepartidorComponent.ɵfac = function ToolBarRepartidorComponent_Factory(t) {
      return new (t || ToolBarRepartidorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_1__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_2__["RepartidorService"]));
    };

    ToolBarRepartidorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolBarRepartidorComponent,
      selectors: [["app-tool-bar-repartidor"]],
      outputs: {
        changeTogle: "changeTogle",
        openMenuLateral: "openMenuLateral"
      },
      decls: 10,
      vars: 5,
      consts: [[1, "header-app", "p-3", "d-flex", "justify-content-between"], [1, "fa", "fa-bars", "pr-2", 3, "click"], [1, "fs-14"], [1, "d-flex", "align-items-center"], [1, "fs-12", "pr-2"], [3, "checked", "change", 4, "ngIf"], [3, "checked", "change"]],
      template: function ToolBarRepartidorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolBarRepartidorComponent_Template_i_click_2_listener() {
            return ctx.abrirMenuLateral();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ToolBarRepartidorComponent_mat_slide_toggle_9_Template, 1, 1, "mat-slide-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.nomRepatidor));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estadoOnline);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRepartidorPropio);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdG9vbC1iYXItcmVwYXJ0aWRvci90b29sLWJhci1yZXBhcnRpZG9yLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolBarRepartidorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tool-bar-repartidor',
          templateUrl: './tool-bar-repartidor.component.html',
          styleUrls: ['./tool-bar-repartidor.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_1__["InfoTockenService"]
        }, {
          type: src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_2__["RepartidorService"]
        }];
      }, {
        changeTogle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        openMenuLateral: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modelos/estado.pedido.model.ts":
  /*!************************************************!*\
    !*** ./src/app/modelos/estado.pedido.model.ts ***!
    \************************************************/

  /*! exports provided: EstadoPedidoModel */

  /***/
  function srcAppModelosEstadoPedidoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstadoPedidoModel", function () {
      return EstadoPedidoModel;
    });

    var EstadoPedidoModel = function EstadoPedidoModel() {
      _classCallCheck(this, EstadoPedidoModel);
    };
    /***/

  },

  /***/
  "./src/app/modelos/geoposition.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/modelos/geoposition.model.ts ***!
    \**********************************************/

  /*! exports provided: GeoPositionModel */

  /***/
  function srcAppModelosGeopositionModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeoPositionModel", function () {
      return GeoPositionModel;
    });

    var GeoPositionModel = function GeoPositionModel() {
      _classCallCheck(this, GeoPositionModel);
    };
    /***/

  },

  /***/
  "./src/app/modelos/item.model.ts":
  /*!***************************************!*\
    !*** ./src/app/modelos/item.model.ts ***!
    \***************************************/

  /*! exports provided: ItemModel */

  /***/
  function srcAppModelosItemModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemModel", function () {
      return ItemModel;
    });

    var ItemModel = function ItemModel() {
      _classCallCheck(this, ItemModel);

      this.precio_total = 0; // preciounitario * cantidad

      this.cantidad_seleccionada_x_tpc = 0; // cantidad seleccionada por tipo cosnumo

      this.cantidad_descontado = 0; // cantidad que se decuenta por reglas de carta

      this.itemtiposconsumo = []; // para la vista -> listItemsPedido

      this.subitems_selected = []; // subitems seleccionados

      this.subitems_view = []; // subitems vista y guardar pedido detalle
    };
    /***/

  },

  /***/
  "./src/app/modelos/item.tipoconsumo.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/modelos/item.tipoconsumo.model.ts ***!
    \***************************************************/

  /*! exports provided: ItemTipoConsumoModel */

  /***/
  function srcAppModelosItemTipoconsumoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemTipoConsumoModel", function () {
      return ItemTipoConsumoModel;
    });

    var ItemTipoConsumoModel = function ItemTipoConsumoModel() {
      _classCallCheck(this, ItemTipoConsumoModel);
    };
    /***/

  },

  /***/
  "./src/app/modelos/metodo.pago.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/modelos/metodo.pago.model.ts ***!
    \**********************************************/

  /*! exports provided: MetodoPagoModel */

  /***/
  function srcAppModelosMetodoPagoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetodoPagoModel", function () {
      return MetodoPagoModel;
    });

    var MetodoPagoModel = function MetodoPagoModel() {
      _classCallCheck(this, MetodoPagoModel);
    };
    /***/

  },

  /***/
  "./src/app/modelos/pedido.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/modelos/pedido.model.ts ***!
    \*****************************************/

  /*! exports provided: PedidoModel */

  /***/
  function srcAppModelosPedidoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoModel", function () {
      return PedidoModel;
    });

    var PedidoModel = function PedidoModel() {
      _classCallCheck(this, PedidoModel);

      this.tipoconsumo = [];
    };
    /***/

  },

  /***/
  "./src/app/modelos/pedido.repartidor.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/modelos/pedido.repartidor.model.ts ***!
    \****************************************************/

  /*! exports provided: PedidoRepartidorModel */

  /***/
  function srcAppModelosPedidoRepartidorModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoRepartidorModel", function () {
      return PedidoRepartidorModel;
    });

    var PedidoRepartidorModel = function PedidoRepartidorModel() {
      _classCallCheck(this, PedidoRepartidorModel);
    };
    /***/

  },

  /***/
  "./src/app/modelos/seccion.model.ts":
  /*!******************************************!*\
    !*** ./src/app/modelos/seccion.model.ts ***!
    \******************************************/

  /*! exports provided: SeccionModel */

  /***/
  function srcAppModelosSeccionModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeccionModel", function () {
      return SeccionModel;
    });

    var SeccionModel = function SeccionModel() {
      _classCallCheck(this, SeccionModel);

      this.items = [];
    };
    /***/

  },

  /***/
  "./src/app/modelos/time.line.pedido.ts":
  /*!*********************************************!*\
    !*** ./src/app/modelos/time.line.pedido.ts ***!
    \*********************************************/

  /*! exports provided: TimeLinePedido */

  /***/
  function srcAppModelosTimeLinePedidoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeLinePedido", function () {
      return TimeLinePedido;
    });

    var TimeLinePedido = function TimeLinePedido() {
      _classCallCheck(this, TimeLinePedido);
    };
    /***/

  },

  /***/
  "./src/app/modelos/tipoconsumo.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/modelos/tipoconsumo.model.ts ***!
    \**********************************************/

  /*! exports provided: TipoConsumoModel */

  /***/
  function srcAppModelosTipoconsumoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoConsumoModel", function () {
      return TipoConsumoModel;
    });

    var TipoConsumoModel = function TipoConsumoModel() {
      _classCallCheck(this, TipoConsumoModel);

      this.secciones = [];
    };
    /***/

  },

  /***/
  "./src/app/modelos/usuario.token.model.ts":
  /*!************************************************!*\
    !*** ./src/app/modelos/usuario.token.model.ts ***!
    \************************************************/

  /*! exports provided: UsuarioTokenModel */

  /***/
  function srcAppModelosUsuarioTokenModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioTokenModel", function () {
      return UsuarioTokenModel;
    });

    var UsuarioTokenModel = function UsuarioTokenModel() {
      _classCallCheck(this, UsuarioTokenModel);
    };
    /***/

  },

  /***/
  "./src/app/shared/config/config.const.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/config/config.const.ts ***!
    \***********************************************/

  /*! exports provided: IS_NATIVE, URL_SERVER, URL_SERVER_SOCKET, URL_IMG_CARTA, VAPID_PUBLIC, URL_CONSULTA_RUC_DNI, TOKEN_CONSULTA, TOKEN_SMS */

  /***/
  function srcAppSharedConfigConfigConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IS_NATIVE", function () {
      return IS_NATIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_SERVER", function () {
      return URL_SERVER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_SERVER_SOCKET", function () {
      return URL_SERVER_SOCKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_IMG_CARTA", function () {
      return URL_IMG_CARTA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VAPID_PUBLIC", function () {
      return VAPID_PUBLIC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_CONSULTA_RUC_DNI", function () {
      return URL_CONSULTA_RUC_DNI;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOKEN_CONSULTA", function () {
      return TOKEN_CONSULTA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOKEN_SMS", function () {
      return TOKEN_SMS;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");

    var IS_NATIVE = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Capacitor"].getPlatform() !== 'web'; // // pruebas
    // export const URL_SERVER = 'http://192.168.1.39:5819/v3/'; // desarrollo
    // export const URL_SERVER_SOCKET = 'http://192.168.1.39:5819'; // desarrollo
    // export const URL_IMG_CARTA = 'http://192.168.1.65/restobar/file/';
    // export const VAPID_PUBLIC = 'BC7ietauZE99Hx9HkPyuGVr8jaYETyEJgH-gLaYIsbORYobppt9dX49_K_wubDqphu1afi7XrM6x1zAp4kJh_wU';
    // export const URL_CONSULTA_RUC_DNI = 'http://apifacturalo_a.test:8080/api/services/'; // consulta dni o ruc
    // produccion

    var URL_SERVER = 'https://app.restobar.papaya.com.pe/api.pwa/v3'; // produccion

    var URL_SERVER_SOCKET = 'https://app.restobar.papaya.com.pe/'; // produccion

    var URL_IMG_CARTA = 'https://restobar.papaya.com.pe/file/';
    var VAPID_PUBLIC = 'BOiwO8PftVFo8MrQfp3oAv4KbVtFdZAQojGKgzyxMCPgiNhg8PySbOSlkxDqd3iKA4J1GhzwFiCIGKmXRiKZM_0'; // export const VAPID_PUBLIC = 'BNMTnTvmBqg66i4-5I8SKSqb3VK1lEc-bmjB3bAWnIQ1RiZRwB1PpNIGzeM8Y75NeUYWXhlzjyVrEppOJuyk-1Y';
    // export const VAPID_PRIVATE = 'pBhfgP_TXkhMFVvwCD08GEROyvdpUe7daBgMXeySWFw';

    var URL_CONSULTA_RUC_DNI = 'https://apifac.papaya.com.pe/api/services/'; // consulta dni o ruc

    var TOKEN_CONSULTA = 'tLKbDncvyKIPcgdVAGqt7rmy7W9mU9cnbawpZdc7JJv7l6h9cU'; // token de prueba

    var TOKEN_SMS = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGFwYXlhLXNtcyIsImlhdCI6MTAwMDIwMDAzMDAwfQ.bKnTHEEGW_SustFir-40ZAYcHtfIo7Gyjq7c2onsAj0'; // token de prueba
    // export const URL_SERVER_SOCKET = '/'; // produccion

    /***/
  },

  /***/
  "./src/app/shared/guards/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/guards/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts"); // import { Observable } from 'rxjs';
    // import { VerifyAuthClientService } from '../services/verify-auth-client.service';
    // import { InfoTockenService } from '../services/info-token.service';
    // import { InfoTockenService } from '../services/info-token.service';


    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
      } // canActivate(
      //   next: ActivatedRouteSnapshot,
      //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //   return true;
      // }


      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var us = this.authService.getLoggedStatus(); // const infoToken = this.infoTokenService.getInfoUs();

          var res = us; // console.log('canActivate', us);
          // if ( us )

          return res;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _crud_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");
    /* harmony import */


    var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/Observable */
    "./node_modules/rxjs/internal/Observable.js");
    /* harmony import */


    var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);

    var AuthService = /*#__PURE__*/function () {
      function AuthService(crudService) {
        _classCallCheck(this, AuthService);

        this.crudService = crudService;
        this.isLoggedStatus = false;
      }

      _createClass(AuthService, [{
        key: "getInfoRepartidor",
        value: function getInfoRepartidor(_usuario) {
          var _this = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.crudService.postFree(_usuario, 'repartidor', 'get-info', true).subscribe(function (res) {
              var usSimulaToken = {
                'usuario': res.data[0]
              };
              var response = 'eyCJ9.' + btoa(JSON.stringify(usSimulaToken));
              observer.next(response);
            });
          });
        }
      }, {
        key: "setLoggedStatus",
        value: function setLoggedStatus(value) {
          this.isLoggedStatus = value;
        } // verfica la existencia del token

      }, {
        key: "getLoggedStatus",
        value: function getLoggedStatus() {
          var token = localStorage.getItem('::token');
          var rpt = !!token ? true : false;
          this.isLoggedStatus = rpt;
          return rpt;
        }
      }, {
        key: "getUserLogged",
        value: function getUserLogged(usuario) {
          return this.crudService.loginUsuarioAutorizado(usuario);
        }
      }, {
        key: "setLocalToken",
        value: function setLocalToken(token) {
          localStorage.setItem('::token', token); // esto se modifica
          // localStorage.setItem('::token-auth', token); // este se mantiene
          // guardo tambien la hora que esta iniciando session

          var ms_tieme_init_session = new Date().getTime();
          localStorage.setItem('sys::numtis', ms_tieme_init_session.toString());
        }
      }, {
        key: "setTokenAuth",
        value: function setTokenAuth(token) {
          localStorage.setItem('::token-auth', token); // este se mantiene
        }
      }, {
        key: "getLocalToken",
        value: function getLocalToken() {
          return localStorage.getItem('::token');
        }
      }, {
        key: "setLocalUsuario",
        value: function setLocalUsuario(usuario) {
          localStorage.setItem('::us', JSON.stringify(usuario));
        }
      }, {
        key: "verifyToken",
        value: function verifyToken() {
          return this.crudService.verificarToken();
        }
      }, {
        key: "loggedOutUser",
        value: function loggedOutUser() {
          localStorage.removeItem('::token');
          localStorage.removeItem('::us'); // localStorage.clear();

          this.setLoggedStatus(false);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/auth0.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/auth0.service.ts ***!
    \**************************************************/

  /*! exports provided: Auth0Service */

  /***/
  function srcAppSharedServicesAuth0ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Auth0Service", function () {
      return Auth0Service;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @auth0/auth0-spa-js */
    "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
    /* harmony import */


    var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var Auth0Service = /*#__PURE__*/function () {
      function Auth0Service(router) {
        var _this2 = this;

        _classCallCheck(this, Auth0Service);

        this.router = router; // Create an observable of Auth0 instance of client

        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1___default()({
          domain: 'dev-m48s1pe2.auth0.com',
          client_id: 'kSs64dcx34Fo7HpDLYkE3gQH0v2MtcdR',
          redirect_uri: "".concat(window.location.origin, "/#/callback-auth")
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        })); // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable

        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (client) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(client.isAuthenticated());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
          return _this2.loggedIn = res;
        }));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (client) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(client.handleRedirectCallback());
        })); // Create subject and public observable of user profile data

        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable(); // Create a local property for login status

        this.loggedIn = null; // On initial load, check authentication state with authorization server
        // Set up local auth streams if user is already authenticated

        this.localAuthSetup(); // Handle redirect from Auth0 login

        this.handleAuthCallback();
      } // When calling, options can be passed if desired
      // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser


      _createClass(Auth0Service, [{
        key: "getUser$",
        value: function getUser$(options) {
          var _this3 = this;

          return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (client) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(client.getUser(options));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            return _this3.userProfileSubject$.next(user);
          }));
        }
      }, {
        key: "localAuthSetup",
        value: function localAuthSetup() {
          var _this4 = this;

          // This should only be called on app initialization
          // Set up local authentication streams
          var checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (loggedIn) {
            if (loggedIn) {
              // If authenticated, get user and set in app
              // NOTE: you could pass options here if needed
              return _this4.getUser$();
            } // If not authenticated, return stream that emits 'false'


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(loggedIn);
          }));
          checkAuth$.subscribe();
        }
      }, {
        key: "login",
        value: function login() {
          var redirectPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
          var proveedor = arguments.length > 1 ? arguments[1] : undefined;
          // A desired redirect path can be passed to login method
          // (e.g., from a route guard)
          // Ensure Auth0 client instance exists
          this.auth0Client$.subscribe(function (client) {
            // Call method to log in
            client.loginWithRedirect({
              connection: proveedor,
              redirect_uri: "".concat(window.location.origin, "/#/callback-auth"),
              appState: {
                target: redirectPath
              }
            });
          });
        }
      }, {
        key: "handleAuthCallback",
        value: function handleAuthCallback() {
          var _this5 = this;

          // Call when app reloads after user logs in with Auth0
          var params = window.location.search;

          if (params.includes('code=') && params.includes('state=')) {
            var targetRoute; // Path to redirect to after login processsed

            var authComplete$ = this.handleRedirectCallback$.pipe( // Have client, now call method to handle auth callback redirect
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (cbRes) {
              // Get and set target redirect route from callback results
              targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function () {
              // Redirect callback complete; get user and login status
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([_this5.getUser$(), _this5.isAuthenticated$]);
            })); // Subscribe to authentication completion observable
            // Response will be an array of user and login status

            authComplete$.subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  user = _ref2[0],
                  loggedIn = _ref2[1];

              // Redirect to target route after callback processing
              _this5.router.navigate([targetRoute]);
            });
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          // Ensure Auth0 client instance exists
          this.auth0Client$.subscribe(function (client) {
            // Call method to log out
            client.logout({
              client_id: 'kSs64dcx34Fo7HpDLYkE3gQH0v2MtcdR',
              returnTo: "".concat(window.location.origin)
            });
          });
        }
      }]);

      return Auth0Service;
    }();

    Auth0Service.ɵfac = function Auth0Service_Factory(t) {
      return new (t || Auth0Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    Auth0Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Auth0Service,
      factory: Auth0Service.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Auth0Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/calc-distancia.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/calc-distancia.service.ts ***!
    \***********************************************************/

  /*! exports provided: CalcDistanciaService */

  /***/
  function srcAppSharedServicesCalcDistanciaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalcDistanciaService", function () {
      return CalcDistanciaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var geolocation_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! geolocation-utils */
    "./node_modules/geolocation-utils/lib/index.js");
    /* harmony import */


    var geolocation_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(geolocation_utils__WEBPACK_IMPORTED_MODULE_1__);

    var CalcDistanciaService = /*#__PURE__*/function () {
      function CalcDistanciaService() {
        _classCallCheck(this, CalcDistanciaService);

        this.directionsService = new google.maps.DirectionsService(); // private directionsDisplay = new google.maps.DirectionsRenderer();

        this.origin = {};
        this.destination = {};
      }

      _createClass(CalcDistanciaService, [{
        key: "calculateRoute",
        value: function calculateRoute(dirCliente, dirEstablecimiento) {
          var c_servicio = dirEstablecimiento.c_minimo;
          var c_km = dirEstablecimiento.c_km; // costo x km adicional
          // cordenadas

          this.origin = {
            lat: dirCliente.latitude,
            lng: dirCliente.longitude
          };
          this.destination = {
            lat: dirEstablecimiento.latitude,
            lng: dirEstablecimiento.longitude
          };
          var request = {
            origin: this.origin,
            destination: this.destination,
            travelMode: google.maps.TravelMode.DRIVING
          };
          var km = 0;
          this.directionsService.route(request, function (result, status) {
            if (status === 'OK') {
              // this.directionsRenderer.setDirections(result);
              km = result.routes[0].legs[0].distance.value;
              km = parseInt((km / 1000).toFixed(), 0);

              if (km > 1) {
                c_servicio = (km - 1) * c_km + c_servicio;
                dirEstablecimiento.c_servicio = c_servicio; // return c_servicio;
              } // console.log('km calc', km);
              // console.log(result.routes[0].legs[0]);
              // console.log('c_servicio', c_servicio);
              // console.log('dirEstablecimiento', dirEstablecimiento);
              // return c_servicio;
              // callback(c_servicio);

            }
          });
          setTimeout(function () {
            dirEstablecimiento.c_servicio = c_servicio;
            return c_servicio;
          }, 500);
          dirEstablecimiento.c_servicio = c_servicio;
          return c_servicio;
        } // retorna true si esta cerca

      }, {
        key: "calcDistancia",
        value: function calcDistancia(coordOrigen, coordDetino) {
          var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
          coordDetino.latitude = typeof coordDetino.latitude === 'string' ? parseFloat(coordDetino.latitude) : coordDetino.latitude;
          coordDetino.longitude = typeof coordDetino.longitude === 'string' ? parseFloat(coordDetino.longitude) : coordDetino.longitude;
          var center = {
            lat: coordDetino.latitude,
            lon: coordDetino.longitude
          }; // const radius = 75; // meters

          return Object(geolocation_utils__WEBPACK_IMPORTED_MODULE_1__["insideCircle"])({
            lat: coordOrigen.latitude,
            lon: coordOrigen.longitude
          }, center, radius); // false
        }
      }, {
        key: "calcDistanciaEnMetros",
        value: function calcDistanciaEnMetros(coordOrigen, coordDetino) {
          coordDetino.latitude = typeof coordDetino.latitude === 'string' ? parseFloat(coordDetino.latitude) : coordDetino.latitude;
          coordDetino.longitude = typeof coordDetino.longitude === 'string' ? parseFloat(coordDetino.longitude) : coordDetino.longitude;
          var _from = {
            lat: coordOrigen.latitude,
            lon: coordOrigen.longitude
          };
          var _to = {
            lat: coordDetino.latitude,
            lon: coordDetino.longitude
          }; // const radius = 75; // meters

          return Object(geolocation_utils__WEBPACK_IMPORTED_MODULE_1__["distanceTo"])(_from, _to); // false
        } //radio metros

      }, {
        key: "isUbicationIntroRadio",
        value: function isUbicationIntroRadio(coords1, coords2) {
          var radio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

          var _rptDistance = this.calculateDistanceInMt(coords1, coords2);

          return _rptDistance <= radio ? true : false;
        }
      }, {
        key: "calculateDistanceInMt",
        value: function calculateDistanceInMt(coords1, coords2) {
          var lat1 = coords1.latitude;
          var lng1 = coords1.longitude;
          var lat2 = coords2.latitude;
          var lng2 = coords2.longitude; // Calcular la distancia utilizando la fórmula de distancia entre dos puntos en un plano cartesiano

          var distance = Math.atan2(Math.sqrt(Math.pow(Math.cos(lat2) * Math.sin(lng2 - lng1), 2) + Math.pow(Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1), 2)), Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1)) * 6371; // Devolver la distancia en metros

          return distance * 1000;
        } // regla x km adicional

      }, {
        key: "reglaKm",
        value: function reglaKm() {}
      }]);

      return CalcDistanciaService;
    }();

    CalcDistanciaService.ɵfac = function CalcDistanciaService_Factory(t) {
      return new (t || CalcDistanciaService)();
    };

    CalcDistanciaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CalcDistanciaService,
      factory: CalcDistanciaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalcDistanciaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/crud-http.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/crud-http.service.ts ***!
    \******************************************************/

  /*! exports provided: CrudHttpService */

  /***/
  function srcAppSharedServicesCrudHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudHttpService", function () {
      return CrudHttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var _config_config_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/config.const */
    "./src/app/shared/config/config.const.ts");

    var CrudHttpService = /*#__PURE__*/function () {
      function CrudHttpService(httpClient, infoTockenService) {
        _classCallCheck(this, CrudHttpService);

        this.httpClient = httpClient;
        this.infoTockenService = infoTockenService;
      } // conOrg, conSede FILTRAN SI NO SE ESPECIFICA POR ORG Y SEDE


      _createClass(CrudHttpService, [{
        key: "getAll",
        value: function getAll(controller, evento) {
          var conOrg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var conSede = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var token = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          var url = this.setUrlFiltros(controller, evento, conOrg, conSede);
          var header = token ? this.getHeaderHttpClientForm() : null;
          return this.httpClient.get(url, {
            headers: header
          });
        }
      }, {
        key: "getTimeNow",
        value: function getTimeNow() {
          var url = this.setUrlFiltros('estadistica', 'getFechaNow', false, false);
          var header = null;
          return this.httpClient.get(url, {
            headers: header
          });
        } // numeropagina: numero pagina a mostrar
        // rows: cantidad de filas o registros a mostrar
        // filter: filtros de busqueda para la paginacion // se adjunta a org y sede
        // orden: nombre del campo por el cual se ordenara
        // ordendireccion: default ASC

      }, {
        key: "paginacion",
        value: function paginacion(controller, evento, pagenumber, rows, filter, orden) {
          var ordendireccion = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
          var conOrg = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
          var conSede = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
          var url = this.setUrlFiltros(controller, evento, conOrg, conSede, filter); // console.log('url', url);

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromObject: {
              pagenumber: pagenumber.toString(),
              rows: rows.toString(),
              orden: orden,
              ordendireccion: ordendireccion || ''
            }
          });
          return this.httpClient.get(url, {
            params: params
          });
        } // enviar idorg o idsede o idusuario vacios, el back end los llenara

      }, {
        key: "create",
        value: function create(datos, controller) {
          var evento = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'create';
          var url = this.setUrl(controller, evento);
          var header = this.getHeaderHttpClientForm();
          return this.httpClient.post(url, datos, {
            headers: header
          });
        } // enviar idorg o idsede o idusuario vacios, el back end los llenara

      }, {
        key: "update",
        value: function update(datos, id, controller) {
          var evento = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'update';
          var url = this.setUrl(controller, evento) + '/' + id.toString();
          var header = this.getHeaderHttpClientForm();
          return this.httpClient.put(url, datos, {
            headers: header
          });
        }
      }, {
        key: "updateFree",
        value: function updateFree(datos, controller) {
          var evento = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'update';
          var conToken = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var url = this.setUrl(controller, evento);
          var header = conToken ? this.getHeaderHttpClientForm() : this.getHeaderHttpClientFormNoToken();
          return this.httpClient.put(url, datos, {
            headers: header
          });
        } // enviar idorg o idsede o idusuario vacios, el back end los llenara

      }, {
        key: "postFree",
        value: function postFree(datos, controller) {
          var evento = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'update';
          var conToken = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var url = this.setUrl(controller, evento);
          var header = conToken ? this.getHeaderHttpClientForm() : this.getHeaderHttpClientFormNoToken();
          return this.httpClient.post(url, datos, {
            headers: header
          });
        } // enviar mensaje SMS de seguridad

      }, {
        key: "postSMS",
        value: function postSMS(datos, controller, evento) {
          var conTokenSMS = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var url = this.setUrl(controller, evento);
          var header = conTokenSMS ? this.getHeaderHttpClientFormSMS() : this.getHeaderHttpClientFormNoToken();
          return this.httpClient.post(url, datos, {
            headers: header
          });
        }
      }, {
        key: "getFree",
        value: function getFree(url) {
          return this.httpClient.get(url);
        } // consulta ruc o dni

      }, {
        key: "getConsultaRucDni",
        value: function getConsultaRucDni(controller, number) {
          var url = "".concat(_config_config_const__WEBPACK_IMPORTED_MODULE_3__["URL_CONSULTA_RUC_DNI"]).concat(controller, "/").concat(number);
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Bearer ".concat(_config_config_const__WEBPACK_IMPORTED_MODULE_3__["TOKEN_CONSULTA"]));
          return this.httpClient.get(url, {
            headers: header
          });
        }
      }, {
        key: "getFilterBy",
        value: function getFilterBy(controller, evento, filter) {
          var conOrg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var conSede = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          var url = this.setUrlFiltros(controller, evento, conOrg, conSede, filter);
          return this.httpClient.get(url);
        }
      }, {
        key: "getById",
        value: function getById(id, controller, evento) {
          var url = this.setUrlFiltros(controller, evento, false, false, id);
          return this.httpClient.get(url);
        } // login manda los datos en json

      }, {
        key: "loginUsuarioAutorizado",
        value: function loginUsuarioAutorizado(datos) {
          // const url = this.setUrl('login-usuario-autorizado-repartidor', '');
          var url = this.setUrl('login-usuario-autorizado-repartidor', '');
          var header = this.getHeaderHttpClientFormNoToken();
          console.log('url', url);
          return this.httpClient.post(url, datos, {
            headers: header
          });
        }
      }, {
        key: "verificarToken",
        value: function verificarToken() {
          var url = this.setUrl('verificarToken', '');
          var header = this.getHeaderHttpClientForm();
          return this.httpClient.post(url, {
            headers: header
          });
        }
      }, {
        key: "refreshToken",
        value: function refreshToken() {
          var _jwt = this.infoTockenService.getInfoUs();

          var __jwt = !_jwt.pass ? _jwt.usuario : _jwt;

          var _data = {
            nomusuario: __jwt.usuario,
            pass: atob(__jwt.pass)
          };
          var url = this.setUrl('login-usuario-autorizado-repartidor', '');
          var header = this.getHeaderHttpClientFormNoToken();
          return this.httpClient.post(url, _data, {
            headers: header
          });
        }
      }, {
        key: "setUrl",
        value: function setUrl(controller, evento) {
          var url = "".concat(_config_config_const__WEBPACK_IMPORTED_MODULE_3__["URL_SERVER"], "/").concat(controller, "/").concat(evento);
          return url;
        }
      }, {
        key: "setUrlFiltros",
        value: function setUrlFiltros(controller, evento, conOrg, conSede) {
          var filter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          var getSede = conSede ? this.setInfoSedeToken() : '';
          var getOrg = conOrg ? this.setInfoOrgToken() : '';
          var getOperador = conOrg && conSede ? '~y~' : '';
          var filterOrgSede = "".concat(getSede + getOperador + getOrg);
          var getFilter = filterOrgSede === '' ? filter : filter === '' ? '' : "~y~".concat(filter);
          getFilter = '/' + filterOrgSede + getFilter;
          var url = "".concat(_config_config_const__WEBPACK_IMPORTED_MODULE_3__["URL_SERVER"], "/").concat(controller, "/").concat(evento).concat(getFilter);
          return url;
        }
      }, {
        key: "setInfoSedeToken",
        value: function setInfoSedeToken() {
          return 'idsede:eq:' + this.infoTockenService.getInfoSedeToken();
        }
      }, {
        key: "setInfoOrgToken",
        value: function setInfoOrgToken() {
          return 'idorg:eq:' + this.infoTockenService.getInfoSedeToken();
        }
      }, {
        key: "getHeaderHttpClientForm",
        value: function getHeaderHttpClientForm() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', this.infoTockenService.getTokenAuth());
          return headers;
        }
      }, {
        key: "getHeaderHttpClientFormSMS",
        value: function getHeaderHttpClientFormSMS() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', _config_config_const__WEBPACK_IMPORTED_MODULE_3__["TOKEN_SMS"]);
          return headers;
        }
      }, {
        key: "getHeaderHttpClientFormNoToken",
        value: function getHeaderHttpClientFormNoToken() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
          return headers;
        }
      }]);

      return CrudHttpService;
    }();

    CrudHttpService.ɵfac = function CrudHttpService_Factory(t) {
      return new (t || CrudHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"]));
    };

    CrudHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CrudHttpService,
      factory: CrudHttpService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/error.global.handler.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/services/error.global.handler.ts ***!
    \*********************************************************/

  /*! exports provided: GlobalErrorHandler */

  /***/
  function srcAppSharedServicesErrorGlobalHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function () {
      return GlobalErrorHandler;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GlobalErrorHandler = /*#__PURE__*/function () {
      function GlobalErrorHandler() {
        _classCallCheck(this, GlobalErrorHandler);
      }

      _createClass(GlobalErrorHandler, [{
        key: "handleError",
        // manejo de errores en principio me maneja el error de carga inicial despues de una actualizacion
        value: function handleError(error) {
          var chunkFailedMessage = /Loading chunk [\d]+ failed/; // error carga inicial despues de actualizacion, recarga la pagina

          if (chunkFailedMessage.test(error.message)) {
            window.location.reload();
          }

          console.error(error);
        }
      }]);

      return GlobalErrorHandler;
    }();

    GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) {
      return new (t || GlobalErrorHandler)();
    };

    GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GlobalErrorHandler,
      factory: GlobalErrorHandler.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/http-config-interceptor.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/services/http-config-interceptor.service.ts ***!
    \********************************************************************/

  /*! exports provided: HttpConfigInterceptorService */

  /***/
  function srcAppSharedServicesHttpConfigInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptorService", function () {
      return HttpConfigInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // import { RepartidorService } from './repartidor.service';


    var HttpConfigInterceptorService = /*#__PURE__*/function () {
      function HttpConfigInterceptorService(authService, router // , private crudService: CrudHttpService
      // , private repartidorService: RepartidorService
      ) {
        _classCallCheck(this, HttpConfigInterceptorService);

        this.authService = authService;
        this.router = router;
      }

      _createClass(HttpConfigInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this6 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401) {
              // si es error 401 de autentificacion es decir token caducadado
              // lo refresquea
              // manda a loguearse nuevamente
              // this.crudService.refreshToken().subscribe(res => {
              //   this.authService.setLocalToken(res.token);
              //   this.authService.setLoggedStatus(true);
              // });
              // this.repartidorService.cerrarSession();
              localStorage.clear();

              _this6.router.navigate(['../']);
            }

            throw err;
          }));
        }
      }]);

      return HttpConfigInterceptorService;
    }();

    HttpConfigInterceptorService.ɵfac = function HttpConfigInterceptorService_Factory(t) {
      return new (t || HttpConfigInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    HttpConfigInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpConfigInterceptorService,
      factory: HttpConfigInterceptorService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpConfigInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/info-token.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/services/info-token.service.ts ***!
    \*******************************************************/

  /*! exports provided: InfoTockenService */

  /***/
  function srcAppSharedServicesInfoTokenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoTockenService", function () {
      return InfoTockenService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modelos_usuario_token_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modelos/usuario.token.model */
    "./src/app/modelos/usuario.token.model.ts");
    /* harmony import */


    var src_app_modelos_metodo_pago_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modelos/metodo.pago.model */
    "./src/app/modelos/metodo.pago.model.ts");

    var InfoTockenService = /*#__PURE__*/function () {
      function InfoTockenService() {
        _classCallCheck(this, InfoTockenService);

        this.converToJSON();
      }

      _createClass(InfoTockenService, [{
        key: "getInfoUs",
        value: function getInfoUs() {
          this.getLocalIpCliente();
          return this.infoUsToken;
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          localStorage.setItem('::token', token); // guardo tambien la hora que esta iniciando session

          var ms_tieme_init_session = new Date().getTime();
          localStorage.setItem('sys::numtis', ms_tieme_init_session.toString());
        }
      }, {
        key: "getInfoSedeToken",
        value: function getInfoSedeToken() {
          // const token = jwt.decode(this.getToken());
          return this.infoUsToken.idsede.toString(); // return '1';
        }
      }, {
        key: "getInfoOrgToken",
        value: function getInfoOrgToken() {
          return this.infoUsToken.idorg.toString();
        }
      }, {
        key: "getInfoNomSede",
        value: function getInfoNomSede() {
          return localStorage.getItem('sys::s');
        }
      }, {
        key: "isCliente",
        value: function isCliente() {
          return this.infoUsToken.isCliente;
        }
      }, {
        key: "isSoloLlevar",
        value: function isSoloLlevar() {
          return this.infoUsToken.isSoloLLevar;
        }
      }, {
        key: "isDelivery",
        value: function isDelivery() {
          return this.infoUsToken.isDelivery;
        }
      }, {
        key: "getLocalIpCliente",
        value: function getLocalIpCliente() {
          this.infoUsToken.ipCliente = localStorage.getItem('sys::it') || '';
          return this.infoUsToken.ipCliente;
        }
      }, {
        key: "setLocalIpCliente",
        value: function setLocalIpCliente(val) {
          localStorage.setItem('sys::it', val);
        }
      }, {
        key: "setIsPagoSuccess",
        value: function setIsPagoSuccess(val) {
          this.infoUsToken.isPagoSuccess = val;
          this.set();
        } // para el confirmar pago si es clienteDelivery

      }, {
        key: "setOrderDelivery",
        value: function setOrderDelivery(_order, _importes) {
          this.infoUsToken.orderDelivery = btoa(_order);
          this.infoUsToken.importeDelivery = btoa(_importes); // const _token = `eyCJ9.${btoa(JSON.stringify(this.infoUsToken))}`;
          // localStorage.setItem('::token', _token);

          this.set();
        }
      }, {
        key: "setTelefono",
        value: function setTelefono(val) {
          this.infoUsToken.telefono = val;
          this.set();
        }
      }, {
        key: "setMetodoPago",
        value: function setMetodoPago(metodo) {
          this.infoUsToken.metodoPago = metodo;
          this.set();
        }
      }, {
        key: "setIniMetodoPago",
        value: function setIniMetodoPago() {
          var metodoPagoInit = new src_app_modelos_metodo_pago_model__WEBPACK_IMPORTED_MODULE_2__["MetodoPagoModel"]();
          metodoPagoInit.idtipo_pago = 2;
          metodoPagoInit.descripcion = 'Tarjeta';
          metodoPagoInit.importe = '0';
          metodoPagoInit.checked = true;
          this.setMetodoPago(metodoPagoInit);
        }
      }, {
        key: "setEfectivoMano",
        value: function setEfectivoMano(val) {
          this.infoUsToken.efectivoMano = val;
          this.set();
        }
      }, {
        key: "setisOnline",
        value: function setisOnline(val) {
          this.infoUsToken.isOnline = val;
          this.set();
        }
      }, {
        key: "setSocketId",
        value: function setSocketId(val) {
          // this.infoUsToken.socketId = this.infoUsToken.socketId ? this.infoUsToken.socketId : val;
          this.infoUsToken.socketId = val;
          this.set();
        } // guarda en el local storage

      }, {
        key: "set",
        value: function set() {
          var _token = "eyCJ9.".concat(btoa(JSON.stringify(this.infoUsToken)));

          localStorage.setItem('::token', _token);
        } //

      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('::token');
        } // este lo modificamos

      }, {
        key: "getTokenAuth",
        value: function getTokenAuth() {
          return localStorage.getItem('::token-auth');
        } // este se mantiene desde la session (original)

      }, {
        key: "converToJSON",
        value: function converToJSON() {
          if (localStorage.getItem('::token')) {
            var _token = JSON.parse(atob(localStorage.getItem('::token').split('.')[1])); // si existe idcliente, setea al usuario


            if (_token.idcliente) {
              var _newUs = new src_app_modelos_usuario_token_model__WEBPACK_IMPORTED_MODULE_1__["UsuarioTokenModel"]();

              _newUs.isCliente = true;
              _newUs.idcliente = _token.idcliente;
              _newUs.idorg = _token.idorg;
              _newUs.idsede = _token.idsede;
              _newUs.nombres = _token.datalogin ? _token.datalogin.name : _token.nombres;
              _newUs.idusuario = 0;
              _newUs.usuario = 'cliente';
              _newUs.numMesaLector = _token.numMesaLector;
              _newUs.ipCliente = _token.ipCliente;
              _newUs.isSoloLLevar = _token.isSoloLLevar;
              _newUs.isDelivery = _token.isDelivery;
              _newUs.direccionEnvioSelected = _token.direccionEnvioSelected;
              _newUs.telefono = _token.telefono;
              _newUs.orderDelivery = _token.orderDelivery;
              _newUs.importeDelivery = _token.importeDelivery;
              _newUs.isPagoSuccess = _token.isPagoSuccess;
              _newUs.metodoPago = _token.metodoPago;
              _newUs.efectivoMano = _token.efectivoMano;
              _newUs.socketId = _token.socketId;
              this.infoUsToken = _newUs; // agregar el metodo pago prederteminado tarjeta

              if (!this.infoUsToken.metodoPago) {
                this.setIniMetodoPago();
              }
            } else {
              this.infoUsToken = _token;
              this.infoUsToken.isCliente = false;
            }
          } else {
            this.infoUsToken = null;
          }
        }
      }, {
        key: "cerrarSession",
        value: function cerrarSession() {
          localStorage.removeItem('::token');
          localStorage.removeItem('sys::rules');
          localStorage.removeItem('sys::status');
          localStorage.removeItem('sys::numtis');
          localStorage.removeItem('sys::st');
          localStorage.removeItem('token');
          localStorage.removeItem('sys::ed');
          localStorage.removeItem('sys::transaction-response');
          localStorage.removeItem('sys::transaction-load');
          localStorage.removeItem('data'); // localStorage.removeItem('sys::tpm');
        } // verifica el tiempo de inactividad para cerrar session
        // cerrar session despues de 3:20 => ( 12000 sec )horas inciadas

      }, {
        key: "verificarContunuarSession",
        value: function verificarContunuarSession() {
          if (!this.infoUsToken || !this.infoUsToken.isCliente || !this.infoUsToken.isDelivery) {
            // si es usuario autorizado no cuenta tiempo
            return true;
          }

          var numTis = parseInt(localStorage.getItem('sys::numtis'), 0);
          var continueSession = !isNaN(numTis);

          if (!continueSession) {
            this.cerrarSession(); // this.miPedidoService.cerrarSession();

            return continueSession;
          }

          var ms_now = new Date().getTime();
          var ms = ms_now - numTis;
          var sec = Math.floor(ms / 1000);

          if (sec > 10000) {
            continueSession = false;
          }

          if (!continueSession) {
            this.cerrarSession(); // this.miPedidoService.cerrarSession();

            return continueSession;
          }

          return true; // const timeAfter = localStorage.getItem('sys::tnum') ? parseInt(localStorage.getItem('sys::tnum'), 0) : ms_new;
        }
      }]);

      return InfoTockenService;
    }();

    InfoTockenService.ɵfac = function InfoTockenService_Factory(t) {
      return new (t || InfoTockenService)();
    };

    InfoTockenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InfoTockenService,
      factory: InfoTockenService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoTockenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/listen-status.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/listen-status.service.ts ***!
    \**********************************************************/

  /*! exports provided: ListenStatusService */

  /***/
  function srcAppSharedServicesListenStatusServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListenStatusService", function () {
      return ListenStatusService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modelos/estado.pedido.model */
    "./src/app/modelos/estado.pedido.model.ts");

    var ListenStatusService = /*#__PURE__*/function () {
      function ListenStatusService() {
        _classCallCheck(this, ListenStatusService);

        // para activar la busqueda
        this.isBusquedaSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isBusqueda$ = this.isBusquedaSource.asObservable(); // string a buscar

        this.charBuquedaSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.charBuqueda$ = this.charBuquedaSource.asObservable(); // hay items en la busqueda - se encontro cuenta

        this.hayCuentaBusquedaSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.hayCuentaBusqueda$ = this.hayCuentaBusquedaSource.asObservable(); // datos de la sede estan disponible

        this.hayDatosSedeSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.hayDatosSede$ = this.hayDatosSedeSource.asObservable(); // si es cliente usuario

        this.isUsuarioClienteSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isUsuarioCliente$ = this.isUsuarioClienteSource.asObservable(); // estado del pedido enviado por el cliente

        this.estadoPedidoSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__["EstadoPedidoModel"]());
        this.estadoPedido$ = this.estadoPedidoSource.asObservable(); // hay pedido en el storage, si es cliente usuario no cargar al cuenta.

        this.hayPedidoPendienteSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.hayPedidoPendiente$ = this.hayPedidoPendienteSource.asObservable(); // form pagar la cuenta

        this.isPagePagarCuentaShowSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isPagePagarCuentaShow$ = this.isPagePagarCuentaShowSource.asObservable(); // si el boton de pago ha sido visible // recargamos la pagina al volver a ingresar

        this.isBtnPagoShowSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isBtnPagoShow$ = this.isBtnPagoShowSource.asObservable(); // notifica el pago correcto para enviar el pedido cuando es solo para llevar

        this.isPagoSuccesSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isPagoSucces$ = this.isPagoSuccesSource.asObservable();
        this.isChangeDireccionDeliverySource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.isChangeDireccionDelivery$ = this.isChangeDireccionDeliverySource.asObservable(); // repartidor
        // notifica salir del establecimeinto cuando es cliente delivery goback

        this.isOutEstablecimientoDeliverySource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isOutEstablecimientoDelivery$ = this.isOutEstablecimientoDeliverySource.asObservable(); // notifica efectivo en mano

        this.efectivoManoSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.efectivoManoMano$ = this.efectivoManoSource.asObservable(); // notifica cambios en el pedido

        this.pedidoModificadoSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.pedidoModificado$ = this.pedidoModificadoSource.asObservable(); // listen position gps

        this.myPositionSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.myPosition$ = this.myPositionSource.asObservable(); // listen new pedido repartidor propio // llega el pedido

        this.newPedidoRepartoPropioSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.newPedidoRepartoPropio$ = this.newPedidoRepartoPropioSource.asObservable();
      }

      _createClass(ListenStatusService, [{
        key: "setIsBusqueda",
        value: function setIsBusqueda() {
          var _this7 = this;

          if (!this.isBusquedaSource.value) {
            setTimeout(function () {
              _this7.isBusquedaSource.next(true);
            }, 250);
          } else {
            this.isBusquedaSource.next(false);
          }
        }
      }, {
        key: "setCharBusqueda",
        value: function setCharBusqueda(charFind) {
          this.charBuquedaSource.next(charFind);
        }
      }, {
        key: "setHayCuentaBuesqueda",
        value: function setHayCuentaBuesqueda(value) {
          this.hayCuentaBusquedaSource.next(value);
        }
      }, {
        key: "setHayDatosSede",
        value: function setHayDatosSede(value) {
          this.hayDatosSedeSource.next(value);
        }
      }, {
        key: "setIsUsuarioCliente",
        value: function setIsUsuarioCliente(value) {
          this.isUsuarioClienteSource.next(value);
        }
      }, {
        key: "setEstadoPedido",
        value: function setEstadoPedido(value) {
          this.estadoPedidoSource.next(value);
        }
      }, {
        key: "setHayPedidoPendiente",
        value: function setHayPedidoPendiente(value) {
          this.hayPedidoPendienteSource.next(value);
        }
      }, {
        key: "setIsPagePagarCuentaShow",
        value: function setIsPagePagarCuentaShow(value) {
          this.isPagePagarCuentaShowSource.next(value);
        }
      }, {
        key: "setIsBtnPagoShow",
        value: function setIsBtnPagoShow(value) {
          this.isBtnPagoShowSource.next(value);
        }
      }, {
        key: "setPagoSuccess",
        value: function setPagoSuccess(value) {
          this.isPagoSuccesSource.next(value);
        } // repartidor

      }, {
        key: "setChangeDireccionDelivery",
        value: function setChangeDireccionDelivery(value) {
          this.isChangeDireccionDeliverySource.next(value);
        }
      }, {
        key: "setIsOutEstablecimientoDelivery",
        value: function setIsOutEstablecimientoDelivery(value) {
          this.isOutEstablecimientoDeliverySource.next(value);
        }
      }, {
        key: "setEfectivoMano",
        value: function setEfectivoMano(value) {
          this.efectivoManoSource.next(value);
        } // notifica cambios en el pedido

      }, {
        key: "setPedidoModificado",
        value: function setPedidoModificado(pedido) {
          this.pedidoModificadoSource.next(pedido);
        } // notifica posicion repartidor

      }, {
        key: "setMyPosition",
        value: function setMyPosition(pos) {
          this.myPositionSource.next(pos);
        } // listen new pedido repartidor propio

      }, {
        key: "setNewPedidoRepartoPropio",
        value: function setNewPedidoRepartoPropio(pedido) {
          this.newPedidoRepartoPropioSource.next(pedido);
        }
      }]);

      return ListenStatusService;
    }();

    ListenStatusService.ɵfac = function ListenStatusService_Factory(t) {
      return new (t || ListenStatusService)();
    };

    ListenStatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ListenStatusService,
      factory: ListenStatusService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListenStatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/pedido-repartidor.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/pedido-repartidor.service.ts ***!
    \**************************************************************/

  /*! exports provided: PedidoRepartidorService */

  /***/
  function srcAppSharedServicesPedidoRepartidorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoRepartidorService", function () {
      return PedidoRepartidorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modelos_pedido_repartidor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modelos/pedido.repartidor.model */
    "./src/app/modelos/pedido.repartidor.model.ts");
    /* harmony import */


    var _crud_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");
    /* harmony import */


    var src_app_modelos_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modelos/tipoconsumo.model */
    "./src/app/modelos/tipoconsumo.model.ts");
    /* harmony import */


    var src_app_modelos_seccion_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modelos/seccion.model */
    "./src/app/modelos/seccion.model.ts");
    /* harmony import */


    var src_app_modelos_item_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modelos/item.model */
    "./src/app/modelos/item.model.ts");
    /* harmony import */


    var src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modelos/pedido.model */
    "./src/app/modelos/pedido.model.ts");
    /* harmony import */


    var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/internal/Observable */
    "./node_modules/rxjs/internal/Observable.js");
    /* harmony import */


    var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./socket.service */
    "./src/app/shared/services/socket.service.ts");
    /* harmony import */


    var _info_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var _listen_status_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./listen-status.service */
    "./src/app/shared/services/listen-status.service.ts");
    /* harmony import */


    var src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/modelos/geoposition.model */
    "./src/app/modelos/geoposition.model.ts");
    /* harmony import */


    var _calc_distancia_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./calc-distancia.service */
    "./src/app/shared/services/calc-distancia.service.ts");
    /* harmony import */


    var src_app_modelos_time_line_pedido__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/modelos/time.line.pedido */
    "./src/app/modelos/time.line.pedido.ts");
    /* harmony import */


    var _send_msj_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./send-msj.service */
    "./src/app/shared/services/send-msj.service.ts"); // import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


    var PedidoRepartidorService = /*#__PURE__*/function () {
      function PedidoRepartidorService(crudService, router, infoTokenService, listenService, socketService, calcDistanciaService, sendMsjService) {
        _classCallCheck(this, PedidoRepartidorService);

        this.crudService = crudService;
        this.router = router;
        this.infoTokenService = infoTokenService;
        this.listenService = listenService;
        this.socketService = socketService;
        this.calcDistanciaService = calcDistanciaService;
        this.sendMsjService = sendMsjService;
        this.keyLocal = 'sys::pr';
        this.keyLocalIds = 'sys::pr::ids';
        this.keyLocalItem = 'sys::pr::it';
        this.keyLocalItemSelected = 'sys::pr::selected';
        this.init();
      }

      _createClass(PedidoRepartidorService, [{
        key: "init",
        value: function init() {
          this.pedidoRepartidor = this.getLocal();
        }
      }, {
        key: "cleanLocal",
        value: function cleanLocal() {
          localStorage.removeItem(this.keyLocalIds);
          localStorage.removeItem(this.keyLocalItem);
          localStorage.removeItem(this.keyLocal);
          localStorage.removeItem(this.keyLocalItemSelected);
          localStorage.removeItem('sys::pXa');
          this.pedidoRepartidor = this.getLocal();
        }
      }, {
        key: "setPasoVa",
        value: function setPasoVa(val) {
          this.pedidoRepartidor.paso_va = val;
          this.setLocal(this.pedidoRepartidor);
        }
      }, {
        key: "setPedidoPasoVa",
        value: function setPedidoPasoVa(val) {
          // console.log('estado cambiado', val);
          this.pedidoRepartidor.pedido_paso_va = val;
          this.setLocal(this.pedidoRepartidor);
        } // setCostoSercicio(val: string) {
        //   this.pedidoRepartidor.c_servicio = val;
        //   this.setLocal(this.pedidoRepartidor);
        // }
        // setImporteTotalPedido(val: string) {
        //   this.pedidoRepartidor.importePedido = val;
        //   this.setLocal(this.pedidoRepartidor);
        // }
        // setIsHayPropina(val: boolean) {
        //   this.pedidoRepartidor.isHayPropina = val;
        //   this.setLocal(this.pedidoRepartidor);
        // }

      }, {
        key: "setLocal",
        value: function setLocal() {
          var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          obj = obj ? obj : this.pedidoRepartidor;
          localStorage.setItem(this.keyLocal, btoa(JSON.stringify(obj)));
        }
      }, {
        key: "setLocalIds",
        value: function setLocalIds(obj) {
          // obj = obj ? obj : this.pedidoRepartidor;
          localStorage.setItem(this.keyLocalIds, btoa(JSON.stringify(obj)));
        }
      }, {
        key: "setLocalItems",
        value: function setLocalItems(obj) {
          // obj = obj ? obj : this.pedidoRepartidor;
          localStorage.setItem(this.keyLocalItem, btoa(JSON.stringify(obj)));
        }
      }, {
        key: "setPedidoSelect",
        value: function setPedidoSelect(obj) {
          localStorage.setItem(this.keyLocalItemSelected, btoa(JSON.stringify(obj)));
        }
      }, {
        key: "setPedidoPorAceptar",
        value: function setPedidoPorAceptar(obj) {
          localStorage.setItem('sys::pXa', btoa(JSON.stringify(obj)));
        }
      }, {
        key: "getPedidoPorAceptar",
        value: function getPedidoPorAceptar() {
          var rpt = localStorage.getItem('sys::pXa');
          return rpt ? JSON.parse(atob(rpt)) : null;
        }
      }, {
        key: "getPedidoSelect",
        value: function getPedidoSelect() {
          var rpt = localStorage.getItem(this.keyLocalItemSelected);
          return rpt ? JSON.parse(atob(rpt)) : null;
        }
      }, {
        key: "getLocalIds",
        value: function getLocalIds() {
          var rpt = localStorage.getItem(this.keyLocalIds);
          return rpt ? JSON.parse(atob(rpt)) : null;
        }
      }, {
        key: "getLocalItems",
        value: function getLocalItems() {
          var rpt = localStorage.getItem(this.keyLocalItem);
          return rpt ? JSON.parse(atob(rpt)) : null;
        }
      }, {
        key: "getLocal",
        value: function getLocal() {
          var rpt = localStorage.getItem(this.keyLocal);
          return rpt ? JSON.parse(atob(rpt)) : new src_app_modelos_pedido_repartidor_model__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorModel"](); // try {
          // } catch (error) {
          //   console.log('clean pedido from getlocal');
          //   this.cleanLocal();
          //   return new PedidoRepartidorModel;
          // }
        }
      }, {
        key: "asignarPedido",
        value: function asignarPedido() {
          var _this8 = this;

          var ids = this.getLocalIds().pedidos.join(',');
          var _data = {
            idpedido: ids,
            repartidor: !this._repartidor ? this.infoTokenService.getInfoUs().usuario : this._repartidor
          };
          this.crudService.postFree(_data, 'repartidor', 'set-asignar-pedido', true).subscribe(function (res) {
            // console.log(res);
            _this8.pedidoRepartidor.estado = 1; // asignadp

            _this8.setLocal(); // this.setPasoVa(1);

          });
        }
      }, {
        key: "playAudioNewPedido",
        value: function playAudioNewPedido() {
          // console.trace();
          var audio = new Audio();
          audio.src = './assets/audio/Alarm04.wav';
          audio.load();
          audio.play();
        } // dar formato subtotales del pedido recibido
        // saca el importe total del pedido separando el importe del servicio de entrega

      }, {
        key: "darFormatoSubTotales",
        value: function darFormatoSubTotales() {
          var arrTotales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var pwa_delivery_comercio_paga_entrega = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var costoEntrega = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          this.init();
          arrTotales = arrTotales && arrTotales.length > 0 ? arrTotales : this.pedidoRepartidor.datosSubtotalesShow;
          var rowTotal = arrTotales[arrTotales.length - 1]; // lo que paga el cliente

          this.pedidoRepartidor.importePagaCliente = rowTotal.importe;
          pwa_delivery_comercio_paga_entrega = pwa_delivery_comercio_paga_entrega !== null ? pwa_delivery_comercio_paga_entrega : this.pedidoRepartidor.datosComercio.pwa_delivery_comercio_paga_entrega;
          costoEntrega = costoEntrega ? costoEntrega : this.pedidoRepartidor.datosDelivery.costoTotalDelivery; // agregar o restar el importe del costo de entrega SI el comercio paga el costo de entrega pwa_delivery_comercio_paga_entrega

          if (pwa_delivery_comercio_paga_entrega === 1) {
            // const costoEntrega = this.pedidoRepartidor.datosDelivery.costoTotalDelivery;
            // ingresamos en la penultima postion del arrTotales
            var postionInsert = arrTotales.length - 1;
            var _row = {
              descripcion: 'Costo de Entrega',
              esImpuesto: 0,
              id: -4,
              importe: -costoEntrega,
              quitar: false,
              tachado: false,
              visible: false,
              visible_cpe: false
            };
            arrTotales.splice(postionInsert, 0, _row); // console.log('costo de entrega insertado', arrTotales);
          } // -2 = servicio deliver -3 = propina


          rowTotal.importe = arrTotales.filter(function (x) {
            return x.id !== -2 && x.id !== -3 && x.descripcion !== 'TOTAL';
          }).map(function (x) {
            return parseFloat(x.importe);
          }).reduce(function (a, b) {
            return a + b;
          }, 0);
          this.pedidoRepartidor.importePedido = rowTotal.importe; // this.setImporteTotalPedido(rowTotal.importe);
          // costo total del servico + prpina

          var costoServicio = parseFloat(arrTotales.filter(function (x) {
            return x.id === -2 || x.id === -3;
          }).map(function (x) {
            return parseFloat(x.importe);
          }).reduce(function (a, b) {
            return a + b;
          }, 0));
          this.pedidoRepartidor.c_servicio = costoServicio.toString(); // this.setCostoSercicio(costoServicio.toString());

          var _isHayPropina = arrTotales.filter(function (x) {
            return x.id === -3;
          })[0] ? true : false; // this.setIsHayPropina(_isHayPropina);


          this.pedidoRepartidor.isHayPropina = _isHayPropina; // cuanto paga el repartidor restando precio_default si el comercio no es afiliado

          this.setLocal(); // quitamos el importe del servicio

          return arrTotales.filter(function (x) {
            return x.id !== -2 && x.id !== -3;
          });
        } // da formato al pedido, se utiliza para ver el detalle del pedido

      }, {
        key: "darFormatoPedido",
        value: function darFormatoPedido(res) {
          var _miPedidoCuenta = new src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_6__["PedidoModel"]();

          var c_tiposConsumo = [];
          var subTotalDefault = 0;
          res.data.map(function (tp) {
            var hayTpc = c_tiposConsumo.filter(function (x) {
              return x.idtipo_consumo === tp.idtipo_consumo;
            })[0];

            if (!hayTpc) {
              hayTpc = new src_app_modelos_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_3__["TipoConsumoModel"]();
              hayTpc.descripcion = tp.des_tp;
              hayTpc.idtipo_consumo = parseInt(tp.idtipo_consumo, 0);
              c_tiposConsumo.push(hayTpc);
            }
          });
          c_tiposConsumo.map(function (tp) {
            res.data.filter(function (_tp) {
              return _tp.idtipo_consumo === tp.idtipo_consumo;
            }).map(function (_s, i) {
              // let haySeccion = !tp.secciones ? null : tp.secciones.filter((s: SeccionModel) => s.idseccion.toString() === _s.idseccion.toString())[0];
              var haySeccion = tp.secciones.filter(function (s) {
                return s.idseccion.toString() === _s.idseccion.toString();
              })[0];

              if (!haySeccion) {
                haySeccion = new src_app_modelos_seccion_model__WEBPACK_IMPORTED_MODULE_4__["SeccionModel"]();
                haySeccion.idseccion = _s.idseccion.toString();
                haySeccion.des = _s.des_seccion;
                haySeccion.sec_orden = _s.sec_orden;
                haySeccion.ver_stock_cero = 0;
                tp.count_items_seccion = i + 1;
                tp.secciones.push(haySeccion);
              }
            });
          }); // items

          c_tiposConsumo.map(function (tp) {
            tp.secciones.map(function (s) {
              res.data.filter(function (_tp) {
                return _tp.idtipo_consumo.toString() === tp.idtipo_consumo.toString() && _tp.idseccion.toString() === s.idseccion.toString();
              }).map(function (_i, i) {
                var hayItem = new src_app_modelos_item_model__WEBPACK_IMPORTED_MODULE_5__["ItemModel"](); // precio total si el comercio no es afiliado muestra el precio default (sin comision para que el repartidor sepa el precio a pagar)

                var precio_default = parseFloat(_i.precio_default) * parseInt(_i.cantidad, 0);
                var p_unitario = _i.precio_default;
                subTotalDefault += precio_default;
                hayItem.des = _i.descripcion;
                hayItem.detalles = '';
                hayItem.iditem = _i.iditem;
                hayItem.idcarta_lista = _i.idcarta_lista;
                hayItem.idseccion = _i.idseccion;
                hayItem.isalmacen = _i.isalmacen;
                hayItem.cantidad_seleccionada = parseInt(_i.cantidad, 0);
                hayItem.precio = p_unitario;
                hayItem.precio_print = parseFloat(precio_default.toString());
                hayItem.precio_total = parseFloat(precio_default.toString());
                hayItem.procede = _i.procede === '0' ? 1 : 0;
                hayItem.seccion = _i.des_seccion;
                hayItem.img = _i.img;
                hayItem.subitems_view = _i.subitems === 'null' || _i.subitems === '' || !_i.subitems ? [] : JSON.parse(_i.subitems);
                s.count_items = i + 1;
                s.items = s.items ? s.items : [];
                s.items.push(hayItem);
              });
            });
          });
          _miPedidoCuenta.tipoconsumo = c_tiposConsumo;
          this.reCalcularSubTotal(subTotalDefault);
          return _miPedidoCuenta;
        }
      }, {
        key: "darFormatoPedidoLocal",
        value: function darFormatoPedidoLocal(pedidoLocal) {
          var subotales = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var subTotalDefault = 0;
          pedidoLocal.tipoconsumo.map(function (tp) {
            tp.secciones.map(function (s) {
              s.items.map(function (_i) {
                var precio_default = parseFloat(_i.precio_default) * _i.cantidad_seleccionada;

                var p_unitario = _i.precio_default;
                subTotalDefault += precio_default;
                _i.precio = p_unitario;
                _i.precio_print = parseFloat(precio_default.toString());
                _i.precio_total = parseFloat(precio_default.toString());
              });
            });
          });
          this.reCalcularSubTotal(subTotalDefault, subotales);
          return pedidoLocal;
        } // subTotal = recibido del default

      }, {
        key: "reCalcularSubTotal",
        value: function reCalcularSubTotal(subTotalDefault) {
          var subotales = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          this.init();

          var _rowSubTotal = subotales ? subotales[0] : this.pedidoRepartidor.datosSubtotales[0]; // si el tototal es igual quiere decir de que no hay default comercio afiliado


          if (subTotalDefault === parseFloat(_rowSubTotal.importe)) {
            return;
          }

          var _diffSubTotal = parseFloat(_rowSubTotal.importe) - subTotalDefault;

          _rowSubTotal.importe = subTotalDefault; // sumamos los totales

          var rowTotal = subotales.filter(function (x) {
            return x.descripcion === 'TOTAL';
          })[0]; // importe que pagara el cliente

          this.pedidoRepartidor.importePagaCliente = rowTotal.importe;
          rowTotal.importe = parseFloat(rowTotal.importe) - _diffSubTotal; // this.pedidoRepartidor.datosSubtotales =
          // this.setLocal();
        } // verifica el estado del pedido
        // esto en inidicaciones por si se recarga o no llega la notificaion socket

      }, {
        key: "verificarEstadoPedido",
        value: function verificarEstadoPedido(idpedido) {
          var _this9 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (observer) {
            var _dataSend = {
              idpedido: idpedido
            };

            _this9.crudService.postFree(_dataSend, 'repartidor', 'get-estado-pedido').subscribe(function (res) {
              _this9.pedidoRepartidor.estado = res.data[0].pwa_delivery_status;
              observer.next(_this9.pedidoRepartidor.estado);
            });
          });
        } // load pedidos asignados // grupo de pedidos

      }, {
        key: "loadPedidosRecibidos",
        value: function loadPedidosRecibidos(_ids) {
          var _this10 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (observer) {
            var _dataSend = {
              ids: _ids
            };

            _this10.crudService.postFree(_dataSend, 'repartidor', 'get-pedidos-recibidos-group').subscribe(function (res) {
              // this.pedidoRepartidor.estado = res.data[0].pwa_delivery_status;
              observer.next(res.data);
            });
          });
        } // fin de pedido // guarda datos del pedido
        // isGrupoPedidos = si es grupo de pedidos
        // time_line_pedido guarda la hora de entrega

      }, {
        key: "finalizarPedido",
        value: function finalizarPedido() {
          var _this11 = this;

          var isGrupoPedidos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var time_line_pedido = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var comisionRepartidor = parseFloat(this.pedidoRepartidor.datosDelivery.costoTotalDelivery); // - parseFloat( this.pedidoRepartidor.datosComercio.pwa_delivery_comision_fija_no_afiliado );

          var propinaRepartidor = this.pedidoRepartidor.datosDelivery.propina.value;
          var costotalServicio = comisionRepartidor + parseFloat(propinaRepartidor);

          var _importePagaCliente = this.pedidoRepartidor.importePagaCliente ? parseFloat(this.pedidoRepartidor.importePagaCliente) : parseFloat(this.pedidoRepartidor.importePedido) + costotalServicio; // importeDepositar siempre y cuando el comercio no esta afiliado
          // const importeDepositar = _importePagaCliente - (parseFloat(this.pedidoRepartidor.importePedido) + costotalServicio);


          var _idRepartidor = this.pedidoRepartidor.datosRepartidor ? this.pedidoRepartidor.datosRepartidor.idrepartidor : this.infoTokenService.infoUsToken.usuario.idrepartidor;

          var _dataSend = {
            idrepartidor: _idRepartidor,
            idpedido: this.pedidoRepartidor.idpedido,
            time_line: time_line_pedido ? time_line_pedido : 0,
            idcliente: this.pedidoRepartidor.datosDelivery.idcliente,
            idsede: this.pedidoRepartidor.datosComercio.idsede,
            operacion: {
              isrepartidor_propio: false,
              metodoPago: this.pedidoRepartidor.datosDelivery.metodoPago,
              importeTotalPedido: _importePagaCliente,
              importePagadoRepartidor: this.pedidoRepartidor.importePedido,
              comisionRepartidor: comisionRepartidor - this.pedidoRepartidor.datosComercio.pwa_delivery_comision_fija_no_afiliado,
              propinaRepartidor: propinaRepartidor,
              costoTotalServicio: costotalServicio,
              importeDepositar: parseFloat(this.pedidoRepartidor.datosComercio.pwa_delivery_comision_fija_no_afiliado).toFixed(2) // (a)
              // importePagaRepartidor: parseFloat(this.pedidoRepartidor.datosDelivery.importeTotal),

            }
          }; // (a) = cuando el comercio no esta afiliado el importe que el repartidor debe depositar, el imnporte fijo de comercio no afiliado
          // (b) = precios de los productos sin comision

          this.crudService.postFree(_dataSend, 'repartidor', 'set-fin-pedido-entregado').subscribe(function (res) {
            // console.log(res);
            // console.log('clean from finalizarPedido');
            // chequea si todos los pedidos estan finalizados
            if (isGrupoPedidos) {
              var _pedidoFinalizar = _this11.getPedidoSelect();

              _this11.listenService.setPedidoModificado(_pedidoFinalizar);

              var allPedidos = _this11.getLocalItems(); // save estado pedido


              var elPedido = allPedidos.filter(function (p) {
                return p.idpedido === _pedidoFinalizar.idpedido;
              })[0];
              elPedido.estado = 2;

              _this11.setLocalItems(allPedidos);

              _this11.socketService.emit('repartidor-notifica-fin-one-pedido', _pedidoFinalizar); // console.log('repartidor-notifica-fin-one-pedido');
              // chequea si los demas estan ya estan cerrados


              var numCerrados = allPedidos.filter(function (p) {
                return p.estado === 0;
              }).length; // if ( numCerrados === 0 ) {
              //   this.socketService.emit('repartidor-grupo-pedido-finalizado', _idRepartidor);
              //   // console.log('repartidor-grupo-pedido-finalizado');
              //   this.cleanLocal();
              //   this.router.navigate(['./main/pedidos']);
              // }
            } else {
              _this11.socketService.emit('repartidor-propio-notifica-fin-pedido', _this11.pedidoRepartidor);

              _this11.cleanLocal(); // this.router.navigate(['./main/pedidos']);

            }
          });
        } // fin de pedido // guarda datos del pedido

      }, {
        key: "finalizarPedidoPropioRepartidor",
        value: function finalizarPedidoPropioRepartidor() {
          var _this12 = this;

          var time_line_pedido = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var _idPedidoRepartidor = this.pedidoRepartidor.datosRepartidor ? this.pedidoRepartidor.datosRepartidor.idrepartidor : this.infoTokenService.infoUsToken.usuario.idrepartidor;

          var _dataSend = {
            idrepartidor: _idPedidoRepartidor,
            idpedido: this.pedidoRepartidor.idpedido,
            time_line: time_line_pedido ? time_line_pedido : 0,
            idcliente: this.pedidoRepartidor.datosCliente.idcliente,
            idsede: this.pedidoRepartidor.datosComercio.idsede,
            operacion: {
              isrepartidor_propio: true,
              metodoPago: this.pedidoRepartidor.datosDelivery.metodoPago,
              importeTotalPedido: parseFloat(this.pedidoRepartidor.importePagaCliente),
              importePagadoRepartidor: this.pedidoRepartidor.importePedido,
              comisionRepartidor: 0,
              propinaRepartidor: 0,
              costoTotalServicio: 0,
              importeDepositar: 0 // (a)
              // importePagaRepartidor: parseFloat(this.pedidoRepartidor.datosDelivery.importeTotal),

            }
          }; // notifica cambios en el pedido, para colocar icono entregado en el mapa del repartidor

          this.pedidoRepartidor.estado = 4;
          this.pedidoRepartidor.paso_va = 4;
          this.pedidoRepartidor.pwa_delivery_status = 4;
          this.listenService.setPedidoModificado(this.pedidoRepartidor); // cuando termina el pedido el repartidor se guarda el tiempo en el pedido

          this.crudService.postFree(_dataSend, 'repartidor', 'set-fin-pedido-entregado').subscribe(function (res) {
            // console.log(res);
            // console.log('repartidor-propio-notifica-fin-pedido');
            _this12.socketService.emit('repartidor-propio-notifica-fin-pedido', _this12.pedidoRepartidor); // this.cleanLocal();
            // this.router.navigate(['./repartidor/pedidos']);

          });
        }
      }, {
        key: "finalizarPedidoExpress",
        value: function finalizarPedidoExpress(pedido, _listPedidos) {
          var _tipo_pedido = pedido.isretiroatm ? 'express' : 'retiro_atm';

          var _dataSend = {
            idpedido_mandado: pedido.idpedido_mandado,
            pedidos_quedan: _listPedidos,
            num_quedan: _listPedidos.pedidos.length,
            tipo_pedido: _tipo_pedido
          };
          this.crudService.postFree(_dataSend, 'repartidor', 'set-fin-pedido-express-entregado', true).subscribe(function (res) {
            return console.log(res);
          });
        }
      }, {
        key: "listaPedidosEntregados",
        value: function listaPedidosEntregados() {
          this._repartidor = this.infoTokenService.getInfoUs().usuario;
          this.socketService.emit('repartidor-grupo-pedido-finalizado', this._repartidor.idrepartidor);
          this.cleanLocal();
        } // // fin timer // busca otro repartidor

      }, {
        key: "pedidoNoAceptadoReasingar",
        value: function pedidoNoAceptadoReasingar() {
          // estado = 1 es aceptado
          if (this.pedidoRepartidor.estado === 0) {
            // console.log('termina tiempo reasigna pedido repartidor-declina-pedido', this.pedidoRepartidor);
            var _num_reasignado = this.pedidoRepartidor.num_reasignado ? this.pedidoRepartidor.num_reasignado + 1 : 0;

            this.pedidoRepartidor.num_reasignado = _num_reasignado === 0 ? 1 : _num_reasignado;
            this.pedidoRepartidor.is_reasignado = true; // this.socketService.emit('repartidor-declina-pedido', this.pedidoRepartidor);
            // clear local pedido
            // console.log('clean from pedidoNoAceptadoReasingar');

            this.cleanLocal();
          }
        }
      }, {
        key: "darFormatoLocalPedidoRepartidorModel",
        value: function darFormatoLocalPedidoRepartidorModel(_pedido) {
          // console.log('dar formato pedido');
          var pedido = new src_app_modelos_pedido_repartidor_model__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorModel"]();

          if (!_pedido) {
            return;
          }

          if (_pedido === null || _pedido === void 0 ? void 0 : _pedido.conFormato) {
            pedido = _pedido;
          } else {
            if (!_pedido.datosItems) {
              pedido.idpedido = _pedido.idpedido;
              var subTotalesPedid = _pedido.json_datos_delivery.p_header.arrDatosDelivery.subTotales.length > 0 ? _pedido.json_datos_delivery.p_header.arrDatosDelivery.subTotales : _pedido.json_datos_delivery.p_subtotales; // pedido.datosItems = res[1].dataItems || res[1].datosItem;

              pedido.datosDelivery = _pedido.json_datos_delivery; // res[1].dataDelivery || res[1].datosDelivery;

              pedido.datosItems = _pedido.json_datos_delivery.p_body;
              pedido.datosDelivery = _pedido.json_datos_delivery.p_header.arrDatosDelivery;
              pedido.datosComercio = pedido.datosDelivery.establecimiento;
              pedido.datosCliente = pedido.datosDelivery.direccionEnvioSelected;
              pedido.datosSubtotales = subTotalesPedid;
              pedido.datosSubtotalesShow = pedido.datosDelivery.subTotales.length === 0 ? subTotalesPedid : pedido.datosDelivery.subTotales.length;
              pedido.conFormato = true;
            } else {
              pedido = _pedido;
            }
          } // coordenadas del comercio si esta en string lo pasa a decimal


          pedido.datosComercio.latitude = typeof pedido.datosComercio.latitude === 'string' ? parseFloat(pedido.datosComercio.latitude) : pedido.datosComercio.latitude;
          pedido.datosComercio.longitude = typeof pedido.datosComercio.longitude === 'string' ? parseFloat(pedido.datosComercio.longitude) : pedido.datosComercio.longitude;
          this.pedidoRepartidor = pedido; // this.setLocal();
        } // asignacion por barcode o por idpedido

      }, {
        key: "confirmarAsignacionReadBarCode",
        value: function confirmarAsignacionReadBarCode(idpedidoLector) {
          var _this13 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (observer) {
            var orden;
            var response = {};

            var _reparitdor = _this13.infoTokenService.getInfoUs().usuario;

            var _dataSendPedido = {
              idpedido: idpedidoLector
            }; // get pedido

            _this13.crudService.postFree(_dataSendPedido, 'comercio', 'get-pedido-by-id', true).subscribe(function (res) {
              orden = res.data[0]; // response = this.addPedidoInListPedidosPendientes(orden);

              observer.next(orden); // const _importePedido = parseFloat(orden.total_r);
              // let pedidos_repartidor = this.getPedidoPorAceptar();
              // orden.json_datos_delivery = JSON.parse(orden.json_datos_delivery);
              // if ( pedidos_repartidor ) {
              //   // buscar si el pedido ya fue agregado
              //   const isHayPedido = pedidos_repartidor.pedidos.filter(x => x.toString() === idpedidoLector.toString())[0];
              //   if ( isHayPedido ) {
              //     response = {
              //       elPedido: orden,
              //       pedidos_repartidor: pedidos_repartidor
              //     };
              //     observer.next(response);
              //     return;
              //   }
              //   pedidos_repartidor.pedidos.push(orden.idpedido);
              //   pedidos_repartidor.importe_acumula = parseFloat( pedidos_repartidor.importe_acumula ) + _importePedido;
              //   pedidos_repartidor.importe_pagar = parseFloat( pedidos_repartidor.importe_pagar ) + _importePedido;
              //   pedidos_repartidor.pedido_asignado_manual = orden.idpedido; // para reset a los demas repartidores
              //   pedidos_repartidor.idrepartidor = _reparitdor.idrepartidor;
              //   pedidos_repartidor.inSede = true; // no necesita coordenadas de la sede porque se supone que esta en la sede
              // } else {
              //   const _listPedido = [];
              //   _listPedido.push(orden.idpedido);
              //   pedidos_repartidor = {
              //     pedidos: _listPedido,
              //     importe_acumula: _importePedido.toFixed(2),
              //     importe_pagar: _importePedido.toFixed(2),
              //     idsede: orden.idsede,
              //     idrepartidor: _reparitdor.idrepartidor,
              //     pedido_asignado_manual: orden.idpedido,
              //     inSede: true
              //   };
              // }
              // // guardar pedido escaneado
              // this.setPedidoPorAceptar(pedidos_repartidor);
              // const _dataSend = {
              //   pedido : pedidos_repartidor
              // };
              // this.crudService.postFree(_dataSend, 'monitor', 'set-asignar-pedido-manual', true)
              // .subscribe( resp => {
              //   console.log(resp);
              //   // orden.nom_repartidor = _reparitdor.nombre;
              //   // orden.idrepartidor = _reparitdor.idrepartidor;
              //   // orden.telefono_repartidor = _reparitdor.telefono_repartidor;
              // });
              // // return orden;
              // response = {
              //   elPedido: orden,
              //   pedidos_repartidor: pedidos_repartidor
              // };
              // observer.next(response);
            });
          });
        }
      }, {
        key: "addPedidoInListPedidosPendientes",
        value: function addPedidoInListPedidosPendientes(orden) {
          var response = {};
          var _reparitdor = this.infoTokenService.getInfoUs().usuario;
          var idpedidoLector = orden.idpedido;

          var _importePedido = parseFloat(orden.total_r);

          var pedidos_repartidor = this.getPedidoPorAceptar();
          orden.json_datos_delivery = typeof orden.json_datos_delivery !== 'object' ? JSON.parse(orden.json_datos_delivery) : orden.json_datos_delivery;

          if (pedidos_repartidor) {
            // buscar si el pedido ya fue agregado
            var isHayPedido = pedidos_repartidor.pedidos.filter(function (x) {
              return x.toString() === idpedidoLector.toString();
            })[0];

            if (isHayPedido) {
              response = {
                elPedido: orden,
                pedidos_repartidor: pedidos_repartidor
              };
              return response;
            }

            pedidos_repartidor.pedidos.push(orden.idpedido);
            pedidos_repartidor.importe_acumula = parseFloat(pedidos_repartidor.importe_acumula) + _importePedido;
            pedidos_repartidor.importe_pagar = parseFloat(pedidos_repartidor.importe_pagar) + _importePedido;
            pedidos_repartidor.pedido_asignado_manual = orden.idpedido; // para reset a los demas repartidores

            pedidos_repartidor.idrepartidor = _reparitdor.idrepartidor;
            pedidos_repartidor.inSede = true; // no necesita coordenadas de la sede porque se supone que esta en la sede
          } else {
            var _listPedido = [];

            _listPedido.push(orden.idpedido);

            pedidos_repartidor = {
              pedidos: _listPedido,
              importe_acumula: _importePedido.toFixed(2),
              importe_pagar: _importePedido.toFixed(2),
              idsede: orden.idsede,
              idrepartidor: _reparitdor.idrepartidor,
              pedido_asignado_manual: orden.idpedido,
              inSede: true
            };
          } // guardar pedido escaneado


          this.setPedidoPorAceptar(pedidos_repartidor);
          var _dataSend = {
            pedido: pedidos_repartidor,
            repartidor: this._repartidor
          };
          this.crudService.postFree(_dataSend, 'monitor', 'set-asignar-pedido-manual', true).subscribe(function (resp) {
            console.log(resp); // orden.nom_repartidor = _reparitdor.nombre;
            // orden.idrepartidor = _reparitdor.idrepartidor;
            // orden.telefono_repartidor = _reparitdor.telefono_repartidor;
          }); // return orden;

          response = {
            elPedido: orden,
            pedidos_repartidor: pedidos_repartidor
          };
          return response; // observer.next(response);
        } // chequea si ya llego al comercio

      }, {
        key: "checkLLegoComercio",
        value: function checkLLegoComercio(listPedidos, geoPositionActual) {
          var _this14 = this;

          var geoPositionComercio = new src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_12__["GeoPositionModel"]();

          var _newTimeLinePedido = new src_app_modelos_time_line_pedido__WEBPACK_IMPORTED_MODULE_14__["TimeLinePedido"]();

          listPedidos.map(function (p) {
            var comercioPedido = p.json_datos_delivery.p_header.arrDatosDelivery.establecimiento;
            _newTimeLinePedido = p.time_line || _newTimeLinePedido;
            geoPositionComercio.latitude = typeof comercioPedido.latitude === 'string' ? parseFloat(comercioPedido.latitude) : comercioPedido.latitude;
            geoPositionComercio.longitude = typeof comercioPedido.longitude === 'string' ? parseFloat(comercioPedido.longitude) : comercioPedido.longitude;

            if (!geoPositionComercio.latitude) {
              return;
            }

            var _distanciaMt = _this14.calcDistanciaService.calcDistanciaEnMetros(geoPositionActual, geoPositionComercio); // 100mtr a la redonda
            // const isLLego = geoPositionComercio.latitude ? 
            //                 this.calcDistanciaService.calcDistancia(geoPositionComercio, geoPositionActual, 100)
            //                 : false


            var isLLego = _this14.calcDistanciaService.calcDistancia(geoPositionActual, geoPositionComercio, 100); // p.llego_comercio = isLLego;


            p.distanciaMtr = _distanciaMt; // _newTimeLinePedido.llego_al_comercio = isLLego;
            // _newTimeLinePedido.llego_al_comercio = !_newTimeLinePedido.llego_al_comercio ? isLLego : false;

            if (isLLego) {
              // envia mensaje
              // if (_newTimeLinePedido.paso === 0) {
              // _newTimeLinePedido.mensaje_enviado.llego_al_comercio = true;
              if (_newTimeLinePedido.llego_al_comercio !== true) {
                _newTimeLinePedido.llego_al_comercio = true;
                _newTimeLinePedido.paso = 1;
                p.msj_log += "paso 1  ".concat(new Date().toLocaleTimeString());

                _this14.sendMsjService.msjClienteTimeLine(p, _newTimeLinePedido);
              } // }

            } else {
              // si sale del comercio con el pedido camino al cliente
              if (_newTimeLinePedido.paso === 1) {
                // _newTimeLinePedido.mensaje_enviado.en_camino_al_cliente = true;
                _newTimeLinePedido.en_camino_al_cliente = true;
                _newTimeLinePedido.paso = 2;
                p.msj_log += "paso 2  ".concat(new Date().toLocaleTimeString());

                _this14.sendMsjService.msjClienteTimeLine(p, _newTimeLinePedido);
              }
            }

            p.time_line = _newTimeLinePedido;
          });
        }
      }]);

      return PedidoRepartidorService;
    }();

    PedidoRepartidorService.ɵfac = function PedidoRepartidorService_Factory(t) {
      return new (t || PedidoRepartidorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_crud_http_service__WEBPACK_IMPORTED_MODULE_2__["CrudHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_10__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_listen_status_service__WEBPACK_IMPORTED_MODULE_11__["ListenStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_calc_distancia_service__WEBPACK_IMPORTED_MODULE_13__["CalcDistanciaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_send_msj_service__WEBPACK_IMPORTED_MODULE_15__["SendMsjService"]));
    };

    PedidoRepartidorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PedidoRepartidorService,
      factory: PedidoRepartidorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoRepartidorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _crud_http_service__WEBPACK_IMPORTED_MODULE_2__["CrudHttpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _info_token_service__WEBPACK_IMPORTED_MODULE_10__["InfoTockenService"]
        }, {
          type: _listen_status_service__WEBPACK_IMPORTED_MODULE_11__["ListenStatusService"]
        }, {
          type: _socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"]
        }, {
          type: _calc_distancia_service__WEBPACK_IMPORTED_MODULE_13__["CalcDistanciaService"]
        }, {
          type: _send_msj_service__WEBPACK_IMPORTED_MODULE_15__["SendMsjService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/repartidor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/services/repartidor.service.ts ***!
    \*******************************************************/

  /*! exports provided: RepartidorService */

  /***/
  function srcAppSharedServicesRepartidorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepartidorService", function () {
      return RepartidorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _crud_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");
    /* harmony import */


    var src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modelos/geoposition.model */
    "./src/app/modelos/geoposition.model.ts");
    /* harmony import */


    var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/Observable */
    "./node_modules/rxjs/internal/Observable.js");
    /* harmony import */


    var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./socket.service */
    "./src/app/shared/services/socket.service.ts");
    /* harmony import */


    var _info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var _listen_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listen-status.service */
    "./src/app/shared/services/listen-status.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sse_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sse.service */
    "./src/app/shared/services/sse.service.ts");
    /* harmony import */


    var _pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pedido-repartidor.service */
    "./src/app/shared/services/pedido-repartidor.service.ts");

    var RepartidorService = /*#__PURE__*/function () {
      function RepartidorService(crudService, socketService, infoToken, listenService, router, pedidoRepartidorService, sseService) {
        _classCallCheck(this, RepartidorService);

        this.crudService = crudService;
        this.socketService = socketService;
        this.infoToken = infoToken;
        this.listenService = listenService;
        this.router = router;
        this.pedidoRepartidorService = pedidoRepartidorService;
        this.sseService = sseService;
        this.idSedeRepartidor = this.infoToken.getInfoUs().usuario.idsede_suscrito;
        this.idRepartidor = this.infoToken.getInfoUs().usuario.idrepartidor;
      } // guarda efectivo inicial


      _createClass(RepartidorService, [{
        key: "guardarEfectivo",
        value: function guardarEfectivo(importe) {
          var _online = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

          var _data = {
            idrepartidor: this.infoToken.getInfoUs().usuario.idrepartidor,
            efectivo: importe,
            online: _online
          };
          this.crudService.postFree(_data, 'repartidor', 'set-efectivo-mano', false).subscribe(function (res) {
            console.log('ya esta', res);
          }); // if (  _online === 1  ) {
          //   this.crudService.getAll('repartidor', 'get-view-event-new-pedido', false, false, true)
          //   .subscribe(res => {
          //     console.log('get-view-event-new-pedido', res);
          //   });
          // }
        } // listenPedidosNuevos() {
        //   const idRepartidor = this.infoToken.infoUsToken.usuario.idrepartidor;
        //   this.sseService
        //     .getServerSentEvent('repartidor', 'get-view-event-new-pedido', false, idRepartidor)
        //     .subscribe(data => console.log(data));
        // }

      }, {
        key: "guardarPositionActual",
        value: function guardarPositionActual(_pos) {
          var _data = {
            pos: _pos
          };
          this.crudService.postFree(_data, 'repartidor', 'set-position-now', true).subscribe(function (res) {});
        }
      }, {
        key: "guardarPasoVa",
        value: function guardarPasoVa(_paso_va) {
          var _data = {
            paso_va: _paso_va
          };
          console.log('set-paso-pedido-va', _paso_va);
          this.crudService.postFree(_data, 'repartidor', 'set-paso-pedido-va', true).subscribe(function (res) {
            console.log('.');
          });
        }
      }, {
        key: "guardarCamnioClave",
        value: function guardarCamnioClave(_data) {
          _data.idrepartidor = this.idRepartidor;
          this.crudService.postFree(_data, 'repartidor', 'set-cambio-pass-repartidor', true);
        } // repartidor propio pedidos asignados

      }, {
        key: "getMisPedidosPropiosAsignados",
        value: function getMisPedidosPropiosAsignados() {
          var _this15 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this15.crudService.getAll('repartidor', 'get-repartidor-propio-mis-pedidos', false, false, true).subscribe(function (res) {
              observer.next(res.data);
            });
          });
        } // emitir posicion actual (comercio / cliente)

      }, {
        key: "emitPositionNow",
        value: function emitPositionNow(_coordenadas) {
          var pedido = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var idsedeComercio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          var _a; // emitir a comercio


          var _idComercio = this.idSedeRepartidor ? this.idSedeRepartidor : this.pedidoRepartidorService.pedidoRepartidor ? this.pedidoRepartidorService.pedidoRepartidor.idsede : null;

          var _pedido = pedido ? pedido : this.pedidoRepartidorService.pedidoRepartidor;

          var _dataSend = {
            coordenadas: {
              latitude: _coordenadas.lat || _coordenadas.latitude,
              longitude: _coordenadas.lng || _coordenadas.longitude
            },
            idrepartidor: this.idRepartidor,
            idcliente: ((_a = _pedido === null || _pedido === void 0 ? void 0 : _pedido.datosCliente) === null || _a === void 0 ? void 0 : _a.idcliente) || null,
            idsede: idsedeComercio ? idsedeComercio : _idComercio,
            minuto: new Date().getMinutes() // para guadar position cada 2 minutos

          };
          console.log('repartidor-notifica-ubicacion', _dataSend);
          var geoposiionNow = new src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_2__["GeoPositionModel"]();
          geoposiionNow.latitude = _coordenadas.latitude;
          geoposiionNow.longitude = _coordenadas.longitude;
          this.listenService.setMyPosition(geoposiionNow);
          this.socketService.emit('repartidor-notifica-ubicacion', _dataSend);
        }
      }, {
        key: "cerrarSession",
        value: function cerrarSession() {
          this.guardarEfectivo(0, 0);
          this.socketService.closeConnection();
          localStorage.clear();
          this.router.navigate(['../']);
        }
      }]);

      return RepartidorService;
    }();

    RepartidorService.ɵfac = function RepartidorService_Factory(t) {
      return new (t || RepartidorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_9__["PedidoRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sse_service__WEBPACK_IMPORTED_MODULE_8__["SseService"]));
    };

    RepartidorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RepartidorService,
      factory: RepartidorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepartidorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"]
        }, {
          type: _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
        }, {
          type: _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]
        }, {
          type: _listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_9__["PedidoRepartidorService"]
        }, {
          type: _sse_service__WEBPACK_IMPORTED_MODULE_8__["SseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/send-msj.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/send-msj.service.ts ***!
    \*****************************************************/

  /*! exports provided: SendMsjService */

  /***/
  function srcAppSharedServicesSendMsjServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendMsjService", function () {
      return SendMsjService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _info_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./socket.service */
    "./src/app/shared/services/socket.service.ts");

    var SendMsjService = /*#__PURE__*/function () {
      function SendMsjService(socketService, infoToken) {
        _classCallCheck(this, SendMsjService);

        this.socketService = socketService;
        this.infoToken = infoToken;
      } // mensaje al cliente y actualiza timelime_en


      _createClass(SendMsjService, [{
        key: "msjClienteTimeLine",
        value: function msjClienteTimeLine(p, time_line_pedido) {
          var _a, _b;

          var listClienteNotificar = [];
          this.elRepartidor = this.infoToken.getInfoUs().usuario;
          var rowDatos = (_b = (_a = p === null || p === void 0 ? void 0 : p.json_datos_delivery) === null || _a === void 0 ? void 0 : _a.p_header) === null || _b === void 0 ? void 0 : _b.arrDatosDelivery;

          if (rowDatos) {
            var rowCliente = {
              nombre: rowDatos.nombre.split(' ')[0],
              telefono: rowDatos.telefono,
              establecimiento: rowDatos.establecimiento.nombre,
              idpedido: p.idpedido,
              repartidor_nom: this.elRepartidor.nombre.split(' ')[0],
              repartidor_telefono: this.elRepartidor.telefono,
              repartidor_id: this.elRepartidor.idrepartidor,
              time_line: time_line_pedido,
              tipo_msj: time_line_pedido.paso // paso mensaje

            };
            listClienteNotificar.push(rowCliente);
          }

          if (listClienteNotificar.length > 0) {
            this.socketService.emit('repartidor-notifica-cliente-time-line', listClienteNotificar);
          }
        }
      }]);

      return SendMsjService;
    }();

    SendMsjService.ɵfac = function SendMsjService_Factory(t) {
      return new (t || SendMsjService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_1__["InfoTockenService"]));
    };

    SendMsjService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SendMsjService,
      factory: SendMsjService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendMsjService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }, {
          type: _info_token_service__WEBPACK_IMPORTED_MODULE_1__["InfoTockenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/socket.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/socket.service.ts ***!
    \***************************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppSharedServicesSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/Observable */
    "./node_modules/rxjs/internal/Observable.js");
    /* harmony import */


    var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _config_config_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/config.const */
    "./src/app/shared/config/config.const.ts");
    /* harmony import */


    var src_app_modelos_item_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modelos/item.tipoconsumo.model */
    "./src/app/modelos/item.tipoconsumo.model.ts");
    /* harmony import */


    var _info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
    // import { MipedidoService } from './mipedido.service';


    var SocketService = /*#__PURE__*/function () {
      function SocketService(infoTockenService, router) {
        _classCallCheck(this, SocketService);

        this.infoTockenService = infoTockenService;
        this.router = router; // private item: ItemModel;

        this.urlSocket = _config_config_const__WEBPACK_IMPORTED_MODULE_3__["URL_SERVER_SOCKET"];
        this.isSocketOpen = false;
        this.isSocketOpenReconect = false; // listen is socket open

        this.isSocketOpenSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.isSocketOpen$ = this.isSocketOpenSource.asObservable();
        this.msjConexSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('Cargando datos ...');
        this.msjConex$ = this.msjConexSource.asObservable();
        this.resTipoConsumo = [];
        this.verificandoConexion = false;
        this.infoTockenService.converToJSON();
      }

      _createClass(SocketService, [{
        key: "connect",
        value: function connect() {
          var infoUser = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var opFrom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

          if (this.isSocketOpen) {
            this.infoTockenService.setSocketId(this.socket.id);
            return;
          } // para cuando se desconecta y conecta desde el celular
          // produccion
          // this.socket = io('/', {
          //   secure: true,
          //   rejectUnauthorized: false,
          //   forceNew: false
          // });


          var infToken = this.infoTockenService.infoUsToken || infoUser;
          var dataSocket = {
            // idorg: infToken.idorg,
            // idsede: infToken.idsede,
            idrepartidor: infToken.usuario.idrepartidor,
            // idusuario: infToken.idusuario,
            // idcliente: infToken.idcliente,
            // iscliente: infToken.isCliente,
            isFromApp: opFrom,
            isRepartidor: true,
            firts_socketid: infToken.socketId
          }; // console.log('dataSocket', dataSocket);
          // desarrollo

          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.urlSocket, {
            secure: true,
            rejectUnauthorized: false,
            // forceNew: true,
            query: dataSocket // forceNew: true

          });
          this.listenStatusSocket(); // escucha los estado del socket
          // this.socket.on('finishLoadDataInitial', () => {
          //   // setTimeout(() => {
          //     // this.isSocketOpen = true;
          //     // this.isSocketOpenSource.next(true);
          //     this.statusConexSocket(true, '');
          //     this.isSocketOpenReconect = true; // evita que cargen nuevamente las configuraciones basicas, solo carga carta
          //   // }, 1000);
          //   console.log('conected socket finishLoadDataInitial');
          // });
          // // this.socket.on('connect', (res: any) => {
          // //   this.statusConexSocket(true, 'socket event connect');
          // // });
          // this.socket.on('connect_failed', (res: any) => {
          //   console.log('itento fallido de conexion', res);
          //   this.statusConexSocket(false, 'connect_failed');
          // });
          // this.socket.on('connect_error', (res: any) => {
          //   console.log('error de conexion', res);
          //   this.statusConexSocket(false, 'connect_error');
          // });
          // this.socket.on('disconnect', (res: any) => {
          //   console.log('disconnect');
          //   this.statusConexSocket(false, 'disconnect');
          // });
          // this.onListenSocketDisconnet();
        }
      }, {
        key: "onGetCarta",
        value: function onGetCarta() {
          var _this16 = this;

          // if ( this.isSocketOpen ) { return new Observable(observer => {observer.next(null); }); }
          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this16.socket.on('getLaCarta', function (res) {
              // this.objLaCartaSocket = {
              //   'carta': <CartaModel[]>res[0].carta,
              //   'bodega': <SeccionModel[]>res[0].bodega
              // };
              observer.next(res);
            });
          });
        } // onGetCarta() {
        //   return this.listen('getLaCarta');
        // }

      }, {
        key: "onGetTipoConsumo",
        value: function onGetTipoConsumo() {
          var _this17 = this;

          // if ( this.isSocketOpen ) { return new Observable(observer => {observer.next(null); }); }
          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this17.socket.on('getTipoConsumo', function (res) {
              // this.resTipoConsumo = res;
              observer.next(res);
            });
          });
        } // onGetTipoConsumo() {
        //   return this.listen('getTipoConsumo');
        // }
        // verificar para eliminar

      }, {
        key: "getDataTipoConsumo",
        value: function getDataTipoConsumo() {
          var resTPC = [];
          this.resTipoConsumo.map(function (t) {
            var _objTpcAdd = new src_app_modelos_item_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_4__["ItemTipoConsumoModel"]();

            _objTpcAdd.descripcion = t.descripcion;
            _objTpcAdd.idtipo_consumo = t.idtipo_consumo;
            _objTpcAdd.titulo = t.titulo;
            resTPC.push(_objTpcAdd);
          });
          return resTPC;
        }
      }, {
        key: "onItemModificado",
        value: function onItemModificado() {
          var _this18 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this18.socket.on('itemModificado-pwa', function (res) {
              observer.next(res);
            });
          });
        } // onItemModificado() {
        //   return this.listen('observer');
        // }

      }, {
        key: "onNuevoItemAddInCarta",
        value: function onNuevoItemAddInCarta() {
          var _this19 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this19.socket.on('nuevoItemAddInCarta', function (res) {
              observer.next(res);
            });
          });
        } // onNuevoItemAddInCarta() {
        //   return this.listen('nuevoItemAddInCarta');
        // }
        // cuando se recupera el stock de pedido que caduco el tiempo

      }, {
        key: "onItemResetCant",
        value: function onItemResetCant() {
          var _this20 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this20.socket.on('itemResetCant-pwa', function (res) {
              observer.next(res);
            });
          });
        } // onItemResetCant() {
        //   return this.listen('itemResetCant');
        // }
        // load reglas de la carta y subtotales

      }, {
        key: "onReglasCarta",
        value: function onReglasCarta() {
          var _this21 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this21.socket.on('getReglasCarta', function (res) {
              observer.next(res);
            });
          });
        } // onReglasCarta() {
        //   return this.listen('getReglasCarta');
        // }
        // datos de la sede, impresoras
        // load reglas de la carta y subtotales

      }, {
        key: "onGetDatosSede",
        value: function onGetDatosSede() {
          var _this22 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this22.socket.on('getDataSede', function (res) {
              observer.next(res);
            });
          });
        } // respuesta de hacer un nuevo pedido

      }, {
        key: "onGetNuevoPedido",
        value: function onGetNuevoPedido() {
          var _this23 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this23.socket.on('nuevoPedido', function (res) {
              observer.next(res);
            });
          });
        } // cuando el cliente paga el pedido

      }, {
        key: "onPedidoPagado",
        value: function onPedidoPagado() {
          var _this24 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this24.socket.on('pedido-pagado-cliente', function (res) {
              observer.next(res);
            });
          });
        }
      }, {
        key: "onDeliveryPedidoChangeStatus",
        value: function onDeliveryPedidoChangeStatus() {
          var _this25 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this25.socket.on('delivery-pedido-estado', function (res) {
              observer.next(res);
            });
          });
        } // se lanza despues de que el cliente califica al repartidor

      }, {
        key: "onDeliveryPedidoFin",
        value: function onDeliveryPedidoFin() {
          var _this26 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this26.socket.on('repartidor-notifica-fin-pedido', function (res) {
              observer.next(res);
            });
          });
        } // onGetDatosSede() {
        //   return this.listen('getDataSede');
        // }
        // onListenSocketDisconnet() {
        //   return new Observable(observer => {
        //     this.socket.on('disconnect', (res: any) => {
        //       this.isSocketOpen = false;
        //       this.isSocketOpenSource.next(false);
        //     });
        //   });
        // }

      }, {
        key: "onRepartidorNuevoPedido",
        value: function onRepartidorNuevoPedido() {
          var _this27 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this27.socket.on('repartidor-nuevo-pedido', function (res) {
              observer.next(res);
            });
          });
        } // repartidor pripio

      }, {
        key: "onRepartidorPropioNuevoPedidoAsignado",
        value: function onRepartidorPropioNuevoPedidoAsignado() {
          var _this28 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this28.socket.on('repartidor-propio-nuevo-pedido-asignado', function (res) {
              observer.next(res);
            });
          });
        } //// cuando se termina el tiempo de aceptar el servidor quita pedido

      }, {
        key: "onRepartidorServerQuitaPedido",
        value: function onRepartidorServerQuitaPedido() {
          var _this29 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this29.socket.on('repartidor-notifica-server-quita-pedido', function (res) {
              observer.next(res);
            });
          });
        } //// esto se ejecuta cuando se conecta

      }, {
        key: "onRepartidorGetPedidoPendienteAceptar",
        value: function onRepartidorGetPedidoPendienteAceptar() {
          var _this30 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this30.socket.on('repartidor-get-pedido-pendiente-aceptar', function (res) {
              observer.next(res);
            });
          });
        } // nuevo pedido asignado desde el comercio

      }, {
        key: "onPedidoAsignadoFromComercio",
        value: function onPedidoAsignadoFromComercio() {
          var _this31 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this31.socket.on('set-repartidor-pedido-asigna-comercio', function (res) {
              observer.next(res);
            });
          });
        }
      }, {
        key: "emit",
        value: function emit(evento, data) {
          // verificar estado del socket
          this.socket.emit(evento, data);
        }
      }, {
        key: "listen",
        value: function listen(evento) {
          var _this32 = this;

          return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this32.socket.on(evento, function (res) {
              observer.next(res);
            });
          });
        }
      }, {
        key: "closeConnection",
        value: function closeConnection() {
          try {
            this.socket.disconnect();
          } catch (error) {} // this.isSocketOpen = false;
          // this.isSocketOpenSource.next(false);


          this.statusConexSocket(false, 'disconnect');
        }
      }, {
        key: "listenStatusSocket",
        value: function listenStatusSocket() {
          var _this33 = this;

          this.socket.on('finishLoadDataInitial', function () {
            _this33.statusConexSocket(true, '');

            _this33.isSocketOpenReconect = true; // evita que cargen nuevamente las configuraciones basicas, solo carga carta

            console.log('conected socket finishLoadDataInitial');
          }); // estados del navigator

          window.addEventListener('focus', function (event) {
            _this33.verifyConexionSocket();
          });
          window.addEventListener('online', function () {
            _this33.showStatusConexNavigator(true, 'navigator_online');
          });
          window.addEventListener('offline', function () {
            _this33.showStatusConexNavigator(false, 'navigator_offline');
          }); // estado del socket

          this.socket.on('connect', function () {
            console.log('socket connect');

            _this33.statusConexSocket(true, 'connect');

            _this33.infoTockenService.setSocketId(_this33.socket.id); // verifica el tiempo de session


            if (!_this33.infoTockenService.verificarContunuarSession()) {
              _this33.closeConnection();

              _this33.cerrarSessionBeforeTimeSession();

              return;
            }
          });
          this.socket.on('connect_failed', function (res) {
            console.log('itento fallido de conexion', res);

            _this33.statusConexSocket(false, 'connect_failed');
          });
          this.socket.on('connect_error', function (res) {
            console.log('error de conexion', res);

            _this33.statusConexSocket(false, 'connect_error');
          });
          this.socket.on('disconnect', function (res) {
            console.log('disconnect');

            _this33.statusConexSocket(false, 'disconnect');
          }); // escucha la verificacion de conexion

          this.socket.on('verificar-conexion', function (res) {
            // verifica el tiempo de session
            if (!_this33.infoTockenService.verificarContunuarSession()) {
              _this33.closeConnection();

              _this33.cerrarSessionBeforeTimeSession();

              return;
            }

            if (res === true) {
              console.log('VERIFY CONECTION => OK');
              _this33.verificandoConexion = false;
              return;
            } // no hay conexion -- en pruebas ver comportamiento


            console.log('VERIFY CONECTION => FALSE');

            _this33.closeConnection();

            _this33.statusConexSocket(false, 'disconnect');

            _this33.connect();

            _this33.verificandoConexion = false;
          });
        }
      }, {
        key: "statusConexSocket",
        value: function statusConexSocket(isConncet, evento) {
          this.isSocketOpen = isConncet;
          this.isSocketOpenSource.next(isConncet);
          var msj = 'Conectando datos ...';

          switch (evento) {
            case 'conected':
              // conectando
              msj = 'Conectando datos ...';
              break;

            case 'connect_failed':
              // conectando
              msj = 'Conectando datos ..';
              break;

            case 'connect_error':
              // conectando
              msj = 'Conectando datos .';
              break;

            case 'disconnect':
              // conectando
              msj = 'Restableciendo conexion ...';
              break;

            case 'navigator_offline':
              // conectando
              msj = 'Conexion cerrada -b ...';
              break;

            case 'navigator_online':
              // conectando
              msj = 'Conectando datos -b ...';
              break;
          }

          this.msjConexSource.next(msj);
        }
      }, {
        key: "showStatusConexNavigator",
        value: function showStatusConexNavigator(online, evento) {
          this.statusConexSocket(online, evento); // this.isSocketOpen = online;
          // this.isSocketOpenSource.next(online);

          if (online) {
            console.log('navegador conectado');
          } else {
            console.log('!!! navegador desconectado !!'); // this.verificandoConexion = false;
          }
        } // verifica el estado del socket, si esta cerrado intenta abrirlo

      }, {
        key: "verifyConexionSocket",
        value: function verifyConexionSocket() {
          if (this.verificandoConexion) {
            return;
          }

          this.verificandoConexion = true;
          this.emit('verificar-conexion', this.socket.id);
        } // cierra session despues de que se comprueba que el tiempo de incio se de session supero lo establecido

      }, {
        key: "cerrarSessionBeforeTimeSession",
        value: function cerrarSessionBeforeTimeSession() {
          var reload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.router.navigate(['../']);
        }
      }]);

      return SocketService;
    }();

    SocketService.ɵfac = function SocketService_Factory(t) {
      return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/sse.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/services/sse.service.ts ***!
    \************************************************/

  /*! exports provided: SseService */

  /***/
  function srcAppSharedServicesSseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SseService", function () {
      return SseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _config_config_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config/config.const */
    "./src/app/shared/config/config.const.ts");
    /* harmony import */


    var _crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");

    var SseService = /*#__PURE__*/function () {
      function SseService(_zone, curdService) {
        _classCallCheck(this, SseService);

        this._zone = _zone;
        this.curdService = curdService;
        this.urlService = _config_config_const__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"];
      }

      _createClass(SseService, [{
        key: "getServerSentEvent",
        value: function getServerSentEvent(controller, evento) {
          var _this34 = this;

          var conToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            console.log('servicio sse');

            var eventSource = _this34.getEventSource(controller, evento, conToken, id);

            eventSource.onmessage = function (event) {
              _this34._zone.run(function () {
                observer.next(event.data);
              });
            };

            eventSource.onerror = function (error) {
              _this34._zone.run(function () {
                observer.error(error);
              });
            };
          });
        }
      }, {
        key: "getEventSource",
        value: function getEventSource(controller, evento) {
          var conToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var url = "".concat(this.urlService, "/").concat(controller, "/").concat(evento, "?id=").concat(id);
          console.log('url', url); // const header = conToken ? this.curdService.getHeaderHttpClientForm() : this.curdService.getHeaderHttpClientFormNoToken();

          return new EventSource(url);
        }
      }]);

      return SseService;
    }();

    SseService.ɵfac = function SseService_Factory(t) {
      return new (t || SseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]));
    };

    SseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SseService,
      factory: SseService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/timer-limit.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/timer-limit.service.ts ***!
    \********************************************************/

  /*! exports provided: TimerLimitService */

  /***/
  function srcAppSharedServicesTimerLimitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerLimitService", function () {
      return TimerLimitService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);

    var TimerLimitService = /*#__PURE__*/function () {
      function TimerLimitService() {
        _classCallCheck(this, TimerLimitService);

        this.countdownTimerRef = null;
        this.init = 0;
        this.maxTime = 60; // 1min defult

        this.valPorcentaje = 0;
        this.isPlayTimer = false;
        this.countTimer = 0; // cuenta el tiempo en segundo
        // private dateNow = new Date();

        this.countdownSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.countdown$ = this.countdownSource.asObservable();
        this.countTimeSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.countTime$ = this.countTimeSource.asObservable();
        this.isTimeLimitSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isTimeLimitComplet$ = this.isTimeLimitSource.asObservable();
        this.isPorgressVisibleSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isPorgressVisible$ = this.isPorgressVisibleSource.asObservable();
      }

      _createClass(TimerLimitService, [{
        key: "destroy",
        value: function destroy() {
          this.clearTimeout();
        }
      }, {
        key: "playCountTimerLimit",
        value: function playCountTimerLimit() {
          // if ( this.infoToken.isDelivery() ) { return; } // cuando es delivery no cuenta tiempo
          if (this.isPlayTimer) {
            return;
          }

          this.isPlayTimer = true;
          this.initCount();
        }
      }, {
        key: "resetCountTimerLimit",
        value: function resetCountTimerLimit() {
          // if ( this.infoToken.isDelivery() ) { return; } // cuando es delivery no cuenta tiempo
          if (localStorage.getItem('sys::tcount')) {
            this.isPlayTimer = true;
            this.initCount();
          } else {
            this.stopCountTimerLimit();
          }
        }
      }, {
        key: "initCount",
        value: function initCount() {
          // if ( this.infoToken.isDelivery() ) { return; } // cuando es delivery no cuenta tiempo
          this.valPorcentaje = 0;
          this.init = localStorage.getItem('sys::tcount') ? parseInt(localStorage.getItem('sys::tcount'), 0) : 0;
          this.isTimeLimitSource.next(false);
          this.isPorgressVisibleSource.next(true); // restar 60 - 1

          this.countTimer = this.maxTime - this.setTimeDate();
          this.progressCount();
        }
      }, {
        key: "progressCount",
        value: function progressCount() {
          var _this35 = this;

          var lastValPorcentaje = 0;

          if (!this.isPlayTimer) {
            return;
          }

          this.countdownTimerRef = setTimeout(function () {
            _this35.init = _this35.setTimeDate();
            _this35.countTimer--;
            _this35.valPorcentaje = Math.round(_this35.init / _this35.maxTime * 100); // guardamos en el

            localStorage.setItem('sys::tcount', _this35.init.toString());

            if (_this35.init > _this35.maxTime) {
              _this35.init = _this35.maxTime;
              _this35.valPorcentaje = 100;

              _this35.countdownSource.next(_this35.valPorcentaje);

              _this35.isTimeLimitSource.next(true);

              _this35.stopCountTimerLimit();
            } else {
              // console.log('timer limit', this.valPorcentaje);
              // para que no salga la alerta de incio solo una vez
              if (lastValPorcentaje !== _this35.valPorcentaje) {
                _this35.countdownSource.next(_this35.valPorcentaje);
              }

              _this35.progressCount();
            }

            _this35.countTimeSource.next(_this35.countTimer);

            lastValPorcentaje = _this35.valPorcentaje;
          }, 1000);
        }
      }, {
        key: "setTimeDate",
        value: function setTimeDate() {
          var ms_new = new Date().getTime();
          var timeAfter = localStorage.getItem('sys::tnum') ? parseInt(localStorage.getItem('sys::tnum'), 0) : ms_new;
          var ms = ms_new - timeAfter;
          var sec = Math.floor(ms / 1000);
          localStorage.setItem('sys::tnum', timeAfter.toString());
          return sec;
        }
      }, {
        key: "stopCountTimerLimit",
        value: function stopCountTimerLimit() {
          this.isPlayTimer = false;
          this.init = 0;
          this.valPorcentaje = 0;
          this.countTimer = 0;
          localStorage.removeItem('sys::tcount');
          localStorage.removeItem('sys::tnum');
          this.clearTimeout();
          this.isPorgressVisibleSource.next(false);
          this.isTimeLimitSource.next(false);
        }
      }, {
        key: "clearTimeout",
        value: function (_clearTimeout) {
          function clearTimeout() {
            return _clearTimeout.apply(this, arguments);
          }

          clearTimeout.toString = function () {
            return _clearTimeout.toString();
          };

          return clearTimeout;
        }(function () {
          if (this.countdownTimerRef) {
            clearTimeout(this.countdownTimerRef);
            this.countdownTimerRef = null;
          }
        })
      }]);

      return TimerLimitService;
    }();

    TimerLimitService.ɵfac = function TimerLimitService_Factory(t) {
      return new (t || TimerLimitService)();
    };

    TimerLimitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TimerLimitService,
      factory: TimerLimitService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerLimitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\capacitor\pwa-app-pedido-repartidor-anterior\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map