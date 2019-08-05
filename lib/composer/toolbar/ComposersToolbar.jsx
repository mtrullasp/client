"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const semantic_ui_react_1 = require("semantic-ui-react");
const mobx_react_1 = require("mobx-react");
const typestyle_1 = require("typestyle");
const Search_1 = require("semantic-ui-react/dist/commonjs/modules/Search");
const constants_1 = require("../../util/constants");
const react_router_1 = require("react-router");
let ComposersToolbar = class ComposersToolbar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const activeOrderKey = this.props.composerStore.orderByKey;
        const activeOrderDir = this.props.composerStore.orderByDir;
        return (<div>
        <semantic_ui_react_1.Menu size="small" compact={true}>
          <semantic_ui_react_1.Menu.Item header>Sort By</semantic_ui_react_1.Menu.Item>
          <semantic_ui_react_1.Menu.Item name="Ranking" key={"ranking"} onClick={() => this.props.composerStore.setOrderBy("ranking")} active={activeOrderKey === "ranking"}/>
          <semantic_ui_react_1.Menu.Item name="Birth Date" key={"AnyoNeix"} onClick={() => this.props.composerStore.setOrderBy("AnyoNeix")} active={activeOrderKey === "AnyoNeix"}/>
          <semantic_ui_react_1.Menu.Item name="Shuffle" key={"shuffle"} onClick={() => this.props.composerStore.shuffle()}/>
        </semantic_ui_react_1.Menu>
        <span style={{ marginRight: 20 }}/>
        <semantic_ui_react_1.Menu size="small" compact={true}>
          <semantic_ui_react_1.Menu.Item header>Group By</semantic_ui_react_1.Menu.Item>
          <semantic_ui_react_1.Menu.Item name="Nation" key={"nation"} onClick={() => {
            this.props.history.push(constants_1.ROUTE_COMPOSERS_COLLECTION_BY_NACIO);
        }} active={false}/>
        </semantic_ui_react_1.Menu>
        <div style={{ display: "inline-flex", marginRight: 10 }}>
          <Search_1.default showNoResults={false} input={{
            className: typestyle_1.style({
                borderColor: "black",
                display: "inline-flex",
                width: 200,
                marginLeft: 20
            }),
            fluid: true,
            placeholder: "Filter Composers"
        }} minCharacters={2} size={"small"} category onSearchChange={(event, data) => {
            this.props.composerStore.composerNameFilter = data.value;
            // this.props.composerStore.worksFilter = data.value;
        }} {...this.props}/>
        </div>
      </div>);
    }
};
ComposersToolbar = __decorate([
    mobx_react_1.inject("composerStore"),
    mobx_react_1.observer
], ComposersToolbar);
exports.default = react_router_1.withRouter(ComposersToolbar);
//# sourceMappingURL=ComposersToolbar.jsx.map