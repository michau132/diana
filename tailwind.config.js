const { light, dark } = require("@charcoal-ui/theme");
const { createTailwindConfig } = require("@charcoal-ui/tailwind-config");
/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: true,
  content: ["./src/**/*.tsx", "./src/**/*.html"],
  presets: [
    createTailwindConfig({
      version: "v3",
      theme: {
        ":root": light,
      },
    }),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db", // Blue
        "primary-hover": "#2980b9", // Dark Blue
        "primary-press": "#1c6ea4", // Darker Blue
        "primary-disabled": "#3498db4D", // Disabled Blue (with opacity)
        primary: "#3498db", // Blue
        "primary-hover": "#2980b9", // Dark Blue
        "primary-press": "#1c6ea4", // Darker Blue
        "primary-disabled": "#3498db4D", // Disabled Blue (with opacity)
        secondary: "#e74c3c", // Red
        "secondary-hover": "#c0392b", // Dark Red
        "secondary-press": "#a93226", // Darker Red
        "secondary-disabled": "#e74c3c4D", // Disabled Red (with opacity)
        base: "#ecf0f1", // Light Gray
        "text-primary": "#2c3e50", // Dark Gray
        base: "#ecf0f1", // Light Gray
        "text-primary": "#2c3e50", // Dark Gray
      },
      fontFamily: {
        M_PLUS_2: ["var(--font-m-plus-2)"],
        Montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
