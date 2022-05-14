import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { useAppSelector } from "./redux/hooks";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";

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
            <Container maxWidth={"md"} sx={{ minHeight: "100vh" }}>
                <Box
                    component={"main"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    minHeight={"100%"}
                    paddingTop={12}
                    paddingBottom={6}
                >
                    <React.Suspense>
                        <Switch>
                            <Route path={"/"} exact>
                                <Homepage key={"homepage"} />
                            </Route>
                            <Route path={"/details"}>
                                <Details key={"details"} />
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
