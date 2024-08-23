import { useState, useEffect, useCallback } from 'react';

interface UseTimerReturn {
  timeLeft: number;
  isRunning: boolean;
  startTimer: (newTime?: number) => void;
  pauseTimer: () => void;
  resetTimer: (newTime?: number) => void;
}

const useTimer = (initialTime: number, onComplete?: () => void): UseTimerReturn => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (onComplete) {
        onComplete();
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, timeLeft, onComplete]);

  const startTimer = useCallback((newTime?: number) => {
    if (newTime !== undefined) {
      setTimeLeft(newTime);
    }
    setIsRunning(true);
  },[]);

  const pauseTimer = useCallback(() => setIsRunning(false), []);

  const resetTimer = useCallback(
    (newTime?: number) => {
      setIsRunning(false);
      setTimeLeft(newTime !== undefined ? newTime : initialTime);
    },
    [initialTime]
  );

  return { timeLeft, isRunning, startTimer, pauseTimer, resetTimer };
};

export default useTimer;
