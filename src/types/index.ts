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

export type asyncFunc = () => Promise<{
  daily: {
    rate: any;
    volume: any;
  };
  shift_1: {
    rate: any;
    volume: any;
  }
  shift_2: {
    rate: any;
    volume: any;
  }
  shift_3: {
    rate: any;
    volume: any;
  }
  hourly: any;
}>;

export type Setter<T> = (value: React.SetStateAction<T>) => void;
