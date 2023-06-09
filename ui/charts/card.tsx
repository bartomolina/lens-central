export async function Card({
  title,
  icon,
  value,
}: {
  title: string;
  icon: string;
  value: number;
}) {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div
          className={`stat-figure text-3xl text-primary dark:text-slate-300`}
        >
          {icon}
        </div>
        <div className="stat-title dark:text-slate-300">{title}</div>
        <div className={`stat-value text-3xl text-primary dark:text-slate-300`}>
          {value?.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
