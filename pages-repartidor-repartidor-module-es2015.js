(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-repartidor-repartidor-module"],{

/***/ "./node_modules/rxjs/internal/operators/takeUntil.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/takeUntil.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
function takeUntil(notifier) {
    return function (source) { return source.lift(new TakeUntilOperator(notifier)); };
}
exports.takeUntil = takeUntil;
var TakeUntilOperator = (function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        var notifierSubscription = subscribeToResult_1.subscribeToResult(takeUntilSubscriber, this.notifier);
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    };
    return TakeUntilOperator;
}());
var TakeUntilSubscriber = (function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.seenValue = false;
        return _this;
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.seenValue = true;
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
    };
    return TakeUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./src/app/pages/repartidor/indicaciones-grupo-mapa/indicaciones-grupo-mapa.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/repartidor/indicaciones-grupo-mapa/indicaciones-grupo-mapa.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: IndicacionesGrupoMapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicacionesGrupoMapaComponent", function() { return IndicacionesGrupoMapaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/pedido-repartidor.service */ "./src/app/shared/services/pedido-repartidor.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var src_app_componentes_dialog_orden_detalle_dialog_orden_detalle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/componentes/dialog-orden-detalle/dialog-orden-detalle.component */ "./src/app/componentes/dialog-orden-detalle/dialog-orden-detalle.component.ts");
/* harmony import */ var _componentes_mapa_ordenes_mapa_ordenes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../componentes/mapa-ordenes/mapa-ordenes.component */ "./src/app/componentes/mapa-ordenes/mapa-ordenes.component.ts");








class IndicacionesGrupoMapaComponent {
    // _listPedidos: any;
    constructor(dialog, pedidoRepartidorService) {
        this.dialog = dialog;
        this.pedidoRepartidorService = pedidoRepartidorService;
    }
    ngOnInit() {
        // this._listPedidos = JSON.parse(JSON.stringify(this.pedidoRepartidorService.getLocalItems()));
    }
    openDialogOrden(orden) {
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        // marcador para que no cierrre como repartidor propio en orden detalle.
        orden.isRepartidorRed = true;
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        _dialogConfig.width = '700px';
        _dialogConfig.panelClass = ['my-dialog-orden-detalle', 'my-dialog-scrool'];
        _dialogConfig.data = {
            laOrden: orden
        };
        // console.log('orden openDialogOrden', orden);
        this.pedidoRepartidorService.setPedidoSelect(orden);
        const dialogRef = this.dialog.open(src_app_componentes_dialog_orden_detalle_dialog_orden_detalle_component__WEBPACK_IMPORTED_MODULE_3__["DialogOrdenDetalleComponent"], _dialogConfig);
    }
}
IndicacionesGrupoMapaComponent.ɵfac = function IndicacionesGrupoMapaComponent_Factory(t) { return new (t || IndicacionesGrupoMapaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorService"])); };
IndicacionesGrupoMapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndicacionesGrupoMapaComponent, selectors: [["app-indicaciones-grupo-mapa"]], decls: 7, vars: 1, consts: [[1, "animated", "fadeInDown", "container-body"], [1, "p-3", "bg-dark", "text-white", "fs-13", "d-flex", "justify-content-between"], [1, "content-body-mapa"], [3, "trazarRuta", "pedidoOpen"]], template: function IndicacionesGrupoMapaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pedidos - Ruta mas corta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-mapa-ordenes", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pedidoOpen", function IndicacionesGrupoMapaComponent_Template_app_mapa_ordenes_pedidoOpen_6_listener($event) { return ctx.openDialogOrden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trazarRuta", true);
    } }, directives: [_componentes_mapa_ordenes_mapa_ordenes_component__WEBPACK_IMPORTED_MODULE_4__["MapaOrdenesComponent"]], styles: [".content-body-mapa[_ngcontent-%COMP%] {\r\n    \r\n    height: calc(100vh - 109px);\r\n    overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYXJ0aWRvci9pbmRpY2FjaW9uZXMtZ3J1cG8tbWFwYS9pbmRpY2FjaW9uZXMtZ3J1cG8tbWFwYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVwYXJ0aWRvci9pbmRpY2FjaW9uZXMtZ3J1cG8tbWFwYS9pbmRpY2FjaW9uZXMtZ3J1cG8tbWFwYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYm9keS1tYXBhIHtcclxuICAgIC8qIG1hcmdpbi10b3A6IDU2cHg7ICovXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDlweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicacionesGrupoMapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indicaciones-grupo-mapa',
                templateUrl: './indicaciones-grupo-mapa.component.html',
                styleUrls: ['./indicaciones-grupo-mapa.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/repartidor/indicaciones-pedido/indicaciones-pedido.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/repartidor/indicaciones-pedido/indicaciones-pedido.component.ts ***!
  \***************************************************************************************/
/*! exports provided: IndicacionesPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicacionesPedidoComponent", function() { return IndicacionesPedidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/pedido-repartidor.service */ "./src/app/shared/services/pedido-repartidor.service.ts");
/* harmony import */ var src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/gps-ubicacion-repartidor.service */ "./src/app/shared/services/gps-ubicacion-repartidor.service.ts");
/* harmony import */ var src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/calc-distancia.service */ "./src/app/shared/services/calc-distancia.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "./node_modules/rxjs/internal/operators/takeUntil.js");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_modelos_datos_calificado_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modelos/datos.calificado.model */ "./src/app/modelos/datos.calificado.model.ts");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var src_app_componentes_dialog_calificacion_dialog_calificacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/componentes/dialog-calificacion/dialog-calificacion.component */ "./src/app/componentes/dialog-calificacion/dialog-calificacion.component.ts");
/* harmony import */ var src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/timer-limit.service */ "./src/app/shared/services/timer-limit.service.ts");
/* harmony import */ var src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/repartidor.service */ "./src/app/shared/services/repartidor.service.ts");
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
/* harmony import */ var _componentes_mapa_solo_mapa_solo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../componentes/mapa-solo/mapa-solo.component */ "./src/app/componentes/mapa-solo/mapa-solo.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");





























function IndicacionesPedidoComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ver detalle del pedido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicacionesPedidoComponent_p_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Referencia: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r204.dataPedido.datosDelivery.referencia, "");
} }
function IndicacionesPedidoComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Importe a cobrar: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cliente paga con: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" S/. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r205.importeEfectivoPedido, ".2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r205.dataPedido.datosDelivery.paga_con, "");
} }
function IndicacionesPedidoComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicacionesPedidoComponent_div_52_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208); const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r207.callPhone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " LLamar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicacionesPedidoComponent_div_52_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208); const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r209.redirectWhatsApp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Enviar Mensaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "success": a0 }; };
const _c1 = function (a0, a1) { return { "active": a0, "success": a1 }; };
class IndicacionesPedidoComponent {
    constructor(pedidoRepartidorService, repartidorService, geoPositionService, calcDistanciaService, router, socketService, infoTokenService, dialog, timerService, listenService) {
        this.pedidoRepartidorService = pedidoRepartidorService;
        this.repartidorService = repartidorService;
        this.geoPositionService = geoPositionService;
        this.calcDistanciaService = calcDistanciaService;
        this.router = router;
        this.socketService = socketService;
        this.infoTokenService = infoTokenService;
        this.dialog = dialog;
        this.timerService = timerService;
        this.listenService = listenService;
        this.coordenadasDestino = {};
        this.importeEfectivoPedido = 0;
        this.btnTitlePasos = 'Empezar';
        this.btnIsVisible = true;
        this.btnTerminarVisible = false; // si el pedido ya fue cerrado pero no llego la notificacion socket
        this._desAccionComprar = 'RECOGER'; // cuando es comercio afiliado. si no dira comprar.
        this.radioUbicacionActiva = 60; // radio a la redonda // comercio 60 cliente 100
        this.destroy$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnInit() {
        // verificar estado del pedido
        this.dataPedido = this.pedidoRepartidorService.pedidoRepartidor;
        this.pedidoRepartidorService.verificarEstadoPedido(this.pedidoRepartidorService.pedidoRepartidor.idpedido)
            .subscribe((res) => {
            this.dataPedido.estado = res;
            this.pedidoRepartidorService.setLocal();
            this.loadInit();
        });
        this.idClienteNotifyPos = this.dataPedido.datosCliente.idcliente;
        this.idSedeNotifiPos = this.dataPedido.datosComercio.idsede;
        this.dataPedido.datosDelivery.paga_con = this.dataPedido.datosDelivery.paga_con.replace('undefined', '');
        this._desAccionComprar = this.dataPedido.datosComercio.pwa_delivery_comision_fija_no_afiliado === 0 ? 'RECOGER' : 'COMPRAR';
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    loadInit() {
        this.dataPedido = this.pedidoRepartidorService.pedidoRepartidor;
        if (this.dataPedido.estado.toString() === '4') {
            this.btnTerminarVisible = true;
            this.dataPedido.paso_va = 4;
            this.pedidoRepartidorService.setPasoVa(4);
        }
        // solo desarrollo
        // this.dataPedido.paso_va = 2;
        switch (this.dataPedido.datosDelivery.metodoPago.idtipo_pago) {
            case 1:
                this.descripcionPago = `Pagar S/. ${parseFloat(this.dataPedido.importePedido).toFixed(2)}`;
                this.importeEfectivoPedido = parseFloat(this.dataPedido.importePagaCliente);
                break;
            case 2:
                this.descripcionPago = `El pedido ya esta pagado, solo entregar.`;
                break;
            case 3: // yape
                this.descripcionPago = `Pagar S/. ${parseFloat(this.dataPedido.importePedido).toFixed(2)}`;
                this.importeEfectivoPedido = parseFloat(this.dataPedido.importePagaCliente);
                break;
        }
        // if ( this.dataPedido.datosDelivery.metodoPago.idtipo_pago === 1 ) {
        //   this.descripcionPago = `Pagar en efectivo S/. ${ parseFloat(this.dataPedido.importePedido).toFixed(2)}`;
        //   // this.importeEfectivoPedido = parseFloat(this.dataPedido.importePedido) + parseFloat(this.dataPedido.c_servicio);
        //   this.importeEfectivoPedido = parseFloat(this.dataPedido.importePagaCliente);
        // } else {
        //   this.descripcionPago = `El pedido ya esta pagado, solo recoger.`;
        // }
        this.showPasos();
        setTimeout(() => {
            this.listenGeoPosition();
        }, 600);
    }
    listenGeoPosition() {
        // iniciamos el gps
        // this.geoPositionService.onGeoWatchPosition();
        this.geoPositionActual = this.geoPositionService.geoPosition;
        // this.geoPositionService.geoPositionNow$.subscribe((res: GeoPositionModel) => {
        this.listenService.myPosition$
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            res = !(res === null || res === void 0 ? void 0 : res.latitude) ? this.geoPositionActual : res;
            if (!res.latitude) {
                return;
            }
            // verificar en que paso esta
            // si paso 1 verificar si se acerca al coordenadas destino y activar boton accion
            this.geoPositionActual = res;
            const isLLego = this.coordenadasDestino.latitude ? this.calcDistanciaService.calcDistancia(this.geoPositionActual, this.coordenadasDestino, this.radioUbicacionActiva) : false;
            // console.log('distancia listen llego ?', isLLego);
            // console.log('distancia listen this.radioUbicacionActiva ?', this.radioUbicacionActiva);
            // enviar posicion
            // const _data = {
            //   coordenadas : this.geoPositionActual,
            //   idcliente: this.pedidoRepartidorService.pedidoRepartidor.datosCliente.idcliente
            // };
            // this.repartidorService.emitPositionNow(this.geoPositionActual, this.dataPedido, this.idSedeNotifiPos);
            // this.socketService.emit('repartidor-notifica-ubicacion', _data);
            if (isLLego) {
                if (this.dataPedido.paso_va === 1) {
                    this.dataPedido.paso_va = 2;
                    this.pedidoRepartidorService.setPasoVa(2);
                    this.showPasos();
                    // this.btnIsVisible = true;
                    // this.btnTitlePasos = 'Empezar';
                }
                // si ya llego al lugar de entrega
                // if ( this.dataPedido.paso_va === 3) {
                //   this.dataPedido.paso_va = 4;
                //   this.pedidoRepartidorService.setPasoVa(4);
                //   this.showPasos();
                // }
            }
            if (this.dataPedido.paso_va === 3) {
                this.dataPedido.paso_va = 4;
                this.pedidoRepartidorService.setPasoVa(4);
                this.showPasos();
            }
        });
        this.socketService.onDeliveryPedidoFin()
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(res => {
            // lanzar calificacion al cliente
            // console.log('fin del pedido idrepartidor', res);
            this.openDialogCalificacion();
        });
    }
    openDialogCalificacion() {
        var _a;
        if (!((_a = this.dataPedido) === null || _a === void 0 ? void 0 : _a.idpedido)) {
            return;
        } // cuando el cliente termina y ya el pedido ha sido terminiado por el repartidor
        const dataCalificado = new src_app_modelos_datos_calificado_model__WEBPACK_IMPORTED_MODULE_8__["DatosCalificadoModel"];
        dataCalificado.idrepartidor = this.infoTokenService.infoUsToken.usuario.idrepartidor;
        dataCalificado.idcliente = this.dataPedido.datosCliente.idcliente;
        dataCalificado.idpedido = this.dataPedido.idpedido;
        dataCalificado.tipo = 2;
        dataCalificado.showNombre = true;
        dataCalificado.nombre = this.dataPedido.datosDelivery.nombre;
        dataCalificado.titulo = 'Como calificas al cliente?';
        dataCalificado.showTitulo = true;
        dataCalificado.showMsjTankyou = true;
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogConfig"]();
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        _dialogConfig.data = {
            dataCalificado: dataCalificado
        };
        const dialogRef = this.dialog.open(src_app_componentes_dialog_calificacion_dialog_calificacion_component__WEBPACK_IMPORTED_MODULE_11__["DialogCalificacionComponent"], _dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
            // notificar al repartidor fin del pedido
            this.timerService.stopCountTimerLimit();
            this.pedidoRepartidorService.finalizarPedido();
            // this.router.navigate(['./repartidor/pedidos']);
        });
    }
    showPasos() {
        this.dataPedido.paso_va = this.dataPedido.paso_va ? this.dataPedido.paso_va : 1;
        // console.log('this.dataPedido.paso_va', this.dataPedido.paso_va);
        // console.log(this.dataPedido);
        switch (this.dataPedido.paso_va) {
            case 1 || false:
                this.coordenadasDestino.latitude = this.dataPedido.datosComercio.latitude;
                this.coordenadasDestino.longitude = this.dataPedido.datosComercio.longitude;
                this.btnTitlePasos = 'Empezar';
                this.radioUbicacionActiva = 350; // radio del cliente
                break;
            case 2: // apuntar a la direccion del cliente
                this.btnIsVisible = true;
                this.coordenadasDestino.latitude = this.dataPedido.datosCliente.latitude;
                this.coordenadasDestino.longitude = this.dataPedido.datosCliente.longitude;
                this.btnTitlePasos = 'Paso 3 Empezar';
                this.radioUbicacionActiva = 350; // radio del cliente
                break;
            case 3: // ir a la direccion // si recarga ya no sale
                this.btnIsVisible = true;
                this.coordenadasDestino.latitude = this.dataPedido.datosCliente.latitude;
                this.coordenadasDestino.longitude = this.dataPedido.datosCliente.longitude;
                this.btnTitlePasos = 'Paso 3 Empezar';
                this.radioUbicacionActiva = 350; // radio del cliente
                break;
            case 4: //
                this.btnIsVisible = true;
                this.coordenadasDestino.latitude = this.dataPedido.datosCliente.latitude;
                this.coordenadasDestino.longitude = this.dataPedido.datosCliente.longitude;
                this.radioUbicacionActiva = 350; // radio del cliente
                this.btnTitlePasos = 'Entregado, terminar.';
                break;
            default:
                this.coordenadasDestino.latitude = this.dataPedido.datosCliente.latitude;
                this.coordenadasDestino.longitude = this.dataPedido.datosCliente.longitude;
                break;
        }
    }
    btnEjecutar() {
        let linkGPS = '';
        switch (this.dataPedido.paso_va) {
            case 1:
                linkGPS = `http://maps.google.com/maps?saddr=${this.geoPositionActual.latitude},${this.geoPositionActual.longitude}&daddr=${this.coordenadasDestino.latitude},${this.coordenadasDestino.longitude}`;
                window.open(linkGPS, '_blank');
                this.btnIsVisible = false;
                // this.btnTitlePasos = 'Llegue';
                // this.pedidoRepartidorService.setPasoVa(2);
                break;
            case 2: // apuntar a la direccion del cliente
                linkGPS = `http://maps.google.com/maps?saddr=${this.geoPositionActual.latitude},${this.geoPositionActual.longitude}&daddr=${this.coordenadasDestino.latitude},${this.coordenadasDestino.longitude}`;
                window.open(linkGPS, '_blank');
                this.btnIsVisible = false;
                // this.btnTitlePasos = 'Llegue';
                this.dataPedido.paso_va = 3;
                this.pedidoRepartidorService.setPasoVa(3);
                break;
            case 3: // apuntar a la direccion del cliente
                linkGPS = `http://maps.google.com/maps?saddr=${this.geoPositionActual.latitude},${this.geoPositionActual.longitude}&daddr=${this.coordenadasDestino.latitude},${this.coordenadasDestino.longitude}`;
                window.open(linkGPS, '_blank');
                this.btnIsVisible = false;
                // this.btnTitlePasos = 'Llegue';
                this.dataPedido.paso_va = 3;
                this.pedidoRepartidorService.setPasoVa(3);
                break;
            case 4: // terminar pedido / solo si la notificacion socket no llego // o si el cliente no termino el pedido
                this.openDialogCalificacion();
                break;
        }
        this.socketEmitEstadoPedido(this.dataPedido.paso_va);
    }
    showDetallePedido() {
        if (this.dataPedido.paso_va >= 2) {
            this.router.navigate(['./main/pedido-detalle']);
        }
    }
    redirectWhatsApp() {
        const _link = `https://api.whatsapp.com/send?phone=51${this.dataPedido.datosDelivery.telefono}`;
        window.open(_link, '_blank');
    }
    callPhone() {
        window.open(`tel:${this.dataPedido.datosDelivery.telefono}`);
    }
    socketEmitEstadoPedido(_estado) {
        const _data = {
            idcliente: this.dataPedido.datosCliente.idcliente,
            idpedido: this.dataPedido.idpedido,
            estado: _estado
        };
        this.socketService.emit('repartidor-notifica-estado-pedido', _data);
    }
}
IndicacionesPedidoComponent.ɵfac = function IndicacionesPedidoComponent_Factory(t) { return new (t || IndicacionesPedidoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_13__["RepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_2__["GpsUbicacionRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_3__["CalcDistanciaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_9__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_12__["TimerLimitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_14__["ListenStatusService"])); };
IndicacionesPedidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndicacionesPedidoComponent, selectors: [["app-indicaciones-pedido"]], decls: 56, vars: 28, consts: [[1, "animated", "fadeInDown", "container-body"], [1, "p-3", "bg-dark", "text-white", "fs-13", "d-flex", "justify-content-between"], [1, "border"], [3, "coordenadas"], [1, "p-3"], [1, "item-paso", "d-flex", "active", 3, "ngClass"], [1, "num"], [1, "instrunccion", "p-2", "fs-13"], [1, "text-secondary", "fw-600", "fs-12"], [1, "fw-100"], ["matRipple", "", 1, "item-paso", "d-flex", 3, "ngClass", "click"], [1, "fw-600", "fs-12"], [1, "fw-600", "fs-15", "text-dark"], [1, "text-secondary"], [1, "fw-600"], [4, "ngIf"], [1, "item-paso", "d-flex", 3, "ngClass"], ["class", "fw-100", 4, "ngIf"], ["matRipple", "", 1, "xfooter", "bg-success", "w-100", "fs-20", "text-white", "animated", "fadeInUp", "delay-0-5s", 3, "hidden", "click"], [1, "text-info"], [1, "row", "text-center"], ["matRipple", "", 1, "col-6", "border-right", "text-info", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-phone"], ["matRipple", "", 1, "col-6", "text-info", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-commenting-o"]], template: function IndicacionesPedidoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pasos para entregar el pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-mapa-solo", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dirigirse al comercio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicacionesPedidoComponent_Template_div_click_21_listener() { return ctx.showDetallePedido(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pedir comprobante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, IndicacionesPedidoComponent_div_34_Template, 4, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Entregar Pedido:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "En: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, IndicacionesPedidoComponent_p_45_Template, 4, 1, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "A: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, IndicacionesPedidoComponent_div_51_Template, 10, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, IndicacionesPedidoComponent_div_52_Template, 9, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicacionesPedidoComponent_Template_div_click_53_listener() { return ctx.btnEjecutar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.dataPedido.idpedido, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordenadas", ctx.coordenadasDestino);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.dataPedido.paso_va > 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataPedido.datosComercio.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataPedido.datosComercio.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c1, ctx.dataPedido.paso_va === 2, ctx.dataPedido.paso_va > 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._desAccionComprar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" el pedido #", ctx.dataPedido.idpedido, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.descripcionPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataPedido.paso_va >= 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c1, ctx.dataPedido.paso_va === 3, ctx.dataPedido.paso_va > 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataPedido.datosDelivery.direccion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataPedido.datosDelivery.referencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 18, ctx.dataPedido.datosDelivery.nombre), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataPedido.datosDelivery.metodoPago.idtipo_pago);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataPedido.paso_va >= 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.btnIsVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnTitlePasos);
    } }, directives: [_componentes_mapa_solo_mapa_solo_component__WEBPACK_IMPORTED_MODULE_15__["MapaSoloComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DecimalPipe"]], styles: [".container-body[_ngcontent-%COMP%] {\r\n    padding-bottom: 3.5rem\r\n}\r\n\r\n.xfooter[_ngcontent-%COMP%] {\r\n    \r\n    bottom: 0px;\r\n    text-align: center;\r\n    width: 100%;\r\n    padding: 14px;    \r\n}\r\n\r\n.item-paso[_ngcontent-%COMP%] {\r\n    border: 1px solid #bdbdbd;\r\n    border-radius: 5px;\r\n    \r\n    margin-bottom: 5px;\r\n    background-color: #eeeeee;\r\n    opacity: 0.6;\r\n}\r\n\r\n.item-paso[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.item-paso[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    font-size: 23px;\r\n    font-weight: 600;\r\n    line-height: 2em;    \r\n    background: #e0e0e0;\r\n    border-right: 1px solid lightgrey;\r\n    border-radius: 4px 0px 0px 4px;\r\n}\r\n\r\n.item-paso[_ngcontent-%COMP%]   .instrunccion[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n}\r\n\r\n.item-paso.success[_ngcontent-%COMP%] {\r\n    border-color: #bdbdbd !important;\r\n    opacity: 1;\r\n}\r\n\r\n.item-paso.success[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]{\r\n    background: #00B14F;    \r\n}\r\n\r\n.item-paso.success[_ngcontent-%COMP%]   .instrunccion[_ngcontent-%COMP%]{\r\n    background: #e0e0e0;\r\n}\r\n\r\n.item-paso.active[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    border-color: #f9a825;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYXJ0aWRvci9pbmRpY2FjaW9uZXMtcGVkaWRvL2luZGljYWNpb25lcy1wZWRpZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFJQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBhcnRpZG9yL2luZGljYWNpb25lcy1wZWRpZG8vaW5kaWNhY2lvbmVzLXBlZGlkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1ib2R5IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW1cclxufVxyXG5cclxuLnhmb290ZXIge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE0cHg7ICAgIFxyXG59XHJcblxyXG5cclxuXHJcbi5pdGVtLXBhc28ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qIHBhZGRpbmc6IDE1cHg7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uaXRlbS1wYXNvIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaXRlbS1wYXNvIC5udW0ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtOyAgICBcclxuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XHJcbn1cclxuXHJcbi5pdGVtLXBhc28gLmluc3RydW5jY2lvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pdGVtLXBhc28uc3VjY2VzcyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNiZGJkYmQgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pdGVtLXBhc28uc3VjY2VzcyAubnVte1xyXG4gICAgYmFja2dyb3VuZDogIzAwQjE0RjsgICAgXHJcbn1cclxuXHJcbi5pdGVtLXBhc28uc3VjY2VzcyAuaW5zdHJ1bmNjaW9ue1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxufVxyXG5cclxuLml0ZW0tcGFzby5hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y5YTgyNTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicacionesPedidoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indicaciones-pedido',
                templateUrl: './indicaciones-pedido.component.html',
                styleUrls: ['./indicaciones-pedido.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorService"] }, { type: src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_13__["RepartidorService"] }, { type: src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_2__["GpsUbicacionRepartidorService"] }, { type: src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_3__["CalcDistanciaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }, { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_9__["InfoTockenService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_12__["TimerLimitService"] }, { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_14__["ListenStatusService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/repartidor/list-grupo-pedidos/list-grupo-pedidos.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/repartidor/list-grupo-pedidos/list-grupo-pedidos.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ListGrupoPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGrupoPedidosComponent", function() { return ListGrupoPedidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/pedido-repartidor.service */ "./src/app/shared/services/pedido-repartidor.service.ts");
/* harmony import */ var src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/utilitarios.service */ "./src/app/shared/services/utilitarios.service.ts");
/* harmony import */ var src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modelos/geoposition.model */ "./src/app/modelos/geoposition.model.ts");
/* harmony import */ var src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/gps-ubicacion-repartidor.service */ "./src/app/shared/services/gps-ubicacion-repartidor.service.ts");
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "./node_modules/rxjs/internal/operators/takeUntil.js");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/calc-distancia.service */ "./src/app/shared/services/calc-distancia.service.ts");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var src_app_componentes_dialog_orden_detalle_dialog_orden_detalle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/componentes/dialog-orden-detalle/dialog-orden-detalle.component */ "./src/app/componentes/dialog-orden-detalle/dialog-orden-detalle.component.ts");
/* harmony import */ var src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/repartidor.service */ "./src/app/shared/services/repartidor.service.ts");
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var src_app_modelos_datos_calificado_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modelos/datos.calificado.model */ "./src/app/modelos/datos.calificado.model.ts");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var src_app_componentes_dialog_calificacion_dialog_calificacion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/componentes/dialog-calificacion/dialog-calificacion.component */ "./src/app/componentes/dialog-calificacion/dialog-calificacion.component.ts");
/* harmony import */ var src_app_modelos_time_line_pedido__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/modelos/time.line.pedido */ "./src/app/modelos/time.line.pedido.ts");
/* harmony import */ var src_app_shared_services_send_msj_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/services/send-msj.service */ "./src/app/shared/services/send-msj.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");


































function ListGrupoPedidosComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Comercio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListGrupoPedidosComponent_td_17_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Llegaste");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ListGrupoPedidosComponent_td_17_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A\u00FAn no llegas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListGrupoPedidosComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListGrupoPedidosComponent_td_17_ng_container_7_Template, 4, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListGrupoPedidosComponent_td_17_ng_template_8_Template, 2, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r274 = ctx.$implicit;
    const _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, element_r274.json_datos_delivery.p_header.arrDatosDelivery.establecimiento.nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, element_r274.json_datos_delivery.p_header.arrDatosDelivery.establecimiento.direccion));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r274.time_line.llego_al_comercio)("ngIfElse", _r276);
} }
function ListGrupoPedidosComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListGrupoPedidosComponent_td_20_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " APP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListGrupoPedidosComponent_td_20_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " En Camino");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "badge-primary": a0, "badge-info": a1, "badge-secondary": a2 }; };
const _c1 = function (a0) { return { "text-danger": a0 }; };
function ListGrupoPedidosComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListGrupoPedidosComponent_td_20_span_5_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListGrupoPedidosComponent_td_20_p_14_Template, 3, 0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r278 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, element_r278.json_datos_delivery.p_header.arrDatosDelivery.nombre), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r278.json_datos_delivery.p_header.isCliente === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c0, element_r278.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 3, element_r278.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 2, element_r278.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, element_r278.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.descripcion), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r278.json_datos_delivery.p_header.arrDatosDelivery.establecimiento.distancia_km, " Km ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, element_r278.hora_show > 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r278.hora_show, " min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r278.time_line.en_camino_al_cliente);
} }
function ListGrupoPedidosComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Importe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListGrupoPedidosComponent_td_23_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pagado con tarjeta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListGrupoPedidosComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListGrupoPedidosComponent_td_23_p_4_Template, 2, 0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r281 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, element_r281.importe_pagar_comercio, ".2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r281.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 2);
} }
function ListGrupoPedidosComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 53);
} }
const _c2 = function (a0) { return { "color-checked": a0 }; };
function ListGrupoPedidosComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListGrupoPedidosComponent_tr_25_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r285); const row_r283 = ctx.$implicit; const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r284.showDetallePedido(row_r283); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r283 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, row_r283.pwa_estado === "E"));
} }
function ListGrupoPedidosComponent_div_45_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListGrupoPedidosComponent_div_45_ng_container_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r290); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r289.entregaTodo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Listo, pedidos entregados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ListGrupoPedidosComponent_div_45_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListGrupoPedidosComponent_div_45_ng_template_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r291.goRuta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ver Ruta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ruta mas corta.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListGrupoPedidosComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListGrupoPedidosComponent_div_45_ng_container_1_Template, 4, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListGrupoPedidosComponent_div_45_ng_template_2_Template, 5, 0, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r273.isEntregadoAll)("ngIfElse", _r287);
} }
class ListGrupoPedidosComponent {
    constructor(infoTokenService, pedidoRepartidorService, utilService, geoPositionService, listenService, calcDistanciaService, router, dialog, repartidorServcice, socketService, sendMsjService) {
        this.infoTokenService = infoTokenService;
        this.pedidoRepartidorService = pedidoRepartidorService;
        this.utilService = utilService;
        this.geoPositionService = geoPositionService;
        this.listenService = listenService;
        this.calcDistanciaService = calcDistanciaService;
        this.router = router;
        this.dialog = dialog;
        this.repartidorServcice = repartidorServcice;
        this.socketService = socketService;
        this.sendMsjService = sendMsjService;
        this.sumListPedidos = 0;
        this.sumGananciaTotal = 0;
        this.btnShow = true; // cuando llega al local ya no figura este - ya no envia al mapa mostrando la ruta mas corta
        this.btnTitlePasos = 'Vamos, vamos!!';
        this.displayedColumns = ['Comercio', 'Cliente', 'Importe'];
        this.geoPositionActual = new src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_3__["GeoPositionModel"]();
        this.geoPositionComercio = new src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_3__["GeoPositionModel"]();
        this.destroy$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.isEntregadoAll = false;
    }
    ngOnInit() {
        this.iniComponente();
        this.geoPositionService.get();
        this.geoPositionActual = this.geoPositionService.getGeoPosition();
        setTimeout(() => {
            this.geoPositionService.onGeoWatchPosition();
            this.geoPositionService.onGeoWatchPositionCapacitor();
            this.listenGeoPosition();
        }, 1000);
        // escuchar pedidos asignados
        this.socketService.onRepartidorGetPedidoPendienteAceptar()
            .subscribe((res) => {
            // console.log('escuchar pedidos asignados', res);
            this.pedidoRepartidorService.setPedidoPorAceptar(res[0].pedido_por_aceptar);
            this.darFormatoGrupoPedidosRecibidos(res[0].pedido_por_aceptar);
        });
        // si se vuelve a conectar incia el geolocation
        this.socketService.isSocketOpen$.subscribe(res => {
            if (res) {
                this.geoPositionService.onGeoWatchPosition();
            }
        });
    }
    iniComponente() {
        this.pedidoRepartidorService.init();
        this.dataPedido = this.pedidoRepartidorService.getLocal();
        // load dlista
        this.listPedidos = this.pedidoRepartidorService.getLocalItems();
        // console.log('this.listPedidos', this.listPedidos);
        this.listPedidos = this.listPedidos.map(p => {
            p.time_line = p.time_line || new src_app_modelos_time_line_pedido__WEBPACK_IMPORTED_MODULE_17__["TimeLinePedido"]();
            return p;
        });
        // ordenar po distancia
        this.listPedidos = this.listPedidos
            .sort((a, b) => parseFloat(a.json_datos_delivery.p_header.arrDatosDelivery.establecimiento.distancia_km) - parseFloat(b.json_datos_delivery.p_header.arrDatosDelivery.establecimiento.distancia_km));
        //
        // console.log('this.listPedidos', this.listPedidos);
        this.checkIsEntregaALL();
        this.comercioPedido = this.listPedidos[0].json_datos_delivery.p_header.arrDatosDelivery.establecimiento;
        this.dataPedido.idsede = this.listPedidos[0].idsede; // idsede del grupo de pedidos
        this.pedidoRepartidorService.setLocal();
        // ubicacion comercio
        this.geoPositionComercio.latitude = typeof this.comercioPedido.latitude === 'string' ? parseFloat(this.comercioPedido.latitude) : this.comercioPedido.latitude;
        this.geoPositionComercio.longitude = typeof this.comercioPedido.longitude === 'string' ? parseFloat(this.comercioPedido.longitude) : this.comercioPedido.longitude;
        // sumar total a pagar
        this.sumListPedidos = this.listPedidos.map(p => p.importe_pagar_comercio).reduce((a, b) => a + b, 0);
        this.sumGananciaTotal = this.dataPedido.sumGananciaTotal;
        this.showPasos();
        this.calcHora();
    }
    ngOnDestroy() {
        clearInterval(this.timerRun);
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    darFormatoGrupoPedidosRecibidos(pedidos) {
        if (!pedidos) {
            return;
        }
        const sumAcumuladoPagar = pedidos.importe_pagar;
        this.pedidoRepartidorService.loadPedidosRecibidos(pedidos.pedidos.join(','))
            .subscribe((response) => {
            // console.log('res', response);
            // formateamos el json_}¿datos
            const _listAsignar = response.map(p => {
                p.json_datos_delivery = JSON.parse(p.json_datos_delivery);
                // console.log('p.json_datos_delivery', p.json_datos_delivery);           
                p.importe_pagar_comercio = parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.importeTotal) - parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.costoTotalDelivery);
                p.importe_pagar_comercio = p.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 2 ? 0 : p.importe_pagar_comercio;
                return p;
            });
            const listPedidosGroup = JSON.parse(JSON.stringify(_listAsignar));
            this.pedidoRepartidorService.setLocalIds(pedidos);
            this.pedidoRepartidorService.setLocalItems(listPedidosGroup);
            // this.pedidoRepartidorService.playAudioNewPedido();
            this.iniComponente();
        });
    }
    // private darFormatoGrupoPedidosRecibidos(pedidos: any) {
    //   if ( !pedidos ) {return; }
    //   this.sumAcumuladoPagar = pedidos.importe_pagar;
    //   this.pedidoRepartidorService.loadPedidosRecibidos(pedidos.pedidos.join(','))
    //       .subscribe((response: any) => {
    //         // console.log('res', response);
    //         // formateamos el json_}¿datos
    //         const _listAsignar = response.map(p => {
    //           p.json_datos_delivery = JSON.parse(p.json_datos_delivery);
    //           p.importe_pagar_comercio =  parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.importeTotal) -  parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.costoTotalDelivery);
    //           p.importe_pagar_comercio = p.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 2 ? 0 : p.importe_pagar_comercio;
    //           return p;
    //         });
    //         this.listPedidosGroup = JSON.parse(JSON.stringify(_listAsignar));
    //         this.pedidoRepartidorService.setLocalIds(pedidos);
    //         this.pedidoRepartidorService.setLocalItems( this.listPedidosGroup );
    //         this.pedidoRepartidorService.playAudioNewPedido();
    //       });
    // }
    calcHora() {
        this.calHoraList();
        this.timerRun = setInterval(() => { this.calHoraList(); }, 60000);
    }
    calHoraList() {
        this.listPedidos.map(p => {
            p.hora_show = this.utilService.xTiempoTranscurridos_en_minutos(p.hora);
        });
    }
    listenGeoPosition() {
        // capacitor
        // this.geoPositionService.geoPositionCapacitorNow$      
        // .pipe(takeUntil(this.destroy$))
        // .subscribe((res: GeoPositionModel) => {
        //   console.log('geoPositionCapacitorNow', res);
        //   this.geoPositionComercioCapacitor = res;
        //   res = !res?.latitude ? this.geoPositionActual : res;
        //   if ( !res.latitude ) { return; }
        //   this.geoPositionActual = res;
        //   this.pedidoRepartidorService.checkLLegoComercio(this.listPedidos, this.geoPositionActual)
        // })
        this.geoPositionActual = this.geoPositionService.geoPosition;
        this.geoPositionService.geoPositionNow$
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            // console.log('geoPositionActual', res);
            res = !(res === null || res === void 0 ? void 0 : res.latitude) ? this.geoPositionActual : res;
            if (!res.latitude) {
                return;
            }
            // verificar en que paso esta
            // si paso 1 verificar si se acerca al coordenadas destino y activar boton accion
            this.geoPositionActual = res;
            this.pedidoRepartidorService.checkLLegoComercio(this.listPedidos, this.geoPositionActual);
            // const isLLego = this.geoPositionComercio.latitude ? this.calcDistanciaService.calcDistancia(this.geoPositionActual, this.geoPositionComercio, 120) : false;
            // if ( !isLLego ) {
            //   if ( this.dataPedido.pedido_paso_va === 1) {
            //     this.dataPedido.pedido_paso_va = 2; // en el local
            //     this.pedidoRepartidorService.setPedidoPasoVa(2);
            //     this.dataPedido.pedido_paso_va = 2;
            //     console.log('guarda paso va 2');
            //     this.repartidorServcice.guardarPasoVa(2);
            //     // this.pedidoRepartidorService.setPasoVa(2);
            //     // this.pedidoRepartidorService.setLocal();
            //     this.showPasos();
            //     // this.btnIsVisible = true;
            //     // this.btnTitlePasos = 'Empezar';
            //   }
            // }
        });
    }
    showPasos() {
        // this.dataPedido.paso_va = this.dataPedido.paso_va ? this.dataPedido.paso_va : 1;
        // console.log('this.dataPedido.paso_va', this.dataPedido.paso_va);
        // console.log(this.dataPedido);
        switch (this.dataPedido.pedido_paso_va) {
            case  false || null:
                this.btnTitlePasos = 'Empezar';
                break;
            case 1 || false:
                this.btnTitlePasos = 'Empezar';
                break;
            default: // apuntar a la direccion del cliente
                this.btnShow = false;
                this.btnTitlePasos = 'Ir a Entregar';
                break;
        }
    }
    goRuta() {
        let _addDir = '';
        this.listPedidos.map(p => {
            _addDir += `${p.json_datos_delivery.p_header.arrDatosDelivery.direccionEnvioSelected.latitude},${p.json_datos_delivery.p_header.arrDatosDelivery.direccionEnvioSelected.longitude}+to:`;
        });
        _addDir = _addDir.slice(0, -4);
        // const linkGPS = `http://maps.google.com/maps/dir/?api=1&origin=-6.028458-76.971177&waypoints=${_addDir}`;
        const linkGPS = `http://maps.google.com/maps?f=d&source=s_d&saddr=${this.geoPositionActual.latitude},${this.geoPositionActual.longitude}&daddr=${_addDir}`;
        window.open(linkGPS, '_blank');
    }
    entregaTodo() {
        this.pedidoRepartidorService.listaPedidosEntregados();
        this.listPedidos = null;
        this.sumListPedidos = 0;
        this.sumGananciaTotal = 0;
        this.router.navigate(['./main/pedidos']);
    }
    btnEjecutar() {
        // let linkGPS = '';
        // this.dataPedido.paso_va = this.dataPedido.paso_va ? this.dataPedido.paso_va : 1;
        // this.pedidoRepartidorService.setPasoVa(this.dataPedido.paso_va);
        switch (this.dataPedido.pedido_paso_va) {
            case 1:
                let _addDir = '';
                this.listPedidos.map(p => {
                    _addDir += `${p.json_datos_delivery.p_header.arrDatosDelivery.direccionEnvioSelected.latitude},${p.json_datos_delivery.p_header.arrDatosDelivery.direccionEnvioSelected.longitude}+to:`;
                });
                _addDir = _addDir.slice(0, -4);
                // const linkGPS = `http://maps.google.com/maps/dir/?api=1&origin=-6.028458-76.971177&waypoints=${_addDir}`;
                const linkGPS = `http://maps.google.com/maps?f=d&source=s_d&saddr=${this.geoPositionActual.latitude},${this.geoPositionActual.longitude}&daddr=${_addDir}`;
                window.open(linkGPS, '_blank');
                // linkGPS = `http://maps.google.com/maps?saddr=${this.geoPositionActual.latitude},${this.geoPositionActual.longitude}&daddr=${this.geoPositionComercio.latitude},${this.geoPositionComercio.longitude}`;
                // window.open(linkGPS, '_blank');
                // this.btnTitlePasos = 'Llegue';
                // this.pedidoRepartidorService.setPasoVa(2);
                break;
            default: // enviamos al mapa trazamos la ruta mas corta
                this.pedidoRepartidorService.setPedidoPasoVa(3);
                this.dataPedido.pedido_paso_va = 3;
                this.repartidorServcice.guardarPasoVa(3);
                this.router.navigate(['/main/indicaciones-mapa-grupo']);
                break;
        }
    }
    irAlComercio() {
        const linkGPS = `http://maps.google.com/maps?saddr=${this.geoPositionActual.latitude},${this.geoPositionActual.longitude}&daddr=${this.geoPositionComercio.latitude},${this.geoPositionComercio.longitude}`;
        window.open(linkGPS, '_blank');
    }
    // showDetallePedido(row: any) {
    //   // console.log('show pedido', row);
    //   this.pedidoRepartidorService.setPedidoSelect(row);
    //   // if ( this.dataPedido.paso_va >= 2 ) {
    //     this.router.navigate(['./main/pedido-detalle']);
    //   // }
    // }
    showDetallePedido(orden) {
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogConfig"]();
        // marcador para que no cierrre como repartidor propio en orden detalle.
        orden.isRepartidorRed = true;
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        _dialogConfig.width = '700px';
        _dialogConfig.panelClass = ['my-dialog-orden-detalle', 'my-dialog-scrool'];
        _dialogConfig.data = {
            laOrden: orden
        };
        // console.log('orden openDialogOrden', orden);
        this.pedidoRepartidorService.setPedidoSelect(orden);
        const dialogRef = this.dialog.open(src_app_componentes_dialog_orden_detalle_dialog_orden_detalle_component__WEBPACK_IMPORTED_MODULE_11__["DialogOrdenDetalleComponent"], _dialogConfig);
        dialogRef.afterClosed().subscribe(pedido => {
            // console.log('el pedido', pedido);
            this.checkIsEntregaALL();
            // 211222 no califica
            // if ( pedido.pwa_estado === 'E' ) {
            //   this.openDialogCalificacion(pedido);
            // }
        });
    }
    checkIsEntregaALL() {
        const _res = this.listPedidos.filter(p => p.pwa_estado !== 'E');
        this.isEntregadoAll = _res.length === 0;
    }
    openDialogCalificacion(_pedido = null) {
        this.dataPedido = this.pedidoRepartidorService.pedidoRepartidor;
        const dataCalificado = new src_app_modelos_datos_calificado_model__WEBPACK_IMPORTED_MODULE_14__["DatosCalificadoModel"];
        dataCalificado.idrepartidor = this.infoTokenService.infoUsToken.usuario.idrepartidor;
        dataCalificado.idcliente = this.dataPedido.datosCliente.idcliente;
        dataCalificado.idpedido = this.dataPedido.idpedido;
        dataCalificado.tipo = 2;
        dataCalificado.showNombre = true;
        dataCalificado.nombre = this.dataPedido.datosDelivery.nombre;
        dataCalificado.titulo = 'Como calificas al cliente?';
        dataCalificado.showTitulo = true;
        dataCalificado.showMsjTankyou = true;
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogConfig"]();
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        _dialogConfig.data = {
            dataCalificado: dataCalificado
        };
        const dialogRef = this.dialog.open(src_app_componentes_dialog_calificacion_dialog_calificacion_component__WEBPACK_IMPORTED_MODULE_16__["DialogCalificacionComponent"], _dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
            // notificar al repartidor fin del pedido
            // this.timerService.stopCountTimerLimit();
            this.pedidoRepartidorService.finalizarPedidoPropioRepartidor();
            // this.router.navigate(['./repartidor/pedidos']);
        });
    }
    testLlege(item) {
        // console.log('item', item);
        const _newTimeLinePedido = item.time_line;
        _newTimeLinePedido.paso = 1;
        _newTimeLinePedido.llego_al_comercio = true;
        this.sendMsjService.msjClienteTimeLine(item, _newTimeLinePedido);
    }
    testEnCamino(item) {
        // console.log('item', item);
        const _newTimeLinePedido = item.time_line;
        if (_newTimeLinePedido.paso === 1) {
            _newTimeLinePedido.paso = 2;
            _newTimeLinePedido.en_camino_al_cliente = true;
            this.sendMsjService.msjClienteTimeLine(item, _newTimeLinePedido);
        }
    }
    recargarPedido() {
        location.reload();
    }
    goScanCodeBar() {
        localStorage.setItem('sys::count::p', this.listPedidos.length);
        this.router.navigate(['./main/mapa-de-pedidos']);
    }
}
ListGrupoPedidosComponent.ɵfac = function ListGrupoPedidosComponent_Factory(t) { return new (t || ListGrupoPedidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_15__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_2__["UtilitariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_4__["GpsUbicacionRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_5__["ListenStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_7__["CalcDistanciaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_12__["RepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_13__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_send_msj_service__WEBPACK_IMPORTED_MODULE_18__["SendMsjService"])); };
ListGrupoPedidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListGrupoPedidosComponent, selectors: [["app-list-grupo-pedidos"]], decls: 46, vars: 12, consts: [[1, "animated", "fadeInDown", "container-body"], [1, "p-3", "bg-dark", "text-white", "fs-13", "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "fa", "fa-refresh", "ml-1"], [1, "m-3"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "m-0"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "Comercio"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Cliente"], ["mat-header-cell", "", "class", "text-left", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-left", 4, "matCellDef"], ["matColumnDef", "Importe"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], [1, "w-100", "pt-3"], [1, "text-right", "pr-4"], [1, "text-secondary", "pr-2"], [1, "fw-600", "fs-18"], [1, "text-secondary", "fs-13", "pr-2"], [1, "fw-600", "fs-13", "badge", "badge-info"], [1, "p-2"], [1, "fw-100", "fs-12", "text-info"], ["class", "xfooterx p-2", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "fw-600", "fs-11", 2, "max-width", "80px"], [1, "fw-100", "fs-10", 2, "max-width", "80px"], [4, "ngIf", "ngIfElse"], ["elseTemplateNollega", ""], [1, "text-success", "fs-10"], [1, "fa", "fa-check"], [1, "text-danger", "fs-10"], ["mat-header-cell", "", 1, "text-left"], ["mat-cell", "", 1, "text-left"], [1, "fw-600", "fs-12"], [1, "fw-100", "fs-12"], ["class", "fw-600 badge badge-success mr-1", 4, "ngIf"], [1, "fw-600", "badge", 3, "ngClass"], [1, "text-secondary", "fs-10", "ml-1"], [1, "d-flex"], [1, "fw-600", "text-success", "fs-10", 3, "ngClass"], ["class", "text-success fs-10 ml-2", 4, "ngIf"], [1, "fw-600", "badge", "badge-success", "mr-1"], [1, "text-success", "fs-10", "ml-2"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right"], ["class", "badge badge-info", 4, "ngIf"], [1, "badge", "badge-info"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"], [1, "xfooterx", "p-2"], ["elseTemplate", ""], ["matRipple", "", 1, "btn", "btn-secondary", "w-75", "p-2", "fs-20", "text-white", "animated", "fadeInUp", "delay-0-5s", 3, "click"], ["matRipple", "", 1, "btn", "btn-success", "w-75", "p-2", "fs-20", "text-white", "animated", "fadeInUp", "delay-0-5s", 3, "click"], [1, "fs-11", "fw-100"]], template: function ListGrupoPedidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lista de pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListGrupoPedidosComponent_Template_button_click_6_listener() { return ctx.recargarPedido(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Recargar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListGrupoPedidosComponent_Template_button_click_11_listener() { return ctx.goScanCodeBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Asignarse Pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListGrupoPedidosComponent_th_16_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListGrupoPedidosComponent_td_17_Template, 10, 8, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListGrupoPedidosComponent_th_19_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListGrupoPedidosComponent_td_20_Template, 15, 18, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListGrupoPedidosComponent_th_22_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListGrupoPedidosComponent_td_23_Template, 5, 5, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ListGrupoPedidosComponent_tr_24_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListGrupoPedidosComponent_tr_25_Template, 1, 3, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total a pagar: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ganancia: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cuando sea posible elige pagar cero contacto: Yape \u00F3 Tarjeta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ListGrupoPedidosComponent_div_45_Template, 4, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.listPedidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 6, ctx.sumListPedidos, ".2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](39, 9, ctx.sumGananciaTotal, ".2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPedidos);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatRow"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRipple"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["LowerCasePipe"]], styles: ["p[_ngcontent-%COMP%] {\r\n    margin: 0px;    \r\n}\r\n\r\n.xfooterx[_ngcontent-%COMP%] {\r\n    \r\n    bottom: 0px;\r\n    text-align: center;\r\n    width: 100%;\r\n    position: relative !important;\r\n    background: #e0e0e0;\r\n    \r\n}\r\n\r\n.color-checked[_ngcontent-%COMP%] {\r\n    background-color: #e8f5e9;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYXJ0aWRvci9saXN0LWdydXBvLXBlZGlkb3MvbGlzdC1ncnVwby1wZWRpZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBhcnRpZG9yL2xpc3QtZ3J1cG8tcGVkaWRvcy9saXN0LWdydXBvLXBlZGlkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgbWFyZ2luOiAwcHg7ICAgIFxyXG59XHJcblxyXG4ueGZvb3Rlcngge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICAgIC8qIHBhZGRpbmc6IDE0cHg7ICAgICAqL1xyXG59XHJcblxyXG4uY29sb3ItY2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWU5O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListGrupoPedidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-grupo-pedidos',
                templateUrl: './list-grupo-pedidos.component.html',
                styleUrls: ['./list-grupo-pedidos.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_15__["InfoTockenService"] }, { type: src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorService"] }, { type: src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_2__["UtilitariosService"] }, { type: src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_4__["GpsUbicacionRepartidorService"] }, { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_5__["ListenStatusService"] }, { type: src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_7__["CalcDistanciaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_12__["RepartidorService"] }, { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_13__["SocketService"] }, { type: src_app_shared_services_send_msj_service__WEBPACK_IMPORTED_MODULE_18__["SendMsjService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/repartidor/main/main.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/repartidor/main/main.component.ts ***!
  \*********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var src_app_componentes_dialog_efectivo_repartidor_dialog_efectivo_repartidor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/componentes/dialog-efectivo-repartidor/dialog-efectivo-repartidor.component */ "./src/app/componentes/dialog-efectivo-repartidor/dialog-efectivo-repartidor.component.ts");
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/repartidor.service */ "./src/app/shared/services/repartidor.service.ts");
/* harmony import */ var src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/pedido-repartidor.service */ "./src/app/shared/services/pedido-repartidor.service.ts");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ "./src/app/shared/services/navigator-link.service.ts");
/* harmony import */ var src_app_componentes_dialog_change_pass_dialog_change_pass_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/componentes/dialog-change-pass/dialog-change-pass.component */ "./src/app/componentes/dialog-change-pass/dialog-change-pass.component.ts");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _core_tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/tool-bar-repartidor/tool-bar-repartidor.component */ "./src/app/core/tool-bar-repartidor/tool-bar-repartidor.component.ts");

























const _c0 = function (a0) { return { "loaded": a0 }; };
class MainComponent {
    constructor(dialog, socketService, repartidorService, infoTokeService, pedidoRepartidorService, router, navigatorService, storageService) {
        this.dialog = dialog;
        this.socketService = socketService;
        this.repartidorService = repartidorService;
        this.infoTokeService = infoTokeService;
        this.pedidoRepartidorService = pedidoRepartidorService;
        this.router = router;
        this.navigatorService = navigatorService;
        this.storageService = storageService;
        this.destroy$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isRepartidorPropio = false;
        this.showPanelLeft = false;
    }
    ngOnInit() {
        // conecta a notificaciones
        try {
            this.pedidoRepartidorService.init();
            this.socketService.isSocketOpenReconect = false;
            this.infoTokeService.getInfoUs();
            this.isRepartidorPropio = this.infoTokeService.infoUsToken.usuario.idsede_suscrito;
            this.infoTokeService.infoUsToken.usuario.isRepartidorPropio = this.isRepartidorPropio;
            this.infoTokeService.set();
            this.socketService.connect();
            this.navigatorService.disableGoBack();
        }
        catch (error) {
            this.router.navigate(['../']);
        }
        if (this.isRepartidorPropio) {
            this.repartidorService.guardarEfectivo(100);
            this.router.navigate(['/main/mapa-de-pedidos']);
        }
        else {
            this.router.navigate(['/main/pedidos']);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    repartidorOnLine(value) {
        if (value) {
            const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            _dialogConfig.disableClose = true;
            _dialogConfig.hasBackdrop = true;
            this.dialog.open(src_app_componentes_dialog_efectivo_repartidor_dialog_efectivo_repartidor_component__WEBPACK_IMPORTED_MODULE_2__["DialogEfectivoRepartidorComponent"], _dialogConfig);
            this.socketService.connect();
        }
        // else {
        //   // this.repartidorService.guardarEfectivo(0, 0);
        // }
    }
    cerrarSession() {
        this.repartidorService.guardarEfectivo(0, 0);
        this.socketService.closeConnection();
        this.storageService.clearLoginUser();
        this.router.navigate(['../']);
    }
    openPanelLeft(val) {
        this.showPanelLeft = true;
    }
    openCambiarClave() {
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        this.dialog.open(src_app_componentes_dialog_change_pass_dialog_change_pass_component__WEBPACK_IMPORTED_MODULE_10__["DialogChangePassComponent"], _dialogConfig);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_4__["RepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_7__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_5__["PedidoRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_9__["NavigatorLinkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 40, vars: 9, consts: [[3, "ngClass"], [1, "wrapper"], ["id", "loader-wrapper"], ["id", "loader"], [1, "loader-msj"], [1, "loader-section", "section-left"], [1, "loader-section", "section-right"], [1, "xh-100"], ["mode", "over", 1, "example-sidenav", 3, "opened", "closedStart"], ["drawerIzq", ""], [2, "min-width", "250px"], [1, "p-3", "border-bottom"], [1, "w-100", "text-center"], ["src", "assets/icons/icon-72x72.png"], [1, "pt-1", "fw-600", "fs-12", "text-secondary", "m-0"], [1, "pt-1", "fw-100", "fs-11", "text-secondary", "m-0"], [1, "p-3", "border-bottom", "w-100", 3, "click"], [1, "fw-600", "fs-13"], [1, "fa", "fa-arrow-left", "pr-2"], [1, "fs-13"], ["matRipple", "", 1, "border-bottom", "p-3", "xCursor", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-key"], [1, "fa", "fa-close", "pr-2"], [1, "text-info", "fs-11"], [1, "animated", "fadeInDown", "w-100", "top-0"], [3, "changeTogle", "openMenuLateral"], [1, "content-body"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-drawer-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-drawer", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closedStart", function MainComponent_Template_mat_drawer_closedStart_11_listener() { return ctx.showPanelLeft = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Papaya Repartidor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "papaya.com.pe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r187.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Opciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); ctx.openCambiarClave(); return _r187.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Cambiar clave ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_29_listener() { return ctx.cerrarSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Cerrar Sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Al cerrar dejara de recibir pedidos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "app-tool-bar-repartidor", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeTogle", function MainComponent_Template_app_tool_bar_repartidor_changeTogle_37_listener($event) { return ctx.repartidorOnLine($event); })("openMenuLateral", function MainComponent_Template_app_tool_bar_repartidor_openMenuLateral_37_listener($event) { return ctx.openPanelLeft($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.socketService.isSocketOpen$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.socketService.msjConex$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.showPanelLeft);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatDrawer"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRipple"], _core_tool_bar_repartidor_tool_bar_repartidor_component__WEBPACK_IMPORTED_MODULE_15__["ToolBarRepartidorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".content-body[_ngcontent-%COMP%] {\r\n    padding-top: 55px;\r\n    \r\n    overflow: auto;\r\n    overscroll-behavior-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYXJ0aWRvci9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcGFydGlkb3IvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA1NXB4O1xyXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG92ZXJzY3JvbGwtYmVoYXZpb3IteTogYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }, { type: src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_4__["RepartidorService"] }, { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_7__["InfoTockenService"] }, { type: src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_5__["PedidoRepartidorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_9__["NavigatorLinkService"] }, { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/repartidor/mapa-pedidos/mapa-pedidos.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/repartidor/mapa-pedidos/mapa-pedidos.component.ts ***!
  \*************************************************************************/
/*! exports provided: MapaPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPedidosComponent", function() { return MapaPedidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/repartidor.service */ "./src/app/shared/services/repartidor.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var src_app_componentes_dialog_orden_detalle_dialog_orden_detalle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/componentes/dialog-orden-detalle/dialog-orden-detalle.component */ "./src/app/componentes/dialog-orden-detalle/dialog-orden-detalle.component.ts");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "./node_modules/rxjs/internal/operators/takeUntil.js");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/pedido-repartidor.service */ "./src/app/shared/services/pedido-repartidor.service.ts");
/* harmony import */ var src_app_modelos_datos_calificado_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modelos/datos.calificado.model */ "./src/app/modelos/datos.calificado.model.ts");
/* harmony import */ var src_app_componentes_dialog_calificacion_dialog_calificacion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/componentes/dialog-calificacion/dialog-calificacion.component */ "./src/app/componentes/dialog-calificacion/dialog-calificacion.component.ts");
/* harmony import */ var src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/gps-ubicacion-repartidor.service */ "./src/app/shared/services/gps-ubicacion-repartidor.service.ts");
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
/* harmony import */ var src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/utilitarios.service */ "./src/app/shared/services/utilitarios.service.ts");
/* harmony import */ var src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modelos/geoposition.model */ "./src/app/modelos/geoposition.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _pedidos_atendidos_pedidos_atendidos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pedidos-atendidos/pedidos-atendidos.component */ "./src/app/pages/repartidor/pedidos-atendidos/pedidos-atendidos.component.ts");

































function MapaPedidosComponent_div_7_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r219.msjErrorCodDelivery);
} }
function MapaPedidosComponent_div_7_div_1_div_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_div_7_div_1_div_1_ng_container_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r224); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r223.succesScan(_r218.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Asignarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MapaPedidosComponent_div_7_div_1_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_div_7_div_1_div_1_ng_template_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r226); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r225.succesScan(_r218.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Asignarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapaPedidosComponent_div_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapaPedidosComponent_div_7_div_1_div_1_div_4_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_div_7_div_1_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r228); const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r227.goBackListPedidos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MapaPedidosComponent_div_7_div_1_div_1_ng_container_9_Template, 3, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MapaPedidosComponent_div_7_div_1_div_1_ng_template_10_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r216.msjErrorCodDelivery.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r216.isRepartidorRed)("ngIfElse", _r221);
} }
function MapaPedidosComponent_div_7_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Obteniendo Datos ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MapaPedidosComponent_div_7_div_1_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_div_7_div_1_div_2_ng_template_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r233); const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r232.isResulScan = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Buscar Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_div_7_div_1_div_2_ng_template_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r233); const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r234.goBackListPedidos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Finalizar Asignacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pedido Asinado: ", ctx_r231.ordenAsingadaScan.idpedido, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r231.ordenAsingadaScan.json_datos_delivery.p_header.arrDatosDelivery.nombre);
} }
function MapaPedidosComponent_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapaPedidosComponent_div_7_div_1_div_2_ng_container_1_Template, 5, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapaPedidosComponent_div_7_div_1_div_2_ng_template_2_Template, 13, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r217.loadingScan)("ngIfElse", _r230);
} }
function MapaPedidosComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapaPedidosComponent_div_7_div_1_div_1_Template, 12, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapaPedidosComponent_div_7_div_1_div_2_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r214.isResulScan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r214.isResulScan);
} }
function MapaPedidosComponent_div_7_div_2_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_div_7_div_2_div_3_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240); const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r239.goBackRepartidorRed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Atas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapaPedidosComponent_div_7_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapaPedidosComponent_div_7_div_2_div_3_div_4_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r235.isRepartidorRed);
} }
function MapaPedidosComponent_div_7_div_2_table_4_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pedido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "text-danger": a0 }; };
function MapaPedidosComponent_div_7_div_2_table_4_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r249 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r249.idpedido);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, element_r249.hora_show > 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r249.hora_show, " min ");
} }
function MapaPedidosComponent_div_7_div_2_table_4_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2) { return { "badge-primary": a0, "badge-info": a1, "badge-secondary": a2 }; };
function MapaPedidosComponent_div_7_div_2_table_4_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r250 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, element_r250.json_datos_delivery.p_header.arrDatosDelivery.nombre), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c1, element_r250.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 3, element_r250.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 2, element_r250.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, element_r250.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.descripcion), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r250.json_datos_delivery.p_header.arrDatosDelivery.establecimiento.distancia_km, " Km ");
} }
function MapaPedidosComponent_div_7_div_2_table_4_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Importe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapaPedidosComponent_div_7_div_2_table_4_td_9_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pagado con tarjeta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapaPedidosComponent_div_7_div_2_table_4_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapaPedidosComponent_div_7_div_2_table_4_td_9_p_4_Template, 2, 0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r251 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, element_r251.importe_pagar_comercio, ".2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r251.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 2);
} }
function MapaPedidosComponent_div_7_div_2_table_4_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 64);
} }
const _c2 = function (a0) { return { "color-checked": a0 }; };
function MapaPedidosComponent_div_7_div_2_table_4_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_div_7_div_2_table_4_tr_11_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r255); const row_r253 = ctx.$implicit; const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r254.showDetallePedido(row_r253); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r253 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, row_r253.pwa_estado === "E"));
} }
function MapaPedidosComponent_div_7_div_2_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapaPedidosComponent_div_7_div_2_table_4_th_2_Template, 2, 0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapaPedidosComponent_div_7_div_2_table_4_td_3_Template, 6, 5, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapaPedidosComponent_div_7_div_2_table_4_th_5_Template, 2, 0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MapaPedidosComponent_div_7_div_2_table_4_td_6_Template, 10, 12, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MapaPedidosComponent_div_7_div_2_table_4_th_8_Template, 2, 0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MapaPedidosComponent_div_7_div_2_table_4_td_9_Template, 5, 5, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MapaPedidosComponent_div_7_div_2_table_4_tr_10_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MapaPedidosComponent_div_7_div_2_table_4_tr_11_Template, 1, 3, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r236.listPedidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r236.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r236.displayedColumns);
} }
function MapaPedidosComponent_div_7_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total a pagar: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Comision Entrega: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, ctx_r237.sumListPedidos, ".2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, ctx_r237.sumGananciaTotal, ".2"), " ");
} }
function MapaPedidosComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lista de pedidos asignados:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapaPedidosComponent_div_7_div_2_div_3_Template, 5, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapaPedidosComponent_div_7_div_2_table_4_Template, 12, 3, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapaPedidosComponent_div_7_div_2_div_5_Template, 14, 8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r215.scanCode && !ctx_r215.listPedidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r215.listPedidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r215.listPedidos);
} }
function MapaPedidosComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapaPedidosComponent_div_7_div_1_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapaPedidosComponent_div_7_div_2_Template, 8, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r211.scanCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r211.scanCode);
} }
function MapaPedidosComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pedidos-atendidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_div_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r257); const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r256.isShowResumen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Atras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapaPedidosComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_div_9_ng_container_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r262); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r261.entregaTodo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Listo, pedidos entregados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MapaPedidosComponent_div_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_div_9_ng_template_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r264); const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r263.goRuta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ver Ruta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ruta mas corta.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapaPedidosComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapaPedidosComponent_div_9_ng_container_1_Template, 4, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapaPedidosComponent_div_9_ng_template_2_Template, 5, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r213.isEntregadoAll)("ngIfElse", _r259);
} }
class MapaPedidosComponent {
    constructor(infoTokenService, utilService, socketService, dialog, repartidorService, pedidoRepartidorService, gpsPositionService, listeService, geoPositionService, router) {
        this.infoTokenService = infoTokenService;
        this.utilService = utilService;
        this.socketService = socketService;
        this.dialog = dialog;
        this.repartidorService = repartidorService;
        this.pedidoRepartidorService = pedidoRepartidorService;
        this.gpsPositionService = gpsPositionService;
        this.listeService = listeService;
        this.geoPositionService = geoPositionService;
        this.router = router;
        this.nomRepartidor = '';
        this.sumListPedidos = 0;
        this.sumGananciaTotal = 0;
        this.listRepartidoresInformativo = [];
        this.isShowResumen = false;
        this.scanCode = false;
        this.loadingScan = false;
        this.isResulScan = false;
        this.isEntregadoAll = false;
        this.isRepartidorRed = false;
        this.destroy$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.geoPositionActual = new src_app_modelos_geoposition_model__WEBPACK_IMPORTED_MODULE_14__["GeoPositionModel"]();
        this.displayedColumns = ['Pedido', 'Cliente', 'Importe'];
        this.msjErrorCodDelivery = '';
        this.countPedidosAsignados = 0;
        this.countPedidoSetForMe = 0; // cada 2 pedidos lanza tiempo de 15min para volver asignarse del mismo comercio
        this.showTimeAsignacion = true;
        this.keyTimeSetLastPedido = 'sys::set::p::me';
        this.keyCountSetLastPedido = 'sys::set::p::me::count';
    }
    ngOnInit() {
        this.infoToken = this.infoTokenService.getInfoUs();
        console.log('this.infoToken lista pedidos', this.infoToken);
        this.isRepartidorRed = !this.infoToken.usuario.idsede_suscrito;
        this.nomRepartidor = this.infoToken.usuario.nombre + ' ' + this.infoToken.usuario.apellido;
        this.loadPedidosPendiente();
        this.listenNewPedidos();
        this.countPedidosAsignados = this.isRepartidorRed ? localStorage.getItem('sys::count::p') : 0;
        console.log('this.countPedidosAsignados', this.countPedidosAsignados);
        // si es repartidor de la red
        // va de frente a escanear
        console.log('this.isRepartidorRed', this.isRepartidorRed);
        this.scanCode = this.isRepartidorRed;
        // console.log('this.infoToken', this.infoToken);
        // activar gps - obtener ubicacion actual y guardar
        // this.positionInt();
        // this.loadPedidosPropios();
        // this.listenNewPedidos();
        this.geoPositionService.onGeoWatchPosition();
        this.geoPositionActual = this.geoPositionService.geoPosition;
        this.geoPositionService.geoPositionNow$
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            res = !(res === null || res === void 0 ? void 0 : res.latitude) ? this.geoPositionActual : res;
            if (!res.latitude) {
                return;
            }
            // verificar en que paso esta
            // si paso 1 verificar si se acerca al coordenadas destino y activar boton accion
            this.geoPositionActual = res;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    loadPedidosPendiente() {
        // const pendientes = this.pedidoRepartidorService.getPedidoPorAceptar();
        // this.darFormatoGrupoPedidosRecibidos(pendientes);
        this.socketService.onRepartidorGetPedidoPendienteAceptar()
            .subscribe((res) => {
            console.log(res);
            this.pedidoRepartidorService.setPedidoPorAceptar(res[0].pedido_por_aceptar);
            this.darFormatoGrupoPedidosRecibidos(res[0].pedido_por_aceptar);
            this.pedidoRepartidorService.setPedidoPorAceptar(res[0].pedido_por_aceptar);
        });
    }
    succesScan(cod) {
        console.log('cod', cod);
        this.msjErrorCodDelivery = '';
        this.loadingScan = true;
        if (this.countPedidosAsignados > 3) {
            this.msjErrorCodDelivery = 'Ya tienes muchos pedidos!. Entrega lo que tienes primero.';
            return;
        } // solo pueden aceptar 3 pedidos
        localStorage.setItem('sys::count::p', this.countPedidosAsignados);
        console.log('this.countPedidosAsignados', this.countPedidosAsignados);
        this.pedidoRepartidorService.confirmarAsignacionReadBarCode(cod)
            .subscribe((pedidoRes) => {
            if (pedidoRes) {
                console.log(pedidoRes);
                // pedido con repartidor
                if (pedidoRes.idrepartidor) {
                    this.msjErrorCodDelivery = 'Ya tiene repatirdor asignado.';
                    // return;
                }
                else {
                    const _valIsSetPedido = this.verificarTiempoAsignacion();
                    if (!_valIsSetPedido) {
                        this.msjErrorCodDelivery = 'Ya tienes pedidos, la asignación estara disponible en 10min.';
                        return;
                    }
                    else {
                        // res = this.pedidoRepartidorService.addPedidoInListPedidosPendientes(res);
                        this.countPedidosAsignados++;
                        this.loadingScan = false;
                        this.isResulScan = true;
                        try {
                            pedidoRes.json_datos_delivery = typeof pedidoRes.json_datos_delivery !== 'object' ? JSON.parse(pedidoRes.json_datos_delivery) : pedidoRes.json_datos_delivery;
                        }
                        catch (error) { }
                        this.ordenAsingadaScan = pedidoRes;
                        pedidoRes = this.pedidoRepartidorService.addPedidoInListPedidosPendientes(pedidoRes);
                        this.darFormatoGrupoPedidosRecibidos(pedidoRes.pedidos_repartidor);
                        // notificar asignacion
                        const rowAsignacionNotifica = {
                            nombre: this.ordenAsingadaScan.json_datos_delivery.p_header.arrDatosDelivery.nombre.split(' ')[0],
                            telefono: this.ordenAsingadaScan.json_datos_delivery.p_header.arrDatosDelivery.telefono,
                            // establecimiento: rowDatos.establecimiento.nombre,
                            idpedido: this.ordenAsingadaScan.idpedido,
                            repartidor_nom: this.infoToken.usuario.nombre,
                            repartidor_telefono: this.infoToken.usuario.telefono,
                            idsede: this.ordenAsingadaScan.idsede,
                            idorg: this.ordenAsingadaScan.idorg,
                            repartidor_red: 1 // red papaya
                        };
                        const listClienteNotificar = [];
                        listClienteNotificar.push(rowAsignacionNotifica);
                        this.socketService.emit('repartidor-notifica-cliente-acepto-pedido', listClienteNotificar);
                        console.log(pedidoRes);
                    }
                }
            }
            else {
                this.msjErrorCodDelivery = 'No se encontro ningún pedido.';
            }
        });
    }
    darFormatoGrupoPedidosRecibidos(pedidos) {
        if (!pedidos) {
            return;
        }
        const sumAcumuladoPagar = pedidos.importe_pagar;
        this.pedidoRepartidorService.loadPedidosRecibidos(pedidos.pedidos.join(','))
            .subscribe((response) => {
            console.log('res', response);
            // formateamos el json_}¿datos
            let importeTotalPedido;
            const _listAsignar = response.map(p => {
                p.json_datos_delivery = JSON.parse(p.json_datos_delivery);
                // extraemos el importe total, sino de los subtotales -> venta rapida
                importeTotalPedido = parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.importeTotal);
                importeTotalPedido = importeTotalPedido === 0 ? parseFloat(p.json_datos_delivery.p_subtotales[p.json_datos_delivery.p_subtotales.length - 1].importe) : importeTotalPedido;
                p.importe_pagar_comercio = parseFloat(importeTotalPedido) - parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.costoTotalDelivery);
                p.importe_pagar_comercio = p.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 2 ? 0 : p.importe_pagar_comercio;
                const propina = p.json_datos_delivery.p_header.arrDatosDelivery.propina.value ? parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.propina.value) : 0;
                p.comsion_entrea_total = parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.costoTotalDelivery) + propina;
                return p;
            });
            this.establecimientoIni = _listAsignar[0].json_datos_delivery.p_header.arrDatosDelivery.establecimiento;
            this.establecimientoIni.longitude = parseFloat(this.establecimientoIni.longitude);
            this.establecimientoIni.latitude = parseFloat(this.establecimientoIni.latitude);
            const listPedidosGroup = JSON.parse(JSON.stringify(_listAsignar));
            this.pedidoRepartidorService.setLocalIds(pedidos);
            this.pedidoRepartidorService.setLocalItems(listPedidosGroup);
            // this.pedidoRepartidorService.playAudioNewPedido();
            this.iniComponente();
        });
    }
    iniComponente() {
        this.pedidoRepartidorService.init();
        this.dataPedido = this.pedidoRepartidorService.getLocal();
        // load dlista
        this.listPedidos = this.pedidoRepartidorService.getLocalItems();
        // ordenar po distancia
        this.listPedidos = this.listPedidos
            .sort((a, b) => parseFloat(a.json_datos_delivery.p_header.arrDatosDelivery.establecimiento.distancia_km) - parseFloat(b.json_datos_delivery.p_header.arrDatosDelivery.establecimiento.distancia_km));
        //
        this.checkIsEntregaALL();
        // this.comercioPedido = this.listPedidos[0].json_datos_delivery.p_header.arrDatosDelivery.establecimiento;
        this.dataPedido.idsede = this.listPedidos[0].idsede; // idsede del grupo de pedidos
        this.pedidoRepartidorService.setLocal();
        // ubicacion comercio
        // this.geoPositionComercio.latitude = typeof this.comercioPedido.latitude === 'string'  ? parseFloat(this.comercioPedido.latitude) : this.comercioPedido.latitude;
        // this.geoPositionComercio.longitude = typeof this.comercioPedido.longitude === 'string'  ? parseFloat(this.comercioPedido.longitude) : this.comercioPedido.longitude;
        // sumar total a pagar
        this.sumListPedidos = this.listPedidos.map(p => p.importe_pagar_comercio).reduce((a, b) => a + b, 0);
        this.sumGananciaTotal = this.listPedidos.map(p => p.comsion_entrea_total).reduce((a, b) => a + b, 0);
        // this.sumGananciaTotal = this.dataPedido.sumGananciaTotal;
        // this.showPasos();
        this.calcHora();
    }
    calcHora() {
        this.calHoraList();
        this.timerRun = setInterval(() => { this.calHoraList(); }, 60000);
    }
    calHoraList() {
        this.listPedidos.map(p => {
            p.hora_show = this.utilService.xTiempoTranscurridos_en_minutos(p.hora);
        });
    }
    showDetallePedido(orden) {
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        // marcador para que no cierrre como repartidor propio en orden detalle.
        orden.isRepartidorRed = true;
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        _dialogConfig.width = '700px';
        _dialogConfig.panelClass = ['my-dialog-orden-detalle', 'my-dialog-scrool'];
        _dialogConfig.data = {
            laOrden: orden
        };
        // console.log('orden openDialogOrden', orden);
        this.pedidoRepartidorService.setPedidoSelect(orden);
        const dialogRef = this.dialog.open(src_app_componentes_dialog_orden_detalle_dialog_orden_detalle_component__WEBPACK_IMPORTED_MODULE_5__["DialogOrdenDetalleComponent"], _dialogConfig);
        dialogRef.afterClosed().subscribe(pedido => {
            console.log('el pedido', pedido);
            this.checkIsEntregaALL();
            if (pedido.pwa_estado === 'E') {
                this.openDialogCalificacion(pedido);
            }
        });
    }
    checkIsEntregaALL() {
        const _res = this.listPedidos.filter(p => p.pwa_estado !== 'E');
        this.isEntregadoAll = _res.length === 0;
    }
    // private positionInt() {
    //   this.gpsPositionService.onGeoPosition(true);
    // }
    listenNewPedidos() {
        // escuchar pedidos nuevos asignados por el comercio
        this.socketService.onPedidoAsignadoFromComercio()
            // .pipe(takeUntil(this.destroy$))
            .subscribe(pedido => {
            console.log('nuevo pedido asignado', pedido);
            // this.loadPedidosPropios();
            const res = this.pedidoRepartidorService.addPedidoInListPedidosPendientes(pedido);
            console.log(res);
            this.darFormatoGrupoPedidosRecibidos(res.pedidos_repartidor);
            // this.listPedidos.push(pedido);
            // this.listeService.setNewPedidoRepartoPropio(pedido);
            // this.pedidoRepartidorService.playAudioNewPedido();
        });
        this.socketService.onDeliveryPedidoFin()
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe((pedidoFin) => {
            // lanzar calificacion al cliente
            // console.log('fin del pedido', pedidoFin);
            this.openDialogCalificacion(pedidoFin);
        });
    }
    loadPedidosPropios() {
        this.repartidorService.getMisPedidosPropiosAsignados()
            .subscribe((res) => {
            // console.log('propios pedidos', res);
            res.map(x => {
                x.json_datos_delivery = JSON.parse(x.json_datos_delivery);
            });
            this.listPedidos = res;
        });
    }
    // openDialogOrden(orden: any): void {
    //   const _dialogConfig = new MatDialogConfig();
    //   _dialogConfig.disableClose = true;
    //   _dialogConfig.hasBackdrop = true;
    //   _dialogConfig.width = '700px';
    //   _dialogConfig.panelClass = ['my-dialog-orden-detalle', 'my-dialog-scrool'];
    //   _dialogConfig.data = {
    //     laOrden: orden
    //   };
    //   const dialogRef = this.dialog.open(DialogOrdenDetalleComponent, _dialogConfig);
    // }
    openDialogCalificacion(_pedido = null) {
        this.dataPedido = this.pedidoRepartidorService.pedidoRepartidor;
        const dataCalificado = new src_app_modelos_datos_calificado_model__WEBPACK_IMPORTED_MODULE_9__["DatosCalificadoModel"];
        dataCalificado.idrepartidor = this.infoTokenService.infoUsToken.usuario.idrepartidor;
        dataCalificado.idcliente = this.dataPedido.datosCliente.idcliente;
        dataCalificado.idpedido = this.dataPedido.idpedido;
        dataCalificado.tipo = 2;
        dataCalificado.showNombre = true;
        dataCalificado.nombre = this.dataPedido.datosDelivery.nombre;
        dataCalificado.titulo = 'Como calificas al cliente?';
        dataCalificado.showTitulo = true;
        dataCalificado.showMsjTankyou = true;
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        _dialogConfig.data = {
            dataCalificado: dataCalificado
        };
        const dialogRef = this.dialog.open(src_app_componentes_dialog_calificacion_dialog_calificacion_component__WEBPACK_IMPORTED_MODULE_10__["DialogCalificacionComponent"], _dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
            // notificar al repartidor fin del pedido
            // this.timerService.stopCountTimerLimit();
            this.pedidoRepartidorService.finalizarPedidoPropioRepartidor();
            // this.router.navigate(['./repartidor/pedidos']);
        });
    }
    goRuta() {
        let _addDir = '';
        this.listPedidos.map(p => {
            _addDir += `${p.json_datos_delivery.p_header.arrDatosDelivery.direccionEnvioSelected.latitude},${p.json_datos_delivery.p_header.arrDatosDelivery.direccionEnvioSelected.longitude}+to:`;
        });
        _addDir = _addDir.slice(0, -4);
        // const linkGPS = `http://maps.google.com/maps/dir/?api=1&origin=-6.028458-76.971177&waypoints=${_addDir}`;
        const linkGPS = `http://maps.google.com/maps?f=d&source=s_d&saddr=${this.establecimientoIni.latitude},${this.establecimientoIni.longitude}&daddr=${_addDir}`;
        window.open(linkGPS, '_blank');
    }
    entregaTodo() {
        this.pedidoRepartidorService.listaPedidosEntregados();
        this.listPedidos = null;
        this.sumListPedidos = 0;
        this.sumGananciaTotal = 0;
    }
    resumenDelDia() {
        this.isShowResumen = true;
    }
    goBackRepartidorRed() {
        this.router.navigate(['./main/pedidos']);
    }
    goBackListPedidos() {
        if (this.isRepartidorRed) {
            if (this.countPedidosAsignados > 0) {
                this.router.navigate(['./main/list-grupo-pedidos']);
            }
            else {
                this.router.navigate(['./main/pedidos']);
            }
        }
        else {
            this.scanCode = false;
            this.isResulScan = false;
        }
    }
    verificarTiempoAsignacion() {
        if (this.isRepartidorRed) {
            // tiempo que va
            let _timeLastSet = localStorage.getItem(this.keyTimeSetLastPedido);
            _timeLastSet = _timeLastSet ? _timeLastSet : new Date().toLocaleTimeString();
            this.countPedidoSetForMe = parseInt(localStorage.getItem(this.keyCountSetLastPedido), 0);
            this.countPedidoSetForMe = isNaN(this.countPedidoSetForMe) ? 0 : this.countPedidoSetForMe;
            this.countPedidoSetForMe++;
            const _timeMin = this.utilService.xTiempoTranscurridos_en_minutos(_timeLastSet);
            // pasado los 10 minutos habilita nuevamente
            this.countPedidoSetForMe = _timeMin > 10 ? 1 : this.countPedidoSetForMe;
            localStorage.setItem(this.keyCountSetLastPedido, this.countPedidoSetForMe.toString());
            if (this.countPedidoSetForMe > 2) {
                return false;
            }
            else {
                localStorage.setItem(this.keyTimeSetLastPedido, new Date().toLocaleTimeString());
                return true;
            }
        }
        else {
            return true;
        }
    }
}
MapaPedidosComponent.ɵfac = function MapaPedidosComponent_Factory(t) { return new (t || MapaPedidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_1__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_13__["UtilitariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_3__["RepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_8__["PedidoRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_11__["GpsUbicacionRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_12__["ListenStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_11__["GpsUbicacionRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"])); };
MapaPedidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapaPedidosComponent, selectors: [["app-mapa-pedidos"]], decls: 10, vars: 3, consts: [[1, "container-body", "animated", "fadeInDown"], [1, "bg-dark", "text-white", "fs-13", "d-flex", "justify-content-between", "align-items-center", "p-2"], ["matRipple", "", 1, "pl-2", "btn-link-2", "xCursor", 3, "click"], [1, "d-flex", "align-items-center"], [1, "fa", "fa-shopping-bag"], [1, "fs-11", "pl-2"], [4, "ngIf"], ["class", "animated fadeIn", 4, "ngIf"], ["class", "xfooterA p-2", 4, "ngIf"], ["class", "w-100 center-div-screen", 4, "ngIf"], [1, "w-100", "center-div-screen"], ["class", "animated fadeIn text-center", 4, "ngIf"], [1, "animated", "fadeIn", "text-center"], ["matInput", "", "placeholder", "C\u00F3digo Delivery", "autocomplete", "off", "name", "txt_delivety", 1, "text-center"], ["txt_cod", ""], ["class", "p-2", 4, "ngIf"], [1, "btn", "btn-secondary", "mr-2", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseTemplateIsRed", ""], [1, "p-2"], [1, "fs-14", "fw-600", "text-danger", "animated", "flash"], [1, "btn", "btn-success", 3, "click"], [1, "animated", "fadeIn"], ["elseTemplate", ""], [1, "w-100", "text-center"], [1, "fa", "fa-spinner", "fa-spin", "fa-2x", "fa-fw"], [1, "d-flex", "justify-content-center"], [1, "btn", "btn-sm", "btn-success", "mr-1", 3, "click"], [1, "fs-12"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "p-3"], ["class", "p-5 w-100 text-center", 4, "ngIf"], ["mat-table", "", "class", "w-100", 3, "dataSource", 4, "ngIf"], ["class", "w-100 pt-3", 4, "ngIf"], [1, "p-5", "w-100", "text-center"], ["src", "./assets/images/waiting.JPG", "width", "250px", "alt", "waiting"], ["mat-stroked-button", "", 3, "click"], [1, "fa", "fa-arrow-left", "pr-2"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "Pedido"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Cliente"], ["mat-header-cell", "", "class", "text-left", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-left", 4, "matCellDef"], ["matColumnDef", "Importe"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "fw-600", "fs-12"], [1, "fw-100", "text-secondary", "fs-12"], [1, "text-success", "fs-10", 3, "ngClass"], ["mat-header-cell", "", 1, "text-left"], ["mat-cell", "", 1, "text-left"], [1, "fw-100", "fs-12"], [1, "fw-600", "badge", 3, "ngClass"], [1, "text-secondary", "fs-10", "ml-1"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right"], ["class", "badge badge-info", 4, "ngIf"], [1, "badge", "badge-info"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"], [1, "w-100", "pt-3"], [1, "text-right", "pr-4"], [1, "text-secondary", "pr-2"], [1, "fw-600", "fs-18"], [1, "text-secondary", "fs-13", "pr-2"], [1, "fw-600", "fs-13", "badge", "badge-info"], [1, "text-center", "w-100"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "fa", "fa-arrow-left"], [1, "xfooterA", "p-2"], ["matRipple", "", 1, "btn", "btn-secondary", "w-75", "p-2", "fs-20", "text-white", "animated", "fadeInUp", "delay-0-5s", 3, "click"], ["matRipple", "", 1, "btn", "btn-success", "w-75", "p-2", "fs-20", "text-white", "animated", "fadeInUp", "delay-0-5s", 3, "click"], [1, "fs-11", "fw-100"]], template: function MapaPedidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapaPedidosComponent_Template_div_click_2_listener() { return ctx.scanCode = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Codigo Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MapaPedidosComponent_div_7_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MapaPedidosComponent_div_8_Template, 6, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MapaPedidosComponent_div_9_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isShowResumen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowResumen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPedidos);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatRow"], _pedidos_atendidos_pedidos_atendidos_component__WEBPACK_IMPORTED_MODULE_22__["PedidosAtendidosComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DecimalPipe"]], styles: [".content-body-mapa[_ngcontent-%COMP%] {\r\n    \r\n    height: calc(100vh - 109px);\r\n    overflow: auto;\r\n}\r\n\r\n.btn-link-2[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: none;\r\n\tcolor: gold;\r\n\tcursor: pointer;\r\n}\r\n\r\n.center-div-screen[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 80vh;\r\n    overflow: hidden;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0px;    \r\n}\r\n\r\n.xfooter[_ngcontent-%COMP%] {\r\n    \r\n    bottom: 0px;\r\n    text-align: center;\r\n    width: 100%;\r\n    \r\n}\r\n\r\n.color-checked[_ngcontent-%COMP%] {\r\n    background-color: #e8f5e9;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYXJ0aWRvci9tYXBhLXBlZGlkb3MvbWFwYS1wZWRpZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGVBQWU7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcGFydGlkb3IvbWFwYS1wZWRpZG9zL21hcGEtcGVkaWRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYm9keS1tYXBhIHtcclxuICAgIC8qIG1hcmdpbi10b3A6IDU2cHg7ICovXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDlweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmJ0bi1saW5rLTI6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogZ29sZDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXItZGl2LXNjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDBweDsgICAgXHJcbn1cclxuXHJcblxyXG4ueGZvb3RlciB7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogcGFkZGluZzogMTRweDsgICAgICovXHJcbn1cclxuXHJcbi5jb2xvci1jaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZTk7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapaPedidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mapa-pedidos',
                templateUrl: './mapa-pedidos.component.html',
                styleUrls: ['./mapa-pedidos.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_1__["InfoTockenService"] }, { type: src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_13__["UtilitariosService"] }, { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_3__["RepartidorService"] }, { type: src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_8__["PedidoRepartidorService"] }, { type: src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_11__["GpsUbicacionRepartidorService"] }, { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_12__["ListenStatusService"] }, { type: src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_11__["GpsUbicacionRepartidorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/repartidor/pedido-detalle/pedido-detalle.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/repartidor/pedido-detalle/pedido-detalle.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PedidoDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoDetalleComponent", function() { return PedidoDetalleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/pedido-repartidor.service */ "./src/app/shared/services/pedido-repartidor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _componentes_comp_pedido_detalle_comp_pedido_detalle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../componentes/comp-pedido-detalle/comp-pedido-detalle.component */ "./src/app/componentes/comp-pedido-detalle/comp-pedido-detalle.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");










class PedidoDetalleComponent {
    constructor(repartidorPedidoService, infoTokenService, router) {
        this.repartidorPedidoService = repartidorPedidoService;
        this.infoTokenService = infoTokenService;
        this.router = router;
        this.infoPedido = {};
        this.indicacionesComprobante = '';
        this.comprobanteSolicitar = '';
    }
    ngOnInit() {
        let _dniRuc = '';
        let _otro = '';
        const _getPedidoSelectGroup = this.repartidorPedidoService.getPedidoSelect();
        if (_getPedidoSelectGroup) {
            this.infoPedido = _getPedidoSelectGroup; // this.infoTokenService.infoUsToken.usuario.idrepartidor;
            // this.infoPedido.idpedido = _getPedidoSelectGroup.idpedido;
            // this.infoPedido.idsede = _getPedidoSelectGroup.idsede;
            // this.infoPedido.idorg =  _getPedidoSelectGroup.idorg;
            const _dni = _getPedidoSelectGroup.json_datos_delivery.p_header.arrDatosDelivery.tipoComprobante.dni ? _getPedidoSelectGroup.json_datos_delivery.p_header.arrDatosDelivery.tipoComprobante.dni : '';
            _dniRuc = _dni === '' ? '' : _dni.length > 8 ? 'RUC ' : 'DNI ';
            _otro = _getPedidoSelectGroup.json_datos_delivery.p_header.arrDatosDelivery.tipoComprobante.otro ? _getPedidoSelectGroup.json_datos_delivery.p_header.arrDatosDelivery.tipoComprobante.otro : '';
            this.indicacionesComprobante = _dni === '' ? 'Publico en general.' :
                _dniRuc + ' ' + _dni + ' - ' + _otro;
            this.comprobanteSolicitar = _getPedidoSelectGroup.json_datos_delivery.p_header.arrDatosDelivery.tipoComprobante.descripcion;
            return;
        }
        this.infoPedido = this.repartidorPedidoService.pedidoRepartidor;
        this.infoPedido.idpedido = this.repartidorPedidoService.pedidoRepartidor.idpedido;
        this.infoPedido.idsede = this.repartidorPedidoService.pedidoRepartidor.datosComercio.idsede;
        this.infoPedido.idorg = this.repartidorPedidoService.pedidoRepartidor.datosComercio.idorg;
        this.infoPedido.datosDelivery.tipoComprobante.dni = this.infoPedido.datosDelivery.tipoComprobante.dni ? this.infoPedido.datosDelivery.tipoComprobante.dni : '';
        _dniRuc = this.infoPedido.datosDelivery.tipoComprobante.dni === '' ? '' : this.infoPedido.datosDelivery.tipoComprobante.dni.length > 8 ? 'RUC ' : 'DNI ';
        _otro = this.infoPedido.datosDelivery.tipoComprobante.otro ? this.infoPedido.datosDelivery.tipoComprobante.otro : '';
        this.indicacionesComprobante = this.infoPedido.datosDelivery.tipoComprobante.dni === '' ? 'Publico en general.' :
            _dniRuc + ' ' + this.infoPedido.datosDelivery.tipoComprobante.dni + ' - ' + _otro;
    }
    goBack() {
        // window.history.back();
        this.router.navigate(['/main/list-grupo-pedidos']);
    }
}
PedidoDetalleComponent.ɵfac = function PedidoDetalleComponent_Factory(t) { return new (t || PedidoDetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_3__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PedidoDetalleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoDetalleComponent, selectors: [["app-pedido-detalle"]], decls: 18, vars: 4, consts: [[1, "animated", "fadeInRight"], [3, "infoPedido", "showAllSubtotal"], [1, "xfooter", "animated", "fadeInUp", "delay-0-5s"], [1, "p-2", "div-comprobante"], [1, "fw-600"], [1, "fw-100"], ["matRipple", "", 1, "bg-success", "w-100", "fs-20", "text-white", "p-3", 3, "click"], [1, "fa", "fa-arrow-left"]], template: function PedidoDetalleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-comp-pedido-detalle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoDetalleComponent_Template_div_click_14_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Listo, regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infoPedido", ctx.infoPedido)("showAllSubtotal", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Solicitar ", ctx.comprobanteSolicitar, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.indicacionesComprobante);
    } }, directives: [_componentes_comp_pedido_detalle_comp_pedido_detalle_component__WEBPACK_IMPORTED_MODULE_4__["CompPedidoDetalleComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"]], styles: [".div-comprobante[_ngcontent-%COMP%] {\r\n    background: lightgrey;\r\n}\r\n\r\n.xfooter[_ngcontent-%COMP%] {\r\n    \r\n    bottom: 0px;\r\n    text-align: center;\r\n    width: 100%;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYXJ0aWRvci9wZWRpZG8tZGV0YWxsZS9wZWRpZG8tZGV0YWxsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcGFydGlkb3IvcGVkaWRvLWRldGFsbGUvcGVkaWRvLWRldGFsbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtY29tcHJvYmFudGUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG59XHJcblxyXG4ueGZvb3RlciB7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogcGFkZGluZzogMTRweDsgICAgICovXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoDetalleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pedido-detalle',
                templateUrl: './pedido-detalle.component.html',
                styleUrls: ['./pedido-detalle.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_1__["PedidoRepartidorService"] }, { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_3__["InfoTockenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/repartidor/pedidos-atendidos/pedidos-atendidos.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/repartidor/pedidos-atendidos/pedidos-atendidos.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PedidosAtendidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosAtendidosComponent", function() { return PedidosAtendidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





function PedidosAtendidosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resumen del dia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "N\u00B0 Pedidos entregados");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Comision");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Propina");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ganancia Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Importe a depositar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Importe a debitar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Neto a depositar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Neto a debitar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r210.listResumen.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r210.listResumen.num_pedidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r210.listResumen.comisionRepartidor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r210.listResumen.propinaRepartidor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r210.listResumen.costoTotalServicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r210.listResumen.importeDepositar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r210.listResumen.importeDebitar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 9, ctx_r210.importeNetoDepositar, ".2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](49, 12, ctx_r210.importeNetoDebitar, ".2"));
} }
class PedidosAtendidosComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.importeNetoDebitar = 0;
        this.importeNetoDepositar = 0;
    }
    set tabIndex(val) {
        if (val === 1) { // tab activo para este componente
            this.xLoadResumenPedidos();
        }
    }
    ngOnInit() {
        this.xLoadResumenPedidos();
    }
    xLoadPedidosAtendidos() {
        this.crudService.getAll('repartidor', 'get-pedidos-entregados-dia', false, false, true)
            .subscribe((res) => {
            this.listPedidosEntregados = res.data[0];
            // console.log(res);
        });
    }
    xLoadResumenPedidos() {
        this.crudService.getAll('repartidor', 'get-pedidos-resumen-entregados-dia', false, false, true)
            .subscribe((res) => {
            this.listResumen = res.data[0][0];
            if (!this.listResumen) {
                return;
            }
            this.importeNetoDebitar = parseFloat(this.listResumen.importeDepositar) - parseFloat(this.listResumen.importeDebitar);
            this.importeNetoDepositar = this.importeNetoDebitar < 1 ? 0 : this.importeNetoDebitar;
            this.importeNetoDebitar = this.importeNetoDebitar < 1 ? this.importeNetoDebitar * -1 : 0;
            this.xLoadPedidosAtendidos();
            // console.log(res);
        });
    }
}
PedidosAtendidosComponent.ɵfac = function PedidosAtendidosComponent_Factory(t) { return new (t || PedidosAtendidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"])); };
PedidosAtendidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidosAtendidosComponent, selectors: [["app-pedidos-atendidos"]], inputs: { tabIndex: "tabIndex" }, decls: 2, vars: 1, consts: [[1, "animated", "fadeInRight", "p-3"], ["class", "card-pedido fs-13", 4, "ngIf"], [1, "card-pedido", "fs-13"], [1, "card-pedido-head", "mb-2", "border-bottom", "d-flex", "justify-content-between"], [1, "fw-600"], [1, ""], [1, "border-bottom", "mb-2", "d-flex", "justify-content-between"], [1, "border-bottom", "fw-600", "mb-2", "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-between"]], template: function PedidosAtendidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PedidosAtendidosComponent_div_1_Template, 50, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listResumen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".card-pedido[_ngcontent-%COMP%] {\r\n    border: 1px solid #bdbdbd;\r\n    border-radius: 5px;\r\n    padding: 15px;\r\n    background-color: #eeeeee;\r\n}\r\n\r\n.card-pedido-head[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.card-pedido-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0px;    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYXJ0aWRvci9wZWRpZG9zLWF0ZW5kaWRvcy9wZWRpZG9zLWF0ZW5kaWRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcGFydGlkb3IvcGVkaWRvcy1hdGVuZGlkb3MvcGVkaWRvcy1hdGVuZGlkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXBlZGlkbyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbi5jYXJkLXBlZGlkby1oZWFkIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5jYXJkLXBlZGlkby1ib2R5IHAge1xyXG4gICAgbWFyZ2luOiAwcHg7ICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidosAtendidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pedidos-atendidos',
                templateUrl: './pedidos-atendidos.component.html',
                styleUrls: ['./pedidos-atendidos.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_1__["CrudHttpService"] }]; }, { tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/repartidor/pedidos/pedidos.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/repartidor/pedidos/pedidos.component.ts ***!
  \***************************************************************/
/*! exports provided: PedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosComponent", function() { return PedidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/pedido-repartidor.service */ "./src/app/shared/services/pedido-repartidor.service.ts");
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
/* harmony import */ var src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/timer-limit.service */ "./src/app/shared/services/timer-limit.service.ts");
/* harmony import */ var src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/gps-ubicacion-repartidor.service */ "./src/app/shared/services/gps-ubicacion-repartidor.service.ts");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/Subscription */ "./node_modules/rxjs/internal/Subscription.js");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/repartidor.service */ "./src/app/shared/services/repartidor.service.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pedidos_atendidos_pedidos_atendidos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pedidos-atendidos/pedidos-atendidos.component */ "./src/app/pages/repartidor/pedidos-atendidos/pedidos-atendidos.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _componentes_item_pedido_item_pedido_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../componentes/item-pedido/item-pedido.component */ "./src/app/componentes/item-pedido/item-pedido.component.ts");
/* harmony import */ var _componentes_item_pedido_express_item_pedido_express_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../componentes/item-pedido-express/item-pedido-express.component */ "./src/app/componentes/item-pedido-express/item-pedido-express.component.ts");



