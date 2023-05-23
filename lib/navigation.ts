export type NavItem = {
  name: string;
  slug: string;
  description?: string;
};

export const navigation: { name: string; items: NavItem[] }[] = [
  {
    name: "General",
    items: [
      {
        name: "General",
        slug: "general",
      },
    ],
  },
  {
    name: "Apps",
    items: [
      {
        name: "Lenster",
        slug: "lenster",
      },
      {
        name: "Orb",
        slug: "orb",
      },
    ],
  },
];
