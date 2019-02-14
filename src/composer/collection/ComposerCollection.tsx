import * as React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { classes, style } from "typestyle";
import GridList from "@material-ui/core/GridList/GridList";
import Paper from "@material-ui/core/Paper/Paper";
import { inject, observer } from "mobx-react";
import ContainerDimensions from "react-container-dimensions";
import ComposerStore, { IComposer } from "../../stores/ComposerStore";
import MasonryGrid from "../../widgets/MasonryGrid";
import { COMPOSER_NUMBER_COLS, ELEGANT_FONT } from "../../util/constants";
import TextFit from "../../widgets/TextFit/TextFit";
import { Reveal, Image } from "semantic-ui-react";

const FACTOR_Y = 1.2;

interface IState {
  indexHover: number;
}
interface IProps {
  composerStore?: ComposerStore;
  history?: History;
  onClick?: (composer: IComposer) => void;
}
@inject("composerStore")
@observer
class ComposerCollection extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = { indexHover: -1 };
  }

  state: IState;

  render() {
    if (!this.props.composerStore.composers) {
      return null;
    }
    const items = (width: number, height: number) =>
      this.props.composerStore.composers.map((composer, index) => {
        let contentBase = (opacity: number) => {
          return (
            <div>
              <Image
                src={this.props.composerStore.getComposerPicture(
                  composer.IdComposer
                )}
                alt={composer.name}
                style={{
                  height: width * FACTOR_Y,
                  width: width,
                  opacity: opacity
                }}
              />
              <footer
                style={{
                  backgroundColor: "rgba(250, 250, 250, 0.3)",
                  color: "black",
                  padding: 5,
                  fontSize: 20,
                  fontFamily: ELEGANT_FONT,
                  fontWeight: 800
                }}
              >
                <Row>
                  <div
                    style={{
                      opacity: 0.7,
                      height: 20,
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 45,
                      fontFamily: ELEGANT_FONT,
                      fontWeight: 600,
                      fontSize: 16,
                      textAlign: "center"
                    }}
                  >
                    {this.props.composerStore.getFisrtNameComposer(
                      composer.sort_name
                    )}
                  </div>
                </Row>
                <Row>
                  <div
                    style={{
                      width: "100%",
                      marginRight: 5,
                      marginLeft: 5,
                      opacity: 0.6,
                      height: 25,
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 28,
                      fontSize: 14,
                      fontFamily: ELEGANT_FONT,
                      fontWeight: 800,
                      textAlign: "center",
                      textTransform: "uppercase"
                    }}
                  >
                    <TextFit
                      maxFontSize={25}
                      text={this.props.composerStore.getLastNameComposer(
                        composer.sort_name
                      )}
                    />
                  </div>
                </Row>
                <Row />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 15,
                    fontFamily: ELEGANT_FONT,
                    fontSize: 14,
                    fontWeight: 800,
                    textAlign: "center",
                    margin: 0
                  }}
                >
                  {composer.begin_date_year} - {composer.end_date_year}
                </div>
              </footer>
            </div>
          );
        };
        return (
          <li
            onMouseEnter={() => {
              this.setState({ indexHover: index });
            }}
            onMouseLeave={() => {
              this.setState({ indexHover: -1 });
            }}
            onClick={(e: any) => {
              //e.stopPropagation();
              //this.props.onClick(composer);
              //this.props.appState.setActiveComposer(composer.IdComposer);
              //this.props.history.push("/works/" + composer.IdComposer);
            }}
            key={composer.IdComposer}
            className={
              style({
                cursor: "pointer",
                listStyleType: "none"
              }) + " bright-on-hover grow"
            }
          >
            <div>
              {contentBase(0.3)}
            </div>
          </li>
        );
      });
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 100,
          right: 0
        }}
        onClick={() => this.props.composerStore.shuffle()}
      >
        <MasonryGrid
          gutter={0}
          numColumns={COMPOSER_NUMBER_COLS}
          items={items}
          factorY={FACTOR_Y}
        />
      </div>
    );
  }
}

export default ComposerCollection;
