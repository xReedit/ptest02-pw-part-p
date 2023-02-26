(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");





const routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    // {
    // path: '',
    // component: LayoutMainComponent,
    // children: [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | pages-inicio-inicio-module */[__webpack_require__.e("default~pages-inicio-inicio-module~pages-inicio-repartidor-inicio-repartidor-module~pages-repartidor~52912ff3"), __webpack_require__.e("default~pages-inicio-inicio-module~pages-repartidor-repartidor-module"), __webpack_require__.e("pages-inicio-inicio-module")]).then(__webpack_require__.bind(null, /*! ./pages/inicio/inicio.module */ "./src/app/pages/inicio/inicio.module.ts")).then(m => m.InicioModule),
        data: { 'tituloModulo': 'Inicio' }
    },
    {
        path: 'main-inicio',
        loadChildren: () => Promise.all(/*! import() | pages-inicio-repartidor-inicio-repartidor-module */[__webpack_require__.e("default~pages-inicio-inicio-module~pages-inicio-repartidor-inicio-repartidor-module~pages-repartidor~52912ff3"), __webpack_require__.e("common"), __webpack_require__.e("pages-inicio-repartidor-inicio-repartidor-module")]).then(__webpack_require__.bind(null, /*! ./pages/inicio-repartidor/inicio-repartidor.module */ "./src/app/pages/inicio-repartidor/inicio-repartidor.module.ts")).then(m => m.InicioRepartidorModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: { 'tituloModulo': 'Inicio Repartidor' }
    },
    {
        path: 'main',
        loadChildren: () => Promise.all(/*! import() | pages-repartidor-repartidor-module */[__webpack_require__.e("default~pages-inicio-inicio-module~pages-inicio-repartidor-inicio-repartidor-module~pages-repartidor~52912ff3"), __webpack_require__.e("default~pages-inicio-inicio-module~pages-repartidor-repartidor-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-repartidor-repartidor-module")]).then(__webpack_require__.bind(null, /*! ./pages/repartidor/repartidor.module */ "./src/app/pages/repartidor/repartidor.module.ts")).then(m => m.RepartidorModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: { 'tituloModulo': 'Repartidor' }
    }
    // ,
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
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: true,
                scrollPositionRestoration: 'enabled',
                // anchorScrolling: 'enabled',
                paramsInheritanceStrategy: 'always'
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
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
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth0.service */ "./src/app/shared/services/auth0.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





class AppComponent {
    // title = 'pwa-app-repartidor';
    constructor(auth) {
        this.auth = auth;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_1__["Auth0Service"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_1__["Auth0Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_error_global_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/error.global.handler */ "./src/app/shared/services/error.global.handler.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _shared_services_error_global_handler__WEBPACK_IMPORTED_MODULE_9__["GlobalErrorHandler"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            // ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        // ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    // ReactiveFormsModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
                ],
                providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _shared_services_error_global_handler__WEBPACK_IMPORTED_MODULE_9__["GlobalErrorHandler"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var _layout_main_layout_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-main/layout-main.component */ "./src/app/core/layout-main/layout-main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress-time-limit/progress-time-limit.component */ "./src/app/core/progress-time-limit/progress-time-limit.component.ts");
/* harmony import */ var _shared_services_http_config_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/http-config-interceptor.service */ "./src/app/shared/services/http-config-interceptor.service.ts");
/* harmony import */ var _tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tool-bar-repartidor/tool-bar-repartidor.component */ "./src/app/core/tool-bar-repartidor/tool-bar-repartidor.component.ts");











class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        _shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _shared_services_http_config_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["HttpConfigInterceptorService"], multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
        ],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_layout_main_layout_main_component__WEBPACK_IMPORTED_MODULE_4__["LayoutMainComponent"],
        // ToolBarComponent,
        _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_7__["ProgressTimeLimitComponent"],
        _tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_9__["ToolBarRepartidorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]], exports: [_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        // ToolBarComponent,
        _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_7__["ProgressTimeLimitComponent"],
        _tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_9__["ToolBarRepartidorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _layout_main_layout_main_component__WEBPACK_IMPORTED_MODULE_4__["LayoutMainComponent"],
                    // ToolBarComponent,
                    _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_7__["ProgressTimeLimitComponent"],
                    _tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_9__["ToolBarRepartidorComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
                ],
                exports: [
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    // ToolBarComponent,
                    _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_7__["ProgressTimeLimitComponent"],
                    _tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_9__["ToolBarRepartidorComponent"]
                ],
                providers: [
                    _shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _shared_services_http_config_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["HttpConfigInterceptorService"], multi: true }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/layout-main/layout-main.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/layout-main/layout-main.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutMainComponent", function() { return LayoutMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class LayoutMainComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutMainComponent.ɵfac = function LayoutMainComponent_Factory(t) { return new (t || LayoutMainComponent)(); };
LayoutMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutMainComponent, selectors: [["app-layout-main"]], decls: 1, vars: 0, template: function LayoutMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0LW1haW4vbGF5b3V0LW1haW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout-main',
                templateUrl: './layout-main.component.html',
                styleUrls: ['./layout-main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/material/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/material/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/fesm2015/tabs.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm2015/stepper.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/fesm2015/radio.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");


// material


















// import { MatTooltipModule } from '@angular/material/tooltip';
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]
            // MatTooltipModule
        ],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]
        // MatTooltipModule
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]
        // MatTooltipModule
    ], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]
        // MatTooltipModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]
                    // MatTooltipModule
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]
                    // MatTooltipModule
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/progress-time-limit/progress-time-limit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/progress-time-limit/progress-time-limit.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProgressTimeLimitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressTimeLimitComponent", function() { return ProgressTimeLimitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/timer-limit.service */ "./src/app/shared/services/timer-limit.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/fesm2015/progress-bar.js");






function ProgressTimeLimitComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r183.timerLimitService.countdown$));
} }
class ProgressTimeLimitComponent {
    constructor(timerLimitService) {
        this.timerLimitService = timerLimitService;
    }
    ngOnInit() {
    }
}
ProgressTimeLimitComponent.ɵfac = function ProgressTimeLimitComponent_Factory(t) { return new (t || ProgressTimeLimitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_1__["TimerLimitService"])); };
ProgressTimeLimitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressTimeLimitComponent, selectors: [["app-progress-time-limit"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["mode", "determinate", "color", "accent", 1, "animated", "fadeInDown", 3, "value"]], template: function ProgressTimeLimitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressTimeLimitComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.timerLimitService.isPorgressVisible$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZ3Jlc3MtdGltZS1saW1pdC9wcm9ncmVzcy10aW1lLWxpbWl0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressTimeLimitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress-time-limit',
                templateUrl: './progress-time-limit.component.html',
                styleUrls: ['./progress-time-limit.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_1__["TimerLimitService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/tool-bar-repartidor/tool-bar-repartidor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/tool-bar-repartidor/tool-bar-repartidor.component.ts ***!
  \***************************************************************************/
/*! exports provided: ToolBarRepartidorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarRepartidorComponent", function() { return ToolBarRepartidorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/repartidor.service */ "./src/app/shared/services/repartidor.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/fesm2015/slide-toggle.js");

// import { MatDialogConfig, MatDialog } from '@angular/material/dialog';







function ToolBarRepartidorComponent_mat_slide_toggle_9_Template(rf, ctx) { if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-slide-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ToolBarRepartidorComponent_mat_slide_toggle_9_Template_mat_slide_toggle_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r186); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r185.repartidorOnLine($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r184.isTogleActive);
} }
// import { SocketService } from 'src/app/shared/services/socket.service';
class ToolBarRepartidorComponent {
    constructor(infoTokenService, repartidorService
    // private socketService: SocketService
    ) {
        this.infoTokenService = infoTokenService;
        this.repartidorService = repartidorService;
        this.changeTogle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.openMenuLateral = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.isTogleActive = false;
        this.isRepartidorPropio = false;
        this.estadoOnline = 'En linea';
        this.nomRepatidor = '';
    }
    ngOnInit() {
        this.isTogleActive = this.infoTokenService.infoUsToken.isOnline;
        this.isRepartidorPropio = this.infoTokenService.infoUsToken.usuario.idsede_suscrito;
        this.estadoOnline = this.isRepartidorPropio ? 'En linea' : this.isTogleActive ? 'En linea' : 'Fuera de linea';
        // console.log(this.infoTokenService.infoUsToken.usuario);
        this.nomRepatidor = this.infoTokenService.infoUsToken.usuario.nombre + ' ' + this.infoTokenService.infoUsToken.usuario.apellido;
        // this.changeTogle.emit(this.isTogleActive);
        // if ( this.isTogleActive ) {
        //   this.socketService.connect();
        // }
        if (this.isRepartidorPropio) {
            this.infoTokenService.setisOnline(this.isTogleActive);
        }
    }
    repartidorOnLine($event) {
        this.isTogleActive = $event.checked;
        // this.infoTokenService.setisOnline(this.isTogleActive);
        // this.changeTogle.emit(this.isTogleActive);
        // this.estadoOnline = 'En linea';
        if (!this.isTogleActive) {
            this.estadoOnline = 'Fuera de linea';
            this.repartidorService.guardarEfectivo(0, 0);
        }
        else {
            // this.isTogleActive = $event.checked;
            this.infoTokenService.setisOnline(this.isTogleActive);
            this.changeTogle.emit(this.isTogleActive);
            this.estadoOnline = 'En linea';
        }
    }
    abrirMenuLateral() {
        // console.log('this.openMenuLateral', true);
        this.openMenuLateral.emit(true);
    }
}
ToolBarRepartidorComponent.ɵfac = function ToolBarRepartidorComponent_Factory(t) { return new (t || ToolBarRepartidorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_1__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_2__["RepartidorService"])); };
ToolBarRepartidorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolBarRepartidorComponent, selectors: [["app-tool-bar-repartidor"]], outputs: { changeTogle: "changeTogle", openMenuLateral: "openMenuLateral" }, decls: 10, vars: 5, consts: [[1, "header-app", "p-3", "d-flex", "justify-content-between"], [1, "fa", "fa-bars", "pr-2", 3, "click"], [1, "fs-14"], [1, "d-flex", "align-items-center"], [1, "fs-12", "pr-2"], [3, "checked", "change", 4, "ngIf"], [3, "checked", "change"]], template: function ToolBarRepartidorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolBarRepartidorComponent_Template_i_click_2_listener() { return ctx.abrirMenuLateral(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.nomRepatidor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estadoOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRepartidorPropio);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdG9vbC1iYXItcmVwYXJ0aWRvci90b29sLWJhci1yZXBhcnRpZG9yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolBarRepartidorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tool-bar-repartidor',
                templateUrl: './tool-bar-repartidor.component.html',
                styleUrls: ['./tool-bar-repartidor.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_1__["InfoTockenService"] }, { type: src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_2__["RepartidorService"] }]; }, { changeTogle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openMenuLateral: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/modelos/estado.pedido.model.ts":
/*!************************************************!*\
  !*** ./src/app/modelos/estado.pedido.model.ts ***!
  \************************************************/
/*! exports provided: EstadoPedidoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoPedidoModel", function() { return EstadoPedidoModel; });
class EstadoPedidoModel {
}


/***/ }),

/***/ "./src/app/modelos/geoposition.model.ts":
/*!**********************************************!*\
  !*** ./src/app/modelos/geoposition.model.ts ***!
  \**********************************************/
/*! exports provided: GeoPositionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoPositionModel", function() { return GeoPositionModel; });
class GeoPositionModel {
}


/***/ }),

/***/ "./src/app/modelos/item.model.ts":
/*!***************************************!*\
  !*** ./src/app/modelos/item.model.ts ***!
  \***************************************/
