import { Profile } from "@/app/api/bq-data";
import Image from "next/image";

export function Table({ profiles }: { profiles: Profile[] }) {
  return (
    <div className={"card mt-6 w-full bg-base-100 p-6 shadow-xl"}>
      <div className={`text-xl font-semibold`}>Title</div>
      <div className="divider mt-2" />
      <div className="h-full w-full bg-base-100 pb-6">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Id</th>
                <th>Created At</th>
                <th>Status</th>
                <th>Assigned To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={"/bot.svg"}
                          width={30}
                          height={30}
                          alt={"Avatar"}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Michael</div>
                      <div className="text-sm opacity-50">Lawson</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
