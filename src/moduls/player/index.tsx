/**
 * ALTERNATIVESS:
 *
 * https://github.com/retrofuturejosh/react-modular-audio-player
 *
 * https://codepen.io/maskit_jr/pen/YNWGqP
 *
 * Llista de molts Audio Players:
 * https://freefrontend.com/css-music-players/
 *
 */

import * as React from "react";
// import { Document, Page } from "react-pdf/dist/entry.webpack";
//import "../sass/style.css";
import "./styles/style.css";
import { inject, observer } from "mobx-react";
import Tracks from "./tracks";
import { Col, Row } from "react-flexbox-grid";
import Typography from "@material-ui/core/Typography";
import { ELEGANT_FONT } from "../../util/constants";
import MasonryGrid from "../../widgets/MasonryGrid/MasonryGrid";
import "./styles/TrackListPlayerDFlow.less";
import { DzPlayBtn } from "./TrackListPlayerDFlow";
import PlayerBar from "./PlayerBar";
import paleta from "../../styles/paleta";
import AlbumStore from "../../core/stores/AlbumStore";
// import ArtistsCreditsLinker from "./ArtistsCreditsLinker";
const FOOTER_HEIGHT = 60;
const POSITION_NEXT_PREV = 50;

interface IProps {
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
class Player extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = {
      pdfNumPage: 1
    };
  }

  state: {
    pdfNumPage: number;
  };

  render() {
    const marginLeft = 10;
    const header = (
      <div>
        <div>
          <Tracks />
          <div style={{ height: 80 }}>
            <Row>
              <Col lg={11}>
                <div
                  style={{
                    marginTop: 0,
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 60,
                    lineHeight: "80px",
                    width: "100%"
                  }}
                >
                  <Typography
                    style={{
                      color: "black",
                      fontFamily: ELEGANT_FONT,
                      fontSize: 35,
                      fontWeight: 500
                    }}
                  >
                    {/*
                      {this.props.appState.activeAlbum.title}{" "}
                      {this.props.appState.activeAlbum.idAlbum}
*/}
                  </Typography>
                </div>
              </Col>
            </Row>
            <Row>
              <div
                style={{
                  marginTop: 0,
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 70,
                  lineHeight: 80,
                  width: "100%"
                }}
              >
                <div
                  style={{
                    color: paleta.color300,
                    fontFamily: ELEGANT_FONT,
                    fontSize: 25,
                    fontWeight: 500
                  }}
                >
                  {/*
                    <ArtistsCreditsLinker
                      mode="light"
                      creditsPlans={this.props.appState.activeAlbum.mainArtist}
                    />
*/}
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
    );

    const content = (
      <div className="navy">
        <div className="wrapper">
          <div className="NavyPlayer">
            <div
              className="background"
              style={{
                position: "absolute",
                top: 80,
                overflowY: "hidden"
              }}
            />
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <div
          style={{
            position: "absolute",
            top: 80,
            bottom: 50,
            left: 0,
            right: 400,
            zIndex: 20000,
            width: "60%"
          }}
        >
          {/*
          <Document
            file={"/pdf/" + this.props.appState.activeAlbumId + ".pdf"}
            renderMode={"svg"}
            options={{
              cMapUrl: "cmaps/",
              cMapPacked: true
            }}
          >
            <Page
              style={{ flexDirection: "row", opacity: 0.5 }}
              scale={this.props.appState.activeAlbum.librettoScale || 1.3}
              className={style({ width: "100%", height: "100%" })}
              pageNumber={this.state.pdfNumPage}
              onClick={() => {
                this.setState({ pdfNumPage: this.state.pdfNumPage + 1 });
              }}
            />
          </Document>
*/}
          <footer
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              height: FOOTER_HEIGHT,
              lineHeight: "70px",
              backgroundColor: "whitesmoke",
              opacity: 0.6
            }}
          >
            <PlayerBar  />
          </footer>
        </div>
        {/*
        <ObjectBrowser
          header={header}
          content={content}
          overflowY="hidden"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            overflowY: "hidden",
            paddingTop: 0
          }}
        />
*/}
      </div>
    );
  }
}

export default Player;
