import * as React from "react";

interface IProps {
  onClick?: () => void;
}
class OnHover3d extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div className={"button-3d"} onClick={() => this.props?.onClick()}>
        {this.props.children}
      </div>
    );
  }
}

export default OnHover3d;
