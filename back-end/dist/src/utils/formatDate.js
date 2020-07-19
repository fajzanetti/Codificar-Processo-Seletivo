"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function dateToDMYHM(date) {
    var strArray = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    var DIA = date.getDate();
    var MES = strArray[date.getMonth()];
    var ANO = date.getFullYear();
    var HORA = date.getHours();
    var MIN = date.getMinutes();
    var ap = 'AM';
    if (HORA >= 12) {
        ap = 'PM';
    }
    if (HORA > 12) {
        HORA -= 12;
    }
    if (HORA === 0) {
        HORA = 12;
    }
    return ((DIA <= 9 ? "0" + DIA : DIA) + ", " + MES + " de " + ANO + " \u00E0s " + (HORA <= 9 ? "0" + HORA : HORA) + ":" + (MIN <= 9 ? "0" + MIN : MIN) + " " + ap);
}
exports.default = dateToDMYHM;
