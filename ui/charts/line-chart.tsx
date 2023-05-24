"use client";

import { Publication } from "@/app/api/publications/publication";
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
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
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
      text: "Publications",
    },
  },
  scales: {
    y: {
      min: 0,
      stacked: true,
    },
  },
};

export function LineChart({
  title,
  publications,
}: {
  title: string;
  publications: Publication[];
}) {
  const labels = publications?.map((row) => row.period);
  const series = Object.keys(publications[0]).slice(1) as Array<
    keyof Publication
  >;
  const datasets = series.map((label) => ({
    label: label as string,
    data: publications?.map((row) => row[label] as number),
    fill: true,
  }));

  const data = {
    labels,
    datasets,
  };

  return (
    <div className={"card mt-6 w-full bg-base-100 p-6 shadow-xl"}>
      <div className={`text-xl font-semibold`}>{title}</div>

      <div className="divider mt-2"></div>
      <div className="h-full w-full bg-base-100 pb-6">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
