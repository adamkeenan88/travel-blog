import logo from "./logo.svg";
import { useState } from "react";
import Map from "./Components/mapaspect";
import Login from "./Components/login";
import "./App.css";

function App() {
  const [address, setAddress] = useState("");
  // function mapview(address) {
  //   return (
  //     <iframe
  //       width="600"
  //       height="450"
  //       style="border:0"
  //       loading="lazy"
  //       allowfullscreen
  //       src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCw07qXCsliUlTMzO1DomRnqkNpdbd8mRQ+q="
  //       $address
  //     ></iframe>
  //  );
  //}
  return (
    <div className="App">
      <Login />
      <Map />
    </div>
  );
}

export default App;
