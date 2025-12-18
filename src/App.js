import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./Login";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>⚽ Football AI App</h1>
      <p>Logged in as: {user.email}</p>

      <button onClick={() => signOut(auth)}>Logout</button>

      <hr />

      <h3>✅ App unlocked</h3>
      <p>Här kopplar vi nu:</p>
      <ul>
        <li>Profil</li>
        <li>Vikt</li>
        <li>Diagram</li>
        <li>AI-träning</li>
      </ul>
    </div>
  );
}
