export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#f3f1ef",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
    1100: '#282828'
  },
  primary: {
    50: "#94cfd9",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#0f1322",
    800: "#00353F",
    900: "#001519",
    1000: "#dabda9",
    1100: "#fe4c23"
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            dark: colorTokens.primary[200],
            main: colorTokens.primary[500],
            light: colorTokens.primary[800],
          },
          neutral: {
            dark: colorTokens.grey[100],
            main: colorTokens.grey[200],
            light: colorTokens.grey[700],
            medium: colorTokens.grey[400],
            mediumMain: colorTokens.grey[300],
          },
          background: {
            alt: colorTokens.grey[800],
            main: colorTokens.grey[1100],
            default: colorTokens.grey[900],
          },
        }
        : {
          // palette values for light mode
          primary: {
            dark: colorTokens.primary[700],
            main: colorTokens.primary[500],
            light: colorTokens.primary[50],
            alt: colorTokens.primary[1000],
            hightlight: colorTokens.primary[1100]
          },
          neutral: {
            light: colorTokens.grey[50],
            dark: colorTokens.grey[700],
            main: colorTokens.grey[500],
            medium: colorTokens.grey[300],
            mediumMain: colorTokens.grey[400],
          },
          background: {
            alt: colorTokens.grey[10],
            default: colorTokens.grey[0],
          },
        }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 125,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};