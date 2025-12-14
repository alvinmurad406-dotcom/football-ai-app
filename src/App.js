import React, { useState } from "react";

export default function App() {
  const [position, setPosition] = useState("");
  const [sessions, setSessions] = useState(3);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>⚽ Football AI Trainer</h1>

      <label>Position:</label><br />
      <select value={position} onChange={e => setPosition(e.target.value)}>
        <option value="">Select</option>
        <option>Defender</option>
        <option>Midfielder</option>
        <option>Forward</option>
        <option>Goalkeeper</option>
      </select>

      <br /><br />

      <label>Training sessions per week:</label><br />
      <input
        type="number"
        value={sessions}
        onChange={e => setSessions(e.target.value)}
      />

      <p>
        You are a <b>{position || "player"}</b> training{" "}
        <b>{sessions}</b> times per week.
      </p>
    </div>
  );
}
