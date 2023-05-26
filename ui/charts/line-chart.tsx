"use client";

import type { PeriodicData } from "@/app/api/bq-data";
import {
  CategoryScale,
  Chart as ChartJS,
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

export function LineChart({
  title,
  subtitle,
  data,
  fill = false,
}: {
  title: string;
  subtitle?: string;
  data: PeriodicData;
  fill?: boolean;
}) {
  if (data.length === 0) return <></>;

  const labels = data?.map((row) => row.period);
  const series = Object.keys(data[0]).slice(1) as Array<keyof typeof data>;
  const datasets = series.map((label) => ({
    label: label as string,
    data: data?.map((row) => row[label] as number),
    fill,
    hidden: false,
  }));

  const lenster = datasets.findLast((row) => row.label === "lenster");
  if (lenster) {
    lenster.hidden = true;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Publications",
      },
    },
    scales: {
      y: {
        min: 0,
        stacked: fill,
      },
    },
  };

  return (
    <div className={"card mt-6 w-full bg-base-100 p-6 shadow-xl"}>
      <div className="flex items-center justify-between">
        <div className={`text-xl font-semibold`}>{title}</div>
        <div className={`text-xs`}>{subtitle}</div>
      </div>
      <div className="divider mt-2" />
      <div className="h-full w-full bg-base-100 pb-6">
        <Line options={options} data={{ labels, datasets }} />
      </div>
    </div>
  );
}
