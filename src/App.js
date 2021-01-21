import React from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import { blue, orange, green, red } from "@material-ui/core/colors";
import { BareLoggedIn } from "./LoggedIn";
import { LoginButtonGridItem, BareLoginControl } from "./LoginControl";
import { BareGetRoom } from "./GetRoom";
import { RoomButton } from "./RoomButton";
import { VPanel, VTag } from "./Vcomponents";
import { NonButton } from "./NonButton";

export default function App() {
  // const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <VPanel>
        <VTag variant="prompt" text="Please:" sm={3} />
        <Grid item xs={12} sm={6}>
          <Box m={1}>
            <Typography align="left">spooky</Typography>
          </Box>
        </Grid>
        <VTag variant="warn" text="Please:" sm={3} />
      </VPanel>
      <BareLoggedIn
        name="Bartholomew Schcharnsky"
        connected="yes"
        onClick={() => {
          console.log("clicked Disconnect");
        }}
      />
      {/* <BareLoginControl
        name=""
        connected=""
        onSubmit={(...args) => {
          console.log(...args);
        }}
        history={{}}
        location={{}}
      /> */}
      <BareLoginControl
        name="Nat"
        connected="pending"
        onSubmit={(...args) => console.log(...args)}
      />
      <BareGetRoom onChoose={(...args) => console.log(...args)} roomList={{}} />
      <BareGetRoom
        onChoose={(...args) => console.log(...args)}
        roomList={{
          Here: {
            roomName: "Here",
            numberClients: 3
          },
          There: {
            roomName: "There",
            numberClients: 5
          }
        }}
      />
      <NonButton>secondary</NonButton>
      <NonButton>primary</NonButton>
      <LoginButtonGridItem pending />
      <LoginButtonGridItem pending={false} />
      <RoomButton
        clicker={(...args) => console.log(...args)}
        room={{ roomName: "Home", numberClients: 5 }}
      />
    </Container>
  );
}
