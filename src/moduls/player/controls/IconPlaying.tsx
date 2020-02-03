import * as React from "react";
import "./iconPlaying.css";
import { TRUE_ACCENT_COLOR } from "../../../util/constants";

interface IProps {}
export default class IconPlaying extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="icon-equalizer-anim" fill={TRUE_ACCENT_COLOR}>
          <rect className="eq__bar" id="eq1" x={1} y={8} width={4} height={8} />
          <rect
            className="eq__bar"
            id="eq2"
            x={6}
            y={1}
            width={4}
            height={15}
          />
          <rect
            className="eq__bar"
            id="eq3"
            x={11}
            y={4}
            width={4}
            height={12}
          />
        </g>
      </svg>
    );
  }
}
