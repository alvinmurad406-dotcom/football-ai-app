import React, { useState } from "react";

export default function App() {
  const [position, setPosition] = useState("");
  const [sessions, setSessions] = useState(3);

  const getTrainingPlan = () => {
    if (!position) return [];

    const plans = {
      Defender: [
        "1v1 defending drills",
        "Sprint & recovery runs",
        "Crossing after overlap",
        "Positioning & line control"
      ],
      Midfielder: [
        "Ball mastery",
        "Endurance runs",
        "Passing & scanning",
        "Turn & play drills"
      ],
      Forward: [
        "Finishing drills",
        "Explosive sprints",
        "First touch shooting",
        "Movement in the box"
      ],
      Goalkeeper: [
        "Reflex saves",
        "Footwork & positioning",
        "Distribution",
        "Reaction drills"
      ]
    };

    return plans[position].slice(0, sessions);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 450 }}>
      <h1>⚽ Smart Football Training</h1>

      <label>Position</label><br />
      <select value={position} onChange={e => setPosition(e.target.value)}>
        <option value="">Select</option>
        <option>Defender</option>
        <option>Midfielder</option>
        <option>Forward</option>
        <option>Goalkeeper</option>
      </select>

      <br /><br />

      <label>Extra training sessions per week</label><br />
      <input
        type="number"
        min="1"
        max="6"
        value={sessions}
        onChange={e => setSessions(e.target.value)}
      />

      <h3>📋 Your Extra Training Plan</h3>

      <ul>
        {getTrainingPlan().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {position && (
        <p style={{ fontSize: 12, opacity: 0.7 }}>
          Plan adjusted for a {position} training {sessions} extra times per week.
        </p>
      )}
    </div>
  );
}
