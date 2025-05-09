import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 64,
    hours: 22,
    minutes: 45,
    seconds: 11,
  });

  useEffect(() => {
    // Calculate the target date (current time + time left)
    const now = new Date();
    const targetDate = new Date(
      now.getTime() +
        timeLeft.days * 24 * 60 * 60 * 1000 +
        timeLeft.hours * 60 * 60 * 1000 +
        timeLeft.minutes * 60 * 1000 +
        timeLeft.seconds * 1000
    );

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
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
