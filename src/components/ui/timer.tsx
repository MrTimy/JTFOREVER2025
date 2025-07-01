import { useState, useEffect } from "react";

const TARGET_DATE_KEY = "countdown_target_date";

const FIXED_TARGET_DATE = new Date(Date.UTC(2025, 7, 30, 0, 0, 0));

const getTimeLeft = (targetDate: Date) => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const stored = localStorage.getItem(TARGET_DATE_KEY);
    let targetDate: Date;
    if (stored) {
      targetDate = new Date(stored);
    } else {
      targetDate = FIXED_TARGET_DATE;
      localStorage.setItem(TARGET_DATE_KEY, targetDate.toISOString());
    }
    return getTimeLeft(targetDate);
  });

  useEffect(() => {
    const stored = localStorage.getItem(TARGET_DATE_KEY);
    let targetDate: Date;
    if (stored) {
      targetDate = new Date(stored);
    } else {
      targetDate = FIXED_TARGET_DATE;
      localStorage.setItem(TARGET_DATE_KEY, targetDate.toISOString());
    }

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
      if (targetDate.getTime() - new Date().getTime() <= 0) {
        clearInterval(interval);
        localStorage.removeItem(TARGET_DATE_KEY);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Time unit block component
  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center gap-2 w-36.5 h-36.5 rounded-lg shadow-md bg-white">
      <h2 className="text-8xl leading-20 font-normal text-primary font-lovers-quarrel">
        {value}
      </h2>
      <p className="text-xl font-cairo text-primary">{label}</p>
    </div>
  );

  return (
    <div className="flex items-center flex-col lg:flex-row justify-center gap-6 lg:gap-36 mt-4">
      <TimeBlock value={timeLeft.days} label="Days" />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
