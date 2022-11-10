/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontSize: {
      sm: ['8px', '16px'],
      base: ['14px', '22px'],
      cilik: ['14px', '22px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    screens: {
      'sm': {'min': '640px',},
      'md': {'min': '768px', },
      'lg': {'min': '1024px',},
      'xl': {'min': '1280px'},
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]

}

