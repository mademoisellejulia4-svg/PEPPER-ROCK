import type { Metadata, Viewport } from "next";
import { displayFont, sansFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pepper Rocks — Nottingham Cocktail Bar",
  description:
    "Pepper Rocks. A Nottingham speakeasy — three floors, warm copper light, and cocktails poured with craft.",
};

export const viewport: Viewport = {
  themeColor: "#070504",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="bg-noir text-cream antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
