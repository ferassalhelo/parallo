import React, { Component } from "react";
class SecTow extends Component {
  render() {
    return (
      <section className="container-fluid row m-auto ">
        <div className="col-lg-6 p-5 bk-blk">
          <form action="" className="m-3 fn-20 ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className=" w-100 bg-transparent text-white p-4 border-left-0 border-right-0 border-top-0 border-bottom"
            />
            <input
              type="password"
              name="pass"
              placeholder="Password"
              className="my-5 w-100 bg-transparent text-white p-4 border-left-0 border-right-0 border-top-0 border-bottom"
            />
            <textarea
              className=" w-100 bg-transparent text-white p-4  border-left-0 border-right-0 border-top-0 border-bottom"
              name="area"
              id=""
              cols="30"
              rows="7"
              placeholder="Message"
            ></textarea>
          </form>
          <button className="btn  btn-outline-light btn-secondary border-0 fn-22 rounded-0 py-3 px-5 float-right m-3 font-weight-normal">
            Submit
          </button>
        </div>
        <div className="col-lg-6 ">
          <div className="text-white p-5 bk-blk h-100 ml-3">
            <div className="text-center">
              <i className="fas fa-address-card  text-center fn-65  rounded-circle border p-4 my-3"></i>
            </div>
            <div className="px-5">
              <h2 className="mt-5">Maecenas in aliquam lorem</h2>
              <p className="fn-22 my-5 ">
                Proin rutrum massa quis erat mollis iaculis. Vestibulum a risus
                ex. Nunc rhoncus, justo at blandit cursus, orci erat molestie
                felis, id ullamcorper mauris felis eu eros.
              </p>
              <p className="fn-22 ">
                Donec turpis augue, mollis eu erat in, posuere congue sapien.
                Maecenas facilisis dui sit amet ornare aliquam. Paesent
                malesuada mi a est pulvinar.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SecTow;
