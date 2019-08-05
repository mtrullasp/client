/// <reference types="react" />
import "../main.css";
interface IProps {
    firstName: string;
    lastName: string;
    infoNeixDefu: string;
    onClick?: () => void;
}
declare const HeadNameComposer: (props: IProps) => JSX.Element;
export default HeadNameComposer;
