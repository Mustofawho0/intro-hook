import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [newUsername, getNewusername] = useState("pay");
  const [email, setEmail] = useState("");

  const inputUsername = useRef();
  const inputPassword = useRef();

  useEffect(() => {
    alert("Component did mount");
  }, []);

  useEffect(() => {
    alert("Component did Update");
  }, [newUsername]);

  useEffect(() => {
    return () => {
      confirm("are u sure dude ?");
    };
  }, []);

  function onUpdateValue() {
    getNewusername("hehehe");
    console.log(inputUsername.current.value);
    console.log(inputPassword.current);
    console.log(email);
  }

  function onSetEmail(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  return (
    <div style={{ paddingLeft: "100px" }}>
      This is Login Page
      <br />
      <Link to="/">Go to Home</Link>
      <br />
      {newUsername}
      <br />
      <input
        type="text"
        ref={inputUsername}
        placeholder="Input Your Username"
      />
      <input
        type="text"
        ref={inputPassword}
        placeholder="Input Your Password"
      />
      <input
        type="text"
        onChange={(e) => onSetEmail(e)}
        placeholder="Input Your Email"
      />
      <br />
      <button onClick={onUpdateValue}>Update</button>
    </div>
  );
}
