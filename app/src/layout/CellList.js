//!
//! # SideBar-Designed Cell-List
//!
/* eslint-disable no-use-before-define */
import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { LayoutManager } from "./managers";
import Store from "../template/Store";

function CellSelect() {
  const cellList = LayoutManager.cellnames;
  const cellname = LayoutManager.cellname;
  const [value, setValue] = React.useState(cellname);

  /// On a change, notify the LayoutManager, then update state
  const onChange = (_event, newValue) => {
    LayoutManager.setCell(newValue);
    LayoutManager.render();
    setValue(newValue);
  };

  return (
    <Autocomplete
      id="cell-list"
      value={value}
      options={cellList}
      onChange={onChange}
      // fullWidth={true}
      style={{ width: 600 }}
      renderInput={(params) => (
        <TextField {...params} label="Select Cell" margin="normal" />
      )}
    />
  );
}

/// Wrap that, so we don't render it until layout-loading is ready
function CellSelectWrapper(props) {
  if (!props.ready) return null;
  return <CellSelect />;
}

// Grab the "layout ready" state from the store
export default Store.connect((state) => {
  return { ready: state.layout && state.layout.ready };
})(CellSelectWrapper);
