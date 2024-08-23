import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './views/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '360px',
        md: '670px',
        lg: '1100px',
        '2xl': '1400px',
      },
    },

    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        main: {
          1: 'rgb(var(--main-1) / <alpha-value>)',
          2: 'rgb(var(--main-2) / <alpha-value>)',
          3: 'rgb(var(--main-3) / <alpha-value>)',
          4: 'rgb(var(--main-4) / <alpha-value>)',
          5: 'rgb(var(--main-5) / <alpha-value>)',
          6: 'rgb(var(--main-6) / <alpha-value>)',
        },
        gray: {
          100: 'rgb(var(--gray-100) / <alpha-value>)',
          90: 'rgb(var(--gray-90) / <alpha-value>)',
          80: 'rgb(var(--gray-80) / <alpha-value>)',
          70: 'rgb(var(--gray-70) / <alpha-value>)',
          60: 'rgb(var(--gray-60) / <alpha-value>)',
          50: 'rgb(var(--gray-50) / <alpha-value>)',
          40: 'rgb(var(--gray-40) / <alpha-value>)',
          30: 'rgb(var(--gray-30) / <alpha-value>)',
          20: 'rgb(var(--gray-20) / <alpha-value>)',
          10: 'rgb(var(--gray-10) / <alpha-value>)',
        },
        sub: {
          5: 'rgb(var(--sub-5) / <alpha-value>)',
          4: 'rgb(var(--sub-4) / <alpha-value>)',
          2: 'rgb(var(--sub-2) / <alpha-value>)',
          1: 'rgb(var(--sub-1) / <alpha-value>)',
        },
      },
      fontSize: {
        '3xl': '2rem',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        mulShdSpin: {
          '0%, 100%': {
            boxShadow:
              '0 -3em 0 0.2em #fff, 2em -2em 0 0em #fff, 3em 0 0 -1em #fff, 2em 2em 0 -1em #fff, 0 3em 0 -1em #fff, -2em 2em 0 -1em #fff, -3em 0 0 -1em #fff, -2em -2em 0 0 #fff',
          },
          '12.5%': {
            boxShadow:
              '0 -3em 0 0 #fff, 2em -2em 0 0.2em #fff, 3em 0 0 0 #fff, 2em 2em 0 -1em #fff, 0 3em 0 -1em #fff, -2em 2em 0 -1em #fff, -3em 0 0 -1em #fff, -2em -2em 0 -1em #fff',
          },
          '25%': {
            boxShadow:
              '0 -3em 0 -0.5em #fff, 2em -2em 0 0 #fff, 3em 0 0 0.2em #fff, 2em 2em 0 0 #fff, 0 3em 0 -1em #fff, -2em 2em 0 -1em #fff, -3em 0 0 -1em #fff, -2em -2em 0 -1em #fff',
          },
          '37.5%': {
            boxShadow:
              '0 -3em 0 -1em #fff, 2em -2em 0 -1em #fff, 3em 0 0 0 #fff, 2em 2em 0 0.2em #fff, 0 3em 0 0 #fff, -2em 2em 0 -1em #fff, -3em 0 0 -1em #fff, -2em -2em 0 -1em #fff',
          },
          '50%': {
            boxShadow:
              '0 -3em 0 -1em #fff, 2em -2em 0 -1em #fff, 3em 0 0 -1em #fff, 2em 2em 0 0 #fff, 0 3em 0 0.2em #fff, -2em 2em 0 0 #fff, -3em 0 0 -1em #fff, -2em -2em 0 -1em #fff',
          },
          '62.5%': {
            boxShadow:
              '0 -3em 0 -1em #fff, 2em -2em 0 -1em #fff, 3em 0 0 -1em #fff, 2em 2em 0 -1em #fff, 0 3em 0 0 #fff, -2em 2em 0 0.2em #fff, -3em 0 0 0 #fff, -2em -2em 0 -1em #fff',
          },
          '75%': {
            boxShadow:
              '0 -3em 0 -1em #fff, 2em -2em 0 -1em #fff, 3em 0 0 -1em #fff, 2em 2em 0 -1em #fff, 0 3em 0 -1em #fff, -2em 2em 0 0 #fff, -3em 0 0 0.2em #fff, -2em -2em 0 0 #fff',
          },
          '87.5%': {
            boxShadow:
              '0 -3em 0 0 #fff, 2em -2em 0 -1em #fff, 3em 0 0 -1em #fff, 2em 2em 0 -1em #fff, 0 3em 0 -1em #fff, -2em 2em 0 0 #fff, -3em 0 0 0 #fff, -2em -2em 0 0.2em #fff',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        mulShdSpin: 'mulShdSpin 1.3s infinite linear',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
} satisfies Config;

export default config;
