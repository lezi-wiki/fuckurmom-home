import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { SnackbarProvider } from "notistack";
import { createTheme, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { I18nextProvider } from "react-i18next";
import Lang from "./lang";

import "@fontsource/roboto";
import "@fontsource/noto-sans-sc";
import "@fontsource/noto-sans-hk";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const theme = createTheme();

root.render(
    <React.Suspense fallback={"Loading..."}>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles
                        styles={{
                            "& *": {
                                fontFamily:
                                    [
                                        "-apple-system",
                                        "BlinkMacSystemFont",
                                        '"Segoe UI"',
                                        '"Roboto"',
                                        '"Noto Sans SC"',
                                        '"Noto Sans HK"',
                                        '"Helvetica Neue"',
                                        "Arial",
                                        "sans-serif",
                                        '"Apple Color Emoji"',
                                        '"Segoe UI Emoji"',
                                        '"Segoe UI Symbol"',
                                    ].join(",") + "!important",
                            },
                            ":root": {
                                "--fullHeight": window.innerHeight + "px",
                                "--fullWidth": window.innerWidth + "px",
                            },
                        }}
                    />
                    <I18nextProvider i18n={Lang}>
                        <SnackbarProvider
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            autoHideDuration={2000}
                        >
                            <App />
                        </SnackbarProvider>
                    </I18nextProvider>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.Suspense>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
