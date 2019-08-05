import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import Header from "./Header";
import ComposerStore from "./core/stores/ComposerStore";
import GeoStore from "./core/stores/GeoStore";
// import ComposerCollection from "./composer/collection/ComposerCollection";
import AlbumStore from "./core/stores/AlbumStore";
// import { PlayerStore } from "./stores/PlayerStore";
// import { Store } from "@material-ui/icons";
import { RouterStore } from "./core/stores/RouterStore";
import { BrowserRouter, Router } from "react-router-dom";
import RouterRoot from "./core/routingNav/RouterRoot";
import App from "./App";
import { PerformerStore } from "./core/stores/PerformerStore";
import FixedMenuLayout from "./core/layout/FixedMenuLayout";
// import Hero from "./Hero";
// import TitleBar from "./layout/TitleBar";
import {createBrowserHistory} from "History";
import SearchStore from "./core/stores/SearchStore";
const history = createBrowserHistory();
const routerStore = new RouterStore();
const geoStore = new GeoStore();
const composerStore = new ComposerStore(geoStore, routerStore);
const performerStore = new PerformerStore();
const albumStore = new AlbumStore(performerStore, routerStore);
const searchStore = new SearchStore(routerStore);
import "@blueprintjs/core/lib/css/blueprint.css";
import Button3d from "./widgets/3dbutton/Button3d";

// const albumStore = new PlayerStore();

class Group<T> {
  key: string;
  members: T[] = [];
  constructor(key: string) {
    this.key = key;
  }
}

declare global {
  interface Array<T> {
    groupBy<T>(func: (x: T) => string): Group<T>[];
  }
}

/*ReactDOM.render(<div>hola</div>, document.getElementById("root"));*/
ReactDOM.render(
  <Provider
    composerStore={composerStore}
    albumStore={albumStore}
    // albumStore={albumStore}
    routerStore={routerStore}
    performerStore={performerStore}
    searchStore={searchStore}
  >
    <div
      style={{
        overflow: "hidden",
        padding: 0,
        margin: 0,
        width: "100%",
        display: "flex",
        flexFlow: "column nowrap",
        backgroundRepeat: "no-repeat",
        /*backgroundImage: "url(" + require("./assets/img/fons.jpg") + ")",*/
        backgroundColor: "#F5F5F5",
        backgroundSize: "cover",
        backgroundOrigin: "border-box"
      }}
    >
      <Router history={history}>
        <div>
          {/*{<App headerContent={<Header />} bodyContent={<RouterRoot />} />}*/}
          <FixedMenuLayout
            headerContent={<Header />}
            bodyContent={<RouterRoot />}
          />
        </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById("root")
);
