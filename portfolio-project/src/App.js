import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import "./App.css";
import Header from "./Components/Header/Header";
import Particles from "react-particles-js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./Components/Header/Welcome";
import About from "./Components/About/About";
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
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/services">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
