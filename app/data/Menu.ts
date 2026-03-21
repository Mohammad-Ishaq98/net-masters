import { MenuItem } from "@/types";

export const Menus: MenuItem[] = [
 {
    name: "Features",
    href: "/features",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      { name: "Design", desc: "Responsive design", icon: "PanelsTopLeft", href: "/features/design" },
      { name: "Management", desc: "Site control", icon: "Bolt", href: "/features/management" },
      { name: "Navigation", desc: "Link pages", icon: "PanelTop", href: "/features/navigation" },
      { name: "CMS", desc: "Management content", icon: "Database", href: "/features/cms" },
    ],
    gridCols: 2,
  },
  { name: "Pricing" },
  { name: "Contact" },
];