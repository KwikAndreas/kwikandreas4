import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingNav } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seoKeywords } from "@/lib/seo/structured-data";
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
      "Kwik Andreas Jonathan | KwikAndreas - Full Stack Developer & Game Developer Portfolio",
    template: "%s | Kwik Andreas | KwikAndreas",
  },
  description:
    "Kwik Andreas Jonathan (KwikAndreas) - Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Known as Kwik Andreas or KwikAndreas, expert in React, Next.js, Unity, and modern web technologies. Based in Indonesia.",
  keywords: seoKeywords,
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
    siteName: "Kwik Andreas Jonathan | KwikAndreas Portfolio",
    title:
      "Kwik Andreas Jonathan | KwikAndreas - Full Stack Developer & Game Developer",
    description:
      "Kwik Andreas Jonathan (KwikAndreas) - Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Expert in React, Next.js, Unity, and modern web technologies. Based in Indonesia.",
    images: [
      {
        url: "/images/bitgrow.png",
        width: 1200,
        height: 630,
        alt: "Kwik Andreas Jonathan - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kwikandreas",
    creator: "@kwikandreas",
    title:
      "Kwik Andreas Jonathan | KwikAndreas - Full Stack Developer & Game Developer",
    description:
      "Kwik Andreas Jonathan (KwikAndreas) - Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Based in Indonesia.",
    images: ["/images/bitgrow.png"],
  },
  verification: {
    google: "wCJ4618uQYlQOFViXg5BBcMRC20LpuWdasmIM0iAk80",
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
        <link rel="icon" href="/bitgrow.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Additional SEO meta tags for name variations */}
        <meta name="author" content="Kwik Andreas Jonathan" />
        <meta name="creator" content="KwikAndreas" />
        <meta name="designer" content="Kwik Andreas" />
        <meta name="developer" content="Andreas Jonathan Kwik" />
        <meta
          name="subject"
          content="Kwik Andreas Jonathan Portfolio - Full Stack Developer"
        />
        <meta
          name="abstract"
          content="Professional portfolio of Kwik Andreas Jonathan (KwikAndreas), showcasing web development and game development projects"
        />
        <meta name="topic" content="Full Stack Developer Portfolio Indonesia" />
        <meta
          name="summary"
          content="Kwik Andreas Jonathan, also known as KwikAndreas, is a skilled Full Stack Developer from Indonesia specializing in React, Next.js, and Unity development"
        />
        <meta
          name="classification"
          content="Technology, Web Development, Game Development"
        />
        <meta name="owner" content="Kwik Andreas Jonathan" />
        <meta name="reply-to" content="kwikandreasjoe@gmail.com" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Portfolio, Technology, Developer" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
