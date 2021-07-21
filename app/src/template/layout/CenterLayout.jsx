import React from "react";
import Grid from "@material-ui/core/Grid";

export default function CenterLayout(props) {
  const { children } = props;

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      {React.Children.map(children, (child, i) => (
        <Grid item key={i}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
}
