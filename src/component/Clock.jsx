import React, { useState, useEffect } from "react";
import StarryBackground from "./StarryBackground";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="clock-container">
      <StarryBackground /> {/* Компонент с фоном, который не обновляется */}
      <div className="digital-clock">
        <span className="hours time">{formatTime(time.getHours())}</span>:
        <span className="minutes time">{formatTime(time.getMinutes())}</span>:
        <span className="seconds time">{formatTime(time.getSeconds())}</span>
      </div>
    </div>
  );
};

export default Clock;
