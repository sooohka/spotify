import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,tsx,js,jsx}", "./pages/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  outdir: "styled-system",
  theme: {
    tokens: {
      fonts: {},
      colors: {
        brand: {
          primary: { value: "#1DB954", description: "Spotify Green" },
          secondary: { value: "#191414", description: "Spotify Black" },
          tertiary: { value: "#FFFFFF", description: "Spotify White" },
        },
      },
    },
  },
});
