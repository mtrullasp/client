import * as React from "react";
import AlbumStore from "../../../core/stores/AlbumStore";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import { List, Image, Icon } from "semantic-ui-react";
import { ACCENT_COLOR, MARGIN_HORITZONTAL } from "../../../util/constants";
import { ABSOLUTE_MARGIN, TOP_NAME } from "../../../Header";
import CollectionNav from "../../../core/routingNav/CollectionNav";
import { match, NavLink } from "react-router-dom";
import PlayerBar from "../../../moduls/player/PlayerBar.new";
import { Divider, Grid } from "semantic-ui-react";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import togglePlayer from "../../../moduls/player/togglePlayer";
// import * as Icon from "react-feather";
import IconPlaying from "../../../moduls/player/controls/IconPlaying";
import TitleBar from "../../../core/layout/TitleBar";
import ActiveCredits from "./ActiveCredits";
import MyPaper from "../../../widgets/MyPaper";
import { style } from "typestyle";
import paleta from "../../../styles/paleta";
import { withRouter } from "react-router";
import AlbumTags from "../toolbar/AlbumTags";
import parse from "html-react-parser";

interface IParams {
  idAlbum: string;
}
interface IProps {
  albumStore?: AlbumStore;
  match?: match<IParams>;
}
@inject("albumStore")
@observer
class AlbumTracksItem extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    debugger;
    super(props, context);
    props.albumStore.setActiveAlbumById(Number(props.match.params.idAlbum));
  }

  static defaultProps = {};

  render() {
    const aStore = this.props.albumStore;
    if (!this.props.albumStore.activeAlbum) {
      return null;
    }
    const headerAlbum = (
      <div>
        <div
          style={{
            position: "fixed",
            left: 10,
            maxWidth: "100%",
            display: "flex",
            top: 55,
            verticalAlign: "center"
          }}
        >
          <CollectionNav
            isEnabledNext={aStore.isNextable}
            isEnabledPrevious={aStore.isPreviousable}
            onClickNext={() => aStore.goNext()}
            onClickPrevious={() => aStore.goPrevious()}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0
          }}
        >
          <h1 style={{ display: "inline" }}>
            {aStore.responseAlbumsTracks &&
              aStore.responseAlbumsTracks.AlbumWorks &&
              aStore.activeAlbum.nameMW}{" "}
          </h1>
          <span style={{ display: "inline" }}>
            {this.props.albumStore.activeTrack &&
              this.props.albumStore.activeTrack.name}
          </span>
          <code style={{ display: "inline" }}>
            <a
              href={
                "http://www.deezer.com/es/album/" +
                aStore.activeAlbumMWdeezerLink
              }
              target={"_blank"}
            >
              dz
            </a>{" "}
            <a
              href={
                "https://api.deezer.com/album/" + aStore.activeAlbumMWdeezerLink
              }
              target={"_blank"}
            >
              dzApi
            </a>{" "}
            <a
              href={
                "sql://SELECT * FROM album WHERE idAlbum = " +
                aStore.activeAlbum.idAlbum
              }
              target={"_blank"}
            >
              SQL
            </a>{" "}
            <a
              href={"http://www.allmusic.com/album/" + aStore.activeAlbum.idMW}
              target={"_blank"}
            >
              {aStore.activeAlbum.idMW}
            </a>
          </code>
        </div>
      </div>
    );
    return (
      <div
        style={{
          position: "relative",
          marginTop: 0
        }}
      >
        <TitleBar content={headerAlbum} />
        <div style={{ position: "relative", top: 30 }}>
          <div style={{ padding: 10 }}>
            <AlbumTags items={this.props.albumStore.albumTags} />
          </div>
          <Grid columns={16}>
            <Grid.Column width={4}>
              <MyPaper
                elevation={5}
                style={{ width: "100%", height: "auto", top: -15, left: -15 }}
              >
                <Image fluid={true} src={aStore.activeAlbum.urlCover} />
              </MyPaper>
              <ActiveCredits />
            </Grid.Column>
            <Grid.Column width={12}>
              <MaxHeightContainer
                footerHeight={70}
                style={{ overflowY: "auto" }}
              >
                <p style={{ marginRight: 40, marginLeft: 0 }}>
                  {parse(this.props.albumStore.activeTrackWorkDesc)}
                </p>
                <p>
                  <i>
                    <b>{this.props.albumStore.activeTrackWorkDescAuthor}</b>
                  </i>
                </p>
                <List size={"medium"}>
                  {aStore.responseAlbumsTracks &&
                    aStore.responseAlbumsTracks.AlbumWorks.map(
                      (at, index: number) => {
                        const tr = at;
                        const iTr = index;
                        return (
                          <List.Content style={{ marginBottom: 30 }}>
                            <p>
                              <h3 style={{ margin: 0 }}>
                                {at.composerName}
                              </h3>
                            </p>
                            <p
                              style={{
                                marginLeft: 10,
                                marginTop: -10,
                                marginBottom: 0
                              }}
                            >
                              <h4>{at.nameWork}</h4>
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              {/*
                              {((tr, iTr) => {
                                return (
*/}
                              <p
                                className={"item"}
                                style={{
                                  width: "auto",
                                  cursor: "pointer",
                                  margin: 0,
                                  padding: 4,
                                  fontWeight:
                                    this.props.albumStore.trackIdIsPlaying ===
                                    at.idTrack_DZ
                                      ? 900
                                      : "normal"
                                }}
                              >
                                <div style={{ paddingBottom: 5 }}>
                                  <div
                                    style={{
                                      verticalAlign: "bottom",
                                      display: "flex"
                                    }}
                                    onClick={() => {
                                      this.props.albumStore.playTracks(
                                        at.idrack_DZ_ord,
                                        iTr
                                      )}
                                    }
                                  >
                                    <div style={{ opacity: 0.8, width: 30 }}>
                                      {this.props.albumStore
                                        .trackIdIsPlaying === tr.idTrack_DZ ? (
                                        <IconPlaying />
                                      ) : (
                                        <Icon
                                          name={"play"}
                                          className={style({
                                            color: paleta.color200,
                                            $nest: {
                                              // IMPORTANT PART
                                              "&:hover": {
                                                color: paleta.color800
                                              }
                                            }
                                          })}
                                        />
                                      )}
                                    </div>
                                    <div
                                      style={{
                                        verticalAlign: "bottom",
                                        display: "inline-block"
                                      }}
                                    >
                                      {tr.idMC} {tr.idMC_ord}
                                    </div>
                                    <div
                                      style={{
                                        verticalAlign: "bottom",
                                        display: "inline-block"
                                      }}
                                    >
                                      {tr.idMC_ord}{" "}
                                      <NavLink
                                        to={
                                          "/versions/" +
                                          tr.idMC +
                                          "/" +
                                          tr.idMC_ord
                                        }
                                      >
                                        {tr.name}
                                      </NavLink>{" "}
                                    </div>
                                  </div>
                                </div>
                              </p>
                            </p>
                          </List.Content>
                        );
                      }
                    )}
                </List>
              </MaxHeightContainer>
            </Grid.Column>
          </Grid>
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              height: 70,
              overflow: "hidden",
              background: "#eee",
              opacity: 0.9
            }}
          >
            <PlayerBar />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AlbumTracksItem as any);
