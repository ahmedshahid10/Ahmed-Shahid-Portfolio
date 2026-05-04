import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { Providers } from "@/components/layout/Providers";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://ahmedshahid10.github.io/Ahmed-Shahid-Portfolio";

export const metadata: Metadata = {
  title: {
    default: "Ahmed Shahid | GenAI Specialist",
    template: "%s | Ahmed Shahid",
  },
  description: siteConfig.summary,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Ahmed Shahid | GenAI Specialist",
    description: siteConfig.summary,
    type: "website",
    url: BASE_URL,
    siteName: "Ahmed Shahid Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Shahid — GenAI Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Shahid | GenAI Specialist",
    description: siteConfig.summary,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body className="bg-background text-text-primary font-sans antialiased">
        <Providers>
          <ScrollProgress />
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
