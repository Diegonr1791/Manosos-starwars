/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PlaypenSans: ["PlaypenSans", "monospace"],
        PlaypenSerif: ["'Playpen Sans'", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
