import { BQQueryEnum, getData } from "@/app/api/get-data";
import { Card } from "@/ui/charts/card";
import { LineChart } from "@/ui/charts/line-chart";
import { ProfilesTable } from "@/ui/tables/profiles-table";

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
  const profilesNew = await getData(BQQueryEnum.PROFILES_NEW);

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
        />
        <LineChart title="🥈 Other social Apps" data={publicationsAppOther} />
        <LineChart title="🛠️ Utilities" data={publicationsAppUtils} />
        <LineChart title="New Profiles" data={profilesNew} />
      </div>
      <div className="mt-4 grid grid-cols-1">
        {/* @ts-expect-error Server Component */}
        <ProfilesTable />
      </div>
    </main>
  );
}
