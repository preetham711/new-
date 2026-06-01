/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#3B82F6',
        background: '#000000',
        lightBg: '#1A1A1A',
        text: '#FFFFFF',
        textSecondary: '#A0A0A0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-bottom))',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'soft-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
