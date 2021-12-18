const customColors = {
  "primary-default": "#FA79B0",
  "primary-dark": "#F658A6",
  "secondary-default": "#FAB24C",
  "secondary-dark": "#f7a128",
  surface: "#141414",
  "surface-darker": "#333333",
  "surface-light": "#3F3F3F",
  "on-surface": "#FFFFFF",
  "on-surface-dark": "#999999",
  label: "#9CA3AF",
};

const customFonts = {
  "spoqa-han-sans-neo": ["Spoqa Han Sans Neo", "sans-serif"],
};

const customFontSize = {
  xs: ".75rem",
  sm: ".875rem",
  tiny: ".875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "2.5xl": "1.625rem",
  "3xl": "1.875rem",
  "3.5xl": "2rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
  "7xl": "5rem",
  "8xl": "6rem",
};
const customSpacing = {
  0.25: "0.0625rem",
  0.75: "0.1875rem",
  4.5: "1.125rem",
  6.5: "1.75rem",
  9.5: "2.375rem",
  12.5: "3.125rem",
  13: "3.25rem",
  13.5: "3.5rem",
  15: "3.75rem",
  18: "4.5rem",
  19: "4.75rem",
  21: "5.25rem",
  25: "6.25rem",
  30: "7.5rem",
  31: "7.75rem",
  38: "9.5rem",
  50: "12.5rem",
  52.5: "13.5rem",
  90: "22.5rem",
  92.5: "23.125rem",
  100: "25rem",
  110: "27.5rem",
  114: "28.5rem",
  116: "29rem",
  120: "30rem",
  132: "33rem",
  136: "34rem",
  150: "37rem",
  200: "50rem",
};

const customScreens = {
  sm: "640px",
  // => @media (min-width: 640px) { ... }

  md: "768px",
  // => @media (min-width: 768px) { ... }

  lg: "1024px",
  // => @media (min-width: 1024px) { ... }

  xl: "1280px",
  // => @media (min-width: 1280px) { ... }

  "2xl": "1536px",
  // => @media (min-width: 1536px) { ... }

  "3xl": "1920px",
  // => @media (min-width: 1920px) { ... }
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: customColors,
      fontFamily: customFonts,
      fontSize: customFontSize,
      screens: customScreens,
      spacing: customSpacing,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
