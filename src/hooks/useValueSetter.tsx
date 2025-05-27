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
      hourly: parsedData.rate_hora.map((item: any) => ({
        hour: item.hora,
        value: item.rate,
      })),
      shift_1: {
        rate: parsedData.turno1.rate,
        volume: parsedData.turno1.volume,
      },
      shift_2: {
        rate: parsedData.turno2.rate,
        volume: parsedData.turno2.volume,
      },
      shift_3: {
        rate: parsedData.turno3.rate,
        volume: parsedData.turno3.volume,
      },
    };
  }

  return {
    parseData,
  };
};

export default useValueSetter;
