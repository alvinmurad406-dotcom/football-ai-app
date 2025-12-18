import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(userCred.user);
  };

  const login = async () => {
    const userCred = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(userCred.user);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🔐 Login / Register</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
    </div>
  );
}
