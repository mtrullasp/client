import * as React from "react";
import { Button, Container, Segment } from "semantic-ui-react";
import Button3d from "../../widgets/3dbutton/Button3d";

interface IProps {
  isEnabledNext: boolean;
  isEnabledPrevious: boolean;
  onClickNext: () => void;
  onClickPrevious: () => void;
}
const CollectionNav = (props: IProps) => (
  <div style={{zIndex: 100}}>
    <Button3d
      isIcon={true}
      text={"chevron left"}
      buttonHeight={15}
      buttonPadding={12}
      onClick={() => {
        props.onClickPrevious();
      }}
      style={{ zIndex: 100 }}
      top={0}
      left={0}
      childStyle={{
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        width: 30,
        height: 20
      }}
      iconStyle={{
        position: "relative",
        top: 4,
        left: -5
      }}
    />
    <Button3d
      isIcon={true}
      text={"chevron right"}
      buttonHeight={15}
      buttonPadding={12}
      onClick={() => {
        props.onClickNext();
      }}
      top={0}
      left={32}
      style={{ textAlign: "left", zIndex: 100 }}
      childStyle={{
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        width: 25,
        height: 20,
        paddingRight: 16
      }}
      iconStyle={{
        position: "relative",
        top: 4,
        left: -5
      }}
    />
  </div>

  /*
  <Button.Group
    size="small"
  >
    <Button
      disabled={!props.isEnabledPrevious}
      icon="chevron left"
      onClick={() => props.onClickPrevious()}
    />
    <Button
      disabled={!props.isEnabledNext}
      icon="chevron right"
      onClick={() => props.onClickNext()}
    />
  </Button.Group>
*/
);

export default CollectionNav;
