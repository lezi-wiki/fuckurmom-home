import React, { useEffect } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    Typography,
} from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { setTitle } from "../../redux/slices/view";
import { useTranslation } from "react-i18next";

const Details: React.FC = () => {
    const dispatch = useAppDispatch();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(setTitle("Details"));
    });

    const { t } = useTranslation("DetailContext");

    return (
        <Paper
            sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& p,ul,li": {
                    textAlign: "left",
                    width: "95%",
                },
            }}
            elevation={2}
        >
            <Typography component={"h1"} variant={"h4"} mb={1}>
                {t("Details")}
            </Typography>
            <Typography component={"p"} variant={"body1"} margin={1}>
                {t(
                    "Before you submit, you need to make sure your situation meets our requirements. We have the following requirements for submitted applications:"
                )}
            </Typography>
            <Box component={"ul"} margin={0}>
                {[
                    "You must open source the code of the applications you deploy using the subdomain under any license.",
                    "You may not monetize the applications deployed by the subdomain in any way, except for non-mandatory donations.",
                    "You are not allowed to deploy service projects such as IDC and Image Storage Service in subdomains. However, display sites such as personal blogs are allowed.",
                    "Subdomains with specific meanings such as www, ftp, blog, etc. cannot be applied for.",
                    "You need to keep your applications running for a long time. In the event of multiple service interruptions, we will cancel the resolution of your subdomain.",
                    "You must deploy your applications legally, not from your home PC.",
                ].map((text, index) => (
                    <Box component={"li"} key={index}>
                        {t(text)}
                    </Box>
                ))}
            </Box>
            <Typography component={"p"} variant={"body1"} margin={1}>
                {t("There are strict formatting requirements to follow for your application:")}
            </Typography>
            <Box component={"ul"} margin={0}>
                {[
                    "You need to point out what the idiot did, write it as best you can!",
                    "You need to identify yourself and leave your contact details so we can better communicate with you.",
                    "If authenticated, you have unlimited access to subdomains which begin with your name, which is discouraged but considered cool.",
                ].map((text, index) => (
                    <Box component={"li"} key={index}>
                        {t(text)}
                    </Box>
                ))}
            </Box>
            <Typography component={"p"} variant={"body1"} margin={1}>
                {t("The application format is as follows:")}
            </Typography>
            <Box component={"ul"} margin={0}>
                {[
                    "Your name",
                    "Your contact",
                    "Your project name",
                    "The type of subdomain you are applying for",
                    "What idiots do (detailed description)",
                    "Idiots' contact",
                ].map((text, index) => (
                    <Box component={"li"} key={index}>
                        {t(text)}
                    </Box>
                ))}
            </Box>
            <Button size={"large"} onClick={handleOpen}>
                {t("Go for apply")}
            </Button>
            <Dialog
                open={open}
                sx={{
                    "& .MuiPaper-root": {
                        width: 380,
                        maxWidth: "95vw",
                    },
                }}
            >
                <DialogTitle>{t("Confirm")}</DialogTitle>
                <DialogContent dividers>
                    {t(
                        "You will be navigated to the GitHub Issue page, be sure to state [Apply] at the beginning of the title of the Issue"
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t("Cancel")}</Button>
                    <Button
                        onClick={() => {
                            window.open(
                                "https://github.com/fuckur-mom/apply/issues/new/choose"
                            );
                            handleClose();
                        }}
                    >
                        {t("Go")}
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default Details;
