import React, { useState } from "react";

export default function App() {
  const [position, setPosition] = useState("");

  const trainingVideos = {
    Defender: [
      {
        name: "1v1 Defending",
        url: "https://www.youtube.com/watch?v=9JrjJ0e8P6g"
      },
      {
        name: "Defensive Positioning",
        url: "https://www.youtube.com/watch?v=2kZzFZy5H1g"
      }
    ],
    Midfielder: [
      {
        name: "Ball Mastery",
        url: "https://www.youtube.com/watch?v=1F9c9jY6k8E"
      },
      {
        name: "Scanning & Passing",
        url: "https://www.youtube.com/watch?v=7mKXc4XzZ9g"
      }
    ],
    Forward: [
      {
        name: "Finishing Drills",
        url: "https://www.youtube.com/watch?v=8p7mJcX8L5A"
      },
      {
        name: "Movement in the Box",
        url: "https://www.youtube.com/watch?v=R4nK2cZ5Z9E"
      }
    ],
    Goalkeeper: [
      {
        name: "Reaction Saves",
        url: "https://www.youtube.com/watch?v=3Zk8J5mKc9M"
      },
      {
        name: "Footwork Drills",
        url: "https://www.youtube.com/watch?v=7K9cZ1M8F5A"
      }
    ]
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 500 }}>
      <h1>🎥 Football Training Videos</h1>

      <label>Choose your position</label>
      <br />
      <select
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      >
        <option value="">Select</option>
        <option>Defender</option>
        <option>Midfielder</option>
        <option>Forward</option>
        <option>Goalkeeper</option>
      </select>

      <br />
      <br />

      {position && (
        <div>
          <h3>{position} Training</h3>
          <ul>
            {trainingVideos[position].map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  ▶️ {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
