import type { Config } from "tailwindcss";
const{ 
    default: flattenColorPalette 
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // ... (biarkan default)
    },
    extend: {
      colors: {
        // Tambahkan warna biru kustom sebagai aksen
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // ... (biarkan sisa warna default dari shadcn)
      },
      animation: {
        // ... (biarkan default dari shadcn)
      },
      keyframes: {
        // ... (biarkan default dari shadcn)
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
