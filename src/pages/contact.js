import React, { Component } from "react";
import ComOne from "../component/contact/secOne";
import ConTow from "../component/contact/secTow";
import ConThree from "../component/contact/secThree";
class Contact extends Component {
  render() {
    return (
      <>
        <ComOne />
        <ConTow />
        <ConThree />
      </>
    );
  }
}

export default Contact;
