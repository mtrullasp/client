/**
 * INSPIRACIÓ:
 * https://www.squarespace.com/templates
 *
 * REGLA: Els cuadres de dades sempre un filtre 50% esquerra i 50% botons funcionalitat, ordre, etc
 */
import { Component } from "react";
import "./overrides.css";
import AlbumStore from "../stores/AlbumStore";
interface IProps {
    albumStore?: AlbumStore;
}
export default class SearchInput extends Component<IProps, {}> {
    componentWillMount(): void;
    resetComponent: () => void;
    handleResultSelect: (e: any, { result }: {
        result: any;
    }) => void;
    handleSearchChange: (e: any, { value }: {
        value: any;
    }) => void;
    render(): JSX.Element;
}
export {};
