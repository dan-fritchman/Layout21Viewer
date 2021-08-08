import React, { Component } from "react";
import { Box, makeStyles } from "@material-ui/core";

import Store from "../template/Store";
import { LayoutManager } from "./managers";

///
/// LayoutWindowInner
///
/// A component which does essentially nothing of its own,
/// but serves as the bridge between React and Pixi.js layers.
///
/// Dynamic re-rendering is substantially to-be-competed.
/// `LayoutWindowInner` should re-render rarely -
/// essentially only on color-theme changes and, during debug, code re-loads.
/// Keeping it from re-drawing over itself every time is important;
/// keeping its re-rendering time low is less so. For now.
///
class LayoutWindowInner extends Component {
  /// Nothing to render; all action happens in React lifecycle methods.
  render = () => null;
  /// Draw or re-draw the layout.
  /// Note this calls `reset` inline, removing any past drawing.
  draw = async () => {
    LayoutManager.reset();
    await LayoutManager.draw();
  };
  /// Draw on mount
  componentDidMount = async () => {
    Store.dispatch({ type: "LAYOUT_STATE", ready: false });
    await this.draw();
    Store.dispatch({ type: "LAYOUT_STATE", ready: true });
  };
  /// Re-draw on theme-change
  componentDidUpdate = async (prevProps) => {
    if (prevProps.dark !== this.props.dark) {
      await this.draw();
    }
  };
  /// Reset everything on unmount.
  componentWillUnmount = () => {
    Store.dispatch({ type: "LAYOUT_STATE", ready: false });
    LayoutManager.reset();
  };
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
});

/// # LayoutWindow
/// Instantiates the HTML/WebGL Canvas in which all Layout action happens
function LayoutWindow(props) {
  const classes = useStyles();
  const { dark } = props;
  return (
    <Box className={classes.root}>
      <div
        id={LayoutManager.parentId}
        style={{ width: "100%", height: "100%" }}
      />
      <LayoutWindowInner dark={dark} />
    </Box>
  );
}

// Connect to the dark/light theme switch from the redux store.
//
// We'll look up the state of dark-mode via `getState`,
// But this ensures we re-render when its state changes.
//
// Note if the layout canvas stays transparent, we really don't need this.
//
export default Store.connect((state) => {
  if (!state.theme) {
    return { dark: false };
  }
  return { dark: state.theme.options.type === "dark" };
})(LayoutWindow);
