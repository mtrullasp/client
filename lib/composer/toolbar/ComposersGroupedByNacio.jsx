"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const GroupedMenuCount_1 = require("../../layout/GroupedMenuCount");
const mobx_react_1 = require("mobx-react");
let ComposersGroupedByNacio = class ComposersGroupedByNacio extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<GroupedMenuCount_1.default data={this.props.composerStore.groupsNacio} activeItem={this.props.composerStore.activeGroupIdNacio} onChange={(idMenu) => {

            this.props.composerStore.activeGroupIdNacio = idMenu;
        }}/>);
    }
};
ComposersGroupedByNacio = __decorate([
    mobx_react_1.inject("composerStore"),
    mobx_react_1.observer
], ComposersGroupedByNacio);
exports.default = ComposersGroupedByNacio;
//# sourceMappingURL=ComposersGroupedByNacio.jsx.map
