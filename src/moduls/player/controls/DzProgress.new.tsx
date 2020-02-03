import * as React from "react";
import "../playerBar.new.scss";
import AlbumStore from "../../../core/stores/AlbumStore";
import { inject, observer } from "mobx-react";
import MySlider from "../../../widgets/MySlider";

interface IProps {
  albumStore?: AlbumStore;
}
@inject("albumStore")
@observer
class DzProgressNew extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div
        className="info pr"
        style={{
          display: "inline-flex",
          position: "relative",
          top: 10,
          width: "100%"
        }}
      >
        <div className="time" style={{ display: "inline-flex", width: "100%" }}>
          <span
            className="current-time"
            style={{
              display: "inline-flex",
              marginRight: 10,
              fontSize: 12,
              color: "white"
            }}
          >
            {this.props.albumStore.activeTrackPositionTime}
          </span>
          <MySlider
            max={this.props.albumStore.activeTrackDuration}
            value={this.props.albumStore.activeTrackPosition}
            step={0.1}
            onChange={(value: number) => {
              this.props.albumStore.setDzSeek(value);
            }}
          />
          <span
            className="duration"
            style={{
              display: "inline-flex",
              marginLeft: 10,
              fontSize: 12,
              color: "white"
            }}
          >
            {this.props.albumStore.activeTrackDurationTime}
          </span>
        </div>
      </div>
    );
  }
}

export default DzProgressNew;