// import { TimerLimitService } from 'src/app/shared/services/timer-limit.service';























function PedidosComponent_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidosComponent_ng_container_13_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r195); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r194.recargarPedido(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recargar ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidosComponent_ng_container_13_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r195); const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r196.goScanCodeBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Asignarse Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PedidosComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PedidosComponent_ng_container_13_div_1_Template, 7, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r189.isExpress);
} }
function PedidosComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item-pedido", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("aceptaPedido", function PedidosComponent_ng_template_14_Template_app_item_pedido_aceptaPedido_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r197.aceptaPedido($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listPedidos", ctx_r191.listPedidosGroup)("importeAcumuladoPagar", ctx_r191.sumAcumuladoPagar);
} }
function PedidosComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item-pedido-express", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pedidoEntregado", function PedidosComponent_div_16_div_1_Template_app_item_pedido_express_pedidoEntregado_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r202); const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r201.pedidoExpressEntregado($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r200 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elpedido", item_r200);
} }
function PedidosComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PedidosComponent_div_16_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r192.pedido_express);
} }
class PedidosComponent {
    constructor(infoTokenService, 
    // public timerLimitService: TimerLimitService,
    socketService, pedidoRepartidorService, router, listenService, timerLimitService, geoPositionService, 
    // private crudService: CrudHttpService,
    repartidorServcice) {
        this.infoTokenService = infoTokenService;
        this.socketService = socketService;
        this.pedidoRepartidorService = pedidoRepartidorService;
        this.router = router;
        this.listenService = listenService;
        this.timerLimitService = timerLimitService;
        this.geoPositionService = geoPositionService;
        this.repartidorServcice = repartidorServcice;
        this.efectivoMano = 0;
        this.listPedidos = [];
        this.listPedidosGroup = [];
        this._tabIndex = 0;
        this.sumAcumuladoPagar = 0;
        this.isExpress = false; // si es pedido express mandado o comercio afiliado
        this.yaQuitoPedido = 0;
        this.destroy$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribeSocket = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
        this.unsubscribeSocketClearPedido = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
    }
    ngOnInit() {
        this.efectivoMano = this.infoTokenService.infoUsToken.efectivoMano;
        this.listenService.setEfectivoMano(this.efectivoMano);
        // this.repartidorServcice.listenPedidosNuevos();
        // console.log('this.infoTokenService.infoUsToken', this.infoTokenService.infoUsToken);
        // this.listPedidos = new PedidoRepartidorModel[0];
        if (this.listPedidos.length === 0) {
            localStorage.setItem('sys::count::p', '0');
        }
    }
    ngAfterViewInit() {
        // this.geoPositionService.onGeoPosition();
        // iniciar transmitir position
        // this.geoPositionService.onGeoWatchPosition();
        this.listenPedidos();
    }
    ngOnDestroy() {
        this.unsubscribeSocket.unsubscribe();
        this.unsubscribeSocketClearPedido.unsubscribe();
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    listenPedidos() {
        // escuchar cambios en efectivo mano
        this.listenService.efectivoManoMano$.subscribe(res => {
            this.efectivoMano = res === 0 ? this.infoTokenService.infoUsToken.efectivoMano : res;
        });
        // si recarga la pagina chequea si existe pedido pendiente
        this.pedidoRepartidor = this.pedidoRepartidorService.pedidoRepartidor;
        // // if ( this.pedidoRepartidor.estado === 0 ) {
        //   this.addPedidoToList(this.pedidoRepartidor);
        // }
        // verificar si tenemos pedidos pendientes por aceptar
        this.unsubscribeSocket = this.socketService.onRepartidorGetPedidoPendienteAceptar()
            .subscribe((res) => {
            // console.log('repartidor-get-pedido-pendiente-aceptar', res);
            this.dataPedidos = res[0].pedido_por_aceptar;
            this.isExpress = this.dataPedidos ? this.dataPedidos.isexpress || this.dataPedidos.isretiroatm ? this.dataPedidos.isexpress === 1 || this.dataPedidos.isretiroatm === 1 : false : false;
            this.pedidoRepartidorService.setPedidoPorAceptar(this.dataPedidos);
            if (this.isExpress) {
                this.showPedidoExpress();
                return;
            }
            // this.pedidoRepartidorService.setPedidoPasoVa(res[0].pedido_paso_va);
            if (this.dataPedidos === null || res[0].solicita_liberar_pedido === 1) {
                // console.log('clear pedidos');
                this.listPedidosGroup = [];
                this.pedidoRepartidorService.cleanLocal();
                this.timerLimitService.stopCountTimerLimit();
                return;
            }
            if (this.dataPedidos) {
                // console.log('repartidor-get-pedido-pendiente-aceptar dataPedidos', this.dataPedidos);
                this.dataPedidos.pedido_paso_va = res[0].pedido_paso_va;
                // this.yaQuitoPedido = 2;
                this.yaQuitoPedido = 0;
                this.pedidoRepartidorService.setPedidoPasoVa(this.dataPedidos.pedido_paso_va);
                this.darFormatoGrupoPedidosRecibidos(this.dataPedidos);
            }
        });
        // opcion 2 // grupo de pedidos
        this.unsubscribeSocket = this.socketService.onRepartidorNuevoPedido()
            .subscribe((res) => {
            // console.log('repartidor-nuevo-pedido', res);
            const pedidos = res[1];
            this.yaQuitoPedido = 1;
            this.pedidoRepartidorService.setPedidoPasoVa(0);
            this.pedidoRepartidorService.setPedidoPorAceptar(pedidos);
            // this.pedidoRepartidorService.setPedidoPasoVa(this.dataPedidos.pedido_paso_va);
            this.darFormatoGrupoPedidosRecibidos(pedidos);
        });
        this.unsubscribeSocketClearPedido = this.socketService.onRepartidorServerQuitaPedido()
            .subscribe((idpedido_res) => {
            // console.log('repartidor-notifica-server-quita-pedido');
            // console.log('idpedido_res', idpedido_res);
            if (this.yaQuitoPedido === 1) {
                this.pedidoRepartidorService.setPedidoPasoVa(0);
                this.pedidoRepartidorService.setPasoVa(0);
                this.pedidoRepartidorService.setPedidoPorAceptar(null);
                this.listPedidosGroup = [];
                this.pedidoRepartidorService.cleanLocal();
                this.timerLimitService.stopCountTimerLimit();
                this.yaQuitoPedido = 0;
            }
            // }
        });
    }
    darFormatoGrupoPedidosRecibidos(pedidos) {
        if (!pedidos) {
            return;
        }
        // console.log('darFormatoGrupoPedidosRecibidos', new Date().toLocaleDateString());
        // console.log('pedidos.pedidos.join(', ')', pedidos.pedidos.join(','));
        const _idSend = Array.from(new Set(pedidos.pedidos)).join(',');
        // console.log('_idSend', _idSend);
        this.sumAcumuladoPagar = pedidos.importe_pagar;
        this.pedidoRepartidorService.loadPedidosRecibidos(_idSend)
            .subscribe((response) => {
            // console.log('res', response);
            // formateamos el json_}¿datos
            let importeTotalPedido;
            const _listAsignar = response.map(p => {
                p.json_datos_delivery = JSON.parse(p.json_datos_delivery);
                importeTotalPedido = parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.importeTotal);
                importeTotalPedido = importeTotalPedido === 0 ? parseFloat(p.json_datos_delivery.p_subtotales[p.json_datos_delivery.p_subtotales.length - 1].importe) : importeTotalPedido;
                p.importe_pagar_comercio = parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.importeTotal) - parseFloat(p.json_datos_delivery.p_header.arrDatosDelivery.costoTotalDelivery);
                p.importe_pagar_comercio = p.json_datos_delivery.p_header.arrDatosDelivery.metodoPago.idtipo_pago === 2 ? 0 : p.importe_pagar_comercio;
                return p;
            });
            this.listPedidosGroup = JSON.parse(JSON.stringify(_listAsignar));
            this.pedidoRepartidorService.setLocalIds(pedidos);
            this.pedidoRepartidorService.setLocalItems(this.listPedidosGroup);
            // this.pedidoRepartidorService.playAudioNewPedido();
        });
    }
    showPedidoExpress() {
        this.pedido_express = this.dataPedidos.pedidos;
    }
    // private addPedidoToList(pedido: PedidoRepartidorModel): void {
    //   if ( !pedido.datosDelivery ) { return; }
    //   // console.log('pedido', pedido);
    //   if ( !pedido.conFormato ) {
    //     this.pedidoRepartidorService.darFormatoPedidoLocal(pedido.datosItems);
    //     const _arrTotal = this.pedidoRepartidorService.darFormatoSubTotales();
    //     pedido = this.pedidoRepartidorService.pedidoRepartidor;
    //     pedido.datosSubtotalesShow = _arrTotal;
    //     pedido.conFormato  = true; // indica que ya tiene formato
    //   }
    //   // this.pedidoRepartidorService.setLocal(pedido);
    //   this.listPedidos.push(pedido);
    //   // console.log(pedido);
    //   this.pedidoRepartidorService.playAudioNewPedido();
    // }
    aceptaPedido(_establecimiento) {
        // console.log('this.dataPedidos', _establecimiento);
        // notificamos al comercio que estos pedidos ya tienen repartidor
        this.socketService.emit('repartidor-acepta-pedido', _establecimiento);
        // pedido ya fue aceptado
        if (this.pedidoRepartidorService.pedidoRepartidor.aceptado) {
            this.router.navigate(['./main/list-grupo-pedidos']);
            return;
        }
        this.positionNow = this.geoPositionService.get();
        // console.log('pedido acetpado');
        // this.router.navigate(['/', 'indicaciones']);
        // emitir pedido aceptado para comercio
        // const _dataPedido = {
        // idsede: this.pedidoRepartidorService.pedidoRepartidor.datosComercio.idsede,
        // idpedido: this.pedidoRepartidorService.pedidoRepartidor.idpedido,
        this.dataPedidos.idrepartidor = this.infoTokenService.infoUsToken.usuario.idrepartidor,
            this.dataPedidos.nombre = this.infoTokenService.infoUsToken.usuario.nombre,
            this.dataPedidos.apellido = this.infoTokenService.infoUsToken.usuario.apellido,
            this.dataPedidos.telefono = this.infoTokenService.infoUsToken.usuario.telefono,
            this.dataPedidos.position_now = this.positionNow;
        // };
        // console.log('repartidor-acepta-pedido', this.dataPedidos);
        this.pedidoRepartidorService.pedidoRepartidor.aceptado = true;
        this.pedidoRepartidorService.setLocal();
        this.router.navigate(['./main/list-grupo-pedidos']);
    }
    clickTab($event) {
        // console.log('$event.index', $event.index);
        this._tabIndex = $event.index;
    }
    recargarPedido() {
        location.reload();
    }
    goScanCodeBar() {
        this.router.navigate(['./main/mapa-de-pedidos']);
    }
    pedidoExpressEntregado(pedidoFinalizado) {
        // console.log('finaliza el pedido');
        pedidoFinalizado.quitar = true;
        this.quitarPedidoExpress(pedidoFinalizado.idpedido_mandado);
        this.pedidoRepartidorService.finalizarPedidoExpress(pedidoFinalizado, this.dataPedidos);
    }
    quitarPedidoExpress(_idpedido_mandado) {
        this.pedido_express = this.pedido_express.filter(x => x.idpedido_mandado !== _idpedido_mandado);
        this.dataPedidos.pedidos = this.pedido_express;
        // finaliza todo
        if (this.pedido_express.length === 0) {
            this.isExpress = false;
            this.pedido_express = null;
            this.pedidoRepartidorService.cleanLocal();
        }
    }
}
PedidosComponent.ɵfac = function PedidosComponent_Factory(t) { return new (t || PedidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_5__["PedidoRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_7__["TimerLimitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_8__["GpsUbicacionRepartidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_10__["RepartidorService"])); };
PedidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidosComponent, selectors: [["app-pedidos"]], decls: 20, vars: 8, consts: [[1, "animated", "fadeInDown"], [1, "p-3", "bg-dark", "text-white", "fs-13", "d-flex", "justify-content-between"], [1, "w-100"], ["mat-stretch-tabs", "", 3, "selectedTabChange"], ["label", "Pendientes"], [1, "p-3", "x-h-size"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [4, "ngIf"], ["label", "Entregados"], [1, "x-h-size"], [3, "tabIndex"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], ["mat-stroked-button", "", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [3, "listPedidos", "importeAcumuladoPagar", "aceptaPedido"], ["class", "mb-3 animated fadeInDown", 4, "ngFor", "ngForOf"], [1, "mb-3", "animated", "fadeInDown"], [3, "elpedido", "pedidoEntregado"]], template: function PedidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Efectivo en mano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function PedidosComponent_Template_mat_tab_group_selectedTabChange_10_listener($event) { return ctx.clickTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PedidosComponent_ng_container_13_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PedidosComponent_ng_template_14_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PedidosComponent_div_16_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-pedidos-atendidos", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("S/. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx.efectivoMano, ".2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPedidosGroup.length === 0)("ngIfElse", _r190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx._tabIndex);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _pedidos_atendidos_pedidos_atendidos_component__WEBPACK_IMPORTED_MODULE_13__["PedidosAtendidosComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _componentes_item_pedido_item_pedido_component__WEBPACK_IMPORTED_MODULE_15__["ItemPedidoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _componentes_item_pedido_express_item_pedido_express_component__WEBPACK_IMPORTED_MODULE_16__["ItemPedidoExpressComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]], styles: [".x-h-size[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 155px);\r\n}\r\n\r\n.xfooter[_ngcontent-%COMP%] {\r\n    \r\n    bottom: 0px;\r\n    text-align: center;\r\n    width: 100%;\r\n    \r\n}\r\n\r\n.btn-footer[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYXJ0aWRvci9wZWRpZG9zL3BlZGlkb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBhcnRpZG9yL3BlZGlkb3MvcGVkaWRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLngtaC1zaXplIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1NXB4KTtcclxufVxyXG5cclxuLnhmb290ZXIge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBhZGRpbmc6IDE0cHg7ICAgICAqL1xyXG59XHJcblxyXG4uYnRuLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pedidos',
                templateUrl: './pedidos.component.html',
                styleUrls: ['./pedidos.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"] }, { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }, { type: src_app_shared_services_pedido_repartidor_service__WEBPACK_IMPORTED_MODULE_5__["PedidoRepartidorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"] }, { type: src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_7__["TimerLimitService"] }, { type: src_app_shared_services_gps_ubicacion_repartidor_service__WEBPACK_IMPORTED_MODULE_8__["GpsUbicacionRepartidorService"] }, { type: src_app_shared_services_repartidor_service__WEBPACK_IMPORTED_MODULE_10__["RepartidorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/repartidor/repartidor.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/repartidor/repartidor.module.ts ***!
  \*******************************************************/
/*! exports provided: RepartidorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepartidorModule", function() { return RepartidorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _repartidor_rounting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repartidor.rounting */ "./src/app/pages/repartidor/repartidor.rounting.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/pages/repartidor/main/main.component.ts");
/* harmony import */ var _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pedidos/pedidos.component */ "./src/app/pages/repartidor/pedidos/pedidos.component.ts");
/* harmony import */ var _indicaciones_pedido_indicaciones_pedido_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indicaciones-pedido/indicaciones-pedido.component */ "./src/app/pages/repartidor/indicaciones-pedido/indicaciones-pedido.component.ts");
/* harmony import */ var src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/componentes/componentes.module */ "./src/app/componentes/componentes.module.ts");
/* harmony import */ var _pedido_detalle_pedido_detalle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pedido-detalle/pedido-detalle.component */ "./src/app/pages/repartidor/pedido-detalle/pedido-detalle.component.ts");
/* harmony import */ var _pedidos_atendidos_pedidos_atendidos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pedidos-atendidos/pedidos-atendidos.component */ "./src/app/pages/repartidor/pedidos-atendidos/pedidos-atendidos.component.ts");
/* harmony import */ var _mapa_pedidos_mapa_pedidos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mapa-pedidos/mapa-pedidos.component */ "./src/app/pages/repartidor/mapa-pedidos/mapa-pedidos.component.ts");
/* harmony import */ var _indicaciones_grupo_mapa_indicaciones_grupo_mapa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./indicaciones-grupo-mapa/indicaciones-grupo-mapa.component */ "./src/app/pages/repartidor/indicaciones-grupo-mapa/indicaciones-grupo-mapa.component.ts");
/* harmony import */ var _list_grupo_pedidos_list_grupo_pedidos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-grupo-pedidos/list-grupo-pedidos.component */ "./src/app/pages/repartidor/list-grupo-pedidos/list-grupo-pedidos.component.ts");









