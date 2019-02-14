import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import DashBoard from "./Dashboard";
import ComposerStore from "./stores/ComposerStore";
import GeoStore from "./stores/GeoStore";
import ComposerCollection from "./composer/collection/ComposerCollection";

const geoStore = new GeoStore();
const composerStore = new ComposerStore(geoStore);

ReactDOM.render(
  <Provider composerStore={composerStore}>
    <div
      style={{
        overflowY: "hidden",
        padding: 0,
        margin: 0,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./src/img/fons.jpg)",
        backgroundSize: "cover",
        backgroundOrigin: "border-box"
      }}
    >
      <DashBoard />
    </div>
  </Provider>,
  document.getElementById("root")
);
