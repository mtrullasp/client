"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mobx_react_1 = require("mobx-react");
const semantic_ui_react_1 = require("semantic-ui-react");
const constants_1 = require("../../util/constants");
const Header_1 = require("../../Header");
const CollectionNav_1 = require("../../routingNav/CollectionNav");
const react_router_dom_1 = require("react-router-dom");
const PlayerBar_1 = require("../../packages/player/PlayerBar");
const semantic_ui_react_2 = require("semantic-ui-react");
const MaxHeightContainer_1 = require("../../widgets/MaxHeightContainer");
const Icon = require("react-feather");
const IconPlaying_1 = require("../../packages/player/controls/IconPlaying");
const TitleBar_1 = require("../../layout/TitleBar");
let AlbumTracksItem = class AlbumTracksItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const that = this;
        const headerAlbum = (<>
        <div style={{
            position: "absolute",
            left: Header_1.ABSOLUTE_MARGIN,
            top: Header_1.TOP_NAME + 20,
            verticalAlign: "center"
        }}>
          <CollectionNav_1.default isEnabledNext={this.props.albumStore.isNextable} isEnabledPrevious={this.props.albumStore.isPreviousable} onClickNext={() => this.props.albumStore.goNext()} onClickPrevious={() => this.props.albumStore.goPrevious()}/>
        </div>
        <div style={{
            position: "absolute",
            left: constants_1.MARGIN_HORITZONTAL,
            right: constants_1.MARGIN_HORITZONTAL
        }}>
          <h1>
            {this.props.albumStore.albumTracksRaw &&
            this.props.albumStore.albumTracksRaw.nameMW}{" "}
            {this.props.albumStore.albumTracksRaw &&
            this.props.albumStore.albumTracksRaw.artists}{" "}
            <a href={"http://www.deezer.com/es/album/" +
            this.props.albumStore.activeAlbumMWdeezerLink} target={"_blank"}>
              {this.props.albumStore.activeAlbumMWdeezerLink}
            </a>{" "}
            <a href={"http://www.allmusic.com/album/" +
            this.props.albumStore.activeAlbumMWid} target={"_blank"}>
              {this.props.albumStore.activeAlbumMWid}
            </a>
          </h1>
        </div>
      </>);
        if (!this.props.albumStore.albumTracksRaw) {
            return this.props.albumStore.activeAlbumMWid;
        }
        return (<div style={{
            marginLeft: constants_1.MARGIN_HORITZONTAL,
            marginRight: constants_1.MARGIN_HORITZONTAL
        }}>
        <TitleBar_1.default content={headerAlbum}/>
        <div style={{ position: "relative", top: 50 }}>
          <semantic_ui_react_2.Grid columns={16}>
            <semantic_ui_react_2.Grid.Column width={5}>
              <semantic_ui_react_1.Image fluid={false} src={this.props.albumStore.activeAlbum.urlCover}/>
            </semantic_ui_react_2.Grid.Column>
            <semantic_ui_react_2.Grid.Column width={11}>
              <MaxHeightContainer_1.default footerHeight={70} style={{ overflowY: "auto" }}>
                <semantic_ui_react_1.List size={"big"}>
                  {this.props.albumStore.albumTracksRaw.performanceMQ &&
            this.props.albumStore.albumTracksRaw.performanceMQ.map((at, index) => {
                return (<semantic_ui_react_1.List.Item onClick={() => {
                    if (!this.props) {
                        alert("this.props is null");
                    }
                    if (!that.props.albumStore.activeTracks) {
                        alert("this.props.albumStore.activeTracks!");
                    }
                    that.props.albumStore.playTracks(that.props.albumStore.map(a => a.idDeezerTrack), index);
                }}>
                            <semantic_ui_react_1.List.Content>
                              <p style={{ width: "auto", cursor: "pointer" }}>
                                <h3 style={{ margin: 0 }}>{at.nameMQ}</h3>
                                {at.performanceMQitems &&
                    at.performanceMQitems.map(qi => (<div style={{ paddingBottom: 5 }} onClick={() => this.props.albumStore.toggleTrack(qi.idDeezerTrack)}>
                                      <div style={{
                        verticalAlign: "bottom",
                        display: "flex"
                    }}>
                                        <div style={{ opacity: 0.8, width: 30 }}>
                                          {this.props.albumStore
                        .trackIdIsPlaying ===
                        qi.idDeezerTrack ? (<IconPlaying_1.default />) : (<Icon.Play onClick={() => this.props.albumStore.toggleTrack(qi.idDeezerTrack)}/>)}
                                        </div>
                                        <div style={{
                        verticalAlign: "bottom",
                        display: "inline-block"
                    }}>
                                          {qi.composer}. {qi.idDeezerTrack}.{" "}
                                          <react_router_dom_1.NavLink to={"/versions/" +
                        qi.idMC +
                        "/" +
                        qi.idMCord}>
                                            {qi.itemName}
                                          </react_router_dom_1.NavLink>{" "}
                                        </div>
                                      </div>
                                    </div>))}
                              </p>
                            </semantic_ui_react_1.List.Content>
                          </semantic_ui_react_1.List.Item>);
            })}
                </semantic_ui_react_1.List>
              </MaxHeightContainer_1.default>
            </semantic_ui_react_2.Grid.Column>
          </semantic_ui_react_2.Grid>
          <div style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
            overflow: "hidden"
        }}>
            <PlayerBar_1.default />
          </div>
        </div>
      </div>);
    }
};
AlbumTracksItem.defaultProps = {};
AlbumTracksItem = __decorate([
    mobx_react_1.inject("albumStore"),
    mobx_react_1.inject("albumStore"),
    mobx_react_1.observer
], AlbumTracksItem);
exports.default = AlbumTracksItem;
//# sourceMappingURL=AlbumTracksItem.jsx.map
