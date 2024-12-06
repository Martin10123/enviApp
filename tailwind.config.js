/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #3783ff, #889eff, #b9bcff, #dfddff, #ffffff)",
      },
      screens: {
        "md-2": "900px",
      },
    },
  },
  plugins: [],
};
