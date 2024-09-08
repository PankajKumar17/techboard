/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#0a0526",
        black: "#000",
        white: "#fff",
        darkslateblue: {
          "100": "#776095",
          "200": "#3a2860",
          "300": "#312045",
          "400": "rgba(53, 35, 72, 0.68)",
          "500": "rgba(71, 33, 82, 0.75)",
          "600": "rgba(54, 26, 65, 0.44)",
        },
        mediumpurple: "#9973c8",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.46)",
          "300": "rgba(217, 217, 217, 0.13)",
        },
        whitesmoke: "#eae9e9",
        steelblue: "#7170a2",
      },
      spacing: {},
      fontFamily: {
        "josefin-sans": "'Josefin Sans'",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "6xl": "25px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      xs: "12px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "31xl": "50px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
