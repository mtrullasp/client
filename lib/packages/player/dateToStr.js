"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dateToStr(secs) {
    try {
        return new Date(secs * 1000).toISOString().substr(14, 5);
    }
    catch (error) {
        return secs.toString();
    }
}
exports.default = dateToStr;
//# sourceMappingURL=dateToStr.js.map