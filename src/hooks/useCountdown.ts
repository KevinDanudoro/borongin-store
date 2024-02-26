import { useEffect, useState } from "react";

const targetDate = new Date("2024-03-01T00:00:00");

const useCountdown = () => {
  const [countdown, setCountdown] = useState(
    targetDate.getTime() - new Date().getTime()
  );

  useEffect(() => {
    if (!countdown) return;

    const interval = setInterval(() => {
      setCountdown((_) => {
        const countdownTime = targetDate.getTime() - new Date().getTime();
        return countdownTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const secondToMillis = 1000;
  const minutesToMillis = 1000 * 60;
  const hoursToMillis = 1000 * 60 * 60;
  const dayToMillis = 1000 * 60 * 60 * 24;

  const minutesRemains = countdown % minutesToMillis;
  const hoursRemains = countdown % hoursToMillis;
  const dayRemains = countdown % dayToMillis;

  const days = Math.floor(countdown / dayToMillis);
  const hours = Math.floor(dayRemains / hoursToMillis);
  const minutes = Math.floor(hoursRemains / minutesToMillis);
  const seconds = Math.floor(minutesRemains / secondToMillis);

  return { days, hours, minutes, seconds };
};

export default useCountdown;