// import { DialogEfectivoRepartidorComponent } from 'src/app/componentes/dialog-efectivo-repartidor/dialog-efectivo-repartidor.component';






class RepartidorModule {
}
RepartidorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RepartidorModule });
RepartidorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RepartidorModule_Factory(t) { return new (t || RepartidorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _repartidor_rounting__WEBPACK_IMPORTED_MODULE_2__["RepartidorRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_8__["ComponentesModule"],
            src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RepartidorModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_4__["PedidosComponent"],
        _indicaciones_pedido_indicaciones_pedido_component__WEBPACK_IMPORTED_MODULE_5__["IndicacionesPedidoComponent"],
        _pedido_detalle_pedido_detalle_component__WEBPACK_IMPORTED_MODULE_9__["PedidoDetalleComponent"],
        _pedidos_atendidos_pedidos_atendidos_component__WEBPACK_IMPORTED_MODULE_10__["PedidosAtendidosComponent"],
        _mapa_pedidos_mapa_pedidos_component__WEBPACK_IMPORTED_MODULE_11__["MapaPedidosComponent"],
        _indicaciones_grupo_mapa_indicaciones_grupo_mapa_component__WEBPACK_IMPORTED_MODULE_12__["IndicacionesGrupoMapaComponent"],
        _list_grupo_pedidos_list_grupo_pedidos_component__WEBPACK_IMPORTED_MODULE_13__["ListGrupoPedidosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _repartidor_rounting__WEBPACK_IMPORTED_MODULE_2__["RepartidorRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_8__["ComponentesModule"],
        src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepartidorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                    _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_4__["PedidosComponent"],
                    _indicaciones_pedido_indicaciones_pedido_component__WEBPACK_IMPORTED_MODULE_5__["IndicacionesPedidoComponent"],
                    _pedido_detalle_pedido_detalle_component__WEBPACK_IMPORTED_MODULE_9__["PedidoDetalleComponent"],
                    _pedidos_atendidos_pedidos_atendidos_component__WEBPACK_IMPORTED_MODULE_10__["PedidosAtendidosComponent"],
                    _mapa_pedidos_mapa_pedidos_component__WEBPACK_IMPORTED_MODULE_11__["MapaPedidosComponent"],
                    _indicaciones_grupo_mapa_indicaciones_grupo_mapa_component__WEBPACK_IMPORTED_MODULE_12__["IndicacionesGrupoMapaComponent"],
                    _list_grupo_pedidos_list_grupo_pedidos_component__WEBPACK_IMPORTED_MODULE_13__["ListGrupoPedidosComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _repartidor_rounting__WEBPACK_IMPORTED_MODULE_2__["RepartidorRoutingModule"],
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                    src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_8__["ComponentesModule"],
                    src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/repartidor/repartidor.rounting.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/repartidor/repartidor.rounting.ts ***!
  \*********************************************************/
/*! exports provided: RepartidorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepartidorRoutingModule", function() { return RepartidorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/pages/repartidor/main/main.component.ts");
/* harmony import */ var _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidos/pedidos.component */ "./src/app/pages/repartidor/pedidos/pedidos.component.ts");
/* harmony import */ var _indicaciones_pedido_indicaciones_pedido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indicaciones-pedido/indicaciones-pedido.component */ "./src/app/pages/repartidor/indicaciones-pedido/indicaciones-pedido.component.ts");
/* harmony import */ var _pedido_detalle_pedido_detalle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedido-detalle/pedido-detalle.component */ "./src/app/pages/repartidor/pedido-detalle/pedido-detalle.component.ts");
/* harmony import */ var _pedidos_atendidos_pedidos_atendidos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedidos-atendidos/pedidos-atendidos.component */ "./src/app/pages/repartidor/pedidos-atendidos/pedidos-atendidos.component.ts");
/* harmony import */ var _mapa_pedidos_mapa_pedidos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapa-pedidos/mapa-pedidos.component */ "./src/app/pages/repartidor/mapa-pedidos/mapa-pedidos.component.ts");
/* harmony import */ var _list_grupo_pedidos_list_grupo_pedidos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-grupo-pedidos/list-grupo-pedidos.component */ "./src/app/pages/repartidor/list-grupo-pedidos/list-grupo-pedidos.component.ts");
/* harmony import */ var _indicaciones_grupo_mapa_indicaciones_grupo_mapa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./indicaciones-grupo-mapa/indicaciones-grupo-mapa.component */ "./src/app/pages/repartidor/indicaciones-grupo-mapa/indicaciones-grupo-mapa.component.ts");












