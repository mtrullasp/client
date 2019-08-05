"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const semanticUIReact = require("semantic-ui-react");
const mobx_react_1 = require("mobx-react");
const { Grid } = semanticUIReact;
let App = class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<Grid celled padded style={{ height: "100vh" }}>
        <Grid.Row style={{ height: "60px", position: "sticky" }}>
          <Grid.Column>{this.props.headerContent}</Grid.Column>
        </Grid.Row>

        <Grid.Row style={{ height: "100%" }}>
          <Grid.Column stretched>{this.props.bodyContent}</Grid.Column>
        </Grid.Row>
      </Grid>);
    }
};
App.defaultProps = {};
App = __decorate([
    mobx_react_1.inject("routerStore")
], App);
exports.default = App;
//# sourceMappingURL=App.jsx.map