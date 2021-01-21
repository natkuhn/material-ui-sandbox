import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { blue, orange, green, red } from "@material-ui/core/colors";
import { BareLoggedIn } from "./LoggedIn";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  info: {
    background: blue[500]
  },
  prompt: {
    background: green[500]
  },
  warn: {
    background: orange[500]
  },
  stop: {
    background: red[500]
  },
  tag: {
    fontWeight: 600,
    color: "white"
  }
});

export default function App() {
  return (
    <Container maxWidth="lg">
      <Panel>
        <Tag variant="prompt" text="Please:" />
        <Grid item xs={12} sm={6}>
          <Box m={1}>
            <Typography align="left">spooky</Typography>
          </Box>
        </Grid>
        <Tag variant="stop" text="Please:" />
      </Panel>
      <BareLoggedIn
        name="Nat"
        connected="yes"
        onClick={() => {
          console.log("clicked");
        }}
      />
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
    </Container>
  );
}

export function Panel({ children }) {
  return (
    <Paper variant="outlined">
      <Grid container alignItems="stretch">
        {children}
      </Grid>
    </Paper>
  );
}

export function Tag({ text, variant }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={3} className={classes[variant]}>
      <Box mx={2} my={1}>
        <Typography align="left" className={classes.tag}>
          {text}
        </Typography>
      </Box>
    </Grid>
  );
}
