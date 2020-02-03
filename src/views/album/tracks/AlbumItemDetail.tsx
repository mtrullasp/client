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
import AlbumTracksList from "./AlbumTracks.new";
import HyperText from "../../../widgets/HyperText/HyperText";
import ComposerStore from "../../../core/stores/ComposerStore";

interface IParams {
  idAlbum: string;
}

interface IProps {
  albumStore?: AlbumStore;
  composerStore?: ComposerStore;
  match?: match<IParams>;
}

@inject("albumStore")
@inject("composerStore")
@observer
class AlbumItemDetail extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
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
            top: 80,
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
{/*
          <code style={{ display: "inline" }}>
            {this.props.albumStore.activeAlbum.nb_works + " "}
          </code>
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
*/}
        </div>
      </div>
    );
    var lastIdMC: string = "";
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
            <Grid.Column width={7}>
              {!!this.props.albumStore.activeTrackWorkDesc ? (
                <div
                  style={{
                    /*backgroundImage: "url(" + aStore.activeAlbum.urlCover + ")",*/
                    height: "auto",
                    backgroundColor: "transparent",
                    backgroundBlendMode: "overlay",
                    backgroundRepeat: "no-repeat"
                  }}
                >
                  <p
                    style={{
                      marginRight: 40,
                      marginLeft: 0
                    }}
                  >
                    <HyperText
                      text={
                        <div style={{ marginRight: 0, fontSize: 16 }}>
                          {parse(this.props.albumStore.activeTrackWorkDesc)}
                        </div>
                      }
                      onLink={(
                        href: string,
                        e: React.MouseEvent<HTMLElement>
                      ) => {
                        this.props.composerStore.onHyperLink(href, e);
                      }}
                    />
                  </p>
                  <p>
                    <i>
                      <b>{this.props.albumStore.activeTrackWorkDescAuthor}</b>
                    </i>
                  </p>
                </div>
              ) : (
                <Grid columns={16}>
                  <Grid.Column width={8}>
                    <MyPaper
                      elevation={15}
                      style={{
                        width: "100%",
                        height: "auto",
                        top: -15,
                        left: -15
                      }}
                    >
                      <Image
                        fluid={true}
                        label={aStore.activeAlbum.scoreImageCompare}
                        src={aStore.activeAlbum.urlCover}
                      />
                    </MyPaper>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <MyPaper
                      elevation={15}
                      style={{
                        width: "100%",
                        height: "auto",
                        top: -15,
                        left: -15
                      }}
                    >
                      <Image
                        fluid={true}
                        label={aStore.activeAlbum.scoreImageCompare}
                        src={aStore.activeAlbum.urlCoverAM}
                      />
                    </MyPaper>
                  </Grid.Column>
                </Grid>
              )}
              <br />
              <ActiveCredits credits={this.props.albumStore.activeTrackCredits} />
            </Grid.Column>
            <Grid.Column width={9}>
              <MaxHeightContainer
                footerHeight={88}
                style={{ overflowY: "auto", paddingRight: 20 }}
              >
                {<AlbumTracksList />}
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

export default withRouter(AlbumItemDetail as any);
