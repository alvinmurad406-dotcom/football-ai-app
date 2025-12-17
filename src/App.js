import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function App() {
  const [weightData, setWeightData] = useState([
    { week: 1, weight: 80 },
    { week: 2, weight: 79.5 },
    { week: 3, weight: 79 },
    { week: 4, weight: 78.8 }
  ]);

  const [trainingData, setTrainingData] = useState([
    { week: 1, sessions: 4 },
    { week: 2, sessions: 5 },
    { week: 3, sessions: 4 },
    { week: 4, sessions: 6 }
  ]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 600 }}>
      <h1>📊 Progress Charts</h1>

      <h3>Weight over time (kg)</h3>
      <LineChart
        width={500}
        height={250}
        data={weightData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" label={{ value: "Week", position: "insideBottomRight", offset: -5 }} />
        <YAxis label={{ value: "Weight (kg)", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>

      <h3>Training sessions per week</h3>
      <LineChart
        width={500}
        height={250}
        data={trainingData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" label={{ value: "Week", position: "insideBottomRight", offset: -5 }} />
        <YAxis label={{ value: "Sessions", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sessions" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}
