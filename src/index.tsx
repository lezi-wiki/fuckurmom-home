import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const theme = createTheme();

root.render(
    <React.Suspense fallback={"Loading..."}>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
