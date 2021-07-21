import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

import CenterLayout from "../../layout/CenterLayout";

const styles = (_theme) => ({
  circularProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
});

function Waiting(props) {
  const { classes } = props;
  return (
    <CenterLayout>
      <CircularProgress className={classes.circularProgress} />
    </CenterLayout>
  );
}

Waiting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Waiting);
