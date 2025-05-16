import { asyncFunc, HourlyData, Setter, StateType } from "../types";

export async function Fetcher(
  fn: asyncFunc,
  dailySetter: Setter<StateType>,
  hourlySetter: Setter<HourlyData[]>
) {
  try {
    const data = await fn();
    dailySetter(data.daily);
    hourlySetter(data.hourly);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
