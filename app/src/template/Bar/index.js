import React, { Component } from "react";
import PropTypes from "prop-types";

import GitHubCircleIcon from "@material-ui/icons/GitHub";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import settings from "../settings";
import Store from "../Store";
import Controls from "./Controls";
import ThemeToggle from "../ThemeToggle";
import { signInWithProvider } from "../Auth";
import * as AppUi from "../Store/AppUi";
import * as utils from "../utils";
import CellList from "../../layout/CellList";

const openSettingsDialog = () => AppUi.openDialog("settings");
const openSignOutDialog = () => AppUi.openDialog("confirmation");

const styles = (theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  signUpButton: {
    marginRight: theme.spacing(1),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary,
    backgroundColor: theme.palette.background.default,
  },
});

export class Bar extends Component {
  state = { menu: { anchorEl: null } };

  openMenu = (event) => {
    const anchorEl = event.currentTarget;
    this.setState({ menu: { anchorEl } });
  };
  closeMenu = () => {
    this.setState({ menu: { anchorEl: null } });
  };
  handleSettingsClick = () => {
    this.closeMenu();
    openSettingsDialog();
  };
  handleSignOutClick = () => {
    this.closeMenu();
    openSignOutDialog();
  };

  userButton = () => {
    const { isPerformingAuthAction, user } = this.props;
    const { menu } = this.state;

    const { showName, avatarGen } = utils.userDisplay(user);

    return (
      <React.Fragment>
        <Tooltip title={showName}>
          <div>
            <IconButton
              size={"small"}
              color="inherit"
              disabled={isPerformingAuthAction}
              onClick={this.openMenu}
            >
              {avatarGen()}
            </IconButton>
          </div>
        </Tooltip>

        <Menu
          anchorEl={menu.anchorEl}
          open={Boolean(menu.anchorEl)}
          onClose={this.closeMenu}
        >
          <MenuItem
            disabled={isPerformingAuthAction}
            onClick={this.handleSettingsClick}
          >
            Settings
          </MenuItem>
          <MenuItem
            disabled={isPerformingAuthAction}
            onClick={this.handleSignOutClick}
          >
            Sign out
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  };

  loginButton = () => {
    const { classes } = this.props;
    const { isPerformingAuthAction } = this.props;

    return (
      <React.Fragment>
        <Button
          className={classes.gitHub}
          disabled={isPerformingAuthAction}
          variant="contained"
          onClick={signInWithProvider}
        >
          Log in with GitHub
          <GitHubCircleIcon className={classes.icon} />
        </Button>
      </React.Fragment>
    );
  };

  render() {
    const { classes } = this.props;
    const { title /*user*/ } = this.props;

    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/*<IconButton edge="start" size="small" className={classes.menuButton} aria-label="Menu">*/}
          {/*    <MenuIcon/>*/}
          {/*</IconButton>*/}

          <h6 style={{ flexGrow: 1 }}>{title}</h6>

          <CellList />

          {/* Modal Control-Panel */}
          <Controls />

          {/* Dark/Light Theme-Toggle */}
          <ThemeToggle />
          {/* FIXME: User/Log-In Button */}
          {/* {!!user ? this.userButton() : this.loginButton()} */}
        </Toolbar>
      </AppBar>
    );
  }
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  isPerformingAuthAction: PropTypes.bool.isRequired,
};

Bar = withStyles(styles)(Bar);

export default Store.connect((state) => ({
  title: settings.title,
  user: state.user,
  isPerformingAuthAction: state.ui.isPerformingAuthAction,
}))(Bar);
