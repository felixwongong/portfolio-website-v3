/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./utils/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["sunset", "garden"],
  },
  theme: {
    extend: {
      // colors: {
      //   primary: "#FBE8A6",
      //   secondary: "#F4976C",
      //   light: "#FEF3C7",
      //   dark: "#303C6C",
      //   blue: "#D2FDFF",
      //   deepblue: "#B4DFE5",
      //
      //   darklight: "#FAFAFA",
      //   darkPrimary: "#94949C",
      //   darkSecondary: "#767C7C",
      //   darkDark: "#2C3036",
      //   lightOrange: "#EB8872",
      //   orange: "#D84E4B",
      // },
      fontFamily: {
        rain: ["rain"],
        bungee: ["bungee"],
      },
      cursor: {
        key: "url(./dist/cur/key.svg), pointer",
      },
      container: {
        center: true,
        padding: "0 3.5rem",
      },
      backgroundImage: {
        coffee: "url('/dist/img/coffee.gif')",
      },
    },
  },

  darkMode: "class", // or 'media' or 'class'
};
