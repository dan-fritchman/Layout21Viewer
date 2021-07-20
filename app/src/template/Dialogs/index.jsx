import React from "react";

import {useTheme} from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import SettingsDialog from "./SettingsDialog/SettingsDialog";
import ConfirmationDialog from "./ConfirmationDialog/ConfirmationDialog";
import Store from "../Store";


const availableDialogs = {
    settings: SettingsDialog,
    confirmation: ConfirmationDialog, 
};

const DialogsWrapper = props => {
    /* Selector between the available Dialogs, or none of them.
     * Sets `fullScreen` attribute
     * Uses MUI's React hooks, so needs to be a function-Component. */

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
    const {dialogName} = props;

    // No dialogs open case
    if (!dialogName) return null;

    const DialogComp = availableDialogs[dialogName];
    if (!DialogComp) {
        console.error(`Unknown Dialog Requested: ${dialogName}`);
        return null;
    }
    return <DialogComp open={true} fullScreen={fullScreen}/>;
};

export default Store.connect(state => ({
    dialogName: state.ui.dialog
}))(DialogsWrapper);

