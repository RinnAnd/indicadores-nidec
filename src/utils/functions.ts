import { asyncFunc, HourlyData, Setter, StateType } from "../types";

export async function Fetcher(
  fn: asyncFunc,
  dailySetter: Setter<StateType>,
  shift1Setter: Setter<StateType>,
  shift2Setter: Setter<StateType>,
  shift3Setter: Setter<StateType>,
  hourlySetter: Setter<HourlyData[]>
) {
  try {
    const data = await fn();
    dailySetter(data.daily);
    shift1Setter(data.shift_1);
    shift2Setter(data.shift_2);
    shift3Setter(data.shift_3);
    hourlySetter(data.hourly);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
