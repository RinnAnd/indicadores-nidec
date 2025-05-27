import { FC } from "react";
import { StateType } from "../types";
import Databox from "./Databox";

const Dataline: FC<{
  daily: StateType;
  shift_1: StateType;
  shift_2: StateType;
  shift_3: StateType;
}> = ({ shift_1, shift_2, shift_3 }) => {
  return (
    <div className="w-full flex p-2 mt-0.5 justify-around gap-5 h-[28%]">
      <div className="flex h-full w-full justify-center items-center gap-2">
        <div className="h-full flex justify-end w-1/9 flex-col">
          <Databox
            title="Día"
            firstline="Volume"
            secondline="Rate"
            hierarchy="main"
          />
        </div>
        <div className="h-full w-2/7 flex flex-col">
          <h1 className="text-4xl font-semibold text-nidec-green">Turno 1</h1>
          <div className="w-full flex h-full">
            <Databox
              title="Meta"
              firstline={shift_1.volume?.meta}
              secondline={shift_1.rate?.meta}
              hierarchy="secondary"
            />
            <Databox
              title="Real"
              firstline={shift_1.volume?.real}
              secondline={shift_1.rate?.real}
              hierarchy="secondary"
            />
            <Databox
              title="Delta"
              firstline={shift_1.volume?.delta}
              secondline={shift_1.rate?.delta}
              hierarchy="secondary"
            />
          </div>
        </div>
        <div className="h-full w-2/7 flex flex-col">
          <h1 className="text-4xl font-semibold text-nidec-green">Turno 2</h1>
          <div className="w-full flex h-full">
            <Databox
              title="Meta"
              firstline={shift_2.volume?.meta}
              secondline={shift_2.rate?.meta}
              hierarchy="secondary"
            />
            <Databox
              title="Real"
              firstline={shift_2.volume?.real}
              secondline={shift_2.rate?.real}
              hierarchy="secondary"
            />
            <Databox
              title="Delta"
              firstline={shift_2.volume?.delta}
              secondline={shift_2.rate?.delta}
              hierarchy="secondary"
            />
          </div>
        </div>
        <div className="h-full w-2/7 flex flex-col">
          <h1 className="text-4xl font-semibold text-nidec-green">Turno 3</h1>
          <div className="w-full flex h-full">
            <Databox
              title="Meta"
              firstline={shift_3.volume?.meta}
              secondline={shift_3.rate?.meta}
              hierarchy="secondary"
            />
            <Databox
              title="Real"
              firstline={shift_3.volume?.real}
              secondline={shift_3.rate?.real}
              hierarchy="secondary"
            />
            <Databox
              title="Delta"
              firstline={shift_3.volume?.delta}
              secondline={shift_3.rate?.delta}
              hierarchy="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataline;
