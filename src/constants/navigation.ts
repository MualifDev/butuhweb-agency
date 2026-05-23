import type { LucideIcon } from "lucide-react";
import { AtSign, Globe, Send } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
};

export type NavigationItem = LinkItem & {
  sectionId: string;
  routePatterns: string[];
};

export type SocialItem = LinkItem & {
  icon: LucideIcon;
};

export const mainNavigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    sectionId: "home",
    routePatterns: ["/"],
  },
  {
    label: "Layanan",
    href: "/#layanan",
    sectionId: "layanan",
    routePatterns: ["/layanan"],
  },
  {
    label: "Portfolio",
    href: "/#portfolio",
    sectionId: "portfolio",
    routePatterns: ["/portfolio"],
  },
  {
    label: "Tentang",
    href: "/#tentang",
    sectionId: "tentang",
    routePatterns: ["/tentang"],
  },
  {
    label: "Kontak",
    href: "/#kontak",
    sectionId: "kontak",
    routePatterns: ["/kontak"],
  },
];

export const primaryCta: NavigationItem = {
  label: "Konsultasi Gratis",
  href: "/#kontak",
  sectionId: "kontak",
  routePatterns: ["/kontak"],
};

export const socialLinks: SocialItem[] = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: AtSign,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Globe,
  },
  {
    label: "Email",
    href: "mailto:hello@butuhweb.id",
    icon: Send,
  },
];
