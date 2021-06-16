import React, { Component } from "react";
import SecOne from "../component/testimonialsComponents/secOne";
import SecTow from "../component/testimonialsComponents/secTow";
import Slider from "../component/testimonialsComponents/slider";
class Testimonials extends Component {
  render() {
    return (
      <>
        <SecOne />
        <Slider />
        <SecTow />
      </>
    );
  }
}

export default Testimonials;
