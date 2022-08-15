/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7611F7',
        secondary: '#58d96b',
        tertiary: '#00d1ff',
        dark: 'rgba(37, 38, 42, 1) 8%',
        'very-dark': 'rgba(9, 9, 9, 1) 100%',
        light: '#f4f4f4',
        white: '#ffffff',
        info: '#E3FEFF',
        success: '#006644',
        error: '#b92500',
        warn: '#ff8b00',
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['Oswald', 'sans-serif'],
        tertiary: ['Fredoka One', 'cursive'],
        accent: ['Rubik Dirt', 'cursive'],
      },
      backgroundImage: theme => ({
        world: "url('/src/assets/images/map-world.svg')",
      }),
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': angle => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              120: '120deg',
              135: '135deg',
              218: '218deg',
              218: '315deg',
            }
          ),
        }
      );
    }),
  ],
};
