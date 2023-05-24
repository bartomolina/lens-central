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
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍃</text></svg>"
        ></link>
      </head>
      <body className={inter.className}>
        <div className="drawer-mobile drawer bg-base-100">
          <input id="drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-neutral-50 px-1 md:px-5 lg:px-14">
            <TopNavigation />
            <div className="pb-16 pt-12">{children}</div>
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
