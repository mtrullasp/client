import { CSSProperties } from "react";
interface IProps {
    text: string;
    style?: CSSProperties;
    maxFontSize: number;
}
declare function TextFit(props: IProps): JSX.Element | null;
export default TextFit;
