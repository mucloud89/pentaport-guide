/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fest: {
          bg: '#f5f5ff',
          card: '#ffffff',
          border: '#e0ddf5',
          muted: '#eeecfb',
          purple: '#7c3aed',
          'purple-dim': '#ede9fe',
          pink: '#db2777',
          yellow: '#d97706',
          cyan: '#0369a1',
          green: '#16a34a',
          lime: '#4d7c0f',
          red: '#dc2626',
          orange: '#c2410c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
