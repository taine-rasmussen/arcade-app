import { useState, useEffect } from 'react';

const useGameClock = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return { timer }
}

export default useGameClock

