import * as React from "react";
import ComposerStore from "./stores/ComposerStore";
import { inject, observer } from "mobx-react";
import HeadNameComposer from "./HeadNameComposer";
import SearchInput from "./search/SearchInput";
import PrevButton from "./routingNav/PrevButton";
import QuotesCarousel from "./composer/QuotesCarousel";
import FavIcon from "./FavIcon";
import CollectionNav from "./routingNav/CollectionNav";
import RouterRoot from "./routingNav/RouterRoot";
import { BrowserRouter } from "react-router-dom";
import Layout from "./lab/Layout";

export const HORITZONTAL_MARGIN = 100;
export const TOP_NAME = 0;
export const ABSOLUTE_MARGIN = 10;

interface IProps {
  composerStore?: ComposerStore;
}
@inject("composerStore")
@observer
class DashBoard extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    let headerContent: JSX.Element = null;
    let bodyContent: JSX.Element = null;
    if (
      !!this.props.composerStore &&
      !!this.props.composerStore.activeComposer
    ) {
      const composer = this.props.composerStore.activeComposer;
      headerContent = (
        <div>
          <div
            style={{
              position: "fixed",
              top: 10,
              left: 10,
              width: 40,
              height: 40
            }}
          >
            <FavIcon />
          </div>
          <div
            style={{
              position: "absolute",
              top: 10,
              left: HORITZONTAL_MARGIN,
              width: "50%"
            }}
          >
            <SearchInput />
          </div>
        </div>
      );

      bodyContent = (
        <div>
          <BrowserRouter>
            <RouterRoot />
          </BrowserRouter>
        </div>
      );
    }
    return <Layout headerContent={headerContent} bodyContent={bodyContent}/>
  }
}

export default DashBoard;