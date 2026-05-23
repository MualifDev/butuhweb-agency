import type { LucideIcon } from "lucide-react";
import {
  ChartColumnIncreasing,
  Code,
  Database,
  Layers,
  Layout,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  Rocket,
  ShieldCog,
  Smartphone,
  Wrench,
} from "lucide-react";

export type StatItem = {
  value: string;
  label: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  metric: string;
};

export type TechItem = {
  name: string;
  description: string;
};

export const stats: StatItem[] = [
  {
    value: "20+",
    label: "Project digital",
    description: "Dari landing page, company profile, sampai sistem internal.",
  },
  {
    value: "4-8",
    label: "Minggu produksi",
    description: "Timeline ringkas untuk mayoritas website dan MVP bisnis.",
  },
  {
    value: "99%",
    label: "Responsive ready",
    description: "Dibangun untuk tampilan desktop, tablet, dan mobile.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Website Company Profile",
    description:
      "Website profesional untuk membangun kredibilitas brand, layanan, dan kepercayaan calon pelanggan.",
    icon: MonitorSmartphone,
  },
  {
    title: "Web App Development",
    description:
      "Aplikasi web custom untuk operasional, pemesanan, membership, hingga workflow internal.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang bersih, mudah dipakai, dan selaras dengan tujuan bisnis.",
    icon: Palette,
  },
  {
    title: "Dashboard System",
    description:
      "Dashboard admin dan analitik untuk memantau data penting dalam satu tempat.",
    icon: LayoutDashboard,
  },
  {
    title: "Landing Page",
    description:
      "Halaman kampanye yang fokus pada konversi, copywriting jelas, dan loading cepat.",
    icon: Rocket,
  },
  {
    title: "Maintenance & Support",
    description:
      "Perawatan teknis, optimasi, pembaruan konten, dan dukungan setelah launch.",
    icon: Wrench,
  },
];

export const portfolioProjects: PortfolioItem[] = [
  {
    title: "Nusantara Supply Portal",
    category: "Web App",
    description:
      "Portal vendor dan katalog produk B2B untuk mempercepat proses permintaan penawaran.",
    metric: "42% faster inquiry",
  },
  {
    title: "Klinik Satu Hati",
    category: "Company Profile",
    description:
      "Website klinik dengan struktur layanan, artikel edukasi, dan alur konsultasi yang jelas.",
    metric: "3.1x more leads",
  },
  {
    title: "Orbit Finance Dashboard",
    category: "Dashboard",
    description:
      "Dashboard internal untuk membaca performa cabang, transaksi, dan laporan operasional.",
    metric: "12 data views",
  },
];

export const techStack: TechItem[] = [
  {
    name: "Next.js",
    description: "Frontend production",
  },
  {
    name: "React",
    description: "Interactive UI",
  },
  {
    name: "TypeScript",
    description: "Type-safe code",
  },
  {
    name: "Laravel",
    description: "Backend API",
  },
  {
    name: "PostgreSQL",
    description: "Reliable database",
  },
  {
    name: "Tailwind CSS",
    description: "Design system",
  },
  {
    name: "Docker",
    description: "Deployment workflow",
  },
];

export const heroHighlights = [
  {
    label: "Strategy",
    value: "Discovery",
    icon: Layers,
  },
  {
    label: "Design",
    value: "UI System",
    icon: Layout,
  },
  {
    label: "Build",
    value: "Scalable",
    icon: ShieldCog,
  },
  {
    label: "Data",
    value: "Measured",
    icon: Database,
  },
  {
    label: "Growth",
    value: "Optimized",
    icon: ChartColumnIncreasing,
  },
  {
    label: "Mobile",
    value: "Responsive",
    icon: Smartphone,
  },
];
