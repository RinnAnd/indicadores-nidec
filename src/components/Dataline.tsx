import { FC } from "react";
import useCurrentTime from "../hooks/useCurrentTime";
import { StateType } from "../types";
import Databox from "./Databox";

const Dataline: FC<{ daily: StateType; monthly: StateType }> = ({
  daily,
  monthly,
}) => {
  const { currentDate, currentTime } = useCurrentTime();

  return (
    <div className="w-full flex p-2 mt-0.5 justify-center gap-5">
      <div>
        <Databox
          title="Día & Hora"
          firstline={currentDate}
          secondline={currentTime}
          hierarchy="main"
        />
      </div>
      <div className="flex">
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
      <div className="flex">
        <Databox
          title="Mes"
          firstline="Volume"
          secondline="Rate"
          hierarchy="main"
        />
        <Databox
          title="Meta"
          firstline={monthly.volume?.meta}
          secondline={monthly.rate?.meta}
          hierarchy="secondary"
        />
        <Databox
          title="Real"
          firstline={monthly.volume?.real}
          secondline={monthly.rate?.real}
          hierarchy="secondary"
        />
        <Databox
          title="Delta"
          firstline={monthly.volume?.delta}
          secondline={monthly.rate?.delta}
          hierarchy="secondary"
        />
      </div>
    </div>
  );
};

export default Dataline;
