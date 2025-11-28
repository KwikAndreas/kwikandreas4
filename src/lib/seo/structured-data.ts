// lib/seo/structured-data.ts

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kwik Andreas Jonathan",
  alternateName: [
    "KwikAndreas",
    "Kwik Andreas",
    "Andreas Jonathan Kwik",
    "Andreas Kwik",
    "Jonathan Kwik Andreas",
    "kwikandreas",
    "kwik-andreas",
    "kwik_andreas",
  ],
  url: "https://kwikandreas.vercel.app",
  image: "https://kwikandreas.vercel.app/images/bitgrow.png",
  sameAs: [
    "https://github.com/kwikandreas",
    "https://linkedin.com/in/kwik-jonathan",
    "https://instagram.com/kwikandreas",
    "https://twitter.com/kwikandreas",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  knowsAbout: [
    "Web Development",
    "Game Development",
    "React",
    "Next.js",
    "Unity",
    "JavaScript",
    "TypeScript",
    "Full Stack Development",
    "Mobile Development",
    "Frontend Development",
    "Backend Development",
    "Python",
    "C#",
    "Node.js",
  ],
  description:
    "Kwik Andreas Jonathan (KwikAndreas) - Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Expert in React, Next.js, Unity, and modern web technologies. Based in Indonesia.",
  nationality: "Indonesian",
  homeLocation: {
    "@type": "Place",
    name: "Indonesia",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Bina Nusantara University",
    },
  ],
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kwik Andreas Jonathan Portfolio",
  alternateName: [
    "KwikAndreas Portfolio",
    "Kwik Andreas Portfolio",
    "Andreas Jonathan Kwik Portfolio",
    "KwikAndreas Developer Portfolio",
  ],
  url: "https://kwikandreas.vercel.app",
  description:
    "Professional portfolio website of Kwik Andreas Jonathan (KwikAndreas) - Full Stack Developer specializing in web development, game development, and mobile applications.",
  author: {
    "@type": "Person",
    name: "Kwik Andreas Jonathan",
    alternateName: ["KwikAndreas", "Kwik Andreas", "Andreas Jonathan Kwik"],
  },
  inLanguage: ["en", "id"],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://kwikandreas.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "Person",
    name: "Kwik Andreas Jonathan",
    alternateName: ["KwikAndreas", "Kwik Andreas", "Andreas Jonathan Kwik"],
  },
};

export const professionalServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kwik Andreas Jonathan - Web & Game Development Services",
  alternateName: [
    "KwikAndreas Development Services",
    "Kwik Andreas Development Services",
  ],
  url: "https://kwikandreas.vercel.app",
  description:
    "Professional web development, game development, and mobile app development services by Kwik Andreas Jonathan (KwikAndreas). Specializing in React, Next.js, Unity, and modern web technologies.",
  provider: {
    "@type": "Person",
    name: "Kwik Andreas Jonathan",
    alternateName: ["KwikAndreas", "Kwik Andreas", "Andreas Jonathan Kwik"],
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Indonesia",
    },
    {
      "@type": "Place",
      name: "Global",
    },
  ],
  serviceType: [
    "Web Development",
    "Game Development",
    "Mobile App Development",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "React Development",
    "Next.js Development",
    "Unity Game Development",
  ],
  priceRange: "$$",
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KwikAndreas",
  alternateName: [
    "Kwik Andreas",
    "Kwik Andreas Jonathan",
    "Andreas Jonathan Kwik",
  ],
  url: "https://kwikandreas.vercel.app",
  logo: "https://kwikandreas.vercel.app/bitgrow.svg",
  description:
    "Professional software development services by Kwik Andreas Jonathan",
  founder: {
    "@type": "Person",
    name: "Kwik Andreas Jonathan",
    alternateName: ["KwikAndreas", "Kwik Andreas"],
  },
  sameAs: [
    "https://github.com/kwikandreas",
    "https://linkedin.com/in/kwik-jonathan",
    "https://instagram.com/kwikandreas",
  ],
};

// Keywords untuk meta tags
export const seoKeywords = [
  // Variasi nama utama
  "Kwik",
  "Andreas",
  "Jonathan",
  "Kwik Andreas",
  "Andreas Kwik",
  "Kwik Andreas Jonathan",
  "Andreas Jonathan Kwik",
  "Jonathan Kwik Andreas",
  "KwikAndreas",
  "kwikandreas",
  "kwik-andreas",
  "kwik_andreas",
  "Jonathan Kwik",
  "Andreas Jonathan",
  "Kwik Jonathan",

  // Developer variations
  "Kwik Andreas developer",
  "KwikAndreas developer",
  "Andreas Jonathan developer",
  "kwikandreas portfolio",
  "Kwik Andreas portfolio",
  "KwikAndreas portfolio",
  "Andreas developer Indonesia",
  "Kwik Andreas developer Indonesia",
  "KwikAndreas Indonesia",

  // Professional terms
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

  // Technologies
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

  // Services
  "portfolio website",
  "web development services",
  "game development services",
  "mobile app development",
  "freelance developer",
  "software engineer",

  // Location
  "developer indonesia",
  "web developer jakarta",
  "programmer indonesia",
  "software engineer indonesia",
];
