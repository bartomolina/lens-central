"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  type ChartData,
  Colors,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Publications last 7 days",
    },
  },
};

export function LineChart({ data }: { data: ChartData<"line"> }) {
  return (
    <div className={"card mt-6 w-full bg-base-100 p-6 shadow-xl"}>
      <div className={`text-xl font-semibold`}>Chart</div>

      <div className="divider mt-2"></div>
      <div className="h-full w-full bg-base-100 pb-6">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
