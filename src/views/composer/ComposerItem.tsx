import * as React from "react";
import FavIcon, {
  ABSOLUTE_MARGIN,
  HORITZONTAL_MARGIN,
  TOP_NAME
} from "../../Header";
import HeadNameComposer from "../header/HeadNameComposer";
import QuotesCarousel from "./QuotesCarousel";
import ComposerStore from "../../core/stores/ComposerStore";
import { inject, observer } from "mobx-react";
import CollectionNav from "../../core/routingNav/CollectionNav";
import DivInline from "../../widgets/DivInline.";
import { withRouter } from "react-router";
import { ROUTE_COMPOSERS_COLLECTION } from "../../util/constants";
import ComposerWorksCollection from "../composerWork/collections/ComposerWorksCollection";
import MaxHeightContainer from "../../widgets/MaxHeightContainer";

interface IProps {
  composerStore?: ComposerStore;
  history?: any;
}
@inject("composerStore")
@observer
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
              position: "relative",
              left: -90,
              width: 80,
              top: TOP_NAME + 10,
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
              left: 0,
              top: 20
            }}
          >
            <HeadNameComposer
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
          <MaxHeightContainer>
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 180,
                width: "50%",
                bottom: 20,
                overflowY: "auto"
              }}
            >
              <ComposerWorksCollection />
            </div>
          </MaxHeightContainer>
          <img
            style={{
              opacity: 0.2,
              position: "absolute",
              top: 50,
              right: -100,
              width: "50%",
              zIndex: 0
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
