import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import ChatBot from "@/components/Chatbot";
import Scroll from "@/components/Scroll";
import FacebookPixelTracker from "@/components/FacebookPixelTracker";

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
    "Residential Interior Design",
    "Commercial Interior Design",
    "Interior Design Services",
    "Interior Designers in Kochi",
    "Interior Design Company",
    "Home Makeover",
    "Interior Design Consultation",
    "number 1 Interior Design",
    "kochi's Best Interior Design",
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
  other: {
    "facebook-domain-verification": "3fcierglrxhda7yr0jm5lk161sfksx",
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${roboto.className} bg-white text-gray-900 antialiased scroll-smooth`}
      >
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1259535349477003');
          `}
        </Script>

        <FacebookPixelTracker />

        <Nav />
        <main className="pt-16">{children}</main>
        <CTASection />
        <Footer />
        <ChatBot />
        <Scroll />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1259535349477003&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}