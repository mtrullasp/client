"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ComposerCollection_1 = require("../composer/collection/ComposerCollection");
const react_router_1 = require("react-router");
const ComposerItem_1 = require("../composer/ComposerItem");
const constants_1 = require("../util/constants");
const AlbumCollection_1 = require("../album/collection/AlbumCollection");
const AlbumTracksItem_1 = require("../album/tracks/AlbumTracksItem");
const KlassikRank_1 = require("../composerWork/klassikRank/KlassikRank");
const PerformerRolsCollection_1 = require("../performer/collection/PerformerRolsCollection");
const Hero_1 = require("../Hero");
const PerformerCollection_1 = require("../performer/collection/PerformerCollection");
const mobx_react_1 = require("mobx-react");
let RouterRoot = class RouterRoot extends React.Component {
    constructor(props, context) {
        super(props, context);

        props.routerStore.setHistory(props.history);
    }
    render() {
        return (<react_router_1.Switch>
        <react_router_1.Route path="/" exact={true} component={Hero_1.default}/>
        <react_router_1.Route path="/menu" exact={true} component={ComposerCollection_1.default}/>
        <react_router_1.Route path={constants_1.ROUTE_COMPOSERS_ITEM} exact={true} component={ComposerItem_1.default}/>
        <react_router_1.Route path={constants_1.ROUTE_COMPOSERS_COLLECTION} exact={false} component={ComposerCollection_1.default}/>
        <react_router_1.Route path={constants_1.ROUTE_ALBUMS_COLLECTION} exact={true} component={AlbumCollection_1.default}/>
        <react_router_1.Route path={constants_1.ROUTE_ALBUM_TRACKS} exact={true} component={AlbumTracksItem_1.default}/>
        <react_router_1.Route path={constants_1.ROUTE_WORK_VERSIONS} exact={true} component={KlassikRank_1.default}/>
        <react_router_1.Route path={constants_1.ROUTE_PERFORMERSROL_COLLECTION} exact={true} component={PerformerRolsCollection_1.default}/>
        <react_router_1.Route path={constants_1.ROUTE_PERFORMER_COLLECTION} exact={true} component={PerformerCollection_1.default}/>
      </react_router_1.Switch>);
    }
};
RouterRoot = __decorate([
    mobx_react_1.inject("routerStore")
], RouterRoot);
exports.default = react_router_1.withRouter(RouterRoot);
//# sourceMappingURL=RouterRoot.jsx.map
