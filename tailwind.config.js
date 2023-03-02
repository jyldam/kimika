/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'swim-right': 'swim-right 2s linear infinite',
        jump: 'jump 500ms ease',
      },
      keyframes: {
        'swim-right': {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(5px)',
          },
        },
        jump: {
          from: {
            transform: 'translateY(100%) scale(0.5)',
          },
          '60%': {
            transform: 'translateY(-10%) scale(1.1)',
          },
          to: {
            transform: 'translateY(0) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
