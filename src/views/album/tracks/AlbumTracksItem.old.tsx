import * as React from "react";
import AlbumStore from "../../../core/stores/AlbumStore";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import { List, Image } from "semantic-ui-react";
import { MARGIN_HORITZONTAL } from "../../../util/constants";
import { ABSOLUTE_MARGIN, TOP_NAME } from "../../../Header";
import CollectionNav from "../../../core/routingNav/CollectionNav";
import { match, NavLink } from "react-router-dom";
import PlayerBar from "../../../moduls/player/PlayerBar.new";
import { Divider, Grid } from "semantic-ui-react";
import MaxHeightContainer from "../../../widgets/MaxHeightContainer";
import togglePlayer from "../../../moduls/player/togglePlayer";
import * as Icon from "react-feather";
import IconPlaying from "../../../moduls/player/controls/IconPlaying";
import TitleBar from "../../../core/layout/TitleBar";
import ActiveCredits from "./ActiveCredits";
import MyPaper from "../../../widgets/MyPaper";

interface IParams {
  idAlbum: string;
}
interface IProps {
  albumStore?: AlbumStore;
  match?: match<IParams>;
}
@inject("albumStore")
@observer
class AlbumTracksItemOld extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    debugger;
    super(props, context);
    this.props.albumStore.setActiveAlbumById(
      Number(props.match.params.idAlbum)
    );
  }

  static defaultProps = {};

  render() {
    const headerAlbum = (
      <div>
        <div
          style={{
            position: "fixed",
            left: 10,
            maxWidth: "100%",
            display: "flex",
            top: 60,
            verticalAlign: "center"
          }}
        >
          <CollectionNav
            isEnabledNext={this.props.albumStore.isNextable}
            isEnabledPrevious={this.props.albumStore.isPreviousable}
            onClickNext={() => this.props.albumStore.goNext()}
            onClickPrevious={() => this.props.albumStore.goPrevious()}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 20
          }}
        >
          <h1>
            {this.props.albumStore.responseAlbumsTracks &&
              this.props.albumStore.activeAlbum.nameMW}{" "}
            <a
              href={
                "http://www.deezer.com/es/album/" +
                this.props.albumStore.activeAlbumMWdeezerLink
              }
              target={"_blank"}
            >
              dz
            </a>{" "}
            <a
              href={
                "https://api.deezer.com/album/" +
                this.props.albumStore.activeAlbumMWdeezerLink
              }
              target={"_blank"}
            >
              dzApi
            </a>{" "}
            <a
              href={
                "sql://SELECT * FROM album WHERE idAlbum = " +
                this.props.albumStore.activeAlbum.idAlbum
              }
              target={"_blank"}
            >
              SQL
            </a>{" "}
            <a
              href={
                "http://www.allmusic.com/album/" +
                this.props.albumStore.activeAlbum.idMW
              }
              target={"_blank"}
            >
              {this.props.albumStore.activeAlbum.idMW}
            </a>
          </h1>
        </div>
      </div>
    );
    if (!this.props.albumStore.albumTracks) {
      return this.props.albumStore.activeAlbum.idMW;
    }
    debugger;
    return (
      <div
        style={{
          position: "relative",
          marginTop: 0
        }}
      >
        <TitleBar content={headerAlbum} />
        <div style={{ position: "relative", top: 50 }}>
          <Grid columns={16}>
            <Grid.Column width={4}>
              <MyPaper
                elevation={5}
                style={{ width: "100%", height: "auto", top: -15, left: -15 }}
              >
                <Image
                  fluid={true}
                  src={this.props.albumStore.activeAlbum.urlCover}
                />
              </MyPaper>
              <ActiveCredits />
            </Grid.Column>
            <Grid.Column width={12}>
              <MaxHeightContainer
                footerHeight={70}
                style={{ overflowY: "auto" }}
              >
                <List size={"medium"}>
                  {this.props.albumStore.albumTracks &&
                    this.props.albumStore.albumTracks.map(
                      (at, index: number) => {
                        return (
                          <List.Content>
                            <p
                              style={{
                                width: "auto",
                                cursor: "pointer",
                                fontWeight:
                                  this.props.albumStore.trackIdIsPlaying ===
                                  at.idDeezerTrack
                                    ? 900
                                    : "normal"
                              }}
                            >
                              <h3 style={{ margin: 0 }}>{at.nameMQ}</h3>
                              <div
                                style={{ paddingBottom: 5 }}
                                onClick={() =>
                                  this.props.albumStore.playTracks(index)
                                }
                              >
                                <div
                                  style={{
                                    verticalAlign: "bottom",
                                    display: "flex"
                                  }}
                                >
                                  <div style={{ opacity: 0.8, width: 30 }}>
                                    {this.props.albumStore.trackIdIsPlaying ===
                                    at.idDeezerTrack ? (
                                      <IconPlaying />
                                    ) : (
                                      <Icon.Play />
                                    )}
                                  </div>
                                  <div
                                    style={{
                                      verticalAlign: "bottom",
                                      display: "inline-block"
                                    }}
                                  >
                                    {at.idMC} {at.idMCord}
                                  </div>
                                  <div
                                    style={{
                                      verticalAlign: "bottom",
                                      display: "inline-block"
                                    }}
                                  >
                                    {at.composer}.{at.idMCord}{" "}
                                    <NavLink
                                      to={
                                        "/versions/" +
                                        at.idMC +
                                        "/" +
                                        at.idMCord
                                      }
                                    >
                                      {at.itemName}
                                    </NavLink>{" "}
                                  </div>
                                </div>
                              </div>
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
              height: 60,
              overflow: "hidden"
            }}
          >
            <PlayerBar />
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumTracksItemOld;
