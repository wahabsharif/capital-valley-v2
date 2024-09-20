// src/data/navData.ts

interface NavItem {
  name: string;
  href: string;
}

export const navData: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];
