import { getPublications } from "@/app/api/publications/get-publications";
import { Publication } from "@/app/api/publications/publication";
import { LineChart } from "@/ui/charts/line-chart";
import { DashboardStats } from "@/ui/dashboard-stats";

export default async function Page() {
  const publications = await getPublications();

  const labels = publications?.map((row) => row.day);
  const series = Object.keys(publications[0]).slice(1) as Array<
    keyof Publication
  >;
  const datasets = series.map((label) => ({
    label: label as string,
    data: publications?.map((row) => row[label] as number),
  }));

  const data = {
    labels,
    datasets,
  };

  return (
    <main className="flex-1 px-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* @ts-expect-error Server Component */}
        <DashboardStats />
        {/* @ts-expect-error Server Component */}
        <DashboardStats />
        {/* @ts-expect-error Server Component */}
        <DashboardStats />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LineChart data={data} />
        <LineChart data={data} />
      </div>
    </main>
  );
}
