import { useEffect, useState } from "react";
import Dataline from "./components/Dataline";
import Graphic from "./components/Graphic";
import Header from "./components/Header";
import useValueSetter from "./hooks/useValueSetter";
import { HourlyData, StateType } from "./types";
import { Fetcher } from "./utils/functions";

function App() {
  const { parseData } = useValueSetter();
  const [daily, setDaily] = useState<StateType>({
    rate: null,
    volume: null,
  });
  const [shift1, setShift1] = useState<StateType>({
    rate: null,
    volume: null,
  });
  const [shift2, setShift2] = useState<StateType>({
    rate: null,
    volume: null,
  });
  const [shift3, setShift3] = useState<StateType>({
    rate: null,
    volume: null,
  });
  const [hourly, setHourly] = useState<HourlyData[]>([]);

  useEffect(() => {
    new Promise((resolve) => {
      setInterval(() => {
        resolve(
          Fetcher(
            parseData,
            setDaily,
            setShift1,
            setShift2,
            setShift3,
            setHourly
          )
        );
      }, 5000);
    });
  }, []);

  return (
    <div className="h-screen w-full font-sans">
      <Header />
      <Dataline daily={daily} shift_1={shift1} shift_2={shift2} shift_3={shift3} />
      <Graphic hourlyData={hourly} goal={daily.rate?.meta} />
    </div>
  );
}

export default App;
