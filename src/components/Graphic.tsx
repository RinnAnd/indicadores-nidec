import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { FC } from "react";
import { Bar } from "react-chartjs-2";
import { HourlyData } from "../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const hours = Array.from(
  { length: 24 },
  (_, i) => i.toString().padStart(2, "0") + ":00"
);

const GOAL_VALUE = 350;

const Graphic: FC<{ hourlyData: HourlyData[] }> = ({ hourlyData }) => {
  const data = {
    labels: hours,
    datasets: [
      {
        label: "Hourly Values",
        data: hours.map((_, hour) => {
          const entry = hourlyData.find((d) => d.hour === hour);
          return entry?.value || 0;
        }),
        backgroundColor: "#019900",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "24-Hour Data",
      },
      annotation: {
        annotations: [
          {
            type: "line" as const,
            yMin: GOAL_VALUE,
            yMax: GOAL_VALUE,
            borderColor: "rgb(255, 0, 0)",
            borderWidth: 4,
            label: {
              display: true,
              content: `Meta: ${GOAL_VALUE}`,
              position: "end" as const,
            },
          },
        ],
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-[70%] flex justify-center items-center p-10">
      <Bar options={options} data={data} className="w-full h-full" />
    </div>
  );
};

export default Graphic;
