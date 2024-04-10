/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      baseWhite: "#FFFFFF",
      baseBackground: "#FAFAFA",
      baseCard: "#F3F2F2",
      baseInput: "#EDEDED",
      baseButton: "#E6E5E5",
      baseHover: "#D7D5D5",
      baseLabel: "#8D8686",
      baseText: "#574F4D",
      baseSubtitle: "#403937",
      baseTitle: "#272221",
      baseError: "#f84747",
      brandPurpleDark: "#4B2995",
      brandPurple: "#8047F8",
      brandPurpleLight: "#EBE5F9",
      brandYellowDark: "#C47F17",
      brandYellow: "#DBAC2C",
      brandYellowLight: "#F1E9C9",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      roboto: ["Roboto", "sans-serif"],
      balsamiq: ["Balsamiq Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
