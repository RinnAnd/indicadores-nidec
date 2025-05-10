import { Service } from "../service/service";
import { HourlyData, StateType } from "../types";

const useValueSetter = () => {
  const service = new Service("http://10.13.225.20:9001/api/v1/paletization/indicators/")

  async function Daily(): Promise<StateType> {
    const data = await service.getData();
    const parsedData = JSON.parse(data);
    return {
      rate: parsedData.diario.rate,
      volume: parsedData.diario.volume,
    };
  }

  async function Monthly(): Promise<StateType> {
    const data = await service.getData();
    const parsedData = JSON.parse(data);
    return {
      rate: parsedData.mensual.rate,
      volume: parsedData.mensual.volume,
    };
  }

  async function Hourly(): Promise<HourlyData[]> {
    const data = await service.getData();
    const parsedData = JSON.parse(data);
    const hourlyDataArray: HourlyData[] = parsedData.rate_hora.map((item: any) => ({
      hour: item.hora,
      value: item.rate,
    }));
    return hourlyDataArray;
  }

  return {
    Daily,
    Monthly,
    Hourly,
  };
};

export default useValueSetter;