const routes = [{
        path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        data: { titulo: 'Inicio' },
        children: [
            // {
            //     path: '', redirectTo: 'pedidos'
            // },
            {
                path: 'pedidos',
                component: _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_3__["PedidosComponent"],
                data: { titulo: 'Pedido' }
            },
            {
                path: 'indicaciones',
                component: _indicaciones_pedido_indicaciones_pedido_component__WEBPACK_IMPORTED_MODULE_4__["IndicacionesPedidoComponent"],
                data: { titulo: 'Indicaciones Pedido' }
            },
            {
                path: 'pedido-detalle',
                component: _pedido_detalle_pedido_detalle_component__WEBPACK_IMPORTED_MODULE_5__["PedidoDetalleComponent"],
                data: { titulo: 'Indicaciones Pedido' }
            },
            {
                path: 'pedidos-atendidos',
                component: _pedidos_atendidos_pedidos_atendidos_component__WEBPACK_IMPORTED_MODULE_6__["PedidosAtendidosComponent"],
                data: { titulo: 'Pedidos Atendidos' }
            },
            {
                path: 'mapa-de-pedidos',
                component: _mapa_pedidos_mapa_pedidos_component__WEBPACK_IMPORTED_MODULE_7__["MapaPedidosComponent"],
                data: { titulo: 'Mapa de pedidos' }
            },
            {
                path: 'list-grupo-pedidos',
                component: _list_grupo_pedidos_list_grupo_pedidos_component__WEBPACK_IMPORTED_MODULE_8__["ListGrupoPedidosComponent"],
                data: { titulo: 'Grupo de pedidos' }
            },
            {
                path: 'indicaciones-mapa-grupo',
                component: _indicaciones_grupo_mapa_indicaciones_grupo_mapa_component__WEBPACK_IMPORTED_MODULE_9__["IndicacionesGrupoMapaComponent"],
                data: { titulo: 'Indicaciones en el mapa' }
            }
        ]
    }];
