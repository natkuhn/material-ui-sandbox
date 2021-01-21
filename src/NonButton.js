import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "&$disabled": {
      backgroundColor: theme.scheme.warn,
      color: "white",
      fontWeight: 600
    }
  },
  disabled: {}
}));

export function NonButton({ children }) {
  const classes = useStyles();

  return (
    <Button
      classes={{ root: classes.root, disabled: classes.disabled }}
      variant="contained"
      disabled
    >
      {children}
    </Button>
  );
}
