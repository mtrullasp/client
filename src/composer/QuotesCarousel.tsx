import * as React from "react";
//import Carousel from "nuka-carousel";
import { CSSProperties } from "react";
//import { AppState } from "../stores/AppStore";
import { inject, observer } from "mobx-react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ComposerStore from "../stores/ComposerStore";
import TextFit from "../widgets/TextFit/TextFit";
import {WEB_API_HOST} from "../util/constants";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface IState {
  selectedIndex: number;
}
interface IProps {
  composerStore?: ComposerStore;
}
@inject("composerStore")
@observer
class QuotesCarousel extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  static defaultProps = {};

  state: IState = {
    selectedIndex: 0
  };

  handleChangeIndex = (index: number) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { selectedIndex } = this.state;
    const style: CSSProperties = { width: "100%", height: 100 };
    const items = this.props.composerStore.activeComposerQuotes.map(q => {
      return (
        <div>
          <TextFit
            maxFontSize={20}
            text={q.content.trimRight() + " "}
          />

          {/*
          <div style={{height: 120}}>
            {q.content}
          </div>
*/}
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              height: 25
            }}
          >
            — {q.contentSourceName.trimRight()}
          </div>
        </div>
      );
    });
    return (
      <AutoPlaySwipeableViews
        index={selectedIndex}
        onChangeIndex={this.handleChangeIndex}
        interval={10000}
      >
        {items}
      </AutoPlaySwipeableViews>
    );
  }

  // SUBS


}

export default QuotesCarousel;
