import { FC } from "react";

interface TimeboxProps {
  date: string;
  time: string;
}

const Timebox: FC<TimeboxProps> = ({ date, time }) => {
  return (
    <div className="w-full h-full flex flex-col text-4xl font-extrabold justify-center pl-20">
      <h1 className="text-gray-400">Día & Hora</h1>
      <div className="flex flex-col text-gray-600">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Timebox;
