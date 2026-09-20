/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        paper: "#F7F3EC",
        mist: "#EFEAE0",
        cardbg: "#FFFFFF",
        ink: "#1B1916",
        stone: "#6E675E",
        line: "#DDD5C5",
        accent: "#B23B20",
        deep: "#1E3A34",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -25px rgba(27,25,22,.18)",
        cardhover: "0 30px 60px -28px rgba(27,25,22,.28)",
        accentglow: "0 0 0 1px rgba(178,59,32,.25), 0 16px 45px -16px rgba(178,59,32,.35)",
      },
      borderRadius: {
        lg: "1rem",
        md: "0.625rem",
        sm: "0.375rem",
      },
    },
  },
  plugins: [],
}