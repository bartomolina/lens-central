import { LineChart } from "@/ui/charts/line-chart";

import { BQQueryEnum, getData } from "../api/get-data";

export default async function Page() {
  const momokaAdoption = await getData(BQQueryEnum.MOMOKA_ADOPTION);

  return (
    <main className="flex-1">
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LineChart
          title="Publications past 60 days"
          data={momokaAdoption}
          fill={true}
        />
      </div>
    </main>
  );
}
