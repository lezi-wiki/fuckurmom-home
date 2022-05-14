import React, { useEffect } from "react";
import { Button, Paper, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setTitle } from "../../redux/slices/view";

const Details: React.FC = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTitle("Details"));
    });

    const handleClickDetails = () => {
        history.push("/datails");
    };

    return (
        <Paper
            sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& p": {
                    textAlign: "left",
                    width: "95%",
                },
            }}
            elevation={2}
        >
            <Typography component={"h1"} variant={"h4"} mb={1}>
                {"Details"}
            </Typography>
            <Typography component={"p"} variant={"body1"} margin={1}>
                Before you submit, you need to make sure your situation meets our requirements. We
                have the following requirements for submitted applications:
                <ul>
                    <li>
                        You must open source the code of the applications you deploy using the
                        subdomain under any license.
                    </li>
                    <li>
                        You may not monetize the applications deployed by the subdomain in any way,
                        except for non-mandatory donations.
                    </li>
                    <li>
                        You are not allowed to deploy service projects such as IDC and Image Storage
                        Service in subdomains. However, display sites such as personal blogs are
                        allowed.
                    </li>
                    <li>
                        Subdomains with specific meanings such as www, ftp, blog, etc. cannot be
                        applied for.
                    </li>
                    <li>
                        You need to keep your applications running for a long time. In the event of
                        multiple service interruptions, we will cancel the resolution of your
                        subdomain.
                    </li>
                    <li>You must deploy your applications legally, not from your home PC.</li>
                </ul>
            </Typography>
            <Typography component={"p"} variant={"body1"} margin={1}>
                There are strict formatting requirements to follow for your application:
                <ul>
                    <li>You need to point out what the idiot did, write it as best you can!</li>
                    <li>
                        You need to identify yourself and leave your contact details so we can
                        better communicate with you.
                    </li>
                    <li>
                        If authenticated, you have unlimited access to subdomains which begin with
                        your name, which is discouraged but considered cool.
                    </li>
                </ul>
            </Typography>
            <Typography component={"p"} variant={"body1"} margin={1}>
                The application format is as follows:
                <ul>
                    <li>Your name</li>
                    <li>Your contact</li>
                    <li>What idiots do (detailed description)</li>
                    <li>Idiots' contact</li>
                </ul>
            </Typography>
            <Button size={"large"} onClick={handleClickDetails}>
                {"Go for apply"}
            </Button>
        </Paper>
    );
};

export default Details;
