import { useState, useEffect } from 'react';

const useGameClock = () => {
  const [timer, setTimer] = useState(0)
  const [isPaused, setIsPaused] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setTimer((prevTimer) => prevTimer + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleTimer = () => {
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  return {
    timer,
    resetTimer,
    toggleTimer,
  }
}

export default useGameClock

