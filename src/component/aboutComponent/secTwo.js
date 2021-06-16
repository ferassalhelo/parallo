import React, { Component } from "react";
class SecTow extends Component {
  render() {
    return (
      <section className="container-fluid row mx-auto py-5">
        <article className="col-lg-7 col-md-8 col-12 p-5 mx-auto my-5 bk-blk text-center text-white">
          <h2 className="text-uppercase fn-48  font-weight-normal text-white">
            app features
          </h2>
          <p className="fn-18 font-weight-normal">
            Suspendisse finibus tellus eget sem lacinia, vel lacinia libero
            consequat. Sed imperdiet placerat vehicula.
          </p>
        </article>
        <article className="col-lg-6 col-md-8 col-12 p-2 m-auto">
          <div className="p-4 bk-wh row pb-3 m-0  ">
            <div className="col-3 text-right  col-md-4 col-xl-3">
              <i className="fas fa-tree  p-4 my-5 rounded-circle fn-65 br-mu text-secondary"></i>
            </div>
            <div className="col-9  col-md-8 col-xl-9">
              <h2 className="fn-33 text-dark font-weight-normal ">
                Phasellus est lorem
              </h2>
              <p className="py-3 pr-3 text-muted fn-19">
                Suspendisse finibus tellus eget sem lacinia, vel lacinia libero
                consequat. Sed imperdiet placerat vehicula. Etiam eu egestas
                nibh. In turpis ligula.
              </p>
            </div>
          </div>
        </article>
        <article className="col-lg-6 col-md-8 col-12 p-3 m-auto">
          <div className="p-4 bk-wh row pb-3 m-0">
            <div className="col-3 text-right col-md-4 col-xl-3">
              <i className="fas fa-binoculars p-4 my-5 rounded-circle fn-65 br-mu text-secondary"></i>
            </div>
            <div className="col-9 col-md-8 col-xl-9">
              <h2 className="fn-33 text-dark font-weight-normal ">
                Proin scelerisque
              </h2>
              <p className="py-3 pr-3 text-muted fn-19">
                Etiam fermentum nisi lorem, vel pharetra ipsum egestas non.
                Proin odio ipsum, vestibulum quis elit quis, vulputate venenatis
                neque. Nam dignissim libero.
              </p>
            </div>
          </div>
        </article>
        <article className="col-lg-6 col-md-8 col-12 p-3 m-auto">
          <div className="p-4 bk-wh row pb-3 m-0">
            <div className="col-3 text-right col-md-4 col-xl-3">
              <i className="fas fa-campground p-4 my-5 rounded-circle fn-65 br-mu text-secondary"></i>
            </div>
            <div className="col-9 col-md-8 col-xl-9">
              <h2 className="fn-33 text-dark font-weight-normal ">
                Integer tempor
              </h2>
              <p className="py-3 pr-3 text-muted fn-19">
                Aliquam erat volutpat. Phasellus a odio eget enim luctus
                vestibulum nec sed tellus. Pellentesque aliquam sem quis
                lobortis laoreet. Donec egestas.
              </p>
            </div>
          </div>
        </article>
        <article className="col-lg-6 col-md-8 col-12 p-3 m-auto">
          <div className="p-4 bk-wh row pb-3 m-0">
            <div className="col-3 text-right col-md-4 col-xl-3">
              <i className="fas fa-fire p-4 my-5 rounded-circle fn-65 br-mu text-secondary"></i>
            </div>
            <div className="col-9 col-md-8 col-xl-9">
              <h2 className="fn-33 text-dark font-weight-normal ">
                Curabitur dignissim
              </h2>
              <p className="py-3 pr-3 text-muted fn-19">
                Donec ut odio nec nisl feugiat dictum. Quisque sit amet mattis
                dolor. Morbi et erat vestibulum, finibus nunc quis, fermentum
                eros. Cras laoreet eros.
              </p>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default SecTow;
