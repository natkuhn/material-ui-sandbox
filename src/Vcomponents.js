import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export function VPanel({ children, ...rest }) {
  return (
    <Box m={1}>
      <Paper variant="outlined">
        <Box mx={1}>
          <Grid container alignItems="center" {...rest}>
            {children}
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  type: {
    fontWeight: 700,
    color: (props) => theme.scheme[props.variant]
  }
}));

export function VTag({ text, variant, ...others }) {
  const classes = useStyles({ variant });

  return (
    <Grid item xs={12} {...others}>
      <Box mx={1} mt={2}>
        <Typography className={classes.type} align="left">
          {text}
        </Typography>
      </Box>
    </Grid>
  );
}
