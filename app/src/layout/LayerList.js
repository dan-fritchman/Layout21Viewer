import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";

import { layerList, layerMap } from "./load";
import { LayoutManager } from "./";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LayerList() {
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
