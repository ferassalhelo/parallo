import React, { Component } from "react";
import img from "../../imges/call-to-action-2.jpg";
class SecTow extends Component {
  render() {
    return (
      <section className="continer-fluid mx-auto row p-5">
        <div className="col-lg-5  col-xl-4 text-center m-5 m-lg-0">
          <img
            src={img}
            alt="image"
            style={{ width: "100%", height: "400px", maxWidth: "450px" }}
          />
        </div>
        <div className="col-lg-7  col-xl-8    ">
          <div className="mr-lg-5 bg-white p-5 h-100">
            <h2 className="text-muted text-capitalize font-weight-normal">
              Vivamus sollicitudin tellus
            </h2>
            <p className="text-secondary fn-22 p-fon py-4">
              Maecenas maximus tellus in dolor auctor tristique. Nam hendrerit
              posuere laoreet. Aliquam erat volutpat. Nulla eros est, imperdiet
              vel feugiat non, ullamcorper mattis nulla.
            </p>
            <div className="row">
              <form className="form col-lg-7">
                <input
                  type="text"
                  placeholder="Email"
                  className="form bg-white p-3 border fn-20 my-2 w-100"
                />
              </form>
              <button className="btn btn-info rounded-none px-5 py-2 my-2 mx-auto fn-22 text-capitalize">
                get updates
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SecTow;
