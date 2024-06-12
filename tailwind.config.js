/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /h-+/,
    },
    {
      pattern: /w-+/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
