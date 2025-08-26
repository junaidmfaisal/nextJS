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
  title: "HOMORA Interiors",
  description: "",
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
        <CTASection/>
        
        {/* Footer */}
        <Footer />
        
        {/* ChatBot Component */}
        <ChatBot />
      </body>
    </html>
  );
}