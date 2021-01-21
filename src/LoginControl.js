import React from "react";
import PropTypes from "prop-types";

// import { connect } from "react-redux";

// import { withRouter } from "react-router-dom";

import { styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";

import { VPanel, VTag } from "./Vcomponents";
import { VGridButton } from "./VButton";

// import { logIn } from "../utils/vsNetworking";

//delete "export" when done debugging
export class BareLoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name; //props.name is not available in the ref function.
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameRef = this.handleNameRef.bind(this);
  }

  handleSubmit(event) {
    //https://reactrouter.com/web/example/auth-workflow
    let { history, location } = this.props;
    let { from } = location.state || { from: { pathname: "/choose-room" } };

    event.preventDefault();
    this.props.onSubmit(this.nameInput.value, this.passwordInput.value, () => {
      history.replace(from);
    });
    this.passwordInput.value = "";
  }

  handleNameRef(inp) {
    if (inp === null) return;
    this.nameInput = inp;
    inp.value = this.name;
  }

  render() {
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <VPanel spacing={2}>
          <VTag text="SIGN IN:" variant="prompt" sm={2} />
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="username"
              autoFocus
              inputRef={this.handleNameRef}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={(inp) => (this.passwordInput = inp)}
            />
          </Grid>
          <LoginButtonGridItem
            sm={2}
            pending={this.props.connected === "pending"}
          />
        </VPanel>
      </form>
    );
  }
}

BareLoginControl.propTypes = {
  name: PropTypes.string,
  connected: PropTypes.string,
  onSubmit: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  classes: PropTypes.object
};

// function stateToProps(state) {
//   return {
//     name: state.user.userName,
//     connected: state.user.connected
//   };
// }

// function dispatchToProps(dispatch) {
//   return { onSubmit };
//   function onSubmit(n, p, navigate) {
//     dispatch({
//       type: "CONNECT_START",
//       userName: n
//     });
//     logIn(n, p, succeed, fail);

//     function succeed(rtcID) {
//       dispatch({ type: "CONNECT_SUCCESS", rtcID });
//       navigate();
//     }
//     function fail(errorCode, message) {
//       //***rewrite
//       dispatch({ type: "CONNECT_FAILURE", errorCode, message });
//     }
//   }
// }

/* will need to include withStyles here */
// export default connect(
//   stateToProps,
//   dispatchToProps
// )(withRouter(BareLoginControl));

// export const StyledLoginControl = withStyles(styles)(BareLoginControl);

//https://material-ui.com/components/progress/#interactive-integration

/* remove "export" */
export function LoginButtonGridItem({ pending, ...rest }) {
  const theme = useTheme();
  const SCP = styled(CircularProgress)({
    color: theme.scheme.prompt,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  });

  return (
    // inline-block seems to work as well as inline-flex
    <div style={{ position: "relative", display: "inline-flex" }}>
      <VGridButton type="submit" variant="prompt" disabled={pending} {...rest}>
        {/* {pending ? "Connecting..." : "Sign\u00a0in"} */}
        Sign&nbsp;in
        {/* 00a0 is &nbsp; */}
      </VGridButton>
      {pending && <SCP size={24} />}
    </div>
  );
}

LoginButtonGridItem.propTypes = {
  pending: PropTypes.bool
};
