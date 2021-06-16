import React, { Component } from "react";
import SecOne from "../component/servicesComponent/secOne";
import SecTow from "../component/servicesComponent/secTow";
import SecThree from "../component/servicesComponent/secThree";
class Service extends Component {
  render() {
    return (
      <>
        <SecOne />
        <SecTow />
        <SecThree />
      </>
    );
  }
}

export default Service;
