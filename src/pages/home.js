import React, { Component } from "react";
import SecOne from "../component/homeComponent/secOne";
import SecTow from "../component/homeComponent/sectionTow";
import SecThree from "../component/homeComponent/sectionThree";
class Home extends Component {
  render() {
    return (
      <div>
        <SecOne />
        <SecTow />
        <SecThree />
      </div>
    );
  }
}

export default Home;
