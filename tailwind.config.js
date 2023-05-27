/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bgColor: 'rgba(255,255,255,.1)',
        button: 'rgba(255,255,255,.2)'
      }
    }
  },
  plugins: []
}
