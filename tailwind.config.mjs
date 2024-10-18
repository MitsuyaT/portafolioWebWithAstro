/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    borderRadius: {
      md: "1.5rem",
      lg: "3.5rem",
    },
    width: {
      48: "11.5rem",
    },
  },
  plugins: [],
};
