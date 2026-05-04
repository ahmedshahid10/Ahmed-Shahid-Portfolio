import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { TabNav } from "@/components/layout/TabNav";
import { siteConfig } from "@/data/site";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://ahmedshahid10.github.io/Ahmed-Shahid-Portfolio";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.summary,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.summary,
    type: "website",
    url: BASE_URL,
    siteName: `${siteConfig.name} Portfolio`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1100px] mx-auto">
            <div className="lg:grid lg:grid-cols-[290px_1fr] lg:gap-6 lg:items-start">
              <Sidebar />
              <div className="mt-4 lg:mt-0">
                <TabNav />
                <main>{children}</main>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
