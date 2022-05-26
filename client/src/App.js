import Map from "./Components/mapaspect";
import Register from "./Views/register";
import Login from "./Views/login";
import User from "./Views/main";
import "./App.css";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      {/* <Login path="/login/> */}
      <Register path="/register" />
      <User path="/users" />
      {/* <Map /> */}
    </div>
  );
}

export default App;
