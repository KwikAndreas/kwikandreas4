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
  title: "KwikAndreas - Full Stack Developer & Game Developer",
  description:
    "Experienced Full Stack Developer specializing in web development, game development, and mobile applications. Expert in React, Next.js, Unity, and modern web technologies.",
  keywords:
    "full stack developer, web developer, game developer, react developer, next.js, unity, javascript, typescript, portfolio",
  image: "/images/og-image.jpg",
  url: "https://kwikandreas.vercel.app",
  type: "website",
  author: "Andreas",
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
      {/* Basic Meta Tags */}
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

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="KwikAndreas Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="id_ID" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@kwikandreas" />
      <meta name="twitter:site" content="@kwikandreas" />

      {/* Article specific meta tags */}
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

      {/* Structured Data - Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Andreas",
            url: defaultSEO.url,
            image: fullImage,
            sameAs: [
              "https://github.com/kwikandreas",
              "https://linkedin.com/in/kwikandreas",
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
            ],
            description: description,
          }),
        }}
      />

      {/* Structured Data - Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "KwikAndreas Portfolio",
            url: defaultSEO.url,
            description: description,
            author: {
              "@type": "Person",
              name: "Andreas",
            },
            inLanguage: ["en", "id"],
            potentialAction: {
              "@type": "SearchAction",
              target: `${defaultSEO.url}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </Head>
  );
}
