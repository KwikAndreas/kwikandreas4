// lib/image-optimization.ts
export function generateImageMeta(
  src: string,
  alt: string,
  width?: number,
  height?: number
) {
  return {
    src,
    alt,
    width: width || 1200,
    height: height || 630,
    loading: "lazy" as const,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  };
}

export function generateOpenGraphImage(title: string, description?: string) {
  // You can integrate with services like Vercel OG Image Generation
  const params = new URLSearchParams({
    title,
    ...(description && { description }),
  });

  return `https://kwikandreas.vercel.app/api/og?${params.toString()}`;
}
