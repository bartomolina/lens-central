import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { SideNav } from "@/ui/side-navigation";
import { TopNavigation } from "@/ui/top-navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lens Central",
  description: "Lens Central",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="lemonade" lang="en">
      <body className={inter.className}>
        <div className="drawer-mobile drawer bg-base-100">
          <input id="drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <TopNavigation />
            <div className="px-6 pb-16 xl:pr-2">{children}</div>
          </div>
          <div className="drawer-side">
            <label htmlFor="drawer" className="drawer-overlay" />
            <SideNav />
          </div>
        </div>
      </body>
    </html>
  );
}
