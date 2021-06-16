import React, { Component } from "react";
class Comtow extends Component {
  render() {
    return (
      <section className="container-fluid m-auto row text-muted px-5">
        <div className="col-lg-4 round mx-0 mx-sm-5 mx-lg-auto p-xl-4 my-3">
          <div className="round bk-wh text-center p-5 h-100 mb-4">
            <h2 className="text-capitalize font-weight-normal text-dark ">
              high performance
            </h2>
            <i className="fas fa-server p-4 my-5 rounded-circle fn-60 br-mu"></i>
            <p className="fn-20 my-4">
              Download and use this layout for your sites. Total 5 HTML pages
              included.
            </p>
          </div>
        </div>
        <div className="col-lg-4 round mx-0 mx-sm-5 mx-lg-auto p-xl-4 my-3">
          <div className="round bk-wh text-center p-5 h-100 mb-4">
            <h2 className="text-capitalize font-weight-normal text-dark">
              fast support
            </h2>
            <i className="fas fa-headphones p-4 my-5 rounded-circle fn-60 br-mu"></i>
            <p className="fn-20 my-4">
              You are allowed to use this for commercial purpose or personal
              site.
            </p>
          </div>
        </div>
        <div className="col-lg-4  round mx-0 mx-sm-5 mx-lg-auto p-xl-4 my-3">
          <div className="round bk-wh text-center p-5 h-100 mb-4">
            <h2 className="text-capitalize font-weight-normal text-dark">
              app marketing
            </h2>
            <i className="fas fa-satellite-dish p-4 my-5 rounded-circle fn-60 br-mu"></i>
            <p className="fn-20 my-4">
              You are NOT allowed to redistribute this template on any download
              site.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Comtow;
