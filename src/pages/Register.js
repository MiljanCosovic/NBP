import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const Validate = () => {
    const inputs = document.getElementsByTagName("input");
  
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        alert("Morate popuniti sva polja");
        return false;
      }
    }
  
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    Validate();
    await axios.post("https://localhost:7210/Identity/register", {
      username,
      password: pass,
    });
  };

  return (
    <div className="page-containerr w-100">
      <form onSubmit={submitHandler}>
      <h1>Register</h1>
      <label>Username:</label>
        <input
        placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <br></br>
        <label>E-mail::</label>
        <input
        placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <br></br>
        <label>Password:</label>
        <input
        placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
        />
        <br></br>
        <label>Confirm password:</label>
        <input
        placeholder="confirm password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
        />
        <br></br>
        <input className="dugme" type="submit" value={"Register"}  />
      </form>
    </div>
  );
};

export default Register;
