import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Panel, Button } from "react-bootstrap";
import OccupantButtons from "./OccupantButtons";

import { leaveRoom } from "../utils/vsNetworking";

class BareGotRoom extends React.Component {
  render() {
    return (
      <Panel
        header={<h3>Current room: {this.props.roomName}</h3>}
        bsStyle="info"
      >
        <div>
          <Button onClick={this.props.onClick} bsStyle="danger">
            Leave room
          </Button>
        </div>
        <div className="slug">Room Occupants</div>
        <OccupantButtons />
      </Panel>
    );
  }
}

BareGotRoom.propTypes = {
  roomName: PropTypes.string,
  occupants: PropTypes.object,
  onClick: PropTypes.func,
};

function stateToProps(state) {
  return {
    roomName: state.room.roomName,
    occupants: state.room.occupants,
  };
}

function dispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch(leaveRoom());
    },
  };
}

export default connect(stateToProps, dispatchToProps)(BareGotRoom);
