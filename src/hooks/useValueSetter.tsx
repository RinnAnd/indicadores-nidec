import { Service } from "../service/service";

const useValueSetter = () => {
  const service = new Service("http://localhost:3003/baselocal")

  async function parseData() {
    const data = await service.getData();
    const parsedData = JSON.parse(data);
    
    return {
      daily: {
        rate: parsedData.diario.rate,
        volume: parsedData.diario.volume,
      },
      monthly: {
        rate: parsedData.mensual.rate,
        volume: parsedData.mensual.volume,
      },
      hourly: parsedData.rate_hora.map((item: any) => ({
        hour: item.hora,
        value: item.rate,
      })),
    };
  }

  return {
    parseData,
  };
};

export default useValueSetter;
