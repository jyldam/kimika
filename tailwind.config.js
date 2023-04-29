/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-white': '#fafafa',
        'primary-black': '#1d1d1f'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'swim-right': 'swim-right 2s linear infinite',
        jump: 'jump 500ms ease',
        'fast-swim-right': 'swim-right 1s linear infinite'
      },
      keyframes: {
        'swim-right': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
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
