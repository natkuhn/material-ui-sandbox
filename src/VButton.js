import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    background: (props) => theme.scheme[props.variant],
    fontWeight: 600
  }
}));

export function VButton({ variant, children, ...rest }) {
  const classes = useStyles({ variant });

  return (
    <Button className={classes.root} variant="contained" {...rest}>
      {children}
    </Button>
  );
}

export function VGridButton({
  onClick,
  variant,
  type,
  disabled,
  children,
  ...rest
}) {
  return (
    <Grid item xs={12} {...rest}>
      <Box m={1}>
        <VButton {...{ onClick, variant, type, disabled }}>{children}</VButton>
      </Box>
    </Grid>
  );
}
