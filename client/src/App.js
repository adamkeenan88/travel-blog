import Map from "./Components/mapaspect";
import Login from "./Views/login";
import "./App.css";
import { Link } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Login />
      <Map />
    </div>
  );
}

export default App;
