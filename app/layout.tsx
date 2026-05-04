import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Stack Media — Performance Marketing & Digital Growth Studio",
    template: "%s — Stack Media",
  },
  description:
    "Stack Media is a performance marketing studio building paid media, SEO, and brand systems that compound. Google Ads, Meta Ads, TikTok Ads, SEO, Web Design & Branding.",
  keywords: [
    "media buying agency",
    "performance marketing",
    "google ads agency",
    "meta ads agency",
    "tiktok ads",
    "paid media",
    "SEO agency",
    "digital marketing",
  ],
  openGraph: {
    title: "Stack Media — Performance Marketing Studio",
    description: "Paid media, SEO, web & brand for ambitious companies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Media",
    description: "Performance marketing studio.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dm.variable}>
      <body className="font-sans bg-cream text-ink antialiased selection:bg-accent selection:text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
