module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      vsm: { max: "570px" },

      sm: { min: "571px", max: "868px" },

      md: { min: "869px", max: "1023px" },

      lg: { min: "1024px", max: "1279px" },

      xl: { min: "1280px", max: "1535px" },

      "2xl": { min: "1536px" },
    },

    extend: {
      colors: {
        darkEle: "hsl(209, 23%, 22%)",
        darkBg: "hsl(207, 26%, 17%)",
        lightText: "hsl(200, 15%, 8%)",
        lightInput: "hsl(0, 0%, 52%)",
        lightBg: "hsl(0, 0%, 98%)",
      },

      fontWeight: {
        light: 300,
        semibold: 600,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
