import { FC } from "react";
import useCurrentTime from "../hooks/useCurrentTime";
import { StateType } from "../types";
import Databox from "./Databox";
import Timebox from "./Timebox";

const Dataline: FC<{ daily: StateType }> = ({
  daily,
}) => {
  const { currentDate, currentTime } = useCurrentTime();

  return (
    <div className="w-full flex p-2 mt-0.5 justify-around gap-5 h-[28%]">
      <div className="w-1/6">
        <Timebox date={currentDate} time={currentTime}/>
      </div>
      <div className="flex h-full w-4/6 justify-center items-center">
        <Databox
          title="Día"
          firstline="Volume"
          secondline="Rate"
          hierarchy="main"
        />
        <Databox
          title="Meta"
          firstline={daily.volume?.meta}
          secondline={daily.rate?.meta}
          hierarchy="secondary"
        />
        <Databox
          title="Real"
          firstline={daily.volume?.real}
          secondline={daily.rate?.real}
          hierarchy="secondary"
        />
        <Databox
          title="Delta"
          firstline={daily.volume?.delta}
          secondline={daily.rate?.delta}
          hierarchy="secondary"
        />
      </div>
    </div>
  );
};

export default Dataline;
