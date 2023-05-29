import { LineChart } from "@/ui/charts/line-chart";
import { DuneChart } from "@/ui/dune-chart";

import { BQQueryEnum, getData } from "../api/get-data";
import Insights from "./insights.mdx";

export default async function Page() {
  const momokaAdoption = await getData(BQQueryEnum.MOMOKA_ADOPTION);

  return (
    <main className="flex-1">
      <div className="collapse-plus collapse mb-4 w-full rounded bg-base-100">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">💡 Insights</div>
        <div className="collapse-content prose max-w-xl">
          <Insights />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6">
        <LineChart
          title="Publications past 60 days"
          data={momokaAdoption}
          fill={true}
        />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DuneChart
          title="Dispatchers fees per day"
          url="https://dune.com/embeds/2512913/4135995"
        />
        <DuneChart
          title="Broadcasted transactions per day"
          url="https://dune.com/embeds/2512913/4136409"
        />
      </div>
    </main>
  );
}
