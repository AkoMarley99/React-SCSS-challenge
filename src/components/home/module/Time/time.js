import React, { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("mtn"));

  useEffect(() => {
    const time = () => {
      const event = new Date();
      setTime(event.toLocaleTimeString("mtn"));
    };
    const intervalId = setInterval(time, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="App">
      <div className="time">{time}</div>
    </div>
  );
}
