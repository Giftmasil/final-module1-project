/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./js/*.js"],
  theme: {
    extend: {
      keyframes: {
        'open-menu': {
        '0%': { transform: 'scaleY(0)'},
        '80%': { transform: 'scaleY(1.2)'},
        '100%': { transform: 'scaleY(1)'},
        },
        'image': {
          '0%': { transform: 'translateX(0) rotate(0)'},
          '33%': { transform: 'translateX(-100px) rotate(360deg)'},
          '66%': { transform: 'translateX(100px) rotate(-360deg)'},
        '100%': { transform: 'translateX(0) rotate(0)'},
        },
        'left-text': {
          '0%': { transform: 'translateX(-1000px)'},
          '80%': { transform: 'translateX(1.2)'},
          '100%': { transform: 'translateX(0)'},
        },
        'right-text': {
          '0%': { transform: 'translateX(1000px)'},
          '80%': { transform: 'translateX(-1.2)'},
          '100%': { transform: 'translateX(0)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'img-animation': 'image 5s ease 0.5s forwards',
        'left-text': 'left-text 4.5s ease 0.5s forwards',
        'right-text': 'right-text 4.5s ease 0.5s forwards',
      },
    },
  },
  plugins: [],
}
