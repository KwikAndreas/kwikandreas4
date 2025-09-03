export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://kwikandreas.vercel.app/#person",
  name: "Kwik Andreas Jonathan",
  alternateName: [
    "Andreas Kwik",
    "Kwik Andreas",
    "Andreas Jonathan",
    "kwikandreas",
    "Andreas Jonathan Kwik",
  ],
  url: "https://kwikandreas.vercel.app",
  image: {
    "@type": "ImageObject",
    url: "https://kwikandreas.vercel.app/images/pp.jpeg",
    width: 300,
    height: 300,
  },
  sameAs: [
    "https://github.com/kwikandreas",
    "https://linkedin.com/in/kwikandreas",
    "https://instagram.com/kwikandreas",
  ],
  jobTitle: [
    "Full Stack Developer",
    "Game Developer",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance Developer",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Bina Nusantara",
    alternateName: ["BINUS University", "Binus"],
    url: "https://binus.ac.id",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "Indonesia",
    addressRegion: "Jakarta",
    addressLocality: "Jakarta",
  },
  nationality: "Indonesian",
  birthPlace: "Indonesia",
  knowsAbout: [
    "Web Development",
    "Game Development",
    "Mobile Development",
    "React.js",
    "Next.js",
    "Unity 3D",
    "JavaScript",
    "TypeScript",
    "Python",
    "C#",
    "Node.js",
    "Supabase",
    "Firebase",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Software Engineering",
    "Game Programming",
    "Mobile App Development",
    "Web Design",
    "UI/UX Design",
  ],
  knowsLanguage: [
    {
      "@type": "Language",
      name: "English",
      alternateName: "en",
    },
    {
      "@type": "Language",
      name: "Indonesian",
      alternateName: "id",
    },
  ],
  email: "mailto:contact@kwikandreas.dev",
  description:
    "Kwik Andreas Jonathan - Experienced Full Stack Developer specializing in web development, game development, and mobile applications with expertise in modern web technologies. Based in Indonesia, graduated from Binus University.",
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationLocation: {
      "@type": "Country",
      name: "Indonesia",
    },
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "Unity 3D",
      "C#",
      "Node.js",
      "Web Development",
      "Game Development",
    ],
  },
  award: [
    "Certified Unity Developer",
    "React Developer Certificate",
    "Next.js Expert",
  ],
  seeks: {
    "@type": "Demand",
    name: "Full Stack Development Projects",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kwikandreas.vercel.app/#website",
  url: "https://kwikandreas.vercel.app",
  name: "Kwik Andreas Jonathan Portfolio",
  alternateName: ["KwikAndreas Portfolio", "Andreas Portfolio"],
  description:
    "Official portfolio website of Kwik Andreas Jonathan - Full Stack Developer specializing in web development, game development, and mobile applications.",
  author: {
    "@id": "https://kwikandreas.vercel.app/#person",
  },
  publisher: {
    "@id": "https://kwikandreas.vercel.app/#person",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://kwikandreas.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@id": "https://kwikandreas.vercel.app/#person",
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://kwikandreas.vercel.app/#service",
  name: "Kwik Andreas Jonathan Development Services",
  description:
    "Professional web development, game development, and mobile app development services by Kwik Andreas Jonathan",
  provider: {
    "@id": "https://kwikandreas.vercel.app/#person",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description:
            "Full stack web development using React, Next.js, and modern technologies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Game Development",
          description:
            "Unity 3D game development for mobile and desktop platforms",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "React Native and Flutter mobile application development",
        },
      },
    ],
  },
};
