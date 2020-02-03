import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider, {SliderProps} from 'rc-slider';
import 'rc-slider/assets/index.css';
// import LensIcon from '@material-ui/icons/LensOutlined';
import paleta from "../styles/paleta";
import "../moduls/player/playerBar.new.scss";
import "./MySlider.css";
import { CSSProperties } from "react";

const styles = {
  root: {
    width: "100%",
    marginTop: 0
  },
  slider: {
    //padding: '12px',
  },
  thumbIcon: {
    borderRadius: '50%',
  },
  thumbIconWrapper: {
    backgroundColor: '#fff',
  },
};
interface IProps extends SliderProps {
  style?: CSSProperties;
  onChange?(value: number): void;
}
class MySlider extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

 render() {
    return (
      <div style={{width: 500, ...this.props.style}}>
        <Slider
          className={"progress"}
          max={this.props.max}
          value={this.props.value}
          onChange={this.props.onChange}
          aria-labelledby="slider-icon"/>
      </div>
    );
  }
}

export default withStyles(styles)(MySlider);
