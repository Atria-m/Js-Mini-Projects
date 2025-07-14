/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightbg: '#F7F9FC',
        lightsurface: '#FFFFFF',
        lighttext: '#1F2937',
        primaryLight: '#2563EB',          // رنگ اصلی دکمه تم روشن (آبی)
        primaryLightHover: '#1D4ED8',     // هاور آبی تیره‌تر

        darkbg: '#1E293B',
        darksurface: '#334155',
        accent: '#06B6D4',                // رنگ اصلی دارک مود (آبی آسمانی)
      },
    },
    screens: {
      mobile: "360px",
      desktop: "1000px",
    },
  },
  plugins: [],
};
