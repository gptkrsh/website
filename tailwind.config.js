module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EFEAFA",
          100: "#DED6F5",
          200: "#BDACEC",
          300: "#9C83E2",
          400: "#7B5AD8",
          500: "#5D32CF",
          600: "#4827A5",
          700: "#361D7C",
          800: "#241353",
          900: "#120A29"
        },
        secondary: {
          50: "#FFF0F2",
          100: "#FFDBE0",
          200: "#FFB8C0",
          300: "#FE94A1",
          400: "#FE7181",
          500: "#FE4F64",
          600: "#FE0C28",
          700: "#C60118",
          800: "#840110",
          900: "#420008"
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
