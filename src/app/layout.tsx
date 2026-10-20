import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://lemayian.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Denis Lemayian — AI & Full-Stack Engineer",
    template: "%s | Denis Lemayian",
  },
  description:
    "Denis Lemayian builds retrieval-augmented AI systems and full-stack applications — RAG pipelines, vector search, agents — with Python, TypeScript and React. Based in Nairobi, open to remote roles worldwide.",
  keywords: [
    "Denis Lemayian",
    "AI Engineer",
    "RAG",
    "Full-Stack Developer",
    "Python",
    "FastAPI",
    "React",
    "Nairobi",
    "Kenya",
    "Machine Learning",
    "Retrieval-Augmented Generation",
  ],
  authors: [{ name: "Denis Lemayian Kirionki", url: siteUrl }],
  creator: "Denis Lemayian Kirionki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Denis Lemayian — AI & Full-Stack Engineer",
    title: "Denis Lemayian — AI & Full-Stack Engineer",
    description:
      "I build retrieval-augmented AI systems and full-stack applications — RAG pipelines, vector search, and agents that run fully local. Nairobi → worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1792,
        height: 1024,
        alt: "Denis Lemayian — AI & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denis Lemayian — AI & Full-Stack Engineer",
    description:
      "RAG pipelines, vector search, and full-stack applications — built end-to-end, running fully local.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#060a13",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
