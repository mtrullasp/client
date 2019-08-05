import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import { style } from "typestyle";
import DzProgress from "./controls/DzProgress";
import {
  DzPlayBtn,
  FavBtn,
  InfoWorkInferior,
  InfoWorkSuperior,
  VersionsBtn
} from "./TrackListPlayerDFlow";
import DzPrevButton from "./controls/DzPrevButton";
import DzNextButton from "./controls/DzNextButton";

interface IProps {
  showNext?: boolean;
  showPrevious?: boolean;
}
class PlayerBar extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {
    showPrevious: true,
    showNext: true
  };

  render() {
    return (
      <div>
        <Row>
          <Col lg={12}>
            <div>
              <DzProgress />
            </div>
          </Col>
          <Col lg={1} />
        </Row>
        <Row
          className={style({
            margin: 0,
            lineHeight: "50px",
            position: "relative",
            top: 20
          })}
        >
          <Col lg={4}>
            <Row>
              {this.props.showPrevious && (
                <Col lg={1}>
                  <DzPrevButton />
                </Col>
              )}
              <Col lg={1}>
                <DzPlayBtn />
              </Col>
              {this.props.showNext && (
                <Col lg={1}>
                  <DzNextButton />
                </Col>
              )}
              <Col lg={1} lgOffset={0}>
                <FavBtn />
              </Col>
              <Col lg={1} lgOffset={0}>
                <VersionsBtn />
              </Col>
            </Row>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={12}>
                <div
                  style={{ display: "block", position: "relative", top: -20 }}
                >
                  <InfoWorkSuperior />
                </div>
                <div
                  style={{ display: "block", position: "relative", top: -62 }}
                >
                  <InfoWorkInferior />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PlayerBar;
