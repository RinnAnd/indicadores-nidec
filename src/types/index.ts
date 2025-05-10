export type HourlyData = {
  hour: number;
  value: number;
};

export type Meassurement = {
  delta: number;
  meta: number;
  real: number;
};

export type StateType = {
  rate: Meassurement | null;
  volume: Meassurement | null;
};

export type asyncFunc<T> = () => Promise<T>

export type Setter<T> = (value: React.SetStateAction<T>) => void
