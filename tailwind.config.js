module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#a78bfa',
        'glass': 'rgba(30, 41, 59, 0.7)',
        'glass-light': 'rgba(51, 65, 85, 0.5)',
        'glass-border': 'rgba(148, 163, 184, 0.2)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 16px 2px #a78bfa',
      },
    },
  },
  plugins: [],
}; 