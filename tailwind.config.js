/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens:{
      'phone':"510px", 
      'sm':"640px",
      'md':"768px",
      'lg':"1024px",
    }, 
    extend: {

      colors:{
        'primary':"	#f50b86" ,
        'tb':"#00000066"
      },
      fontFamily:{
        'pops':['Poppins', 'sans-serif'],
      }
    },
    
  },
  plugins: [],
}

