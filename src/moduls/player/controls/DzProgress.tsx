// import { AppState } from "../../core/stores/AppStore";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { withStyles, createStyles, } from "@material-ui/core/styles";
import Slider from "@material-ui/lab/Slider";
import dateToStr from "../dateToStr";
import { Typography } from "@material-ui/core";
import * as Icon from "react-feather";
// import {PlayerStore} from "../../../stores/PlayerStore";
import { SECOND_ACCENT_COLOR } from "../../../util/constants";
import AlbumStore from "../../../core/stores/AlbumStore";
import { defaultValueReducer } from "@material-ui/lab/es/Slider";
import MySlider from "../../../widgets/MySlider";

const styles = createStyles({
  root: {
    width: "100%",
    position: "fixed"
  },
  slider: {
    padding: 0
  },
  track: {
    height: 2
  },
  trackBefore: {
    backgroundColor: SECOND_ACCENT_COLOR
  },
  circle: {
    height: 40
  }
});

declare let window: any;
interface Window {
  DZ: any;
}
var DZ = window.DZ;

function valueReducer(rawValue, props, event) {
  const { disabled, max, min, step } = props;

  function roundToStep(number) {
    return Math.round(number / step) * step;
  }

  if (!disabled && step) {
    if (rawValue > min && rawValue < max) {
      if (rawValue === max - step) {
        // If moving the Slider using arrow keys and value is formerly an maximum edge value
        return roundToStep(rawValue + step / 2);
      }
      if (rawValue === min + step) {
        // Same for minimum edge value
        return roundToStep(rawValue - step / 2);
      }
      return roundToStep(rawValue);
    }
    return rawValue;
  }

  return defaultValueReducer(rawValue, props, event);
}

interface IPropsDzProgress {
  // appState?: AppState;
  albumStore?: AlbumStore;
  id?: string;
  showTime?: boolean;
  classes: any;
}
@inject("albumStore")
@observer
class DzProgress extends React.Component<IPropsDzProgress, {}> {
  constructor(props: IPropsDzProgress) {
    super(props);
    this.state = {
      value: 0,
      max: 0,
      clicked: false
    };
  }

  componentDidMount() {
    var that = this;
    DZ.Event.subscribe("player_position", function(arg) {
      that.setState({
        value: arg[0],
        max: arg[1]
      });
    });
  }

  state: {
    max: number;
    value: number;
    clicked: boolean;
  };

  onChange = (event, value) => {
    this.setState({ value: value });
    DZ.player.seek((value / this.state.max) * 100);
  };

  render() {
    //var timeValue = dateToStr(this.state.value);
    //var timeMax = dateToStr(this.state.max);

    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <MySlider
          thumb={<Icon.Circle className="progress-circle" />}
          value={value}
          max={this.state.max}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default withStyles(styles)(DzProgress);
