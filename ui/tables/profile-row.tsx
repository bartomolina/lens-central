import { ProfileData } from "@/app/api/bq-data";

export function ProfileRow({
  profile,
  skip,
}: {
  profile: ProfileData;
  skip?: Set<string>;
}) {
  const profileData = skip
    ? Object.fromEntries(
        Object.entries(profile).filter(([key]) => !skip.has(key))
      )
    : profile;
  const profileCols = new Set(["handle", "name", "picture", "curated"]);
  return (
    <>
      {Object.keys(profileData).map(
        (column: string) =>
          !profileCols.has(column) && (
            <td key={column}>{profile[column].toLocaleString()}</td>
          )
      )}
    </>
  );
}
