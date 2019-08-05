import * as React from "react";
import { PlayerStore } from "../../../stores/PlayerStore";
interface IPropsDzProgress {
    playerStore?: PlayerStore;
    id?: string;
    showTime?: boolean;
    classes: any;
}
declare const _default: React.ComponentType<Pick<IPropsDzProgress, "id" | "playerStore" | "showTime"> & import("@material-ui/core").StyledComponentProps<"track" | "circle" | "root" | "trackBefore" | "slider">>;
export default _default;
