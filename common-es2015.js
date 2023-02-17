(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/utilitarios.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/utilitarios.service.ts ***!
  \********************************************************/
/*! exports provided: UtilitariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitariosService", function() { return UtilitariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class UtilitariosService {
    constructor() { }
    primeraConMayusculas(field) {
        field = field.toLowerCase();
        return field.charAt(0).toUpperCase() + field.slice(1);
    }
    reformatDate(dateStr) {
        const dArr = dateStr.split('-'); // ex input "2010-01-18"
        return dArr[2] + '/' + dArr[1] + '/' + dArr[0]; // ex out: "18/01/10"
    }
    xTiempoTranscurridos_2(h2) {
        const h1 = this.xDevolverHora();
        const hora1 = h1.split(':');
        const hora2 = h2.split(':');
        const t1 = new Date();
        const t2 = new Date();
        if (hora2[2] === null) {
            hora2[2] = '00';
        }
        t2.setHours(hora1[0], hora1[1], hora1[2]);
        t1.setHours(hora2[0], hora2[1], hora2[2]);
        const dif = t2 - t1; // diferencia en milisegundos
        const difSeg = Math.floor(dif / 1000);
        const segundos = difSeg % 60; // segundos
        const difMin = Math.floor(difSeg / 60);
        const minutos = difMin % 60; // minutos
        const difHs = Math.floor(difMin / 60);
        const horas = difHs % 24; // horas
        return this.xCeroIzq(horas, 2) + ':' + this.xCeroIzq(minutos, 2) + ':' + this.xCeroIzq(segundos, 2);
    }
    xTiempoTranscurridos_en_minutos(h2) {
        const h1 = this.xDevolverHora();
        const hora1 = h1.split(':');
        const hora2 = h2.split(':');
        const t1 = new Date();
        const t2 = new Date();
        if (hora2[2] === null) {
            hora2[2] = '00';
        }
        t2.setHours(hora1[0], hora1[1], hora1[2]);
        t1.setHours(hora2[0], hora2[1], hora2[2]);
        const dif = t2 - t1; // diferencia en milisegundos
        const difSeg = Math.floor(dif / 1000);
        const segundos = difSeg % 60; // segundos
        const difMin = Math.floor(difSeg / 60);
        const minutos = difMin % 60; // minutos
        const difHs = Math.floor(difMin / 60);
        const horas = difHs % 24; // horas
        const onlyMin = horas * 60 + minutos;
        return this.xCeroIzq(onlyMin, 2);
    }
    // optione el sistema operativo del cliente
    getOS() {
        const userAgent = window.navigator.userAgent;
        const platform = window.navigator.platform;
        const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
        const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
        const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
        let os = null;
        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        }
        else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        }
        else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        }
        else if (/Android/.test(userAgent)) {
            os = 'Android';
        }
        else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }
        return os;
    }
    //   getTiempoTranscurridosConHoraActual (h2: string): string {
    //     const h1 = this.xDevolverHora();
    //     const hora1 = h1.split(':');
    //     const hora2 = h2.split(':');
    //     const t1 = new Date();
    //     const t2 = new Date();
    //     if ( hora2[2] === null) { hora2[2] = '00'; }
    //     t2.setHours( hora1[0], hora1[1], hora1[2]);
    //     t1.setHours( hora2[0], hora2[1], hora2[2]);
    //     const dif = <>t2 - t1; // diferencia en milisegundos
    //     const difSeg = Math.floor(dif / 1000);
    //     const segundos = difSeg % 60; // segundos
    //     const difMin = Math.floor(difSeg / 60);
    //     const minutos = difMin % 60; // minutos
    //     const difHs = Math.floor(difMin / 60);
    //     const horas = difHs % 24; // horas
    //     return this.xCeroIzq(horas, 2) + ':' + this.xCeroIzq(minutos, 2) + ':' + this.xCeroIzq(segundos, 2);
    // }
    xDevolverHora() {
        const d = new Date();
        return this.xCeroIzq(d.getHours(), 2) + ':' + this.xCeroIzq(d.getMinutes(), 2) + ':' + this.xCeroIzq(d.getSeconds(), 2);
    }
    xCeroIzq(Num, CantidadCeros) {
        Num = Num.toString();
        while (Num.length < CantidadCeros) {
            Num = '0' + Num;
        }
        return Num;
    }
}
UtilitariosService.ɵfac = function UtilitariosService_Factory(t) { return new (t || UtilitariosService)(); };
UtilitariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilitariosService, factory: UtilitariosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilitariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map