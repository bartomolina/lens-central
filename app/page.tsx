import { BQQueryEnum, getData } from "@/app/api/get-data";
import { Card } from "@/ui/charts/card";
import { LineChart } from "@/ui/charts/line-chart";
import { Table } from "@/ui/charts/table";

import { Publications } from "./api/bq-data";

export default async function Page() {
  const totals = await getData(BQQueryEnum.TOTALS);
  const publicationsWeek = (await getData(
    BQQueryEnum.PUBLICATIONS_MONTH
  )) as Publications[];
  const publicationsYear = (await getData(
    BQQueryEnum.PUBLICATIONS_YEAR
  )) as Publications[];
  const publicationsApp = (await getData(
    BQQueryEnum.PUBLICATIONS_APP
  )) as Publications[];
  const profiles = await getData(BQQueryEnum.PROFILES_POSTS, false);

  console.log(profiles);

  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* @ts-expect-error Server Component */}
        <Card title="Posts" value={totals[0]?.posts} icon="📝" />
        {/* @ts-expect-error Server Component */}
        <Card title="Comments" value={totals[0]?.comments} icon="🗣️" />
        {/* @ts-expect-error Server Component */}
        <Card title="Mirrors" value={totals[0]?.mirrors} icon="🔄" />
        {/* @ts-expect-error Server Component */}
        <Card title="Collects" value={totals[0]?.collects} icon="📸" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LineChart
          title="Publications last year"
          publications={publicationsYear}
          fill={true}
        />
        <LineChart
          title="Publications last 30 days"
          publications={publicationsWeek}
          fill={true}
        />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Table />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6">
        <LineChart
          title="Publications by App (last 30 days)"
          publications={publicationsApp}
          fill={false}
        />
      </div>
    </main>
  );
}
