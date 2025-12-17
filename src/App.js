import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [position, setPosition] = useState("");
  const [sessions, setSessions] = useState(3);
  const [goal, setGoal] = useState("");

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 400 }}>
      <h1>⚽ My Football Profile</h1>

      <label>Name</label><br />
      <input value={name} onChange={e => setName(e.target.value)} /><br /><br />

      <label>Age</label><br />
      <input type="number" value={age} onChange={e => setAge(e.target.value)} /><br /><br />

      <label>Height (cm)</label><br />
      <input type="number" value={height} onChange={e => setHeight(e.target.value)} /><br /><br />

      <label>Weight (kg)</label><br />
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)} /><br /><br />

      <label>Position</label><br />
      <select value={position} onChange={e => setPosition(e.target.value)}>
        <option value="">Select</option>
        <option>Defender</option>
        <option>Midfielder</option>
        <option>Forward</option>
        <option>Goalkeeper</option>
      </select><br /><br />

      <label>Trainings per week</label><br />
      <input
        type="number"
        value={sessions}
        onChange={e => setSessions(e.target.value)}
      /><br /><br />

      <label>Personal goal</label><br />
      <input value={goal} onChange={e => setGoal(e.target.value)} /><br /><br />

      <h3>📊 Your Profile</h3>
      <p><b>Name:</b> {name}</p>
      <p><b>Age:</b> {age}</p>
      <p><b>Height:</b> {height} cm</p>
      <p><b>Weight:</b> {weight} kg</p>
      <p><b>Position:</b> {position}</p>
      <p><b>Trainings/week:</b> {sessions}</p>
      <p><b>Goal:</b> {goal}</p>
    </div>
  );
}
