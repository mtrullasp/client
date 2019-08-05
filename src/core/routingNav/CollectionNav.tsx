import * as React from "react";
import { Button } from "semantic-ui-react";

interface IProps {
  isEnabledNext: boolean;
  isEnabledPrevious: boolean;
  onClickNext: () => void;
  onClickPrevious: () => void;
}
const CollectionNav = (props: IProps) => (
  <Button.Group basic size="small">
    <Button
      disabled={!props.isEnabledPrevious}
      icon="chevron left"
      onClick={() => props.onClickPrevious()}
      negative
    />
    <Button
      disabled={!props.isEnabledNext}
      icon="chevron right"
      onClick={() => props.onClickNext()}
      negative
    />
  </Button.Group>
);

export default CollectionNav;
