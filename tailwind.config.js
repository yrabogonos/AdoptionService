/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
       thOrange: '#FF8B44',
      },
      fontSize: {
        'bannerTitle': '60px', 
        'base': '18px',
        
      },
      backgroundImage: {
        'vector': "url('/src/assets/img/Vector.png')",
  
      },
      spacing: {
        'base': '10rem',   
       
      },
    },
  },
  plugins: [],
}

