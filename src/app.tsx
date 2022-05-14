import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { useAppSelector } from "./redux/hooks";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import NoMatch from "./components/NoMatch";

const Homepage = React.lazy(() => import("./components/Homepage"));
const Details = React.lazy(() => import("./components/Details"));

const App: React.FC = () => {
    window.document.title = useAppSelector((state) =>
        state.view.title !== null ? state.view.title + " - Fuck Your Mom" : "Fuck Your Mom"
    );

    return (
        <React.Fragment>
            <Navbar />
            <CssBaseline />
            <Container
                maxWidth={"md"}
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Box
                    component={"main"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    height={"100%"}
                    paddingTop={12}
                    paddingBottom={6}
                >
                    <React.Suspense>
                        <Switch>
                            <Route path={"/"} exact>
                                <Homepage />
                            </Route>
                            <Route path={"/details"}>
                                <Details />
                            </Route>
                            <Route path={"*"}>
                                <NoMatch />
                            </Route>
                        </Switch>
                    </React.Suspense>
                </Box>
            </Container>
            <Background />
        </React.Fragment>
    );
};

export default App;
