import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    container: {
        // display: 'flex',
        // flexWrap: 'wrap',
        backgroundColor: theme.palette.background.paper
    },
});

class Tile extends React.Component {
    render() {
        /* Style a Problem into MUI grid */
        const { children, classes, borderOptions } = this.props;

        return <Box width="100%" mt={1} mb={0} p={4} color="primary.main"
            className={classes.container}
            borderRadius={16}
            {...borderOptions}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                // alignContent="flex-start"
                alignItems="stretch"
                spacing={2}
                width="100%"
            >
                {React.Children.map(children, (child, index) => {
                    return <Grid item zeroMinWidth xs={12} width="100%" key={index} className={classes.container}>
                        {child}
                    </Grid>;
                })}
            </Grid>
        </Box>;
    }
}

export default withStyles(styles)(Tile);
