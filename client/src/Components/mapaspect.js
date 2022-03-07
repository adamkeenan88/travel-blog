import { React, useState } from "react";
function Map() {
  const [address, setAddress] = useState("Chicago, IL");

  return (
    <div>
      <input
        type="text"
        value={address}
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

export default Map;
