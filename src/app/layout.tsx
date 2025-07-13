import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav"; // ✅ Import Nav

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HOMORA Interiors",
  description:
    "A clean and responsive portfolio site for HOMORA Interiors built with Next.js and Tailwind CSS. Featuring scroll animations, project sections, and a custom admin upload system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        {/* ✅ Global sticky Nav */}
        <Nav />

        {/* ✅ Main content starts below nav */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
