import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header className="container-fluid mx-auto row my-5">
        <div className="col-lg-4 col-11">
          <div className="row bk-wh py-5 hr ml-2">
            <div className="col-4 text-right pr-0 py-2">
              <i className="fas fa-pen p-4 bg-dark text-white rounded-circle fn-32"></i>
            </div>
            <div className="col-8 text-center pl-0 py-2 ">
              <h1 className="text-uppercase font-weight-normal ">parallo</h1>
              <p className="text-muted">new app landing page</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-1 my-auto">
          <nav
            className="navbar navbar-expand-lg navbar-light p-0"
            style={{ justifyContent: "flex-end" }}
          >
            <button
              className="navbar-toggler bk-wh"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
              <div className="navbar-nav bk-wh w-100 py-4 justify-content-around text-capitalize">
                <NavLink
                  className="nav-item nav-link mx-lg-0 mx-4"
                  exact
                  to="/"
                  activeClassName="act"
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-item nav-link mx-lg-0 mx-4"
                  to="/about"
                  activeClassName="act"
                >
                  about
                </NavLink>
                <NavLink
                  className="nav-item nav-link mx-lg-0 mx-4"
                  to="/services"
                  activeClassName="act"
                >
                  services
                </NavLink>
                <NavLink
                  className="nav-item nav-link mx-lg-0 mx-4 "
                  to="/testimonials"
                  activeClassName="act"
                >
                  testimonials
                </NavLink>
                <NavLink
                  className="nav-item nav-link mx-lg-0 mx-4 "
                  to="/contact"
                  activeClassName="act"
                >
                  contact
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
