import { Config } from 'tailwindcss';

const tailwindConfig = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins", "sans serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

export default tailwindConfig;
