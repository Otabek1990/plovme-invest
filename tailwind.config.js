/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        cera: ["Cera Round Pro", "sans-serif"],
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          border:"#F6F6F6",
          aqua:"#F1F1F1",

        },
        orange: {
          default: "#FFAB49",
          hover: "#FF8A00",
          300:"#FFF3E5"
        },
        red: {
          default: "#FF2820",
          thin:"#FEEDEC"
        },
        yellow: {
          DEFAULT: "#FFD600",
        },
        violet: {
          DEFAULT: "#9D57FF",
          hover: "#6825C7",
        },
        purple:{
          DEFAULT:"#7533D0"
        },
        gray: {
          thin:"#F5F5F5",
          light: "#fafafa",
          low: "#F2F2F2",
          hard: "#858D9D",
          dark: "#303030",
          tabs: "#E0E2E7",
          border: "#404040",
           filter:"#667085",
           normal:"#8C8C8C"
        },
        green: {
          DEFAULT: "#159600",
          light:"#C4C4C4",
          bold:"#5A5A5A",
          dark:"#1A1A1A"
         
        },
        black: {
          dark:"#000000",
          DEFAULT: "#151515",
          md: "#161515",
          fill: "#242424",
          light:"#222222",
          bold:"#030303",
          normal:"#020202",
          medium:"#0C0C0C"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "10px",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        15:"15px",
        20:"20px"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
