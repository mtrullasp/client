/// <reference types="react" />
interface IProps {
    isEnabledNext: boolean;
    isEnabledPrevious: boolean;
    onClickNext: () => void;
    onClickPrevious: () => void;
}
declare const CollectionNav: (props: IProps) => JSX.Element;
export default CollectionNav;
