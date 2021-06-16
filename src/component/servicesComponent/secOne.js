import React, { Component } from "react";
class SecOne extends Component {
  render() {
    return (
      <section className="container-fluid mx-auto my-5  row px-0 py-3">
        <div className="mx-3 sec1 w-100 row ">
          <div className="py-5 bk-blk text-center text-white px-5  my-auto col-12">
            <h1 className="font-weight-normal py-4 fn-45">OUR SERVICES</h1>
            <p className="font-weight-normal fn-18 mw3 px-0 container">
              This is a parallax movement background image "coffee glass".{" "}
              <br />
              Aliquam egestas lectus semper enim malesuada, in convallis nunc
              sagittis. Pellentesque quis tellus vel tortor malesuada egestas.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SecOne;
