import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kwikandreas.vercel.app"),
  title: {
    default: "KwikAndreas - Full Stack Developer & Game Developer",
    template: "%s | KwikAndreas",
  },
  description:
    "Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Expert in React, Next.js, Unity, and modern web technologies.",
  keywords: [
    "full stack developer",
    "web developer",
    "game developer",
    "react developer",
    "next.js developer",
    "unity developer",
    "javascript",
    "typescript",
    "portfolio",
    "web development",
    "game development",
    "mobile development",
    "frontend developer",
    "backend developer",
    "indonesia developer",
  ],
  authors: [{ name: "Andreas", url: "https://kwikandreas.vercel.app" }],
  creator: "Andreas",
  publisher: "Andreas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: "https://kwikandreas.vercel.app",
    siteName: "KwikAndreas Portfolio",
    title: "KwikAndreas - Full Stack Developer & Game Developer",
    description:
      "Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Expert in React, Next.js, Unity, and modern web technologies.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KwikAndreas - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kwikandreas",
    creator: "@kwikandreas",
    title: "KwikAndreas - Full Stack Developer & Game Developer",
    description:
      "Experienced Full Stack Developer specializing in web development, game development, and mobile applications.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://kwikandreas.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
