module.exports = {
  content: ["./templates/**/*.html"],
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
        crimson:"hsl(348, 83%, 47%)",
        lightDark: "hsl(0, 0%, 10%)",
        darkCrimson: "hsl(348, 93%, 24%)",
      },
    },
  },
  plugins: [],
};
