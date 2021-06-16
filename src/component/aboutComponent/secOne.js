import React, { Component } from "react";
class SecOne extends Component {
  render() {
    return (
      <section className="container-fluid row mx-auto mb-5 pb-5">
        <h2 className=" fn-42 font-weight-normal text-uppercase col-12 text-center my-5 pb-5 ">
          about this app
        </h2>
        <div className="col-lg-4">
          <div className="m-3 mx-auto mw3 p-4 pb-5 text-white bk-blk">
            <span className="border p-3 d-inline-block font-weight-normal fn-38">
              0.1
            </span>
            <h3 className="text-uppercase mt-4 font-weight-normal">
              best quality
            </h3>
            <p className="fn-20 font-weight-normal py-4 ">
              Integer dapibus aliquam accumsan. Nam diam elit, mollis quis elit
              sed, hendrerit dapibus eros. Cras auctor laoreet tortor eget. BG
              #0F1D20
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="m-3 mx-auto mw3 p-4 pb-5 text-white bk-blk">
            <span className="border p-3 d-inline-block font-weight-normal fn-38">
              0.2
            </span>
            <h3 className="text-uppercase mt-4 font-weight-normal">
              stasefacation
            </h3>
            <p className="fn-20 font-weight-normal py-4 ">
              Parallo is a HTML landing page template based on Bootstrap v4.3.1
              framework. Please tell your friends about TemplateMo.
            </p>
            <button className="btn btn-info rounded-0 px-5 py-2 fn-22 font-weight-normal">
              More
            </button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="m-3 mx-auto mw3 p-4 pb-5 text-white bk-blk">
            <span className="border p-3 d-inline-block font-weight-normal fn-38">
              0.3
            </span>
            <h3 className="text-uppercase mt-4 font-weight-normal">
              high return
            </h3>
            <p className="fn-20 font-weight-normal py-4 ">
              You are allowed to use this for commercial purpose or personal
              site.
            </p>
            <p className="fn-20 font-weight-normal py-4 ">
              You are NOT allowed to redistribute this template on any download
              site or template collection sites.
            </p>
            <button className="btn btn-primary rounded-0 px-4 py-2 fn-22 font-weight-normal">
              Details
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default SecOne;
