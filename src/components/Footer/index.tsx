import React, { useMemo } from "react";
import { Box, Fab } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useSnackbar } from "notistack";

const Footer: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();

    const isServiceWorkerRegistered = useMemo(() => {
        if (!("serviceWorker" in navigator)) {
            return false;
        }
        return (
            navigator.serviceWorker.controller !== null &&
            navigator.serviceWorker.controller.state === "activated"
        );
    }, [navigator.serviceWorker]);

    const handleRefresh = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isServiceWorkerRegistered) {
            enqueueSnackbar("Service worker did not registered.", {
                variant: "error",
            });
            return;
        }
        navigator.serviceWorker.ready
            .then((registration) => {
                registration
                    .update()
                    .then(() => {
                        enqueueSnackbar("Updated success.", {
                            variant: "success",
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                        enqueueSnackbar("Updated failed.", {
                            variant: "error",
                        });
                    });
            })
            .catch((err) => {
                console.error(err);
                enqueueSnackbar("Updated failed.", {
                    variant: "error",
                });
            });
    };

    return (
        <Box component={"footer"}>
            <Fab
                size="medium"
                color="primary"
                sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    display: !isServiceWorkerRegistered ? "none" : undefined,
                }}
                onClick={handleRefresh}
            >
                <RefreshIcon />
            </Fab>
        </Box>
    );
};

export default Footer;
