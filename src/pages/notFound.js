import React, { Component } from "react";
class NotFound extends Component {
  render() {
    return (
      <>
        {" "}
        <p className="fn-35 text-danger text-center">
          the src {`( ${this.props.location.pathname} )`} is not found
        </p>
      </>
    );
  }
}

export default NotFound;
