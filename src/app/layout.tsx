import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "slomo — Stop reproducing bugs. Replay them.",
  description:
    "slomo is the black-box flight recorder for Python. Every function call, query, and crash recorded locally — replayable from your terminal. Zero config, zero telemetry.",
  openGraph: {
    title: "slomo — Stop reproducing bugs. Replay them.",
    description:
      "The black-box flight recorder for Python. Record locally, replay from your terminal.",
    url: "https://apilens.github.io/slomo-landing/",
    siteName: "slomo",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "slomo — Stop reproducing bugs. Replay them.",
    description: "The black-box flight recorder for Python.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jbMono.variable}`}>
      <body className="font-sans text-[15.5px] leading-relaxed">
        {children}
      </body>
    </html>
  );
}
