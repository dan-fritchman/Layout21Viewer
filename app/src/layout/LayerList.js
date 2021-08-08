//!
//! # SideBar-Designed Layer-List
//!
//! Checkboxes for layer visibility
//!

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  // ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  // IconButton,
} from "@material-ui/core";
import { LayoutManager } from "./managers";
import Store from "../template/Store";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function LayerList() {
  const layerList = LayoutManager.layers.list;
  const classes = useStyles();
  const [checked, setChecked] = React.useState(
    Array(layerList.length).fill(true)
  );

  const handleToggle = (idx) => () => {
    let newChecked = [...checked];
    newChecked[idx] = !newChecked[idx];
    LayoutManager.layers.setVisibility(idx, newChecked[idx]);
    LayoutManager.render();
    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {layerList.map((value) => {
        const labelId = `checkbox-list-label-${value.index}`;

        return (
          <ListItem
            key={value.index}
            role={undefined}
            dense
            button
            onClick={handleToggle(value.index)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked[value.index]}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Layer ${value.layernum}`} />

            {/* <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction> */}
          </ListItem>
        );
      })}
    </List>
  );
}
/// Wrap that, so we don't render it until layout-loading is ready
function LayerListWrapper(props) {
  if (!props.ready) return null;
  return <LayerList />;
}

// Grab the "layout ready" state from the store
export default Store.connect((state) => {
  return { ready: state.layout && state.layout.ready };
})(LayerListWrapper);
