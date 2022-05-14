import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Homepage from "./components/Homepage";

const App: React.FC = () => {
    const path = useRouteMatch().path;

    return (
        <React.Fragment>
            <Navbar />
            <CssBaseline />
            <Container maxWidth={"md"} sx={{ height: "100vh" }}>
                <Box
                    component={"main"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    height={"100%"}
                    paddingTop={12}
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
        </React.Fragment>
    );
};

export default App;
