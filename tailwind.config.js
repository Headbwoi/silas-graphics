module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      mono: ["'Space Mono'", "monospace"],
    },
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        dark: "hsl(217, 28%, 15%)",
        veryDark: "hsl(216, 53%, 9%)",
        lightDark: "hsl(218, 28%, 13%)",
        veryLightDark: "hsl(219, 30%, 18%)",
        crimson:"crimson",
      },
    },
  },
  plugins: [],
};
