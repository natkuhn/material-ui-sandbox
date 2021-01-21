import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    background: {
      default: "white"
    }
  },
  scheme: {
    prompt: "#4caf50",
    info: "#2196f3",
    warn: "#ff9800",
    stop: "#f44336"
  }
});

//copied to VTag
// centerY: {
//   margin: 0,
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)"
// }
export const centerXY = {
  margin: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

export default theme;
/*
  promptBackground: {
    background: promptColor,
    position: "relative"
  },
  infoBackground: {
    background: infoColor,
    position: "relative"
  },
  warnBackground: {
    background: warnColor,
    position: "relative"
  },
  stopBackground: {
    background: stopColor,
    position: "relative"
  },

  promptButton: {
    color: "white",
    background: promptColor,
    fontWeight: 600
  },
  infoButton: {
    color: "white",
    background: infoColor,
    fontWeight: 600
  },
  warnButton: {
    color: "white",
    background: warnColor,
    fontWeight: 600
  },
  stopButton: {
    color: "white",
    background: stopColor,
    fontWeight: 600
  },

  tag: {
    fontWeight: 700,
    color: "white"
  },

  colorWarn: {
    color: warnColor
  },


*/
