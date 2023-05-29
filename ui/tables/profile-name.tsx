import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { ProfileData } from "@/app/api/bq-data";
import { getPictureProxyURL } from "@/lib/get-picture-proxy-url";
import { truncate } from "@/lib/truncate";

export function ProfileName({ profile }: { profile: ProfileData }) {
  const picture = getPictureProxyURL(profile.picture);
  return (
    <td className="py-3">
      <div className="flex items-center gap-5">
        <div className="indicator">
          <div className="avatar">
            {profile.curated && (
              <span className="indicator-item">
                <CheckBadgeIcon className="h-5 w-5 text-primary" />
              </span>
            )}
            <div className="mask mask-squircle h-12 w-12">
              <Image src={picture} width={30} height={30} alt={"Avatar"} />
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold">{truncate(profile.name, 15)}</div>
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
  );
}
