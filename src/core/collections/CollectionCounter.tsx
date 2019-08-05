import * as React from "react";

interface IProps {
  itemsDesc: string;
  itemsCount: number;
}
class CollectionCounter extends React.Component<IProps, {}> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  render() {
    return (!!this.props.itemsCount &&
      <span>
        <b>{this.props.itemsCount}</b> {this.props.itemsDesc}
      </span>
    );
  }
}

export default CollectionCounter;
