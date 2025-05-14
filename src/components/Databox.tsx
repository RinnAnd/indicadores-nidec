import { FC } from "react";

interface DataboxProps {
  title: string;
  firstline?: string | number;
  secondline?: string | number;
  hierarchy: "main" | "secondary";
}

const Databox: FC<DataboxProps> = ({
  title,
  firstline,
  secondline,
  hierarchy,
}) => {
  return (
    <div
      className={`${
        hierarchy == "main" ? "w-[15rem]" : "w-[11rem]"
      } flex flex-col rounded-md h-[11rem] border p-7 text-2xl font-extrabold border-slate-200`}
    >
      <div className="text-gray-400 w-full">
        {title}
      </div>
      <div className="flex flex-col justify-around h-full">
        <span
          className={`${
            title == "Delta" && Number(firstline) < 0
              ? "text-red-500"
              : title == "Delta" && Number(firstline) >= 0
              ? "text-green-700"
              : "text-gray-600"
          }`}
        >
          {firstline}
        </span>
        <span
          className={`${
            title == "Delta" && Number(secondline) < 0
              ? "text-red-500"
              : title == "Delta" && Number(firstline) >= 0
              ? "text-green-700"
              : "text-gray-600"
          }`}
        >
          {secondline}
        </span>
      </div>
    </div>
  );
};

export default Databox;
