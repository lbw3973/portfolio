/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-normal": "#9885b7",
      "primary-light": "#3A7391",
      "secondary-normal": "#91580F",
      "secondary-light": "#CC9454",
      "secondary-heavy": "#453015",
      "status-alert": "#EB5147",
      "status-caution": "#FA9538",
      "status-positive": "#0090FF",
      "status-error": "#EB5147",
      "background-primary": "#F3F3F3",
      "background-secondary": "#EBEBEB",
      "background-normal": "#EEEEEE",
      "background-disabled": "#ECECEC",
      "gray-heavy": "#565656",
      "gray-normal": "#949494",
      "button-inactive": "#D9D9D9",
      placeholder: "#C1C1C1",
      white: "#FFFFFF",
      black: "#242424",
      transparent: "transparent",
    },
    fontSize: {
      tiny: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "2.5rem",
    },
    borderRadius: {
      sm: "0.25rem",
      md: "0.75rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.3rem",
      "3xl": "1.5rem",
      full: "50%",
    },
    borderWidth: {
      1: "1px",
      4: "4px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "title-First": "linear-gradient(-154deg, #9759bb 20%, #fca6c6 60%, #f6af97 80%);",
        "title-Second": "linear-gradient(-155deg, #f6af97 25%, #fca6c6 51%, #9759bb 70%);",
      },
      boxShadow: {
        md: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        bottom: "0px 8px 13px -5px rgba(50,50,93,0.25)",
      },
      width: {
        header: "calc(100vw - 240px)",
      },
      animation: {
        cloud: "cloud 2.5s ease-in-out infinite",
        icon: "icon 0.3s ease-in-out forwards",
      },
      keyframes: {
        cloud: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
        icon: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
