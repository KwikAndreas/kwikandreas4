// components/SEO.tsx
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
    "Kwik Andreas Jonathan | KwikAndreas - Full Stack Developer & Game Developer",
  description:
    "Kwik Andreas Jonathan (KwikAndreas) - Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Expert in React, Next.js, Unity, and modern web technologies. Based in Indonesia.",
  keywords:
    "Kwik Andreas, KwikAndreas, Andreas Jonathan Kwik, Kwik Andreas Jonathan, full stack developer, web developer, game developer, react developer, next.js, unity, javascript, typescript, portfolio, Indonesia developer",
  image: "/images/bitgrow.png",
  url: "https://kwikandreas.vercel.app",
  type: "website",
  author: "Kwik Andreas Jonathan",
};

export function SEO({
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

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={fullUrl} />

      {/* Additional name variations for better indexing */}
      <meta name="creator" content="Kwik Andreas Jonathan" />
      <meta name="publisher" content="KwikAndreas" />
      <meta name="designer" content="Kwik Andreas" />
      <meta name="developer" content="Andreas Jonathan Kwik" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta
        property="og:site_name"
        content="Kwik Andreas Jonathan | KwikAndreas Portfolio"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="id_ID" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@kwikandreas" />
      <meta name="twitter:site" content="@kwikandreas" />

      {type === "article" && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {section && <meta property="article:section" content={section} />}
          {tags &&
            tags.map((tag) => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}
          <meta property="article:author" content={author} />
        </>
      )}

      {/* Additional SEO tags */}
      <meta name="theme-color" content="#0070f3" />
      <meta name="msapplication-TileColor" content="#0070f3" />
      <meta name="application-name" content="KwikAndreas" />
      <meta name="apple-mobile-web-app-title" content="KwikAndreas" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Enhanced Structured Data - Person with multiple names */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Kwik Andreas Jonathan",
            alternateName: [
              "KwikAndreas",
              "Kwik Andreas",
              "Andreas Jonathan Kwik",
              "Andreas Kwik",
              "Jonathan Kwik",
              "kwikandreas",
            ],
            url: defaultSEO.url,
            image: fullImage,
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
            ],
            description: description,
            nationality: "Indonesian",
            homeLocation: {
              "@type": "Place",
              name: "Indonesia",
            },
          }),
        }}
      />

      {/* Enhanced Structured Data - Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Kwik Andreas Jonathan Portfolio",
            alternateName: [
              "KwikAndreas Portfolio",
              "Kwik Andreas Portfolio",
              "Andreas Jonathan Kwik Portfolio",
            ],
            url: defaultSEO.url,
            description: description,
            author: {
              "@type": "Person",
              name: "Kwik Andreas Jonathan",
              alternateName: ["KwikAndreas", "Kwik Andreas"],
            },
            inLanguage: ["en", "id"],
            potentialAction: {
              "@type": "SearchAction",
              target: `${defaultSEO.url}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
            mainEntity: {
              "@type": "Person",
              name: "Kwik Andreas Jonathan",
              alternateName: [
                "KwikAndreas",
                "Kwik Andreas",
                "Andreas Jonathan Kwik",
              ],
            },
          }),
        }}
      />

      {/* Professional Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Kwik Andreas Jonathan - Web & Game Development Services",
            alternateName: "KwikAndreas Development Services",
            url: defaultSEO.url,
            description:
              "Professional web development, game development, and mobile app development services by Kwik Andreas Jonathan (KwikAndreas)",
            provider: {
              "@type": "Person",
              name: "Kwik Andreas Jonathan",
              alternateName: ["KwikAndreas", "Kwik Andreas"],
            },
            areaServed: {
              "@type": "Country",
              name: "Indonesia",
            },
            serviceType: [
              "Web Development",
              "Game Development",
              "Mobile App Development",
              "Full Stack Development",
              "Frontend Development",
              "Backend Development",
            ],
          }),
        }}
      />
    </Head>
  );
}
