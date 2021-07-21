import React from "react";

import Store from "../Store";

class Controls extends React.Component {
  render() {
    return null;
    // const { mode } = this.props;
    // switch (mode) {
    //   case "HOST_SESSION":
    //     return <HostControls/>;
    //   case "USER_SESSION":
    //     return <UserSessionControls/>;
    //   case "JOIN_SESSION":
    //   default: // Case for info pages, etc
    //     return null;
    // }
  }
}

export default Store.connect((state) => ({
  mode: state.ui.controlMode,
}))(Controls);
