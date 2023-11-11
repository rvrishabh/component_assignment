import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "./muiTheme";

export default function MuiThemeProvider({ children, mode }) {
  return (
    <ThemeProvider theme={muiTheme(mode)}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
}
