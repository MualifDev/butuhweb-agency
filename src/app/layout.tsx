import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { SiteLayout } from "@/components/layout/site-layout";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "butuh.Web - Software House Modern Indonesia",
  description:
    "Membantu bisnis berkembang melalui website dan aplikasi modern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={geist.className}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
