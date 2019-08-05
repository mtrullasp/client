"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groupBy = ;
return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
}, {});
;
exports.default = groupBy;
