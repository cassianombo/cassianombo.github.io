/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#3b82f6",
          dark: "#60a5fa",
        },
        // GitHub-style dark blue theme
        github: {
          bg: "#0d1117", // Main background
          "bg-secondary": "#161b22", // Secondary background
          "bg-tertiary": "#21262d", // Tertiary background / borders
          border: "#30363d", // Border color
          text: "#c9d1d9", // Main text
          "text-secondary": "#8b949e", // Secondary text
          "text-muted": "#6e7681", // Muted text
        },
      },
    },
  },
  plugins: [],
};
