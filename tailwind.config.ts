import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../images/ccbp-banner.png')",
        "footer-texture": "url('/images/footer-texture.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        anton: "var(--font-anton)",
        rofont: ["ROFont", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
