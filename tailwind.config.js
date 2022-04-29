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
        crimson:"crimson",
        lightDark: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
