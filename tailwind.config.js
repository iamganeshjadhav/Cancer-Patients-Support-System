/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'smooth-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'bg-color-change': {
          '0%':   { backgroundColor: '#F5F5F5' },
          '25%':  { backgroundColor: '#E8DFF2' }, 
          '50%':  { backgroundColor: '#D1E8E2' }, 
          '75%':  { backgroundColor: '#F0E1D6' }, 
          '100%': { backgroundColor: '#F5F5F5' },
        },
        'text-color-change': {
          '0%, 100%': { color: '#670D2F' },   
          '25%': { color: '#A53860' },       
          '50%': { color: '#3E0703' },        
          '75%': { color: '#0A400C' },        
        },
      },
      animation: {
        'bounce-slow': 'smooth-bounce 3s ease-in-out infinite',
        'bounce-medium': 'smooth-bounce 2s ease-in-out infinite',
        'bounce-fast': 'smooth-bounce 1s ease-in-out infinite',
        'bg-smooth': 'bg-color-change 6s ease-in-out infinite alternate',
        'text-color-smooth': 'text-color-change 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: []
}
