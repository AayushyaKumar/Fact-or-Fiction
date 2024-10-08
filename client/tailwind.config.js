/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        // customOne: ['CustomFontOne', 'Playwrite België Vlaams Gewest'],
        customTwo: ['CustomFontTwo', 'DancingScript-Regular']
    }},
    
  },
  plugins: [],


}

