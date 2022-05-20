import { React, useState } from "react";

function Login() {
  return (
    <div>
      <p>
        Username{" "}
        <span>
          <input type="text" placeholder="Enter your username"></input>
        </span>
      </p>
      <p>
        Password{" "}
        <span>
          <input type="text" placeholder="Enter your password"></input>
        </span>
      </p>
    </div>
  );
}

export default Login;
