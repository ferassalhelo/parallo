import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Testimonials from "./pages/testimonials";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/services" component={Service} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
