module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "black-bg": "#060a11",
        "dim-white": "#f0f0f0",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
