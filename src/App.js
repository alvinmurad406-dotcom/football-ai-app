import React, { useState } from "react";

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sessions, setSessions] = useState(3);
  const [position, setPosition] = useState("");

  // Enkel smart kost-logik
  const calories =
    weight === ""
      ? 0
      : weight > 80
      ? 2200
      : weight > 65
      ? 2600
      : 3000;

  const protein =
    weight === ""
      ? 0
      : Math.round(weight * 2);

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 420 }}>
      <h1>⚽ Football Nutrition</h1>

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

      <h3>🥗 Your Daily Nutrition</h3>

      {weight && (
        <>
          <p>🔥 <b>Calories:</b> {calories} kcal/day</p>
          <p>💪 <b>Protein:</b> {protein} g/day</p>

          <h4>🍽 Example meals</h4>
          <ul>
            <li>Breakfast: Oats + milk + banana</li>
            <li>Lunch: Chicken, rice, vegetables</li>
            <li>Dinner: Eggs or fish + potatoes</li>
            <li>Snack: Yogurt or protein sandwich</li>
          </ul>
        </>
      )}
    </div>
  );
}
