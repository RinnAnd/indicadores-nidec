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
  const [monthly, setMonthly] = useState<StateType>({
    rate: null,
    volume: null,
  });
  const [hourly, setHourly] = useState<HourlyData[]>([]);

  useEffect(() => {
    new Promise((resolve) => {
      setInterval(() => {
        resolve(Fetcher(parseData, setDaily, setMonthly, setHourly));
      }, 5000);
    });
  }, []);

  return (
    <div className="h-screen w-full font-sans">
      <Header />
      <Dataline daily={daily} monthly={monthly} />
      <Graphic hourlyData={hourly} />
    </div>
  );
}

export default App;
