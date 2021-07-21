import React from "react";
import { Drawer, Hidden, Box, Link } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

import Store from "./Store";

// FIXME: temporary, empty drawer content
const DrawersContent = () => null;

const drawerWidth = 240;

const styles = (theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

class Drawers extends React.Component {
  render() {
    const { classes, enabled } = this.props;
    return (
      <React.Fragment>
        {enabled && (
          <React.Fragment>
            <Hidden mdDown>
              <Drawer
                variant="permanent"
                // className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
              >
                {" "}
                {/* This little trick places AppBar over side ToolBar */}
                <div className={classes.toolbar} />
                <Box style={{ flexGrow: 1 }}>
                  {/* FIXME: probably can be Table of Contents */}
                  <DrawersContent />
                </Box>
                <Box p={4}>
                  <Link
                    color={"textSecondary"}
                    variant={"h6"}
                    href={"mailto:INSERT_EMAIL@INSERT_DOMAIN"}
                  >
                    Problems?
                  </Link>
                </Box>
              </Drawer>
            </Hidden>
            <Hidden mdDown>
              <Drawer
                variant="permanent"
                anchor="right"
                // className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
              >
                {/* This little trick places AppBar over side ToolBar */}
                <div className={classes.toolbar} />

                <DrawersContent />
              </Drawer>
            </Hidden>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

Drawers = withStyles(styles)(Drawers);
export default Store.connect((state) => ({
  enabled: state.ui.drawers.enabled,
}))(Drawers);
