import { asyncFunc, Setter } from "../types";

export async function Fetcher<T>(fn: asyncFunc<T>, setter: Setter<T>) {
  try {
    const data = await fn();
    setter(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
