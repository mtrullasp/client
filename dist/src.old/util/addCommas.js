"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addCommas(str) {
    if (isNaN(str)) {
        return '-';
    }
    var x = (str + '').split('.');
    return x[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
        + (x.length > 1 ? ('.' + x[1]) : '');
}
exports.default = addCommas;
