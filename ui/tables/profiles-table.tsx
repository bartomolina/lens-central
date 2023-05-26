import { Profile } from "@/app/api/bq-data";
import { ProfileRow } from "./profile-row";
import { BQQueryEnum, getData } from "@/app/api/get-data";

export async function ProfilesTable() {
  const profiles = (await getData(BQQueryEnum.PROFILES_POSTS)) as Profile[];

  return (
    <div className={"card mt-6 w-full bg-base-100 p-6 shadow-xl"}>
      <div className="flex items-center gap-2">
        <div className={`text-xl font-semibold`}>Top profiles</div>
      </div>
      <div className="divider mt-2" />
      <div className="h-full w-full bg-base-100 pb-6">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Posts</th>
                <th>Mirrors</th>
                <th>Comments</th>
                <th>Collects</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => (
                <tr key={profile.handle}>
                  <ProfileRow profile={profile} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
