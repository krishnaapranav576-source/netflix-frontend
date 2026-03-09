import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {

    try {

      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });

      setMessage(res.data.message);

    } catch (err) {

      setMessage("Invalid email or password");

    }

  };

  return (

    <div className="container">

      <h1>Netflix Login</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>{message}</p>

    </div>

  );

}

export default Login;