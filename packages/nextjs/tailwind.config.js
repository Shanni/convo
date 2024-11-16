/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFE05F",
          "primary-content": "#212638",
          secondary: "#0090FF",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#212638",
          "neutral-content": "#ffffff",
          "base-100": "#0090FF",
          "base-200": "#0090FF",
          "base-300": "rgb(37, 99, 235)",
          "base-content": "#FFFFFF",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          "primary": "#FFC1C1",           // Pastel Pink
          "primary-content": "#000000",   // Black for better contrast
          "secondary": "#FFD59E",         // Pastel Yellow
          "secondary-content": "#000000", // Black for better contrast
          "accent": "#F4A4A4",            // Soft Coral Pink
          "accent-content": "#000000",    // Black for better contrast
          "neutral": "#FFF8E1",           // Warm Pastel Cream
          "neutral-content": "#000000",   // Black for better contrast
          "base-100": "#FFD1DC",          // Light Pastel Pink
          "base-200": "#FFE6CC",          // Light Peach Pastel
          "base-300": "#FFF3E0",          // Light Cream
          "base-content": "#000000",      // Black for better contrast
          "info": "#FFD3C8",              // Light Pastel Orange
          "success": "#D7F9C2",           // Light Pastel Green
          "warning": "#FFF5BA",           // Soft Pastel Yellow
          "error": "#FF9AA2",
          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
        "custom-black-box": "5px 5px 5px 5px black",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
