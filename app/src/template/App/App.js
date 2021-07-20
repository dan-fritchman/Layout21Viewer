import React, { Component } from "react";
import { ConnectedRouter as Router } from "connected-react-router";
import { PersistGate } from "redux-persist/lib/integration/react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core";

import Headers from "../Headers";
import Waiting from "../content/Waiting";
import Bar from "../Bar";
import Routes from "../Routes";
import Dialogs from "../Dialogs";
import Snackbar from "../Snackbar";
import Store, { history } from "../Store";
import * as auth from "../Auth";
import Drawers from "../Drawers";


const styles = theme => ({
    root: {
        display: "flex",
    },
    content: {
        padding: theme.spacing(0),
        flexGrow: 1,
        flex: '1 1 100%',
        position: 'relative',
        maxWidth: '100%',
        [theme.breakpoints.up('lg')]: {
            // Make room for sidebars
            // FIXME: gotta be a better way to tie these together.
            marginLeft: 240,
            marginRight: 240,
            maxWidth: 'calc(100% - 240px - 240px)',
        },
    },
    toolbar: theme.mixins.toolbar
});


class App extends Component {

    componentDidMount = () => auth.mount();
    componentWillUnmount = () => auth.unmount();

    content = () => {
        const { classes } = this.props;

        return <div className={classes.root}>
            {/* Top AppBar/ToolBar */}
            <Bar />

            {/* Vertical Side Drawers */}
            <Drawers />

            {/* Main Content */}
            <main className={classes.content}>
                {/* Block out ToolBar */}
                <div className={classes.toolbar} />
                <div>
                    {/* *Really* Main Content */}
                    <Routes />
                </div>
            </main>

            {/* Typically-Hidden Dialog Boxes */}
            <Dialogs />
            {/* Typically-Hidden "SnackBar" Bottom Pop-Up */}
            <Snackbar />
        </div>;
    };

    render() {
        const { isAuthReady, themeObj } = this.props;

        return <MuiThemeProvider theme={themeObj}>
            <React.Fragment>
                {/* IMPORTANT: CssBaseline needs to be *inside* MuiThemeProvider */}
                <CssBaseline />
                {isAuthReady ? <this.content /> : <Waiting />}
            </React.Fragment>
        </MuiThemeProvider>;
    }
}

App = withStyles(styles)(App);

App = Store.connect(
    state => {
        return {
            themeObj: state.theme.obj,
            isAuthReady: state.ui && state.ui.isAuthReady,
        };
    }
)(App);


export default function AppWrapper(_) {
    return (
        <Store.Provider>
            <PersistGate loading={<Waiting />} persistor={Store.persistor}>
                <Router history={history}>
                    <React.Fragment>
                        <Headers />
                        <App />
                    </React.Fragment>
                </Router>
            </PersistGate>
        </Store.Provider>
    );
}