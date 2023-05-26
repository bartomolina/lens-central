import { Profile } from "@/app/api/bq-data";
import { getPictureProxyURL } from "@/lib/get-picture-proxy-url";
import Image from "next/image";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export function ProfileRow({ profile }: { profile: Profile }) {
  const picture = getPictureProxyURL(profile.picture);
  return (
    <>
      <td>
        <div className="flex items-center gap-5">
          <div className="indicator">
            <div className="avatar">
              {profile.curated && (
                <span className="indicator-item">
                  <CheckBadgeIcon className="h-5 w-5 text-primary" />
                </span>
              )}
              <div className="mask mask-squircle w-12 h-12">
                <Image src={picture} width={30} height={30} alt={"Avatar"} />
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold">{profile.name}</div>
            <a
              href={`https://lenster.xyz/u/${profile.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary"
            >
              {profile.handle}
            </a>
          </div>
        </div>
      </td>
      <td>{profile.posts.toLocaleString()}</td>
      <td>{profile.mirrors.toLocaleString()}</td>
      <td>{profile.comments.toLocaleString()}</td>
      <td>{profile.collects.toLocaleString()}</td>
    </>
  );
}
