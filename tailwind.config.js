/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Clients : "rgba(176, 111, 49, 0.5)",
        Services : "rgba(176, 111, 49, 0.6)"
      },
      fontFamily: {
        Visby : ['Visby Bold'],
        Rvisby : ['Visby Regular'],
        Mvisby: ['Visby Medium'],
        Exo : ["Exo 2"],
        DMsans : ["DM Sans"],
        Urdu : ["Noto Nastaliq Urdu"]
      },
      backgroundImage: {
        'cardImg' : "url('/public/Images/HomePage/digital_pakistan_banner.jpg')",
        'cardImg2' : "url('/public/Images/HomePage/social_media_networks_pakistan.jpg')",
        'skyline' : "url('/public/Images/ContactPage/Karachi_Skyline.jpg')",
        'Iskyline': "url('/public/Images/ServicesPage/Islamabad-skyline.jpg')",
      },

      transform: {
        'rotate-y-180': "rotateY(180deg)",
      },
    },
  },
  plugins: [],
}

