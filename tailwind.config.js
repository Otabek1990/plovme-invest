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
        },
        orange: {
          default: "#FFAB49",
          hover: "#FF8A00",
        },
        red: {
          default: "#FF2820",
        },
        yellow: {
          DEFAULT: "#FFD600",
        },
        violet: {
          DEFAULT: "#9D57FF",
          hover: "#6825C7",
        },
        gray: {
          light: "#fafafa",
          low: "#F2F2F2",
          hard: "#858D9D",
          dark: "#303030",
          tabs: "#E0E2E7",
          border: "#404040",
        },
        green: {
          DEFAULT: "#159600",
        },
        black: {
          DEFAULT: "#151515",
          fill: "#242424",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