class RepartidorRoutingModule {
}
RepartidorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RepartidorRoutingModule });
RepartidorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RepartidorRoutingModule_Factory(t) { return new (t || RepartidorRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RepartidorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepartidorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/navigator-link.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/navigator-link.service.ts ***!
  \***********************************************************/
/*! exports provided: NavigatorLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorLinkService", function() { return NavigatorLinkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _listen_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
// servicio adminsitra el navigator link -- carta y resumen










class NavigatorLinkService {
    constructor(router, infoTokenService, listenService) {
        // router.events.pipe(
        //   filter((event: NavigationEvent) => {
        //     return (event instanceof NavigationStart);
        //   })
        // ).subscribe(
        //   (event: NavigationStart) => {
        //     console.log('navigation', event);
        //     if (event.navigationTrigger !== 'popstate') {
        //       let _urlParams: any;
        //       try {
        //         _urlParams = event.url.split(';')[1].split('=')[1];
        //       } catch (error) {
        //         // this.managerGoBack();
        //         _urlParams = [];
        //         return;
        //       }
        this.router = router;
        this.infoTokenService = infoTokenService;
        this.listenService = listenService;
        this.disabledBack = false;
        this.resNavigatorSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.resNavigatorSourceObserve$ = this.resNavigatorSource.asObservable();
        this.pageActive = 'carta';
        this.resNavigator = [];
        this.historyNavigator = [];
        this.lastUrlHistory = '';
        //       if (_urlParams.length > 0) {
        //         this.resNavigator.pageActive = this.pageActive;
        //         this.resNavigator.url = _urlParams;
        //         // this.saveHistoryPageActive(this.pageActive, _urlParams);
        //         this.resNavigatorSource.next(this.resNavigator);
        //       }
        //     }
        //   });
        this.listenEventNavigator();
    }
    listenEventNavigator() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(2, 1)).subscribe((e) => {
            if (e !== null && e !== undefined) {
                if (e[1].navigationTrigger === 'popstate') {
                    // desahabilitar boton back
                    if (this.disabledBack) {
                        return false;
                    }
                    const elUrl = e[0]['url'];
                    const _url = elUrl.indexOf(';') ? e[0]['url'].substr(1).split(';')[1].split('=')[1] : e[0]['url'];
                    // const _nextUrl = e[1]['url'].substr(1).split(';')[1].split('=')[1];
                    if (_url.length > 0) {
                        this.lastUrlHistory = _url; // last url -- de donde viene
                        // this.managerGoBack(_url, '');
                    }
                }
                // console.log(e[0]);
            }
        });
    }
    setPageActive(_pageActive) {
        this.pageActive = _pageActive;
        this.lastUrlHistory = _pageActive !== 'carta' ? _pageActive : this.lastUrlHistory;
        const itemHistory = this.findPageActiveInHistory(_pageActive);
        if (itemHistory) { // si existe
            this.addLink(itemHistory.url);
        }
        else {
            // this.saveHistoryPageActive(_pageActive, _pageActive);
            this.addLink(_pageActive);
        }
        this.resNavigator.pageActive = _pageActive;
        this.resNavigator.url = itemHistory ? itemHistory.url : _pageActive;
        this.resNavigatorSource.next(this.resNavigator);
    }
    saveHistoryPageActive(key, url) {
        this.historyNavigator[key] = [];
        this.historyNavigator[key].key = key;
        this.historyNavigator[key].url = url;
    }
    findPageActiveInHistory(_key) {
        return Object.values(this.historyNavigator).filter(x => x.key === _key)[0];
    }
    addLink(params) {
        this.router.navigate(['.', { state: params }]);
        this.saveHistoryPageActive(this.pageActive, params);
    }
    cerrarSession(reload = false) {
        if (this.infoTokenService.isDelivery()) {
            this.router.navigate(['../zona-delivery']);
        }
        else {
            this.router.navigate(['../'])
                .then(() => {
                if (reload) {
                    window.location.reload();
                }
            });
        }
    }
    // maneja los back
    // si es [mipedido-confirma] -> ['mipedido']
    // si es [mipedido, estado] -> 'carta' - > historial
    // si es [carta-i-secciones-items] -> [carta-i-secciones]
    // si es [carta-i-secciones] -> [carta-i-]
    // si es [carta-i-] -> 'carta'
    // si es [carta] -> inicio
    managerGoBack(previusUrl, nexturl) {
        // const _url = this.lastUrlHistory;
        let _pageActive = '';
        console.log('managerGoBack', previusUrl);
        switch (previusUrl) {
            case 'carta-i-secciones-items':
                _pageActive = 'carta';
                this.addLink('carta-i-secciones');
                break;
            case 'carta-i-secciones':
                _pageActive = 'carta';
                this.addLink('carta-i-');
                break;
            case 'carta-i-':
                _pageActive = 'carta-o-';
                this.addLink('carta-o-');
                console.log('=========================== listo para salir');
                this.listoParaSalir();
                break;
            // case 'carta-o':
            //   _pageActive = 'carta';
            //   this.addLink('carta');
            //   console.log('listo para salir');
            //   break;
            case 'mipedido-confirma':
                _pageActive = 'mipedido';
                this.addLink('mipedido');
                break;
            case 'mipedido':
                _pageActive = 'carta';
                this.addLink('carta');
                this.listoParaSalir();
                // console.log('=========================== listo para salir');
                break;
            case 'estado':
                _pageActive = 'carta';
                // this.findAndApplyHistory(_pageActive);
                break;
            case 'carta':
                // _pageActive = '';
                // this.router.navigate(['../']);
                _pageActive = 'carta';
                break;
            case 'lanzar-encuesta':
                _pageActive = 'lanzar-encuesta';
                break;
        }
        if (_pageActive !== '') {
            this.pageActive = _pageActive;
            this.setPageActive(_pageActive);
        }
    }
    // usar router de servicio
    _router(link) {
        this.router.navigate([link]);
    }
    disableGoBack() {
        this.disabledBack = true;
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
    }
    listoParaSalir() {
        if (this.infoTokenService.isDelivery()) {
            // abrir cerrarr
            // if ( this.estadoPedidoClienteService.estadoPedido.hayPedidoCliente ) {
            this.listenService.setIsOutEstablecimientoDelivery(true);
            // }
        }
    }
}
NavigatorLinkService.ɵfac = function NavigatorLinkService_Factory(t) { return new (t || NavigatorLinkService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_info_token_service__WEBPACK_IMPORTED_MODULE_4__["InfoTockenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_listen_status_service__WEBPACK_IMPORTED_MODULE_5__["ListenStatusService"])); };
NavigatorLinkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigatorLinkService, factory: NavigatorLinkService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigatorLinkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _info_token_service__WEBPACK_IMPORTED_MODULE_4__["InfoTockenService"] }, { type: _listen_status_service__WEBPACK_IMPORTED_MODULE_5__["ListenStatusService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-repartidor-repartidor-module-es2015.js.map