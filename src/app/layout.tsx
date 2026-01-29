import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingNav } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "./jsonld";
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
      "Kwik Andreas - Full Stack Developer Portfolio | Kwik Andreas Jonathan",
    template: "%s | Kwik Andreas",
  },
  description:
    "Kwik Andreas (Kwik Andreas Jonathan) - Expert Full Stack Developer & Game Developer from Indonesia. Specializing in React, Next.js, Unity, web development, game development, and mobile applications. Professional portfolio by Kwik Andreas showcasing innovative projects and technical expertise.",
  keywords: [
    "Kwik Andreas",
    "kwik andreas",
    "Kwik Andreas Jonathan",
    "kwikandreas",
    "Andreas Kwik",
    "Andreas Jonathan Kwik",
    "Kwik Andreas portfolio",
    "Kwik Andreas developer",
    "Kwik Andreas full stack",
    "Kwik Andreas Indonesia",
    "Kwik Andreas Jakarta",
    "full stack developer Indonesia",
    "web developer Indonesia",
    "game developer Indonesia",
    "React developer Indonesia",
    "Next.js developer",
    "Unity developer",
    "JavaScript developer",
    "TypeScript developer",
    "portfolio Kwik Andreas",
    "Indonesian developer",
    ...seoKeywords,
  ],
  authors: [
    { name: "Kwik Andreas", url: "https://kwikandreas.vercel.app" },
    { name: "Kwik Andreas Jonathan", url: "https://kwikandreas.vercel.app" },
  ],
  creator: "Kwik Andreas",
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
    siteName: "Kwik Andreas Portfolio - Full Stack Developer",
    title: "Kwik Andreas - Full Stack Developer & Game Developer Portfolio",
    description:
      "Kwik Andreas (Kwik Andreas Jonathan) - Expert Full Stack Developer from Indonesia specializing in React, Next.js, Unity, web development, game development, and mobile applications. View Kwik Andreas's professional portfolio and innovative projects.",
    images: [
      {
        url: "/images/bitgrow.png",
        width: 1200,
        height: 630,
        alt: "Kwik Andreas - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kwikandreas",
    creator: "@kwikandreas",
    title: "Kwik Andreas - Full Stack Developer & Game Developer Portfolio",
    description:
      "Kwik Andreas - Expert Full Stack Developer from Indonesia specializing in React, Next.js, Unity, web development, and game development. Professional portfolio showcasing innovative projects.",
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
        <meta name="author" content="Kwik Andreas" />
        <meta name="creator" content="Kwik Andreas" />
        <meta name="designer" content="Kwik Andreas Jonathan" />
        <meta name="developer" content="Kwik Andreas" />
        <meta
          name="subject"
          content="Kwik Andreas Portfolio - Full Stack Developer & Game Developer"
        />
        <meta
          name="abstract"
          content="Professional portfolio of Kwik Andreas, showcasing web development, game development, and mobile application projects"
        />
        <meta
          name="topic"
          content="Kwik Andreas - Full Stack Developer Portfolio"
        />
        <meta
          name="summary"
          content="Kwik Andreas is a skilled Full Stack Developer and Game Developer from Indonesia specializing in React, Next.js, Unity, and modern web technologies"
        />
        <meta
          name="classification"
          content="Technology, Web Development, Game Development, Software Development"
        />
        <meta name="owner" content="Kwik Andreas" />
        <meta name="reply-to" content="contact@kwikandreas.com" />
        <meta name="url" content="https://kwikandreas.vercel.app" />
        <meta name="identifier-URL" content="https://kwikandreas.vercel.app" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        {/* Link to humans.txt */}
        <link rel="author" href="/humans.txt" type="text/plain" />
        <link rel="me" href="https://github.com/kwikandreas" />
        <link rel="me" href="https://linkedin.com/in/kwik-jonathan" />
        <meta name="reply-to" content="kwikandreasjoe@gmail.com" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Portfolio, Technology, Developer" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <JsonLd />
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
