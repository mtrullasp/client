"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MapaExample = (function (_super) {
    __extends(MapaExample, _super);
    function MapaExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            viewport: {
                width: 400,
                height: 400,
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 8
            }
        };
        return _this;
    }
    MapaExample.prototype.render = function () {
        return React.createElement("span", null, "Mapa");
    };
    return MapaExample;
}(React.Component));
exports.default = MapaExample;
