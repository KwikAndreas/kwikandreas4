// app/jsonld.tsx - Enhanced JSON-LD Structured Data for SEO
import Script from "next/script";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://kwikandreas.vercel.app/#kwik-andreas",
    name: "Kwik Andreas",
    givenName: "Andreas",
    familyName: "Kwik",
    additionalName: "Jonathan",
    alternateName: [
      "Kwik Andreas Jonathan",
      "KwikAndreas",
      "Andreas Jonathan Kwik",
      "Andreas Kwik",
      "kwikandreas",
      "Kwik Andreas Indonesia",
      "Kwik Andreas Jakarta",
    ],
    url: "https://kwikandreas.vercel.app",
    image: {
      "@type": "ImageObject",
      url: "https://kwikandreas.vercel.app/images/bitgrow.png",
      width: "1200",
      height: "630",
    },
    description:
      "Kwik Andreas is an expert Full Stack Developer and Game Developer from Indonesia, specializing in React, Next.js, Unity, and modern web technologies.",
    jobTitle: ["Full Stack Developer", "Game Developer", "Web Developer"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Jakarta",
      },
      skills: [
        "React",
        "Next.js",
        "Unity",
        "JavaScript",
        "TypeScript",
        "Web Development",
        "Game Development",
      ],
    },
    knowsAbout: [
      "Full Stack Development",
      "Game Development",
      "React",
      "Next.js",
      "Unity",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Mobile Development",
      "Frontend Development",
      "Backend Development",
    ],
    sameAs: [
      "https://github.com/kwikandreas",
      "https://linkedin.com/in/kwik-jonathan",
      "https://instagram.com/kwikandreas",
      "https://twitter.com/kwikandreas",
    ],
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
    },
    nationality: {
      "@type": "Country",
      name: "Indonesia",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kwikandreas.vercel.app/#website",
    name: "Kwik Andreas Portfolio",
    alternateName: "Kwik Andreas - Full Stack Developer",
    url: "https://kwikandreas.vercel.app",
    description:
      "Professional portfolio of Kwik Andreas - Expert Full Stack Developer and Game Developer from Indonesia",
    publisher: {
      "@id": "https://kwikandreas.vercel.app/#kwik-andreas",
    },
    inLanguage: ["en-US", "id-ID"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://kwikandreas.vercel.app/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kwikandreas.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Kwik Andreas",
        item: "https://kwikandreas.vercel.app/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://kwikandreas.vercel.app/#projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://kwikandreas.vercel.app/#contact",
      },
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@id": "https://kwikandreas.vercel.app/#kwik-andreas",
    },
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="profile-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
