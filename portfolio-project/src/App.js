import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import "./App.css";
import Header from "./Components/Header/Header";
import Particles from "react-particles-js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./Components/Header/Welcome";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Particles
          className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
            },
          }}
        />
        <Navbar />
        {/* <profileInfoContext.Provider value={profileInfoContext}> */}

        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/experience">
            <Services />
          </Route>
          <Route path="/portfolio">
            <Services />
          </Route>
          <Route path="/contacts">
            <Services />
          </Route>
        </Switch>
        {/* </profileInfoContext.Provider> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
