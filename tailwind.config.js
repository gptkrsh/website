module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "brand": {
          "50": "#F8F1FD",
          "100": "#F0E4FC",
          "200": "#DFC4F8",
          "300": "#D0A8F5",
          "400": "#C18DF2",
          "500": "#B06EEE",
          "600": "#8F32E7",
          "700": "#6B16BB",
          "800": "#470E7B",
          "900": "#250740"
        },
        "secondary": {
          "50": "#E9EAF6",
          "100": "#D4D4ED",
          "200": "#A8A9DB",
          "300": "#8182CB",
          "400": "#5557B9",
          "500": "#3D3F94",
          "600": "#313277",
          "700": "#25265A",
          "800": "#18183A",
          "900": "#0C0C1D"
        },
        "tertiary": {
          "50": "#FEFBFC",
          "100": "#FEF6FA",
          "200": "#FBE9F2",
          "300": "#FAE0ED",
          "400": "#F9D7E7",
          "500": "#F7CDE1",
          "600": "#EB80B3",
          "700": "#DE3084",
          "800": "#9A1957",
          "900": "#4F0D2D"
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        display: [
          'Averta Std',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      }
    },
  },
  plugins: [],
}
