import React from "react";
import PropTypes from "prop-types";
import { VButton } from "./VButton";
import Badge from "@material-ui/core/Badge";

// ***** in the original app, the badge appears within the button,
// on the right, in white with green type. Can style as per

//https://material-ui.com/components/badges/#customized-badges

export function RoomButton({ room, clicker }) {
  return (
    <Badge badgeContent={room.numberClients} color="secondary">
      <VButton
        variant="prompt"
        onClick={() => {
          clicker(room.roomName, false);
        }}
      >
        {room.roomName}
      </VButton>
    </Badge>
  );
}

RoomButton.propTypes = {
  room: PropTypes.object,
  clicker: PropTypes.func
};
