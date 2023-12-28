import React, { useEffect, useState } from "react";

export const QuestionTimer = ({ onTimeout, timeOut, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);
  useEffect(() => {
    const timeoutId = setTimeout(onTimeout, timeOut);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [onTimeout, timeOut]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevState) => prevState - 100);
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeOut}
      value={remainingTime}
      className={mode}
    />
  );
};
