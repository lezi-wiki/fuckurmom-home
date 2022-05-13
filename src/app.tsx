import React from "react";
import { useAppSelector } from "./redux/hooks";
import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    lighten,
    Theme,
    useMediaQuery,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Homepage from "./components/Homepage";

const App: React.FC = () => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const themeConfig = useAppSelector<Theme>((state) => state.theme);
    const theme = React.useMemo<Theme>(() => {
        return createTheme({
            ...themeConfig,
            palette: {
                ...themeConfig.palette,
                mode: prefersDarkMode || themeConfig.palette.mode === "dark" ? "dark" : "light",
                primary: {
                    ...themeConfig.palette.primary,
                    main:
                        themeConfig.palette.mode === "dark"
                            ? lighten(themeConfig.palette.primary.main, 0.3)
                            : themeConfig.palette.primary.main,
                },
            },
        });
    }, [prefersDarkMode, themeConfig]);

    const path = useRouteMatch().path;

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <CssBaseline />
            <Container maxWidth={"md"} sx={{ height: "calc(100vh - 64px)" }}>
                <Box
                    component={"main"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    height={"100%"}
                    marginTop={8}
                >
                    <React.Suspense>
                        <Switch>
                            <Route path={path + "/"} exact>
                                <Homepage />
                            </Route>
                        </Switch>
                    </React.Suspense>
                </Box>
            </Container>
            <Background />
        </ThemeProvider>
    );
};

export default App;
