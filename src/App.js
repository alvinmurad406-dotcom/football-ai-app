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
      },
      {
        name: "Crossing After Overlap",
        url: "https://www.youtube.com/watch?v=J0t4kX9nF4M"
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
      },
      {
        name: "Endurance Training",
        url: "https://www.youtube.com/watch?v=QmZ5bKc7R6A"
      }
    ],
    Forward: [
      {
        name: "Finishing Drills",
        url: "https://www.youtube.com/watch?v=8p7mJcX8L5A"
      },
      {
        name: "Explosive Sprints",
        url: "https://www.youtube.com/watch?v=5n9F3kZxK1M"
      },
      {
        name: "Movement in the Box",
        url: "https://www.youtube.com/watch?v=R4nK2cZ5Z9E"
      }
    ],
    Goa
