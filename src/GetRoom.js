import React from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { Panel, Col } from "react-bootstrap";
// import { Form, FormControl, FormGroup, Button } from "react-bootstrap";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import { NonButton } from "./NonButton";
import { RoomButton } from "./RoomButton";
// import { joinRoom } from "../utils/vsNetworking";
// import { Redirect } from "react-router-dom";

import { VPanel, VTag } from "./Vcomponents";
import { VGridButton } from "./VButton";

// **** TODO add validation for room name

// *** delete "export"
export class BareGetRoom extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (this.input.value !== "")
      // *****	DO BETTER VALIDATION
      this.props.onChoose(this.input.value, true);
    this.input.value = "";
    event.preventDefault();
  }

  roomButtons() {
    let buttons = [];
    const list = this.props.roomList;
    let keys = Object.keys(list);
    keys.sort();
    for (let k of keys) {
      if (k === "_census") continue;
      if (list[k].numberClients === 0) continue;
      buttons.push(
        <Box mx={1} component="span" key={k}>
          <RoomButton room={list[k]} clicker={this.props.onChoose} />
        </Box>
      );
    }
    if (buttons.length === 0) buttons = [<NonButton key="0">None</NonButton>];
    return buttons;
  }

  render() {
    // if (this.props.inRoom) return <Redirect to={{ pathname: "/room" }} />;
    // else
    return (
      <form onSubmit={this.handleSubmit}>
        <VPanel>
          <VTag text="CHOOSE ROOM:" variant="prompt" sm={2} />
          <Grid item sm={10} lg={4}>
            <Box mt={1}>{this.roomButtons()}</Box>
          </Grid>
          <VTag text="OR CREATE ROOM:" variant="prompt" sm={2} />

          <Grid item xs={9} sm={8} lg={2}>
            <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              id="room"
              label="Room Name"
              name="roomname"
              type="text"
              // placeholder="Room name"
              autoFocus
              inputRef={(inp) => (this.input = inp)}
            />
          </Grid>
          <VGridButton type="submit" variant="prompt" xs={3} sm={2} lg={2}>
            Create &amp; Open
          </VGridButton>
        </VPanel>
      </form>
    );
  }
}

BareGetRoom.propTypes = {
  roomList: PropTypes.object,
  onChoose: PropTypes.func,
  inRoom: PropTypes.bool
};

// function stateToProps(state) {
//   return {
//     roomList: state.user.roomList,
//     inRoom: state.room.inRoom
//   };
// }

// function dispatchToProps(dispatch) {
//   return {
//     onChoose: (n, create) => {
//       dispatch(joinRoom(n, create));
//     }
//   };
// }

// export default connect(stateToProps, dispatchToProps)(BareGetRoom);
