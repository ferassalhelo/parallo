import React, { Component } from "react";
class ComOne extends Component {
  state = { name: "feras" };

  render() {
    return (
      <section className="container row m-auto py-5 text-md-left text-center">
        <article className="col-md-6 mw">
          <h5 className="text-uppercase border-bottom py-3 text-white font-weight-normal py-5">
            we can develop
          </h5>
          <p className="display-4 text-white font-weight-normal py-4 ">
            Mobile App for Your Business
          </p>
          <p className="text-white  p-fon">
            Parallo is a landing page template based on Bootstrap v4.3.1
            framework. Please tell your friends about TemplateMo. Thank you.
          </p>
          <button className="btn btn-light text-secondary px-5 py-2 my-4 p-fon font-weight-normal text-capitalize">
            lern more
          </button>
        </article>
        <article className="col-md-6 mw2  px-2 py-3 border round bord m-auto mr-md-0">
          <div className=" bg-light py-3 round px-1 ">
            <h4 className="text-secondary text-capitalize w-75 m-auto py-4 font-weight-normal op">
              your app
              <i className="fas fa-bars "></i>
            </h4>
            <div className="p-5 p-6 round text-white bg-info m-2 op">
              <span className="rounded-circle p-4 text-info bg-white sp">
                fa
              </span>
              <span className="text-white text-capitalize ml-3 font-weight-normal sp2">
                best design
              </span>
            </div>
            <div className="p-5 round text-white bg-success m-2 op">
              <span className="rounded-circle p-4 text-success bg-white sp">
                fa
              </span>
              <span className="text-white text-capitalize ml-3 font-weight-normal sp2">
                high speed
              </span>
            </div>
            <div className="p-7 p-5 round text-white bg-primary m-2 op">
              <span className="rounded-circle p-4 text-primary  bg-white fn-18">
                fa
              </span>
              <span className="text-white text-capitalize ml-3 font-weight-normal fn-22">
                low cost
              </span>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default ComOne;
