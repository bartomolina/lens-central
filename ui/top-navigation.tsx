import { Bars3Icon } from "@heroicons/react/24/solid";
import { SocialLinks } from "@/ui/social-links";
import Link from "next/link";

export function TopNavigation() {
  return (
    <div className="flex h-16 w-full justify-center">
      <nav className="navbar w-full">
        <div className="flex flex-1 md:gap-1 lg:gap-2">
          <label
            htmlFor="drawer"
            className="btn-ghost drawer-button btn-square btn lg:hidden"
          >
            <Bars3Icon className="h-6 w-6" />
          </label>
          <div className="flex items-center lg:hidden">
            <Link href={"/"}>
              <div className="inline-flex text-3xl font-bold text-primary">
                🍃
                <span className="ml-1">Lens</span>
                <span className="text-base-content">Central</span>
              </div>
            </Link>
          </div>
        </div>
        <SocialLinks />
      </nav>
    </div>
  );
}
