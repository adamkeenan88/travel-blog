import React, { useState } from "react";
import axios from "axios";
import Users from "./main";
import { navigate } from "@reach/router";
import "../App.css";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");

  const onSubmitHandler = (e) => {
    // e.preventDefault();
    console.log("success");
    const newUserData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    axios
      .post("http://localhost:8000/api/register", newUserData)
      .then((newUser) => {
        setFirstName("");
        setLastName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      })
      .catch((err) => {
        console.log("error block", err.response);
        console.log(err.response.data.errors);
        // setErrors(err.response.data.errors.errors);
      });
  };
  return (
    <>
      <p style={{ fontSize: 30 }}>Add a new car to the journal!</p>
      <form onSubmit={onSubmitHandler}>
        <div className="formcolumnone">
          <p>
            <label>First Name:</label>
          </p>
          <p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>
          <p>
            <label>Last Name:</label>
          </p>
          <p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </p>
          <p>
            <label>Username:</label>
          </p>
          <p>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </p>
          <p>
            <label>Email:</label>
          </p>
          <p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label>Password: </label>
          </p>
          <p>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <p>
            <label>Confirm Password:</label>
          </p>
          <p>
            <input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </p>
          <input
            style={{ backgroundColor: "blue", color: "white" }}
            className="newpet"
            type="submit"
            value="Add User"
          />
        </div>
      </form>
      {/* {errors
        ? Object.keys(errors).map((objKey, index) => (
            <p key={index}>{errors[objKey].message}</p>
          ))
        : null} */}
    </>
  );
};

export default Register;
