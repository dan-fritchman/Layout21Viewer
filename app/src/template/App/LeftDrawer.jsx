import React from "react";
import Drawer from "@material-ui/core/Drawer";
import * as Scroll from "react-scroll/modules";
import Hidden from "@material-ui/core/Hidden";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import withStyles from "@material-ui/core/styles/withStyles";

import Store from "../Store";
import { toCapWords } from "../utils";

const LeftDrawerContent = () => null;

const drawerWidth = 240;

const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
});


class LeftDrawer extends React.Component {
    render() {
        const { classes, enabled } = this.props;
        return (<React.Fragment>
            {enabled && <React.Fragment>
                <Hidden mdDown>
                    <Drawer variant="permanent"
                        // className={classes.drawer}
                        classes={{ paper: classes.drawerPaper }}
                    > {/* This little trick places AppBar over side ToolBar */}
                        <div className={classes.toolbar} />

                        <Box style={{ flexGrow: 1 }}>




                            {/* FIXME: probably can be Table of Contents */}
                            <LeftDrawerContent />


                        </Box>
                        <Box p={4}>
                            <Link color={"textSecondary"} variant={"h6"} href={"mailto:INSERT_EMAIL@INSERT_DOMAIN"}>
                                Problems?
                            </Link>
                        </Box>

                    </Drawer>
                </Hidden>
                <Hidden mdDown>
                    <Drawer variant="permanent"
                        anchor="right"
                        // className={classes.drawer}
                        classes={{ paper: classes.drawerPaper }}>
                        {/* This little trick places AppBar over side ToolBar */}
                        <div className={classes.toolbar} />


                        <LeftDrawerContent />


                    </Drawer>
                </Hidden>
            </React.Fragment>}
        </React.Fragment>);
    }
}

LeftDrawer = withStyles(styles)(LeftDrawer);
export default Store.connect(state => ({ enabled: state.ui.drawers.enabled }))(LeftDrawer);
