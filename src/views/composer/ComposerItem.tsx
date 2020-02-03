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
import {
  MARGIN_HORITZONTAL,
  MARGIN_LEFT,
  ROUTE_COMPOSER_ITEM,
  ROUTE_COMPOSERS_COLLECTION
} from "../../util/constants";
import ComposerWorksCollection from "../composerWork/collections/ComposerWorksCollection";
import MaxHeightContainer from "../../widgets/MaxHeightContainer";
import { Tab } from "semantic-ui-react";
import ArtistRel from "../../widgets/artistRel/ArtistRel";
import parse from "html-react-parser";
import HyperText from "../../widgets/HyperText/HyperText";
import { observable } from "mobx";
import Geographicline from "./Geographicline";
import { AnimatePresence, motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";
import { Spring } from "react-spring/renderprops";
import Scrollbars from "react-custom-scrollbars";

const MARGE_LEFT = MARGIN_HORITZONTAL;

interface IProps {
  composerStore?: ComposerStore;
  history?: any;
}
@inject("composerStore")
@observer
class ComposerItem extends React.Component<IProps, {}> {
  state = { visible: true };

  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    let content: JSX.Element = null;
    const { visible } = this.state;
    const cs = this.props.composerStore;
    if (
      !!this.props.composerStore &&
      !!this.props.composerStore.activeComposer
    ) {
      const tabsContent = (
        <MaxHeightContainer>
          <div
            style={{
              left: 0,
              position: "absolute",
              right: 0,
              top: 0,
              width: "100%",
              bottom: 20,
              overflowY: "auto",
              zIndex: 100
            }}
          >
            <ComposerWorksCollection />
          </div>
        </MaxHeightContainer>
      );

      const panes = [
        {
          menuItem: "Biography",
          render: () => (
            <HyperText
              onLink={(href: string, e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();
                e.preventDefault();
                if (this.props.composerStore.onHyperLink(href, e)) {
                  //return;
                }
              }}
              text={
                <div style={{ marginRight: 0, fontSize: 17 }}>
                  {parse(this.props.composerStore.activeComposer.Bio + "")}
                </div>
              }
            />
          )
        },
        {
          menuItem: "Works",
          render: () => (
            <div style={{ position: "relative", top: -10 }}>{tabsContent}</div>
          )
        },
        {
          menuItem: "Connections",
          render: () => (
            <div>
              <DivInline style={{ width: "25%", verticalAlign: "top" }}>
                <ArtistRel
                  relTip={"Influenced by"}
                  getImageArtist={cs.getImageArtist}
                  goArtist={cs.goArtist.bind(this.props.composerStore)}
                  rels={cs.composerRels}
                />
              </DivInline>
              <DivInline style={{ width: "25%", verticalAlign: "top" }}>
                <ArtistRel
                  relTip={"Followed by"}
                  getImageArtist={cs.getImageArtist}
                  goArtist={cs.goArtist.bind(this.props.composerStore)}
                  rels={cs.composerRels}
                />
              </DivInline>
              <DivInline style={{ width: "25%", verticalAlign: "top" }}>
                <ArtistRel
                  relTip={"Similar to"}
                  getImageArtist={cs.getImageArtist}
                  goArtist={cs.goArtist.bind(this.props.composerStore)}
                  rels={cs.composerRels}
                />
              </DivInline>
              {/*
              {this.props.composerStore.artistRelsGrouped.map(a => (
                <div>
                  <ArtistRel relTip={a.key} />
                </div>
              ))}
*/}
            </div>
          )
        },
        {
          menuItem: "Timeline",
          render: () => <div>Timeline</div>
        },
/*
        {
          menuItem: "Geographicline",
          render: () => (
            <div>
              <Geographicline />
            </div>
          )
        }
*/
      ];
      const tabs = (
        <Tab
          renderActiveOnly={true}
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          style={{ marginRight: 100 }}
        />
      );
      const composer = this.props.composerStore.activeComposer;
      content = (
        <div style={{ marginTop: 10 }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              width: 80,
              top: TOP_NAME,
              verticalAlign: "center"
            }}
          >
            <div
              style={{ position: "absolute", left: -MARGE_LEFT + 10, top: 10 }}
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
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 20
            }}
          >
            <HeadNameComposer
              firstName={this.props.composerStore.firstNameComposer}
              lastName={this.props.composerStore.lastNameComposer}
              AnyoNeix={this.props.composerStore?.activeComposer?.AnyoNeix?.toString()}
              AnyoDefu={this.props.composerStore?.activeComposer?.AnyoDefu?.toString()}
              CiutatNeix={this.props.composerStore?.activeComposer?.CiutatNeix}
              CiutatDefu={this.props.composerStore?.activeComposer?.CiutatDefu}
              PaisNeix={this.props.composerStore?.activeComposer?.PaisNeix}
              PaisDefu={this.props.composerStore?.activeComposer?.PaisDefu}
            />
            <div
              style={{
                position: "relative",
                top: -20,
                right: MARGIN_LEFT,
                left: 0,
                marginRight: MARGIN_LEFT
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
                top: 260,
                bottom: 20,
                overflowY: "hidden",
                zIndex: 100,
                right: 0
              }}
            >
              <div>{tabs}</div>
            </div>
          </MaxHeightContainer>

          <Spring
            key={this.props.composerStore?.activeComposer?.idMN}
            from={{ opacity: 0 }}
            to={{ opacity: 0.25 }}
            config={{ duration: 1500 }}
          >
            {props => (
              <img
                style={{
                  opacity: props.opacity,
                  position: "absolute",
                  top: -80,
                  left: -300,
                  width: "40%",
                  zIndex: 0,
                  userSelect: "none"
                }}
                src={this.props.composerStore.activeComposerImgUrl}
              />
            )}
          </Spring>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default withRouter(ComposerItem as any);
