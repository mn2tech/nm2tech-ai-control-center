import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NM2TECH AI Control Center",
  description: "Enterprise GenAI operations platform",
  metadataBase: new URL("https://nm2tech-ai-control-center.vercel.app"),
  openGraph: {
    title: "NM2TECH AI Control Center",
    description:
      "Secure, governed, human-in-the-loop enterprise AI operations dashboard.",
    url: "https://nm2tech-ai-control-center.vercel.app",
    siteName: "NM2TECH AI Control Center",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NM2TECH AI Control Center social preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NM2TECH AI Control Center",
    description:
      "Secure, governed, human-in-the-loop enterprise AI operations dashboard.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
