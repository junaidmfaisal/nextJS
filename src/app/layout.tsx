import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import ChatBot from "@/components/Chatbot";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HOMORA Interiors | Luxury Interior Design & Home Styling",
  description:
    "HOMORA Interiors offers premium interior design, home décor, and space planning services. Transform your home or office into a modern, elegant, and functional space.",
  keywords: [
    "Homora Interiors",
    "Interior Design",
    "Luxury Interiors",
    "Home Décor",
    "Space Planning",
    "Interior Styling",
    "Office Interiors",
    "Modern Interior Design",
  ],
  authors: [{ name: "HOMORA Interiors" }],
  openGraph: {
    title: "HOMORA Interiors | Luxury Interior Design & Home Styling",
    description:
      "Discover HOMORA Interiors – experts in luxury home styling and modern interior design. Create spaces that inspire.",
    url: "https://homorainteriors.com",
    siteName: "HOMORA Interiors",
    images: [
      {
        url: "/HOMORA.png", 
        width: 1200,
        height: 630,
        alt: "HOMORA Interiors Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/HOMORA.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/HOMORA.png" type="image/png" />
        {/* Add Font Awesome CDN for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${roboto.className} bg-white text-gray-900 antialiased scroll-smooth`}
      >
        {/* Global Navigation */}
        <Nav />

        {/* Main content area */}
        <main className="pt-16">{children}</main>

        {/* CTA Section */}
        <CTASection />

        {/* Footer */}
        <Footer />

        {/* ChatBot Component */}
        <ChatBot />
      </body>
    </html>
  );
}