/*! exports provided: ItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModel", function() { return ItemModel; });
class ItemModel {
    constructor() {
        this.precio_total = 0; // preciounitario * cantidad
        this.cantidad_seleccionada_x_tpc = 0; // cantidad seleccionada por tipo cosnumo
        this.cantidad_descontado = 0; // cantidad que se decuenta por reglas de carta
        this.itemtiposconsumo = []; // para la vista -> listItemsPedido
        this.subitems_selected = []; // subitems seleccionados
        this.subitems_view = []; // subitems vista y guardar pedido detalle
    }
}


/***/ }),

/***/ "./src/app/modelos/item.tipoconsumo.model.ts":
/*!***************************************************!*\
  !*** ./src/app/modelos/item.tipoconsumo.model.ts ***!
  \***************************************************/
/*! exports provided: ItemTipoConsumoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTipoConsumoModel", function() { return ItemTipoConsumoModel; });
class ItemTipoConsumoModel {
}


/***/ }),

/***/ "./src/app/modelos/metodo.pago.model.ts":
/*!**********************************************!*\
  !*** ./src/app/modelos/metodo.pago.model.ts ***!
  \**********************************************/
/*! exports provided: MetodoPagoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoPagoModel", function() { return MetodoPagoModel; });
class MetodoPagoModel {
}


/***/ }),

/***/ "./src/app/modelos/pedido.model.ts":
/*!*****************************************!*\
  !*** ./src/app/modelos/pedido.model.ts ***!
  \*****************************************/
/*! exports provided: PedidoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoModel", function() { return PedidoModel; });
class PedidoModel {
    constructor() {
        this.tipoconsumo = [];
    }
}


/***/ }),

/***/ "./src/app/modelos/pedido.repartidor.model.ts":
/*!****************************************************!*\
  !*** ./src/app/modelos/pedido.repartidor.model.ts ***!
  \****************************************************/
/*! exports provided: PedidoRepartidorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoRepartidorModel", function() { return PedidoRepartidorModel; });
class PedidoRepartidorModel {
}


/***/ }),

/***/ "./src/app/modelos/seccion.model.ts":
/*!******************************************!*\
  !*** ./src/app/modelos/seccion.model.ts ***!
  \******************************************/
/*! exports provided: SeccionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionModel", function() { return SeccionModel; });
class SeccionModel {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ "./src/app/modelos/time.line.pedido.ts":
/*!*********************************************!*\
  !*** ./src/app/modelos/time.line.pedido.ts ***!
  \*********************************************/
/*! exports provided: TimeLinePedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeLinePedido", function() { return TimeLinePedido; });
class TimeLinePedido {
}


/***/ }),

/***/ "./src/app/modelos/tipoconsumo.model.ts":
/*!**********************************************!*\
  !*** ./src/app/modelos/tipoconsumo.model.ts ***!
  \**********************************************/
/*! exports provided: TipoConsumoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoConsumoModel", function() { return TipoConsumoModel; });
class TipoConsumoModel {
    constructor() {
        this.secciones = [];
    }
}


/***/ }),

/***/ "./src/app/modelos/usuario.token.model.ts":
/*!************************************************!*\
  !*** ./src/app/modelos/usuario.token.model.ts ***!
  \************************************************/
/*! exports provided: UsuarioTokenModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioTokenModel", function() { return UsuarioTokenModel; });
class UsuarioTokenModel {
}


/***/ }),

/***/ "./src/app/shared/config/config.const.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/config/config.const.ts ***!
  \***********************************************/
/*! exports provided: IS_NATIVE, URL_SERVER, URL_SERVER_SOCKET, URL_IMG_CARTA, VAPID_PUBLIC, URL_CONSULTA_RUC_DNI, TOKEN_CONSULTA, TOKEN_SMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_NATIVE", function() { return IS_NATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVER", function() { return URL_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVER_SOCKET", function() { return URL_SERVER_SOCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_IMG_CARTA", function() { return URL_IMG_CARTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAPID_PUBLIC", function() { return VAPID_PUBLIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_CONSULTA_RUC_DNI", function() { return URL_CONSULTA_RUC_DNI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_CONSULTA", function() { return TOKEN_CONSULTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_SMS", function() { return TOKEN_SMS; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");

const IS_NATIVE = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Capacitor"].getPlatform() !== 'web';
// // pruebas
// export const URL_SERVER = 'http://192.168.1.39:5819/v3/'; // desarrollo
// export const URL_SERVER_SOCKET = 'http://192.168.1.39:5819'; // desarrollo
// export const URL_IMG_CARTA = 'http://192.168.1.65/restobar/file/';
// export const VAPID_PUBLIC = 'BC7ietauZE99Hx9HkPyuGVr8jaYETyEJgH-gLaYIsbORYobppt9dX49_K_wubDqphu1afi7XrM6x1zAp4kJh_wU';
// export const URL_CONSULTA_RUC_DNI = 'http://apifacturalo_a.test:8080/api/services/'; // consulta dni o ruc
// produccion
const URL_SERVER = 'https://app.restobar.papaya.com.pe/api.pwa/v3'; // produccion
const URL_SERVER_SOCKET = 'https://app.restobar.papaya.com.pe/'; // produccion
const URL_IMG_CARTA = 'https://restobar.papaya.com.pe/file/';
const VAPID_PUBLIC = 'BOiwO8PftVFo8MrQfp3oAv4KbVtFdZAQojGKgzyxMCPgiNhg8PySbOSlkxDqd3iKA4J1GhzwFiCIGKmXRiKZM_0';
// export const VAPID_PUBLIC = 'BNMTnTvmBqg66i4-5I8SKSqb3VK1lEc-bmjB3bAWnIQ1RiZRwB1PpNIGzeM8Y75NeUYWXhlzjyVrEppOJuyk-1Y';
// export const VAPID_PRIVATE = 'pBhfgP_TXkhMFVvwCD08GEROyvdpUe7daBgMXeySWFw';
const URL_CONSULTA_RUC_DNI = 'https://apifac.papaya.com.pe/api/services/'; // consulta dni o ruc
const TOKEN_CONSULTA = 'tLKbDncvyKIPcgdVAGqt7rmy7W9mU9cnbawpZdc7JJv7l6h9cU'; // token de prueba
const TOKEN_SMS = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGFwYXlhLXNtcyIsImlhdCI6MTAwMDIwMDAzMDAwfQ.bKnTHEEGW_SustFir-40ZAYcHtfIo7Gyjq7c2onsAj0'; // token de prueba
// export const URL_SERVER_SOCKET = '/'; // produccion


/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");

// import { Observable } from 'rxjs';



// import { VerifyAuthClientService } from '../services/verify-auth-client.service';
// import { InfoTockenService } from '../services/info-token.service';
// import { InfoTockenService } from '../services/info-token.service';
class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    // canActivate(
    //   next: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    canActivate() {
        const us = this.authService.getLoggedStatus();
        // const infoToken = this.infoTokenService.getInfoUs();
        const res = us;
        // console.log('canActivate', us);
        // if ( us )
        return res;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);





class AuthService {
    constructor(crudService) {
        this.crudService = crudService;
        this.isLoggedStatus = false;
    }
    getInfoRepartidor(_usuario) {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.crudService.postFree(_usuario, 'repartidor', 'get-info', true)
                .subscribe((res) => {
                const usSimulaToken = {
                    'usuario': res.data[0]
                };
                const response = 'eyCJ9.' + btoa(JSON.stringify(usSimulaToken));
                observer.next(response);
            });
        });
    }
    setLoggedStatus(value) {
        this.isLoggedStatus = value;
    }
    // verfica la existencia del token
    getLoggedStatus() {
        const token = localStorage.getItem('::token');
        const rpt = !!token ? true : false;
        this.isLoggedStatus = rpt;
        return rpt;
    }
    getUserLogged(usuario) {
        return this.crudService.loginUsuarioAutorizado(usuario);
    }
    setLocalToken(token) {
        localStorage.setItem('::token', token); // esto se modifica
        // localStorage.setItem('::token-auth', token); // este se mantiene
        // guardo tambien la hora que esta iniciando session
        const ms_tieme_init_session = new Date().getTime();
        localStorage.setItem('sys::numtis', ms_tieme_init_session.toString());
    }
    setTokenAuth(token) {
        localStorage.setItem('::token-auth', token); // este se mantiene
    }
    getLocalToken() {
        return localStorage.getItem('::token');
    }
    setLocalUsuario(usuario) {
        localStorage.setItem('::us', JSON.stringify(usuario));
    }
    verifyToken() {
        return this.crudService.verificarToken();
    }
    loggedOutUser() {
        localStorage.removeItem('::token');
        localStorage.removeItem('::us');
        // localStorage.clear();
        this.setLoggedStatus(false);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth0.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/auth0.service.ts ***!
  \**************************************************/
/*! exports provided: Auth0Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth0Service", function() { return Auth0Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







class Auth0Service {
    constructor(router) {
        this.router = router;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1___default()({
            domain: 'dev-m48s1pe2.auth0.com',
            client_id: 'kSs64dcx34Fo7HpDLYkE3gQH0v2MtcdR',
            redirect_uri: `${window.location.origin}/#/callback-auth`
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err)));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(client.isAuthenticated())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => this.loggedIn = res));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(client.handleRedirectCallback())));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = null;
        // On initial load, check authentication state with authorization server
        // Set up local auth streams if user is already authenticated
        this.localAuthSetup();
        // Handle redirect from Auth0 login
        this.handleAuthCallback();
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    getUser$(options) {
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(client.getUser(options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(user => this.userProfileSubject$.next(user)));
    }
    localAuthSetup() {
        // This should only be called on app initialization
        // Set up local authentication streams
        const checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((loggedIn) => {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(loggedIn);
        }));
        checkAuth$.subscribe();
    }
    login(redirectPath = '/', proveedor) {
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log in
            client.loginWithRedirect({
                connection: proveedor,
                redirect_uri: `${window.location.origin}/#/callback-auth`,
                appState: { target: redirectPath }
            });
        });
    }
    handleAuthCallback() {
        // Call when app reloads after user logs in with Auth0
        const params = window.location.search;
        if (params.includes('code=') && params.includes('state=')) {
            let targetRoute; // Path to redirect to after login processsed
            const authComplete$ = this.handleRedirectCallback$.pipe(
            // Have client, now call method to handle auth callback redirect
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(cbRes => {
                // Get and set target redirect route from callback results
                targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(() => {
                // Redirect callback complete; get user and login status
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
                    this.getUser$(),
                    this.isAuthenticated$
                ]);
            }));
            // Subscribe to authentication completion observable
            // Response will be an array of user and login status
            authComplete$.subscribe(([user, loggedIn]) => {
                // Redirect to target route after callback processing
                this.router.navigate([targetRoute]);
            });
        }
    }
    logout() {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log out
            client.logout({
                client_id: 'kSs64dcx34Fo7HpDLYkE3gQH0v2MtcdR',
                returnTo: `${window.location.origin}`
            });
        });
    }
}
Auth0Service.ɵfac = function Auth0Service_Factory(t) { return new (t || Auth0Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
Auth0Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Auth0Service, factory: Auth0Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Auth0Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/calc-distancia.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/calc-distancia.service.ts ***!
  \***********************************************************/
/*! exports provided: CalcDistanciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcDistanciaService", function() { return CalcDistanciaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var geolocation_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geolocation-utils */ "./node_modules/geolocation-utils/lib/index.js");
/* harmony import */ var geolocation_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(geolocation_utils__WEBPACK_IMPORTED_MODULE_1__);



