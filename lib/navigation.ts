export type NavItem = {
  name: string;
  slug: string;
  icon: string;
};

export const navigation: { name: string; items: NavItem[] }[] = [
  {
    name: "General",
    items: [
      {
        name: "General",
        slug: "",
        icon: "/dashboard.svg",
      },
      {
        name: "Momoka adoption",
        slug: "momoka",
        icon: "/momoka.png",
      },
      {
        name: "Trending",
        slug: "trending",
        icon: "/trending.svg",
      },
    ],
  },
  {
    name: "Apps",
    items: [
      {
        name: "Lenster",
        slug: "lenster",
        icon: "/lenster.svg",
      },
      {
        name: "Orb",
        slug: "orb",
        icon: "/orb.jpeg",
      },
    ],
  },
];
