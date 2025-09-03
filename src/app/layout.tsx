import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { FloatingNav } from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kwikandreas.vercel.app"),
  title: {
    default:
      "Kwik Andreas Jonathan - Full Stack Developer & Game Developer Portfolio",
    template: "%s | Kwik Andreas Jonathan",
  },
  description:
    "Kwik Andreas Jonathan - Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Expert in React, Next.js, Unity, and modern web technologies. Based in Indonesia.",
  keywords: [
    // Personal name variations for better targeting
    "Kwik Andreas Jonathan",
    "Andreas Jonathan Kwik",
    "Andreas Kwik",
    "Kwik Andreas",
    "Jonathan Kwik",
    "kwikandreas",
    "Andreas Jonathan developer",
    "Kwik Andreas developer Indonesia",

    // Professional keywords
    "full stack developer",
    "web developer",
    "game developer",
    "react developer",
    "next.js developer",
    "unity developer",
    "javascript developer",
    "typescript developer",
    "frontend developer",
    "backend developer",
    "mobile developer",

    // Technology stack
    "react.js",
    "next.js",
    "unity 3d",
    "node.js",
    "javascript",
    "typescript",
    "python",
    "c#",
    "supabase",
    "firebase",

    // Portfolio & services
    "portfolio website",
    "web development services",
    "game development services",
    "mobile app development",
    "freelance developer",
    "software engineer",

    // Location-based
    "developer indonesia",
    "web developer jakarta",
    "programmer indonesia",
    "software engineer indonesia",
    "bina nusantara developer",
    "binusian developer",
  ],
  authors: [
    { name: "Kwik Andreas Jonathan", url: "https://kwikandreas.vercel.app" },
  ],
  creator: "Kwik Andreas Jonathan",
  publisher: "Kwik Andreas Jonathan",
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
    siteName: "Kwik Andreas Jonathan Portfolio",
    title: "Kwik Andreas Jonathan - Full Stack Developer & Game Developer",
    description:
      "Kwik Andreas Jonathan - Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Expert in React, Next.js, Unity, and modern web technologies. Based in Indonesia.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kwik Andreas Jonathan - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kwikandreas",
    creator: "@kwikandreas",
    title: "Kwik Andreas Jonathan - Full Stack Developer & Game Developer",
    description:
      "Kwik Andreas Jonathan - Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Based in Indonesia.",
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
          <FloatingNav />
          {children}
          <Footer />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
