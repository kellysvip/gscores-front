/* istanbul ignore file */
import React from "react";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";

import "./styles.css";

export default function App({ Component, pageProps: pageProps }: AppProps) {
  const theme = createTheme({
    palette: {},
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
