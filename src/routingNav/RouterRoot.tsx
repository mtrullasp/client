import * as React from "react";
import ComposerCollection from "../composer/collection/ComposerCollection";
import { Switch, Route, Router, withRouter } from "react-router";
import ComposerItem from "../composer/ComposerItem";
import { ROUTE_COMPOSERS_COLLECTION } from "../util/constants";
import { BrowserRouter } from "react-router-dom";

interface IProps {
  history?: any;
}
class RouterRoot extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={ComposerItem} />
        <Route
          path={ROUTE_COMPOSERS_COLLECTION}
          exact={true}
          component={ComposerCollection}
        />
      </Switch>
    );
  }
}

export default withRouter(RouterRoot as any);
