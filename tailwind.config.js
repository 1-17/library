/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: "theme(colors.neutral.100)",
        dark: "theme(colors.neutral.700)",
        accent: "theme(colors.purple.500)",
        "accent-light": "theme(colors.purple.100)"
      },
      borderRadius: {
        shape: "theme(spacing.3)"
      }
    },
  },
  plugins: [],
}
