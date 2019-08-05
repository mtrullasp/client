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
const constants_1 = require("../../util/constants");
const react_router_1 = require("react-router");
const typestyle_1 = require("typestyle");
let ComposerWorksCollection = class ComposerWorksCollection extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const items = this.props.composerStore.activeComposerWorks.map(cw => {
            return (<semantic_ui_react_1.List.Item>
          <semantic_ui_react_1.List.Content>
            <div style={{ cursor: "pointer", fontSize: 14 }} onClick={() => {
                this.props.albumStore.searchByWork(cw.idMC);
                this.props.history.push(constants_1.ROUTE_ALBUMS_COLLECTION);
            }}>
              at{" "}
              <span style={{ fontWeight: 900 }}>
                {cw.atAgeOf < 1 ? "?" : cw.atAgeOf}
              </span>{" (" + cw.composedDate + "): "}
              <span style={{ fontSize: 15 }}>{cw.nomMC}{" "}</span>
              <span style={{ fontSize: 15, fontWeight: 900 }}>
                ({cw.performancesCount})
              </span>
            </div>
          </semantic_ui_react_1.List.Content>
        </semantic_ui_react_1.List.Item>);
        });
        return (<>
        <semantic_ui_react_1.Search showNoResults={false} input={{
            className: typestyle_1.style({ borderColor: "black" }),
            fluid: true,
            placeholder: "Filter works"
        }} minCharacters={2} size={"mini"} category onSearchChange={(event, data) => {
            this.props.composerStore.worksFilter = data.value;
        }} {...this.props}/>

        <semantic_ui_react_1.List size="big" relaxed={true}>
          {items}
        </semantic_ui_react_1.List>
      </>);
    }
};
ComposerWorksCollection.defaultProps = {};
ComposerWorksCollection = __decorate([
    mobx_react_1.inject("composerStore"),
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], ComposerWorksCollection);
exports.default = react_router_1.withRouter(ComposerWorksCollection);
//# sourceMappingURL=ComposerWorksCollection.jsx.map