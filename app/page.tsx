import { BQQueryEnum, getData } from "@/app/api/get-data";
import { Card } from "@/ui/charts/card";
import { LineChart } from "@/ui/charts/line-chart";
import { DuneChart } from "@/ui/dune-chart";
import { ProfilesTable } from "@/ui/tables/profiles-table";

import Insights from "./insights.mdx";

export default async function Page() {
  const totals = await getData(BQQueryEnum.TOTALS);
  const publicationsYear = await getData(BQQueryEnum.PUBLICATIONS_YEAR);
  const publicationsMonth = await getData(BQQueryEnum.PUBLICATIONS_MONTH);
  const publicationsAppTop = await getData(BQQueryEnum.PUBLICATIONS_APP_TOP);
  const publicationsAppOther = await getData(
    BQQueryEnum.PUBLICATIONS_APP_OTHER
  );
  const publicationsAppUtils = await getData(
    BQQueryEnum.PUBLICATIONS_APP_UTILS
  );
  const lensterDominance = await getData(BQQueryEnum.LENSTER_DOMINANCE);
  const profilesNew = await getData(BQQueryEnum.PROFILES_NEW);
  const profilesTop = await getData(BQQueryEnum.PROFILES_POSTS);
  const profilesLatest = await getData(BQQueryEnum.PROFILES_LATEST);

  return (
    <main className="flex-1">
      <div className="collapse-plus collapse mb-4 w-full rounded bg-base-100">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">💡 Insights</div>
        <div className="collapse-content prose max-w-xl">
          <Insights />
        </div>
      </div>
      <h2 className="mt-8 text-sm font-medium text-gray-400">Publications</h2>
      <div className="divider mb-2 mt-0.5" />
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
      <h2 className="mt-8 text-sm font-medium text-gray-400">Apps</h2>
      <div className="divider mb-2 mt-0.5" />
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LineChart
          title="Publications past year"
          data={publicationsYear}
          fill={true}
        />
        <LineChart
          title="Publications past 30 days"
          data={publicationsMonth}
          fill={true}
        />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LineChart
          title="🥇 Top social Apps"
          subtitle="Past 30 days, Lenster hidden by default"
          data={publicationsAppTop}
          hide="lenster"
        />
        <LineChart title="🥈 Other social Apps" data={publicationsAppOther} />
        <LineChart title="🛠️ Utilities" data={publicationsAppUtils} />
        <LineChart
          title="🏆 Lenster dominance"
          data={lensterDominance}
          max={100}
        />
      </div>
      <h2 className="mt-8 text-sm font-medium text-gray-400">Profiles</h2>
      <div className="divider mb-2 mt-0.5" />
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex-col space-y-6">
          {/* @ts-expect-error Server Component */}
          <Card title="Profiles" value={totals[0]?.profiles} icon="👥" />
          <LineChart title="New Profiles" data={profilesNew} />
          <ProfilesTable data={profilesLatest} title="Latest profiles" />
          <DuneChart
            title="Floor price"
            url="https://dune.com/embeds/2517185/4142977"
          />
        </div>
        <ProfilesTable data={profilesTop} title="Top profiles" />
      </div>
    </main>
  );
}
