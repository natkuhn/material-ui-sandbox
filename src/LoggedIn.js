import React from "react";
import PropTypes from "prop-types";

// import { connect } from "react-redux";
// import { disconnect } from "../utils/vsNetworking";
//import { Redirect, useLocation } from "react-router-dom";

import { VPanel, VTag } from "./Vcomponents";
import { VGridButton } from "./VButton";

// based on https://reactrouter.com/web/example/auth-workflow

export function BareLoggedIn({ name, connected, onClick, children }) {
  // let location = useLocation();
  // console.debug("Rendering LoggedIn", connected, location);

  if (connected === "yes")
    return (
      <>
        <VPanel>
          <VTag text={"CONNECTED AS: " + name} variant="info" sm={6} />
          {/* <Grid item xs={12} sm={6}>
            <Box m={1}>
              <VButton onClick={onClick} variant="stop">
                Disconnect
              </VButton>
            </Box>
          </Grid> */}
          <VGridButton variant="stop" sm={6}>
            Disconnect
          </VGridButton>
        </VPanel>
        {children}
      </>
    );
  // else
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: "/login",
  //         state: { from: location }
  //       }}
  //     />
  //   );
}

BareLoggedIn.propTypes = {
  name: PropTypes.string.isRequired,
  connected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

// function stateToProps(state) {
//   return {
//     name: state.user.userName,
//     connected: state.user.connected,
//   };
// }

// function dispatchToProps(dispatch) {
//   return {
//     onClick: () => {
//       dispatch((dispatch) => {
//         dispatch({ type: "DISCONNECT_START" });
//         disconnect();
//       });
//     },
//   };
// }

// export default connect(stateToProps, dispatchToProps)(BareLoggedIn);
