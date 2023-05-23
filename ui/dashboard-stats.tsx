import { getTotalProfiles } from "@/app/api/profiles/get-profiles";

export async function DashboardStats() {
  const totalProfiles = await getTotalProfiles();
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className={`stat-figure text-primary dark:text-slate-300`}>
          test
        </div>
        <div className="stat-title dark:text-slate-300">Title</div>
        <div className={`stat-value text-primary dark:text-slate-300`}>
          {totalProfiles.profiles}
        </div>
        <div
          className={"stat-desc font-bold text-green-700 dark:text-green-300"}
        >
          Description
        </div>
      </div>
    </div>
  );
}
