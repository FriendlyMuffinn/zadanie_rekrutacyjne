/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0147FF',
        'dark-grayish': '#282828',
      },
      fontSize: {
        xxs: ['0.5rem', {lineHeight: '0.75rem'}],
      },
      screens: {
        xxs: '320px',
      },
      width: {
        '5vw': '5vw',
        '8vw': '8vw',
        '10vw': '10vw',
        '15vw': '15vw',
        '20vw': '20vw',
        '25vw': '25vw',
        '30vw': '30vw',
        '35vw': '35vw',
        '40vw': '40vw',
        '45vw': '45vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '75vw': '75vw',
        '80vw': '80vw',
        '1/8': '12.5%',
        '1/9': '11.11111111111111%',
        '1/9.5': '10.52631578947368%',
        '1/10': '10%', 
        '1/11': '9.090909090909091%'
      },
      height: {
        '3vh': '3vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '8vh': '8vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
      },
      fontFamily: {
        robotoC: ['Roboto Condensed', 'sans-serif']
      },
      textUnderlineOffset: {
        '12': '12px'
      }
    },
  },
  plugins: [],
}

