// components/SEOOptimized.tsx
import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const defaultSEO = {
  title:
    "Kwik Andreas Jonathan - Full Stack Developer & Game Developer Portfolio",
  description:
    "Kwik Andreas Jonathan is an experienced Full Stack Developer and Game Developer from Jakarta, Indonesia. Specializing in React, Next.js, Unity, mobile apps, and modern web technologies. View my portfolio, projects, and contact me for collaborations.",
  keywords:
    "Kwik Andreas Jonathan, Andreas Jonathan, Kwik Andreas, full stack developer Jakarta, web developer Indonesia, game developer Jakarta, React developer, Next.js developer, Unity developer, JavaScript expert, TypeScript developer, mobile app developer, portfolio Jakarta, freelance developer Indonesia, Indonesian developer, Jakarta programmer, web development services Jakarta, game development Indonesia",
  image: "/images/kwik-andreas-jonathan-og.jpg",
  url: "https://kwikandreas.vercel.app",
  type: "website",
  author: "Kwik Andreas Jonathan",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kwikandreas.vercel.app/#person",
      name: "Kwik Andreas Jonathan",
      alternateName: ["Andreas Jonathan", "Kwik Andreas"],
      url: "https://kwikandreas.vercel.app",
      image: {
        "@type": "ImageObject",
        url: "https://kwikandreas.vercel.app/images/pp.jpeg",
        width: 400,
        height: 400,
      },
      jobTitle: "Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "Indonesia",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "SMK Global Multimedia Creative",
        },
        {
          "@type": "EducationalOrganization",
          name: "Bunda Mulia University",
        },
      ],
      knowsAbout: [
        "Full Stack Development",
        "Game Development",
        "React",
        "Next.js",
        "Unity",
        "JavaScript",
        "TypeScript",
        "Mobile Development",
        "Web Development",
      ],
      sameAs: [
        "https://github.com/kwikandreas",
        "https://linkedin.com/in/kwikandreas",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kwikandreas.vercel.app/#website",
      url: "https://kwikandreas.vercel.app",
      name: "Kwik Andreas Jonathan - Developer Portfolio",
      description:
        "Portfolio website of Kwik Andreas Jonathan, Full Stack Developer and Game Developer from Jakarta, Indonesia",
      publisher: {
        "@id": "https://kwikandreas.vercel.app/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://kwikandreas.vercel.app/#webpage",
      url: "https://kwikandreas.vercel.app",
      name: "Kwik Andreas Jonathan - Full Stack Developer Portfolio",
      isPartOf: {
        "@id": "https://kwikandreas.vercel.app/#website",
      },
      about: {
        "@id": "https://kwikandreas.vercel.app/#person",
      },
      description:
        "Professional portfolio showcasing the work and skills of Kwik Andreas Jonathan, a Full Stack Developer and Game Developer based in Jakarta, Indonesia.",
    },
    {
      "@type": "ProfessionalService",
      name: "Kwik Andreas Jonathan - Development Services",
      provider: {
        "@id": "https://kwikandreas.vercel.app/#person",
      },
      serviceType: [
        "Web Development",
        "Game Development",
        "Mobile App Development",
        "Full Stack Development",
      ],
      areaServed: {
        "@type": "Place",
        name: "Jakarta, Indonesia",
      },
    },
  ],
};

export function SEOOptimized({
  title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  author = defaultSEO.author,
  publishedTime,
  modifiedTime,
  section,
  tags,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title;

  const fullUrl = url.startsWith("http") ? url : `${defaultSEO.url}${url}`;
  const fullImage = image.startsWith("http")
    ? image
    : `${defaultSEO.url}${image}`;

  // Enhanced keywords for Kwik Andreas Jonathan
  const enhancedKeywords = [
    keywords,
    "Kwik Andreas Jonathan portfolio",
    "Andreas Jonathan developer",
    "Kwik Andreas projects",
    "Jakarta web developer",
    "Indonesian game developer",
    "freelance developer Jakarta",
    "React developer Indonesia",
    "Next.js expert Jakarta",
  ].join(", ");

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta
        property="og:image:alt"
        content="Kwik Andreas Jonathan - Full Stack Developer"
      />
      <meta property="og:site_name" content="Kwik Andreas Jonathan Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      <meta property="twitter:creator" content="@kwikandreas" />

      {/* Additional Meta Tags for Better SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Geo Tags */}
      <meta name="geo.region" content="ID-JK" />
      <meta name="geo.placename" content="Jakarta" />
      <meta name="geo.position" content="-6.2088;106.8456" />
      <meta name="ICBM" content="-6.2088, 106.8456" />

      {/* Article specific meta tags */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {section && <meta property="article:section" content={section} />}
      {tags &&
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}

      {/* Person/Developer specific schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Additional Schema for Developer Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Kwik Andreas Jonathan - Skills",
            description:
              "Technical skills and expertise of Kwik Andreas Jonathan",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "React Development",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Next.js Development",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Game Development with Unity",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mobile App Development",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Full Stack Development",
              },
            ],
          }),
        }}
      />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </Head>
  );
}
