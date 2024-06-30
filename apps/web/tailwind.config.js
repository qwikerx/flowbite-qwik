import flowbitePlugin from 'flowbite/plugin'

export default {
  theme: {
    extend: {
      animation: {
        'from-left': 'slideFromLeft 0.2s 1',
        'from-right': 'slideFromRight 0.2s 1',
      },
      keyframes: {
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      colors: {
        qwik: {
          DEFAULT: '#19B5F6',
          secondary: '#AC7EF4',
        },
      },
      minWidth: {
        'screen-lg': '1024px',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', 'node_modules/flowbite-qwik/**/*.{cjs,mjs}'],
  plugins: [flowbitePlugin],
}
