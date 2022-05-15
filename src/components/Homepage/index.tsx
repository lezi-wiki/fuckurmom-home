import React, { useEffect, useMemo } from "react";
import { Box, Button, Grid, Paper, Theme, Typography, useMediaQuery } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setTitle } from "../../redux/slices/view";
import { useTheme } from "@mui/styles";
import { useGetAllInfoQuery } from "../../service/localDataApi";
import SubDomainInfo from "../../model/subDomainInfo";

const SiteCard = React.lazy(() => import("../SiteCard"));

const Homepage: React.FC = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTitle("Home"));
    });

    const handleClickDetails = () => {
        history.push("/details");
    };

    const theme = useTheme<Theme>();
    const md = useMediaQuery(theme.breakpoints.down("md"));
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const renderNum = useMemo<number>(() => {
        if (sm) {
            return 1;
        } else if (md) {
            return 2;
        } else {
            return 3;
        }
    }, [sm, md]);

    const { data } = useGetAllInfoQuery(null);

    const randomDataList = useMemo<SubDomainInfo[]>(() => {
        let arr: SubDomainInfo[] = [];
        if (typeof data !== "undefined") {
            for (let i = 0; i < renderNum; i++) {
                arr.push(data[Math.floor(Math.random() * data.length)]);
            }
        }
        return arr;
    }, [data, renderNum]);

    return (
        <Box>
            <Paper
                sx={{
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                elevation={2}
            >
                <Typography component={"h1"} variant={"h4"} mb={1}>
                    {"Fuck Your Mom"}
                </Typography>
                <Typography component={"p"} variant={"body1"} margin={1}>
                    There is a homepage that explains what the project does, what's interesting
                    about this project, and how to get involved in this project.
                </Typography>
                <Typography component={"p"} variant={"body1"} margin={1}>
                    You can apply for the corresponding subdomain by submit an Issue, but you need
                    to clarify your identity and the reason for the application.
                </Typography>
                <Typography component={"p"} variant={"body1"} margin={1}>
                    Don't get me wrong, we have all the respect for your mother. This project gives
                    you the freedom to create by distributing subdomains to you, which may achieve
                    the bashing of idiots. We firmly believe that bashing idiots can change idiots
                    or prompt idiots to self-harm and commit suicide, thereby reducing the number of
                    idiots in the world.
                </Typography>
                <Button size={"large"} onClick={handleClickDetails}>
                    {"Go for details"}
                </Button>
            </Paper>
            <React.Suspense>
                <Grid container marginTop={2} spacing={2}>
                    {randomDataList.map((item, index) => (
                        <Grid item xs={12 / renderNum} key={index}>
                            <SiteCard domain={item.domain} />
                        </Grid>
                    ))}
                </Grid>
            </React.Suspense>
        </Box>
    );
};

export default Homepage;
