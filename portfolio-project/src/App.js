import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import "./App.css";
import Header from "./Components/Header";
import Particles from 'react-particles-js';
function App() {
  return (
    <div>
      <Particles params ={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          }
        }
      }} />
      <Navbar />
      <Header/>
    </div>
  );
}

export default App;
