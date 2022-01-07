import logo from "./logo.svg";
import { useState } from "react";
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
      <input
        type="text"
        placeholder="Enter Location"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
      <hr></hr>
      <iframe
        width="500"
        height="400"
        // style="border:0"
        title="mappymap"
        loading="lazy"
        // allowfullscreen
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCw07qXCsliUlTMzO1DomRnqkNpdbd8mRQ&q=${address}`}
      ></iframe>
    </div>
  );
}

export default App;
