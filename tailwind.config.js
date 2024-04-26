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
          '0%': { transform: 'translateY(-1000px) rotate(0)'},
          '80%': { transform: 'translateY(50px)'},
        '100%': { transform: 'translateX(1) rotate(360)'},
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
        'img-animation': 'image 4s ease 0.5s forwards',
        'left-text': 'left-text 4.5s ease 0.5s forwards',
        'right-text': 'right-text 4.5s ease 0.5s forwards',
      },
    },
  },
  plugins: [],
}
