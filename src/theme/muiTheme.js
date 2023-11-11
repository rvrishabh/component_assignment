import { createTheme } from "@mui/material/styles";

export const muiTheme = (mode) =>
  createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      ...(mode
        ? {
            primary: {
              main: "#1E19F5",
              light: "rgba(30, 25, 245, 0.1)",
              dark: "rgba(30, 25, 245, 0.8)",
            },
            secondary: {
              main: "#33E4F5",
              light: "rgba(51, 228, 245, 0.1)",
              dark: "rgba(51, 228, 245, 0.8)",
            },
          }
        : {
            primary: {
              main: "#080B0C",
              light: "rgb(8,11,12, 0.1)",
              dark: "rgb(8,11,12, 0.8)",
            },
            secondary: {
              main: "#F5AE38",
              light: "rgba(245, 174, 56, 0.1)",
              dark: "rgba(245, 174, 56, 0.8)",
            },
          }),
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: mode ? "#1E19F5" : "#000",
            fontFamily: "albertSans_regular",
          },
          h1: {
            fontFamily: "albertSans_bold",
            fontSize: "40px",
          },
          h2: {
            fontFamily: "albertSans_bold",
            fontSize: "34px",
          },
          h3: {
            fontFamily: "albertSans_bold",
            fontSize: "24px",
          },
          h4: {
            fontFamily: "albertSans_semibold",
            fontSize: "24px",
          },
          h5: {
            fontFamily: "albertSans_semibold",
            fontSize: "19px",
          },
          h6: {
            fontFamily: "albertSans_semibold",
            fontSize: "16px",
          },
          subtitle1: {
            fontFamily: "albertSans_medium",
            fontSize: "20px",
          },
          subtitle2: {
            fontFamily: "albertSans_medium",
            fontSize: "16px",
          },
          body1: {
            fontSize: "16px",
            opacity: "95%",
          },
          body2: {
            fontFamily: "albertSans_regular",
            opacity: "85%",
            fontSize: "13px",
          },
          caption: {
            fontFamily: "albertSans_light",
            fontSize: "12px",
            opacity: "75%",
          },
        },
      },
    },
  });
