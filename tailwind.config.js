/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'hurricane': ['Hurricane', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'navDanna': '#051a24',
        'bodyDanna': '#06373A',
        'fontDanna': '#1F5F5B',
        'font2Danna': '#159947',
        'flashDanna': '#4FF57B',
      },
      gridTemplateColumns:{
        "menu": "150px 1fr 295px"
      },
      backgroundImage: {
        'banner-home': "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('https://res.cloudinary.com/dilp6xqmb/image/upload/v1701768624/Banner_home.jpg')",
        'valeur-home': "linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url('https://res.cloudinary.com/dilp6xqmb/image/upload/v1701768622/pion.jpg')",
        'banner-service': "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('https://res.cloudinary.com/dilp6xqmb/image/upload/v1701770585/banner-service.jpg')",
      },
      textShadow: {
        sm: '0 1px 2px var(0,0,0,0.2)',
        DEFAULT: '1px 1px 3px var(0,0,0,0.2)',
        lg: '0 8px 16px var(0,0,0,0.2)',
      },
      animation: {
        'slide-in': 'slideIn 0.75s forwards',
        'slide-out': 'slideOut 0.75s forwards',
        'slide-prestation-in': 'slidePrestationIn 0.75s forwards',
        'slide-prestation-out': 'slidePrestationOut 0.75s forwards',
      },
      keyframes: {
        slideIn: {
          from: {
            transform: 'translateX(20%)',
            opacity: 0,
          },
          to: {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        slideOut: {
          from: {
            transform: 'translateX(0)',
            opacity: 1,
          },
          to: {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
        },
        slidePrestationIn: {
          from: {
            transform: 'translateY(50%)',
            opacity: 0,
          },
          to: {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        slidePrestationOut: {
          from: {
            transform: 'translateX(0)',
            opacity: 1,
          },
          to: {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadowUtilities = {};

      Object.entries(theme('textShadow')).forEach(([key, value]) => {
        textShadowUtilities[`.text-shadow-${key}`] = {
          textShadow: value,
        };
      });

      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    },
  ],
}

