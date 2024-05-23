import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#AF6E4D",
          secondary: "#3B3C36",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
        // screens: {
        //   xs: "0",
        //   sm: "220px",

        //   md: "768px",
        //   // => @media (min-width: 1024px) { ... }

        //   // => @media (min-width: 1280px) { ... }
        //   lg: "1280px",
        //   xl: "1400px",
        // },
      },
      "dark",
      "cupcake",
    ],
  },
};
export default config;
