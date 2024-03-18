import { useRef, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState<number>(0);
  let timeRef = useRef<number | null>(null);
  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };
  const stopTimer = () => {
    clearInterval(timeRef.current!);
    timeRef.current = null;
  };
  return (
    <div className="flex flex-col justify-center gap-8 h-screen">
      <h1 className="font-extrabold text-2xl bg-blue-300 p-3 rounded-lg">
        Stop-watch component
      </h1>
      <h1 className="font-bold text-3xl">{timer}</h1>
      <div className="flex gap-4">
        <button
          className="inline-block py-1 px-4 bg-black text-white"
          onClick={startTimer}
        >
          Start
        </button>
        <button
          className="inline-block py-1 px-4 bg-red-500 text-white"
          onClick={stopTimer}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