class CalcDistanciaService {
    constructor() {
        this.directionsService = new google.maps.DirectionsService();
        // private directionsDisplay = new google.maps.DirectionsRenderer();
        this.origin = {};
        this.destination = {};
    }
    calculateRoute(dirCliente, dirEstablecimiento) {
        let c_servicio = dirEstablecimiento.c_minimo;
        const c_km = dirEstablecimiento.c_km; // costo x km adicional
        // cordenadas
        this.origin = {
            lat: dirCliente.latitude, lng: dirCliente.longitude
        };
        this.destination = {
            lat: dirEstablecimiento.latitude, lng: dirEstablecimiento.longitude
        };
        const request = {
            origin: this.origin,
            destination: this.destination,
            travelMode: google.maps.TravelMode.DRIVING
        };
        let km = 0;
        this.directionsService.route(request, (result, status) => {
            if (status === 'OK') {
                // this.directionsRenderer.setDirections(result);
                km = result.routes[0].legs[0].distance.value;
                km = parseInt((km / 1000).toFixed(), 0);
                if (km > 1) {
                    c_servicio = ((km - 1) * c_km) + c_servicio;
                    dirEstablecimiento.c_servicio = c_servicio;
                    // return c_servicio;
                }
                // console.log('km calc', km);
                // console.log(result.routes[0].legs[0]);
                // console.log('c_servicio', c_servicio);
                // console.log('dirEstablecimiento', dirEstablecimiento);
                // return c_servicio;
                // callback(c_servicio);
            }
        });
        setTimeout(() => {
            dirEstablecimiento.c_servicio = c_servicio;
            return c_servicio;
        }, 500);
        dirEstablecimiento.c_servicio = c_servicio;
        return c_servicio;
    }
    // retorna true si esta cerca
    calcDistancia(coordOrigen, coordDetino, radius = 100) {
        coordDetino.latitude = typeof coordDetino.latitude === 'string' ? parseFloat(coordDetino.latitude) : coordDetino.latitude;
        coordDetino.longitude = typeof coordDetino.longitude === 'string' ? parseFloat(coordDetino.longitude) : coordDetino.longitude;
        const center = { lat: coordDetino.latitude, lon: coordDetino.longitude };
        // const radius = 75; // meters
        return Object(geolocation_utils__WEBPACK_IMPORTED_MODULE_1__["insideCircle"])({ lat: coordOrigen.latitude, lon: coordOrigen.longitude }, center, radius); // false
    }
    calcDistanciaEnMetros(coordOrigen, coordDetino) {
        coordDetino.latitude = typeof coordDetino.latitude === 'string' ? parseFloat(coordDetino.latitude) : coordDetino.latitude;
        coordDetino.longitude = typeof coordDetino.longitude === 'string' ? parseFloat(coordDetino.longitude) : coordDetino.longitude;
        const _from = { lat: coordOrigen.latitude, lon: coordOrigen.longitude };
        const _to = { lat: coordDetino.latitude, lon: coordDetino.longitude };
        // const radius = 75; // meters
        return Object(geolocation_utils__WEBPACK_IMPORTED_MODULE_1__["distanceTo"])(_from, _to); // false
    }
    //radio metros
    isUbicationIntroRadio(coords1, coords2, radio = 10) {
        const _rptDistance = this.calculateDistanceInMt(coords1, coords2);
        return _rptDistance <= radio ? true : false;
    }
    calculateDistanceInMt(coords1, coords2) {
        const lat1 = coords1.latitude;
        const lng1 = coords1.longitude;
        const lat2 = coords2.latitude;
        const lng2 = coords2.longitude;
        // Calcular la distancia utilizando la fórmula de distancia entre dos puntos en un plano cartesiano
        const distance = Math.atan2(Math.sqrt(Math.pow(Math.cos(lat2) * Math.sin(lng2 - lng1), 2) +
            Math.pow(Math.cos(lat1) * Math.sin(lat2) -
                Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1), 2)), Math.sin(lat1) * Math.sin(lat2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1)) * 6371;
        // Devolver la distancia en metros
        return distance * 1000;
    }
    // regla x km adicional
    reglaKm() {
    }
}
CalcDistanciaService.ɵfac = function CalcDistanciaService_Factory(t) { return new (t || CalcDistanciaService)(); };
CalcDistanciaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalcDistanciaService, factory: CalcDistanciaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalcDistanciaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/crud-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/crud-http.service.ts ***!
  \******************************************************/
/*! exports provided: CrudHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudHttpService", function() { return CrudHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _config_config_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.const */ "./src/app/shared/config/config.const.ts");







