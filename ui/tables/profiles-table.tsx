import { ProfileData } from "@/app/api/bq-data";

import { ProfileName } from "./profile-name";
import { ProfileRow } from "./profile-row";

export function ProfilesTable({
  title,
  data,
}: {
  title: string;
  data: Array<ProfileData>;
}) {
  const columns = Object.keys(data[0]);
  const profileCols = new Set(["handle", "name", "picture", "curated"]);

  return (
    <div className={"card h-fit w-full bg-base-100 p-6 shadow-xl"}>
      <div className="flex items-center gap-2">
        <div className={`text-xl font-semibold`}>{title}</div>
      </div>
      <div className="divider mt-2" />
      <div className="w-full bg-base-100  pb-6">
        <div className="w-full overflow-x-auto">
          <table className="table-compact table w-full">
            <thead>
              <tr>
                <th className="text-xs normal-case">Profile</th>
                {columns.map(
                  (column) =>
                    !profileCols.has(column) && (
                      <th key={column} className="text-xs capitalize">
                        {column}
                      </th>
                    )
                )}
              </tr>
            </thead>
            <tbody>
              {data.map((profile) => (
                <tr key={profile.handle}>
                  <ProfileName profile={profile} />
                  <ProfileRow profile={profile} skip={profileCols} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
