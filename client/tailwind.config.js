/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#10B981',
        'secondary-green': '#6EE7B7',
        'light-blue': '#BFDBFE',
        'dark-blue': '#1E3A8A',
        'gray-dark': '#4B5563',
        'gray-light': '#F3F4F6',
      },
    },
  },
  plugins: [],
}

