import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import QuickInfoTab from "@/components/layout/QuickInfoTab";
import Footer from "@/components/layout/Footer";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zunaiba | AI Automation & Web/AI Designer",
  description:
    "Portfolio of Zunaiba: custom web development, AI-powered design, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-light text-text-dark">
        <Header />
        <QuickInfoTab />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
