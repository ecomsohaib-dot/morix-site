import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#06090f",
        surface: "#0c1320",
        line: "#1f2a3d",
        accent: "#2ec5ff",
        accentSoft: "#8ae6ff"
      },
      boxShadow: {
        glow: "0 0 40px rgba(46,197,255,0.25)"
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 10% 20%, rgba(46,197,255,0.15), transparent 35%), radial-gradient(circle at 90% 10%, rgba(138,230,255,0.08), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
