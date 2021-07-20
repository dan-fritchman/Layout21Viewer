import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import Fab from "@material-ui/core/Fab";
import CodeIcon from "@material-ui/icons/Code";
import { withStyles } from "@material-ui/core/styles";
import GitHubCircleIcon from '@material-ui/icons/GitHub';

import CenterLayout from "../../layout/CenterLayout";
import Api from "../../Api";
import Store from "../../Store";
import settings from "../../settings";
import * as AppUi from "../../Store/AppUi";
import * as auth from "../../Auth";


const styles = (theme) => ({
    emptyStateIcon: {
        fontSize: theme.spacing(12)
    },
    button: {
        marginTop: theme.spacing(1)
    },
    buttonIcon: {
        marginRight: theme.spacing(1)
    }
});

export class HomeContent extends Component {
    state = { redirectTo: null };

    componentDidMount = async () => {
        AppUi.enableDrawers();
        // AppUi.disableDrawers();
    };
    componentWillUnmount = () => {
        AppUi.enableDrawers();
    };

    render() {
        if (this.state.redirectTo) return <Redirect push to={this.state.redirectTo} />;

        const { classes } = this.props;
        const { isSignedIn, title } = this.props;

        return (<CenterLayout>
            <CodeIcon className={classes.emptyStateIcon} color="action" />
            <h1>{title}</h1>
            <h4>INSERT_PROJDESC</h4>
            {isSignedIn ?
                <Fab className={classes.button} onClick={null}
                    color="secondary" variant="extended">
                    Do Stuff
                </Fab> :
                <Fab className={classes.button} onClick={auth.signInWithProvider} variant="extended">
                    <GitHubCircleIcon className={classes.buttonIcon} />
                    Log In with GitHub
                </Fab>
            }

        </CenterLayout>);
    }
}

HomeContent.propTypes = {
    classes: PropTypes.object.isRequired,
    isSignedIn: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};

HomeContent = withStyles(styles)(HomeContent);

export default Store.connect(state => ({
    isSignedIn: state.user !== null,
    title: settings.title
}))(HomeContent);
