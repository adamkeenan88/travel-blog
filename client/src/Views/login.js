import { React, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userLogin = {
      email,
      password,
    };
    axios
      .post("http://localhost:8000/api/login", userLogin)
      .then((userInfo) => {
        console.log(userInfo);
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log("error block", err.response);
        console.log(err.response.data.errors);
        // setErrors(err.response.data.errors.errors);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Username </label>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password </label>
          <input
            type="text"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <input
          style={{ backgroundColor: "blue", color: "white" }}
          className="newpet"
          type="submit"
          value="Add User"
        />
      </form>
    </div>
  );
}

export default Login;
