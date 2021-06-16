import React, { Component } from "react";
import { handleOne, handleTow, handleThree } from "./functions";
class SecThree extends Component {
  render() {
    return (
      <section className="container-fluid mx-auto row my-5">
        <div className="col-md-4">
          <div
            className="bk-blk row align-items-center my-4 p-4 mr-lg-5 actvv actv "
            id="one"
            onClick={handleOne}
          >
            <div
              className="col-3 border rounded-circle d-flex justify-content-center align-items-center"
              style={{ maxWidth: "75px", height: "75px" }}
            >
              <i className=" text-white fn-40  fas fa-leaf"></i>
            </div>
            <h4 className="col-9 font-weight-bold text-white text-uppercase text-center">
              service tab one
            </h4>
          </div>
          <div
            className="bk-blk row align-items-center my-4 p-4 mr-lg-5 actvv"
            id="two"
            onClick={handleTow}
          >
            <div
              className="col-3 border rounded-circle d-flex justify-content-center align-items-center "
              style={{ maxWidth: "75px", height: "75px" }}
            >
              <i className=" text-white fn-40  fab fa-canadian-maple-leaf"></i>
            </div>
            <h4 className="col-9 font-weight-bold text-white text-uppercase text-center">
              service tab two
            </h4>
          </div>
          <div
            className="bk-blk row align-items-center my-3 p-4 mr-lg-5 actvv"
            id="three"
            onClick={handleThree}
          >
            <div
              className="col-3 border rounded-circle d-flex justify-content-center align-items-center"
              style={{ maxWidth: "75px", height: "75px" }}
            >
              <i className="text-white fn-40 fab fa-pagelines"></i>
            </div>
            <h4 className="col-9 font-weight-bold text-white text-uppercase text-center">
              service tab three
            </h4>
          </div>
        </div>
        <div
          className="col-md-8 bk-blk my-4 text-white font-weight-normal p-5 fn-20 "
          id="cont"
        >
          <h2>Service Tab One</h2>
          <p class="py-4">
            Etiam egestas metus vitae est interdum, in eleifend nunc volutpat.
            Aliquam molestie ipsum quis suscipit lacinia. Mauris turpis libero,
            iaculis non dictum ac, ornare a massa. Duis id lorem purus. Fusce
            viverra ullamcorper metus. Curabitur puvinar suscipit sapien ac
            blandit. Aliquam vel pulvinar purus, sit amet luctus urna.
          </p>
          <p>
            Nam consequat, leo vitae aliquet dignissim, leo est laoreet nibh,
            nec dictum libero justo vitae dolor. Donec tristique eros at nisi
            elementum efficitur. Proin ornare feugiat ex placerat pellenteqsue.
            Nulla convallis est volutpat ex ultrices facilisis.
          </p>
        </div>
      </section>
    );
  }
}

export default SecThree;
