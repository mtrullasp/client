import * as React from "react";
import FavIcon, {
  ABSOLUTE_MARGIN,
  HORITZONTAL_MARGIN,
  TOP_NAME
} from "../Dashboard";
import HeadNameComposer from "../HeadNameComposer";
import QuotesCarousel from "./QuotesCarousel";
import ComposerStore from "../stores/ComposerStore";
import { inject } from "mobx-react";
import CollectionNav from "../routingNav/CollectionNav";
import DivInline from "../widgets/DivInline.";
import {withRouter} from "react-router";
import {ROUTE_COMPOSERS_COLLECTION} from "../util/constants";

interface IProps {
  composerStore?: ComposerStore;
  history?: any;
}
@inject("composerStore")
class ComposerItem extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    let content: JSX.Element = null;
    if (
      !!this.props.composerStore &&
      !!this.props.composerStore.activeComposer
    ) {
      const composer = this.props.composerStore.activeComposer;
      content = (
        <div>
          <div
            style={{
              position: "absolute",
              left: ABSOLUTE_MARGIN,
              top: TOP_NAME + 20,
              verticalAlign: "center"
            }}
          >
            <CollectionNav
              isEnabledNext={this.props.composerStore.isNextable}
              isEnabledPrevious={this.props.composerStore.isPreviousable}
              onClickNext={() => this.props.composerStore.goNextComposer()}
              onClickPrevious={() =>
                this.props.composerStore.goPreviousComposer()
              }
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: HORITZONTAL_MARGIN,
              top: 0
            }}
          >
            <HeadNameComposer
              onClick={() => {
                this.props.history.push(ROUTE_COMPOSERS_COLLECTION);
              }}
              firstName={this.props.composerStore.firstNameComposer}
              lastName={this.props.composerStore.lastNameComposer}
              infoNeixDefu={this.props.composerStore.activeComposerInfoNeixDefu}
            />
            <div
              style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "50%"
              }}
            >
              <QuotesCarousel />
            </div>
          </div>
          <img
            style={{
              overflowY: "hidden",
              opacity: 0.3,
              position: "absolute",
              top: 50,
              left: -200,
              width: "50%"
            }}
            src={this.props.composerStore.activeComposerImgUrl}
          />
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default withRouter(ComposerItem as any);