class CrudHttpService {
    constructor(httpClient, infoTockenService) {
        this.httpClient = httpClient;
        this.infoTockenService = infoTockenService;
    }
    // conOrg, conSede FILTRAN SI NO SE ESPECIFICA POR ORG Y SEDE
    getAll(controller, evento, conOrg = true, conSede = true, token = true) {
        const url = this.setUrlFiltros(controller, evento, conOrg, conSede);
        const header = token ? this.getHeaderHttpClientForm() : null;
        return this.httpClient.get(url, { headers: header });
    }
    getTimeNow() {
        const url = this.setUrlFiltros('estadistica', 'getFechaNow', false, false);
        const header = null;
        return this.httpClient.get(url, { headers: header });
    }
    // numeropagina: numero pagina a mostrar
    // rows: cantidad de filas o registros a mostrar
    // filter: filtros de busqueda para la paginacion // se adjunta a org y sede
    // orden: nombre del campo por el cual se ordenara
    // ordendireccion: default ASC
    paginacion(controller, evento, pagenumber, rows, filter, orden, ordendireccion = null, conOrg = true, conSede = true) {
        const url = this.setUrlFiltros(controller, evento, conOrg, conSede, filter);
        // console.log('url', url);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromObject: {
                pagenumber: pagenumber.toString(),
                rows: rows.toString(),
                orden: orden,
                ordendireccion: ordendireccion || ''
            }
        });
        return this.httpClient.get(url, { params: params });
    }
    // enviar idorg o idsede o idusuario vacios, el back end los llenara
    create(datos, controller, evento = 'create') {
        const url = this.setUrl(controller, evento);
        const header = this.getHeaderHttpClientForm();
        return this.httpClient.post(url, datos, { headers: header });
    }
    // enviar idorg o idsede o idusuario vacios, el back end los llenara
    update(datos, id, controller, evento = 'update') {
        const url = this.setUrl(controller, evento) + '/' + id.toString();
        const header = this.getHeaderHttpClientForm();
        return this.httpClient.put(url, datos, { headers: header });
    }
    updateFree(datos, controller, evento = 'update', conToken = true) {
        const url = this.setUrl(controller, evento);
        const header = conToken ? this.getHeaderHttpClientForm() : this.getHeaderHttpClientFormNoToken();
        return this.httpClient.put(url, datos, { headers: header });
    }
    // enviar idorg o idsede o idusuario vacios, el back end los llenara
    postFree(datos, controller, evento = 'update', conToken = true) {
        const url = this.setUrl(controller, evento);
        const header = conToken ? this.getHeaderHttpClientForm() : this.getHeaderHttpClientFormNoToken();
        return this.httpClient.post(url, datos, { headers: header });
    }
    // enviar mensaje SMS de seguridad
    postSMS(datos, controller, evento, conTokenSMS = true) {
        const url = this.setUrl(controller, evento);
        const header = conTokenSMS ? this.getHeaderHttpClientFormSMS() : this.getHeaderHttpClientFormNoToken();
        return this.httpClient.post(url, datos, { headers: header });
    }
    getFree(url) {
        return this.httpClient.get(url);
    }
    // consulta ruc o dni
    getConsultaRucDni(controller, number) {
        const url = `${_config_config_const__WEBPACK_IMPORTED_MODULE_3__["URL_CONSULTA_RUC_DNI"]}${controller}/${number}`;
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${_config_config_const__WEBPACK_IMPORTED_MODULE_3__["TOKEN_CONSULTA"]}`);
        return this.httpClient.get(url, { headers: header });
    }
    getFilterBy(controller, evento, filter, conOrg = true, conSede = true) {
        const url = this.setUrlFiltros(controller, evento, conOrg, conSede, filter);
        return this.httpClient.get(url);
    }
    getById(id, controller, evento) {
        const url = this.setUrlFiltros(controller, evento, false, false, id);
        return this.httpClient.get(url);
    }
    // login manda los datos en json
    loginUsuarioAutorizado(datos) {
        // const url = this.setUrl('login-usuario-autorizado-repartidor', '');
        const url = this.setUrl('login-usuario-autorizado-repartidor', '');
        const header = this.getHeaderHttpClientFormNoToken();
        console.log('url', url);
        return this.httpClient.post(url, datos, { headers: header });
    }
    verificarToken() {
        const url = this.setUrl('verificarToken', '');
        const header = this.getHeaderHttpClientForm();
        return this.httpClient.post(url, { headers: header });
    }
    refreshToken() {
        const _jwt = this.infoTockenService.getInfoUs();
        const __jwt = !_jwt.pass ? _jwt.usuario : _jwt;
        const _data = {
            nomusuario: __jwt.usuario,
            pass: atob(__jwt.pass)
        };
        const url = this.setUrl('login-usuario-autorizado-repartidor', '');
        const header = this.getHeaderHttpClientFormNoToken();
        return this.httpClient.post(url, _data, { headers: header });
    }
    setUrl(controller, evento) {
        const url = `${_config_config_const__WEBPACK_IMPORTED_MODULE_3__["URL_SERVER"]}/${controller}/${evento}`;
        return url;
    }
    setUrlFiltros(controller, evento, conOrg, conSede, filter = '') {
        const getSede = conSede ? this.setInfoSedeToken() : '';
        const getOrg = conOrg ? this.setInfoOrgToken() : '';
        const getOperador = (conOrg && conSede) ? '~y~' : '';
        const filterOrgSede = `${getSede + getOperador + getOrg}`;
        let getFilter = filterOrgSede === '' ? filter : filter === '' ? '' : `~y~${filter}`;
        getFilter = '/' + filterOrgSede + getFilter;
        const url = `${_config_config_const__WEBPACK_IMPORTED_MODULE_3__["URL_SERVER"]}/${controller}/${evento}${getFilter}`;
        return url;
    }
    setInfoSedeToken() {
        return 'idsede:eq:' + this.infoTockenService.getInfoSedeToken();
    }
    setInfoOrgToken() {
        return 'idorg:eq:' + this.infoTockenService.getInfoSedeToken();
    }
    getHeaderHttpClientForm() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.infoTockenService.getTokenAuth());
        return headers;
    }
    getHeaderHttpClientFormSMS() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Authorization', _config_config_const__WEBPACK_IMPORTED_MODULE_3__["TOKEN_SMS"]);
        return headers;
    }
    getHeaderHttpClientFormNoToken() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        return headers;
    }
}
CrudHttpService.ɵfac = function CrudHttpService_Factory(t) { return new (t || CrudHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"])); };
CrudHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrudHttpService, factory: CrudHttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/error.global.handler.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/error.global.handler.ts ***!
  \*********************************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class GlobalErrorHandler {
    // manejo de errores en principio me maneja el error de carga inicial despues de una actualizacion
    handleError(error) {
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;
        // error carga inicial despues de actualizacion, recarga la pagina
        if (chunkFailedMessage.test(error.message)) {
            window.location.reload();
        }
        console.error(error);
    }
}
GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(); };
GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/http-config-interceptor.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/http-config-interceptor.service.ts ***!
  \********************************************************************/
/*! exports provided: HttpConfigInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptorService", function() { return HttpConfigInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








// import { RepartidorService } from './repartidor.service';
class HttpConfigInterceptorService {
    constructor(authService, router
    // , private crudService: CrudHttpService
    // , private repartidorService: RepartidorService
    ) {
        this.authService = authService;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err, caught) => {
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
                this.router.navigate(['../']);
            }
            throw err;
        }));
    }
}
HttpConfigInterceptorService.ɵfac = function HttpConfigInterceptorService_Factory(t) { return new (t || HttpConfigInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HttpConfigInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpConfigInterceptorService, factory: HttpConfigInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpConfigInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/info-token.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/info-token.service.ts ***!
  \*******************************************************/
/*! exports provided: InfoTockenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoTockenService", function() { return InfoTockenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modelos_usuario_token_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/usuario.token.model */ "./src/app/modelos/usuario.token.model.ts");
/* harmony import */ var src_app_modelos_metodo_pago_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/metodo.pago.model */ "./src/app/modelos/metodo.pago.model.ts");




class InfoTockenService {
    constructor() {
        this.converToJSON();
    }
    getInfoUs() {
        this.getLocalIpCliente();
        return this.infoUsToken;
    }
    saveToken(token) {
        localStorage.setItem('::token', token);
        // guardo tambien la hora que esta iniciando session
        const ms_tieme_init_session = new Date().getTime();
        localStorage.setItem('sys::numtis', ms_tieme_init_session.toString());
    }
    getInfoSedeToken() {
        // const token = jwt.decode(this.getToken());
        return this.infoUsToken.idsede.toString();
        // return '1';
    }
    getInfoOrgToken() {
        return this.infoUsToken.idorg.toString();
    }
    getInfoNomSede() {
        return localStorage.getItem('sys::s');
    }
    isCliente() {
        return this.infoUsToken.isCliente;
    }
    isSoloLlevar() {
        return this.infoUsToken.isSoloLLevar;
    }
    isDelivery() {
        return this.infoUsToken.isDelivery;
    }
    getLocalIpCliente() {
        this.infoUsToken.ipCliente = localStorage.getItem('sys::it') || '';
        return this.infoUsToken.ipCliente;
    }
    setLocalIpCliente(val) {
        localStorage.setItem('sys::it', val);
    }
    setIsPagoSuccess(val) {
        this.infoUsToken.isPagoSuccess = val;
        this.set();
    }
    // para el confirmar pago si es clienteDelivery
    setOrderDelivery(_order, _importes) {
        this.infoUsToken.orderDelivery = btoa(_order);
        this.infoUsToken.importeDelivery = btoa(_importes);
        // const _token = `eyCJ9.${btoa(JSON.stringify(this.infoUsToken))}`;
        // localStorage.setItem('::token', _token);
        this.set();
    }
    setTelefono(val) {
        this.infoUsToken.telefono = val;
        this.set();
    }
    setMetodoPago(metodo) {
        this.infoUsToken.metodoPago = metodo;
        this.set();
    }
    setIniMetodoPago() {
        const metodoPagoInit = new src_app_modelos_metodo_pago_model__WEBPACK_IMPORTED_MODULE_2__["MetodoPagoModel"];
        metodoPagoInit.idtipo_pago = 2;
        metodoPagoInit.descripcion = 'Tarjeta';
        metodoPagoInit.importe = '0';
        metodoPagoInit.checked = true;
        this.setMetodoPago(metodoPagoInit);
    }
    setEfectivoMano(val) {
        this.infoUsToken.efectivoMano = val;
        this.set();
    }
    setisOnline(val) {
        this.infoUsToken.isOnline = val;
        this.set();
    }
    setSocketId(val) {
        // this.infoUsToken.socketId = this.infoUsToken.socketId ? this.infoUsToken.socketId : val;
        this.infoUsToken.socketId = val;
        this.set();
    }
    // guarda en el local storage
    set() {
        const _token = `eyCJ9.${btoa(JSON.stringify(this.infoUsToken))}`;
        localStorage.setItem('::token', _token);
    }
    //
    getToken() { return localStorage.getItem('::token'); } // este lo modificamos
    getTokenAuth() { return localStorage.getItem('::token-auth'); } // este se mantiene desde la session (original)
    converToJSON() {
        if (localStorage.getItem('::token')) {
            const _token = JSON.parse(atob(localStorage.getItem('::token').split('.')[1]));
            // si existe idcliente, setea al usuario
            if (_token.idcliente) {
                const _newUs = new src_app_modelos_usuario_token_model__WEBPACK_IMPORTED_MODULE_1__["UsuarioTokenModel"]();
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
                this.infoUsToken = _newUs;
                // agregar el metodo pago prederteminado tarjeta
                if (!this.infoUsToken.metodoPago) {
                    this.setIniMetodoPago();
                }
            }
            else {
                this.infoUsToken = _token;
                this.infoUsToken.isCliente = false;
            }
        }
        else {
            this.infoUsToken = null;
        }
    }
    cerrarSession() {
        localStorage.removeItem('::token');
        localStorage.removeItem('sys::rules');
        localStorage.removeItem('sys::status');
        localStorage.removeItem('sys::numtis');
        localStorage.removeItem('sys::st');
        localStorage.removeItem('token');
        localStorage.removeItem('sys::ed');
        localStorage.removeItem('sys::transaction-response');
        localStorage.removeItem('sys::transaction-load');
        localStorage.removeItem('data');
        // localStorage.removeItem('sys::tpm');
    }
    // verifica el tiempo de inactividad para cerrar session
    // cerrar session despues de 3:20 => ( 12000 sec )horas inciadas
    verificarContunuarSession() {
        if (!this.infoUsToken || !this.infoUsToken.isCliente || !this.infoUsToken.isDelivery) { // si es usuario autorizado no cuenta tiempo
            return true;
        }
        const numTis = parseInt(localStorage.getItem('sys::numtis'), 0);
        let continueSession = !isNaN(numTis);
        if (!continueSession) {
            this.cerrarSession();
            // this.miPedidoService.cerrarSession();
            return continueSession;
        }
        const ms_now = new Date().getTime();
        const ms = ms_now - numTis;
        const sec = Math.floor((ms / 1000));
        if (sec > 10000) {
            continueSession = false;
        }
        if (!continueSession) {
            this.cerrarSession();
            // this.miPedidoService.cerrarSession();
            return continueSession;
        }
        return true;
        // const timeAfter = localStorage.getItem('sys::tnum') ? parseInt(localStorage.getItem('sys::tnum'), 0) : ms_new;
    }
}
InfoTockenService.ɵfac = function InfoTockenService_Factory(t) { return new (t || InfoTockenService)(); };
InfoTockenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InfoTockenService, factory: InfoTockenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoTockenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/listen-status.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/listen-status.service.ts ***!
  \**********************************************************/
/*! exports provided: ListenStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListenStatusService", function() { return ListenStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/estado.pedido.model */ "./src/app/modelos/estado.pedido.model.ts");




class ListenStatusService {
    constructor() {
        // para activar la busqueda
        this.isBusquedaSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isBusqueda$ = this.isBusquedaSource.asObservable();
        // string a buscar
        this.charBuquedaSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.charBuqueda$ = this.charBuquedaSource.asObservable();
        // hay items en la busqueda - se encontro cuenta
        this.hayCuentaBusquedaSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.hayCuentaBusqueda$ = this.hayCuentaBusquedaSource.asObservable();
        // datos de la sede estan disponible
        this.hayDatosSedeSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.hayDatosSede$ = this.hayDatosSedeSource.asObservable();
        // si es cliente usuario
        this.isUsuarioClienteSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isUsuarioCliente$ = this.isUsuarioClienteSource.asObservable();
        // estado del pedido enviado por el cliente
        this.estadoPedidoSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__["EstadoPedidoModel"]());
        this.estadoPedido$ = this.estadoPedidoSource.asObservable();
        // hay pedido en el storage, si es cliente usuario no cargar al cuenta.
        this.hayPedidoPendienteSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.hayPedidoPendiente$ = this.hayPedidoPendienteSource.asObservable();
        // form pagar la cuenta
        this.isPagePagarCuentaShowSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isPagePagarCuentaShow$ = this.isPagePagarCuentaShowSource.asObservable();
        // si el boton de pago ha sido visible // recargamos la pagina al volver a ingresar
        this.isBtnPagoShowSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isBtnPagoShow$ = this.isBtnPagoShowSource.asObservable();
        // notifica el pago correcto para enviar el pedido cuando es solo para llevar
        this.isPagoSuccesSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isPagoSucces$ = this.isPagoSuccesSource.asObservable();
        this.isChangeDireccionDeliverySource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.isChangeDireccionDelivery$ = this.isChangeDireccionDeliverySource.asObservable();
        // repartidor
        // notifica salir del establecimeinto cuando es cliente delivery goback
        this.isOutEstablecimientoDeliverySource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isOutEstablecimientoDelivery$ = this.isOutEstablecimientoDeliverySource.asObservable();
        // notifica efectivo en mano
        this.efectivoManoSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.efectivoManoMano$ = this.efectivoManoSource.asObservable();
        // notifica cambios en el pedido
        this.pedidoModificadoSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.pedidoModificado$ = this.pedidoModificadoSource.asObservable();
        // listen position gps
        this.myPositionSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.myPosition$ = this.myPositionSource.asObservable();
        // listen new pedido repartidor propio // llega el pedido
        this.newPedidoRepartoPropioSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.newPedidoRepartoPropio$ = this.newPedidoRepartoPropioSource.asObservable();
    }
    setIsBusqueda() {
        if (!this.isBusquedaSource.value) {
            setTimeout(() => {
                this.isBusquedaSource.next(true);
            }, 250);
        }
        else {
            this.isBusquedaSource.next(false);
        }
    }
    setCharBusqueda(charFind) {
        this.charBuquedaSource.next(charFind);
    }
    setHayCuentaBuesqueda(value) {
        this.hayCuentaBusquedaSource.next(value);
    }
    setHayDatosSede(value) {
        this.hayDatosSedeSource.next(value);
    }
    setIsUsuarioCliente(value) {
        this.isUsuarioClienteSource.next(value);
    }
    setEstadoPedido(value) {
        this.estadoPedidoSource.next(value);
    }
    setHayPedidoPendiente(value) {
        this.hayPedidoPendienteSource.next(value);
    }
    setIsPagePagarCuentaShow(value) {
        this.isPagePagarCuentaShowSource.next(value);
    }
    setIsBtnPagoShow(value) {
        this.isBtnPagoShowSource.next(value);
    }
    setPagoSuccess(value) {
        this.isPagoSuccesSource.next(value);
    }
    // repartidor
    setChangeDireccionDelivery(value) {
        this.isChangeDireccionDeliverySource.next(value);
    }
    setIsOutEstablecimientoDelivery(value) {
        this.isOutEstablecimientoDeliverySource.next(value);
    }
    setEfectivoMano(value) {
        this.efectivoManoSource.next(value);
    }
    // notifica cambios en el pedido
    setPedidoModificado(pedido) {
        this.pedidoModificadoSource.next(pedido);
    }
    // notifica posicion repartidor
    setMyPosition(pos) {
        this.myPositionSource.next(pos);
    }
    // listen new pedido repartidor propio
    setNewPedidoRepartoPropio(pedido) {
        this.newPedidoRepartoPropioSource.next(pedido);
    }
}
ListenStatusService.ɵfac = function ListenStatusService_Factory(t) { return new (t || ListenStatusService)(); };
ListenStatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListenStatusService, factory: ListenStatusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListenStatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/pedido-repartidor.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/pedido-repartidor.service.ts ***!
  \**************************************************************/
/*! exports provided: PedidoRepartidorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoRepartidorService", function() { return PedidoRepartidorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modelos_pedido_repartidor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/pedido.repartidor.model */ "./src/app/modelos/pedido.repartidor.model.ts");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var src_app_modelos_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modelos/tipoconsumo.model */ "./src/app/modelos/tipoconsumo.model.ts");
/* harmony import */ var src_app_modelos_seccion_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modelos/seccion.model */ "./src/app/modelos/seccion.model.ts");
/* harmony import */ var src_app_modelos_item_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modelos/item.model */ "./src/app/modelos/item.model.ts");
/* harmony import */ var src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modelos/pedido.model */ "./src/app/modelos/pedido.model.ts");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _listen_status_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
/* harmony import */ var src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modelos/geoposition.model */ "./src/app/modelos/geoposition.model.ts");
/* harmony import */ var _calc_distancia_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calc-distancia.service */ "./src/app/shared/services/calc-distancia.service.ts");
/* harmony import */ var src_app_modelos_time_line_pedido__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modelos/time.line.pedido */ "./src/app/modelos/time.line.pedido.ts");
/* harmony import */ var _send_msj_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./send-msj.service */ "./src/app/shared/services/send-msj.service.ts");







// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

















class PedidoRepartidorService {
    constructor(crudService, router, infoTokenService, listenService, socketService, calcDistanciaService, sendMsjService) {
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
    init() {
        this.pedidoRepartidor = this.getLocal();
    }
    cleanLocal() {
        localStorage.removeItem(this.keyLocalIds);
        localStorage.removeItem(this.keyLocalItem);
        localStorage.removeItem(this.keyLocal);
        localStorage.removeItem(this.keyLocalItemSelected);
        localStorage.removeItem('sys::pXa');
        this.pedidoRepartidor = this.getLocal();
    }
    setPasoVa(val) {
        this.pedidoRepartidor.paso_va = val;
        this.setLocal(this.pedidoRepartidor);
    }
    setPedidoPasoVa(val) {
        // console.log('estado cambiado', val);
        this.pedidoRepartidor.pedido_paso_va = val;
        this.setLocal(this.pedidoRepartidor);
    }
    // setCostoSercicio(val: string) {
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
    setLocal(obj = null) {
        obj = obj ? obj : this.pedidoRepartidor;
        localStorage.setItem(this.keyLocal, btoa(JSON.stringify(obj)));
    }
    setLocalIds(obj) {
        // obj = obj ? obj : this.pedidoRepartidor;
        localStorage.setItem(this.keyLocalIds, btoa(JSON.stringify(obj)));
    }
    setLocalItems(obj) {
        // obj = obj ? obj : this.pedidoRepartidor;
        localStorage.setItem(this.keyLocalItem, btoa(JSON.stringify(obj)));
    }
    setPedidoSelect(obj) {
        localStorage.setItem(this.keyLocalItemSelected, btoa(JSON.stringify(obj)));
    }
    setPedidoPorAceptar(obj) {
        localStorage.setItem('sys::pXa', btoa(JSON.stringify(obj)));
    }
    getPedidoPorAceptar() {
        const rpt = localStorage.getItem('sys::pXa');
        return rpt ? JSON.parse(atob(rpt)) : null;
    }
    getPedidoSelect() {
        const rpt = localStorage.getItem(this.keyLocalItemSelected);
        return rpt ? JSON.parse(atob(rpt)) : null;
    }
    getLocalIds() {
        const rpt = localStorage.getItem(this.keyLocalIds);
        return rpt ? JSON.parse(atob(rpt)) : null;
    }
    getLocalItems() {
        const rpt = localStorage.getItem(this.keyLocalItem);
        return rpt ? JSON.parse(atob(rpt)) : null;
    }
    getLocal() {
        const rpt = localStorage.getItem(this.keyLocal);
        return rpt ? JSON.parse(atob(rpt)) : new src_app_modelos_pedido_repartidor_model__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorModel"];
        // try {
        // } catch (error) {
        //   console.log('clean pedido from getlocal');
        //   this.cleanLocal();
        //   return new PedidoRepartidorModel;
        // }
    }
    asignarPedido() {
        const ids = this.getLocalIds().pedidos.join(',');
        const _data = {
            idpedido: ids,
            repartidor: !this._repartidor ? this.infoTokenService.getInfoUs().usuario : this._repartidor
        };
        this.crudService.postFree(_data, 'repartidor', 'set-asignar-pedido', true)
            .subscribe(res => {
            // console.log(res);
            this.pedidoRepartidor.estado = 1; // asignadp
            this.setLocal();
            // this.setPasoVa(1);
        });
    }
    playAudioNewPedido() {
        // console.trace();
        const audio = new Audio();
        audio.src = './assets/audio/Alarm04.wav';
        audio.load();
        audio.play();
    }
    // dar formato subtotales del pedido recibido
    // saca el importe total del pedido separando el importe del servicio de entrega
    darFormatoSubTotales(arrTotales = null, pwa_delivery_comercio_paga_entrega = null, costoEntrega = null) {
        this.init();
        arrTotales = arrTotales && arrTotales.length > 0 ? arrTotales : this.pedidoRepartidor.datosSubtotalesShow;
        const rowTotal = arrTotales[arrTotales.length - 1];
        // lo que paga el cliente
        this.pedidoRepartidor.importePagaCliente = rowTotal.importe;
        pwa_delivery_comercio_paga_entrega = pwa_delivery_comercio_paga_entrega !== null ? pwa_delivery_comercio_paga_entrega : this.pedidoRepartidor.datosComercio.pwa_delivery_comercio_paga_entrega;
        costoEntrega = costoEntrega ? costoEntrega : this.pedidoRepartidor.datosDelivery.costoTotalDelivery;
        // agregar o restar el importe del costo de entrega SI el comercio paga el costo de entrega pwa_delivery_comercio_paga_entrega
        if (pwa_delivery_comercio_paga_entrega === 1) {
            // const costoEntrega = this.pedidoRepartidor.datosDelivery.costoTotalDelivery;
            // ingresamos en la penultima postion del arrTotales
            const postionInsert = arrTotales.length - 1;
            const _row = {
                descripcion: 'Costo de Entrega',
                esImpuesto: 0,
                id: -4,
                importe: -costoEntrega,
                quitar: false,
                tachado: false,
                visible: false,
                visible_cpe: false
            };
            arrTotales.splice(postionInsert, 0, _row);
            // console.log('costo de entrega insertado', arrTotales);
        }
        // -2 = servicio deliver -3 = propina
        rowTotal.importe = arrTotales.filter(x => x.id !== -2 && x.id !== -3 && x.descripcion !== 'TOTAL').map(x => parseFloat(x.importe)).reduce((a, b) => a + b, 0);
        this.pedidoRepartidor.importePedido = rowTotal.importe;
        // this.setImporteTotalPedido(rowTotal.importe);
        // costo total del servico + prpina
        const costoServicio = parseFloat(arrTotales.filter(x => x.id === -2 || x.id === -3).map(x => parseFloat(x.importe)).reduce((a, b) => a + b, 0));
        this.pedidoRepartidor.c_servicio = costoServicio.toString();
        // this.setCostoSercicio(costoServicio.toString());
        const _isHayPropina = arrTotales.filter(x => x.id === -3)[0] ? true : false;
        // this.setIsHayPropina(_isHayPropina);
        this.pedidoRepartidor.isHayPropina = _isHayPropina;
        // cuanto paga el repartidor restando precio_default si el comercio no es afiliado
        this.setLocal();
        // quitamos el importe del servicio
        return arrTotales.filter(x => x.id !== -2 && x.id !== -3);
    }
    // da formato al pedido, se utiliza para ver el detalle del pedido
    darFormatoPedido(res) {
        const _miPedidoCuenta = new src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_6__["PedidoModel"]();
        const c_tiposConsumo = [];
        let subTotalDefault = 0;
        res.data.map((tp) => {
            let hayTpc = c_tiposConsumo.filter(x => x.idtipo_consumo === tp.idtipo_consumo)[0];
            if (!hayTpc) {
                hayTpc = new src_app_modelos_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_3__["TipoConsumoModel"];
                hayTpc.descripcion = tp.des_tp;
                hayTpc.idtipo_consumo = parseInt(tp.idtipo_consumo, 0);
                c_tiposConsumo.push(hayTpc);
            }
        });
        c_tiposConsumo.map((tp) => {
            res.data
                .filter((_tp) => _tp.idtipo_consumo === tp.idtipo_consumo)
                .map((_s, i) => {
                // let haySeccion = !tp.secciones ? null : tp.secciones.filter((s: SeccionModel) => s.idseccion.toString() === _s.idseccion.toString())[0];
                let haySeccion = tp.secciones.filter((s) => s.idseccion.toString() === _s.idseccion.toString())[0];
                if (!haySeccion) {
                    haySeccion = new src_app_modelos_seccion_model__WEBPACK_IMPORTED_MODULE_4__["SeccionModel"];
                    haySeccion.idseccion = _s.idseccion.toString();
                    haySeccion.des = _s.des_seccion;
                    haySeccion.sec_orden = _s.sec_orden;
                    haySeccion.ver_stock_cero = 0;
                    tp.count_items_seccion = i + 1;
                    tp.secciones.push(haySeccion);
                }
            });
        });
        // items
        c_tiposConsumo.map((tp) => {
            tp.secciones.map((s) => {
                res.data
                    .filter((_tp) => _tp.idtipo_consumo.toString() === tp.idtipo_consumo.toString() && _tp.idseccion.toString() === s.idseccion.toString())
                    .map((_i, i) => {
                    const hayItem = new src_app_modelos_item_model__WEBPACK_IMPORTED_MODULE_5__["ItemModel"];
                    // precio total si el comercio no es afiliado muestra el precio default (sin comision para que el repartidor sepa el precio a pagar)
                    const precio_default = parseFloat(_i.precio_default) * parseInt(_i.cantidad, 0);
                    const p_unitario = _i.precio_default;
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
    darFormatoPedidoLocal(pedidoLocal, subotales = null) {
        let subTotalDefault = 0;
        pedidoLocal.tipoconsumo.map(tp => {
            tp.secciones.map(s => {
                s.items.map(_i => {
                    const precio_default = parseFloat(_i.precio_default) * _i.cantidad_seleccionada;
                    const p_unitario = _i.precio_default;
                    subTotalDefault += precio_default;
                    _i.precio = p_unitario;
                    _i.precio_print = parseFloat(precio_default.toString());
                    _i.precio_total = parseFloat(precio_default.toString());
                });
            });
        });
        this.reCalcularSubTotal(subTotalDefault, subotales);
        return pedidoLocal;
    }
    // subTotal = recibido del default
    reCalcularSubTotal(subTotalDefault, subotales = null) {
        this.init();
        const _rowSubTotal = subotales ? subotales[0] : this.pedidoRepartidor.datosSubtotales[0];
        // si el tototal es igual quiere decir de que no hay default comercio afiliado
        if (subTotalDefault === parseFloat(_rowSubTotal.importe)) {
            return;
        }
        const _diffSubTotal = parseFloat(_rowSubTotal.importe) - subTotalDefault;
        _rowSubTotal.importe = subTotalDefault;
        // sumamos los totales
        const rowTotal = subotales.filter(x => x.descripcion === 'TOTAL')[0];
        // importe que pagara el cliente
        this.pedidoRepartidor.importePagaCliente = rowTotal.importe;
        rowTotal.importe = parseFloat(rowTotal.importe) - _diffSubTotal;
        // this.pedidoRepartidor.datosSubtotales =
        // this.setLocal();
    }
    // verifica el estado del pedido
    // esto en inidicaciones por si se recarga o no llega la notificaion socket
    verificarEstadoPedido(idpedido) {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            const _dataSend = {
                idpedido: idpedido
            };
            this.crudService.postFree(_dataSend, 'repartidor', 'get-estado-pedido')
                .subscribe(res => {
                this.pedidoRepartidor.estado = res.data[0].pwa_delivery_status;
                observer.next(this.pedidoRepartidor.estado);
            });
        });
    }
    // load pedidos asignados // grupo de pedidos
    loadPedidosRecibidos(_ids) {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            const _dataSend = {
                ids: _ids
            };
            this.crudService.postFree(_dataSend, 'repartidor', 'get-pedidos-recibidos-group')
                .subscribe(res => {
                // this.pedidoRepartidor.estado = res.data[0].pwa_delivery_status;
                observer.next(res.data);
            });
        });
    }
    // fin de pedido // guarda datos del pedido
    // isGrupoPedidos = si es grupo de pedidos
    // time_line_pedido guarda la hora de entrega
    finalizarPedido(isGrupoPedidos = false, time_line_pedido = null) {
        const comisionRepartidor = parseFloat(this.pedidoRepartidor.datosDelivery.costoTotalDelivery); // - parseFloat( this.pedidoRepartidor.datosComercio.pwa_delivery_comision_fija_no_afiliado );
        const propinaRepartidor = this.pedidoRepartidor.datosDelivery.propina.value;
        const costotalServicio = comisionRepartidor + parseFloat(propinaRepartidor);
        const _importePagaCliente = this.pedidoRepartidor.importePagaCliente ? parseFloat(this.pedidoRepartidor.importePagaCliente) : parseFloat(this.pedidoRepartidor.importePedido) + costotalServicio;
        // importeDepositar siempre y cuando el comercio no esta afiliado
        // const importeDepositar = _importePagaCliente - (parseFloat(this.pedidoRepartidor.importePedido) + costotalServicio);
        const _idRepartidor = this.pedidoRepartidor.datosRepartidor ? this.pedidoRepartidor.datosRepartidor.idrepartidor : this.infoTokenService.infoUsToken.usuario.idrepartidor;
        const _dataSend = {
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
        };
        // (a) = cuando el comercio no esta afiliado el importe que el repartidor debe depositar, el imnporte fijo de comercio no afiliado
        // (b) = precios de los productos sin comision
        this.crudService.postFree(_dataSend, 'repartidor', 'set-fin-pedido-entregado')
            .subscribe(res => {
            // console.log(res);
            // console.log('clean from finalizarPedido');
            // chequea si todos los pedidos estan finalizados
            if (isGrupoPedidos) {
                const _pedidoFinalizar = this.getPedidoSelect();
                this.listenService.setPedidoModificado(_pedidoFinalizar);
                const allPedidos = this.getLocalItems();
                // save estado pedido
                const elPedido = allPedidos.filter(p => p.idpedido === _pedidoFinalizar.idpedido)[0];
                elPedido.estado = 2;
                this.setLocalItems(allPedidos);
                this.socketService.emit('repartidor-notifica-fin-one-pedido', _pedidoFinalizar);
                // console.log('repartidor-notifica-fin-one-pedido');
                // chequea si los demas estan ya estan cerrados
                const numCerrados = allPedidos.filter(p => p.estado === 0).length;
                // if ( numCerrados === 0 ) {
                //   this.socketService.emit('repartidor-grupo-pedido-finalizado', _idRepartidor);
                //   // console.log('repartidor-grupo-pedido-finalizado');
                //   this.cleanLocal();
                //   this.router.navigate(['./main/pedidos']);
                // }
            }
            else {
                this.socketService.emit('repartidor-propio-notifica-fin-pedido', this.pedidoRepartidor);
                this.cleanLocal();
                // this.router.navigate(['./main/pedidos']);
            }
        });
    }
    // fin de pedido // guarda datos del pedido
    finalizarPedidoPropioRepartidor(time_line_pedido = null) {
        const _idPedidoRepartidor = this.pedidoRepartidor.datosRepartidor ? this.pedidoRepartidor.datosRepartidor.idrepartidor : this.infoTokenService.infoUsToken.usuario.idrepartidor;
        const _dataSend = {
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
        };
        // notifica cambios en el pedido, para colocar icono entregado en el mapa del repartidor
        this.pedidoRepartidor.estado = 4;
        this.pedidoRepartidor.paso_va = 4;
        this.pedidoRepartidor.pwa_delivery_status = 4;
        this.listenService.setPedidoModificado(this.pedidoRepartidor);
        // cuando termina el pedido el repartidor se guarda el tiempo en el pedido
        this.crudService.postFree(_dataSend, 'repartidor', 'set-fin-pedido-entregado')
            .subscribe(res => {
            // console.log(res);
            // console.log('repartidor-propio-notifica-fin-pedido');
            this.socketService.emit('repartidor-propio-notifica-fin-pedido', this.pedidoRepartidor);
            // this.cleanLocal();
            // this.router.navigate(['./repartidor/pedidos']);
        });
    }
    finalizarPedidoExpress(pedido, _listPedidos) {
        const _tipo_pedido = pedido.isretiroatm ? 'express' : 'retiro_atm';
        const _dataSend = {
            idpedido_mandado: pedido.idpedido_mandado,
            pedidos_quedan: _listPedidos,
            num_quedan: _listPedidos.pedidos.length,
            tipo_pedido: _tipo_pedido
        };
        this.crudService.postFree(_dataSend, 'repartidor', 'set-fin-pedido-express-entregado', true)
            .subscribe(res => console.log(res));
    }
    listaPedidosEntregados() {
        this._repartidor = this.infoTokenService.getInfoUs().usuario;
        this.socketService.emit('repartidor-grupo-pedido-finalizado', this._repartidor.idrepartidor);
        this.cleanLocal();
    }
    // // fin timer // busca otro repartidor
    pedidoNoAceptadoReasingar() {
        // estado = 1 es aceptado
        if (this.pedidoRepartidor.estado === 0) {
            // console.log('termina tiempo reasigna pedido repartidor-declina-pedido', this.pedidoRepartidor);
            const _num_reasignado = this.pedidoRepartidor.num_reasignado ? this.pedidoRepartidor.num_reasignado + 1 : 0;
            this.pedidoRepartidor.num_reasignado = _num_reasignado === 0 ? 1 : _num_reasignado;
            this.pedidoRepartidor.is_reasignado = true;
            // this.socketService.emit('repartidor-declina-pedido', this.pedidoRepartidor);
            // clear local pedido
            // console.log('clean from pedidoNoAceptadoReasingar');
            this.cleanLocal();
        }
    }
    darFormatoLocalPedidoRepartidorModel(_pedido) {
        // console.log('dar formato pedido');
        let pedido = new src_app_modelos_pedido_repartidor_model__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorModel"];
        if (!_pedido) {
            return;
        }
        if (_pedido === null || _pedido === void 0 ? void 0 : _pedido.conFormato) {
            pedido = _pedido;
        }
        else {
            if (!_pedido.datosItems) {
                pedido.idpedido = _pedido.idpedido;
                const subTotalesPedid = _pedido.json_datos_delivery.p_header.arrDatosDelivery.subTotales.length > 0 ? _pedido.json_datos_delivery.p_header.arrDatosDelivery.subTotales : _pedido.json_datos_delivery.p_subtotales;
                // pedido.datosItems = res[1].dataItems || res[1].datosItem;
                pedido.datosDelivery = _pedido.json_datos_delivery; // res[1].dataDelivery || res[1].datosDelivery;
                pedido.datosItems = _pedido.json_datos_delivery.p_body;
                pedido.datosDelivery = _pedido.json_datos_delivery.p_header.arrDatosDelivery;
                pedido.datosComercio = pedido.datosDelivery.establecimiento;
                pedido.datosCliente = pedido.datosDelivery.direccionEnvioSelected;
                pedido.datosSubtotales = subTotalesPedid;
                pedido.datosSubtotalesShow = pedido.datosDelivery.subTotales.length === 0 ? subTotalesPedid : pedido.datosDelivery.subTotales.length;
                pedido.conFormato = true;
            }
            else {
                pedido = _pedido;
            }
        }
        // coordenadas del comercio si esta en string lo pasa a decimal
        pedido.datosComercio.latitude = typeof pedido.datosComercio.latitude === 'string' ? parseFloat(pedido.datosComercio.latitude) : pedido.datosComercio.latitude;
        pedido.datosComercio.longitude = typeof pedido.datosComercio.longitude === 'string' ? parseFloat(pedido.datosComercio.longitude) : pedido.datosComercio.longitude;
        this.pedidoRepartidor = pedido;
        // this.setLocal();
    }
    // asignacion por barcode o por idpedido
    confirmarAsignacionReadBarCode(idpedidoLector) {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            let orden;
            let response = {};
            const _reparitdor = this.infoTokenService.getInfoUs().usuario;
            const _dataSendPedido = {
                idpedido: idpedidoLector
            };
            // get pedido
            this.crudService.postFree(_dataSendPedido, 'comercio', 'get-pedido-by-id', true)
                .subscribe((res) => {
                orden = res.data[0];
                // response = this.addPedidoInListPedidosPendientes(orden);
                observer.next(orden);
                // const _importePedido = parseFloat(orden.total_r);
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
    addPedidoInListPedidosPendientes(orden) {
        let response = {};
        const _reparitdor = this.infoTokenService.getInfoUs().usuario;
        const idpedidoLector = orden.idpedido;
        const _importePedido = parseFloat(orden.total_r);
        let pedidos_repartidor = this.getPedidoPorAceptar();
        orden.json_datos_delivery = typeof orden.json_datos_delivery !== 'object' ? JSON.parse(orden.json_datos_delivery) : orden.json_datos_delivery;
        if (pedidos_repartidor) {
            // buscar si el pedido ya fue agregado
            const isHayPedido = pedidos_repartidor.pedidos.filter(x => x.toString() === idpedidoLector.toString())[0];
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
        }
        else {
            const _listPedido = [];
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
        }
        // guardar pedido escaneado
        this.setPedidoPorAceptar(pedidos_repartidor);
        const _dataSend = {
            pedido: pedidos_repartidor,
            repartidor: this._repartidor
        };
        this.crudService.postFree(_dataSend, 'monitor', 'set-asignar-pedido-manual', true)
            .subscribe(resp => {
            console.log(resp);
            // orden.nom_repartidor = _reparitdor.nombre;
            // orden.idrepartidor = _reparitdor.idrepartidor;
            // orden.telefono_repartidor = _reparitdor.telefono_repartidor;
        });
        // return orden;
        response = {
            elPedido: orden,
            pedidos_repartidor: pedidos_repartidor
        };
        return response;
        // observer.next(response);
    }
    // chequea si ya llego al comercio
    checkLLegoComercio(listPedidos, geoPositionActual) {
        let geoPositionComercio = new src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_12__["GeoPositionModel"]();
        let _newTimeLinePedido = new src_app_modelos_time_line_pedido__WEBPACK_IMPORTED_MODULE_14__["TimeLinePedido"]();
        listPedidos.map((p) => {
            const comercioPedido = p.json_datos_delivery.p_header.arrDatosDelivery.establecimiento;
            _newTimeLinePedido = p.time_line || _newTimeLinePedido;
            geoPositionComercio.latitude = typeof comercioPedido.latitude === 'string' ? parseFloat(comercioPedido.latitude) : comercioPedido.latitude;
            geoPositionComercio.longitude = typeof comercioPedido.longitude === 'string' ? parseFloat(comercioPedido.longitude) : comercioPedido.longitude;
            if (!geoPositionComercio.latitude) {
                return;
            }
            const _distanciaMt = this.calcDistanciaService.calcDistanciaEnMetros(geoPositionActual, geoPositionComercio);
            // 100mtr a la redonda
            // const isLLego = geoPositionComercio.latitude ? 
            //                 this.calcDistanciaService.calcDistancia(geoPositionComercio, geoPositionActual, 100)
            //                 : false
            const isLLego = this.calcDistanciaService.calcDistancia(geoPositionActual, geoPositionComercio, 100);
            // p.llego_comercio = isLLego;
            p.distanciaMtr = _distanciaMt;
            // _newTimeLinePedido.llego_al_comercio = isLLego;
            // _newTimeLinePedido.llego_al_comercio = !_newTimeLinePedido.llego_al_comercio ? isLLego : false;
            if (isLLego) { // envia mensaje
                // if (_newTimeLinePedido.paso === 0) {
                // _newTimeLinePedido.mensaje_enviado.llego_al_comercio = true;
                if (_newTimeLinePedido.llego_al_comercio !== true) {
                    _newTimeLinePedido.llego_al_comercio = true;
                    _newTimeLinePedido.paso = 1;
                    p.msj_log += `paso 1  ${new Date().toLocaleTimeString()}`;
                    this.sendMsjService.msjClienteTimeLine(p, _newTimeLinePedido);
                }
                // }
            }
            else {
                // si sale del comercio con el pedido camino al cliente
                if (_newTimeLinePedido.paso === 1) {
                    // _newTimeLinePedido.mensaje_enviado.en_camino_al_cliente = true;
                    _newTimeLinePedido.en_camino_al_cliente = true;
                    _newTimeLinePedido.paso = 2;
                    p.msj_log += `paso 2  ${new Date().toLocaleTimeString()}`;
                    this.sendMsjService.msjClienteTimeLine(p, _newTimeLinePedido);
                }
            }
            p.time_line = _newTimeLinePedido;
        });
    }
}
PedidoRepartidorService.ɵfac = function PedidoRepartidorService_Factory(t) { return new (t || PedidoRepartidorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_crud_http_service__WEBPACK_IMPORTED_MODULE_2__["CrudHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_10__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_listen_status_service__WEBPACK_IMPORTED_MODULE_11__["ListenStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_calc_distancia_service__WEBPACK_IMPORTED_MODULE_13__["CalcDistanciaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_send_msj_service__WEBPACK_IMPORTED_MODULE_15__["SendMsjService"])); };
PedidoRepartidorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PedidoRepartidorService, factory: PedidoRepartidorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoRepartidorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _crud_http_service__WEBPACK_IMPORTED_MODULE_2__["CrudHttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _info_token_service__WEBPACK_IMPORTED_MODULE_10__["InfoTockenService"] }, { type: _listen_status_service__WEBPACK_IMPORTED_MODULE_11__["ListenStatusService"] }, { type: _socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"] }, { type: _calc_distancia_service__WEBPACK_IMPORTED_MODULE_13__["CalcDistanciaService"] }, { type: _send_msj_service__WEBPACK_IMPORTED_MODULE_15__["SendMsjService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/repartidor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/repartidor.service.ts ***!
  \*******************************************************/
/*! exports provided: RepartidorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepartidorService", function() { return RepartidorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/geoposition.model */ "./src/app/modelos/geoposition.model.ts");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _listen_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sse_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sse.service */ "./src/app/shared/services/sse.service.ts");
/* harmony import */ var _pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pedido-repartidor.service */ "./src/app/shared/services/pedido-repartidor.service.ts");


















class RepartidorService {
    constructor(crudService, socketService, infoToken, listenService, router, pedidoRepartidorService, sseService) {
        this.crudService = crudService;
        this.socketService = socketService;
        this.infoToken = infoToken;
        this.listenService = listenService;
        this.router = router;
        this.pedidoRepartidorService = pedidoRepartidorService;
        this.sseService = sseService;
        this.idSedeRepartidor = this.infoToken.getInfoUs().usuario.idsede_suscrito;
        this.idRepartidor = this.infoToken.getInfoUs().usuario.idrepartidor;
    }
    // guarda efectivo inicial
    guardarEfectivo(importe, _online = 1) {
        const _data = {
            idrepartidor: this.infoToken.getInfoUs().usuario.idrepartidor,
            efectivo: importe,
            online: _online
        };
        this.crudService.postFree(_data, 'repartidor', 'set-efectivo-mano', false)
            .subscribe(res => {
            console.log('ya esta', res);
        });
        // if (  _online === 1  ) {
        //   this.crudService.getAll('repartidor', 'get-view-event-new-pedido', false, false, true)
        //   .subscribe(res => {
        //     console.log('get-view-event-new-pedido', res);
        //   });
        // }
    }
    // listenPedidosNuevos() {
    //   const idRepartidor = this.infoToken.infoUsToken.usuario.idrepartidor;
    //   this.sseService
    //     .getServerSentEvent('repartidor', 'get-view-event-new-pedido', false, idRepartidor)
    //     .subscribe(data => console.log(data));
    // }
    guardarPositionActual(_pos) {
        const _data = {
            pos: _pos
        };
        this.crudService.postFree(_data, 'repartidor', 'set-position-now', true)
            .subscribe(res => {
        });
    }
    guardarPasoVa(_paso_va) {
        const _data = {
            paso_va: _paso_va
        };
        console.log('set-paso-pedido-va', _paso_va);
        this.crudService.postFree(_data, 'repartidor', 'set-paso-pedido-va', true)
            .subscribe(res => {
            console.log('.');
        });
    }
    guardarCamnioClave(_data) {
        _data.idrepartidor = this.idRepartidor;
        this.crudService.postFree(_data, 'repartidor', 'set-cambio-pass-repartidor', true);
    }
    // repartidor propio pedidos asignados
    getMisPedidosPropiosAsignados() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.crudService.getAll('repartidor', 'get-repartidor-propio-mis-pedidos', false, false, true)
                .subscribe((res) => {
                observer.next(res.data);
            });
        });
    }
    // emitir posicion actual (comercio / cliente)
    emitPositionNow(_coordenadas, pedido = null, idsedeComercio = null) {
        var _a;
        // emitir a comercio
        const _idComercio = this.idSedeRepartidor ? this.idSedeRepartidor : this.pedidoRepartidorService.pedidoRepartidor ? this.pedidoRepartidorService.pedidoRepartidor.idsede : null;
        const _pedido = pedido ? pedido : this.pedidoRepartidorService.pedidoRepartidor;
        const _dataSend = {
            coordenadas: {
                latitude: _coordenadas.lat || _coordenadas.latitude,
                longitude: _coordenadas.lng || _coordenadas.longitude,
            },
            idrepartidor: this.idRepartidor,
            idcliente: ((_a = _pedido === null || _pedido === void 0 ? void 0 : _pedido.datosCliente) === null || _a === void 0 ? void 0 : _a.idcliente) || null,
            idsede: idsedeComercio ? idsedeComercio : _idComercio,
            minuto: new Date().getMinutes() // para guadar position cada 2 minutos
        };
        console.log('repartidor-notifica-ubicacion', _dataSend);
        const geoposiionNow = new src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_2__["GeoPositionModel"];
        geoposiionNow.latitude = _coordenadas.latitude;
        geoposiionNow.longitude = _coordenadas.longitude;
        this.listenService.setMyPosition(geoposiionNow);
        this.socketService.emit('repartidor-notifica-ubicacion', _dataSend);
    }
    cerrarSession() {
        this.guardarEfectivo(0, 0);
        this.socketService.closeConnection();
        localStorage.clear();
        this.router.navigate(['../']);
    }
}
RepartidorService.ɵfac = function RepartidorService_Factory(t) { return new (t || RepartidorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_9__["PedidoRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sse_service__WEBPACK_IMPORTED_MODULE_8__["SseService"])); };
RepartidorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RepartidorService, factory: RepartidorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepartidorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"] }, { type: _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }, { type: _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"] }, { type: _listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_9__["PedidoRepartidorService"] }, { type: _sse_service__WEBPACK_IMPORTED_MODULE_8__["SseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/send-msj.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/send-msj.service.ts ***!
  \*****************************************************/
/*! exports provided: SendMsjService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMsjService", function() { return SendMsjService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ "./src/app/shared/services/socket.service.ts");






class SendMsjService {
    constructor(socketService, infoToken) {
        this.socketService = socketService;
        this.infoToken = infoToken;
    }
    // mensaje al cliente y actualiza timelime_en
    msjClienteTimeLine(p, time_line_pedido) {
        var _a, _b;
        let listClienteNotificar = [];
        this.elRepartidor = this.infoToken.getInfoUs().usuario;
        const rowDatos = (_b = (_a = p === null || p === void 0 ? void 0 : p.json_datos_delivery) === null || _a === void 0 ? void 0 : _a.p_header) === null || _b === void 0 ? void 0 : _b.arrDatosDelivery;
        if (rowDatos) {
            const rowCliente = {
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
}
SendMsjService.ɵfac = function SendMsjService_Factory(t) { return new (t || SendMsjService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_1__["InfoTockenService"])); };
SendMsjService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SendMsjService, factory: SendMsjService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendMsjService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: _info_token_service__WEBPACK_IMPORTED_MODULE_1__["InfoTockenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/socket.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/socket.service.ts ***!
  \***************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_config_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.const */ "./src/app/shared/config/config.const.ts");
/* harmony import */ var src_app_modelos_item_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modelos/item.tipoconsumo.model */ "./src/app/modelos/item.tipoconsumo.model.ts");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import { MipedidoService } from './mipedido.service';




class SocketService {
    constructor(infoTockenService, router) {
        this.infoTockenService = infoTockenService;
        this.router = router;
        // private item: ItemModel;
        this.urlSocket = _config_config_const__WEBPACK_IMPORTED_MODULE_3__["URL_SERVER_SOCKET"];
        this.isSocketOpen = false;
        this.isSocketOpenReconect = false;
        // listen is socket open
        this.isSocketOpenSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.isSocketOpen$ = this.isSocketOpenSource.asObservable();
        this.msjConexSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('Cargando datos ...');
        this.msjConex$ = this.msjConexSource.asObservable();
        this.resTipoConsumo = [];
        this.verificandoConexion = false;
        this.infoTockenService.converToJSON();
    }
    connect(infoUser = null, opFrom = 1) {
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
        const infToken = this.infoTockenService.infoUsToken || infoUser;
        const dataSocket = {
            // idorg: infToken.idorg,
            // idsede: infToken.idsede,
            idrepartidor: infToken.usuario.idrepartidor,
            // idusuario: infToken.idusuario,
            // idcliente: infToken.idcliente,
            // iscliente: infToken.isCliente,
            isFromApp: opFrom,
            isRepartidor: true,
            firts_socketid: infToken.socketId
        };
        // console.log('dataSocket', dataSocket);
        // desarrollo
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.urlSocket, {
            secure: true,
            rejectUnauthorized: false,
            // forceNew: true,
            query: dataSocket
            // forceNew: true
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
    onGetCarta() {
        // if ( this.isSocketOpen ) { return new Observable(observer => {observer.next(null); }); }
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('getLaCarta', (res) => {
                // this.objLaCartaSocket = {
                //   'carta': <CartaModel[]>res[0].carta,
                //   'bodega': <SeccionModel[]>res[0].bodega
                // };
                observer.next(res);
            });
        });
    }
    // onGetCarta() {
    //   return this.listen('getLaCarta');
    // }
    onGetTipoConsumo() {
        // if ( this.isSocketOpen ) { return new Observable(observer => {observer.next(null); }); }
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('getTipoConsumo', (res) => {
                // this.resTipoConsumo = res;
                observer.next(res);
            });
        });
    }
    // onGetTipoConsumo() {
    //   return this.listen('getTipoConsumo');
    // }
    // verificar para eliminar
    getDataTipoConsumo() {
        const resTPC = [];
        this.resTipoConsumo.map((t) => {
            const _objTpcAdd = new src_app_modelos_item_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_4__["ItemTipoConsumoModel"]();
            _objTpcAdd.descripcion = t.descripcion;
            _objTpcAdd.idtipo_consumo = t.idtipo_consumo;
            _objTpcAdd.titulo = t.titulo;
            resTPC.push(_objTpcAdd);
        });
        return resTPC;
    }
    onItemModificado() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('itemModificado-pwa', (res) => {
                observer.next(res);
            });
        });
    }
    // onItemModificado() {
    //   return this.listen('observer');
    // }
    onNuevoItemAddInCarta() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('nuevoItemAddInCarta', (res) => {
                observer.next(res);
            });
        });
    }
    // onNuevoItemAddInCarta() {
    //   return this.listen('nuevoItemAddInCarta');
    // }
    // cuando se recupera el stock de pedido que caduco el tiempo
    onItemResetCant() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('itemResetCant-pwa', (res) => {
                observer.next(res);
            });
        });
    }
    // onItemResetCant() {
    //   return this.listen('itemResetCant');
    // }
    // load reglas de la carta y subtotales
    onReglasCarta() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('getReglasCarta', (res) => {
                observer.next(res);
            });
        });
    }
    // onReglasCarta() {
    //   return this.listen('getReglasCarta');
    // }
    // datos de la sede, impresoras
    // load reglas de la carta y subtotales
    onGetDatosSede() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('getDataSede', (res) => {
                observer.next(res);
            });
        });
    }
    // respuesta de hacer un nuevo pedido
    onGetNuevoPedido() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('nuevoPedido', (res) => {
                observer.next(res);
            });
        });
    }
    // cuando el cliente paga el pedido
    onPedidoPagado() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('pedido-pagado-cliente', (res) => {
                observer.next(res);
            });
        });
    }
    onDeliveryPedidoChangeStatus() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('delivery-pedido-estado', (res) => {
                observer.next(res);
            });
        });
    }
    // se lanza despues de que el cliente califica al repartidor
    onDeliveryPedidoFin() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('repartidor-notifica-fin-pedido', (res) => {
                observer.next(res);
            });
        });
    }
    // onGetDatosSede() {
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
    onRepartidorNuevoPedido() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('repartidor-nuevo-pedido', (res) => {
                observer.next(res);
            });
        });
    }
    // repartidor pripio
    onRepartidorPropioNuevoPedidoAsignado() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('repartidor-propio-nuevo-pedido-asignado', (res) => {
                observer.next(res);
            });
        });
    }
    //// cuando se termina el tiempo de aceptar el servidor quita pedido
    onRepartidorServerQuitaPedido() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('repartidor-notifica-server-quita-pedido', (res) => {
                observer.next(res);
            });
        });
    }
    //// esto se ejecuta cuando se conecta
    onRepartidorGetPedidoPendienteAceptar() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('repartidor-get-pedido-pendiente-aceptar', (res) => {
                observer.next(res);
            });
        });
    }
    // nuevo pedido asignado desde el comercio
    onPedidoAsignadoFromComercio() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('set-repartidor-pedido-asigna-comercio', (res) => {
                observer.next(res);
            });
        });
    }
    emit(evento, data) {
        // verificar estado del socket
        this.socket.emit(evento, data);
    }
    listen(evento) {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on(evento, (res) => {
                observer.next(res);
            });
        });
    }
    closeConnection() {
        try {
            this.socket.disconnect();
        }
        catch (error) { }
        // this.isSocketOpen = false;
        // this.isSocketOpenSource.next(false);
        this.statusConexSocket(false, 'disconnect');
    }
    listenStatusSocket() {
        this.socket.on('finishLoadDataInitial', () => {
            this.statusConexSocket(true, '');
            this.isSocketOpenReconect = true; // evita que cargen nuevamente las configuraciones basicas, solo carga carta
            console.log('conected socket finishLoadDataInitial');
        });
        // estados del navigator
        window.addEventListener('focus', (event) => {
            this.verifyConexionSocket();
        });
        window.addEventListener('online', () => {
            this.showStatusConexNavigator(true, 'navigator_online');
        });
        window.addEventListener('offline', () => {
            this.showStatusConexNavigator(false, 'navigator_offline');
        });
        // estado del socket
        this.socket.on('connect', () => {
            console.log('socket connect');
            this.statusConexSocket(true, 'connect');
            this.infoTockenService.setSocketId(this.socket.id);
            // verifica el tiempo de session
            if (!this.infoTockenService.verificarContunuarSession()) {
                this.closeConnection();
                this.cerrarSessionBeforeTimeSession();
                return;
            }
        });
        this.socket.on('connect_failed', (res) => {
            console.log('itento fallido de conexion', res);
            this.statusConexSocket(false, 'connect_failed');
        });
        this.socket.on('connect_error', (res) => {
            console.log('error de conexion', res);
            this.statusConexSocket(false, 'connect_error');
        });
        this.socket.on('disconnect', (res) => {
            console.log('disconnect');
            this.statusConexSocket(false, 'disconnect');
        });
        // escucha la verificacion de conexion
        this.socket.on('verificar-conexion', (res) => {
            // verifica el tiempo de session
            if (!this.infoTockenService.verificarContunuarSession()) {
                this.closeConnection();
                this.cerrarSessionBeforeTimeSession();
                return;
            }
            if (res === true) {
                console.log('VERIFY CONECTION => OK');
                this.verificandoConexion = false;
                return;
            }
            // no hay conexion -- en pruebas ver comportamiento
            console.log('VERIFY CONECTION => FALSE');
            this.closeConnection();
            this.statusConexSocket(false, 'disconnect');
            this.connect();
            this.verificandoConexion = false;
        });
    }
    statusConexSocket(isConncet, evento) {
        this.isSocketOpen = isConncet;
        this.isSocketOpenSource.next(isConncet);
        let msj = 'Conectando datos ...';
        switch (evento) {
            case 'conected': // conectando
                msj = 'Conectando datos ...';
                break;
            case 'connect_failed': // conectando
                msj = 'Conectando datos ..';
                break;
            case 'connect_error': // conectando
                msj = 'Conectando datos .';
                break;
            case 'disconnect': // conectando
                msj = 'Restableciendo conexion ...';
                break;
            case 'navigator_offline': // conectando
                msj = 'Conexion cerrada -b ...';
                break;
            case 'navigator_online': // conectando
                msj = 'Conectando datos -b ...';
                break;
        }
        this.msjConexSource.next(msj);
    }
    showStatusConexNavigator(online, evento) {
        this.statusConexSocket(online, evento);
        // this.isSocketOpen = online;
        // this.isSocketOpenSource.next(online);
        if (online) {
            console.log('navegador conectado');
        }
        else {
            console.log('!!! navegador desconectado !!');
            // this.verificandoConexion = false;
        }
    }
    // verifica el estado del socket, si esta cerrado intenta abrirlo
    verifyConexionSocket() {
        if (this.verificandoConexion) {
            return;
        }
        this.verificandoConexion = true;
        this.emit('verificar-conexion', this.socket.id);
    }
    // cierra session despues de que se comprueba que el tiempo de incio se de session supero lo establecido
    cerrarSessionBeforeTimeSession(reload = false) {
        this.router.navigate(['../']);
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/sse.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/sse.service.ts ***!
  \************************************************/
/*! exports provided: SseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SseService", function() { return SseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config_config_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.const */ "./src/app/shared/config/config.const.ts");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");






class SseService {
    constructor(_zone, curdService) {
        this._zone = _zone;
        this.curdService = curdService;
        this.urlService = _config_config_const__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"];
    }
    getServerSentEvent(controller, evento, conToken = false, id = 0) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(observer => {
            console.log('servicio sse');
            const eventSource = this.getEventSource(controller, evento, conToken, id);
            eventSource.onmessage = (event) => {
                this._zone.run(() => {
                    observer.next(event.data);
                });
            };
            eventSource.onerror = error => {
                this._zone.run(() => {
                    observer.error(error);
                });
            };
        });
    }
    getEventSource(controller, evento, conToken = true, id = 0) {
        const url = `${this.urlService}/${controller}/${evento}?id=${id}`;
        console.log('url', url);
        // const header = conToken ? this.curdService.getHeaderHttpClientForm() : this.curdService.getHeaderHttpClientFormNoToken();
        return new EventSource(url);
    }
}
SseService.ɵfac = function SseService_Factory(t) { return new (t || SseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"])); };
SseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SseService, factory: SseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/timer-limit.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/timer-limit.service.ts ***!
  \********************************************************/
/*! exports provided: TimerLimitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerLimitService", function() { return TimerLimitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);



class TimerLimitService {
    constructor() {
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
    destroy() {
        this.clearTimeout();
    }
    playCountTimerLimit() {
        // if ( this.infoToken.isDelivery() ) { return; } // cuando es delivery no cuenta tiempo
        if (this.isPlayTimer) {
            return;
        }
        this.isPlayTimer = true;
        this.initCount();
    }
    resetCountTimerLimit() {
        // if ( this.infoToken.isDelivery() ) { return; } // cuando es delivery no cuenta tiempo
        if (localStorage.getItem('sys::tcount')) {
            this.isPlayTimer = true;
            this.initCount();
        }
        else {
            this.stopCountTimerLimit();
        }
    }
    initCount() {
        // if ( this.infoToken.isDelivery() ) { return; } // cuando es delivery no cuenta tiempo
        this.valPorcentaje = 0;
        this.init = localStorage.getItem('sys::tcount') ? parseInt(localStorage.getItem('sys::tcount'), 0) : 0;
        this.isTimeLimitSource.next(false);
        this.isPorgressVisibleSource.next(true);
        // restar 60 - 1
        this.countTimer = this.maxTime - this.setTimeDate();
        this.progressCount();
    }
    progressCount() {
        let lastValPorcentaje = 0;
        if (!this.isPlayTimer) {
            return;
        }
        this.countdownTimerRef = setTimeout(() => {
            this.init = this.setTimeDate();
            this.countTimer--;
            this.valPorcentaje = Math.round((this.init / this.maxTime) * 100);
            // guardamos en el
            localStorage.setItem('sys::tcount', this.init.toString());
            if (this.init > this.maxTime) {
                this.init = this.maxTime;
                this.valPorcentaje = 100;
                this.countdownSource.next(this.valPorcentaje);
                this.isTimeLimitSource.next(true);
                this.stopCountTimerLimit();
            }
            else {
                // console.log('timer limit', this.valPorcentaje);
                // para que no salga la alerta de incio solo una vez
                if (lastValPorcentaje !== this.valPorcentaje) {
                    this.countdownSource.next(this.valPorcentaje);
                }
                this.progressCount();
            }
            this.countTimeSource.next(this.countTimer);
            lastValPorcentaje = this.valPorcentaje;
        }, 1000);
    }
    setTimeDate() {
        const ms_new = new Date().getTime();
        const timeAfter = localStorage.getItem('sys::tnum') ? parseInt(localStorage.getItem('sys::tnum'), 0) : ms_new;
        const ms = ms_new - timeAfter;
        const sec = Math.floor((ms / 1000));
        localStorage.setItem('sys::tnum', timeAfter.toString());
        return sec;
    }
    stopCountTimerLimit() {
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
    clearTimeout() {
        if (this.countdownTimerRef) {
            clearTimeout(this.countdownTimerRef);
            this.countdownTimerRef = null;
        }
    }
}
TimerLimitService.ɵfac = function TimerLimitService_Factory(t) { return new (t || TimerLimitService)(); };
TimerLimitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimerLimitService, factory: TimerLimitService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerLimitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\capacitor\pwa-app-pedido-repartidor-anterior\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map