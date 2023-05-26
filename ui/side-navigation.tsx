"use client";

import Link from "next/link";
import Image from "next/image";
import { navigation, type NavItem } from "@/lib/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

export function SideNav() {
  return (
    <aside className="w-72 bg-neutral-100">
      <div className="flex items-center gap-2 px-4 py-7">
        <Link href={"/"}>
          <div className="inline-flex text-3xl font-bold text-primary">
            🍃
            <span className="ml-1">Lens</span>
            <span className="text-base-content font-normal">Central</span>
          </div>
        </Link>
        <span className="font-mono text-xs text-neutral-400">0.0.1</span>
      </div>
      <div className="h-5" />
      <div className="space-y-6">
        {navigation.map((section) => (
          <ul key={section.name} className="menu">
            <li className="menu-title">
              <span>{section.name}</span>
            </li>
            {section.items.map((item) => (
              <li key={item.name}>
                <GlobalNavItem key={item.slug} item={item} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

function GlobalNavItem({ item }: { item: NavItem }) {
  const segment = useSelectedLayoutSegment();
  const isActive =
    item.slug === segment || (item.slug === "" && segment === null);

  return (
    <Link
      href={`/${item.slug}`}
      className={clsx({
        "font-semibold": isActive,
      })}
    >
      <Image src={item.icon} alt={item.name} width={20} height={20} />
      {item.name}
      {isActive && (
        <span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary" />
      )}
    </Link>
  );
}
